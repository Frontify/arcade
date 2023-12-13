/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ReactElement } from 'react';
import { Validation, validationTextClassMap } from './validation';
import { merge } from './merge';
import { Button, ButtonEmphasis, ButtonSize, ButtonStyle, LoadingCircle, LoadingCircleSize } from '@components/index';
import {
    CheckmarkElements,
    CheckmarkEmphasis,
    CheckmarkProps,
    CheckmarkSize,
    InputActionsProps,
    InputExtraActionsProps,
} from 'src/types/input';
import { generateRandomId } from './generateRandomId';
import {
    IconCheckMark16,
    IconCross16,
    IconExclamationMarkTriangle16,
    IconEye16,
    IconEyeOff16,
    IconMinus16,
} from '@foundation/Icon/Generated';

type HelperTextProps = {
    text: string;
    disabled?: boolean;
    'data-test-id'?: string;
    validationStyle?: Validation;
};

type InputStyleGroup =
    | 'base'
    | 'width'
    | 'height'
    | 'element'
    | 'focus'
    | 'focusWithin'
    | 'hover'
    | 'disabled'
    | 'readOnly';

export const InputStyles: Record<InputStyleGroup, string> = {
    base: 'tw-flex tw-items-center tw-justify-between tw-gap-2 tw-px-3 tw-transition tw-text-sm tw-font-sans tw-relative tw-bg-base tw-border tw-rounded tw-line-strong',
    width: 'tw-w-full',
    height: 'tw-h-9 tw-min-h-[2.35rem]',
    element: 'tw-bg-base tw-border-line-strong tw-text-text tw-placeholder-text-x-weak tw-outline-none tw-p-2',
    focus: 'focus:tw-border-line-xx-strong',
    focusWithin: 'focus-within:tw-border-line-xx-strong focus-within:hover:tw-border-line-xx-strong',
    hover: 'hover:tw-border-line-x-strong',
    disabled:
        'disabled:tw-bg-box-disabled disabled:tw-border-line-weak disabled:tw-text-text-disabled disabled:hover:tw-cursor-not-allowed disabled:hover:tw-border-line-weak',
    readOnly:
        'read-only:tw-bg-box-disabled read-only:tw-border-none read-only:tw-text-text-weak read-only:hover:tw-cursor-not-allowed read-only:hover:tw-border-line-weak',
};

export const HelperText = ({
    text,
    disabled = false,
    validationStyle = Validation.Default,
    'data-test-id': dataTestId = 'fondue-helper-text',
}: HelperTextProps): ReactElement => {
    return (
        <span
            data-test-id={dataTestId}
            className={merge([
                'tw-text-s tw-font-sans',
                disabled ? 'tw-text-black-40' : validationTextClassMap[validationStyle],
            ])}
        >
            {text}
        </span>
    );
};
HelperText.displayName = 'FondueHelperText';

export const GetStatusIcon = (status: Validation, dataTestId: string): ReactElement | null => {
    let statusIcon: ReactElement | null;
    switch (status) {
        case Validation.Success:
            statusIcon = <IconCheckMark16 />;
            break;
        case Validation.Error:
        case Validation.Warning:
            statusIcon = <IconExclamationMarkTriangle16 />;
            break;
        case Validation.Loading:
            statusIcon = <LoadingCircle size={LoadingCircleSize.Small} />;
            break;
        default:
            statusIcon = null;
    }
    if (statusIcon) {
        return (
            <span className={validationTextClassMap[status]} data-test-id={`${dataTestId}-status-icon`}>
                {statusIcon}
            </span>
        );
    }
    return null;
};

GetStatusIcon.displayName = 'FondueGetStatusIcon';

