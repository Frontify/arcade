/* (c) Copyright Frontify Ltd., all rights reserved. */

import { MarkdownToSlate } from '../';
import { Transform } from '../../transform';
import {
    basicMarksMarkdown,
    basicMarksTree,
    blockQuoteMarkdown,
    blockQuoteTree,
    codeBlockMarkdown,
    codeBlockTree,
    headingsMarkdown,
    headingsTree,
    hrMarkdown,
    hrTree,
    imageMarkdown,
    imageTree,
    linkMarkdown,
    linkTree,
    mentionsMarkdown,
    mentionsTree,
    mixedMarkdown,
    mixedTree,
    orderedListMarkdown,
    orderedListTree,
    paragraphMarkdown,
    paragraphTree,
    unorderedListMarkdown,
    unorderedListTree,
} from './fixtures';

describe('Markdown to slate Transformer', () => {
    const transformer = Transform.use(new MarkdownToSlate());

    it('should transform basic marks', () => {
        let result = transformer.process(basicMarksMarkdown[0]);
        expect(result).to.deep.equal(basicMarksTree[0]);

        result = transformer.process(basicMarksMarkdown[1]);
        expect(result).to.deep.equal(basicMarksTree[1]);
    });

    it('should transform headings', () => {
        const result = transformer.process(headingsMarkdown);
        expect(result).to.deep.equal(headingsTree);
    });

    it('should transform code block', () => {
        let result = transformer.process(codeBlockMarkdown[0]);
        expect(result).to.deep.equal(codeBlockTree[0]);

        result = transformer.process(codeBlockMarkdown[1]);
        expect(result).to.deep.equal(codeBlockTree[1]);

        result = transformer.process(codeBlockMarkdown[2]);
        expect(result).to.deep.equal(codeBlockTree[2]);
    });

    it('should transform paragraph', () => {
        const result = transformer.process(paragraphMarkdown);
        expect(result).to.deep.equal(paragraphTree);
    });

    it('should transform unordered list', () => {
        const result = transformer.process(unorderedListMarkdown);
        expect(result).to.deep.equal(unorderedListTree);
    });

    it('should transform ordered list', () => {
        const result = transformer.process(orderedListMarkdown);
        expect(result).to.deep.equal(orderedListTree);
    });

    it('should transform hr', () => {
        const result = transformer.process(hrMarkdown);
        expect(result).to.deep.equal(hrTree);
    });

    it('should transform link', () => {
        const result = transformer.process(linkMarkdown);
        expect(result).to.deep.equal(linkTree);
    });

    it('should transform image', () => {
        const result = transformer.process(imageMarkdown);
        expect(result).to.deep.equal(imageTree);
    });

    it('should transform block quote', () => {
        let result = transformer.process(blockQuoteMarkdown[0]);
        expect(result).to.deep.equal(blockQuoteTree[0]);

        result = transformer.process(blockQuoteMarkdown[1]);
        expect(result).to.deep.equal(blockQuoteTree[1]);
    });

    it('should transform mixed text', () => {
        const result = transformer.process(mixedMarkdown);
        expect(result).to.deep.equal(mixedTree);
    });

    it('should transform mentions text', () => {
        let result = transformer.process(mentionsMarkdown[0]);
        expect(result).to.deep.equal(mentionsTree[0]);

        result = transformer.process(mentionsMarkdown[1]);
        expect(result).to.deep.equal(mentionsTree[1]);
    });
});
