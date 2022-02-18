/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Meta, Story } from "@storybook/react";
import React from "react";
import { SharedTypographyArgTypes } from "../shared/Shared.stories";
import { Text as TextComponent, TextProps } from "./Text";

// eslint-disable-next-line import/no-default-export
export default {
    title: "Typography/Text",
    component: TextComponent,
    argTypes: {
        size: {
            options: ["x-small", "small", "medium", "large"],
            control: { type: "select" },
        },
        weight: {
            options: ["regular", "strong", "x-strong"],
            control: { type: "select" },
        },
        as: {
            options: ["a", "abbr", "address", "em", "label", "li", "span", "strong", "time", "p"],
            control: { type: "select" },
        },
        color: {
            options: ["default", "weak", "x-weak", "disabled", "negative", "positive", "warning", "interactive"],
            control: { type: "select" },
        },
        ...SharedTypographyArgTypes,
    },
    args: {
        children: "The fox jumps over the lazy dog",
        size: "medium",
        weight: "regular",
        as: "span",
        color: "default",
    },
} as Meta<TextProps>;

export const DefaultText: Story<TextProps> = (args) => <TextComponent {...args} />;

export const LongTextWithNewLines: Story<TextProps> = (args) => (
    <div className="tw-w-[200px] tw-p-2 tw-rounded tw-border">
        <TextComponent {...args}>
            {`Text with veryveryveryveryveryextremelyhugelymassivelysuperlengthygiganticwords and limited width.\nThis is to display
            the different types of overflow control available.`}
        </TextComponent>
    </div>
);
