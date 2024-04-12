/* (c) Copyright Frontify Ltd., all rights reserved. */

import { type Meta, type StoryObj } from '@storybook/react';

import { LoadingBar } from './LoadingBar';

type Story = StoryObj<typeof LoadingBar>;
const meta: Meta<typeof LoadingBar> = {
    component: LoadingBar,
    tags: ['autodocs'],
    parameters: {
        status: {
            type: 'in_progress',
        },
    },
    args: {
        value: 42,
        max: 100,
        rounded: true,
        'aria-label': 'Fondue Loading Bar',
    },
};

export default meta;

export const WithValue: Story = {};

export const Indeterminate: Story = {
    args: {
        value: null,
    },
};
