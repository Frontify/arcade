/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconSize } from '@foundation/Icon/IconSize';
import { Meta, StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { Slider, SliderProps } from './Slider';
import { IconTextAlignmentCentre, IconTextAlignmentLeft, IconTextAlignmentRight } from '@foundation/Icon';

export default {
    title: 'Components/Slider',
    component: Slider,
    argTypes: {
        id: { type: 'string' },
    },
    args: {
        disabled: false,
    },
} as Meta<SliderProps>;

const SliderTemplate: StoryFn<SliderProps> = (args: SliderProps) => {
    const [activeItemId, setActiveItemId] = useState<string | undefined>();
    return <Slider {...args} activeItemId={activeItemId} onChange={setActiveItemId} />;
};

export const Text = SliderTemplate.bind({});
Text.args = {
    items: [
        { id: 'a', value: 'abc' },
        { id: 'b', value: 'def' },
        { id: 'c', value: 'ghi' },
    ],
};

export const Number = SliderTemplate.bind({});
Number.args = {
    items: [
        { id: 'a', value: 10 },
        { id: 'b', value: 20 },
        { id: 'c', value: 30 },
    ],
};

export const Icon = SliderTemplate.bind({});
Icon.args = {
    items: [
        { id: 'a', icon: <IconTextAlignmentLeft size={IconSize.Size16} />, ariaLabel: 'Text Align Left' },
        { id: 'b', icon: <IconTextAlignmentCentre size={IconSize.Size16} />, ariaLabel: 'Text Align Center' },
        { id: 'c', icon: <IconTextAlignmentRight size={IconSize.Size16} />, ariaLabel: 'Text Align Right' },
    ],
};

export const IconAndText = SliderTemplate.bind({});
IconAndText.args = {
    items: [
        {
            id: 'a',
            icon: <IconTextAlignmentLeft size={IconSize.Size16} />,
            ariaLabel: 'Text Align Left',
            value: 'Title 1',
        },
        {
            id: 'b',
            icon: <IconTextAlignmentCentre size={IconSize.Size16} />,
            ariaLabel: 'Text Align Center',
            value: 'Title 2',
        },
        {
            id: 'c',
            icon: <IconTextAlignmentRight size={IconSize.Size16} />,
            ariaLabel: 'Text Align Right',
            value: 'Title 3',
        },
    ],
};
