//TODO: accessibility for the rich text + toolbar
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FC, useRef, useState, KeyboardEvent, useEffect } from "react";
import {
    Editor,
    DraftHandleValue,
    EditorState,
    RichUtils,
    ContentState,
    getDefaultKeyBinding,
    SelectionState,
} from "draft-js";
import { usePopper } from "react-popper";
import { InlineToolbar, InlineToolbarChildrenProps } from "./components/InlineToolbar";
import { BoldButton } from "./components/BoldButton";
import { H3Button } from "./components/H3Button";
import { H4Button } from "./components/H4Button";
import { ItalicButton } from "./components/ItalicButton";
import { UnderlineButton } from "./components/UnderlineButton";
import { StrikethroughButton } from "./components/StrikethroughButton";
import { CodeButton } from "./components/CodeButton";
import { SubButton } from "./components/SubButton";
import { SupButton } from "./components/SupButton";
import { OrderedListButton } from "./components/OrderedListButton";
import { UnorderedListButton } from "./components/UnorderedListButton";
import { BlockquoteButton } from "./components/BlockquoteButton";
import { LinkButton } from "./components/LinkButton";
import { LinkChooser } from "./components/LinkChooser";
import { decorators } from "./decorators";
import { getSelectionEntity } from "./utilities/getSelectionEntity";
import useClickOutside from "@hooks/useClickOutside";
import "draft-js/dist/Draft.css";
import { merge } from "@utilities/merge";

export type RichTextEditorProps = {
    placeholder?: string;
    value?: ContentState;
    onTextChange?: (value: EditorState) => void;
    readonly?: boolean;
};

export enum RichTextEditorArea {
    Normal,
    LinkPreview,
    LinkChooser,
    ButtonPreview,
    ButtonChooser,
}

const styleMap = {
    CODE: {
        borderRadius: "var(--f-border-4x)",
        fontFamily: "var(--f-font-mono)",
        fontSize: "85%",
        background: "var(--f-black-05)",
        color: "var(--f-violet-90)",
        margin: "0",
        padding: "0 0.2em",
    },
    STRIKETHROUGH: {
        textDecoration: "line-through",
    },
};

