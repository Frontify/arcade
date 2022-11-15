import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';
function IconTextIndent20(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-flex tw-items-center tw-justify-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className={customClassName}
            name="IconTextIndent20"
            {...props}
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth={1.5}
                d="M2.75 4.75h14.5m-8.5 7h8.5m-8.5-3.5h8.5m-14.5 7h14.5M2.81 7.879 4.93 10l-2.12 2.121"
            />
        </svg>
    );
}
export default memo(IconTextIndent20);
