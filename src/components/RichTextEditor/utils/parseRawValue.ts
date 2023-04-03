/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ELEMENT_PARAGRAPH, Value, deserializeHtml } from '@udecode/plate';
import { PluginComposer } from '../Plugins';
import { InitPlateEditor } from './InitPlateEditor';

const isHtmlString = (string: string): boolean => {
    const fragment = new DOMParser().parseFromString(string, 'text/html');
    return fragment.body.children.length > 0;
};

const wrapTextInHtml = (text: string) => (isHtmlString(text) ? text : `<p>${text}</p>`);

export const EMPTY_RICH_TEXT_VALUE: Value = [{ type: ELEMENT_PARAGRAPH, children: [{ text: '' }] }];

type ParseRawValueOptions = {
    editorId?: string;
    raw?: string;
    plugins?: PluginComposer;
};

export const parseRawValue = ({ editorId = 'parseRawValue', raw, plugins }: ParseRawValueOptions): Value => {
    const editor = InitPlateEditor.init(`${editorId}_parseRawValue`, plugins).getInstance();

    if (!raw) {
        return EMPTY_RICH_TEXT_VALUE;
    }

    try {
        return JSON.parse(raw);
    } catch {
        const trimmed = raw.trim().replace(/>\s+</g, '><');
        const htmlDocumentString = wrapTextInHtml(trimmed);
        const parsedHtml = deserializeHtml(editor, {
            element: htmlDocumentString,
            stripWhitespace: true,
        }) as Value;
        return parsedHtml ?? EMPTY_RICH_TEXT_VALUE;
    }
};
