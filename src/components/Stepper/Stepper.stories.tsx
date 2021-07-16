/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Meta, Story } from "@storybook/react";
import { Theme } from "@utilities/enum";
import StepperComponent, { StepperIconStyle, StepperProps } from "./Stepper";

export default {
    title: "Components/Stepper",
    component: StepperComponent,
    args: {
        initialStep: 0,
        totalSteps: 10,
        useInternalCounter: true,
        theme: Theme.Dark,
        iconStyle: StepperIconStyle.ArrowLeftRight,
    },
    argTypes: {
        initialStep: { control: { type: "range" } },
        totalSteps: { control: { type: "range" } },
        theme: {
            options: Object.keys(Theme),
            control: { type: "radio" },
        },
        iconStyle: {
            options: Object.keys(StepperIconStyle),
            control: { type: "radio" },
        },
    },
} as Meta;

export const Stepper: Story<StepperProps> = (args) => <StepperComponent {...args} />;
