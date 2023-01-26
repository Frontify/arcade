import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';
function IconStar16(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-flex tw-items-center tw-justify-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            className={customClassName}
            name="IconStar16"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m8 1.273.457 1.023 1.56 3.495 3.548.463 1.034.135-.753.722-2.676 2.565.67 3.736.194 1.08-.942-.563L8 12.082 4.91 13.93l-.942.563.193-1.08.67-3.736L2.154 7.11l-.753-.722 1.035-.135 3.548-.463 1.56-3.495L8 1.273Zm0 2.454L6.783 6.454l-.114.256-.278.036L3.6 7.11l2.117 2.028.193.186-.047.263-.524 2.92 2.406-1.437.256-.153.257.153 2.405 1.437-.523-2.92-.048-.263.194-.186L12.4 7.111l-2.79-.365-.277-.036-.114-.256L8 3.727Z"
                clipRule="evenodd"
            />
        </svg>
    );
}
export default memo(IconStar16);
