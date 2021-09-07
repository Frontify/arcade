/* (c) Copyright Frontify Ltd., all rights reserved. */

import IconReject from "@elements/Icon/Generated/IconReject";
import IconView from "@elements/Icon/Generated/IconView";
import IconViewSlash from "@elements/Icon/Generated/IconViewSlash";
import { useMemoizedId } from "@hooks/useMemoizedId";
import { useFocusRing } from "@react-aria/focus";
import { FOCUS_STYLE } from "@utilities/focusStyle";
import { merge } from "@utilities/merge";
import React, { FC, ReactElement, ReactNode, useEffect, useRef, useState } from "react";

export enum TextInputType {
    Text = "text",
    Password = "password",
    Number = "number",
}

export enum Validation {
    Default = "Default",
    Loading = "Loading",
    Success = "Success",
    Error = "Error",
}

const validationStyle: Record<Validation, string> = {
    [Validation.Default]: "tw-border-black-20",
    [Validation.Loading]: "tw-border-black-10",
    [Validation.Success]: "tw-border-green-50",
    [Validation.Error]: "tw-border-red-50",
};

const Spinner = (): ReactElement => (
    <svg className="tw-animate-spin" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="7.5" fill="white" stroke="#EAEBEB" />
        <path
            fill="white"
            d="M16.3302 9.5C17.7109 11.8915 16.8915 14.9494 14.5 16.3301C12.1086 17.7108 9.05063 16.8915 7.66992 14.5"
            stroke="#9088FF"
        />
    </svg>
);

type TextInputBaseProps = {
    id?: string;
    type?: TextInputType;
    decorator?: ReactNode;
    dotted?: boolean;
    clearable?: boolean;
    defaultValue?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    validation?: Validation;
    onInput?: (value: string) => void;
    onBlur?: (value: string) => void;
    onClear?: () => void;
};

export type TextInputProps =
    | ({
          type?: TextInputType.Text | TextInputType.Number;
          obfuscated?: false;
      } & TextInputBaseProps)
    | ({
          type: TextInputType.Password;
          obfuscated?: boolean;
      } & TextInputBaseProps);

export const TextInput: FC<TextInputProps> = ({
    id: propId,
    type = TextInputType.Text,
    decorator,
    validation = Validation.Default,
    clearable = false,
    defaultValue,
    placeholder,
    required,
    obfuscated,
    disabled = false,
    dotted = false,
    onInput,
    onBlur,
    onClear,
}) => {
    const { isFocusVisible, focusProps } = useFocusRing({ within: true, isTextInput: true });
    const inputElement = useRef<HTMLInputElement | null>(null);
    const [isObfuscated, setIsObfuscated] = useState(
        typeof obfuscated === "boolean" ? obfuscated : type === TextInputType.Password,
    );
    useEffect(() => {
        if (typeof obfuscated === "boolean") {
            setIsObfuscated(obfuscated);
        }
    }, [obfuscated]);

    return (
        <div
            {...focusProps}
            className={merge([
                "tw-flex tw-items-center tw-py-2 tw-gap-2 tw-px-3 tw-border tw-rounded tw-text-s tw-font-sans tw-relative",
                dotted ? "tw-border-dashed" : "tw-border-solid",
                disabled
                    ? "tw-border-black-5 tw-bg-black-5 dark:tw-bg-black-90 dark:tw-border-black-90 tw-cursor-not-allowed"
                    : merge([validationStyle[validation], isFocusVisible && FOCUS_STYLE]),
            ])}
        >
            {decorator && (
                <div
                    className={merge([
                        "tw-flex tw-items-center tw-justify-center tw-pl-1",
                        disabled ? "tw-text-black-60" : "tw-text-black-80",
                    ])}
                    data-test-id="decorator"
                >
                    {decorator}
                </div>
            )}
            <input
                id={useMemoizedId(propId)}
                ref={inputElement}
                className={merge([
                    "tw-flex-grow tw-border-none tw-outline-none tw-bg-transparent",
                    disabled
                        ? "tw-text-black-40 tw-placeholder-black-30 dark:tw-text-black-30 dark:tw-placeholder-black-40 tw-cursor-not-allowed"
                        : "tw-text-black tw-placeholder-black-60 dark:tw-text-white",
                ])}
                onClick={() => {
                    inputElement.current?.focus();
                }}
                onInput={(event) => onInput && onInput((event.target as HTMLInputElement).value)}
                onBlur={(event) => onBlur && onBlur(event.target.value)}
                placeholder={placeholder}
                defaultValue={defaultValue}
                type={
                    type === TextInputType.Password
                        ? isObfuscated
                            ? TextInputType.Password
                            : TextInputType.Text
                        : type
                }
                required={required}
                disabled={disabled}
                data-test-id="text-input"
            />
            {clearable && (
                <button
                    className={merge([
                        "tw-flex tw-items-center tw-justify-center",
                        disabled ? "tw-pointer-events-none tw-text-black-40" : "tw-text-black-60",
                    ])}
                    onClick={() => {
                        if (inputElement.current) {
                            inputElement.current.value = "";
                            inputElement.current.focus();
                            onClear && onClear();
                        }
                    }}
                    data-test-id="clear-icon"
                    title="clear input"
                    aria-label="clear input"
                    disabled={disabled}
                >
                    <IconReject />
                </button>
            )}
            {type === TextInputType.Password && (
                <button
                    className={merge([
                        "tw-flex tw-items-center tw-justify-center",
                        disabled ? "tw-pointer-events-none tw-text-black-40" : "tw-text-black-60",
                    ])}
                    onClick={() => setIsObfuscated(!isObfuscated)}
                    data-test-id="visibility-icon"
                    title="toggle text visibility"
                    aria-label={`${isObfuscated ? "unveil" : "obfuscate"} text input`}
                >
                    {isObfuscated ? <IconView /> : <IconViewSlash />}
                </button>
            )}
            {validation === Validation.Loading && (
                <span className="tw-absolute tw-top-[-0.75rem] tw-right-[-0.75rem]">
                    <Spinner />
                </span>
            )}
        </div>
    );
};
