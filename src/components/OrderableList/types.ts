/* (c) Copyright Frontify Ltd., all rights reserved. */

import { DraggableCollectionState, DroppableCollectionState } from "@react-stately/dnd";
import { Key, ReactChild, ReactElement, RefObject } from "react";
import { GridNode } from "@react-types/grid";
import { GridCollection, GridState } from "@react-stately/grid";
import { ItemDropTarget } from "@react-types/shared";

export type RenderListItem<T> = (items: GridNode<OrderableListItem<T>>, dragProps: DragProperties) => ReactElement;

export type CollectionItemProps<T> = {
    item: GridNode<OrderableListItem<T>>;
    dragDisabled: boolean;
    gridState: GridState<T, GridCollection<OrderableListItem<T>>>;
    dragState: DraggableCollectionState;
    renderContent: RenderListItem<T>;
};

export type OrderableListItem<T = Record<string, unknown>> = T & {
    id: string;
    alt: string;
    type: "item";
};

export type DragProperties = {
    componentDragState: ItemDragState;
    isFocusVisible: boolean;
};

export type OrderableListProps<T> = {
    items: OrderableListItem<T>[];
    dragDisabled: boolean;
    disableTypeAhead?: boolean;
    onMove: (selectedGridItemKeys: Key[], gridItemLocation: ItemDropTarget) => void;
    renderContent: RenderListItem<T>;
};

export enum ItemDragState {
    Dragging = "Dragging",
    Idle = "Idle",
    Preview = "Preview",
}

export type InsertionIndicatorProps = {
    key: string;
    collectionRef: RefObject<HTMLDivElement>;
    target: ItemDropTarget;
    dropState: DroppableCollectionState;
};

//Storybook types

export const dragStoryStyles: Record<ItemDragState, string> = {
    [ItemDragState.Dragging]: "tw-bg-black-10 tw-border-black-20 tw-opacity-75",
    [ItemDragState.Idle]: "tw-border-black-20",
    [ItemDragState.Preview]: "tw-bg-white tw-border-violet-70 tw-border-4",
};

export enum HighlightColor {
    Violet = "Violet",
    Green = "Green",
    Red = "Red",
}

export const HighlightClasses: Record<HighlightColor, string> = {
    [HighlightColor.Violet]: "tw-text-violet-60",
    [HighlightColor.Green]: "tw-text-green-60",
    [HighlightColor.Red]: "tw-text-red-60",
};

export type HighlightProps = {
    color: HighlightColor;
    children: ReactChild;
};

export type StoryListItem = {
    content: JSX.Element;
};
