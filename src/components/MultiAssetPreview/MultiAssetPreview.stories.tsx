/* (c) Copyright Frontify Ltd., all rights reserved. */

import { Meta, Story } from "@storybook/react";
import React from "react";
import { MultiAssetPreview as MultiAssetPreviewComponent, MultiAssetPreviewProps } from "./MultiAssetPreview";

// eslint-disable-next-line import/no-default-export
export default {
    title: "Components/Multi Asset Preview",
    component: MultiAssetPreviewComponent,
    argTypes: {
        onClick: {
            action: "Click",
        },
    },
    args: {
        numberOfLocations: 12,
        assetsAmount: 25,
        images: [
            {
                name: "foo1",
                size: 2000,
                type: "image",
                extension: "JPG",
                src: "https://picsum.photos/100/150",
            },
            {
                name: "foo2",
                size: 2000,
                type: "image",
                extension: "JPG",
                src: "https://picsum.photos/200/200",
            },
            {
                name: "foo3",
                size: 2000,
                type: "image",
                extension: "JPG",
                src: "https://picsum.photos/100/100",
            },
            {
                name: "foo4",
                size: 1000,
                type: "image",
                extension: "JPG",
                src: "https://picsum.photos/400/200",
            },
        ],
    },
} as Meta<MultiAssetPreviewProps>;

export const Initial: Story<MultiAssetPreviewProps> = (args: MultiAssetPreviewProps) => (
    <MultiAssetPreviewComponent {...args} />
);

Initial.args = {
    images: [],
    numberOfLocations: 0,
    assetsAmount: 0,
};

export const WithOneImage: Story<MultiAssetPreviewProps> = (args: MultiAssetPreviewProps) => (
    <MultiAssetPreviewComponent {...args} />
);

WithOneImage.args = {
    images: [
        {
            name: "foo1",
            size: 2000,
            type: "image",
            extension: "JPG",
            src: "https://picsum.photos/100/150",
        },
    ],
    numberOfLocations: 1,
    assetsAmount: 1,
};

export const WithImages: Story<MultiAssetPreviewProps> = (args: MultiAssetPreviewProps) => (
    <MultiAssetPreviewComponent {...args} />
);
