/* (c) Copyright Frontify Ltd., all rights reserved. */

import { MarkdownAstNode, PartialOptionType } from '../types';
import deserialize from './deserialize';

export default function plugin(opts?: PartialOptionType) {
    const compiler = (node: { children: Array<MarkdownAstNode> }) => {
        return node.children.map((c) => deserialize(c, opts));
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.Compiler = compiler;
}
