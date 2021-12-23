/* (c) Copyright Frontify Ltd., all rights reserved. */

import { merge } from "@utilities/merge";
import React, { FC, PropsWithChildren } from "react";

export type StackSpacing = "none" | "xx-small" | "small" | "medium" | "large" | "xx-large";

export type StackProps = PropsWithChildren<{
    padding: StackSpacing;
    spacing: StackSpacing;
    direction?: "row" | "column";
    wrap?: boolean;
}>;

const paddingMap: Record<StackSpacing, string> = {
    none: "tw-p-0",
    "xx-small": "tw-p-xx-small",
    small: "tw-p-small",
    medium: "tw-p-medium",
    large: "tw-p-large",
    "xx-large": "tw-p-xx-large",
};

const spacingMap: Record<StackSpacing, string> = {
    none: "tw-gap-0",
    "xx-small": "tw-gap-xx-small",
    small: "tw-gap-small",
    medium: "tw-gap-medium",
    large: "tw-gap-large",
    "xx-large": "tw-gap-xx-large",
};

export const Stack: FC<StackProps> = ({ children, padding, spacing, direction = "row", wrap = false }) => {
    return (
        <div
            data-test-id="stack"
            className={merge([
                "tw-flex",
                paddingMap[padding],
                spacingMap[spacing],
                direction === "row" ? "tw-flex-row" : "tw-flex-col",
                wrap ? "tw-flex-wrap" : "tw-flex-nowrap",
            ])}
        >
            {children}
        </div>
    );
};
