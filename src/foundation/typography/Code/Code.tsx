import { merge } from "@utilities/merge";
import React, { FC, PropsWithChildren } from "react";

type CodeHeight = "medium" | "strong";

type CodeSize = "small" | "medium" | "large";

type CodeColor = "default" | "weak" | "x-weak" | "disabled" | "negative" | "positive" | "warning" | "interactive";

export type CodeProps = PropsWithChildren<{
    size?: CodeSize;
    weight?: CodeHeight;
    as?: "code" | "pre" | "span";
    color?: CodeColor;
}>;

const weightMap: Record<CodeHeight, string> = {
    medium: "tw-font-medium",
    strong: "tw-font-bold",
};

const sizeMap: Record<CodeSize, string> = {
    small: "tw-text-code-small",
    medium: "tw-text-code-medium",
    large: "tw-text-code-large",
};

const colorMap: Record<CodeColor, string> = {
    default: "tw-text-text",
    weak: "tw-text-text-weak",
    "x-weak": "tw-text-text-x-weak",
    disabled: "tw-text-text-disabled",
    negative: "tw-text-text-negative",
    positive: "tw-text-text-positive",
    warning: "tw-text-text-warning",
    interactive: "tw-text-text-interactive",
};

export const Code: FC<CodeProps> = ({
    children,
    as: Tag = "span",
    weight = "medium",
    size = "medium",
    color = "default",
}) => {
    return (
        <Tag data-test-id="code" className={merge(["tw-font-code", weightMap[weight], sizeMap[size], colorMap[color]])}>
            {children}
        </Tag>
    );
};
