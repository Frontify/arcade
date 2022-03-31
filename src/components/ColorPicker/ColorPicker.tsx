/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Slider } from "@components/Slider/Slider";
import React, { FC, useState } from "react";
import { Color, ColorFormat, Palette } from "../../types/colors";
import { BrandColorPicker } from "./BrandColorPicker";
import { ColorPreview } from "./ColorPreview";
import { CustomColorPicker } from "./CustomColorPicker";
import "./styles.css";

export type ColorPickerProps = {
    palettes?: Palette[];
    currentColor: Color;
    currentFormat: ColorFormat;
    setFormat: (id: ColorFormat) => void;
    onSelect: (color: Color) => void;
    showPreview?: boolean;
};

enum ColorType {
    Brand = "Brand",
    Custom = "Custom",
}

const colorTypes = [
    { id: ColorType.Brand, value: "Brand" },
    { id: ColorType.Custom, value: "Custom" },
];

export const ColorPicker: FC<ColorPickerProps> = ({
    currentColor,
    palettes,
    onSelect,
    setFormat,
    showPreview = true,
    currentFormat = ColorFormat.Hex,
}) => {
    const [colorType, setColorType] = useState(ColorType.Brand);

    return (
        <div className="tw-w-[400px] tw-relative">
            {showPreview && <ColorPreview color={currentColor} />}
            <div className="tw-p-5 tw-flex tw-flex-col tw-gap-2">
                {palettes && (
                    <Slider
                        items={colorTypes}
                        activeItemId={colorType}
                        onChange={(type) => setColorType(type as ColorType)}
                    />
                )}
                {palettes && colorType === ColorType.Brand ? (
                    <BrandColorPicker currentColor={currentColor} palettes={palettes} onSelect={onSelect} />
                ) : (
                    <CustomColorPicker
                        currentColor={currentColor}
                        currentFormat={currentFormat}
                        setFormat={setFormat}
                        onSelect={onSelect}
                    />
                )}
            </div>
        </div>
    );
};
