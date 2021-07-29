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

function IconImageGrid3(props: IconProps): React.ReactElement<IconProps> {
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
                d="M4.14285714,10.4285714 C3.74836804,10.4285714 3.42857143,10.748368 3.42857143,11.1428571 L3.42857143,13.2857143 C3.42857143,13.6802034 3.74836804,14 4.14285714,14 L5.57142857,14 C5.96591768,14 6.28571429,13.6802034 6.28571429,13.2857143 L6.28571429,11.1428571 C6.28571429,10.748368 5.96591768,10.4285714 5.57142857,10.4285714 L4.14285714,10.4285714 Z M4.14285714,9 L5.57142857,9 C6.75489589,9 7.71428571,9.95938982 7.71428571,11.1428571 L7.71428571,13.2857143 C7.71428571,14.4691816 6.75489589,15.4285714 5.57142857,15.4285714 L4.14285714,15.4285714 C2.95938982,15.4285714 2,14.4691816 2,13.2857143 L2,11.1428571 C2,9.95938982 2.95938982,9 4.14285714,9 Z M11.2857143,10.4285714 C10.8912252,10.4285714 10.5714286,10.748368 10.5714286,11.1428571 L10.5714286,13.2857143 C10.5714286,13.6802034 10.8912252,14 11.2857143,14 L12.7142857,14 C13.1087748,14 13.4285714,13.6802034 13.4285714,13.2857143 L13.4285714,11.1428571 C13.4285714,10.748368 13.1087748,10.4285714 12.7142857,10.4285714 L11.2857143,10.4285714 Z M11.2857143,9 L12.7142857,9 C13.897753,9 14.8571429,9.95938982 14.8571429,11.1428571 L14.8571429,13.2857143 C14.8571429,14.4691816 13.897753,15.4285714 12.7142857,15.4285714 L11.2857143,15.4285714 C10.102247,15.4285714 9.14285714,14.4691816 9.14285714,13.2857143 L9.14285714,11.1428571 C9.14285714,9.95938982 10.102247,9 11.2857143,9 Z M18.4285714,10.4285714 C18.0340823,10.4285714 17.7142857,10.748368 17.7142857,11.1428571 L17.7142857,13.2857143 C17.7142857,13.6802034 18.0340823,14 18.4285714,14 L19.8571429,14 C20.251632,14 20.5714286,13.6802034 20.5714286,13.2857143 L20.5714286,11.1428571 C20.5714286,10.748368 20.251632,10.4285714 19.8571429,10.4285714 L18.4285714,10.4285714 Z M18.4285714,9 L19.8571429,9 C21.0406102,9 22,9.95938982 22,11.1428571 L22,13.2857143 C22,14.4691816 21.0406102,15.4285714 19.8571429,15.4285714 L18.4285714,15.4285714 C17.2451041,15.4285714 16.2857143,14.4691816 16.2857143,13.2857143 L16.2857143,11.1428571 C16.2857143,9.95938982 17.2451041,9 18.4285714,9 Z"
                id="Icon_ImageGrid3"
            />
        </svg>
    );
}

const MemoIconImageGrid3 = React.memo(IconImageGrid3);
export default MemoIconImageGrid3;
