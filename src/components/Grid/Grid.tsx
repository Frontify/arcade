/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Children, ReactNode } from 'react';
import {
    DimensionUnity,
    GAP_X_MAPPING,
    GAP_Y_MAPPING,
    MARGIN_VALUES_MAP,
    PADDING_VALUES_MAP,
    SPACING_VALUES,
    SpacingValue,
} from '@utilities/dimensions';
import { ContainerHTMLElement } from 'src/types/elements';
import { merge } from '@utilities/merge';
import { Box } from '@components/Box';

export type GridProps = {
    column?: number;
    spacingX?: SpacingValue;
    spacingY?: SpacingValue;
    children?: ReactNode;
    width?: `${number}${DimensionUnity}`;
    rowHeight?: `${number}${DimensionUnity}` | 'auto';
    padding?: SpacingValue;
    margin?: SpacingValue;
    bg?: string;
    color?: string;
    'data-test-id'?: string;
    as?: ContainerHTMLElement;
};

export const GRID_TEST_ID = 'fondue-grid';

export const Grid = ({
    column = 2,
    spacingX = 4,
    spacingY = 4,
    children,
    'data-test-id': dataTestId = GRID_TEST_ID,
    width = '100%',
    rowHeight = 'auto',
    bg,
    color,
    margin = 0,
    padding = 0,
    as: ContainerElement = 'div',
}: GridProps) => {
    const spacingYClassName = GAP_Y_MAPPING[spacingY] ? GAP_Y_MAPPING[spacingY] : GAP_Y_MAPPING[4];
    const spacingXClassName = GAP_X_MAPPING[spacingX] ? GAP_X_MAPPING[spacingX] : GAP_X_MAPPING[4];
    const paddingClassName = SPACING_VALUES.includes(padding) ? PADDING_VALUES_MAP[padding] : PADDING_VALUES_MAP[0];
    const marginClassName = SPACING_VALUES.includes(padding) ? MARGIN_VALUES_MAP[margin] : MARGIN_VALUES_MAP[0];
    let childrenLength = 0;

    Children.map(children, (child) => {
        childrenLength++;
        return child;
    });

    return (
        <Box
            data-test-id={dataTestId}
            className={merge([
                'tw-grid',
                bg,
                color,
                paddingClassName,
                marginClassName,
                spacingXClassName,
                spacingYClassName,
            ])}
            style={{
                width,
                gridTemplateColumns: `repeat(${column}, 1fr)`,
                gridTemplateRows: `repeat(${Math.ceil(childrenLength / column)}, ${rowHeight})`,
            }}
            as={ContainerElement}
        >
            {children}
        </Box>
    );
};

Grid.displayName = 'FondueGrid';
