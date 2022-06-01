import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconDocument20(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className={customClassName}
            name="IconDocument20"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M14.5 17.5h-9a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.507v5.993H15.5V16.5a1 1 0 0 1-1 1Zm.826-10.507-3.82-3.778v3.778h3.82ZM5.5 19h9a2.5 2.5 0 0 0 2.5-2.5V7.373a2 2 0 0 0-.594-1.422l-4.422-4.373A2 2 0 0 0 10.578 1H5.5A2.5 2.5 0 0 0 3 3.5v13A2.5 2.5 0 0 0 5.5 19Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconDocument20);
export default Memo;
