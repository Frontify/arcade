/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { ReactElement } from 'react';
import { Meta } from '@storybook/react';

import { Tree, Tree as TreeComponent, TreeContentLegacyComponent, TreeItem } from '@components/Tree';
import { TreeNodeItem, treeNodesMock } from '@components/Tree/utils';
import type { TreeItemProps, TreeProps } from '@components/Tree/types';
import { IconDocument } from '@foundation/Icon';
import { DraggableItem } from '@utilities/dnd';

export default {
    title: 'Components/Tree',
    component: TreeComponent,
    args: {
        id: 'treeId',
    },
} as Meta<TreeProps>;

interface TreeItemComponentProps {
    node: DraggableItem<TreeNodeItem>;
    children?: ReactElement<TreeItemProps> | Array<ReactElement<TreeItemProps>>;
}

const TreeItemBasic = ({ node, children }: TreeItemComponentProps) => {
    return (
        <TreeItem
            key={node.id}
            id={node.id}
            sort={node.sort}
            contentComponent={() => <TreeItemBasicContentComponent title={node.name} />}
        >
            {children}
        </TreeItem>
    );
};

interface TreeWithBasicItemContentComponentProps {
    title: string;
}

const TreeItemBasicContentComponent = ({ title }: TreeWithBasicItemContentComponentProps) => {
    return (
        <div className="tw-flex tw-space-x-1.5 tw-w-full">
            <span className="tw-flex tw-justify-center tw-items-center tw-w-5">{<IconDocument />}</span>
            <span>{title}</span>
        </div>
    );
};

const TreeItemLegacy = ({ node, children }: TreeItemComponentProps) => {
    return (
        <TreeItem
            key={node.id}
            id={node.id}
            sort={node.sort}
            contentComponent={({ selected, hovered }) => (
                <TreeContentLegacyComponent
                    title={node.name}
                    icon={node.icon || <></>}
                    badge={node.badge}
                    tooltipContent={node.tooltipContent}
                    label={node.label}
                    actions={node.actions}
                    selected={selected}
                    hovered={hovered}
                />
            )}
        >
            {children}
        </TreeItem>
    );
};

export const TreeWithLabel = ({ ...args }: TreeProps) => {
    return (
        <div style={{ maxWidth: '800px' }}>
            <Tree {...args}>
                {treeNodesMock.map((node) => (
                    <TreeItem key={node.id} id={node.id} sort={node.sort} label={node.name}>
                        {node.nodes &&
                            node.nodes.map((node) => (
                                <TreeItem key={node.id} id={node.id} sort={node.sort} label={node.name}>
                                    {node.nodes &&
                                        node.nodes.map((node) => (
                                            <TreeItem key={node.id} id={node.id} sort={node.sort} label={node.name} />
                                        ))}
                                </TreeItem>
                            ))}
                    </TreeItem>
                ))}
            </Tree>
        </div>
    );
};

export const TreeWithBasicItem = ({ ...args }: TreeProps) => {
    return (
        <div style={{ maxWidth: '800px' }}>
            <Tree {...args}>
                {treeNodesMock.map((node) => (
                    <TreeItemBasic key={node.id} node={node}>
                        {node.nodes &&
                            node.nodes.map((node) => (
                                <TreeItemBasic key={node.id} node={node}>
                                    {node.nodes &&
                                        node.nodes.map((node) => <TreeItemBasic key={node.id} node={node} />)}
                                </TreeItemBasic>
                            ))}
                    </TreeItemBasic>
                ))}
            </Tree>
        </div>
    );
};

export const TreeWithLegacyItem = ({ ...args }: TreeProps) => {
    return (
        <div style={{ maxWidth: '800px' }}>
            <Tree {...args}>
                {treeNodesMock.map((node) => (
                    <TreeItemLegacy key={node.id} node={node}>
                        {node.nodes &&
                            node.nodes.map((node) => (
                                <TreeItemLegacy key={node.id} node={node}>
                                    {node.nodes &&
                                        node.nodes.map((node) => <TreeItemLegacy key={node.id} node={node} />)}
                                </TreeItemLegacy>
                            ))}
                    </TreeItemLegacy>
                ))}
            </Tree>
        </div>
    );
};
