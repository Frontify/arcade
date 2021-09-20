/* (c) Copyright Frontify Ltd., all rights reserved. */

import { mount } from "@cypress/react";
import IconTextAlignCenter from "@elements/Icon/Generated/IconTextAlignCenter";
import IconTextAlignLeft from "@elements/Icon/Generated/IconTextAlignLeft";
import IconTextAlignRight from "@elements/Icon/Generated/IconTextAlignRight";
import { IconSize } from "@elements/Icon/IconSize";
import React, { FC, useState } from "react";
import { IconItem, Slider, TextOrNumberItem } from "./Slider";

const SLIDER_ID = "[data-test-id=slider]";
const ICON_ITEM_ID = "[data-test-id=slider-item-icon]";
const TEXT_ITEM_ID = "[data-test-id=slider-item-text]";
const NUMBER_ITEM_ID = "[data-test-id=slider-item-number]";
const INPUT_ID = "[data-test-id=slider-input]";

const TEXT_ITEMS = [
    { id: "a", value: "abc" },
    { id: "b", value: "def" },
    { id: "c", value: "ghi" },
];

const NUMBER_ITEMS = [
    { id: "a", value: 12 },
    { id: "b", value: 34 },
    { id: "c", value: 56 },
];

const ICON_ITEMS = [
    { id: "a", icon: <IconTextAlignLeft size={IconSize.Size16} />, ariaLabel: "Text Align Left" },
    { id: "b", icon: <IconTextAlignCenter size={IconSize.Size16} />, ariaLabel: "Text Align Center" },
    { id: "c", icon: <IconTextAlignRight size={IconSize.Size16} />, ariaLabel: "Text Align Right" },
];

type Props = {
    items: TextOrNumberItem[] | IconItem[];
    disabled?: boolean;
};

const Component: FC<Props> = ({ items, disabled = false }) => {
    const [active, setActive] = useState(items[0].id);
    return <Slider items={items} activeItemId={active} onChange={setActive} disabled={disabled} />;
};

describe("Slider Component", () => {
    it("renders text items", () => {
        mount(<Component items={TEXT_ITEMS} />);

        cy.get(SLIDER_ID).should("be.visible");
        cy.get(TEXT_ITEM_ID).should("have.length", 3);
        cy.get(INPUT_ID).first().should("be.checked");
        cy.get(INPUT_ID).first().should("have.attr", "aria-label", "abc");
        cy.get(TEXT_ITEM_ID).first().contains(TEXT_ITEMS[0].value);
    });
    it("renders number items", () => {
        mount(<Component items={NUMBER_ITEMS} />);

        cy.get(NUMBER_ITEM_ID).should("have.length", 3);
        cy.get(INPUT_ID).first().should("have.attr", "aria-label", "12");
        cy.get(NUMBER_ITEM_ID).first().contains(NUMBER_ITEMS[0].value);
    });
    it("renders icon items", () => {
        mount(<Component items={ICON_ITEMS} />);

        cy.get(ICON_ITEM_ID).should("have.length", 3);
        cy.get(INPUT_ID).first().should("be.checked");
        cy.get(INPUT_ID).first().should("have.attr", "aria-label", "Text Align Left");
    });
    it("changes active item on click", () => {
        mount(<Component items={TEXT_ITEMS} />);

        cy.get(TEXT_ITEM_ID).last().click();
        cy.get(INPUT_ID).last().should("be.checked");
        cy.get(INPUT_ID).first().should("not.be.checked");
    });
    it("changes active item via keyboard", () => {
        mount(<Component items={TEXT_ITEMS} />);

        cy.get("body").tab();
        cy.get(INPUT_ID).first().should("be.focused");
        cy.get("body").type("{rightarrow}{rightarrow}");
        cy.get(INPUT_ID).last().should("be.focused");
        cy.get(INPUT_ID).last().should("be.checked");
        cy.get("body").type("{rightarrow}");
        cy.get(INPUT_ID).first().should("be.checked");
    });
    it("renders disabled slider", () => {
        mount(<Component items={TEXT_ITEMS} disabled />);

        cy.get(SLIDER_ID).should("have.attr", "aria-disabled", "true");
        cy.get(INPUT_ID).first().should("be.be.disabled");
        cy.get(TEXT_ITEM_ID).last().click();
        cy.get(INPUT_ID).last().should("not.be.checked");
    });
});
