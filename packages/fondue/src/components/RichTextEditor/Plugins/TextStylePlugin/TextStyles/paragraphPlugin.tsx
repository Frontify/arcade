/* (c) Copyright Frontify Ltd., all rights reserved. */

import { type PlatePlugin, createPluginFactory } from '@udecode/plate-core';
import { createParagraphPlugin as createPlateParagraphPlugin } from '@udecode/plate-paragraph';
import { type CSSProperties } from 'react';

import { defaultStyles } from '@components/RichTextEditor/utils/defaultStyles';
import { merge } from '@utilities/merge';

import { getColumnBreakClasses } from '../../ColumnBreakPlugin';
import { MarkupElement } from '../../MarkupElement';
import { Plugin, type PluginProps } from '../../Plugin';
import { alignmentClassnames } from '../../helper';
import { type TextStyleRenderElementProps, TextStyles } from '../types';

export class ParagraphPlugin extends Plugin {
    public styles: CSSProperties = {};
    constructor({ styles = defaultStyles.p, ...props }: PluginProps = {}) {
        super(TextStyles.p, {
            markupElement: new ParagraphMarkupElement(),
            label: 'Body Text',
            ...props,
        });
        this.styles = styles;
    }

    plugins(): PlatePlugin[] {
        return [createParagraphPlugin(this.styles)];
    }
}

export const PARAGRAPH_CLASSES = 'tw-m-0 tw-px-0 tw-py-0';

export const ParagraphMarkupElementNode = ({ element, attributes, children, styles }: TextStyleRenderElementProps) => {
    const align = element.align as string;
    const className = merge([align && alignmentClassnames[align], PARAGRAPH_CLASSES, getColumnBreakClasses(element)]);
    return (
        <p {...attributes} className={className} style={styles}>
            {children}
        </p>
    );
};

export class ParagraphMarkupElement extends MarkupElement {
    constructor(id = TextStyles.p, node = ParagraphMarkupElementNode) {
        super(id, node);
    }
}

const createParagraphPlugin = (styles: CSSProperties): PlatePlugin =>
    createPluginFactory({
        ...createPlateParagraphPlugin(),
        key: TextStyles.p,
        isElement: true,
        component: ParagraphMarkupElementNode,
    })({
        component: (props: TextStyleRenderElementProps) => <ParagraphMarkupElementNode {...props} styles={styles} />,
    });
