/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ButtonRounding, ButtonSize, ButtonStyle, ButtonElements, ButtonEmphasis } from "./ButtonTypes";

export const ButtonCommonClasses =
    "tw-group " +
    "tw-border " +
    "tw-box-box tw-relative tw-flex tw-items-center tw-justify-center " +
    "tw-cursor-pointer tw-outline-none tw-font-body tw-font-medium ";

export const ButtonDisabledClasses: Record<"common" | "weak" | "default", string> = {
    common: "tw-not-allowed tw-pointer-events-none tw-border-transparent ",
    default: "tw-text-box-disabled-inverse tw-bg-box-disabled ",
    weak: "tw-text-text-disabled ",
};

export const ButtonRoundingClasses: Record<ButtonRounding, string> = {
    [ButtonRounding.Medium]: "tw-rounded",
    [ButtonRounding.Full]: "tw-rounded-full",
};

export const ButtonSizeClasses: Record<ButtonSize, Record<"default" | "iconOnly", string>> = {
    [ButtonSize.Small]: {
        default: "tw-px-2 tw-h-6 tw-text-body-small ",
        iconOnly: "tw-h-6 tw-w-6 ",
    },
    [ButtonSize.Medium]: {
        default: "tw-px-4 tw-h-9 tw-text-body-medium ",
        iconOnly: "tw-h-9 tw-w-9 ",
    },
    [ButtonSize.Large]: {
        default: "tw-px-6 tw-h-12 tw-text-body-large ",
        iconOnly: "tw-h-12 tw-w-12 ",
    },
};

export const IconSpacingClasses: Record<ButtonSize, string> = {
    [ButtonSize.Small]: "tw--ml-0.5 tw-mr-1 ",
    [ButtonSize.Medium]: "tw--ml-1 tw-mr-1.5 ",
    [ButtonSize.Large]: "tw--ml-1 tw-mr-2 ",
};

const setDefaultClasses = (keyword: string, isWeak: boolean, isInverted = false, invertedButtonStyle = "") => {
    let buttonStyle = `tw-bg-button${keyword}-background tw-border-button${keyword}-border `;

    if (isWeak) {
        buttonStyle = `tw-border-transparent hover:tw-border-button${keyword}-border `;
    }

    if (isInverted) {
        buttonStyle = invertedButtonStyle;
    }

    return {
        button:
            `${buttonStyle} hover:tw-bg-button${keyword}-background-hover ` +
            `active:tw-bg-button${keyword}-background-pressed `,
        icon:
            `tw-text-button${keyword}-icon ` +
            `group-hover:tw-text-button${keyword}-icon-hover ` +
            `group-active:tw-text-button${keyword}-icon-pressed `,
        text:
            `tw-text-button${keyword}-text ` +
            `group-hover:tw-text-button${keyword}-text-hover ` +
            `group-active:tw-text-button${keyword}-text-pressed `,
    };
};

const commonStrongAndDefaultStyles = (style: string) => {
    return {
        [ButtonStyle.Default]: {
            default: { ...setDefaultClasses(style === "default" ? "" : "-strong", false) },
            inverted: {
                ...setDefaultClasses(
                    style === "default" ? "-strong" : "",
                    false,
                    true,
                    style === "default"
                        ? "tw-bg-text-weak tw-border-button-border "
                        : "tw-bg-base tw-border-button-strong-border ",
                ),
            },
        },
        [ButtonStyle.Positive]: {
            default: { ...setDefaultClasses(style === "default" ? "-positive" : "-strong-positive", false) },
            inverted: {
                ...setDefaultClasses(
                    style === "default" ? "-strong" : "-positive",
                    false,
                    true,
                    style === "default"
                        ? "tw-bg-text-weak tw-border-button-positive-border "
                        : "tw-bg-base tw-border-button-positive-border ",
                ),
                icon:
                    style === "default"
                        ? `tw-text-green-mid ${positiveHoverAndActiveIcon}`
                        : `tw-text-button-positive-icon ${positiveHoverAndActiveIcon}`,
            },
        },
        [ButtonStyle.Danger]: {
            default: { ...setDefaultClasses("-danger", false) },
            inverted: { ...setDefaultClasses("-danger", false) },
        },
        // DEPRECATING
        [ButtonStyle.Primary]: {
            default: { ...setDefaultClasses("-strong", false) },
            inverted: {
                ...setDefaultClasses("", false, true, "tw-bg-base tw-border-button-strong-border "),
            },
        },
        // DEPRECATING
        [ButtonStyle.Secondary]: {
            default: { ...setDefaultClasses("", false) },
            inverted: {
                ...setDefaultClasses("-strong", false, true, "tw-bg-text-weak tw-border-button-border "),
            },
        },
    };
};

