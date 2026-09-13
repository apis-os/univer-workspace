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
import type { IOperation } from '@univerjs/core';
/**
 * A {@link CommandType.OPERATION} to toggle the crosshair highlight.
 */
export declare const ToggleCrosshairHighlightOperation: IOperation;
/**
 * A {@link CommandType.OPERATION} to set the crosshair highlight color theme token.
 * @property {string} value - The theme token path to set.
 */
export interface ISetCrosshairHighlightColorOperationParams {
    value: string;
}
/**
 * A {@link CommandType.OPERATION} to set the crosshair highlight color. If the crosshair highlight is not enabled,
 * it will be enabled.
 */
export declare const SetCrosshairHighlightColorOperation: IOperation<ISetCrosshairHighlightColorOperationParams>;
/**
 * A {@link CommandType.OPERATION} to enable the crosshair highlight.
 */
export declare const EnableCrosshairHighlightOperation: IOperation;
/**
 * A {@link CommandType.OPERATION} to disable the crosshair highlight.
 */
export declare const DisableCrosshairHighlightOperation: IOperation;
