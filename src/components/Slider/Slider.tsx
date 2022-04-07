/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconProps } from "@foundation/Icon/IconProps";
import { useMemoizedId } from "@hooks/useMemoizedId";
import { useFocusRing } from "@react-aria/focus";
import { setInteractionModality } from "@react-aria/interactions";
import { useRadio, useRadioGroup } from "@react-aria/radio";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { RadioGroupState, useRadioGroupState } from "@react-stately/radio";
import { FOCUS_STYLE } from "@utilities/focusStyle";
import { merge } from "@utilities/merge";
import { motion } from "framer-motion";
import React, { FC, ReactElement, useMemo, useRef } from "react";

export type IconItem = {
    id: string;
    icon: ReactElement<IconProps>;
    ariaLabel: string;
};

export type TextOrNumberItem = {
    id: string;
    value: string | number;
};

export type SliderProps = {
    id?: string;
    items: TextOrNumberItem[] | IconItem[];
    activeItemId: string;
    onChange: (id: string) => void;
    ariaLabel?: string;
    disabled?: boolean;
};

const isIconItem = (item: TextOrNumberItem | IconItem): item is IconItem => (item as IconItem).icon !== undefined;

interface SliderItemProps {
    id: string;
    item: TextOrNumberItem | IconItem;
    disabled: boolean;
    radioGroupState: RadioGroupState;
}

const SliderItem = (props: SliderItemProps) => {
    const { id, item, disabled, radioGroupState } = props;
    const ref = useRef<HTMLInputElement | null>(null);
    const isActive = item.id === radioGroupState.selectedValue;
    const { inputProps } = useRadio(
        {
            value: item.id,
            "aria-label": isIconItem(item) ? item.ariaLabel : item.value.toString(),
            isDisabled: disabled,
            id: isActive ? id : undefined,
        },
        radioGroupState,
        ref,
    );
    const { isFocusVisible, focusProps } = useFocusRing();

    const handleMockLabelClick = () => {
        if (!disabled) {
            radioGroupState.setSelectedValue(item.id);
            ref.current?.focus();
            setInteractionModality("pointer");
        }
    };

    return (
        <li key={item.id} className={merge(["tw-relative", isFocusVisible && FOCUS_STYLE])}>
            <div
                // TODO: Change element back to label when bug #2380 from @react-aria is fixed
                // https://github.com/adobe/react-spectrum/issues/2380
                role="none"
                onClick={handleMockLabelClick}
                data-test-id={
                    isIconItem(item)
                        ? "slider-item-icon"
                        : typeof item.value === "string"
                        ? "slider-item-text"
                        : "slider-item-number"
                }
                className={merge([
                    "tw-relative tw-w-full tw-z-10 tw-inline-flex tw-justify-center tw-items-center tw-font-sans tw-font-normal tw-h-full tw-text-center",
                    isActive && !disabled ? "tw-text-black" : "tw-text-black-80",
                    !disabled ? "hover:tw-text-black hover:tw-cursor-pointer" : "",
                ])}
            >
                <VisuallyHidden>
                    <input {...inputProps} {...focusProps} data-test-id="slider-input" ref={ref} />
                </VisuallyHidden>
                <span className="tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap">
                    {isIconItem(item) ? <span aria-label={item.ariaLabel}>{item.icon}</span> : item.value.toString()}
                </span>
            </div>
        </li>
    );
};

export const Slider: FC<SliderProps> = ({
    id: propId,
    items,
    activeItemId,
    onChange,
    ariaLabel = "Slider",
    disabled = false,
}) => {
    const id = useMemoizedId(propId);
    const groupProps = { onChange, value: activeItemId, label: ariaLabel, isDisabled: disabled };
    const radioGroupState = useRadioGroupState(groupProps);
    const { radioGroupProps } = useRadioGroup(groupProps, radioGroupState);
    const itemElements = useMemo(() => {
        return items.map((item, i) => (
            <SliderItem
                id={id}
                item={item}
                disabled={disabled}
                radioGroupState={radioGroupState}
                key={`slider-${id}-item-${i}`}
            />
        ));
    }, [items.length, radioGroupState, disabled, id]);
    const selectedIndex = items.findIndex((item) => item.id === radioGroupState.selectedValue);

    return (
        <ul
            {...radioGroupProps}
            data-test-id="slider"
            className="tw-relative tw-h-9 tw-w-full tw-grid tw-grid-flow-col tw-auto-cols-fr tw-justify-evenly tw-p-0 tw-border tw-border-black-20 tw-m-0 tw-bg-black-0 tw-rounded tw-font-sans tw-text-s tw-list-none tw-select-none"
        >
            <motion.div
                aria-hidden="true"
                animate={{ x: `${100 * selectedIndex}%` }}
                initial={false}
                transition={{ type: "tween", duration: 0.3 }}
                style={{
                    width: `${100 / items.length}%`,
                }}
                className={merge([
                    "tw-absolute tw--inset-px tw-h-full tw-box-content tw-border tw-rounded tw-pointer-events-none",
                    disabled ? "tw-border-black-20 tw-bg-black-0" : "tw-border-black tw-bg-white",
                ])}
            />
            {itemElements}
        </ul>
    );
};
