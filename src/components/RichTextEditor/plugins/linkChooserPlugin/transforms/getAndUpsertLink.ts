import { ELEMENT_LINK, unwrapNodes } from '@udecode/plate';
import { getAbove, isCollapsed, PlateEditor } from '@udecode/plate-core';
import { ChosenLink, LinkChooserPlugin } from '../types';
import { upsertLinkAtSelection } from './upsertLinkAtSelection';

const defaultChosenLink: ChosenLink = {
    searchResult: null,
    openInNewTab: false,
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const getAndUpsertLink = async <T = {}>(
    editor: PlateEditor<T>,
    getChosenLink: LinkChooserPlugin['getChosenLink'],
) => {
    let prevChosenLink = { ...defaultChosenLink };

    const linkNode = getAbove(editor, {
        match: { type: ELEMENT_LINK },
    });

    // legacy link structure
    if (linkNode && linkNode[0].url) {
        const { url, children } = linkNode[0];

        prevChosenLink = {
            searchResult: {
                id: url,
                title: children[0].text,
                link: url,
                icon: 'LINK',
            },
            openInNewTab: false,
        };
    }

    // new link structure
    else if (linkNode && linkNode[0].chosenLink) {
        const { chosenLink, children } = linkNode[0];
        prevChosenLink = {
            searchResult: {
                ...chosenLink.searchResult,
                title: children[0].text,
            },
            openInNewTab: chosenLink.openInNewTab,
        };

        // no link existing
    } else {
        const selectionText = window.getSelection()?.toString();
        prevChosenLink = {
            searchResult: {
                id: '',
                title: selectionText ?? '',
                link: '',
                icon: '',
            },
            openInNewTab: false,
        };
    }

    let chosenLink: ChosenLink = { ...defaultChosenLink };

    if (getChosenLink) {
        chosenLink = await getChosenLink(prevChosenLink);
    }

    if (!chosenLink.searchResult) {
        linkNode &&
            editor.selection &&
            unwrapNodes(editor, {
                at: editor.selection,
                match: { ELEMENT_LINK },
            });
        return;
    }

    // If our cursor is in middle of a link, then we don't want to insert it inline
    const shouldWrap: boolean = linkNode !== undefined && isCollapsed(editor.selection);
    upsertLinkAtSelection(editor, { chosenLink, wrap: shouldWrap });
};
