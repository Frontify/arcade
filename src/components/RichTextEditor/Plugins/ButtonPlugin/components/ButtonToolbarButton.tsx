import React from 'react';
import { focusEditor, someNode, useEventPlateId, usePlateEditorState } from '@udecode/plate-core';
import { ToolbarButton } from '@udecode/plate-ui-toolbar';
import { triggerFloatingButton } from '../utils';
import { BlockToolbarButtonProps } from '@udecode/plate';

export interface LinkToolbarButtonProps extends BlockToolbarButtonProps {
    /**
     * Default onMouseDown is getting the link url by calling this promise before inserting the image.
     */
    getLinkUrl?: (prevUrl: string | null) => Promise<string | null>;
}

export const ButtonToolbarButton = ({ id, type, ...props }: LinkToolbarButtonProps) => {
    const editor = usePlateEditorState(useEventPlateId(id));

    const isLink = !!editor?.selection && someNode(editor, { match: { type } });

    return (
        <ToolbarButton
            active={isLink}
            onMouseDown={async (event) => {
                if (!editor) {
                    return;
                }

                event.preventDefault();
                event.stopPropagation();

                focusEditor(editor, editor.selection ?? editor.prevSelection!);

                setTimeout(() => {
                    triggerFloatingButton(editor, { focused: true });
                }, 0);
            }}
            {...props}
        />
    );
};
