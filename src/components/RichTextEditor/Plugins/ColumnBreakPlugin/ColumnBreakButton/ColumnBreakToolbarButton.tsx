/* (c) Copyright Frontify Ltd., all rights reserved. */

import { BasePlacement } from '@popperjs/core';
import {
    PlateEditor,
    ToolbarButton,
    ToolbarButtonProps,
    someNode,
    useEventPlateId,
    usePlateEditorState,
} from '@udecode/plate';
import React from 'react';
import { buttonClassNames } from '../../helper';
import { toggleColumnBreak } from '../onKeyDownColumnBreak';
import { getColumnBreakCount } from '../utils/getColumnBreakCount';

export const ColumnBreakToolbarButton = ({ id, ...props }: ToolbarButtonProps) => {
    const editor = usePlateEditorState(useEventPlateId(id));
    const isActive = !!editor?.selection && someNode(editor, { match: (node) => !!node.breakAfterColumn });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const breakAfterPlugin = editor.pluginsByKey['breakAfterColumn'] as any;
    const columns = breakAfterPlugin?.options?.columns;

    const columnCount = Number(columns) || 1;
    const canBreakAfter = isColumnBreakEnabled(editor, columnCount, isActive);

    return (
        <ToolbarButton
            active={isActive}
            tooltip={getTooltip(
                canBreakAfter ? 'Column Break\nShift+Ctrl+Return' : 'Already at maximum numbers of columns',
            )}
            onMouseDown={(event) => toggleColumnBreak(editor, columnCount, event)}
            {...props}
            classNames={{
                root: `${buttonClassNames.root} ${canBreakAfter ? '' : '!tw-cursor-not-allowed !tw-opacity-50'}`,
                active: buttonClassNames.active,
            }}
        />
    );
};

const getTooltip = (content: string, placement?: BasePlacement) => ({
    className:
        'tw-bg-text tw-border tw-border-line-strong tw-text-box-neutral-strong-inverse tw-py-2 tw-px-3 -tw-mb-1 tw-rounded tw-shadow-lg tw-text-xs',
    content: content.split('\n').map((item) => {
        return (
            <span key={item}>
                {item}
                <br />
            </span>
        );
    }),
    placement,
});

export const isColumnBreakEnabled = (editor: PlateEditor, columnCount: number, isButtonActive: boolean): boolean =>
    getColumnBreakCount(editor) + 1 < columnCount || isButtonActive;
