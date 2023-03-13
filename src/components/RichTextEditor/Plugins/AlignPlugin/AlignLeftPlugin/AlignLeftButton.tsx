/* (c) Copyright Frontify Ltd., all rights reserved. */

import { getTooltip } from '@components/RichTextEditor/helpers/getTooltip';
import { IconTextAlignmentLeft16 } from '@foundation/Icon/Generated';
import { AlignToolbarButton, someNode, useEventPlateId, usePlateEditorState } from '@udecode/plate';
import React from 'react';
import { ButtonWrapper, IconStylingWrapper, buttonClassNames, buttonStyles } from '../../helper';
import { PluginButtonProps } from '../../types';

export const AlignLeftButton = ({ id, editorId }: PluginButtonProps) => {
    const editor = usePlateEditorState(useEventPlateId(editorId));
    const isActive = !!editor?.selection && !someNode(editor, { match: (node) => !!node.align });

    return (
        <ButtonWrapper id={id}>
            <AlignToolbarButton
                active={isActive}
                tooltip={getTooltip('Align left')}
                value="left"
                icon={<IconStylingWrapper icon={<IconTextAlignmentLeft16 />} />}
                classNames={buttonClassNames}
                styles={buttonStyles}
                actionHandler="onMouseDown"
            />
        </ButtonWrapper>
    );
};
