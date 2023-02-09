/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { PlateRenderElementProps, createPluginFactory } from '@udecode/plate';
import { merge } from '@utilities/merge';
import { useRichTextEditorContext } from '@components/RichTextEditor/context/RichTextEditorContext';
import { TextStyles } from './textStyles';
import { alignmentClassnames } from './alignment';
import { COLUMN_BREAK_CLASS_NAMES } from '../../../utils/constants';

export const Custom2MarkupElementNode = ({ element, attributes, children }: PlateRenderElementProps) => {
    const { designTokens } = useRichTextEditorContext();
    const align = element.align as string;
    const hasColumn = element.breakAfterColumn as boolean;

    return (
        <p
            {...attributes}
            className={merge([align && alignmentClassnames[align], hasColumn && COLUMN_BREAK_CLASS_NAMES])}
            style={designTokens.custom2}
        >
            {children}
        </p>
    );
};

export const createCustom2Plugin = createPluginFactory({
    key: TextStyles.ELEMENT_CUSTOM2,
    isElement: true,
    component: Custom2MarkupElementNode,
    deserializeHtml: {
        rules: [{ validClassName: 'custom2' }],
    },
});
