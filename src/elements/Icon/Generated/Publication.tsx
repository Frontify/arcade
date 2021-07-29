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

function IconPublication(props: IconProps): React.ReactElement<IconProps> {
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
                d="M15.4834294,5.95673793 L4.50797142,12.3689914 L8.08817421,14.2985673 L15.4834294,5.95673793 Z M18.370079,6.76443308 L14.2749592,17.5952174 L18.370079,19.788356 L18.370079,6.76443308 Z M12.6503565,17.2702589 L16.3663429,7.44220738 L9.08844116,15.6516624 L9.11152506,19.6323185 L12.6503565,17.2702589 Z M7.45960458,15.8436073 L2.43493151,13.1355238 C1.86612084,12.8289592 1.85234702,12.0011646 2.41062954,11.6749961 L18.7807058,2.11101441 C19.3240048,1.79359982 20,2.19468733 20,2.83445689 L20,21.1654217 C20,21.7917134 19.3495195,22.194123 18.8068921,21.9035193 L13.1939909,18.8975339 L8.75094492,21.8631285 C8.21070498,22.2237218 7.49431969,21.8299833 7.49049453,21.1703618 L7.45960458,15.8436073 Z"
                id="Icon_Publication"
            />
        </svg>
    );
}

const MemoIconPublication = React.memo(IconPublication);
export default MemoIconPublication;
