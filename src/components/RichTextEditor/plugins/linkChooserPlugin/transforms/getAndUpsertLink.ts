import { IconEnum } from "@foundation/Icon";
import { getAbove, getPluginType, isCollapsed, PlateEditor, unwrapNodes } from "@udecode/plate-core";
import { ELEMENT_LINK_CHOOSER } from "../createLinkChooserPlugin";
import { ChosenLink, LinkChooserPlugin } from "../types";
import { upsertLinkAtSelection } from "./upsertLinkAtSelection";

// eslint-disable-next-line @typescript-eslint/ban-types
export const getAndUpsertLink = async <T = {}>(
    editor: PlateEditor<T>,
    getChosenLink?: LinkChooserPlugin["getChosenLink"],
) => {
    const type = getPluginType(editor, ELEMENT_LINK_CHOOSER);
    let prevChosenLink: ChosenLink = {
        searchResult: null,
        openInNewTab: false,
    };

    const linkNode = getAbove(editor, {
        match: { type },
    });
    if (linkNode) {
        prevChosenLink = linkNode[0].chosenLink as ChosenLink;
    }

    let chosenLink: ChosenLink = {
        searchResult: null,
        openInNewTab: false,
    };
    if (getChosenLink) {
        chosenLink = await getChosenLink(prevChosenLink);
    } else {
        chosenLink = {
            searchResult: {
                icon: IconEnum.Academy,
                id: "id",
                title:
                    window.prompt(
                        `Enter the URL of the link:`,
                        prevChosenLink.searchResult ? prevChosenLink.searchResult.title : "",
                    ) || "",
                local: false,
            },
            openInNewTab: false,
        };
    }

    if (!chosenLink.searchResult) {
        linkNode &&
            editor.selection &&
            unwrapNodes(editor, {
                at: editor.selection,
                match: { type },
            });

        return;
    }

    // If our cursor is in middle of a link, then we don't want to insert it inline
    const shouldWrap: boolean = linkNode !== undefined && isCollapsed(editor.selection);
    upsertLinkAtSelection(editor, { chosenLink, wrap: shouldWrap });
};
