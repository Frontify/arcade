/* (c) Copyright Frontify Ltd., all rights reserved. */

import { useFocusRing } from "@react-aria/focus";
import { getFocusStyle } from "@utilities/focusStyle";
import generateRandomId from "@utilities/generateRandomId";
import { merge } from "@utilities/merge";
import React, { FC, PropsWithChildren, ReactNode, useState } from "react";

export type TextareaProps = PropsWithChildren<{
    id?: string;
    required?: boolean;
    decorator?: ReactNode;
    placeholder?: string;
    disabled?: boolean;
    onInput?: (value: string) => void;
    onBlur?: (value: string) => void;
}>;

export const Textarea: FC<TextareaProps> = ({
    id: propsId,
    children,
    required = false,
    decorator,
    placeholder,
    disabled = false,
    onInput,
    onBlur,
}) => {
    const [id] = useState(propsId || generateRandomId());
    const { isFocusVisible, focusProps } = useFocusRing();

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
                {...focusProps}
                id={id}
                placeholder={placeholder}
                required={required}
                className={merge([
                    "tw-p-2 tw-border tw-rounded tw-text-s tw-outline-none tw-transition tw-placeholder-black-60",
                    !!decorator && "tw-pl-7 ",
                    disabled
                        ? "tw-border-black-5 tw-bg-black-5 tw-text-black-40"
                        : "tw-text-black tw-border-black-40 hover:tw-border-black-90",
                    isFocusVisible && getFocusStyle(),
                ])}
                disabled={disabled}
                onBlur={(event) => onBlur && onBlur(event.target.value)}
                onInput={(event) => onInput && onInput((event.target as HTMLTextAreaElement).value)}
            >
                {children}
            </textarea>
        </div>
    );
};
