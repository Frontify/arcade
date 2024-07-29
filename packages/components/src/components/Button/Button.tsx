/* (c) Copyright Frontify Ltd., all rights reserved. */

import { forwardRef, type ForwardedRef, type MouseEvent, type ReactNode } from 'react';

import { cn } from '#/utilities/styleUtilities';

import { buttonStyles } from './styles/buttonStyles';
import { iconStyles } from './styles/iconStyles';
import { textStyles } from './styles/textStyles';

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
    'aria-label'?: string;
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
            'data-test-id': dataTestId = 'fondue-button',
            className = '',
            onPress = () => {},
            ...props
        }: ButtonProps,
        ref: ForwardedRef<HTMLButtonElement | null>,
    ) => {
        return (
            <button
                ref={ref}
                type={type}
                data-test-id={dataTestId}
                className={cn(
                    buttonStyles({ size, variant, ...props }),
                    textStyles({ variant, ...props }),
                    iconStyles({ variant, ...props }),
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
                {children}
            </button>
        );
    },
);

Button.displayName = 'Button';
