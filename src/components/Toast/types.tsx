/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ReactNode } from 'react';

export type ToastProps = {
    isOpen: boolean;
    style: ToastStyle;
    icon: ReactNode;
    animationDirection?: ToastAnimationDirection;
    children?: ReactNode;
};

export enum ToastAnimationDirection {
    BottomToTop = 'BottomToTop',
    TopToBottom = 'TopToBottom',
}

export enum ToastStyle {
    Loud = 'Loud',
    Danger = 'Danger',
    Success = 'Success',
    Warning = 'Warning',
}

export const toastStylesBackgroundColorsMap: Record<ToastStyle, string> = {
    [ToastStyle.Loud]: 'tw-bg-box-selected-strong',
    [ToastStyle.Danger]: 'tw-bg-box-negative-strong-pressed',
    [ToastStyle.Success]: 'tw-bg-box-positive-strong-pressed',
    [ToastStyle.Warning]: 'tw-bg-box-warning-strong',
};
