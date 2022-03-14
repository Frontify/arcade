import { merge } from "@utilities/merge";
import React, { FC } from "react";
import { AssetInputSize, AssetType, ImageAsset, LibrarySource } from "../AssetInput";
import { AssetThumbnail } from "../AssetThumbnail";
import { MultiAssetPreviewProps } from "./MultiAssetPreview";

export const Assets: FC<Pick<MultiAssetPreviewProps, "assets">> = ({ assets }) => {
    const assetslength = assets?.length || 0;
    const previewAssets = assets?.slice(0, 4) || [];
    const isImageAsset = (asset: AssetType): asset is ImageAsset & LibrarySource =>
        (asset.type === "image" || asset.type === "logo") && (asset as ImageAsset & LibrarySource).src !== undefined;

    if (assetslength < 4) {
        [...Array(4 - assetslength)].forEach((_, index) =>
            previewAssets.push({
                name: `empty picture ${index + 1}`,
                size: 20,
                type: "image",
                extension: "",
                src: "",
                source: "upload",
            }),
        );
    }
    return (
        <div className="tw-border-black-20 tw-grid tw-grid-cols-2 tw-gap-0.5">
            {previewAssets.map((asset, index) =>
                isImageAsset(asset) ? (
                    <div
                        data-test-id="assets-image"
                        key={asset.name}
                        style={asset.src ? { backgroundImage: `url(${asset.src})` } : {}}
                        className={merge([
                            index === 0 ? "tw-rounded-tl" : index === 2 && "tw-rounded-bl",
                            "tw-h-14 tw-w-14 tw-bg-black-5",
                        ])}
                    />
                ) : (
                    <div className="tw-h-14">
                        <AssetThumbnail asset={asset} size={AssetInputSize.Small} isActive={false} />
                    </div>
                ),
            )}
        </div>
    );
};
