import React from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconCaretLeft(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
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
            name="IconCaretLeft"
            {...props}
        >
            <path d="M15.52 5.138L8.946 12.02l6.576 6.89a.84.84 0 01-.041 1.102.75.75 0 01-1.053.043L6.75 12.02l7.677-8.034a.751.751 0 011.094 0 .83.83 0 01.229.576.83.83 0 01-.23.576z" />
        </svg>
    );
}

const MemoIconCaretLeft = React.memo(IconCaretLeft);
export default MemoIconCaretLeft;
