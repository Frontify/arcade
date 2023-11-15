/* (c) Copyright Frontify Ltd., all rights reserved. */

import { useRef, useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Popper } from './Popper';
import { Button } from '@components/Button';
import { POPPER_STORY_ARGS, PopperProps } from '@components/Popper/types';
import { Box } from '@components/Box';
import { ARROW_LIGHT_THEME } from '@utilities/overlayStyle';

export default {
    title: 'Utilities/Popper',
    component: Popper,
    tags: ['autodocs'],
    args: {
        placement: 'bottom-start',
        offset: [0, 8],
        flip: true,
        strategy: 'absolute',
        withArrow: false,
        arrowCustomColors: ARROW_LIGHT_THEME,
    },
    argTypes: {
        ...POPPER_STORY_ARGS,
        strategy: {
            options: ['absolute', 'fixed'],
            control: { type: 'radio' },
        },
        open: { control: { type: 'boolean' } },
    },
} as Meta<PopperProps>;

const Template: StoryFn<PopperProps> = (args) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement | null>(null);

    return (
        <div className="tw-flex tw-justify-center">
            <Button ref={anchorRef} onClick={() => setOpen(!open)}>
                Hello
            </Button>
            <Popper {...args} anchor={anchorRef} open={open}>
                <Box className="tw-bg-base tw-border tw-border-black tw-w-[400px]">
                    <p>Some content</p>
                </Box>
            </Popper>
        </div>
    );
};

export const Default = Template.bind({});
Default.args = {
    enablePortal: false,
};
export const WithPortal = Template.bind({});
WithPortal.args = {
    enablePortal: true,
};
