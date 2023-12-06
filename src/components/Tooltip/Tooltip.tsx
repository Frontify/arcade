/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { PopperPlacement } from '@components/Popper';
import { usePopper } from 'react-popper';
import { merge } from '@utilities/merge';
import { useToggleOverlay } from '@hooks/useToggleOverlay';
import { Z_INDEX_TOOLTIP } from '@utilities/dialogs/constants';
import { EnablePortalWrapper } from '@utilities/dialogs/EnablePortalWrapper';
import { useMemoizedId } from '@hooks/useMemoizedId';
import { FOCUS_VISIBLE_STYLE } from '@utilities/focusStyle';
import { checkIfContainInteractiveElements } from '@utilities/elements';

const ARROW_DISTANCE_FROM_CORNER_VALUE = 12;
const TOOLTIP_EXTRA_OFFSET_VALUE = 7; // As the arrow is set 12px away from tooltip corner, extra offset should be added to still point to Trigger.

export type TooltipProps = {
    id?: string;
    children: ReactElement;
    openOnMount?: boolean;
    placement?: PopperPlacement;
    offset?: [number, number];
    flip?: boolean;
    enablePortal?: boolean;
    content: string;
    withArrow?: boolean;
    size?: 'spacious' | 'compact';
    maxWidth?: string | number;
    maxHeight?: string | number;
    enterDelay?: number;
    leaveDelay?: number;
    'data-test-id'?: string;
    zIndex?: number;
    disabled?: boolean;
    'aria-label'?: string;
};

const getArrowClasses = (currentPlacement: string) => {
    switch (true) {
        case currentPlacement.includes('top'):
            return 'before:tw-border-t-0 before:tw-border-l-0 tw-bottom-[-6px]';
        case currentPlacement.includes('right'):
            return 'before:tw-border-t-0 before:tw-border-r-0 tw-left-[-6px]';
        case currentPlacement.includes('bottom'):
            return 'before:tw-border-b-0 before:tw-border-r-0 tw-top-[-6px]';
        case currentPlacement.includes('left'):
            return 'before:tw-border-b-0 before:tw-border-l-0 tw-right-[-6px]';
        default:
            return 'before:tw-border-b-0 before:tw-border-r-0 tw-top-[-6px]';
    }
};

const formatTooltipText = (text: string) => {
    const lineBreakRegex = /<br\s*\/?>/;
    return text.split(lineBreakRegex).join('\n');
};

const getNewOffsetBasedOnArrowPosition = (currentPlacement: string, offset: [number, number]): [number, number] => {
    switch (true) {
        case currentPlacement.includes('end'):
            return [offset[0] + TOOLTIP_EXTRA_OFFSET_VALUE, offset[1]];
        case currentPlacement.includes('start'):
            return [offset[0] - TOOLTIP_EXTRA_OFFSET_VALUE, offset[1]];
        default:
            return offset;
    }
};

type TimeoutRef = {
    current: NodeJS.Timeout | null;
};

const handleTimeout = (callback: () => void, delay: number, timeoutRef: TimeoutRef) => {
    if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
    }

    if (delay) {
        timeoutRef.current = setTimeout(callback, delay);
    } else {
        callback();
    }
};

