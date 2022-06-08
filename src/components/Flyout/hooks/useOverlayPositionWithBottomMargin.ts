/* (c) Copyright Frontify Ltd., all rights reserved. */

import { AriaPositionProps, useOverlayPosition } from '@react-aria/overlays';
import { MutableRefObject, useLayoutEffect, useState } from 'react';
import { getTotalOverlayHeight } from '../helpers/getTotalOverlayHeight';
import { shouldDisplayAbove } from '../helpers/shouldDisplayAbove';
import { FlyoutPlacement } from '@components/Flyout';

const FLYOUT_OVERLAY_OFFSET = 5;
const DEFAULT_OVERLAY_PADDING = 12;
const INTERCOM_BUTTON_HEIGHT = 70;

type UseOverlayPositionWithBottomMarginProps = {
    triggerRef: MutableRefObject<HTMLElement | null>;
    overlayRef: MutableRefObject<HTMLElement | null>;
    scrollRef: MutableRefObject<HTMLElement | null>;
    isOpen: boolean;
    placement?: FlyoutPlacement;
    offset?: number;
    updatePositionOnContentChange: boolean;
};

const flippedPositionMap: Record<FlyoutPlacement, AriaPositionProps['placement']> = {
    ['top']: 'bottom',
    ['bottom']: 'top',
    ['left']: 'right',
    ['right']: 'left',
    ['top left']: 'bottom left',
    ['top right']: 'bottom right',
    ['bottom left']: 'top left',
    ['bottom right']: 'top right',
};

export const useOverlayPositionWithBottomMargin = ({
    triggerRef,
    overlayRef,
    scrollRef,
    isOpen,
    placement,
    offset,
    updatePositionOnContentChange,
}: UseOverlayPositionWithBottomMarginProps) => {
    const [flipVerticalPosition, setFlipVerticalPosition] = useState(false);
    const flippedPosition = placement && flippedPositionMap[placement];
    const verticalPosition = flipVerticalPosition ? flippedPosition : placement;

    const { overlayProps: positionProps, updatePosition } = useOverlayPosition({
        targetRef: triggerRef,
        overlayRef,
        shouldFlip: placement === FlyoutPlacement.Left || placement === FlyoutPlacement.Right,
        placement:
            placement && (placement === FlyoutPlacement.Left || placement === FlyoutPlacement.Right)
                ? placement
                : verticalPosition,
        containerPadding: DEFAULT_OVERLAY_PADDING,
        offset: offset ?? FLYOUT_OVERLAY_OFFSET,
        scrollRef,
        isOpen,
    });

    useLayoutEffect(() => {
        /* setTimeout is required to prevent error "ResizeObserver loop limit exceeded" 
                from being thrown during cypress component tests */
        const resizeObserver = new ResizeObserver(() => setTimeout(updatePosition, 0));

        if (isOpen) {
            const overlayHeight = getTotalOverlayHeight(overlayRef, scrollRef);
            setFlipVerticalPosition(
                shouldDisplayAbove(triggerRef, overlayHeight, FLYOUT_OVERLAY_OFFSET, INTERCOM_BUTTON_HEIGHT),
            );

            if (scrollRef.current && updatePositionOnContentChange) {
                resizeObserver.observe(scrollRef.current);
            }
            if (overlayRef.current && updatePositionOnContentChange) {
                resizeObserver.observe(overlayRef.current);
            }
        }

        return () => {
            resizeObserver.disconnect();
        };
    }, [isOpen, updatePositionOnContentChange, updatePosition, scrollRef, overlayRef, triggerRef]);

    if (typeof positionProps?.style?.maxHeight === 'number' && !flipVerticalPosition) {
        const heightToSubtract = INTERCOM_BUTTON_HEIGHT - DEFAULT_OVERLAY_PADDING;
        positionProps.style.maxHeight -= heightToSubtract;
    }

    return { positionProps };
};
