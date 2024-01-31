/* (c) Copyright Frontify Ltd., all rights reserved. */

import { createSuperscriptPlugin } from '@udecode/plate';
import { Plugin, PluginProps } from '../Plugin';
import { SuperscriptButton } from '@components/RichTextEditor/Plugins/SuperscriptPlugin/SupercriptButton';
import { SUPERSCRIPT_PLUGIN } from '@components/RichTextEditor/Plugins/SuperscriptPlugin/id';
import { SuperscriptMarkupElement } from '@components/RichTextEditor/Plugins/SuperscriptPlugin/SuperscriptMarkupElement';

export class SuperscriptPlugin extends Plugin {
    constructor(props?: PluginProps) {
        super(SUPERSCRIPT_PLUGIN, {
            button: SuperscriptButton,
            markupElement: new SuperscriptMarkupElement(),
            ...props,
        });
    }

    plugins() {
        return [
            createSuperscriptPlugin({
                options: {
                    hotkey: ['mod+,', 'ctrl+,'],
                },
            }),
        ];
    }
}

export * from './SuperscriptMarkupElement';
