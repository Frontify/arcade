/* (c) Copyright Frontify Ltd., all rights reserved. */

import { merge } from "@utilities/merge";
import React, { FC } from "react";

export enum LoadingCircleStyle {
    Progress = "Progress",
    Positive = "Positive",
    Danger = "Danger",
}

export enum LoadingCircleSize {
    ExtraSmall = "ExtraSmall",
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
}

export type LoadingCircleProps = {
    style?: LoadingCircleStyle;
    size?: LoadingCircleSize;
};

export const statusClasses: Record<LoadingCircleStyle, string> = {
    [LoadingCircleStyle.Progress]: "tw-border-violet-60",
    [LoadingCircleStyle.Positive]: "tw-border-green-60",
    [LoadingCircleStyle.Danger]: "tw-border-red-60",
};

export const sizeClasses: Record<LoadingCircleSize, string> = {
    [LoadingCircleSize.ExtraSmall]: "tw-w-4 tw-h-4",
    [LoadingCircleSize.Small]: "tw-w-5 tw-h-5",
    [LoadingCircleSize.Medium]: "tw-w-8 tw-h-8",
    [LoadingCircleSize.Large]: "tw-w-16 tw-h-16",
};

export const LoadingCircle: FC<LoadingCircleProps> = ({
    style = LoadingCircleStyle.Progress,
    size = LoadingCircleSize.Medium,
}) => {
    return (
        <div
            data-test-id="loading-circle"
            className={merge([
                "tw-border-2 tw-border-solid tw-rounded-full tw-border-t-transparent tw-animate-spin",
                statusClasses[style],
                sizeClasses[size],
            ])}
        ></div>
    );
};
