/* (c) Copyright Frontify Ltd., all rights reserved. */

import { TElement } from '@udecode/plate-core';
import { merge } from 'lodash-es';

export const checkItemNode = (
    node: TElement,
    children: string,
    defaultClassNames: string,
) => `<div disabled class="tw-flex tw-flex-row tw-pb-2 first-of-type:tw-ml-0 ${defaultClassNames}" style="margin-left:${
    ((node.indent as number) ?? 0) * 24
}px;">
    <div class="tw-flex tw-items-center tw-justify-center tw-select-none tw-mr-1.5">
        <input 
            class="tw-w-4 tw-h-4 tw-m-0"
            type="checkbox"
            ${node.checked ? 'checked' : ''}
            onclick="return false;" />
    </div>
    <span class="${merge([
        'tw-flex-1 tw-focus:outline-none',
        (node.checked as boolean) && 'tw-line-through',
    ])}">${children}</span>
</div>`;
