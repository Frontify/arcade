import React from "react";
import { IconProps } from "@elements/Icon/IconProps";
import { IconSize, IconSizeMap } from "@elements/Icon/IconSize";

function IconListBullets(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "tw-flex tw-items-center tw-justify-center tw-fill-current",
        IconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            name="IconListBullets"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 6a1 1 0 01-1 1H8a1 1 0 110-2h12a1 1 0 011 1zM7 18a1 1 0 011-1h10a1 1 0 110 2H8a1 1 0 01-1-1zM19 10a1 1 0 01-1 1H8a1 1 0 110-2h10a1 1 0 011 1zM21 14a1 1 0 01-1 1H8a1 1 0 110-2h12a1 1 0 011 1z"
            />
            <path d="M3 18.2a1.2 1.2 0 112.4 0 1.2 1.2 0 01-2.4 0zM3 10.2a1.2 1.2 0 112.4 0 1.2 1.2 0 01-2.4 0zM3 14.2a1.2 1.2 0 112.4 0 1.2 1.2 0 01-2.4 0zM3 6.2a1.2 1.2 0 112.4 0 1.2 1.2 0 01-2.4 0z" />
        </svg>
    );
}

const MemoIconListBullets = React.memo(IconListBullets);
export default MemoIconListBullets;
