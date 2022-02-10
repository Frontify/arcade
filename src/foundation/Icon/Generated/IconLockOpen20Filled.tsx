import React, { memo } from "react";
import { GeneratedIconProps } from "@foundation/Icon/IconProps";
import { IconSize, IconSizeMap } from "@foundation/Icon/IconSize";

function IconLockOpen20Filled(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = ["tw-flex tw-items-center tw-justify-center tw-fill-current"];
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className={customClassName}
            name="IconLockOpen20Filled"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12.805 7.222V5.14c0-1.15-.932-2.083-2.083-2.083H9.333c-1.15 0-2.083.932-2.083 2.083a.694.694 0 0 1-1.39 0 3.472 3.472 0 0 1 3.473-3.472h1.389a3.472 3.472 0 0 1 3.472 3.472v2.083h.695c1.15 0 2.083.933 2.083 2.084v6.944c0 1.15-.933 2.083-2.083 2.083H5.166a2.083 2.083 0 0 1-2.083-2.083V9.306c0-1.151.933-2.084 2.083-2.084h7.64Zm-3.472 6.064a1.388 1.388 0 1 1 1.389 0v.88a.694.694 0 1 1-1.389 0v-.88Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconLockOpen20Filled);
export default Memo;
