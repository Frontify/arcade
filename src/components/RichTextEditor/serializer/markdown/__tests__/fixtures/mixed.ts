/* (c) Copyright Frontify Ltd., all rights reserved. */

import { exampleTextStyles } from '@components/RichTextEditor/helpers/exampleValues';
import { Targets } from '../../types';
import { createLink, createP, createText } from './helpers';
import { orderedListTree } from './orderedList';
import { unorderedListTree } from './unorderedList';
import { ELEMENT_PARAGRAPH } from '@udecode/plate';

export const mixedMarkdown = `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
This is ~~text that has strikethrough~~ in it
I am inline basic mark**bold**_italic_~~delete~~\`inline code\`
\`This is inline code and not code block
tell application "Foo";
    beep
end tell\`
This is [link to frontify.com](https://www.frontify.com/){:target="_self"}.

This is second link [link to www.frontify.com](https://www.frontify.com/){:target="_blank"} with target blank.

I am normal Paragraph

> Presenting the Quote
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna @[user:aaaaaaaa06] aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Presenting the Paragraph
Lorem ipsum dolor sit amet, consetetur @[group:1111111111] sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. @[user:aaaaaaaa13]


- list

  - list

    - list

  - list
  - list



1. Ordered list item number one.
1. Ordered list item number two.

   1. Ordered list child item number one.
   1. Ordered list child item number two.

      1. Another ordered list child item number one.
      1. Another ordered list child item number two.

   1. Ordered list child item number three.

1. Ordered list item number three.

`;

export const mixedTree = [
    {
        type: exampleTextStyles.heading1,
        children: [
            {
                text: 'Heading 1',
            },
        ],
    },
    {
        type: exampleTextStyles.heading2,
        children: [
            {
                text: 'Heading 2',
            },
        ],
    },
    {
        type: exampleTextStyles.heading3,
        children: [
            {
                text: 'Heading 3',
            },
        ],
    },
    {
        type: exampleTextStyles.heading4,
        children: [
            {
                text: 'Heading 4',
            },
        ],
    },
    {
        type: ELEMENT_PARAGRAPH,
        children: [
            {
                text: 'This is ',
            },
            {
                strikethrough: true,
                text: 'text that has strikethrough',
            },
            {
                text: ' in it\nI am inline basic mark',
            },
            {
                bold: true,
                text: 'bold',
            },
            {
                italic: true,
                text: 'italic',
            },
            {
                strikethrough: true,
                text: 'delete',
            },
            {
                code: true,
                text: 'inline code',
            },
            {
                text: '\n',
            },
            {
                code: true,
                text: 'This is inline code and not code block\ntell application "Foo";\n    beep\nend tell',
            },
            {
                text: '\nThis is ',
            },
            createLink('https://www.frontify.com/', 'link to frontify.com', Targets.Self),
            createText('.'),
        ],
    },
    createP([
        createText('This is second link '),
        createLink('https://www.frontify.com/', 'link to www.frontify.com'),
        createText(' with target blank.'),
    ]),
    createP([createText('I am normal Paragraph')]),
    {
        type: exampleTextStyles.quote,
        children: [
            {
                type: ELEMENT_PARAGRAPH,
                children: [
                    {
                        text: 'Presenting the Quote\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ',
                    },
                    {
                        type: 'mention',
                        category: 'user',
                        id: 'aaaaaaaa06',
                        children: [{ text: '' }],
                    },
                    {
                        text: ' aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                ],
            },
        ],
    },
    {
        type: ELEMENT_PARAGRAPH,
        children: [
            {
                text: 'Presenting the Paragraph\nLorem ipsum dolor sit amet, consetetur ',
            },
            {
                type: 'mention',
                category: 'group',
                id: '1111111111',
                children: [{ text: '' }],
            },
            {
                text: ' sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
            },
            {
                type: 'mention',
                category: 'user',
                id: 'aaaaaaaa13',
                children: [{ text: '' }],
            },
            {
                text: '',
            },
        ],
    },

    ...unorderedListTree[0],
    ...orderedListTree[0],
];
