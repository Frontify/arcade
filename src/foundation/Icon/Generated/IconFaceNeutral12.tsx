import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconFaceNeutral12(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = ["tw-flex tw-items-center tw-justify-center tw-fill-current"];
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            className={customClassName}
            name="IconFaceNeutral12"
            {...props}
        >
            <g fill="currentColor">
                <path d="M5.09 4.864a.682.682 0 1 1-1.363 0 .682.682 0 0 1 1.364 0Zm2.5.681a.682.682 0 1 0 0-1.363.682.682 0 0 0 0 1.363ZM3.273 7.59c0 .252.203.455.454.455h4.546a.455.455 0 0 0 0-.909H3.727a.455.455 0 0 0-.454.455Z" />
                <path
                    fillRule="evenodd"
                    d="M4.052 10.61C4.66 10.87 5.31 11 6 11s1.34-.13 1.948-.39A5.017 5.017 0 0 0 9.54 9.54a5.017 5.017 0 0 0 1.07-1.592C10.87 7.34 11 6.69 11 6s-.13-1.34-.39-1.948A5.017 5.017 0 0 0 9.54 2.46a5.017 5.017 0 0 0-1.592-1.07A4.9 4.9 0 0 0 6 1a4.9 4.9 0 0 0-1.948.39A5.013 5.013 0 0 0 2.46 2.46a5.017 5.017 0 0 0-1.07 1.592A4.9 4.9 0 0 0 1 6c0 .69.13 1.34.39 1.948.261.609.617 1.14 1.07 1.592.452.453.983.809 1.592 1.07Zm3.618-.66a4.172 4.172 0 0 1-1.67.337c-.592 0-1.15-.112-1.67-.337a4.332 4.332 0 0 1-1.362-.918A4.332 4.332 0 0 1 2.05 7.67 4.172 4.172 0 0 1 1.713 6c0-.592.112-1.15.337-1.67.224-.52.53-.975.918-1.362A4.332 4.332 0 0 1 4.33 2.05 4.172 4.172 0 0 1 6 1.713c.592 0 1.15.112 1.67.337a4.303 4.303 0 0 1 2.28 2.28c.225.52.337 1.078.337 1.67 0 .592-.112 1.15-.337 1.67-.224.52-.53.975-.918 1.362a4.332 4.332 0 0 1-1.362.918Z"
                    clipRule="evenodd"
                />
            </g>
        </svg>
    );
}

const Memo = memo(IconFaceNeutral12);
export default Memo;
