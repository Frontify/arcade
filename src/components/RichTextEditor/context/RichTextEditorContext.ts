import { createContext, useContext } from 'react';
import { DesignTokens } from '../types';
import { defaultDesignTokens } from '../utils/defaultDesignTokens';
import { EditorPositioningWrapper, Position } from '../EditorPositioningWrapper';

type RichTextEditorContextProps = {
    designTokens: DesignTokens;
    PositioningWrapper: typeof EditorPositioningWrapper[Position.FLOATING];
};

export const RichTextEditorContext = createContext<RichTextEditorContextProps>({
    designTokens: defaultDesignTokens,
    PositioningWrapper: EditorPositioningWrapper[Position.FLOATING],
});

export const useRichTextEditorContext = () => {
    const context = useContext(RichTextEditorContext);
    if (!context) {
        throw new Error('useRichTextEditorContext must be used within a RichTextEditorContext');
    }
    return context;
};
