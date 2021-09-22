/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Meta, Story } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Checkbox as CheckboxComponent, CheckboxProps, CheckboxState } from "./Checkbox";

export default {
    title: "Elements/Checkbox",
    argTypes: {
        state: {
            options: Object.values(CheckboxState),
            control: { type: "radio" },
        },
        onChange: {
            table: { disable: true },
            action: "Change",
        },
    },
    args: {
        state: CheckboxState.Unchecked,
        disabled: false,
        required: false,
        value: "whatever-you'd-like",
        label: "Checkbox label",
        note: "Note about this input",
        tooltip: "Some random Tooltip",
    },
} as Meta<CheckboxProps>;

export const Checkbox: Story<CheckboxProps> = (args: CheckboxProps) => {
    const [checked, setChecked] = useState<CheckboxState>(args.state || CheckboxState.Unchecked);
    useEffect(() => setChecked(args.state || CheckboxState.Unchecked), [args.state]);

    return (
        <CheckboxComponent
            {...args}
            state={checked}
            onChange={(isChecked) => {
                setChecked(isChecked ? CheckboxState.Checked : CheckboxState.Unchecked);
                args.onChange && args.onChange(isChecked);
            }}
        />
    );
};
