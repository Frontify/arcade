/* (c) Copyright Frontify Ltd., all rights reserved. */

import {
    PlateEditor,
    Value,
    WithPlatePlugin,
    collapseSelection,
    getAboveNode,
    getEditorString,
    getNextNodeStartPoint,
    getPluginType,
    getPreviousNodeEndPoint,
    getRangeBefore,
    getRangeFromBlockStart,
    insertNodes,
    isCollapsed,
    isEndPoint,
    isStartPoint,
    mockPlugin,
    select,
    someNode,
    withoutNormalizing,
} from '@udecode/plate-core';
import { withRemoveEmptyNodes } from '@udecode/plate-normalizers';
import { Path, Point, Range } from 'slate';
import { upsertButton } from './transforms/index';
import { ButtonPlugin, ELEMENT_BUTTON } from './createButtonPlugin';
import { AnyObject, EText } from '@udecode/plate';

/**
 * Insert space after a url to wrap a button.
 * Lookup from the block start to the cursor to check if there is an url.
 * If not found, lookup before the cursor for a space character to check the url.
 *
 * On insert data:
 * Paste a string inside a button element will edit its children text but not its url.
 *
 */

export const withButton = <V extends Value = Value, E extends PlateEditor<V> = PlateEditor<V>>(
    editor: E,
    { type, options: { isUrl, getUrlHref, rangeBeforeOptions } }: WithPlatePlugin<ButtonPlugin, V, E>,
) => {
    const { insertData, insertText, apply, normalizeNode, insertBreak } = editor;

    const wrapButton = () => {
        withoutNormalizing(editor, () => {
            const selection = editor.selection as Range;

            // get the range from first space before the cursor
            let beforeWordRange = getRangeBefore(editor, selection, rangeBeforeOptions);

            // if no space found before, get the range from block start
            if (!beforeWordRange) {
                beforeWordRange = getRangeFromBlockStart(editor);
            }

            // if no word found before the cursor, exit
            if (!beforeWordRange) {
                return;
            }

            const hasLink = someNode(editor, {
                at: beforeWordRange,
                match: { type: getPluginType(editor, ELEMENT_BUTTON) },
            });

            // if word before the cursor has a link, exit
            if (hasLink) {
                return;
            }

            let beforeWordText = getEditorString(editor, beforeWordRange);
            beforeWordText = getUrlHref?.(beforeWordText) ?? beforeWordText;

            // if word before is not an url, exit
            if (!isUrl(beforeWordText)) {
                return;
            }

            // select the word to wrap button
            select(editor, beforeWordRange);

            // wrap button
            upsertButton(editor, {
                url: beforeWordText,
            });

            // collapse selection
            collapseSelection(editor, { edge: 'end' });
        });
    };

    editor.insertBreak = () => {
        if (!isCollapsed(editor.selection)) {
            return insertBreak();
        }
        wrapButton();
        insertBreak();
    };

    editor.insertText = (text) => {
        if (text === ' ' && isCollapsed(editor.selection)) {
            wrapButton();
        }

        insertText(text);
    };

    editor.insertData = (data: DataTransfer) => {
        const text = data.getData('text/plain');
        const textHref = getUrlHref?.(text);

        if (text) {
            const inserted = upsertButton(editor, {
                url: textHref || text,
                insertTextInButton: true,
            });
            if (inserted) {
                return;
            }
        }

        insertData(data);
    };

    editor.apply = (operation) => {
        if (operation.type !== 'set_selection') {
            apply(operation);
            return;
        }

        const range = operation.newProperties;
        if (!range?.focus || !range.anchor || !isCollapsed(range as Range)) {
            apply(operation);
            return;
        }

        const entry = getAboveNode(editor, {
            at: range as Range,
            match: { type: getPluginType(editor, ELEMENT_BUTTON) },
        });

        if (entry) {
            const [, path] = entry;

            let newPoint: Point | undefined;

            if (isStartPoint(editor, range.focus, path)) {
                newPoint = getPreviousNodeEndPoint(editor, path);
            }

            if (isEndPoint(editor, range.focus, path)) {
                newPoint = getNextNodeStartPoint(editor, path);
            }

            if (newPoint) {
                operation.newProperties = {
                    anchor: newPoint,
                    focus: newPoint,
                };
            }
        }

        apply(operation);
    };

    editor.normalizeNode = ([node, path]) => {
        if (node.type === getPluginType(editor, ELEMENT_BUTTON)) {
            const range = editor.selection as Range | null;

            if (range && isCollapsed(range) && isEndPoint(editor, range.focus, path)) {
                const nextPoint = getNextNodeStartPoint(editor, path);

                // select next text node if any
                if (nextPoint) {
                    select(editor, nextPoint);
                } else {
                    // insert text node then select
                    const nextPath = Path.next(path);
                    insertNodes(editor, { text: '' } as EText<V>, { at: nextPath });
                    select(editor, nextPath);
                }
            }
        }

        normalizeNode([node, path]);
    };

    return withRemoveEmptyNodes<V, E>(
        editor,
        mockPlugin<AnyObject, V, E>({
            options: { types: type },
        }),
    );
};
