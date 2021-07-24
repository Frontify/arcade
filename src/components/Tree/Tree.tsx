/* (c) Copyright Frontify Ltd., all rights reserved. */

import { ReactElement, useEffect, useState } from "react";
import TreeNode, { TreeNodeProps } from "./Node";

export type TreeProps = {
    nodes: TreeNodeProps[];
    onSelect: (id?: string) => void;
    activeNodeId?: string;
};

export default function Tree({
    nodes,
    onSelect,
    activeNodeId: initialActiveNodeId,
}: TreeProps): ReactElement<TreeProps> {
    const [activeNodeId, setActiveNodeId] = useState<string | undefined>(initialActiveNodeId);
    useEffect(() => setActiveNodeId(initialActiveNodeId), [initialActiveNodeId]);

    return (
        <ul data-test-id="tree" className="p-0 m-0 font-sans font-normal list-none text-left">
            {nodes.map((node) => (
                <TreeNode
                    key={node.id}
                    node={node}
                    activeNodeId={activeNodeId}
                    strong
                    onClick={(id?: string) => {
                        setActiveNodeId(id);
                        onSelect(id);
                    }}
                />
            ))}
        </ul>
    );
}
