/* (c) Copyright Frontify Ltd., all rights reserved. */

import { useEditorState, useEventPlateId } from '@udecode/plate-core';
import { isRangeInSameBlock } from '@udecode/slate-utils';

import { LinkToolbarButton } from '@components/RichTextEditor/Plugins/LinkPlugin/LinkToolbarButton';
import { getHotkeyByPlatform } from '@components/RichTextEditor/helpers/getHotkeyByPlatform';
import { getTooltip } from '@components/RichTextEditor/helpers/getTooltip';

import { ButtonWrapper } from '../helper';
import { type PluginButtonProps } from '../types';

export const LinkButton = ({ id, editorId }: PluginButtonProps) => {
    const editor = useEditorState(useEventPlateId(editorId));
    const isEnabled = !!isRangeInSameBlock(editor, {
        at: editor.selection,
    });

    return (
        <ButtonWrapper id={id}>
            <LinkToolbarButton
                disabled={!isEnabled}
                tooltip={getTooltip(
                    isEnabled
                        ? `Link\n${getHotkeyByPlatform('Ctrl+K')}`
                        : 'Links can only be set for a single text block.',
                )}
            />
        </ButtonWrapper>
    );
};
