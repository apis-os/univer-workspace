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
import { Disposable, IPermissionService, IUniverInstanceService } from '@univerjs/core';
import { DocSelectionManagerService } from '@univerjs/docs';
import { DocCanvasPopManagerService } from '@univerjs/docs-ui';
import { IRenderManagerService } from '@univerjs/engine-render';
export interface ILinkInfo {
    unitId: string;
    linkId: string;
    segmentId?: string;
    segmentPage?: number;
    startIndex: number;
    endIndex: number;
}
type LinkPopupDisposable = ReturnType<DocCanvasPopManagerService['attachPopupToRange']>;
export declare class DocHyperLinkPopupService extends Disposable {
    private readonly _docCanvasPopupManagerService;
    private readonly _textSelectionManagerService;
    private readonly _univerInstanceService;
    private readonly _permissionService;
    private readonly _renderManagerService;
    private readonly _editingLink$;
    private readonly _showingLink$;
    readonly editingLink$: import("rxjs").Observable<ILinkInfo | null>;
    readonly showingLink$: import("rxjs").Observable<ILinkInfo | null>;
    private _editPopup;
    private _editPopupUnitId;
    private _infoPopup;
    private _infoPopupPinned;
    private _infoPopupHideTimer;
    private _infoPopupSuppressed;
    private _infoPopupSuppressionTimer;
    constructor(_docCanvasPopupManagerService: DocCanvasPopManagerService, _textSelectionManagerService: DocSelectionManagerService, _univerInstanceService: IUniverInstanceService, _permissionService: IPermissionService, _renderManagerService: IRenderManagerService);
    dispose(): void;
    get editing(): ILinkInfo | null;
    get showing(): ILinkInfo | null;
    get infoPopupPinned(): boolean;
    showEditPopup(unitId: string, linkInfo: ILinkInfo | null): LinkPopupDisposable | null;
    hideEditPopup(): void;
    showInfoPopup(info: ILinkInfo, options?: {
        pinned?: boolean;
    }): LinkPopupDisposable | null | undefined;
    hideInfoPopup(): void;
    scheduleHideInfoPopup(): void;
    cancelScheduledHideInfoPopup(): void;
    hideInfoPopupOnPointerDown(): void;
    canEditLink(unitId: string, linkInfo: ILinkInfo | null): boolean;
}
export {};
