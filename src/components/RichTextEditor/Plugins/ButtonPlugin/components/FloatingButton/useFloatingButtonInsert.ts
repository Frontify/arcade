import { useEffect } from 'react';
import {
    HTMLPropsAs,
    focusEditor,
    getPluginOptions,
    useComposedRef,
    useEditorRef,
    useHotkeys,
    useOnClickOutside,
} from '@udecode/plate-core';
import { getSelectionBoundingClientRect } from '@udecode/plate-floating';
import { useFocused } from 'slate-react';
import { ButtonPlugin, ELEMENT_BUTTON } from '../../createButtonPlugin';
import { triggerFloatingButtonInsert } from '../../utils/triggerFloatingButtonInsert';
import { FloatingButtonProps } from './FloatingButton';
import { floatingButtonActions, floatingButtonSelectors, useFloatingButtonSelectors } from './floatingButtonStore';
import { useFloatingButtonEscape } from './useFloatingButtonEscape';
import { useVirtualFloatingButton } from './useVirtualFloatingButton';

export const useFloatingButtonInsert = ({ floatingOptions, ...props }: FloatingButtonProps): HTMLPropsAs<'div'> => {
    const editor = useEditorRef();
    const focused = useFocused();
    const mode = useFloatingButtonSelectors().mode();
    const open = useFloatingButtonSelectors().isOpen(editor.id);

    const { triggerFloatingButtonHotkeys } = getPluginOptions<ButtonPlugin>(editor, ELEMENT_BUTTON);

    useHotkeys(
        triggerFloatingButtonHotkeys!,
        (e) => {
            e.preventDefault();

            triggerFloatingButtonInsert(editor, {
                focused,
            });
        },
        {
            enableOnContentEditable: true,
        },
        [focused],
    );

    const ref = useOnClickOutside(
        () => {
            if (floatingButtonSelectors.mode() === 'insert') {
                floatingButtonActions.hide();
                focusEditor(editor, editor.selection ?? undefined);
            }
        },
        {
            disabled: !open,
        },
    );

    const { update, style, floating } = useVirtualFloatingButton({
        open: open && mode === 'insert',
        getBoundingClientRect: getSelectionBoundingClientRect,
        whileElementsMounted: undefined,
        ...floatingOptions,
    });

    // wait for update before focusing input
    useEffect(() => {
        if (open) {
            update();
            floatingButtonActions.updated(true);
        } else {
            floatingButtonActions.updated(false);
        }
    }, [open, update]);

    useFloatingButtonEscape();

    return {
        style: {
            ...style,
            zIndex: 1,
        },
        ...props,
        ref: useComposedRef<HTMLElement | null>(props.ref, floating, ref),
    };
};
