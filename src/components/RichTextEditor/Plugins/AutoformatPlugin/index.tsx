/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Plugin, PluginProps } from '../Plugin';
import { AUTOFORMAT_PLUGIN } from './id';
import {
    ELEMENT_OL,
    ELEMENT_UL,
    MARK_BOLD,
    MARK_CODE,
    MARK_ITALIC,
    MARK_STRIKETHROUGH,
    MARK_UNDERLINE,
    autoformatArrow,
    autoformatLegal,
    autoformatPunctuation,
    autoformatSubscriptNumbers,
    autoformatSubscriptSymbols,
    autoformatSuperscriptNumbers,
    autoformatSuperscriptSymbols,
    createAutoformatPlugin,
    toggleList,
    unwrapList,
} from '@udecode/plate';
import { TextStyles } from '../TextStylePlugin';
import { ELEMENT_CHECK_ITEM } from '../CheckboxListPlugin';

export class AutoformatPlugin extends Plugin {
    constructor(props?: PluginProps) {
        super(AUTOFORMAT_PLUGIN, {
            ...props,
        });
    }

    plugins() {
        return [
            createAutoformatPlugin({
                options: {
                    rules: [
                        ...autoformatPunctuation,
                        ...autoformatArrow,
                        ...autoformatLegal,
                        ...autoformatSubscriptNumbers,
                        ...autoformatSubscriptSymbols,
                        ...autoformatSuperscriptNumbers,
                        ...autoformatSuperscriptSymbols,
                        {
                            mode: 'mark',
                            type: [MARK_UNDERLINE],
                            match: ['_', '_'],
                            ignoreTrim: true,
                        },
                        {
                            mode: 'mark',
                            type: [MARK_BOLD],
                            match: ['**', '**'],
                            ignoreTrim: true,
                        },
                        {
                            mode: 'mark',
                            type: [MARK_ITALIC],
                            match: ['*', '*'],
                            ignoreTrim: true,
                        },
                        {
                            mode: 'mark',
                            type: [MARK_STRIKETHROUGH],
                            match: ['~~', '~~'],
                            ignoreTrim: true,
                        },
                        {
                            mode: 'mark',
                            type: [MARK_CODE],
                            match: ['`', '`'],
                            ignoreTrim: true,
                        },
                        {
                            mode: 'block',
                            match: ['# '],
                            type: TextStyles.heading1,
                        },
                        {
                            mode: 'block',
                            match: ['## '],
                            type: TextStyles.heading2,
                        },
                        {
                            mode: 'block',
                            match: ['### '],
                            type: TextStyles.heading3,
                        },
                        {
                            mode: 'block',
                            match: ['#### '],
                            type: TextStyles.heading4,
                        },
                        {
                            mode: 'block',
                            type: ELEMENT_UL,
                            match: ['- '],
                            preFormat: unwrapList,
                            format: (editor) => toggleList(editor, { type: ELEMENT_UL }),
                        },
                        {
                            mode: 'block',
                            type: ELEMENT_OL,
                            match: ['1. ', '1) '],
                            preFormat: unwrapList,
                            format: (editor) => toggleList(editor, { type: ELEMENT_OL }),
                        },
                        {
                            mode: 'block',
                            type: ELEMENT_CHECK_ITEM,
                            match: ['[] '],
                        },
                    ],
                },
            }),
        ];
    }
}
