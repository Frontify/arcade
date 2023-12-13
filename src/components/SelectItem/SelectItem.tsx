/* (c) Copyright Frontify Ltd., all rights reserved. */

import type { ReactElement } from 'react';
import type { SelectContextProps } from '@components/Select/Select';
import { merge } from '@utilities/merge';
import { SelectContext } from '@components/Select/Select';
import { useContext, useMemo, useRef } from 'react';
import { FOCUS_STYLE_INSET_NO_OFFSET } from '@utilities/focusStyle';
import { Checkmark } from '@utilities/input';

export type SelectItemProps = {
    id: string;
    value: string;
    decorator?: ReactElement;
    disabled?: boolean;
    title?: string;
    children?: string;
    'data-test-id'?: string;
};

export const SelectItem = ({
    id,
    value,
    decorator,
    disabled = false,
    children,
    title,
    'data-test-id': dataTestId = 'fondue-select-item',
}: SelectItemProps) => {
    const itemElementRef = useRef<HTMLLIElement | null>(null);
    const { getItemProps, itemsArray, selectedItem, highlightedIndex, parentWidth, emphasis, size } =
        useContext<SelectContextProps>(SelectContext);

    const item = useMemo(() => {
        return { id, value, title, children };
    }, [id, value, title, children]);

    const index = useMemo(() => itemsArray.findIndex((item: SelectItemProps) => item.id === id), [id, itemsArray]);
    const isSelected = selectedItem?.id === id;

    return (
        <li
            className={merge([
                'tw-p-2 tw-shadow-sm tw-flex tw-justify-start tw-items-center tw-rounded tw-cursor-pointer',
                !disabled && highlightedIndex === index ? FOCUS_STYLE_INSET_NO_OFFSET : '',
                disabled
                    ? 'tw-cursor-not-allowed tw-bg-box-disabled tw-text-bog-disabled-inverse'
                    : 'tw-text-text-weak',
            ])}
            style={{ width: `${parentWidth}px` }}
            key={id}
            title={disabled ? undefined : children ?? title ?? value}
            data-test-id={dataTestId}
            {...getItemProps?.({ item, index, ref: itemElementRef, 'aria-disabled': disabled })}
        >
            <Checkmark checked={isSelected} emphasis={emphasis} size={size} />
            {decorator ? <span className="tw-pr-1">{decorator}</span> : null}
            {<span>{children ?? title ?? value}</span>}
        </li>
    );
};
SelectItem.displayName = 'FondueSelectItem';
