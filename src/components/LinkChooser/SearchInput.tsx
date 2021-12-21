/* (c) Copyright Frontify Ltd., all rights reserved. */

import IconCopyToClipboard from "@foundation/Icon/Generated/IconCopyToClipboard";
import IconExternalLink from "@foundation/Icon/Generated/IconExternalLink";
import IconReject from "@foundation/Icon/Generated/IconReject";
import { useMemoizedId } from "@hooks/useMemoizedId";
import { useFocusRing } from "@react-aria/focus";
import { FOCUS_STYLE } from "@utilities/focusStyle";
import { merge } from "@utilities/merge";
import { useActor } from "@xstate/react";
import React, { FC, forwardRef } from "react";
import { ButtonProps, SearchInputProps } from "./types";

export const SearchInput = forwardRef<HTMLInputElement | null, SearchInputProps>(
    (
        {
            disabled = false,
            clearable = true,
            ariaProps,
            selectedResult,
            decorator,
            placeholder,
            onClear,
            onClick,
            machineService,
        },
        inputElement,
    ) => {
        const { value } = ariaProps;
        const { isFocusVisible, focusProps } = useFocusRing({ within: true, isTextInput: true });
        const { isFocusVisible: previewButtonIsFocusVisible, focusProps: previewButtonFocusProps } = useFocusRing();
        const { isFocusVisible: copyButtonIsFocusVisible, focusProps: copyButtonFocusProps } = useFocusRing();
        const { isFocusVisible: clearButtonIsFocusVisible, focusProps: clearButtonFocusProps } = useFocusRing();

        const [, send] = useActor(machineService);

        return (
            <div
                {...focusProps}
                data-test-id="link-chooser-search-wrapper"
                className={merge([
                    "tw-flex tw-items-center tw-h-9 tw-gap-2 tw-px-3 tw-border tw-rounded tw-text-s tw-font-sans tw-relative tw-bg-white dark:tw-bg-transparent",
                    disabled
                        ? "tw-border-black-5 tw-bg-black-5 dark:tw-bg-black-90 dark:tw-border-black-90"
                        : merge(["focus-within:tw-border-black-90", isFocusVisible && FOCUS_STYLE]),
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
                    {...ariaProps}
                    id={useMemoizedId()}
                    ref={inputElement}
                    className={merge([
                        "tw-flex-grow tw-border-none tw-outline-none tw-bg-transparent tw-hide-input-arrows",
                        disabled
                            ? "tw-text-black-40 tw-placeholder-black-30 dark:tw-text-black-30 dark:tw-placeholder-black-40"
                            : "tw-text-black tw-placeholder-black-60 dark:tw-text-white",
                    ])}
                    placeholder={placeholder}
                    onClick={onClick}
                    disabled={disabled}
                    data-test-id="link-chooser-search-input"
                />
                {selectedResult && (
                    <IconButton
                        disabled={disabled}
                        isFocused={previewButtonIsFocusVisible}
                        testId="link-chooser-preview-icon"
                        title="Preview link"
                        ariaLabel="preview link"
                        buttonProps={previewButtonFocusProps}
                        icon={<IconExternalLink />}
                        onClick={() => send("OPEN_PREVIEW")}
                    />
                )}
                {selectedResult && (
                    <IconButton
                        disabled={disabled}
                        isFocused={copyButtonIsFocusVisible}
                        testId="link-chooser-copy-icon"
                        copyId="copy-button"
                        title="Copy text to clipboard"
                        ariaLabel="copy text to clipboard"
                        buttonProps={copyButtonFocusProps}
                        icon={<IconCopyToClipboard />}
                        onClick={() => send("COPY_TO_CLIPBOARD")}
                    />
                )}
                {`${value}`.length !== 0 && clearable && (
                    <IconButton
                        disabled={disabled}
                        isFocused={clearButtonIsFocusVisible}
                        testId="link-chooser-clear-icon"
                        title="Clear text input"
                        ariaLabel="clear text input"
                        buttonProps={clearButtonFocusProps}
                        icon={<IconReject />}
                        onClick={onClear}
                    />
                )}
            </div>
        );
    },
);

SearchInput.displayName = "SearchInput";

const IconButton: FC<ButtonProps> = ({
    disabled,
    title,
    ariaLabel,
    testId,
    isFocused,
    buttonProps,
    copyId,
    icon,
    onClick,
}) => (
    <button
        className={merge([
            "tw-flex tw-items-center tw-justify-center tw-transition-colors tw-rounded",
            disabled ? "tw-cursor-default tw-text-black-40" : "tw-text-black-60  hover:tw-text-black-100",
            isFocused && FOCUS_STYLE,
        ])}
        data-test-id={testId}
        title={title}
        aria-label={ariaLabel}
        data-clipboard-id={copyId}
        disabled={disabled}
        onClick={onClick}
        {...buttonProps}
    >
        {icon}
    </button>
);
