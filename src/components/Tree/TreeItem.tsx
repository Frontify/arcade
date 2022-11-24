/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { Fragment, ReactElement, ReactNode, useState } from 'react';
import { useDrag } from 'react-dnd';

import { DropZone } from '@components/DropZone';
import { TreeItemProps } from '@components/Tree/types';
import { useTreeContext } from '@components/Tree/TreeContext';
import { DraggableItem, DropZonePosition } from '@utilities/dnd';
import { merge } from '@utilities/merge';

export const TreeItem = ({ id, sort, onNodeSelect, onDrop, component, children }: TreeItemProps) => {
    const { treeId, selectedIds, onSelect, draggable } = useTreeContext();

    const [showNodes, setShowNodes] = useState<boolean>(false);

    const [{ opacity }, drag] = useDrag({
        item: { id, sort },
        collect: (monitor) => ({
            opacity: monitor.isDragging() ? 0.4 : 1,
        }),
        type: treeId,
        canDrag: draggable,
    });

    const handleDrop = (
        targetItem: DraggableItem<{ id: string; sort: Nullable<number> }>,
        sourceItem: DraggableItem<{ id: string; sort: Nullable<number> }>,
        position: DropZonePosition,
    ) => {
        onDrop?.(targetItem, sourceItem, position);
    };

    const handleSelect = () => {
        onSelect(id);
        onNodeSelect?.(id);
    };

    const toggleNodesVisibility = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        event.stopPropagation();
        setShowNodes(!showNodes);
    };

    const childrenArray = React.Children.toArray(children);

    let enhancedChildren: ReactNode = childrenArray;

    if (draggable) {
        enhancedChildren = React.Children.map(children, (child, index) => {
            if (!child) {
                return <></>;
            }

            return React.cloneElement(
                <Fragment key={index}>
                    {index === 0 && (
                        <DropZone
                            data={{
                                targetItem: { id, sort },
                                position: DropZonePosition.Before,
                            }}
                            onDrop={handleDrop}
                            treeId={treeId}
                        />
                    )}

                    {child as ReactElement}
                </Fragment>,
            );
        });
    }

    const insertCaret = () => {
        if (childrenArray.length === 0) {
            return null;
        }

        return (
            /*  eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
            <div
                className={merge([
                    'tw-transition-transform tw-w-0 tw-h-0 tw-text-black-100 tw-text-opacity-40 tw-font-normal tw-border-t-4 tw-border-t-transparent tw-border-b-4 tw-border-b-transparent tw-border-l-4 tw-border-l-x-strong',
                    showNodes ? 'tw-rotate-90' : '',
                ])}
                onClick={toggleNodesVisibility}
            />
        );
    };

    return (
        <li data-test-id="node" ref={drag} style={{ opacity }}>
            <DropZone
                data={{
                    targetItem: { id, sort },
                    position: DropZonePosition.Within,
                }}
                onDrop={handleDrop}
                treeId={treeId}
            >
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                <div
                    className={merge([
                        'tw-flex tw-py-2 tw-px-2.5 tw-no-underline tw-leading-5 tw-h-10',
                        selectedIds.includes(id)
                            ? 'tw-font-medium tw-bg-box-selected-strong tw-text-box-selected-strong-inverse hover:tw-bg-box-selected-strong-hover hover:tw-text-box-selected-strong-inverse-hover'
                            : 'tw-text-text hover:tw-bg-box-neutral-hover hover:tw-text-box-neutral-inverse-hover',
                    ])}
                    onClick={handleSelect}
                >
                    <div className="tw-flex tw-flex-1 tw-space-x-1 tw-items-center tw-h-6">
                        <span data-test-id="toggle" className="tw-w-2 tw-h-3 tw-flex tw-items-center tw-justify-center">
                            {insertCaret()}
                        </span>

                        {component}
                    </div>
                </div>
            </DropZone>

            {showNodes && (
                <ul
                    className="tw-p-0 tw-m-0 tw-font-sans tw-font-normal tw-list-none tw-text-left [&>li]:tw-pl-4"
                    data-test-id="sub-tree"
                >
                    {enhancedChildren}
                </ul>
            )}

            <DropZone
                data={{
                    targetItem: { id, sort },
                    position: DropZonePosition.After,
                }}
                onDrop={handleDrop}
                treeId={treeId}
            />
        </li>
    );
};
