import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconPlay(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = [
        "tw-flex tw-items-center tw-justify-center tw-fill-current",
        IconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            name="IconPlay"
            {...props}
        >
            <path d="M19.356 12.743 6.62 20.02a1 1 0 0 1-1.496-.868V4.598a1 1 0 0 1 1.496-.868l12.735 7.277a1 1 0 0 1 0 1.736Z" />
        </svg>
    );
}

const Memo = memo(IconPlay);
export default Memo;
