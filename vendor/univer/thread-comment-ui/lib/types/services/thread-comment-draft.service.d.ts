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
import type { UniverInstanceType } from '@univerjs/core';
import type { IThreadCommentAnchor } from '@univerjs/thread-comment';
import { Disposable, IUniverInstanceService, UserManagerService } from '@univerjs/core';
export interface IThreadCommentDraft {
    unitId: string;
    subUnitId: string;
    anchor: IThreadCommentAnchor;
}
export declare class ThreadCommentDraftService extends Disposable {
    private readonly _userManagerService;
    private readonly _placementType$;
    private readonly _draft$;
    private _placementUnitId;
    private _ownerUserId;
    readonly placementType$: import("rxjs").Observable<UniverInstanceType | null>;
    readonly draft$: import("rxjs").Observable<IThreadCommentDraft | null>;
    constructor(instanceService: IUniverInstanceService, _userManagerService: UserManagerService);
    get placementType(): UniverInstanceType | null;
    get draft(): IThreadCommentDraft | null;
    startPlacement(type: UniverInstanceType, unitId: string): void;
    place(draft: IThreadCommentDraft): void;
    cancel(): void;
    dispose(): void;
}
