/* (c) Copyright Frontify Ltd., all rights reserved. */

import { mount } from "@cypress/react";
import React, { FC, useState } from "react";
import { SelectListDropdown } from "./SelectListDropdown";

const DROPDOWN_TRIGGER_ID = "[data-test-id=select-list-dropdown-trigger]";
const SELECTED_LIST_ID = "[data-test-id=select-list-selected]";
const SELECT_LIST_ID = "[data-test-id=select-list]";

const ITEMS = {
    activeItemKeys: ["Short tag", "Tag 74"],
    items: [
        {
            name: "Checkbox label 1",
        },
        {
            name: "Short tag",
        },
        {
            name: "Checkbox label 2",
        },
        {
            name: "Checkbox label 3",
        },
        {
            name: "Tag 74",
        },
        {
            name: "This is a long tag",
        },
    ],
};

type Props = {
    items: SelectListItem[];
    activeItemKeys: string[];
};

const Component: FC<Props> = ({ activeItemKeys, items }) => {
    const [activeItems, setActiveItems] = useState(activeItemKeys);
    return (
        <SelectListDropdown
            items={items}
            activeItemKeys={activeItems}
            onSelectionChange={(keys) => setActiveItems(keys)}
        />
    );
};

describe("Dropdown Component", () => {
    it("renders with initial active items", () => {
        mount(<Component items={ITEMS.items} activeItemKeys={ITEMS.activeItemKeys} />);
        cy.get(SELECTED_LIST_ID).should("contain", "Short tag").and("contain", "Tag 74");
    });
    it("opens dropdown select list on click", () => {
        mount(<Component items={ITEMS.items} activeItemKeys={ITEMS.activeItemKeys} />);
        cy.get(DROPDOWN_TRIGGER_ID).click();
        cy.get(SELECT_LIST_ID).should("be.visible");
    });
});
