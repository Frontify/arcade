/* (c) Copyright Frontify Ltd., all rights reserved. */

import { getDisabledItemIds, getMenuItems, mapToAriaProps } from "@components/ActionMenu/Aria/helper";
import { MenuBlock, MenuItemType, SelectMenu } from "@components/Dropdown/SelectMenu/SelectMenu";
import { MenuItemStyle, menuItemTextColorRecord, MenuItemTextColorState } from "@components/MenuItem";
import { MenuItemContent, MenuItemContentSize } from "@components/MenuItem/MenuItemContent";
import { Trigger, TriggerSize } from "@components/Trigger/Trigger";
import { useMemoizedId } from "@hooks/useMemoizedId";
import { useButton } from "@react-aria/button";
import { FocusScope, useFocusRing } from "@react-aria/focus";
import { DismissButton, useOverlay } from "@react-aria/overlays";
import { HiddenSelect, useSelect } from "@react-aria/select";
import { mergeProps } from "@react-aria/utils";
import { useSelectState } from "@react-stately/select";
import { merge } from "@utilities/merge";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC, ReactElement, useEffect, useRef } from "react";
import { DEFAULT_DROPDOWN_MAX_HEIGHT, useDropdownAutoHeight } from "./useDropdownAutoHeight";
import { Validation } from "@utilities/validation";
import { LoadingCircle, LoadingCircleSize } from "@components/LoadingCircle";

export enum DropdownSize {
    Small = "Small",
    Large = "Large",
}

export enum DropdownAlignment {
    Start = "Start",
    End = "End",
}

export enum DropdownPosition {
    Top = "Top",
    Bottom = "Bottom",
}

export type DropdownProps = {
    id?: string;
    menuBlocks: MenuBlock[];
    onChange: (id?: string | number) => void;
    activeItemId?: string | number;
    placeholder?: string;
    size?: DropdownSize;
    disabled?: boolean;
    clearable?: boolean;
    ariaLabel?: string;
    decorator?: ReactElement;
    autoResize?: boolean;
    validation?: Validation;
    alignment?: DropdownAlignment;
    position?: DropdownPosition;
};

const getActiveItem = (blocks: MenuBlock[], activeId: string | number): MenuItemType | null => {
    const disabledItems = getDisabledItemIds(getMenuItems(blocks));
    if (disabledItems.has(activeId)) {
        return null;
    }

    return (
        blocks
            .map(({ menuItems }) => menuItems)
            .flat()
            .find(({ id }) => id.toString() === activeId?.toString()) || null
    );
};

