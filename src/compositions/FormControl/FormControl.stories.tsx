/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Dropdown, DropdownSize } from "@components/Dropdown/Dropdown";
import { MenuItemContentSize } from "@components/Menu/MenuItem/MenuItemContent";
import { Slider } from "@components/Slider/Slider";
import { Checklist, ChecklistDirection } from "@compositions/Checklist/Checklist";
import { Checkbox, CheckboxState } from "@elements/Checkbox/Checkbox";
import { TextInput } from "@elements/TextInput/TextInput";
import { Meta, Story } from "@storybook/react";
import generateRandomId from "@utilities/generateRandomId";
import React, { useState } from "react";
import { FormControl, FormControlDirection, FormControlProps, FormControlStyle, HelperPosition } from "./FormControl";

export default {
    title: "Compositions/Form Control",
    component: FormControl,
    args: {
        style: FormControlStyle.Primary,
        disabled: false,
        direction: FormControlDirection.Vertical,
        label: {
            children: "Input Label",
            required: false,
            htmlFor: generateRandomId(),
            tooltip: "Tooltip Text",
        },
        extra: "Extra Text or Element",
        helper: {
            text: "Helper Text (before/after) and variant (Primary/Success/Danger)",
            position: HelperPosition.After,
        },
        children: "",
    },
    argTypes: {
        orientation: {
            options: Object.values(FormControlDirection),
            control: "select",
        },
        children: {
            table: { disable: true },
        },
        style: {
            options: Object.values(FormControlStyle),
            control: "radio",
        },
    },
} as Meta<FormControlProps>;

const Template: Story<FormControlProps> = (args) => <FormControl {...args} />;

export const WithTextInput = Template.bind({});

WithTextInput.args = {
    children: <TextInput />,
};

export const WithSlider: Story<FormControlProps> = (args) => {
    const [activeItemId, setActiveItemId] = useState<string>("a");
    return (
        <FormControl {...args}>
            <Slider
                items={[
                    { id: "1", value: "abc" },
                    { id: "2", value: "def" },
                    { id: "3", value: "ghi" },
                ]}
                activeItemId={activeItemId}
                onChange={setActiveItemId}
            />
        </FormControl>
    );
};

export const WithDropdown: Story<FormControlProps> = (args) => {
    const [activeItemId, setActiveItemId] = useState<string | number | undefined>();
    return (
        <FormControl {...args}>
            <Dropdown
                onChange={(id) => setActiveItemId(id)}
                activeItemId={activeItemId}
                size={DropdownSize.Small}
                menuBlocks={[
                    {
                        id: "block1",
                        menuItems: [
                            { id: "1", title: "Small 1", size: MenuItemContentSize.Small },
                            { id: "2", title: "Small 2", size: MenuItemContentSize.Small },
                            { id: "3", title: "Small 3", size: MenuItemContentSize.Small },
                        ],
                    },
                ]}
            />
        </FormControl>
    );
};

export const WithVerticalChecklist: Story<FormControlProps> = (args) => {
    const allIds: number[] = [1, 2, 3, 4, 5];
    const [checkedIds, setCheckedIds] = useState<number[]>([]);

    const getCheckboxState = (id: number) =>
        checkedIds.includes(id) ? CheckboxState.Checked : CheckboxState.Unchecked;

    const toggleCheckbox = (id: number, isChecked: boolean) =>
        setCheckedIds(isChecked ? checkedIds.concat(id) : checkedIds.filter((checkedId) => checkedId !== id));

    return (
        <FormControl {...args}>
            <Checklist direction={ChecklistDirection.Vertical}>
                {allIds.map((id) => (
                    <Checkbox
                        key={`checkbox-${id}`}
                        id={`checkbox-${id}`}
                        label={`Checkbox ${id}`}
                        onChange={(isChecked) => toggleCheckbox(id, isChecked)}
                        state={getCheckboxState(id)}
                    />
                ))}
            </Checklist>
        </FormControl>
    );
};
