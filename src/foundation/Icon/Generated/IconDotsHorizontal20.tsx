import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconDotsHorizontal20(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = ["tw-flex tw-items-center tw-justify-center tw-fill-current"];
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className={customClassName}
            name="IconDotsHorizontal20"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15.5 8.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-5.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM6 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconDotsHorizontal20);
export default Memo;
