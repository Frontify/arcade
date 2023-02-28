/* (c) Copyright Frontify Ltd., all rights reserved. */

import { TDescendant } from '@udecode/plate';
import { CSSProperties } from 'react';
import { MentionableItems, mapMentionable } from '../Plugins/MentionPlugin';
import { DesignTokens } from '../types';
import { defaultDesignTokens } from '../utils/defaultDesignTokens';
import { parseRawValue } from '../utils/parseRawValue';
import { serializeNodeToHtmlRecursive } from './utils/serializeNodeToHtmlRecursive';
import { setDefaultDesignTokensIfNull } from './utils/setDefaultDesignTokensIfNull';

export const serializeRawToHtml = (
    raw: string,
    designTokens: DesignTokens = defaultDesignTokens,
    columns: SerializeNodesToHtmlOptions['columns'] = 1,
    columnGap: SerializeNodesToHtmlOptions['columnGap'] = 'normal',
): string => {
    const nodes = parseRawValue({ raw });
    return serializeNodesToHtml(nodes, { designTokens, columns, columnGap });
};

export type SerializeNodesToHtmlOptions = {
    designTokens?: DesignTokens;
    mentionable?: MentionableItems;
    columns?: number;
    columnGap?: CSSProperties['columnGap'];
};

export const serializeNodesToHtml = (
    nodes: TDescendant[],
    {
        designTokens = defaultDesignTokens,
        mentionable,
        columns = 1,
        columnGap = 'normal',
    }: SerializeNodesToHtmlOptions = {},
): string => {
    const mergedDesignTokens = setDefaultDesignTokensIfNull(defaultDesignTokens, designTokens);
    const mappedMentionable = mentionable ? mapMentionable(mentionable) : new Map();

    const html = nodes
        .map((node) => {
            if (isBreakNode(node)) {
                return '<br />';
            }
            return serializeNodeToHtmlRecursive(node, {
                designTokens: mergedDesignTokens,
                mappedMentionable,
            });
        })
        .join('');

    if (columns > 1) {
        return `<div style="columns:${columns}; column-gap:${columnGap};">${html}</div>`;
    }

    return html;
};

const isBreakNode = (node: TDescendant): boolean => {
    if (!Array.isArray(node?.children)) {
        return false;
    }
    const isChecklistElement = node?.type === 'checkbox-item';
    return node.children?.length === 1 && node.children[0].text === '' && !isChecklistElement;
};
