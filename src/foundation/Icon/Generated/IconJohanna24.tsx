import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconJohanna24(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={customClassName}
            name="IconJohanna24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-5.5 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm1.5 0a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconJohanna24);
export default Memo;
