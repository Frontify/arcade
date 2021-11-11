import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconListNumbers(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
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
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            style={style}
            name="IconListNumbers"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21 6a1 1 0 01-1 1h-8a1 1 0 110-2h8a1 1 0 011 1zM11 18a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1zM19 10a1 1 0 01-1 1h-6a1 1 0 110-2h6a1 1 0 011 1zM21 14a1 1 0 01-1 1h-8a1 1 0 110-2h8a1 1 0 011 1zM5.35 14.983H4.04v-.087c0-.903.589-1.896 1.952-1.896 1.196 0 1.967.73 1.967 1.689 0 .795-.435 1.284-.831 1.731L7 16.564 6 17.72v.065h1.96V19H4.122v-.95l1.889-2.121c.276-.307.58-.648.58-1.085 0-.354-.265-.647-.627-.647-.386 0-.62.324-.62.686l.003.061.002.039z"
            />
            <path d="M5.435 11H6.8V5H5.435L4.2 5.985v1.367l1.17-.932h.065V11z" />
        </svg>
    );
}

const MemoIconListNumbers = React.memo(IconListNumbers);
export default MemoIconListNumbers;
