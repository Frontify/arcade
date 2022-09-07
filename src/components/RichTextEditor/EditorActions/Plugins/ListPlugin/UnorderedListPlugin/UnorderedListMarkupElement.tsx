/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { ELEMENT_UL, PlateRenderLeafProps } from '@udecode/plate';
import { MarkupElement } from '../../MarkupElement';

export const UL_CLASSES = 'tw-list-disc tw-pl-6';

export const UnorderedListMarkupElementTag = ({ attributes, children }: PlateRenderLeafProps) => (
    <ul className={UL_CLASSES} {...attributes}>
        {children}
    </ul>
);

export class UnorderedListMarkupElement extends MarkupElement {
    constructor(id = ELEMENT_UL, elementTag = UnorderedListMarkupElementTag) {
        super(id, elementTag);
    }
}
