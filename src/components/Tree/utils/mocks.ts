/* (c) Copyright Frontify Ltd., all rights reserved. */

import { useEffect, useState } from 'react';
import { TreeItemProps } from '../types';

export type TreeItemMock = TreeItemProps & {
    id: string;
    nodes?: TreeItemMock[];
    numChildNodes?: number;
};

const uncategorizedPagesMock: TreeItemMock[] = [
    {
        id: '1-1-1',
        label: 'Home',
    },
    {
        id: '1-1-2',
        label: 'Members',
    },
    {
        id: '1-1-3',
        label: 'About us',
    },
];

const testSubCategoryMock: TreeItemMock[] = [
    {
        id: '1-2-3-1',
        label: 'SubItem 1',
    },
    {
        id: '1-2-3-2',
        label: 'SubItem 2',
    },
    {
        id: '1-2-3-3',
        label: 'SubItem 3',
    },
];

const testCategoryMock: TreeItemMock[] = [
    {
        id: '1-2-1',
        label: 'Home Category Test Category',
    },
    {
        id: '1-2-2',
        label: 'Members Category',
    },
    {
        id: '1-2-3',
        label: 'About us Category',
        nodes: testSubCategoryMock,
    },
];

const testGroupMock: TreeItemMock[] = [
    {
        id: '1-1',
        label: 'Document Category 1',
        nodes: uncategorizedPagesMock,
        type: 'document-category',
        accepts: ['document-page', 'document-page-within', 'document-category'].join(', '),
    },
    {
        id: '1-2',
        label: 'Document Category 2',
        nodes: testCategoryMock,
        type: 'document-category',
        accepts: ['document-page', 'document-page-within', 'document-category'].join(', '),
    },
    {
        id: '1-3',
        label: 'Document Page 1',
        type: 'document-page',
        accepts: 'document-page',
    },
    {
        id: '1-4',
        label: 'Document Page 2',
        type: 'document-page',
        accepts: 'document-page',
    },
    {
        id: '1-5',
        label: 'Document Page 3',
        type: 'document-page',
        accepts: 'document-page',
    },
];

export const treeItemsMock: TreeItemMock[] = [
    {
        id: '1',
        label: 'Design System Testing - Deep Nested Items',
        nodes: testGroupMock,
    },
    {
        id: '2',
        label: 'Design System Testing - Root Childless',
    },
    {
        id: '3',
        label: 'Design System Testing - Not draggable',
        draggable: false,
    },
];

const reducer = (nodes: TreeItemMock[], expandedIds: string[] = []): TreeItemMock[] => {
    const newNodes = [...nodes];

    return newNodes.map((item) => {
        const numChildNodes = item.nodes?.length ?? 0;
        const childNodes = expandedIds.includes(item.id) ? reducer(item?.nodes ?? [], expandedIds) : undefined;

        return {
            ...item,
            numChildNodes,
            nodes: childNodes,
        };
    });
};

export const useDynamicNavigationMock = (expandedIds: string[]) => {
    const [nodes, setNodes] = useState<TreeItemMock[]>([]);

    useEffect(() => {
        setTimeout(() => {
            setNodes(reducer(treeItemsMock, expandedIds));
        }, 500);
    }, [expandedIds]);

    return [nodes, setNodes];
};

export const useNavigationWithLazyLoadedItemsMock = (id?: string, isExpanded = false, isRoot = false) => {
    const [nodes, setNodes] = useState<TreeItemMock[]>([]);

    useEffect(() => {
        setTimeout(() => {
            if (!isExpanded) {
                return;
            }

            if (isRoot) {
                return setNodes(reducer(treeItemsMock));
            }

            if (id === '1-lazyloaded') {
                return setNodes(reducer(testGroupMock));
            }

            if (id === '1-1-lazyloaded') {
                return setNodes(reducer(uncategorizedPagesMock));
            }

            if (id === '1-2-lazyloaded') {
                return setNodes(reducer(testCategoryMock));
            }

            if (id === '1-2-3-lazyloaded') {
                return setNodes(reducer(testSubCategoryMock));
            }
        }, 500);
    }, [id, isExpanded, isRoot]);

    return { nodes, setNodes };
};
