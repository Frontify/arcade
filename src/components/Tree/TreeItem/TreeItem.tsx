/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { Children, MouseEvent, memo, useCallback, useEffect, useMemo } from 'react';
import { AnimateLayoutChanges, useSortable } from '@dnd-kit/sortable';
import { useDndContext, useDndMonitor } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import noop from 'lodash-es/noop';

import { merge } from '@utilities/merge';
import { FOCUS_VISIBLE_STYLE } from '@utilities/focusStyle';

import type {
    RegisterNodeChildrenPayload,
    TreeDragEndEvent,
    TreeDragStartEvent,
    TreeItemProps,
} from '@components/Tree/types';

import { Projection } from '../helpers';
import { INDENTATION_WIDTH } from '../Tree';
import { removeFragmentsAndEnrichChildren, useDeepCompareEffect } from '../utils';

import { DragHandle } from './DragHandle';
import { Overlay } from './TreeItemOverlay';
import { ExpandButton } from './ExpandButton';

const animateLayoutChanges: AnimateLayoutChanges = ({ isSorting, wasDragging }) =>
    isSorting || wasDragging ? false : true;

/** @private */
type TreeItemPrivateProps = {
    level?: number;
    parentId?: string;
    isSelected?: boolean;
    isExpanded?: boolean;
    treeDraggable?: boolean;
    onSelect?: (id: string) => void;
    onExpand?: (id: string) => void;
    onShrink?: (id: string) => void;
    projection?: Nullable<Projection>;
    registerOverlay?: (overlay: Overlay) => void;
    unregisterNodeChildren?: (payload: string) => void;
    registerNodeChildren?: (payload: RegisterNodeChildrenPayload) => void;
};

/** @private */
export type InternalTreeItemProps = TreeItemProps & TreeItemPrivateProps;

