/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ExitBreakPlugin, PlatePlugin } from '@udecode/plate';

export const exitBreakPluginConfig: Partial<PlatePlugin<ExitBreakPlugin>> = {
    options: {
        rules: [
            {
                hotkey: 'shift+enter',
                level: 1,
            },
            {
                hotkey: 'mod+enter',
                before: false,
            },
        ],
    },
};
