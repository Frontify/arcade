/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ReactElement, ReactNode } from 'react';

import { OnDropCallback } from '@components/DropZone';

export type TreeProps = {
    id: string;
    activeIds?: string[];
    draggable?: boolean;
    onDrop?: OnDropCallback<{ id: string; sort: Nullable<number> }>;
    children: ReactElement<TreeItemProps> | ReactElement<TreeItemProps>[];
};

export type ContentComponentArguments = {
    selected: boolean;
    hovered: boolean;
};

type TreeItemWithLabelProps = {
    label?: string;
    contentComponent?: never;
};

type TreeItemWIthContentComponentProps = {
    label?: never;
    contentComponent?: ({ selected, hovered }: ContentComponentArguments) => ReactNode;
};

export type TreeItemProps = {
    id: string;
    sort: Nullable<number>;
    onSelect?: (id: Nullable<string>) => void;
    onDrop?: OnDropCallback<{ id: string; sort: Nullable<number> }>;
    /**
     * The type of item being dragged.
     */
    type?: string;
    /**
     * The kinds of dragItems this dropTarget accepts
     */
    accepts?: { within: string | string[]; surrounded: string | string[] } | string | string[];

    children?: ReactElement<TreeItemProps> | ReactElement<TreeItemProps>[];
} & (TreeItemWithLabelProps | TreeItemWIthContentComponentProps);
