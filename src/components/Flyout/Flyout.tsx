/* (c) Copyright Frontify Ltd., all rights reserved. */

import { BadgeProps } from "@components/Badge/Badge";
import { watchModals } from "@react-aria/aria-modal-polyfill";
import { useButton } from "@react-aria/button";
import { FocusScope, useFocusRing } from "@react-aria/focus";
import { OverlayContainer, OverlayProvider, useOverlayTrigger, useOverlayPosition } from "@react-aria/overlays";
import { mergeProps } from "@react-aria/utils";
import { useOverlayTriggerState } from "@react-stately/overlays";
import { FOCUS_STYLE } from "@utilities/focusStyle";
import { merge } from "@utilities/merge";
import React, { FC, MouseEvent, PropsWithChildren, ReactNode, useEffect, useRef } from "react";
import { LegacyFlyoutFooter } from ".";
import { Overlay } from "./Overlay";
import { shouldDisplayAbove } from "./helpers/shouldDisplayAbove";
import { useContainScroll } from "./useContainScroll";
import { subtractVerticalMarginFromMaxHeight } from "./helpers/subtractVerticalMarginFromMaxHeight";
import { getTotalOverlayHeight } from "./helpers/getTotalOverlayHeight";

export const FLYOUT_DIVIDER_COLOR = "#eaebeb";
export const FLYOUT_DIVIDER_HEIGHT = "10px";
const FLYOUT_OVERLAY_OFFSET = 5;
const DEFAULT_OVERLAY_PADDING = 12;

export type FlyoutVerticalMargin = {
    top?: number;
    bottom?: number;
};

export type FlyoutProps = PropsWithChildren<{
    trigger: ReactNode;
    onCancel?: () => void;
    onConfirm?: (event?: MouseEvent<HTMLButtonElement>) => void;
    title?: string;
    decorator?: ReactNode;
    badges?: BadgeProps[];
    hug?: boolean;
    fitContent?: boolean;
    isOpen?: boolean;
    onOpenChange: (isOpen: boolean) => void;
    fixedHeader?: ReactNode;
    fixedFooter?: ReactNode;
    verticalMargin?: FlyoutVerticalMargin;
    /**
     * The legacy footer buttons section inside of the flyout will be deleted in the future.
     * @deprecated Pass the FlyoutFooter component with buttons to the Flyout component.
     */
    legacyFooter?: boolean;
}>;

export const Flyout: FC<FlyoutProps> = ({
    trigger,
    decorator,
    onConfirm,
    onCancel,
    children,
    onOpenChange,
    isOpen = false,
    title = "",
    badges = [],
    hug = true,
    fitContent = false,
    fixedHeader,
    fixedFooter,
    verticalMargin,
    legacyFooter = true,
}) => {
    const state = useOverlayTriggerState({ isOpen, onOpenChange });
    const { toggle, close } = state;
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const innerOverlayRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const { isFocusVisible, focusProps } = useFocusRing();

    const { triggerProps, overlayProps: overlayTriggerProps } = useOverlayTrigger(
        { type: "dialog" },
        state,
        triggerRef,
    );

    const overlayHeight = getTotalOverlayHeight(innerOverlayRef, scrollRef);

    const margins = {
        top: verticalMargin?.top ?? DEFAULT_OVERLAY_PADDING,
        bottom: verticalMargin?.bottom ?? DEFAULT_OVERLAY_PADDING,
    };

    const isFlipped = shouldDisplayAbove({
        triggerRef,
        overlayHeight,
        margins,
        offset: FLYOUT_OVERLAY_OFFSET,
    });

    const { overlayProps: positionProps } = useOverlayPosition({
        targetRef: triggerRef,
        overlayRef,
        shouldFlip: false,
        // Provided internally by useOverlayPosition but required for maxHeight subtraction calculation
        containerPadding: DEFAULT_OVERLAY_PADDING,
        placement: isFlipped ? "top left" : "bottom left",
        offset: FLYOUT_OVERLAY_OFFSET,
        scrollRef,
        isOpen,
    });

    const { buttonProps } = useButton({ onPress: () => toggle() }, triggerRef);

    const positionPropsWithVerticalMargins = subtractVerticalMarginFromMaxHeight(
        positionProps,
        margins,
        isFlipped,
        DEFAULT_OVERLAY_PADDING,
    );

    useEffect(() => {
        const revert = watchModals();

        return () => revert();
    }, []);

    useContainScroll(overlayRef, { isDisabled: !isOpen });

    return (
        <OverlayProvider className="tw-flex tw-h-full tw-items-center">
            <div
                {...mergeProps(buttonProps, triggerProps, focusProps)}
                ref={triggerRef}
                className={merge([
                    "tw-outline-none tw-rounded",
                    hug ? "tw-mx-3" : "tw-w-full",
                    isFocusVisible && FOCUS_STYLE,
                ])}
                data-test-id="flyout-trigger"
            >
                {trigger}
            </div>
            {isOpen && (
                <OverlayContainer>
                    <FocusScope restoreFocus>
                        <Overlay
                            title={title}
                            badges={badges}
                            decorator={decorator}
                            isOpen={isOpen}
                            onClose={close}
                            overlayTriggerProps={overlayTriggerProps}
                            positionProps={positionPropsWithVerticalMargins}
                            fixedHeader={fixedHeader}
                            fixedFooter={
                                legacyFooter ? (
                                    <LegacyFlyoutFooter onConfirm={onConfirm} onCancel={onCancel} />
                                ) : (
                                    fixedFooter
                                )
                            }
                            ref={overlayRef}
                            scrollRef={scrollRef}
                            innerOverlayRef={innerOverlayRef}
                            fitContent={fitContent}
                        >
                            {overlayRef?.current && children}
                        </Overlay>
                    </FocusScope>
                </OverlayContainer>
            )}
        </OverlayProvider>
    );
};
