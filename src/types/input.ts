/* (c) Copyright Frontify Ltd., all rights reserved. */

import { TooltipProps } from '@components/Tooltip';
import { Validation } from '@utilities/validation';
import type { AriaAttributes, InputHTMLAttributes, ReactElement } from 'react';

export type InputSharedBaseProps = {
    autocomplete?: boolean;
    clearable?: boolean;
    decorator?: ReactElement;
    extraActions?: ExtraAction[];
    hugWidth?: boolean;
    id?: string;
    status?: Validation;
    'data-test-id'?: string;
} & AriaAttributes;

export type InputBaseProps<TValue> = {
    size?: number;
    suffix?: string;
    value?: TValue;
    valueSelect?: boolean;
    onChange?: (value?: TValue) => void;
} & InputSharedBaseProps &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'onChange' | 'value'>;

export type InputType = 'Text' | 'Textarea' | 'Password' | 'Number';

export const InputTypes: Record<InputType, string> = {
    Text: 'text',
    Textarea: 'textarea',
    Password: 'password',
    Number: 'number',
};

export type InputActionCallbacks = {
    text?: () => void;
    textarea?: () => void;
    password?: () => void;
    increment?: () => void;
    clearable?: () => void;
};

export type InputActionsProps = {
    clearable?: boolean;
    obfuscated?: boolean;
    isObfuscated?: boolean;
    increment?: boolean;
    disabled?: boolean;
    callbacks: InputActionCallbacks;
    dataTestId?: string;
};

export type ExtraAction = {
    element?: ReactElement;
    tooltip?: TooltipProps;
};

export type InputExtraActionsProps = {
    actions: ExtraAction[];
    disabled?: boolean;
    dataTestId?: string;
};
