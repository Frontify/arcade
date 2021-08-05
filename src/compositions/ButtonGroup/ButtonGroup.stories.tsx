/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from "react";
import { ButtonGroup, ButtonGroupProps } from "./ButtonGroup";
import { Button, ButtonSize, ButtonStyle } from "@elements/Button/Button";
import IconReject from "@elements/Icon/Generated/IconReject";
import { Meta, Story } from "@storybook/react";

export default {
    title: "Compositions/ButtonGroup",
    component: ButtonGroup,
    argTypes: {
        size: {
            options: [ButtonSize.Small, ButtonSize.Medium, ButtonSize.Large],
            control: { type: "radio" },
        },
    },
    args: {
        size: ButtonSize.Medium,
    },
} as Meta<ButtonGroupProps>;

export const Template: Story<ButtonGroupProps> = (args: ButtonGroupProps) => (
    <ButtonGroup size={args.size}>
        <Button>The First</Button>
        <Button style={ButtonStyle.Secondary}>The Second</Button>
        <Button icon={<IconReject />} style={ButtonStyle.Danger}>
            The Third
        </Button>
    </ButtonGroup>
);
