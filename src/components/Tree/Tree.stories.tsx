/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Tree, Tree as TreeComponent, TreeItem } from '@components/Tree';
import type { TreeProps } from '@components/Tree/types';
import { treeNodesMock } from '@components/Tree/utils';

export default {
    title: 'Components/Tree',
    component: TreeComponent,
    args: {
        id: 'treeId',
    },
} as Meta<TreeProps>;

type TreeItemComponentProps = {
    label?: string;
    icon?: JSX.Element;
};
const TreeItemComponent = ({ label, icon }: TreeItemComponentProps) => {
    return (
        <>
            <span className="tw-flex tw-justify-center tw-items-center tw-w-5">{icon}</span>

            <span>{label}</span>
        </>
    );
};

export const SimpleTree: Story<TreeProps> = ({ ...args }: TreeProps) => {
    return (
        <div style={{ maxWidth: '800px' }}>
            <Tree {...args}>
                {treeNodesMock.map((node) => (
                    <TreeItem
                        key={node.id}
                        id={node.id}
                        sort={node.sort}
                        component={<TreeItemComponent label={node.name} icon={node.icon} />}
                    >
                        {node.nodes &&
                            node.nodes.map((node) => (
                                <TreeItem
                                    key={node.id}
                                    id={node.id}
                                    sort={node.sort}
                                    component={<TreeItemComponent label={node.name} icon={node.icon} />}
                                >
                                    {node.nodes &&
                                        node.nodes.map((node) => (
                                            <TreeItem
                                                key={node.id}
                                                id={node.id}
                                                sort={node.sort}
                                                component={<TreeItemComponent label={node.name} icon={node.icon} />}
                                            />
                                        ))}
                                </TreeItem>
                            ))}
                    </TreeItem>
                ))}
            </Tree>
        </div>
    );
};
