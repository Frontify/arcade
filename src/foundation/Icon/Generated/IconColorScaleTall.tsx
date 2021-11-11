import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconColorScaleTall(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
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
            name="IconColorScaleTall"
            {...props}
        >
            <path d="M4.344 9.6a.803.803 0 00-.806.8v3.2c0 .442.361.8.806.8h15.312a.803.803 0 00.806-.8v-3.2c0-.442-.361-.8-.806-.8H4.344zM4.4 8h15.2a2.4 2.4 0 012.4 2.4v3.2a2.4 2.4 0 01-2.4 2.4H4.4A2.4 2.4 0 012 13.6v-3.2A2.4 2.4 0 014.4 8z" />
        </svg>
    );
}

const MemoIconColorScaleTall = React.memo(IconColorScaleTall);
export default MemoIconColorScaleTall;
