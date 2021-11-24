import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconCopyToClipboard(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
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
            name="IconCopyToClipboard"
            {...props}
        >
            {"&gt;"}
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.339 2.733h-4.214a2.26 2.26 0 00-2.132 1.511H7a2.75 2.75 0 00-2.75 2.75v11.5A2.75 2.75 0 007 21.244h10.463a2.75 2.75 0 002.75-2.75v-11.5a2.75 2.75 0 00-2.75-2.75h-.992a2.26 2.26 0 00-2.132-1.51zM7.994 5.744a2.26 2.26 0 002.13 1.507h4.215a2.26 2.26 0 002.13-1.507h.994c.69 0 1.25.56 1.25 1.25v11.5c0 .69-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25v-11.5c0-.69.56-1.25 1.25-1.25h.994zm2.13-1.51a.759.759 0 000 1.517h4.215a.759.759 0 100-1.518h-4.214zm1.126 6.626v1.81H9.5a.75.75 0 000 1.5h1.75v1.809a.75.75 0 001.5 0v-1.81h1.75a.75.75 0 000-1.5h-1.75V10.86a.75.75 0 10-1.5 0z"
            />
        </svg>
    );
}

const MemoIconCopyToClipboard = React.memo(IconCopyToClipboard);
export default MemoIconCopyToClipboard;