export const RichTextEditor: FC<RichTextEditorProps> = ({
    value,
    placeholder,
    onTextChange,
    readonly = false,
}: RichTextEditorProps) => {
    const editor = useRef<Editor | null>(null);
    const selectionRectRef = useRef<HTMLDivElement | null>(null);
    const inlineToolbarRef = useRef<HTMLDivElement | null>(null);
    const inlineToolbarArrowRef = useRef<HTMLDivElement | null>(null);
    const [editorState, setEditorState] = useState<EditorState>(() => {
        return value ? EditorState.createWithContent(value, decorators) : EditorState.createEmpty(decorators);
    });
    const [editorArea, setEditorArea] = useState(RichTextEditorArea.Normal);
    const [showInlineToolbar, setShowInlineToolbar] = useState(false);
    const [savedSelection, setSavedSelection] = useState<SelectionState | null>(null);

    useEffect(() => {
        if (!readonly && showInlineToolbar) {
            setShowInlineToolbar(false);
        }
    }, [readonly]);

    const {
        styles,
        attributes,
        update: popperUpdate,
    } = usePopper(selectionRectRef.current, inlineToolbarRef.current, {
        placement: "top",
        modifiers: [
            { name: "arrow", options: { element: inlineToolbarArrowRef.current, padding: 10 } },
            {
                name: "offset",
                options: {
                    offset: [0, 8],
                },
            },
            {
                name: "flip",
                options: {
                    fallbackPlacements: ["bottom", "right"],
                },
            },
        ],
    });

    useClickOutside(inlineToolbarRef.current, () => {
        if (showInlineToolbar) {
            setSavedSelection(null);

            if (editorArea !== RichTextEditorArea.Normal) {
                setEditorArea(RichTextEditorArea.Normal);
            }
        }
    });

    const onEditorChange = async (value: EditorState): Promise<void> => {
        const currentContent = editorState.getCurrentContent();
        const newContent = value.getCurrentContent();

        // New character added to the editor
        if (currentContent !== newContent) {
            emitContentChanged();
        }

        const documentSelection = document.getSelection();
        const hasFocus = value.getSelection().getHasFocus();
        const hasSelectedText = hasFocus && !documentSelection?.isCollapsed;
        const selectionLinkEntity = getSelectionEntity(value, "LINK");
        const selectionButtonEntity = getSelectionEntity(value, "BUTTON");
        const isLinkOrButton = !!(selectionLinkEntity || selectionButtonEntity);
        const shouldShowInlineToolbar =
            !readonly && (hasSelectedText || !!savedSelection || (hasFocus && isLinkOrButton));

        if (selectionLinkEntity) {
            setEditorArea(RichTextEditorArea.LinkPreview);
        } else if (selectionButtonEntity) {
            setEditorArea(RichTextEditorArea.ButtonPreview);
        }

        if (shouldShowInlineToolbar) {
            const rangeRect = documentSelection?.getRangeAt(0).getBoundingClientRect();

            if (rangeRect && selectionRectRef.current) {
                selectionRectRef.current.style.width = `${rangeRect.width}px`;
                selectionRectRef.current.style.height = `${rangeRect.height}px`;
                selectionRectRef.current.style.top = `${rangeRect.y + window.scrollY}px`;
                selectionRectRef.current.style.right = `${rangeRect.x}px`;
                selectionRectRef.current.style.bottom = `${rangeRect.y}px`;
                selectionRectRef.current.style.left = `${rangeRect.x + window.scrollX}px`;
            }
        }

        popperUpdate && (await popperUpdate());
        setShowInlineToolbar(shouldShowInlineToolbar);

        setEditorState(value);
    };

    const keyBindingFn = (event: KeyboardEvent): string | null => {
        if (event.code === "Tab") {
            onEditorChange(RichUtils.onTab(event, editorState, 4));
            return "tab";
        }

        return getDefaultKeyBinding(event);
    };

    const handleKeyCommand = (command: string, editorState: EditorState): DraftHandleValue => {
        const newState = RichUtils.handleKeyCommand(editorState, command);

        if (newState) {
            onEditorChange(newState);
            return "handled";
        }

        return "not-handled";
    };

    const saveSelection = () => {
        const currentSelection = editorState.getSelection();
        setSavedSelection(currentSelection);
        window.getSelection()?.removeAllRanges();
    };

    const onShowLinkChooser = () => {
        saveSelection();
        setEditorArea(RichTextEditorArea.LinkChooser);
    };

    const emitContentChanged = () => {
        onTextChange && onTextChange(editorState);
    };

    const onLinkChooserConfirm = () => {
        setSavedSelection(null);
        setShowInlineToolbar(false);
        setEditorArea(RichTextEditorArea.Normal);
        emitContentChanged();
    };

    const onEditorBlur = () => {
        setSavedSelection(null);
        setShowInlineToolbar(false);
        setEditorArea(RichTextEditorArea.Normal);
        editor.current?.blur();
    };

    const onEditorClick = () => {
        !showInlineToolbar && editor.current?.focus();
    };

    return (
        <div onClick={onEditorClick}>
            <Editor
                ref={editor}
                customStyleMap={styleMap}
                editorState={editorState}
                placeholder={placeholder}
                onChange={onEditorChange}
                onBlur={onEditorBlur}
                handleKeyCommand={handleKeyCommand}
                keyBindingFn={keyBindingFn}
                readOnly={readonly}
            />

            <div ref={selectionRectRef} className="tw-absolute tw-pointer-events-none"></div>

            <div
                ref={inlineToolbarRef}
                className={merge([
                    "tw-popper-container tw-z-10 tw-drop-shadow-md",
                    !showInlineToolbar && "tw-invisible tw-pointer-events-none",
                ])}
                style={styles.popper}
                {...attributes.popper}
            >
                <InlineToolbar
                    onClick={emitContentChanged}
                    store={{
                        editorState,
                        setEditorState,
                        savedSelection,
                    }}
                >
                    {(externalProps: InlineToolbarChildrenProps) => (
                        <>
                            {editorArea === RichTextEditorArea.Normal && (
                                <>
                                    <H3Button {...externalProps} />
                                    <H4Button {...externalProps} />
                                    <BoldButton {...externalProps} />
                                    <ItalicButton {...externalProps} />
                                    <UnderlineButton {...externalProps} />
                                    <StrikethroughButton {...externalProps} />
                                    <CodeButton {...externalProps} />
                                    <SubButton {...externalProps} />
                                    <SupButton {...externalProps} />
                                    <OrderedListButton {...externalProps} />
                                    <UnorderedListButton {...externalProps} />
                                    <BlockquoteButton {...externalProps} />
                                    <LinkButton onClick={onShowLinkChooser}></LinkButton>
                                </>
                            )}

                            {editorArea === RichTextEditorArea.LinkChooser && (
                                <LinkChooser {...externalProps} onConfirm={onLinkChooserConfirm} />
                            )}

                            {editorArea === RichTextEditorArea.LinkPreview && <span>This is the link preview</span>}

                            {editorArea === RichTextEditorArea.ButtonPreview && <span>This is the button preview</span>}
                        </>
                    )}
                </InlineToolbar>

                <div
                    ref={inlineToolbarArrowRef}
                    style={styles.arrow}
                    className="tw-popper-arrow tw-absolute tw-w-2 tw-h-2 tw-pointer-events-none before:tw-absolute before:tw--z-1 before:tw-w-2 before:tw-h-2 before:tw-bg-white before:tw-rotate-45"
                ></div>
            </div>
        </div>
    );
};
