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

function IconView(props: IconProps): React.ReactElement<IconProps> {
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
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.02018 12.8256C2.72374 12.3149 2.72374 11.6851 3.02018 11.1744C4.81689 8.0789 8.16706 6 12 6C15.8329 6 19.1831 8.0789 20.9798 11.1744C21.2762 11.6851 21.2762 12.3149 20.9798 12.8256C19.1831 15.9211 15.8329 18 12 18C8.16706 18 4.81689 15.9211 3.02018 12.8256ZM22.7262 11.2731C22.9453 11.7329 22.9453 12.2671 22.7262 12.7269C20.8177 16.7321 16.7321 19.5 12 19.5C7.26787 19.5 3.18224 16.7321 1.27378 12.7269C1.05466 12.2671 1.05466 11.7329 1.27378 11.2731C3.18224 7.26792 7.26787 4.5 12 4.5C16.7321 4.5 20.8177 7.26792 22.7262 11.2731ZM15.9999 12C15.9999 14.2091 14.209 16 11.9999 16C9.79074 16 7.99988 14.2091 7.99988 12C7.99988 11.608 8.05625 11.2293 8.16133 10.8713C8.28275 10.4577 8.76808 10.3199 9.14139 10.5354C9.48831 10.7357 9.60636 11.1718 9.53735 11.5664C9.51272 11.7072 9.49988 11.8521 9.49988 12C9.49988 13.3807 10.6192 14.5 11.9999 14.5C13.3806 14.5 14.4999 13.3807 14.4999 12C14.4999 10.6193 13.3806 9.5 11.9999 9.5C11.7457 9.5 11.5004 9.53793 11.2693 9.60844C10.9929 9.69275 10.6889 9.69687 10.4387 9.5524C9.93454 9.26131 9.87979 8.55761 10.4142 8.32662C10.9004 8.11646 11.4365 8 11.9999 8C14.209 8 15.9999 9.79086 15.9999 12Z"
            />
        </svg>
    );
}

const MemoIconView = React.memo(IconView);
export default MemoIconView;
