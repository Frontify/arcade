/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor, getParentNode, getPointBefore, getStartPoint, select } from '@udecode/plate';
import { Path } from 'slate';
import { KEY_ELEMENT_BREAK_AFTER } from './createColumnBreakPlugin';
import { setColumnBreaks } from './utils/setColumnBreaks';
import { updateColumnBreaks } from './utils/updateColumnBreaks';

const moveCursorToPath = (editor: PlateEditor, path: Path) => {
    const startPoint = getStartPoint(editor, path);
    setTimeout(() => {
        select(editor, {
            anchor: startPoint,
            focus: startPoint,
        });
    });
};

const getColumnCount = (editor: PlateEditor) => {
    const breakAfterPlugin = editor.plugins.find((plugin) => plugin.key === KEY_ELEMENT_BREAK_AFTER);
    return (breakAfterPlugin?.options as { columns: number })?.columns ?? 1;
};

export const useHooks = <E extends PlateEditor = PlateEditor>(editor: E) => {
    const { apply } = editor;
    const columnCount = getColumnCount(editor);

    editor.apply = (operation) => {
        switch (operation.type) {
            case 'split_node':
                operation.properties = { ...operation.properties, breakAfterColumn: undefined };
                break;
            case 'merge_node':
                const pointBefore = getPointBefore(editor, operation.path);

                if (!pointBefore) {
                    break;
                }

                const node = getParentNode(editor, pointBefore.path);
                setColumnBreaks(editor, { at: pointBefore, value: undefined });
                updateColumnBreaks(editor, columnCount);

                if (node?.[0].breakAfterColumn) {
                    moveCursorToPath(editor, operation.path);
                    return editor;
                }

                break;
        }

        apply(operation);
    };

    setTimeout(() => updateColumnBreaks(editor, columnCount));
};
