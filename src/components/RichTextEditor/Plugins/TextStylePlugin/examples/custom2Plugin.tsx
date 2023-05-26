/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateRenderElementProps, createPluginFactory } from '@udecode/plate';
import React from 'react';
import { MarkupElement, Plugin, PluginProps, getColumnBreakClasses, useRichTextEditorContext } from '../../../';
import { alignmentClassnames } from '../../helper';
import { merge } from '@utilities/merge';
import { TextStyles } from '../types';

const ID = 'textstyle-custom2-plugin';

export class Custom2Plugin extends Plugin {
    constructor(props?: PluginProps) {
        super(TextStyles.custom2, {
            label: 'Custom 2',
            markupElement: new Custom2MarkupElement(),
            ...props,
        });
    }

    plugins() {
        return [createCustom2Plugin()];
    }
}

class Custom2MarkupElement extends MarkupElement {
    constructor(id = ID, node = Custom2MarkupElementNode) {
        super(id, node);
    }
}

const Custom2MarkupElementNode = ({ element, attributes, children }: PlateRenderElementProps) => {
    const align = element.align as string;
    const { theme } = useRichTextEditorContext();
    return (
        <p
            {...attributes}
            className={merge([align && alignmentClassnames[align], getColumnBreakClasses(element)])}
            style={theme.custom2}
        >
            {children}
        </p>
    );
};

const createCustom2Plugin = createPluginFactory({
    key: TextStyles.custom2,
    isElement: true,
    component: Custom2MarkupElementNode,
    deserializeHtml: {
        rules: [{ validClassName: 'custom2' }],
    },
});
