/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { merge } from "@utilities/merge";
import { ContentState, DraftHandleValue, Editor, EditorState, getDefaultKeyBinding, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import React, { FC, KeyboardEvent, useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import {
    BlockquoteButton,
    BoldButton,
    CodeButton,
    H3Button,
    H4Button,
    InlineToolbar,
    ItalicButton,
    OrderedListButton,
    StrikethroughButton,
    SubButton,
    SupButton,
    UnderlineButton,
    UnorderedListButton,
} from "./components";
import { decorators } from "./decorators";
import { styleMap } from "./styleMap";
import { getParentWithPositionRelative } from "./utilities/getParentWithPositionRelative";

export type RichTextEditorProps = {
    placeholder?: string;
    value?: ContentState;
    onTextChange?: (value: EditorState) => void;
    readonly?: boolean;
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
    const [showInlineToolbar, setShowInlineToolbar] = useState(false);

    useEffect(() => {
        setShowInlineToolbar(!readonly && showInlineToolbar);
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

    const onEditorChange = async (value: EditorState): Promise<void> => {
        const currentContent = editorState.getCurrentContent();
        const newContent = value.getCurrentContent();

        // Is there a change in the content of the Rich Text Editor
        if (currentContent !== newContent) {
            emitContentChanged();
        }

        const documentSelection = document.getSelection();
        const hasFocus = value.getSelection().getHasFocus();
        const hasSelectedText = hasFocus && !documentSelection?.isCollapsed;
        const shouldShowInlineToolbar = !readonly && hasSelectedText;

        if (shouldShowInlineToolbar) {
            //TODO: Make hook
            const rangeRect = documentSelection?.getRangeAt(0).getBoundingClientRect();
            const parentWithPositionRelative =
                selectionRectRef.current && getParentWithPositionRelative(selectionRectRef.current);

            if (rangeRect && selectionRectRef.current) {
                selectionRectRef.current.style.width = `${rangeRect.width}px`;
                selectionRectRef.current.style.height = `${rangeRect.height}px`;

                if (parentWithPositionRelative instanceof HTMLElement) {
                    const parentRect = parentWithPositionRelative.getBoundingClientRect();
                    selectionRectRef.current.style.top = `${rangeRect.y + window.scrollY - parentRect.top}px`;
                    selectionRectRef.current.style.right = `${rangeRect.x - parentRect.left}px`;
                    selectionRectRef.current.style.bottom = `${rangeRect.y - parentRect.top}px`;
                    selectionRectRef.current.style.left = `${rangeRect.x + window.scrollX - parentRect.left}px`;
                } else {
                    selectionRectRef.current.style.top = `${rangeRect.y + window.scrollY}px`;
                    selectionRectRef.current.style.right = `${rangeRect.x}px`;
                    selectionRectRef.current.style.bottom = `${rangeRect.y}px`;
                    selectionRectRef.current.style.left = `${rangeRect.x + window.scrollX}px`;
                }
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

    const emitContentChanged = () => {
        onTextChange && onTextChange(editorState);
    };

    const onEditorBlur = () => {
        setShowInlineToolbar(false);
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

            <div
                ref={selectionRectRef}
                className="tw-absolute tw-pointer-events-none tw-bg-violet-60 tw-opacity-50"
            ></div>

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
                    }}
                >
                    {(externalProps) => (
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
