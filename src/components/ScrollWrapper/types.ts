/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ReactElement } from "react";

export enum ScrollWrapperDirection {
    Both = "Both",
    Horizontal = "Horizontal",
    Vertical = "Vertical",
}

export const scrollWrapperDirections: Record<ScrollWrapperDirection, string> = {
    [ScrollWrapperDirection.Both]: "tw-w-full tw-h-full tw-overflow-scroll",
    [ScrollWrapperDirection.Horizontal]: "tw-w-full tw-overflow-x-scroll tw-overflow-y-hidden",
    [ScrollWrapperDirection.Vertical]: "tw-h-full tw-overflow-y-scroll tw-overflow-x-hidden",
};

export type ScrollWrapperProps = {
    direction?: ScrollWrapperDirection;
    children?: ReactElement | ReactElement[];
};
