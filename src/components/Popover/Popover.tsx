/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { Children, ReactElement, ReactNode, isValidElement } from 'react';
import { Popper } from '@components/Popper';
import { PopperPlacement, PopperProps } from '@components/Popper/types';
import { OVERLAY_CONTAINER_CLASSES } from '@utilities/overlayStyle';
import { useMemoizedId } from '@hooks/useMemoizedId';

export type PopoverComponentProps = {
    'data-test-id'?: string;
    role?: string;
} & PopperProps;

const Trigger = ({ children }: { children: ReactElement }) => {
    return children;
};
Trigger.displayName = 'FonduePopoverTrigger';

// eslint-disable-next-line react/jsx-no-useless-fragment
const Content = ({ children }: { children?: ReactNode }): ReactElement => <>{children}</>;
Content.displayName = 'FonduePopoverContent';

export const Popover = ({
    children,
    open,
    placement = PopperPlacement.BottomStart,
    offset = [0, 8],
    flip = false,
    enablePortal = false,
    'data-test-id': dataTestId = 'fondue-popover',
    role = 'region',
}: PopoverComponentProps) => {
    const id = useMemoizedId();
    return (
        <Popper open={open} placement={placement} offset={offset} flip={flip} enablePortal={enablePortal}>
            {Children.map(children, (child) => {
                if (isValidElement(child) && typeof child.type === 'function') {
                    const { name } = child.type;

                    if (name === Trigger.name) {
                        return (
                            <Popper.Reference>
                                <div id={id}>{child}</div>
                            </Popper.Reference>
                        );
                    }

                    if (name === Content.name) {
                        return (
                            <Popper.Content>
                                <div
                                    data-test-id={dataTestId}
                                    className={OVERLAY_CONTAINER_CLASSES}
                                    role={role}
                                    id={id}
                                    aria-hidden={!open}
                                    aria-labelledby={id}
                                >
                                    {child}
                                </div>
                            </Popper.Content>
                        );
                    }
                }
            })}
        </Popper>
    );
};
Popover.displayName = 'FonduePopover';
Popover.Trigger = Trigger;
Popover.Content = Content;
