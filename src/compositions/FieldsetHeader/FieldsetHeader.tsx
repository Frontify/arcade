/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { cloneElement, FC, isValidElement, ReactNode } from "react";
import IconAddSimple from "@elements/Icon/Generated/IconAddSimple";
import IconCaretDown from "@elements/Icon/Generated/IconCaretDown";
import IconCaretUp from "@elements/Icon/Generated/IconCaretUp";
import IconMinus from "@elements/Icon/Generated/IconMinus";
import { IconSize } from "@elements/Icon/IconSize";
import { Switch, SwitchSize } from "@elements/Switch/Switch";
import generateRandomId from "@utilities/generateRandomId";
import { merge } from "@utilities/merge";

export enum FieldsetHeaderSize {
    Small = "Small",
    Large = "Large",
}

export enum FieldsetHeaderType {
    Default = "Default",
    Switch = "Switch",
    Accordion = "Accordion",
    AddRemove = "AddRemove",
}

export type FieldsetHeaderProps = {
    size?: FieldsetHeaderSize;
    active?: boolean;
    decorator?: ReactNode;
    type?: FieldsetHeaderType;
    disabled?: boolean;
    bold?: boolean;
    children: string;
    onClick?: () => void;
    as?: keyof JSX.IntrinsicElements;
    tabIndex?: number;
};

const renderType = (
    type: FieldsetHeaderType,
    id: string,
    size: FieldsetHeaderSize,
    active: boolean,
    disabled: boolean,
) => {
    const props = {
        "aria-labelledby": id,
        size: size === FieldsetHeaderSize.Large ? IconSize.Size20 : IconSize.Size12,
    };

    switch (type) {
        case FieldsetHeaderType.Switch:
            return (
                <Switch
                    {...props}
                    size={size === FieldsetHeaderSize.Large ? SwitchSize.Large : SwitchSize.Small}
                    on={active}
                    disabled={disabled}
                />
            );
        case FieldsetHeaderType.Accordion:
            return active ? <IconCaretDown {...props} /> : <IconCaretUp {...props} />;
        case FieldsetHeaderType.AddRemove:
            return active ? <IconMinus {...props} /> : <IconAddSimple {...props} />;
    }

    return null;
};

export const FieldsetHeader: FC<FieldsetHeaderProps> = ({
    size = FieldsetHeaderSize.Large,
    active = true,
    decorator,
    type = FieldsetHeaderType.Default,
    disabled = false,
    bold = true,
    children,
    onClick,
    as: Heading = "label",
    tabIndex = -1,
}) => {
    const id = generateRandomId();

    return (
        <header
            data-test-id="fieldset-header"
            role={onClick ? "button" : undefined}
            onClick={onClick}
            onKeyPress={onClick}
            className={merge([
                "flex items-center gap-x-1.5 w-full flex-row",
                disabled ? "text-black-40" : "text-black dark:text-white",
                onClick ? "hover:cursor-pointer" : "pointer-events-none",
            ])}
            tabIndex={tabIndex}
        >
            {isValidElement(decorator) &&
                cloneElement(decorator, {
                    size: size === FieldsetHeaderSize.Large ? IconSize.Size20 : IconSize.Size16,
                })}
            <Heading
                id={id}
                className={merge([
                    size === FieldsetHeaderSize.Large ? "text-l" : "text-m",
                    bold ? "font-bold" : "font-normal",
                    onClick && "hover:cursor-pointer",
                ])}
            >
                {children}
            </Heading>
            {type !== FieldsetHeaderType.Default && (
                <span className="ml-auto">{renderType(type, id, size, active, disabled)}</span>
            )}
        </header>
    );
};
