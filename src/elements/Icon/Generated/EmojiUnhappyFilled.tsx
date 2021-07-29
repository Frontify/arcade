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

function IconEmojiUnhappyFilled(props: IconProps): React.ReactElement<IconProps> {
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
                d="M12,22 C10.6197848,22 9.32096963,21.7395859 8.10351562,21.21875 C6.88606162,20.6979141 5.82487432,19.9850306 4.91992188,19.0800781 C4.01496943,18.1751257 3.30208594,17.1139384 2.78125,15.8964844 C2.26041406,14.6790304 2,13.3802152 2,12 C2,10.6197848 2.26041406,9.32096963 2.78125,8.10351562 C3.30208594,6.88606162 4.01496943,5.82487432 4.91992188,4.91992188 C5.82487432,4.01496943 6.88606162,3.30208594 8.10351562,2.78125 C9.32096963,2.26041406 10.6197848,2 12,2 C13.3802152,2 14.6790304,2.26041406 15.8964844,2.78125 C17.1139384,3.30208594 18.1751257,4.01496943 19.0800781,4.91992188 C19.9850306,5.82487432 20.6979141,6.88606162 21.21875,8.10351562 C21.7395859,9.32096963 22,10.6197848 22,12 C22,13.3802152 21.7395859,14.6790304 21.21875,15.8964844 C20.6979141,17.1139384 19.9850306,18.1751257 19.0800781,19.0800781 C18.1751257,19.9850306 17.1139384,20.6979141 15.8964844,21.21875 C14.6790304,21.7395859 13.3802152,22 12,22 Z M8.81818182,10.1818182 C9.57129739,10.1818182 10.1818182,9.57129739 10.1818182,8.81818182 C10.1818182,8.06506625 9.57129739,7.45454545 8.81818182,7.45454545 C8.06506625,7.45454545 7.45454545,8.06506625 7.45454545,8.81818182 C7.45454545,9.57129739 8.06506625,10.1818182 8.81818182,10.1818182 Z M15.1818182,10.1818182 C15.9349337,10.1818182 16.5454545,9.57129739 16.5454545,8.81818182 C16.5454545,8.06506625 15.9349337,7.45454545 15.1818182,7.45454545 C14.4287026,7.45454545 13.8181818,8.06506625 13.8181818,8.81818182 C13.8181818,9.57129739 14.4287026,10.1818182 15.1818182,10.1818182 Z M6.64142983,15.6841521 C6.41689415,16.1332235 6.59891628,16.6792899 7.04798764,16.9038256 C7.497059,17.1283613 8.0431254,16.9463391 8.26766108,16.4972678 C9.02064445,14.991301 10.2185993,14.2725281 12,14.2725281 C13.7814007,14.2725281 14.9793555,14.991301 15.7323389,16.4972678 C15.9568746,16.9463391 16.502941,17.1283613 16.9520124,16.9038256 C17.4010837,16.6792899 17.5831059,16.1332235 17.3585702,15.6841521 C16.2933717,13.5537552 14.4610235,12.4543463 12,12.4543463 C9.53897648,12.4543463 7.70662827,13.5537552 6.64142983,15.6841521 Z"
                id="Icon_SadFilled"
            />
        </svg>
    );
}

const MemoIconEmojiUnhappyFilled = React.memo(IconEmojiUnhappyFilled);
export default MemoIconEmojiUnhappyFilled;
