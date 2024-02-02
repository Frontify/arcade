/* (c) Copyright Frontify Ltd., all rights reserved. */

import { useMemo } from 'react';
import { getMDXComponent } from 'mdx-bundler/client';
import * as test from 'components';

export const MdxContent = ({ data }: { data: string }) => {
    const Component = useMemo(() => getMDXComponent(data), [data]);

    console.log(test);

    return (
        <Component
            components={{
                h1: (props) => (
                    <h1 className="tw-text-3xl" {...props}>
                        {props.children}
                    </h1>
                ),
            }}
        />
    );
};
