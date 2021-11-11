import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconColumnBreak(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
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
            name="IconColumnBreak"
            {...props}
        >
            <path d="M16 8.25a.75.75 0 110-1.5h5a.75.75 0 110 1.5h-5zm0 3a.75.75 0 110-1.5h4a.75.75 0 110 1.5h-4zm-13-3a.75.75 0 010-1.5h5a.75.75 0 010 1.5H3zm13 6a.75.75 0 110-1.5h5a.75.75 0 110 1.5h-5zm-13 0a.75.75 0 110-1.5h5a.75.75 0 110 1.5H3zm0-3a.75.75 0 110-1.5h4a.75.75 0 110 1.5H3zm0 6a.75.75 0 110-1.5h4a.75.75 0 110 1.5H3zm13 0a.75.75 0 110-1.5h4a.75.75 0 110 1.5h-4zm-3.75-10V17.5a.75.75 0 01-.75.75h-2a.75.75 0 110-1.5h1.25V6.5a.75.75 0 01.75-.75h2a.75.75 0 110 1.5h-1.25z" />
        </svg>
    );
}

const MemoIconColumnBreak = React.memo(IconColumnBreak);
export default MemoIconColumnBreak;
