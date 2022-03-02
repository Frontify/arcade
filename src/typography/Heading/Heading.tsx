/* (c) Copyright Frontify Ltd., all rights reserved. */

import { merge } from "@utilities/merge";
import React, { FC, PropsWithChildren } from "react";
import { decorationMap, displayMap, overflowMap, whitespaceMap, wordBreakMap } from "../shared/records";
import { SharedTypographyProps } from "../shared/types";

type HeadingWeight = "medium" | "strong";
type HeadingSize = "medium" | "large" | "x-large" | "xx-large";
type HeadingColor = "default" | "weak" | "x-weak" | "disabled" | "negative" | "positive" | "warning" | "interactive";

export type HeadingProps = PropsWithChildren<
    SharedTypographyProps & {
        size?: HeadingSize;
        weight?: HeadingWeight;
        as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
        color?: HeadingColor;
    }
>;

const weightMap: Record<HeadingWeight, string> = {
    medium: "tw-font-medium",
    strong: "tw-font-bold",
};

const sizeMap: Record<HeadingSize, string> = {
    medium: "tw-text-heading-medium",
    large: "tw-text-heading-large",
    "x-large": "tw-text-heading-x-large",
    "xx-large": "tw-text-heading-xx-large",
};

const colorMap: Record<HeadingColor, string> = {
    default: "tw-text-text",
    weak: "tw-text-text-weak",
    "x-weak": "tw-text-text-x-weak",
    disabled: "tw-text-text-disabled",
    negative: "tw-text-text-negative",
    positive: "tw-text-text-positive",
    warning: "tw-text-text-warning",
    interactive: "tw-text-text-interactive",
};

export const Heading: FC<HeadingProps> = ({
    children,
    as: Tag = "span",
    weight = "medium",
    size = "medium",
    color = "default",
    overflow = "visible",
    decoration = "none",
    wordBreak = "normal",
    whitespace = "normal",
    display,
}) => (
    <Tag
        data-test-id="heading"
        className={merge([
            "tw-font-heading tw-max-w-full",
            weightMap[weight],
            sizeMap[size],
            colorMap[color],
            decorationMap[decoration],
            wordBreakMap[wordBreak],
            overflow !== "truncate" && whitespaceMap[whitespace],
            overflowMap[overflow],
            display && displayMap[display],
        ])}
    >
        {children}
    </Tag>
);
