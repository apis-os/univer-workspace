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
let _univerjs_core = require("@univerjs/core");
_univerjs_core = __toESM(_univerjs_core);
let _univerjs_sheets_thread_comment = require("@univerjs/sheets-thread-comment");
let _univerjs_sheets_facade = require("@univerjs/sheets/facade");
let _univerjs_thread_comment = require("@univerjs/thread-comment");
_univerjs_thread_comment = __toESM(_univerjs_thread_comment);
let _univerjs_engine_formula = require("@univerjs/engine-formula");
let _univerjs_core_facade = require("@univerjs/core/facade");

//#region \0@oxc-project+runtime@0.140.0/helpers/esm/typeof.js
function _typeof(o) {
	"@babel/helpers - typeof";
	return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
		return typeof o;
	} : function(o) {
		return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	}, _typeof(o);
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPrimitive.js
function toPrimitive(t, r) {
	if ("object" != _typeof(t) || !t) return t;
	var e = t[Symbol.toPrimitive];
	if (void 0 !== e) {
		var i = e.call(t, r || "default");
		if ("object" != _typeof(i)) return i;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return ("string" === r ? String : Number)(t);
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/toPropertyKey.js
function toPropertyKey(t) {
	var i = toPrimitive(t, "string");
	return "symbol" == _typeof(i) ? i : i + "";
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/defineProperty.js
function _defineProperty(e, r, t) {
	return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
		value: t,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : e[r] = t, e;
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/decorateParam.js
function __decorateParam(paramIndex, decorator) {
	return function(target, key) {
		decorator(target, key, paramIndex);
	};
}

//#endregion
//#region \0@oxc-project+runtime@0.140.0/helpers/esm/decorate.js
function __decorate(decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
}

//#endregion
//#region src/facade/f-thread-comment.ts
var _FThreadComment;
/**
* An readonly class that represents a comment.
* @ignore
*/
var FTheadCommentItem = class FTheadCommentItem {
	/**
	* Create a new FTheadCommentItem
	* @param {IThreadComment|undefined} comment The comment
	* @returns {FTheadCommentItem} A new instance of FTheadCommentItem
	* @example
	* ```ts
	* const commentBuilder = univerAPI.newTheadComment();
	* console.log(commentBuilder);
	* ```
	*/
	static create(comment) {
		return new FTheadCommentItem(comment);
	}
	constructor(comment) {
		_defineProperty(this, "_comment", {
			id: (0, _univerjs_core.generateRandomId)(),
			ref: "",
			threadId: "",
			dT: "",
			personId: "",
			text: _univerjs_core.RichTextBuilder.newEmptyData().body,
			attachments: [],
			unitId: "",
			subUnitId: ""
		});
		if (comment) this._comment = comment;
	}
	/**
	* Get the person id of the comment
	* @returns {string} The person id of the comment
	* @example
	* ```ts
	* const commentBuilder = univerAPI.newTheadComment();
	* console.log(commentBuilder.personId);
	* ```
	*/
	get personId() {
		return this._comment.personId;
	}
	/**
	* Get the date time of the comment
	* @returns {string} The date time of the comment
	* @example
	* ```ts
	* const commentBuilder = univerAPI.newTheadComment();
	* console.log(commentBuilder.dateTime);
	* ```
	*/
	get dateTime() {
		return this._comment.dT;
	}
	/**
	* Get the content of the comment
	* @returns {RichTextValue} The content of the comment
	* @example
	* ```ts
	* const commentBuilder = univerAPI.newTheadComment();
	* console.log(commentBuilder.content);
	* ```
	*/
	get content() {
		return _univerjs_core.RichTextValue.createByBody(this._comment.text);
	}
	/**
	* Get the id of the comment
	* @returns {string} The id of the comment
	* @example
	* ```ts
	* const commentBuilder = univerAPI.newTheadComment();
	* console.log(commentBuilder.id);
	* ```
	*/
	get id() {
		return this._comment.id;
	}
	/**
	* Get the thread id of the comment
	* @returns {string} The thread id of the comment
	* @example
	* ```ts
	* const commentBuilder = univerAPI.newTheadComment();
	* console.log(commentBuilder.threadId);
	* ```
	*/
	get threadId() {
		return this._comment.threadId;
	}
	/**
	* Copy the comment
	* @returns {FTheadCommentBuilder} The comment builder
	* @example
	* ```ts
	* const commentBuilder = univerAPI.newTheadComment();
	* const newCommentBuilder = commentBuilder.copy();
	* console.log(newCommentBuilder);
	* ```
	*/
	copy() {
		return FTheadCommentBuilder.create(_univerjs_core.Tools.deepClone(this._comment));
	}
};
/**
* A builder for thread comment. use {@link FUniver} `univerAPI.newTheadComment()` to create a new builder.
*/
var FTheadCommentBuilder = class FTheadCommentBuilder extends FTheadCommentItem {
	static create(comment) {
		return new FTheadCommentBuilder(comment);
	}
	/**
	* Set the content of the comment
	* @param {IDocumentBody | RichTextValue} content The content of the comment
	* @returns {FTheadCommentBuilder} The comment builder for chaining
	* @example
	* ```ts
	* // Create a new comment
	* const richText = univerAPI.newRichText().insertText('hello univer');
	* const commentBuilder = univerAPI.newTheadComment()
	*   .setContent(richText);
	* console.log(commentBuilder.content);
	*
	* // Add the comment to the cell A1
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	* const cell = fWorksheet.getRange('A1');
	* const result = await cell.addCommentAsync(commentBuilder);
	* console.log(result);
	* ```
	*/
	setContent(content) {
		if (content instanceof _univerjs_core.RichTextValue) this._comment.text = content.getData().body;
		else this._comment.text = content;
		return this;
	}
	/**
	* Set the person id of the comment
	* @param {string} userId The person id of the comment
	* @returns {FTheadCommentBuilder} The comment builder for chaining
	* @example
	* ```ts
	* // Create a new comment
	* const richText = univerAPI.newRichText().insertText('hello univer');
	* const commentBuilder = univerAPI.newTheadComment()
	*   .setContent(richText)
	*   .setPersonId('mock-user-id');
	* console.log(commentBuilder.personId);
	*
	* // Add the comment to the cell A1
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	* const cell = fWorksheet.getRange('A1');
	* const result = await cell.addCommentAsync(commentBuilder);
	* console.log(result);
	* ```
	*/
	setPersonId(userId) {
		this._comment.personId = userId;
		return this;
	}
	/**
	* Set the date time of the comment
	* @param {Date} date The date time of the comment
	* @returns {FTheadCommentBuilder} The comment builder for chaining
	* @example
	* ```ts
	* // Create a new comment
	* const richText = univerAPI.newRichText().insertText('hello univer');
	* const commentBuilder = univerAPI.newTheadComment()
	*   .setContent(richText)
	*   .setDateTime(new Date('2025-02-21 14:22:22'));
	* console.log(commentBuilder.dateTime);
	*
	* // Add the comment to the cell A1
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	* const cell = fWorksheet.getRange('A1');
	* const result = await cell.addCommentAsync(commentBuilder);
	* console.log(result);
	* ```
	*/
	setDateTime(date) {
		this._comment.dT = (0, _univerjs_thread_comment.getDT)(date);
		return this;
	}
	/**
	* Set the id of the comment
	* @param {string} id The id of the comment
	* @returns {FTheadCommentBuilder} The comment builder for chaining
	* @example
	* ```ts
	* // Create a new comment
	* const richText = univerAPI.newRichText().insertText('hello univer');
	* const commentBuilder = univerAPI.newTheadComment()
	*   .setContent(richText)
	*   .setId('mock-comment-id');
	* console.log(commentBuilder.id);
	*
	* // Add the comment to the cell A1
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	* const cell = fWorksheet.getRange('A1');
	* const result = await cell.addCommentAsync(commentBuilder);
	* console.log(result);
	* ```
	*/
	setId(id) {
		this._comment.id = id;
		return this;
	}
	/**
	* Set the thread id of the comment
	* @param {string} threadId The thread id of the comment
	* @returns {FTheadCommentBuilder} The comment builder
	* @example
	* ```ts
	* // Create a new comment
	* const richText = univerAPI.newRichText().insertText('hello univer');
	* const commentBuilder = univerAPI.newTheadComment()
	*   .setContent(richText)
	*   .setThreadId('mock-thread-id');
	* console.log(commentBuilder.threadId);
	*
	* // Add the comment to the cell A1
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	* const cell = fWorksheet.getRange('A1');
	* const result = await cell.addCommentAsync(commentBuilder);
	* console.log(result);
	* ```
	*/
	setThreadId(threadId) {
		this._comment.threadId = threadId;
		return this;
	}
	/**
	* Build the comment
	* @returns {IThreadComment} The comment
	* @example
	* ```ts
	* const richText = univerAPI.newRichText().insertText('hello univer');
	* const comment = univerAPI.newTheadComment()
	*   .setContent(richText)
	*   .setPersonId('mock-user-id')
	*   .setDateTime(new Date('2025-02-21 14:22:22'))
	*   .setId('mock-comment-id')
	*   .setThreadId('mock-thread-id')
	*   .build();
	* console.log(comment);
	* ```
	*/
	build() {
		return this._comment;
	}
};
let FThreadComment = _FThreadComment = class FThreadComment {
	/**
	* @ignore
	*/
	constructor(_thread, _parent, _injector, _commandService, _univerInstanceService, _threadCommentModel, _userManagerService) {
		this._thread = _thread;
		this._parent = _parent;
		this._injector = _injector;
		this._commandService = _commandService;
		this._univerInstanceService = _univerInstanceService;
		this._threadCommentModel = _threadCommentModel;
		this._userManagerService = _userManagerService;
	}
	_getRef() {
		var _this$_parent;
		return (0, _univerjs_engine_formula.deserializeRangeWithSheet)(((_this$_parent = this._parent) === null || _this$_parent === void 0 ? void 0 : _this$_parent.ref) || this._thread.ref).range;
	}
	/**
	* Whether the comment is a root comment
	* @returns {boolean} Whether the comment is a root comment
	* @example
	* ```ts
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	* const comments = fWorksheet.getComments();
	* comments.forEach((comment) => {
	*   console.log(comment.getIsRoot());
	* });
	* ```
	*/
	getIsRoot() {
		return !this._parent;
	}
	/**
	* Get the comment data
	* @returns {IBaseComment} The comment data
	* @example
	* ```ts
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	* const comments = fWorksheet.getComments();
	* comments.forEach((comment) => {
	*   console.log(comment.getCommentData());
	* });
	* ```
	*/
	getCommentData() {
		const { children, ...comment } = this._thread;
		return comment;
	}
	/**
	* Get the replies of the comment
	* @returns {FThreadComment[]} the replies of the comment
	* @example
	* ```ts
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	* const comments = fWorksheet.getComments();
	* comments.forEach((comment) => {
	*   if (comment.getIsRoot()) {
	*     const replies = comment.getReplies();
	*     replies.forEach((reply) => {
	*       console.log(reply.getCommentData());
	*     });
	*   }
	* });
	* ```
	*/
	getReplies() {
		var _comments$children;
		const range = this._getRef();
		const comments = this._threadCommentModel.getCommentWithChildren(this._thread.unitId, this._thread.subUnitId, range.startRow, range.startColumn);
		return comments === null || comments === void 0 || (_comments$children = comments.children) === null || _comments$children === void 0 ? void 0 : _comments$children.map((child) => this._injector.createInstance(_FThreadComment, child));
	}
	/**
	* Get the range of the comment
	* @returns {FRange | null} The range of the comment
	* @example
	* ```ts
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	* const comments = fWorksheet.getComments();
	* comments.forEach((comment) => {
	*   console.log(comment.getRange().getA1Notation());
	* });
	* ```
	*/
	getRange() {
		const workbook = this._univerInstanceService.getUnit(this._thread.unitId, _univerjs_core.UniverInstanceType.UNIVER_SHEET);
		if (!workbook) return null;
		const worksheet = workbook.getSheetBySheetId(this._thread.subUnitId);
		if (!worksheet) return null;
		const range = this._getRef();
		return this._injector.createInstance(_univerjs_sheets_facade.FRange, workbook, worksheet, range);
	}
	/**
	* Get the rich text of the comment
	* @returns {RichTextValue} The rich text of the comment
	* @example
	* ```ts
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	* const comments = fWorksheet.getComments();
	* comments.forEach((comment) => {
	*   console.log(comment.getRichText());
	* });
	* ```
	*/
	getRichText() {
		const body = this._thread.text;
		return _univerjs_core.RichTextValue.create({
			body,
			documentStyle: {},
			id: "d"
		});
	}
	/**
	* Delete the comment and it's replies
	* @returns {Promise<boolean>} Whether the comment is deleted successfully
	* @example
	* ```ts
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	* const comments = fWorksheet.getComments();
	*
	* // Delete the first comment
	* const result = await comments[0]?.deleteAsync();
	* console.log(result);
	* ```
	*/
	deleteAsync() {
		return this._commandService.executeCommand(this.getIsRoot() ? _univerjs_thread_comment.DeleteCommentTreeCommand.id : _univerjs_thread_comment.DeleteCommentCommand.id, {
			commentId: this._thread.id,
			unitId: this._thread.unitId,
			subUnitId: this._thread.subUnitId
		});
	}
	/**
	* Update the comment content
	* @param {IDocumentBody | RichTextValue} content The new content of the comment
	* @returns {Promise<boolean>} Whether the comment is updated successfully
	* @example
	* ```ts
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	*
	* // Create a new comment
	* const richText = univerAPI.newRichText().insertText('hello univer');
	* const commentBuilder = univerAPI.newTheadComment()
	*   .setContent(richText)
	*   .setId('mock-comment-id');
	* const cell = fWorksheet.getRange('A1');
	* await cell.addCommentAsync(commentBuilder);
	*
	* // Update the comment after 3 seconds
	* setTimeout(async () => {
	*   const comment = fWorksheet.getCommentById('mock-comment-id');
	*   const newRichText = univerAPI.newRichText().insertText('Hello Univer AI');
	*   const result = await comment.updateAsync(newRichText);
	*   console.log(result);
	* }, 3000);
	* ```
	*/
	async updateAsync(content) {
		const body = content instanceof _univerjs_core.RichTextValue ? content.getData().body : content;
		const dt = (0, _univerjs_thread_comment.getDT)();
		return await this._commandService.executeCommand(_univerjs_thread_comment.UpdateCommentCommand.id, {
			unitId: this._thread.unitId,
			subUnitId: this._thread.subUnitId,
			payload: {
				commentId: this._thread.id,
				text: body,
				updated: true,
				updateT: dt
			}
		});
	}
	/**
	* Resolve the comment
	* @param {boolean} resolved Whether the comment is resolved
	* @returns {Promise<boolean>} Set the comment to resolved or not operation result
	* @example
	* ```ts
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	*
	* // Create a new comment
	* const richText = univerAPI.newRichText().insertText('hello univer');
	* const commentBuilder = univerAPI.newTheadComment()
	*   .setContent(richText)
	*   .setId('mock-comment-id');
	* const cell = fWorksheet.getRange('A1');
	* await cell.addCommentAsync(commentBuilder);
	*
	* // Resolve the comment after 3 seconds
	* setTimeout(async () => {
	*   const comment = fWorksheet.getCommentById('mock-comment-id');
	*   const result = await comment.resolveAsync(true);
	*   console.log(result);
	* }, 3000);
	* ```
	*/
	resolveAsync(resolved) {
		return this._commandService.executeCommand(_univerjs_thread_comment.ResolveCommentCommand.id, {
			unitId: this._thread.unitId,
			subUnitId: this._thread.subUnitId,
			commentId: this._thread.id,
			resolved: resolved ?? !this._thread.resolved
		});
	}
	/**
	* Reply to the comment
	* @param {FTheadCommentBuilder} comment The comment to reply to
	* @returns {Promise<boolean>} Whether the comment is replied successfully
	* @example
	* ```ts
	* const fWorkbook = univerAPI.getActiveWorkbook();
	* const fWorksheet = fWorkbook.getSheetByName('Sheet1');
	* if (!fWorksheet) return;
	*
	* // Create a new comment
	* const richText = univerAPI.newRichText().insertText('hello univer');
	* const commentBuilder = univerAPI.newTheadComment()
	*   .setContent(richText)
	*   .setId('mock-comment-id');
	* const cell = fWorksheet.getRange('A1');
	* await cell.addCommentAsync(commentBuilder);
	*
	* // Reply to the comment
	* const replyText = univerAPI.newRichText().insertText('Hello Univer AI');
	* const reply = univerAPI.newTheadComment().setContent(replyText);
	* const comment = fWorksheet.getCommentById('mock-comment-id');
	* const result = await comment.replyAsync(reply);
	* console.log(result);
	* ```
	*/
	replyAsync(comment) {
		var _this$_parent2;
		const commentData = comment.build();
		return this._commandService.executeCommand(_univerjs_thread_comment.AddCommentCommand.id, {
			unitId: this._thread.unitId,
			subUnitId: this._thread.subUnitId,
			comment: {
				id: (0, _univerjs_core.generateRandomId)(),
				parentId: this._thread.id,
				threadId: this._thread.threadId,
				ref: ((_this$_parent2 = this._parent) === null || _this$_parent2 === void 0 ? void 0 : _this$_parent2.ref) || this._thread.ref,
				unitId: this._thread.unitId,
				subUnitId: this._thread.subUnitId,
				text: commentData.text,
				attachments: commentData.attachments,
				dT: commentData.dT || (0, _univerjs_thread_comment.getDT)(),
				personId: commentData.personId || this._userManagerService.getCurrentUser().userID
			}
		});
	}
};
FThreadComment = _FThreadComment = __decorate([
	__decorateParam(2, (0, _univerjs_core.Inject)(_univerjs_core.Injector)),
	__decorateParam(3, _univerjs_core.ICommandService),
	__decorateParam(4, _univerjs_core.IUniverInstanceService),
	__decorateParam(5, (0, _univerjs_core.Inject)(_univerjs_sheets_thread_comment.SheetsThreadCommentModel)),
	__decorateParam(6, (0, _univerjs_core.Inject)(_univerjs_core.UserManagerService))
], FThreadComment);

//#endregion
//#region src/facade/f-range.ts
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
function firstNonEmpty(...values) {
	for (const value of values) if (value) return value;
	return _univerjs_core.generateRandomId();
}
/**
* @ignore
*/
var FRangeSheetsThreadCommentMixin = class extends _univerjs_sheets_facade.FRange {
	_initialize(injector) {
		let dependencies;
		Object.defineProperty(this, "_dependencies", { get: () => dependencies ??= {
			commandService: injector.get(_univerjs_core.ICommandService),
			model: injector.get(_univerjs_sheets_thread_comment.SheetsThreadCommentModel),
			userManagerService: injector.get(_univerjs_core.UserManagerService)
		} });
	}
	_getCommentDataInRange() {
		const model = this._dependencies.model;
		const unitId = this._workbook.getUnitId();
		const sheetId = this._worksheet.getSheetId();
		const comments = [];
		_univerjs_core.Range.foreach(this._range, (row, col) => {
			const commentId = model.getByLocation(unitId, sheetId, row, col);
			const comment = commentId ? model.getComment(unitId, sheetId, commentId) : null;
			if (comment) comments.push(comment);
		});
		return comments;
	}
	_getStartCellCommentData() {
		const model = this._dependencies.model;
		const unitId = this._workbook.getUnitId();
		const sheetId = this._worksheet.getSheetId();
		const commentId = model.getByLocation(unitId, sheetId, this._range.startRow, this._range.startColumn);
		return commentId ? model.getComment(unitId, sheetId, commentId) ?? null : null;
	}
	getComment() {
		const comment = this._getStartCellCommentData();
		return comment ? this._injector.createInstance(FThreadComment, comment) : null;
	}
	getComments() {
		return this._getCommentDataInRange().map((comment) => this._injector.createInstance(FThreadComment, comment));
	}
	addCommentAsync(content, options = {}) {
		const { commandService, userManagerService } = this._dependencies;
		const currentComment = this._getStartCellCommentData();
		const unitId = this._workbook.getUnitId();
		const sheetId = this._worksheet.getSheetId();
		const refStr = `${_univerjs_core.Tools.chatAtABC(this._range.startColumn)}${this._range.startRow + 1}`;
		const currentUser = userManagerService.getCurrentUser();
		let commentData = null;
		let text;
		if (content instanceof FTheadCommentBuilder) {
			commentData = content.build();
			text = commentData.text;
		} else text = _univerjs_thread_comment.normalizeThreadCommentContent(content);
		return commandService.executeCommand(_univerjs_thread_comment.AddCommentCommand.id, {
			unitId,
			subUnitId: sheetId,
			comment: {
				text,
				dT: options.dateTime ? _univerjs_thread_comment.getDT(options.dateTime) : (commentData === null || commentData === void 0 ? void 0 : commentData.dT) || _univerjs_thread_comment.getDT(),
				attachments: options.attachments ?? (commentData === null || commentData === void 0 ? void 0 : commentData.attachments) ?? [],
				id: firstNonEmpty(options.id, commentData === null || commentData === void 0 ? void 0 : commentData.id),
				ref: refStr,
				personId: firstNonEmpty(options.personId, commentData === null || commentData === void 0 ? void 0 : commentData.personId, currentUser.userID),
				parentId: currentComment === null || currentComment === void 0 ? void 0 : currentComment.id,
				unitId,
				subUnitId: sheetId,
				threadId: firstNonEmpty(currentComment === null || currentComment === void 0 ? void 0 : currentComment.threadId, options.threadId, commentData === null || commentData === void 0 ? void 0 : commentData.threadId)
			}
		});
	}
	clearCommentAsync() {
		const { commandService } = this._dependencies;
		const currentComment = this._getStartCellCommentData();
		const unitId = this._workbook.getUnitId();
		const sheetId = this._worksheet.getSheetId();
		if (currentComment) return commandService.executeCommand(_univerjs_thread_comment.DeleteCommentTreeCommand.id, {
			unitId,
			subUnitId: sheetId,
			threadId: currentComment.threadId,
			commentId: currentComment.id
		});
		return Promise.resolve(true);
	}
	async clearCommentsAsync() {
		const { commandService } = this._dependencies;
		const unitId = this._workbook.getUnitId();
		const subUnitId = this._worksheet.getSheetId();
		return (await Promise.all(this._getCommentDataInRange().map((comment) => commandService.executeCommand(_univerjs_thread_comment.DeleteCommentTreeCommand.id, {
			unitId,
			subUnitId,
			threadId: comment.threadId,
			commentId: comment.id
		})))).every(Boolean);
	}
};
_univerjs_sheets_facade.FRange.extend(FRangeSheetsThreadCommentMixin);

//#endregion
//#region src/facade/f-workbook.ts
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
/**
* @ignore
*/
var FWorkbookSheetsThreadCommentMixin = class extends _univerjs_sheets_facade.FWorkbook {
	/**
	* @ignore
	*/
	_initialize() {
		Object.defineProperty(this, "_threadCommentModel", { get() {
			return this._injector.get(_univerjs_thread_comment.ThreadCommentModel);
		} });
	}
	getComments() {
		return this._threadCommentModel.getUnit(this._workbook.getUnitId()).map((i) => this._injector.createInstance(FThreadComment, i.root));
	}
	clearComments() {
		const promises = this.getComments().map((comment) => comment.deleteAsync());
		return Promise.all(promises).then(() => true);
	}
};
_univerjs_sheets_facade.FWorkbook.extend(FWorkbookSheetsThreadCommentMixin);

//#endregion
//#region src/facade/f-worksheet.ts
/**
* @ignore
*/
var FWorksheetCommentMixin = class extends _univerjs_sheets_facade.FWorksheet {
	getComments() {
		return this._injector.get(_univerjs_sheets_thread_comment.SheetsThreadCommentModel).getSubUnitAll(this._workbook.getUnitId(), this._worksheet.getSheetId()).map((comment) => this._injector.createInstance(FThreadComment, comment));
	}
	clearComments() {
		const promises = this.getComments().map((comment) => comment.deleteAsync());
		return Promise.all(promises).then(() => true);
	}
	/**
	* Subscribe to comment events.
	* @param callback Callback function, param contains comment info and target cell.
	* @returns {IDisposable} A disposable used to remove the listener.
	*/
	onCommented(callback) {
		return this._injector.get(_univerjs_core.ICommandService).onCommandExecuted((command) => {
			if (command.id === _univerjs_thread_comment.AddCommentCommand.id) {
				const params = command.params;
				callback(params);
			}
		});
	}
	getCommentById(commentId) {
		const comment = this._injector.get(_univerjs_sheets_thread_comment.SheetsThreadCommentModel).getComment(this._workbook.getUnitId(), this._worksheet.getSheetId(), commentId);
		if (comment) return this._injector.createInstance(FThreadComment, comment);
	}
};
_univerjs_sheets_facade.FWorksheet.extend(FWorksheetCommentMixin);

//#endregion
//#region src/facade/f-event.ts
/**
* @ignore
*/
var FSheetsThreadCommentEventNameMixin = class extends _univerjs_core_facade.FEventName {
	get CommentAdded() {
		return "CommentAdded";
	}
	get BeforeCommentAdd() {
		return "BeforeCommentAdd";
	}
	get CommentUpdated() {
		return "CommentUpdated";
	}
	get BeforeCommentUpdate() {
		return "BeforeCommentUpdate";
	}
	get CommentDeleted() {
		return "CommentDeleted";
	}
	get BeforeCommentDelete() {
		return "BeforeCommentDelete";
	}
	get CommentResolved() {
		return "CommentResolved";
	}
	get BeforeCommentResolve() {
		return "BeforeCommentResolve";
	}
};
_univerjs_core_facade.FEventName.extend(FSheetsThreadCommentEventNameMixin);

//#endregion
//#region src/facade/f-univer.ts
/**
* @ignore
*/
var FUniverSheetsThreadCommentMixin = class extends _univerjs_core_facade.FUniver {
	_initialize(injector) {
		const commandService = injector.get(_univerjs_core.ICommandService);
		this.disposeWithMe(this.registerEventHandler(this.Event.CommentAdded, () => commandService.onCommandExecuted((commandInfo) => {
			var _threadComment$getRan, _threadComment$getRan2;
			if (commandInfo.id !== _univerjs_thread_comment.AddCommentCommand.id) return;
			const params = commandInfo.params;
			const target = this.getSheetCommandTarget(params);
			if (!target) return;
			const { workbook, worksheet } = target;
			const { comment } = params;
			const threadComment = worksheet.getCommentById(comment.id);
			if (!threadComment) return;
			const eventParams = {
				workbook,
				worksheet,
				row: ((_threadComment$getRan = threadComment.getRange()) === null || _threadComment$getRan === void 0 ? void 0 : _threadComment$getRan.getRow()) ?? 0,
				col: ((_threadComment$getRan2 = threadComment.getRange()) === null || _threadComment$getRan2 === void 0 ? void 0 : _threadComment$getRan2.getColumn()) ?? 0,
				comment: threadComment
			};
			this.fireEvent(this.Event.CommentAdded, eventParams);
		})));
		this.disposeWithMe(this.registerEventHandler(this.Event.CommentUpdated, () => commandService.onCommandExecuted((commandInfo) => {
			var _threadComment$getRan3, _threadComment$getRan4;
			if (commandInfo.id !== _univerjs_thread_comment.UpdateCommentCommand.id) return;
			const params = commandInfo.params;
			const target = this.getSheetCommandTarget(params);
			if (!target) return;
			const { workbook, worksheet } = target;
			const { payload } = params;
			const threadComment = worksheet.getCommentById(payload.commentId);
			if (!threadComment) return;
			const eventParams = {
				workbook,
				worksheet,
				row: ((_threadComment$getRan3 = threadComment.getRange()) === null || _threadComment$getRan3 === void 0 ? void 0 : _threadComment$getRan3.getRow()) ?? 0,
				col: ((_threadComment$getRan4 = threadComment.getRange()) === null || _threadComment$getRan4 === void 0 ? void 0 : _threadComment$getRan4.getColumn()) ?? 0,
				comment: threadComment
			};
			this.fireEvent(this.Event.CommentUpdated, eventParams);
		})));
		this.disposeWithMe(this.registerEventHandler(this.Event.CommentDeleted, () => commandService.onCommandExecuted((commandInfo) => {
			if (commandInfo.id !== _univerjs_thread_comment.DeleteCommentCommand.id && commandInfo.id !== _univerjs_thread_comment.DeleteCommentTreeCommand.id) return;
			const params = commandInfo.params;
			const target = this.getSheetCommandTarget(params);
			if (!target) return;
			const { workbook, worksheet } = target;
			const { commentId } = params;
			const eventParams = {
				workbook,
				worksheet,
				commentId
			};
			this.fireEvent(this.Event.CommentDeleted, eventParams);
		})));
		this.disposeWithMe(this.registerEventHandler(this.Event.CommentResolved, () => commandService.onCommandExecuted((commandInfo) => {
			var _threadComment$getRan5, _threadComment$getRan6;
			if (commandInfo.id !== _univerjs_thread_comment.ResolveCommentCommand.id) return;
			const params = commandInfo.params;
			const target = this.getSheetCommandTarget(params);
			if (!target) return;
			const { workbook, worksheet } = target;
			const { commentId, resolved } = params;
			const threadComment = worksheet.getCommentById(commentId);
			if (!threadComment) return;
			const eventParams = {
				workbook,
				worksheet,
				row: ((_threadComment$getRan5 = threadComment.getRange()) === null || _threadComment$getRan5 === void 0 ? void 0 : _threadComment$getRan5.getRow()) ?? 0,
				col: ((_threadComment$getRan6 = threadComment.getRange()) === null || _threadComment$getRan6 === void 0 ? void 0 : _threadComment$getRan6.getColumn()) ?? 0,
				comment: threadComment,
				resolved
			};
			this.fireEvent(this.Event.CommentResolved, eventParams);
		})));
		this.disposeWithMe(this.registerEventHandler(this.Event.BeforeCommentAdd, () => commandService.beforeCommandExecuted((commandInfo) => {
			if (commandInfo.id !== _univerjs_thread_comment.AddCommentCommand.id) return;
			const params = commandInfo.params;
			const target = this.getSheetCommandTarget(params);
			if (!target) return;
			const { workbook, worksheet } = target;
			const { comment } = params;
			const { range } = (0, _univerjs_engine_formula.deserializeRangeWithSheet)(comment.ref);
			const eventParams = {
				workbook,
				worksheet,
				row: range.startRow,
				col: range.startColumn,
				comment: FTheadCommentItem.create(comment)
			};
			this.fireEvent(this.Event.BeforeCommentAdd, eventParams);
			if (eventParams.cancel) throw new _univerjs_core.CanceledError();
		})));
		this.disposeWithMe(this.registerEventHandler(this.Event.BeforeCommentUpdate, () => commandService.beforeCommandExecuted((commandInfo) => {
			var _threadComment$getRan7, _threadComment$getRan8;
			if (commandInfo.id !== _univerjs_thread_comment.UpdateCommentCommand.id) return;
			const params = commandInfo.params;
			const target = this.getSheetCommandTarget(params);
			if (!target) return;
			const { workbook, worksheet } = target;
			const { payload } = params;
			const threadComment = worksheet.getCommentById(payload.commentId);
			if (!threadComment) return;
			const eventParams = {
				workbook,
				worksheet,
				row: ((_threadComment$getRan7 = threadComment.getRange()) === null || _threadComment$getRan7 === void 0 ? void 0 : _threadComment$getRan7.getRow()) ?? 0,
				col: ((_threadComment$getRan8 = threadComment.getRange()) === null || _threadComment$getRan8 === void 0 ? void 0 : _threadComment$getRan8.getColumn()) ?? 0,
				comment: threadComment,
				newContent: _univerjs_core.RichTextValue.createByBody(payload.text)
			};
			this.fireEvent(this.Event.BeforeCommentUpdate, eventParams);
			if (eventParams.cancel) throw new _univerjs_core.CanceledError();
		})));
		this.disposeWithMe(this.registerEventHandler(this.Event.BeforeCommentDelete, () => commandService.beforeCommandExecuted((commandInfo) => {
			var _threadComment$getRan9, _threadComment$getRan10;
			if (commandInfo.id !== _univerjs_thread_comment.DeleteCommentCommand.id && commandInfo.id !== _univerjs_thread_comment.DeleteCommentTreeCommand.id) return;
			const params = commandInfo.params;
			const target = this.getSheetCommandTarget(params);
			if (!target) return;
			const { workbook, worksheet } = target;
			const { commentId } = params;
			const threadComment = worksheet.getCommentById(commentId);
			if (!threadComment) return;
			const eventParams = {
				workbook,
				worksheet,
				row: ((_threadComment$getRan9 = threadComment.getRange()) === null || _threadComment$getRan9 === void 0 ? void 0 : _threadComment$getRan9.getRow()) ?? 0,
				col: ((_threadComment$getRan10 = threadComment.getRange()) === null || _threadComment$getRan10 === void 0 ? void 0 : _threadComment$getRan10.getColumn()) ?? 0,
				comment: threadComment
			};
			this.fireEvent(this.Event.BeforeCommentDelete, eventParams);
			if (eventParams.cancel) throw new _univerjs_core.CanceledError();
		})));
		this.disposeWithMe(this.registerEventHandler(this.Event.BeforeCommentResolve, () => commandService.beforeCommandExecuted((commandInfo) => {
			if (commandInfo.id !== _univerjs_thread_comment.ResolveCommentCommand.id) return;
			const params = commandInfo.params;
			const target = this.getSheetCommandTarget(params);
			if (!target) return;
			const { workbook, worksheet } = target;
			const { commentId, resolved } = params;
			const threadComment = worksheet.getCommentById(commentId);
			if (!threadComment) return;
			const eventParams = {
				workbook,
				worksheet,
				row: threadComment.getRange().getRow() ?? 0,
				col: threadComment.getRange().getColumn() ?? 0,
				comment: threadComment,
				resolved
			};
			this.fireEvent(this.Event.BeforeCommentResolve, eventParams);
			if (eventParams.cancel) throw new _univerjs_core.CanceledError();
		})));
	}
	/**
	* @ignore
	* @returns {FTheadCommentBuilder} The thread comment builder.
	*/
	newTheadComment(comment) {
		return new FTheadCommentBuilder(comment);
	}
};
_univerjs_core_facade.FUniver.extend(FUniverSheetsThreadCommentMixin);

//#endregion
Object.defineProperty(exports, 'FThreadComment', {
  enumerable: true,
  get: function () {
    return FThreadComment;
  }
});