/**
 * Copyright 2023-present DreamNum Co., Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import type { Injector } from '@univerjs/core';
import { FUniver } from '@univerjs/core/facade';
/**
 * @ignore
 */
export interface IFUniverSheetsCrosshairHighlightMixin {
    /**
     * Enable or disable crosshair highlight.
     * @param {boolean} enabled - Whether to enable the crosshair highlight
     * @returns {FUniver} The FUniver instance for chaining
     * @example
     * ```ts
     * univerAPI.setCrosshairHighlightEnabled(true);
     * ```
     */
    setCrosshairHighlightEnabled(enabled: boolean): FUniver;
    /**
     * Get whether the crosshair highlight is enabled.
     * @returns {boolean} Whether the crosshair highlight is enabled
     * @example
     * ```ts
     * console.log(univerAPI.getCrosshairHighlightEnabled());
     * ```
     */
    getCrosshairHighlightEnabled(): boolean;
}
/**
 * @ignore
 */
export declare class FUniverSheetsCrosshairHighlightMixin extends FUniver implements IFUniverSheetsCrosshairHighlightMixin {
    /**
     * @ignore
     */
    _initialize(injector: Injector): void;
    setCrosshairHighlightEnabled(enabled: boolean): FUniver;
    getCrosshairHighlightEnabled(): boolean;
}
declare module '@univerjs/core/facade' {
    interface FUniver extends IFUniverSheetsCrosshairHighlightMixin {
    }
}
