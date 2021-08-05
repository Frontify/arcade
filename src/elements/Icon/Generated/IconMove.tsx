import * as React from "react";
import { IconProps } from "@elements/Icon/IconProps";
import { IconSize, IconSizeMap } from "@elements/Icon/IconSize";

function IconMove(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
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
            name="IconMove"
            {...props}
        >
            <path d="M3 8a1 1 0 110-2h18a1 1 0 010 2H3zm0 5a1 1 0 010-2h18a1 1 0 010 2H3zm0 5a1 1 0 010-2h18a1 1 0 010 2H3z" />
        </svg>
    );
}

const MemoIconMove = React.memo(IconMove);
export default MemoIconMove;
