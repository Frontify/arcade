/* (c) Copyright Frontify Ltd., all rights reserved. */

import {
    GetMarginClassNames,
    GetPaddingClassNames,
    MARGIN_DIRECTIONS,
    PADDING_DIRECTIONS,
    SpacingValue,
} from '@utilities/dimensions';
import { merge } from '@utilities/index';
import { HTMLAttributes } from 'react';
import { ContainerHTMLElement } from '../../types/elements';

export type BoxProps = {
    'data-test-id'?: string;
    padding?: SpacingValue;
    paddingX?: SpacingValue;
    paddingY?: SpacingValue;
    margin?: SpacingValue;
    marginX?: SpacingValue;
    marginY?: SpacingValue;
    as?: ContainerHTMLElement;
} & HTMLAttributes<HTMLDivElement | HTMLSpanElement>;

export const BOX_TEST_ID = 'fondue-box';

export const Box = ({
    padding,
    paddingX,
    paddingY,
    margin,
    marginX,
    marginY,
    children,
    'data-test-id': dataTestId = BOX_TEST_ID,
    as: ContainerElement = 'div',
    ...props
}: BoxProps) => {
    return (
        <ContainerElement
            {...props}
            className={merge([
                props.className,
                GetPaddingClassNames(PADDING_DIRECTIONS.PADDING_X, paddingX),
                GetPaddingClassNames(PADDING_DIRECTIONS.PADDING_Y, paddingY),
                GetPaddingClassNames(PADDING_DIRECTIONS.PADDING, padding),
                GetMarginClassNames(MARGIN_DIRECTIONS.MARGIN_X, marginX),
                GetMarginClassNames(MARGIN_DIRECTIONS.MARGIN_Y, marginY),
                GetMarginClassNames(MARGIN_DIRECTIONS.MARGIN, margin),
            ])}
            data-test-id={dataTestId}
        >
            {children}
        </ContainerElement>
    );
};
Box.displayName = 'FondueBox';
