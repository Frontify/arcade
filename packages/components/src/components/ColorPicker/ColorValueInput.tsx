/* (c) Copyright Frontify Ltd., all rights reserved. */

import { forwardRef, useEffect, useState } from 'react';

import { Select } from '../Select/Select';
import { TextInput } from '../TextInput/TextInput';

import styles from './styles/customColorPicker.module.scss';
import { type ColorPickerProps } from './types';
import { hexColorToRgb, isValidHexColor, rgbColorToHex } from './utils';

type ColorFormat = 'HEX' | 'RGBA';

type ColorValueInputProps = ColorPickerProps & {
    defaultFormat?: ColorFormat;
};

export const ColorValueInput = ({
    currentColor = { red: 150, green: 150, blue: 150, alpha: 1 },
    onColorChange = () => {},
    defaultFormat = 'HEX',
}: ColorValueInputProps) => {
    const [currentFormat, setCurrentFormat] = useState<ColorFormat>(defaultFormat);
    const [hexColorValue, setHexColorValue] = useState<string>(rgbColorToHex(currentColor));

    useEffect(() => {
        setHexColorValue(rgbColorToHex(currentColor));
    }, [currentColor]);

    return (
        <div className={styles.inputs} data-test-id="custom-color-value-inputs">
            <div className={styles.colorFormatInput}>
                <Select
                    aria-label="Select an item"
                    placeholder="Select an item"
                    onSelect={(selectedValue) => {
                        setCurrentFormat(selectedValue as ColorFormat);
                    }}
                    value={currentFormat}
                >
                    <Select.Item value="HEX">HEX</Select.Item>
                    <Select.Item value="RGBA">RGBA</Select.Item>
                </Select>
            </div>
            {currentFormat === 'HEX' ? (
                <TextInput.Root
                    className={`${styles.valueInput} ${styles.colorHexInput}`}
                    type="text"
                    value={hexColorValue}
                    status={isValidHexColor(hexColorValue) ? 'neutral' : 'error'}
                    onBlur={(event) => {
                        if (isValidHexColor(event.target.value)) {
                            onColorChange(hexColorToRgb(event.target.value));
                        }
                    }}
                    onChange={(event) => {
                        setHexColorValue(event.target.value);
                    }}
                    aria-label="Red Color Channel"
                >
                    <TextInput.Slot name="left">
                        <span className={styles.inputDecorator}>#</span>
                    </TextInput.Slot>
                </TextInput.Root>
            ) : (
                <>
                    <TextInput.Root
                        className={`${styles.valueInput} ${styles.colorChannelInput}`}
                        value={currentColor.red}
                        type="number"
                        onBlur={(event) => {
                            if (event.target.value.length === 0) {
                                onColorChange({
                                    ...currentColor,
                                    red: 0,
                                });
                            }
                        }}
                        onChange={(event) => {
                            console.log(parseInt(event.target.value));

                            onColorChange({
                                ...currentColor,
                                red: parseInt(event.target.value),
                            });
                        }}
                        aria-label="Red Color Channel"
                    >
                        <TextInput.Slot name="left">
                            <span className={styles.inputDecorator}>R</span>
                        </TextInput.Slot>
                    </TextInput.Root>
                    <TextInput.Root
                        className={`${styles.valueInput} ${styles.colorChannelInput}`}
                        value={currentColor.green}
                        type="number"
                        onBlur={(event) => {
                            if (event.target.value.length === 0) {
                                onColorChange({
                                    ...currentColor,
                                    green: 0,
                                });
                            }
                        }}
                        onChange={(event) => {
                            onColorChange({
                                ...currentColor,
                                green: parseInt(event.target.value),
                            });
                        }}
                        aria-label="Green Color Channel"
                    >
                        <TextInput.Slot name="left">
                            <span className={styles.inputDecorator}>G</span>
                        </TextInput.Slot>
                    </TextInput.Root>
                    <TextInput.Root
                        className={`${styles.valueInput} ${styles.colorChannelInput}`}
                        value={currentColor.blue}
                        type="number"
                        onBlur={(event) => {
                            if (event.target.value.length === 0) {
                                onColorChange({
                                    ...currentColor,
                                    blue: 0,
                                });
                            }
                        }}
                        onChange={(event) => {
                            onColorChange({
                                ...currentColor,
                                blue: parseInt(event.target.value),
                            });
                        }}
                        aria-label="Blue Color Channel"
                    >
                        <TextInput.Slot name="left">
                            <span className={styles.inputDecorator}>B</span>
                        </TextInput.Slot>
                    </TextInput.Root>
                </>
            )}
            <TextInput.Root
                className={`${styles.valueInput} ${styles.colorAlphaInput}`}
                value={currentColor === undefined ? 100 : Math.trunc((currentColor.alpha || 1) * 100)}
                type="number"
                onChange={(event) => {
                    onColorChange({
                        ...currentColor,
                        alpha: parseInt(event.target.value) / 100,
                    });
                }}
                aria-label="Color Opacity"
            >
                <TextInput.Slot name="left">
                    <span className={styles.inputDecorator}>A</span>
                </TextInput.Slot>
                <TextInput.Slot name="right">
                    <span className={styles.inputDecorator}>%</span>
                </TextInput.Slot>
            </TextInput.Root>
        </div>
    );
};
ColorValueInput.displayName = 'ColorPicker.Values';

export const ForwardedRefColorValueInput = forwardRef<HTMLDivElement, ColorPickerProps>(ColorValueInput);
