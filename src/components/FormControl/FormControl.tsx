/* (c) Copyright Frontify Ltd., all rights reserved. */

import InputLabel, { InputLabelProps } from "@components/InputLabel/InputLabel";
import { Style } from "@utilities/enum";
import { FC, ReactElement, ReactNode } from "react";
import css from "./FormControl.module.css";

type HelperTextProps = {
    text: string;
    disabled?: boolean;
    style?: Style.Primary | Style.Success | Style.Error;
};
const HelperText: FC<HelperTextProps> = ({ text, disabled, style }: HelperTextProps) => (
    <span
        data-test-id="form-control-helper-text"
        className={`${css.helper} ${disabled ? css.disabled : ""} ${
            style === Style.Error ? css.error : style === Style.Success ? css.success : ""
        }`}
    >
        {text}
    </span>
);

export interface FormControlProps {
    children: ReactNode;
    direction?: "horizontal" | "vertical";
    disabled?: boolean;
    label?: Omit<InputLabelProps, "disabled">;
    extra?: ReactNode;
    helper?: Omit<HelperTextProps, "disabled"> & {
        position: "before" | "after";
    };
}

export default function FormControl({
    label,
    children,
    extra,
    helper,
    disabled,
    direction,
}: FormControlProps): ReactElement<FormControlProps> {
    return (
        <div
            data-test-id="form-control"
            className={`${css.container} ${direction === "horizontal" ? "" : css.vertical}`}
        >
            {(label || extra) && (
                <div className={css.label}>
                    {label && <InputLabel {...label} disabled={disabled} />}
                    {extra && (
                        <span data-test-id="form-control-extra" className={css.extra}>
                            {extra}
                        </span>
                    )}
                </div>
            )}
            {helper?.position === "before" && (
                <HelperText text={helper.text} disabled={disabled} style={helper.style} />
            )}
            <div className={css.input}>{children}</div>
            {helper?.position === "after" && <HelperText text={helper.text} disabled={disabled} style={helper.style} />}
        </div>
    );
}
