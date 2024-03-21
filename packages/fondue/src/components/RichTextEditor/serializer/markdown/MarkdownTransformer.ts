/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateEditor } from '@udecode/plate-core';
import { Transformer } from '../types';
import { InitPlateEditor } from '@components/RichTextEditor/utils';

export abstract class MarkdownTransformer<T, R> implements Transformer<T, R> {
    protected editor: PlateEditor;

    constructor() {
        this.editor = InitPlateEditor.init().getInstance();
    }

    abstract process(value: T): R;
}
