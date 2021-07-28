/* (c) Copyright Frontify Ltd., all rights reserved. */

import { MenuItemStyle, SelectionIndicatorIcon } from "@components/Menu/MenuItem/MenuItem";
import { MenuItemContentSize } from "@components/Menu/MenuItem/MenuItemContent";
import IconAudio from "@elements/Icon/Generated/IconAudio";
import { action } from "@storybook/addon-actions";
import { Meta, Story } from "@storybook/react";
import { ActionMenu as ActionMenuComponent, ActionMenuProps } from "./ActionMenu/ActionMenu";

export default {
    title: "Components/Menu",
    component: ActionMenuComponent,
    argTypes: {
        onClick: { action: "onClick" },
    },
} as Meta;

export const ActionMenu: Story<ActionMenuProps & { onClick: () => void }> = (args) => <ActionMenuComponent {...args} />;

ActionMenu.args = {
    menuBlocks: [
        {
            id: "block1",
            ariaLabel: "First section",
            menuItems: [
                {
                    id: "1",
                    title: "Small item with icon",
                    size: MenuItemContentSize.Small,
                    decorator: <IconAudio />,
                    selectionIndicator: SelectionIndicatorIcon.CaretRight,
                    onClick: action("click"),
                },
                {
                    id: "2",
                    title: "Small item with icon warning",
                    size: MenuItemContentSize.Small,
                    decorator: <IconAudio />,
                    style: MenuItemStyle.Danger,
                    selectionIndicator: SelectionIndicatorIcon.CaretRight,
                    onClick: action("click"),
                },
                {
                    id: "3",
                    title: "Small item with icon disabled",
                    size: MenuItemContentSize.Small,
                    decorator: <IconAudio />,
                    disabled: true,
                    onClick: action("click"),
                },
                {
                    id: "4",
                    title: "Small item with icon warning disabled",
                    size: MenuItemContentSize.Small,
                    decorator: <IconAudio />,
                    style: MenuItemStyle.Danger,
                    disabled: true,
                    onClick: action("click"),
                },
            ],
        },
        {
            id: "block2",
            ariaLabel: "Second section",
            menuItems: [
                {
                    id: "9",
                    title: "Small item",
                    size: MenuItemContentSize.Small,
                    selectionIndicator: SelectionIndicatorIcon.CaretRight,
                    onClick: action("click"),
                },
                {
                    id: "10",
                    title: "Small item warning",
                    size: MenuItemContentSize.Small,
                    style: MenuItemStyle.Danger,
                    selectionIndicator: SelectionIndicatorIcon.CaretRight,
                    onClick: action("click"),
                },
                {
                    id: "11",
                    title: "Small item disabled",
                    size: MenuItemContentSize.Small,
                    disabled: true,
                    onClick: action("click"),
                },
                {
                    id: "12",
                    title: "Small item warning disabled",
                    style: MenuItemStyle.Danger,
                    size: MenuItemContentSize.Small,
                    disabled: true,
                    onClick: action("click"),
                },
            ],
        },
        {
            id: "block3",
            ariaLabel: "Third section",
            menuItems: [
                {
                    id: "5",
                    title: "Large item with icon",
                    subtitle: "Subtitle",
                    decorator: <IconAudio />,
                    size: MenuItemContentSize.Large,
                    selectionIndicator: SelectionIndicatorIcon.CaretRight,
                    onClick: action("click"),
                },
                {
                    id: "6",
                    title: "Large item with icon warning",
                    subtitle: "Subtitle",
                    decorator: <IconAudio />,
                    size: MenuItemContentSize.Large,
                    style: MenuItemStyle.Danger,
                    selectionIndicator: SelectionIndicatorIcon.CaretRight,
                    onClick: action("click"),
                },
                {
                    id: "7",
                    title: "Large item with icon disabled",
                    subtitle: "Subtitle",
                    decorator: <IconAudio />,
                    size: MenuItemContentSize.Large,
                    disabled: true,
                    onClick: action("click"),
                },
                {
                    id: "8",
                    title: "Large item with icon warning disabled",
                    subtitle: "Subtitle",
                    decorator: <IconAudio />,
                    size: MenuItemContentSize.Large,
                    style: MenuItemStyle.Danger,
                    disabled: true,
                    onClick: action("click"),
                },
            ],
        },
        {
            id: "block4",
            ariaLabel: "Fourth section",
            menuItems: [
                {
                    id: "13",
                    title: "Large item",
                    subtitle: "Subtitle",
                    size: MenuItemContentSize.Large,
                    selectionIndicator: SelectionIndicatorIcon.CaretRight,
                    onClick: action("click"),
                },
                {
                    id: "14",
                    title: "Large item warning",
                    subtitle: "Subtitle",
                    size: MenuItemContentSize.Large,
                    style: MenuItemStyle.Danger,
                    selectionIndicator: SelectionIndicatorIcon.CaretRight,
                    onClick: action("click"),
                },
                {
                    id: "15",
                    title: "Large item disabled",
                    subtitle: "Subtitle",
                    size: MenuItemContentSize.Large,
                    disabled: true,
                    onClick: action("click"),
                },
                {
                    id: "16",
                    title: "Large item warning disabled",
                    subtitle: "Subtitle",
                    size: MenuItemContentSize.Large,
                    style: MenuItemStyle.Danger,
                    disabled: true,
                    onClick: action("click"),
                },
            ],
        },
    ],
};
