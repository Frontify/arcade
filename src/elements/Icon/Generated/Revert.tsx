import * as React from "react";
import { IconProps, IconSize } from "@elements/Icon/Icon";
const iconSizeMap = {
    [IconSize.Size8]: "h-2 w-2",
    [IconSize.Size12]: "h-3 w-3",
    [IconSize.Size16]: "h-4 w-4",
    [IconSize.Size20]: "h-5 w-5",
    [IconSize.Size24]: "h-6 w-6",
    [IconSize.Size32]: "h-8 w-8",
};

function IconRevert(props: IconProps): React.ReactElement<IconProps> {
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
            <g id="Revert">
                <path
                    id="icon"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.36011 10.6512C2.88986 10.6399 2.51451 10.2618 2.49903 9.79056L2.49921 9.77674L2.49919 9.76376L2.52416 3.39436C2.52691 2.91365 2.91222 2.52122 3.39185 2.50002C3.39185 2.50002 3.42039 2.49986 3.42614 2.50047C3.9042 2.51578 4.28981 2.90726 4.28706 3.38771L4.27217 7.48278C5.93394 4.4597 8.84163 2.79982 12.1509 2.79982C17.3147 2.79982 21.5009 6.98596 21.5009 12.1498C21.5009 17.3137 17.3147 21.4998 12.1509 21.4998C7.18842 21.4998 3.12893 17.6339 2.81977 13.7495C2.81596 13.7168 2.814 13.6835 2.814 13.6498C2.814 13.1804 3.19455 12.6498 3.664 12.6498C4.13344 12.6498 4.52085 13.1804 4.51693 13.6498C4.77448 16.6417 8.09386 19.7998 12.1509 19.7998C16.3758 19.7998 19.8009 16.3748 19.8009 12.1498C19.8009 7.92484 16.3758 4.49982 12.1509 4.49982C9.30493 4.49982 6.82198 5.98166 5.50428 8.8791L9.76297 8.86361C10.245 8.86086 10.6351 9.24375 10.6509 9.72454C10.6508 9.73025 10.6507 9.75308 10.65 9.75882C10.6293 10.2357 10.2354 10.6238 9.75632 10.6265L3.36011 10.6512Z"
                />
            </g>
        </svg>
    );
}

const MemoIconRevert = React.memo(IconRevert);
export default MemoIconRevert;
