/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { IconEraser16 } from '@foundation/Icon/Generated';
import { ResetFormattingToolbarButton } from './ResetFormattingToolbarButton';
import { ButtonWrapper, IconStylingWrapper, buttonClassNames, buttonStyles } from '../../helper';
import { PluginButtonProps } from '../../types';

export const ResetFormattingButton = ({ id }: PluginButtonProps) => (
    <ButtonWrapper id={id}>
        <ResetFormattingToolbarButton
            icon={<IconStylingWrapper icon={<IconEraser16 />} />}
            classNames={buttonClassNames}
            styles={buttonStyles}
        />
    </ButtonWrapper>
);
