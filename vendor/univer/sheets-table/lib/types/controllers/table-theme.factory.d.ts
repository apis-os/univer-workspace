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
import type { IRangeThemeStyleItem, IRangeThemeStyleJSON } from '@univerjs/sheets';
import type { ITableDefaultThemeStyle } from '../config/config';
export declare const customEmptyThemeWithBorderStyle: Omit<IRangeThemeStyleJSON, 'name'>;
export declare const processStyleWithBorderStyle: (key: keyof Omit<IRangeThemeStyleJSON, "name">, style: IRangeThemeStyleItem) => IRangeThemeStyleItem | {
    bd: {
        t: {
            s: import("@univerjs/core").BorderStyleTypes;
            cl: {
                rgb: string;
            };
        };
        b?: undefined;
        r?: undefined;
        l?: undefined;
    };
    cl?: import("@univerjs/core").Nullable<import("@univerjs/core").IColorStyle>;
    bl?: import("@univerjs/core").BooleanNumber | undefined;
    ht?: import("@univerjs/core").Nullable<import("@univerjs/core").HorizontalAlign>;
    vt?: import("@univerjs/core").Nullable<import("@univerjs/core").VerticalAlign>;
    ol?: import("@univerjs/core").ITextDecoration | undefined;
    bg?: import("@univerjs/core").Nullable<import("@univerjs/core").IColorStyle>;
} | {
    bd: {
        b: {
            s: import("@univerjs/core").BorderStyleTypes;
            cl: {
                rgb: string;
            };
        };
        t?: undefined;
        r?: undefined;
        l?: undefined;
    };
    cl?: import("@univerjs/core").Nullable<import("@univerjs/core").IColorStyle>;
    bl?: import("@univerjs/core").BooleanNumber | undefined;
    ht?: import("@univerjs/core").Nullable<import("@univerjs/core").HorizontalAlign>;
    vt?: import("@univerjs/core").Nullable<import("@univerjs/core").VerticalAlign>;
    ol?: import("@univerjs/core").ITextDecoration | undefined;
    bg?: import("@univerjs/core").Nullable<import("@univerjs/core").IColorStyle>;
} | {
    bd: {
        r: {
            s: import("@univerjs/core").BorderStyleTypes;
            cl: {
                rgb: string;
            };
        };
        t?: undefined;
        b?: undefined;
        l?: undefined;
    };
    cl?: import("@univerjs/core").Nullable<import("@univerjs/core").IColorStyle>;
    bl?: import("@univerjs/core").BooleanNumber | undefined;
    ht?: import("@univerjs/core").Nullable<import("@univerjs/core").HorizontalAlign>;
    vt?: import("@univerjs/core").Nullable<import("@univerjs/core").VerticalAlign>;
    ol?: import("@univerjs/core").ITextDecoration | undefined;
    bg?: import("@univerjs/core").Nullable<import("@univerjs/core").IColorStyle>;
} | {
    bd: {
        l: {
            s: import("@univerjs/core").BorderStyleTypes;
            cl: {
                rgb: string;
            };
        };
        t?: undefined;
        b?: undefined;
        r?: undefined;
    };
    cl?: import("@univerjs/core").Nullable<import("@univerjs/core").IColorStyle>;
    bl?: import("@univerjs/core").BooleanNumber | undefined;
    ht?: import("@univerjs/core").Nullable<import("@univerjs/core").HorizontalAlign>;
    vt?: import("@univerjs/core").Nullable<import("@univerjs/core").VerticalAlign>;
    ol?: import("@univerjs/core").ITextDecoration | undefined;
    bg?: import("@univerjs/core").Nullable<import("@univerjs/core").IColorStyle>;
};
export declare const tableThemeConfig: ITableDefaultThemeStyle[];
