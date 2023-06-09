/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { CSSProperties, createContext, useContext } from 'react';
import { Position, getEditorWrapperClassNames } from '../EditorPositioningWrapper';
import { EditorResizeContextProvider } from './EditorResizeContext';
import { defaultStyles } from '../utils';

export type RichTextEditorContextProps = {
    styles: Record<string, CSSProperties>;
    position: Position;
    wrapperClassNames: string;
};

export const RichTextEditorContext = createContext<RichTextEditorContextProps>({
    styles: defaultStyles,
    position: Position.FLOATING,
    wrapperClassNames: '',
});
export const useRichTextEditorContext = () => useContext(RichTextEditorContext);

type RichTextEditorProviderProps = {
    children: React.ReactNode;
    value: {
        styles: Record<string, CSSProperties>;
        position: Position;
        border: boolean;
    };
};

export const RichTextEditorProvider = ({ children, value }: RichTextEditorProviderProps) => {
    const { styles, position, border } = value;

    const state = {
        styles,
        position,
        wrapperClassNames: getEditorWrapperClassNames(position, border),
    };

    return (
        <RichTextEditorContext.Provider value={state}>
            <EditorResizeContextProvider>{children}</EditorResizeContextProvider>
        </RichTextEditorContext.Provider>
    );
};
