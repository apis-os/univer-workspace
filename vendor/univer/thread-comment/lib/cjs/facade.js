Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
//#region \0rolldown/runtime.js
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") {
		for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
			key = keys[i];
			if (!__hasOwnProp.call(to, key) && key !== except) {
				__defProp(to, key, {
					get: ((k) => from[k]).bind(null, key),
					enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
				});
			}
		}
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
let _univerjs_core_facade = require("@univerjs/core/facade");
let _univerjs_thread_comment = require("@univerjs/thread-comment");
_univerjs_thread_comment = __toESM(_univerjs_thread_comment);

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
var FThreadCommentEnumMixin = class extends _univerjs_core_facade.FEnum {
	/** @inheritdoc */
	get ThreadCommentAnchorKind() {
		return _univerjs_thread_comment.ThreadCommentAnchorKind;
	}
};
_univerjs_core_facade.FEnum.extend(FThreadCommentEnumMixin);

//#endregion
//#region src/facade/f-univer.ts
var FUniverThreadCommentMixin = class extends _univerjs_core_facade.FUniver {
	_initialize(injector) {
		let service;
		Object.defineProperty(this, "_threadCommentService", { get: () => service ??= injector.get(_univerjs_thread_comment.ThreadCommentFacadeService) });
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
_univerjs_core_facade.FUniver.extend(FUniverThreadCommentMixin);

//#endregion
exports.FThreadCommentEnumMixin = FThreadCommentEnumMixin;
exports.FUniverThreadCommentMixin = FUniverThreadCommentMixin;