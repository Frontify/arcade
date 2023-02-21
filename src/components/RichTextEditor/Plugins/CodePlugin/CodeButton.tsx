/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { MarkToolbarButton, getPluginType } from '@udecode/plate';
import { IconSize, IconTextBrackets } from '@foundation/Icon';
import { ButtonWrapper, IconStylingWrapper, buttonClassNames, buttonStyles } from '../helper';
import { PluginButtonProps } from '../types';

export const CodeButton = ({ editor, id }: PluginButtonProps) => (
    <ButtonWrapper id={id}>
        <MarkToolbarButton
            type={getPluginType(editor, id)}
            icon={<IconStylingWrapper icon={<IconTextBrackets size={IconSize.Size16} />} />}
            classNames={buttonClassNames}
            styles={buttonStyles}
            actionHandler="onMouseDown"
        />
    </ButtonWrapper>
);
