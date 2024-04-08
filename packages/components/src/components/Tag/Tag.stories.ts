/* (c) Copyright Frontify Ltd., all rights reserved. */

import { type Meta, type StoryObj } from '@storybook/react';

import { Tag } from './Tag';

type Story = StoryObj<typeof Tag>;
const meta: Meta<typeof Tag> = {
    component: Tag,
    tags: ['autodocs'],
    parameters: {
        status: {
            type: 'planned',
        }
    }
};
export default meta;

export const Primary: Story = {
    args: {
        children: 'Tag',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Tag',
    },
};
