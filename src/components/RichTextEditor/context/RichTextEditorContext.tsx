/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { useState } from 'react';
import { createContext, useContext } from 'react';
import { DesignTokens } from '../types';
import { defaultDesignTokens } from '../utils/defaultDesignTokens';
import { EditorPositioningWrapper, Position } from '../EditorPositioningWrapper';
import { EditorResizeContextProvider } from './EditorResizeContext';
import { EditorPositioningWrapperChildProps } from '../EditorPositioningWrapper/types';

type RichTextEditorContextProps = {
    designTokens: DesignTokens;
    PositioningWrapper: EditorPositioningWrapperChildProps;
};

const RichTextEditorContext = createContext<RichTextEditorContextProps>({
    designTokens: defaultDesignTokens,
    PositioningWrapper: EditorPositioningWrapper[Position.FLOATING],
});
export const useRichTextEditorContext = () => useContext(RichTextEditorContext);

type RichTextEditorProviderProps = {
    children: React.ReactNode;
    value: {
        designTokens: DesignTokens;
        position: Position;
    };
};

export const RichTextEditorProvider = ({ children, value }: RichTextEditorProviderProps) => {
    const { designTokens, position } = value;
    const PositioningWrapper = EditorPositioningWrapper[position ?? Position.FLOATING];

    const [state] = useState({
        designTokens: designTokens ?? defaultDesignTokens,
        PositioningWrapper,
    });

    return (
        <RichTextEditorContext.Provider value={state}>
            <EditorResizeContextProvider PositioningWrapper={PositioningWrapper}>
                {children}
            </EditorResizeContextProvider>
        </RichTextEditorContext.Provider>
    );
};
