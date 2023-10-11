/* (c) Copyright Frontify Ltd., all rights reserved. */

import type { InputBaseProps } from 'src/types/input';

export type NumberInputProps = {
    controls?: boolean;
    stepInterval?: number;
} & InputBaseProps<number>;

export enum NumberInputIncrement {
    DECREMENT,
    INCREMENT,
}
