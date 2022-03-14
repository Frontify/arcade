/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { cloneElement, FC } from "react";
import { merge } from "@utilities/merge";
import {
    PatternDesign,
    patternDesigns,
    PatternScale,
    patternScales,
    PatternTheme,
    patternThemes,
} from "@foundation/Pattern";

export type FrontifyPatternProps = {
    pattern: PatternDesign;
    scale?: PatternScale;
    scaleOrigin?: Array<"top" | "left" | "bottom" | "right">;
    foregroundColor?: PatternTheme;
};

export const FrontifyPattern: FC<FrontifyPatternProps> = ({
    pattern,
    scale = PatternScale.SM,
    scaleOrigin = ["top", "left"],
    foregroundColor = PatternTheme.Black,
}) => {
    return (
        <div
            data-test-id="frontify-pattern"
            className={merge(["tw-w-[260px]", patternThemes[foregroundColor ?? PatternTheme.Black]])}
            style={{ transformOrigin: `${scaleOrigin.join(" ")}`, transform: `scale(${patternScales[scale]})` }}
        >
            {cloneElement(patternDesigns[pattern ?? PatternDesign.DigitalAssets])}
        </div>
    );
};
