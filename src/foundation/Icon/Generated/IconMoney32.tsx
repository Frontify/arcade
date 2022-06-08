import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconMoney32(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline-flex tw-justify-center tw-items-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            className={customClassName}
            name="IconMoney32"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M16 4a1 1 0 0 1 1 1v1.557c1.526.18 2.66.751 3.45 1.343a6.2 6.2 0 0 1 1.043.985 4.813 4.813 0 0 1 .335.453l.023.036.007.013.003.005.002.002v.001l-.849.497.85-.496a1 1 0 0 1-1.723 1.015l-.002-.003a2.84 2.84 0 0 0-.182-.243 4.214 4.214 0 0 0-.707-.665c-.647-.485-1.69-1-3.25-1-1.687 0-2.657.356-3.198.82-.51.44-.802 1.117-.802 2.18 0 .835.384 1.42 1.138 1.951.808.57 1.922.988 3.203 1.452l.148.053c1.174.425 2.488.9 3.506 1.584C21.107 17.286 22 18.372 22 20c0 1.81-.768 3.22-1.938 4.156-.88.703-1.958 1.12-3.062 1.274V27a1 1 0 1 1-2 0v-1.56a8.357 8.357 0 0 1-3.617-1.358 8.658 8.658 0 0 1-1.211-.973 6.763 6.763 0 0 1-.438-.467l-.01-.01-.002-.004-.002-.002.78-.626-.78.625a1 1 0 0 1 1.558-1.253l.001.001.008.009c.009.01.025.03.05.056.047.053.123.134.226.234.207.2.52.473.93.746A6.282 6.282 0 0 0 16 23.5c1.064 0 2.082-.321 2.813-.906C19.518 22.03 20 21.19 20 20c0-.748-.357-1.288-1.12-1.8-.81-.543-1.923-.947-3.206-1.412l-.015-.005c-1.22-.442-2.605-.945-3.672-1.696C10.867 14.298 10 13.165 10 11.5c0-1.437.409-2.76 1.498-3.696.867-.745 2.05-1.144 3.502-1.265V5a1 1 0 0 1 1-1Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconMoney32);
export default Memo;
