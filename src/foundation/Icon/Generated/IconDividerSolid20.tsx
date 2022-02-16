import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconDividerSolid20(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = "tw-flex tw-items-center tw-justify-center tw-fill-current";
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className={customClassName}
            name="IconDividerSolid20"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5.656 2.425c-.69 0-1.25.56-1.25 1.25v1.95a.75.75 0 1 1-1.5 0v-1.95a2.75 2.75 0 0 1 2.75-2.75h8.688a2.75 2.75 0 0 1 2.75 2.75v1.95a.75.75 0 0 1-1.5 0v-1.95c0-.69-.56-1.25-1.25-1.25H5.656Zm0 15.15c-.69 0-1.25-.56-1.25-1.25v-1.95a.75.75 0 0 0-1.5 0v1.95a2.75 2.75 0 0 0 2.75 2.75h8.688a2.75 2.75 0 0 0 2.75-2.75v-1.95a.75.75 0 0 0-1.5 0v1.95c0 .69-.56 1.25-1.25 1.25H5.656ZM3.75 9.25a.75.75 0 0 0 0 1.5h12.5a.75.75 0 0 0 0-1.5H3.75Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconDividerSolid20);
export default Memo;
