/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from "react";
import { Meta, Story } from "@storybook/react";
import { Textarea as TextareaComponent, TextareaProps } from "./Textarea";

export default {
    title: "Elements/Textarea",
    component: TextareaComponent,
    args: {
        disabled: false,
        required: false,
    },
    argTypes: {
        placeholder: { type: "string" },
        decorator: { type: "string" },
        onInput: { action: "onInput" },
        onBlur: { action: "onBlur" },
        onClear: { action: "onClear" },
    },
} as Meta<TextareaProps>;

export const Textarea: Story<TextareaProps> = (args: TextareaProps) => <TextareaComponent {...args} />;
