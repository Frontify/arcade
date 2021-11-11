import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconMegamenu(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
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
            name="IconMegamenu"
            {...props}
        >
            <path d="M5.25 6.75a.75.75 0 00-.75.75v9.75c0 .414.336.75.75.75h13.5a.75.75 0 00.75-.75V7.5a.75.75 0 00-.75-.75H5.25zm0-1.5h13.5A2.25 2.25 0 0121 7.5v9.75a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17.25V7.5a2.25 2.25 0 012.25-2.25zm1.5 4.875a.75.75 0 010-1.5h3.75a.75.75 0 110 1.5H6.75zm6.75 0a.75.75 0 110-1.5h3.493a.75.75 0 110 1.5H13.5zm-6.75 3a.75.75 0 110-1.5h1.5a.75.75 0 110 1.5h-1.5zm6.75 0a.75.75 0 110-1.5H15a.75.75 0 110 1.5h-1.5zm-6.75 3a.75.75 0 110-1.5h1.5a.75.75 0 110 1.5h-1.5zm6.75 0a.75.75 0 110-1.5H15a.75.75 0 110 1.5h-1.5z" />
        </svg>
    );
}

const MemoIconMegamenu = React.memo(IconMegamenu);
export default MemoIconMegamenu;
