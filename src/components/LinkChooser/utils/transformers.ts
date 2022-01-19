/* (c) Copyright Frontify Ltd., all rights reserved. */

import { SelectionIndicatorIcon } from "@components/MenuItem/MenuItem";
import { MenuItemContentSize } from "@components/MenuItem/MenuItemContent";
import { CUSTOM_LINK_ID, DEFAULT_ICON, MAX_STORED_ITEMS, QUERIES_STORAGE_KEY } from "../LinkChooser";
import { SearchResult } from "../types";

export const createCustomLink = (query: string): SearchResult =>
    ({
        id: CUSTOM_LINK_ID,
        title: query,
        link: query,
        icon: DEFAULT_ICON,
        size: MenuItemContentSize.Large,
        selectionIndicator: SelectionIndicatorIcon.Check,
    } as SearchResult);

export const retrieveRecentQueries = (): SearchResult[] => {
    const recentQueries = JSON.parse(localStorage.getItem(QUERIES_STORAGE_KEY) || "null");
    return recentQueries || [];
};

export const mergeResultWithRecentQueries = (selectedResult: SearchResult): SearchResult[] => {
    const retrievedQueries = retrieveRecentQueries();
    const retrievedItem = retrievedQueries.find((item: SearchResult) => item.id === selectedResult?.id);
    let updatedQueries;
    if (retrievedItem) {
        updatedQueries = [
            { ...selectedResult },
            ...retrievedQueries.filter((item: SearchResult) => item.id !== selectedResult?.id),
        ];
    } else if (retrievedQueries.length < MAX_STORED_ITEMS) {
        updatedQueries = [{ ...selectedResult }, ...retrievedQueries];
    } else {
        updatedQueries = [{ ...selectedResult }, ...retrievedQueries.slice(0, -1)];
    }
    return updatedQueries;
};
