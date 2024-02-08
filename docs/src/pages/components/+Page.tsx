/* (c) Copyright Frontify Ltd., all rights reserved. */

import { usePageContext } from 'vike-react/usePageContext';

import { MdxContent } from '../../components/MdxContent';

export const Page = () => {
    const { data } = usePageContext();

    if (!data) {
        return <h1 className="tw-text-3xl tw-font-bold tw-mb-8">Components</h1>;
    }

    return (
        <>
            <h1 className="tw-text-3xl tw-font-bold tw-mb-8">{data.component.title}</h1>
            <MdxContent data={data.component.body.code} />
        </>
    );
};
