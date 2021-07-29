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

function IconUnknownSimple(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "flex items-center justify-center fill-current",
        iconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            width="100%"
            height="100%"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={customClassName}
            {...props}
        >
            <path d="M8.00008498,11.7385588 C8.52457007,11.7385588 8.94974924,12.163738 8.94974924,12.6882231 C8.94974924,13.2127081 8.52457007,13.6378873 8.00008498,13.6378873 C7.4755999,13.6378873 7.05042072,13.2127081 7.05042072,12.6882231 C7.05042072,12.163738 7.4755999,11.7385588 8.00008498,11.7385588 Z M8.04048338,2.36211268 C9.96516748,2.36211268 11.345,3.81492856 11.345,5.66336082 C11.345,6.57977639 10.9496899,7.25026691 10.2374936,7.87259497 L10.1282973,7.96560768 C10.1456963,7.95114902 9.45031628,8.4927595 9.3854088,8.56914785 L9.26230638,8.71490786 C8.87472114,9.18039668 8.75273157,9.47448071 8.75273157,10.1607279 C8.75273157,10.5540917 8.4338472,10.8729761 8.04048338,10.8729761 C7.64711957,10.8729761 7.32823519,10.5540917 7.32823519,10.1607279 C7.32823519,9.1705917 7.5538395,8.57460798 8.07754807,7.9141641 L8.26723767,7.68517917 L8.29987039,7.64676165 C8.40084656,7.52792476 8.51402651,7.42424533 8.67700839,7.29368759 L9.1151608,6.95341011 C9.15170144,6.92435627 9.18524588,6.89713078 9.21786582,6.87002357 C9.70496889,6.46524045 9.92050362,6.1234624 9.92050362,5.66336082 C9.92050362,4.58570445 9.16155143,3.78660907 8.04048338,3.78660907 C7.10565921,3.78660907 6.33772836,4.39662413 6.05791684,5.5027743 C5.96145015,5.88412619 5.57410165,6.11507127 5.19274975,6.01860458 C4.81139786,5.92213788 4.58045277,5.53478938 4.67691947,5.15343749 C5.11527973,3.42051282 6.44766998,2.36211268 8.04048338,2.36211268 Z" />
        </svg>
    );
}

const MemoIconUnknownSimple = React.memo(IconUnknownSimple);
export default MemoIconUnknownSimple;
