import * as React from "react";
import IconProps from "@elements/Icon/IconProps";
import IconSize from "@elements/Icon/IconSize";
const iconSizeMap = {
    [IconSize.Size8]: "h-2 w-2",
    [IconSize.Size12]: "h-3 w-3",
    [IconSize.Size16]: "h-4 w-4",
    [IconSize.Size20]: "h-5 w-5",
    [IconSize.Size24]: "h-6 w-6",
    [IconSize.Size32]: "h-8 w-8",
};

function IconInteractions(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            name="IconInteractions"
            {...props}
        >
            <path d="M13.774 17.801l-1.942 2.103c-.427.494-.945.624-1.552.39-.608-.233-.912-.677-.912-1.331v-4.226a6.206 6.206 0 01-2.483-.5 6.343 6.343 0 01-2.023-1.373 6.582 6.582 0 01-1.361-2.022A6.135 6.135 0 013 8.368c0-.88.167-1.708.5-2.483a6.427 6.427 0 011.362-2.023 6.427 6.427 0 012.023-1.361A6.206 6.206 0 019.368 2c.882 0 1.706.167 2.474.5a6.582 6.582 0 012.022 1.362 6.343 6.343 0 011.372 2.023c.334.775.501 1.602.501 2.483 0 .615-.083 1.205-.25 1.773a6.1 6.1 0 01-.711 1.572l3.925 2.944c.534.414.694.941.48 1.582-.213.64-.66.961-1.341.961h-2.784l2.163 3.745a.73.73 0 01.07.541.635.635 0 01-.33.42.73.73 0 01-.541.07.635.635 0 01-.42-.33l-2.224-3.845zm-.14-6.93a5.36 5.36 0 00.5-1.19c.121-.421.181-.859.181-1.313 0-.68-.13-1.321-.39-1.922a5.148 5.148 0 00-1.062-1.582 4.808 4.808 0 00-1.572-1.062 4.891 4.891 0 00-1.923-.38 4.922 4.922 0 00-4.947 4.947c0 .68.128 1.321.381 1.922.254.6.608 1.125 1.062 1.572.454.447.981.801 1.582 1.062.6.26 1.242.39 1.922.39v-2.824a2.046 2.046 0 01-1.502-.62 2.046 2.046 0 01-.62-1.503c0-.587.207-1.088.62-1.502.414-.413.915-.62 1.502-.62.588 0 1.089.207 1.502.62a2.046 2.046 0 01.571 1.923c-.033.134-.07.26-.11.38.04.027.087.054.14.08.054.027.107.06.16.1l2.003 1.523zm-2.864 8.092l2.844-3.165h4.226l-7.07-5.307v8.472z" />
        </svg>
    );
}

const MemoIconInteractions = React.memo(IconInteractions);
export default MemoIconInteractions;
