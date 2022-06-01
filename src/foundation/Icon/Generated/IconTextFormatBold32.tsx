import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconTextFormatBold32(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            className={customClassName}
            name="IconTextFormatBold32"
            {...props}
        >
            <path
                fill="currentColor"
                d="M23.318 11.124c0-3.596-2.667-5.79-7.566-5.79H8v21.333h7.876c5.426 0 8.124-2.164 8.124-6.248 0-2.316-1.426-4.389-4.527-4.693 2.512-.366 3.845-2.378 3.845-4.602ZM12.899 9.69h2.388c2.201 0 2.977.945 2.977 2.073 0 1.25-.776 2.072-2.45 2.072h-2.915V9.691Zm6.078 10.393c0 1.463-1.117 2.255-3.163 2.255h-2.915v-4.48h2.884c2.202 0 3.194.7 3.194 2.225Z"
            />
        </svg>
    );
}

const Memo = memo(IconTextFormatBold32);
export default Memo;
