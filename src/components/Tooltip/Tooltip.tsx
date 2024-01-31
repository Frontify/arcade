/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { PopperPlacement } from '@components/Popper';
import { merge } from '@utilities/merge';
import { Z_INDEX_TOOLTIP } from '@utilities/dialogs/constants';
import { FOCUS_VISIBLE_STYLE } from '@utilities/focusStyle';
import { ARROW_DARK_THEME } from '@utilities/overlayStyle';
import { Overlay } from '@utilities/dialogs/Overlay';
import { Modality } from '../../types';
import { checkIfContainInteractiveElements } from '@utilities/elements';

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
};

const formatTooltipText = (text: string) => {
    const lineBreakRegex = /<br\s*\/?>/;
    return text.split(lineBreakRegex).join('\n');
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
    id,
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
    const [open, setOpen] = useState(openOnMount);
    const triggerRef = useRef<HTMLDivElement | null>(null);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [hasInteractiveElements, setHasInteractiveElements] = useState(false);

    useEffect(() => {
        setHasInteractiveElements(checkIfContainInteractiveElements(triggerRef.current));
    }, [children, triggerRef]);

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
                ref={triggerRef}
                tabIndex={hasInteractiveElements || disabled ? undefined : 0}
                aria-describedby={id}
                aria-disabled={disabled}
                data-test-id={`${dataTestId}-button`}
                className={merge(['tw-inline-block tw-rounded tw-max-w-[100%] tw-outline-none', FOCUS_VISIBLE_STYLE])}
                {...focusAndMouseAttributes}
            >
                {children}
            </div>
            <Overlay
                id={id}
                aria-hidden={!open}
                open={open}
                theme="dark"
                withArrow={withArrow}
                arrowCustomColors={ARROW_DARK_THEME}
                anchor={triggerRef}
                placement={placement}
                offset={offset}
                flip={flip}
                enablePortal={enablePortal}
                role="tooltip"
                data-test-id={dataTestId}
                modality={Modality.NonModal}
                maxWidth={maxWidth}
                maxHeight={maxHeight}
                zIndex={zIndex}
                handleClose={() => setOpen(false)}
                shadow="none"
                isDialog={false}
            >
                <p
                    className={merge([
                        size === 'spacious' ? 'tw-pt-2 tw-px-3 tw-pb-2.5' : 'tw-pt-1 tw-px-2 tw-pb-1.5',
                        'tw-text-heading-medium tw-whitespace-pre-line tw-break-words',
                    ])}
                >
                    {formatTooltipText(content)}
                </p>
            </Overlay>
        </>
    );
};
Tooltip.displayName = 'FondueTooltip';
