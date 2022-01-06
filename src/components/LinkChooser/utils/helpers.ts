/* (c) Copyright Frontify Ltd., all rights reserved. */

import { mergeProps } from "@react-aria/utils";
import { FocusEvent, KeyboardEvent } from "react";
import { DEFAULT_ICON, IconOptions } from "../LinkChooser";
import { ManualComboBoxEventProps, ManualComboBoxEvents, SearchResult } from "../types";

export const doesContainSubstring = (source: string, target: string): boolean =>
    source.toLowerCase().includes(target.toLowerCase());

export const useManualComboBoxEventHandlers = (
    { inputProps, inputRef, popoverRef, state }: ManualComboBoxEventProps,
    { onOpen, onClose }: ManualComboBoxEvents,
) =>
    mergeProps(inputProps, {
        onClick: onOpen,
        onTouchEnd: onOpen,
        onBlur: (event: FocusEvent<HTMLInputElement, HTMLElement>) => {
            console.log(event);
            if (
                popoverRef.current?.contains(event.relatedTarget as HTMLElement) ||
                event.relatedTarget?.dataset.comboBoxControl === "true"
            ) {
                inputRef.current?.focus();
            } else {
                onClose();
            }
        },
        onFocus: onOpen,
        onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => {
            const NAVIGATION_KEYS = ["ArrowRight", "ArrowLeft", "Enter", "Tab"];
            const { key } = event;
            if (!state.isOpen && !NAVIGATION_KEYS.includes(key)) {
                onOpen();
            } else if (state.isOpen && key === "Enter") {
                onClose();
            }
        },
    });

export const getDefaultData = async (): Promise<SearchResult[]> =>
    new Promise((resolve) =>
        setTimeout(() => {
            resolve([]);
        }, 2000),
    );

export const decoratedResults = (results: SearchResult[]) =>
    results.map((item) => ({
        ...item,
        decorator: IconOptions[item.icon || DEFAULT_ICON],
    }));
