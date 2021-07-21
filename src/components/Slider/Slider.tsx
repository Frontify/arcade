/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconProps } from "@elements/Icon/Icon";
import { ReactElement } from "react";
import css from "./Slider.module.css";

export type IconItem = {
    id: string;
    icon: ReactElement<IconProps>;
};

export type TextItem = {
    id: string;
    name: string;
};

export type SliderProps = {
    items: TextItem[] | IconItem[];
    activeItemId: string;
    onChange: (id: string) => void;
};

const isIconItem = (item: TextItem | IconItem): item is IconItem => (item as IconItem).icon !== undefined;
const getItemClasses = (id: string, activeItemId: string) =>
    [css.item, id === activeItemId ? css.active : ""].join(" ");

export default function Slider({ items, activeItemId, onChange }: SliderProps): ReactElement<SliderProps> {
    return (
        <ul data-test-id="slider" className={css.wrapper}>
            {items.map((item) =>
                isIconItem(item) ? (
                    <li
                        key={item.id}
                        onClick={() => onChange(item.id)}
                        className={getItemClasses(item.id, activeItemId)}
                        data-test-id="slider-icon-item"
                    >
                        {item.icon}
                    </li>
                ) : (
                    <li
                        key={item.id}
                        onClick={() => onChange(item.id)}
                        className={getItemClasses(item.id, activeItemId)}
                        data-test-id="slider-text-item"
                    >
                        {item.name}
                    </li>
                ),
            )}
        </ul>
    );
}
