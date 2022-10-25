import React, { FC, Fragment } from 'react';
import { AssetInputProps } from '../AssetInput';
import { SelectedAssetProps } from './SelectedAsset';
import { IconArrowCircleUp, IconImageStack } from '@foundation/Icon';

type AssetSublineProps = Pick<AssetInputProps, 'isLoading' | 'hideSizeAndExtension'> &
    Pick<SelectedAssetProps, 'asset'>;

export const AssetSubline: FC<AssetSublineProps> = ({ asset, isLoading = false, hideSizeAndExtension = false }) => {
    let title = isLoading ? 'Uploading' : 'Uploaded';
    if (asset?.source === 'library') {
        title = asset.sourceName;
    }

    return (
        <span className="tw-max-w-full tw-flex tw-flex-row tw-items-center tw-gap-1 tw-text-black-80 tw-text-xxs tw-overflow-hidden">
            <div className="tw-flex-none tw-inline-flex tw-items-center tw-justify-center">
                {asset?.source === 'library' ? <IconImageStack /> : <IconArrowCircleUp />}
            </div>
            {title && <span className="tw-whitespace-nowrap">{title}</span>}
            {asset &&
                !isLoading &&
                !hideSizeAndExtension &&
                [asset.extension, asset.size].filter(Boolean).map((item, i) => (
                    <Fragment key={`${item}-${i}`}>
                        <span className="tw-text-m tw-text-black-20 tw-h-4 tw-flex tw-items-center">•</span>
                        <span className="tw-whitespace-nowrap">{item}</span>
                    </Fragment>
                ))}
        </span>
    );
};
