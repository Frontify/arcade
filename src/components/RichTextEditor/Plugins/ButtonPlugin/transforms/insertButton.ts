import { InsertNodesOptions, PlateEditor, TText, Value, insertNodes } from '@udecode/plate-core';
import { TButtonElement } from '../types';
import { CreateButtonNodeOptions, createButtonNode } from '../utils/index';

/**
 * Insert a button node.
 */
export const insertButton = <V extends Value>(
    editor: PlateEditor<V>,
    createButtonNodeOptions: CreateButtonNodeOptions,
    options?: InsertNodesOptions<V>,
) => {
    insertNodes<TButtonElement | TText>(editor, [createButtonNode(editor, createButtonNodeOptions)], options as any);
};
