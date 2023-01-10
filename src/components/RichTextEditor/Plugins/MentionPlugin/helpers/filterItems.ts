/* (c) Copyright Frontify Ltd., all rights reserved. */

import { TComboboxItemBase } from '@udecode/plate';

export const filterItems = (value: string) => (item: TComboboxItemBase) =>
    item.text.search(new RegExp(`${value}`, 'i')) > -1;
