/* (c) Copyright Frontify Ltd., all rights reserved. */

import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '../Button/Button';

import { Flyout, FlyoutContent, FlyoutRoot } from './Flyout';

type Story = StoryObj<typeof meta>;
const meta: Meta<typeof FlyoutContent> = {
    component: FlyoutContent,
    subcomponents: {
        // @ts-expect-error - Storybook has the wrong type for TooltipContent
        'Flyout.Root': FlyoutRoot,
    },
    tags: ['autodocs'],
    parameters: {
        status: {
            type: 'in_progress',
        },
    },
    args: {
        children: 'Hello World',
    },
    decorators: [
        (Story) => (
            <Flyout.Root>
                <Flyout.Trigger>
                    <Button className="tw-ml-9">Click Me</Button>
                </Flyout.Trigger>
                <Story />
            </Flyout.Root>
        ),
    ],
    render: ({ ...args }) => {
        return (
            <Flyout.Content {...args}>
                <Flyout.Header showCloseButton>Header</Flyout.Header>
                <Flyout.Body {...args} />
                <Flyout.Footer>
                    <div className="tw-flex tw-justify-end tw-gap-2">
                        <Button emphasis="default">Cancel</Button>
                        <Button>Submit</Button>
                    </div>
                </Flyout.Footer>
            </Flyout.Content>
        );
    },
};
export default meta;

export const WithHeaderAndFooter: Story = {
    name: 'With Header and Footer',
};
export const BasicContent: Story = {
    name: 'Basic Content',
    args: {
        children: 'Hello World',
    },
};

export const WithFooter: Story = {
    name: 'Button Content',
    render: ({ ...args }) => {
        return (
            <Flyout.Content {...args}>
                <Flyout.Body>I am a flyout</Flyout.Body>
                <Flyout.Footer>
                    <Button emphasis="default">Cancel</Button>
                    <Button>Submit</Button>
                </Flyout.Footer>
            </Flyout.Content>
        );
    },
};

export const WithHeader: Story = {
    name: 'Button Content',
    render: ({ ...args }) => {
        return (
            <Flyout.Content {...args}>
                <Flyout.Header>Header</Flyout.Header>
                <Flyout.Body>I am a flyout</Flyout.Body>
            </Flyout.Content>
        );
    },
};

export const WithCloseButton: Story = {
    name: 'With Close Button',
    render: ({ ...args }) => {
        return (
            <Flyout.Content {...args}>
                <Flyout.Header showCloseButton>Header</Flyout.Header>
                <Flyout.Body>I am a flyout</Flyout.Body>
            </Flyout.Content>
        );
    },
};

export const WithCustomContent: Story = {
    name: 'With Custom Conent',
    render: ({ ...args }) => {
        return (
            <Flyout.Content {...args}>
                <div className="tw-bg-box-neutral tw-p-10">This is FlyoutContent</div>
            </Flyout.Content>
        );
    },
};

export const RightSide: Story = {
    name: 'Right Side',
    args: {
        side: 'right',
    },
};

export const AlignCenter: Story = {
    name: 'Align Center',
    args: {
        side: 'right',
        align: 'center',
    },
};

export const AlignEnd: Story = {
    name: 'Align End',
    args: {
        side: 'right',
        align: 'end',
    },
};

export const LongContent: Story = {
    name: 'Long Content',
    args: {
        side: 'bottom',
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
};

export const CustomMaxWidth: Story = {
    name: 'Custom Max Width',
    args: {
        maxWidth: '200px',
        side: 'bottom',
        children:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
};
