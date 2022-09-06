/* (c) Copyright Frontify Ltd., all rights reserved. */

// import { usePlateEditorRef } from '@udecode/plate';
import React, { ReactNode } from 'react';
import { IconStylingWrapperProps } from './types';

export const buttonClassNames = {
    root: 'tw-text-text-weak tw-ml-0.5 hover:tw-bg-box-selected hover:!tw-text-box-selected-inverse hover:tw-rounded',
    active: 'tw-bg-box-selected tw-rounded !tw-text-box-selected-inverse',
};
export const buttonStyles = { root: { width: '32px', height: '32px' } };

export const IconStylingWrapper = ({ icon }: IconStylingWrapperProps) => (
    <span className="tw-p-2 tw-h-12 tw-justify-center tw-items-center tw-flex">{icon}</span>
);

export type ButtonGroupProps = {
    index: number;
    children?: ReactNode;
    // editorId?: string;
    // actions: EditorActions[];
};

export const ButtonGroupWrapper = ({ index, children }: ButtonGroupProps) => {
    // const editor = usePlateEditorRef(editorId);

    return (
        <div key={index} data-test-id={`toolbar-group-${index}`} className="tw-flex tw-items-center tw-h-12 tw-p-2">
            {children}
            {/* {actions.map((action) => (
                <div key={action}>{ToolbarButtonMap(editor, editorId)[action]}</div>
            ))} */}
        </div>
    );
};
