import * as React from "react";
import { IconProps } from "@elements/Icon/IconProps";
import { IconSize, IconSizeMap } from "@elements/Icon/IconSize";

function IconCaretRight(props: IconProps): React.ReactElement<IconProps> {
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
            name="IconCaretRight"
            {...props}
        >
            <path d="M8.48 5.138a.83.83 0 01-.23-.576.83.83 0 01.23-.576.751.751 0 011.093 0l7.677 8.034-7.677 8.035a.75.75 0 01-1.053-.043.84.84 0 01-.04-1.101l6.575-6.89L8.48 5.137z" />
        </svg>
    );
}

const MemoIconCaretRight = React.memo(IconCaretRight);
export default MemoIconCaretRight;