export const TreeItem = memo(
    ({
        id,
        type,
        label,
        onDrop,
        accepts,
        showCaret,
        children,
        parentId,
        level = 0,
        contentComponent,
        isSelected = false,
        isExpanded = false,
        treeDraggable = false,
        projection,
        onSelect,
        onExpand,
        onShrink,
        registerOverlay,
        registerNodeChildren,
        unregisterNodeChildren,
        draggable: itemDraggable = true,
        'data-test-id': dataTestId = 'fondue-tree-item',
    }: InternalTreeItemProps) => {
        const { active, over } = useDndContext();

        const draggable = treeDraggable && itemDraggable;

        const isActive = active?.id === id;

        const isWithin =
            over !== null &&
            projection !== null &&
            projection !== undefined &&
            projection.depth > over.data.current?.level;

        const canDrop =
            isActive &&
            !isWithin &&
            active.data.current &&
            (over?.data?.current?.accepts === undefined ||
                (typeof over?.data?.current?.accepts === 'string' &&
                    over.data.current.accepts?.split(', ').includes(active.data.current.type)));

        useEffect(() => {
            if (isActive) {
                document.body.style.setProperty('cursor', canDrop ? 'grabbing' : 'no-drop');
            }
        }, [canDrop, isActive]);

        const handleItemDragEnd = useCallback(
            (event: TreeDragEndEvent) => {
                const { over, active } = event;

                if (
                    !isActive ||
                    !projection ||
                    (active.id === over?.id && projection?.depth === projection?.minDepth)
                ) {
                    return;
                }

                if (isActive && over && canDrop && onDrop) {
                    onDrop({
                        id: active.id,
                        parentId: projection.parentId,
                        sort: projection.position,
                        parentType: projection.type,
                    });
                }
            },
            [canDrop, isActive, onDrop, projection],
        );

        const handleItemDragStart = useCallback(
            (event: TreeDragStartEvent) => {
                if (event.active.id !== id) {
                    return;
                }

                registerOverlay?.({ contentComponent, children, id, label, level });
            },
            [children, contentComponent, id, label, level, registerOverlay],
        );

        useDndMonitor({
            onDragEnd: handleItemDragEnd,
            onDragStart: handleItemDragStart,
        });

        const handleSelect = useCallback(
            (event: MouseEvent<HTMLElement>) => {
                event.stopPropagation();

                onSelect?.(id);
            },
            [id, onSelect],
        );

        const toggleExpand = useCallback(
            (event: MouseEvent<HTMLButtonElement>) => {
                event.stopPropagation();
                isExpanded ? onShrink?.(id) : onExpand?.(id);
            },
            [id, isExpanded, onExpand, onShrink],
        );

        const isParentActive = parentId && active?.id === parentId;

        const hasChildren = Children.count(children) > 0;

        const enrichedChildren = useMemo(
            () => removeFragmentsAndEnrichChildren(children, { parentId: id, level: level + 1 }),
            [children, id, level],
        );

        const childrenIds = useMemo(() => enrichedChildren.map((child) => child.props.id), [enrichedChildren]);

        const {
            attributes,
            listeners,
            transform,
            transition,
            setDraggableNodeRef,
            setDroppableNodeRef,
            setActivatorNodeRef,
        } = useSortable({
            id,
            disabled: !draggable,
            data: { type, accepts, parentId, level },
            animateLayoutChanges,
            transition: null,
        });

        useDeepCompareEffect(() => {
            if (Children.count(enrichedChildren) === 0) {
                return;
            }

            if (isActive || isParentActive) {
                unregisterNodeChildren?.(id);
                return;
            }

            if (isExpanded) {
                registerNodeChildren?.({ id, children: enrichedChildren });
            } else {
                unregisterNodeChildren?.(id);
            }
        }, [isActive, isExpanded, isParentActive, enrichedChildren, registerNodeChildren, unregisterNodeChildren, id]);

        const liClassName = useMemo(
            () =>
                merge([
                    FOCUS_VISIBLE_STYLE,
                    !isActive && !isSelected && 'focus-within:tw-bg-box-neutral',
                    'tw-outline-none tw-ring-inset tw-group tw-px-2.5 tw-no-underline tw-leading-5 tw-h-10',
                    isSelected
                        ? 'tw-font-medium tw-bg-box-neutral-strong tw-text-box-neutral-strong-inverse hover:tw-bg-box-neutral-strong-hover'
                        : 'hover:tw-bg-box-neutral tw-text-text',
                ]),
            [isActive, isSelected],
        );

        const containerClassName = merge([
            'tw-flex tw-items-center tw-h-10 tw-leading-5 tw-width-full',
            isActive && 'tw-border-box-selected-strong tw-border-dashed tw-border-2 tw-bg-box-selected-hover',
            isActive &&
                (isWithin || (!isWithin && !canDrop)) &&
                'tw-bg-box-negative-hover tw-border-box-negative-strong-hover tw-border-dashed tw-border-2',
        ]);

        const depthPadding = projection?.depth ? projection.depth * INDENTATION_WIDTH : undefined;
        const levelPadding = isActive ? 0 : level * INDENTATION_WIDTH;

        const liStyle = {
            paddingLeft: depthPadding ?? levelPadding,
        };

        const showContent = !isActive;
        const showChildren = isExpanded && !isActive;
        const showDragHandle = draggable && !isActive;
        const showLabel = label !== undefined && !isActive;
        const showExpandButton = showCaret === undefined ? hasChildren && !isActive : showCaret;

        const style = {
            transform: CSS.Transform.toString(transform),
            transition,
        };

        return (
            <li
                id={id}
                key={id}
                tabIndex={0}
                role="treeitem"
                style={liStyle}
                onKeyDown={noop}
                aria-label={label}
                aria-level={level + 1}
                onClick={handleSelect}
                className={liClassName}
                ref={setDroppableNodeRef}
                data-test-id={dataTestId}
                aria-selected={isSelected}
                aria-expanded={isExpanded}
                data-has-children={hasChildren}
                aria-owns={childrenIds.join(' ')}
            >
                <div ref={setDraggableNodeRef} className={containerClassName} style={style}>
                    <DragHandle
                        {...listeners}
                        {...attributes}
                        active={isSelected}
                        ref={setActivatorNodeRef}
                        disabled={!showDragHandle}
                        aria-hidden={!showDragHandle}
                        className={showDragHandle ? 'tw-visible' : 'tw-invisible tw-pointer-events-none'}
                    />

                    <ExpandButton
                        active={isSelected}
                        onClick={toggleExpand}
                        expanded={showChildren}
                        disabled={!showExpandButton}
                        aria-hidden={!showExpandButton}
                        className={showExpandButton ? 'tw-visible' : 'tw-invisible tw-pointer-events-none'}
                    />

                    {showLabel && (
                        <span className="first:tw-ml-3.5 tw-w-full tw-h-full tw-flex tw-items-center">{label}</span>
                    )}

                    {showContent && contentComponent}
                </div>
            </li>
        );
    },
);

TreeItem.displayName = 'FondueTreeItem';
