/* (c) Copyright Frontify Ltd., all rights reserved. */

import { EmojiToolbarDropdown, KEY_EMOJI } from '@udecode/plate';
import IconFaceHappy16 from '@foundation/Icon/Generated/IconFaceHappy16';
import { ButtonWrapper, IconStylingWrapper, buttonStyles, getButtonClassNames } from '../helper';
import { PluginButtonProps } from '../types';
import { EmojiPicker } from './EmojiPicker';

export const EmojiButton = ({ id }: PluginButtonProps) => (
    <ButtonWrapper id={id}>
        <EmojiToolbarDropdown
            pluginKey={KEY_EMOJI}
            icon={<IconStylingWrapper icon={<IconFaceHappy16 />} />}
            styles={buttonStyles}
            classNames={getButtonClassNames()}
            EmojiPickerComponent={EmojiPicker}
        />
    </ButtonWrapper>
);
