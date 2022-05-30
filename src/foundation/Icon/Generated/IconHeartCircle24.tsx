import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconHeartCircle24(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-flex tw-items-center tw-justify-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={customClassName}
            name="IconHeartCircle24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M20.5 12a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0Zm1.5 0c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8.4 9.692c.404-.403.679-.465.814-.476.16-.012.364.033.62.182.26.15.5.364.686.564a3.672 3.672 0 0 1 .245.291l.005.008a1.5 1.5 0 0 0 2.46 0l.005-.008.044-.057a3.68 3.68 0 0 1 .201-.234c.187-.2.427-.414.686-.564.256-.149.46-.194.62-.182.135.01.41.073.814.476.619.619.693 1.165.558 1.738-.164.696-.673 1.509-1.44 2.352-.744.82-1.62 1.546-2.328 2.077-.139.104-.27.2-.39.285a20.42 20.42 0 0 1-.39-.285c-.708-.531-1.584-1.258-2.329-2.077-.766-.843-1.275-1.656-1.439-2.352-.135-.573-.06-1.12.558-1.738Zm-1.06-1.06c1.394-1.396 2.715-.947 3.592-.305.66.482 1.068 1.075 1.068 1.075s.408-.593 1.068-1.075c.877-.642 2.198-1.09 3.593.305 3.995 3.995-4.66 9.321-4.66 9.321s-8.657-5.326-4.662-9.321Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconHeartCircle24);
export default Memo;
