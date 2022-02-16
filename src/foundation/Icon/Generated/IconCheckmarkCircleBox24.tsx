import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";

function IconCheckmarkCircleBox24(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = "tw-flex tw-items-center tw-justify-center tw-fill-current";
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={customClassName}
            name="IconCheckmarkCircleBox24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M19 4.5H5A1.5 1.5 0 0 0 3.5 6v12A1.5 1.5 0 0 0 5 19.5h14a1.5 1.5 0 0 0 1.5-1.5V6A1.5 1.5 0 0 0 19 4.5ZM5 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H5Zm7 13.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 1.5a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm2.768-6.629a.75.75 0 1 0-1.06-1.06l-2.37 2.368-.95-.95a.75.75 0 1 0-1.061 1.06l1.481 1.481.53.53.53-.53 2.9-2.899Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconCheckmarkCircleBox24);
export default Memo;
