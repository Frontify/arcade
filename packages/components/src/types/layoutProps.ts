/* (c) Copyright Frontify Ltd., all rights reserved. */

import type tailwindConfig from '../../tailwind.config';

type Breakpoint = keyof typeof tailwindConfig.theme.screens;
export type Responsive<TValue> = { [key in Breakpoint]?: TValue } | TValue;

// `(string & {})` allows for arbitrary strings to be passed in while keeping the suggestion of the union type
// eslint-disable-next-line @typescript-eslint/ban-types
type SizeValue = (string & {}) | 'auto' | 'fit-content' | 'intrinsic' | 'max-content' | 'min-content';

// `(string & {})` allows for arbitrary strings to be passed in while keeping the suggestion of the union type
// eslint-disable-next-line @typescript-eslint/ban-types
type SpacingValue = (string & {}) | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;

type OverflowValue = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto';
type PositionValue = 'static' | 'fixed' | 'absolute' | 'relative' | 'sticky';

export type LayoutComponentProps = {
    /**
     * The margin property of the component.
     */
    m?: Responsive<SpacingValue>;
    /**
     * The margin-left and margin-right property of the component.
     */
    mx?: Responsive<SpacingValue>;
    /**
     * The margin-top and margin-bottom property of the component.
     */
    my?: Responsive<SpacingValue>;
    /**
     * The margin-top property of the component.
     */
    mt?: Responsive<SpacingValue>;
    /**
     * The margin-right property of the component.
     */
    mr?: Responsive<SpacingValue>;
    /**
     * The margin-bottom property of the component.
     */
    mb?: Responsive<SpacingValue>;
    /**
     * The margin-left property of the component.
     */
    ml?: Responsive<SpacingValue>;

    /**
     * The padding property of the component.
     */
    p?: Responsive<SpacingValue>;
    /**
     * The padding-left and padding-right property of the component.
     */
    px?: Responsive<SpacingValue>;
    /**
     * The padding-top and padding-bottom property of the component.
     */
    py?: Responsive<SpacingValue>;
    /**
     * The padding-top property of the component.
     */
    pt?: Responsive<SpacingValue>;
    /**
     * The padding-right property of the component.
     */
    pr?: Responsive<SpacingValue>;
    /**
     * The padding-bottom property of the component.
     */
    pb?: Responsive<SpacingValue>;
    /**
     * The padding-left property of the component.
     */
    pl?: Responsive<SpacingValue>;

    /**
     * The width property of the component.
     */
    width?: Responsive<SizeValue>;
    /**
     * The min-width property of the component.
     */
    minWidth?: Responsive<SizeValue>;
    /**
     * The max-width property of the component.
     */
    maxWidth?: Responsive<SizeValue>;

    /**
     * The height property of the component.
     */
    height?: Responsive<SizeValue>;
    /**
     * The min-height property of the component.
     */
    minHeight?: Responsive<SizeValue>;
    /**
     * The max-height property of the component.
     */
    maxHeight?: Responsive<SizeValue>;

    /**
     * The overflow property of the component.
     */
    overflow?: Responsive<OverflowValue>;
    /**
     * The overflow-x property of the component.
     */
    overflowX?: Responsive<OverflowValue>;
    /**
     * The overflow-y property of the component.
     */
    overflowY?: Responsive<OverflowValue>;

    /**
     * The position property of the component.
     */
    position?: Responsive<PositionValue>;
    /**
     * The top property of the component.
     */
    top?: Responsive<string>;
    /**
     * The right property of the component.
     */
    right?: Responsive<string>;
    /**
     * The bottom property of the component.
     */
    bottom?: Responsive<string>;
    /**
     * The left property of the component.
     */
    left?: Responsive<string>;
};
