import * as React from "react";
import { IconProps } from "@elements/Icon/IconProps";
import { IconSize } from "@elements/Icon/IconSize";
const iconSizeMap = {
    [IconSize.Size8]: "h-2 w-2",
    [IconSize.Size12]: "h-3 w-3",
    [IconSize.Size16]: "h-4 w-4",
    [IconSize.Size20]: "h-5 w-5",
    [IconSize.Size24]: "h-6 w-6",
    [IconSize.Size32]: "h-8 w-8",
};

function IconColumnBreak(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            {...props}
        >
            <path d="M16 8.25a.75.75 0 110-1.5h5a.75.75 0 110 1.5h-5zm0 3a.75.75 0 110-1.5h4a.75.75 0 110 1.5h-4zm-13-3a.75.75 0 010-1.5h5a.75.75 0 010 1.5H3zm13 6a.75.75 0 110-1.5h5a.75.75 0 110 1.5h-5zm-13 0a.75.75 0 110-1.5h5a.75.75 0 110 1.5H3zm0-3a.75.75 0 110-1.5h4a.75.75 0 110 1.5H3zm0 6a.75.75 0 110-1.5h4a.75.75 0 110 1.5H3zm13 0a.75.75 0 110-1.5h4a.75.75 0 110 1.5h-4zm-3.75-10V17.5a.75.75 0 01-.75.75h-2a.75.75 0 110-1.5h1.25V6.5a.75.75 0 01.75-.75h2a.75.75 0 110 1.5h-1.25z" />
        </svg>
    );
}

const MemoIconColumnBreak = React.memo(IconColumnBreak);
export default MemoIconColumnBreak;
