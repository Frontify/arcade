import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconLightning12Filled(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            className={customClassName}
            name="IconLightning12Filled"
            {...props}
        >
            <path
                fill="currentColor"
                d="m7.213.657-5.82 5.91c-.312.317-.092.859.35.86l3.234.01-1.163 3.384c-.173.506.447.9.82.522l5.973-6.066c.313-.317.091-.86-.35-.86H6.94l1.092-3.24c.17-.505-.448-.897-.82-.52Z"
            />
        </svg>
    );
}

const Memo = memo(IconLightning12Filled);
export default Memo;
