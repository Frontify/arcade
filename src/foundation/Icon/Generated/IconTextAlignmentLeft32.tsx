import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconTextAlignmentLeft32(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = "tw-flex tw-items-center tw-justify-center tw-fill-current";
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            className={customClassName}
            name="IconTextAlignmentLeft32"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M27.974 7.667a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h21.973a1 1 0 0 1 1 1Zm-4.943 17.667H4.971a1 1 0 1 1 0-2h18.06a1 1 0 1 1 0 2Zm1-12.144a1 1 0 0 1-1 1H4.971a1 1 0 0 1 0-2h18.06a1 1 0 0 1 1 1Zm3.943 5.548a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h21.973a1 1 0 0 1 1 1Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconTextAlignmentLeft32);
export default Memo;
