import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconScissors16(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline-flex tw-justify-center tw-items-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            className={customClassName}
            name="IconScissors16"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M14.931 4.06a.5.5 0 0 1-.171.686L5.735 10.16a2.455 2.455 0 1 1-.553-.835L7.392 8l-2.21-1.326a2.455 2.455 0 1 1 .553-.835l2.629 1.578 5.881-3.529a.5.5 0 0 1 .686.172ZM3.453 6.386a1.455 1.455 0 1 1 0-2.91 1.455 1.455 0 0 1 0 2.91Zm0 6.139a1.455 1.455 0 1 1 0-2.911 1.455 1.455 0 0 1 0 2.91Zm6.591-2.933.973-.583 3.742 2.245a.5.5 0 1 1-.514.858l-4.2-2.52Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconScissors16);
export default Memo;
