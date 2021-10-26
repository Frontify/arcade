import { Slider } from "@components/Slider/Slider";
import IconCheck from "src/foundation/Icon/Generated/IconCheck";
import IconImageGrid2 from "src/foundation/Icon/Generated/IconImageGrid2";
import IconListBullets from "src/foundation/Icon/Generated/IconListBullets";
import IconSearch from "src/foundation/Icon/Generated/IconSearch";
import { IconSize } from "src/foundation/Icon/IconSize";
import { TextInput } from "@components/TextInput/TextInput";
import { toColor } from "@utilities/colors";
import { merge } from "@utilities/merge";
import React, { FC, useEffect, useState } from "react";
import { ColorPickerProps } from "./ColorPicker";

const find = (haystack?: string, needle = "") =>
    haystack?.toLocaleLowerCase().includes(needle.toLocaleLowerCase().trim());

enum BrandColorView {
    List = "List",
    Grid = "Grid",
}

export const BrandColorPicker: FC<ColorPickerProps> = ({ palettes: defaultPalettes = [], currentColor, onSelect }) => {
    const views = [
        { id: BrandColorView.List, icon: <IconListBullets />, ariaLabel: "List" },
        { id: BrandColorView.Grid, icon: <IconImageGrid2 />, ariaLabel: "Grid" },
    ];
    const [view, setView] = useState(views[0].id);
    const [query, setQuery] = useState("");
    const [palettes, setPalettes] = useState(defaultPalettes);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPalettes(
                defaultPalettes
                    .filter(({ title, colors }) => find(title, query) || colors.some(({ name }) => find(name, query)))
                    .map(({ title, colors }) => ({
                        title,
                        colors: colors.some(({ name }) => find(name, query))
                            ? colors.filter(({ name }) => find(name, query))
                            : colors,
                    })),
            );
        }, 200);

        return () => clearTimeout(timer);
    }, [query]);

    return (
        <div className="tw-flex tw-flex-col tw-gap-5" data-test-id="brand-color-picker">
            <div className="tw-flex tw-gap-3">
                <div className="tw-flex-1">
                    <TextInput
                        value={query}
                        decorator={<IconSearch />}
                        placeholder="Search"
                        onChange={(value) => setQuery(value)}
                    />
                </div>
                <div className="tw-w-[72px]">
                    <Slider
                        items={views}
                        activeItemId={view}
                        onChange={(colorView) => setView(colorView as BrandColorView)}
                    />
                </div>
            </div>
            <ul className="tw-flex tw-flex-col tw-gap-5">
                {palettes.length
                    ? palettes.map(({ title, colors }) => (
                          <li key={title} className="tw-flex tw-flex-col tw-gap-3">
                              <p className="tw-text-black dark:tw-text-white">{title}</p>
                              <ul
                                  className={merge([
                                      "tw-flex tw-gap-y-2",
                                      view === BrandColorView.List && "tw-flex-col",
                                  ])}
                              >
                                  {colors.map((color) => (
                                      <li key={color.hex} data-test-id="brand-color">
                                          <button
                                              className="tw-flex tw-overflow-hidden tw-w-full"
                                              onClick={() => onSelect(toColor(color, color))}
                                          >
                                              <span
                                                  className="tw-h-8 tw-w-8 tw-mr-2 tw-rounded tw-flex tw-items-center tw-justify-center tw-text-white"
                                                  style={{ background: color.hex }}
                                              >
                                                  {color.hex === currentColor.hex && (
                                                      <IconCheck size={IconSize.Size20} />
                                                  )}
                                              </span>
                                              {view === BrandColorView.List && (
                                                  <span className="tw-h-8 tw-flex-grow tw-flex tw-items-center tw-text-left">
                                                      {color.name}
                                                  </span>
                                              )}
                                          </button>
                                      </li>
                                  ))}
                              </ul>
                          </li>
                      ))
                    : "No Colors found"}
            </ul>
        </div>
    );
};
