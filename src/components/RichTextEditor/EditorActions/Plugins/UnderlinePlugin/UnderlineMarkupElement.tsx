/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { MARK_UNDERLINE, PlateRenderLeafProps } from '@udecode/plate';
import { MarkupElement } from '../MarkupElement';

export const UNDERLINE_CLASSES = 'tw-underline';

export const UnderlineMarkupElementTag = ({ attributes, children }: PlateRenderLeafProps) => (
    <span {...attributes} className={UNDERLINE_CLASSES}>
        {children}
    </span>
);

export class UnderlineMarkupElement extends MarkupElement {
    constructor(id = MARK_UNDERLINE, tag = UnderlineMarkupElementTag) {
        super(id, tag);
    }
}
