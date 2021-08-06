import React from "react";
import IconHeader from "@elements/Icon/Generated/IconHeader";
import { IconSize } from "@elements/Icon/IconSize";
import createBlockStyleButton from "../utilities/createBlockStyleButton";

export const H4Button = createBlockStyleButton({
    blockType: "header-four",
    children: (
        <>
            <IconHeader size={IconSize.Size12} />
            <span>4</span>
        </>
    ),
});
