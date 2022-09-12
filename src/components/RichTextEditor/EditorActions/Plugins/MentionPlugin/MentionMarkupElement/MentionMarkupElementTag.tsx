/* (c) Copyright Frontify Ltd., all rights reserved. */

import React from 'react';
import { useFocused, useSelected } from 'slate-react';
import { MentionElementProps } from '@udecode/plate';
import { TCategory } from '../types';

export const MentionMarkupElementTag = (props: MentionElementProps) => {
    const { attributes, children, element, nodeProps, prefix, renderLabel } = props;

    const selected = useSelected();
    const focused = useFocused();

    const backgroundColor: Record<TCategory, string> = {
        [TCategory.GROUP]: '#00FF00',
        [TCategory.USER]: '#ff0000',
        [TCategory.ALL]: '#0000FF',
    };

    return (
        <span
            {...attributes}
            data-slate-value={element.value}
            data-slate-key={element.key}
            data-slate-category={element.category}
            contentEditable={false}
            data-cy={`mention-${element.value?.replaceAll(' ', '-')}`}
            style={{
                padding: '3px 3px 2px',
                margin: '0 1px',
                verticalAlign: 'baseline',
                display: 'inline-block',
                borderRadius: '4px',
                backgroundColor: backgroundColor[element.category as TCategory],
                fontSize: '0.9em',
                boxShadow: selected && focused ? '0 0 0 2px #B4D5FF' : 'none',
            }}
            {...nodeProps}
        >
            {prefix}
            {renderLabel ? renderLabel(element) : element.value}
            {children}
        </span>
    );
};
