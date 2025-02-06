/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconArrowRoundClockwise, IconExclamationMarkTriangle } from '@frontify/fondue-icons';
import { forwardRef, type ForwardedRef, type MouseEvent, type ReactNode } from 'react';

import { cn } from '#/utilities/styleUtilities';

import { buttonStyles } from './styles/buttonStyles';
import { iconStyles } from './styles/iconStyles';
import { textStyles } from './styles/textStyles';

import styles from './styles/button.module.scss';

type ButtonRounding = 'medium' | 'full';

type ButtonStyle = 'default' | 'positive' | 'negative' | 'danger' | 'loud';

type ButtonSize = 'small' | 'medium' | 'large';

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonEmphasis = 'default' | 'weak' | 'strong';

type ButtonAspect = 'default' | 'square';

export type ButtonProps = {
    /**
     * @default "button"
     */
    type?: ButtonType;
    /**
     * @default null
     */
    title?: string;
    /**
     * @default "default"
     */
    variant?: ButtonStyle;
    /**
     * @default "strong"
     */
    emphasis?: ButtonEmphasis;
    /**
     * @default "medium"
     */
    size?: ButtonSize;
    /**
     * @default "medium"
     */
    rounding?: ButtonRounding;
    /**
     * @default false
     */
    disabled?: boolean;
    /**
     * @default "default"
     */
    aspect?: ButtonAspect;
    /**
     * @default true
     */
    hugWidth?: boolean;
    children?: ReactNode;
    onPress?: (event?: MouseEvent<HTMLButtonElement>) => void;
    form?: string;
    loading?: boolean;
    error?: boolean;
    'aria-label'?: string;
    'aria-label-loading'?: string;
    'aria-label-error'?: string;
    'aria-describedby'?: string;
    'data-test-id'?: string;
    className?: string;
};

export const Button = forwardRef<HTMLButtonElement | null, ButtonProps>(
    (
        {
            children,
            type = 'button',
            variant,
            size = 'medium',
            form,
            loading,
            error,
            'data-test-id': dataTestId = 'fondue-button',
            className = '',
            onPress = () => {},
            hugWidth = true,
            'aria-label-loading': ariaLabelLoading = 'loading',
            'aria-label-error': ariaLabelError = 'error',
            ...props
        }: ButtonProps,
        ref: ForwardedRef<HTMLButtonElement | null>,
    ) => {
        return (
            <button
                ref={ref}
                type={type}
                form={form}
                data-test-id={dataTestId}
                data-state={loading ? 'loading' : error ? 'error' : undefined}
                className={cn(
                    buttonStyles({ size, variant, hugWidth, ...props }),
                    textStyles({ variant, ...props }),
                    iconStyles({ variant, ...props }),
                    styles.root,
                    className,
                )}
                {...props}
                onClick={(event) => {
                    // @ts-expect-error - Allows other components who use Button as a trigger to pass an action
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
                    props.onClick?.(event);
                    onPress?.(event);
                }}
            >
                <span className={styles.children}>{children}</span>

                <span className={styles.loading} aria-label={ariaLabelLoading}>
                    <span className="tw-animate-spin tw-w-full tw-items-center tw-justify-center tw-flex">
                        <IconArrowRoundClockwise size={20} />
                    </span>
                </span>

                <span className={styles.error} aria-label={ariaLabelError}>
                    <span className="tw-w-full tw-items-center tw-justify-center tw-flex">
                        <IconExclamationMarkTriangle size={20} />
                    </span>
                </span>
            </button>
        );
    },
);

Button.displayName = 'Button';
