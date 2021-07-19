/* (c) Copyright Frontify Ltd., all rights reserved. */

import { mount } from "@cypress/react";
import { Theme } from "@utilities/enum";
import InputLabel from "./InputLabel";
import css from "./InputLabel.module.css";

const LABEL_TEXT = "This is a fancy label.";

const INPUT_LABEL_ID = "[data-test-id=input-label]";
const INPUT_LABEL_REQUIRED_ID = "[data-test-id=input-label-required]";
const TOOLTIP_ICON_ID = "[data-test-id=input-label-tooltip-icon]";
const TOOLTIP_ID = "[data-test-id=input-label-tooltip]";

describe("InputLabel Component", () => {
    it("should render label text correctly", () => {
        mount(<InputLabel htmlFor="input">{LABEL_TEXT}</InputLabel>);
        cy.get(INPUT_LABEL_ID).should("contain", LABEL_TEXT);
    });

    it("should render a disabled label", () => {
        mount(
            <InputLabel htmlFor="input" disabled>
                {LABEL_TEXT}
            </InputLabel>,
        );
        cy.get(INPUT_LABEL_ID).should("have.class", css.disabled);
    });

    it("should render a dark theme label", () => {
        mount(
            <InputLabel htmlFor="input" theme={Theme.Dark}>
                {LABEL_TEXT}
            </InputLabel>,
        );
        cy.get(INPUT_LABEL_ID).should("have.class", css.themeDark);
    });

    it("should render a required label", () => {
        mount(
            <InputLabel htmlFor="input" required>
                {LABEL_TEXT}
            </InputLabel>,
        );
        cy.get(INPUT_LABEL_REQUIRED_ID).should("be.visible").and("contain", "*");
    });

    it("should render a label with a tooltip", () => {
        const TOOLTIP_TEXT = "This is a tooltip";
        mount(
            <InputLabel htmlFor="input" tooltip={TOOLTIP_TEXT}>
                {LABEL_TEXT}
            </InputLabel>,
        );

        cy.get(TOOLTIP_ICON_ID).should("be.visible");
        cy.get(TOOLTIP_ICON_ID).trigger("mouseover");

        cy.get(TOOLTIP_ID).should("contain", TOOLTIP_TEXT);
    });
});