const positiveHoverAndActiveIcon =
    "group-hover:tw-text-button-positive-icon-hover group-active:tw-text-button-positive-icon-pressed ";

/**
 * A NOTE ABOUT THIS BIG LONG LIST
 *
 * - We're deprecating Primary and Secondary in favour of 'emphasis' (-33%)
 * - Once we introduce the ThemeProvider we can deprecate all the 'inverted' variants (-50%)
 */

export const ButtonStyleClasses: Record<
    ButtonEmphasis,
    Record<ButtonStyle, Record<"default" | "inverted", ButtonElements>>
> = {
    [ButtonEmphasis.Default]: {
        ...commonStrongAndDefaultStyles("default"),
        [ButtonStyle.Negative]: {
            default: { ...setDefaultClasses("-negative", false) },
            inverted: {
                ...setDefaultClasses("-strong", false, true, "tw-bg-text-weak tw-border-button-negative-border "),
                icon:
                    "tw-text-red-mid " +
                    "group-hover:tw-text-button-negative-icon-hover " +
                    "group-active:tw-text-button-negative-icon-pressed ",
            },
        },
    },
    [ButtonEmphasis.Strong]: {
        ...commonStrongAndDefaultStyles("strong"),
        [ButtonStyle.Negative]: {
            default: { ...setDefaultClasses("-strong-negative", false) },
            inverted: {
                ...setDefaultClasses(
                    "-negative",
                    false,
                    true,
                    "tw-bg-base tw-border-button-border tw-border-button-strong-negative-border ",
                ),
                text:
                    "tw-text-button-text " +
                    "group-hover:tw-text-button-negative-text-hover " +
                    "group-active:tw-text-button-negative-text-pressed ",
            },
        },
    },
    [ButtonEmphasis.Weak]: {
        [ButtonStyle.Default]: {
            default: { ...setDefaultClasses("", true) },
            inverted: { ...setDefaultClasses("-strong", true) },
        },
        [ButtonStyle.Positive]: {
            default: { ...setDefaultClasses("-positive", true) },
            inverted: {
                ...setDefaultClasses("-positive", true),
                button:
                    "tw-border-transparent " +
                    "hover:tw-bg-button-strong-background-hover hover:tw-border-button-positive-border " +
                    "active:tw-bg-button-strong-background-pressed ",
                text:
                    "tw-text-button-strong-positive-text " +
                    "group-hover:tw-text-button-strong-positive-text-hover " +
                    "group-active:tw-text-button-strong-positive-text-pressed ",
            },
        },
        [ButtonStyle.Negative]: {
            default: { ...setDefaultClasses("-negative", true) },
            inverted: {
                ...setDefaultClasses("-negative", true),
                button:
                    "tw-border-transparent " +
                    "hover:tw-bg-button-strong-background-hover hover:tw-border-button-negative-border " +
                    "active:tw-bg-button-strong-background-pressed ",
                text:
                    "tw-text-button-strong-negative-text " +
                    "group-hover:tw-text-button-strong-negative-text-hover " +
                    "group-active:tw-text-button-strong-negative-text-pressed ",
            },
        },
        [ButtonStyle.Danger]: {
            default: { ...setDefaultClasses("-danger", false) },
            inverted: { ...setDefaultClasses("-danger", false) },
        },
        // DEPRECATING
        [ButtonStyle.Primary]: {
            default: {
                ...setDefaultClasses("", false),
                button:
                    "tw-border-transparent " +
                    "hover:tw-bg-button-background-hover hover:tw-border-button-border " +
                    "active:tw-bg-button-background-pressed ",
            },
            inverted: {
                ...setDefaultClasses("", true, true, "tw-bg-base tw-border-button-border "),
            },
        },
        // DEPRECATING
        [ButtonStyle.Secondary]: {
            default: {
                ...setDefaultClasses("", false),
                button:
                    "tw-border-transparent " +
                    "hover:tw-bg-button-background-hover hover:tw-border-button-border " +
                    "active:tw-bg-button-background-pressed ",
            },
            inverted: {
                ...setDefaultClasses("-strong", true),
                button:
                    "tw-bg-text-weak tw-border-button-border " +
                    "hover:tw-bg-button-strong-background-hover hover:tw-border-button-border " +
                    "active:tw-bg-button-strong-background-pressed ",
            },
        },
    },
};
