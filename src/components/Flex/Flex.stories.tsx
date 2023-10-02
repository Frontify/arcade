/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Meta, StoryFn } from '@storybook/react';
import { Flex, FlexProps } from './Flex';
import { Box } from '@components/Box';
import { BOX_BG_ALIAS_TOKENS_CLASSES, BOX_TEXT_ALIAS_TOKENS_CLASSES } from '@utilities/tokens';
import { SPACING_VALUES } from '@utilities/dimensions';

const DirectionTypes = ['row', 'column', 'row-reverse', 'column-reverse'];

const WrapTypes = ['nowrap', 'wrap', 'wrap-reverse'];

const JustifyTypes = ['start', 'end', 'center', 'between', 'around', 'evenly'];

const AlignItemsTypes = ['start', 'end', 'center', 'baseline', 'stretch'];

const AlignContentTypes = ['start', 'end', 'center', 'normal', 'between', 'around', 'evenly', 'baseline', 'stretch'];

const FlexItemLoremIpsum = () => {
    return <Box className="tw-bg-box-positive-strong">Lorem ipsum dolor sit amet, consectetur adipiscing elit</Box>;
};

const FlexItemTestContent = () => {
    return <Box className="tw-bg-box-positive-strong">This is some test content</Box>;
};

export default {
    title: 'Layout/Flex',
    component: Flex,
    tags: ['autodocs'],
    argTypes: {
        direction: {
            options: DirectionTypes,
            control: { type: 'select' },
        },
        wrap: {
            options: WrapTypes,
            control: { type: 'select' },
        },
        justify: {
            options: JustifyTypes,
            control: { type: 'select' },
        },
        alignItems: {
            options: AlignItemsTypes,
            control: { type: 'select' },
        },
        alignContent: {
            options: AlignContentTypes,
            control: { type: 'select' },
        },
        as: {
            options: ['div', 'span'],
            control: {
                type: 'select',
            },
        },
        bg: {
            options: BOX_BG_ALIAS_TOKENS_CLASSES,
            control: {
                type: 'select',
            },
        },
        color: {
            options: BOX_TEXT_ALIAS_TOKENS_CLASSES,
            control: {
                type: 'select',
            },
        },
        padding: {
            options: Object.values(SPACING_VALUES),
            control: 'select',
            defaultValue: '',
        },
        paddingX: {
            options: Object.values(SPACING_VALUES),
            control: 'select',
            defaultValue: '',
        },
        paddingY: {
            options: Object.values(SPACING_VALUES),
            control: 'select',
            defaultValue: '',
        },
        margin: {
            options: Object.values(SPACING_VALUES),
            control: 'select',
            defaultValue: '',
        },
        marginX: {
            options: Object.values(SPACING_VALUES),
            control: 'select',
            defaultValue: '',
        },
        marginY: {
            options: Object.values(SPACING_VALUES),
            control: 'select',
            defaultValue: '',
        },
        spacing: {
            options: Object.values(SPACING_VALUES),
            control: 'select',
            defaultValue: '',
        },
        spacingX: {
            options: Object.values(SPACING_VALUES),
            control: 'select',
            defaultValue: '',
        },
        spacingY: {
            options: Object.values(SPACING_VALUES),
            control: 'select',
            defaultValue: '',
        },
        minWidth: {
            type: 'string',
        },
        maxWidth: {
            type: 'string',
        },
        minHeight: {
            type: 'string',
        },
        maxHeight: {
            type: 'string',
        },
    },
    args: {
        direction: 'row',
        wrap: 'wrap',
        justify: 'center',
        alignItems: 'center',
        alignContent: 'center',
        'data-test-id': 'custom-test-id',
        bg: 'tw-bg-box-neutral',
        color: 'tw-text-box-positive-strong-inverse',
        as: 'div',
        margin: 4,
        padding: 4,
        minWidth: undefined,
        maxWidth: undefined,
        minHeight: '300px',
        maxHeight: undefined,
    },
} as Meta<FlexProps>;

export const Default: StoryFn<FlexProps> = (args: FlexProps) => {
    return (
        <Flex {...args}>
            <FlexItemLoremIpsum />
            <FlexItemLoremIpsum />
            <FlexItemTestContent />
            <FlexItemTestContent />
        </Flex>
    );
};
