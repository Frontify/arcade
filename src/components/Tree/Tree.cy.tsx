/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { useState } from 'react';
import '@4tw/cypress-drag-drop';
import { mockNodesFlat } from '@components/Tree/utils';
import { DraggableItem } from '@utilities/dnd';
import { Tree, TreeFlatListItem } from './Tree';

type ComponentProps = {
    nodes: DraggableItem<TreeFlatListItem>[];
    activeNodeIds?: NullableString[];
    onDrop?: (sourceItemId: string, parentId: NullableString, positionBeforeId: NullableString) => void;
    onEditableSave?: (itemId: string, value: string) => void;
    onSelect?: (ids: NullableString[]) => void;
};
const Component = ({ nodes, onDrop, onEditableSave, onSelect, activeNodeIds }: ComponentProps) => {
    const [selectedIds, setSelectedIds] = useState<NullableString[]>(activeNodeIds || []);
    const onDropDefault = (sourceItemId: string, parentId: NullableString, positionBeforeId: NullableString) => {
        console.log(sourceItemId);
        console.log(parentId);
        console.log(positionBeforeId);
    };

    return (
        <Tree
            nodes={nodes}
            activeNodeIds={selectedIds}
            onSelect={onSelect ? onSelect : (ids: NullableString[]) => setSelectedIds(ids)}
            onDragAndDrop={onDrop || onDropDefault}
            onEditableSave={onEditableSave}
        />
    );
};

const TREE_ID = '[data-test-id=tree]';
const NODE_ID = '[data-test-id=node]';
const NODE_LINK_ID = '[data-test-id=node-link]';
const NODE_LINK_NAME_ID = '[data-test-id=node-link-name]';
const TOGGLE_ID = '[data-test-id=toggle]';
const SUB_TREE_ID = '[data-test-id=sub-tree]';
const DROP_ZONE_ID = '[data-test-id=drop-zone]';
const BADGE_ID = '[data-test-id=node-badge]';
const NODE_EDITABLE_ID = '[data-test-id=editable-input]';
const NODE_LABEL_ID = '[data-test-id=node-label]';

