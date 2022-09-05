/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { Meta, Story } from '@storybook/react';
import { OverflowMenu, OverflowMenuProps } from './OverflowMenu';
import { BreadcrumbItem } from '@components/Breadcrumbs';

const link = document.referrer;
const ITEMS = [
    { label: 'Item 1', link },
    { label: 'Item 2', link },
    { label: 'Item 3', link },
];

const BUTTON_ITEMS = [
    { label: 'Button Item 1', onClick: () => void 0 },
    { label: 'Button Item 2', onClick: () => void 0 },
    { label: 'Button Item 3', onClick: () => void 0 },
];

const SPAN_ITEMS = [{ label: 'Span Item 1' }, { label: 'Span Item 2' }, { label: 'Span Item 3' }];

const MIXED_ITEMS = [
    { label: 'Item 1', link },
    { label: 'Button Item 1', onClick: () => void 0 },
    { label: 'Span Item 1' },
];

export default {
    title: 'Components/OverflowMenu',
    component: OverflowMenu,
    decorators: [
        (StoryElement) => (
            <div className="tw-h-48">
                <StoryElement />
            </div>
        ),
    ],
} as Meta<OverflowMenuProps>;

const Template: Story<OverflowMenuProps> = (args: OverflowMenuProps) => <OverflowMenu {...args} />;

export const WithLinkItems = Template.bind({});
WithLinkItems.args = { items: [...ITEMS] };

export const WithButtonItems = Template.bind({});
WithButtonItems.args = { items: [...BUTTON_ITEMS] };

export const WithSpanItems = Template.bind({});
WithSpanItems.args = { items: [...SPAN_ITEMS] };

export const WithMixedItems = Template.bind({});
WithMixedItems.args = { items: [...MIXED_ITEMS] };

export const WithBoxAutoPositioning = Template.bind({});
WithBoxAutoPositioning.args = { items: [...BUTTON_ITEMS] };
WithBoxAutoPositioning.decorators = [
    (StoryElement) => (
        <div className="tw-flex tw-justify-end">
            <StoryElement />
        </div>
    ),
];

export const BeforeBreadcrumbItems = Template.bind({});
BeforeBreadcrumbItems.args = { items: [...BUTTON_ITEMS] };
BeforeBreadcrumbItems.decorators = [
    (StoryElement) => (
        <div>
            <div className="tw-flex">
                <StoryElement />
                <BreadcrumbItem label="Breadcrumb item 4" showSeparator={false} />
            </div>
            <small>
                The separator should be handled by the <strong>Breadcrumbs</strong> component
            </small>
        </div>
    ),
];

export const BetweenBreadcrumbItems = Template.bind({});
BetweenBreadcrumbItems.args = { items: [...BUTTON_ITEMS] };
BetweenBreadcrumbItems.decorators = [
    (StoryElement) => (
        <div>
            <div className="tw-flex">
                <BreadcrumbItem label="Breadcrumb item 1" showSeparator={true} />
                <StoryElement />
                <BreadcrumbItem label="Breadcrumb item 5" showSeparator={false} />
            </div>
            <small>
                The separator should be handled by the <strong>Breadcrumbs</strong> component
            </small>
        </div>
    ),
];
