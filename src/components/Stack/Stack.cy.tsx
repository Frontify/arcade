/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { Stack } from './Stack';

const STACK_ID = '[data-test-id=fondue-stack]';
const CONTENT_STRING = 'Test content';
const CONTENT_STRING_LONG =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

describe('Stack component', () => {
    it('renders with children', () => {
        cy.mount(
            <Stack>
                <div>{CONTENT_STRING}</div>
            </Stack>,
        );
        cy.get(STACK_ID).should('exist');
        cy.get(STACK_ID).should('contain', CONTENT_STRING);
    });

    it('renders with padding', () => {
        cy.mount(
            <Stack padding={12}>
                <div>{CONTENT_STRING_LONG}</div>
            </Stack>,
        );
        cy.get(STACK_ID).should('have.css', 'padding', '12px');
    });

    it('renders with margin', () => {
        cy.mount(
            <Stack margin={12}>
                <div>{CONTENT_STRING_LONG}</div>
            </Stack>,
        );
        cy.get(STACK_ID).should('have.css', 'margin', '12px');
    });

    it('renders with specified spacing', () => {
        cy.mount(
            <Stack spacing={4}>
                <div>{CONTENT_STRING_LONG}</div>
            </Stack>,
        );
        cy.get(STACK_ID).should('have.css', 'gap', '4px');
    });

    it('renders with "row" direction', () => {
        cy.mount(
            <Stack direction={'row'}>
                <div>{CONTENT_STRING_LONG}</div>
            </Stack>,
        );
        cy.get(STACK_ID).should('have.class', 'tw-flex-row');
    });

    it('renders with "column" direction', () => {
        cy.mount(
            <Stack direction={'column'}>
                <div>{CONTENT_STRING_LONG}</div>
            </Stack>,
        );
        cy.get(STACK_ID).should('have.class', 'tw-flex-col');
    });

    it('renders with proper bg', () => {
        cy.mount(
            <Stack bg="tw-bg-box-neutral">
                <div>{CONTENT_STRING_LONG}</div>
            </Stack>,
        );

        cy.get(STACK_ID).should('have.class', 'tw-bg-box-neutral');
    });

    it('renders with proper color', () => {
        cy.mount(
            <Stack color="tw-text-box-neutral-inverse">
                <div>{CONTENT_STRING_LONG}</div>
            </Stack>,
        );

        cy.get(STACK_ID).should('have.class', 'tw-text-box-neutral-inverse');
    });

    it('renders as span tag', () => {
        cy.mount(<Stack as="span">{CONTENT_STRING_LONG}</Stack>);

        cy.get(STACK_ID).first().should('have.prop', 'tagName', 'SPAN');
    });

    it('should render with custom data-test-id', () => {
        cy.mount(<Stack data-test-id="custom-container-test-id">{CONTENT_STRING_LONG}</Stack>);

        cy.get('[data-test-id=custom-container-test-id]').as('Stack');
        cy.get('@Stack').should('exist');
        cy.get('@Stack').should('contain', CONTENT_STRING_LONG);
    });
});
