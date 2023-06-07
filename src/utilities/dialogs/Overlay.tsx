/* (c) Copyright Frontify Ltd., all rights reserved. */

import { useMemoizedId } from '@hooks/useMemoizedId';
import { Popper } from '@components/Popper';
import React, { Children, isValidElement, useCallback } from 'react';
import { Trigger } from '@utilities/dialogs/Trigger';
import { Content } from '@utilities/dialogs/Content';
import { OVERLAY_CONTAINER_CLASSES } from '@utilities/overlayStyle';
import { BaseDialogProps, Modality, OverlayProps } from '../../types/dialog';
import { merge } from '@utilities/merge';
import { useFocusTrap } from '@hooks/useFocusTrap';
import { useClickOutside } from '@hooks/useClickOutside';
import { Portal } from '@components/Portal';

export const Overlay = ({
    open,
    placement,
    offset,
    flip,
    enablePortal,
    children,
    role = 'region',
    'data-test-id': dataTestId = 'fondue-overlay',
    maxWidth = 'auto',
    maxHeight = 'auto',
    handleClose,
    modality,
}: OverlayProps & BaseDialogProps) => {
    const id = useMemoizedId();
    const ref = useFocusTrap(modality);
    const handleClosingInteraction = () => {
        if (open && modality !== Modality.BlockingModal) {
            if (handleClose) {
                handleClose();
            }
        }

        return;
    };
    useClickOutside(ref.current, handleClosingInteraction);

    const disableBackground = useCallback(() => {
        if (open && modality !== Modality.NonModal) {
            document.body.style.pointerEvents = 'none';
        }
        return (document.body.style.pointerEvents = 'auto');
    }, [open, modality]);

    return (
        <>
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
                                        ref={ref}
                                        data-test-id={dataTestId}
                                        className={merge([
                                            'tw-flex tw-flex-col tw-pointer-events-auto',
                                            OVERLAY_CONTAINER_CLASSES,
                                        ])}
                                        role={role}
                                        id={id}
                                        aria-hidden={!open}
                                        aria-labelledby={id}
                                        style={{ maxWidth, maxHeight }}
                                    >
                                        {child}
                                    </div>
                                </Popper.Content>
                            );
                        }
                    }
                })}
            </Popper>

            {modality !== Modality.NonModal && open && (
                <Portal>
                    <button
                        onClick={disableBackground}
                        className={merge([
                            'tw-absolute tw-w-screen tw-h-screen tw-top-0 tw-left-0 tw-overflow-hidden tw-z-[9990]',
                            modality === Modality.BlockingModal && 'tw-transition-opacity tw-bg-black tw-opacity-50',
                        ])}
                    />
                </Portal>
            )}
        </>
    );
};
