/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Checkbox, CheckboxState } from "@components/Checkbox/Checkbox";
import { mapToAriaProps } from "@components/Menu/Aria/helper";
import IconDocument from "@foundation/Icon/Generated/IconDocument";
import IconDocumentLibrary from "@foundation/Icon/Generated/IconDocumentLibrary";
import IconExternalLink from "@foundation/Icon/Generated/IconExternalLink";
import IconLink from "@foundation/Icon/Generated/IconLink";
import IconTemplate from "@foundation/Icon/Generated/IconTemplate";
import { useComboBox } from "@react-aria/combobox";
import { DismissButton } from "@react-aria/overlays";
import { useComboBoxState } from "@react-stately/combobox";
import { useMachine } from "@xstate/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC, Key, ReactElement, useCallback, useEffect, useMemo, useRef } from "react";
import { Popover } from "./Popover";
import { SearchInput } from "./SearchInput";
import { SearchResultsList } from "./SearchResultSection";
import { SectionActionMenu } from "./SectionActionMenu";
import { linkChooserMachine, LinkChooserState } from "./state/machine";
import { LinkChooserProps } from "./types";
import * as SearchRepository from "./repositories";
import { doesContainSubstring } from "./utils/helpers";
import { isLoaded, queryMatchesSelection } from "./utils/state";
import { createCustomLink } from "./utils/transformers";

export enum IconLabel {
    Document = "DOCUMENT",
    Library = "LIBRARY",
    Link = "LINK",
    External = "EXTERNAL",
    Template = "TEMPLATE",
}

export const ICON_OPTIONS: Record<IconLabel | string, ReactElement> = {
    [IconLabel.Document]: <IconDocument />,
    [IconLabel.Library]: <IconDocumentLibrary />,
    [IconLabel.Link]: <IconLink />,
    [IconLabel.External]: <IconExternalLink />,
    [IconLabel.Template]: <IconTemplate />,
};

export const DEFAULT_ICON = IconLabel.Link;
export const CUSTOM_LINK_ID = "custom-link";
export const MAX_STORED_ITEMS = 5;
export const QUERIES_STORAGE_KEY = "queries";

export const LinkChooser: FC<LinkChooserProps> = ({
    getGlobalByQuery = SearchRepository.getGlobalByQuery,
    getTemplatesByQuery = SearchRepository.getTemplatesByQuery,
    openPreview = window.open,
    clipboardOptions = navigator.clipboard,
    openInNewTab,
    ariaLabel = "Menu",
    label,
    placeholder,
    onOpenInNewTabChange,
    onLinkChange,
    disabled,
    clearable,
}) => {
    const [{ context, matches, value }, send, service] = useMachine(
        linkChooserMachine.withContext({
            searchResults: [],
            selectedResult: null,
            query: "",
            interruptedFetch: false,
            clipboardOptions,
            openPreview,
            getGlobalByQuery,
            getTemplatesByQuery,
            onLinkChange,
        }),
    );

    const handleClearClick = useCallback(() => {
        state.setInputValue("");
        state.setSelectedKey("");
        send("CLEARING", { data: { query: "" } });
    }, []);

    const handleSelectionChange = (key: Key) => {
        const foundItem = context.searchResults.find((item) => item.id === key);
        if (foundItem) {
            send("SET_SELECTED_SEARCH_RESULT", { data: { selectedResult: foundItem } });
        }
    };

    const handleInputChange = useCallback(
        (value: string) => {
            send("TYPING", { data: { query: value } });
        },
        [value],
    );

    const handleDropdownOpen = () => send("OPEN_DROPDOWN");

    const handleDropdownClose = () => {
        const selectedResult = context.query
            ? queryMatchesSelection(context.selectedResult, context.query)
                ? context.selectedResult
                : createCustomLink(state.inputValue)
            : null;
        send("CLOSE_DROPDOWN", { data: { selectedResult } });
        state.setSelectedKey(selectedResult?.id || "");
    };

    const searchResultMenuBlock = useMemo(
        () => [
            {
                id: "search",
                menuItems: context.searchResults,
            },
        ],
        [context.searchResults],
    );

    const props = mapToAriaProps(ariaLabel, searchResultMenuBlock);

    const state = useComboBoxState({
        ...props,
        defaultFilter: doesContainSubstring,
        onInputChange: handleInputChange,
        onSelectionChange: handleSelectionChange,
        menuTrigger: "focus",
        onOpenChange: (isOpen: boolean) => (isOpen ? handleDropdownOpen() : handleDropdownClose()),
        allowsEmptyCollection: true,
        onBlur: handleDropdownClose,
    });

    const inputRef = useRef<HTMLInputElement | null>(null);
    const listBoxRef = useRef<HTMLUListElement | null>(null);
    const popoverRef = useRef<HTMLDivElement | null>(null);

    const { inputProps, listBoxProps, labelProps } = useComboBox(
        {
            ...props,
            inputRef,
            listBoxRef,
            popoverRef,
            onBlur: handleDropdownClose,
        },
        state,
    );

    const formattedIcon = context.selectedResult?.icon
        ? ICON_OPTIONS[context.selectedResult.icon]
        : ICON_OPTIONS[DEFAULT_ICON];

    useEffect(() => {
        if (isLoaded(matches) && context.interruptedFetch) {
            send("TYPING", { data: { query: context.query } });
        }
    }, [context.interruptedFetch, value]);

    return (
        <div data-test-id="link-chooser" className="tw-relative tw-w-full tw-font-sans tw-text-s">
            <label {...labelProps}>{label}</label>
            <div>
                <SearchInput
                    ariaProps={inputProps}
                    selectedResult={context.selectedResult}
                    ref={inputRef}
                    disabled={disabled}
                    decorator={formattedIcon}
                    clearable={clearable}
                    placeholder={placeholder}
                    onClear={handleClearClick}
                    machineService={service}
                />
            </div>
            <AnimatePresence>
                {matches(LinkChooserState.Focused) && (
                    <motion.div
                        className="tw-absolute tw-left-0 tw-w-full tw-overflow-hidden tw-p-0 tw-shadow-mid tw-list-none tw-m-0 tw-mt-2 tw-z-10"
                        key="content"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ ease: [0.04, 0.62, 0.23, 0.98] }}
                        data-test-id="link-chooser-dropdown"
                    >
                        <DismissButton onDismiss={state.close} />
                        <Popover
                            popoverRef={popoverRef}
                            isOpen={matches(LinkChooserState.Focused)}
                            onClose={state.close}
                        >
                            <SearchResultsList
                                {...listBoxProps}
                                listBoxRef={listBoxRef}
                                state={state}
                                menuBlocks={searchResultMenuBlock}
                                query={context.query}
                                border={false}
                                machineService={service}
                            />
                            <div data-test-id="link-chooser-action-menu" className="tw-border-t tw-border-black-10">
                                <SectionActionMenu machineService={service} />
                            </div>
                        </Popover>
                        <DismissButton onDismiss={state.close} />
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="tw-my-2" data-test-id="link-chooser-new-tab">
                <Checkbox
                    value="new-tab"
                    disabled={disabled}
                    state={openInNewTab ? CheckboxState.Checked : CheckboxState.Unchecked}
                    onChange={onOpenInNewTabChange}
                    label="Open in New Tab"
                />
            </div>
        </div>
    );
};
