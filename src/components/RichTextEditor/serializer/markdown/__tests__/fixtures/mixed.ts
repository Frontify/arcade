/* (c) Copyright Frontify Ltd., all rights reserved. */

import { orderedListTree } from './orderedList';
import { unorderedListTree } from './unorderedList';

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
This is [link to frontify.com](https://www.frontify.com/).
I am normal Paragraph
> Presenting the Quote
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna @[user:10] aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

Presenting the Paragraph
Lorem ipsum dolor sit amet, consetetur @[group:2] sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. @[user:11]

- list

  - list

    - list

  - list
  - list



1. Ordered list
1. Ordered list

   1. aaa
   1. aaa

      1. eeeee
      1. eeeee

   1. aaa

1. Ordered list

`;

export const mixedTree = [
    {
        type: 'heading1',
        children: [
            {
                text: 'Heading 1',
            },
        ],
    },
    {
        type: 'heading2',
        children: [
            {
                text: 'Heading 2',
            },
        ],
    },
    {
        type: 'heading3',
        children: [
            {
                text: 'Heading 3',
            },
        ],
    },
    {
        type: 'heading4',
        children: [
            {
                text: 'Heading 4',
            },
        ],
    },
    {
        type: 'p',
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
            {
                type: 'a',
                url: 'https://www.frontify.com/',
                children: [
                    {
                        text: 'link to frontify.com',
                    },
                ],
            },
            {
                text: '.\nI am normal Paragraph',
            },
        ],
    },
    {
        type: 'quote',
        children: [
            {
                type: 'p',
                children: [
                    {
                        text: 'Presenting the Quote\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna ',
                    },
                    {
                        type: 'mention',
                        category: 'user',
                        key: '10',
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
        type: 'p',
        children: [
            {
                text: 'Presenting the Paragraph\nLorem ipsum dolor sit amet, consetetur ',
            },
            {
                type: 'mention',
                category: 'group',
                key: '2',
                children: [{ text: '' }],
            },
            {
                text: ' sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
            },
            {
                type: 'mention',
                category: 'user',
                key: '11',
                children: [{ text: '' }],
            },
            {
                text: '',
            },
        ],
    },

    ...unorderedListTree,
    ...orderedListTree,
];
