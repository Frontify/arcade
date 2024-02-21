/* (c) Copyright Frontify Ltd., all rights reserved. */

import { CSSProperties } from 'react';
import { useMemoizedId } from '@hooks/useMemoizedId';
import { Plate, PlateContent, TEditableProps } from '@udecode/plate-core';
import { ContentReplacement } from './ContentReplacement';
import { RichTextEditorProvider } from './context/RichTextEditorContext';
import { Position } from './components/EditorPositioningWrapper';
import { forceToFocusNextElement } from './helpers';
import { useEditorState } from './hooks';
import { GAP_DEFAULT, KEY_ELEMENT_BREAK_AFTER_COLUMN, PluginComposer, defaultPlugins } from './Plugins';
import { PaddingSizes, TreeOfNodes } from './types';
import { parseRawValue } from './utils';
import { BlurObserver } from '@components/RichTextEditor/BlurObserver';

const PLACEHOLDER_STYLES: CSSProperties = {
    position: 'relative',
    height: '0',
};

export type RichTextEditorProps = {
    id?: string;
    placeholder?: string;
    value?: string;
    onTextChange?: (value: string) => void;
    onBlur?: (value: string) => void;
    readonly?: boolean;
    padding?: PaddingSizes;
    position?: Position;
    plugins?: PluginComposer;
    onValueChanged?: (value: TreeOfNodes | null) => void;
    border?: boolean;
    updateValueOnChange?: boolean; // Only set to true when you are sure that performance isn't an issue
    toolbarWidth?: number;
    hideExternalFloatingModals?: (editorId: string) => void;
};

export const RichTextEditor = ({
    id,
    value,
    placeholder = '',
    readonly = false,
    onTextChange,
    onBlur,
    padding = PaddingSizes.None,
    position = Position.FLOATING,
    plugins = defaultPlugins,
    updateValueOnChange = false,
    onValueChanged,
    border = true,
    toolbarWidth,
    hideExternalFloatingModals,
}: RichTextEditorProps) => {
    const editorId = useMemoizedId(id);
    const { localValue, onChange, memoizedValue, config } = useEditorState({
        editorId,
        initialValue: value,
        onTextChange,
        plugins,
        onValueChanged,
    });
    const breakAfterPlugin = plugins.plugins.find((plugin) => plugin.key === KEY_ELEMENT_BREAK_AFTER_COLUMN);
    const columns = breakAfterPlugin?.options?.columns ?? 1;
    const columnGap = breakAfterPlugin?.options?.gap ?? GAP_DEFAULT;
    const editableProps: TEditableProps = {
        placeholder,
        renderPlaceholder: ({ children, attributes }) => {
            const mergedAttributes = {
                ...attributes,
                style: {
                    ...attributes.style,
                    ...PLACEHOLDER_STYLES,
                },
            };
            return <span {...mergedAttributes}>{children}</span>;
        },
        readOnly: readonly,
        onBlur: () => onBlur && onBlur(JSON.stringify(localValue.current)),
        className: `${padding}`,
        style: {
            columns,
            columnGap,
            outline: 'none',
        },
        onKeyDown: (event) => {
            if (event.code === 'Tab') {
                forceToFocusNextElement(event, !event.shiftKey);
            }
        },
        scrollSelectionIntoView: () => {
            // We pass in an empty function here because we don't want the default scroll behaviour
        },
    };

    return (
        <RichTextEditorProvider
            value={{
                styles: config.styles(),
                position,
                border,
                editorId,
            }}
        >
            <Plate id={editorId} onChange={onChange} plugins={config.create()} initialValue={memoizedValue}>
                <PlateContent {...editableProps} />
                {!editableProps.readOnly && config.toolbar(toolbarWidth)}
                {config.inline()}
                {updateValueOnChange && <ContentReplacement value={parseRawValue({ editorId, raw: value, plugins })} />}
                {position === Position.FLOATING && (
                    <BlurObserver hideExternalFloatingModals={hideExternalFloatingModals} />
                )}
            </Plate>
        </RichTextEditorProvider>
    );
};
RichTextEditor.displayName = 'FondueRichTextEditor';
