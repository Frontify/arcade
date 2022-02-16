/* (c) Copyright Frontify Ltd., all rights reserved. */

import { mount } from "@cypress/react";
import IconDocument from "@foundation/Icon/Generated/IconDocument";
import { IconSize } from "@foundation/Icon/IconSize";
import React from "react";
import { BadgeStyle } from ".";
import { Badge, BadgeStatus } from "./Badge";

const BADGE_TEXT = "Frontify";
export const BADGE_ID = "[data-test-id=badge]";
const BADGE_STATUS_ID = "[data-test-id=badge-status]";
const BADGE_ICON_ID = "[data-test-id=badge-icon]";
const BADGE_DISMISS = "[data-test-id=badge-dismiss]";

describe("Badge component", () => {
    it("renders", () => {
        mount(<Badge>{BADGE_TEXT}</Badge>);

        cy.get(BADGE_ID).should("exist");
        cy.get(BADGE_STATUS_ID).should("not.exist");
        cy.get(BADGE_ICON_ID).should("not.exist");
        cy.get(BADGE_ID).contains(BADGE_TEXT);
    });

    it(`renders the status dot`, () => {
        mount(<Badge status={BadgeStatus.Positive}>{BADGE_TEXT}</Badge>);

        cy.get(BADGE_STATUS_ID).should("exist");
    });

    it("should render badge with icon and overwrite size", () => {
        mount(<Badge icon={<IconDocument size={IconSize.Size8} />}>{BADGE_TEXT}</Badge>);

        cy.get(BADGE_ICON_ID).should("exist").and("have.css", "width", "16px");
    });

    it("should be a small circle", () => {
        mount(<Badge status={BadgeStatus.Danger} size="s" />);

        cy.get(BADGE_ID).should("have.css", "width", "20px").and("have.css", "height", "20px");
    });

    it("should be a big circle", () => {
        mount(<Badge icon={<IconDocument />} />);

        cy.get(BADGE_ID).should("have.css", "width", "24px").and("have.css", "height", "24px");
    });

    it("should have disabled style", () => {
        mount(
            <Badge icon={<IconDocument />} style={BadgeStyle.Danger} disabled>
                {BADGE_TEXT}
            </Badge>,
        );

        cy.get(BADGE_ID).should("have.class", "tw-bg-box-disabled");
        cy.get(BADGE_ICON_ID).should("have.css", "opacity", "0.3");
    });

    it("should have emphasised style", () => {
        mount(
            <Badge icon={<IconDocument />} style={BadgeStyle.Positive} emphasis="Strong">
                {BADGE_TEXT}
            </Badge>,
        );

        cy.get(BADGE_ID).should("have.class", "tw-bg-box-positive-strong");
    });

    it("should have hover styles if onClick prop is a function", () => {
        const onClickStub = cy.stub();
        mount(
            <Badge icon={<IconDocument />} style={BadgeStyle.Danger} onClick={onClickStub}>
                {BADGE_TEXT}
            </Badge>,
        );

        cy.get(BADGE_ID).should("have.class", "hover:tw-bg-box-negative-hover");
        cy.get(BADGE_ID).click();
        cy.wrap(onClickStub).should("have.been.calledOnce");
    });

    it("should call onDismiss", () => {
        const onDismissStub = cy.stub();
        mount(
            <Badge icon={<IconDocument />} onDismiss={onDismissStub}>
                {BADGE_TEXT}
            </Badge>,
        );

        cy.get(BADGE_DISMISS).click();
        cy.wrap(onDismissStub).should("have.been.calledOnce");
    });

    it("should display custom status dot", () => {
        const DOT_COLOR = "rgb(1, 2, 3)";

        mount(
            <Badge icon={<IconDocument />} status={DOT_COLOR}>
                {BADGE_TEXT}
            </Badge>,
        );

        cy.get(BADGE_STATUS_ID).should("have.css", "backgroundColor", DOT_COLOR);
    });
});
