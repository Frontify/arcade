/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from "react";
import { Meta, Story } from "@storybook/react";
import { Tree as TreeComponent, TreeProps } from "./Tree";
import { TreeNodeProps } from "./Node";
import { IconSize } from "@foundation/Icon/IconSize";
import IconDocument from "@foundation/Icon/Generated/IconDocument";
import IconGuidelines from "@foundation/Icon/Generated/IconGuidelines";

// eslint-disable-next-line import/no-default-export
export default {
    title: "Components/Tree",
    component: TreeComponent,
    args: {
        nodes: [
            {
                id: "1",
                name: "Design System Testing",
                label: "Document",
                value: "https://weare.frontify.com/document/1",
                icon: <IconGuidelines size={IconSize.Size16} />,
                nodes: [
                    {
                        id: "1-1",
                        name: "Uncategorizes Pages",
                        nodes: [
                            {
                                id: "1-1-1",
                                name: "Home",
                                label: "Page",
                                value: "https://weare.frontify.com/page/1",
                                icon: <IconDocument size={IconSize.Size16} />,
                            },
                            {
                                id: "1-1-2",
                                name: "Members",
                                label: "Page",
                                value: "https://weare.frontify.com/page/2",
                                icon: <IconDocument size={IconSize.Size16} />,
                            },
                            {
                                id: "1-1-3",
                                name: "About us",
                                label: "Page",
                                value: "https://weare.frontify.com/page/3",
                                icon: <IconDocument size={IconSize.Size16} />,
                            },
                        ],
                    },
                    {
                        id: "1-2",
                        name: "Test Category",
                        label: "Document",
                        value: "https://weare.frontify.com/document/923#/test",
                        nodes: [
                            {
                                id: "1-2-1",
                                name: "Home",
                                label: "Page",
                                value: "https://weare.frontify.com/page/1",
                                icon: <IconDocument size={IconSize.Size16} />,
                            },
                            {
                                id: "1-2-2",
                                name: "Members",
                                label: "Page",
                                value: "https://weare.frontify.com/page/2",
                                icon: <IconDocument size={IconSize.Size16} />,
                            },
                            {
                                id: "1-2-3",
                                name: "About us",
                                label: "Page",
                                value: "https://weare.frontify.com/page/3",
                                icon: <IconDocument size={IconSize.Size16} />,
                            },
                        ],
                    },
                ],
            },
        ] as TreeNodeProps[],
        activeNodeId: "1-1-3",
    },
    argTypes: {
        onSelect: { action: "onSelect" },
    },
} as Meta<TreeProps>;

export const Tree: Story<TreeProps> = (args: TreeProps) => (
    <div style={{ maxWidth: "800px" }}>
        <TreeComponent {...args} />
    </div>
);
