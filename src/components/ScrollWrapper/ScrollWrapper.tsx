/* (c) Copyright Frontify Ltd., all rights reserved. */

import { useFocusRing } from '@react-aria/focus';
import React, { FC, useRef } from 'react';
import { FOCUS_STYLE, merge } from '../..';
import { useScrollWrapper } from './hooks/useScrollWrapper';
import { ScrollWrapperDirection, ScrollWrapperProps, scrollWrapperDirections } from './types';

const GRADIENTS = {
    right: 'linear-gradient(90deg, rgba(232, 233, 233, 0) 0%, #E8E9E9 100%)',
    left: 'linear-gradient(270deg, rgba(232, 233, 233, 0) 0%, #E8E9E9 100%)',
    bottom: 'linear-gradient(180deg, rgba(232, 233, 233, 0) 0%, #E8E9E9 100%)',
    top: 'linear-gradient(0deg, rgba(232, 233, 233, 0) 0%, #E8E9E9 100%)',
};

export const ScrollWrapper: FC<ScrollWrapperProps> = ({ direction = ScrollWrapperDirection.Vertical, children }) => {
    const scrollingContainer = useRef<HTMLDivElement>(null);

    const [{ showTopShadow, showBottomShadow, showLeftShadow, showRightShadow }, scrollDivProps] =
        useScrollWrapper(scrollingContainer);

    const { isFocusVisible, focusProps } = useFocusRing();

    const directionVertical =
        direction === ScrollWrapperDirection.Vertical || direction === ScrollWrapperDirection.Both;
    const directionHorizontal =
        direction === ScrollWrapperDirection.Horizontal || direction === ScrollWrapperDirection.Both;

    return (
        <div
            data-test-id="scroll-wrapper"
            className="tw-h-full tw-relative tw-flex-auto tw-flex tw-flex-col tw-min-h-0"
        >
            {directionVertical && showTopShadow && (
                <div
                    className="tw-h-3 tw-w-full tw-absolute tw-z-10 tw-top-0 tw-left-0 tw-mix-blend-darken tw-border-t tw-border-line"
                    style={{ background: GRADIENTS.top }}
                />
            )}
            {directionHorizontal && showLeftShadow && (
                <div
                    className="tw-w-3 tw-top-0 tw-absolute tw-left-0 tw-bottom-0 tw-h-full tw-z-10 tw-mix-blend-darken tw-border-l tw-border-line"
                    style={{ background: GRADIENTS.left }}
                />
            )}
            <div
                ref={scrollingContainer}
                // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
                tabIndex={0}
                role="region"
                aria-label="Scrollable dialogue content"
                className={merge([
                    scrollWrapperDirections[direction],
                    'tw-flex-auto tw-min-h-0 tw-outline-none tw-pb-2',
                    showLeftShadow || isFocusVisible ? 'tw-pr-2' : 'tw-px-2 tw--ml-2',
                    isFocusVisible && FOCUS_STYLE,
                ])}
                {...scrollDivProps}
                {...focusProps}
            >
                {children}
            </div>
            {directionVertical && showBottomShadow && (
                <div
                    className="tw-h-3 tw-w-full tw-absolute tw-z-10 tw-bottom-0 tw-left-0 tw-mix-blend-darken tw-border-b tw-border-line"
                    style={{ background: GRADIENTS.bottom }}
                />
            )}
            {directionHorizontal && showRightShadow && (
                <div
                    className="tw-w-3 tw-top-0 tw-absolute tw-right-0 tw-bottom-0 tw-h-full tw-z-10 tw-mix-blend-darken tw-border-r tw-border-line"
                    style={{ background: GRADIENTS.right }}
                />
            )}
        </div>
    );
};
