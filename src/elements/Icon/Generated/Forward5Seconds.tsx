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

function IconForward5Seconds(props: IconProps): React.ReactElement<IconProps> {
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
                d="M11.35,5 C11.819442,5 12.2,5.38055796 12.2,5.85 C12.2,6.31944204 11.819442,6.7 11.35,6.7 L11.35,6.7 L6.85,6.7 C5.66258779,6.7 4.7,7.66258779 4.7,8.85 L4.7,8.85 L4.7,12.85 C4.7,14.0374122 5.66258779,15 6.85,15 L6.85,15 L10.278,15 L8.56642924,13.2884329 C8.28831174,13.0103154 8.28703849,12.560671 8.56792924,12.2797803 C8.84687516,12.0008344 9.30182341,12.0035219 9.57658174,12.2782803 L12.6100394,15.311738 C12.7488506,15.4505491 12.8186969,15.6320896 12.8169599,15.8171176 C12.8165314,15.999738 12.7471726,16.1817573 12.6100394,16.3188905 L9.57658174,19.3523481 C9.29846424,19.6304656 8.84881991,19.6317388 8.56792924,19.3508481 C8.28898333,19.0719022 8.29167083,18.616954 8.56642924,18.3421956 L10.207,16.7 L6.85,16.7 C4.79015047,16.7 3.10812464,15.0823445 3.0050096,13.0481205 L3,12.85 L3,8.85 C3,6.72370371 4.72370371,5 6.85,5 L6.85,5 Z"
                id="Icon_Return"
                transform="translate(7.908496, 12.280613) scale(-1, 1) rotate(-180.000000) translate(-7.908496, -12.280613) "
            />
            <path
                d="M18.289,16.165 C16.925,16.165 15.792,15.428 15.583,14.35 L16.936,13.976 C17.134,14.548 17.684,14.889 18.311,14.889 C19.147,14.889 19.686,14.295 19.686,13.514 C19.686,12.678 19.114,12.106 18.278,12.106 C17.728,12.106 17.266,12.359 17.068,12.799 L15.847,12.799 L15.847,8.3 L20.764,8.3 L20.764,9.598 L17.167,9.598 L17.167,11.457 C17.42,11.127 17.937,10.83 18.707,10.83 C20.17,10.83 21.182,11.886 21.182,13.393 C21.182,15.01 19.983,16.165 18.289,16.165 Z"
                id={5}
            />
        </svg>
    );
}

const MemoIconForward5Seconds = React.memo(IconForward5Seconds);
export default MemoIconForward5Seconds;
