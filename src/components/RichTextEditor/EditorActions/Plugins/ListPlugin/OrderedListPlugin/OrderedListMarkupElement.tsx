/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { ELEMENT_OL, PlateRenderLeafProps } from '@udecode/plate';
import { MarkupElement } from '../../MarkupElement';

export const OL_CLASSES = 'tw-list-decimal tw-pl-6';

export const OrderedListMarkupElementTag = ({ attributes, children }: PlateRenderLeafProps) => (
    <ol className={OL_CLASSES} {...attributes}>
        {children}
    </ol>
);

export class OrderedListMarkupElement extends MarkupElement {
    constructor(id = ELEMENT_OL, tag = OrderedListMarkupElementTag) {
        super(id, tag);
    }
}
