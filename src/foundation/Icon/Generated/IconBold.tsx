import React from "react";
import { IconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconBold(props: IconProps): React.ReactElement<IconProps> {
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
            name="IconBold"
            {...props}
        >
            <path d="M17.488 8.343c0-2.697-2-4.343-5.674-4.343H6v16h5.907C15.977 20 18 18.377 18 15.314c0-1.737-1.07-3.291-3.395-3.52 1.883-.274 2.883-1.783 2.883-3.451zM9.674 7.269h1.791c1.651 0 2.233.708 2.233 1.554 0 .937-.582 1.554-1.838 1.554H9.675V7.27zm4.559 7.794c0 1.097-.838 1.691-2.373 1.691H9.675v-3.36h2.163c1.651 0 2.396.526 2.396 1.669z" />
        </svg>
    );
}

const MemoIconBold = React.memo(IconBold);
export default MemoIconBold;
