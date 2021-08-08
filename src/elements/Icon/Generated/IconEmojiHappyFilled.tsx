import * as React from "react";
import { IconProps } from "@elements/Icon/IconProps";
import { IconSize, IconSizeMap } from "@elements/Icon/IconSize";

function IconEmojiHappyFilled(props: IconProps): React.ReactElement<IconProps> {
    const customClassName = [
        "tw-flex tw-items-center tw-justify-center tw-fill-current",
        IconSizeMap[props.size || IconSize.Size16],
    ].join(" ");
    return (
        <svg
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            className={customClassName}
            name="IconEmojiHappyFilled"
            {...props}
        >
            <path d="M12 22c-1.38 0-2.679-.26-3.896-.781A10.035 10.035 0 014.92 19.08a10.035 10.035 0 01-2.139-3.184A9.801 9.801 0 012 12c0-1.38.26-2.679.781-3.896A10.035 10.035 0 014.92 4.92 10.035 10.035 0 018.104 2.78 9.801 9.801 0 0112 2c1.38 0 2.679.26 3.896.781A10.035 10.035 0 0119.08 4.92a10.035 10.035 0 012.139 3.184A9.801 9.801 0 0122 12c0 1.38-.26 2.679-.781 3.896a10.035 10.035 0 01-2.139 3.184 10.035 10.035 0 01-3.184 2.139A9.801 9.801 0 0112 22zM8.818 11.09a1.364 1.364 0 100-2.726 1.364 1.364 0 000 2.727zm6.364 0a1.364 1.364 0 100-2.726 1.364 1.364 0 000 2.727zm-8.54 3.59c1.065 2.13 2.897 3.23 5.358 3.23s4.293-1.1 5.359-3.23a.91.91 0 00-1.627-.814c-.753 1.506-1.95 2.225-3.732 2.225-1.781 0-2.98-.719-3.732-2.225a.91.91 0 00-1.627.813z" />
        </svg>
    );
}

const MemoIconEmojiHappyFilled = React.memo(IconEmojiHappyFilled);
export default MemoIconEmojiHappyFilled;
