/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Validation } from "@components/TextInput/TextInput";
import IconCopyToClipboard from "@foundation/Icon/Generated/IconCopyToClipboard";
import IconExternalLink from "@foundation/Icon/Generated/IconExternalLink";
import IconReject from "@foundation/Icon/Generated/IconReject";
import IconSpinner from "@foundation/Icon/Generated/IconSpinner";
import { useMemoizedId } from "@hooks/useMemoizedId";
import { useFocusRing } from "@react-aria/focus";
import { FOCUS_STYLE } from "@utilities/focusStyle";
import { merge } from "@utilities/merge";
import { useActor } from "@xstate/react";
import React, { forwardRef, KeyboardEvent } from "react";
import { SearchInputProps } from "./types";

const validationStyle: Record<Validation, string> = {
    [Validation.Default]: "tw-border-black-20",
    [Validation.Loading]: "tw-border-black-10",
    [Validation.Success]: "tw-border-green-50",
    [Validation.Error]: "tw-border-red-60",
};

export const SearchInput = forwardRef<HTMLInputElement | null, SearchInputProps>(
    (
        {
            id: propId,
            selectedResult,
            type,
            decorator,
            validation = Validation.Default,
            previewable = false,
            copyable = false,
            clearable = false,
            placeholder,
            required,
            disabled = false,
            dotted = false,
            value = "",
            onChange,
            onEnterPressed,
            onFocus,
            onBlur,
            onClear,
            onClick,
            size,
            machineService,
        },
        inputElement,
    ) => {
        const { isFocusVisible, focusProps } = useFocusRing({ within: true, isTextInput: true });
        const { isFocusVisible: previewButtonIsFocusVisible, focusProps: previewButtonFocusProps } = useFocusRing();
        const { isFocusVisible: copyButtonIsFocusVisible, focusProps: copyButtonFocusProps } = useFocusRing();
        const { isFocusVisible: clearButtonIsFocusVisible, focusProps: clearButtonFocusProps } = useFocusRing();

        const [, send] = useActor(machineService);

        const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
            if (event.key === "Enter") {
                onEnterPressed && onEnterPressed(event);
            }
        };

        return (
            <div
                {...focusProps}
                data-test-id="link-chooser-search-wrapper"
                className={merge([
                    "tw-flex tw-items-center tw-h-9 tw-gap-2 tw-px-3 tw-border tw-rounded tw-text-s tw-font-sans tw-relative tw-bg-white dark:tw-bg-transparent",
                    dotted ? "tw-border-dashed" : "tw-border-solid",
                    disabled
                        ? "tw-border-black-5 tw-bg-black-5 dark:tw-bg-black-90 dark:tw-border-black-90"
                        : merge([
                              "focus-within:tw-border-black-90",
                              validationStyle[validation],
                              isFocusVisible && FOCUS_STYLE,
                          ]),
                ])}
            >
                {decorator && (
                    <div
                        className={merge([
                            "tw-flex tw-items-center tw-justify-center tw-pl-1",
                            disabled ? "tw-text-black-60" : "tw-text-black-80",
                        ])}
                        data-test-id="link-chooser-decorator-icon"
                    >
                        {decorator}
                    </div>
                )}
                <input
                    id={useMemoizedId(propId)}
                    ref={inputElement}
                    className={merge([
                        "tw-flex-grow tw-border-none tw-outline-none tw-bg-transparent tw-hide-input-arrows",
                        disabled
                            ? "tw-text-black-40 tw-placeholder-black-30 dark:tw-text-black-30 dark:tw-placeholder-black-40"
                            : "tw-text-black tw-placeholder-black-60 dark:tw-text-white",
                    ])}
                    onChange={onChange}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                    onClick={onClick}
                    placeholder={placeholder}
                    value={value}
                    type={type}
                    required={required}
                    disabled={disabled}
                    size={size}
                    data-test-id="link-chooser-search-input"
                />
                {selectedResult && previewable && (
                    <button
                        className={merge([
                            "tw-flex tw-items-center tw-justify-center tw-transition-colors tw-rounded",
                            previewButtonIsFocusVisible && FOCUS_STYLE,
                            disabled
                                ? "tw-cursor-default tw-text-black-40"
                                : "tw-text-black-60 hover:tw-text-black-100",
                        ])}
                        data-test-id="link-chooser-preview-icon"
                        title="Preview link"
                        aria-label=""
                        disabled={disabled}
                        onClick={() => send("OPEN_PREVIEW")}
                        {...previewButtonFocusProps}
                    >
                        <IconExternalLink />
                    </button>
                )}
                {selectedResult && copyable && (
                    <button
                        className={merge([
                            "tw-flex tw-items-center tw-justify-center tw-transition-colors tw-rounded",
                            copyButtonIsFocusVisible && FOCUS_STYLE,
                            disabled
                                ? "tw-cursor-default tw-text-black-40"
                                : "tw-text-black-60 hover:tw-text-black-100",
                        ])}
                        data-test-id="link-chooser-copy-icon"
                        data-clipboard-id="copy-button"
                        title="Copy text to clipboard"
                        aria-label=""
                        disabled={disabled}
                        onClick={() => send("COPY_TO_CLIPBOARD")}
                        {...copyButtonFocusProps}
                    >
                        <IconCopyToClipboard />
                    </button>
                )}
                {`${value}`.length !== 0 && clearable && (
                    <button
                        className={merge([
                            "tw-flex tw-items-center tw-justify-center tw-transition-colors tw-rounded",
                            disabled
                                ? "tw-cursor-default tw-text-black-40"
                                : "tw-text-black-60  hover:tw-text-black-100",
                            clearButtonIsFocusVisible && FOCUS_STYLE,
                        ])}
                        data-test-id="link-chooser-clear-icon"
                        title="Clear text input"
                        aria-label="clear text input"
                        disabled={disabled}
                        onClick={onClear}
                        {...clearButtonFocusProps}
                    >
                        <IconReject />
                    </button>
                )}
                {validation === Validation.Loading && (
                    <span className="tw-absolute tw-top-[-0.75rem] tw-right-[-0.75rem]">
                        <IconSpinner />
                    </span>
                )}
            </div>
        );
    },
);
