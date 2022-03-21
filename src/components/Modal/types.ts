/* (c) Copyright Frontify Ltd., all rights reserved. */

import { OverlayProps } from "@react-aria/overlays";
import { AriaDialogProps } from "@react-types/dialog";
import { PatternDesign, PatternTheme } from "@foundation/Pattern";
import { ScrollWrapperDirection } from "@components/ScrollWrapper/types";
import { ReactElement, RefObject } from "react";

export type ModalButton = {
    label: string;
    onClick: () => void;
    ref?: RefObject<HTMLButtonElement>;
};

export type ModalVisualProps = {
    pattern?: PatternDesign;
    foregroundColor?: PatternTheme;
};

export enum ModalHeaderVariant {
    Default = "Default",
    Informative = "Informative",
    Negative = "Negative",
    Positive = "Positive",
    Warning = "Warning",
}

export const modalHeaderVariants: Record<ModalHeaderVariant, string> = {
    [ModalHeaderVariant.Default]: "tw-text-grey-80",
    [ModalHeaderVariant.Informative]: "tw-text-violet-60",
    [ModalHeaderVariant.Negative]: "tw-text-red-60",
    [ModalHeaderVariant.Positive]: "tw-text-green-60",
    [ModalHeaderVariant.Warning]: "tw-text-yellow-60",
};

export type ModalHeaderProps = {
    title?: string;
    leadText?: string;
    decorator?: ReactElement;
    variant?: ModalHeaderVariant;
};

type ModalBodyChildren = ReactElement | ReactElement[];

export type ModalBodyProps = {
    direction?: ScrollWrapperDirection;
    children?: ModalBodyChildren;
};

export type ModalFooterProps = {
    buttons?: [ModalButton] | [ModalButton, ModalButton];
};

export type ModalProps = {
    visual?: ModalVisualProps;
    header?: ReactElement;
    footer?: ReactElement;
    children?: ModalBodyChildren;
    isOpen: boolean;
} & Omit<OverlayProps, "isOpen"> &
    AriaDialogProps;
