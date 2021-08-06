import * as React from "react";
import { IconProps } from "@elements/Icon/IconProps";
import { IconSize, IconSizeMap } from "@elements/Icon/IconSize";

function IconPause(props: IconProps): React.ReactElement<IconProps> {
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
            name="IconPause"
            {...props}
        >
            <g tw-transform="translate(5 4)">
                <rect width={6} height={16} rx={1} />
                <rect x={8} width={6} height={16} rx={1} />
            </g>
        </svg>
    );
}

const MemoIconPause = React.memo(IconPause);
export default MemoIconPause;
