/* (c) Copyright Frontify Ltd., all rights reserved. */

import { isValidUrl } from '@components/RichTextEditor/utils/isValidUrl';
import { createLinkPlugin, createPluginFactory } from '@udecode/plate';
import { Plugin, PluginProps } from '../Plugin';
import { CustomFloatingLink } from './FloatingLink/CustomFloatingLink';
import { LINK_PLUGIN } from './id';
import { LinkButton } from './LinkButton';
import { LinkMarkupElement } from './LinkMarkupElement';

export const createLinkPluginFactory = createPluginFactory({
    ...createLinkPlugin(),
    renderAfterEditable: CustomFloatingLink,
    options: {
        isUrl: isValidUrl,
        rangeBeforeOptions: {
            matchString: ' ',
            skipInvalid: true,
            afterMatch: true,
        },
        triggerFloatingLinkHotkeys: 'command+k, ctrl+k',
    },
});

export class LinkPlugin extends Plugin {
    constructor(props?: PluginProps) {
        super(LINK_PLUGIN, {
            button: LinkButton,
            markupElement: new LinkMarkupElement(),
            ...props,
        });
    }

    plugins() {
        return [createLinkPluginFactory()];
    }
}
