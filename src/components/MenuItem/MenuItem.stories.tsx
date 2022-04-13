/* (c) Copyright Frontify Ltd., all rights reserved. */

import IconAudio from "@foundation/Icon/Generated/IconAudio";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { MenuItem as MenuItemComponent, MenuItemProps, MenuItemStyle, SelectionIndicatorIcon } from "./MenuItem";
import { MenuItemContentSize } from "./MenuItemContent";

// eslint-disable-next-line import/no-default-export
export default {
    title: "Components/Menu Item",
    component: MenuItemComponent,
    args: {
        id: "abc",
        title: "Item Title",
        subtitle: "Subtitle",
        size: MenuItemContentSize.Small,
        style: MenuItemStyle.Primary,
        disabled: false,
        decorator: <IconAudio />,
        active: false,
        selectionIndicator: SelectionIndicatorIcon.Check,
    },
    argTypes: {
        size: {
            options: Object.values(MenuItemContentSize),
            control: { type: "radio" },
        },
        style: {
            options: Object.values(MenuItemStyle),
            control: { type: "radio" },
        },
        decorator: {
            control: { type: "boolean" },
        },
        selectionIndicator: {
            options: Object.values(SelectionIndicatorIcon),
            control: { type: "radio" },
        },
    },
} as Meta;

export const MenuItem: Story<MenuItemProps> = (args) => (
    <MenuItemComponent
        {...args}
        decorator={args.decorator && <IconAudio />}
        subtitle={args.size === MenuItemContentSize.Large && args.subtitle ? args.subtitle : ""}
    />
);
