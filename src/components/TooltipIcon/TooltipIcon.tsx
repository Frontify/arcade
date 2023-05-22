/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { ReactElement, cloneElement } from 'react';
import { IconSize } from '@foundation/Icon/IconSize';
import { Tooltip, TooltipProps } from '@components/Tooltip/Tooltip';
import { FOCUS_VISIBLE_STYLE } from '@utilities/focusStyle';
import { merge } from '@utilities/merge';
import { IconProps } from '@foundation/Icon/IconProps';
import { IconQuestionMarkCircle } from '@foundation/Icon/Generated';

export type TooltipIconProps = {
    tooltip?: TooltipProps;
    iconSize?: IconSize;
    triggerIcon?: ReactElement<IconProps>;
    triggerStyle?: TooltipIconTriggerStyle;
};

export enum TooltipIconTriggerStyle {
    Danger = 'Danger',
    Warning = 'Warning',
    Primary = 'Primary',
}

const tooltipTriggerStyleClass: Record<TooltipIconTriggerStyle, string> = {
    [TooltipIconTriggerStyle.Danger]: 'tw-text-box-negative-inverse',
    [TooltipIconTriggerStyle.Warning]: 'tw-text-box-warning-inverse',
    [TooltipIconTriggerStyle.Primary]: 'tw-text-text-weak',
};

const tooltipHoverClasses = {
    [TooltipIconTriggerStyle.Danger]: 'hover:tw-text-box-negative-inverse-hover hover:tw-bg-box-neutral',
    [TooltipIconTriggerStyle.Warning]: 'hover:tw-text-box-warning-inverse-hover hover:tw-bg-box-neutral',
    [TooltipIconTriggerStyle.Primary]: 'hover:tw-text-text hover:tw-bg-box-neutral',
};

export const TooltipIcon = ({
    tooltip,
    iconSize = IconSize.Size16,
    triggerIcon = <IconQuestionMarkCircle />,
    triggerStyle = TooltipIconTriggerStyle.Primary,
}: TooltipIconProps): ReactElement => {
    return (
        <div data-test-id="tooltip-icon">
            {tooltip && (
                <div>
                    <Tooltip
                        triggerElement={
                            <button
                                type="button"
                                aria-label="More info"
                                data-test-id="tooltip-icon-trigger"
                                className={merge([
                                    'tw-inline-flex tw-justify-center tw-items-center tw-cursor-default tw-outline-none tw-rounded-full',
                                    FOCUS_VISIBLE_STYLE,
                                    tooltipTriggerStyleClass[triggerStyle],
                                    tooltipHoverClasses[triggerStyle],
                                ])}
                            >
                                {cloneElement(triggerIcon, { size: iconSize })}
                            </button>
                        }
                        withArrow={true}
                        {...tooltip}
                    />
                </div>
            )}
        </div>
    );
};
TooltipIcon.displayName = 'FondueTooltipIcon';
