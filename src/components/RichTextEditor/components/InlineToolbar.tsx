import React, { ReactElement, ReactNode } from "react";
import { EditorState, SelectionState } from "draft-js";

export type InlineToolbarProps = {
    store: StoreItems;
    children?: (props: InlineToolbarChildrenProps) => ReactNode;
    onClick: () => void;
};

export type InlineToolbarChildrenProps = {
    editorState: EditorState;
    setEditorState: (editorState: EditorState) => void;
    savedSelection: SelectionState | null;
    onClick: () => void;
};

export type StoreItems = {
    editorState: EditorState;
    setEditorState: (state: EditorState) => void;
    savedSelection: SelectionState | null;
};

export const InlineToolbar = ({ store, children, onClick }: InlineToolbarProps): ReactElement<InlineToolbarProps> => {
    const childrenProps: InlineToolbarChildrenProps = {
        editorState: store.editorState,
        setEditorState: store.setEditorState,
        savedSelection: store.savedSelection,
        onClick,
    };

    return (
        <div className="tw-flex tw-items-center tw-px-3 tw-py-2 tw-bg-white tw-rounded tw-shadow-mid tw-gap-0.5">
            {children && children(childrenProps)}
        </div>
    );
};
