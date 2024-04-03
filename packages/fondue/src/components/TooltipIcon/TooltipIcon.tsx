/* (c) Copyright Frontify Ltd., all rights reserved. */

import { type ReactElement, cloneElement } from 'react';

import { LegacyTooltip, type LegacyTooltipProps } from '@components/LegacyTooltip/LegacyTooltip';
import IconQuestionMarkCircle from '@foundation/Icon/Generated/IconQuestionMarkCircle';
import { type IconProps } from '@foundation/Icon/IconProps';
import { IconSize } from '@foundation/Icon/IconSize';
import { FOCUS_VISIBLE_STYLE } from '@utilities/focusStyle';
import { merge } from '@utilities/merge';

export type TooltipIconProps = {
    tooltip?: LegacyTooltipProps;
    iconSize?: IconSize;
    triggerIcon?: ReactElement<IconProps>;
    triggerStyle?: TooltipIconTriggerStyle;
    'data-test-id'?: string;
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
    'data-test-id': dataTestId = 'tooltip-icon',
}: TooltipIconProps): ReactElement => {
    return (
        <div data-test-id={dataTestId}>
            {tooltip && (
                <div>
                    <LegacyTooltip
                        triggerElement={
                            <button
                                type="button"
                                aria-label="More info"
                                data-test-id={`${dataTestId}-trigger`}
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
