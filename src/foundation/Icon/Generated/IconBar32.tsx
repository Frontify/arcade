import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconBar32(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = "tw-flex tw-items-center tw-justify-center tw-fill-current";
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            className={customClassName}
            name="IconBar32"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M25 13H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2ZM7 11a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4v-2a4 4 0 0 0-4-4H7Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconBar32);
export default Memo;
