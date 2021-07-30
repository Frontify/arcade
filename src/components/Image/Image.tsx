/* (c) Copyright Frontify Ltd., all rights reserved. */

import Button, { Size } from "@elements/Button/Button";
import IconSettings from "@elements/Icon/Generated/IconSettings";
import IconTrash from "@elements/Icon/Generated/IconTrash";
import { PropsWithChildren, ReactElement } from "react";
import css from "./Image.module.css";

export type ImageProps = PropsWithChildren<{
    src: string;
    alt?: string;
    roundedCorners?: boolean;
    onReplaceImage?: () => void;
    onOpenSettings?: () => void;
    onDeleteImage?: () => void;
}>;

export default function Image({
    src,
    alt,
    roundedCorners = true,
    children,
    onReplaceImage,
    onOpenSettings,
    onDeleteImage,
}: ImageProps): ReactElement<ImageProps> {
    const imageClasses = [css.image, ...(roundedCorners ? [css.roundedCorners] : [])].join(" ");

    return (
        <div className={css.container} data-test-id="image-container">
            <picture>
                {children}
                <img className={imageClasses} src={src} alt={alt} />
            </picture>
            {(onReplaceImage || onOpenSettings || onDeleteImage) && (
                <div className={css.controls} data-test-id="image-controls">
                    {onReplaceImage && (
                        <Button size={Size.Small} onClick={onReplaceImage}>
                            Replace...
                        </Button>
                    )}
                    {onOpenSettings && <Button size={Size.Small} onClick={onOpenSettings} icon={<IconSettings />} />}
                    {onDeleteImage && <Button size={Size.Small} onClick={onDeleteImage} icon={<IconTrash />} />}
                </div>
            )}
        </div>
    );
}
