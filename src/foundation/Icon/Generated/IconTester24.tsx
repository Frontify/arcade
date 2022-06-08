import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconTester24(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline-flex tw-justify-center tw-items-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={customClassName}
            name="IconTester24"
            {...props}
        >
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M7.5 8.5h2m-7 12h2m3-8h2m-2 4h2m3 4V9l7-2.5V17m-7 3.5h-8m8 0h9m-17 0v-15l8-2.5v3m2.5 6.5h2m-2 4h2"
            />
        </svg>
    );
}

const Memo = memo(IconTester24);
export default Memo;
