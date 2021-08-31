/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Flyout } from "@components/Flyout/Flyout";
import { MenuItem } from "@components/Menu/MenuItem/MenuItem";
import IconColors from "@elements/Icon/Generated/IconColors";
import { IconSize } from "@elements/Icon/IconSize";
import { Meta, Story } from "@storybook/react";
import React, { useState } from "react";
import { ColorPicker, ColorPickerProps } from "./ColorPicker";

export default {
    title: "Components/Color Picker",
    component: ColorPicker,
    args: {
        currentColor: { hex: "#5566FF", alpha: 1 },
    },
    argTypes: {
        onSelect: { action: "Select Color" },
    },
} as Meta<ColorPickerProps>;

const palettes = [
    {
        title: "Red",
        colors: [
            { hex: "#992136", alpha: 1, name: "90 (Foobar)" },
            { hex: "#cc2c48", alpha: 1, name: "70" },
            { hex: "#e52144", alpha: 1, name: "65" },
            { hex: "#ff375a", alpha: 1, name: "60" },
            { hex: "#ff8066", alpha: 1, name: "50 (This is orange?)" },
            { hex: "#e1c4be", alpha: 1, name: "40" },
            { hex: "#f0e1de", alpha: 1, name: "20" },
        ],
    },
    {
        title: "Green",
        colors: [
            { hex: "#006452", alpha: 1, name: "90" },
            { hex: "#00866e", alpha: 1, name: "75" },
            { hex: "#00a084", alpha: 1, name: "70 (Green Berlin)" },
            { hex: "#00c8a5", alpha: 1, name: "60" },
            { hex: "#80dbb7", alpha: 1, name: "50" },
            { hex: "#bee1d4", alpha: 1, name: "40" },
            { hex: "#def0e9", alpha: 1, name: "20" },
        ],
    },
    {
        title: "Yellow",
        colors: [
            { hex: "#cc9000", alpha: 1, name: "90" },
            { hex: "#e6a200", alpha: 1, name: "70" },
            { hex: "#ffb400", alpha: 1, name: "60" },
            { hex: "#eec779", alpha: 1, name: "50" },
            { hex: "#e1d4be", alpha: 1, name: "40" },
            { hex: "#f0e9de", alpha: 1, name: "20" },
        ],
    },
];

const Template: Story<ColorPickerProps> = (args) => {
    const [selectedColor, setSelectedColor] = useState(args.currentColor);
    return (
        <ColorPicker
            {...args}
            currentColor={selectedColor}
            onSelect={(color) => {
                args.onSelect(color);
                setSelectedColor(color);
            }}
        />
    );
};

export const OnlyCustomColor = Template.bind({});

export const WithBrandColors = Template.bind({});

WithBrandColors.args = { palettes };

export const WithinFlyout: Story<ColorPickerProps> = ({ currentColor }) => {
    const [temporaryColor, setTemporaryColor] = useState(currentColor);
    const [selectedColor, setSelectedColor] = useState<ColorPickerProps["currentColor"] | null>(null);

    return (
        <div className="dark:tw-text-white">
            <div className="tw-flex tw-items-center">
                Some text
                <Flyout
                    onClick={() => setSelectedColor(temporaryColor)}
                    onClose={() => setTemporaryColor(selectedColor || currentColor)}
                    trigger={
                        <MenuItem
                            title={
                                selectedColor
                                    ? [selectedColor.name || "", selectedColor.value].join(" ")
                                    : "Selected Color"
                            }
                            decorator={
                                !selectedColor?.value ? (
                                    <span className="tw-text-black-70">
                                        <IconColors size={IconSize.Size12} />
                                    </span>
                                ) : (
                                    <span
                                        className="tw-h-4 tw-w-4 tw-rounded tw-flex tw-items-center tw-justify-center"
                                        style={{ background: selectedColor?.value }}
                                    />
                                )
                            }
                        />
                    }
                >
                    <ColorPicker
                        palettes={palettes}
                        currentColor={temporaryColor}
                        onSelect={(color) => setTemporaryColor(color)}
                    />
                </Flyout>
            </div>
            <div>
                Deserunt voluptate deserunt laborum dolor excepteur. Reprehenderit amet cillum ad ut. Magna labore
                consequat enim tempor amet in qui. In esse proident officia aliquip ea in in nulla aliqua in laborum
                anim ipsum est.
            </div>
        </div>
    );
};
