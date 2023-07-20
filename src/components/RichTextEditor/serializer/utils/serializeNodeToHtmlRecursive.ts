/* (c) Copyright Frontify Ltd., all rights reserved. */

import {
    ELEMENT_BUTTON,
    ELEMENT_CHECK_ITEM,
    MappedMentionableItems,
    OL_STYLES,
    TextStyles,
    UL_CLASSES,
    alignmentClassnames,
    getOrderedListClasses,
} from '@components/RichTextEditor/Plugins';
import { getLicElementClassNames } from '@components/RichTextEditor/Plugins/ListPlugin/ListItemContentMarkupElement';
import { LI_CLASSNAMES, getLiStyles } from '@components/RichTextEditor/Plugins/ListPlugin/ListItemMarkupElement';
import {
    ELEMENT_LI,
    ELEMENT_LIC,
    ELEMENT_LINK,
    ELEMENT_MENTION,
    ELEMENT_OL,
    ELEMENT_UL,
    TDescendant,
    TElement,
    isText,
    // ELEMENT_IMAGE,
} from '@udecode/plate';
import { merge } from '@utilities/merge';
import { buttonNode } from '../nodes/button';
import { checkItemNode } from '../nodes/checkItem';
import { linkNode } from '../nodes/link';
import { mentionHtmlNode } from '../nodes/mentionHtmlNode';
import { reactCssPropsToCss } from './reactCssPropsToCss';
import { serializeLeafToHtml } from './serializeLeafToHtml';
import { CSSPropertiesHover } from '../types';

const countNodesOfType = (nodes: TDescendant[], type: string): number => {
    return nodes.reduce((acc, node) => {
        if (node.type === type) {
            acc++;
        }
        if (node.children) {
            return acc + countNodesOfType(node.children as TDescendant[], type);
        }
        return acc;
    }, 0);
};

type NestingCount = {
    [type: string]: number;
};

type SerializeNodeToHtmlRecursiveOptions = {
    mappedMentionable?: MappedMentionableItems;
    nestingCount?: NestingCount;
};

export const serializeNodeToHtmlRecursive = (
    node: TDescendant,
    styles: Record<string, CSSPropertiesHover>,
    { mappedMentionable, nestingCount = {} }: SerializeNodeToHtmlRecursiveOptions,
): string => {
    if (isText(node)) {
        return serializeLeafToHtml(node);
    }

    const rootNestingCount = nestingCount[node.type] || countNodesOfType([node], node.type);
    let children = '';
    for (const element of node.children) {
        children += serializeNodeToHtmlRecursive(element, styles, {
            nestingCount: {
                ...nestingCount,
                [element.type as string]: rootNestingCount,
            },
            mappedMentionable,
        });
    }

    const htmlMapper = MapNodeTypesToHtml[node.type];
    try {
        return (
            htmlMapper({
                classNames: getClassNames(
                    node.breakAfterColumn as string | undefined,
                    node.align as string | undefined,
                ),
                children,
                rootNestingCount,
                node,
                mappedMentionable,
                styles,
            }) ?? children
        );
    } catch (error) {
        console.warn(`The htmlMapper for node type: '${node.type}' does not exist.`);
        return children;
    }
};

type Arguments = {
    classNames: string;
    children: string;
    rootNestingCount: number;
    node: TElement;
    mappedMentionable?: MappedMentionableItems;
    styles: Record<string, CSSPropertiesHover>;
};

const MapNodeTypesToHtml: { [key: string]: ({ ...args }: Arguments) => string } = {
    [TextStyles.heading1]: (args) => getTextStyleHtml(TextStyles.heading1, args, 'h1'),
    [TextStyles.heading2]: (args) => getTextStyleHtml(TextStyles.heading2, args, 'h2'),
    [TextStyles.heading3]: (args) => getTextStyleHtml(TextStyles.heading3, args, 'h3'),
    [TextStyles.heading4]: (args) => getTextStyleHtml(TextStyles.heading4, args, 'h4'),
    [TextStyles.p]: (args) => getTextStyleHtml(TextStyles.p, args, 'p'),
    [TextStyles.custom1]: (args) => getTextStyleHtml(TextStyles.custom1, args, 'p'),
    [TextStyles.custom2]: (args) => getTextStyleHtml(TextStyles.custom2, args, 'p'),
    [TextStyles.custom3]: (args) => getTextStyleHtml(TextStyles.custom3, args, 'p'),
    [TextStyles.quote]: (args) => getTextStyleHtml(TextStyles.quote, args, 'p'),
    [TextStyles.imageTitle]: (args) => getTextStyleHtml(TextStyles.imageTitle, args, 'p'),
    [TextStyles.imageCaption]: (args) => getTextStyleHtml(TextStyles.imageCaption, args, 'p'),
    [ELEMENT_UL]: (args) => `<ul class="${UL_CLASSES} ${args.classNames}">${args.children}</ul>`,
    [ELEMENT_OL]: ({ classNames, children, node, rootNestingCount }) => {
        const nestingLevel = Math.max(rootNestingCount - countNodesOfType([node], ELEMENT_OL), 0);
        return `<ol class="${getOrderedListClasses(nestingLevel)} ${classNames}" style="${reactCssPropsToCss(
            OL_STYLES,
        )}">${children}</ol>`;
    },
    [ELEMENT_LI]: ({ classNames, children, node, styles }) =>
        `<li class="${classNames} ${LI_CLASSNAMES}" style="${reactCssPropsToCss(
            getLiStyles(node, styles),
        )}">${children}</li>`,
    [ELEMENT_LIC]: ({ classNames, children, node }) =>
        `<p class="${classNames} ${getLicElementClassNames(node)}"><span>${children}</span></p>`,
    [ELEMENT_LINK]: ({ node, children, classNames, styles }) => linkNode(node, children, classNames, styles),
    [ELEMENT_BUTTON]: ({ node, children, classNames, styles }) => buttonNode(node, children, classNames, styles),
    [ELEMENT_CHECK_ITEM]: ({ node, children, classNames, styles }) => checkItemNode(node, children, classNames, styles),
    [ELEMENT_MENTION]: ({ node, mappedMentionable }) => mentionHtmlNode(node, { mentionable: mappedMentionable }),
};

const getTextStyleHtml = (
    tag: TextStyles,
    { classNames, styles, children }: Arguments,
    htmlTag: 'p' | 'h1' | 'h2' | 'h3' | 'h4',
) => `<${htmlTag} class="${classNames}" style="${reactCssPropsToCss(styles[tag])}">${children}</${htmlTag}>`;

const getClassNames = (breakAfterColumn?: string, align?: string) => {
    const breakWordsClass = 'tw-break-words';
    const columnBreakClasses =
        breakAfterColumn === 'active' ? 'tw-break-after-column tw-break-inside-avoid-column' : '';
    const alignClass = align ? alignmentClassnames[align] : '';
    return merge([alignClass, breakWordsClass, columnBreakClasses]);
};
