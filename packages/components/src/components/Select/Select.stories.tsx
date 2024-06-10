/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconIcon } from '@frontify/fondue-icons';
import { type Meta, type StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Button } from '../Button/Button';

import { SelectCombobox } from './Combobox';
import { SelectInput } from './Select';
import { SelectItem, SelectItemGroup } from './SelectItem';
import { SelectSlot } from './SelectSlot';
import { Select } from './SelectWrapper';
import { type SelectItemType } from './useSelectData';

type Story = StoryObj<typeof meta>;
const meta: Meta<typeof SelectInput> = {
    component: SelectInput,
    subcomponents: {
        // @ts-expect-error Storybook types are incorrect
        'Select.Combobox': SelectCombobox,
        // @ts-expect-error Storybook types are incorrect
        'Select.Slot': SelectSlot,
        // @ts-expect-error Storybook types are incorrect
        'Select.Group': SelectItemGroup,
        // @ts-expect-error Storybook types are incorrect
        'Select.Item': SelectItem,
    },
    tags: ['autodocs'],
    parameters: {
        status: {
            type: 'in_progress',
        },
    },
    args: {
        ariaLabel: 'Select an item',
    },
};
export default meta;

export const SimpleSelect: Story = {
    name: 'Select',
    render: (args) => {
        return (
            <Select {...args}>
                <Select.Slot name="label">Label</Select.Slot>
                <Select.Slot name="menu">
                    <Select.Item value="test1">Test1</Select.Item>
                    <Select.Item value="test2">Test2</Select.Item>
                    <Select.Item value="test3">Test3</Select.Item>
                </Select.Slot>
            </Select>
        );
    },
};

export const Combobox: Story = {
    args: {
        placeholder: 'Select an item',
    },
    render: (args) => {
        return (
            <Select.Combobox {...args}>
                <Select.Slot name="label">Label</Select.Slot>
                <Select.Slot name="menu">
                    <Select.Item value="test1">Test1</Select.Item>
                    <Select.Item value="test2">Test2</Select.Item>
                    <Select.Item value="test3">Test3</Select.Item>
                </Select.Slot>
            </Select.Combobox>
        );
    },
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: (args) => {
        return (
            <Select {...args}>
                <Select.Slot name="label">Label</Select.Slot>
                <Select.Slot name="menu">
                    <Select.Item value="test1">Test1</Select.Item>
                    <Select.Item value="test2">Test2</Select.Item>
                    <Select.Item value="test3">Test3</Select.Item>
                </Select.Slot>
            </Select>
        );
    },
};

export const WithPlaceholder: Story = {
    args: {
        placeholder: 'Select an item',
    },
    render: (args) => {
        return (
            <Select {...args}>
                <Select.Slot name="label">Label</Select.Slot>
                <Select.Slot name="menu">
                    <Select.Item value="test1">Test1</Select.Item>
                    <Select.Item value="test2">Test2</Select.Item>
                    <Select.Item value="test3">Test3</Select.Item>
                </Select.Slot>
            </Select>
        );
    },
};

export const WithDecorator: Story = {
    args: {
        placeholder: 'Select an item',
    },
    render: (args) => {
        return (
            <Select {...args}>
                <Select.Slot name="left">
                    <IconIcon size={16} />
                </Select.Slot>
                <Select.Slot name="right">
                    <IconIcon size={16} />
                </Select.Slot>
                <Select.Slot name="label">Label</Select.Slot>
                <Select.Slot name="menu">
                    <Select.Item value="test1">Test1</Select.Item>
                    <Select.Item value="test2">Test2</Select.Item>
                    <Select.Item value="test3">Test3</Select.Item>
                </Select.Slot>
            </Select>
        );
    },
};

