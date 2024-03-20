/* (c) Copyright Frontify Ltd., all rights reserved. */

import { CheckboxState } from '@components/Checkbox/Checkbox';
import { Checklist, ChecklistDirection } from '@components/Checklist/Checklist';
import { Tag, TagSize, TagType } from '@components/Tag';
import { Trigger, TriggerEmphasis } from '@components/Trigger';
import { DEFAULT_DROPDOWN_MAX_HEIGHT, useDropdownAutoHeight } from '@hooks/useDropdownAutoHeight';
import { useButton } from '@react-aria/button';
import { FocusScope, useFocusRing } from '@react-aria/focus';
import { Text } from '@typography/Text';
import { EnablePortalWrapper } from '@utilities/dialogs/EnablePortalWrapper';
import { merge } from '@utilities/merge';
import { Validation } from '@utilities/validation';
import { ChangeEvent, KeyboardEvent, ReactElement, ReactNode, useEffect, useId, useRef, useState } from 'react';
import { usePopper } from 'react-popper';
import { getPaddingClasses, useClickOutside } from './helpers';

export enum MultiSelectType {
    Default = 'Default',
    Summarized = 'Summarized',
}

export enum MultiSelectSize {
    Small = 'Small',
    Medium = 'Medium',
}

export type MultiSelectItem = {
    value: string;
    isCategory?: boolean;
    isDivider?: boolean;
    avatar?: ReactNode;
    imgSrc?: string;
    ariaLabel?: string;
};

type MultiSelectFilter =
    | {
          enabled: true;
          label?: string;
      }
    | {
          enabled: false;
          label?: never;
      };

export type MultiSelectProps = {
    items: MultiSelectItem[];
    activeItemKeys: (string | number)[];
    disabled?: boolean;
    onSelectionChange: (keys: (string | number)[]) => void;
    ariaLabel?: string;
    label?: string;
    placeholder?: string;
    type?: MultiSelectType;
    size?: MultiSelectSize;
    validation?: Validation;
    summarizedLabel?: string;
    indeterminateItemKeys?: (string | number)[];
    flip?: boolean;
    emphasis?: TriggerEmphasis;
    enablePortal?: boolean;
    filter?: MultiSelectFilter;
};

export type Item = {
    label: string;
    value: string;
    avatar?: ReactNode;
    isCategory?: boolean;
    isDivider?: boolean;
    imgSrc?: string;
    ariaLabel?: string;
};

