/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { ReactNode } from 'react';
import { AnyObject, PlatePlugin, createPlateUI, createPlugins, usePlateEditorRef } from '@udecode/plate';
import { PluginComposer } from './PluginComposer';
import { Toolbar } from '../Toolbar';

type GeneratePluginsReturn = {
    create: () => PlatePlugin<AnyObject>[];
    toolbar: (editorWidth: number | undefined) => ReactNode;
    inline: () => ReactNode;
};

export const GeneratePlugins = (editorId: string, pluginComposer: PluginComposer): GeneratePluginsReturn => {
    const editor = usePlateEditorRef(editorId)!;

    return {
        create: () =>
            createPlugins(pluginComposer.plugins, {
                components: createPlateUI(pluginComposer.elements),
            }),
        toolbar: (editorWidth: number | undefined) =>
            pluginComposer.hasToolbar ? (
                <Toolbar
                    editorWidth={editorWidth}
                    buttons={pluginComposer.buttons}
                    editor={editor}
                    editorId={editorId}
                />
            ) : (
                <></>
            ),
        inline: () => (
            <>
                {pluginComposer.inline.map((Inline, index) => (
                    <Inline key={index} />
                ))}
            </>
        ),
    };
};
