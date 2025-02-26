/* (c) Copyright Frontify Ltd., all rights reserved. */

import { type TreeOfNodes } from '@components/RichTextEditor/types';

import { serialize } from './serializer';
// eslint-disable-next-line import/order
import { options } from './options';
// eslint-disable-next-line import/order
import { MarkdownTransformer } from './MarkdownTransformer';

export class SlateToMarkdown extends MarkdownTransformer<TreeOfNodes, string> {
    process(value: TreeOfNodes) {
        return serialize(options(this.editor))(value);
    }
}
