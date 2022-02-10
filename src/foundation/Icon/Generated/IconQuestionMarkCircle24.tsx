import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconQuestionMarkCircle24(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = ["tw-flex tw-items-center tw-justify-center tw-fill-current"];
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={customClassName}
            name="IconQuestionMarkCircle24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM10.827 8.203c-.296.269-.496.646-.6 1.056a.75.75 0 0 1-1.454-.37c.16-.627.485-1.287 1.045-1.796.572-.52 1.346-.843 2.314-.843.963 0 1.778.323 2.342.97.55.632.776 1.477.776 2.373 0 1.214-.82 2.062-1.395 2.656l-.065.068c-.674.698-1.04 1.13-1.04 1.683a.75.75 0 0 1-1.5 0c0-1.215.82-2.062 1.395-2.657l.065-.067c.674-.699 1.04-1.13 1.04-1.683 0-.66-.168-1.112-.408-1.388-.226-.26-.595-.455-1.21-.455-.612 0-1.021.195-1.305.453ZM13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconQuestionMarkCircle24);
export default Memo;
