/* (c) Copyright Frontify Ltd., all rights reserved. */

import RejectIcon from '@foundation/Icon/Generated/IconReject';
import { IconSize } from '@foundation/Icon/IconSize';
import { getColorDisplayValue } from '@utilities/colors';
import { merge } from '@utilities/merge';
import React, { FC, cloneElement } from 'react';
import { ColorFormat } from '../../types';
import { badgeStatusClasses, getSizeClasses, getStyleClasses, isBadgeStatus } from './helpers';
import { BadgeEmphasis, BadgeProps, BadgeStyle } from './types';

export const Badge: FC<BadgeProps> = ({
    children,
    status,
    icon,
    style = BadgeStyle.Primary,
    size = 'm',
    emphasis = BadgeEmphasis.None,
    disabled = false,
    onClick,
    onDismiss,
}) => {
    if (!children && !icon && !status) {
        return null;
    }

    const Container = onClick ? 'a' : 'span';

    return (
        <Container
            onClick={() => onClick && onClick()}
            className={merge([
                'tw-inline-flex tw-items-center tw-justify-center tw-self-start tw-rounded-full tw-transition-color tw-select-none tw-flex-initial tw-min-w-0 tw-align-top',
                disabled
                    ? 'tw-bg-box-disabled tw-text-box-disabled-inverse'
                    : getStyleClasses(style, !!onClick, emphasis === BadgeEmphasis.Strong),
                onClick && !disabled ? 'hover:tw-cursor-pointer' : 'tw-cursor-default',
                getSizeClasses(children, Boolean(status || icon), size === 's'),
            ])}
            data-test-id="badge"
        >
            {status && (
                <span
                    data-test-id="badge-status"
                    className={merge([
                        'tw-w-2 tw-h-2 tw-rounded-full tw-flex-none',
                        disabled && 'tw-opacity-30',
                        isBadgeStatus(status) && badgeStatusClasses[status],
                    ])}
                    style={
                        isBadgeStatus(status)
                            ? {}
                            : {
                                  backgroundColor:
                                      typeof status === 'string'
                                          ? status
                                          : getColorDisplayValue(status, ColorFormat.Rgba, true),
                              }
                    }
                />
            )}
            {icon && (
                <span data-test-id="badge-icon" className={merge([disabled && 'tw-opacity-30', 'tw-flex-none'])}>
                    {cloneElement(icon, { size: IconSize.Size16 })}
                </span>
            )}
            <span className="tw-text-center tw-text-xxs tw-font-sans tw-font-normal tw-truncate">{children}</span>
            {onDismiss && (
                <button
                    type="button"
                    data-test-id="badge-dismiss"
                    onClick={(event) => {
                        event.stopPropagation();
                        onDismiss();
                    }}
                >
                    <RejectIcon size={IconSize.Size12} />
                </button>
            )}
        </Container>
    );
};
