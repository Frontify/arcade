/* (c) Copyright Frontify Ltd., all rights reserved. */

import css from "./Iframe.module.css";

export enum IframeHeight {
    Small = "Small",
}

export enum IframeBorder {
    Default = "Default",
}

export enum IframePointerEvents {
    None = "None",
}

export type IframeProps = {
    src: string;
    title: string;
    border?: IframeBorder;
    height?: IframeHeight;
    pointerEvents?: IframePointerEvents;
};

export default function Iframe({
    src,
    title,
    border,
    height,
    pointerEvents,
}: IframeProps): React.ReactElement<IframeProps> {
    const classNames = [
        css.iframe,
        ...(border ? [css[`border${border}`]] : []),
        ...(height ? [css[`height${height}`]] : []),
        ...(pointerEvents ? [css[`pointerEvents${pointerEvents}`]] : []),
    ].join(" ");

    return <iframe title={title} src={src} className={classNames} />;
}
