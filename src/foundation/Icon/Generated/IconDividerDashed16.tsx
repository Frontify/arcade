import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconDividerDashed16(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-flex tw-items-center tw-justify-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            className={customClassName}
            name="IconDividerDashed16"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.046 2.007a1 1 0 0 0-1 1v1.5a.5.5 0 1 1-1 0v-1.5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-1 0v-1.5a1 1 0 0 0-1-1h-8ZM4 14a1 1 0 0 1-1-1v-1.5a.5.5 0 0 0-1 0V13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1.5a.5.5 0 0 0-1 0V13a1 1 0 0 1-1 1H4ZM2.5 7.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm4 .5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5Zm5-.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconDividerDashed16);
export default Memo;