export const Dropdown: FC<DropdownProps> = ({
    id: propId,
    menuBlocks,
    onChange,
    activeItemId,
    placeholder = "Select item",
    size = DropdownSize.Small,
    disabled = false,
    clearable = false,
    ariaLabel = "Dropdown",
    decorator,
    autoResize = true,
    validation = Validation.Default,
    alignment = DropdownAlignment.Start,
    position = DropdownPosition.Bottom,
}) => {
    const activeItem = !!activeItemId ? getActiveItem(menuBlocks, activeItemId) : null;
    const props = mapToAriaProps(ariaLabel, menuBlocks);
    const state = useSelectState({
        ...props,
        defaultSelectedKey: activeItemId,
        onSelectionChange: (key) => onChange(key),
        disabledKeys: getDisabledItemIds(getMenuItems(menuBlocks)),
    });
    const triggerRef = useRef<HTMLButtonElement | null>(null);

    const { triggerProps, valueProps, menuProps } = useSelect({ ...props, isDisabled: disabled }, state, triggerRef);

    const { buttonProps } = useButton({ ...triggerProps, isDisabled: disabled }, triggerRef);
    const { isOpen } = state;
    const { isFocusVisible, focusProps } = useFocusRing();
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const { overlayProps } = useOverlay(
        { isOpen, onClose: () => state.close(), shouldCloseOnBlur: true, isDismissable: true },
        overlayRef,
    );

    useEffect(() => {
        if (state.disabledKeys.has(activeItemId as string)) {
            return;
        }

        state.setSelectedKey(activeItemId as string);
    }, [activeItemId]);

    const { maxHeight } = useDropdownAutoHeight(triggerRef, { isOpen, autoResize });

    const heightIsReady = !autoResize || maxHeight !== DEFAULT_DROPDOWN_MAX_HEIGHT;

    const enabledTextColorState = activeItem ? MenuItemTextColorState.Active : MenuItemTextColorState.Default;
    const textState = disabled ? MenuItemTextColorState.Disabled : enabledTextColorState;

    const textColorClass = activeItem
        ? menuItemTextColorRecord[activeItem.style || MenuItemStyle.Primary][textState]
        : "tw-text-black-60";

    const onClear = clearable
        ? () => {
              state.setSelectedKey("");
              const first = state.collection.getFirstKey();
              if (first) {
                  state.selectionManager.setFocusedKey(first);
              }
          }
        : undefined;

    const showClear = !!activeItem && !!onClear;

    const leftPosition =
        triggerRef.current && overlayRef.current
            ? triggerRef.current?.getBoundingClientRect().right - overlayRef.current?.getBoundingClientRect().width
            : "auto";
    const bottomPosition = triggerRef.current ? triggerRef.current?.getBoundingClientRect().top - 8 : "auto";

    return (
        <div className="tw-w-full tw-font-sans tw-text-s">
            <Trigger
                disabled={disabled}
                buttonProps={buttonProps}
                isFocusVisible={!disabled && isFocusVisible}
                isOpen={isOpen}
                size={size === DropdownSize.Large ? TriggerSize.Large : TriggerSize.Small}
                onClear={onClear}
                showClear={showClear}
                validation={validation}
            >
                <HiddenSelect state={state} triggerRef={triggerRef} />
                <button
                    {...mergeProps(buttonProps, focusProps)}
                    id={useMemoizedId(propId)}
                    ref={triggerRef}
                    data-test-id="dropdown-trigger"
                    className={merge([
                        "tw-overflow-hidden tw-flex-auto tw-h-full tw-rounded tw-text-left tw-outline-none",
                        size === DropdownSize.Small
                            ? "tw-py-2 tw-pl-3 tw-min-h-[34px]"
                            : "tw-pl-5 tw-py-4 tw-min-h-[60px]",
                        showClear ? "tw-pr-11" : "tw-pr-7",
                        textColorClass,
                    ])}
                >
                    <MenuItemContent
                        ariaProps={valueProps}
                        title={activeItem?.title || placeholder}
                        decorator={decorator ?? activeItem?.decorator}
                        size={size === DropdownSize.Small ? MenuItemContentSize.Small : MenuItemContentSize.Large}
                    />
                </button>
            </Trigger>
            <AnimatePresence>
                {!disabled && isOpen && heightIsReady && (
                    <motion.div
                        style={{
                            width: triggerRef.current?.getBoundingClientRect().width,
                            minWidth: "fit-content",
                            left: alignment === DropdownAlignment.Start ? "auto" : leftPosition,
                            bottom: position === DropdownPosition.Top ? bottomPosition : "auto",
                        }}
                        className={merge([
                            "tw-absolute tw-p-0 tw-shadow-mid tw-list-none tw-m-0 tw-z-20 tw-overflow-hidden tw-box-content",
                            position === DropdownPosition.Bottom ? "tw-mt-2" : "",
                        ])}
                        key="content"
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        transition={{ ease: [0.04, 0.62, 0.23, 0.98], duration: 0.5 }}
                    >
                        <FocusScope restoreFocus>
                            <div
                                {...overlayProps}
                                ref={overlayRef}
                                style={autoResize ? { maxHeight } : {}}
                                className="tw-flex tw-flex-col"
                                data-test-id="dropdown-menu"
                                role="dialog"
                            >
                                <DismissButton onDismiss={() => close()} />
                                <SelectMenu ariaProps={menuProps} state={state} menuBlocks={menuBlocks} scrollable />
                                <DismissButton onDismiss={() => close()} />
                            </div>
                        </FocusScope>
                    </motion.div>
                )}
            </AnimatePresence>
            {validation === Validation.Loading && (
                <span className="tw-absolute tw-top-[-0.55rem] tw-right-[-0.55rem] tw-bg-white tw-rounded-full tw-p-[2px] tw-border tw-border-black-10">
                    <LoadingCircle size={LoadingCircleSize.ExtraSmall} />
                </span>
            )}
        </div>
    );
};
