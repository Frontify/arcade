/* (c) Copyright Frontify Ltd., all rights reserved. */

import { unified } from 'unified';
import slate from 'remark-slate';
import parse from 'remark-parse';
import { options } from './options';
import { MdTransformer } from './MdTransformer';
import { SlateObject } from './types';

export class MdToSlate extends MdTransformer<string, SlateObject> {
    process(value: string) {
        return unified().use(parse).use(slate, options(this.editor)).processSync(value).result as SlateObject;
    }
}
