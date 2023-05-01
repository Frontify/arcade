/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ReactElement } from 'react';

export const removeNodesFromFlatArray = (tree: ReactElement[], nodeIds: string[]): ReactElement[] => {
    // Create a set of the node IDs to remove for faster lookup
    const nodesToRemove = new Set(nodeIds);

    // Filter the tree array to remove the nodes with IDs in the set
    return tree.filter((node) => !nodesToRemove.has(node.props.id));
};

export const getNodeIdsInFlatArray = (tree: ReactElement[], startingNodeId: string): string[] => {
    const nodeIds: string[] = [];

    // Create a map from node IDs to their corresponding nodes
    const nodeMap = new Map<string, ReactElement>(tree.map((node) => [node.props.id, node]));

    // Find the node with the given id
    const startingNode = nodeMap.get(startingNodeId);

    if (startingNode) {
        // Recursively find all child nodes
        function findChildNodes(nodeId: number) {
            const children = tree.filter((child) => child.props.parentId === nodeId);
            for (const child of children) {
                nodeIds.push(child.props.id);
                findChildNodes(child.props.id);
            }
        }

        findChildNodes(startingNode.props.id);
    }

    return nodeIds;
};
