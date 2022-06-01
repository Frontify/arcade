import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconBuilding16(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            className={customClassName}
            name="IconBuilding16"
            {...props}
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 5.5h2m-5 8h1m2-5.5h2m-2 2.5h2m2 3V6l5-1.5v7m-5 2h-6m6 0h6m-12 0v-10l6-2v2m2 4.5h1m-1 2.5h1"
            />
        </svg>
    );
}

const Memo = memo(IconBuilding16);
export default Memo;
