/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconCheckMark, IconMinus } from '@foundation/Icon/Generated';
import { InputLabel, InputLabelTooltipProps } from '@components/InputLabel/InputLabel';
import React, { ForwardRefRenderFunction, HTMLAttributes, ReactNode, forwardRef, useEffect, useState } from 'react';

import { FOCUS_STYLE } from '@utilities/focusStyle';
import { IconSize } from '@foundation/Icon';
import { merge } from '@utilities/merge';
import { mergeProps } from '@react-aria/utils';
import { useCheckbox } from '@react-aria/checkbox';
import { useFocusRing } from '@react-aria/focus';
import { useForwardedRef } from '@utilities/useForwardedRef';
import { useMemoizedId } from '@hooks/useMemoizedId';
import { useToggleState } from '@react-stately/toggle';

export enum CheckboxState {
    Checked = 'Checked',
    Unchecked = 'Unchecked',
    Mixed = 'Mixed',
}

export enum CheckboxEmphasis {
    Default = 'Default',
    Weak = 'Weak',
    Strong = 'Strong',
}

export enum CheckboxSize {
    Default = 'Default',
    Large = 'Large',
    XLarge = 'XLarge',
}

export type CheckboxProps = {
    id?: string;
    state?: CheckboxState;
    emphasis?: CheckboxEmphasis;
    size?: CheckboxSize;
    disabled?: boolean;
    required?: boolean;
    value?: string;
    onChange?: (isChecked: boolean) => void;
    label?: string;
    hideLabel?: boolean;
    tooltip?: InputLabelTooltipProps;
    helperText?: string;
    'aria-label'?: string;
    groupInputProps?: HTMLAttributes<HTMLElement>;
    'data-test-id'?: string;
};

const isCheckedOrMixed = (checked: CheckboxState): boolean => {
    return checked === CheckboxState.Checked || checked === CheckboxState.Mixed;
};

const emphasisDefaultClasses =
    'tw-bg-box-selected-strong tw-text-box-selected-strong-inverse hover:tw-bg-box-selected-strong-hover';

const emphasisCheckedClassesMap: Record<CheckboxEmphasis, string> = {
    [CheckboxEmphasis.Weak]:
        'tw-bg-box-neutral-strong tw-text-box-neutral-strong-inverse hover:tw-bg-box-neutral-strong-hover',
    [CheckboxEmphasis.Default]: emphasisDefaultClasses,
    [CheckboxEmphasis.Strong]: emphasisDefaultClasses,
};

const sizeClassesMap: Record<CheckboxSize, string> = {
    [CheckboxSize.Default]: 'tw-h-4 tw-w-4',
    [CheckboxSize.Large]: 'tw-h-5 tw-w-5',
    [CheckboxSize.XLarge]: 'tw-h-8 tw-w-8',
};

