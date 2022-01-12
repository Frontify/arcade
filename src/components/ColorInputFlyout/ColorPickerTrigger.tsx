/* (c) Copyright Frontify Ltd., all rights reserved. */

import { MenuItemContent } from "@components/MenuItem/MenuItemContent";
import { Trigger } from "@components/Trigger/Trigger";
import IconColors from "@components/Icon/Generated/IconColors";
import { IconSize } from "@components/Icon/IconSize";
import { useMemoizedId } from "@hooks/useMemoizedId";
import { useFocusRing } from "@react-aria/focus";
import { getBackgroundColor } from "@utilities/colors";
import { merge } from "@utilities/merge";
import React, { FC } from "react";
import { ColorFormat } from "../../types/colors";
import { ColorInputTitle } from "./ColorInputTitle";
import { ColorPickerFlyoutProps } from "./ColorPickerFlyout";

type ColorInputTriggerProps = Pick<ColorPickerFlyoutProps, "id" | "currentColor" | "disabled"> & {
    isOpen?: boolean;
    format: ColorFormat;
};

export const ColorInputTrigger: FC<ColorInputTriggerProps> = ({
    id,
    currentColor,
    format,
    isOpen = false,
    disabled = false,
}) => {
    const { isFocusVisible, focusProps } = useFocusRing();

    return (
        <Trigger isOpen={isOpen} disabled={disabled} isFocusVisible={isFocusVisible}>
            <button
                {...focusProps}
                id={useMemoizedId(id)}
                className={merge([
                    "tw-overflow-hidden tw-flex-auto tw-h-full tw-rounded tw-text-left tw-outline-none tw-py-2 tw-px-3 tw-min-h-[34px] tw-pr-10",
                    !currentColor && "tw-text-black-60",
                    disabled && "tw-text-black-40",
                ])}
            >
                <MenuItemContent
                    title={
                        currentColor ? <ColorInputTitle format={format} currentColor={currentColor} /> : "Select color"
                    }
                    decorator={
                        currentColor ? (
                            <span
                                className={merge([
                                    "tw-h-4 tw-w-4 tw-rounded tw-flex tw-items-center tw-justify-center",
                                    disabled && "tw-opacity-50",
                                ])}
                                style={{ background: getBackgroundColor(currentColor) }}
                            />
                        ) : (
                            <span className="tw-text-black-70">
                                <IconColors size={IconSize.Size12} />
                            </span>
                        )
                    }
                />
            </button>
        </Trigger>
    );
};
