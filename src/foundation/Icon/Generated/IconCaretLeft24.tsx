import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconCaretLeft24(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={customClassName}
            name="IconCaretLeft24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M16.31 19.78a.75.75 0 0 1-1.06 0L8 12.53 7.47 12l.53-.53 7.25-7.25a.75.75 0 0 1 1.06 1.06L9.59 12l6.72 6.72a.75.75 0 0 1 0 1.06Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconCaretLeft24);
export default Memo;
