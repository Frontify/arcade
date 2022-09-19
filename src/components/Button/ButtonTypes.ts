/* (c) Copyright Frontify Ltd., all rights reserved. */

export enum ButtonRounding {
    Medium = 'Medium',
    Full = 'Full',
}

export enum ButtonStyle {
    Default = 'Default',
    Positive = 'Positive',
    Negative = 'Negative',
    Danger = 'Danger',
    Primary = 'Primary',
    Secondary = 'Secondary',
}

export enum UpdatedButtonStyle {
    Default = 'Default',
    Positive = 'Positive',
    Negative = 'Negative',
    Danger = 'Danger',
}

export enum ButtonSize {
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large',
}

export enum ButtonType {
    Button = 'Button',
    Submit = 'Submit',
    Reset = 'Reset',
}

export enum ButtonEmphasis {
    Default = 'Default',
    Weak = 'Weak',
    Strong = 'Strong',
}

export type ButtonElements = {
    button: string;
    icon: string;
    text: string;
};