export const InputActions = ({
    clearable,
    disabled,
    obfuscated,
    isObfuscated,
    callbacks,
    dataTestId = 'fondue-input-actions',
}: InputActionsProps): ReactElement => {
    return (
        <span className="tw-flex tw-items-center tw-justify-between tw-w-auto">
            {obfuscated && (
                <Button
                    size={ButtonSize.Small}
                    style={ButtonStyle.Default}
                    disabled={disabled}
                    emphasis={ButtonEmphasis.Weak}
                    onClick={callbacks.password}
                    title={`${isObfuscated ? 'show' : 'hide'} text input`}
                    aria-label={`${isObfuscated ? 'show' : 'hide'} text input`}
                    icon={isObfuscated ? <IconEye16 /> : <IconEyeOff16 />}
                    data-test-id={`${dataTestId}-visibility-icon`}
                />
            )}
            {clearable && (
                <Button
                    style={ButtonStyle.Default}
                    onClick={callbacks.clearable}
                    disabled={disabled}
                    emphasis={ButtonEmphasis.Weak}
                    icon={<IconCross16 />}
                    title="Clear Input"
                    size={ButtonSize.Small}
                    aria-describedby="Clear Input Value"
                    aria-label="Clear value"
                    data-test-id={`${dataTestId}-clear`}
                />
            )}
        </span>
    );
};

InputActions.displayName = 'FondueInputActionButtons';

export const InputExtraActions = ({ actions, disabled, dataTestId }: InputExtraActionsProps) => {
    return actions.map((action) => {
        const id = generateRandomId();
        return (
            <Button
                key={`extra-action-${id}`}
                style={ButtonStyle.Default}
                onClick={action.callback}
                disabled={disabled}
                emphasis={ButtonEmphasis.Weak}
                icon={action.icon}
                size={ButtonSize.Small}
                aria-describedby="Clear Input Value"
                aria-label="Clear value"
                title={action.title}
                data-test-id={`${dataTestId}-extra-action`}
            />
        );
    });
};

InputExtraActions.displayName = 'FondueInputExtraActions';

const CheckboxStyles: Record<CheckmarkEmphasis, Record<CheckmarkElements, string>> = {
    default: {
        base: 'tw-bg-base tw-border tw-border-line-x-strong hover:tw-bg-box-selected-weak hover:tw-border-line-xx-strong',
        selected:
            'tw-bg-box-selected-strong tw-text-box-selected-strong-inverse tw-border-box-selected-strong hover:tw-bg-box-selected-strong-hover',
        disabled:
            'tw-bg-box-disabled-strong tw-text-box-disabled-strong-inverse tw-cursor-not-allowed tw-border-line-strong',
    },
    weak: {
        base: 'tw-bg-base tw-border tw-border-line-x-strong hover:tw-bg-box-selected-weak hover:tw-border-line-xx-strong',
        selected:
            'tw-bg-box-neutral-strong tw-text-box-neutral-strong-inverse tw-border-box-neutral-strong hover:tw-bg-box-neutral-strong-hover',
        disabled:
            'tw-bg-box-disabled-strong tw-text-box-disabled-strong-inverse tw-cursor-not-allowed tw-border-line-strong',
    },
};

const checkmarkSizeMap: Record<CheckmarkSize, string> = {
    small: 'tw-w-4 tw-h-4 tw-mr-1',
    large: 'tw-w-5 tw-h-5 tw-mr-2',
};

export const Checkmark = ({
    checked = false,
    mixed = false,
    emphasis = 'default',
    size = 'small',
    disabled = false,
}: CheckmarkProps): ReactElement => {
    const groupedClasses = () => {
        switch (true) {
            case disabled:
                return CheckboxStyles[emphasis].disabled;
            case checked:
            case mixed:
                return CheckboxStyles[emphasis].selected;
            default:
                return CheckboxStyles[emphasis].base;
        }
    };

    const getIcon = () => {
        switch (true) {
            case checked:
                return <IconCheckMark16 />;
            case mixed:
                return <IconMinus16 />;
            default:
                break;
        }
    };

    return (
        <span
            className={merge([
                'tw-rounded tw-flex tw-justify-center tw-items-center',
                checkmarkSizeMap[size],
                groupedClasses(),
            ])}
        >
            {getIcon()}
        </span>
    );
};

Checkmark.displayName = 'FondueCheckmark';
