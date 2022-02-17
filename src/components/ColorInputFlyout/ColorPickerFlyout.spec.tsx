/* (c) Copyright Frontify Ltd., all rights reserved. */

import { mount } from "@cypress/react";
import React, { FC, useState } from "react";
import { Color, Palette } from "../../types/colors";
import { EXAMPLE_PALETTES } from "../ColorPicker/example-palettes";
import { ColorPickerFlyout } from "./ColorPickerFlyout";

const TRIGGER_ID = "[data-test-id=trigger]";
const TEST_COLOR = { r: 0, g: 133, b: 255 };
const TEST_COLOR_HEX = "#0085ff";
const BUTTON_ID = "[data-test-id=button]";
const BRAND_COLOR_ID = "[data-test-id=brand-color]";
const COLOR_PREVIEW_ID = "[data-test-id=color-preview]";
const MENU_ITEM_DECORATOR_ID = "[data-test-id=menu-item-decorator]";

type Props = {
    palettes?: Palette[];
    currentColor?: Color;
};

const Component: FC<Props> = ({ palettes, currentColor = null }) => {
    const [temporaryColor, setTemporaryColor] = useState<Color | null>(null);
    const [selectedColor, setSelectedColor] = useState<Color | null>(currentColor);

    return (
        <ColorPickerFlyout
            currentColor={temporaryColor ?? selectedColor}
            onClick={() => setSelectedColor(temporaryColor)}
            onClose={() => setTemporaryColor(null)}
            onSelect={(color) => setTemporaryColor(color)}
            palettes={palettes}
        />
    );
};

describe("ColorInputFlyout Component", () => {
    it("should render without initial color", () => {
        mount(<Component palettes={EXAMPLE_PALETTES} />);

        cy.get(TRIGGER_ID).should("contain", "Select color");
        cy.get(TRIGGER_ID).click();
        cy.get(BRAND_COLOR_ID).first().click();
        cy.get(BUTTON_ID).last().click();
        cy.get(TRIGGER_ID).should("contain", "90");
        cy.get(MENU_ITEM_DECORATOR_ID).children("span").invoke("attr", "style").should("include", "rgb(153, 33, 54)");
    });

    it("should render with initial color", () => {
        mount(<Component currentColor={TEST_COLOR} />);

        cy.get(TRIGGER_ID).should("contain", TEST_COLOR_HEX).click();
        cy.get(COLOR_PREVIEW_ID).should("contain", TEST_COLOR_HEX);
        cy.get(MENU_ITEM_DECORATOR_ID)
            .children("span")
            .invoke("attr", "style")
            .should("include", `rgb(${Object.values(TEST_COLOR).join(", ")})`);
    });
});
