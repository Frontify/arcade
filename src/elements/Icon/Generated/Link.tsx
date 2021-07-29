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

function IconLink(props: IconProps): React.ReactElement<IconProps> {
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
            <g stroke="none" strokeWidth={1}>
                <path
                    d="M9.36842105,6.7 C9.59114575,6.7 9.8106392,6.71383458 10.026089,6.74069129 C9.24213144,7.27505396 8.58472034,7.98132538 8.10809808,8.80526316 L7.26315789,8.80526316 C5.51910079,8.80526316 4.10526316,10.2191008 4.10526316,11.9631579 C4.10526316,13.707215 5.51910079,15.1210526 7.26315789,15.1210526 L9.36842105,15.1210526 C11.1124782,15.1210526 12.5263158,13.707215 12.5263158,11.9631579 C12.5263158,11.3305817 12.3243312,10.8111444 12.1067613,10.5770762 C12.314407,10.0956455 12.9937692,9.85493016 14.144848,9.85493016 C14.525353,10.3951824 14.6315789,11.3550541 14.6315789,11.9631579 C14.6315789,14.8699197 12.2751829,17.2263158 9.36842105,17.2263158 L7.26315789,17.2263158 C4.35639605,17.2263158 2,14.8699197 2,11.9631579 C2,9.05639605 4.35639605,6.7 7.26315789,6.7 L9.36842105,6.7 Z M16.7368421,6.7 C19.6436039,6.7 22,9.05639605 22,11.9631579 C22,14.8699197 19.6436039,17.2263158 16.7368421,17.2263158 L14.6315789,17.2263158 C14.4088543,17.2263158 14.1893608,17.2124812 13.973911,17.1856245 C14.7578686,16.6512618 15.4152797,15.9449904 15.8919019,15.1210526 L16.7368421,15.1210526 C18.4808992,15.1210526 19.8947368,13.707215 19.8947368,11.9631579 C19.8947368,10.2191008 18.4808992,8.80526316 16.7368421,8.80526316 L14.6315789,8.80526316 C12.8875218,8.80526316 11.4736842,10.2191008 11.4736842,11.9631579 C11.4736842,12.5957341 11.6756688,13.1151714 11.8932387,13.3492396 C11.685593,13.8306703 11.0062308,14.0713856 9.85515198,14.0713856 C9.47464704,13.5311334 9.36842105,12.5712617 9.36842105,11.9631579 C9.36842105,9.05639605 11.7248171,6.7 14.6315789,6.7 L16.7368421,6.7 Z"
                    id="icon"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
}

const MemoIconLink = React.memo(IconLink);
export default MemoIconLink;
