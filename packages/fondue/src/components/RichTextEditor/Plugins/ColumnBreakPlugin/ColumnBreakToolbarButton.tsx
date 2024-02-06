/* (c) Copyright Frontify Ltd., all rights reserved. */

import { getTooltip } from '@components/RichTextEditor/helpers/getTooltip';
import { PlateEditor, someNode, useEditorState, useEventPlateId } from '@udecode/plate';
import { toggleColumnBreak } from './onKeyDownColumnBreak';
import { getColumnBreakCount } from './utils/getColumnBreakCount';
import { ToolbarButton } from '@components/RichTextEditor/components/Toolbar/ToolbarButton';
import { ComponentProps } from 'react';
import { IconStylingWrapper } from '@components/RichTextEditor/Plugins/helper';
import { IconTextColumnBreak16 } from '@foundation/Icon';

export const ColumnBreakToolbarButton = ({ id, ...props }: ComponentProps<typeof ToolbarButton>) => {
    const editor = useEditorState(useEventPlateId(id));
    const isActive = !!editor?.selection && someNode(editor, { match: (node) => !!node.breakAfterColumn });

    const columns = (editor?.pluginsByKey['breakAfterColumn'] as any)?.options?.columns;

    const columnCount = Number(columns) || 1;
    const canBreakAfter = isColumnBreakEnabled(editor, columnCount, isActive);

    return (
        <ToolbarButton
            disabled={!canBreakAfter}
            pressed={!isActive}
            tooltip={getTooltip(
                canBreakAfter ? 'Column Break\nShift+Ctrl+Return' : 'Already at maximum numbers of columns',
            )}
            onPointerDown={(e) => e.preventDefault()}
            onClick={(event) => {
                toggleColumnBreak(editor, columnCount, event);
            }}
            {...props}
        >
            <IconStylingWrapper icon={<IconTextColumnBreak16 />} />
        </ToolbarButton>
    );
};

export const isColumnBreakEnabled = (editor: PlateEditor, columnCount: number, isButtonActive: boolean): boolean =>
    getColumnBreakCount(editor) + 1 < columnCount || isButtonActive;
