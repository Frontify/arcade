import { LINK_CLASSES, OL_CLASSES, UL_CLASSES } from '@components/RichTextEditor/components';
import { ELEMENT_CHECK_ITEM } from '@components/RichTextEditor/plugins/checkboxListPlugin/createCheckboxListPlugin';
import { DesignTokens } from '@components/RichTextEditor/types';
import { TextStyles } from '@components/RichTextEditor/utils/textStyles';
import { ELEMENT_LI, ELEMENT_LINK, ELEMENT_OL, ELEMENT_PARAGRAPH, ELEMENT_UL, TDescendant } from '@udecode/plate';
import escapeHtml from 'escape-html';
import { reactCssPropsToCss } from './reactCssPropsToCss';
import { serializeLeafToHtml } from './serializeLeafToHtml';

export const serializeNodeToHtmlRecursive = (node: TDescendant, designTokens: DesignTokens): string => {
    if (!node.children) {
        return serializeLeafToHtml(node);
    }

    const children = node.children.map((n: TDescendant) => serializeNodeToHtmlRecursive(n, designTokens)).join('');

    switch (node.type) {
        case TextStyles.ELEMENT_HEADING1:
            return `<h1 style="${reactCssPropsToCss(designTokens.heading1)}">${children}</h1>`;
        case TextStyles.ELEMENT_HEADING2:
            return `<h2 style="${reactCssPropsToCss(designTokens.heading2)}">${children}</h2>`;
        case TextStyles.ELEMENT_HEADING3:
            return `<h3 style="${reactCssPropsToCss(designTokens.heading3)}">${children}</h3>`;
        case TextStyles.ELEMENT_HEADING4:
            return `<h4 style="${reactCssPropsToCss(designTokens.heading4)}">${children}</h4>`;
        case TextStyles.ELEMENT_CUSTOM1:
            return `<p style="${reactCssPropsToCss(designTokens.custom1)}">${children}</p>`;
        case TextStyles.ELEMENT_CUSTOM2:
            return `<p style="${reactCssPropsToCss(designTokens.custom2)}">${children}</p>`;
        case TextStyles.ELEMENT_CUSTOM3:
            return `<p style="${reactCssPropsToCss(designTokens.custom3)}">${children}</p>`;
        case ELEMENT_PARAGRAPH:
            return `<p>${children}</p>`;
        case ELEMENT_UL:
            return `<ul class="${UL_CLASSES}">${children}</ul>`;
        case ELEMENT_OL:
            return `<ol class="${OL_CLASSES}">${children}</ol>`;
        case ELEMENT_LI:
            return `<li>${children}</li>`;
        case ELEMENT_LINK:
            if (node.url) {
                return `<a class="${LINK_CLASSES}" href="${escapeHtml(node.url)}">${children}</a>`;
            }
            if (node.chosenLink) {
                return `<a class="${LINK_CLASSES}" target=${
                    node.chosenLink.openInNewTab ? '_blank' : '_self'
                } href="${escapeHtml(node.chosenLink.searchResult.link)}">${children}</a>`;
            }
        case ELEMENT_CHECK_ITEM:
            return `<input type="checkbox"/><label>${children}</label>`;

        default:
            return children;
    }
};
