/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { DialogBody } from './DialogBody';
import { DIALOG_PADDING, DialogBodyProps } from '../../types/dialog';
import { Box } from '@components/Box';

export default {
    title: 'Experimental/DialogBody',
    component: DialogBody,
    tags: ['autodocs'],
    argTypes: {
        maxHeight: {
            type: 'number',
        },
        padding: {
            options: DIALOG_PADDING,
            control: { type: 'select' },
        },
    },
} as Meta<DialogBodyProps>;

const Template: StoryFn<DialogBodyProps> = (args) => (
    <DialogBody {...args}>
        <Box>
            <p>Hello</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at, beatae blanditiis cupiditate
                ducimus, excepturi magni mollitia nobis non nulla provident quibusdam veniam! Enim maxime nisi quo
                reprehenderit tenetur ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam
                aliquid, blanditiis, consectetur dignissimos doloremque dolorum esse eveniet explicabo facere laudantium
                nobis quaerat quas quidem quis suscipit temporibus veritatis voluptates? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aliquid aperiam consectetur corporis, cum dignissimos dolores est impedit
                magnam minus nemo nobis perspiciatis quibusdam quis recusandae similique tempora unde ut veniam!
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at, beatae blanditiis cupiditate
                ducimus, excepturi magni mollitia nobis non nulla provident quibusdam veniam! Enim maxime nisi quo
                reprehenderit tenetur ut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam
                aliquid, blanditiis, consectetur dignissimos doloremque dolorum esse eveniet explicabo facere laudantium
                nobis quaerat quas quidem quis suscipit temporibus veritatis voluptates? Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aliquid aperiam consectetur corporis, cum dignissimos dolores est impedit
                magnam minus nemo nobis perspiciatis quibusdam quis recusandae similique tempora unde ut veniam!
            </p>
        </Box>
    </DialogBody>
);

export const Default = Template.bind({});
export const WithMaxHeight = Template.bind({});
WithMaxHeight.args = {
    maxHeight: 200,
};
