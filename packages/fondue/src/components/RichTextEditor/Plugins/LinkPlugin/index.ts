/* (c) Copyright Frontify Ltd., all rights reserved. */

import { isValidUrl } from '@components/RichTextEditor/utils/isValidUrl';
import { PlatePlugin, createLinkPlugin as createPlateLinkPlugin, createPluginFactory } from '@udecode/plate';
import { Plugin, PluginProps } from '../Plugin';
import { CustomFloatingLink } from './FloatingLink/CustomFloatingLink';
import { LINK_PLUGIN } from './id';
import { LinkButton } from './LinkButton';
import { LinkMarkupElement } from './LinkMarkupElement';
import { CSSProperties } from 'react';
import { defaultStyles } from '@components/RichTextEditor/utils';

export const createLinkPlugin: ReturnType<typeof createPluginFactory> = createPluginFactory({
    ...createPlateLinkPlugin(),
    renderAfterEditable: CustomFloatingLink,
    options: {
        isUrl: isValidUrl,
        rangeBeforeOptions: {
            matchString: ' ',
            skipInvalid: true,
            afterMatch: true,
        },
        triggerFloatingLinkHotkeys: 'command+k, ctrl+k',
        keepSelectedTextOnPaste: true,
    },
});

export class LinkPlugin extends Plugin {
    public styles: CSSProperties = {};
    constructor({ styles = defaultStyles[LINK_PLUGIN], ...props }: PluginProps = {}) {
        super(LINK_PLUGIN, {
            button: LinkButton,
            markupElement: new LinkMarkupElement(),
            ...props,
        });
        this.styles = styles;
    }

    plugins(): PlatePlugin[] {
        return [createLinkPlugin() as PlatePlugin];
    }
}
