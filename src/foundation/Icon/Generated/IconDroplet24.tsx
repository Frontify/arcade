import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconDroplet24(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={customClassName}
            name="IconDroplet24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M17.5 15.077c0 2.98-2.447 5.423-5.5 5.423s-5.5-2.444-5.5-5.423c0-3.379 1.547-6.333 3.196-8.509a21.347 21.347 0 0 1 2.246-2.519L12 3.995l.058.054a21.35 21.35 0 0 1 2.246 2.519c1.649 2.176 3.196 5.13 3.196 8.509Zm1.5 0C19 18.9 15.866 22 12 22s-7-3.1-7-6.923C5 7.407 12 2 12 2s7 5.407 7 13.077ZM10.5 17a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconDroplet24);
export default Memo;
