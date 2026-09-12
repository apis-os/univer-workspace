import { FEnum, FUniver } from "@univerjs/core/facade";
import * as ThreadComment from "@univerjs/thread-comment";
import { ThreadCommentAnchorKind } from "@univerjs/thread-comment";

//#region src/facade/f-enum.ts
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
var FThreadCommentEnumMixin = class extends FEnum {
	/** @inheritdoc */
	get ThreadCommentAnchorKind() {
		return ThreadCommentAnchorKind;
	}
};
FEnum.extend(FThreadCommentEnumMixin);

//#endregion
//#region src/facade/f-univer.ts
var FUniverThreadCommentMixin = class extends FUniver {
	_initialize(injector) {
		let service;
		Object.defineProperty(this, "_threadCommentService", { get: () => service ??= injector.get(ThreadComment.ThreadCommentFacadeService) });
	}
	/** @inheritdoc */
	createCommentAsync(options) {
		return this._threadCommentService.createCommentAsync(options);
	}
	/** @inheritdoc */
	replyCommentAsync(options) {
		return this._threadCommentService.replyCommentAsync(options);
	}
	/** @inheritdoc */
	updateCommentAsync(options) {
		return this._threadCommentService.updateCommentAsync(options);
	}
	/** @inheritdoc */
	deleteCommentAsync(options) {
		return this._threadCommentService.deleteCommentAsync(options);
	}
	/** @inheritdoc */
	resolveCommentAsync(options) {
		return this._threadCommentService.resolveCommentAsync(options);
	}
	/** @inheritdoc */
	getComments(query = {}) {
		return this._threadCommentService.getComments(query);
	}
	/** @inheritdoc */
	async listCommentsAsync(query = {}) {
		return this._threadCommentService.listCommentsAsync(query);
	}
};
FUniver.extend(FUniverThreadCommentMixin);

//#endregion
export { FThreadCommentEnumMixin, FUniverThreadCommentMixin };