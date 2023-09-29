/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Children, ReactNode } from 'react';
import {
    DimensionUnity,
    GAP_DIRECTIONS,
    GetGapClassName,
    GetMarginClassNames,
    GetPaddingClassNames,
    SpacingValue,
} from '@utilities/dimensions';
import { ContainerHTMLElement } from 'src/types/elements';
import { merge } from '@utilities/merge';
import { Box } from '@components/Box';

export type GridProps = {
    column?: number;
    spacing?: SpacingValue;
    spacingX?: SpacingValue;
    spacingY?: SpacingValue;
    children?: ReactNode;
    width?: `${number}${DimensionUnity}`;
    rowHeight?: `${number}${DimensionUnity}` | 'auto';
    padding?: SpacingValue;
    paddingX?: SpacingValue;
    paddingY?: SpacingValue;
    margin?: SpacingValue;
    marginX?: SpacingValue;
    marginY?: SpacingValue;
    bg?: string;
    color?: string;
    'data-test-id'?: string;
    as?: ContainerHTMLElement;
};

export const GRID_TEST_ID = 'fondue-grid';

export const Grid = ({
    column = 2,
    spacing = 4,
    spacingX,
    spacingY,
    children,
    'data-test-id': dataTestId = GRID_TEST_ID,
    width = '100%',
    rowHeight = 'auto',
    bg,
    color,
    margin,
    marginX,
    marginY,
    padding,
    paddingX,
    paddingY,
    as: ContainerElement = 'div',
}: GridProps) => {
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
                GetPaddingClassNames(padding, paddingX, paddingY),
                GetMarginClassNames(margin, marginX, marginY),
                GetGapClassName(GAP_DIRECTIONS.GAP_X, spacingX),
                GetGapClassName(GAP_DIRECTIONS.GAP_Y, spacingY),
                GetGapClassName(GAP_DIRECTIONS.GAP, spacing),
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
