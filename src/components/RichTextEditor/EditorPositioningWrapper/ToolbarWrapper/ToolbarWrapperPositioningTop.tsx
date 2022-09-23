/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { ToolbarWrapperProps } from './types';

export const ToolbarWrapperPositioningTop = ({ children }: ToolbarWrapperProps) => {
    return (
        <div
            data-test-id="toolbar-top"
            className="tw-relative tw-min-h-12 tw-rounded-t tw-border-b tw-border-line tw-bg-base tw-divide-y tw-divide-line tw-flex tw-flex-wrap"
        >
            {children}
        </div>
    );
};
