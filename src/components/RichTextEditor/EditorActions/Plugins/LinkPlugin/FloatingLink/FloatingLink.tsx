/* (c) Copyright Frontify Ltd., all rights reserved. */

import {
    FloatingLinkEditButton,
    FloatingLinkProps,
    OpenLinkButton,
    UnlinkButton,
    createComponentAs,
    createElementAs,
} from '@udecode/plate';
import { EditModal, useFloatingLinkEdit } from './EditLinkModal';
import { InsertModal, useFloatingLinkInsert } from './InsertLinkModal';

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

export const FloatingLink = {
    EditRoot: FloatingLinkEditRoot,
    InsertRoot: FloatingLinkInsertRoot,
    EditModal,
    InsertModal,
    EditButton: FloatingLinkEditButton,
    UnlinkButton,
    OpenLinkButton,
};
