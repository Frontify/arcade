/* (c) Copyright Frontify Ltd., all rights reserved. */

import React, { FC } from "react";
import { ModalBodyProps } from "./types";
import { ScrollWrapper } from "@components/ScrollWrapper/ScrollWrapper";

export const ModalBody: FC<ModalBodyProps> = ({ direction, children }) => {
    return (
        <div data-test-id="modal-body" className="tw-flex-auto tw-min-h-0">
            <ScrollWrapper direction={direction}>{children}</ScrollWrapper>
        </div>
    );
};
