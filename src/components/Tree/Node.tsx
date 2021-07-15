/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconProps, IconSize } from "@components/Icon/Icon";
import { ReactComponent as IconCaretRight } from "@components/Icon/Svg/CaretRight.svg";
import { ReactElement, useState } from "react";
import css from "./Tree.module.css";

export interface TreeNode {
    name: string;
    icon?: ReactElement<IconProps>;
    label?: string;
    link?: string;
    nodes?: TreeNode[];
}

export interface NodeProps {
    node: TreeNode;
    strong?: boolean;
    onToggle?: () => void;
    onClick?: () => void;
}

export default function Node({
    node: { name, label, icon, nodes },
    strong,
    onToggle,
    onClick,
}: NodeProps): ReactElement<NodeProps> {
    const [showNodes, setShowNodes] = useState(false);
    const [active, setActive] = useState(false);

    const classNames = [css.nodeLink];
    if (active) {
        classNames.push(css.nodeLinkActive);
    }
    if (strong) {
        classNames.push(css.nodeLinkStrong);
    }

    return (
        <li className={css.node}>
            <a
                className={classNames.join(" ")}
                onClick={() => {
                    setActive(true);
                    onToggle && onToggle();
                }}
            >
                <span
                    onClick={(event) => {
                        event.stopPropagation();
                        setShowNodes(!showNodes);
                        onClick && onClick();
                    }}
                >
                    {nodes && (
                        <IconCaretRight
                            size={IconSize.Size16}
                            className={showNodes ? `${css.nodeToggle} ${css.nodeToggleActive}` : css.nodeToggle}
                        />
                    )}
                </span>
                {icon && <span className={css.nodeIcon}>{icon}</span>}
                <span className={css.nodeName}>{name}</span>
                <span className={css.nodeLabel}>{label}</span>
            </a>
            {nodes && showNodes && (
                <ul className={css.tree}>
                    {nodes.map((node) => {
                        return <Node key={node.name} node={node} />;
                    })}
                </ul>
            )}
        </li>
    );
}
