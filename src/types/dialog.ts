/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ReactElement, ReactNode } from 'react';
import { IconProps } from '@foundation/Icon';
import { BadgeProps } from '@components/Badge';
import { ButtonProps } from '@components/Button';

export enum DialogPaddingSize {
    None = 'None',
    Default = 'Default',
    Large = 'Large',
}

export enum DialogHeaderSize {
    Default = 'Default',
    Large = 'Large',
}

export type DialogHeaderProps = {
    title: string;
    size?: DialogHeaderSize;
    collapseBottom?: boolean;
    onClose?: () => void;
    icon?: ReactElement<IconProps>;
    badge?: ReactElement<BadgeProps>;
    'data-test-id'?: string;
};

export type DialogBodyProps = {
    children: ReactNode;
    maxHeight?: number | 'auto';
    'data-test-id'?: string;
};

export type DialogFooterProps = {
    buttons: ButtonProps[];
    'data-test-id'?: string;
};
