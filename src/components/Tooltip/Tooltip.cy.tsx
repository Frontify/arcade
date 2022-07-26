/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconExclamationMarkCircle, IconIcon, IconSize } from '@foundation/Icon';
import React from 'react';
import { BrightHeaderStyle, brightHeaderBackgroundColors } from './BrightHeader';
import { Tooltip, TooltipProps } from './Tooltip';

const TOOLTIP_TEXT = 'This is a tooltip';
const TOOLTIP_ID = '[data-test-id=tooltip]';
const TOOLTIP_LINK_ID = '[data-test-id=tooltip-link]';
const TOOLTIP_LINK_URL = 'https://www.frontify.com';
const TOOLTIP_HEADING_TEXT = "I'm a heading";
const GENERIC_ICON = <IconIcon />;
const GENERIC_ICON_CODE = 'svg[name=IconIcon16]';
const BRIGHT_HEADER_ID = '[data-test-id=bright-header]';

export const TooltipComponent = (args: TooltipProps) => {
    return (
        <div className="tw-w-screen tw-h-screen tw-flex tw-justify-center tw-items-center">
            <Tooltip
                {...args}
                triggerElement={
                    <div data-test-id="tooltip-trigger" className="tw-flex tw-justify-center tw-items-center">
                        <IconExclamationMarkCircle size={IconSize.Size16} filled />
                        <span>Tooltip trigger</span>
                    </div>
                }
            />
        </div>
    );
};

const initTooltip = (args: TooltipProps) => {
    cy.mount(<TooltipComponent {...args} />);
    cy.get('[data-test-id=tooltip-trigger]').as('Trigger');
    cy.get('@Trigger').trigger('mouseover');
};

describe('Tooltip Component', () => {
    it('should render a tooltip', () => {
        initTooltip({ content: TOOLTIP_TEXT });
        cy.get(TOOLTIP_ID).should('contain', TOOLTIP_TEXT);
        cy.get(BRIGHT_HEADER_ID).should('not.exist');
    });

    it('should render an icon next to the tooltip', () => {
        initTooltip({ content: TOOLTIP_TEXT, tooltipIcon: GENERIC_ICON });
        cy.get(GENERIC_ICON_CODE).should('be.visible');
    });

    it('should render a link', () => {
        initTooltip({ content: TOOLTIP_TEXT, linkUrl: TOOLTIP_LINK_URL });

        cy.get(TOOLTIP_LINK_ID).should('be.visible').and('have.attr', 'href').and('include', TOOLTIP_LINK_URL);
    });

    it('should render a link with custom text', () => {
        const linkLabel = 'Upgrade your plan.';
        initTooltip({ content: TOOLTIP_TEXT, linkUrl: TOOLTIP_LINK_URL, linkLabel });

        cy.get(TOOLTIP_LINK_ID).should('be.visible').and('contain', linkLabel);
    });

    it('should not render the heading icon if the heading is missing', () => {
        initTooltip({ content: TOOLTIP_TEXT, headingIcon: GENERIC_ICON });

        cy.get(TOOLTIP_ID).should('not.contain', GENERIC_ICON);
    });

    it('should render the heading and the heading icon when both are present', () => {
        initTooltip({ content: TOOLTIP_TEXT, heading: TOOLTIP_HEADING_TEXT, headingIcon: GENERIC_ICON });

        cy.get(TOOLTIP_ID).should('contain.text', TOOLTIP_HEADING_TEXT);
        cy.get('svg[name=IconIcon20]').should('be.visible');
    });

    for (const brightHeaderStyle of Object.values(BrightHeaderStyle)) {
        it(`should render a bright header (${brightHeaderStyle})`, () => {
            initTooltip({ content: TOOLTIP_TEXT, brightHeader: brightHeaderStyle });

            cy.get(BRIGHT_HEADER_ID).should('have.class', brightHeaderBackgroundColors[brightHeaderStyle]);
        });
    }

    it('should render one button', () => {
        initTooltip({ content: TOOLTIP_TEXT, buttons: [{ label: 'Primary', action: () => null }] });

        cy.get('button').should('have.length', 1);
    });

    it('should render two buttons', () => {
        initTooltip({
            content: TOOLTIP_TEXT,
            buttons: [
                { label: 'Primary', action: () => null },
                { label: 'Secondary', action: () => null },
            ],
        });

        cy.get('button').should('have.length', 2);
    });

    it('should focus the link and then the buttons using a keyboard', () => {
        initTooltip({
            content: TOOLTIP_ID,
            linkUrl: TOOLTIP_LINK_URL,
            buttons: [
                { label: 'Primary', action: () => null },
                { label: 'Secondary', action: () => null },
            ],
        });

        cy.get(TOOLTIP_LINK_ID).should('be.visible');

        cy.window().focus();
        cy.get('body').realPress('Tab');
        cy.get(TOOLTIP_LINK_ID).should('be.focused');

        cy.get(TOOLTIP_LINK_ID).realPress('Tab');
        cy.get('button').should('be.focused').and('contain', 'Primary');

        cy.get('button').realPress('Tab');
        cy.get('button').should('be.focused').and('contain', 'Secondary');
    });
});
