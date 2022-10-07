import { MenuItemContentSize } from '@components/MenuItem';
import { IconDocument, IconFaceExtraHappy, IconFolder, IconPlus, IconSize } from '@foundation/Icon';
import React from 'react';
import { TreeFlatListItem, TreeNodeItem } from '@components/Tree';
import { DraggableItem } from '@utilities/dnd';
import { Badge } from '../../..';
import { Button, ButtonSize } from '@components/Button';

export const mockActionMenuBlocks = [
    {
        id: 'dropdownBlock',
        ariaLabel: 'Dropdown block',
        menuItems: [
            {
                id: 'dropdown',
                size: MenuItemContentSize.Small,
                title: 'Dropdown',
                onClick: () => console.log('dropdown'),
            },
        ],
    },
    {
        id: 'actionsBlock',
        ariaLabel: 'Item Actions',
        menuItems: [
            {
                id: 'rename',
                size: MenuItemContentSize.Small,
                title: 'Rename',
                onClick: () => console.log('rename'),
            },
            {
                id: 'duplicate',
                size: MenuItemContentSize.Small,
                title: 'Duplicate',
                onClick: () => console.log('duplicate'),
            },
            {
                id: 'unpublish',
                size: MenuItemContentSize.Small,
                title: 'Unpublish',
                onClick: () => console.log('unpublish'),
            },
        ],
    },
    {
        id: 'deleteBlock',
        ariaLabel: 'Delete Block',
        menuItems: [
            {
                id: 'delete',
                size: MenuItemContentSize.Small,
                title: 'Delete',
                onClick: () => console.log('delete'),
            },
        ],
    },
];

const uncategorizedPagesNodes = [
    {
        id: '1-1-1',
        parentId: '1-1',
        sort: 1,
        name: 'Home',
        label: 'Page',
        value: 'https://weare.frontify.com/page/1',
        icon: <IconDocument size={IconSize.Size16} />,
    },
    {
        id: '1-1-2',
        parentId: '1-1',
        name: 'Members',
        label: 'Page',
        value: 'https://weare.frontify.com/page/2',
        icon: <IconDocument size={IconSize.Size16} />,
        sort: null,
    },
    {
        id: '1-1-3',
        parentId: '1-1',
        name: 'About us',
        label: 'Page',
        value: 'https://weare.frontify.com/page/3',
        icon: <IconDocument size={IconSize.Size16} />,
        sort: null,
        editable: true,
    },
];

const testCategoryNodes = [
    {
        id: '1-2-1',
        parentId: '1-2',
        name: 'Home Category Test Category Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        label: 'Home Page',
        value: 'https://weare.frontify.com/page/4',
        icon: <IconDocument size={IconSize.Size16} />,
        sort: null,
        badge: <Badge icon={<IconFaceExtraHappy size={IconSize.Size16} />}></Badge>,
        editable: true,
    },
    {
        id: '1-2-2',
        parentId: '1-2',
        name: 'Members Category',
        label: 'Members Page',
        value: 'https://weare.frontify.com/page/5',
        icon: <IconDocument size={IconSize.Size16} />,
        sort: null,
    },
    {
        id: '1-2-3',
        parentId: '1-2',
        name: 'About us Category Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur quis tellus id elementum.',
        label: 'About Us Page',
        value: 'https://weare.frontify.com/page/6',
        icon: <IconDocument size={IconSize.Size16} />,
        sort: null,
        badge: <Badge>Hello, I am a badge</Badge>,
    },
];

type mockNodeType = () => DraggableItem<TreeFlatListItem>[];

export const mockNodesFlat: mockNodeType = () => [
    {
        id: '1',
        name: 'Design System Testing',
        label: 'Document',
        value: 'https://weare.frontify.com/document/1',
        icon: <IconFolder size={IconSize.Size16} />,
        actions: [<Button key={'Design System Testing'} size={ButtonSize.Small} icon={<IconPlus></IconPlus>} />],
        parentId: null,
        sort: 1,
        editable: true,
    },
    {
        id: '1-1',
        name: 'Uncategorizes Pages',
        icon: <IconFolder size={IconSize.Size16} />,
        actions: [
            <Button
                key={'Design System Testing Uncategorizes Pages'}
                size={ButtonSize.Small}
                icon={<IconPlus></IconPlus>}
            />,
        ],
        parentId: '1',
        sort: 1,
    },
    ...uncategorizedPagesNodes,
    {
        id: '1-2',
        parentId: '1',
        name: 'Test Category Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        label: 'Document',
        icon: <IconFolder size={IconSize.Size16} />,
        actions: [
            <Button
                key={'Design System Testing Uncategorizes Pages Test'}
                size={ButtonSize.Small}
                icon={<IconPlus></IconPlus>}
            />,
        ],
        value: 'https://weare.frontify.com/document/923#/test',
        sort: null,
        badge: <IconFaceExtraHappy size={IconSize.Size16} />,
    },
    ...testCategoryNodes,
    {
        id: '1-3',
        name: 'Category Without Subitems',
        icon: <IconFolder size={IconSize.Size16} />,
        actions: [
            <Button
                key={'Design System Testing Uncategorizes Pages Test Subitems'}
                size={ButtonSize.Small}
                icon={<IconPlus></IconPlus>}
            />,
        ],
        parentId: '1',
        value: 'https://weare.frontify.com/document/923#/test',
        sort: null,
    },
];

export const mockNodesTree: DraggableItem<TreeNodeItem>[] = [
    {
        id: '1',
        name: 'Design System Testing',
        label: 'Document',
        value: 'https://weare.frontify.com/document/1',
        icon: <IconFolder size={IconSize.Size16} />,
        parentId: null,
        sort: 1,
        nodes: [
            {
                id: '1-1',
                name: 'Uncategorizes Pages',
                icon: <IconFolder size={IconSize.Size16} />,
                parentId: '1',
                sort: 1,
                nodes: [...uncategorizedPagesNodes],
            },
            {
                id: '1-2',
                parentId: '1',
                name: 'Test Category',
                label: 'Document',
                icon: <IconFolder size={IconSize.Size16} />,
                value: 'https://weare.frontify.com/document/923#/test',
                sort: null,
                nodes: [...testCategoryNodes],
            },
        ],
    },
];
