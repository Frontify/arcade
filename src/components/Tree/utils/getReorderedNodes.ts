import { DraggableItem, DropZonePosition, moveItems } from '@utilities/dnd';
import { TreeFlatListItem } from '@components/Tree';

export const getReorderedNodes = (
    sourceItemId: string,
    targetParentId: NullableString,
    positionBeforeId: NullableString,
    nodes: DraggableItem<TreeFlatListItem>[],
) => {
    const sameLevelNodes = nodes.filter((node) => node.parentId === targetParentId);
    const sourceItem = nodes.find((item) => item.id === sourceItemId);
    let targetItemIndex = sameLevelNodes.findIndex((item) => item.id === positionBeforeId);
    targetItemIndex = targetItemIndex < 0 ? sameLevelNodes.length + targetItemIndex : targetItemIndex;
    const position = targetItemIndex === -1 ? DropZonePosition.After : DropZonePosition.Before;

    return sourceItem
        ? moveItems<TreeFlatListItem>(
              sameLevelNodes[targetItemIndex],
              { ...sourceItem, parentId: targetParentId, sort: null },
              position,
              sameLevelNodes,
          )
        : [...nodes];
};
