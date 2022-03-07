import { MenuItemContentSize } from "@components/MenuItem";
import { IconFile, IconFolder, IconSize } from "@foundation/Icon";
import React from "react";


export const mockActionMenuBlocks = [
    {
        id: "dropdownBlock",
        ariaLabel: "Dropdown block",
        menuItems: [
            {
                id: "dropdown",
                size: MenuItemContentSize.Small,
                title: "Dropdown",
                onClick: () => console.log("dropdown"),
            },
        ],
    },
    {
        id: "actionsBlock",
        ariaLabel: "Item Actions",
        menuItems: [
            {
                id: "rename",
                size: MenuItemContentSize.Small,
                title: "Rename",
                onClick: () => console.log("rename"),
            },
            {
                id: "duplicate",
                size: MenuItemContentSize.Small,
                title: "Duplicate",
                onClick: () => console.log("duplicate"),
            },
            {
                id: "unpublish",
                size: MenuItemContentSize.Small,
                title: "Unpublish",
                onClick: () => console.log("unpublish"),
            },
        ],
    },
    {
        id: "deleteBlock",
        ariaLabel: "Delete Block",
        menuItems: [
            {
                id: "delete",
                size: MenuItemContentSize.Small,
                title: "Delete",
                onClick: () => console.log("delete"),
            },
        ],
    },
];

export const mockNodesFlat = [
    {
        id: "1",
        name: "Design System Testing",
        label: "Document",
        value: "https://weare.frontify.com/document/1",
        icon: <IconFolder size={IconSize.Size16} />,
        parentId: null,
        sort: 1,
    },
    {
        id: "1-1",
        name: "Uncategorizes Pages",
        icon: <IconFolder size={IconSize.Size16} />,
        parentId: "1",
        sort: 1,
    },
    {
        id: "1-1-1",
        parentId: "1-1",
        sort: 1,
        name: "Home",
        label: "Page",
        value: "https://weare.frontify.com/page/1",
        icon: <IconFile size={IconSize.Size16} />,
    },
    {
        id: "1-1-2",
        parentId: "1-1",
        name: "Members",
        label: "Page",
        value: "https://weare.frontify.com/page/2",
        icon: <IconFile size={IconSize.Size16} />,
        sort: null,
    },
    {
        id: "1-1-3",
        parentId: "1-1",
        name: "About us",
        label: "Page",
        value: "https://weare.frontify.com/page/3",
        icon: <IconFile size={IconSize.Size16} />,
        sort: null,
    },
    {
        id: "1-2",
        parentId: "1",
        name: "Test Category",
        label: "Document",
        icon: <IconFolder size={IconSize.Size16} />,
        value: "https://weare.frontify.com/document/923#/test",
        sort: null,
    },
    {
        id: "1-2-1",
        parentId: "1-2",
        name: "Home Category",
        label: "Home Page",
        value: "https://weare.frontify.com/page/4",
        icon: <IconFile size={IconSize.Size16} />,
        sort: null,
    },
    {
        id: "1-2-2",
        parentId: "1-2",
        name: "Members Category",
        label: "Members Page",
        value: "https://weare.frontify.com/page/5",
        icon: <IconFile size={IconSize.Size16} />,
        sort: null,
    },
    {
        id: "1-2-3",
        parentId: "1-2",
        name: "About us Category",
        label: "About Us Page",
        value: "https://weare.frontify.com/page/6",
        icon: <IconFile size={IconSize.Size16} />,
        sort: null,
    },
];

// export const mockNodesWithActionsTree: DraggableItem<TreeNodeProps>[] = [
//     {
//         id: "1",
//         name: "Design System Testing",
//         value: "https://weare.frontify.com/document/1",
//         icon: <IconGuidelines size={IconSize.Size16} />,
//         parentId: null,
//         sort: null,
//         nodes: [
//             {
//                 id: "1-1",
//                 name: "Uncategorizes Pages",
//                 parentId: null,
//                 sort: null,
//             },
//             {
//                 id: "1-2",
//                 name: "Test Category",
//                 value: "https://weare.frontify.com/document/923#/test",
//                 parentId: null,
//                 sort: null,
//                 nodes: [
//                     {
//                         id: "1-2-1",
//                         name: "Home",
//                         value: "https://weare.frontify.com/page/1",
//                         icon: <IconDocument size={IconSize.Size16} />,
//                         parentId: null,
//                         sort: null,
//                     },
//                     {
//                         id: "1-2-2",
//                         name: "Members",
//                         value: "https://weare.frontify.com/page/2",
//                         icon: <IconDocument size={IconSize.Size16} />,
//                         actions: [<ActionsFlyoutComponent key="actions" />],
//                         parentId: null,
//                         sort: null,
//                     },
//                     {
//                         id: "1-2-3",
//                         name: "About us",
//                         value: "https://weare.frontify.com/page/3",
//                         icon: <IconDocument size={IconSize.Size16} />,
//                         label: "Label",
//                         parentId: null,
//                         sort: null,
//                         actions: [
//                             <Button
//                                 size={ButtonSize.Small}
//                                 style={ButtonStyle.Secondary}
//                                 icon={<IconPlus size={IconSize.Size12} />}
//                                 key="plusIcon"
//                             />,
//                             <ActionsFlyoutComponent key="actions" />,
//                         ],
//                     },
//                 ],
//             },
//         ],
//     },
// ];
