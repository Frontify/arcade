/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Meta, StoryFn } from '@storybook/react';
import React from 'react';
import { BrightHeaderStyle } from './BrightHeader';
import { Tooltip, TooltipAlignment, TooltipPosition, TooltipProps } from './Tooltip';
import { IconExclamationMarkCircle, IconExclamationMarkTriangle, IconIcon, IconSize } from '@foundation/Icon';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    args: {
        content:
            'Cupcake ipsum dolor sit amet ice cream. (https://Cupcakeipsumdolorsitameticecream.com), just testing here testing there',
        heading: '',
    },
    argTypes: {
        brightHeader: {
            options: ['None', 'Information', 'Warning', 'Tip', 'Note'],
            mapping: {
                None: null,
                Information: BrightHeaderStyle.Information,
                Warning: BrightHeaderStyle.Warning,
                Tip: BrightHeaderStyle.Tip,
                Note: BrightHeaderStyle.Note,
            },
            control: { type: 'select' },
        },
        tooltipIcon: {
            options: ['None', 'Icon'],
            mapping: {
                None: null,
                Icon: <IconIcon />,
            },
            control: { type: 'select' },
        },
        headingIcon: {
            options: ['None', 'Icon'],
            mapping: {
                None: null,
                Icon: <IconIcon />,
            },
            control: { type: 'select' },
        },
        position: {
            options: Object.values(TooltipPosition),
            control: { type: 'select' },
            defaultValue: TooltipPosition.Bottom,
        },
        alignment: {
            options: Object.values(TooltipAlignment),
            control: { type: 'select' },
            defaultValue: TooltipAlignment.Middle,
        },
        withArrow: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        open: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        disabled: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        hidden: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        flip: {
            control: { type: 'boolean' },
            defaultValue: true,
        },
        hoverDelay: {
            control: { type: 'number' },
            defaultValue: 200,
        },
        enterDelay: {
            control: { type: 'number' },
            defaultValue: null,
        },
    },
} as Meta<TooltipProps>;

export const TooltipComponent: StoryFn<TooltipProps> = (args: TooltipProps) => {
    return (
        <div className="tw-w-screen tw-h-screen tw-flex tw-justify-center tw-items-center">
            <Tooltip
                {...args}
                triggerElement={
                    <button className="tw-flex tw-justify-center tw-items-center">
                        <IconExclamationMarkCircle size={IconSize.Size16} filled />
                        <span>Tooltip trigger</span>
                    </button>
                }
            />
        </div>
    );
};

export const MultipleTooltipsComponent: StoryFn<TooltipProps> = (args: TooltipProps) => {
    return (
        <div className="tw-w-screen tw-h-screen tw-flex tw-justify-center tw-items-center">
            <p className="tw-mr-2">Label</p>
            <Tooltip
                {...args}
                triggerElement={
                    <button className="tw-mr-1">
                        <IconExclamationMarkCircle size={IconSize.Size16} filled />
                    </button>
                }
            />
            <Tooltip
                {...args}
                content="Second tooltip"
                triggerElement={
                    <button>
                        <IconExclamationMarkTriangle size={IconSize.Size16} />
                    </button>
                }
                brightHeader={BrightHeaderStyle.Warning}
            />
        </div>
    );
};

export const WithInfoBrightHeader = TooltipComponent.bind({});
WithInfoBrightHeader.args = {
    brightHeader: BrightHeaderStyle.Information,
};

export const WithWarningBrightHeader = TooltipComponent.bind({});
WithWarningBrightHeader.args = {
    brightHeader: BrightHeaderStyle.Warning,
};

export const WithTipBrightHeader = TooltipComponent.bind({});
WithTipBrightHeader.args = {
    brightHeader: BrightHeaderStyle.Tip,
};

export const WithNoteBrightHeader = TooltipComponent.bind({});
WithNoteBrightHeader.args = {
    brightHeader: BrightHeaderStyle.Note,
};

export const WithOneButton = TooltipComponent.bind({});
WithOneButton.args = {
    buttons: [{ label: 'Primary', action: () => null }],
};

export const WithTwoButtons = TooltipComponent.bind({});
WithTwoButtons.args = {
    buttons: [
        { label: 'Primary', action: () => null },
        { label: 'Secondary', action: () => null },
    ],
};

export const WithHeading = TooltipComponent.bind({});
WithHeading.args = {
    heading: "I'm a heading",
};

export const WithHeadingAndIcon = TooltipComponent.bind({});
WithHeadingAndIcon.args = {
    heading: "I'm a heading",
    headingIcon: <IconIcon />,
};

export const TooltipWithIcon = TooltipComponent.bind({});
TooltipWithIcon.args = {
    tooltipIcon: <IconIcon />,
};

export const WithLinkWithDefaultLabel = TooltipComponent.bind({});
WithLinkWithDefaultLabel.args = {
    linkUrl: '#',
};

export const WithLinkWithCustomLabel = TooltipComponent.bind({});
WithLinkWithCustomLabel.args = {
    linkUrl: '#',
    linkLabel: 'Upgrade your plan',
};

export const WithEverythingDisplayed = TooltipComponent.bind({});
WithEverythingDisplayed.args = {
    tooltipIcon: <IconIcon />,
    heading: "I'm a heading",
    headingIcon: <IconIcon />,
    linkUrl: '#',
    brightHeader: BrightHeaderStyle.Warning,
    buttons: [
        { label: 'Primary', action: () => null },
        { label: 'Secondary', action: () => null },
    ],
};

export const WithArrow = TooltipComponent.bind({});
WithArrow.args = {
    withArrow: true,
};

export const OpenByDefault = TooltipComponent.bind({});
OpenByDefault.args = {
    open: true,
    withArrow: true,
};

export const DisabledTooltip = TooltipComponent.bind({});
DisabledTooltip.args = {
    disabled: true,
};
DisabledTooltip.decorators = [
    (StoryElement) => (
        <div className="tw-flex tw-flex-col tw-justify-start">
            <p>
                The tooltip content will NOT be rendered when <strong>disabled</strong> is true. It disables the tooltip
                open/close feature.
            </p>
            <StoryElement />
        </div>
    ),
];

export const HiddenTooltip = TooltipComponent.bind({});
HiddenTooltip.args = {
    hidden: true,
};
HiddenTooltip.decorators = [
    (StoryElement) => (
        <div className="tw-flex tw-flex-col tw-justify-start">
            <p>
                The tooltip content will not be displayed, but still be rendered, when <strong>hidden</strong> is true.
            </p>
            <StoryElement />
        </div>
    ),
];
