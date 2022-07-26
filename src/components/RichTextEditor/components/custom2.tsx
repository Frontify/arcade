/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PlateRenderElementProps } from '@udecode/plate-core/dist/types/plate/PlateRenderElementProps';
import { merge } from '@utilities/merge';
import React, { FC, useContext } from 'react';
import { DesignTokensContext } from '../context/DesignTokensContext';
import { alignmentClassnames } from '../utils/alignment';

export const Custom2Element: FC<PlateRenderElementProps> = ({ element, attributes, children }) => {
    const { designTokens } = useContext(DesignTokensContext);
    return (
        <p
            {...attributes}
            className={merge([element.align && alignmentClassnames[element.align]])}
            style={designTokens.custom2}
        >
            {children}
        </p>
    );
};
