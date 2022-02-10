import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconDotsHorizontal24(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = ["tw-flex tw-items-center tw-justify-center tw-fill-current"];
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={customClassName}
            name="IconDotsHorizontal24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M18.5 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-6.5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM7 12a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconDotsHorizontal24);
export default Memo;
