/* (c) Copyright Frontify Ltd., all rights reserved. */

import {
    getPreventDefaultHandler,
    someNode,
    toggleNodeType,
    usePlateEditorState,
    withPlateProvider,
} from "@udecode/plate";
import { merge } from "@utilities/merge";
import React from "react";
import { getTextStyles, TextStyles, TextStyleType } from "../utils/getTextStyles";

type DropdownItemProps = {
    label: string;
    type: TextStyles;
    textStyles?: TextStyleType[];
};

export const DropdownItem = withPlateProvider(({ label, type, textStyles }: DropdownItemProps) => {
    const editor = usePlateEditorState();
    const isActive = !!editor?.selection && someNode(editor, { match: { type } });
    return (
        <button
            className={merge([
                "tw-block tw-w-full tw-text-left tw-border-b tw-px-3 tw-py-2 tw-border-black-30 tw-outline-none tw-cursor-pointer tw-truncate ",
                isActive ? "tw-bg-black-100 " : "hover:tw-bg-black-0",
            ])}
            onMouseDown={
                editor &&
                getPreventDefaultHandler(toggleNodeType, editor, {
                    activeType: type,
                    inactiveType: type,
                })
            }
        >
            <span className={getTextStyles(type, textStyles)}>{label}</span>
        </button>
    );
});
