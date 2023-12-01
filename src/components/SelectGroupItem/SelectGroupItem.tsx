/* (c) Copyright Frontify Ltd., all rights reserved. */

import type { ReactElement } from 'react';
import type { SelectContextProps } from '@components/Select/Select';
import { merge } from '@utilities/merge';
import { SelectContext } from '@components/Select/Select';
import { cloneElement, useContext, useMemo, useRef } from 'react';

export type SelectGroupItemProps = {
    children: ReactElement[];
    groupTitle?: string;
    'data-test-id'?: string;
};

export const SelectGroupItem = ({
    children,
    groupTitle,
    'data-test-id': dataTestId = 'fondue-select-group',
}: SelectGroupItemProps) => {
    const { getMenuProps, parentWidth } = useContext<SelectContextProps>(SelectContext);
    const selectMenuRef = useRef<HTMLUListElement | null>(null);

    const renderChildren = useMemo(() => children.map((child) => cloneElement(child)), [children]);

    return (
        <ul
            title={groupTitle}
            className={merge([
                '[&[title]]:before:tw-p-4 [&[title]]:before:tw-block before:tw-content-[attr(title)]',
                groupTitle ? '[&>li]:tw-pl-8' : '',
            ])}
            style={{ width: `${parentWidth}px` }}
            data-test-id={dataTestId}
            aria-label={`${groupTitle} menu group`}
            {...getMenuProps?.({ ref: selectMenuRef }, { suppressRefError: true })}
        >
            {renderChildren}
        </ul>
    );
};
SelectGroupItem.displayName = 'FondueSelectGroupItem';
