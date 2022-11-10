/* (c) Copyright Frontify Ltd., all rights reserved. */

import {
    FloatingLinkProps,
    FloatingLink as PlateFloatingLink,
    createComponentAs,
    createElementAs,
    useFloatingLinkInsert,
} from '@udecode/plate';
import { useFloatingLinkEdit } from './EditLinkModal';

const FloatingLinkInsertRoot = createComponentAs<FloatingLinkProps>((props) => {
    const htmlProps = useFloatingLinkInsert(props);

    if (htmlProps.style?.display === 'none') {
        return null;
    }

    return createElementAs('div', htmlProps);
});

const FloatingLinkEditRoot = createComponentAs<FloatingLinkProps>((props) => {
    const htmlProps = useFloatingLinkEdit(props);

    if (htmlProps.style?.display === 'none') {
        return null;
    }

    return createElementAs('div', htmlProps);
});

PlateFloatingLink.EditRoot = FloatingLinkEditRoot;
PlateFloatingLink.InsertRoot = FloatingLinkInsertRoot;

export const FloatingLink = PlateFloatingLink;
