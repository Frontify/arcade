/* (c) Copyright Frontify Ltd., all rights reserved. */

export const mentionsMarkdown_0 = 'Try mentioning characters, like: @[all:false]\n';
export const mentionsMarkdown_1 = 'Multiple mentions: @[all:true], @[group:10] and @[user:20]\n';
export const mentionsMarkdown_2 = 'A single mention at the end of a sentence @[group:10]\n';
export const mentionsMarkdown_3 = 'Mention @[user:20] in the middle of a sentence.\n';
export const mentionsMarkdown = [mentionsMarkdown_0, mentionsMarkdown_1, mentionsMarkdown_2, mentionsMarkdown_3];

export const mentionsTree_0 = [
    {
        type: 'p',
        children: [
            { text: 'Try mentioning characters, like: ' },
            {
                type: 'mention',
                id: 'false',
                category: 'all',
                children: [{ text: '' }],
            },
            { text: '' },
        ],
    },
];
export const mentionsTree_1 = [
    {
        type: 'p',
        children: [
            { text: 'Multiple mentions: ' },
            {
                type: 'mention',
                id: 'true',
                category: 'all',
                children: [{ text: '' }],
            },
            { text: ', ' },
            {
                type: 'mention',
                id: '10',
                category: 'group',
                children: [{ text: '' }],
            },
            { text: ' and ' },
            {
                type: 'mention',
                id: '20',
                category: 'user',
                children: [{ text: '' }],
            },
            { text: '' },
        ],
    },
];
export const mentionsTree_2 = [
    {
        type: 'p',
        children: [
            { text: 'A single mention at the end of a sentence ' },
            {
                type: 'mention',
                children: [{ text: '' }],
                id: '10',
                category: 'group',
            },
            { text: '' },
        ],
    },
];
export const mentionsTree_3 = [
    {
        type: 'p',
        children: [
            { text: 'Mention ' },
            {
                type: 'mention',
                id: '20',
                category: 'user',
                children: [{ text: '' }],
            },
            { text: ' in the middle of a sentence.' },
        ],
    },
];
export const mentionsTree = [mentionsTree_0, mentionsTree_1, mentionsTree_2, mentionsTree_3];
