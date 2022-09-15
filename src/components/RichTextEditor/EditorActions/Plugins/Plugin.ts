/* (c) Copyright Frontify Ltd., all rights reserved. */

import { AnyObject, PlatePlugin } from '@udecode/plate';
import { PluginButton } from './types';
import type { MarkupElement } from './MarkupElement';

export type PluginProps = {
    id: string;
    button?: PluginButton;
    markupElement?: MarkupElement;
    leafMarkupElements?: MarkupElement | MarkupElement[];
};

export abstract class Plugin<P extends PluginProps = PluginProps> {
    readonly id: string;
    readonly button?: PluginButton;
    readonly markupElement?: MarkupElement;
    readonly leafMarkupElements?: MarkupElement | MarkupElement[];

    constructor(protected props: P) {
        this.id = this.props.id;
        this.button = this.props?.button;
        this.markupElement = this.props?.markupElement;
        this.leafMarkupElements = this.props?.leafMarkupElements;
    }

    abstract plugins(): PlatePlugin<AnyObject>[];
}
