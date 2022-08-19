/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ButtonGroupWidths } from '@components/RichTextEditor/types';
import { ReactNode } from 'react';

export type WrapperProps = {
    children: ReactNode;
};

export type ToolbarWrapperProps = WrapperProps & {
    editorWidth: number | undefined;
    toolbarButtonGroups: ButtonGroupWidths[];
};
