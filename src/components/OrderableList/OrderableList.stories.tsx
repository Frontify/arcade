/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { OrderableList as OrderableListComponent } from './OrderableList';
import { OrderableListItem } from './types';
import { OrderableListProps } from '.';
import { chain } from '@react-aria/utils';
import { renderContent, storyItems } from '@components/OrderableList/utils';

export default {
    title: 'Components/Orderable List',
    component: OrderableListComponent,
    tags: ['autodocs'],
    args: {
        dragDisabled: false,
        dragHandlerPosition: 'none',
    },
    argTypes: {
        onMove: { action: 'onMove' },
        dragHandlerPosition: {
            table: { category: 'Item Options' },
            options: ['left', 'right', 'none'],
            control: { type: 'inline-radio' },
        },
    },
} as Meta<OrderableListProps<StoryListItem>>;

type StoryListItem = {
    textContent: JSX.Element;
};

export const OrderableList: StoryFn<OrderableListProps<StoryListItem>> = ({
    onMove,
    dragDisabled,
    dragHandlerPosition,
}) => {
    const [items, setItems] = useState(storyItems);

    const handleMove = (modifiedItems: OrderableListItem<StoryListItem>[]) => {
        const modifiedArray = items.map((item) => {
            const matchingModifiedItem = modifiedItems.find((modifiedItem) => modifiedItem.id === item.id);
            if (matchingModifiedItem) {
                return { ...matchingModifiedItem };
            }

            return { ...item };
        });

        setItems(modifiedArray);
    };

    return (
        <>
            <div className="tw-m-auto tw-w-[600px] tw-pb-6">
                <OrderableListComponent
                    items={items}
                    onMove={chain(handleMove, onMove)}
                    dragDisabled={dragDisabled}
                    dragHandlerPosition={dragHandlerPosition}
                    renderContent={(...args) => renderContent(...args)}
                />
            </div>

            <div className="tw-m-auto tw-w-[600px]">
                <OrderableListComponent
                    items={items}
                    onMove={chain(handleMove, onMove)}
                    dragDisabled={dragDisabled}
                    dragHandlerPosition={dragHandlerPosition}
                    renderContent={(...args) => renderContent(...args)}
                />
            </div>
        </>
    );
};
