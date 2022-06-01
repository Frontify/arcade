import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconStorybook24(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={customClassName}
            name="IconStorybook24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m15.453 5.213.09-2.033-.008-.015-9.9.623a.9.9 0 0 0-.847.952l.562 14.85a.9.9 0 0 0 .863.87l12.075.54a.9.9 0 0 0 .945-.9V3.9a.9.9 0 0 0-.96-.9l-.998.075.075 2.07a.135.135 0 0 1-.21.105l-.675-.525-.795.6a.135.135 0 0 1-.217-.112ZM13.24 9.979v-.004.008-.004Zm2.693-.064c-.322.24-2.674.411-2.693.064.044-1.347-.555-1.399-.892-1.399-.308 0-.848.098-.848.825 0 .731.78 1.143 1.696 1.628 1.303.688 2.88 1.522 2.88 3.622 0 2.018-1.636 3.135-3.728 3.135-2.153 0-4.028-.877-3.825-3.9.09-.36 2.827-.27 2.827 0-.037 1.253.255 1.62.975 1.62.548 0 .788-.3.788-.825 0-.774-.813-1.23-1.747-1.755-1.265-.71-2.753-1.546-2.753-3.465 0-1.927 1.312-3.217 3.675-3.217 2.355 0 3.645 1.267 3.645 3.667Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconStorybook24);
export default Memo;
