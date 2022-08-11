import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconTextAlignmentLeft20(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-flex tw-items-center tw-justify-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className={customClassName}
            name="IconTextAlignmentLeft20"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2.75 5.5a.75.75 0 0 1 0-1.5h14.5a.75.75 0 0 1 0 1.5H2.75Zm0 7a.75.75 0 0 1 0-1.5h14.5a.75.75 0 0 1 0 1.5H2.75ZM2 8.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 0-1.5H2.75a.75.75 0 0 0-.75.75ZM2.75 16a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H2.75Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconTextAlignmentLeft20);
export default Memo;