describe('Tree Component', () => {
    // TODO check if DropZones are not present when no onDrop props is provided. Refactoring needed first
    it('renders tree', () => {
        cy.mount(<Component nodes={mockNodesFlat()} />);

        cy.get(TREE_ID).should('be.visible');
        cy.get(NODE_ID).should('have.length', 1);
    });

    it('renders tree expanded so that selected node is visible', () => {
        const nodes = mockNodesFlat();
        const activeNodeId = '1-2-2';
        const activeNodeLabel = nodes.find((node) => node.id === activeNodeId)?.label || '';
        cy.mount(<Component nodes={nodes} activeNodeIds={[activeNodeId]} />);

        cy.get(NODE_ID).should('have.length', 7);
        cy.get(`${NODE_ID} ${NODE_LABEL_ID}`).contains(activeNodeLabel).as('NodeLabel').should('be.visible');
        cy.get('@NodeLabel').should('have.class', 'tw-text-box-selected-strong-inverse');
    });

    it('toggles node on click', () => {
        cy.mount(<Component nodes={mockNodesFlat()} />);

        cy.get(`${NODE_ID} ${TOGGLE_ID}`).as('Toggle');
        cy.get('@Toggle').click();
        cy.get(NODE_ID).should('have.length', 4);

        cy.get('@Toggle').click();
        cy.get(NODE_ID).should('have.length', 1);
    });

    it('selects a node with a value on click', () => {
        cy.mount(<Component nodes={mockNodesFlat()} />);

        cy.get(NODE_LINK_NAME_ID).eq(0).click();
        cy.get(NODE_LINK_ID).should('have.attr', 'aria-selected', 'true');
    });

    it("doesn't select a node without a value", () => {
        cy.mount(<Component nodes={mockNodesFlat()} />);

        cy.get(`${NODE_ID} ${TOGGLE_ID}`).click();
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:first ${TOGGLE_ID}`).click();
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:first a`).should('have.attr', 'aria-selected', 'false');
    });

    it('deselects all the other nodes when selecting a new one', () => {
        cy.mount(<Component nodes={mockNodesFlat()} />);

        cy.get(`${NODE_ID} ${TOGGLE_ID}`).click();
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:last ${NODE_LINK_ID}`).as('InitiallySelectedItem');
        cy.get(`${SUB_TREE_ID} ${NODE_LINK_NAME_ID}:last`).click();
        cy.get('@InitiallySelectedItem').should('have.attr', 'aria-selected', 'true');

        cy.get(`${NODE_ID}:first ${NODE_LINK_ID}:first`).as('NextSelectedItem');
        cy.get(`${NODE_ID}:first ${NODE_LINK_NAME_ID}:first`).click();
        cy.get('@InitiallySelectedItem').should('have.attr', 'aria-selected', 'false');
        cy.get('@NextSelectedItem').should('have.attr', 'aria-selected', 'true');
    });

    it('calls onSelect on click', () => {
        const onSelectStub = cy.stub().as('onSelectStub');
        cy.mount(<Component nodes={mockNodesFlat()} onSelect={onSelectStub} />);

        cy.get(NODE_LINK_NAME_ID).click();
        cy.get('@onSelectStub').should('be.called');
    });
});

describe('Draggable Tree Component', () => {
    it('renders correct drop zones on the top level', () => {
        cy.mount(
            <Component
                nodes={mockNodesFlat()}
                onDrop={() => {
                    console.log('drop');
                }}
            />,
        );

        cy.get(DROP_ZONE_ID).should('have.length', 3);
    });

    it('renders correct drop zones on the second level', () => {
        cy.mount(
            <Component
                nodes={mockNodesFlat()}
                onDrop={() => {
                    console.log('drop');
                }}
            />,
        );

        cy.get(`${NODE_ID} ${TOGGLE_ID}`).click();
        cy.get(`${SUB_TREE_ID} ${DROP_ZONE_ID}`).should('have.length', 7);
        cy.get(`${SUB_TREE_ID} ${DROP_ZONE_ID}`).each(($dropZone, index) => {
            const expectedClass = index % 2 === 0 ? 'tw-h-[10px]' : 'tw-h-auto';
            expect($dropZone).to.have.class(expectedClass);
        });
    });

    it('calls onDragAndDrop after drop', () => {
        const nodes = mockNodesFlat();
        const activeNodeId = '1-2-2';

        const onDragAndDropStub = cy.stub().as('onDragAndDropStub');
        cy.mount(<Component nodes={nodes} activeNodeIds={[activeNodeId]} onDrop={onDragAndDropStub} />);

        cy.get(`${SUB_TREE_ID}:eq(1) ${NODE_ID}:eq(1)`).drag(`${TREE_ID} ${SUB_TREE_ID}:eq(0) ${DROP_ZONE_ID}:eq(0)`);

        cy.get('@onDragAndDropStub').should('be.called');
    });
});

describe('Badge Tree Component', () => {
    beforeEach(() => {
        cy.mount(<Component nodes={mockNodesFlat()} />);

        cy.get(`${NODE_ID} ${TOGGLE_ID}`).click();
    });

    it('does not render badge', () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:first ${BADGE_ID}`).should('not.exist');
    });

    it('renders icon', () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:nth-last-of-type(2) ${BADGE_ID}`).should('exist');
    });

    it('renders badge', () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:nth-last-of-type(2) ${TOGGLE_ID}`).click();
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:nth-last-of-type(2) ${BADGE_ID}`).should('exist');
    });
});

describe('Editable Tree Component', () => {
    beforeEach(() => {
        const onEditableSaveStub = cy.stub().as('onEditableSaveStub');
        cy.mount(<Component nodes={mockNodesFlat()} onEditableSave={onEditableSaveStub} />);

        cy.get(`${NODE_ID} ${TOGGLE_ID}`).click();
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:nth-last-of-type(2) ${TOGGLE_ID}`).click();
    });

    it('does not render the editable input on double click when props are not set', () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:last ${NODE_LINK_NAME_ID}`).dblclick();
        cy.get(`${NODE_EDITABLE_ID}`).should('not.exist');
    });

    it('renders the badge or icon on editable node', () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:nth-last-of-type(3) ${BADGE_ID}`).should('exist');
    });

    it('renders the editable input on double click', () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:nth-last-of-type(3) ${NODE_LINK_NAME_ID}`).dblclick();
        cy.get(`${NODE_EDITABLE_ID}`).should('exist');
    });

    it('exits the editable input on enter', () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:nth-last-of-type(3) ${NODE_LINK_NAME_ID}`).dblclick();
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:nth-last-of-type(3) input`).type('{enter}');
        cy.get(`${NODE_EDITABLE_ID}`).should('not.exist');
    });

    it('calls the onEditableSave on blur', () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:nth-last-of-type(3) ${NODE_LINK_NAME_ID}`).dblclick();
        cy.get(`${SUB_TREE_ID}  > ${NODE_ID}:first`).click();
        cy.get('@onEditableSaveStub').should('be.called');
    });

    it('exits the editable input on blur', () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:nth-last-of-type(3) ${NODE_LINK_NAME_ID}`).dblclick();
        cy.get(`${SUB_TREE_ID}  > ${NODE_ID}:first`).click();
        cy.get(`${NODE_EDITABLE_ID}`).should('not.exist');
    });

    it('calls the onEditableSave on enter', () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:nth-last-of-type(3) ${NODE_LINK_NAME_ID}`).dblclick();
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:nth-last-of-type(3) input`).type('{enter}');
        cy.get('@onEditableSaveStub').should('be.called');
    });

    it('calls the onEditableSave on blur', () => {
        cy.get(`${SUB_TREE_ID} > ${NODE_ID}:nth-last-of-type(3) ${NODE_LINK_NAME_ID}`).dblclick();
        cy.get(`${SUB_TREE_ID}  > ${NODE_ID}:first`).click();
        cy.get('@onEditableSaveStub').should('be.called');
    });
});
