/* (c) Copyright Frontify Ltd., all rights reserved. */

export { route };

import { render } from 'vike/abort';
import type { RouteSync } from 'vike/types';

const route: RouteSync = (pageContext): ReturnType<RouteSync> => {
    const pageUrl = pageContext.urlPathname.toLocaleLowerCase().split('/component/').pop();

    if (!pageUrl) {
        throw render(404, "This Component Doesn't exist");
    }

    return {
        // Make `id` available as pageContext.routeParams.id
        routeParams: {
            pageUrl,
        },
    };
};
