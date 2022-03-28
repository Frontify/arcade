/* (c) Copyright Frontify Ltd., all rights reserved. */

import { MenuItemStyle } from "@components/MenuItem/MenuItem";
import { MenuItemContentSize } from "@components/MenuItem/MenuItemContent";
import IconAudio from "@foundation/Icon/Generated/IconAudio";
import { Meta, Story } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Dropdown, DropdownAlignment, DropdownProps, DropdownSize } from "./Dropdown";
import { Validation } from "@utilities/validation";

// eslint-disable-next-line import/no-default-export
export default {
    title: "Components/Dropdown",
    component: Dropdown,
    args: {
        placeholder: "select item",
        disabled: false,
        clearable: false,
        validation: Validation.Default,
    },
    argTypes: {
        size: {
            table: { disable: true },
        },
        activeItemId: { type: "string" },
        validation: {
            options: Object.values(Validation),
            control: { type: "select" },
        },
        alignment: {
            options: Object.values(DropdownAlignment),
            control: { type: "select" },
            defaultValue: DropdownAlignment.Start,
        },
    },
} as Meta;

const DropdownTemplate: Story<DropdownProps> = (args: DropdownProps) => {
    const [active, setActive] = useState(args.activeItemId);
    useEffect(() => setActive(args.activeItemId), [args.activeItemId]);

    return <Dropdown {...args} activeItemId={active} onChange={(id) => setActive(id)} />;
};

const DropdownWithLimitedWidthTemplate: Story<DropdownProps> = (args: DropdownProps) => {
    const [active, setActive] = useState(args.activeItemId);
    useEffect(() => setActive(args.activeItemId), [args.activeItemId]);

    return (
        <div className="tw-full">
            <div className="tw-max-w-[150px] tw-m-auto">
                <Dropdown {...args} activeItemId={active} onChange={(id) => setActive(id)} />
            </div>
        </div>
    );
};

export const SmallSelect = DropdownTemplate.bind({});

SmallSelect.args = {
    size: DropdownSize.Small,
    menuBlocks: [
        {
            id: "block1",
            ariaLabel: "First section",
            menuItems: [
                {
                    id: 1,
                    title: "Small icon",
                    size: MenuItemContentSize.Small,
                    decorator: <IconAudio />,
                },
                {
                    id: 2,
                    title: "Small icon warning",
                    size: MenuItemContentSize.Small,
                    decorator: <IconAudio />,
                    style: MenuItemStyle.Danger,
                },
                {
                    id: 3,
                    title: "Small icon disabled",
                    size: MenuItemContentSize.Small,
                    decorator: <IconAudio />,
                    disabled: true,
                },
                {
                    id: 4,
                    title: "Small icon warning disabled",
                    size: MenuItemContentSize.Small,
                    decorator: <IconAudio />,
                    style: MenuItemStyle.Danger,
                    disabled: true,
                },
            ],
        },
        {
            id: "block2",
            ariaLabel: "Second section",
            menuItems: [
                {
                    id: "9",
                    title: "Small",
                    size: MenuItemContentSize.Small,
                },
                {
                    id: "10",
                    title: "Small warning",
                    size: MenuItemContentSize.Small,
                    style: MenuItemStyle.Danger,
                },
                {
                    id: "11",
                    title: "Small disabled",
                    size: MenuItemContentSize.Small,
                    disabled: true,
                },
                {
                    id: "12",
                    title: "Small warning disabled",
                    style: MenuItemStyle.Danger,
                    size: MenuItemContentSize.Small,
                    disabled: true,
                },
            ],
        },
    ],
};

export const DropdownWithLimitedWidth = DropdownWithLimitedWidthTemplate.bind({});

DropdownWithLimitedWidth.args = {
    size: DropdownSize.Small,
    menuBlocks: [
        {
            id: "block1",
            ariaLabel: "First section",
            menuItems: [
                {
                    id: 1,
                    title: "Limited width icon",
                    size: MenuItemContentSize.Small,
                    decorator: <IconAudio />,
                },
                {
                    id: 2,
                    title: "Limited width warning",
                    style: MenuItemStyle.Danger,
                    size: MenuItemContentSize.Small,
                    decorator: <IconAudio />,
                },
                {
                    id: 3,
                    title: "Limited width disabled",
                    size: MenuItemContentSize.Small,
                    decorator: <IconAudio />,
                    disabled: true,
                },
                {
                    id: 4,
                    title: "Limited width warning disabled",
                    style: MenuItemStyle.Danger,
                    size: MenuItemContentSize.Small,
                    decorator: <IconAudio />,
                    disabled: true,
                },
                {
                    id: 5,
                    title: "Limited width warning with long title",
                    style: MenuItemStyle.Danger,
                    size: MenuItemContentSize.Small,
                    decorator: <IconAudio />,
                },
            ],
        },
        {
            id: "block2",
            ariaLabel: "Second section",
            menuItems: [
                {
                    id: "9",
                    title: "Limited width",
                    size: MenuItemContentSize.Small,
                },
                {
                    id: "10",
                    title: "Limited width warning",
                    style: MenuItemStyle.Danger,
                    size: MenuItemContentSize.Small,
                },
                {
                    id: "11",
                    title: "Limited width disabled",
                    size: MenuItemContentSize.Small,
                    disabled: true,
                },
                {
                    id: "12",
                    title: "Limited width warning disabled",
                    style: MenuItemStyle.Danger,
                    size: MenuItemContentSize.Small,
                    disabled: true,
                },
            ],
        },
    ],
};

export const LargeSelect = DropdownTemplate.bind({});

LargeSelect.args = {
    size: DropdownSize.Large,
    menuBlocks: [
        {
            id: "block1",
            ariaLabel: "First section",
            menuItems: [
                {
                    id: "5",
                    title: "Large icon",
                    subtitle: "Subtitle",
                    decorator: <IconAudio />,
                    size: MenuItemContentSize.Large,
                },
                {
                    id: "6",
                    title: "Large icon warning",
                    subtitle: "Subtitle",
                    decorator: <IconAudio />,
                    size: MenuItemContentSize.Large,
                    style: MenuItemStyle.Danger,
                },
                {
                    id: "7",
                    title: "Large icon disabled",
                    subtitle: "Subtitle",
                    decorator: <IconAudio />,
                    size: MenuItemContentSize.Large,
                    disabled: true,
                },
                {
                    id: "8",
                    title: "Large icon warning disabled",
                    subtitle: "Subtitle",
                    decorator: <IconAudio />,
                    size: MenuItemContentSize.Large,
                    style: MenuItemStyle.Danger,
                    disabled: true,
                },
            ],
        },
        {
            id: "block2",
            ariaLabel: "Second section",
            menuItems: [
                {
                    id: "13",
                    title: "Large",
                    subtitle: "Subtitle",
                    size: MenuItemContentSize.Large,
                },
                {
                    id: "14",
                    title: "Large warning",
                    subtitle: "Subtitle",
                    size: MenuItemContentSize.Large,
                    style: MenuItemStyle.Danger,
                },
                {
                    id: "15",
                    title: "Large disabled",
                    subtitle: "Subtitle",
                    size: MenuItemContentSize.Large,
                    disabled: true,
                },
                {
                    id: "16",
                    title: "Large warning disabled",
                    subtitle: "Subtitle",
                    size: MenuItemContentSize.Large,
                    style: MenuItemStyle.Danger,
                    disabled: true,
                },
            ],
        },
    ],
};
