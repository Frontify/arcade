/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ReactElement } from 'react';
import { DraggableItem } from '@utilities/dnd';

export type RenderListItem<T> = (items: OrderableListItem<T>) => ReactElement;

export type CollectionItemProps<T> = {
    item: OrderableListItem<T>;
    dragDisabled: boolean;
    renderContent: RenderListItem<T>;
    listId: string;
};

export type OrderableListItem<T = Record<string, unknown>> = DraggableItem<T> & {
    alt: string;
};

export type OrderableListProps<T> = {
    items: OrderableListItem<T>[];
    dragDisabled: boolean;
    dragHandlerPosition?: 'left' | 'right' | 'none';
    onMove: (modifiedItems: OrderableListItem<T>[]) => void;
    renderContent: RenderListItem<T>;
    'data-test-id'?: string;
};

export enum ItemDragState {
    Dragging = 'Dragging',
    Idle = 'Idle',
    Preview = 'Preview',
}
