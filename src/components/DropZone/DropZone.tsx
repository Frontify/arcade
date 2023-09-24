/* (c) Copyright Frontify Ltd., all rights reserved. */

import { useDrop } from 'react-dnd';
import { merge } from '@utilities/merge';
import { LegacyOrderableListItem } from '@components/LegacyOrderableList/types';
import { DraggableItem } from '@utilities/dnd';

import { CollisionPosition } from '..';

export type OnDropCallback<T> = (
    targetItem: DraggableItem<T>,
    sourceItem: DraggableItem<T>,
    position: CollisionPosition,
    direction?: 'up' | 'down',
) => void;

export type DropZoneData<T> = {
    targetItem: DraggableItem<T>;
    position: CollisionPosition;
};

export type DropZoneProps<T> = {
    data: DropZoneData<T>;
    onDrop?: OnDropCallback<T>;
    accept: string | string[];
    children?: JSX.Element;
    'data-test-id'?: string;
};

export const DropZone = <T extends object>({
    data,
    onDrop,
    accept,
    children,
    'data-test-id': dataTestId = 'drop-zone',
}: DropZoneProps<T>) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: accept || '',
        drop: (item: LegacyOrderableListItem<T>) => {
            onDrop?.(data.targetItem, item, data.position);
        },
        canDrop: (item: LegacyOrderableListItem<T>) => {
            // can't drop an item on itself
            if (item.id === data.targetItem.id) {
                return false;
            }
            // otherwise anything can be dropped anywhere ATM
            return true;
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    const isActive = isOver && canDrop;
    const bgColorClassName = 'tw-bg-violet-20';
    const outerDropZoneClassNames = 'tw-my-[-4px] tw-h-[10px] tw-py-1 tw-outline-none tw-relative tw-z-20';
    const activeOuterDropZoneClassNames = 'tw-border-violet-60 tw-border-2 tw-h-7 tw-bg-clip-content';

    return (
        <div
            role="row"
            aria-hidden={!isActive}
            data-test-id={dataTestId}
            className={merge([
                'tw-w-full tw-transition-height',
                data.position !== 'within' ? outerDropZoneClassNames : 'tw-h-auto',
                isActive && data.position !== 'within' ? activeOuterDropZoneClassNames : '',
                isActive && data.position === 'within' ? bgColorClassName : '',
            ])}
            ref={drop}
        >
            {children}
        </div>
    );
};

DropZone.displayName = 'FondueDropZone';
