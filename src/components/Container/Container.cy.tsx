/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { Container } from './Container';

const CONTAINER_ID = '[data-test-id=fondue-container]';
const CONTENT_STRING = 'Test';
const CONTENT_STRING_LONG =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

describe('Container component', () => {
    it('renders with children', () => {
        cy.mount(
            <Container>
                <div>{CONTENT_STRING}</div>
            </Container>,
        );
        cy.get(CONTAINER_ID).should('exist');
        cy.get(CONTAINER_ID).should('contain', CONTENT_STRING);
    });

    it('renders with a minWidth', () => {
        cy.mount(
            <Container minWidth={'50px'}>
                <div></div>
            </Container>,
        );
        cy.get(CONTAINER_ID).should('have.css', 'min-width', '50px');
    });

    it('renders with a maxWidth', () => {
        cy.mount(
            <Container maxWidth={'50px'}>
                <div>{CONTENT_STRING_LONG}</div>
            </Container>,
        );
        cy.get(CONTAINER_ID).should('have.css', 'max-width', '50px');
    });

    it('renders with a minHeight', () => {
        cy.mount(
            <Container minHeight={'50px'}>
                <div></div>
            </Container>,
        );
        cy.get(CONTAINER_ID).should('have.css', 'min-height', '50px');
    });

    it('renders with a maxHeight', () => {
        cy.mount(
            <Container maxHeight={'50px'}>
                <div>{CONTENT_STRING_LONG}</div>
            </Container>,
        );
        cy.get(CONTAINER_ID).should('have.css', 'max-height', '50px');
    });

    it('renders with padding', () => {
        cy.mount(
            <Container padding={12}>
                <div>{CONTENT_STRING_LONG}</div>
            </Container>,
        );
        cy.get(CONTAINER_ID).should('have.css', 'padding', '12px');
    });

    it('renders with margin', () => {
        cy.mount(
            <Container margin={12}>
                <div>{CONTENT_STRING_LONG}</div>
            </Container>,
        );
        cy.get(CONTAINER_ID).should('have.css', 'margin', '12px');
    });

    it('renders with proper box color tokens', () => {
        cy.mount(
            <Container boxColorToken="box-neutral">
                <div>{CONTENT_STRING_LONG}</div>
            </Container>,
        );

        cy.get(CONTAINER_ID).should('have.class', 'tw-bg-box-neutral');
        cy.get(CONTAINER_ID).should('have.class', 'tw-text-box-neutral-inverse');
    });

    it('throws an error if wrong box color token prefix is provided', (done) => {
        cy.on('uncaught:exception', (error) => {
            expect(error.message).to.include('boxColorToken should be one of the following values');
            done();
            return false;
        });
        cy.mount(
            <Container boxColorToken="box-wrong-token">
                <div>{CONTENT_STRING_LONG}</div>
            </Container>,
        );
    });

    it('should render with custom data-test-id', () => {
        cy.mount(<Container data-test-id="custom-container-test-id">{CONTENT_STRING_LONG}</Container>);

        cy.get('[data-test-id=custom-container-test-id]').as('Container');
        cy.get('@Container').should('exist');
        cy.get('@Container').should('contain', CONTENT_STRING_LONG);
    });
});
