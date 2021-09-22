/* (c) Copyright Frontify Ltd., all rights reserved. */

import { BadgeProps } from "@elements/Badge/Badge";
import { IconProps } from "@elements/Icon/IconProps";
import { useBreadcrumbItem, useBreadcrumbs } from "@react-aria/breadcrumbs";
import React, { FC, ReactElement, useRef } from "react";
import { BreadcrumbItem } from "./BreadcrumbItem";
import { CurrentBreadcrumbItem } from "./CurrentBreadcrumbItem";

export const mapToAriaProps = (items: Breadcrumb[]) => ({
    children: items.map(({ label }, index) => (
        <li key={`breadcrumb-${index}`} aria-label={label}>
            {label}
        </li>
    )),
});

export type Breadcrumb = {
    label: string;
    link?: string;
    onClick?: () => void;
    decorator?: ReactElement<IconProps>;
    bold?: boolean;
    badges?: BadgeProps[];
};

export type BreadcrumbsProps = {
    items: Breadcrumb[];
};

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
    const props = mapToAriaProps(items);
    const { navProps } = useBreadcrumbs(props);

    return (
        <nav {...navProps} className="tw-font-sans" aria-label="Breadcrumb">
            <ol className="tw-list-none tw-flex tw-flex-wrap tw-gap-y-1">
                {items.map(({ label, badges, bold, decorator, link, onClick }, index) => {
                    const isCurrent = index === items.length - 1;
                    const key = `breadcrumb-${index}`;
                    const ref = useRef<HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement | null>(null);
                    const { itemProps } = useBreadcrumbItem(
                        {
                            isCurrent,
                            children: label,
                            elementType: link ? "a" : onClick ? "button" : "span",
                        },
                        ref,
                    );

                    if (isCurrent) {
                        return (
                            <CurrentBreadcrumbItem
                                key={key}
                                ref={ref}
                                ariaProps={itemProps}
                                label={label}
                                badges={badges}
                                bold={bold}
                                decorator={decorator}
                                link={link}
                                onClick={onClick}
                            />
                        );
                    }

                    return (
                        <BreadcrumbItem
                            key={key}
                            ref={ref}
                            ariaProps={itemProps}
                            label={label}
                            link={link}
                            onClick={onClick}
                            showSeparator={index < items.length - 2}
                        />
                    );
                })}
            </ol>
        </nav>
    );
};
