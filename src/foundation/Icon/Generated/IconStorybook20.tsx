import React, { memo } from 'react';
import { GeneratedIconProps } from '@foundation/Icon/IconProps';

function IconStorybook20(props: GeneratedIconProps): React.ReactElement<GeneratedIconProps> {
    const customClassName = 'tw-inline tw-fill-current';
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            className={customClassName}
            name="IconStorybook20"
            {...props}
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                d="m12.877 4.344.075-1.694-.006-.013-8.25.52a.75.75 0 0 0-.706.793l.468 12.375a.75.75 0 0 0 .72.725l10.062.45a.75.75 0 0 0 .787-.75V3.25a.75.75 0 0 0-.8-.75l-.831.062.062 1.725a.113.113 0 0 1-.175.088l-.562-.438-.663.5a.113.113 0 0 1-.18-.093Zm-1.844 3.972v-.004.007-.003Zm2.244-.054c-.268.2-2.228.343-2.244.054.037-1.122-.462-1.166-.743-1.166-.257 0-.707.081-.707.687 0 .61.65.953 1.414 1.357 1.085.574 2.399 1.268 2.399 3.018 0 1.682-1.363 2.613-3.106 2.613-1.794 0-3.357-.731-3.188-3.25.075-.3 2.356-.225 2.356 0-.03 1.044.213 1.35.813 1.35.456 0 .656-.25.656-.688 0-.645-.677-1.025-1.456-1.462-1.054-.592-2.294-1.288-2.294-2.888 0-1.606 1.094-2.68 3.063-2.68 1.962 0 3.037 1.055 3.037 3.055Z"
                clipRule="evenodd"
            />
        </svg>
    );
}

const Memo = memo(IconStorybook20);
export default Memo;
