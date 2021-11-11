import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconImageGrid2(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const { size } = props;
    const style =
        typeof size === "string"
            ? {
                  width: size,
                  height: size,
              }
            : {
                  width: IconSizeMap[size || IconSize.Size16],
                  height: IconSizeMap[size || IconSize.Size16],
              };
    const customClassName = "tw-flex tw-items-center tw-justify-center tw-fill-current";
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            style={style}
            name="IconImageGrid2"
            {...props}
        >
            <path d="M4.5 8.667a.833.833 0 00-.833.833v5c0 .46.373.833.833.833h4.167c.46 0 .833-.373.833-.833v-5a.833.833 0 00-.833-.833H4.5zM4.5 7h4.167a2.5 2.5 0 012.5 2.5v5a2.5 2.5 0 01-2.5 2.5H4.5A2.5 2.5 0 012 14.5v-5A2.5 2.5 0 014.5 7zm10.833 1.667a.833.833 0 00-.833.833v5c0 .46.373.833.833.833H19.5c.46 0 .833-.373.833-.833v-5a.833.833 0 00-.833-.833h-4.167zm0-1.667H19.5A2.5 2.5 0 0122 9.5v5a2.5 2.5 0 01-2.5 2.5h-4.167a2.5 2.5 0 01-2.5-2.5v-5a2.5 2.5 0 012.5-2.5z" />
        </svg>
    );
}

const MemoIconImageGrid2 = React.memo(IconImageGrid2);
export default MemoIconImageGrid2;
