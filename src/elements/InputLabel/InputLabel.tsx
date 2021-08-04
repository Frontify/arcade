/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PropsWithChildren, ReactElement, ReactNode } from "react";
import { Tooltip } from "@components/Tooltip/Tooltip";
import { merge } from "@utilities/merge";

export type InputLabelProps = PropsWithChildren<{
    htmlFor: string;
    required?: boolean;
    disabled?: boolean;
    tooltip?: ReactNode;
    bold?: boolean;
}>;

export const InputLabel = ({
    children,
    htmlFor,
    required = false,
    disabled = false,
    tooltip,
    bold,
}: InputLabelProps): ReactElement<InputLabelProps> => {
    return (
        <div
            className={merge([
                "inline-flex items-center gap-1 font-sans text-s",
                bold && "font-medium",
                disabled
                    ? "text-black-40 hover:text-black-40 dark:text-black-60 dark:hover:text-black-60"
                    : "text-black-90 dark:text-white",
            ])}
        >
            <label
                htmlFor={htmlFor}
                className={
                    disabled
                        ? "hover:cursor-not-allowed pointer-events-none"
                        : "hover:cursor-pointer hover:text-black dark:hover:text-white"
                }
                data-test-id="input-label"
            >
                {children}
            </label>
            {required && (
                <span data-test-id="input-label-required" className="h-4 text-m text-red-60 dark:text-red-50">
                    *
                </span>
            )}
            {tooltip && <Tooltip tooltip={tooltip} />}
        </div>
    );
};
