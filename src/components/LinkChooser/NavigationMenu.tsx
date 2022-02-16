/* eslint-disable jsx-a11y/click-events-have-key-events */
/* (c) Copyright Frontify Ltd., all rights reserved. */

import { MenuItem } from "@components/MenuItem";
import { SelectionIndicatorIcon } from "@components/MenuItem/MenuItem";
import { MenuItemContentSize } from "@components/MenuItem/MenuItemContent";
import { IconArrowLeft } from "@foundation/Icon";
import { getInteractionModality } from "@react-aria/interactions";
import { useOption } from "@react-aria/listbox";
import { merge } from "@utilities/merge";
import { useActor } from "@xstate/react";
import React, { FC, useMemo, useRef } from "react";
import { defaultSection } from "./sections";
import { DropdownState, LinkChooserState } from "./state/machine";
import { NavigationMenuItemProps, NavigationMenuProps } from "./types";

export const NavigationMenu: FC<NavigationMenuProps> = ({ machineService, state }) => {
    const [{ matches, context }, send] = useActor(machineService);

    return matches(`${LinkChooserState.Focused}.${DropdownState.Default}`) ? (
        <ul className="tw-py-2">
            {context.extraSections.map((section) => (
                <NavigationMenuItem
                    key={section.id}
                    section={section}
                    state={state}
                    onPress={() => {
                        send({
                            type: "SELECT_EXTRA_SECTION",
                            data: { getExtraResultsByQuery: section.getResults, currentSectionId: section.id },
                        });
                    }}
                />
            ))}
        </ul>
    ) : null;
};

export const NavigationMenuItem: FC<NavigationMenuItemProps> = ({
    section: { id, title },
    onPress,
    state,
    direction = "right",
}) => {
    const ref = useRef<HTMLLIElement>(null);
    const { isFocused } = useOption(
        {
            key: id,
            shouldFocusOnHover: false,
        },
        state,
        ref,
    );

    const itemTitle = useMemo(
        () => (id === defaultSection.id ? <p className="tw-ml-1 tw-text-black-80 tw-capitalize">{title}</p> : title),
        [title],
    );

    const isFocusVisible = getInteractionModality() !== "pointer";

    return (
        <div
            onClick={onPress}
            tabIndex={0}
            role="menuitem"
            aria-label={`Navigate to ${id} section of search results.`}
            data-key={id}
            data-test-id="link-chooser-navigation-menu-item"
            className={merge(["hover:tw-bg-black-10", isFocused && isFocusVisible && "tw-bg-black-10"])}
        >
            <MenuItem
                title={itemTitle}
                selectionIndicator={direction === "right" ? SelectionIndicatorIcon.CaretRight : undefined}
                decorator={direction === "left" ? <IconArrowLeft /> : undefined}
                size={MenuItemContentSize.XSmall}
            />
        </div>
    );
};
