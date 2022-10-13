/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ReactNode } from 'react';
import { ButtonGroupWidths } from '@components/RichTextEditor/types';
import { ButtonGroupsPerRow } from '../../Toolbar/types';

export type ToolbarWrapperProps = {
    children: ReactNode;
    editorWidth?: number;
    toolbarButtonGroups?: ButtonGroupWidths[] | ButtonGroupsPerRow;
};
