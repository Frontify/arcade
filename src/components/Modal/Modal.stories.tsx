/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Modal } from "./Modal";
import React, { useState } from "react";
import { Button } from "@components/Button";
import { ModalHeader } from "./ModalHeader";
import { IconIcons } from "@foundation/Icon";
import { Story, Meta } from "@storybook/react";
import { TextInput } from "@components/TextInput";
import { ModalHeaderVariant, ModalProps } from "./types";
import { generateRandomId } from "@utilities/generateRandomId";
import { PatternDesign, PatternScale, PatternTheme } from "@foundation/Pattern";
import { FormControl, FormControlDirection, FormControlStyle } from "@components/FormControl";

// eslint-disable-next-line import/no-default-export
export default {
    title: "Components/Modal",
    component: Modal,
} as Meta<ModalProps>;

export const Default: Story<ModalProps> = () => {
    const [input, setInput] = useState("");

    return (
        <Modal
            visual={{
                pattern: PatternDesign.Typography,
                foregroundColor: PatternTheme.Violet,
                scale: PatternScale.LG,
            }}
            header={
                <ModalHeader
                    title="Modal header"
                    leadText="The Home for Brand Management"
                    decorator={<IconIcons />}
                    variant={ModalHeaderVariant.Informative}
                />
            }
        >
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor velit reiciendis nobis assumenda itaque
                tenetur ducimus quia qui! Tempore enim beatae est suscipit excepturi iure explicabo, fugiat perferendis
                consequatur.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor velit reiciendis nobis assumenda itaque
                tenetur ducimus quia qui! Tempore enim beatae est suscipit excepturi iure explicabo, fugiat perferendis
                consequatur.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor velit reiciendis nobis assumenda itaque
                tenetur ducimus quia qui! Tempore enim beatae est suscipit excepturi iure explicabo, fugiat perferendis
                consequatur.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor velit reiciendis nobis assumenda itaque
                tenetur ducimus quia qui! Tempore enim beatae est suscipit excepturi iure explicabo, fugiat perferendis
                consequatur.
            </p>
            <div className="tw-my-4">
                <FormControl
                    style={FormControlStyle.Primary}
                    direction={FormControlDirection.Vertical}
                    label={{
                        children: "Input Label",
                        required: false,
                        htmlFor: generateRandomId(),
                        tooltip: { content: "Tooltip Text" },
                    }}
                >
                    <TextInput value={input} onChange={setInput} />
                </FormControl>
            </div>
            <Button>Action</Button>
        </Modal>
    );
};
