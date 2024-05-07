/* (c) Copyright Frontify Ltd., all rights reserved. */

import { type Meta, type StoryObj } from '@storybook/react';
import { type ComponentProps } from 'react';

import { TextInput } from '../TextInput/TextInput';

import { Label } from './Label';
import { Checkbox } from '../Checkbox/Checkbox';

type Story = StoryObj<typeof Label>;
const meta: Meta<typeof Label> = {
    title: 'Components/Label',
    component: Label,
    tags: ['autodocs'],
    parameters: {
        status: {
            type: 'in_progress',
        },
    },
    args: {
        children: 'Label',
    },
};
export default meta;

export const Mandatory: Story = {
    args: {
        required: true,
    },
    render: (args) => {
        // Used to get the correct component name in the Storybook of the `TextInput` (instead of `TextInput.Root`)
        const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
        STextInput.displayName = 'TextInput';

        return (
            <div className="tw-flex tw-flex-col tw-gap-2">
                <Label {...args} htmlFor="input" />
                <STextInput id="input" placeholder="Enter your name" />
            </div>
        );
    },
};

export const WithTextInput: Story = {
    args: {
        children: 'Hello World',
    },
    render: (args) => {
        // Used to get the correct component name in the Storybook of the `TextInput` (instead of `TextInput.Root`)
        const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
        STextInput.displayName = 'TextInput';

        return (
            <div className="tw-flex tw-flex-col tw-gap-2">
                <Label {...args} htmlFor="input" />
                <STextInput id="input" placeholder="Enter your name" />
            </div>
        );
    },
};

export const WithDisabledInput: Story = {
    args: {
        children: 'Hello World',
    },
    render: (args) => {
        // Used to get the correct component name in the Storybook of the `TextInput` (instead of `TextInput.Root`)
        const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
        STextInput.displayName = 'TextInput';

        return (
            <div className="tw-flex tw-flex-col tw-gap-2">
                <Label {...args} htmlFor="input" />
                <STextInput id="input" placeholder="Enter your name" disabled />
            </div>
        );
    },
};

export const WithCheckbox: Story = {
    args: {
        children: 'Hello World',
    },
    render: (args) => {
        // Used to get the correct component name in the Storybook of the `TextInput` (instead of `TextInput.Root`)
        const STextInput = (props: ComponentProps<typeof TextInput>) => <TextInput {...props} />;
        STextInput.displayName = 'TextInput';

        return (
            <div className="tw-flex tw-flex-col tw-gap-2">
                <Checkbox id="input" defaultValue="indeterminate" />
                <Label {...args} htmlFor="input" />
            </div>
        );
    },
};
