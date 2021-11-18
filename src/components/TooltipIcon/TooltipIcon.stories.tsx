/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from "react";
import { Meta, Story } from "@storybook/react";
import { TooltipIcon, TooltipIconProps } from "./TooltipIcon";
import { IconSize } from "@foundation/Icon/IconSize";

export default {
    title: "Components/TooltipIcon",
    component: TooltipIcon,
    argTypes: {},
    args: {},
} as Meta<TooltipIconProps>;

const TooltipIconTemplate: Story<TooltipIconProps> = (args: TooltipIconProps) => {
    return <TooltipIcon {...args} />;
};

export const WithDefaultIconSize = TooltipIconTemplate.bind({});
WithDefaultIconSize.args = {
    tooltip: {
        content: "Lorem ipsum dolor sit amet.",
    },
};

export const WithCustomIconSize = TooltipIconTemplate.bind({});
WithCustomIconSize.args = {
    tooltip: {
        content: "Lorem ipsum dolor sit amet.",
    },
    iconSize: IconSize.Size20,
};
