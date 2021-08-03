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

function IconGenericPost(props: IconProps): React.ReactElement<IconProps> {
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
            <path d="M11.09 14.618H9.274a.91.91 0 110-1.818h1.818v-1.818a.91.91 0 111.818 0V12.8h1.818a.91.91 0 110 1.818H12.91v1.818a.91.91 0 11-1.818 0v-1.818zm9.372-7.972V5.108a.77.77 0 00-.77-.77H4.308a.77.77 0 00-.77.77v1.538h16.924zm0 1.539H3.538v10.769c0 .425.345.77.77.77h15.384a.77.77 0 00.77-.77V8.184zM4.308 2.8h15.384A2.308 2.308 0 0122 5.108v13.846a2.308 2.308 0 01-2.308 2.308H4.308A2.308 2.308 0 012 18.954V5.108A2.308 2.308 0 014.308 2.8z" />
        </svg>
    );
}

const MemoIconGenericPost = React.memo(IconGenericPost);
export default MemoIconGenericPost;
