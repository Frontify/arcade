/* (c) Copyright Frontify Ltd., all rights reserved. */

import { mockNodesTree } from '@components/Tree/utils/mocks';
import React from 'react';

import { Tree, TreeItem } from '..';

const TreeComponent = () => {
    return (
        <Tree id="treeId">
            {mockNodesTree.map((node) => (
                <TreeItem key={node.id} id={node.id} sort={node.sort} component={<span>{node.name}</span>}>
                    {node.nodes &&
                        node.nodes.map((node) => (
                            <TreeItem key={node.id} id={node.id} sort={node.sort} component={<span>{node.name}</span>}>
                                {node.nodes &&
                                    node.nodes.map((node) => (
                                        <TreeItem
                                            key={node.id}
                                            id={node.id}
                                            sort={node.sort}
                                            component={<span>{node.name}</span>}
                                        />
                                    ))}
                            </TreeItem>
                        ))}
                </TreeItem>
            ))}
        </Tree>
    );
};

const TREE_ID = '[data-test-id=tree]';

describe('Tree Component', () => {
    it('renders tree', () => {
        cy.mount(<TreeComponent />);

        cy.get(TREE_ID).should('be.visible');
    });
});
