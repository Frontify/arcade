import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconStar12Filled(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            className={customClassName}
            name="IconStar12Filled"
            {...props}
        >
            <path
                fill="currentColor"
                stroke="currentColor"
                d="M7.446 4.489 6 1.25 4.554 4.489 1.25 4.92l2.478 2.375-.62 3.455L6 9.023l2.891 1.727-.62-3.455L10.75 4.92l-3.304-.43Z"
            />
        </svg>
    );
}

const Memo = memo(IconStar12Filled);
export default Memo;
