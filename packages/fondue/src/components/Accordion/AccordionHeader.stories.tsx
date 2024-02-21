/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Meta, StoryFn } from '@storybook/react';
import { AccordionHeader as AccordionHeaderComponent } from './AccordionHeader';
import { AccordionHeaderProps } from './types';
import IconExclamationMarkTriangle from '@foundation/Icon/Generated/IconExclamationMarkTriangle';
import IconHome from '@foundation/Icon/Generated/IconHome';
import IconIcon from '@foundation/Icon/Generated/IconIcon';

const decorators = {
    IconNone: null,
    IconDefault: <IconHome />,
    IconCallout: <IconExclamationMarkTriangle />,
    IconIcons: <IconIcon />,
};

export default {
    title: 'Components/Accordion/Accordion Header',
    component: AccordionHeaderComponent,
    tags: ['autodocs'],
    argTypes: {
        decorator: {
            options: Object.keys(decorators),
            mapping: decorators,
            control: {
                type: 'select',
                labels: {
                    IconNone: 'None',
                    IconIcons: 'Icon',
                    IconDefault: 'Brand',
                    IconCallout: 'Callout',
                },
            },
        },
        disabled: { type: 'boolean' },
    },
    args: {
        isOpen: false,
        disabled: false,
        children: 'I am the Default Accordion Header',
    },
} as Meta<AccordionHeaderProps>;

export const AccordionHeader: StoryFn<AccordionHeaderProps> = (args) => <AccordionHeaderComponent {...args} />;
