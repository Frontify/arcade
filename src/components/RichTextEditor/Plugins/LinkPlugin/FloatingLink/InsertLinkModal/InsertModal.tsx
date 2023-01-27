/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { FC } from 'react';
import { IconCheckMark } from '@foundation/Icon';
import { Button } from '@components/Button/Button';
import { Checkbox } from '@components/Checkbox';
import { FormControl } from '@components/FormControl';
import { TextInput } from '@components/TextInput';
import { ButtonEmphasis, ButtonSize, ButtonStyle } from '@components/Button';
import { InsertModalStateProps } from './types';

type Props = {
    state: InsertModalStateProps;
    onTextChange: (value: string) => void;
    onUrlChange: (value: string) => void;
    onToggleTab: (checked: boolean) => void;
    onCancel: () => void;
    onSave: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | KeyboardEvent | undefined) => void;
    hasValues: boolean;
    isValidUrlOrEmpty: () => boolean | undefined;
    testId?: string;
    children?: React.ReactNode;
};

export const InsertModal: FC<Props> = ({
    state,
    onTextChange,
    onUrlChange,
    onToggleTab,
    onCancel,
    onSave,
    isValidUrlOrEmpty,
    hasValues,
    testId,
    children,
}) => (
    <div data-test-id={testId} className="tw-bg-white tw-rounded tw-shadow tw-p-7 tw-min-w-[400px] tw-overflow-y-auto">
        <FormControl
            label={{
                children: 'Text',
                htmlFor: 'linkText',
                required: true,
            }}
        >
            <TextInput id="linkText" value={state.text} placeholder="Link Text" onChange={onTextChange} />
        </FormControl>

        {children}

        <div className="tw-pt-5">
            <FormControl
                label={{
                    children: 'URL',
                    htmlFor: 'url',
                    required: true,
                }}
            >
                <TextInput id="url" value={state.url} placeholder="https://example.com" onChange={onUrlChange} />
            </FormControl>
            {!isValidUrlOrEmpty() && <div className="tw-text-red-65 tw-mt-3">Please enter a valid URL.</div>}
        </div>
        <div className="tw-pt-5">
            <Checkbox value="new-tab" label="Open in new tab" state={state.newTab} onChange={onToggleTab} />
        </div>
        <div className="tw-mt-3">
            <div className={'tw-pt-5 tw-flex tw-gap-x-3 tw-justify-end tw-border-t tw-border-t-black-10'}>
                <Button
                    onClick={onCancel}
                    size={ButtonSize.Medium}
                    style={ButtonStyle.Default}
                    emphasis={ButtonEmphasis.Default}
                >
                    Cancel
                </Button>
                <Button
                    onClick={onSave}
                    size={ButtonSize.Medium}
                    icon={<IconCheckMark />}
                    disabled={!isValidUrlOrEmpty() || !hasValues}
                >
                    Save
                </Button>
            </div>
        </div>
    </div>
);
