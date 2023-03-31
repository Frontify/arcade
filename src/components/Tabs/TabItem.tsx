/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { ReactElement, ReactNode, useRef } from 'react';
import { BadgeProps } from '@components/Badge';
import { useFocusRing } from '@react-aria/focus';
import { FOCUS_STYLE } from '@utilities/focusStyle';
import { merge } from '@utilities/merge';
import { checkIfContainInteractiveElements } from '@utilities/elements';

export type TabItemProps = {
    id: string;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    decorator?: ReactElement;
    badge?: BadgeProps;
    children: ReactNode;
};

export const TabItem = ({ active, disabled, children, id }: TabItemProps & { active?: boolean }): ReactElement => {
    const { isFocusVisible, focusProps } = useFocusRing();
    const ref = useRef<HTMLDivElement | null>(null);
    const hasInteractiveElements = checkIfContainInteractiveElements(ref.current);

    return (
        <div
            role="tabpanel"
            ref={ref}
            id={`${id}-content`}
            aria-labelledby={id}
            className={merge([!active || disabled ? 'tw-hidden' : '', isFocusVisible && FOCUS_STYLE])}
            tabIndex={hasInteractiveElements ? -1 : 0}
            {...focusProps}
        >
            {children}
        </div>
    );
};
TabItem.displayName = 'FondueTabItem';
