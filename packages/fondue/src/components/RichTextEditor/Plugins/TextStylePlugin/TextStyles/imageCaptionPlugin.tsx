/* (c) Copyright Frontify Ltd., all rights reserved. */

import { type PlatePlugin, createPluginFactory } from '@udecode/plate-core';
import { type CSSProperties } from 'react';

import { merge } from '@utilities/merge';

import { MarkupElement, Plugin, type PluginProps, defaultStyles, getColumnBreakClasses } from '../../..';
import { alignmentClassnames } from '../../helper';
import { type TextStyleRenderElementProps, TextStyles } from '../types';

const ID = 'textstyle-imageCaption-plugin';

export class ImageCaptionPlugin extends Plugin {
    public styles: CSSProperties = {};
    constructor({ styles = defaultStyles.imageCaption, ...props }: PluginProps = {}) {
        super(TextStyles.imageCaption, {
            label: 'Image Caption',
            markupElement: new ImageCaptionMarkupElement(),
            ...props,
        });
        this.styles = styles;
    }

    plugins(): PlatePlugin[] {
        return [createImageCaptionPlugin(this.styles)];
    }
}

class ImageCaptionMarkupElement extends MarkupElement {
    constructor(id = ID, node = ImageCaptionMarkupElementNode) {
        super(id, node);
    }
}
const ImageCaptionMarkupElementNode = ({ element, attributes, children, styles }: TextStyleRenderElementProps) => {
    const align = element.align as string;
    return (
        <p
            {...attributes}
            className={merge([align && alignmentClassnames[align], getColumnBreakClasses(element)])}
            style={styles}
        >
            {children}
        </p>
    );
};

const createImageCaptionPlugin = (styles: CSSProperties): PlatePlugin =>
    createPluginFactory({
        key: TextStyles.imageCaption,
        isElement: true,
        component: ImageCaptionMarkupElementNode,
        deserializeHtml: {
            rules: [{ validClassName: TextStyles.imageCaption }],
        },
    })({
        component: (props: TextStyleRenderElementProps) => <ImageCaptionMarkupElementNode {...props} styles={styles} />,
    });
