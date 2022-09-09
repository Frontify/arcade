import React, { useState } from 'react';
import { EditableInput, EditableInputProps, EditableMode } from '@components/EditableInput/EditableInput';
import { Story } from '@storybook/react';
import { IconPen } from '@foundation/Icon';

export default {
    title: 'Components/Editable Input',
    component: EditableInput,
    parameters: { actions: { argTypesRegex: '^on.*' } },
};

const ButtonTemplate: Story<EditableInputProps> = (args: EditableInputProps) => (
    <EditableInput {...args}>{args.children}</EditableInput>
);

export const Default = ButtonTemplate.bind({});
Default.args = {
    children: (
        <h1>
            hey default <IconPen />
        </h1>
    ),
};
Default.storyName = 'Editable Input';

export const EditableInputSingleCLick = ButtonTemplate.bind({});
EditableInputSingleCLick.args = {
    children: (
        <h2>
            Im so single
            <IconPen />
        </h2>
    ),
};

export const ControlledInputExample: Story<EditableInputProps> = () => {
    const [label, setLabel] = useState('Im set from the outside');

    return (
        <EditableInput
            onEditableSave={(value) => setLabel(value)}
            options={{
                additionalValues: 'ID',
                enableDoubleClick: true,
                customInputTextClasses: 'tw-text-2xl tw-w-fit',
                customContainerClasses: 'tw-flex tw-w-fit',
            }}
        >
            <div>
                <h1 className={'tw-text-2xl tw-w-fit'}>{label}</h1>
                <IconPen />
            </div>
        </EditableInput>
    );
};

export const OverrideEditableStateToInput = ButtonTemplate.bind({});
OverrideEditableStateToInput.args = {
    children: (
        <div>
            <h1 className="tw-text-2xl">
                Im such a Input Mode
                <IconPen />
            </h1>
        </div>
    ),
    options: {
        mode: EditableMode.INPUT,
        customInputTextClasses: 'tw-text-2xl',
        customContainerClasses: 'tw-flex',
    },
};
