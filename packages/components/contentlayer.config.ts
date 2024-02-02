/* (c) Copyright Frontify Ltd., all rights reserved. */

import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Component = defineDocumentType(() => ({
    name: 'Component',
    filePathPattern: '**/*.md',
    fields: {
        title: { type: 'string', required: true },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (doc) => doc._raw.sourceFileDir.toLocaleLowerCase(),
        },
        route: {
            type: 'string',
            resolve: (doc) => doc._raw.sourceFileDir.toLocaleLowerCase().split('/'),
        },
    },
}));

export default makeSource({
    contentDirPath: 'src/components',
    documentTypes: [Component],
});
