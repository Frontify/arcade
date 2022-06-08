import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconPuzzle24(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline-flex tw-justify-center tw-items-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={customClassName}
            name="IconPuzzle24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M9.06 7.3H5a.5.5 0 0 0-.5.5V19a.5.5 0 0 0 .5.5h2.58v-.78a3.02 3.02 0 1 1 6.04 0v.78h2.58a.5.5 0 0 0 .5-.5v-4.06h2.26a1.54 1.54 0 0 0 0-3.08H16.7V7.8a.5.5 0 0 0-.5-.5h-4.06V5.04a1.54 1.54 0 1 0-3.08 0V7.3Zm9.14 10.64v-1.5h.76a3.04 3.04 0 0 0 0-6.08h-.76V7.8a2 2 0 0 0-2-2h-2.56v-.76a3.04 3.04 0 1 0-6.08 0v.76H5a2 2 0 0 0-2 2V19a2 2 0 0 0 2 2h4.08v-2.28a1.52 1.52 0 1 1 3.04 0V21h4.08a2 2 0 0 0 2-2v-1.06Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconPuzzle24);
export default Memo;
