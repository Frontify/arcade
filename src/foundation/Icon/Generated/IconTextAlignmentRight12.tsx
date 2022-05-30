import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconTextAlignmentRight12(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-flex tw-items-center tw-justify-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            className={customClassName}
            name="IconTextAlignmentRight12"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.5 4a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1h9Zm0 2a.5.5 0 0 0 0-1H3a.5.5 0 0 0 0 1h7.5Zm.5 3.5a.5.5 0 0 1-.5.5H3a.5.5 0 0 1 0-1h7.5a.5.5 0 0 1 .5.5ZM10.5 8a.5.5 0 0 0 0-1h-9a.5.5 0 0 0 0 1h9Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconTextAlignmentRight12);
export default Memo;
