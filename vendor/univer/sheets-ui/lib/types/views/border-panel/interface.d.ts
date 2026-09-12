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
import type { IBorderInfo } from '@univerjs/sheets';
import type { ICustomComponentProps } from '@univerjs/ui';
import { BorderStyleTypes, BorderType } from '@univerjs/core';
export declare const BORDER_PANEL_COMPONENT = "UI_PLUGIN_SHEETS_BORDER_PANEL_COMPONENT";
export interface IBorderPanelProps extends ICustomComponentProps<IBorderInfo> {
}
export declare const BORDER_LINE_CHILDREN: ({
    label: "sheets-ui.borderLine.borderTop";
    icon: string;
    value: BorderType.TOP;
} | {
    label: "sheets-ui.borderLine.borderBottom";
    icon: string;
    value: BorderType.BOTTOM;
} | {
    label: "sheets-ui.borderLine.borderLeft";
    icon: string;
    value: BorderType.LEFT;
} | {
    label: "sheets-ui.borderLine.borderRight";
    icon: string;
    value: BorderType.RIGHT;
} | {
    label: "sheets-ui.borderLine.borderNone";
    icon: string;
    value: BorderType.NONE;
} | {
    label: "sheets-ui.borderLine.borderAll";
    icon: string;
    value: BorderType.ALL;
} | {
    label: "sheets-ui.borderLine.borderOutside";
    icon: string;
    value: BorderType.OUTSIDE;
} | {
    label: "sheets-ui.borderLine.borderInside";
    icon: string;
    value: BorderType.INSIDE;
} | {
    label: "sheets-ui.borderLine.borderHorizontal";
    icon: string;
    value: BorderType.HORIZONTAL;
} | {
    label: "sheets-ui.borderLine.borderVertical";
    icon: string;
    value: BorderType.VERTICAL;
} | {
    label: "sheets-ui.borderLine.borderTlbr";
    icon: string;
    value: BorderType.TLBR;
} | {
    label: "sheets-ui.borderLine.borderTlbcTlmr";
    icon: string;
    value: BorderType.TLBC_TLMR;
} | {
    label: "sheets-ui.borderLine.borderTlbrTlbcTlmr";
    icon: string;
    value: BorderType.TLBR_TLBC_TLMR;
} | {
    label: "sheets-ui.borderLine.borderBlTr";
    icon: string;
    value: BorderType.BLTR;
} | {
    label: "sheets-ui.borderLine.borderMltrBctr";
    icon: string;
    value: BorderType.MLTR_BCTR;
})[];
export declare const BORDER_SIZE_CHILDREN: {
    label: BorderStyleTypes;
    value: BorderStyleTypes;
}[];
