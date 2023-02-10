/* (c) Copyright Frontify Ltd., all rights reserved. */

import { orderedListValue, unorderedListValue } from '@components/RichTextEditor/helpers/exampleValues';
import { UL_CLASSES, getOrderedListClasses } from '@components/RichTextEditor/Plugins';
import { TextStyles } from '@components/RichTextEditor/Plugins/TextStylePlugin/TextStyles';
import { columnBreakClassNames } from '@components/RichTextEditor/utils/constants';
import { defaultDesignTokens } from '@components/RichTextEditor/utils/defaultDesignTokens';
import { ELEMENT_LI, ELEMENT_LIC, ELEMENT_LINK, ELEMENT_OL, ELEMENT_PARAGRAPH, ELEMENT_UL } from '@udecode/plate';
import { serializeNodeToHtmlRecursive } from './serializeNodeToHtmlRecursive';

describe('serializeNodeToHtmlRecursive()', () => {
    it('serializes ordered list to html', () => {
        const node = {
            type: ELEMENT_OL,
            children: [
                {
                    type: ELEMENT_LI,
                    children: [
                        {
                            type: ELEMENT_LIC,
                            children: [{ text: 'This comes first.' }],
                        },
                    ],
                },
                {
                    type: ELEMENT_LI,
                    children: [
                        {
                            type: ELEMENT_LIC,
                            children: [{ text: 'This comes second.' }],
                        },
                    ],
                },
            ],
        };
        const result = serializeNodeToHtmlRecursive(node, { designTokens: defaultDesignTokens });

        expect(result).to.equal(
            `<ol class="${getOrderedListClasses(
                0,
            )}"><li style="font-size: 14px; font-style: normal; font-weight: normal; text-decoration: none;"><p style="">This comes first.</p></li><li style="font-size: 14px; font-style: normal; font-weight: normal; text-decoration: none;"><p style="">This comes second.</p></li></ol>`,
        );
    });

    it('serializes break after column element to html', () => {
        const node = {
            type: ELEMENT_PARAGRAPH,
            breakAfterColumn: true,
            children: [
                {
                    text: 'This is a paragraph.',
                },
            ],
        };
        const result = serializeNodeToHtmlRecursive(node, { designTokens: defaultDesignTokens });

        expect(result).to.equal(
            `<p class="${columnBreakClassNames}" style="font-size: 14px; font-style: normal; font-weight: normal;">This is a paragraph.</p>`,
        );
    });

    it('serializes ordered list with correct list style types to html', () => {
        const result = serializeNodeToHtmlRecursive(orderedListValue, { designTokens: defaultDesignTokens });

        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(result, 'text/html');
        const orderedLists = htmlDoc.getElementsByTagName('ol');
        expect(orderedLists[0]?.className).to.include('tw-list-[decimal]');
        expect(orderedLists[1]?.className).to.include('tw-list-[lower-alpha]');
        expect(orderedLists[2]?.className).to.include('tw-list-[lower-roman]');
    });

    it('serializes list item with custom styles to html', () => {
        const result = serializeNodeToHtmlRecursive(unorderedListValue, { designTokens: defaultDesignTokens });

        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(result, 'text/html');
        const listItems = htmlDoc.getElementsByTagName('li');

        // custom1
        expect(listItems[0]?.style.fontSize).to.contain('14px');
        expect(listItems[0]?.style.fontStyle).to.contain('normal');
        expect(listItems[0]?.style.fontWeight).to.contain('normal');

        // custom2
        expect(listItems[1]?.style.fontSize).to.contain('14px');
        expect(listItems[1]?.style.fontStyle).to.contain('normal');
        expect(listItems[1]?.style.fontWeight).to.contain(600);
    });

    it('serializes unordered list to html', () => {
        const node = {
            type: ELEMENT_UL,
            children: [
                {
                    type: ELEMENT_LI,
                    children: [
                        {
                            type: ELEMENT_LIC,
                            children: [{ text: 'This comes first.' }],
                        },
                    ],
                },
                {
                    type: ELEMENT_LI,
                    children: [
                        {
                            type: ELEMENT_LIC,
                            children: [{ text: 'This comes second.' }],
                        },
                    ],
                },
            ],
        };
        const result = serializeNodeToHtmlRecursive(node, { designTokens: defaultDesignTokens });

        expect(result).to.equal(
            `<ul class="${UL_CLASSES}"><li style="font-size: 14px; font-style: normal; font-weight: normal; text-decoration: none;"><p style="">This comes first.</p></li><li style="font-size: 14px; font-style: normal; font-weight: normal; text-decoration: none;"><p style="">This comes second.</p></li></ul>`,
        );
    });

    it('serializes link to html', () => {
        const node = {
            type: ELEMENT_PARAGRAPH,
            children: [
                {
                    type: ELEMENT_LINK,
                    children: [{ text: 'This is a Link.' }],
                    url: 'https://frontify.com',
                },
            ],
        };
        const result = serializeNodeToHtmlRecursive(node, { designTokens: defaultDesignTokens });

        expect(result).to.equal(
            '<p style="font-size: 14px; font-style: normal; font-weight: normal;"><a style="font-size: 14px; font-style: normal; color: rgb(113, 89, 215); text-decoration: underline; cursor: pointer;" href="https://frontify.com">This is a Link.</a></p>',
        );
    });

    it('serializes legacy link format to html', () => {
        const node = {
            type: ELEMENT_PARAGRAPH,
            children: [
                {
                    type: ELEMENT_LINK,
                    chosenLink: {
                        searchResult: {
                            link: 'https://smartive.ch',
                        },
                        openInNewTab: true,
                    },
                    children: [
                        {
                            text: 'This is also a Link.',
                        },
                    ],
                },
            ],
        };
        const result = serializeNodeToHtmlRecursive(node, { designTokens: defaultDesignTokens });

        expect(result).to.equal(
            '<p style="font-size: 14px; font-style: normal; font-weight: normal;"><a style="font-size: 14px; font-style: normal; color: rgb(113, 89, 215); text-decoration: underline; cursor: pointer;" target=_blank href="https://smartive.ch">This is also a Link.</a></p>',
        );
    });

    it('serializes headings and customs html', () => {
        const node = {
            type: ELEMENT_PARAGRAPH,
            children: [
                {
                    type: TextStyles.ELEMENT_HEADING1,
                    children: [
                        {
                            text: 'This is a h1.',
                        },
                    ],
                },
                {
                    type: TextStyles.ELEMENT_HEADING2,
                    children: [
                        {
                            text: 'This is a h2.',
                        },
                    ],
                },
                {
                    type: TextStyles.ELEMENT_HEADING3,
                    children: [
                        {
                            text: 'This is a h3.',
                        },
                    ],
                },
                {
                    type: TextStyles.ELEMENT_HEADING4,
                    children: [
                        {
                            text: 'This is a h4.',
                        },
                    ],
                },
                {
                    type: TextStyles.ELEMENT_CUSTOM1,
                    children: [
                        {
                            text: 'This is a custom1.',
                        },
                    ],
                },
                {
                    type: TextStyles.ELEMENT_CUSTOM2,
                    children: [
                        {
                            text: 'This is a custom2.',
                        },
                    ],
                },
                {
                    type: TextStyles.ELEMENT_CUSTOM3,
                    children: [
                        {
                            text: 'This is a custom3.',
                        },
                    ],
                },
                {
                    type: TextStyles.ELEMENT_QUOTE,
                    children: [
                        {
                            text: 'This is a quote.',
                        },
                    ],
                },
            ],
        };

        const result = serializeNodeToHtmlRecursive(node, { designTokens: defaultDesignTokens });

        expect(result).to.equal(
            '<p style="font-size: 14px; font-style: normal; font-weight: normal;"><h1 style="font-size: 48px; font-weight: 700; font-style: normal;">This is a h1.</h1><h2 style="font-size: 32px; font-weight: 700; font-style: normal;">This is a h2.</h2><h3 style="font-size: 24px; font-weight: normal; font-style: normal;">This is a h3.</h3><h4 style="font-size: 18px; font-weight: normal; font-style: normal;">This is a h4.</h4><p style="font-size: 14px; font-weight: normal; font-style: normal;">This is a custom1.</p><p style="font-size: 14px; font-weight: 600; font-style: normal;">This is a custom2.</p><p style="font-size: 14px; font-weight: normal; font-style: normal; text-decoration: underline;">This is a custom3.</p><p style="font-size: 16px; font-weight: normal; font-style: italic;">This is a quote.</p></p>',
        );
    });
});
