/* (c) Copyright Frontify Ltd., all rights reserved. */

import { useMemoizedId } from '@hooks/useMemoizedId';
import { merge } from '@utilities/merge';
import React, { Children, isValidElement, ReactNode, useState } from 'react';
import { RadioButtonEmphasis, RadioButtonProps } from './RadioButton';
import { Text } from '@typography/Text';

export enum RadioListDirection {
    Horizontal = 'Horizontal',
    Vertical = 'Vertical',
}

export type RadioListProps = {
    children: ReactNode;
    onChange: (value: string) => void;
    direction?: RadioListDirection;
    defaultValue?: string;
};

export const RadioList = ({
    children,
    defaultValue,
    direction = RadioListDirection.Horizontal,
    onChange,
}: RadioListProps) => {
    const [activeValue, setActiveValue] = useState(defaultValue);

    const radioButtons: RadioButtonProps[] =
        Children.map(children, (child) => {
            if (!isValidElement<RadioButtonProps>(child)) {
                return null;
            }
            return child?.props;
        }) ?? [];

    return (
        <div className={merge(['tw-flex', direction === RadioListDirection.Horizontal ? 'tw-gap-4' : 'tw-flex-col'])}>
            {radioButtons.map((radio, index) => {
                const id = useMemoizedId(radio.value);
                return (
                    <div className="tw-flex tw-items-center tw-mb-2" key={id}>
                        <input
                            disabled={radio.disabled}
                            id={id}
                            type="radio"
                            name="default-radio"
                            value={radio.value}
                            defaultChecked={radio.value === activeValue}
                            className={merge([
                                'tw-peer w-w-4 tw-h-4 tw-border-black-60 disabled:tw-border-black-10 focus:tw-ring-0 focus:tw-ring-offset-0',
                                radio.emphasis === RadioButtonEmphasis.Weak
                                    ? 'tw-text-black-80'
                                    : 'tw-text-box-selected-strong',
                            ])}
                            onChange={() => {
                                setActiveValue(radioButtons[index].value);
                                onChange(radioButtons[index].value);
                            }}
                        />
                        {!radio.hideLabel && (
                            <label
                                htmlFor={id}
                                className={merge([
                                    'tw-flex tw-flex-col tw-pl-2 tw-text-sm tw-font-normal peer-checked:tw-font-medium tw-text-black-80 peer-disabled:tw-text-black-40',
                                ])}
                            >
                                {radio.value}
                                {radio.helperText && (
                                    <span className="tw-text-black-80 tw-font-normal">{radio.helperText}</span>
                                )}
                            </label>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
