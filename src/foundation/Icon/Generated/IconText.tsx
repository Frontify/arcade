import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconText(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
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
            name="IconText"
            {...props}
        >
            <path d="M3 7a1 1 0 110-2h14a1 1 0 010 2H3zm-.09 4c-.503 0-.91-.448-.91-1s.407-1 .91-1h18.18c.503 0 .91.448.91 1s-.407 1-.91 1H2.91zM3 15a1 1 0 010-2h14a1 1 0 010 2H3zm-.09 4c-.503 0-.91-.448-.91-1s.407-1 .91-1h18.18c.503 0 .91.448.91 1s-.407 1-.91 1H2.91z" />
        </svg>
    );
}

const MemoIconText = React.memo(IconText);
export default MemoIconText;
