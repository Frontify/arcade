import * as React from "react";
import { IconProps } from "@elements/Icon/IconProps";
import { IconSize, IconSizeMap } from "@elements/Icon/IconSize";

function IconFigureTextTop(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "tw-flex tw-items-center tw-justify-center tw-fill-current",
        IconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            name="IconFigureTextTop"
            {...props}
        >
            <path d="M6.796 10.503c-.69 0-1.25.56-1.25 1.25v6.494c0 .69.56 1.25 1.25 1.25h10.463c.69 0 1.25-.56 1.25-1.25v-6.494c0-.69-.56-1.25-1.25-1.25H6.796zm0-1.5h10.463a2.75 2.75 0 012.75 2.75v6.494a2.75 2.75 0 01-2.75 2.75H6.796a2.75 2.75 0 01-2.75-2.75v-6.494a2.75 2.75 0 012.75-2.75zm1.954-4.5a.75.75 0 110-1.5h6.5a.75.75 0 110 1.5h-6.5zm.946 2.757a.75.75 0 010-1.5h4.5a.75.75 0 110 1.5h-4.5z" />
        </svg>
    );
}

const MemoIconFigureTextTop = React.memo(IconFigureTextTop);
export default MemoIconFigureTextTop;
