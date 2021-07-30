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

function IconLogout(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="100%"
            height="100%"
            className={customClassName}
            {...props}
        >
            <path d="M16.287 11.28l-1.808-1.808a.711.711 0 01.002-1.009.716.716 0 011.008-.001l3.034 3.033c.139.14.208.32.207.506a.71.71 0 01-.207.502l-3.034 3.033a.711.711 0 01-1.008-.001.716.716 0 01-.002-1.01l1.818-1.817h-6.182a.711.711 0 01-.71-.714c0-.394.317-.714.71-.714h6.172zM14.62 3.668a.85.85 0 110 1.7h-5.5a2.15 2.15 0 00-2.15 2.15v9a2.15 2.15 0 002.15 2.15h5.5a.85.85 0 010 1.7h-5.5a3.85 3.85 0 01-3.85-3.85v-9a3.85 3.85 0 013.85-3.85h5.5z" />
        </svg>
    );
}

const MemoIconLogout = React.memo(IconLogout);
export default MemoIconLogout;
