/* (c) Copyright Frontify Ltd., all rights reserved. */

import { getTextStyleCssProperties } from '@components/RichTextEditor/Plugins';
import { reactCssPropsToCss } from '../utils/reactCssPropsToCss';
import { TElement } from '@udecode/plate';

export const defaultNode = (node: TElement, children: string, defaultClassNames: string) => {
    const styles = getTextStyleCssProperties(node.type);
    const defaultStyles = reactCssPropsToCss(styles);
    if (node.type === 'heading1') {
        return `<h1 class="${defaultClassNames}" style="${defaultStyles}">${children}</h1>`;
    }
    if (node.type === 'heading2') {
        return `<h2 class="${defaultClassNames}" style="${defaultStyles}">${children}</h2>`;
    }
    if (node.type === 'heading3') {
        return `<h3 class="${defaultClassNames}" style="${defaultStyles}">${children}</h3>`;
    }
    if (node.type === 'heading4') {
        return `<h4 class="${defaultClassNames}" style="${defaultStyles}">${children}</h4>`;
    }
    return `<p class="${defaultClassNames}" style="${defaultStyles}">${children}</p>`;
};
