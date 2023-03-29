/* (c) Copyright Frontify Ltd., all rights reserved. */

import { SetStateAction } from 'react';
import { arrayMove } from '@dnd-kit/sortable';
import { UniqueIdentifier } from '@dnd-kit/core';

import { TreeState } from '../types';

type AnnouncementItem = {
    level: number;
    id: UniqueIdentifier;
    parentId: UniqueIdentifier;
};

type AnnouncementArgs = {
    eventName: string;
    activeId: UniqueIdentifier;
    overId?: UniqueIdentifier;
    treeState: TreeState;
    currentPosition: Nullable<{ overId: UniqueIdentifier; parentId: Nullable<UniqueIdentifier> }>;
    setCurrentPosition: React.Dispatch<
        SetStateAction<
            Nullable<{
                overId: UniqueIdentifier;
                parentId: Nullable<UniqueIdentifier>;
            }>
        >
    >;
};

export const getMovementAnnouncement = ({
    eventName,
    activeId,
    overId,
    treeState,
    currentPosition,
    setCurrentPosition,
}: AnnouncementArgs) => {
    const projected = treeState.projection;

    if (overId && projected) {
        if (eventName !== 'onDragEnd') {
            if (
                currentPosition &&
                projected.parentId === currentPosition.parentId &&
                overId === currentPosition.overId
            ) {
                return;
            } else {
                setCurrentPosition({
                    parentId: projected.parentId,
                    overId,
                });
            }
        }

        const announcementNodes: AnnouncementItem[] = treeState.nodes.map(({ props }) => ({
            id: props.id,
            level: props.level,
            parentId: props.parentId,
        }));

        const overIndex = announcementNodes.findIndex(({ id }) => id === overId);
        const activeIndex = announcementNodes.findIndex(({ id }) => id === activeId);
        const sortedItems = arrayMove(announcementNodes, activeIndex, overIndex);

        const previousItem = sortedItems[overIndex - 1];

        let announcement;
        const movedVerb = eventName === 'onDragEnd' ? 'dropped' : 'moved';
        const nestedVerb = eventName === 'onDragEnd' ? 'dropped' : 'nested';

        if (!previousItem) {
            const nextItem = sortedItems[overIndex + 1];
            announcement = `${activeId} was ${movedVerb} before ${nextItem.id}.`;
        } else {
            if (projected.depth > previousItem.level) {
                announcement = `${activeId} was ${nestedVerb} under ${previousItem.id}.`;
            } else {
                let previousSibling: AnnouncementItem | undefined = previousItem;
                while (previousSibling && projected.depth < previousSibling.level) {
                    const parentId: UniqueIdentifier | null = previousSibling.parentId;
                    previousSibling = sortedItems.find(({ id }) => id === parentId);
                }

                if (previousSibling) {
                    announcement = `${activeId} was ${movedVerb} after ${previousSibling.id}.`;
                }
            }
        }

        return announcement;
    }

    return;
};
