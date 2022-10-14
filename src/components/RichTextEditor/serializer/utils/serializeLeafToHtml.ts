/* (c) Copyright Frontify Ltd., all rights reserved. */

import { TDescendant } from '@udecode/plate';
import {
    BOLD_CLASSES,
    CODE_CLASSES,
    ITALIC_CLASSES,
    STRIKETHROUGH_CLASSES,
    UNDERLINE_CLASSES,
} from '@components/RichTextEditor/Plugins';
import escapeHtml from 'escape-html';

export const serializeLeafToHtml = (node: TDescendant): string => {
    let string = escapeHtml(node.text);
    if (node.bold) {
        string = `<span class="${BOLD_CLASSES}">${string}</span>`;
    }
    if (node.italic) {
        string = `<span class="${ITALIC_CLASSES}">${string}</span>`;
    }
    if (node.underline) {
        string = `<span class="${UNDERLINE_CLASSES}">${string}</span>`;
    }
    if (node.strikethrough) {
        string = `<span class="${STRIKETHROUGH_CLASSES}">${string}</span>`;
    }
    if (node.code) {
        string = `<span class="${CODE_CLASSES}">${string}</span>`;
    }
    return string;
};
