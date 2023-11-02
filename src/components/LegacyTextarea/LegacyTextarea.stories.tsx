/* (c) Copyright Frontify Ltd., all rights reserved. */

import { useEffect, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { LegacyTextarea as TextareaComponent, TextareaProps } from './LegacyTextarea';
import { Validation } from '@utilities/validation';

export default {
    title: 'Deprecated/LegacyTextarea',
    component: TextareaComponent,
    tags: ['autodocs'],
    args: {
        disabled: false,
        required: false,
        autosize: false,
        resizeable: true,
        selectable: false,
        validation: Validation.Default,
        focusOnMount: false,
    },
    argTypes: {
        value: { type: 'string' },
        placeholder: { type: 'string' },
        decorator: { type: 'string' },
        onInput: { action: 'onInput' },
        onBlur: { action: 'onBlur' },
        onClear: { action: 'onClear' },
        onFocus: { action: 'onFocus' },
        validation: {
            options: Object.values(Validation),
            control: { type: 'select' },
        },
        minRows: { type: 'number' },
        maxRows: { type: 'number' },
        onEnterPressed: { action: 'onEnterPressed', table: { disable: true } },
        focusOnMount: { type: 'boolean' },
    },
} as Meta<TextareaProps>;

export const LegacyTextarea: StoryFn<TextareaProps> = (args: TextareaProps) => {
    const [input, setInput] = useState('');
    useEffect(() => setInput(`${args.value ?? ''}`), [args.value]);

    return <TextareaComponent {...args} value={input} onInput={setInput} />;
};

export const FocusOnMount = LegacyTextarea.bind({});
FocusOnMount.args = {
    focusOnMount: true,
};
