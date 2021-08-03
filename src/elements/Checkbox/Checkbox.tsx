/* (c) Copyright Frontify Ltd., all rights reserved. */

import IconCheck from "@elements/Icon/Generated/IconCheck";
import IconMinus from "@elements/Icon/Generated/IconMinus";
import { useCheckbox } from "@react-aria/checkbox";
import { useFocusRing } from "@react-aria/focus";
import { useToggleState } from "@react-stately/toggle";
import { merge } from "@utilities/merge";
import { FC, useRef } from "react";

export enum Style {
    Default = "Default",
    Primary = "Primary",
}

export type CheckboxProps = {
    style?: Style;
    checked?: "checked" | "unchecked" | "mixed";
    disabled?: boolean;
    required?: boolean;
    name?: string;
    value?: string;
    onChange?: (isChecked: boolean) => void;
    label?: string;
    note?: string;
};

const styles = {
    unchecked: {
        [Style.Default]:
            "border-black-80 bg-white hover:border-black dark:border-white dark:bg-black dark:hover:border-black-20 dark:hover:bg-black-90",
        [Style.Primary]:
            "border-violet-60 bg-white hover:border-violet-70 dark:border-violet-50 dark:bg-black dark:hover:border-violet-60 dark:hover:bg-black-90",
    },
    checked: {
        [Style.Default]:
            "border-black bg-black text-white hover:border-black-superdark hover:bg-black-superdark dark:border-white dark:bg-white dark:hover:border-black-20 dark:hover:bg-black-20 dark:text-black",
        [Style.Primary]:
            "border-violet-60 bg-violet-60 text-white hover:border-violet-70 hover:bg-violet-70 dark:border-violet-50 dark:bg-violet-50 dark:hover:border-violet-60 dark:hover:bg-violet-60",
    },
};

type CheckedOrMixed = CheckboxProps["checked"];

const isCheckedOrMixed = (checked: CheckedOrMixed): boolean => {
    return checked === "checked" || checked === "mixed";
};

export const Checkbox: FC<CheckboxProps> = (props) => {
    const { checked = "unchecked", disabled, required, label, note, style = Style.Default } = props;
    const state = useToggleState({ ...props, isSelected: checked === "checked" });
    const ref = useRef<HTMLInputElement>(null);
    const { inputProps } = useCheckbox(
        {
            ...props,
            isSelected: checked === "checked",
            isIndeterminate: checked === "mixed",
            isDisabled: disabled,
            isRequired: required,
        },
        state,
        ref,
    );
    const { isFocusVisible, focusProps } = useFocusRing();

    return (
        <div className="flex flex-col gap-1 transition-colors" data-test-id="checkbox">
            <label className="flex items-center gap-2">
                <input {...inputProps} {...focusProps} ref={ref} className="sr-only" />
                <span
                    aria-hidden="true"
                    className={merge([
                        "relative flex w-4 h-4 items-center justify-center rounded border",
                        isFocusVisible && "outline-violet",
                        disabled
                            ? merge([
                                  "text-white pointer-events-none",
                                  !isCheckedOrMixed(checked) &&
                                      "border-black-20 bg-white dark:border-black-80 dark:bg-black-90",
                                  isCheckedOrMixed(checked) &&
                                      "border-black-40 bg-black-40 dark:border-black-60 dark:bg-black-60",
                              ])
                            : merge([
                                  !isCheckedOrMixed(checked) && styles.unchecked[style],
                                  isCheckedOrMixed(checked) && styles.checked[style],
                              ]),
                    ])}
                >
                    {checked === "checked" && <IconCheck />}
                    {checked === "mixed" && <IconMinus />}
                </span>
                {label && (
                    <span
                        className={merge([disabled ? "text-black-40" : "text-black", "font-sans text-s font-medium"])}
                    >
                        {label}
                    </span>
                )}
            </label>
            {note && <span className="text-black-60 font-sans text-xs font-normal">{note}</span>}
        </div>
    );
};
