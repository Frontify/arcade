import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';
function IconMicrophone32(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-flex tw-items-center tw-justify-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            className={customClassName}
            name="IconMicrophone32"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M19 10.5V14a3 3 0 1 1-6 0v-3.5a3 3 0 1 1 6 0Zm-8 0a5 5 0 0 1 10 0V14a5 5 0 0 1-10 0v-3.5ZM9.5 15a1 1 0 1 0-2 0c0 1.85 1.051 3.83 2.546 5.313 1.29 1.281 3.024 2.304 4.954 2.574V24h-2a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-1.113c1.93-.27 3.664-1.293 4.955-2.574C23.449 18.83 24.5 16.851 24.5 15a1 1 0 1 0-2 0c0 1.15-.699 2.648-1.954 3.894-1.24 1.23-2.875 2.063-4.546 2.063-1.67 0-3.306-.833-4.546-2.063C10.2 17.648 9.5 16.149 9.5 15Z"
                clipRule="evenodd"
            />
        </svg>
    );
}
export default memo(IconMicrophone32);
