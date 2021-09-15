import * as React from "react";
import { IconProps } from "@elements/Icon/IconProps";
import { IconSize, IconSizeMap } from "@elements/Icon/IconSize";

function IconTextAlignJustify(props: IconProps): React.ReactElement<IconProps> {
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
            name="IconTextAlignJustify"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.662 6a1 1 0 01-1 1h-16a1 1 0 010-2h16a1 1 0 011 1zM2.662 18a1 1 0 011-1h16a1 1 0 110 2h-16a1 1 0 01-1-1zM20.662 10a1 1 0 01-1 1h-16a1 1 0 110-2h16a1 1 0 011 1zM20.662 14a1 1 0 01-1 1h-16a1 1 0 110-2h16a1 1 0 011 1z"
            />
        </svg>
    );
}

const MemoIconTextAlignJustify = React.memo(IconTextAlignJustify);
export default MemoIconTextAlignJustify;
