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
import type { ReactNode } from 'react';
export interface IObjectListPanelCapabilities {
    arrange?: boolean;
    description?: boolean;
    locate?: boolean;
    name?: boolean;
    reorder?: boolean;
    selectable?: boolean;
    visible?: boolean;
}
export interface IObjectListPanelItem {
    id: string;
    name: string;
    description?: string;
    visible: boolean;
    selectable?: boolean;
    disabled?: boolean;
    level?: number;
    isGroup?: boolean;
    expanded?: boolean;
    canMoveForward?: boolean;
    canMoveBackward?: boolean;
    canReorder?: boolean;
    parentId?: string;
    sectionId?: string;
    sectionTitle?: string;
    capabilities?: IObjectListPanelCapabilities;
}
export interface IObjectListPanelLabels {
    title: string;
    empty: string;
    showAll: string;
    hideAll: string;
    lockAll?: string;
    unlockAll?: string;
    moveForward: string;
    moveBackward: string;
    close: string;
    show: string;
    hide: string;
    lock: string;
    unlock: string;
    lockHint?: string;
    unlockHint?: string;
    name: string;
    nameInput: string;
    description: string;
    descriptionPlaceholder: string;
    details: string;
    noSelection: string;
    locate: string;
    expand: string;
    collapse: string;
    dragToReorder: string;
    search: string;
    filterAll: string;
    filterHidden: string;
    filterLocked: string;
    sectionCanvas: string;
    sectionFloating: string;
}
export type ObjectListPanelTypeNameKey = 'chart' | 'connector' | 'container' | 'dom' | 'group' | 'image' | 'object' | 'placeholder' | 'shape' | 'smartArt' | 'table' | 'text' | 'unit' | 'video';
interface IObjectListPanelLocaleService {
    t: (key: string) => string;
}
export declare function getObjectListPanelLabels(localeService: IObjectListPanelLocaleService): IObjectListPanelLabels;
export declare function getObjectListPanelTypeName(localeService: IObjectListPanelLocaleService, typeName: ObjectListPanelTypeNameKey): string;
export interface IObjectListPanelBaseProps {
    items: IObjectListPanelItem[];
    selectedIds: string[];
    allObjectIds?: string[];
    allItems?: Pick<IObjectListPanelItem, 'id' | 'visible' | 'selectable' | 'disabled' | 'capabilities'>[];
    focusedId?: string | null;
    renderPermissionAction?: (item: IObjectListPanelItem) => ReactNode;
    labels: IObjectListPanelLabels;
    showHeader?: boolean;
    capabilities?: IObjectListPanelCapabilities;
    onSelect: (objectId: string, multiSelect: boolean) => void;
    onSetVisible: (objectIds: string[], visible: boolean) => void;
    onCommitName: (objectId: string, value: string) => void;
    onCommitDescription: (objectId: string, value: string) => void;
    onMoveForward?: (objectId: string) => void;
    onMoveBackward?: (objectId: string) => void;
    onToggleExpanded?: (objectId: string) => void;
    onToggleSelectable?: (objectId: string) => void;
    onSetSelectable?: (objectIds: string[], selectable: boolean) => void;
    onLocate?: (objectId: string) => void;
    onReorder?: (sourceObjectId: string, targetObjectId: string) => void;
}
export declare function ObjectListPanelBase(props: IObjectListPanelBaseProps): import("react").JSX.Element;
export type IDrawingObjectListItem = IObjectListPanelItem;
export type IDrawingObjectListPanelLabels = IObjectListPanelLabels;
export type IDrawingObjectListPanelProps = IObjectListPanelBaseProps;
export {};
