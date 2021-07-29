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

function IconTrash(props: IconProps): React.ReactElement<IconProps> {
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
                d="M17.3909091,7.45454545 L6.48181818,7.45454545 L6.48181818,19.2727273 C6.48181818,19.7748043 6.88883205,20.1818182 7.39090909,20.1818182 L16.4818182,20.1818182 C16.9838952,20.1818182 17.3909091,19.7748043 17.3909091,19.2727273 L17.3909091,7.45454545 Z M4.66363636,5.63636364 L8.3,5.63636364 L8.3,3.81818182 C8.3,2.81402773 9.11402773,2 10.1181818,2 L13.7545455,2 C14.7586995,2 15.5727273,2.81402773 15.5727273,3.81818182 L15.5727273,5.63636364 L19.2090909,5.63636364 L19.842081,5.63636364 C20.344158,5.63636364 20.7511719,6.0433775 20.7511719,6.54545455 C20.7511719,7.04753159 20.344158,7.45454545 19.842081,7.45454545 L19.2090909,7.45454545 L19.2090909,19.2727273 C19.2090909,20.7789584 17.9880493,22 16.4818182,22 L7.39090909,22 C5.88467796,22 4.66363636,20.7789584 4.66363636,19.2727273 L4.66363636,7.45454545 L4.20909091,7.45454545 C3.70701386,7.45454545 3.3,7.04753159 3.3,6.54545455 C3.3,6.0433775 3.70701386,5.63636364 4.20909091,5.63636364 L4.66363636,5.63636364 Z M10.1181818,5.63636364 L13.7545455,5.63636364 L13.7545455,3.81818182 L10.1181818,3.81818182 L10.1181818,5.63636364 Z M8.75454545,10.1818182 C8.75454545,9.67974114 9.16155932,9.27272727 9.66363636,9.27272727 C10.1657134,9.27272727 10.5727273,9.67974114 10.5727273,10.1818182 L10.5727273,17.4545455 C10.5727273,17.9566225 10.1657134,18.3636364 9.66363636,18.3636364 C9.16155932,18.3636364 8.75454545,17.9566225 8.75454545,17.4545455 L8.75454545,10.1818182 Z M13.3,10.1818182 C13.3,9.67974114 13.7070139,9.27272727 14.2090909,9.27272727 C14.711168,9.27272727 15.1181818,9.67974114 15.1181818,10.1818182 L15.1181818,17.4545455 C15.1181818,17.9566225 14.711168,18.3636364 14.2090909,18.3636364 C13.7070139,18.3636364 13.3,17.9566225 13.3,17.4545455 L13.3,10.1818182 Z"
                id="Icon_Delete"
            />
        </svg>
    );
}

const MemoIconTrash = React.memo(IconTrash);
export default MemoIconTrash;
