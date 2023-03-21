/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { FC, useState } from 'react';
import { Switch, SwitchLabelStyle, SwitchProps } from './Switch';

const Component: FC<SwitchProps> = ({ on = false, ...props }) => {
    const [active, setActive] = useState(on);

    return (
        <Switch
            {...props}
            on={active}
            onChange={(event) => {
                setActive(!active);
                props.onChange && props.onChange(event);
            }}
        />
    );
};

const SWITCH_ID = '[data-test-id=switch]';
const SWITCH_CONTAINER_ID = '[data-test-id=switch-container]';
const INPUT_LABEL_ID = '[data-test-id=input-label-container]';
const SWITCH_LABEL_WRAPPER_ID = '[data-test-id=switch-label-wrapper';

const SWITCH_LABEL = 'Switch Label';

describe('Switch Component', () => {
    it('should render the value correctly', () => {
        cy.mount(<Component name="switch-test-value" />);

        cy.get(SWITCH_ID).as('Switch');
        cy.get('@Switch').invoke('attr', 'name').should('eq', 'switch-test-value');
        cy.get('@Switch').should('have.value', 'false');

        cy.get('@Switch').click();
        cy.get('@Switch').should('have.value', 'true');
    });

    it('should react on click', () => {
        const onChangeStub = cy.stub().as('onChangeStub');

        cy.mount(<Component name="switch-test-change" onChange={onChangeStub} />);
        cy.get('@onChangeStub').should('not.be.called');

        cy.get(SWITCH_ID).as('Switch');
        cy.get('@Switch').click();
        cy.get('@onChangeStub').should('be.calledOnce');
    });

    it('should do nothing if disabled', () => {
        cy.mount(<Component name="switch-test-disabled" disabled />);

        cy.get(SWITCH_ID).as('Switch');
        cy.get('@Switch').invoke('attr', 'name').should('eq', 'switch-test-disabled');
        cy.get('@Switch').invoke('attr', 'disabled').should('eq', 'disabled');
    });

    it('should have a label', () => {
        cy.mount(<Component label={SWITCH_LABEL} />);

        cy.get(SWITCH_CONTAINER_ID).find(INPUT_LABEL_ID).should('exist');
        cy.get(INPUT_LABEL_ID).contains(SWITCH_LABEL);
    });

    it('should render default labelStyle', () => {
        cy.mount(<Component label={SWITCH_LABEL} />);

        cy.get(SWITCH_LABEL_WRAPPER_ID).should('have.class', 'tw-text-text-weak');
        cy.get(SWITCH_LABEL_WRAPPER_ID).should('have.class', 'tw-font-medium');
    });

    it('should render heading labelStyle', () => {
        cy.mount(<Component label={SWITCH_LABEL} labelStyle={SwitchLabelStyle.Heading} />);

        cy.get(SWITCH_LABEL_WRAPPER_ID).should('have.class', 'tw-text-text');
        cy.get(SWITCH_LABEL_WRAPPER_ID).should('have.class', 'tw-font-bold');
    });

    it('should hug the switch and label', () => {
        cy.mount(<Component label={SWITCH_LABEL} hug={true} />);

        cy.get(SWITCH_CONTAINER_ID).should('have.css', 'display', 'inline-flex');
    });

    it('switch should have a type definition', () => {
        cy.mount(<Component label={SWITCH_LABEL} />);

        cy.get(SWITCH_ID).should('have.attr', 'type', 'button');
    });
});
