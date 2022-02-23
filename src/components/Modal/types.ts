import { Color } from "../../types";
import { ReactElement } from "react";

export enum ModalVisualPattern {
    Typography = "Typography",
    Assets = "Assets",
    Imagery = "Imagery",
    Sound = "Sound",
}

export enum ThemeColor {
    Default = "Default",
    Positive = "Positive",
    Negative = "Negative",
}

export type ModalVisualProps = {
    pattern?: ModalVisualPattern;
    foregroundColor?: ThemeColor | Color;
    backgroundColor?: ThemeColor | Color;
};

export type ModalProps = {
    visual?: ModalVisualPattern;
    children?: ReactElement;
};
