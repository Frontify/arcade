/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Badge } from './Badge';
import IconIcons from '@foundation/Icon/Generated/IconIcons';
import { BadgeEmphasis, BadgeProps, BadgeStatus, BadgeStyle } from './types';

export default {
    title: 'Components/Badge',
    component: Badge,
    argTypes: {
        style: {
            options: Object.values(BadgeStyle),
            control: { type: 'select' },
        },
        emphasis: {
            options: Object.values(BadgeEmphasis),
            control: { type: 'select' },
        },
        size: {
            options: ['s', 'm'],
            control: { type: 'select' },
        },
        onClick: { table: { disable: true } },
        onDismiss: { table: { disable: true } },
    },
    args: {
        style: BadgeStyle.Primary,
        children: 'Text',
        size: 'm',
        emphasis: BadgeEmphasis.Strong,
        disabled: false,
    },
} as Meta<BadgeProps>;

const BadgeTemplate: Story<BadgeProps> = (args: BadgeProps) => <Badge {...args} />;

export const LabelOnly = BadgeTemplate.bind({});

export const WithOnClick = BadgeTemplate.bind({});

WithOnClick.argTypes = {
    onClick: { action: 'Click' },
};

export const WithDismiss = BadgeTemplate.bind({});

WithDismiss.argTypes = {
    onDismiss: { action: 'Dismiss' },
};

export const WithOnClickAndDismiss = BadgeTemplate.bind({});

WithOnClickAndDismiss.argTypes = {
    onDismiss: { action: 'Dismiss' },
    onClick: { action: 'Click' },
};

export const WithStatus = BadgeTemplate.bind({});

WithStatus.argTypes = {
    status: {
        options: Object.values(BadgeStatus),
        control: { type: 'select' },
    },
};

WithStatus.args = {
    status: BadgeStatus.Positive,
};

export const WithCustomStatusColor = BadgeTemplate.bind({});

WithCustomStatusColor.args = {
    status: { r: 40, g: 200, b: 100, a: 1 },
};

export const WithCustomStatusString = BadgeTemplate.bind({});

WithCustomStatusString.args = {
    status: '#f14394',
};

export const WithIcon = BadgeTemplate.bind({});

WithIcon.argTypes = {
    icon: { table: { disable: true } },
};

WithIcon.args = {
    icon: <IconIcons />,
};

export const WithOnClickAndIcon = BadgeTemplate.bind({});

WithOnClickAndIcon.argTypes = {
    onClick: { action: 'Click' },
    icon: { table: { disable: true } },
};

WithOnClickAndIcon.args = {
    icon: <IconIcons />,
};

export const WithStatusAndIcon = BadgeTemplate.bind({});

WithStatusAndIcon.argTypes = {
    status: {
        options: Object.values(BadgeStatus),
        control: { type: 'select' },
    },
    icon: { table: { disable: true } },
};

WithStatusAndIcon.args = {
    status: BadgeStatus.Positive,
    icon: <IconIcons />,
};

export const StatusOnly = BadgeTemplate.bind({});

StatusOnly.argTypes = {
    status: {
        options: Object.values(BadgeStatus),
        control: { type: 'select' },
    },
    children: { table: { disable: true } },
};

StatusOnly.args = {
    status: BadgeStatus.Positive,
    children: '',
};

export const IconOnly = BadgeTemplate.bind({});

IconOnly.argTypes = {
    icon: { table: { disable: true } },
    children: { table: { disable: true } },
};

IconOnly.args = {
    icon: <IconIcons />,
    children: '',
};

export const BetweenElements: Story<BadgeProps> = (args: BadgeProps) => (
    <div className="tw-flex tw-items-center tw-gap-1">
        <span>before </span>
        <Badge {...args} />
        <span> after</span>
    </div>
);

BetweenElements.argTypes = {
    status: {
        options: Object.values(BadgeStatus),
        control: { type: 'select' },
    },
    icon: { table: { disable: true } },
};

BetweenElements.args = {
    status: BadgeStatus.Positive,
    icon: <IconIcons />,
};
