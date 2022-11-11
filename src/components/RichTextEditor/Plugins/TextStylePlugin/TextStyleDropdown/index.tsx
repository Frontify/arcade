/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ToolbarDropdown, usePlateEditorState } from '@udecode/plate';
import React, { CSSProperties, useCallback, useState } from 'react';
import { useRichTextEditorContext } from '../../../context/RichTextEditorContext';
import { defaultTextStyles } from '../TextStyles/defaultTextStyles';
import { TextStyles, textStyleTitle } from '../TextStyles';
import { DropdownItem } from './DropdownItem';
import { DropdownTrigger } from './DropdownTrigger';
import { TextStyleDropdownProps } from './types';

export const TextStyleDropdown = ({ editorId, textStyles = defaultTextStyles }: TextStyleDropdownProps) => {
    const [open, setOpen] = useState(false);
    const editor = usePlateEditorState(editorId);
    const context = useRichTextEditorContext();
    const designTokens = context.designTokens as Partial<Record<TextStyles, CSSProperties>>;

    const onToggle = useCallback(() => {
        setOpen(!open);
    }, [open, setOpen]);

    const selectableStyles = [...textStyles, TextStyles.ELEMENT_PARAGRAPH];

    return (
        <ToolbarDropdown
            control={<DropdownTrigger editor={editor} open={open} />}
            open={open}
            onOpen={onToggle}
            onClose={onToggle}
        >
            <div className="tw-divide-y tw-divide-line">
                {selectableStyles.map((style) => (
                    <DropdownItem editor={editor} type={style} key={style}>
                        <span style={designTokens[style]}>{textStyleTitle[style]}</span>
                    </DropdownItem>
                ))}
            </div>
        </ToolbarDropdown>
    );
};
