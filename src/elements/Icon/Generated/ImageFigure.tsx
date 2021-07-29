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

function IconImageFigure(props: IconProps): React.ReactElement<IconProps> {
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
                d="M5.1947586,5.6 C4.31255037,5.6 3.5973793,6.3163444 3.5973793,7.2 L3.5973793,16.8 C3.5973793,17.6836556 4.31255037,18.4 5.1947586,18.4 L11.5842758,18.4 C12.466484,18.4 13.1816551,17.6836556 13.1816551,16.8 L13.1816551,7.2 C13.1816551,6.3163444 12.466484,5.6 11.5842758,5.6 L5.1947586,5.6 Z M5.1947586,4 L11.5842758,4 C13.3486923,4 14.7790344,5.4326888 14.7790344,7.2 L14.7790344,16.8 C14.7790344,18.5673112 13.3486923,20 11.5842758,20 L5.1947586,20 C3.43034215,20 2,18.5673112 2,16.8 L2,7.2 C2,5.4326888 3.43034215,4 5.1947586,4 Z M16.7757585,8 C16.3346544,8 15.9770689,7.6418278 15.9770689,7.2 C15.9770689,6.7581722 16.3346544,6.4 16.7757585,6.4 L21.2013104,6.4 C21.6424145,6.4 22,6.7581722 22,7.2 C22,7.6418278 21.6424145,8 21.2013104,8 L16.7757585,8 Z M16.7757585,11.2 C16.3346544,11.2 15.9770689,10.8418278 15.9770689,10.4 C15.9770689,9.9581722 16.3346544,9.6 16.7757585,9.6 L19.6039311,9.6 C20.0450352,9.6 20.4026207,9.9581722 20.4026207,10.4 C20.4026207,10.8418278 20.0450352,11.2 19.6039311,11.2 L16.7757585,11.2 Z"
                id="Icon_ImageFigure"
            />
        </svg>
    );
}

const MemoIconImageFigure = React.memo(IconImageFigure);
export default MemoIconImageFigure;
