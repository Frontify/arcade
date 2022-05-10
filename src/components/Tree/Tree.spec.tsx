/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { FC, useState } from "react";
import { Tree, TreeFlatListItem } from "./Tree";
import { mount } from "@cypress/react";
import { DraggableItem } from "@utilities/dnd";
import { mockNodesFlat } from "@components/Tree/utils";

type ComponentProps = {
    nodes: DraggableItem<TreeFlatListItem>[];
    onDrop?: (modifiedItems: DraggableItem<TreeFlatListItem>[]) => void;
};
const Component: FC<ComponentProps> = ({ nodes, onDrop }) => {
    const [selectedIds, setSelectedIds] = useState<NullableString[]>([]);
    const onDropDefault = (items: DraggableItem<TreeFlatListItem>[]) => {
        console.log(items);
    };

    return (
        <Tree
            nodes={nodes}
            activeNodeIds={selectedIds}
            onSelect={(ids: NullableString[]) => setSelectedIds(ids)}
            onUpdate={onDrop || onDropDefault}
        />
    );
};

const TREE_ID = "[data-test-id=tree]";
const NODE_ID = "[data-test-id=node]";
const NODE_LINK_ID = "[data-test-id=node-link]";
const NODE_LINK_NAME_ID = "[data-test-id=node-link-name]";
const TOGGLE_ID = "[data-test-id=toggle]";
const SUB_TREE_ID = "[data-test-id=sub-tree]";
const DROP_ZONE_ID = "[data-test-id=drop-zone]";
const BADGE_ID = "[data-test-id=node-badge]";

describe("Tree Component", () => {
    // TODO check if DropZones are not present when no onDrop props is provided. Refactoring needed first
    it("renders tree", () => {
        mount(<Component nodes={mockNodesFlat} />);

        cy.get(TREE_ID).should("be.visible");
        cy.get(NODE_ID).should("have.length", 1);
    });

    it("toggles node on click", () => {
        mount(<Component nodes={mockNodesFlat} />);

        cy.get(`${NODE_ID} ${TOGGLE_ID}`).as("Toggle");
        cy.get("@Toggle").click();
        cy.get(NODE_ID).should("have.length", 3);

        cy.get("@Toggle").click();
        cy.get(NODE_ID).should("have.length", 1);
    });

    it("selects a node with a value on click", () => {
        mount(<Component nodes={mockNodesFlat} />);

        cy.get(NODE_LINK_NAME_ID).click();
        cy.get(NODE_LINK_ID).should("have.attr", "aria-selected", "true");
    });

    it("doesn't select a node without a value", () => {
        mount(<Component nodes={mockNodesFlat} />);

        cy.get(`${NODE_ID} ${TOGGLE_ID}`).click();
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:first ${TOGGLE_ID}`).click();
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:first a`).should("have.attr", "aria-selected", "false");
    });

    it("deselects all the other nodes when selecting a new one", () => {
        mount(<Component nodes={mockNodesFlat} />);

        cy.get(`${NODE_ID} ${TOGGLE_ID}`).click();
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:last ${NODE_LINK_ID}`).as("InitiallySelectedItem");
        cy.get(`${SUB_TREE_ID} ${NODE_LINK_NAME_ID}:last`).click();
        cy.get("@InitiallySelectedItem").should("have.attr", "aria-selected", "true");

        cy.get(`${NODE_ID}:first ${NODE_LINK_ID}:first`).as("NextSelectedItem");
        cy.get(`${NODE_ID}:first ${NODE_LINK_NAME_ID}:first`).click();
        cy.get("@InitiallySelectedItem").should("have.attr", "aria-selected", "false");
        cy.get(`@NextSelectedItem`).should("have.attr", "aria-selected", "true");
    });
});

describe("Draggable Tree Component", () => {
    it("renders correct drop zones on the top level", () => {
        mount(
            <Component
                nodes={mockNodesFlat}
                onDrop={() => {
                    console.log("drop");
                }}
            />,
        );

        cy.get(DROP_ZONE_ID).should("have.length", 3);
    });

    it("renders correct drop zones on the second level", () => {
        mount(
            <Component
                nodes={mockNodesFlat}
                onDrop={() => {
                    console.log("drop");
                }}
            />,
        );

        cy.get(`${NODE_ID} ${TOGGLE_ID}`).click();
        cy.get(`${SUB_TREE_ID} ${DROP_ZONE_ID}`).should("have.length", 5);
        cy.get(`${SUB_TREE_ID} ${DROP_ZONE_ID}`).each(($dropZone, index) => {
            const expectedClass = index % 2 === 0 ? "tw-h-[10px]" : "tw-h-auto";
            expect($dropZone).to.have.class(expectedClass);
        });
    });
});

describe("Badge Tree Component", () => {
    beforeEach(() => {
        mount(<Component nodes={mockNodesFlat} />);

        cy.get(`${NODE_ID} ${TOGGLE_ID}`).click();
    });

    it("does not render badge", () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:first ${BADGE_ID}`).should("not.exist");
    });

    it("renders icon", () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:last ${BADGE_ID}`).should("exist");
    });

    it("renders badge", () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:last ${TOGGLE_ID}`).click();
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:last ${BADGE_ID}`).should("exist");
    });
});
