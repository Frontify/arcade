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

function IconFiletype(props: IconProps): React.ReactElement<IconProps> {
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
                d="M4.34328358,18.2084494 C3.2693936,17.8340526 2.5,16.8238353 2.5,15.6363636 C2.5,14.448892 3.2693936,13.4386747 4.34328358,13.0642779 L4.34328358,5.64505265 C4.34328358,3.63194565 5.99524452,2 8.03351391,2 L14.1519988,2 C14.6569155,2 15.3593953,2.27339864 15.7305251,2.6195066 L20.8357063,7.38049336 C21.2025856,7.72263745 21.5,8.40389445 21.5,8.907792 L21.5,18.3582116 C21.5,20.3695158 19.8549419,22 17.8194539,22 L8.02382966,22 C5.9911202,22 4.34328358,20.3633161 4.34328358,18.3549474 L4.34328358,18.2084494 Z M5.90298508,18.3636364 L5.90298508,18.6504728 C5.90298508,19.6453033 6.72460237,20.4615385 7.73811868,20.4615385 L18.1051649,20.4615385 C19.1146071,20.4615385 19.9402985,19.6476966 19.9402985,18.6437719 L19.9402985,10.4615385 L13.6979033,10.4615385 C13.2691859,10.4615385 12.9216418,10.120104 12.9216418,9.69230773 L12.9216418,8.92307691 L12.9216418,3.53846154 L7.75131392,3.53846154 C6.72589418,3.53846154 5.90298508,4.34930326 5.90298508,5.34952721 L5.90298508,12.9090909 L12.6380597,12.9090909 C14.1650858,12.9090909 15.4029851,14.1301325 15.4029851,15.6363636 C15.4029851,17.1425948 14.1650858,18.3636364 12.6380597,18.3636364 L5.90298508,18.3636364 Z M19.9402985,8.92307691 L19.9402985,8.74556209 L14.4813433,3.68310322 L14.4813433,8.92307691 L19.9402985,8.92307691 Z M5.26492538,14.7272727 C4.75591667,14.7272727 4.34328358,15.1342866 4.34328358,15.6363636 C4.34328358,16.1384407 4.75591667,16.5454545 5.26492538,16.5454545 L12.6380597,16.5454545 C13.1470684,16.5454545 13.5597015,16.1384407 13.5597015,15.6363636 C13.5597015,15.1342866 13.1470684,14.7272727 12.6380597,14.7272727 L5.26492538,14.7272727 Z"
                id="Icon_Filetype"
            />
        </svg>
    );
}

const MemoIconFiletype = React.memo(IconFiletype);
export default MemoIconFiletype;
