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

function IconDosText(props: IconProps): React.ReactElement<IconProps> {
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
                d="M7.49789734,6.48774479 L8.20500412,5.78063801 C8.48395004,5.50169209 8.93621074,5.50169209 9.21515666,5.78063801 C9.49410259,6.05958394 9.49410259,6.51184464 9.21515666,6.79079056 L8.50804988,7.49789734 L9.21515666,8.20500412 C9.49410259,8.48395004 9.49410259,8.93621074 9.21515666,9.21515666 C8.93621074,9.49410259 8.48395004,9.49410259 8.20500412,9.21515666 L7.49789734,8.50804988 L6.79079056,9.21515666 C6.51184464,9.49410259 6.05958394,9.49410259 5.78063801,9.21515666 C5.50169209,8.93621074 5.50169209,8.48395004 5.78063801,8.20500412 L6.48774479,7.49789734 L5.78063801,6.79079056 C5.50169209,6.51184464 5.50169209,6.05958394 5.78063801,5.78063801 C6.05958394,5.50169209 6.51184464,5.50169209 6.79079056,5.78063801 L7.49789734,6.48774479 Z M7.35714286,12.7142857 C4.39847455,12.7142857 2,10.3158112 2,7.35714286 C2,4.39847455 4.39847455,2 7.35714286,2 C10.3158112,2 12.7142857,4.39847455 12.7142857,7.35714286 C12.7142857,10.3158112 10.3158112,12.7142857 7.35714286,12.7142857 Z M7.35714286,11.2857143 C9.52683295,11.2857143 11.2857143,9.52683295 11.2857143,7.35714286 C11.2857143,5.18745277 9.52683295,3.42857143 7.35714286,3.42857143 C5.18745277,3.42857143 3.42857143,5.18745277 3.42857143,7.35714286 C3.42857143,9.52683295 5.18745277,11.2857143 7.35714286,11.2857143 Z M16.6428571,22 C13.6841888,22 11.2857143,19.6015254 11.2857143,16.6428571 C11.2857143,13.6841888 13.6841888,11.2857143 16.6428571,11.2857143 C19.6015254,11.2857143 22,13.6841888 22,16.6428571 C22,19.6015254 19.6015254,22 16.6428571,22 Z M16.6428571,20.5714286 C18.8125472,20.5714286 20.5714286,18.8125472 20.5714286,16.6428571 C20.5714286,14.4731671 18.8125472,12.7142857 16.6428571,12.7142857 C14.4731671,12.7142857 12.7142857,14.4731671 12.7142857,16.6428571 C12.7142857,18.8125472 14.4731671,20.5714286 16.6428571,20.5714286 Z M18.0585235,15.074305 C18.3330773,14.791035 18.7852828,14.7839691 19.0685527,15.0585229 C19.3518227,15.3330767 19.3588885,15.7852822 19.0843347,16.0685522 L16.5489742,18.6844019 C16.2595026,18.9830633 15.7770805,18.9722125 15.50133,18.6608379 L14.465262,17.4909207 C14.2037222,17.1955927 14.2311129,16.7441622 14.5264409,16.4826225 C14.8217689,16.2210827 15.2731994,16.2484735 15.5347391,16.5438014 L16.0597012,17.1365831 L18.0585235,15.074305 Z"
                id="Icon_DoandDont"
            />
        </svg>
    );
}

const MemoIconDosText = React.memo(IconDosText);
export default MemoIconDosText;
