/* (c) Copyright Frontify Ltd., all rights reserved. */
import { useButton } from "@react-aria/button";
import { useFocusRing } from "@react-aria/focus";
import { useGridRow, useGridCell } from "@react-aria/grid";
import { mergeProps, useId } from "@react-aria/utils";
import { FOCUS_STYLE } from "@utilities/focusStyle";
import React, { FC, useRef } from "react";
import { useDraggableItem } from "./useDraggableItem";
import { merge } from "@utilities/merge";
import { CollectionItemProps, ItemDragState } from "./types";

export const CollectionItem: FC<CollectionItemProps> = ({
    item,
    gridState,
    dragState,
    renderContent,
    dragDisabled,
    showFocusRing,
}) => {
    const rowRef = useRef<HTMLDivElement>(null);

    const { isFocusVisible, focusProps } = useFocusRing();

    const cellRef = React.useRef(null);
    const cellNode = [...item.childNodes][0];
    const { gridCellProps: cellProps } = useGridCell(
        {
            node: cellNode,
            focusMode: "cell",
        },
        gridState,
        cellRef,
    );

    const { rowProps } = useGridRow({ node: item }, gridState, rowRef);
    const { dragProps, dragButtonProps } = useDraggableItem({ key: item.key }, dragState);

    const dragButtonRef = useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(
        {
            ...dragButtonProps,
            elementType: "div",
        },
        dragButtonRef,
    );
    const id = useId();

    const componentDragState = dragState.isDragging(item.key) ? ItemDragState.Dragging : ItemDragState.Idle;

    let gridRowProps: unknown = {};
    let gridCellProps: unknown = {};

    if (!dragDisabled) {
        gridRowProps = mergeProps(rowProps);
        const { onKeyDownCapture, ...restOfCellProps } = cellProps;
        const cellPropsWithKeyDown = { ...restOfCellProps, onKeyDown: onKeyDownCapture };
        gridCellProps = mergeProps(cellPropsWithKeyDown, dragProps, buttonProps, focusProps);
    }

    return (
        <div {...gridRowProps} ref={rowRef} style={{ zIndex: 1, position: "relative" }} aria-labelledby={id}>
            <div
                {...gridCellProps}
                className={merge([isFocusVisible && showFocusRing && FOCUS_STYLE])}
                ref={cellRef}
                style={{ outline: "none" }}
            >
                {renderContent(item, { componentDragState, isFocusVisible })}
            </div>
        </div>
    );
};
