/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ELEMENT_PARAGRAPH, createAlignPlugin } from '@udecode/plate';
import { Plugin } from '../Plugin';

export class AlignPlugin extends Plugin {
    plugins() {
        return [
            createAlignPlugin({
                inject: {
                    props: {
                        validTypes: [
                            ELEMENT_PARAGRAPH,
                            // TextStyles.ELEMENT_HEADING1,
                            // TextStyles.ELEMENT_HEADING2,
                            // TextStyles.ELEMENT_HEADING3,
                            // TextStyles.ELEMENT_HEADING4,
                            // TextStyles.ELEMENT_CUSTOM1,
                            // TextStyles.ELEMENT_CUSTOM2,
                        ],
                    },
                },
            }),
        ];
    }
}
