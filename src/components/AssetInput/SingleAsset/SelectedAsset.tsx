import { ActionMenu } from "@components/ActionMenu/ActionMenu/ActionMenu";
import IconCaretDown from "@foundation/Icon/Generated/IconCaretDown";
import { IconSize } from "@foundation/Icon/IconSize";
import { useMemoizedId } from "@hooks/useMemoizedId";
import { useButton } from "@react-aria/button";
import { FocusScope, useFocusRing } from "@react-aria/focus";
import { useMenuTrigger } from "@react-aria/menu";
import { DismissButton, useOverlay } from "@react-aria/overlays";
import { mergeProps } from "@react-aria/utils";
import { useMenuTriggerState } from "@react-stately/menu";
import { FOCUS_STYLE } from "@utilities/focusStyle";
import { merge } from "@utilities/merge";
import { AnimatePresence, motion } from "framer-motion";
import React, { FC, useRef } from "react";
import { AssetInputProps, AssetInputSize, AssetType } from "../AssetInput";
import { AssetThumbnail } from "../AssetThumbnail";
import { AssetSubline } from "./AssetSubline";
import { SpinningCircle } from "./SpinningCircle";

export type SelectedAssetProps = Pick<AssetInputProps, "actions" | "isLoading" | "size"> & {
    asset: AssetType;
};

export const SelectedAsset: FC<Required<SelectedAssetProps>> = ({ asset, size, actions, isLoading }) => {
    const menuId = useMemoizedId();
    const labelId = useMemoizedId();
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const menuState = useMenuTriggerState({ closeOnSelect: true });
    const { isOpen, focusStrategy } = menuState;
    const { menuTriggerProps } = useMenuTrigger({}, menuState, buttonRef);
    const { buttonProps } = useButton(menuTriggerProps, buttonRef);
    const { isFocusVisible, focusProps } = useFocusRing();
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const { overlayProps } = useOverlay(
        { onClose: () => menuState.close(), shouldCloseOnBlur: true, isOpen, isDismissable: true },
        overlayRef,
    );
    const title = asset?.name || "Your Asset";

    return (
        <div
            className="tw-font-sans tw-w-full tw-text-s tw-bg-transparent tw-font-normal tw-min-w-0"
            aria-labelledby={labelId}
            title={title}
            data-test-id="asset-single-input"
        >
            <button
                {...mergeProps(buttonProps, focusProps)}
                ref={buttonRef}
                className={merge([
                    "tw-w-full tw-flex tw-border tw-rounded hover:tw-border-black-90 dark:hover:tw-border-black-40 focus-visible:tw-outline-none",
                    isFocusVisible && FOCUS_STYLE,
                    size === AssetInputSize.Large ? "tw-h-[11.5rem] tw-flex-col" : "tw-h-14",
                    isOpen || isFocusVisible
                        ? "tw-border-black-90 dark:tw-border-black-10"
                        : "tw-border-black-20 dark:tw-border-black-80",
                ])}
            >
                {isLoading && !asset && (
                    <div
                        className={merge([
                            "tw-flex tw-justify-center tw-items-center",
                            size === AssetInputSize.Large ? "tw-w-full tw-h-32" : "tw-w-14 tw-h-full",
                        ])}
                    >
                        <SpinningCircle size={size} />
                    </div>
                )}
                {asset && <AssetThumbnail asset={asset} size={size} isActive={isOpen || isFocusVisible} />}
                <div
                    className={merge([
                        "tw-min-w-0 tw-max-w-full tw-flex tw-flex-auto tw-self-stretch tw-border-black-100 tw-border-opacity-25",
                        size === AssetInputSize.Large ? "tw-h-14 tw-border-t" : "tw-h-full tw-border-l",
                    ])}
                >
                    <div className="tw-min-w-0 tw-pr-3 tw-pl-4 tw-flex tw-flex-auto tw-flex-col tw-items-start tw-justify-center tw-h-full">
                        <span
                            id={labelId}
                            className={merge([
                                "tw-max-w-full tw-text-black-100 tw-text-s tw-truncate dark:tw-text-white",
                                (isOpen || isFocusVisible) && "tw-font-medium",
                            ])}
                        >
                            {title}
                        </span>
                        <AssetSubline asset={asset} isLoading={isLoading} />
                    </div>
                    <div className="tw-p-4 tw-flex tw-flex-none tw-items-center tw-justify-center">
                        <span
                            className={merge([
                                "tw-transition-transform",
                                isOpen ? "tw-rotate-180 tw-text-black-90" : "tw-text-black-60",
                            ])}
                        >
                            <IconCaretDown size={IconSize.Size16} />
                        </span>
                    </div>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        style={{
                            width: buttonRef.current?.getBoundingClientRect().width,
                        }}
                        className="tw-absolute tw-left-auto tw-min-w-fit tw-w-full tw-overflow-hidden tw-box-border tw-p-0 tw-shadow-mid tw-list-none tw-m-0 tw-mt-2 tw-z-20"
                        key={`asset-input-menu-${menuId}`}
                        initial={{ height: 0 }}
                        animate={{ height: "auto" }}
                        exit={{ height: 0 }}
                        transition={{ ease: [0.04, 0.62, 0.23, 0.98], duration: 0.5 }}
                    >
                        <FocusScope restoreFocus>
                            <div {...overlayProps} ref={overlayRef}>
                                <DismissButton onDismiss={() => menuState.close()} />
                                <ActionMenu menuBlocks={actions} focus={focusStrategy} />
                                <DismissButton onDismiss={() => menuState.close()} />
                            </div>
                        </FocusScope>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
