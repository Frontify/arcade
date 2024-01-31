/* (c) Copyright Frontify Ltd., all rights reserved. */

import { IconPeople12 } from '@foundation/Icon/Generated';
import { MentionableCategory } from '../types';
import { MarkupElementNodeComponentType, MarkupElementNodeType, MarkupElementProps } from './types';

const MarkupElementNode = ({ attributes, element, nodeProps, children }: MarkupElementProps) => (
    <span
        {...attributes}
        dir="auto"
        data-slate-value={element?.value}
        data-slate-key={element?.key}
        data-slate-category={element?.category}
        contentEditable={false}
        style={{
            lineHeight: '10px',
            padding: '1px',
            margin: '0 1px',
            fontWeight: 'bold',
            verticalAlign: 'baseline',
            display: 'inline-block',
            borderRadius: '2px',
            backgroundColor: 'rgb(227, 232, 246)',
            color: 'rgb(130, 95, 255)',
        }}
        {...nodeProps}
    >
        {children}
    </span>
);

const MarkupElementNodeGroup: MarkupElementNodeType = ({ children, ...props }) => (
    <MarkupElementNode {...props}>
        <span
            style={{
                paddingRight: '3px',
                display: 'inline-block',
                margin: '-1px 0',
            }}
        >
            <IconPeople12 />
        </span>
        {children}
    </MarkupElementNode>
);

const MarkupElementNodeAll: MarkupElementNodeType = ({ children, ...props }) => (
    <MarkupElementNode {...props}>@{children}</MarkupElementNode>
);

const MarkupElementNodeUser: MarkupElementNodeType = ({ children, ...props }) => (
    <MarkupElementNode {...props}>{children}</MarkupElementNode>
);

export const MarkupElementNodeComponent: MarkupElementNodeComponentType = ({ category, children, ...props }) => {
    const component: Record<MentionableCategory, MarkupElementNodeType> = {
        [MentionableCategory.USER]: MarkupElementNodeUser,
        [MentionableCategory.GROUP]: MarkupElementNodeGroup,
        [MentionableCategory.ALL]: MarkupElementNodeAll,
    };

    const Component = component[category as MentionableCategory] ?? component[MentionableCategory.USER];

    return <Component {...props}>{children}</Component>;
};
