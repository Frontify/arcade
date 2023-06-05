/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { BaseDialogProps, Modality, OverlayProps } from '../../types/dialog';
import { PopperPlacement } from '@components/Popper/types';
import { Trigger } from '@utilities/dialogs/Trigger';
import { Content } from '@utilities/dialogs/Content';
import { Overlay } from '@utilities/dialogs/Overlay';

export type InlineDialogProps = OverlayProps & BaseDialogProps;

Trigger.displayName = 'FondueInlineDialogTrigger';
Content.displayName = 'FondueInlineDialogContent';

export const InlineDialog = ({
    children,
    open,
    placement = PopperPlacement.BottomStart,
    offset = [0, 8],
    flip = false,
    enablePortal = false,
    maxHeight = 'auto',
    maxWidth = 400,
    modality = Modality.Modal,
    handleClose,
}: InlineDialogProps) => {
    return (
        <div data-test-id="fondue-inlineDialog">
            <Overlay
                open={open}
                placement={placement}
                offset={offset}
                flip={flip}
                enablePortal={enablePortal}
                maxWidth={maxWidth}
                maxHeight={maxHeight}
                modality={modality}
                handleClose={handleClose}
            >
                {children}
            </Overlay>
        </div>
    );
};
InlineDialog.displayName = 'FondueInlineDialog';
InlineDialog.Trigger = Trigger;
InlineDialog.Content = Content;
