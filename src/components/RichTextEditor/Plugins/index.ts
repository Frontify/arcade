/* (c) Copyright Frontify Ltd., all rights reserved. */

import { PluginComposer } from './PluginComposer';
import { OrderedListPlugin, UnorderedListPlugin } from './ListPlugin';
import { CheckboxListPlugin } from './CheckboxListPlugin';
import { BoldPlugin } from './BoldPlugin';
import { AlignCenterPlugin, AlignJustifyPlugin, AlignLeftPlugin, AlignRightPlugin } from './AlignPlugin';
import { CodePlugin } from './CodePlugin';
import { ItalicPlugin } from './ItalicPlugin';
import { UnderlinePlugin } from './UnderlinePlugin';
import { StrikethroughPlugin } from './StrikethroughPlugin';
import { LinkPlugin } from './LinkPlugin';
import { TextStylePlugin } from './TextStylePlugin';
import { InitPlugin } from './InitPlugin';
import { ParagraphPlugin } from './ParagraphPlugin';
import { ButtonPlugin } from './ButtonPlugin';

export const defaultPlugins = new PluginComposer();
defaultPlugins.setPlugin(new InitPlugin(), new ParagraphPlugin()).setPlugin(new TextStylePlugin()).setPlugin(
    [
        new BoldPlugin(),
        new ItalicPlugin(),
        new UnderlinePlugin(),
        new StrikethroughPlugin(),
        // new LinkPlugin(),
        new ButtonPlugin(),
        new CodePlugin(),
    ],
    [
        new AlignLeftPlugin(),
        new AlignCenterPlugin(),
        new AlignRightPlugin(),
        new AlignJustifyPlugin(),
        new UnorderedListPlugin(),
        new CheckboxListPlugin(),
        new OrderedListPlugin(),
    ],
);

export * from './GeneratePlugins';
export * from './PluginComposer';
export * from './InitPlugin';
export * from './ListPlugin';
export * from './BoldPlugin';
export * from './AlignPlugin';
export * from './CheckboxListPlugin';
export * from './CodePlugin';
export * from './ItalicPlugin';
export * from './UnderlinePlugin';
export * from './StrikethroughPlugin';
export * from './LinkPlugin';
export * from './ButtonPlugin';
export * from './MentionPlugin';
export * from './TextStylePlugin';
export * from './ParagraphPlugin';
