import { getPluginType, insertNodes, isCollapsed, PlateEditor, TElement, unwrapNodes } from "@udecode/plate-core";
import { Editor, Transforms } from "slate";
import { ELEMENT_LINK_CHOOSER } from "../createLinkChooserPlugin";
import { ChosenLink } from "../types";
import { wrapLink } from "./wrapLink";

/**
 * Unwrap link at a location (default: selection).
 * Then, the focus of the location is set to selection focus.
 * Then, wrap the link at the location.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export const upsertLinkAtSelection = <T = {}>(
    editor: PlateEditor<T>,
    {
        chosenLink,
        wrap,
    }: {
        chosenLink: ChosenLink;
        /**
         * If true, wrap the link at the location (default: selection) even if the selection is collapsed.
         */
        wrap?: boolean;
    },
) => {
    if (!editor.selection) {
        return;
    }

    const type = getPluginType(editor, ELEMENT_LINK_CHOOSER);

    if (!wrap && isCollapsed(editor.selection)) {
        return insertNodes<TElement>(editor, {
            type,
            chosenLink,
            children: [{ text: "" }],
        });
    }

    // if our cursor is inside an existing link, but don't have the text selected, select it now
    if (wrap && isCollapsed(editor.selection)) {
        const linkLeaf = Editor.leaf(editor, editor.selection);
        const [, inlinePath] = linkLeaf;
        Transforms.select(editor, inlinePath);
    }

    unwrapNodes(editor, { at: editor.selection, match: { type } });

    wrapLink(editor, { at: editor.selection, chosenLink });
};
