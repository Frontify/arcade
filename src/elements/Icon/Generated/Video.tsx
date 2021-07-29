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

function IconVideo(props: IconProps): React.ReactElement<IconProps> {
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
                d="M9.14285714,14.7053909 L9.14285714,9.81330458 C9.14285714,9.30501348 9.42188021,8.85658356 9.91752782,8.57123698 C10.3772873,8.35904029 10.8899436,8.37838581 11.3131473,8.66052387 L14.93487,11.0632072 C15.3355586,11.3181909 15.5714286,11.7591652 15.5714286,12.2233765 C15.5714286,12.6728638 15.3494162,13.1067971 14.9722999,13.370722 L11.3935541,15.8116744 C11.1555185,16.0100373 10.8555537,16.1031299 10.5585817,16.1031299 C10.3382271,16.1031299 10.1280034,16.0600693 9.92530523,15.9606817 C9.45172521,15.7373676 9.17936066,15.2765577 9.14285714,14.7053909 Z M14.1096854,12.2299715 L10.5714059,9.88279375 L10.5698497,14.6482203 L14.1096854,12.2299715 Z M12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 C17.5228475,2 22,6.4771525 22,12 C22,17.5228475 17.5228475,22 12,22 Z M12,20.5714286 C16.7338693,20.5714286 20.5714286,16.7338693 20.5714286,12 C20.5714286,7.26613072 16.7338693,3.42857143 12,3.42857143 C7.26613072,3.42857143 3.42857143,7.26613072 3.42857143,12 C3.42857143,16.7338693 7.26613072,20.5714286 12,20.5714286 Z"
                id="Icon_Video"
            />
        </svg>
    );
}

const MemoIconVideo = React.memo(IconVideo);
export default MemoIconVideo;
