import { insertNodes, PlateEditor } from '@udecode/plate-core';
import { ELEMENT_LINK } from '@udecode/plate-link';
import { ChosenLink } from '../types';

/**
 * Wrap selected nodes with a link and collapse at the end.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const wrapLink = <T = {}>(editor: PlateEditor<T>, { chosenLink }: { chosenLink: ChosenLink }) => {
    if (chosenLink.searchResult?.title) {
        insertNodes(editor, {
            type: ELEMENT_LINK,
            chosenLink,
            children: [
                {
                    text: chosenLink.searchResult.title,
                },
            ],
        });
    }
};
