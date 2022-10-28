/* (c) Copyright Frontify Ltd., all rights reserved. */

import { SlateToMd } from '..';
import { transform } from '../../transform';
import {
    basicMarksMD,
    basicMarksTree,
    blockQuoteMD,
    blockQuoteTree,
    codeBlockMD,
    codeBlockTree,
    headingsMD,
    headingsTree,
    hrMD,
    hrTree,
    imageMD,
    imageTree,
    linkMD,
    linkTree,
    orderedListMD,
    orderedListTree,
    paragraphMD,
    paragraphTree,
    unorderedListMD,
    unorderedListTree,
} from './fixtures';

describe('Slate To Markdown transformer', () => {
    const transformer = transform.use(new SlateToMd());

    it.skip('should transform basic marks', () => {
        const result = transformer.process(basicMarksTree);
        expect(result).to.deep.equal(basicMarksMD);
    });

    it('should transform headings', () => {
        const result = transformer.process(headingsTree);
        expect(result).to.deep.equal(headingsMD);
    });

    it.skip('should transform code block', () => {
        const result = transformer.process(codeBlockTree);
        expect(result).to.deep.equal(codeBlockMD);
    });

    it('should transform paragraph', () => {
        const result = transformer.process(paragraphTree);
        expect(result).to.deep.equal(paragraphMD);
    });

    it('should transform unordered list', () => {
        const result = transformer.process(unorderedListTree);
        expect(result).to.deep.equal(unorderedListMD);
    });

    it('should transform ordered list', () => {
        const result = transformer.process(orderedListTree);
        expect(result).to.deep.equal(orderedListMD);
    });

    it.skip('should transform hr', () => {
        const result = transformer.process(hrTree);
        expect(result).to.deep.equal(hrMD);
    });

    it.skip('should transform link', () => {
        const result = transformer.process(linkTree);
        expect(result).to.deep.equal(linkMD);
    });

    it.skip('should transform image', () => {
        const result = transformer.process(imageTree);
        expect(result).to.deep.equal(imageMD);
    });

    it.skip('should transform block quote', () => {
        const result = transformer.process(blockQuoteTree);
        expect(result).to.deep.equal(blockQuoteMD);
    });
});
