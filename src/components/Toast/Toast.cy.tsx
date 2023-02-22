/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconLinkBox24 } from '@foundation/Icon';
import React from 'react';
import { Toast } from './Toast';
import { ToastStyles, toastStylesBackgroundColorsMap } from './types';

const TOAST_ID = '[data-test-id=toast]';

describe('Toast Rendering', () => {
    it('should render toast', () => {
        cy.mount(<Toast isOpen={true} style={ToastStyles.Information} icon={<IconLinkBox24 />} />);
        cy.get(TOAST_ID).should('exist');
    });

    it('should not render toast', () => {
        cy.mount(<Toast isOpen={false} style={ToastStyles.Information} icon={<IconLinkBox24 />} />);
        cy.get(TOAST_ID).should('not.exist');
    });

    it('should render toast with correct children', () => {
        cy.mount(
            <Toast isOpen={true} style={ToastStyles.Information} icon={<IconLinkBox24 />}>
                Toast
            </Toast>,
        );
        cy.get(TOAST_ID).should('contain', 'Toast');
    });

    it('should render toast with correct icon', () => {
        cy.mount(<Toast isOpen={true} style={ToastStyles.Information} icon={<IconLinkBox24 />} />);
        cy.get(TOAST_ID)
            .find('svg')
            .should(($svg) => {
                expect($svg).to.have.attr('name', 'IconLinkBox24');
            });
    });

    describe('Background Color Rendering', () => {
        for (const style of Object.values(ToastStyles)) {
            it(`should render ${style} toast with correct background color`, () => {
                cy.mount(<Toast isOpen={true} style={style} icon={<IconLinkBox24 />} />);
                cy.get(TOAST_ID)
                    .children()
                    .first()
                    .children()
                    .first()
                    .should('have.class', toastStylesBackgroundColorsMap[style]);
            });
        }
    });
});
