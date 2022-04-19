/* (c) Copyright Frontify Ltd., all rights reserved. */

import { useMemoizedId } from "@hooks/useMemoizedId";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { FOCUS_STYLE } from "@utilities/focusStyle";
import { merge } from "@utilities/merge";
import { Validation, validationClassMap } from "@utilities/validation";
import { LoadingCircle, LoadingCircleSize } from "@components/LoadingCircle";
import React, { FC, FocusEvent, FormEvent, ReactNode } from "react";

export type TextareaProps = {
    id?: string;
    value?: string;
    required?: boolean;
    decorator?: ReactNode;
    placeholder?: string;
    disabled?: boolean;
    onInput?: (value: string) => void;
    onBlur?: (value: string) => void;
    validation?: Validation;
};

export const Textarea: FC<TextareaProps> = ({
    id: propId,
    value,
    required = false,
    decorator,
    placeholder,
    disabled = false,
    onInput,
    onBlur,
    validation = Validation.Default,
}) => {
    const { isFocusVisible, focusProps } = useFocusRing({ isTextInput: true });

    return (
        <div className="tw-relative">
            {decorator && (
                <div
                    className="tw-absolute tw-top-2 tw-left-2 tw-inline-flex tw-items-end tw-text-black-80"
                    data-test-id="decorator"
                >
                    {decorator}
                </div>
            )}
            <textarea
                {...mergeProps(focusProps, {
                    onBlur: (event: FocusEvent<HTMLTextAreaElement>) => onBlur && onBlur(event.target.value),
                    onInput: (event: FormEvent<HTMLTextAreaElement>) =>
                        onInput && onInput((event.target as HTMLTextAreaElement).value),
                })}
                id={useMemoizedId(propId)}
                value={value}
                placeholder={placeholder}
                required={required}
                className={merge([
                    "tw-w-full tw-p-2 tw-border tw-rounded tw-text-s tw-outline-none tw-transition tw-placeholder-black-60",
                    !!decorator && "tw-pl-7 ",
                    disabled
                        ? "tw-border-black-5 tw-bg-black-5 tw-text-black-40"
                        : "tw-text-black tw-border-black-20 hover:tw-border-black-90",
                    isFocusVisible && FOCUS_STYLE,
                    validationClassMap[validation],
                ])}
                disabled={disabled}
            ></textarea>
            {validation === Validation.Loading && (
                <span className="tw-absolute tw-top-[-0.55rem] tw-right-[-0.55rem] tw-bg-white tw-rounded-full tw-p-[2px] tw-border tw-border-black-10">
                    <LoadingCircle size={LoadingCircleSize.ExtraSmall} />
                </span>
            )}
        </div>
    );
};
