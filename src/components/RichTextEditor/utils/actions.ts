/* (c) Copyright Frontify Ltd., all rights reserved. */

export enum EditorActions {
    TEXT_STYLES = "text-styles",
    ALIGN_LEFT = "align-left",
    ALIGN_CENTER = "align-center",
    ALIGN_RIGHT = "align-right",
    ALIGN_JUSTIFY = "align-justify",
    BOLD = "bold",
    ITALIC = "italic",
    UNDERLINE = "underline",
    STRIKETHROUGH = "strikethrough",
    CODE = "code",
    CHECK_ITEM = "check-item",
    LINK = "link",
    ORDERED_LIST = "ordered-list",
    UNORDERED_LIST = "unordered-list",
}

export const defaultActions = [
    [EditorActions.TEXT_STYLES],
    [EditorActions.ALIGN_LEFT, EditorActions.ALIGN_CENTER, EditorActions.ALIGN_RIGHT, EditorActions.ALIGN_JUSTIFY],
    [
        EditorActions.BOLD,
        EditorActions.ITALIC,
        EditorActions.UNDERLINE,
        EditorActions.STRIKETHROUGH,
        EditorActions.CODE,
        EditorActions.CHECK_ITEM,
    ],
    [EditorActions.LINK, EditorActions.UNORDERED_LIST, EditorActions.ORDERED_LIST],
];
