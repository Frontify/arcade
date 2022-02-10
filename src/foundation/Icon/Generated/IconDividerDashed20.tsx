import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconDividerDashed20(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = ["tw-flex tw-items-center tw-justify-center tw-fill-current"];
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className={customClassName}
            name="IconDividerDashed20"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15 16.875a.208.208 0 0 0 .209-.208v-3.334a.625.625 0 1 1 1.25 0v3.334c0 .805-.653 1.458-1.459 1.458H5a1.458 1.458 0 0 1-1.458-1.458v-3.334a.625.625 0 1 1 1.25 0v3.334c0 .115.093.208.208.208h10Zm0-13.75c.115 0 .209.093.209.208v3.334a.625.625 0 1 0 1.25 0V3.333c0-.805-.653-1.458-1.459-1.458H5c-.805 0-1.458.653-1.458 1.458v3.334a.625.625 0 0 0 1.25 0V3.333c0-.115.093-.208.208-.208h10Zm1.667 6.915c0 .345-.28.624-.625.624h-1.51a.625.625 0 1 1 0-1.25h1.51c.345 0 .625.28.625.625Zm-4.531 0c0 .345-.28.624-.625.624H8.49a.625.625 0 1 1 0-1.25h3.02c.346 0 .626.28.626.625Zm-6.042 0c0 .345-.28.624-.625.624h-1.51a.625.625 0 1 1 0-1.25h1.51c.345 0 .625.28.625.625Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconDividerDashed20);
export default Memo;
