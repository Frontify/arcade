/* (c) Copyright Frontify Ltd., all rights reserved. */

import { getTextStyleCssProperties } from '@components/RichTextEditor/Plugins';
import { TextStyles } from '@components/RichTextEditor/Plugins/TextStylePlugin/types';
import { TElement } from '@udecode/plate';
import { reactCssPropsToCss } from '../utils/reactCssPropsToCss';

export const defaultNode = (node: TElement, children: string, defaultClassNames: string) => {
    const styles = getTextStyleCssProperties(node.type);
    const defaultStyles = reactCssPropsToCss(styles);
    if (node.type === TextStyles.heading1) {
        return `<h1 class="${defaultClassNames}" style="${defaultStyles}">${children}</h1>`;
    }
    if (node.type === TextStyles.heading2) {
        return `<h2 class="${defaultClassNames}" style="${defaultStyles}">${children}</h2>`;
    }
    if (node.type === TextStyles.heading3) {
        return `<h3 class="${defaultClassNames}" style="${defaultStyles}">${children}</h3>`;
    }
    if (node.type === TextStyles.heading4) {
        return `<h4 class="${defaultClassNames}" style="${defaultStyles}">${children}</h4>`;
    }
    return `<p class="${defaultClassNames}" style="${defaultStyles}">${children}</p>`;
};
