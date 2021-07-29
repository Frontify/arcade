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

function IconSearch(props: IconProps): React.ReactElement<IconProps> {
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
                d="M18.2458853,17.0167402 C18.3064693,17.0534071 18.3641664,17.0970643 18.4178674,17.1477503 L21.6778174,20.2246728 C22.0873777,20.6112387 22.1094076,21.2602565 21.7270226,21.6742948 C21.3446375,22.088333 20.7026389,22.1106038 20.2930786,21.724038 L17.0331287,18.6471155 C16.9616977,18.579695 16.9020549,18.5042911 16.8542897,18.4235429 C15.2885468,19.6984297 13.2978932,20.461535 11.1309343,20.461535 C6.08805856,20.461535 2,16.3287796 2,11.2307675 C2,6.13275538 6.08805856,2 11.1309343,2 C16.1738101,2 20.2618687,6.13275538 20.2618687,11.2307675 C20.2618687,13.4214377 19.5070035,15.433872 18.2458853,17.0167402 Z M11.1309343,18.4102533 C15.0531711,18.4102533 18.2327722,15.195888 18.2327722,11.2307675 C18.2327722,7.26564696 15.0531711,4.05128166 11.1309343,4.05128166 C7.20869762,4.05128166 4.02909652,7.26564696 4.02909652,11.2307675 C4.02909652,15.195888 7.20869762,18.4102533 11.1309343,18.4102533 Z"
                id="Icon_Search"
            />
        </svg>
    );
}

const MemoIconSearch = React.memo(IconSearch);
export default MemoIconSearch;
