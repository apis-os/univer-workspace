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
import type { JSONXActions } from '@univerjs/core';
export type DocMutationAffectedDrawingIds = ReadonlySet<string> | null;
/**
 * Returns the drawing ids that can be refreshed independently. `null` means
 * the mutation is drawing-related but needs a conservative full refresh.
 */
export declare function getDocMutationAffectedDrawingIds(actions: JSONXActions): DocMutationAffectedDrawingIds;
/**
 * Drawing editability and immediate overlay transforms only need refreshing
 * when a rich-text mutation changes drawing metadata or custom-block records.
 * Text, table, list, and document-style mutations are repainted from the next
 * document-layout publication instead of scanning every drawing eagerly.
 */
export declare function doesDocMutationAffectDrawingPresentation(actions: JSONXActions): boolean;