export const MultiSelect = ({
    items,
    activeItemKeys,
    onSelectionChange,
    ariaLabel = 'Select list',
    disabled = false,
    placeholder,
    label,
    type = MultiSelectType.Default,
    size = MultiSelectSize.Medium,
    validation = Validation.Default,
    summarizedLabel: summarizedLabelFromProps,
    indeterminateItemKeys,
    flip = false,
    emphasis = TriggerEmphasis.Default,
    enablePortal = true,
    filter = {
        enabled: false,
    },
}: MultiSelectProps): ReactElement => {
    const [open, setOpen] = useState(false);
    const [checkboxes, setCheckboxes] = useState<Item[]>([]);
    const multiSelectRef = useRef<HTMLDivElement | null>(null);

    const [multiSelectMenuRef, setMultiSelectMenuRef] = useState<null | HTMLDivElement>(null);
    const [triggerRef, setTriggerRef] = useState<HTMLDivElement | null>(null);

    const filterInputRef = useRef<HTMLInputElement | null>(null);
    const { isFocusVisible, focusProps } = useFocusRing();

    const { maxHeight } = useDropdownAutoHeight({ current: triggerRef }, { isOpen: open, autoResize: true });

    const hasSelectedItems = activeItemKeys.length > 0;
    const summarizedLabel = summarizedLabelFromProps ?? [activeItemKeys.length, 'selected'].join(' ');

    const handleClose = () => setOpen(false);

    useClickOutside(null, handleClose, [multiSelectRef?.current as HTMLElement, multiSelectMenuRef as HTMLElement]);

    const heightIsReady = maxHeight !== DEFAULT_DROPDOWN_MAX_HEIGHT;

    const muliSelectContentId = useId();

    const toggleOpen = () => setOpen((open) => !open);

    const { buttonProps } = useButton(
        {
            onPress: toggleOpen,
            onKeyDown: (e) => {
                if (e.key === 'Escape') {
                    setOpen(false);
                }
            },
            elementType: 'div',
        },
        { current: triggerRef },
    );

    const toggleSelection = (key: string | number) => {
        const keySet = new Set(activeItemKeys);

        if (keySet.has(key)) {
            keySet.delete(key);
        } else {
            keySet.add(key);
        }

        onSelectionChange(Array.from(keySet));
    };

    const handleSpacebarToggle = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.code === 'Space' && document.activeElement !== filterInputRef.current) {
            toggleOpen();
        }
    };

    const getTagType = () => {
        if (!open) {
            return TagType.Selected;
        }
        return TagType.SelectedWithFocus;
    };

    const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCheckboxes(
            items.reduce((acc: Item[], item) => {
                if (
                    item.isCategory ||
                    item.isDivider ||
                    item.value.toLowerCase().includes(event.currentTarget.value.toLowerCase())
                ) {
                    if (indeterminateItemKeys?.includes(item.value)) {
                        return [...acc, { ...item, label: item.value, state: CheckboxState.Mixed }];
                    }

                    return [...acc, { ...item, label: item.value }];
                }
                return acc;
            }, []),
        );
    };

    useEffect(() => {
        setMultiSelectMenuRef(multiSelectRef?.current as HTMLDivElement);
    }, []);

    useEffect(() => {
        setCheckboxes(
            items.map((item) => {
                const checkboxBaseItem = { ...item, label: item.value };
                if (indeterminateItemKeys?.includes(item.value)) {
                    return { ...checkboxBaseItem, state: CheckboxState.Mixed };
                }
                return checkboxBaseItem;
            }),
        );
    }, [items, indeterminateItemKeys]);

    const popperInstance = usePopper(triggerRef, multiSelectMenuRef, {
        placement: 'bottom-start',
        strategy: 'fixed',
        modifiers: [
            {
                name: 'offset',
                options: {
                    offset: [0, 8],
                },
            },
            {
                name: 'flip',
                enabled: flip,
            },
        ],
    });

    useEffect(() => {
        const updatePopper = async () => {
            if (popperInstance.update) {
                await popperInstance.update();
            }
        };

        updatePopper().catch(console.error);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeItemKeys]);

    return (
        <div className="tw-relative" ref={multiSelectRef}>
            <Trigger
                disabled={disabled}
                buttonProps={buttonProps}
                isFocusVisible={isFocusVisible}
                isOpen={open}
                validation={validation}
                emphasis={emphasis}
            >
                <div className={merge(['tw-flex tw-flex-1 tw-gap-2', getPaddingClasses(size)])} ref={setTriggerRef}>
                    <div
                        className="tw-flex tw-flex-1 tw-gap-2 focus:tw-outline-0"
                        onClick={(e) => {
                            if (e.target === filterInputRef.current && open) {
                                return;
                            }
                            toggleOpen();
                        }}
                        role="combobox"
                        aria-expanded={open}
                        aria-controls={muliSelectContentId}
                        aria-label={ariaLabel}
                        {...focusProps}
                        tabIndex={0}
                        onKeyDown={handleSpacebarToggle}
                    >
                        <div className="tw-flex tw-flex-wrap tw-gap-2 tw-outline-none tw-items-center tw-min-h-[28px]">
                            {label && hasSelectedItems && <Text weight="strong">{label}</Text>}
                            {type === MultiSelectType.Default &&
                                activeItemKeys.map((key) => (
                                    <Tag
                                        key={key}
                                        type={getTagType()}
                                        label={key.toString()}
                                        size={size === MultiSelectSize.Small ? TagSize.Small : TagSize.Medium}
                                        onClick={disabled ? undefined : () => toggleSelection(key)}
                                    />
                                ))}

                            {type === MultiSelectType.Summarized && (hasSelectedItems || summarizedLabelFromProps) && (
                                <Tag
                                    type={getTagType()}
                                    label={summarizedLabel}
                                    size={size === MultiSelectSize.Small ? TagSize.Small : TagSize.Medium}
                                    onClick={
                                        indeterminateItemKeys?.length === 0 ? () => onSelectionChange([]) : undefined
                                    }
                                />
                            )}

                            {activeItemKeys.length === 0 && placeholder && <Text color="weak">{placeholder}</Text>}

                            {filter.enabled && (
                                <input
                                    data-test-id="filter-input"
                                    ref={filterInputRef}
                                    className="tw-outline-none tw-bg-transparent tw-placeholder-black-60 tw-text-s"
                                    placeholder={filter.label}
                                    onChange={handleFilterChange}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </Trigger>

            {open && heightIsReady && (
                <EnablePortalWrapper enablePortal={enablePortal}>
                    <div
                        id={muliSelectContentId}
                        ref={setMultiSelectMenuRef}
                        className="tw-absolute tw-left-0 tw-w-full tw-overflow-hidden tw-p-0 tw-shadow-mid tw-list-none tw-m-0 tw-mt-2 tw-z-[120000] tw-bg-base tw-min-w-[18rem]"
                        key="content"
                        style={{
                            ...popperInstance.styles.popper,
                            width: triggerRef?.getBoundingClientRect().width,
                        }}
                        {...popperInstance.attributes.popper}
                    >
                        <FocusScope restoreFocus>
                            <div
                                className="tw-p-4 tw-overflow-y-auto tw-overflow-x-hidden tw-w-full tw-relative"
                                style={{ maxHeight }}
                            >
                                <Checklist
                                    activeValues={activeItemKeys.map((key) => key.toString())}
                                    setActiveValues={onSelectionChange}
                                    checkboxes={checkboxes.filter((item) => !item.isDivider && !item.isCategory)}
                                    direction={ChecklistDirection.Vertical}
                                    ariaLabel={ariaLabel}
                                />
                            </div>
                        </FocusScope>
                    </div>
                </EnablePortalWrapper>
            )}
        </div>
    );
};
MultiSelect.displayName = 'FondueMultiSelect';
