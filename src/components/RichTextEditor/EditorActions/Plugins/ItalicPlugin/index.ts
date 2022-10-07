/* (c) Copyright Frontify Ltd., all rights reserved. */

import { createItalicPlugin } from '@udecode/plate';
import { ITALIC_PLUGIN } from './id';
import { ItalicMarkupElement } from './ItalicMarkupElement';
import { Plugin, PluginProps } from '../Plugin';
import { ItalicButton } from './ItalicButton';

export class ItalicPlugin extends Plugin {
    constructor(props?: PluginProps) {
        super(ITALIC_PLUGIN, {
            button: ItalicButton,
            markupElement: new ItalicMarkupElement(),
            ...props,
        });
    }

    plugins() {
        return [createItalicPlugin()];
    }
}
