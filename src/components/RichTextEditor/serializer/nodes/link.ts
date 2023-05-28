/* (c) Copyright Frontify Ltd., all rights reserved. */

import { TLinkElement } from '@components/RichTextEditor/Plugins/LinkPlugin/types';
import { TElement } from '@udecode/plate';
import escapeHtml from 'escape-html';
import { reactCssPropsToCss } from '../utils/reactCssPropsToCss';
import { CSSProperties } from 'react';

export const linkNode = (
    node: TElement,
    children: string,
    defaultClassNames: string,
    styles: Record<string, CSSProperties & { hover?: CSSProperties }>,
) => {
    if (node.chosenLink) {
        const { chosenLink } = node as TLinkElement;
        return `<a class="${defaultClassNames}" style="${reactCssPropsToCss(styles.link)}" target=${
            chosenLink?.openInNewTab ? '_blank' : '_self'
        } href="${escapeHtml(chosenLink?.searchResult?.link)}">${children}</a>`;
    }
    return `<a class="${defaultClassNames}" style="${reactCssPropsToCss(styles.link)}" target="${
        node?.target ?? '_blank'
    }" href="${escapeHtml(node.url as string)}">${children}</a>`;
};
