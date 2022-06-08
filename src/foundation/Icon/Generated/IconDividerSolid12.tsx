import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconDividerSolid12(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline-flex tw-justify-center tw-items-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            className={customClassName}
            name="IconDividerSolid12"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 2.5 0h7A1.5 1.5 0 0 1 11 1.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 0-.5-.5h-7Zm0 10a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 2.5 12h7a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2a.5.5 0 0 1-.5.5h-7Zm-1-5.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconDividerSolid12);
export default Memo;