const CheckboxComponent: ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (
    {
        id: propId,
        emphasis = CheckboxEmphasis.Default,
        size = CheckboxSize.Default,
        disabled,
        required,
        label,
        hideLabel,
        tooltip,
        helperText,
        'aria-label': ariaLabel = 'Checkbox',
        value,
        groupInputProps,
        onChange,
        state = CheckboxState.Unchecked,
        'data-test-id': dataTestId = 'checkbox',
    },
    ref,
) => {
    const id = useMemoizedId(propId);
    const inputRef = useForwardedRef<HTMLInputElement | null>(ref);
    const { focusProps } = useFocusRing();
    const toggleState = useToggleState({
        onChange: disabled ? undefined : onChange,
        isSelected: state === CheckboxState.Checked,
    });
    const [showFocus, setShowFocus] = useState<Nullable<boolean>>();
    const [listeningForKeyboardEvents, setListeningForKeyboardEvents] = useState<Nullable<boolean>>();

    const tabFocusListener = (event: KeyboardEvent) => {
        if (event.key === 'Tab') {
            setShowFocus(true);
        }
    };

    const blurListener = () => {
        setShowFocus(false);
    };

    useEffect(() => {
        if (!listeningForKeyboardEvents) {
            inputRef?.current?.removeEventListener('keyup', tabFocusListener);
            inputRef?.current?.addEventListener('keyup', tabFocusListener);
            inputRef?.current?.removeEventListener('blur', blurListener);
            inputRef?.current?.addEventListener('blur', blurListener);

            setListeningForKeyboardEvents(true);
        }
    }, [listeningForKeyboardEvents, inputRef]);

    const { inputProps } = useCheckbox(
        {
            isDisabled: disabled,
            isRequired: required,
            isIndeterminate: state === CheckboxState.Mixed,
            'aria-label': ariaLabel,
            value,
        },
        toggleState,
        inputRef,
    );

    const stateMap: Record<CheckboxState, ReactNode> = {
        [CheckboxState.Checked]: (
            <IconCheckMark size={size === CheckboxSize.XLarge ? IconSize.Size24 : IconSize.Size16} />
        ),
        [CheckboxState.Mixed]: <IconMinus />,
        [CheckboxState.Unchecked]: null,
    };

    const checkedOrMixed = isCheckedOrMixed(state);

    const disabledClasses = merge([
        'tw-bg-box-disabled tw-pointer-events-none tw-text-box-disabled-inverse tw-border-line-strong',
        checkedOrMixed && 'tw-text-box-disabled-inverse tw-border-line-strong',
    ]);

    const enabledClasses = checkedOrMixed
        ? emphasisCheckedClassesMap[emphasis]
        : merge([
              'tw-bg-base hover:tw-bg-box-neutral',
              emphasis === CheckboxEmphasis.Strong
                  ? 'tw-border-2 tw-border-box-selected-strong'
                  : 'tw-border tw-border-line-xx-strong',
          ]);

    return (
        <div className="tw-gap-1 tw-transition-colors tw-w-full" data-test-id={dataTestId}>
            <div className={merge(['tw-inline-flex tw-flex-row tw-rounded tw-w-full', showFocus ? FOCUS_STYLE : ''])}>
                <InputLabel
                    disabled={disabled}
                    clickable
                    htmlFor={id}
                    tooltip={tooltip}
                    required={required}
                    bold={checkedOrMixed}
                >
                    <span className="tw-flex tw-items-center tw-whitespace-nowrap">
                        <span className="tw-inline-flex tw-mr-1.5">
                            <input
                                {...mergeProps(groupInputProps || inputProps, focusProps)}
                                id={id}
                                ref={inputRef}
                                className="tw-sr-only"
                                data-test-id={`${dataTestId}-input`}
                                aria-label={ariaLabel}
                                role="checkbox"
                                aria-checked={state === CheckboxState.Checked}
                                required={required}
                            />
                            <span
                                data-test-id={`${dataTestId}-icon-box`}
                                aria-hidden="true"
                                className={merge([
                                    'tw-leading-3 tw-p-2 tw-relative tw-flex tw-items-center tw-justify-center tw-rounded tw-shrink-0 tw-flex-none',
                                    sizeClassesMap[size],
                                    disabled ? disabledClasses : enabledClasses,
                                ])}
                            >
                                {stateMap[state]}
                            </span>
                        </span>
                        <span className="tw-inline-flex tw-flex-col tw-min-w-0">
                            {label && !hideLabel && (
                                <span
                                    data-test-id={`${dataTestId}-label`}
                                    className={merge([
                                        'tw-text-ellipsis tw-overflow-hidden',
                                        'tw-text-xs tw-select-none hover:tw-cursor-pointer hover:tw-text-black dark:hover:tw-text-white group-hover:tw-text-black dark:group-hover:tw-text-white',
                                        checkedOrMixed && 'tw-font-medium',
                                    ])}
                                    title={label}
                                >
                                    {label}
                                </span>
                            )}
                            {helperText && !hideLabel && (
                                <span
                                    data-test-id={`${dataTestId}-helper-text`}
                                    className={merge([
                                        'tw-text-ellipsis tw-overflow-hidden',
                                        'tw-font-sans tw-text-xs tw-font-normal',
                                        disabled ? 'text-disabled' : 'tw-text-text-weak',
                                    ])}
                                    title={helperText}
                                >
                                    {helperText}
                                </span>
                            )}
                        </span>
                    </span>
                </InputLabel>
            </div>
        </div>
    );
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(CheckboxComponent);
Checkbox.displayName = 'FondueCheckbox';
