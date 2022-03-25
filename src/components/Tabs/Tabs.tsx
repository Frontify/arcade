/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, {
    Children,
    cloneElement,
    FC,
    isValidElement,
    KeyboardEvent,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";
import { TabItemProps } from "@components/Tabs/TabItem";
import { merge } from "@utilities/merge";
import { IconMore } from "@foundation/Icon";
import { Badge } from "@components/Badge";
import { LayoutGroup, motion } from "framer-motion";
import { useMemoizedId } from "@hooks/useMemoizedId";

export enum TabsPaddingX {
    Small = "Small",
    Medium = "Medium",
    Large = "Large",
}

export enum TabSize {
    Small = "Small",
    Large = "Large",
}

export type TabsProps = {
    paddingX?: TabsPaddingX;
    size?: TabSize;
    activeItemId: string;
    children: ReactNode;
    onChange?: (tabId: string) => void;
};

const paddingMap: Record<TabsPaddingX, string> = {
    [TabsPaddingX.Small]: "tw-pl-s",
    [TabsPaddingX.Medium]: "tw-pl-m",
    [TabsPaddingX.Large]: "tw-pl-l",
};

export const Tabs: FC<TabsProps> = ({ paddingX, size, activeItemId, children, onChange }) => {
    const tabNavRef = useRef<HTMLDivElement | null>(null);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const layoutGroupId = useMemoizedId();

    const tabs: TabItemProps[] =
        Children.map(children, (child) => {
            if (!isValidElement<TabItemProps>(child)) {
                return null;
            }
            return child?.props;
        }) ?? [];

    const [overflowArray, setOverflowArray] = useState([0]);

    const checkIfOverflowing = () => {
        const tabNav = tabNavRef.current;
        setIsOverflowing((tabNav && tabNav.scrollWidth > tabNav.clientWidth) ?? false);
        const overFlowIndex = [];
        if (tabNav) {
            for (const tabItem of tabNav.children) {
                const i = [...tabNav.children].indexOf(tabItem);
                const navPosition = tabNav.getBoundingClientRect();
                const tabPosition = tabItem.getBoundingClientRect();
                if (tabPosition.right > navPosition.right || tabPosition.left < navPosition.left) {
                    overFlowIndex.push(i);
                }
            }

            const overFlowIndexInAscOrder = [...overFlowIndex].sort((a, b) => a - b);
            setOverflowArray(overFlowIndexInAscOrder);
        }
    };

    const getOverflownTabs = () => {
        return overflowArray.map((i) => {
            return tabs[i];
        });
    };

    const filterTabList = (array: TabItemProps[], direction: string) => {
        return array.filter((tab) => {
            if (direction === "next") {
                if (tab.id > activeItemId && !tab.disabled) {
                    return tab;
                }
            }

            if (direction === "previous") {
                if (tab.id < activeItemId && !tab.disabled) {
                    return tab;
                }
            }
        });
    };

    const handleKeyboardTabChange = (event: KeyboardEvent<HTMLButtonElement>) => {
        const overflownTabs = getOverflownTabs();
        const target = event.target as HTMLElement;
        const fromOverflow = target.id.includes("-m");
        const currentTabId = target.id.replace("-btn-m", "");
        const currentTabsArray = fromOverflow ? overflownTabs : tabs;

        const nextTabs = filterTabList(currentTabsArray, "next");
        const previousTabs = filterTabList(currentTabsArray, "previous");

        if ((event.key === "ArrowRight" || event.key === "ArrowDown") && nextTabs.length) {
            triggerTabButton(nextTabs[0].id, fromOverflow);
        }

        if ((event.key === "ArrowLeft" || event.key === "ArrowUp") && previousTabs.length) {
            triggerTabButton(previousTabs[previousTabs.length - 1].id, fromOverflow);
        }

        if (event.key === "Enter" && fromOverflow) {
            triggerTabButton(currentTabId, false);
            setIsMenuOpened(false);
        }

        if (!target.id.includes("-m")) {
            setIsMenuOpened(false);
        }
    };

    const triggerTabButton = (elementId: string, fromOverflow: boolean) => {
        try {
            const tabElement = document.getElementById(`${elementId}-btn`) as HTMLButtonElement;
            const buttonElement = document.getElementById(
                fromOverflow ? `${elementId}-btn-m` : `${elementId}-btn`,
            ) as HTMLButtonElement;
            if (onChange) {
                onChange(elementId);
            }
            tabElement.scrollIntoView({ behavior: "smooth", block: "end", inline: "end" });
            buttonElement.focus();
            checkIfOverflowing();
        } catch (error) {
            throw (error as Error).message;
        }
    };

    const triggerOverflowMenu = (event: KeyboardEvent<HTMLButtonElement>) => {
        checkIfOverflowing();
        const overflownTabs = getOverflownTabs();
        if (event.key === "Enter") {
            event.preventDefault();
            setIsMenuOpened(!isMenuOpened);
            if (!isMenuOpened && overflownTabs.length > 0) {
                const buttonElement = document.getElementById(`${overflownTabs[0].id}-btn-m`) as HTMLButtonElement;
                if (buttonElement) {
                    buttonElement.focus();
                }
            }
        }

        if (isMenuOpened && (event.key === "ArrowRight" || event.key === "ArrowDown")) {
            triggerTabButton(overflownTabs[0].id, true);
        }
    };

    // First render
    useEffect(() => {
        checkIfOverflowing();
    }, []);

    useEffect(() => {
        window.addEventListener("resize", checkIfOverflowing);
        return () => {
            window.removeEventListener("resize", checkIfOverflowing);
        };
    }, [checkIfOverflowing]);

    return (
        <LayoutGroup id={layoutGroupId}>
            <div data-test-id="tabs" className="tw-flex tw-relative tw-border-b tw-border-line">
                <div
                    ref={tabNavRef}
                    role="tablist"
                    className={merge([
                        "tw-overflow-hidden tw-flex-shrink-0 tw-h-full tw-w-full tw-flex tw-justify-start tw-pr-8",
                        paddingMap[paddingX ?? TabsPaddingX.Small],
                    ])}
                >
                    {tabs.map((tab) => {
                        return (
                            <button
                                data-test-id="tab-item"
                                role="tab"
                                aria-selected={tab.id === activeItemId}
                                aria-controls={`${tab.id}-content`}
                                aria-hidden={tab.disabled}
                                tabIndex={tab.id === activeItemId ? 0 : -1}
                                id={`${tab.id}-btn`}
                                className={merge([
                                    "tw-group tw-relative tw-mx-0 tw-pb-5 tw-pt-2 tw-px-2 tw-w-max tw-h-10 tw-cursor-pointer tw-flex tw-items-center tw-justify-center tw-whitespace-nowrap",
                                    tab.disabled && "tw-text-text-disabled",
                                    tab.id === activeItemId && "tw-font-medium",
                                    size === TabSize.Small ? "tw-text-sm" : "tw-text-md",
                                ])}
                                key={tab.id}
                                onClick={() => {
                                    if (!tab.disabled) {
                                        triggerTabButton(tab.id, false);
                                        setIsMenuOpened(false);
                                    }
                                }}
                                onKeyDown={(event) => handleKeyboardTabChange(event)}
                            >
                                {tab.decorator}
                                <span className="tw-mr-1 tw-ml-1.5">{tab.label}</span>
                                {tab.badge && (
                                    <Badge disabled={tab.disabled} style={tab.badge.style}>
                                        {tab.badge.children}
                                    </Badge>
                                )}
                                {tab.id === activeItemId && (
                                    <motion.div
                                        data-test-id="tab-active-highlight"
                                        layoutId="underline"
                                        className="tw-absolute tw-h-1 tw-bg-violet-60 tw-rounded-t-x-large tw-w-full tw-bottom-0"
                                    />
                                )}
                                {tab.id !== activeItemId && !tab.disabled && (
                                    <div className="group-hover:tw-absolute group-hover:tw-h-1 group-hover:tw-bg-box-neutral-hover group-hover:tw-rounded-t-x-large group-hover:tw-w-full group-hover:tw-bottom-0" />
                                )}
                            </button>
                        );
                    })}
                </div>
                {isOverflowing && (
                    <div
                        data-test-id="tab-overflow"
                        className="tw-absolute tw-right-3 tw-top-0 tw-w-6 tw-h-6 tw-bg-box-neutral tw-rounded tw-flex tw-justify-center tw-items-center"
                    >
                        <button
                            onClick={() => {
                                checkIfOverflowing();
                                setIsMenuOpened(!isMenuOpened);
                            }}
                            onKeyDown={(event) => triggerOverflowMenu(event)}
                        >
                            <IconMore />
                        </button>
                        {isMenuOpened && (
                            <div
                                className="tw-absolute tw-right-0 tw-top-8 tw-px-3 tw-pt-3 tw-bg-base tw-shadow tw-w-max"
                                role="dialog"
                            >
                                {getOverflownTabs().map((tab) => {
                                    return (
                                        <button
                                            className={merge([
                                                "tw-flex tw-items-center tw-w-full tw-mb-3 tw-text-left tw-text-text-weak",
                                                tab.disabled && "tw-text-text-disabled",
                                            ])}
                                            key={tab.id}
                                            onClick={() => {
                                                if (!tab.disabled) {
                                                    triggerTabButton(tab.id, true);
                                                    setIsMenuOpened(false);
                                                }
                                            }}
                                            role="tab"
                                            aria-selected={tab.id === activeItemId}
                                            aria-controls={`${tab.id}-content`}
                                            aria-hidden={tab.disabled}
                                            tabIndex={!tab.disabled && isMenuOpened ? 0 : -1}
                                            id={`${tab.id}-btn-m`}
                                            onKeyDown={(event) => handleKeyboardTabChange(event)}
                                        >
                                            {tab.decorator}
                                            <span className="tw-mr-1 tw-ml-1.5">{tab.label}</span>
                                            {tab.badge && (
                                                <Badge disabled={tab.disabled} style={tab.badge?.style}>
                                                    {tab.badge?.children}
                                                </Badge>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>

            <div className="tw-p-3" data-test-id="tab-content">
                {Children.map(children, (child) => {
                    if (!isValidElement(child)) {
                        return null;
                    }

                    return cloneElement(child, { ...child.props, active: child.props.id === activeItemId });
                })}
            </div>
        </LayoutGroup>
    );
};
