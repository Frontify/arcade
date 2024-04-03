/* (c) Copyright Frontify Ltd., all rights reserved. */

import * as Popover from '@radix-ui/react-popover';
import { type ReactNode } from 'react';

import { zIndexLayers } from '@components/RichTextEditor/helpers/zIndexLayers';

type EmojiToolbarDropdownProps = {
    control: ReactNode;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    children: ReactNode;
};

export function EmojiToolbarDropdown({ control, isOpen, setIsOpen, children }: EmojiToolbarDropdownProps) {
    return (
        <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
            <Popover.Trigger asChild>{control}</Popover.Trigger>

            <Popover.Portal>
                <Popover.Content style={{ zIndex: zIndexLayers.emojiPopover }}>{children}</Popover.Content>
            </Popover.Portal>
        </Popover.Root>
    );
}
