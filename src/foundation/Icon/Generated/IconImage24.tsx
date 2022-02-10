import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconImage24(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = ["tw-flex tw-items-center tw-justify-center tw-fill-current"];
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={customClassName}
            name="IconImage24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2.676 3.66C2.226 4.098 2 4.628 2 5.25v13.5c0 .621.225 1.151.676 1.59.451.44.995.66 1.632.66h15.384c.637 0 1.18-.22 1.632-.66.45-.439.676-.969.676-1.59V5.25a2.14 2.14 0 0 0-.676-1.59A2.252 2.252 0 0 0 19.692 3H4.308c-.637 0-1.18.22-1.632.66Zm17.791 9.5V5.988c0-.41-.15-.761-.45-1.054a1.498 1.498 0 0 0-1.083-.44H5.066c-.42 0-.782.147-1.082.44-.3.293-.451.644-.451 1.054v7.752l5.518-2.531 6.763 4.482 4.653-2.53Zm0 1.547-4.851 2.496-6.565-4.447-5.518 2.443v2.813c0 .41.15.761.45 1.054.301.293.662.44 1.083.44h13.868c.421 0 .782-.147 1.082-.44.3-.293.451-.644.451-1.054v-3.305ZM15.85 12c-.853 0-1.58-.293-2.182-.879a2.86 2.86 0 0 1-.901-2.127c0-.82.3-1.523.901-2.11.601-.585 1.329-.878 2.182-.878.854 0 1.581.293 2.182.879.602.586.902 1.289.902 2.11 0 .831-.3 1.54-.902 2.126-.6.586-1.328.879-2.182.879Zm1.082-1.934c-.3.293-.66.44-1.082.44-.42 0-.781-.147-1.082-.44a1.44 1.44 0 0 1-.45-1.072c0-.41.15-.762.45-1.055.3-.293.662-.439 1.082-.439.421 0 .782.146 1.082.44.3.292.451.644.451 1.054 0 .422-.15.78-.45 1.072Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconImage24);
export default Memo;
