/* (c) Copyright Frontify Ltd., all rights reserved. */

import { TooltipProps } from '@components/Tooltip/Tooltip';
import { TooltipIcon, TooltipIconProps } from '@components/TooltipIcon/TooltipIcon';
import { IconSize } from '@foundation/Icon/IconSize';
import { merge } from '@utilities/merge';
import React, { ReactElement, ReactNode } from 'react';

export type InputLabelTooltipProps =
    | (TooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)
    | (TooltipProps & Pick<TooltipIconProps, 'triggerStyle' | 'triggerIcon'>)[];

export type InputLabelProps = {
    htmlFor: string;
    required?: boolean;
    disabled?: boolean;
    clickable?: boolean;
    tooltip?: InputLabelTooltipProps;
    bold?: boolean;
    children?: ReactNode;
};

export const InputLabel = ({
    children,
    htmlFor,
    required = false,
    disabled = false,
    clickable = false,
    tooltip = [],
    bold,
}: InputLabelProps): ReactElement => {
    const tooltips = Array.isArray(tooltip) ? tooltip : [tooltip];

    const tooltipsWithKeys = tooltips.map((tooltip, index) => ({
        key: index,
        ...tooltip,
    }));

    return (
        <div
            className={merge([
                'tw-inline-flex tw-leading-4 tw-items-center tw-gap-1 tw-font-sans tw-text-s tw-max-w-full tw-min-w-0 tw-flex-initial',
                disabled ? 'tw-text-disabled' : 'tw-text-text-weak',
            ])}
            data-test-id="input-label-container"
        >
            <div className="tw-flex-1 tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap">
                <label
                    htmlFor={htmlFor}
                    className={merge([
                        'tw-select-none',
                        bold && 'tw-font-medium',
                        disabled || !clickable
                            ? 'hover:tw-cursor-not-allowed tw-pointer-events-none'
                            : 'hover:tw-cursor-pointer hover:tw-text-text group-hover:tw-text-text',
                    ])}
                    data-test-id="input-label"
                    title={typeof children === 'string' ? children : ''}
                >
                    {children}
                </label>
            </div>

            {required && (
                <span data-test-id="input-label-required" className="tw-h-4 tw-text-m tw-text-text-negative">
                    *
                </span>
            )}
            {tooltipsWithKeys.map(({ key, triggerIcon, triggerStyle, hoverDelay = 100, ...tooltipProps }) => (
                <div key={key} className="tw-leading-3">
                    <TooltipIcon
                        tooltip={{ ...tooltipProps, hoverDelay }}
                        iconSize={IconSize.Size16}
                        triggerIcon={triggerIcon}
                        triggerStyle={triggerStyle}
                    />
                </div>
            ))}
        </div>
    );
};
InputLabel.displayName = 'FondueInputLabel';
