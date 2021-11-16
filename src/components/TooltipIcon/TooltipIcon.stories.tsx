/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from "react";
import { Meta, Story } from "@storybook/react";
import { TooltipIcon, TooltipIconProps } from "./TooltipIcon";
import { Tooltip } from "@components/Tooltip/Tooltip";

export default {
    title: "Components/TooltipIcon",
    component: TooltipIcon,
    argTypes: {},
    args: {},
} as Meta<TooltipIconProps>;

const TooltipIconTemplate: Story<TooltipIconProps> = (args: TooltipIconProps) => {
    return <TooltipIcon {...args} />;
};

export const WithDefaultContent = TooltipIconTemplate.bind({});

export const WithCustomContent = TooltipIconTemplate.bind({});
WithCustomContent.args = {
    tooltip: <Tooltip content="Cupcake ipsum dolor sit amet ice cream." />,
};
