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

function IconArrowDown(props: IconProps): React.ReactElement<IconProps> {
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
                d="M13.0307692,18.4982425 L18.4593777,13.0696341 C18.8599154,12.6690963 19.5093154,12.6690963 19.9098531,13.0696341 C20.3103908,13.4701718 20.3103908,14.1195718 19.9098531,14.5201095 L12.7303659,21.6995967 C12.3298282,22.1001344 11.6804282,22.1001344 11.2798905,21.6995967 L4.1004033,14.5201095 C3.69986557,14.1195718 3.69986557,13.4701718 4.1004033,13.0696341 C4.50094104,12.6690963 5.15034101,12.6690963 5.55087875,13.0696341 L10.9794872,18.4982425 L10.9794872,3.02564103 C10.9794872,2.45919513 11.4386823,2 12.0051282,2 C12.5715741,2 13.0307692,2.45919513 13.0307692,3.02564103 L13.0307692,18.4982425 Z"
                id="Icon_ArrowDown"
            />
        </svg>
    );
}

const MemoIconArrowDown = React.memo(IconArrowDown);
export default MemoIconArrowDown;
