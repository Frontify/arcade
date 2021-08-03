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

function IconFullwidth(props: IconProps): React.ReactElement<IconProps> {
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
            name="IconFullwidth"
            {...props}
        >
            <path d="M11.231 11.132h4.12l-1.094-1.095a.85.85 0 011.202-1.203l2.475 2.475a.848.848 0 01.246.672.848.848 0 01-.246.672l-2.475 2.475a.85.85 0 11-1.202-1.202l1.094-1.095H8.694l1.095 1.095a.85.85 0 11-1.202 1.202l-2.475-2.475a.848.848 0 01-.246-.671.848.848 0 01.246-.672l2.475-2.475a.85.85 0 111.202 1.202l-1.095 1.095h2.537zM6 3.15h12A2.85 2.85 0 0120.85 6v12A2.85 2.85 0 0118 20.85H6A2.85 2.85 0 013.15 18V6A2.85 2.85 0 016 3.15zm0 1.7A1.15 1.15 0 004.85 6v12c0 .635.515 1.15 1.15 1.15h12A1.15 1.15 0 0019.15 18V6A1.15 1.15 0 0018 4.85H6z" />
        </svg>
    );
}

const MemoIconFullwidth = React.memo(IconFullwidth);
export default MemoIconFullwidth;
