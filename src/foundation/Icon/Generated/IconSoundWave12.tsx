import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconSoundWave12(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={12}
            height={12}
            className={customClassName}
            name="IconSoundWave12"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M5 10.982v-9.97a.5.5 0 1 1 1 0v9.97a.5.5 0 1 1-1 0ZM3 8.5v-5a.5.5 0 0 1 1 0v5a.5.5 0 0 1-1 0Zm4-5v5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0ZM1.5 5.06a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0v-1a.5.5 0 0 1 .5-.5Zm8.5.44a.5.5 0 0 0-1 0v1a.5.5 0 0 0 1 0v-1Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconSoundWave12);
export default Memo;
