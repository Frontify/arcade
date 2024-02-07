/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlatePlugin, createSoftBreakPlugin } from '@udecode/plate';
import { Plugin, PluginProps } from '../Plugin';
import { SOFT_BREAK_PLUGIN } from './id';

export class SoftBreakPlugin extends Plugin {
    constructor(props?: PluginProps) {
        super(SOFT_BREAK_PLUGIN, {
            ...props,
        });
    }

    plugins(): PlatePlugin[] {
        return [createSoftBreakPlugin()];
    }
}