export const Clearable: Story = {
    args: {
        placeholder: 'Select an item',
    },
    render: (args) => {
        return (
            <Select {...args}>
                <Select.Slot name="clear" />
                <Select.Slot name="label">Label</Select.Slot>
                <Select.Slot name="menu">
                    <Select.Item value="test1">Test1</Select.Item>
                    <Select.Item value="test2">Test2</Select.Item>
                    <Select.Item value="test3">Test3</Select.Item>
                </Select.Slot>
            </Select>
        );
    },
};

export const CustomClearElement: Story = {
    args: {
        placeholder: 'Select an item',
    },
    render: (args) => {
        return (
            <Select {...args}>
                <Select.Slot name="clear">Clear</Select.Slot>
                <Select.Slot name="left">
                    <IconIcon size={16} />
                </Select.Slot>
                <Select.Slot name="right">
                    <IconIcon size={16} />
                </Select.Slot>
                <Select.Slot name="label">Label</Select.Slot>
                <Select.Slot name="menu">
                    <Select.Item value="test1">Test1</Select.Item>
                    <Select.Item value="test2">Test2</Select.Item>
                    <Select.Item value="test3">Test3</Select.Item>
                </Select.Slot>
            </Select>
        );
    },
};

export const DefaultItem: Story = {
    args: {
        defaultValue: 'test1',
    },
    render: (args) => {
        return (
            <Select {...args}>
                <Select.Slot name="label">Label</Select.Slot>
                <Select.Slot name="menu">
                    <Select.Item value="test1">Test1</Select.Item>
                    <Select.Item value="test2">Test2</Select.Item>
                    <Select.Item value="test3">Test3</Select.Item>
                </Select.Slot>
            </Select>
        );
    },
};

export const ItemGroups: Story = {
    render: (args) => {
        return (
            <Select {...args}>
                <Select.Slot name="label">Label</Select.Slot>
                <Select.Slot name="menu">
                    <Select.Item value="test1">Test1</Select.Item>
                    <Select.Item value="test2">Test2</Select.Item>
                    <Select.Group groupId="Group 1">
                        <Select.Item value="test3">Test3</Select.Item>
                        <Select.Item value="test4">Test4</Select.Item>
                        <Select.Item value="test5">Test5</Select.Item>
                    </Select.Group>
                    <Select.Item value="test6">Test6</Select.Item>
                </Select.Slot>
            </Select>
        );
    },
};

export const CustomItem: Story = {
    render: (args) => {
        return (
            <Select {...args}>
                <Select.Slot name="label">Label</Select.Slot>
                <Select.Slot name="menu">
                    <Select.Item value="ch" label="Switzerland">
                        <div className="tw-flex tw-items-center tw-gap-4">
                            <img src="https://flagsapi.com/CH/flat/16.png" alt="Switzerland" />
                            <p>Switzerland</p>
                        </div>
                    </Select.Item>
                    <Select.Item value="icon" label="Component">
                        <div className="tw-flex tw-items-center tw-gap-4">
                            <p>With a Component</p>
                            <IconIcon width={16} />
                        </div>
                    </Select.Item>
                    <Select.Item value="basic" label="Basic">
                        Basic
                    </Select.Item>
                </Select.Slot>
            </Select>
        );
    },
};

export const ExternallyControlled: Story = {
    render: (args) => {
        const [activeItem, setActiveItem] = useState<SelectItemType>();
        return (
            <>
                <Select
                    onSelect={(selectedItem) => {
                        setActiveItem(() => selectedItem);
                    }}
                    activeItem={activeItem}
                    {...args}
                >
                    <Select.Slot name="label">Label</Select.Slot>
                    <Select.Slot name="menu">
                        <Select.Item value="test1">Test1</Select.Item>
                        <Select.Item value="test2">Test2</Select.Item>
                        <Select.Item value="test3">Test3</Select.Item>
                    </Select.Slot>
                </Select>
                <Button
                    onPress={() =>
                        setActiveItem({
                            value: 'test1',
                            label: 'Test1',
                        })
                    }
                >
                    Set Test1
                </Button>
            </>
        );
    },
};
