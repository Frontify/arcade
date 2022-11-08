/* (c) Copyright Frontify Ltd., all rights reserved. */

import { MdAstNode, OptionType } from './astTypes';
import transform from './deserialize';

export default function plugin(opts?: OptionType) {
    const compiler = (node: { children: Array<MdAstNode> }) => {
        return node.children.map((c) => transform(c, opts));
    };

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.Compiler = compiler;
}
