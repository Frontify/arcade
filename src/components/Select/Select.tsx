/* (c) Copyright Frontify Ltd., all rights reserved. */

import { SelectItemProps } from '@components/SelectItem/SelectItem';
import { IconCaretDown16, IconCaretUp16 } from '@foundation/Icon';
import { childrenToArray, itemToString } from '@hooks/useDownshift';
import { FOCUS_STYLE_NO_OFFSET } from '@utilities/focusStyle';
import { merge } from '@utilities/merge';
import { useForwardedRef } from '@utilities/useForwardedRef';
import { Validation, validationClassMap, validationTextClassMap } from '@utilities/validation';
import { UseSelectPropGetters, useSelect } from 'downshift';
import { FocusEvent, ReactElement, cloneElement, createContext, useCallback, useEffect, useRef, useState } from 'react';
import { InputBaseProps } from 'src/types/input';

export type SelectContextProps = {
    highlightedIndex: number;
    getMenuProps?: UseSelectPropGetters<SelectItemProps>['getMenuProps'];
    getItemProps?: UseSelectPropGetters<SelectItemProps>['getItemProps'];
    selectedItem?: SelectItemProps;
    itemsArray: SelectItemProps[];
    parentWidth?: number;
};

export const SelectContext = createContext<SelectContextProps>({
    highlightedIndex: -1,
    itemsArray: [],
});

export type SelectProps = {
    children: ReactElement | ReactElement[];
    defaultItem?: SelectItemProps;
    disabled?: boolean;
    listPlaceholder?: string;
    initialIsOpen?: boolean;
    onChange?: (value: SelectItemProps) => void;
    onFocus?: (event: FocusEvent<HTMLInputElement, Element>) => void;
    onBlur?: (event: FocusEvent<HTMLInputElement, Element>) => void;
} & Omit<InputBaseProps<string>, 'autocomplete' | 'clearable' | 'decorator' | 'suffix'>;

const GetSelectedText = ({ placeholder, item }: { placeholder: string; item?: SelectItemProps }) => {
    if (item) {
        const { title, value, decorator } = item;
        return (
            <span className="tw-flex tw-justify-start tw-items-center tw-px-1">
                {decorator ? <span className="tw-text-text-weak tw-pr-1">{decorator}</span> : null}
                <span className="tw-text-text-weak">{title ?? value}</span>
            </span>
        );
    }
    return <span className="tw-text-text-weak">{placeholder}</span>;
};

export const Select = ({
    children,
    defaultItem,
    disabled = false,
    initialIsOpen = false,
    listPlaceholder = 'Select a option',
    status = Validation.Default,
    onChange,
    'data-test-id': dataTestId = 'fondue-select',
}: SelectProps) => {
    const toggleElementsRef = useForwardedRef<HTMLDivElement | null>(null);
    const childrenArrayRef = useRef<SelectItemProps[]>(childrenToArray(children));
    const [selectedItem, setSelectedItem] = useState<SelectItemProps | undefined>(defaultItem ?? undefined);
    const [isToggleButtonFocused, setIsToggleButtonFocused] = useState<boolean>(false);

    const isMultipleGroups = Array.isArray(children);

    const handleOnChange = useCallback(
        (newSelectedItem?: SelectItemProps | null) => {
            setSelectedItem(newSelectedItem ?? defaultItem);
        },
        [defaultItem],
    );

    const { isOpen, highlightedIndex, getToggleButtonProps, getMenuProps, getItemProps } = useSelect<SelectItemProps>({
        items: childrenArrayRef.current,
        itemToString: itemToString<SelectItemProps>,
        selectedItem,
        onSelectedItemChange: ({ selectedItem: newSelectItem }) => {
            newSelectItem?.disabled ? null : handleOnChange(newSelectItem);
        },
        isItemDisabled: (item) => !!item.disabled,
        initialSelectedItem: defaultItem,
        initialIsOpen,
    });

    const renderChildren = useCallback(() => {
        const allElements = [];
        if (isMultipleGroups) {
            for (const child of children) {
                allElements.push(
                    cloneElement(child, {
                        key: child.props.id,
                    }),
                );
            }
        } else {
            allElements.push(
                cloneElement(children, {
                    key: children.props.id,
                }),
            );
        }
        return allElements;
    }, [children, isMultipleGroups]);

    useEffect(() => {
        if (selectedItem) {
            onChange?.(selectedItem.value);
        }
    }, [selectedItem, onChange]);

    return (
        <SelectContext.Provider
            value={{
                highlightedIndex,
                getMenuProps,
                getItemProps,
                selectedItem,
                itemsArray: childrenArrayRef.current,
                parentWidth: toggleElementsRef.current?.clientWidth,
            }}
        >
            <div
                className={merge([
                    'tw-p-2 tw-bg-base tw-flex tw-justify-between tw-cursor-pointer tw-border tw-rounded tw-border-line-strong tw-text-text-weak',
                    isToggleButtonFocused && FOCUS_STYLE_NO_OFFSET,
                    status === Validation.Default
                        ? ''
                        : `${validationClassMap[status]} ${validationTextClassMap[status]}`,
                ])}
                {...getToggleButtonProps({ disabled, ref: toggleElementsRef })}
                onFocus={() => setIsToggleButtonFocused(true)}
                onBlur={() => setIsToggleButtonFocused(false)}
                aria-label="Select Toggle Button"
                data-test-id={dataTestId}
            >
                <GetSelectedText item={selectedItem} placeholder={listPlaceholder} />
                <span className="tw-p-1">{isOpen ? <IconCaretUp16 /> : <IconCaretDown16 />}</span>
            </div>
            {isOpen && (
                <div
                    className={'tw-w-full tw-absolute tw-bg-base tw-mt-1 tw-shadow-md tw-h-auto tw-p-0 tw-z-10'}
                    style={{ width: `${toggleElementsRef.current?.clientWidth}px` }}
                >
                    {renderChildren()}
                </div>
            )}
        </SelectContext.Provider>
    );
};
Select.displayName = 'FondueSelect';
