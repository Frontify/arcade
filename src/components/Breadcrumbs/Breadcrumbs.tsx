/* (c) Copyright Frontify Ltd., all rights reserved. */

import { BadgeProps } from '@components/Badge';
import { IconProps } from '@foundation/Icon/IconProps';
import { AriaBreadcrumbsProps, useBreadcrumbs } from '@react-aria/breadcrumbs';
import { MouseEvent, ReactElement } from 'react';
import { merge } from '@utilities/merge';
import { FormattedBreadcrumbs } from './FormattedBreadcrumbs';

const mapBreadcrumbsToAriaProps = (items: Breadcrumb[]) => ({
    children: items.map(({ label }, index) => (
        <li key={`breadcrumb-${index}`} aria-label={label}>
            {label}
        </li>
    )),
});

export type Breadcrumb = {
    label: string;
    link?: string;
    onClick?: <T extends HTMLButtonElement | HTMLAnchorElement>(event: MouseEvent<T>) => void;
    decorator?: ReactElement<IconProps>;
    bold?: boolean;
    badges?: BadgeProps[];
    'data-test-id'?: string;
} & Pick<BreadcrumbsProps, 'includesCurrent'>;

export type BreadcrumbsProps = {
    items: Breadcrumb[];
    keepRoot?: boolean;
    includesCurrent?: boolean;
    truncate?: boolean;
    'data-test-id'?: string;
    verticalGap?: BreadcrumbGap;
};

export enum BreadcrumbGap {
    None = 'None',
    Small = 'Small',
    Medium = 'Medium',
}

export const verticalGapClassMap: Record<BreadcrumbGap, string> = {
    [BreadcrumbGap.None]: 'tw-gap-y-0',
    [BreadcrumbGap.Small]: 'tw-gap-y-0.5',
    [BreadcrumbGap.Medium]: 'tw-gap-y-1',
};

export const Breadcrumbs = ({
    items,
    keepRoot = true,
    truncate = false,
    includesCurrent = false,
    'data-test-id': dataTestId = 'breadcrumb',
    verticalGap = BreadcrumbGap.Medium,
}: BreadcrumbsProps): ReactElement => {
    const props = mapBreadcrumbsToAriaProps(items);
    const { navProps } = useBreadcrumbs(props as AriaBreadcrumbsProps);

    return (
        <nav {...navProps} className="tw-font-sans" aria-label="Breadcrumb" data-test-id={dataTestId}>
            <ol className={merge(['tw-list-none tw-flex tw-flex-wrap', verticalGapClassMap[verticalGap]])}>
                <FormattedBreadcrumbs
                    items={items}
                    keepRoot={keepRoot}
                    truncate={truncate}
                    includesCurrent={includesCurrent}
                    data-test-id={dataTestId}
                />
            </ol>
        </nav>
    );
};
Breadcrumbs.displayName = 'FondueBreadcrumbs';
