/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { MARK_CODE, PlateRenderLeafProps } from '@udecode/plate';
import { MarkupElement } from '../MarkupElement';

export const CODE_CLASSES =
    'tw-table-cell tw-rounded tw-bg-box-neutral tw-text-box-neutral-inverse tw-m-0 tw-px-2 tw-py-0.5';

export const CodeMarkupElementNode = ({ attributes, children }: PlateRenderLeafProps) => (
    <span {...attributes} className={CODE_CLASSES}>
        {children}
    </span>
);

export class CodeMarkupElement extends MarkupElement {
    constructor(id = MARK_CODE, node = CodeMarkupElementNode) {
        super(id, node);
    }
}
