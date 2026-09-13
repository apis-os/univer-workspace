Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_core = require("@univerjs/core");
let _univerjs_thread_comment = require("@univerjs/thread-comment");
let _univerjs_docs = require("@univerjs/docs");

//#region src/common/const.ts
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
/** Stable subunit used by document text comments. */
const DEFAULT_DOC_SUBUNIT_ID = "default_doc";
const DOCS_THREAD_COMMENT_PLUGIN_NAME = "DOC_THREAD_COMMENT_PLUGIN";

//#endregion
//#region src/commands/commands/create-doc-text-range-comment.command.ts
/** Applies document comment decoration actions without render or selection services. */
const AddDocCommentDecorationMutation = {
	id: "docs-thread-comment.mutation.add-decoration",
	type: _univerjs_core.CommandType.MUTATION,
	handler(accessor, params) {
		if (!params || _univerjs_core.JSONX.isNoop(params.actions)) return false;
		const document = accessor.get(_univerjs_core.IUniverInstanceService).getUnit(params.unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
		if (!document) return false;
		const undoActions = _univerjs_core.JSONX.invertWithDoc(params.actions, document.getSnapshot());
		document.apply(params.actions);
		return {
			...params,
			actions: undoActions
		};
	}
};
function getValidRange(accessor, unitId, range) {
	var _document$getSelfOrHe;
	const { startOffset, endOffset } = range;
	if (!Number.isInteger(startOffset) || !Number.isInteger(endOffset) || startOffset < 0 || endOffset <= startOffset) return null;
	const document = accessor.get(_univerjs_core.IUniverInstanceService).getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
	const body = document === null || document === void 0 || (_document$getSelfOrHe = document.getSelfOrHeaderFooterModel(range.segmentId)) === null || _document$getSelfOrHe === void 0 ? void 0 : _document$getSelfOrHe.getBody();
	if (!body || endOffset > body.dataStream.length) return null;
	return {
		...range,
		startOffset,
		endOffset,
		collapsed: false
	};
}
/** Builds the model mutations shared by headless and UI document comment commands. */
async function prepareDocTextRangeComment(accessor, params) {
	const range = getValidRange(accessor, params.unitId, params.range);
	if (!range) return null;
	const savedComment = await accessor.get(_univerjs_thread_comment.IThreadCommentDataSourceService).addComment(params.comment);
	const comment = {
		...params.comment,
		...savedComment,
		unitId: params.unitId,
		subUnitId: DEFAULT_DOC_SUBUNIT_ID,
		startOffset: range.startOffset,
		endOffset: range.endOffset,
		segmentId: range.segmentId,
		collapsed: false
	};
	const textX = _univerjs_core.BuildTextUtils.customDecoration.add({
		ranges: [range],
		id: comment.id,
		type: _univerjs_core.CustomDecorationType.COMMENT
	});
	const decorationMutationParams = {
		unitId: params.unitId,
		actions: _univerjs_core.JSONX.getInstance().editOp(textX.serialize()),
		segmentId: range.segmentId
	};
	return {
		comment,
		commentMutation: {
			id: _univerjs_thread_comment.AddCommentMutation.id,
			params: {
				unitId: params.unitId,
				subUnitId: DEFAULT_DOC_SUBUNIT_ID,
				comment
			}
		},
		decorationMutationParams
	};
}
/**
* Creates a root comment and document decoration for an explicit text range.
* This model command is safe to execute without loading document UI packages.
*/
const CreateDocTextRangeCommentCommand = {
	id: "docs.command.create-text-range-comment",
	type: _univerjs_core.CommandType.COMMAND,
	async handler(accessor, params) {
		var _document$getSelfOrHe2;
		if (!params) return false;
		const range = getValidRange(accessor, params.unitId, params.range);
		if (!range) return false;
		const document = accessor.get(_univerjs_core.IUniverInstanceService).getUnit(params.unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
		const body = document === null || document === void 0 || (_document$getSelfOrHe2 = document.getSelfOrHeaderFooterModel(range.segmentId)) === null || _document$getSelfOrHe2 === void 0 ? void 0 : _document$getSelfOrHe2.getBody();
		if (!body) return false;
		const id = params.id ?? (0, _univerjs_core.generateRandomId)();
		const comment = {
			id,
			threadId: params.threadId ?? id,
			unitId: params.unitId,
			subUnitId: DEFAULT_DOC_SUBUNIT_ID,
			ref: _univerjs_core.BuildTextUtils.transform.getPlainText(body.dataStream.slice(range.startOffset, range.endOffset)),
			text: (0, _univerjs_thread_comment.normalizeThreadCommentContent)(params.content),
			attachments: params.attachments ?? [],
			dT: (0, _univerjs_thread_comment.getDT)(params.dateTime),
			personId: params.personId ?? accessor.get(_univerjs_core.UserManagerService).getCurrentUser().userID,
			startOffset: range.startOffset,
			endOffset: range.endOffset,
			segmentId: range.segmentId,
			collapsed: false
		};
		const prepared = await prepareDocTextRangeComment(accessor, {
			unitId: params.unitId,
			range,
			comment
		});
		if (!prepared) return false;
		return (await (0, _univerjs_core.sequenceExecute)([prepared.commentMutation, {
			id: AddDocCommentDecorationMutation.id,
			params: prepared.decorationMutationParams
		}], accessor.get(_univerjs_core.ICommandService))).result;
	}
};

//#endregion
//#region package.json
var name = "@univerjs/docs-thread-comment";
var version = "1.0.0-insiders.20260907-70fc579";

//#endregion
//#region src/config/config.ts
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
const DOCS_THREAD_COMMENT_PLUGIN_CONFIG_KEY = "docs-thread-comment.config";
const configSymbol = Symbol(DOCS_THREAD_COMMENT_PLUGIN_CONFIG_KEY);
const defaultPluginConfig = {};

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
//#region src/controllers/docs-thread-comment-resource.controller.ts
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
const DOC_UNIVER_THREAD_COMMENT_PLUGIN = `DOC_${_univerjs_thread_comment.TC_PLUGIN_NAME}`;
let DocsThreadCommentResourceController = class DocsThreadCommentResourceController extends _univerjs_core.Disposable {
	constructor(_resourceManagerService, _threadCommentModel, _threadCommentDataSourceService) {
		super();
		this._resourceManagerService = _resourceManagerService;
		this._threadCommentModel = _threadCommentModel;
		this._threadCommentDataSourceService = _threadCommentDataSourceService;
		this.disposeWithMe(this._resourceManagerService.registerPluginResource((0, _univerjs_thread_comment.createThreadCommentResourceHook)(this._threadCommentModel, this._threadCommentDataSourceService, DOC_UNIVER_THREAD_COMMENT_PLUGIN, [_univerjs_core.UniverInstanceType.UNIVER_DOC])));
	}
};
DocsThreadCommentResourceController = __decorate([
	__decorateParam(0, _univerjs_core.IResourceManagerService),
	__decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_thread_comment.ThreadCommentModel)),
	__decorateParam(2, _univerjs_thread_comment.IThreadCommentDataSourceService)
], DocsThreadCommentResourceController);

