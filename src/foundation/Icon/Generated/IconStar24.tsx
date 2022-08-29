import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconStar24(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-flex tw-items-center tw-justify-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={customClassName}
            name="IconStar24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m12 2.25.678 1.429 2.41 5.081 5.504.677 1.63.201-1.22 1.1-4.121 3.718 1.03 5.404.302 1.584-1.407-.79L12 17.95l-4.806 2.703-1.407.79.302-1.584 1.03-5.404-4.121-3.717-1.22-1.101 1.63-.2 5.504-.678 2.41-5.081.678-1.43Zm0 3.5-1.91 4.026-.176.373-.41.05-4.281.527 3.214 2.899.314.283-.08.414-.806 4.233 3.767-2.118.368-.207.368.207 3.767 2.118-.807-4.233-.079-.414.314-.283 3.214-2.9-4.282-.526-.409-.05-.177-.373L12 5.75Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default memo(IconStar24);
