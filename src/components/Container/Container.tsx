/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Box } from '@components/Box';
import {
    DimensionUnity,
    GetMarginClassNames,
    GetPaddingClassNames,
    MARGIN_DIRECTIONS,
    PADDING_DIRECTIONS,
    SpacingValue,
} from '@utilities/dimensions';
import { merge } from '@utilities/merge';
import { ReactNode } from 'react';
import { ContainerHTMLElement } from 'src/types/elements';

export type ContainerProps = {
    children?: ReactNode | ReactNode[];
    minWidth?: `${number}${DimensionUnity}`;
    maxWidth?: `${number}${DimensionUnity}`;
    minHeight?: `${number}${DimensionUnity}`;
    maxHeight?: `${number}${DimensionUnity}`;
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

export const CONTAINER_TEST_ID = 'fondue-container';

export const Container = ({
    children,
    'data-test-id': dataTestId = CONTAINER_TEST_ID,
    minWidth,
    maxWidth,
    maxHeight,
    minHeight,
    bg,
    color,
    margin,
    marginX,
    marginY,
    padding,
    paddingX,
    paddingY,
    as: ContainerElement = 'div',
}: ContainerProps) => {
    return (
        <Box
            data-test-id={dataTestId}
            className={merge([
                GetPaddingClassNames(PADDING_DIRECTIONS.PADDING_X, paddingX),
                GetPaddingClassNames(PADDING_DIRECTIONS.PADDING_Y, paddingY),
                GetPaddingClassNames(PADDING_DIRECTIONS.PADDING, padding),
                GetMarginClassNames(MARGIN_DIRECTIONS.MARGIN_X, marginX),
                GetMarginClassNames(MARGIN_DIRECTIONS.MARGIN_Y, marginY),
                GetMarginClassNames(MARGIN_DIRECTIONS.MARGIN, margin),
                bg,
                color,
            ])}
            style={{
                maxWidth,
                minWidth,
                maxHeight,
                minHeight,
            }}
            as={ContainerElement}
        >
            {children}
        </Box>
    );
};
Container.displayName = 'FondueContainer';
