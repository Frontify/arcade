/* (c) Copyright Frontify Ltd., all rights reserved. */

import IconTextAlignmentLeft16 from '@foundation/Icon/Generated/IconTextAlignmentLeft16';
import { getTooltip } from '@components/RichTextEditor/helpers';
import { AlignmentToolbarButton } from '@components/RichTextEditor/Plugins/AlignPlugin/AlignmentToolbarbutton';
import { ButtonWrapper, IconStylingWrapper } from '../../helper';
import { PluginButtonProps } from '../../types';

export const AlignLeftButton = ({ id, editorId }: PluginButtonProps) => {
    return (
        <ButtonWrapper id={id}>
            <AlignmentToolbarButton editorId={editorId} value="left" tooltip={getTooltip('Align left')}>
                <IconStylingWrapper icon={<IconTextAlignmentLeft16 />} />
            </AlignmentToolbarButton>
        </ButtonWrapper>
    );
};
