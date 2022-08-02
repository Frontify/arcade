import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconRocket24(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-flex tw-items-center tw-justify-center tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            className={customClassName}
            name="IconRocket24"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="M13.301 5.625c.829-.829 1.959-1.256 3.188-1.427 1.228-.17 2.439-.068 3.272.06a.103.103 0 0 1 .061.028c.01.009.022.026.027.06.128.834.231 2.045.06 3.273-.17 1.229-.598 2.359-1.426 3.187-1.958 1.958-4.046 3.31-5.65 4.174-.719.387-1.335.673-1.791.87l-2.784-2.784a22.54 22.54 0 0 1 .87-1.792c.863-1.604 2.216-3.692 4.173-5.649Zm6.242 6.242a24.703 24.703 0 0 1-2.379 2.088v3.128a.75.75 0 0 1-.344.63l-5.242 3.38c-.964.622-2.187-.276-1.882-1.382l.667-2.42-3.547-3.546-2.42.667c-1.106.305-2.004-.918-1.382-1.883l3.38-5.241a.75.75 0 0 1 .63-.344h3.128a24.678 24.678 0 0 1 2.089-2.38c2.273-2.273 5.922-2.07 7.749-1.788a1.59 1.59 0 0 1 1.341 1.342c.282 1.827.485 5.476-1.788 7.749Zm-7.595 5.222c.913-.41 2.24-1.078 3.716-2.06v1.645l-4.348 2.804.605-2.196a.746.746 0 0 0 .027-.193Zm-2.87-8.645H7.433L4.63 12.792l2.195-.605a.754.754 0 0 1 .193-.027 26.13 26.13 0 0 1 2.06-3.716Zm6.292.293a1.475 1.475 0 1 0 2.087-2.086 1.475 1.475 0 0 0-2.087 2.086Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconRocket24);
export default Memo;
