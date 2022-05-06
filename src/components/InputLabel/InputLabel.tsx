/* (c) Copyright Frontify Ltd., all rights reserved. */

import { TooltipProps } from "@components/Tooltip/Tooltip";
import { TooltipIcon } from "@components/TooltipIcon/TooltipIcon";
import { IconSize } from "@foundation/Icon/IconSize";
import { merge } from "@utilities/merge";
import React, { FC, PropsWithChildren } from "react";

export type InputLabelProps = PropsWithChildren<{
    htmlFor: string;
    required?: boolean;
    disabled?: boolean;
    tooltip?: TooltipProps;
    bold?: boolean;
}>;

export const InputLabel: FC<InputLabelProps> = ({
    children,
    htmlFor,
    required = false,
    disabled = false,
    tooltip,
    bold,
}) => {
    return (
        <div
            className={merge([
                "tw-inline-flex tw-items-center tw-gap-1 tw-font-sans tw-text-s tw-overflow-hidden tw-max-w-full",
                disabled
                    ? "tw-text-black-40 hover:tw-text-black-40 dark:tw-text-black-60 dark:hover:tw-text-black-60"
                    : "tw-text-black-90 dark:tw-text-white",
            ])}
            data-test-id="input-label-container"
        >
            <div className="tw-flex-1 tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap">
                <label
                    htmlFor={htmlFor}
                    className={merge([
                        "tw-select-none",
                        bold && "tw-font-medium",
                        disabled
                            ? "hover:tw-cursor-not-allowed tw-pointer-events-none"
                            : "hover:tw-cursor-pointer hover:tw-text-black dark:hover:tw-text-white group-hover:tw-text-black dark:group-hover:tw-text-white",
                    ])}
                    data-test-id="input-label"
                >
                    {children}
                </label>
            </div>

            {required && (
                <span
                    data-test-id="input-label-required"
                    className="tw-h-4 tw-text-m tw-text-red-60 dark:tw-text-red-50"
                >
                    *
                </span>
            )}
            {tooltip && <TooltipIcon tooltip={tooltip} iconSize={IconSize.Size16} />}
        </div>
    );
};
