/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from "react";
import { Meta, Story } from "@storybook/react";
import { Button, ButtonProps, ButtonRounding, ButtonSize, ButtonStyle, ButtonType } from "./Button";
import { ButtonEmphasis } from ".";
import { IconEnum, iconsMap } from "@foundation/Icon";

const defaultArgs = {
    children: "Button Text",
    size: ButtonSize.Medium,
    style: ButtonStyle.Default,
    emphasis: ButtonEmphasis.Default,
    disabled: false,
    hideLabel: false,
    hugWidth: true,
    rounding: ButtonRounding.Medium,
    inverted: false,
    type: ButtonType.Button,
};

// eslint-disable-next-line import/no-default-export
export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        size: {
            options: [ButtonSize.Small, ButtonSize.Medium, ButtonSize.Large],
            control: { type: "radio" },
        },
        style: {
            options: [ButtonStyle.Default, ButtonStyle.Positive, ButtonStyle.Negative, ButtonStyle.Danger],
            control: { type: "radio" },
        },

        emphasis: {
            options: [ButtonEmphasis.Default, ButtonEmphasis.Weak, ButtonEmphasis.Strong],
            control: { type: "radio" },
        },
        icon: {
            options: [IconEnum.Icons, IconEnum.DotsVertical, IconEnum.ColorScale, IconEnum.Settings],
            mapping: {
                [IconEnum.Icons]: iconsMap[IconEnum.Icons],
                [IconEnum.DotsVertical]: iconsMap[IconEnum.DotsVertical],
                [IconEnum.ColorScale]: iconsMap[IconEnum.ColorScale],
                [IconEnum.Settings]: iconsMap[IconEnum.Settings],
            },
            control: { type: "select" },
        },
        rounding: {
            options: [ButtonRounding.Medium, ButtonRounding.Full],
            control: { type: "radio" },
        },
        type: {
            options: [ButtonType.Button, ButtonType.Submit, ButtonType.Reset],
            control: { type: "radio" },
        },
        onClick: { action: "onClick" },
    },
} as Meta;

const ButtonTemplate: Story<ButtonProps> = (args: ButtonProps) => (
    <div className={args.inverted ? "tw-p-6 tw-bg-box-neutral-strong" : "tw-p-6"}>
        <Button {...args} />
    </div>
);

export const Default = ButtonTemplate.bind({});
Default.args = { ...defaultArgs };
Default.storyName = "Text Label Only";

export const withIcon = ButtonTemplate.bind({});
withIcon.args = { ...defaultArgs, hideLabel: true, icon: iconsMap[IconEnum.Icons] };
withIcon.storyName = "Icon Only";

export const withRoundedIcon = ButtonTemplate.bind({});
withRoundedIcon.args = {
    ...defaultArgs,
    rounding: ButtonRounding.Full,
    icon: iconsMap[IconEnum.Icons],
    hideLabel: true,
};
withRoundedIcon.storyName = "Icon Only rounded";

export const withIconAndLabel = ButtonTemplate.bind({});
withIconAndLabel.args = {
    ...defaultArgs,
    icon: iconsMap[IconEnum.Icons],
};
withIconAndLabel.storyName = "Icon and Text Label";
