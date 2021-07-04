/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ReactElement, ReactNode, useState, MouseEvent, KeyboardEvent } from "react";
import { ReactComponent as IconCheck } from "@components/Icon/Svg/Check.svg";
import { ReactComponent as IconMinus } from "@components/Icon/Svg/Minus.svg";

import css from "./Checkbox.module.css";
import generateRandomId from "@utilities/generateRandomId";
import Label from "@components/Form/Label/Label";

export enum CheckboxSelectionState {
    Unselected = "Unselected",
    Selected = "Selected",
    Indeterminate = "Indeterminate",
}

export enum CheckboxTheme {
    Light = "Light",
    Dark = "Dark",
}

export enum CheckboxStyle {
    Primary = "Primary",
    Secondary = "Secondary",
}

export interface CheckboxProps {
    theme?: CheckboxTheme;
    style?: CheckboxStyle;
    value?: CheckboxSelectionState;
    disabled?: boolean;
    required?: boolean;
    label?: string;
    tooltip?: ReactNode;

    onChange?: (newValue: CheckboxSelectionState) => void;
}

export default function Checkbox({
    theme = CheckboxTheme.Light,
    style = CheckboxStyle.Primary,
    value = CheckboxSelectionState.Unselected,
    disabled = false,
    required = false,
    label,
    tooltip,
    onChange,
}: CheckboxProps): ReactElement<CheckboxProps> {
    const [checkboxState, setCheckboxState] = useState<CheckboxSelectionState>(value);

    const onClick = (event: MouseEvent | KeyboardEvent): void => {
        event.preventDefault();

        const newState =
            checkboxState === CheckboxSelectionState.Selected
                ? CheckboxSelectionState.Unselected
                : CheckboxSelectionState.Selected;

        setCheckboxState(newState);
        onChange && onChange(newState);
    };

    const onKeyUp = (event: KeyboardEvent): void => {
        // `event.keyCode` for IE
        if (event.keyCode === 32 || event.code === "Space") {
            onClick(event);
        }
    };

    // Disable scrolling when pressing space
    const onKeyDown = (event: KeyboardEvent): void => {
        if (event.keyCode == 32 || event.code === "Space") {
            event.preventDefault();
        }
    };

    const checkboxClasses = [
        css.checkbox,
        css[`theme${theme}`],
        ...(disabled ? [css.disabled] : [css[`style${style}`]]),
        ...(checkboxState === CheckboxSelectionState.Selected ? [css.selected] : []),
        ...(checkboxState === CheckboxSelectionState.Indeterminate ? [css.indeterminate] : []),
        ...(label ? [css.withLabel] : []),
    ].join(" ");

    const checkboxConditionalAttributes = {
        ...(!disabled && {
            onClick,
            onKeyUp,
            onKeyDown,
        }),
    };

    const id = generateRandomId();

    return (
        <div className={css.wrapper} {...checkboxConditionalAttributes} data-test-id="checkbox-wrapper">
            <input
                id={id}
                className={css.hidden}
                type="checkbox"
                defaultChecked={checkboxState === CheckboxSelectionState.Selected}
                onClick={onClick}
            />
            <span className={checkboxClasses} tabIndex={disabled ? -1 : 0} data-test-id="checkbox">
                {checkboxState === CheckboxSelectionState.Selected && <IconCheck />}
                {checkboxState === CheckboxSelectionState.Indeterminate && <IconMinus />}
            </span>
            {label && (
                <Label htmlFor={id} required={required} disabled={disabled} tooltip={tooltip}>
                    {label}
                </Label>
            )}
        </div>
    );
}
