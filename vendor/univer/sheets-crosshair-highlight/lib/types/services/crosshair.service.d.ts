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
import type { Observable } from 'rxjs';
import { Disposable, ThemeService } from '@univerjs/core';
export declare const CROSSHAIR_HIGHLIGHT_COLOR_THEME_PATHS: string[];
export declare const DEFAULT_CROSSHAIR_HIGHLIGHT_COLOR_THEME_PATH: string;
export declare function resolveCrosshairHighlightColor(themeService: ThemeService, tokenPath: string): string;
export declare function resolveCrosshairHighlightColors(themeService: ThemeService): string[];
export declare class SheetsCrosshairHighlightService extends Disposable {
    private readonly _themeService;
    private readonly _enabled$;
    readonly enabled$: Observable<boolean>;
    get enabled(): boolean;
    private readonly _colorToken$;
    readonly colorToken$: Observable<string>;
    readonly color$: Observable<string>;
    readonly highlightColor$: Observable<string>;
    constructor(_themeService: ThemeService);
    dispose(): void;
    setEnabled(value: boolean): void;
    setColor(value: string): void;
}
