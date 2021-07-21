/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconSize } from "@elements/Icon/Icon";
import { ReactComponent as TextAlignCenter } from "@elements/Icon/Svg/TextAlignCenter.svg";
import { mount } from "@cypress/react";
import { FC, useState } from "react";
import Slider, { IconItem, TextItem } from "./Slider";
import css from "./Slider.module.css";

const SLIDER_ID = "[data-test-id=slider]";
const ICON_ITEM_ID = "[data-test-id=slider-icon-item]";
const TEXT_ITEM_ID = "[data-test-id=slider-text-item]";

const TEXT_ITEMS = [
    { id: "a", name: "abc" },
    { id: "b", name: "def" },
    { id: "c", name: "ghi" },
];

const ICON_ITEMS = [
    { id: "a", icon: <TextAlignCenter size={IconSize.Size16} /> },
    { id: "b", icon: <TextAlignCenter size={IconSize.Size16} /> },
    { id: "c", icon: <TextAlignCenter size={IconSize.Size16} /> },
];

type Props = {
    items: TextItem[] | IconItem[];
};

const Component: FC<Props> = ({ items }: Props) => {
    const [active, setActive] = useState(items[0].id);
    return <Slider items={items} activeItemId={active} onChange={setActive} />;
};

describe("Slider Component", () => {
    it("renders text items", () => {
        mount(<Component items={TEXT_ITEMS} />);

        cy.get(SLIDER_ID).should("have.class", css.wrapper);
        cy.get(TEXT_ITEM_ID).should("have.length", 3);
        cy.get(TEXT_ITEM_ID).first().should("have.class", css.active);
        cy.get(TEXT_ITEM_ID).first().contains(TEXT_ITEMS[0].name);
    });
    it("renders icon items", () => {
        mount(<Component items={ICON_ITEMS} />);

        cy.get(ICON_ITEM_ID).should("have.length", 3);
        cy.get(ICON_ITEM_ID).first().should("have.class", css.active);
    });
    it("changes active item on click", () => {
        mount(<Component items={TEXT_ITEMS} />);

        cy.get(TEXT_ITEM_ID).last().click();
        cy.get(TEXT_ITEM_ID).last().should("have.class", css.active);
        cy.get(TEXT_ITEM_ID).first().should("not.have.class", css.active);
    });
});
