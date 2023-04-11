/* (c) Copyright Frontify Ltd., all rights reserved. */

import { nodesToSerialize } from '../helpers/exampleValues';
import { serializeNodesToHtml } from './serializeToHtml';

describe('serializeNodesToHtml()', () => {
    it('should serialize nodes to html string', async () => {
        const serialized = await serializeNodesToHtml(nodesToSerialize);
        expect(serialized).to.be.a('string');
    });

    it('should render columns if there is more than one given', async () => {
        const serialized = await serializeNodesToHtml(nodesToSerialize, { columns: 2 });
        expect(serialized).to.contain('columns:2;');
    });

    it('should not render columns if there is only one given', async () => {
        const serialized = await serializeNodesToHtml(nodesToSerialize, { columns: 1 });
        expect(serialized).not.to.contain('columns:1;');
    });

    it('should have a default column count of 1', async () => {
        const serialized = await serializeNodesToHtml(nodesToSerialize);
        expect(serialized).not.to.contain('columns:1;');
    });

    it('should render column gap if there is more than one column', async () => {
        const serialized = await serializeNodesToHtml(nodesToSerialize, { columns: 2, columnGap: '10px' });
        expect(serialized).to.contain('column-gap:10px;');
    });

    it('should have a default column gap of normal', async () => {
        const serialized = await serializeNodesToHtml(nodesToSerialize, { columns: 2 });
        expect(serialized).to.contain('column-gap:normal');
    });

    it('serializes an empty line to a linebreak', async () => {
        const node = [
            {
                type: 'p',
                children: [{ text: '' }],
            },
        ];

        const result = await serializeNodesToHtml(node);
        expect(result).to.equal('<br />');
    });
});
