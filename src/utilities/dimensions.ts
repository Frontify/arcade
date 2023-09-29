/* (c) Copyright Frontify Ltd., all rights reserved. */

type SpacingMapType = Record<SpacingValue, string>;
type GapSpacingDirectionKey = 'GAP' | 'GAP_X' | 'GAP_Y';
type GapSpacingDirection = 'gap' | 'gap-x' | 'gap-y';
export type SpacingValue = 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40;
export type DimensionUnity = '%' | 'px' | 'rem' | 'em' | 'vh' | 'vw';

export const SPACING_VALUES: SpacingValue[] = [0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
export const PADDING_VALUES_MAP: Record<SpacingValue, string> = {
    0: 'tw-p-0',
    4: 'tw-p-1',
    8: 'tw-p-2',
    12: 'tw-p-3',
    16: 'tw-p-4',
    20: 'tw-p-5',
    24: 'tw-p-6',
    28: 'tw-p-7',
    32: 'tw-p-8',
    36: 'tw-p-9',
    40: 'tw-p-10',
};

export const PADDING_X_VALUES_MAP: Record<SpacingValue, string> = {
    0: 'tw-px-0',
    4: 'tw-px-1',
    8: 'tw-px-2',
    12: 'tw-px-3',
    16: 'tw-px-4',
    20: 'tw-px-5',
    24: 'tw-px-6',
    28: 'tw-px-7',
    32: 'tw-px-8',
    36: 'tw-px-9',
    40: 'tw-px-10',
};

export const PADDING_Y_VALUES_MAP: Record<SpacingValue, string> = {
    0: 'tw-py-0',
    4: 'tw-py-1',
    8: 'tw-py-2',
    12: 'tw-py-3',
    16: 'tw-py-4',
    20: 'tw-py-5',
    24: 'tw-py-6',
    28: 'tw-py-7',
    32: 'tw-py-8',
    36: 'tw-py-9',
    40: 'tw-py-10',
};

export const MARGIN_VALUES_MAP: Record<SpacingValue, string> = {
    0: 'tw-m-0',
    4: 'tw-m-1',
    8: 'tw-m-2',
    12: 'tw-m-3',
    16: 'tw-m-4',
    20: 'tw-m-5',
    24: 'tw-m-6',
    28: 'tw-m-7',
    32: 'tw-m-8',
    36: 'tw-m-9',
    40: 'tw-m-10',
};

export const MARGIN_X_VALUES_MAP: Record<SpacingValue, string> = {
    0: 'tw-mx-0',
    4: 'tw-mx-1',
    8: 'tw-mx-2',
    12: 'tw-mx-3',
    16: 'tw-mx-4',
    20: 'tw-mx-5',
    24: 'tw-mx-6',
    28: 'tw-mx-7',
    32: 'tw-mx-8',
    36: 'tw-mx-9',
    40: 'tw-mx-10',
};

export const MARGIN_Y_VALUES_MAP: Record<SpacingValue, string> = {
    0: 'tw-my-0',
    4: 'tw-my-1',
    8: 'tw-my-2',
    12: 'tw-my-3',
    16: 'tw-my-4',
    20: 'tw-my-5',
    24: 'tw-my-6',
    28: 'tw-my-7',
    32: 'tw-my-8',
    36: 'tw-my-9',
    40: 'tw-my-10',
};

export const GAP_MAPPING = {
    0: 'tw-gap-0',
    1: 'tw-gap-px',
    4: 'tw-gap-1',
    8: 'tw-gap-2',
    12: 'tw-gap-3',
    16: 'tw-gap-4',
    20: 'tw-gap-5',
    24: 'tw-gap-6',
    28: 'tw-gap-7',
    32: 'tw-gap-8',
    36: 'tw-gap-9',
    40: 'tw-gap-10',
    44: 'tw-gap-11',
    48: 'tw-gap-12',
    52: 'tw-gap-13',
    56: 'tw-gap-14',
    60: 'tw-gap-15',
    64: 'tw-gap-16',
    68: 'tw-gap-17',
    72: 'tw-gap-18',
    76: 'tw-gap-19',
    80: 'tw-gap-20',
    84: 'tw-gap-21',
};

export const GAP_X_MAPPING = {
    0: 'tw-gap-x-0',
    1: 'tw-gap-x-px',
    4: 'tw-gap-x-1',
    8: 'tw-gap-x-2',
    12: 'tw-gap-x-3',
    16: 'tw-gap-x-4',
    20: 'tw-gap-x-5',
    24: 'tw-gap-x-6',
    28: 'tw-gap-x-7',
    32: 'tw-gap-x-8',
    36: 'tw-gap-x-9',
    40: 'tw-gap-x-10',
    44: 'tw-gap-x-11',
    48: 'tw-gap-x-12',
    52: 'tw-gap-x-13',
    56: 'tw-gap-x-14',
    60: 'tw-gap-x-15',
    64: 'tw-gap-x-16',
    68: 'tw-gap-x-17',
    72: 'tw-gap-x-18',
    76: 'tw-gap-x-19',
    80: 'tw-gap-x-20',
    84: 'tw-gap-x-21',
};

export const GAP_Y_MAPPING = {
    0: 'tw-gap-y-0',
    1: 'tw-gap-y-px',
    4: 'tw-gap-y-1',
    8: 'tw-gap-y-2',
    12: 'tw-gap-y-3',
    16: 'tw-gap-y-4',
    20: 'tw-gap-y-5',
    24: 'tw-gap-y-6',
    28: 'tw-gap-y-7',
    32: 'tw-gap-y-8',
    36: 'tw-gap-y-9',
    40: 'tw-gap-y-10',
    44: 'tw-gap-y-11',
    48: 'tw-gap-y-12',
    52: 'tw-gap-y-13',
    56: 'tw-gap-y-14',
    60: 'tw-gap-y-15',
    64: 'tw-gap-y-16',
    68: 'tw-gap-y-17',
    72: 'tw-gap-y-18',
    76: 'tw-gap-y-19',
    80: 'tw-gap-y-20',
    84: 'tw-gap-y-21',
};

const getMappedSpacingValue = (map: SpacingMapType, spacingValue: SpacingValue) => {
    return SPACING_VALUES.includes(spacingValue) ? map[spacingValue] : map[0];
};

export const GetPaddingClassNames = (p: SpacingValue, px: SpacingValue, py: SpacingValue): string => {
    const classes = [];
    if (px > SPACING_VALUES[0]) {
        classes.push(getMappedSpacingValue(PADDING_X_VALUES_MAP, px));
    }
    if (py > SPACING_VALUES[0]) {
        classes.push(getMappedSpacingValue(PADDING_Y_VALUES_MAP, py));
    }
    classes.push(getMappedSpacingValue(PADDING_VALUES_MAP, p));
    return classes.join(' ');
};

export const GetMarginClassNames = (m: SpacingValue, mx: SpacingValue, my: SpacingValue): string => {
    const classes = [];
    if (mx > SPACING_VALUES[0]) {
        classes.push(getMappedSpacingValue(MARGIN_X_VALUES_MAP, mx));
    }
    if (my > SPACING_VALUES[0]) {
        classes.push(getMappedSpacingValue(MARGIN_Y_VALUES_MAP, my));
    }
    classes.push(getMappedSpacingValue(MARGIN_VALUES_MAP, m));
    return classes.join(' ');
};

export const GAP_DIRECTIONS: Record<GapSpacingDirectionKey, GapSpacingDirection> = {
    GAP: 'gap',
    GAP_X: 'gap-x',
    GAP_Y: 'gap-y',
};
export const GetGapClassName = (g: SpacingValue, direction: GapSpacingDirection) => {
    switch (direction) {
        case 'gap-x':
            return g > 0 ? getMappedSpacingValue(GAP_X_MAPPING, g) : '';
        case 'gap-y':
            return g > 0 ? getMappedSpacingValue(GAP_Y_MAPPING, g) : '';
        default:
            return getMappedSpacingValue(GAP_MAPPING, g);
    }
};
