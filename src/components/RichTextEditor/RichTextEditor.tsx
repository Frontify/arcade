import { debounce } from "@utilities/debounce";
import { useMachine } from "@xstate/react";
import { convertFromRaw, convertToRaw, Editor, EditorState, RawDraftContentState } from "draft-js";
import "draft-js/dist/Draft.css";
import React, { FC, useMemo, useRef } from "react";
import { DoneInvokeEvent, Interpreter } from "xstate";
import { decorators } from "./decorators";
import { editorMachine, States } from "./state/editor/machine";
import { ToolbarContext, ToolbarStateData } from "./state/toolbar/machine";
import { styleMap } from "./styleMap";
import { Toolbar } from "./Toolbar";

export type RichTextEditorProps = {
    placeholder?: string;
    value?: RawDraftContentState;
    onTextChange?: (value: RawDraftContentState) => void;
    readonly?: boolean;
};

export const RichTextEditor: FC<RichTextEditorProps> = ({
    value,
    placeholder,
    onTextChange,
    readonly = false,
}: RichTextEditorProps) => {
    const editor = useRef<Editor | null>(null);
    const [{ context, matches, children }, send] = useMachine(
        editorMachine.withContext({
            locked: readonly,
            editorState: value
                ? EditorState.createWithContent(convertFromRaw(value), decorators)
                : EditorState.createEmpty(decorators),
        }),
    );

    return (
        <div onFocus={() => send("FOCUSED")}>
            {useMemo(
                () => (
                    <Editor
                        ref={editor}
                        customStyleMap={styleMap}
                        editorState={context.editorState}
                        placeholder={placeholder}
                        onChange={debounce((editorState) => {
                            send("CHANGED", { data: { editorState } });
                            onTextChange && onTextChange(convertToRaw(context.editorState.getCurrentContent()));
                        }, 50)}
                        onBlur={() => editor.current?.blur()}
                        readOnly={readonly}
                    />
                ),
                [context.editorState],
            )}
            {matches(States.Styling) && (
                <Toolbar
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    machineRef={children.toolbar as Interpreter<ToolbarContext, any, DoneInvokeEvent<ToolbarStateData>>}
                />
            )}
        </div>
    );
};
