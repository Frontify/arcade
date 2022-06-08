import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconTextAlignmentRight16(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline-flex tw-justify-center tw-items-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            className={customClassName}
            name="IconTextAlignmentRight16"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.5 4a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h11Zm0 3a.5.5 0 0 0 0-1H5a.5.5 0 0 0 0 1h8.5Zm.5 5.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1 0-1h8.5a.5.5 0 0 1 .5.5Zm-.5-2.5a.5.5 0 0 0 0-1h-11a.5.5 0 0 0 0 1h11Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconTextAlignmentRight16);
export default Memo;
