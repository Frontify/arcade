/* (c) Copyright Frontify Ltd., all rights reserved. */

import { createPluginFactory } from '@udecode/plate';
import { ParagraphMarkupElementNode } from './ParagraphMarkupElement';
import { TextStyles } from '../TextStylePlugin/TextStyles';

export const createParagraphPlugin = () =>
    createPluginFactory({
        key: TextStyles.ELEMENT_PARAGRAPH,
        isElement: true,
        component: ParagraphMarkupElementNode,
    });
