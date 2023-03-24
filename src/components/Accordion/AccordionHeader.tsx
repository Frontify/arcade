/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { ReactElement, cloneElement, isValidElement, useState } from 'react';
import { IconSize } from '@foundation/Icon/IconSize';
import { IconProps } from '@foundation/Icon/IconProps';
import { merge } from '@utilities/merge';
import { AccordionHeaderProps } from './types';
import { AccordionHeaderIcon } from './AccordionHeaderIcon';

export const AccordionHeader = ({ isOpen = false, decorator, disabled = false, children }: AccordionHeaderProps) => {
    const [headingRef, setHeadingRef] = useState<HTMLSpanElement | null>(null);
    const icon = <AccordionHeaderIcon isOpen={isOpen} disabled={disabled} />;

    return (
        <span data-test-id="accordion-header" className="tw-block tw-px-8 tw-py-6">
            <span
                data-test-id="fieldset-header"
                role="navigation"
                aria-label={`${headingRef?.innerText || ''}`}
                className={merge([
                    'tw-flex tw-items-center tw-gap-x-1.5 tw-w-full tw-flex-row',
                    !disabled && isOpen ? 'tw-text-black' : 'tw-text-black-80',
                    disabled ? 'tw-text-black-40' : 'dark:tw-text-white',
                ])}
            >
                {isValidElement(decorator) && (
                    <span data-test-id="accordion-header-decorator" className="tw-shrink-0 tw-leading-4">
                        {cloneElement(decorator as ReactElement<IconProps>, {
                            size: IconSize.Size16,
                        })}
                    </span>
                )}
                <span
                    ref={setHeadingRef}
                    data-test-id="accordion-header-text"
                    className="tw-text-left tw-text-m tw-font-normal"
                >
                    {children}
                </span>
                {icon && (
                    <span data-test-id="header-icon-container" className="tw-ml-auto tw-shrink-0">
                        {icon}
                    </span>
                )}
            </span>
        </span>
    );
};
AccordionHeader.displayName = 'FondueAccordionHeader';
