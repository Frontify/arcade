/* (c) Copyright Frontify Ltd., all rights reserved. */

import { BalloonToolbar, usePlateEditorRef } from '@udecode/plate';
import React, { FC, useEffect, useState } from 'react';
import { toolbarComponents } from './toolbarComponents';
import { ButtonGroupProps, ToolbarCustomProps } from './types';
import { defaultActions } from './utils/actions';
import { calculateToolbarWidth, getButtonGroupWidths, getButtonGroupWidthsPerRow } from './utils/toolbarCalc';

const ButtonGroup: FC<ButtonGroupProps> = ({ index, actions, editorId, textStyles }) => {
    const editor = usePlateEditorRef(editorId);

    return (
        <div key={index} data-test-id={`toolbar-group-${index}`} className="tw-flex tw-items-center tw-h-12 tw-p-2">
            {actions.map((action) => (
                <React.Fragment key={action}>{toolbarComponents(editor, editorId, textStyles)[action]}</React.Fragment>
            ))}
        </div>
    );
};

const OFFSET_IN_PX = 12;

export const Toolbar: FC<ToolbarCustomProps> = ({ editorId, textStyles, actions = [], editorWidth }) => {
    const toolbarActions = actions.length > 0 ? actions : defaultActions;
    const buttonGroupWidths = getButtonGroupWidths(toolbarActions);

    const [width, setWidth] = useState<number | null>(null);
    const toolbarButtonGroups = getButtonGroupWidthsPerRow(editorWidth || 0, buttonGroupWidths);

    useEffect(() => {
        const toolbarWidthSum = calculateToolbarWidth(toolbarButtonGroups);
        if (toolbarWidthSum > 0) {
            setWidth(toolbarWidthSum + toolbarButtonGroups.length + OFFSET_IN_PX);
        }
    }, [editorWidth]);

    return (
        <BalloonToolbar
            popperOptions={{
                modifiers: [
                    { name: 'offset', options: { offset: [0, 2] } },
                    { name: 'flip', options: { fallbackPlacements: ['bottom', 'top'] } },
                    {
                        name: 'hideUntilComputed',
                        enabled: true,
                        phase: 'beforeMain',
                        fn: ({ state }) => {
                            state.styles.popper = {
                                ...state.styles.popper,
                                visibility: 'hidden',
                                width: `${width}px`,
                            };
                        },
                    },
                    {
                        name: 'showWhenComputed',
                        enabled: true,
                        phase: 'beforeWrite',
                        fn: ({ state }) => {
                            if (width) {
                                state.styles.popper.visibility = 'visible';
                            }
                        },
                        requires: ['hideUntilComputed'],
                    },
                ],
            }}
            styles={{ root: { border: 'none' } }}
        >
            <div
                data-test-id="toolbar"
                className="tw-rounded tw-min-h-12 tw-border tw-border-line tw-shadow-lg tw-bg-base tw-divide-y tw-divide-line tw-flex tw-flex-wrap"
            >
                {toolbarButtonGroups.map((row, index) => (
                    <div key={index} className="tw-divide-x tw-divide-line tw-flex tw-w-full tw-flex-wrap">
                        {row.map(({ actions, index }) => (
                            <ButtonGroup
                                key={index}
                                actions={actions}
                                index={index}
                                textStyles={textStyles}
                                editorId={editorId}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </BalloonToolbar>
    );
};
