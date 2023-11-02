/* (c) Copyright Frontify Ltd., all rights reserved. */

import { INSET_BORDER, MIGHTY_INSET_BORDER } from '@utilities/borderStyle';
import { merge } from '@utilities/merge';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactElement } from 'react';
import { BorderStyle, ToastAnimationDirection, ToastProps, toastStylesBackgroundColorsMap } from './types';

const CONTAINER_BASE_CLASSES =
    'tw-min-h-[2rem] tw-bg-base tw-rounded-lg tw-shadow-mid tw-z-[120000] before:!tw-rounded-lg';

const getToastStartPosition = (animationDirection: ToastAnimationDirection) =>
    animationDirection === ToastAnimationDirection.BottomToTop ? '150%' : '-150%';

const getContainerClasses = (borderStyle: BorderStyle) => {
    return merge([CONTAINER_BASE_CLASSES, borderStyle === BorderStyle.Mighty ? MIGHTY_INSET_BORDER : INSET_BORDER]);
};

export const Toast = ({
    isOpen,
    style,
    icon,
    animationDirection = ToastAnimationDirection.BottomToTop,
    children,
    borderStyle = BorderStyle.Default,
    'data-test-id': dataTestId = 'toast',
}: ToastProps): ReactElement => (
    <AnimatePresence>
        {isOpen && (
            <motion.div
                className={getContainerClasses(borderStyle)}
                initial={{
                    opacity: 0,
                    y: getToastStartPosition(animationDirection),
                }}
                transition={{
                    ease: 'easeOut',
                }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: getToastStartPosition(animationDirection) }}
                data-test-id={dataTestId}
                aria-live="polite"
                role="alert"
            >
                <div className="tw-flex">
                    <div
                        className={merge([
                            'tw-flex tw-items-center tw-justify-center tw-min-h-[2rem] tw-min-w-[3rem] tw-rounded-l-lg tw-text-white',
                            toastStylesBackgroundColorsMap[style],
                        ])}
                    >
                        {icon}
                    </div>
                    {children}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);
Toast.displayName = 'FondueToast';
