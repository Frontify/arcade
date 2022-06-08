import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconDividerDotted32(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline-flex tw-justify-center tw-items-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            className={customClassName}
            name="IconDividerDotted32"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10 5a2 2 0 0 0-2 2v3.5a1 1 0 1 1-2 0V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v3.5a1 1 0 1 1-2 0V7a2 2 0 0 0-2-2H10Zm12 22a2 2 0 0 0 2-2v-3.5a1 1 0 1 1 2 0V25a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4v-3.5a1 1 0 1 1 2 0V25a2 2 0 0 0 2 2h12ZM7 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconDividerDotted32);
export default Memo;
