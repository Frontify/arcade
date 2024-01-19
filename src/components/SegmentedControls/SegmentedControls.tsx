/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconProps } from '@foundation/Icon/IconProps';
import { useMemoizedId } from '@hooks/useMemoizedId';
import { useFocusRing } from '@react-aria/focus';
import { setInteractionModality } from '@react-aria/interactions';
import { useRadio, useRadioGroup } from '@react-aria/radio';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { RadioGroupState, useRadioGroupState } from '@react-stately/radio';
import { FOCUS_STYLE } from '@utilities/focusStyle';
import { merge } from '@utilities/merge';
import { motion } from 'framer-motion';
import { ReactElement, forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react';

export type IconItem = {
    id: string;
    icon: ReactElement<IconProps>;
    value?: string;
    ariaLabel: string;
};

export type TextOrNumberItem = {
    id: string;
    value: string | number;
};

export type SegmentSize = 'small' | 'medium';

export type SegmentedControlsProps = {
    id?: string;
    items: (TextOrNumberItem | IconItem)[];
    activeItemId?: string;
    onChange: (id: string) => void;
    ariaLabel?: string;
    disabled?: boolean;
    hugWidth?: boolean;
    size?: SegmentSize;
};

const isIconItem = (item: TextOrNumberItem | IconItem): item is IconItem => (item as IconItem).icon !== undefined;

interface SegmentedControlsItemProps {
    id: string;
    item: TextOrNumberItem | IconItem;
    disabled: boolean;
    radioGroupState: RadioGroupState;
    size?: SegmentSize;
}

const SegmentedControlsItem = forwardRef<HTMLDivElement, SegmentedControlsItemProps>((props, ref) => {
    const { id, item, disabled, radioGroupState, size } = props;
    const inputRef = useRef<HTMLInputElement | null>(null);
    const isActive = item.id === radioGroupState.selectedValue;
    const { inputProps } = useRadio(
        {
            value: item.id,
            'aria-label': isIconItem(item) ? item.ariaLabel : item.value.toString(),
            isDisabled: disabled,
            id: isActive ? id : undefined,
        },
        radioGroupState,
        inputRef,
    );
    const { isFocusVisible, focusProps } = useFocusRing();

    const handleMockLabelClick = () => {
        if (!disabled) {
            radioGroupState.setSelectedValue(item.id);
            inputRef.current?.focus();
            setInteractionModality('pointer');
        }
    };

    const getSegmentedControlsItemTestId = () => {
        switch (true) {
            case isIconItem(item):
                return 'fondue-segmented-controls-item-icon';
            case typeof item.value === 'string':
                return 'fondue-segmented-controls-item-text';
            default:
                return 'fondue-segmented-controls-item-number';
        }
    };

    return (
        <div
            key={item.id}
            ref={ref}
            className={merge([
                'tw-relative',
                "after:tw-content-[''] after:tw-border-r after:tw-border-solid after:tw-border-line-strong after:tw-absolute after:tw-right-0 after:tw-h-full last:after:tw-hidden",
                isFocusVisible && FOCUS_STYLE,
            ])}
        >
            <div
                // TODO: Change element back to label when bug #2380 from @react-aria is fixed
                // https://github.com/adobe/react-spectrum/issues/2380
                role="none"
                onClick={handleMockLabelClick}
                data-test-id={getSegmentedControlsItemTestId()}
                className={merge([
                    'tw-relative tw-w-full tw-py-2 tw-inline-flex tw-justify-center tw-items-center tw-font-sans tw-font-normal tw-h-full tw-text-center',
                    size === 'small' ? 'tw-px-2' : 'tw-px-4',
                    isActive && !disabled ? 'tw-text-text' : 'tw-text-text-weak',
                    disabled
                        ? 'tw-text-box-disabled-inverse tw-bg-box-disabled hover:tw-cursor-not-allowed'
                        : 'hover:tw-text-text hover:tw-cursor-pointer',
                ])}
            >
                <VisuallyHidden>
                    <input
                        {...inputProps}
                        {...focusProps}
                        data-test-id="fondue-segmented-controls-input"
                        ref={inputRef}
                    />
                </VisuallyHidden>
                <span className="tw-overflow-hidden tw-text-ellipsis tw-whitespace-nowrap tw-flex">
                    {isIconItem(item) && (
                        <span className="tw-leading-3" aria-label={item.ariaLabel}>
                            {item.icon}
                        </span>
                    )}
                    {item.value && <span className={isIconItem(item) ? 'tw-ml-2' : ''}>{item.value.toString()}</span>}
                </span>
            </div>
        </div>
    );
});

SegmentedControlsItem.displayName = 'SegmentedControlsItem';

export const SegmentedControls = ({
    id: propId,
    items,
    activeItemId,
    onChange,
    ariaLabel = 'SegmentedControls',
    disabled = false,
    hugWidth = false,
    size,
}: SegmentedControlsProps): ReactElement => {
    const id = useMemoizedId(propId);
    const groupProps = { onChange, value: activeItemId, label: ariaLabel, isDisabled: disabled };
    const radioGroupState = useRadioGroupState(groupProps);
    const { radioGroupProps, labelProps } = useRadioGroup(groupProps, radioGroupState);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [activeBorderDimensions, setActiveBorderDimensions] = useState<{ x: string; width: string } | null>(null);
    const itemElements = useMemo(() => {
        return items.map((item, index) => (
            <SegmentedControlsItem
                id={id}
                item={item}
                disabled={disabled}
                radioGroupState={radioGroupState}
                ref={(el) => (itemsRef.current[index] = el)}
                key={`fondue-segmented-controls-${id}-item-${item.id}`}
                size={size}
            />
        ));
    }, [items, id, disabled, radioGroupState, size]);
    const selectedIndex = items.findIndex((item) => item.id === radioGroupState.selectedValue);
    const width = hugWidth ? '' : 'tw-w-full';
    const alignment = hugWidth ? 'tw-flex' : 'tw-grid tw-grid-flow-col tw-auto-cols-fr tw-justify-evenly';
    const isSmall = size === 'small';
    const isLastElement = selectedIndex === itemsRef.current.length - 1;

    const getSliderX = useCallback(() => {
        let translateX = hugWidth ? -1 : 0;
        translateX -= isSmall && isLastElement ? 1 : 0;
        for (let i = 0; i < selectedIndex; i++) {
            translateX += itemsRef.current[i]?.clientWidth ?? 0;
        }

        translateX -= isLastElement || hugWidth ? 0 : 1;
        return `${translateX}px`;
    }, [selectedIndex, isSmall, isLastElement, hugWidth]);

    const getSliderWidth = useCallback(() => {
        const width = isSmall || hugWidth ? -1 : 0;

        return `${(itemsRef.current[selectedIndex]?.clientWidth ?? 0) + width}px`;
    }, [selectedIndex, isSmall, hugWidth]);

    const setSliderDimensions = useCallback(() => {
        const dimensions = itemsRef.current ? { x: getSliderX(), width: getSliderWidth() } : { x: '0px', width: '0px' };
        setActiveBorderDimensions(dimensions);
    }, [getSliderWidth, getSliderX]);

    useEffect(() => {
        if (selectedIndex >= 0) {
            setSliderDimensions();
        }
        window.addEventListener('resize', setSliderDimensions);

        return () => {
            window.removeEventListener('resize', setSliderDimensions);
        };
    }, [selectedIndex, setSliderDimensions]);

    console.log(radioGroupProps);

    return (
        <div className="tw-flex">
            <fieldset
                {...radioGroupProps}
                data-test-id="fondue-segmented-controls"
                className={merge([
                    'tw-relative tw-h-9 tw-p-0 tw-border tw-border-solid tw-border-line-strong tw-m-0 tw-bg-base-alt tw-rounded tw-font-sans tw-text-s tw-select-none',
                    width,
                    alignment,
                ])}
            >
                <VisuallyHidden>
                    <span {...labelProps}>{ariaLabel}</span>
                </VisuallyHidden>
                <motion.div
                    aria-hidden="true"
                    // div border is not included in width so it must be subtracted from translation.
                    animate={activeBorderDimensions ?? { x: '0px', width: '0px' }}
                    initial={false}
                    transition={{ type: 'tween', duration: 0.3 }}
                    hidden={!activeItemId}
                    className={merge([
                        'tw-absolute tw--inset-y-px tw-h-full tw-box-content tw-border tw-rounded tw-pointer-events-none',
                        disabled
                            ? 'tw-border-line-x-strong hover:tw-cursor-not-allowed'
                            : 'tw-border-line-xx-strong tw-bg-base',
                    ])}
                />
                {itemElements}
            </fieldset>
        </div>
    );
};
SegmentedControls.displayName = 'FondueSegmentedControls';
