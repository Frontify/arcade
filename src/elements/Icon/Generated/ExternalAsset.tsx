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

function IconExternalAsset(props: IconProps): React.ReactElement<IconProps> {
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
                d="M5.07692308,4.5 C4.22725423,4.5 3.53846154,5.17157288 3.53846154,6 L3.53846154,18 C3.53846154,18.8284271 4.22725423,19.5 5.07692308,19.5 L18.9230769,19.5 C19.7727458,19.5 20.4615385,18.8284271 20.4615385,18 L20.4615385,6 C20.4615385,5.17157288 19.7727458,4.5 18.9230769,4.5 L5.07692308,4.5 Z M4.30287112,3 L19.6965131,3 C20.9651169,3 22,4.03556285 22,5.2751835 L22,18.7401359 C22,19.9842814 20.9659049,21 19.6965131,21 L4.30287112,21 C3.0047588,21 2,19.9755306 2,18.7401359 L2,5.2751835 C2,4.27563263 2.71807956,3 4.30287112,3 Z M13.9520043,10.4978877 C14.2300656,10.8828174 14.3076923,11.566726 14.3076923,12 C14.3076923,14.0710678 12.5857106,15.75 10.4615385,15.75 L8.92307692,15.75 C6.79890481,15.75 5.07692308,14.0710678 5.07692308,12 C5.07692308,9.92893219 6.79890481,8.25 8.92307692,8.25 L10.4615385,8.25 C10.6242988,8.25 10.7846979,8.25985714 10.9421419,8.27899255 C10.3692499,8.65972595 9.8888341,9.16294433 9.54053321,9.75 L8.92307692,9.75 C7.64857365,9.75 6.61538462,10.7573593 6.61538462,12 C6.61538462,13.2426407 7.64857365,14.25 8.92307692,14.25 L10.4615385,14.25 C11.7360417,14.25 12.7692308,13.2426407 12.7692308,12 C12.7692308,11.5492895 12.6216266,11.1791904 12.4626333,11.0124168 C12.6143744,10.6693974 13.1108314,10.4978877 13.9520043,10.4978877 Z M10.0479957,13.5021123 C9.76993437,13.1171826 9.69230769,12.433274 9.69230769,12 C9.69230769,9.92893219 11.4142894,8.25 13.5384615,8.25 L15.0769231,8.25 C17.2010952,8.25 18.9230769,9.92893219 18.9230769,12 C18.9230769,14.0710678 17.2010952,15.75 15.0769231,15.75 L13.5384615,15.75 C13.3757012,15.75 13.2153021,15.7401429 13.0578581,15.7210075 C13.6307501,15.3402741 14.1111659,14.8370557 14.4594668,14.25 L15.0769231,14.25 C16.3514263,14.25 17.3846154,13.2426407 17.3846154,12 C17.3846154,10.7573593 16.3514263,9.75 15.0769231,9.75 L13.5384615,9.75 C12.2639583,9.75 11.2307692,10.7573593 11.2307692,12 C11.2307692,12.4507105 11.3783734,12.8208096 11.5373667,12.9875832 C11.3856256,13.3306026 10.8891686,13.5021123 10.0479957,13.5021123 Z"
                id="Icon_ExternalAsset"
            />
        </svg>
    );
}

const MemoIconExternalAsset = React.memo(IconExternalAsset);
export default MemoIconExternalAsset;
