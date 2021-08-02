import * as React from "react";
import IconProps from "@elements/Icon/IconProps";
import IconSize from "@elements/Icon/IconSize";
const iconSizeMap = {
    [IconSize.Size8]: "h-2 w-2",
    [IconSize.Size12]: "h-3 w-3",
    [IconSize.Size16]: "h-4 w-4",
    [IconSize.Size20]: "h-5 w-5",
    [IconSize.Size24]: "h-6 w-6",
    [IconSize.Size32]: "h-8 w-8",
};

function IconAngleDown(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            className={customClassName}
            {...props}
        >
            <path d="M18.862 8.48a.83.83 0 01.576-.23.83.83 0 01.576.23.751.751 0 010 1.093L11.98 17.25 3.945 9.573a.75.75 0 01.043-1.053.84.84 0 011.101-.04l6.89 6.575 6.883-6.576z" />
        </svg>
    );
}

const MemoIconAngleDown = React.memo(IconAngleDown);
export default MemoIconAngleDown;
