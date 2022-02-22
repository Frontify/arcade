/* (c) Copyright Frontify Ltd., all rights reserved. */

import {
    createAlignPlugin,
    createBoldPlugin,
    createCodeBlockPlugin,
    createCodePlugin,
    createHeadingPlugin,
    createItalicPlugin,
    createLinkPlugin,
    createListPlugin,
    createParagraphPlugin,
    createPlateUI,
    createPlugins,
    createSoftBreakPlugin,
    createStrikethroughPlugin,
    createUnderlinePlugin,
    ELEMENT_LI,
    ELEMENT_LIC,
    ELEMENT_LINK,
    ELEMENT_OL,
    ELEMENT_UL,
    LinkElement,
    MARK_BOLD,
    MARK_CODE,
    MARK_ITALIC,
    MARK_STRIKETHROUGH,
    MARK_UNDERLINE,
} from "@udecode/plate";
import { ListItemElement } from "./components/elements/list-item";
import { ListItemContentElement } from "./components/elements/list-item-content";
import { OrderedListElement } from "./components/elements/ordered-list";
import { UnorderedListElement } from "./components/elements/unordered-list";
import { BoldMark } from "./components/marks/bold";
import { CodeMark } from "./components/marks/code";
import { ItalicMark } from "./components/marks/italic";
import { StrikethroughMark } from "./components/marks/strikethrough";
import { UnderlineMark } from "./components/marks/underline";

const components = createPlateUI({
    // this will override the components over the default ones
    [ELEMENT_LINK]: LinkElement,
    [ELEMENT_UL]: UnorderedListElement,
    [ELEMENT_OL]: OrderedListElement,
    [ELEMENT_LI]: ListItemElement,
    [ELEMENT_LIC]: ListItemContentElement,
    [MARK_BOLD]: BoldMark,
    [MARK_ITALIC]: ItalicMark,
    [MARK_UNDERLINE]: UnderlineMark,
    [MARK_STRIKETHROUGH]: StrikethroughMark,
    [MARK_CODE]: CodeMark,
});

export const plugins = createPlugins(
    [
        createSoftBreakPlugin(),
        createAlignPlugin(),
        createParagraphPlugin(),
        createCodeBlockPlugin(),
        createHeadingPlugin(),
        createListPlugin(),
        createLinkPlugin(),
        createBoldPlugin(),
        createItalicPlugin(),
        createUnderlinePlugin(),
        createStrikethroughPlugin(),
        createCodePlugin(),
    ],
    {
        components,
    },
);
