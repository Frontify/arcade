import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconStar20Filled(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-flex tw-items-center tw-justify-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className={customClassName}
            name="IconStar20Filled"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M10.685 2.694 10 1.16l-.685 1.534-1.96 4.39-4.452.581-1.551.203 1.13 1.082 3.361 3.222-.842 4.695-.29 1.621 1.413-.844L10 15.328l3.876 2.316 1.414.844-.29-1.62-.843-4.696 3.362-3.222 1.13-1.082-1.552-.203-4.453-.582-1.96-4.389Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconStar20Filled);
export default Memo;
