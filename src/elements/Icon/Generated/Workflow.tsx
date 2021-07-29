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

function IconWorkflow(props: IconProps): React.ReactElement<IconProps> {
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
                d="M2,3.91768408 C2,2.8585764 2.85790268,2 3.92005405,2 L8.54148442,2 C9.60190096,2 10.4615385,2.859375 10.4615385,3.91768408 L10.4615385,20.082316 C10.4615385,21.1414236 9.60363577,22 8.54148442,22 L3.92005405,22 C2.85963748,22 2,21.140625 2,20.082316 L2,3.91768408 Z M3.53846154,4.49515277 L3.53846154,5.65869338 C3.53846154,6.18755163 3.96945969,6.61538462 4.50112286,6.61538462 L7.96041558,6.61538462 C8.50055519,6.61538462 8.92307692,6.18705933 8.92307692,5.65869338 L8.92307692,4.49515277 C8.92307692,3.96629451 8.49207875,3.53846154 7.96041558,3.53846154 L4.50112286,3.53846154 C3.96098328,3.53846154 3.53846154,3.96678679 3.53846154,4.49515277 Z M3.53846154,9.1105374 L3.53846154,10.274078 C3.53846154,10.8029363 3.96945969,11.2307692 4.50112286,11.2307692 L7.96041558,11.2307692 C8.50055519,11.2307692 8.92307692,10.8024439 8.92307692,10.274078 L8.92307692,9.1105374 C8.92307692,8.58167913 8.49207875,8.15384615 7.96041558,8.15384615 L4.50112286,8.15384615 C3.96098328,8.15384615 3.53846154,8.58217144 3.53846154,9.1105374 Z M3.53846154,13.725922 L3.53846154,14.8894626 C3.53846154,15.4183209 3.96945969,15.8461538 4.50112286,15.8461538 L7.96041558,15.8461538 C8.50055519,15.8461538 8.92307692,15.4178286 8.92307692,14.8894626 L8.92307692,13.725922 C8.92307692,13.1970638 8.49207875,12.7692308 7.96041558,12.7692308 L4.50112286,12.7692308 C3.96098328,12.7692308 3.53846154,13.1975561 3.53846154,13.725922 Z M3.53846154,18.3413066 L3.53846154,19.5048472 C3.53846154,20.0337055 3.96945969,20.4615385 4.50112286,20.4615385 L7.96041558,20.4615385 C8.50055519,20.4615385 8.92307692,20.0332132 8.92307692,19.5048472 L8.92307692,18.3413066 C8.92307692,17.8124484 8.49207875,17.3846154 7.96041558,17.3846154 L4.50112286,17.3846154 C3.96098328,17.3846154 3.53846154,17.8129407 3.53846154,18.3413066 Z M13.5384615,3.91736565 C13.5384615,2.85843385 14.3963642,2 15.4585156,2 L20.079946,2 C21.1403625,2 22,2.86010938 22,3.91736565 L22,15.4672497 C22,16.5261815 21.1420973,17.3846154 20.079946,17.3846154 L15.4585156,17.3846154 C14.398099,17.3846154 13.5384615,16.524506 13.5384615,15.4672497 L13.5384615,3.91736565 Z M15.0769231,4.49515277 L15.0769231,5.65869338 C15.0769231,6.18755163 15.5079213,6.61538462 16.0395844,6.61538462 L19.4988771,6.61538462 C20.0390167,6.61538462 20.4615385,6.18705933 20.4615385,5.65869338 L20.4615385,4.49515277 C20.4615385,3.96629451 20.0305403,3.53846154 19.4988771,3.53846154 L16.0395844,3.53846154 C15.4994448,3.53846154 15.0769231,3.96678679 15.0769231,4.49515277 Z M15.0769231,9.1105374 L15.0769231,10.274078 C15.0769231,10.8029363 15.5079213,11.2307692 16.0395844,11.2307692 L19.4988771,11.2307692 C20.0390167,11.2307692 20.4615385,10.8024439 20.4615385,10.274078 L20.4615385,9.1105374 C20.4615385,8.58167913 20.0305403,8.15384615 19.4988771,8.15384615 L16.0395844,8.15384615 C15.4994448,8.15384615 15.0769231,8.58217144 15.0769231,9.1105374 Z M15.0769231,13.725922 L15.0769231,14.8894626 C15.0769231,15.4183209 15.5079213,15.8461538 16.0395844,15.8461538 L19.4988771,15.8461538 C20.0390167,15.8461538 20.4615385,15.4178286 20.4615385,14.8894626 L20.4615385,13.725922 C20.4615385,13.1970638 20.0305403,12.7692308 19.4988771,12.7692308 L16.0395844,12.7692308 C15.4994448,12.7692308 15.0769231,13.1975561 15.0769231,13.725922 Z"
                id="Icon_Workflow"
            />
        </svg>
    );
}

const MemoIconWorkflow = React.memo(IconWorkflow);
export default MemoIconWorkflow;
