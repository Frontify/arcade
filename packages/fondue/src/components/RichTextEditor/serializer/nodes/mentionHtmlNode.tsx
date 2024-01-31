/* (c) Copyright Frontify Ltd., all rights reserved. */

import ReactDOM from 'react-dom';
import { MappedMentionableItems } from '@components/RichTextEditor/Plugins/MentionPlugin';
import { MentionMarkupElementNode } from '@components/RichTextEditor/Plugins/MentionPlugin';
import { TElement, TMentionElement } from '@udecode/plate';

type MentionHtmlNodeProps = { mentionable?: MappedMentionableItems };

export const mentionHtmlNode = (node: TElement, { mentionable }: MentionHtmlNodeProps = {}) => {
    if (!mentionable) {
        return '';
    }

    const div = document.createElement('div');
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(MentionMarkupElementNode(mentionable)({ element: node as TMentionElement }), div);
    return div.innerHTML;
};
