/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { ButtonGroupProps, IconStylingWrapperProps } from './types';

export const buttonClassNames = {
    root: 'tw-text-text-weak tw-ml-0.5 hover:tw-bg-box-selected hover:!tw-text-box-selected-inverse hover:tw-rounded',
    active: 'tw-bg-box-selected tw-rounded !tw-text-box-selected-inverse',
};
export const buttonStyles = { root: { width: '32px', height: '32px' } };

export const IconStylingWrapper = ({ icon }: IconStylingWrapperProps) => (
    <span className="tw-p-2 tw-h-12 tw-justify-center tw-items-center tw-flex">{icon}</span>
);

export const ButtonGroupWrapper = ({ index, children }: ButtonGroupProps) => {
    return (
        <div key={index} data-test-id={`toolbar-group-${index}`} className="tw-flex tw-items-center tw-h-12 tw-p-2">
            {children}
        </div>
    );
};
