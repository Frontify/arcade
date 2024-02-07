/* (c) Copyright Frontify Ltd., all rights reserved. */

import IconListBullet16 from '@foundation/Icon/Generated/IconListBullet16';
import { ButtonWrapper, IconStylingWrapper } from '../../helper';
import { PluginButtonProps } from '../../types';
import { ListToolbarButton } from '@components/RichTextEditor/Plugins/ListPlugin/ListToolbarButton';
import { getTooltip } from '@components/RichTextEditor/helpers';
import { getPluginType } from '@udecode/plate';

export const UnorderedListButton = ({ editor, id }: PluginButtonProps) => (
    <ButtonWrapper id={id}>
        <ListToolbarButton tooltip={getTooltip('Bullet list')} nodeType={getPluginType(editor, id)}>
            <IconStylingWrapper icon={<IconListBullet16 />} />
        </ListToolbarButton>
    </ButtonWrapper>
);
