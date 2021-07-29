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

function IconAlignBottom(props: IconProps): React.ReactElement<IconProps> {
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
                d="M3.86498663,22.0391304 C3.3872677,22.0391304 3,21.6498128 3,21.1695652 C3,20.6893176 3.3872677,20.3 3.86498663,20.3 L20.1350134,20.3 C20.6127323,20.3 21,20.6893176 21,21.1695652 C21,21.6498128 20.6127323,22.0391304 20.1350134,22.0391304 L3.86498663,22.0391304 Z M11.1848796,16 L11.1848796,2.86956522 C11.1848796,2.34782609 11.5308743,2 12.0498663,2 C12.5688582,2 12.9148529,2.34782609 12.9148529,2.86956522 L12.9148529,16 L17.499282,11.3913043 C17.8452766,11.0434783 18.3642686,11.0434783 18.7102633,11.3913043 C19.0562579,11.7391304 19.0562579,12.2608696 18.7102633,12.6086957 L12.6553569,18.6956522 C12.3093622,19.0434783 11.7903703,19.0434783 11.4443756,18.6956522 L5.38946924,12.6086957 C5.04347459,12.2608696 5.04347459,11.7391304 5.38946924,11.3913043 C5.73546389,11.0434783 6.25445586,11.0434783 6.60045051,11.3913043 L11.1848796,16 Z"
                id="Icon_AlignBottom"
            />
        </svg>
    );
}

const MemoIconAlignBottom = React.memo(IconAlignBottom);
export default MemoIconAlignBottom;
