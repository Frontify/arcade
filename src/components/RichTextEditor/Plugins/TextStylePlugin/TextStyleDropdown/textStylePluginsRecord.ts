/* (c) Copyright Frontify Ltd., all rights reserved. */

import {
    TextStyles,
    createCustom1Plugin,
    createCustom2Plugin,
    createCustom3Plugin,
    createHeading1Plugin,
    createHeading2Plugin,
    createHeading3Plugin,
    createHeading4Plugin,
    createQuotePlugin,
} from '../TextStyles';

export const textStylePluginsRecord = {
    [TextStyles.ELEMENT_HEADING1]: { plugin: createHeading1Plugin },
    [TextStyles.ELEMENT_HEADING2]: { plugin: createHeading2Plugin },
    [TextStyles.ELEMENT_HEADING3]: { plugin: createHeading3Plugin },
    [TextStyles.ELEMENT_HEADING4]: { plugin: createHeading4Plugin },
    [TextStyles.ELEMENT_CUSTOM1]: { plugin: createCustom1Plugin },
    [TextStyles.ELEMENT_CUSTOM2]: { plugin: createCustom2Plugin },
    [TextStyles.ELEMENT_CUSTOM3]: { plugin: createCustom3Plugin },
    [TextStyles.ELEMENT_QUOTE]: { plugin: createQuotePlugin },
};
