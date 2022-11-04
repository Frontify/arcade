/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { IconPen, IconTrashBin } from '@foundation/Icon';
import { useRichTextEditorContext } from '@components/RichTextEditor/context/RichTextEditorContext';
import { FloatingButton } from '../FloatingButton';
import { useFloatingButtonUrlInput } from '../FloatingButtonUrlInput';

export const EditModal = () => {
    const urlHtmlProps = useFloatingButtonUrlInput({});
    const { designTokens } = useRichTextEditorContext();

    return (
        <div data-test-id="floating-button-edit" className="tw-bg-white tw-rounded tw-shadow tw-p-4 tw-min-w-[400px]">
            <span data-test-id={'preview-button-flyout'} className="tw-flex tw-justify-between">
                <span style={designTokens.link} className="tw-pointer-events-none">
                    {urlHtmlProps.defaultValue}
                </span>
                <span className="tw-flex tw-gap-2">
                    <span
                        role="button"
                        tabIndex={0}
                        data-test-id={'edit-button-button'}
                        className="tw-transition tw-cursor-pointer tw-rounded hover:tw-bg-black-10 tw-p-1"
                    >
                        <FloatingButton.EditButton>
                            <IconPen />
                        </FloatingButton.EditButton>
                    </span>

                    <span
                        role="button"
                        tabIndex={0}
                        data-test-id={'remove-button-button'}
                        className="tw-transition tw-cursor-pointer tw-rounded hover:tw-bg-black-10 tw-p-1"
                    >
                        <FloatingButton.UnlinkButton>
                            <IconTrashBin />
                        </FloatingButton.UnlinkButton>
                    </span>
                </span>
            </span>
        </div>
    );
};
