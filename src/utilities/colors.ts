/* (c) Copyright Frontify Ltd., all rights reserved. */

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { toState } from "react-color/lib/helpers/color";
import tinycolor from "tinycolor2";
import { Color, ColorFormat, ColorState, Palette } from "../types/colors";

export const getValidRgbColorValue = (input: string): number => {
    const value = parseInt(input || "0", 10);

    if (value > 255) {
        return 255;
    }

    return value < 0 ? 0 : value;
};

export const transformColor = (color: Color): ColorState => toState({ ...toState(color).rgb, a: color.alpha });

export const toColor = (current: Color, { name, ...diff }: DiffColor): Color => {
    const a = diff.rgba?.a || current.rgba?.a || current.alpha || 0;
    const alpha = a > 1 ? 1 : a;
    const rgb = { ...current.rgba, ...toState({ hex: diff.hex || current.hex }).rgb, ...diff.rgba };
    const [r, g, b] = [rgb.r, rgb.g, rgb.b].map(getValidRgbColorValue);
    const rgba = { r, g, b, a: alpha };
    const hex = toState(rgba).hex;

    return { name, rgba, alpha, hex };
};

export const getColorDisplayValue = (color: Color, format: ColorFormat, showAlpha = true): string => {
    const parsedColor = tinycolor(color);

    switch (format) {
        case ColorFormat.Rgba:
            return parsedColor.toRgbString();
        case ColorFormat.Hex:
            const hex = parsedColor.toHexString();
            return showAlpha && color.a && color.a < 1 ? `${hex} ${parsedColor.getAlpha()}` : hex;
        default:
            return parsedColor.toHexString();
    }
};

export const EXAMPLE_PALETTES: Palette[] = [
    {
        id: "red",
        title: "Red",
        colors: ["#992136", "#cc2c48", "#ff375a", "#ff8066", "#e1c4be", "#f0e1de"],
    },
    {
        id: "green",
        title: "Green",
        colors: ["#006452", "#00866e", "#00c8a5", "#80dbb7", "#bee1d4", "#def0e9"],
    },
    {
        id: "yellow",
        title: "Yellow",
        colors: ["#cc9000", "#e6a200", "#ffb400", "#eec779", "#e1d4be", "#f0e9de"],
    },
].map((palette) => ({
    ...palette,
    colors: palette.colors.map((hex, index) => {
        let name = "";

        switch (index) {
            case 0:
                name = "90";
                break;
            case 1:
                name = "70";
                break;
            case 2:
                name = "60";
                break;
            case 3:
                name = "50";
                break;
            case 4:
                name = "40";
                break;
            case 5:
                name = "20";
                break;
            default:
                break;
        }

        return { hex, name, alpha: 1 };
    }),
}));
