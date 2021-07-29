import * as React from "react";
import { IconProps, IconSize } from "@elements/Icon/Icon";
const iconSizeMap = {
    [IconSize.Size8]: "h-2 w-2",
    [IconSize.Size12]: "h-3 w-3",
    [IconSize.Size16]: "h-4 w-4",
    [IconSize.Size20]: "h-5 w-5",
    [IconSize.Size24]: "h-6 w-6",
    [IconSize.Size32]: "h-8 w-8",
};

function IconOrientation(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="100%"
            height="100%"
            className={customClassName}
            {...props}
        >
            <path
                d="M5.33333333,18.6666667 C3.49238417,18.6666667 2,17.1742825 2,15.3333333 L2,5.33333333 C2,3.49238417 3.49238417,2 5.33333333,2 L11.1666667,2 C13.0076158,2 14.5,3.49238417 14.5,5.33333333 L14.5,9.5 L18.6666667,9.5 C20.5076158,9.5 22,10.9923842 22,12.8333333 L22,18.6666667 C22,20.5076158 20.5076158,22 18.6666667,22 L8.66666667,22 C6.8257175,22 5.33333333,20.5076158 5.33333333,18.6666667 Z M7,18.6666667 C7,19.5871412 7.74619208,20.3333333 8.66666667,20.3333333 L18.6666667,20.3333333 C19.5871412,20.3333333 20.3333333,19.5871412 20.3333333,18.6666667 L20.3333333,12.8333333 C20.3333333,11.9128588 19.5871412,11.1666667 18.6666667,11.1666667 L14.5,11.1666667 L14.5,15.3333333 C14.5,17.1742825 13.0076158,18.6666667 11.1666667,18.6666667 L7,18.6666667 Z M5.33333333,3.66666667 C4.41285875,3.66666667 3.66666667,4.41285875 3.66666667,5.33333333 L3.66666667,15.3333333 C3.66666667,16.2538079 4.41285875,17 5.33333333,17 L11.1666667,17 C12.0871412,17 12.8333333,16.2538079 12.8333333,15.3333333 L12.8333333,5.33333333 C12.8333333,4.41285875 12.0871412,3.66666667 11.1666667,3.66666667 L5.33333333,3.66666667 Z"
                id="Icon_Orientation"
            />
        </svg>
    );
}

const MemoIconOrientation = React.memo(IconOrientation);
export default MemoIconOrientation;
