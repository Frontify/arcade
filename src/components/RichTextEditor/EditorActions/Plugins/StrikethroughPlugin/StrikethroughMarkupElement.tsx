/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { MARK_STRIKETHROUGH, PlateRenderLeafProps } from '@udecode/plate';
import { MarkupElement } from '../MarkupElement';

export const STRIKETHROUGH_CLASSES = 'tw-line-through';

export const StrikethroughMarkupElementNode = ({ attributes, children }: PlateRenderLeafProps) => (
    <span {...attributes} className={STRIKETHROUGH_CLASSES}>
        {children}
    </span>
);

export class StrikethroughMarkupElement extends MarkupElement {
    constructor(id = MARK_STRIKETHROUGH, node = StrikethroughMarkupElementNode) {
        super(id, node);
    }
}
