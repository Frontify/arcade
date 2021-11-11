import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconRevisions(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
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
            name="IconRevisions"
            {...props}
        >
            <path d="M13.992 11.2a2.088 2.088 0 01.156.8c0 .586-.211 1.09-.634 1.514a2.066 2.066 0 01-1.514.634c-.586 0-1.09-.211-1.514-.634A2.066 2.066 0 019.9 11.58a2.86 2.86 0 01.127-.4L8.23 9.383a.694.694 0 01-.214-.508c0-.195.071-.365.214-.508a.73.73 0 01.508-.195c.196 0 .365.071.508.215l1.738 1.718c.144-.078.303-.14.479-.185.176-.046.355-.068.537-.068.195 0 .38.026.557.078.175.052.341.117.498.195l3.183-3.184a.694.694 0 01.508-.214c.195 0 .365.071.508.214a.73.73 0 01.195.508.73.73 0 01-.195.508l-3.262 3.242zM12 22c-1.38 0-2.679-.26-3.896-.781A10.035 10.035 0 014.92 19.08a10.035 10.035 0 01-2.139-3.184A9.801 9.801 0 012 12c0-1.38.26-2.679.781-3.896A10.035 10.035 0 014.92 4.92 10.035 10.035 0 018.104 2.78 9.801 9.801 0 0112 2c1.38 0 2.679.26 3.896.781A10.035 10.035 0 0119.08 4.92a10.035 10.035 0 012.139 3.184A9.801 9.801 0 0122 12c0 1.38-.26 2.679-.781 3.896a10.035 10.035 0 01-2.139 3.184 10.035 10.035 0 01-3.184 2.139A9.801 9.801 0 0112 22zm0-1.426a8.343 8.343 0 003.34-.674 8.663 8.663 0 002.724-1.836A8.663 8.663 0 0019.9 15.34a8.343 8.343 0 00.674-3.34 8.343 8.343 0 00-.674-3.34 8.663 8.663 0 00-1.836-2.724A8.663 8.663 0 0015.34 4.1 8.343 8.343 0 0012 3.426a8.343 8.343 0 00-3.34.674 8.663 8.663 0 00-2.724 1.836A8.663 8.663 0 004.1 8.66 8.343 8.343 0 003.426 12c0 1.185.224 2.298.674 3.34a8.663 8.663 0 001.836 2.724A8.663 8.663 0 008.66 19.9a8.343 8.343 0 003.34.674zm0-7.851a.694.694 0 00.508-.215.694.694 0 00.215-.508.694.694 0 00-.215-.508.694.694 0 00-.508-.215.694.694 0 00-.508.215.694.694 0 00-.215.508c0 .195.072.365.215.508a.694.694 0 00.508.215z" />
        </svg>
    );
}

const MemoIconRevisions = React.memo(IconRevisions);
export default MemoIconRevisions;
