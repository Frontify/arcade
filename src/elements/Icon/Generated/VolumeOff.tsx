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

function IconVolumeOff(props: IconProps): React.ReactElement<IconProps> {
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
            <path d="M13.7474093,3.56248 C13.9101214,3.74553113 14,3.98192968 14,4.22684384 L14,19.7731562 C14,20.3254409 13.5522847,20.7731562 13,20.7731562 C12.7550858,20.7731562 12.5186873,20.6832776 12.3356362,20.5205655 L7.25,15.9998331 L5,16 C3.8954305,16 3,15.1045695 3,14 L3,10 C3,8.8954305 3.8954305,8 5,8 L7.249,7.99983313 L12.3356362,3.47943452 C12.7484189,3.11251651 13.3804913,3.14969723 13.7474093,3.56248 Z M12.5,5.34009305 L7.81924705,9.49979082 L5,9.5 C4.72385763,9.5 4.5,9.72385763 4.5,10 L4.5,14 C4.5,14.2761424 4.72385763,14.5 4.99988875,14.5 L7.82026713,14.4997908 L12.5,18.6597069 L12.5,5.34009305 Z M19.3538295,9.21977596 C19.6200808,8.90246997 20.0931475,8.86108199 20.4104535,9.12733334 C20.7277595,9.39358468 20.7691475,9.86665138 20.5028962,10.1839574 L20.5028962,10.1839574 L18.979,11.9998331 L20.5028962,13.8160426 C20.7449428,14.1045026 20.7327421,14.5216905 20.4901268,14.7951974 L20.4104535,14.8726667 C20.0931475,15.138918 19.6200808,15.09753 19.3538295,14.780224 L19.3538295,14.780224 L17.999,13.1668331 L16.6461705,14.780224 C16.4041238,15.068684 15.9911554,15.1291126 15.6796739,14.9376771 L15.5895465,14.8726667 C15.2722405,14.6064153 15.2308525,14.1333486 15.4971038,13.8160426 L15.4971038,13.8160426 L17.02,11.9998331 L15.4971038,10.1839574 C15.2550572,9.89549738 15.2672579,9.47830953 15.5098732,9.20480259 L15.5895465,9.12733334 C15.9068525,8.86108199 16.3799192,8.90246997 16.6461705,9.21977596 L16.6461705,9.21977596 L18,10.8328331 Z" />
        </svg>
    );
}

const MemoIconVolumeOff = React.memo(IconVolumeOff);
export default MemoIconVolumeOff;
