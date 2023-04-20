/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { Grid, GridProps } from './Grid';
import { SPACING_VALUES } from '@utilities/dimensions';
import { Meta, StoryFn } from '@storybook/react';
import { Box } from '@components/Box';
import { merge } from '@utilities/merge';

const EXAMPLE_CONTENT = 'Lorem ipsum dolor sit amet';

export default {
    title: 'Layout/Grid',
    component: Grid,
    tags: ['autodocs'],
    argTypes: {
        spacingX: {
            options: SPACING_VALUES,
            control: { type: 'select' },
        },
        spacingY: {
            options: SPACING_VALUES,
            control: { type: 'select' },
        },
        padding: {
            options: SPACING_VALUES,
            control: { type: 'select' },
        },
        margin: {
            options: SPACING_VALUES,
            control: { type: 'select' },
        },
    },
    args: {
        spacingX: 4,
        spacingY: 4,
        column: 4,
        'data-test-id': 'custom-test-id',
        padding: 4,
        margin: 4,
        width: '100%',
        rowHeight: '100px',
        maxHeight: undefined,
        bg: 'tw-bg-box-positive-strong',
        color: 'tw-bg-box-positive-strong-inverse',
    },
} as Meta<GridProps>;

const contentClasses = [
    'tw-bg-box-selected-strong',
    'tw-bg-box-positive-strong',
    'tw-bg-box-negative-strong',
    'tw-bg-box-warning-strong',
    'tw-bg-box-neutral-strong',
    'tw-bg-box-selected-strong',
    'tw-bg-box-positive-strong',
    'tw-bg-box-negative-strong',
    'tw-bg-box-warning-strong',
    'tw-bg-box-neutral-strong',
    'tw-bg-box-selected-strong',
    'tw-bg-box-positive-strong',
    'tw-bg-box-negative-strong',
    'tw-bg-box-warning-strong',
    'tw-bg-box-neutral-strong',
];

export const Default: StoryFn<GridProps> = (args: GridProps) => {
    return (
        <Grid {...args}>
            {contentClasses.map((contentClass, i) => {
                const key = `content-key-${contentClass}-${i}`;
                return (
                    <Box key={key} className={merge(['tw-w-full tw-h-full', contentClass])}>
                        {EXAMPLE_CONTENT}
                    </Box>
                );
            })}
        </Grid>
    );
};
