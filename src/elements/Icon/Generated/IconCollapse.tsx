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

function IconCollapse(props: IconProps): React.ReactElement<IconProps> {
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
            {...props}
        >
            <path d="M8.728 13.977H5.812a.76.76 0 01-.564-.24.816.816 0 01-.234-.593c0-.225.078-.417.234-.577a.76.76 0 01.564-.239h4.86c.104 0 .206.02.304.062a.987.987 0 01.269.169c.07.082.124.174.165.274.04.101.06.204.06.31v4.966a.794.794 0 01-.234.577.76.76 0 01-.564.24.781.781 0 01-.581-.24.794.794 0 01-.235-.577v-2.961L4.39 20.752a.785.785 0 01-.582.248.785.785 0 01-.581-.248.842.842 0 01-.226-.585.81.81 0 01.243-.586l5.485-5.604zm6.544-3.954h2.916c.22 0 .408.08.564.24.156.159.234.357.234.593a.794.794 0 01-.234.577.76.76 0 01-.564.239h-4.86a.776.776 0 01-.304-.062.76.76 0 01-.252-.169.84.84 0 01-.243-.585V5.891c0-.225.079-.417.235-.577a.76.76 0 01.564-.24c.231 0 .425.08.581.24.157.16.235.352.235.577v2.961l5.485-5.604A.73.73 0 0120.193 3c.226 0 .42.083.581.248.15.166.226.36.226.585a.81.81 0 01-.243.586l-5.485 5.604z" />
        </svg>
    );
}

const MemoIconCollapse = React.memo(IconCollapse);
export default MemoIconCollapse;
