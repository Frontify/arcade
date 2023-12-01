/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Meta, StoryFn } from '@storybook/react';
import { Select, SelectProps } from './Select';
import { Box } from '..';
import { Validation } from '@utilities/validation';
import { SelectGroupItem } from '@components/SelectGroupItem/SelectGroupItem';
import { SelectItem } from '@components/SelectItem/SelectItem';
import { IconClock16, IconFaceSad16, IconFocalPoint16, IconNook16 } from '@foundation/Icon';

const ITEM_GROUPS_1 = [
    { id: '1', title: 'title prop of Apple', value: 'value prop of Apple', decorator: <IconNook16 /> },
    { id: '2', value: 'value prop of Orange', decorator: <IconClock16 /> },
    { id: '3', title: 'title prop of Pear', value: 'value prop of Pear' },
    { id: '4', title: 'title prop of Kiwi', value: 'value prop of Kiwi', disabled: true },
];

const ITEM_GROUPS_2 = [
    { id: '5', title: 'title prop of Cabbage', value: 'value prop of Cabbage', decorator: <IconFocalPoint16 /> },
    { id: '6', value: 'value prop of Carrot' },
    { id: '7', title: 'title prop of Potato', value: 'value prop of Potato' },
    { id: '8', value: 'value prop of Squash', decorator: <IconFaceSad16 /> },
];

export default {
    title: 'Components/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        label: { type: 'string' },
        hiddenLabel: {
            control: { type: 'boolean' },
            defaultValue: false,
        },
        listPlaceholder: {
            type: 'string',
            description: 'String value that will be initially displayed as the option group title',
            defaultValue: 'Select a option',
        },
        items: {
            type: 'string',
            description: 'Collection of item objects to render as options',
            defaultValue: undefined,
        },
        status: {
            control: { type: 'select' },
            options: Object.values(Validation),
            defaultValue: Validation.Default,
        },
        onChange: {
            action: 'onChange',
            type: 'function',
            description: 'Callback function to return current selected item',
            table: {
                defaultValue: { summary: undefined },
            },
        },
    },
    args: {
        label: 'Test Select Menu',
        listPlaceholder: 'Select a fruit/veggie',
    },
} as Meta<SelectProps>;

const Template: StoryFn<SelectProps> = (args) => (
    <Box className="tw-min-h-[800px]">
        <Select {...args}>
            <SelectGroupItem key="group-one">
                {...ITEM_GROUPS_1.map((item) => (
                    <SelectItem
                        key={item.id}
                        value={item.value}
                        title={item.title}
                        id={item.id}
                        decorator={item.decorator}
                        disabled={item.disabled}
                    />
                ))}
            </SelectGroupItem>
            <SelectGroupItem groupTitle="Veggies" key="group-two">
                {...ITEM_GROUPS_2.map((item) => (
                    <SelectItem
                        key={item.id}
                        value={item.value}
                        title={item.title}
                        id={item.id}
                        decorator={item.decorator}
                    />
                ))}
            </SelectGroupItem>
        </Select>
    </Box>
);

export const Default = Template.bind({});
