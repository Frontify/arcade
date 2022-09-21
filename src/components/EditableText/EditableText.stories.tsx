import React, { useState } from 'react';
import { EditableMode, EditableText, EditableTextProps } from '@components/EditableText/EditableText';
import { Story } from '@storybook/react';
import { IconPen, IconSize } from '@foundation/Icon';

export default {
    title: 'Components/Editable Text',
    component: EditableText,
    parameters: { actions: { argTypesRegex: '^on.*' } },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
        options: {
            table: {
                category: 'Custom',
            },
        },
        onAdditionalValueSave: {
            table: {
                category: 'Event',
            },
        },
        onEditableSave: {
            table: {
                category: 'Event',
            },
        },
        onModeChange: {
            table: {
                category: 'Event',
            },
        },
    },
};

const EditableTemplate: Story<EditableTextProps> = (args: EditableTextProps) => (
    <div className="tw-p-5">
        <EditableText {...args}>{args.children}</EditableText>
    </div>
);

const EditableTemplateIcon: Story<EditableTextProps> = (args: EditableTextProps) => {
    const [label, setLabel] = useState('Im set from the outside');

    return (
        <div className="tw-flex tw-items-center tw-p-5">
            <EditableText {...args} onEditableSave={(value) => setLabel(value)}>
                <h1>{label}</h1>
            </EditableText>{' '}
            <IconPen size={IconSize.Size24} />
        </div>
    );
};

export const EditableTextDefault = EditableTemplate.bind({});
EditableTextDefault.args = {
    children: <p>Change me</p>,
    options: {},
};

export const Default = EditableTemplate.bind({});
Default.args = {
    children: (
        <div className={'tw-flex tw-flex-row tw-items-center'}>
            <h1 className={'tw-text-text'}>hey Styled</h1>
        </div>
    ),
    options: {
        mode: EditableMode.LABEL,
        enableDoubleClick: false,
        additionalValues: 'Values only for the Event',
    },
};
Default.storyName = 'Editable Text Custom Styling';

export const ControlledExample: Story<EditableTextProps> = () => {
    const [label, setLabel] = useState('Im set from the outside');

    return (
        <div className="tw-flex tw-items-center tw-p-5">
            <EditableText
                onEditableSave={(value) => setLabel(value)}
                options={{
                    additionalValues: 'ID',
                    enableDoubleClick: true,
                }}
            >
                <h1 className={'tw-text-xl'}>{label}</h1>
            </EditableText>
            <IconPen size={IconSize.Size24} />
        </div>
    );
};

export const ControllelInitialInput = EditableTemplateIcon.bind({});
ControllelInitialInput.args = {
    options: {
        mode: EditableMode.INPUT,
    },
};

export const ControllelSlimInputField = EditableTemplateIcon.bind({});
ControllelSlimInputField.args = {
    options: {
        mode: EditableMode.INPUT,
        isSlimInputField: true,
    },
};
