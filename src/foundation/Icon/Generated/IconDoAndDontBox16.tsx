import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconDoAndDontBox16(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-flex tw-items-center tw-justify-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            className={customClassName}
            name="IconDoAndDontBox16"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1.977 1.913a.5.5 0 0 1 .707 0l1.214 1.213L5.11 1.913a.5.5 0 0 1 .707.707L4.605 3.834l1.213 1.213a.5.5 0 0 1-.707.707L3.898 4.541 2.684 5.754a.5.5 0 0 1-.707-.707L3.19 3.834 1.977 2.62a.5.5 0 0 1 0-.707ZM2 8.035V12a2 2 0 0 0 2 2h4.1v-1H4a1 1 0 0 1-1-1V8.035H2ZM8.1 3H12a1 1 0 0 1 1 1v4.035h1V4a2 2 0 0 0-2-2H8.1v1Zm6.371 7.494a.5.5 0 0 1 0 .707l-2.853 2.854-.354.353-.353-.353-1.485-1.486a.5.5 0 1 1 .707-.707l1.131 1.132 2.5-2.5a.5.5 0 0 1 .707 0Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default memo(IconDoAndDontBox16);
