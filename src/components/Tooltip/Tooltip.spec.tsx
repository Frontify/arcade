/* (c) Copyright Frontify Ltd., all rights reserved. */

import { mount } from "@cypress/react";
import React from "react";
import { Tooltip } from "./Tooltip";
import IconIcons from "@elements/Icon/Generated/IconIcons";
import { BrightHeaderStyle } from "./BrightHeader";

const TOOLTIP_TEXT = "This is a tooltip";
const TOOLTIP_ID = "[data-test-id=tooltip]";
const TOOLTIP_LINK_ID = "[data-test-id=tooltip-link]";
const TOOLTIP_LINK_URL = "https://www.frontify.com";
const TOOLTIP_HEADING_TEXT = "I'm a heading";
const GENERIC_ICON = <IconIcons />;
const BRIGHT_HEADER_ID = "[data-test-id=bright-header]";

describe("Tooltip Component", () => {
    it("should render a tooltip", () => {
        mount(<Tooltip tooltip={TOOLTIP_TEXT} />);

        cy.get(TOOLTIP_ID).should("contain", TOOLTIP_TEXT);
    });

    it("should render an icon next to the tooltip", () => {
        mount(<Tooltip tooltip={TOOLTIP_TEXT} tooltipIcon={GENERIC_ICON} />);

        cy.get("svg[name=IconIcons]").should("be.visible");
    });

    it("should render a link", () => {
        mount(<Tooltip tooltip={TOOLTIP_TEXT} linkUrl={TOOLTIP_LINK_URL} />);

        cy.get(TOOLTIP_LINK_ID).should("be.visible").and("have.attr", "href").and("include", TOOLTIP_LINK_URL);
    });

    it("should render a link with custom text", () => {
        const linkLabel = "Upgrade your plan.";

        mount(<Tooltip tooltip={TOOLTIP_TEXT} linkUrl={TOOLTIP_LINK_URL} linkLabel={linkLabel} />);

        cy.get(TOOLTIP_LINK_ID).should("be.visible").and("contain", linkLabel);
    });

    it("should not render the heading icon if the heading is missing", () => {
        mount(<Tooltip tooltip={TOOLTIP_TEXT} headingIcon={GENERIC_ICON} />);

        cy.get(TOOLTIP_ID).should("not.contain", GENERIC_ICON);
    });

    it("should render the heading and the heading icon when both are present", () => {
        mount(<Tooltip tooltip={TOOLTIP_TEXT} heading={TOOLTIP_HEADING_TEXT} headingIcon={GENERIC_ICON} />);

        cy.get(TOOLTIP_ID).should("contain.text", TOOLTIP_HEADING_TEXT);
        cy.get("svg[name=IconIcons]").should("be.visible");
    });

    it("should not render a bright header by default", () => {
        mount(<Tooltip tooltip={TOOLTIP_TEXT} />);

        cy.get(BRIGHT_HEADER_ID).should("not.exist");
    });

    Object.values(BrightHeaderStyle).forEach((brightHeaderStyle) => {
        it(`should render a bright header (${brightHeaderStyle})`, () => {
            mount(<Tooltip tooltip={TOOLTIP_TEXT} brightHeader={brightHeaderStyle} />);

            cy.get(BRIGHT_HEADER_ID).should("exist");
        });
    });

    it("should not render buttons by default", () => {
        mount(<Tooltip tooltip={TOOLTIP_TEXT} />);

        cy.get("button").should("not.exist");
    });

    it("should render one button", () => {
        mount(<Tooltip tooltip={TOOLTIP_TEXT} buttons={[{ label: "Primary", action: () => null }]} />);

        cy.get("button").should("exist");
    });

    it("should render two buttons", () => {
        mount(
            <Tooltip
                tooltip={TOOLTIP_TEXT}
                buttons={[
                    { label: "Primary", action: () => null },
                    { label: "Secondary", action: () => null },
                ]}
            />,
        );

        cy.get("button").should("exist");
    });

    it("should focus the link using a keyboard", () => {
        mount(<Tooltip tooltip={TOOLTIP_ID} linkUrl={TOOLTIP_LINK_URL} />);

        cy.get(TOOLTIP_LINK_ID).should("be.visible");

        cy.get("body").tab();
        cy.get(TOOLTIP_LINK_ID).should("be.focused");
    });

    it("should focus the buttons using a keyboard", () => {
        mount(
            <Tooltip
                tooltip={TOOLTIP_ID}
                buttons={[
                    { label: "Primary", action: () => null },
                    { label: "Secondary", action: () => null },
                ]}
            />,
        );

        cy.get("body").tab();
        cy.get("button").should("be.focused").and("contain", "Primary");

        cy.get("button").tab();
        cy.get("button").should("be.focused").and("contain", "Secondary");
    });

    it("should focus the link and then the buttons using a keyboard", () => {
        mount(
            <Tooltip
                tooltip={TOOLTIP_ID}
                linkUrl={TOOLTIP_LINK_URL}
                buttons={[
                    { label: "Primary", action: () => null },
                    { label: "Secondary", action: () => null },
                ]}
            />,
        );

        cy.get(TOOLTIP_LINK_ID).should("be.visible");

        cy.get("body").tab();
        cy.get(TOOLTIP_LINK_ID).should("be.focused");

        cy.get(TOOLTIP_LINK_ID).tab();
        cy.get("button").should("be.focused").and("contain", "Primary");

        cy.get("button").tab();
        cy.get("button").should("be.focused").and("contain", "Secondary");
    });
});
