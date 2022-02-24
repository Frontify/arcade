/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { FC } from "react";

export enum PatternScale {
    Small = "Small",
    Large = "Large",
}

const scaleClasses: Record<PatternScale, string> = {
    [PatternScale.Small]: "tw-scale-100",
    [PatternScale.Large]: "tw-scale-150",
};

export type FrontifyPatternProps = {
    scale?: PatternScale;
};

export const FrontifyPattern: FC<FrontifyPatternProps> = ({ scale = PatternScale.Small }) => {
    return <div data-test-id="frontify-pattern">{scaleClasses[scale]}</div>;
};
