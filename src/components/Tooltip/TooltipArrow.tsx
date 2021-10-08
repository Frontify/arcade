/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { CSSProperties, forwardRef } from "react";
import { brightHeaderBackgroundColors, BrightHeaderStyle } from "./BrightHeader";
import { merge } from "@utilities/merge";

export type TooltipArrowProps = {
    style: CSSProperties;
    headerColor?: BrightHeaderStyle;
    placement?: string;
};

export const TooltipArrow = forwardRef<HTMLDivElement, TooltipArrowProps>(({ style, headerColor, placement }, ref) => {
    const arrowFill =
        headerColor && placement === "bottom"
            ? `before:${brightHeaderBackgroundColors[headerColor]}`
            : "before:tw-bg-black-100 dark:before:tw-bg-white";

    return (
        <div
            ref={ref}
            className={merge([
                "tw-popper-arrow tw-absolute tw-w-3 tw-h-3 tw-pointer-events-none before:tw-absolute before:tw-w-3 before:tw-h-3 before:tw-rotate-45",
                arrowFill,
            ])}
            style={style}
        />
    );
});
TooltipArrow.displayName = "TooltipArrow";
