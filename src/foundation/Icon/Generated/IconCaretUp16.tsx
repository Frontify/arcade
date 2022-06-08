import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconCaretUp16(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline-flex tw-justify-center tw-items-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            className={customClassName}
            name="IconCaretUp16"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M2.132 11.215a.5.5 0 0 1 0-.707l5.515-5.516.354-.353.353.353 5.514 5.514a.5.5 0 0 1-.707.707L8 6.053l-5.162 5.162a.5.5 0 0 1-.707 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconCaretUp16);
export default Memo;
