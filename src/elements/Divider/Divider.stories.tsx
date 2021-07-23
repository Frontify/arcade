/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Meta, Story } from "@storybook/react";
import DividerComponent, { DividerHeight, DividerProps, DividerStyle } from "./Divider";

export default {
    title: "Elements/Divider",
    component: DividerComponent,
    args: {
        color: "red",
    },
    argTypes: {
        color: {
            control: { type: "color" },
        },
        style: {
            options: Object.values(DividerStyle),
            control: {
                type: "select",
                labels: Object.entries(DividerStyle).reduce(
                    (labels, [key, value]) => ({ ...labels, [value]: key }),
                    {},
                ),
            },
        },
        height: {
            options: Object.values(DividerHeight),
            control: {
                type: "select",
                labels: Object.entries(DividerHeight).reduce(
                    (labels, [key, value]) => ({ ...labels, [value]: key }),
                    {},
                ),
            },
        },
    },
} as Meta;

export const Divider: Story<DividerProps> = (args) => <DividerComponent {...args} />;