//#endregion
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
//#region src/plugin.ts
let UniverDocsThreadCommentPlugin = class UniverDocsThreadCommentPlugin extends _univerjs_core.Plugin {
	constructor(_config = defaultPluginConfig, _injector, _configService, _commandService) {
		super();
		this._config = _config;
		this._injector = _injector;
		this._configService = _configService;
		this._commandService = _commandService;
		const { ...rest } = (0, _univerjs_core.merge)({}, defaultPluginConfig, this._config);
		this._configService.setConfig(DOCS_THREAD_COMMENT_PLUGIN_CONFIG_KEY, rest);
	}
	onStarting() {
		this._injector.add([DocsThreadCommentResourceController]);
		this._injector.get(DocsThreadCommentResourceController);
		this.disposeWithMe(this._commandService.registerCommand(CreateDocTextRangeCommentCommand));
		this.disposeWithMe(this._commandService.registerCommand(AddDocCommentDecorationMutation));
	}
};
_defineProperty(UniverDocsThreadCommentPlugin, "pluginName", DOCS_THREAD_COMMENT_PLUGIN_NAME);
_defineProperty(UniverDocsThreadCommentPlugin, "packageName", name);
_defineProperty(UniverDocsThreadCommentPlugin, "version", version);
_defineProperty(UniverDocsThreadCommentPlugin, "type", _univerjs_core.UniverInstanceType.UNIVER_DOC);
UniverDocsThreadCommentPlugin = __decorate([
	(0, _univerjs_core.DependentOn)(_univerjs_docs.UniverDocsPlugin, _univerjs_thread_comment.UniverThreadCommentPlugin),
	__decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_core.Injector)),
	__decorateParam(2, _univerjs_core.IConfigService),
	__decorateParam(3, _univerjs_core.ICommandService)
], UniverDocsThreadCommentPlugin);

//#endregion
exports.AddDocCommentDecorationMutation = AddDocCommentDecorationMutation;
exports.CreateDocTextRangeCommentCommand = CreateDocTextRangeCommentCommand;
exports.DEFAULT_DOC_SUBUNIT_ID = DEFAULT_DOC_SUBUNIT_ID;
Object.defineProperty(exports, 'UniverDocsThreadCommentPlugin', {
  enumerable: true,
  get: function () {
    return UniverDocsThreadCommentPlugin;
  }
});
exports.prepareDocTextRangeComment = prepareDocTextRangeComment;