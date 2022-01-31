/* (c) Copyright Frontify Ltd., all rights reserved. */

import { merge } from "@utilities/merge";
import { useActor } from "@xstate/react";
import React, { FC, useContext } from "react";
import { Editor, Element } from "slate";
import { useSlateStatic } from "slate-react";
import { ToolbarContext } from "./context/toolbar";
import { TextAlignTypes } from "./renderer/renderBlockStyles";
import { BlockElement } from "./RichTextEditor";

interface BlockStyleButtonProps {
    blockType: BlockElement["type"];
    textAlign?: TextAlignTypes;
}

export const BlockStyleButton: FC<BlockStyleButtonProps> = ({ blockType, textAlign, children }) => {
    const { machineRef } = useContext(ToolbarContext);

    if (!machineRef) {
        return null;
    }

    const editor = useSlateStatic();
    const [blockTypeIsActive] = Editor.nodes(editor, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        match: (node) => Element.isElement(node) && node.type === blockType && node.properties?.textAlign === textAlign,
    });

    const [, send] = useActor(machineRef);

    return (
        <button
            data-test-id={`block-style-button-${blockType}`}
            className={merge([
                "tw-flex tw-w-6 tw-h-6 tw-items-center tw-justify-center tw-border-0 tw-rounded tw-text-black-95 tw-cursor-pointer",
                blockTypeIsActive ? "tw-bg-black-10" : "tw-bg-white",
            ])}
            onClick={(event) => {
                event.preventDefault();
                send({
                    type: "BLOCK_TYPE_SELECTED",
                    data: { type: blockType, active: !!blockTypeIsActive, editor, textAlign },
                });
            }}
            onMouseDown={(event) => event.preventDefault()}
        >
            {children}
        </button>
    );
};
