/* (c) Copyright Frontify Ltd., all rights reserved. */

import { createPluginFactory } from '@udecode/plate';
import { Plugin, PluginProps } from '../Plugin';
import { ColumnBreakButton } from './ColumnBreakButton';
import { withColumnBreak } from './withColumnBreak';
import { onKeyDownColumnBreak } from './onKeyDownColumnBreak';
import { CSSProperties } from 'react';

export const KEY_ELEMENT_BREAK_AFTER = 'breakAfterColumn';
export const GAP_DEFAULT = 'normal';

export class BreakAfterPlugin extends Plugin {
    private columns: number;
    private gap: CSSProperties['gap'];
    constructor(props?: PluginProps) {
        super('break-after-plugin', {
            button: ColumnBreakButton,
            ...props,
        });
        this.columns = props?.columns ?? 1;
        this.gap = props?.gap ?? GAP_DEFAULT;
    }

    plugins() {
        return [createColumnBreakPlugin(this.columns, this.gap)];
    }
}

export const createColumnBreakPlugin = (columns: number, gap: CSSProperties['gap']) => {
    return createPluginFactory({
        key: KEY_ELEMENT_BREAK_AFTER,
        handlers: {
            onKeyDown: onKeyDownColumnBreak,
        },
        withOverrides: withColumnBreak(columns),
        options: {
            columns,
            gap,
        },
    })();
};
