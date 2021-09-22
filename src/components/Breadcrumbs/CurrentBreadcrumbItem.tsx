import { Badge, BadgeProps } from "@elements/Badge/Badge";
import { useFocusRing } from "@react-aria/focus";
import { mergeProps } from "@react-aria/utils";
import { FOCUS_STYLE } from "@utilities/focusStyle";
import { merge } from "@utilities/merge";
import React, { FC, forwardRef, HTMLAttributes, RefObject } from "react";
import { Breadcrumb } from "./Breadcrumbs";

const ItemWithBadges: FC<{ badges?: BadgeProps[] }> = ({ badges, children }) => (
    <span className="tw-inline-flex tw-gap-x-2 tw-items-center">
        {children}

        {badges?.map(({ children: badge, ...props }, index) => (
            <Badge {...props} key={`breadcrumb-badge-${index}`}>
                {badge}
            </Badge>
        ))}
    </span>
);

type CurrentBreadcrumbItemProps = Breadcrumb & {
    ariaProps: HTMLAttributes<HTMLElement>;
};

export const CurrentBreadcrumbItem = forwardRef<
    HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement | null,
    CurrentBreadcrumbItemProps
>(({ label, badges, bold, decorator, link, onClick, ariaProps }, ref) => {
    const classNames = merge([decorator && "tw-flex tw-gap-x-1 tw-items-center", bold && "tw-font-bold"]);
    const { isFocusVisible, focusProps } = useFocusRing();
    const props = mergeProps(ariaProps, focusProps);

    return (
        <li
            className="tw-w-full tw-h-6 tw-flex tw-gap-x-1 tw-items-center tw-text-m tw-text-black dark:tw-text-white"
            data-test-id="breadcrumb-item"
        >
            {link ? (
                <ItemWithBadges badges={badges}>
                    <a
                        ref={ref as RefObject<HTMLAnchorElement>}
                        {...props}
                        href={link}
                        className={merge([classNames, isFocusVisible ? FOCUS_STYLE : ""])}
                    >
                        {decorator}
                        <span className={bold ? "tw-font-bold" : ""}>{label}</span>
                    </a>
                </ItemWithBadges>
            ) : onClick ? (
                <ItemWithBadges badges={badges}>
                    <button
                        ref={ref as RefObject<HTMLButtonElement>}
                        {...props}
                        onClick={onClick}
                        className={merge([classNames, isFocusVisible ? FOCUS_STYLE : ""])}
                    >
                        {decorator}
                        {label}
                    </button>
                </ItemWithBadges>
            ) : (
                <>
                    {decorator}
                    <ItemWithBadges badges={badges}>
                        <span
                            ref={ref as RefObject<HTMLSpanElement>}
                            {...props}
                            className={bold ? "tw-font-bold" : isFocusVisible ? FOCUS_STYLE : ""}
                        >
                            {label}
                        </span>
                    </ItemWithBadges>
                </>
            )}
        </li>
    );
});

CurrentBreadcrumbItem.displayName = "CurrentBreadcrumbItem";
