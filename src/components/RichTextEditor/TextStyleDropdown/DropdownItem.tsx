/* (c) Copyright Frontify Ltd., all rights reserved. */

import { getPreventDefaultHandler, someNode, toggleNodeType, usePlateEditorState } from '@udecode/plate-core';
import { unwrapList } from '@udecode/plate-list';
import { merge } from '@utilities/merge';
import React, { ReactNode } from 'react';
import { TextStyles } from '../utils/textStyles';

type DropdownItemProps = {
    editorId?: string;
    type: TextStyles;
    children: ReactNode;
};

export const DropdownItem = ({ editorId, type, children }: DropdownItemProps) => {
    const editor = usePlateEditorState(editorId);
    const isActive = !!editor?.selection && someNode(editor, { match: { type } });
    return (
        <button
            data-test-id="textstyle-option"
            type="button"
            className={merge([
                'tw-block tw-w-full tw-text-left tw-px-3 tw-py-2 tw-outline-none tw-cursor-pointer tw-truncate hover:tw-bg-box-neutral-hover hover:w-text-box-neutral-inverse-hover tw-max-h-20 tw-max-w-[15rem] tw-min-h-[2.25rem]',
                isActive ? 'tw-text-box-neutral-inverse tw-bg-box-neutral' : 'tw-text-text',
            ])}
            onMouseDown={(event) => {
                if (!editor || !editor.selection) {
                    return;
                }

                unwrapList(editor, {});

                getPreventDefaultHandler(toggleNodeType, editor, {
                    activeType: type,
                    inactiveType: type,
                })(event);
            }}
        >
            {children}
        </button>
    );
};
