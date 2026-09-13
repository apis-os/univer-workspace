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
import { getMenuHiddenObservable, MenuItemType } from '@univerjs/ui';
type MenuAccessor = Parameters<typeof getMenuHiddenObservable>[0];
export declare function AddDocDrawingCommentMenuItemFactory(accessor: MenuAccessor): {
    id: string;
    type: MenuItemType;
    icon: string;
    title: string;
    tooltip: string;
    hidden$: import("rxjs").Observable<boolean>;
    disabled$: import("rxjs").Observable<boolean>;
};
export declare const shouldDisableAddComment: (accessor: MenuAccessor) => boolean;
export declare function AddDocCommentMenuItemFactory(accessor: MenuAccessor): {
    id: string;
    type: MenuItemType;
    icon: string;
    title: string;
    tooltip: string;
    hidden$: import("rxjs").Observable<boolean>;
    disabled$: import("rxjs").Observable<boolean>;
};
export declare function ToolbarDocCommentMenuItemFactory(accessor: MenuAccessor): {
    id: string;
    type: MenuItemType;
    icon: string;
    title: string;
    tooltip: string;
    hidden$: import("rxjs").Observable<boolean>;
};
export {};
