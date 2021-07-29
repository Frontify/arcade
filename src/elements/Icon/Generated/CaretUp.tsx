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

function IconCaretUp(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={customClassName}
            {...props}
        >
            <path
                d="M18.8615917,15.520616 L11.9795761,8.94459268 L5.08944493,15.520616 C4.76745078,15.7841042 4.28746761,15.7663888 3.98770304,15.4799526 C3.68793846,15.1935163 3.6693988,14.7348744 3.94514752,14.427197 L11.9795761,6.75 L20.0140047,14.427197 C20.3286651,14.7296611 20.3286651,15.2181519 20.0140047,15.520616 C19.8616212,15.6674231 19.6541902,15.75 19.4377982,15.75 C19.2214063,15.75 19.0139753,15.6674231 18.8615917,15.520616 Z"
                id="Icon_CaretUp"
            />
        </svg>
    );
}

const MemoIconCaretUp = React.memo(IconCaretUp);
export default MemoIconCaretUp;
