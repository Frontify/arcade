/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconProps } from "@elements/Icon/IconProps";
import { useFocusRing } from "@react-aria/focus";
import { useRadio, useRadioGroup } from "@react-aria/radio";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { useRadioGroupState } from "@react-stately/radio";
import { getFocusStyle } from "@utilities/focusStyle";
import generateRandomId from "@utilities/generateRandomId";
import { merge } from "@utilities/merge";
import { AnimateSharedLayout, motion } from "framer-motion";
import React, { FC, ReactElement, useRef, useState } from "react";

export type IconItem = {
    id: string;
    icon: ReactElement<IconProps>;
    ariaLabel: string;
};

export type TextItem = {
    id: string;
    name: string;
};

export type SliderProps = {
    id?: string;
    items: TextItem[] | IconItem[];
    activeItemId: string;
    onChange: (id: string) => void;
    ariaLabel?: string;
    disabled?: boolean;
};

const isIconItem = (item: TextItem | IconItem): item is IconItem => (item as IconItem).icon !== undefined;

export const Slider: FC<SliderProps> = ({
    id: propId,
    items,
    activeItemId,
    onChange,
    ariaLabel = "Slider",
    disabled = false,
}) => {
    const [id] = useState(propId || generateRandomId());
    const groupProps = { onChange, value: activeItemId, label: ariaLabel, isDisabled: disabled };
    const radioGroupState = useRadioGroupState(groupProps);
    const { radioGroupProps } = useRadioGroup(groupProps, radioGroupState);
    const { isFocusVisible, focusProps } = useFocusRing({ within: true });

    return (
        <ul
            {...radioGroupProps}
            {...focusProps}
            data-test-id="slider"
            className={merge([
                "tw-relative tw-w-full tw-grid tw-grid-flow-col tw-auto-cols-fr tw-justify-evenly tw-p-0 tw-border tw-border-black-20 tw-m-0 tw-bg-black-0 tw-rounded tw-font-sans tw-text-s tw-list-none",
                isFocusVisible && getFocusStyle(),
            ])}
        >
            <AnimateSharedLayout>
                {items.map((item, index) => {
                    const ref = useRef(null);
                    const isActive = item.id === activeItemId;
                    const { inputProps } = useRadio(
                        {
                            value: item.id,
                            "aria-label": isIconItem(item) ? item.ariaLabel : item.name,
                            isDisabled: disabled,
                        },
                        radioGroupState,
                        ref,
                    );

                    return (
                        <li key={item.id} className="tw-relative">
                            {isActive && (
                                <motion.div
                                    key={id}
                                    layoutId={id}
                                    className={merge([
                                        "tw-absolute tw--inset-px tw-border tw-rounded",
                                        disabled ? "tw-border-black-20 tw-bg-black-0" : "tw-border-black tw-bg-white",
                                    ])}
                                    // Since framer-motion sets `visibility` to `visible` which leads
                                    // to undesired side effects for example when this component is
                                    // used inside an `AccordionItem` that's why we explicitly
                                    // set the prop to `inherit` so framer leave it as is.
                                    animate={{ visibility: "inherit" }}
                                />
                            )}
                            <label
                                data-test-id={isIconItem(item) ? "slider-item-icon" : "slider-item-text"}
                                className={merge([
                                    "tw-relative tw-w-full tw-z-10 tw-inline-flex tw-justify-center tw-items-center tw-font-sans tw-font-normal tw-p-3 tw-text-center",
                                    isActive && !disabled ? "tw-text-black" : "tw-text-black-80",
                                    !disabled ? "hover:tw-text-black hover:tw-cursor-pointer" : "",
                                ])}
                                aria-hidden="true"
                            >
                                <VisuallyHidden>
                                    <input
                                        {...inputProps}
                                        data-test-id="slider-input"
                                        value={item.id}
                                        ref={ref}
                                        id={index === 0 ? id : undefined}
                                    />
                                </VisuallyHidden>
                                <span className="tw-overflow-hidden tw-overflow-ellipsis tw-whitespace-nowrap">
                                    {isIconItem(item) ? item.icon : item.name}
                                </span>
                            </label>
                        </li>
                    );
                })}
            </AnimateSharedLayout>
        </ul>
    );
};
