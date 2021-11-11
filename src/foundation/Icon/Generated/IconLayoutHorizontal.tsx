import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconLayoutHorizontal(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
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
            name="IconLayoutHorizontal"
            {...props}
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.35 3.75c.635 0 1.15.515 1.15 1.15v15.2a1.15 1.15 0 01-1.15 1.15h-2.7A1.15 1.15 0 019.5 20.1V4.9c0-.635.515-1.15 1.15-1.15h2.7zM13 5.25h-2v14.5h2V5.25zM6.86 3.75c.635 0 1.15.515 1.15 1.15v15.2a1.15 1.15 0 01-1.15 1.15h-2.7a1.15 1.15 0 01-1.15-1.15V4.9c0-.635.515-1.15 1.15-1.15h2.7zm-.35 1.5h-2v14.5h2V5.25zM19.84 3.75c.635 0 1.15.515 1.15 1.15v15.2a1.15 1.15 0 01-1.15 1.15h-2.7a1.15 1.15 0 01-1.15-1.15V4.9c0-.635.515-1.15 1.15-1.15h2.7zm-.35 1.5h-2v14.5h2V5.25z"
            />
        </svg>
    );
}

const MemoIconLayoutHorizontal = React.memo(IconLayoutHorizontal);
export default MemoIconLayoutHorizontal;
