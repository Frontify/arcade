/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { mount } from '@cypress/react';
import { LoadingCircle, LoadingCircleSize, LoadingCircleStyle, sizeClasses, statusClasses } from './LoadingCircle';

const LOADING_CIRCLE_ID = '[data-test-id=loading-circle]';

describe('LoadingCircle Component', () => {
    it('should render correctly', () => {
        mount(<LoadingCircle />);

        cy.get(LOADING_CIRCLE_ID).should('exist');
    });

    for (const style of Object.values(LoadingCircleStyle)) {
        it(`should render in ${style} style`, () => {
            mount(<LoadingCircle style={LoadingCircleStyle[style]} />);

            cy.get(LOADING_CIRCLE_ID).should('have.class', statusClasses[LoadingCircleStyle[style]]);
        });
    }

    for (const size of Object.values(LoadingCircleSize)) {
        it(`should render in ${size} size`, () => {
            mount(<LoadingCircle size={LoadingCircleSize[size]} />);

            cy.get(LOADING_CIRCLE_ID).should('have.class', sizeClasses[LoadingCircleSize[size]]);
        });
    }
});
