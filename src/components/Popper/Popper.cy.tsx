/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { useState } from 'react';
import { Popper } from './Popper';
import { Button } from '@components/Button';
import { PopperPlacement, PopperProps } from '@components/Popper/types';

const popper_SELECTOR = '[data-test-id=fondue-popper]';

const PopperComponent = ({ placement, offset, flip }: PopperProps) => {
    const [open, setOpen] = useState(false);

    return (
        <Popper open={open} placement={placement} offset={offset} flip={flip}>
            <Popper.Reference>
                <Button onClick={() => setOpen(!open)}>Hello</Button>
            </Popper.Reference>
            <Popper.Content>
                <div className="tw-border tw-border-black">
                    <p>Some content</p>
                </div>
            </Popper.Content>
        </Popper>
    );
};

describe('Popper Component', () => {
    it('should render', () => {
        cy.mount(<PopperComponent placement={PopperPlacement.Bottom} flip={false} offset={[0, 10]} />);

        cy.get(popper_SELECTOR).should('exist');
    });
});