export const Tooltip = ({
    id: customId,
    children,
    offset = [0, 8],
    flip = true,
    content,
    placement = 'bottom',
    withArrow = true,
    size = 'spacious',
    openOnMount = false,
    maxWidth = 200,
    maxHeight = 'auto',
    enablePortal = true,
    enterDelay = 0,
    leaveDelay = 200,
    disabled = false,
    zIndex = Z_INDEX_TOOLTIP,
    'data-test-id': dataTestId = 'fondue-tooltip',
}: TooltipProps) => {
    const id = useMemoizedId(customId);
    const [open, setOpen] = useToggleOverlay(openOnMount);
    const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);
    const [arrowElement, setArrowElement] = useState<HTMLDivElement | null>(null);
    const [tooltipOffset, setTooltipOffset] = useState<[number, number]>(offset);
    const [hasInteractiveElements, setHasInteractiveElements] = useState(false);

    useEffect(() => {
        setHasInteractiveElements(checkIfContainInteractiveElements(referenceElement));
    }, [children, referenceElement]);

    const { styles, attributes, state } = usePopper(referenceElement, popperElement, {
        placement,
        modifiers: [
            { name: 'arrow', options: { element: arrowElement, padding: ARROW_DISTANCE_FROM_CORNER_VALUE } },
            { name: 'offset', options: { offset: tooltipOffset } },
            { name: 'flip', enabled: flip },
        ],
    });

    const currentPlacement = state?.placement ?? placement;
    const arrowStyling = getArrowClasses(currentPlacement);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const newOffset = withArrow ? getNewOffsetBasedOnArrowPosition(currentPlacement, offset) : offset;

        setTooltipOffset((prevOffset) => {
            if (newOffset[0] !== prevOffset[0] || newOffset[1] !== prevOffset[1]) {
                return newOffset;
            }
            return prevOffset;
        });
    }, [currentPlacement, offset, withArrow]);

    const handleHideTooltip = useCallback(() => {
        if (!disabled) {
            handleTimeout(() => setOpen(false), leaveDelay, timeoutRef);
        }
    }, [disabled, leaveDelay, setOpen]);

    const handleShowTooltip = useCallback(() => {
        if (!disabled) {
            handleTimeout(() => setOpen(true), enterDelay, timeoutRef);
        }
    }, [disabled, enterDelay, setOpen]);

    useEffect(() => {
        if (timeoutRef.current && !open) {
            clearTimeout(timeoutRef.current);
        }
    }, [open]);

    const focusAndMouseAttributes = {
        onBlur: handleHideTooltip,
        onFocus: handleShowTooltip,
        onMouseEnter: handleShowTooltip,
        onMouseLeave: handleHideTooltip,
    };

    return (
        <>
            <div
                ref={setReferenceElement}
                tabIndex={hasInteractiveElements || disabled ? undefined : 0}
                aria-describedby={id}
                aria-disabled={disabled}
                data-test-id={`${dataTestId}-button`}
                className={merge(['tw-inline-block tw-rounded tw-max-w-[100%] tw-outline-none', FOCUS_VISIBLE_STYLE])}
                {...focusAndMouseAttributes}
            >
                {children}
            </div>

            {open && (
                <EnablePortalWrapper enablePortal={enablePortal}>
                    <div
                        data-test-id={dataTestId}
                        role="tooltip"
                        id={id}
                        aria-hidden={!open}
                        ref={setPopperElement}
                        className={merge([
                            'tw-popper-container tw-inline-block tw-bg-box-neutral-mighty tw-rounded-md tw-shadow tw-text-heading-medium tw-text-box-neutral-mighty-inverse tw-border tw-border-line-mighty',
                            size === 'spacious' ? 'tw-pt-2 tw-px-3 tw-pb-2.5' : 'tw-pt-1 tw-px-2 tw-pb-1.5',
                        ])}
                        style={{ ...styles.popper, maxWidth, maxHeight, zIndex }}
                        {...attributes.popper}
                    >
                        <p className="tw-whitespace-pre-line tw-break-words">{formatTooltipText(content)}</p>
                        {withArrow && (
                            <div
                                data-test-id={`${dataTestId}-arrow`}
                                data-popper-arrow={withArrow}
                                aria-hidden="true"
                                ref={setArrowElement}
                                style={styles.arrow}
                                className={merge([
                                    'tw-absolute tw-w-3 tw-h-3 tw-pointer-events-none before:tw-absolute before:tw-w-3 before:tw-h-3 before:tw-rotate-45 before:tw-border before:tw-border-line-mighty before:tw-bg-box-neutral-mighty',
                                    arrowStyling,
                                ])}
                            />
                        )}
                    </div>
                </EnablePortalWrapper>
            )}
        </>
    );
};
Tooltip.displayName = 'FondueTooltip';
