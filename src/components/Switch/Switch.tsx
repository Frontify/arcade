/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Size } from "@utilities/enum";
import generateRandomId from "@utilities/generateRandomId";
import { MouseEvent, ReactElement } from "react";
import Label from "../Form/Label/Label";
import css from "./Switch.module.css";

export type SwitchProps = {
    on?: boolean;
    disabled?: boolean;
    label?: string;
    name?: string;
    size?: Size.Large | Size.Small;
    onChange?: (e: MouseEvent) => void;
};

const merge = (classNames: (string | undefined | boolean)[]) => classNames.filter(Boolean).join(" ");

export default function Switch({
    name,
    label,
    disabled,
    onChange,
    size = Size.Small,
    on = false,
}: SwitchProps): ReactElement<SwitchProps> {
    const id = label && generateRandomId();

    return (
        <div className={css.container}>
            {label && id && (
                <Label htmlFor={id} disabled={disabled}>
                    {label}
                </Label>
            )}
            <button
                id={id}
                disabled={disabled}
                name={name}
                data-test-id="Switch"
                className={merge([
                    css.switch,
                    on ? css.active : css.inactive,
                    disabled && css.disabled,
                    size === Size.Small ? css.small : css.large,
                ])}
                value={on.toString()}
                onClick={onChange}
            >
                <div
                    className={merge([
                        css.indicator,
                        size === Size.Small ? css.small : css.large,
                        on ? css.active : css.inactive,
                    ])}
                />
            </button>
        </div>
    );
}
