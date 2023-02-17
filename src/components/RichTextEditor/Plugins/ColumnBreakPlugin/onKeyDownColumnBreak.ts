/* (c) Copyright Frontify Ltd., all rights reserved. */

import {
    KeyboardHandlerReturnType,
    PlateEditor,
    getNodeEntries,
    getPreventDefaultHandler,
    isBlock,
    someNode,
} from '@udecode/plate';
import isHotkey from 'is-hotkey';
import { Location } from 'slate';
import { KEY_ELEMENT_BREAK_AFTER_COLUMN } from './createColumnBreakPlugin';
import { getColumnBreakCount } from './utils/getColumnBreakCount';
import { setColumnBreaks } from './utils/setColumnBreaks';
import { updateColumnBreaks } from './utils/updateColumnBreaks';

export const toggleColumnBreak = (editor: PlateEditor, columns: number, event: React.BaseSyntheticEvent) => {
    const isActive = !!editor?.selection && someNode(editor, { match: (node) => !!node.breakAfterColumn });

    if (isActive) {
        setColumnBreaks(editor, { value: undefined });
    } else {
        const columnBreakCount = getColumnBreakCount(editor);
        const toggleRange = Math.max(columns - columnBreakCount - 1, 0);

        if (toggleRange === 0) {
            return;
        }

        const elementsToToggle = Array.from(
            getNodeEntries(editor, {
                at: editor.selection as Location,
                match: (node) => isBlock(editor, node),
                mode: 'lowest',
            }),
        ).slice(-toggleRange); // apply column breaks ath the end of the selection

        getPreventDefaultHandler(() => {
            for (const element of elementsToToggle) {
                setColumnBreaks(editor, { value: 'active', at: element[1] });
            }
        })(event);
    }

    updateColumnBreaks(editor, columns);
};

export const onKeyDownColumnBreak =
    (editor: PlateEditor): KeyboardHandlerReturnType =>
    (e) => {
        if (e.defaultPrevented) {
            return;
        }

        if (isHotkey('shift+ctrl+enter', e)) {
            const columnBreakPlugin = editor.plugins.find((plugin) => plugin.key === KEY_ELEMENT_BREAK_AFTER_COLUMN);
            const columns = (columnBreakPlugin?.options as { columns: number })?.columns ?? 1;
            toggleColumnBreak(editor, columns, e);
        }
    };
