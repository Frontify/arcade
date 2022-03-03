/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Meta, Story } from "@storybook/react";
import React from "react";
import { IconAttentionFilled, IconInfo, IconQuestion } from "../..";
import { InputLabel as InputLabelComponent, InputLabelProps } from "./InputLabel";

// eslint-disable-next-line import/no-default-export
export default {
    title: "Components/Input Label",
    component: InputLabelComponent,
    args: {
        children: "Input Label",
        disabled: false,
        required: false,
        tooltip: {
            content: "Lorem ipsum dolor sit amet.",
        },
    },
} as Meta;

export const InputLabel: Story<InputLabelProps> = (args: InputLabelProps) => <InputLabelComponent {...args} />;

export const InputLabelWithMultipleTooltips = InputLabel.bind({});

InputLabelWithMultipleTooltips.args = {
    ...InputLabel.args,
    tooltip: [
        { triggerIcon: <IconInfo />, triggerStyle: "Danger", content: "Tooltip 1" },
        { triggerIcon: <IconQuestion />, triggerStyle: "Primary", content: "Tooltip 2" },
        { triggerIcon: <IconAttentionFilled />, triggerStyle: "Warning", content: "Tooltip 3" },
    ],
};
