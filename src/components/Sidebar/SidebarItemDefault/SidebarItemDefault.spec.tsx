/* (c) Copyright Frontify Ltd., all rights reserved. */

import { mount } from "@cypress/react";
import SidebarItemDefault from "./SidebarItemDefault";
import css from "./SidebarItemDefault.module.css";

const SIDEBAR_ITEM_LABEL = "Frontify";

describe("Sidebar Item Default component", () => {
    it("renders", () => {
        mount(<SidebarItemDefault label={SIDEBAR_ITEM_LABEL} onClick={() => null} />);

        cy.get("[data-test-id=sidebar-item-default]").as("sidebar-item-default");

        cy.get("@sidebar-item-default").contains(SIDEBAR_ITEM_LABEL);
        cy.get("@sidebar-item-default").should("have.class", css.groupRow);
        cy.get("@sidebar-item-default").should("not.have.class", css.groupRowSelected);
    });

    it("has an unselected state", () => {
        mount(<SidebarItemDefault label={SIDEBAR_ITEM_LABEL} onClick={() => null} selected={false} />);

        cy.get("[data-test-id=sidebar-item-default]").as("sidebar-item-default");

        cy.get("@sidebar-item-default").contains(SIDEBAR_ITEM_LABEL);
        cy.get("@sidebar-item-default").should("have.class", css.groupRow);
        cy.get("@sidebar-item-default").should("not.have.class", css.groupRowSelected);
    });

    it("has a selected state", () => {
        mount(<SidebarItemDefault label={SIDEBAR_ITEM_LABEL} onClick={() => null} selected={true} />);

        cy.get("[data-test-id=sidebar-item-default]").as("sidebar-item-default");

        cy.get("@sidebar-item-default").contains(SIDEBAR_ITEM_LABEL);
        cy.get("@sidebar-item-default").should("have.class", css.groupRow);
        cy.get("@sidebar-item-default").should("have.class", css.groupRowSelected);
    });
});
