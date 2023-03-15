/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Tooltip, TooltipAlignment, TooltipPosition } from '@components/Tooltip';
import IconQuestionMarkCircle from '@foundation/Icon/Generated/IconQuestionMarkCircle';
import { IconSize } from '@foundation/index';
import { generateRandomId } from '@utilities/generateRandomId';
import { merge } from '@utilities/merge';
import React, { Children, ReactNode, isValidElement, useEffect, useRef, useState } from 'react';
import { RadioButtonEmphasis, RadioButtonProps } from './RadioButton';

export enum RadioListDirection {
    Horizontal = 'Horizontal',
    Vertical = 'Vertical',
}

export type RadioListProps = {
    children: ReactNode;
    onChange?: (value: string) => void;
    direction?: RadioListDirection;
    defaultValue?: string;
};

export const RadioList = ({
    children,
    defaultValue,
    direction = RadioListDirection.Horizontal,
    onChange,
}: RadioListProps) => {
    const radioGroupRef = useRef<HTMLDivElement | null>(null);

    const [activeValue, setActiveValue] = useState(defaultValue);

    const radioButtons: RadioButtonProps[] =
        Children.map(children, (child) => {
            if (!isValidElement<RadioButtonProps>(child)) {
                return null;
            }
            return child?.props;
        }) ?? [];

    useEffect(() => {
        setActiveValue(defaultValue);
    }, [defaultValue]);

    useEffect(() => {
        if (radioGroupRef.current) {
            const activeRadioButton = radioGroupRef.current.querySelector(`input[value="${activeValue}"]`);
            if (activeRadioButton) {
                (activeRadioButton as HTMLDivElement).focus();
            }
        }
    }, [activeValue]);

    return (
        <div
            data-test-id="radio-list-wrapper"
            role="radiogroup"
            aria-labelledby="radio-list"
            ref={radioGroupRef}
            className={merge(['tw-flex', direction === RadioListDirection.Horizontal ? 'tw-gap-4' : 'tw-flex-col'])}
        >
            {radioButtons.map((radio, index) => {
                const id = generateRandomId();
                return (
                    <div className="tw-flex tw-items-center tw-mb-2" key={id}>
                        <input
                            data-test-id="radio-input"
                            disabled={radio.disabled}
                            id={id}
                            type="radio"
                            name="default-radio"
                            value={radio.value}
                            aria-checked={radio.value === activeValue}
                            defaultChecked={radio.value === activeValue}
                            className={merge([
                                'tw-peer w-w-4 tw-h-4 tw-border-black-60 disabled:tw-border-black-10',
                                radio.emphasis === RadioButtonEmphasis.Weak
                                    ? 'tw-text-black-80'
                                    : 'tw-text-box-selected-strong',
                            ])}
                            onChange={() => {
                                setActiveValue(radioButtons[index].value);
                                if (onChange) {
                                    onChange(radioButtons[index].value);
                                }
                            }}
                        />
                        {!radio.hideLabel && (
                            <label
                                data-test-id="radio-label"
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
                        {radio.tooltip && (
                            <Tooltip
                                alignment={TooltipAlignment.Middle}
                                content={radio.tooltip}
                                hoverDelay={75}
                                position={TooltipPosition.Top}
                                triggerElement={
                                    <div className="tw-text-black-80 tw-mx-2 tw-self-center">
                                        <IconQuestionMarkCircle size={IconSize.Size16} />
                                    </div>
                                }
                                withArrow
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};
