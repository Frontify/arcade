/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Slider } from '@components/Slider/Slider';
import { TextInput } from '@components/TextInput/TextInput';
import { IconCheckMark, IconGridRegular, IconMagnifier, IconStackVertical } from '@foundation/Icon/Generated';
import { IconSize } from '@foundation/Icon/IconSize';
import { isColorLight } from '@utilities/colors';
import { merge } from '@utilities/merge';
import React, { FC, useEffect, useState } from 'react';
import tinycolor from 'tinycolor2';
import { ColorPickerProps } from './ColorPicker';

const find = (haystack?: string, needle = '') =>
    haystack?.toLocaleLowerCase().includes(needle.toLocaleLowerCase().trim());

enum BrandColorView {
    List = 'List',
    Grid = 'Grid',
}

type Props = Omit<ColorPickerProps, 'currentFormat' | 'setFormat'>;

export const BrandColorPicker: FC<Props> = ({ palettes: defaultPalettes = [], currentColor, onSelect }) => {
    const views = [
        { id: BrandColorView.Grid, icon: <IconGridRegular />, ariaLabel: 'Grid' },
        { id: BrandColorView.List, icon: <IconStackVertical />, ariaLabel: 'List' },
    ];
    const [view, setView] = useState(views[0].id);
    const [query, setQuery] = useState('');
    const [palettes, setPalettes] = useState(defaultPalettes);

    useEffect(() => {
        const timer = setTimeout(() => {
            setPalettes(
                defaultPalettes
                    .filter(({ title, colors }) => find(title, query) || colors.some(({ name }) => find(name, query)))
                    .map(({ id, title, colors }) => ({
                        id,
                        title,
                        colors: colors.some(({ name }) => find(name, query))
                            ? colors.filter(({ name }) => find(name, query))
                            : colors,
                    })),
            );
        }, 200);

        return () => clearTimeout(timer);
    }, [query]);

    const palettesWithColors = palettes.filter((palette) => palette.colors.length > 0);

    return (
        <div className="tw-flex tw-flex-col tw-gap-4" data-test-id="brand-color-picker">
            <div className="tw-flex tw-gap-2">
                <div className="tw-flex-1">
                    <TextInput
                        value={query}
                        decorator={<IconMagnifier />}
                        placeholder="Search"
                        onChange={(value) => setQuery(value)}
                        clearable
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
            <ul className="tw-flex tw-flex-col tw-gap-4">
                {palettesWithColors.length > 0
                    ? palettesWithColors.map(({ id, title, colors }) => (
                          <li key={id} className="tw-flex tw-flex-col tw-gap-2">
                              <p className="tw-text-black tw-text-xs tw-font-medium dark:tw-text-white">{title}</p>
                              <ul
                                  className={merge([
                                      'tw-flex tw-gap-y-2 tw-flex-wrap',
                                      view === BrandColorView.List && 'tw-flex-col',
                                  ])}
                              >
                                  {colors.map((color) => (
                                      <li key={color.name} data-test-id="brand-color">
                                          <button
                                              className="tw-flex tw-w-full"
                                              onClick={() => onSelect(color)}
                                              type="button"
                                          >
                                              <span
                                                  className={merge([
                                                      'tw-h-6 tw-w-6 tw-mr-2 tw-rounded tw-flex tw-items-center tw-justify-center tw-ring-1 tw-ring-black-10 tw-ring-offset-1',
                                                      isColorLight(color) ? 'tw-text-black' : 'tw-text-white',
                                                  ])}
                                                  style={{ background: tinycolor(color).toRgbString() }}
                                              >
                                                  {color.r === currentColor.r &&
                                                      color.g === currentColor.g &&
                                                      color.b === currentColor.b &&
                                                      color.a === currentColor.a && (
                                                          <IconCheckMark size={IconSize.Size20} />
                                                      )}
                                              </span>
                                              {view === BrandColorView.List && (
                                                  <span className="tw-h-6 tw-grow tw-flex tw-items-center tw-text-sm tw-text-left">
                                                      {color.name}
                                                  </span>
                                              )}
                                          </button>
                                      </li>
                                  ))}
                              </ul>
                          </li>
                      ))
                    : 'No colors found'}
            </ul>
        </div>
    );
};
