/* (c) Copyright Frontify Ltd., all rights reserved. */

import { type ReactElement } from 'react';

import { type Component } from '#contentlayer/generated';

// https://vike.dev/pageContext#typescript

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Vike {
        interface PageContext {
            Page: () => ReactElement;
            data?: {
                /** Value for <title> defined dynamically by by /pages/some-page/+data.ts */
                title?: string;
                /** Value for <meta name="description"> defined dynamically */
                description?: string;
                component: Component;
            };
            config: {
                /** Value for <title> defined statically by /pages/some-page/+title.ts (or by `export default { title }` in /pages/some-page/+config.ts) */
                title?: string;
                /** Value for <meta name="description"> defined statically */
                description?: string;
            };
            /** https://vike.dev/render */
            abortReason?: string;
        }
    }
}

export {};
