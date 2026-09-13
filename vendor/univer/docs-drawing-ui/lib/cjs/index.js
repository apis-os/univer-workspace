Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
let _univerjs_core = require("@univerjs/core");
let _univerjs_docs_drawing = require("@univerjs/docs-drawing");
let _univerjs_engine_render = require("@univerjs/engine-render");
let _univerjs_design = require("@univerjs/design");
let _univerjs_docs = require("@univerjs/docs");
let _univerjs_docs_ui = require("@univerjs/docs-ui");
let _univerjs_drawing = require("@univerjs/drawing");
let _univerjs_ui = require("@univerjs/ui");
let rxjs = require("rxjs");
let _univerjs_drawing_ui = require("@univerjs/drawing-ui");
let react = require("react");
let react_jsx_runtime = require("react/jsx-runtime");

//#region src/commands/commands/delete-doc-drawing.command.ts
const DeleteDocDrawingsCommand = {
	id: "doc.command.delete-drawing",
	type: _univerjs_core.CommandType.COMMAND,
	handler: (accessor) => {
		const commandService = accessor.get(_univerjs_core.ICommandService);
		const drawings = accessor.get(_univerjs_docs_drawing.IDocDrawingService).getFocusDrawings();
		if (drawings.length === 0) return false;
		const { unitId } = drawings[0];
		const newDrawings = drawings.map((drawing) => {
			const { unitId, subUnitId, drawingId, drawingType } = drawing;
			return {
				unitId,
				subUnitId,
				drawingId,
				drawingType
			};
		});
		return commandService.executeCommand(_univerjs_docs_drawing.RemoveDocDrawingCommand.id, {
			unitId,
			drawings: newDrawings
		});
	}
};

//#endregion
//#region src/commands/commands/group-doc-drawing.command.ts
/**
* The command to insert new defined name
*/
const GroupDocDrawingCommand = {
	id: "doc.command.group-doc-image",
	type: _univerjs_core.CommandType.COMMAND,
	handler: (accessor, params) => {
		return false;
	}
};

//#endregion
//#region src/commands/commands/ungroup-doc-drawing.command.ts
/**
* The command to insert new defined name
*/
const UngroupDocDrawingCommand = {
	id: "doc.command.ungroup-doc-image",
	type: _univerjs_core.CommandType.COMMAND,
	handler: (accessor, params) => {
		const docDrawingService = accessor.get(_univerjs_docs_drawing.IDocDrawingService);
		if (!params) return false;
		const unitIds = [];
		params.forEach(({ parent, children }) => {
			unitIds.push(parent.unitId);
			children.forEach((child) => {
				unitIds.push(child.unitId);
			});
		});
		const { unitId, subUnitId, undo, redo, objects } = docDrawingService.getUngroupDrawingOp(params);
		return false;
	}
};

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
//#region src/services/doc-refresh-drawings.service.ts
var DocRefreshDrawingsService = class {
	constructor() {
		_defineProperty(this, "_refreshDrawings$", new rxjs.BehaviorSubject(null));
		_defineProperty(this, "refreshDrawings$", this._refreshDrawings$.asObservable());
	}
	refreshDrawings(skeleton) {
		this._refreshDrawings$.next(skeleton);
	}
};

//#endregion
//#region src/controllers/render-controllers/doc-drawing-mutation.ts
/**
* Returns the drawing ids that can be refreshed independently. `null` means
* the mutation is drawing-related but needs a conservative full refresh.
*/
function getDocMutationAffectedDrawingIds(actions) {
	if (!Array.isArray(actions) || actions.length === 0) return null;
	const drawingIds = /* @__PURE__ */ new Set();
	let sawComponent = false;
	let needsFullRefresh = false;
	try {
		const cursor = _univerjs_core.JSON1.type.readCursor(actions);
		cursor.traverse(null, () => {
			sawComponent = true;
			const path = cursor.getPath();
			const root = String(path[0]);
			if (root === "drawings") {
				const drawingId = path[1];
				if (typeof drawingId === "string" && drawingId.length > 0) drawingIds.add(drawingId);
				else needsFullRefresh = true;
			} else if (root === "drawingsOrder" || path.includes("customBlocks")) needsFullRefresh = true;
		});
	} catch {
		return null;
	}
	return !sawComponent || needsFullRefresh ? null : drawingIds;
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
//#region src/controllers/render-controllers/doc-drawing-update.render-controller.ts
let DocDrawingUpdateRenderController = class DocDrawingUpdateRenderController extends _univerjs_core.Disposable {
	constructor(_context, _commandService, _docSelectionManagerService, _renderManagerSrv, _imageIoService, _docDrawingService, _drawingManagerService, _permissionService, _contextService, _messageService, _localeService, _docSelectionRenderService, _docRefreshDrawingsService, _fileOpenerService) {
		super();
		this._context = _context;
		this._commandService = _commandService;
		this._docSelectionManagerService = _docSelectionManagerService;
		this._renderManagerSrv = _renderManagerSrv;
		this._imageIoService = _imageIoService;
		this._docDrawingService = _docDrawingService;
		this._drawingManagerService = _drawingManagerService;
		this._permissionService = _permissionService;
		this._contextService = _contextService;
		this._messageService = _messageService;
		this._localeService = _localeService;
		this._docSelectionRenderService = _docSelectionRenderService;
		this._docRefreshDrawingsService = _docRefreshDrawingsService;
		this._fileOpenerService = _fileOpenerService;
		_defineProperty(this, "_editableTransformerConfigs", /* @__PURE__ */ new WeakMap());
		_defineProperty(this, "_editableEventedStates", /* @__PURE__ */ new WeakMap());
		_defineProperty(this, "_editStatusUpdateScheduled", false);
		_defineProperty(this, "_pendingEditStatusDrawingIds", void 0);
		_defineProperty(this, "_lastEditStatusContextKey", null);
		this._updateOrderListener();
		this._updateImageCropListener();
		this._groupDrawingListener();
		this._focusDrawingListener();
		this._transformDrawingListener();
		this._editAreaChangeListener();
		const scheduleEditStatusUpdate = (drawings) => {
			const relevantDrawings = drawings.filter((drawing) => {
				var _this$_context;
				return drawing.unitId === ((_this$_context = this._context) === null || _this$_context === void 0 ? void 0 : _this$_context.unitId);
			});
			if (relevantDrawings.length > 0) {
				const drawingIds = relevantDrawings.map((drawing) => drawing.drawingId).filter((drawingId) => typeof drawingId === "string" && drawingId.length > 0);
				this._scheduleDrawingsEditStatusUpdate(drawingIds.length === relevantDrawings.length ? new Set(drawingIds) : void 0);
			}
		};
		this.disposeWithMe(this._drawingManagerService.add$.subscribe(scheduleEditStatusUpdate));
		this.disposeWithMe(this._drawingManagerService.update$.subscribe(scheduleEditStatusUpdate));
		this.disposeWithMe(this._permissionService.permissionPointUpdate$.subscribe(() => {
			this._updateDrawingsEditStatus(void 0, true);
		}));
	}
	dispose() {
		super.dispose();
		delete this._context;
	}
	async insertDocImage() {
		const insertPosition = this._getCurrentImageInsertPosition();
		const textRange = this._getCurrentImageInsertTextRange();
		if (!this._canInsertDocImage(textRange)) return false;
		const files = await this._fileOpenerService.openFile({
			multiple: true,
			accept: _univerjs_drawing.DRAWING_IMAGE_ALLOW_IMAGE_LIST.map((image) => `.${image.replace("image/", "")}`).join(",")
		});
		if (this._disposed || !this._canInsertDocImage(textRange)) return false;
		const fileLength = files.length;
		if (fileLength > _univerjs_drawing.DRAWING_IMAGE_COUNT_LIMIT) {
			this._messageService.show({
				type: _univerjs_design.MessageType.Error,
				content: this._localeService.t("docs-drawing-ui.update-status.exceedMaxCount", String(_univerjs_drawing.DRAWING_IMAGE_COUNT_LIMIT))
			});
			return false;
		} else if (fileLength === 0) return false;
		return await this._insertFloatImages(files, insertPosition, textRange);
	}
	async _insertFloatImages(files, insertPosition, textRange) {
		let imageParams = [];
		try {
			imageParams = await Promise.all(files.map((file) => this._imageIoService.saveImage(file)));
		} catch (error) {
			const type = error.message;
			let content = "";
			switch (type) {
				case _univerjs_core.ImageUploadStatusType.ERROR_EXCEED_SIZE:
					content = this._localeService.t("docs-drawing-ui.update-status.exceedMaxSize", String((0, _univerjs_drawing.getDrawingImageAllowSize)() / (1024 * 1024)));
					break;
				case _univerjs_core.ImageUploadStatusType.ERROR_IMAGE_TYPE:
					content = this._localeService.t("docs-drawing-ui.update-status.invalidImageType");
					break;
				case _univerjs_core.ImageUploadStatusType.ERROR_IMAGE:
					content = this._localeService.t("docs-drawing-ui.update-status.invalidImage");
					break;
				default: break;
			}
			this._messageService.show({
				type: _univerjs_design.MessageType.Error,
				content
			});
		}
		if (this._disposed || imageParams.length === 0 || !this._canInsertDocImage(textRange)) return false;
		const { unitId } = this._context;
		const docDrawingParams = [];
		for (const imageParam of imageParams) {
			if (imageParam == null) continue;
			const { imageId, imageSourceType, source, base64Cache } = imageParam;
			const { width, height, image } = await (0, _univerjs_drawing.getImageSize)(base64Cache || "");
			if (this._disposed || !this._canInsertDocImage(textRange)) return false;
			this._imageIoService.addImageSourceCache(imageId, imageSourceType, image);
			let scale = 1;
			if (width > _univerjs_drawing.DRAWING_IMAGE_WIDTH_LIMIT || height > _univerjs_drawing.DRAWING_IMAGE_HEIGHT_LIMIT) {
				const scaleWidth = _univerjs_drawing.DRAWING_IMAGE_WIDTH_LIMIT / width;
				const scaleHeight = _univerjs_drawing.DRAWING_IMAGE_HEIGHT_LIMIT / height;
				scale = Math.min(scaleWidth, scaleHeight);
			}
			const imagePosition = insertPosition ?? this._getCurrentImageInsertPosition();
			const docTransform = this._getImagePosition(width * scale, height * scale, imagePosition);
			if (docTransform == null) return false;
			const transform = (0, _univerjs_docs.docDrawingPositionToTransform)(docTransform);
			if (transform != null && imagePosition != null) transform.top = imagePosition.top;
			const docDrawingParam = {
				unitId,
				subUnitId: unitId,
				drawingId: imageId,
				drawingType: _univerjs_core.DrawingTypeEnum.DRAWING_IMAGE,
				imageSourceType,
				source,
				transform,
				docTransform,
				behindDoc: _univerjs_core.BooleanNumber.FALSE,
				title: "",
				description: "",
				layoutType: _univerjs_core.PositionedObjectLayoutType.INLINE,
				wrapText: _univerjs_core.WrapTextType.BOTH_SIDES,
				distB: 0,
				distL: 0,
				distR: 0,
				distT: 0
			};
			if (this._isInsertInHeaderFooter()) {
				docDrawingParam.isMultiTransform = _univerjs_core.BooleanNumber.TRUE;
				docDrawingParam.transforms = docDrawingParam.transform ? [docDrawingParam.transform] : null;
			}
			docDrawingParams.push(docDrawingParam);
		}
		return await this._commandService.executeCommand(_univerjs_docs_drawing.InsertDocDrawingCommand.id, {
			unitId,
			drawings: docDrawingParams,
			textRange: textRange ?? void 0
		});
	}
	_isInsertInHeaderFooter() {
		var _this$_renderManagerS;
		const { unitId } = this._context;
		const viewModel = (_this$_renderManagerS = this._renderManagerSrv.getRenderUnitById(unitId)) === null || _this$_renderManagerS === void 0 ? void 0 : _this$_renderManagerS.with(_univerjs_docs.DocSkeletonManagerService).getViewModel();
		const editArea = viewModel === null || viewModel === void 0 ? void 0 : viewModel.getEditArea();
		return editArea === _univerjs_engine_render.DocumentEditArea.HEADER || editArea === _univerjs_engine_render.DocumentEditArea.FOOTER;
	}
	_getImagePosition(imageWidth, imageHeight, insertPosition) {
		return (0, _univerjs_docs.buildDocTransform)(imageWidth, imageHeight, { left: (insertPosition ?? this._getCurrentImageInsertPosition() ?? {
			left: 0,
			top: 0
		}).left });
	}
	_getCurrentImageInsertPosition() {
		var _this$_docSelectionRe;
		const position = (_this$_docSelectionRe = this._docSelectionRenderService.getActiveTextRange()) === null || _this$_docSelectionRe === void 0 ? void 0 : _this$_docSelectionRe.getAbsolutePosition();
		if (position == null) return null;
		return {
			left: position.left,
			top: position.top
		};
	}
	_getCurrentImageInsertTextRange() {
		return this._docSelectionRenderService.getAllTextRanges().find((range) => range.isActive) ?? this._docSelectionManagerService.getActiveTextRange();
	}
	_updateOrderListener() {
		this.disposeWithMe(this._drawingManagerService.featurePluginOrderUpdate$.subscribe((params) => {
			const { unitId, subUnitId, drawingIds, arrangeType } = params;
			this._commandService.executeCommand(_univerjs_docs_drawing.SetDocDrawingArrangeCommand.id, {
				unitId,
				subUnitId,
				drawingIds,
				arrangeType
			});
		}));
	}
	_updateImageCropListener() {
		this.disposeWithMe(this._drawingManagerService.featurePluginUpdate$.subscribe((params) => {
			const drawings = params.flatMap((param) => this._getImageCropUpdates(param));
			if (drawings.length > 0) {
				const { unitId } = this._context;
				this._commandService.executeCommand(_univerjs_docs_drawing.UpdateDrawingDocTransformCommand.id, {
					unitId,
					subUnitId: unitId,
					drawings
				});
			}
		}));
	}
	_getImageCropUpdates(param) {
		const { unitId, subUnitId, drawingId, transform } = param;
		if ([unitId, subUnitId].some((id) => id !== this._context.unitId)) return [];
		if (transform == null || !Object.prototype.hasOwnProperty.call(param, "srcRect")) return [];
		const docDrawing = this._getDocDrawing(drawingId);
		const renderDrawing = this._drawingManagerService.getDrawingByParam({
			unitId,
			subUnitId,
			drawingId
		});
		if ((docDrawing === null || docDrawing === void 0 ? void 0 : docDrawing.drawingType) !== _univerjs_core.DrawingTypeEnum.DRAWING_IMAGE || (renderDrawing === null || renderDrawing === void 0 ? void 0 : renderDrawing.transform) == null) return [];
		const nextTransform = {
			...renderDrawing.transform,
			...transform
		};
		const drawings = [{
			drawingId,
			key: "srcRect",
			value: param.srcRect
		}];
		if (nextTransform.width != null && nextTransform.height != null) drawings.push({
			drawingId,
			key: "size",
			value: {
				width: nextTransform.width,
				height: nextTransform.height
			}
		});
		if (docDrawing.layoutType === _univerjs_core.PositionedObjectLayoutType.INLINE || renderDrawing.isMultiTransform === _univerjs_core.BooleanNumber.TRUE) return drawings;
		const horizontalDelta = (nextTransform.left ?? 0) - (renderDrawing.transform.left ?? 0);
		const verticalDelta = (nextTransform.top ?? 0) - (renderDrawing.transform.top ?? 0);
		const { positionH, positionV } = docDrawing.docTransform;
		if (horizontalDelta !== 0 && positionH.posOffset != null) drawings.push({
			drawingId,
			key: "positionH",
			value: {
				relativeFrom: positionH.relativeFrom,
				posOffset: positionH.posOffset + horizontalDelta
			}
		});
		if (verticalDelta !== 0 && positionV.posOffset != null) drawings.push({
			drawingId,
			key: "positionV",
			value: {
				relativeFrom: positionV.relativeFrom,
				posOffset: positionV.posOffset + verticalDelta
			}
		});
		return drawings;
	}
	_getDocDrawing(drawingId) {
		var _this$_context$unit$g;
		return (_this$_context$unit$g = this._context.unit.getDrawings()) === null || _this$_context$unit$g === void 0 ? void 0 : _this$_context$unit$g[drawingId];
	}
	_groupDrawingListener() {
		this.disposeWithMe(this._drawingManagerService.featurePluginGroupUpdate$.subscribe((params) => {
			this._commandService.executeCommand(GroupDocDrawingCommand.id, params);
		}));
		this.disposeWithMe(this._drawingManagerService.featurePluginUngroupUpdate$.subscribe((params) => {
			this._commandService.executeCommand(UngroupDocDrawingCommand.id, params);
		}));
	}
	_getCurrentSceneAndTransformer() {
		const { scene, mainComponent } = this._context;
		if (scene == null || mainComponent == null) return;
		const transformer = scene.getTransformerByCreate();
		const { docsLeft, docsTop } = mainComponent.getOffsetConfig();
		return {
			scene,
			transformer,
			docsLeft,
			docsTop
		};
	}
	_transformDrawingListener() {
		const res = this._getCurrentSceneAndTransformer();
		if (res && res.transformer) this.disposeWithMe(res.transformer.changeEnd$.pipe((0, rxjs.debounceTime)(30)).subscribe(() => {
			this._docSelectionManagerService.refreshSelection();
		}));
		else throw new Error("transformer is not init");
	}
	_focusDrawingListener() {
		this.disposeWithMe(this._drawingManagerService.focus$.subscribe((params) => {
			const { transformer, docsLeft, docsTop } = this._getCurrentSceneAndTransformer() ?? {};
			if (params == null || params.length === 0) {
				this._contextService.setContextValue(_univerjs_core.FOCUSING_COMMON_DRAWINGS, false);
				this._docDrawingService.focusDrawing([]);
				if (transformer) transformer.resetProps({
					zeroTop: 0,
					zeroLeft: 0
				});
			} else {
				this._contextService.setContextValue(_univerjs_core.FOCUSING_COMMON_DRAWINGS, true);
				this._docDrawingService.focusDrawing(params);
				this._setDrawingSelections(params);
				const prevSegmentId = this._docSelectionRenderService.getSegment();
				const segmentId = (0, _univerjs_docs.getDocumentDrawingSegmentId)(this._context.unit, params[0].drawingId);
				if (prevSegmentId !== segmentId) this._docSelectionRenderService.setSegment(segmentId);
				if (transformer) transformer.resetProps({
					zeroTop: docsTop,
					zeroLeft: docsLeft
				});
			}
			this._updateDrawingsEditStatus();
		}));
	}
	_updateDrawingsEditStatus(drawingIds, force = false) {
		var _this$_renderManagerS2;
		if (!this._context) return;
		const { unit: docDataModel, scene, unitId } = this._context;
		const viewModel = (_this$_renderManagerS2 = this._renderManagerSrv.getRenderUnitById(unitId)) === null || _this$_renderManagerS2 === void 0 ? void 0 : _this$_renderManagerS2.with(_univerjs_docs.DocSkeletonManagerService).getViewModel();
		if (viewModel == null || docDataModel == null) return;
		const { drawings = {} } = docDataModel.getSnapshot();
		const isEditBody = viewModel.getEditArea() === _univerjs_engine_render.DocumentEditArea.BODY;
		const isDocInteractionFocusing = this._docSelectionRenderService.isFocusing || this._drawingManagerService.getFocusDrawings().some((drawing) => drawing.unitId === unitId);
		const contextKey = `${viewModel.getEditArea()}:${isDocInteractionFocusing}`;
		const effectiveDrawingIds = drawingIds != null && contextKey === this._lastEditStatusContextKey ? drawingIds : void 0;
		if (effectiveDrawingIds == null) {
			if (!force && contextKey === this._lastEditStatusContextKey) return;
			this._lastEditStatusContextKey = contextKey;
		}
		const readOnlyDrawingIds = /* @__PURE__ */ new Set();
		const drawingShapesById = this._indexDrawingShapes(scene.getAllObjects(), unitId);
		for (const key of Object.keys(drawings)) {
			const drawing = drawings[key];
			if (effectiveDrawingIds != null && !effectiveDrawingIds.has(drawing.drawingId)) continue;
			const segmentId = (0, _univerjs_docs.getDocumentDrawingSegmentId)(docDataModel, drawing.drawingId);
			const editable = (0, _univerjs_docs.canEditDocumentTargets)(this._permissionService, unitId, [...(0, _univerjs_docs.getDocumentEntityParentPermissionObjectIds)(docDataModel, segmentId, "drawing", drawing.drawingId), (0, _univerjs_docs.getDocumentEntityPermissionObjectId)(segmentId, "drawing", drawing.drawingId)]);
			this._recordReadOnlyDrawing(readOnlyDrawingIds, drawing.drawingId, editable);
			const drawingShapes = drawingShapesById.get(drawing.drawingId) ?? [];
			if (drawingShapes.length) for (const shape of drawingShapes) {
				scene.detachTransformerFrom(shape);
				this._setTransformerEditable(shape, editable);
				try {
					shape.setOpacity(isDocInteractionFocusing ? .5 : 1);
				} catch {}
				if (!isDocInteractionFocusing) continue;
				if (isEditBody && drawing.isMultiTransform !== _univerjs_core.BooleanNumber.TRUE || !isEditBody && drawing.isMultiTransform === _univerjs_core.BooleanNumber.TRUE) {
					this._attachTransformerIfEditable(shape, editable, drawing.allowTransform);
					try {
						shape.setOpacity(1);
					} catch {}
				}
			}
		}
		this._clearReadOnlyDrawingFocus(unitId, readOnlyDrawingIds);
	}
	_indexDrawingShapes(shapes, unitId) {
		const prefix = (0, _univerjs_drawing.getDrawingShapeKeyByDrawingSearch)({
			unitId,
			subUnitId: unitId,
			drawingId: ""
		});
		const result = /* @__PURE__ */ new Map();
		for (const shape of shapes) {
			if (!shape.oKey.startsWith(prefix)) continue;
			const drawingId = shape.oKey.slice(prefix.length).split("#-#", 1)[0];
			if (!drawingId) continue;
			const drawingShapes = result.get(drawingId) ?? [];
			drawingShapes.push(shape);
			result.set(drawingId, drawingShapes);
		}
		return result;
	}
	_recordReadOnlyDrawing(readOnlyDrawingIds, drawingId, editable) {
		if (!editable) readOnlyDrawingIds.add(drawingId);
	}
	_attachTransformerIfEditable(shape, editable, allowTransform) {
		if (editable && allowTransform !== false) this._context.scene.attachTransformerTo(shape);
	}
	_clearReadOnlyDrawingFocus(unitId, readOnlyDrawingIds) {
		if (readOnlyDrawingIds.size === 0) return;
		const focusedDrawings = this._drawingManagerService.getFocusDrawings();
		const editableFocus = focusedDrawings.filter((drawing) => drawing.unitId !== unitId || !readOnlyDrawingIds.has(drawing.drawingId));
		if (editableFocus.length !== focusedDrawings.length) this._drawingManagerService.focusDrawing(editableFocus);
	}
	_setTransformerEditable(shape, editable) {
		var _this$_context$scene$;
		if (editable) {
			const config = this._editableTransformerConfigs.get(shape);
			if (config) {
				shape.transformerConfig = config;
				this._editableTransformerConfigs.delete(shape);
			}
			const evented = this._editableEventedStates.get(shape);
			if (evented !== void 0) {
				shape.evented = evented;
				this._editableEventedStates.delete(shape);
			}
			return;
		}
		if (!this._editableTransformerConfigs.has(shape)) this._editableTransformerConfigs.set(shape, shape.transformerConfig);
		if (!this._editableEventedStates.has(shape)) this._editableEventedStates.set(shape, shape.evented);
		shape.evented = false;
		(_this$_context$scene$ = this._context.scene.getTransformer()) === null || _this$_context$scene$ === void 0 || _this$_context$scene$.clearControlByIds([shape.oKey]);
		shape.transformerConfig = {
			...shape.transformerConfig,
			moveEnabled: false,
			resizeEnabled: false,
			rotateEnabled: false
		};
	}
	_scheduleDrawingsEditStatusUpdate(drawingIds) {
		if (drawingIds == null) {
			this._pendingEditStatusDrawingIds = null;
			this._lastEditStatusContextKey = null;
		} else if (this._pendingEditStatusDrawingIds !== null) {
			this._pendingEditStatusDrawingIds ??= /* @__PURE__ */ new Set();
			drawingIds.forEach((drawingId) => {
				var _this$_pendingEditSta;
				return (_this$_pendingEditSta = this._pendingEditStatusDrawingIds) === null || _this$_pendingEditSta === void 0 ? void 0 : _this$_pendingEditSta.add(drawingId);
			});
		}
		if (this._editStatusUpdateScheduled) return;
		this._editStatusUpdateScheduled = true;
		queueMicrotask(() => {
			this._editStatusUpdateScheduled = false;
			if (!this._disposed) {
				const pendingDrawingIds = this._pendingEditStatusDrawingIds;
				this._pendingEditStatusDrawingIds = void 0;
				this._updateDrawingsEditStatus(pendingDrawingIds ?? void 0);
			}
		});
	}
	_canInsertDocImage(textRange) {
		const { unit, unitId } = this._context;
		const objectIds = (textRange === null || textRange === void 0 ? void 0 : textRange.startOffset) == null || textRange.endOffset == null ? [] : (0, _univerjs_docs.getDocumentEditTargetObjectIds)(unit, textRange.segmentId ?? "", textRange);
		return (0, _univerjs_docs.canEditDocumentTargets)(this._permissionService, unitId, objectIds);
	}
	_editAreaChangeListener() {
		var _this$_renderManagerS3;
		const { unitId } = this._context;
		const viewModel = (_this$_renderManagerS3 = this._renderManagerSrv.getRenderUnitById(unitId)) === null || _this$_renderManagerS3 === void 0 ? void 0 : _this$_renderManagerS3.with(_univerjs_docs.DocSkeletonManagerService).getViewModel();
		if (viewModel == null) return;
		this._updateDrawingsEditStatus();
		this.disposeWithMe(viewModel.editAreaChange$.subscribe(() => {
			this._updateDrawingsEditStatus();
		}));
		this.disposeWithMe(this._docSelectionRenderService.onFocus$.subscribe(() => {
			this._updateDrawingsEditStatus();
		}));
		this.disposeWithMe(this._docSelectionRenderService.onBlur$.subscribe(() => {
			this._updateDrawingsEditStatus();
		}));
		this.disposeWithMe(this._docRefreshDrawingsService.refreshDrawings$.subscribe((skeleton) => {
			if (skeleton == null) return;
			queueMicrotask(() => {
				this._updateDrawingsEditStatus(void 0, true);
			});
		}));
		this.disposeWithMe(this._commandService.onCommandExecuted(async (command) => {
			if (command.id !== _univerjs_docs.RichTextEditingMutation.id) return;
			const params = command.params;
			if ((params === null || params === void 0 ? void 0 : params.unitId) && params.unitId !== this._context.unitId) return;
			const drawingIds = getDocMutationAffectedDrawingIds((params === null || params === void 0 ? void 0 : params.actions) ?? null);
			if ((drawingIds === null || drawingIds === void 0 ? void 0 : drawingIds.size) === 0) return;
			this._scheduleDrawingsEditStatusUpdate(drawingIds ?? void 0);
		}));
	}
	_setDrawingSelections(params) {
		var _unit$getSnapshot$bod;
		const { unit } = this._context;
		const customBlocks = ((_unit$getSnapshot$bod = unit.getSnapshot().body) === null || _unit$getSnapshot$bod === void 0 ? void 0 : _unit$getSnapshot$bod.customBlocks) ?? [];
		const ranges = params.map((item) => {
			const id = item.drawingId;
			const block = customBlocks.find((b) => b.blockId === id);
			if (block) return block.startIndex;
			return null;
		}).filter((e) => e !== null).map((offset) => ({
			startOffset: offset,
			endOffset: offset + 1
		}));
		this._docSelectionManagerService.replaceDocRanges(ranges);
	}
};
DocDrawingUpdateRenderController = __decorate([
	__decorateParam(1, _univerjs_core.ICommandService),
	__decorateParam(2, (0, _univerjs_core.Inject)(_univerjs_docs.DocSelectionManagerService)),
	__decorateParam(3, _univerjs_engine_render.IRenderManagerService),
	__decorateParam(4, _univerjs_core.IImageIoService),
	__decorateParam(5, _univerjs_docs_drawing.IDocDrawingService),
	__decorateParam(6, _univerjs_drawing.IDrawingManagerService),
	__decorateParam(7, _univerjs_core.IPermissionService),
	__decorateParam(8, _univerjs_core.IContextService),
	__decorateParam(9, _univerjs_ui.IMessageService),
	__decorateParam(10, (0, _univerjs_core.Inject)(_univerjs_core.LocaleService)),
	__decorateParam(11, (0, _univerjs_core.Inject)(_univerjs_docs_ui.DocSelectionRenderService)),
	__decorateParam(12, (0, _univerjs_core.Inject)(DocRefreshDrawingsService)),
	__decorateParam(13, _univerjs_ui.ILocalFileService)
], DocDrawingUpdateRenderController);

//#endregion
//#region src/commands/commands/insert-image.command.ts
const InsertDocImageCommand = {
	id: "doc.command.insert-float-image",
	type: _univerjs_core.CommandType.COMMAND,
	handler: (accessor) => {
		var _getCurrentTypeOfRend;
		const univerInstanceService = accessor.get(_univerjs_core.IUniverInstanceService);
		const renderManagerService = accessor.get(_univerjs_engine_render.IRenderManagerService);
		return ((_getCurrentTypeOfRend = (0, _univerjs_engine_render.getCurrentTypeOfRenderer)(_univerjs_core.UniverInstanceType.UNIVER_DOC, univerInstanceService, renderManagerService)) === null || _getCurrentTypeOfRend === void 0 ? void 0 : _getCurrentTypeOfRend.with(DocDrawingUpdateRenderController).insertDocImage()) ?? false;
	}
};

//#endregion
//#region src/commands/commands/insert-shape.command.ts
const DOC_SHAPE_FILL = "#3A60F7";
const DOC_SHAPE_STROKE = "#1D3EA6";
function createShapeSvgSource(shape, width, height) {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">${shape === "ellipse" ? `<ellipse cx="${width / 2}" cy="${height / 2}" rx="${(width - 8) / 2}" ry="${(height - 8) / 2}" fill="${DOC_SHAPE_FILL}" stroke="${DOC_SHAPE_STROKE}" stroke-width="4" />` : `<rect x="4" y="4" width="${width - 8}" height="${height - 8}" rx="14" fill="${DOC_SHAPE_FILL}" stroke="${DOC_SHAPE_STROKE}" stroke-width="4" />`}</svg>`;
	return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
function createShapeInsertCommand(shape, width, height, id) {
	return {
		id,
		type: _univerjs_core.CommandType.COMMAND,
		handler: async (accessor) => {
			var _univerInstanceServic;
			const commandService = accessor.get(_univerjs_core.ICommandService);
			const unitId = (_univerInstanceServic = accessor.get(_univerjs_core.IUniverInstanceService).getCurrentUnitOfType(_univerjs_core.UniverInstanceType.UNIVER_DOC)) === null || _univerInstanceServic === void 0 ? void 0 : _univerInstanceServic.getUnitId();
			if (!unitId) return false;
			const docTransform = (0, _univerjs_docs.buildDocTransform)(width, height);
			return commandService.executeCommand(_univerjs_docs_drawing.InsertDocDrawingCommand.id, {
				unitId,
				drawings: [{
					unitId,
					subUnitId: unitId,
					drawingId: (0, _univerjs_core.generateRandomId)(6),
					drawingType: _univerjs_core.DrawingTypeEnum.DRAWING_IMAGE,
					imageSourceType: _univerjs_core.ImageSourceType.BASE64,
					source: createShapeSvgSource(shape, width, height),
					transform: (0, _univerjs_docs.docDrawingPositionToTransform)(docTransform),
					docTransform,
					behindDoc: _univerjs_core.BooleanNumber.FALSE,
					title: "",
					description: "",
					layoutType: _univerjs_core.PositionedObjectLayoutType.INLINE,
					wrapText: _univerjs_core.WrapTextType.BOTH_SIDES,
					distB: 0,
					distL: 0,
					distR: 0,
					distT: 0
				}]
			});
		}
	};
}
const InsertDocRectangleShapeCommand = createShapeInsertCommand("rectangle", 144, 96, "doc.command.insert-float-shape.rectangle");
const InsertDocEllipseShapeCommand = createShapeInsertCommand("ellipse", 112, 112, "doc.command.insert-float-shape.ellipse");

//#endregion
//#region src/utils/drawing-anchor-position.ts
function findDrawingAnchorInPage(page, drawingId, pageMarginTop, pageMarginLeft) {
	const skeDrawing = page.skeDrawings.get(drawingId);
	if (skeDrawing) return {
		skeDrawing,
		pageMarginTop,
		pageMarginLeft
	};
	for (const table of page.skeTables.values()) for (const row of table.rows) for (const cell of row.cells) {
		const cellAnchor = findDrawingAnchorInPage(cell, drawingId, cell.marginTop, cell.marginLeft);
		if (cellAnchor) return cellAnchor;
	}
	return null;
}
function resolveDrawingAnchorOffsets(anchor, positionH, positionV) {
	const { skeDrawing, pageMarginTop, pageMarginLeft } = anchor;
	let horizontal = skeDrawing.aLeft;
	let vertical = skeDrawing.aTop;
	if (positionH.relativeFrom === _univerjs_core.ObjectRelativeFromH.MARGIN) horizontal -= pageMarginLeft;
	else if (positionH.relativeFrom === _univerjs_core.ObjectRelativeFromH.COLUMN) horizontal -= skeDrawing.columnLeft;
	if (positionV.relativeFrom === _univerjs_core.ObjectRelativeFromV.PAGE) vertical += pageMarginTop;
	else if (positionV.relativeFrom === _univerjs_core.ObjectRelativeFromV.LINE) vertical -= skeDrawing.lineTop;
	else if (positionV.relativeFrom === _univerjs_core.ObjectRelativeFromV.PARAGRAPH) vertical -= skeDrawing.blockAnchorTop;
	return {
		horizontal,
		vertical
	};
}

//#endregion
//#region src/commands/commands/move-drawings.command.ts
const MoveDocDrawingsCommand = {
	id: "doc.command.move-drawing",
	type: _univerjs_core.CommandType.COMMAND,
	handler: (accessor, params) => {
		var _renderObject$with$ge;
		const commandService = accessor.get(_univerjs_core.ICommandService);
		const docDrawingService = accessor.get(_univerjs_docs_drawing.IDocDrawingService);
		const univerInstanceService = accessor.get(_univerjs_core.IUniverInstanceService);
		const renderManagerService = accessor.get(_univerjs_engine_render.IRenderManagerService);
		const { direction } = params;
		const drawings = docDrawingService.getFocusDrawings();
		if (drawings.length === 0) return false;
		const unitId = drawings[0].unitId;
		const renderObject = renderManagerService.getRenderUnitById(unitId);
		const scene = renderObject === null || renderObject === void 0 ? void 0 : renderObject.scene;
		if (scene == null) return false;
		const transformer = scene.getTransformerByCreate();
		const skeletonData = renderObject === null || renderObject === void 0 || (_renderObject$with$ge = renderObject.with(_univerjs_docs.DocSkeletonManagerService).getSkeleton()) === null || _renderObject$with$ge === void 0 ? void 0 : _renderObject$with$ge.getSkeletonData();
		const documentDataModel = univerInstanceService.getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
		const newDrawings = drawings.map((drawing) => {
			var _documentDataModel$ge;
			const { drawingId } = drawing;
			const drawingData = documentDataModel === null || documentDataModel === void 0 || (_documentDataModel$ge = documentDataModel.getSnapshot().drawings) === null || _documentDataModel$ge === void 0 ? void 0 : _documentDataModel$ge[drawingId];
			if (drawingData == null || drawingData.layoutType === _univerjs_core.PositionedObjectLayoutType.INLINE) return null;
			const { positionH, positionV } = drawingData.docTransform;
			const anchorLookup = skeletonData == null ? {
				anchor: null,
				previewOnly: false
			} : findDrawingAnchor(skeletonData, drawingId);
			if (anchorLookup.previewOnly) return null;
			const { anchor } = anchorLookup;
			const offsets = anchor == null ? {
				horizontal: positionH.posOffset ?? 0,
				vertical: positionV.posOffset ?? 0
			} : resolveDrawingAnchorOffsets(anchor, positionH, positionV);
			const newPositionH = {
				...positionH.relativeFrom == null ? {} : { relativeFrom: positionH.relativeFrom },
				posOffset: offsets.horizontal
			};
			const newPositionV = {
				...positionV.relativeFrom == null ? {} : { relativeFrom: positionV.relativeFrom },
				posOffset: offsets.vertical
			};
			if (direction === _univerjs_core.Direction.UP) newPositionV.posOffset = (newPositionV.posOffset ?? 0) - 2;
			else if (direction === _univerjs_core.Direction.DOWN) newPositionV.posOffset = (newPositionV.posOffset ?? 0) + 2;
			else if (direction === _univerjs_core.Direction.LEFT) newPositionH.posOffset = (newPositionH.posOffset ?? 0) - 2;
			else if (direction === _univerjs_core.Direction.RIGHT) newPositionH.posOffset = (newPositionH.posOffset ?? 0) + 2;
			return {
				drawingId,
				key: direction === _univerjs_core.Direction.UP || direction === _univerjs_core.Direction.DOWN ? "positionV" : "positionH",
				value: direction === _univerjs_core.Direction.UP || direction === _univerjs_core.Direction.DOWN ? newPositionV : newPositionH
			};
		}).filter((drawing) => drawing != null);
		if (newDrawings.length === 0) return false;
		const result = commandService.syncExecuteCommand(_univerjs_docs_drawing.UpdateDrawingDocTransformCommand.id, {
			unitId,
			subUnitId: unitId,
			drawings: newDrawings
		});
		transformer.refreshControls();
		return Boolean(result);
	}
};
function findDrawingAnchor(skeletonData, drawingId) {
	let foundInPreview = false;
	for (const page of skeletonData.pages) {
		var _skeletonData$skeHead, _skeletonData$skeFoot;
		const bodyAnchor = findDrawingAnchorInPage(page, drawingId, page.marginTop, page.marginLeft);
		const header = page.headerId == null ? void 0 : (_skeletonData$skeHead = skeletonData.skeHeaders.get(page.headerId)) === null || _skeletonData$skeHead === void 0 ? void 0 : _skeletonData$skeHead.get(page.pageWidth);
		const headerAnchor = header == null ? null : findDrawingAnchorInPage(header, drawingId, header.marginTop, page.marginLeft);
		const footer = page.footerId == null ? void 0 : (_skeletonData$skeFoot = skeletonData.skeFooters.get(page.footerId)) === null || _skeletonData$skeFoot === void 0 ? void 0 : _skeletonData$skeFoot.get(page.pageWidth);
		const footerTop = footer == null ? 0 : page.pageHeight - page.marginBottom + footer.marginTop;
		const footerAnchor = footer == null ? null : findDrawingAnchorInPage(footer, drawingId, footerTop, page.marginLeft);
		const anchor = bodyAnchor ?? headerAnchor ?? footerAnchor;
		if (anchor == null) continue;
		if (!page.isLayoutPlaceholder && !page.isMaterializationPlaceholder) return {
			anchor,
			previewOnly: false
		};
		foundInPreview = true;
	}
	return {
		anchor: null,
		previewOnly: foundInPreview
	};
}

//#endregion
//#region src/commands/operations/clear-drawing-transformer.operation.ts
const ClearDocDrawingTransformerOperation = {
	id: "doc.operation.clear-drawing-transformer",
	type: _univerjs_core.CommandType.MUTATION,
	handler: (accessor, params) => {
		const renderManagerService = accessor.get(_univerjs_engine_render.IRenderManagerService);
		params.forEach((unitId) => {
			var _renderManagerService;
			(_renderManagerService = renderManagerService.getRenderUnitById(unitId)) === null || _renderManagerService === void 0 || (_renderManagerService = _renderManagerService.scene.getTransformer()) === null || _renderManagerService === void 0 || _renderManagerService.debounceRefreshControls();
		});
		return true;
	}
};

//#endregion
//#region src/views/doc-image-panel/component-name.ts
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
const COMPONENT_DOC_DRAWING_PANEL = "COMPONENT_DOC_DRAWING_PANEL";

//#endregion
//#region src/commands/operations/open-drawing-panel.operation.ts
const SidebarDocDrawingOperation = {
	id: "sidebar.operation.doc-image",
	type: _univerjs_core.CommandType.COMMAND,
	handler: async (accessor, params) => {
		const sidebarService = accessor.get(_univerjs_ui.ISidebarService);
		const localeService = accessor.get(_univerjs_core.LocaleService);
		const drawingManagerService = accessor.get(_univerjs_drawing.IDrawingManagerService);
		switch (params.value) {
			case "open":
				sidebarService.open({
					header: { title: localeService.t("docs-drawing-ui.panel.title") },
					children: { label: COMPONENT_DOC_DRAWING_PANEL },
					onClose: () => {
						drawingManagerService.focusDrawing(null);
					},
					width: 360
				});
				break;
			default:
				sidebarService.close();
				break;
		}
		return true;
	}
};

//#endregion
//#region src/commands/operations/edit-doc-drawing.operation.ts
const EditDocDrawingOperation = {
	id: "doc.operation.edit-doc-image",
	type: _univerjs_core.CommandType.OPERATION,
	handler: (accessor, params) => {
		const drawingManagerService = accessor.get(_univerjs_drawing.IDrawingManagerService);
		const commandService = accessor.get(_univerjs_core.ICommandService);
		if (params == null) return false;
		drawingManagerService.focusDrawing([params]);
		commandService.executeCommand(SidebarDocDrawingOperation.id, { value: "open" });
		return true;
	}
};

//#endregion
//#region src/controllers/doc-float-dom.controller.ts
function calcDocFloatDomPositionByRect(rect, scene, opacity = 1, angle = 0) {
	const { top, left, bottom, right } = rect;
	const width = right - left;
	const height = bottom - top;
	const { viewportScrollX, viewportScrollY } = scene.getViewport(_univerjs_docs_ui.VIEWPORT_KEY.VIEW_MAIN);
	const { scaleX, scaleY } = scene.getAncestorScale();
	return {
		startX: (left - viewportScrollX) * scaleX,
		startY: (top - viewportScrollY) * scaleY,
		endX: (left + width - viewportScrollX) * scaleX,
		endY: (top + height - viewportScrollY) * scaleY,
		width: width * scaleX,
		height: height * scaleY,
		rotate: angle,
		absolute: {
			left: false,
			top: false
		},
		opacity: opacity ?? 1
	};
}
function calcDocFloatDomPosition(object, renderUnit) {
	const { top, left, width, height, angle, opacity } = object;
	return calcDocFloatDomPositionByRect({
		top,
		left,
		bottom: top + height,
		right: left + width
	}, renderUnit.scene, opacity, angle);
}
function mergeDocFloatDomRuntimeProps(existingProps, param) {
	const customBlockRenderViewport = pickValidCustomBlockRenderViewport(param.customBlockRenderViewport);
	if (!customBlockRenderViewport) return existingProps;
	return {
		...existingProps,
		customBlockRenderViewport
	};
}
function pickValidCustomBlockRenderViewport(viewport) {
	const result = {};
	if (isNonNegativeNumber(viewport === null || viewport === void 0 ? void 0 : viewport.bleedLeft)) result.bleedLeft = viewport.bleedLeft;
	if (isPositiveNumber(viewport === null || viewport === void 0 ? void 0 : viewport.bleedWidth)) result.bleedWidth = viewport.bleedWidth;
	if (isPositiveNumber(viewport === null || viewport === void 0 ? void 0 : viewport.contentHeight)) result.contentHeight = viewport.contentHeight;
	if (isPositiveNumber(viewport === null || viewport === void 0 ? void 0 : viewport.contentWidth)) result.contentWidth = viewport.contentWidth;
	if (isPositiveNumber(viewport === null || viewport === void 0 ? void 0 : viewport.height)) result.height = viewport.height;
	if (isPositiveNumber(viewport === null || viewport === void 0 ? void 0 : viewport.pageContentWidth)) result.pageContentWidth = viewport.pageContentWidth;
	const viewScale = viewport === null || viewport === void 0 ? void 0 : viewport.viewScale;
	if (isPositiveNumber(viewScale)) result.viewScale = viewScale;
	if (isPositiveNumber(viewport === null || viewport === void 0 ? void 0 : viewport.viewportHeight)) result.viewportHeight = viewport.viewportHeight;
	return Object.keys(result).length ? result : void 0;
}
function isPositiveNumber(value) {
	return typeof value === "number" && Number.isFinite(value) && value > 0;
}
function isNonNegativeNumber(value) {
	return typeof value === "number" && Number.isFinite(value) && value >= 0;
}
let DocFloatDomController = class DocFloatDomController extends _univerjs_core.Disposable {
	constructor(_renderManagerService, _drawingManagerService, _drawingRenderService, _canvasFloatDomService, _univerInstanceService, _commandService, _docRefreshDrawingsService) {
		super();
		this._renderManagerService = _renderManagerService;
		this._drawingManagerService = _drawingManagerService;
		this._drawingRenderService = _drawingRenderService;
		this._canvasFloatDomService = _canvasFloatDomService;
		this._univerInstanceService = _univerInstanceService;
		this._commandService = _commandService;
		this._docRefreshDrawingsService = _docRefreshDrawingsService;
		_defineProperty(this, "_domLayerInfoMap", /* @__PURE__ */ new Map());
		_defineProperty(this, "_pendingRuntimeGeometry", /* @__PURE__ */ new Map());
		_defineProperty(this, "_pendingRuntimeGeometryInsert", /* @__PURE__ */ new Map());
		_defineProperty(this, "_pendingRuntimeGeometryRefresh", /* @__PURE__ */ new Map());
		this._initialize();
	}
	dispose() {
		this._pendingRuntimeGeometry.clear();
		this._pendingRuntimeGeometryInsert.clear();
		for (const disposable of this._pendingRuntimeGeometryRefresh.values()) disposable.dispose();
		this._pendingRuntimeGeometryRefresh.clear();
		super.dispose();
	}
	_initialize() {
		this._renderLifecycleListener();
		this._drawingAddRemoveListener();
		this._drawingRuntimePropsListener();
		this._initScrollAndZoomEvent();
	}
	_renderLifecycleListener() {
		this.disposeWithMe(this._renderManagerService.disposed$.subscribe((unitId) => {
			this._disposePendingRuntimeGeometryRefresh(unitId);
		}));
		this.disposeWithMe(this._renderManagerService.created$.subscribe((render) => {
			if (this._hasPendingRuntimeGeometryForUnit(render.unitId)) this._refreshDrawingsFromCurrentLayout(render.unitId);
		}));
	}
	_getSceneAndTransformerByDrawingSearch(unitId) {
		if (unitId == null) return;
		const renderObject = this._renderManagerService.getRenderUnitById(unitId);
		if (renderObject == null) return null;
		const scene = renderObject.scene;
		return {
			scene,
			transformer: scene.getTransformerByCreate(),
			renderUnit: renderObject,
			canvas: renderObject.engine.getCanvasElement()
		};
	}
	_drawingAddRemoveListener() {
		this.disposeWithMe(this._drawingManagerService.add$.subscribe((params) => {
			const ready = [];
			const refreshUnitIds = /* @__PURE__ */ new Set();
			for (const param of params) if (isEmbedFloatDomRuntimeParam(this._drawingManagerService.getDrawingByParam(param)) && this._univerInstanceService.getUnit(param.unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC) != null) {
				this._pendingRuntimeGeometryInsert.set(param.drawingId, param);
				refreshUnitIds.add(param.unitId);
				if (this._pendingRuntimeGeometry.has(param.drawingId)) ready.push(param);
			} else ready.push(param);
			this._insertRects(ready);
			for (const unitId of refreshUnitIds) this._refreshDrawingsFromCurrentLayout(unitId);
		}));
		this.disposeWithMe(this._drawingManagerService.remove$.subscribe((params) => {
			params.forEach((param) => {
				this._removeDom(param.drawingId);
			});
		}));
	}
	_refreshDrawingsFromCurrentLayout(unitId) {
		const render = this._renderManagerService.getRenderUnitById(unitId);
		if (render == null || render.type !== _univerjs_core.UniverInstanceType.UNIVER_DOC || render.isDisposed()) return;
		const skeleton = render.with(_univerjs_docs.DocSkeletonManagerService).getSkeleton();
		if (skeleton != null) {
			if (!this._pendingRuntimeGeometryRefresh.has(unitId)) {
				const subscription = skeleton.dirty$.subscribe(() => {
					if (!this._hasPendingRuntimeGeometryForUnit(unitId)) {
						this._disposePendingRuntimeGeometryRefresh(unitId);
						return;
					}
					this._docRefreshDrawingsService.refreshDrawings(skeleton);
				});
				this._pendingRuntimeGeometryRefresh.set(unitId, (0, _univerjs_core.toDisposable)(() => subscription.unsubscribe()));
			}
			this._docRefreshDrawingsService.refreshDrawings(skeleton);
		}
	}
	_hasPendingRuntimeGeometryForUnit(unitId) {
		for (const pending of this._pendingRuntimeGeometryInsert.values()) if (pending.unitId === unitId) return true;
		return false;
	}
	_disposePendingRuntimeGeometryRefresh(unitId) {
		var _this$_pendingRuntime;
		(_this$_pendingRuntime = this._pendingRuntimeGeometryRefresh.get(unitId)) === null || _this$_pendingRuntime === void 0 || _this$_pendingRuntime.dispose();
		this._pendingRuntimeGeometryRefresh.delete(unitId);
	}
	_insertRects(params) {
		for (const param of params) {
			const { unitId } = param;
			if (!this._univerInstanceService.getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC)) continue;
			const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
			if (renderObject == null) continue;
			const rectParam = this._drawingManagerService.getDrawingByParam(param);
			if (rectParam == null) continue;
			const preserveRuntimeGeometry = isEmbedFloatDomRuntimeParam(rectParam);
			const publishedRuntimeParam = this._pendingRuntimeGeometry.get(param.drawingId);
			if (preserveRuntimeGeometry && (publishedRuntimeParam == null || this._pendingRuntimeGeometryInsert.get(param.drawingId) !== param)) continue;
			const rects = this._drawingRenderService.renderFloatDom(rectParam, renderObject.scene);
			if (rects == null || rects.length === 0) continue;
			for (const rect of rects) {
				var _renderObject$scene$g;
				const runtimeParam = publishedRuntimeParam ?? rectParam;
				const runtimeViewport = pickValidCustomBlockRenderViewport(runtimeParam.customBlockRenderViewport);
				syncRectWithRuntimeParam(rect, runtimeParam, runtimeViewport, void 0, preserveRuntimeGeometry);
				const runtimeTransform = runtimeViewport || preserveRuntimeGeometry ? createTransformFromRect(rect) : void 0;
				this._addHoverForRect(rect);
				const disposableCollection = new _univerjs_core.DisposableCollection();
				const position$ = new rxjs.BehaviorSubject(calcDocFloatDomPosition(rect, renderObject.renderUnit));
				const canvas = renderObject.canvas;
				const data = rectParam.data;
				const info = {
					dispose: disposableCollection,
					preserveRuntimeGeometry,
					rect,
					runtimeTransform,
					runtimeViewport,
					position$,
					unitId
				};
				this._canvasFloatDomService.addFloatDom({
					position$,
					id: rectParam.drawingId,
					componentKey: rectParam.componentKey,
					contentBox: isSheetLikeEmbedFloatDomRuntimeParam(rectParam) ? {
						contentInset: 0,
						wrapperInset: 0
					} : void 0,
					eventPassThrough: preserveRuntimeGeometry ? false : void 0,
					preserveOnFocusChange: preserveRuntimeGeometry,
					onPointerDown: (evt) => {
						canvas.dispatchEvent(new PointerEvent(evt.type, evt));
					},
					onPointerMove: (evt) => {
						canvas.dispatchEvent(new PointerEvent(evt.type, evt));
					},
					onPointerUp: (evt) => {
						canvas.dispatchEvent(new PointerEvent(evt.type, evt));
					},
					onWheel: (evt) => {
						canvas.dispatchEvent(new WheelEvent(evt.type, evt));
					},
					data,
					props: mergeDocFloatDomRuntimeProps(void 0, rectParam),
					unitId
				});
				const listener = rect.onTransformChange$.subscribeEvent(() => {
					const newPosition = calcDocFloatDomPosition(rect, renderObject.renderUnit);
					position$.next(newPosition);
				});
				const scrollListener = subscribeViewportScrollAfter((_renderObject$scene$g = renderObject.scene.getViewport(_univerjs_docs_ui.VIEWPORT_KEY.VIEW_MAIN)) === null || _renderObject$scene$g === void 0 ? void 0 : _renderObject$scene$g.onScrollAfter$, () => position$.next(calcDocFloatDomPosition(rect, renderObject.renderUnit)));
				disposableCollection.add(() => {
					this._canvasFloatDomService.removeFloatDom(rectParam.drawingId);
				});
				listener && disposableCollection.add(listener);
				scrollListener && disposableCollection.add(scrollListener);
				this._domLayerInfoMap.set(rectParam.drawingId, info);
			}
			this._pendingRuntimeGeometry.delete(param.drawingId);
			this._pendingRuntimeGeometryInsert.delete(param.drawingId);
			if (!this._hasPendingRuntimeGeometryForUnit(unitId)) this._disposePendingRuntimeGeometryRefresh(unitId);
		}
	}
	_drawingRuntimePropsListener() {
		this.disposeWithMe(this._drawingManagerService.refreshTransform$.subscribe((params) => {
			params.forEach((param) => {
				var _this$_canvasFloatDom;
				const floatDomInfo = this._domLayerInfoMap.get(param.drawingId);
				if (!floatDomInfo) {
					const pendingInsert = this._pendingRuntimeGeometryInsert.get(param.drawingId);
					const drawing = this._drawingManagerService.getDrawingByParam(param);
					if (pendingInsert != null || isEmbedFloatDomRuntimeParam(drawing)) {
						if (param.hidden === true) return;
						this._pendingRuntimeGeometry.set(param.drawingId, param);
						if (pendingInsert != null) this._insertRects([pendingInsert]);
					}
					return;
				}
				if (floatDomInfo.unitId !== param.unitId) return;
				if (floatDomInfo.preserveRuntimeGeometry && param.hidden === true) return;
				const runtimeParam = param;
				const runtimeViewport = pickValidCustomBlockRenderViewport(runtimeParam.customBlockRenderViewport);
				if (runtimeViewport) floatDomInfo.runtimeViewport = runtimeViewport;
				if (syncRectWithRuntimeParam(floatDomInfo.rect, runtimeParam, floatDomInfo.runtimeViewport, floatDomInfo.runtimeTransform, floatDomInfo.preserveRuntimeGeometry)) {
					if (runtimeViewport || floatDomInfo.preserveRuntimeGeometry) floatDomInfo.runtimeTransform = createTransformFromRect(floatDomInfo.rect);
					const renderObject = this._getSceneAndTransformerByDrawingSearch(floatDomInfo.unitId);
					if (renderObject) floatDomInfo.position$.next(calcDocFloatDomPosition(floatDomInfo.rect, renderObject.renderUnit));
				}
				const currentProps = (_this$_canvasFloatDom = this._canvasFloatDomService.domLayers.find(([id]) => id === param.drawingId)) === null || _this$_canvasFloatDom === void 0 ? void 0 : _this$_canvasFloatDom[1].props;
				this._canvasFloatDomService.updateFloatDom(param.drawingId, { props: mergeDocFloatDomRuntimeProps(currentProps, param) });
			});
		}));
	}
	_addHoverForRect(o) {
		this.disposeWithMe((0, _univerjs_core.toDisposable)(o.onPointerEnter$.subscribeEvent(() => {
			o.cursor = _univerjs_engine_render.CURSOR_TYPE.GRAB;
		})));
		this.disposeWithMe((0, _univerjs_core.toDisposable)(o.onPointerLeave$.subscribeEvent(() => {
			o.cursor = _univerjs_engine_render.CURSOR_TYPE.DEFAULT;
		})));
	}
	_removeDom(id) {
		var _this$_pendingRuntime2;
		const pendingUnitId = (_this$_pendingRuntime2 = this._pendingRuntimeGeometryInsert.get(id)) === null || _this$_pendingRuntime2 === void 0 ? void 0 : _this$_pendingRuntime2.unitId;
		this._pendingRuntimeGeometry.delete(id);
		this._pendingRuntimeGeometryInsert.delete(id);
		if (pendingUnitId != null && !this._hasPendingRuntimeGeometryForUnit(pendingUnitId)) this._disposePendingRuntimeGeometryRefresh(pendingUnitId);
		const info = this._domLayerInfoMap.get(id);
		if (!info) return;
		const { unitId } = info;
		this._domLayerInfoMap.delete(id);
		info.dispose.dispose();
		const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
		if (renderObject) renderObject.scene.removeObject(info.rect);
	}
	_initScrollAndZoomEvent() {
		const updateDoc = (unitId) => {
			const renderObject = this._getSceneAndTransformerByDrawingSearch(unitId);
			if (!renderObject) return;
			this._domLayerInfoMap.forEach((floatDomInfo) => {
				if (floatDomInfo.unitId !== unitId) return;
				const position = calcDocFloatDomPosition(floatDomInfo.rect, renderObject.renderUnit);
				floatDomInfo.position$.next(position);
			});
		};
		this.disposeWithMe(this._univerInstanceService.getCurrentTypeOfUnit$(_univerjs_core.UniverInstanceType.UNIVER_DOC).pipe((0, rxjs.map)((documentDataModel) => {
			if (!documentDataModel) return null;
			const unitId = documentDataModel.getUnitId();
			const render = this._renderManagerService.getRenderUnitById(unitId);
			return render ? {
				render,
				unitId
			} : null;
		}), (0, rxjs.switchMap)((render) => render ? (0, _univerjs_core.fromEventSubject)(render.render.scene.getViewport(_univerjs_docs_ui.VIEWPORT_KEY.VIEW_MAIN).onScrollAfter$).pipe((0, rxjs.map)(() => ({ unitId: render.unitId }))) : (0, rxjs.of)(null))).subscribe((value) => {
			if (!value) return;
			const { unitId } = value;
			updateDoc(unitId);
		}));
		this.disposeWithMe(this._commandService.onCommandExecuted((commandInfo) => {
			if (commandInfo.id === _univerjs_docs_ui.SetDocZoomRatioOperation.id) {
				const { unitId } = commandInfo.params;
				globalThis.queueMicrotask(() => {
					if (!this._disposed) updateDoc(unitId);
				});
			}
		}));
	}
	insertFloatDom(floatDom, opts) {
		var _skeleton$getSkeleton;
		const currentDoc = this._univerInstanceService.getCurrentUnitOfType(_univerjs_core.UniverInstanceType.UNIVER_DOC);
		if (!currentDoc) return false;
		const render = this._getSceneAndTransformerByDrawingSearch(currentDoc.getUnitId());
		if (!render) return false;
		const page = (_skeleton$getSkeleton = render.renderUnit.with(_univerjs_docs.DocSkeletonManagerService).getSkeleton().getSkeletonData()) === null || _skeleton$getSkeleton === void 0 ? void 0 : _skeleton$getSkeleton.pages[0];
		if (!page) return false;
		const { pageWidth, marginLeft, marginRight } = page;
		const width = pageWidth - marginLeft - marginRight;
		const docTransform = {
			size: {
				width: opts.width ?? width,
				height: opts.height
			},
			positionH: {
				relativeFrom: _univerjs_core.ObjectRelativeFromH.PAGE,
				posOffset: 0
			},
			positionV: {
				relativeFrom: _univerjs_core.ObjectRelativeFromV.PAGE,
				posOffset: 0
			},
			angle: 0
		};
		const drawingId = opts.drawingId ?? (0, _univerjs_core.generateRandomId)();
		const params = {
			unitId: currentDoc.getUnitId(),
			drawings: [{
				drawingId,
				drawingType: _univerjs_core.DrawingTypeEnum.DRAWING_DOM,
				subUnitId: currentDoc.getUnitId(),
				unitId: currentDoc.getUnitId(),
				...floatDom,
				title: "",
				description: "",
				docTransform,
				layoutType: _univerjs_core.PositionedObjectLayoutType.INLINE,
				transform: (0, _univerjs_docs.docDrawingPositionToTransform)(docTransform)
			}]
		};
		this._commandService.syncExecuteCommand(_univerjs_docs_drawing.InsertDocDrawingCommand.id, params);
		return drawingId;
	}
};
DocFloatDomController = __decorate([
	__decorateParam(0, _univerjs_engine_render.IRenderManagerService),
	__decorateParam(1, _univerjs_drawing.IDrawingManagerService),
	__decorateParam(2, (0, _univerjs_core.Inject)(_univerjs_drawing_ui.DrawingRenderService)),
	__decorateParam(3, (0, _univerjs_core.Inject)(_univerjs_ui.CanvasFloatDomService)),
	__decorateParam(4, _univerjs_core.IUniverInstanceService),
	__decorateParam(5, _univerjs_core.ICommandService),
	__decorateParam(6, (0, _univerjs_core.Inject)(DocRefreshDrawingsService))
], DocFloatDomController);
function syncRectWithRuntimeParam(rect, param, fallbackViewport, fallbackTransform, preserveRuntimeGeometry) {
	const transform = getRuntimeTransform(param, rect, fallbackViewport, fallbackTransform, preserveRuntimeGeometry);
	if (!transform) return false;
	rect.transformByState(transform);
	return true;
}
function getRuntimeTransform(param, rect, fallbackViewport, fallbackTransform, preserveRuntimeGeometry) {
	var _param$transforms;
	const transform = param.transform ?? ((_param$transforms = param.transforms) === null || _param$transforms === void 0 ? void 0 : _param$transforms[0]);
	const runtimeViewport = param.customBlockRenderViewport ?? fallbackViewport;
	if (!param.customBlockRenderViewport && preserveRuntimeGeometry && fallbackTransform && transform) return {
		...transform,
		width: fallbackTransform.width ?? transform.width,
		height: fallbackTransform.height ?? transform.height
	};
	if (!transform) {
		const height = (runtimeViewport === null || runtimeViewport === void 0 ? void 0 : runtimeViewport.height) ?? (runtimeViewport === null || runtimeViewport === void 0 ? void 0 : runtimeViewport.contentHeight);
		if (!isPositiveNumber(height)) return;
		return {
			left: rect.left,
			top: rect.top,
			width: rect.width,
			height,
			angle: rect.angle
		};
	}
	const height = (runtimeViewport === null || runtimeViewport === void 0 ? void 0 : runtimeViewport.height) ?? (runtimeViewport === null || runtimeViewport === void 0 ? void 0 : runtimeViewport.contentHeight);
	if (!isPositiveNumber(height)) return transform;
	return {
		...transform,
		height
	};
}
function isEmbedFloatDomRuntimeParam(param) {
	if (param == null || typeof param !== "object" || !("data" in param)) return false;
	const data = param.data;
	if (!data || typeof data !== "object") return false;
	const candidate = data;
	return candidate.version === 1 && typeof candidate.embedId === "string" && typeof candidate.hostAnchorId === "string";
}
function isSheetLikeEmbedFloatDomRuntimeParam(param) {
	if (!isEmbedFloatDomRuntimeParam(param)) return false;
	const data = param.data;
	return !!data && typeof data === "object" && "childType" in data && typeof data.childType === "number" && (0, _univerjs_docs.isSheetLikeDocsCustomBlockChildType)(data.childType);
}
function createTransformFromRect(rect) {
	return {
		angle: rect.angle,
		height: rect.height,
		left: rect.left,
		top: rect.top,
		width: rect.width
	};
}
function subscribeViewportScrollAfter(scrollEvent, callback) {
	if (!scrollEvent || typeof scrollEvent !== "object") return;
	const eventSubject = scrollEvent;
	if (typeof eventSubject.subscribeEvent === "function") return eventSubject.subscribeEvent(callback);
	const observable = scrollEvent;
	if (typeof observable.subscribe === "function") {
		const subscription = observable.subscribe(callback);
		return (0, _univerjs_core.toDisposable)(() => {
			var _subscription$unsubsc;
			return (_subscription$unsubsc = subscription.unsubscribe) === null || _subscription$unsubsc === void 0 ? void 0 : _subscription$unsubsc.call(subscription);
		});
	}
}

//#endregion
//#region src/menu/image.menu.ts
const DOCS_IMAGE_MENU_ID = "doc.menu.image";
const IMAGE_MENU_UPLOAD_FLOAT_ID = InsertDocImageCommand.id;
const getDisableWhenSelectionInTableObservable = (accessor) => {
	const docSelectionManagerService = accessor.get(_univerjs_docs.DocSelectionManagerService);
	const univerInstanceService = accessor.get(_univerjs_core.IUniverInstanceService);
	return new rxjs.Observable((subscriber) => {
		const observable = docSelectionManagerService.textSelection$.subscribe(() => {
			const activeRange = docSelectionManagerService.getActiveTextRange();
			if (activeRange) {
				var _docDataModel$getSelf;
				const { segmentId, startOffset, endOffset } = activeRange;
				const docDataModel = univerInstanceService.getCurrentUnitOfType(_univerjs_core.UniverInstanceType.UNIVER_DOC);
				const tables = docDataModel === null || docDataModel === void 0 || (_docDataModel$getSelf = docDataModel.getSelfOrHeaderFooterModel(segmentId)) === null || _docDataModel$getSelf === void 0 || (_docDataModel$getSelf = _docDataModel$getSelf.getBody()) === null || _docDataModel$getSelf === void 0 ? void 0 : _docDataModel$getSelf.tables;
				if (tables && tables.length) {
					if (tables.some((table) => {
						const { startIndex, endIndex } = table;
						return startOffset >= startIndex && startOffset < endIndex || endOffset >= startIndex && endOffset < endIndex;
					})) {
						subscriber.next(true);
						return;
					}
				}
			} else {
				subscriber.next(true);
				return;
			}
			subscriber.next(false);
		});
		return () => observable.unsubscribe();
	});
};
function ImageMenuFactory(accessor) {
	return {
		id: DOCS_IMAGE_MENU_ID,
		commandId: IMAGE_MENU_UPLOAD_FLOAT_ID,
		type: _univerjs_ui.MenuItemType.BUTTON,
		icon: "AddImageIcon",
		tooltip: "docs-drawing-ui.title",
		disabled$: getDisableWhenSelectionInTableObservable(accessor),
		hidden$: (0, _univerjs_ui.getMenuHiddenObservable)(accessor, _univerjs_core.UniverInstanceType.UNIVER_DOC)
	};
}
function UploadFloatImageMenuFactory(accessor) {
	return {
		id: IMAGE_MENU_UPLOAD_FLOAT_ID,
		title: "docs-drawing-ui.upload.float",
		type: _univerjs_ui.MenuItemType.BUTTON,
		icon: "AddImageIcon",
		hidden$: (0, _univerjs_ui.getMenuHiddenObservable)(accessor, _univerjs_core.UniverInstanceType.UNIVER_DOC)
	};
}
function UploadFloatImageBelowMenuFactory(accessor) {
	return {
		id: `${IMAGE_MENU_UPLOAD_FLOAT_ID}.below`,
		commandId: IMAGE_MENU_UPLOAD_FLOAT_ID,
		title: "docs-drawing-ui.upload.float",
		type: _univerjs_ui.MenuItemType.BUTTON,
		icon: "AddImageIcon",
		params: { paragraphMenuPlacement: "below" },
		hidden$: (0, _univerjs_ui.getMenuHiddenObservable)(accessor, _univerjs_core.UniverInstanceType.UNIVER_DOC)
	};
}

//#endregion
//#region src/menu/shape.menu.ts
const DOCS_SHAPE_MENU_ID = "doc.command.menu-insert-shape";
const DOCS_SHAPE_BELOW_MENU_ID = "doc.command.menu-insert-shape.below";
function ShapeMenuFactory(accessor) {
	return {
		id: DOCS_SHAPE_MENU_ID,
		type: _univerjs_ui.MenuItemType.SUBITEMS,
		icon: "ShapeIcon",
		title: "docs-drawing-ui.shape.insert.title",
		tooltip: "docs-drawing-ui.shape.insert.title",
		hidden$: (0, _univerjs_ui.getMenuHiddenObservable)(accessor, _univerjs_core.UniverInstanceType.UNIVER_DOC)
	};
}
function ShapeBelowMenuFactory(accessor) {
	return {
		id: DOCS_SHAPE_BELOW_MENU_ID,
		type: _univerjs_ui.MenuItemType.SUBITEMS,
		icon: "ShapeIcon",
		title: "docs-drawing-ui.shape.insert.title",
		tooltip: "docs-drawing-ui.shape.insert.title",
		hidden$: (0, _univerjs_ui.getMenuHiddenObservable)(accessor, _univerjs_core.UniverInstanceType.UNIVER_DOC)
	};
}
function InsertRectangleShapeMenuFactory(accessor) {
	return {
		id: InsertDocRectangleShapeCommand.id,
		title: "docs-drawing-ui.shape.insert.rectangle",
		type: _univerjs_ui.MenuItemType.BUTTON,
		hidden$: (0, _univerjs_ui.getMenuHiddenObservable)(accessor, _univerjs_core.UniverInstanceType.UNIVER_DOC)
	};
}
function InsertEllipseShapeMenuFactory(accessor) {
	return {
		id: InsertDocEllipseShapeCommand.id,
		title: "docs-drawing-ui.shape.insert.ellipse",
		type: _univerjs_ui.MenuItemType.BUTTON,
		hidden$: (0, _univerjs_ui.getMenuHiddenObservable)(accessor, _univerjs_core.UniverInstanceType.UNIVER_DOC)
	};
}
function InsertRectangleShapeBelowMenuFactory(accessor) {
	return {
		id: `${InsertDocRectangleShapeCommand.id}.below`,
		commandId: InsertDocRectangleShapeCommand.id,
		title: "docs-drawing-ui.shape.insert.rectangle",
		type: _univerjs_ui.MenuItemType.BUTTON,
		params: { paragraphMenuPlacement: "below" },
		hidden$: (0, _univerjs_ui.getMenuHiddenObservable)(accessor, _univerjs_core.UniverInstanceType.UNIVER_DOC)
	};
}
function InsertEllipseShapeBelowMenuFactory(accessor) {
	return {
		id: `${InsertDocEllipseShapeCommand.id}.below`,
		commandId: InsertDocEllipseShapeCommand.id,
		title: "docs-drawing-ui.shape.insert.ellipse",
		type: _univerjs_ui.MenuItemType.BUTTON,
		params: { paragraphMenuPlacement: "below" },
		hidden$: (0, _univerjs_ui.getMenuHiddenObservable)(accessor, _univerjs_core.UniverInstanceType.UNIVER_DOC)
	};
}

//#endregion
//#region src/menu/schema.ts
const menuSchema = {
	[_univerjs_ui.RibbonInsertGroup.MEDIA]: { [DOCS_IMAGE_MENU_ID]: {
		order: 0,
		menuItemFactory: ImageMenuFactory
	} },
	[_univerjs_ui.ContextMenuPosition.PARAGRAPH]: {
		[_univerjs_ui.ContextMenuGroup.LAYOUT]: { [_univerjs_docs_ui.INSERT_BELLOW_MENU_ID]: { [IMAGE_MENU_UPLOAD_FLOAT_ID]: {
			order: 5,
			menuItemFactory: UploadFloatImageMenuFactory
		} } },
		[_univerjs_docs_ui.EMPTY_PARAGRAPH_MENU_ID]: { [_univerjs_ui.ContextMenuGroup.LAYOUT]: { [IMAGE_MENU_UPLOAD_FLOAT_ID]: {
			order: 5,
			menuItemFactory: UploadFloatImageMenuFactory
		} } },
		[_univerjs_docs_ui.DOC_CONTENT_INSERT_MENU_ID]: { [_univerjs_ui.ContextMenuGroup.LAYOUT]: { [IMAGE_MENU_UPLOAD_FLOAT_ID]: {
			order: 5,
			menuItemFactory: UploadFloatImageMenuFactory
		} } },
		[_univerjs_docs_ui.DOC_PARAGRAPH_T_INSERT_MENU_ID]: { insert: {
			[IMAGE_MENU_UPLOAD_FLOAT_ID]: {
				order: 1,
				menuItemFactory: UploadFloatImageMenuFactory
			},
			[DOCS_SHAPE_MENU_ID]: {
				order: 2,
				menuItemFactory: ShapeMenuFactory
			}
		} },
		[_univerjs_docs_ui.DOC_PARAGRAPH_T_INSERT_BELOW_MENU_ID]: { insert: {
			[`${IMAGE_MENU_UPLOAD_FLOAT_ID}.below`]: {
				order: 1,
				menuItemFactory: UploadFloatImageBelowMenuFactory
			},
			[DOCS_SHAPE_BELOW_MENU_ID]: {
				order: 2,
				menuItemFactory: ShapeBelowMenuFactory
			}
		} },
		[DOCS_SHAPE_MENU_ID]: { shapes: {
			order: 0,
			[InsertDocRectangleShapeCommand.id]: {
				order: 0,
				menuItemFactory: InsertRectangleShapeMenuFactory
			},
			[InsertDocEllipseShapeCommand.id]: {
				order: 1,
				menuItemFactory: InsertEllipseShapeMenuFactory
			}
		} },
		[DOCS_SHAPE_BELOW_MENU_ID]: { shapes: {
			order: 0,
			[`${InsertDocRectangleShapeCommand.id}.below`]: {
				order: 0,
				menuItemFactory: InsertRectangleShapeBelowMenuFactory
			},
			[`${InsertDocEllipseShapeCommand.id}.below`]: {
				order: 1,
				menuItemFactory: InsertEllipseShapeBelowMenuFactory
			}
		} }
	}
};

//#endregion
//#region package.json
var name = "@univerjs/docs-drawing-ui";
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
const DOCS_DRAWING_UI_PLUGIN_CONFIG_KEY = "docs-drawing-ui.config";
const configSymbol = Symbol(DOCS_DRAWING_UI_PLUGIN_CONFIG_KEY);
const defaultPluginConfig = {};

//#endregion
//#region src/views/doc-image-panel/DocDrawingPosition.tsx
const MIN_OFFSET = -1e3;
const MAX_OFFSET = 1e3;
const DocDrawingPosition = (props) => {
	var _renderManagerService;
	const renderManagerService = (0, _univerjs_ui.useDependency)(_univerjs_engine_render.IRenderManagerService);
	const drawingParam = props.drawings[0];
	const scene = drawingParam ? (_renderManagerService = renderManagerService.getRenderUnitById(drawingParam.unitId)) === null || _renderManagerService === void 0 ? void 0 : _renderManagerService.scene : void 0;
	return drawingParam && scene ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DocDrawingPositionContent, { ...props }) : null;
};
function DocDrawingPositionContent(props) {
	const commandService = (0, _univerjs_ui.useDependency)(_univerjs_core.ICommandService);
	const localeService = (0, _univerjs_ui.useDependency)(_univerjs_core.LocaleService);
	const drawingManagerService = (0, _univerjs_ui.useDependency)(_univerjs_drawing.IDrawingManagerService);
	const renderManagerService = (0, _univerjs_ui.useDependency)(_univerjs_engine_render.IRenderManagerService);
	const univerInstanceService = (0, _univerjs_ui.useDependency)(_univerjs_core.IUniverInstanceService);
	const { drawings } = props;
	const { unitId } = drawings[0];
	const documentDataModel = univerInstanceService.getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
	const documentFlavor = documentDataModel === null || documentDataModel === void 0 ? void 0 : documentDataModel.getSnapshot().documentStyle.documentFlavor;
	const transformer = renderManagerService.getRenderUnitById(unitId).scene.getTransformerByCreate();
	const HORIZONTAL_RELATIVE_FROM = [
		{
			label: localeService.t("docs-drawing-ui.image-position.column"),
			value: String(_univerjs_core.ObjectRelativeFromH.COLUMN)
		},
		{
			label: localeService.t("docs-drawing-ui.image-position.page"),
			value: String(_univerjs_core.ObjectRelativeFromH.PAGE)
		},
		{
			label: localeService.t("docs-drawing-ui.image-position.margin"),
			value: String(_univerjs_core.ObjectRelativeFromH.MARGIN)
		}
	];
	const VERTICAL_RELATIVE_FROM = [
		{
			label: localeService.t("docs-drawing-ui.image-position.line"),
			value: String(_univerjs_core.ObjectRelativeFromV.LINE),
			disabled: documentFlavor === _univerjs_core.DocumentFlavor.MODERN
		},
		{
			label: localeService.t("docs-drawing-ui.image-position.page"),
			value: String(_univerjs_core.ObjectRelativeFromV.PAGE),
			disabled: documentFlavor === _univerjs_core.DocumentFlavor.MODERN
		},
		{
			label: localeService.t("docs-drawing-ui.image-position.margin"),
			value: String(_univerjs_core.ObjectRelativeFromV.MARGIN),
			disabled: documentFlavor === _univerjs_core.DocumentFlavor.MODERN
		},
		{
			label: localeService.t("docs-drawing-ui.image-position.paragraph"),
			value: String(_univerjs_core.ObjectRelativeFromV.PARAGRAPH)
		}
	];
	const [disabled, setDisabled] = (0, react.useState)(true);
	const [hPosition, setHPosition] = (0, react.useState)({
		relativeFrom: _univerjs_core.ObjectRelativeFromH.PAGE,
		posOffset: 0
	});
	const [vPosition, setVPosition] = (0, react.useState)({
		relativeFrom: _univerjs_core.ObjectRelativeFromV.PAGE,
		posOffset: 0
	});
	const [followTextMove, setFollowTextMove] = (0, react.useState)(true);
	const [showPanel, setShowPanel] = (0, react.useState)(true);
	function handlePositionChange(direction, value) {
		var _renderManagerService2;
		if (direction === "positionH") setHPosition(value);
		else setVPosition(value);
		const focusDrawings = drawingManagerService.getFocusDrawings();
		if (focusDrawings.length === 0) return;
		const drawings = focusDrawings.map((drawing) => {
			return {
				unitId: drawing.unitId,
				subUnitId: drawing.subUnitId,
				drawingId: drawing.drawingId
			};
		});
		commandService.executeCommand(_univerjs_docs_drawing.UpdateDrawingDocTransformCommand.id, {
			unitId: focusDrawings[0].unitId,
			subUnitId: focusDrawings[0].unitId,
			drawings: drawings.map((drawing) => ({
				drawingId: drawing.drawingId,
				key: direction,
				value
			}))
		});
		const docSelectionRenderService = (_renderManagerService2 = renderManagerService.getRenderUnitById(unitId)) === null || _renderManagerService2 === void 0 ? void 0 : _renderManagerService2.with(_univerjs_docs_ui.DocSelectionRenderService);
		if (docSelectionRenderService) docSelectionRenderService.blur();
		transformer.refreshControls();
	}
	function handleHorizontalRelativeFromChange(value) {
		var _renderManagerService3;
		const prevRelativeFrom = hPosition.relativeFrom;
		const prevPosOffset = hPosition.posOffset;
		const relativeFrom = Number(value);
		if (prevRelativeFrom === relativeFrom) return;
		const focusDrawings = drawingManagerService.getFocusDrawings();
		if (focusDrawings.length === 0) return;
		const drawingId = focusDrawings[0].drawingId;
		const unitId = focusDrawings[0].unitId;
		let drawing = null;
		let pageMarginLeft = 0;
		const skeleton = (_renderManagerService3 = renderManagerService.getRenderUnitById(unitId)) === null || _renderManagerService3 === void 0 ? void 0 : _renderManagerService3.with(_univerjs_docs.DocSkeletonManagerService).getSkeleton();
		const skeletonData = skeleton === null || skeleton === void 0 ? void 0 : skeleton.getSkeletonData();
		if (skeletonData == null) return;
		const { pages, skeHeaders, skeFooters } = skeletonData;
		for (const page of pages) {
			var _skeHeaders$get, _skeFooters$get;
			const { marginLeft, skeDrawings, headerId, footerId, pageWidth } = page;
			if (skeDrawings.has(drawingId)) {
				drawing = skeDrawings.get(drawingId);
				pageMarginLeft = marginLeft;
				break;
			}
			const headerPage = (_skeHeaders$get = skeHeaders.get(headerId)) === null || _skeHeaders$get === void 0 ? void 0 : _skeHeaders$get.get(pageWidth);
			if (headerPage === null || headerPage === void 0 ? void 0 : headerPage.skeDrawings.has(drawingId)) {
				drawing = headerPage === null || headerPage === void 0 ? void 0 : headerPage.skeDrawings.get(drawingId);
				pageMarginLeft = marginLeft;
				break;
			}
			const footerPage = (_skeFooters$get = skeFooters.get(footerId)) === null || _skeFooters$get === void 0 ? void 0 : _skeFooters$get.get(pageWidth);
			if (footerPage === null || footerPage === void 0 ? void 0 : footerPage.skeDrawings.has(drawingId)) {
				drawing = footerPage === null || footerPage === void 0 ? void 0 : footerPage.skeDrawings.get(drawingId);
				pageMarginLeft = marginLeft;
				break;
			}
		}
		if (drawing == null) return;
		let delta = 0;
		if (prevRelativeFrom === _univerjs_core.ObjectRelativeFromH.COLUMN) delta -= drawing.columnLeft;
		else if (prevRelativeFrom === _univerjs_core.ObjectRelativeFromH.MARGIN) delta -= pageMarginLeft;
		if (relativeFrom === _univerjs_core.ObjectRelativeFromH.COLUMN) delta += drawing.columnLeft;
		else if (relativeFrom === _univerjs_core.ObjectRelativeFromH.MARGIN) delta += pageMarginLeft;
		else if (relativeFrom === _univerjs_core.ObjectRelativeFromH.PAGE) {}
		handlePositionChange("positionH", {
			relativeFrom,
			posOffset: (prevPosOffset ?? 0) - delta
		});
	}
	function handleVerticalRelativeFromChange(value) {
		var _renderManagerService4, _renderManagerService5, _documentDataModel$ge, _glyph$parent, _column$parent;
		const prevRelativeFrom = vPosition.relativeFrom;
		const prevPosOffset = vPosition.posOffset;
		const relativeFrom = Number(value);
		if (prevRelativeFrom === relativeFrom) return;
		const focusDrawings = drawingManagerService.getFocusDrawings();
		if (focusDrawings.length === 0) return;
		const { drawingId, unitId } = focusDrawings[0];
		const documentDataModel = univerInstanceService.getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
		const skeleton = (_renderManagerService4 = renderManagerService.getRenderUnitById(unitId)) === null || _renderManagerService4 === void 0 ? void 0 : _renderManagerService4.with(_univerjs_docs.DocSkeletonManagerService).getSkeleton();
		const docSelectionRenderService = (_renderManagerService5 = renderManagerService.getRenderUnitById(unitId)) === null || _renderManagerService5 === void 0 ? void 0 : _renderManagerService5.with(_univerjs_docs_ui.DocSelectionRenderService);
		const segmentId = docSelectionRenderService === null || docSelectionRenderService === void 0 ? void 0 : docSelectionRenderService.getSegment();
		const segmentPage = docSelectionRenderService === null || docSelectionRenderService === void 0 ? void 0 : docSelectionRenderService.getSegmentPage();
		const drawing = documentDataModel === null || documentDataModel === void 0 || (_documentDataModel$ge = documentDataModel.getSelfOrHeaderFooterModel(segmentId)) === null || _documentDataModel$ge === void 0 || (_documentDataModel$ge = _documentDataModel$ge.getBody()) === null || _documentDataModel$ge === void 0 || (_documentDataModel$ge = _documentDataModel$ge.customBlocks) === null || _documentDataModel$ge === void 0 ? void 0 : _documentDataModel$ge.find((c) => c.blockId === drawingId);
		if (drawing == null || skeleton == null || docSelectionRenderService == null) return;
		const { startIndex } = drawing;
		const glyph = skeleton.findNodeByCharIndex(startIndex, segmentId, segmentPage);
		const line = glyph === null || glyph === void 0 || (_glyph$parent = glyph.parent) === null || _glyph$parent === void 0 ? void 0 : _glyph$parent.parent;
		const column = line === null || line === void 0 ? void 0 : line.parent;
		const paragraphStartLine = column === null || column === void 0 ? void 0 : column.lines.find((l) => l.paragraphIndex === (line === null || line === void 0 ? void 0 : line.paragraphIndex) && l.paragraphStart);
		const page = column === null || column === void 0 || (_column$parent = column.parent) === null || _column$parent === void 0 ? void 0 : _column$parent.parent;
		if (glyph == null || line == null || paragraphStartLine == null || column == null || page == null) return;
		let delta = 0;
		if (prevRelativeFrom === _univerjs_core.ObjectRelativeFromV.PARAGRAPH) delta -= paragraphStartLine.top;
		else if (prevRelativeFrom === _univerjs_core.ObjectRelativeFromV.LINE) delta -= line.top;
		else if (prevRelativeFrom === _univerjs_core.ObjectRelativeFromV.PAGE) delta += page.marginTop;
		if (relativeFrom === _univerjs_core.ObjectRelativeFromV.PARAGRAPH) delta += paragraphStartLine.top;
		else if (relativeFrom === _univerjs_core.ObjectRelativeFromV.LINE) delta += line.top;
		else if (relativeFrom === _univerjs_core.ObjectRelativeFromV.PAGE) delta -= page.marginTop;
		handlePositionChange("positionV", {
			relativeFrom,
			posOffset: (prevPosOffset ?? 0) - delta
		});
	}
	function updateState(drawingParam) {
		var _snapshot$drawings;
		const snapshot = documentDataModel === null || documentDataModel === void 0 ? void 0 : documentDataModel.getSnapshot();
		const drawing = snapshot === null || snapshot === void 0 || (_snapshot$drawings = snapshot.drawings) === null || _snapshot$drawings === void 0 ? void 0 : _snapshot$drawings[drawingParam.drawingId];
		if (drawing == null) return;
		const { layoutType } = drawing;
		const { positionH, positionV } = drawing.docTransform;
		setHPosition(positionH);
		setVPosition(positionV);
		setDisabled(layoutType === _univerjs_core.PositionedObjectLayoutType.INLINE);
		setFollowTextMove(positionV.relativeFrom === _univerjs_core.ObjectRelativeFromV.PARAGRAPH || positionV.relativeFrom === _univerjs_core.ObjectRelativeFromV.LINE);
	}
	function updateFocusDrawingState() {
		const focusDrawings = drawingManagerService.getFocusDrawings();
		if (focusDrawings.length === 0) return;
		updateState(focusDrawings[0]);
	}
	function handleFollowTextMoveCheck(val) {
		setFollowTextMove(val);
		handleVerticalRelativeFromChange(val ? String(_univerjs_core.ObjectRelativeFromV.PARAGRAPH) : String(_univerjs_core.ObjectRelativeFromV.PAGE));
	}
	(0, react.useEffect)(() => {
		updateFocusDrawingState();
		const subscription = drawingManagerService.focus$.subscribe((drawingParams) => {
			if (drawingParams.length === 0) {
				setShowPanel(false);
				return;
			}
			setShowPanel(true);
			updateState(drawingParams[0]);
		});
		const mutationListener = commandService.onCommandExecuted(async (command) => {
			if (command.id === _univerjs_docs.RichTextEditingMutation.id) updateFocusDrawingState();
		});
		return () => {
			subscription.unsubscribe();
			mutationListener.dispose();
		};
	}, []);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: (0, _univerjs_design.clsx)("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", { "univer-hidden": !showPanel }),
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("header", {
				className: "univer-text-gray-600 dark:!univer-text-gray-200",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: localeService.t("docs-drawing-ui.image-position.title") })
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "univer-text-gray-600 dark:!univer-text-gray-200",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: localeService.t("docs-drawing-ui.image-position.horizontal") })
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "univer-grid univer-grid-cols-2 univer-gap-2 [&>div]:univer-grid [&>div]:univer-gap-2",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: localeService.t("docs-drawing-ui.image-position.absolutePosition") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.InputNumber, {
					min: MIN_OFFSET,
					max: MAX_OFFSET,
					precision: 1,
					disabled,
					value: hPosition.posOffset,
					onChange: (val) => {
						handlePositionChange("positionH", {
							relativeFrom: hPosition.relativeFrom,
							posOffset: val
						});
					}
				})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: localeService.t("docs-drawing-ui.image-position.toTheRightOf") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Select, {
					value: String(hPosition.relativeFrom),
					disabled,
					options: HORIZONTAL_RELATIVE_FROM,
					onChange: handleHorizontalRelativeFromChange
				})] })]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "univer-text-gray-600 dark:!univer-text-gray-200",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: localeService.t("docs-drawing-ui.image-position.vertical") })
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "univer-grid univer-grid-cols-2 univer-gap-2 [&>div]:univer-grid [&>div]:univer-gap-2",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: localeService.t("docs-drawing-ui.image-position.absolutePosition") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.InputNumber, {
					min: MIN_OFFSET,
					max: MAX_OFFSET,
					precision: 1,
					disabled,
					value: vPosition.posOffset,
					onChange: (val) => {
						handlePositionChange("positionV", {
							relativeFrom: vPosition.relativeFrom,
							posOffset: val
						});
					}
				})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: localeService.t("docs-drawing-ui.image-position.bellow") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Select, {
					disabled,
					value: String(vPosition.relativeFrom),
					options: VERTICAL_RELATIVE_FROM,
					onChange: handleVerticalRelativeFromChange
				})] })]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "univer-text-gray-600 dark:!univer-text-gray-200",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: localeService.t("docs-drawing-ui.image-position.options") })
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Checkbox, {
				disabled,
				checked: followTextMove,
				onChange: handleFollowTextMoveCheck,
				children: localeService.t("docs-drawing-ui.image-position.moveObjectWithText")
			}) })
		]
	});
}

//#endregion
//#region src/commands/commands/update-doc-drawing.command.ts
function getDeleteAndInsertCustomBlockActions(segmentId, oldSegmentId, segmentPage, offset, drawingId, documentDataModel, docSelectionRenderManager) {
	var _documentDataModel$ge, _documentDataModel$ge2, _oldBody$customBlocks;
	const textX = new _univerjs_core.TextX();
	const jsonX = _univerjs_core.JSONX.getInstance();
	const rawActions = [];
	const oldBody = (_documentDataModel$ge = documentDataModel.getSelfOrHeaderFooterModel(oldSegmentId)) === null || _documentDataModel$ge === void 0 ? void 0 : _documentDataModel$ge.getBody();
	const body = (_documentDataModel$ge2 = documentDataModel.getSelfOrHeaderFooterModel(segmentId)) === null || _documentDataModel$ge2 === void 0 ? void 0 : _documentDataModel$ge2.getBody();
	if (oldBody == null || body == null) return;
	const oldOffset = (_oldBody$customBlocks = oldBody.customBlocks) === null || _oldBody$customBlocks === void 0 || (_oldBody$customBlocks = _oldBody$customBlocks.find((block) => block.blockId === drawingId)) === null || _oldBody$customBlocks === void 0 ? void 0 : _oldBody$customBlocks.startIndex;
	if (oldOffset == null) return;
	offset = Math.min(body.dataStream.length - 2, offset);
	if (segmentId === oldSegmentId) {
		if (offset < oldOffset) {
			if (offset > 0) textX.push({
				t: _univerjs_core.TextXActionType.RETAIN,
				len: offset
			});
			textX.push({
				t: _univerjs_core.TextXActionType.INSERT,
				body: {
					dataStream: "\b",
					customBlocks: [{
						startIndex: 0,
						blockId: drawingId
					}]
				},
				len: 1
			});
			textX.push({
				t: _univerjs_core.TextXActionType.RETAIN,
				len: oldOffset - offset
			});
			textX.push({
				t: _univerjs_core.TextXActionType.DELETE,
				len: 1
			});
		} else {
			if (oldOffset > 0) textX.push({
				t: _univerjs_core.TextXActionType.RETAIN,
				len: oldOffset
			});
			textX.push({
				t: _univerjs_core.TextXActionType.DELETE,
				len: 1
			});
			if (offset - oldOffset - 1 > 0) textX.push({
				t: _univerjs_core.TextXActionType.RETAIN,
				len: offset - oldOffset - 1
			});
			textX.push({
				t: _univerjs_core.TextXActionType.INSERT,
				body: {
					dataStream: "\b",
					customBlocks: [{
						startIndex: 0,
						blockId: drawingId
					}]
				},
				len: 1
			});
		}
		if (offset !== oldOffset) {
			const path = (0, _univerjs_core.getRichTextEditPath)(documentDataModel, oldSegmentId);
			const action = jsonX.editOp(textX.serialize(), path);
			rawActions.push(action);
		}
	} else {
		if (oldOffset > 0) textX.push({
			t: _univerjs_core.TextXActionType.RETAIN,
			len: oldOffset
		});
		textX.push({
			t: _univerjs_core.TextXActionType.DELETE,
			len: 1
		});
		let path = (0, _univerjs_core.getRichTextEditPath)(documentDataModel, oldSegmentId);
		let action = jsonX.editOp(textX.serialize(), path);
		rawActions.push(action);
		textX.empty();
		if (offset > 0) textX.push({
			t: _univerjs_core.TextXActionType.RETAIN,
			len: offset
		});
		textX.push({
			t: _univerjs_core.TextXActionType.INSERT,
			body: {
				dataStream: "\b",
				customBlocks: [{
					startIndex: 0,
					blockId: drawingId
				}]
			},
			len: 1
		});
		path = (0, _univerjs_core.getRichTextEditPath)(documentDataModel, segmentId);
		action = jsonX.editOp(textX.serialize(), path);
		rawActions.push(action);
		docSelectionRenderManager.setSegment(segmentId);
		docSelectionRenderManager.setSegmentPage(segmentPage);
	}
	return rawActions;
}
/**
* The command to update drawing wrap text.
*/
const UpdateDocDrawingDistanceCommand = {
	id: "doc.command.update-doc-drawing-distance",
	type: _univerjs_core.CommandType.COMMAND,
	handler: (accessor, params) => {
		if (params == null) return false;
		const commandService = accessor.get(_univerjs_core.ICommandService);
		const univerInstanceService = accessor.get(_univerjs_core.IUniverInstanceService);
		const { drawings, dist, unitId } = params;
		const documentDataModel = univerInstanceService.getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
		if (documentDataModel == null) return false;
		const jsonX = _univerjs_core.JSONX.getInstance();
		const rawActions = [];
		const { drawings: oldDrawings = {} } = documentDataModel.getSnapshot();
		for (const drawing of drawings) {
			const { drawingId } = drawing;
			for (const [key, value] of Object.entries(dist)) {
				const oldValue = oldDrawings[drawingId][key];
				if (oldValue !== value) {
					const action = jsonX.replaceOp([
						"drawings",
						drawingId,
						key
					], oldValue, value);
					rawActions.push(action);
				}
			}
		}
		const doMutation = {
			id: _univerjs_docs.RichTextEditingMutation.id,
			params: {
				unitId,
				actions: [],
				textRanges: null
			}
		};
		doMutation.params.actions = rawActions.reduce((acc, cur) => {
			return _univerjs_core.JSONX.compose(acc, cur);
		}, null);
		const result = commandService.syncExecuteCommand(doMutation.id, doMutation.params);
		return Boolean(result);
	}
};
/**
* The command to update drawing wrap text.
*/
const UpdateDocDrawingWrapTextCommand = {
	id: "doc.command.update-doc-drawing-wrap-text",
	type: _univerjs_core.CommandType.COMMAND,
	handler: (accessor, params) => {
		if (params == null) return false;
		const commandService = accessor.get(_univerjs_core.ICommandService);
		const univerInstanceService = accessor.get(_univerjs_core.IUniverInstanceService);
		const { drawings, wrapText, unitId } = params;
		const documentDataModel = univerInstanceService.getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
		if (documentDataModel == null) return false;
		const jsonX = _univerjs_core.JSONX.getInstance();
		const rawActions = [];
		const { drawings: oldDrawings = {} } = documentDataModel.getSnapshot();
		for (const drawing of drawings) {
			const { drawingId } = drawing;
			const oldWrapText = oldDrawings[drawingId].wrapText;
			if (oldWrapText !== wrapText) {
				const action = jsonX.replaceOp([
					"drawings",
					drawingId,
					"wrapText"
				], oldWrapText, wrapText);
				rawActions.push(action);
			}
		}
		const doMutation = {
			id: _univerjs_docs.RichTextEditingMutation.id,
			params: {
				unitId,
				actions: [],
				textRanges: null
			}
		};
		doMutation.params.actions = rawActions.reduce((acc, cur) => {
			return _univerjs_core.JSONX.compose(acc, cur);
		}, null);
		const result = commandService.syncExecuteCommand(doMutation.id, doMutation.params);
		return Boolean(result);
	}
};
/**
* The command to move inline drawing.
*/
const IMoveInlineDrawingCommand = {
	id: "doc.command.move-inline-drawing",
	type: _univerjs_core.CommandType.COMMAND,
	handler: (accessor, params) => {
		var _renderManagerService;
		if (params == null) return false;
		const { drawing, unitId, offset, segmentId: newSegmentId, segmentPage, needRefreshDrawings } = params;
		const renderManagerService = accessor.get(_univerjs_engine_render.IRenderManagerService);
		const docSelectionRenderService = (_renderManagerService = renderManagerService.getRenderUnitById(unitId)) === null || _renderManagerService === void 0 ? void 0 : _renderManagerService.with(_univerjs_docs_ui.DocSelectionRenderService);
		const docRefreshDrawingsService = accessor.get(DocRefreshDrawingsService);
		const renderObject = renderManagerService.getRenderUnitById(unitId);
		const scene = renderObject === null || renderObject === void 0 ? void 0 : renderObject.scene;
		const skeleton = renderObject === null || renderObject === void 0 ? void 0 : renderObject.with(_univerjs_docs.DocSkeletonManagerService).getSkeleton();
		if (scene == null || docSelectionRenderService == null) return false;
		const transformer = scene.getTransformerByCreate();
		const commandService = accessor.get(_univerjs_core.ICommandService);
		const documentDataModel = accessor.get(_univerjs_core.IUniverInstanceService).getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
		if (documentDataModel == null) return false;
		if (needRefreshDrawings) {
			docRefreshDrawingsService.refreshDrawings(skeleton);
			transformer.refreshControls();
			return true;
		}
		const rawActions = [];
		const { drawingId } = drawing;
		const actions = getDeleteAndInsertCustomBlockActions(newSegmentId, docSelectionRenderService.getSegment() ?? "", segmentPage, offset, drawingId, documentDataModel, docSelectionRenderService);
		if (actions == null || actions.length === 0) {
			docRefreshDrawingsService.refreshDrawings(skeleton);
			transformer.refreshControls();
			return false;
		}
		rawActions.push(...actions);
		const doMutation = {
			id: _univerjs_docs.RichTextEditingMutation.id,
			params: {
				unitId,
				actions: [],
				textRanges: null
			}
		};
		doMutation.params.actions = rawActions.reduce((acc, cur) => {
			return _univerjs_core.JSONX.compose(acc, cur);
		}, null);
		const result = commandService.syncExecuteCommand(doMutation.id, doMutation.params);
		transformer.refreshControls();
		return Boolean(result);
	}
};
/**
* The command to transform non-inline drawing.
*/
const ITransformNonInlineDrawingCommand = {
	id: "doc.command.transform-non-inline-drawing",
	type: _univerjs_core.CommandType.COMMAND,
	handler: (accessor, params) => {
		var _renderManagerService2;
		if (params == null) return false;
		const { drawing, unitId, offset, docTransform, segmentId: newSegmentId, segmentPage } = params;
		const renderManagerService = accessor.get(_univerjs_engine_render.IRenderManagerService);
		const docSelectionRenderService = (_renderManagerService2 = renderManagerService.getRenderUnitById(unitId)) === null || _renderManagerService2 === void 0 ? void 0 : _renderManagerService2.with(_univerjs_docs_ui.DocSelectionRenderService);
		const renderObject = renderManagerService.getRenderUnitById(unitId);
		const scene = renderObject === null || renderObject === void 0 ? void 0 : renderObject.scene;
		if (renderObject == null || scene == null || docSelectionRenderService == null) return false;
		const transformer = scene.getTransformerByCreate();
		const commandService = accessor.get(_univerjs_core.ICommandService);
		const documentDataModel = accessor.get(_univerjs_core.IUniverInstanceService).getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
		if (documentDataModel == null) return false;
		const rawActions = [];
		const { drawingId } = drawing;
		const actions = getDeleteAndInsertCustomBlockActions(newSegmentId, docSelectionRenderService.getSegment() ?? "", segmentPage, offset, drawingId, documentDataModel, docSelectionRenderService);
		if (actions == null) return false;
		if (actions.length > 0) rawActions.push(...actions);
		const jsonX = _univerjs_core.JSONX.getInstance();
		const { drawings: oldDrawings = {} } = documentDataModel.getSnapshot();
		const { positionH: oldPositionH, positionV: oldPositionV, size: oldSize, angle: oldAngle } = oldDrawings[drawingId].docTransform;
		if (!_univerjs_core.Tools.diffValue(oldPositionH, docTransform.positionH)) {
			const updateAction = jsonX.replaceOp([
				"drawings",
				drawingId,
				"docTransform",
				"positionH"
			], oldPositionH, docTransform.positionH);
			rawActions.push(updateAction);
		}
		if (!_univerjs_core.Tools.diffValue(oldPositionV, docTransform.positionV)) {
			const updateAction = jsonX.replaceOp([
				"drawings",
				drawingId,
				"docTransform",
				"positionV"
			], oldPositionV, docTransform.positionV);
			rawActions.push(updateAction);
		}
		if (!_univerjs_core.Tools.diffValue(oldSize, docTransform.size)) {
			const updateAction = jsonX.replaceOp([
				"drawings",
				drawingId,
				"docTransform",
				"size"
			], oldSize, docTransform.size);
			rawActions.push(updateAction);
		}
		if (!_univerjs_core.Tools.diffValue(oldAngle, docTransform.angle)) {
			const updateAction = jsonX.replaceOp([
				"drawings",
				drawingId,
				"docTransform",
				"angle"
			], oldAngle, docTransform.angle);
			rawActions.push(updateAction);
		}
		const doMutation = {
			id: _univerjs_docs.RichTextEditingMutation.id,
			params: {
				unitId,
				actions: [],
				textRanges: null,
				debounce: true
			}
		};
		doMutation.params.actions = rawActions.reduce((acc, cur) => {
			return _univerjs_core.JSONX.compose(acc, cur);
		}, null);
		const result = commandService.syncExecuteCommand(doMutation.id, doMutation.params);
		const skeleton = renderObject.with(_univerjs_docs.DocSkeletonManagerService).getSkeleton();
		accessor.get(DocRefreshDrawingsService).refreshDrawings(skeleton);
		transformer.refreshControls();
		return Boolean(result);
	}
};

//#endregion
//#region src/views/doc-image-panel/DocDrawingTextWrap.tsx
const MIN_MARGIN = 0;
const MAX_MARGIN = 100;
const DocDrawingTextWrap = (props) => {
	var _renderManagerService;
	const renderManagerService = (0, _univerjs_ui.useDependency)(_univerjs_engine_render.IRenderManagerService);
	const drawingParam = props.drawings[0];
	const scene = drawingParam ? (_renderManagerService = renderManagerService.getRenderUnitById(drawingParam.unitId)) === null || _renderManagerService === void 0 ? void 0 : _renderManagerService.scene : void 0;
	return drawingParam && scene ? /* @__PURE__ */ (0, react_jsx_runtime.jsx)(DocDrawingTextWrapContent, { ...props }) : null;
};
function DocDrawingTextWrapContent(props) {
	const commandService = (0, _univerjs_ui.useDependency)(_univerjs_core.ICommandService);
	const localeService = (0, _univerjs_ui.useDependency)(_univerjs_core.LocaleService);
	const drawingManagerService = (0, _univerjs_ui.useDependency)(_univerjs_drawing.IDrawingManagerService);
	const univerInstanceService = (0, _univerjs_ui.useDependency)(_univerjs_core.IUniverInstanceService);
	const { drawings } = props;
	const { unitId } = drawings[0];
	const documentDataModel = univerInstanceService.getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
	const [disableWrapText, setDisableWrapText] = (0, react.useState)(true);
	const [disableDistTB, setDisableDistTB] = (0, react.useState)(true);
	const [disableDistLR, setDisableDistLR] = (0, react.useState)(true);
	const [wrappingStyle, setWrappingStyle] = (0, react.useState)(_univerjs_docs_drawing.TextWrappingStyle.INLINE);
	const [wrapText, setWrapText] = (0, react.useState)("");
	const [distToText, setDistToText] = (0, react.useState)({
		distT: 0,
		distL: 0,
		distB: 0,
		distR: 0
	});
	const [showPanel, setShowPanel] = (0, react.useState)(true);
	function handleWrappingStyleChange(value) {
		setWrappingStyle(value);
		const focusDrawings = drawingManagerService.getFocusDrawings();
		if (focusDrawings.length === 0) return;
		const { unitId, subUnitId } = focusDrawings[0];
		const drawings = focusDrawings.map(({ unitId, subUnitId, drawingId }) => ({
			unitId,
			subUnitId,
			drawingId
		}));
		commandService.executeCommand(_univerjs_docs_drawing.UpdateDocDrawingWrappingStyleCommand.id, {
			unitId,
			subUnitId,
			drawings,
			wrappingStyle: value
		});
	}
	function handleWrapTextChange(value) {
		setWrapText(value);
		const focusDrawings = drawingManagerService.getFocusDrawings();
		if (focusDrawings.length === 0) return;
		const drawings = focusDrawings.map((drawing) => {
			return {
				unitId: drawing.unitId,
				subUnitId: drawing.subUnitId,
				drawingId: drawing.drawingId
			};
		});
		commandService.executeCommand(UpdateDocDrawingWrapTextCommand.id, {
			unitId: focusDrawings[0].unitId,
			subUnitId: focusDrawings[0].unitId,
			drawings,
			wrapText: value
		});
	}
	function handleDistToTextChange(value, direction) {
		if (value == null) return;
		const newDistToText = {
			...distToText,
			[direction]: value
		};
		setDistToText(newDistToText);
		const focusDrawings = drawingManagerService.getFocusDrawings();
		if (focusDrawings.length === 0) return;
		const drawings = focusDrawings.map((drawing) => {
			return {
				unitId: drawing.unitId,
				subUnitId: drawing.subUnitId,
				drawingId: drawing.drawingId
			};
		});
		commandService.executeCommand(UpdateDocDrawingDistanceCommand.id, {
			unitId: focusDrawings[0].unitId,
			subUnitId: focusDrawings[0].unitId,
			drawings,
			dist: { [direction]: value }
		});
	}
	function updateFocusDrawingState() {
		const focusDrawings = drawingManagerService.getFocusDrawings();
		if (focusDrawings.length === 0) return;
		updateState(focusDrawings[0]);
	}
	function updateState(drawingParam) {
		var _documentDataModel$ge;
		const drawing = documentDataModel === null || documentDataModel === void 0 || (_documentDataModel$ge = documentDataModel.getSnapshot()) === null || _documentDataModel$ge === void 0 || (_documentDataModel$ge = _documentDataModel$ge.drawings) === null || _documentDataModel$ge === void 0 ? void 0 : _documentDataModel$ge[drawingParam.drawingId];
		if (drawing == null) return;
		const { distT = 0, distL = 0, distB = 0, distR = 0, layoutType = _univerjs_core.PositionedObjectLayoutType.INLINE, behindDoc = _univerjs_core.BooleanNumber.FALSE, wrapText = _univerjs_core.WrapTextType.BOTH_SIDES } = drawing;
		setDistToText({
			distT,
			distL,
			distB,
			distR
		});
		setWrapText(wrapText);
		setDisableWrapText(layoutType !== _univerjs_core.PositionedObjectLayoutType.WRAP_SQUARE);
		if (layoutType === _univerjs_core.PositionedObjectLayoutType.WRAP_NONE || layoutType === _univerjs_core.PositionedObjectLayoutType.INLINE) setDisableDistTB(true);
		else setDisableDistTB(false);
		if (layoutType === _univerjs_core.PositionedObjectLayoutType.WRAP_NONE || layoutType === _univerjs_core.PositionedObjectLayoutType.INLINE || layoutType === _univerjs_core.PositionedObjectLayoutType.WRAP_TOP_AND_BOTTOM) setDisableDistLR(true);
		else setDisableDistLR(false);
		if (layoutType === _univerjs_core.PositionedObjectLayoutType.WRAP_NONE) if (behindDoc === _univerjs_core.BooleanNumber.TRUE) setWrappingStyle(_univerjs_docs_drawing.TextWrappingStyle.BEHIND_TEXT);
		else setWrappingStyle(_univerjs_docs_drawing.TextWrappingStyle.IN_FRONT_OF_TEXT);
		else switch (layoutType) {
			case _univerjs_core.PositionedObjectLayoutType.INLINE:
				setWrappingStyle(_univerjs_docs_drawing.TextWrappingStyle.INLINE);
				break;
			case _univerjs_core.PositionedObjectLayoutType.WRAP_SQUARE:
				setWrappingStyle(_univerjs_docs_drawing.TextWrappingStyle.WRAP_SQUARE);
				break;
			case _univerjs_core.PositionedObjectLayoutType.WRAP_TOP_AND_BOTTOM:
				setWrappingStyle(_univerjs_docs_drawing.TextWrappingStyle.WRAP_TOP_AND_BOTTOM);
				break;
			default: throw new Error(`Unsupported layout type: ${layoutType}`);
		}
	}
	(0, react.useEffect)(() => {
		updateFocusDrawingState();
		const subscription = drawingManagerService.focus$.subscribe((drawingParams) => {
			if (drawingParams.length === 0) {
				setShowPanel(false);
				return;
			}
			setShowPanel(true);
			updateState(drawingParams[0]);
		});
		const mutationListener = commandService.onCommandExecuted(async (command) => {
			if (command.id === _univerjs_docs.RichTextEditingMutation.id) updateFocusDrawingState();
		});
		return () => {
			subscription.unsubscribe();
			mutationListener.dispose();
		};
	}, []);
	return /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: (0, _univerjs_design.clsx)("univer-grid univer-gap-2 univer-py-2 univer-text-gray-400", { "univer-hidden": !showPanel }),
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("header", {
				className: "univer-text-gray-600 dark:!univer-text-gray-200",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: localeService.t("docs-drawing-ui.image-text-wrap.title") })
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "univer-text-gray-600 dark:!univer-text-gray-200",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: localeService.t("docs-drawing-ui.image-text-wrap.wrappingStyle") })
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_univerjs_design.RadioGroup, {
				value: wrappingStyle,
				onChange: handleWrappingStyleChange,
				direction: "vertical",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Radio, {
						value: _univerjs_docs_drawing.TextWrappingStyle.INLINE,
						children: localeService.t("docs-drawing-ui.image-text-wrap.inline")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Radio, {
						value: _univerjs_docs_drawing.TextWrappingStyle.WRAP_SQUARE,
						children: localeService.t("docs-drawing-ui.image-text-wrap.square")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Radio, {
						value: _univerjs_docs_drawing.TextWrappingStyle.WRAP_TOP_AND_BOTTOM,
						children: localeService.t("docs-drawing-ui.image-text-wrap.topAndBottom")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Radio, {
						value: _univerjs_docs_drawing.TextWrappingStyle.BEHIND_TEXT,
						children: localeService.t("docs-drawing-ui.image-text-wrap.behindText")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Radio, {
						value: _univerjs_docs_drawing.TextWrappingStyle.IN_FRONT_OF_TEXT,
						children: localeService.t("docs-drawing-ui.image-text-wrap.inFrontText")
					})
				]
			}) }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "univer-text-gray-600 dark:!univer-text-gray-200",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: localeService.t("docs-drawing-ui.image-text-wrap.wrapText") })
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, react_jsx_runtime.jsxs)(_univerjs_design.RadioGroup, {
				disabled: disableWrapText,
				value: wrapText,
				onChange: handleWrapTextChange,
				direction: "horizontal",
				children: [
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Radio, {
						value: _univerjs_core.WrapTextType.BOTH_SIDES,
						children: localeService.t("docs-drawing-ui.image-text-wrap.bothSide")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Radio, {
						value: _univerjs_core.WrapTextType.LEFT,
						children: localeService.t("docs-drawing-ui.image-text-wrap.leftOnly")
					}),
					/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.Radio, {
						value: _univerjs_core.WrapTextType.RIGHT,
						children: localeService.t("docs-drawing-ui.image-text-wrap.rightOnly")
					})
				]
			}) }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
				className: "univer-text-gray-600 dark:!univer-text-gray-200",
				children: /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", { children: localeService.t("docs-drawing-ui.image-text-wrap.distanceFromText") })
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "univer-grid univer-grid-cols-2 univer-gap-2 [&>div]:univer-grid [&>div]:univer-gap-2",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: localeService.t("docs-drawing-ui.image-text-wrap.top") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.InputNumber, {
					min: MIN_MARGIN,
					max: MAX_MARGIN,
					disabled: disableDistTB,
					precision: 1,
					value: distToText.distT,
					onChange: (val) => {
						handleDistToTextChange(val, "distT");
					}
				})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: localeService.t("docs-drawing-ui.image-text-wrap.left") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.InputNumber, {
					min: MIN_MARGIN,
					max: MAX_MARGIN,
					disabled: disableDistLR,
					precision: 1,
					value: distToText.distL,
					onChange: (val) => {
						handleDistToTextChange(val, "distL");
					}
				})] })]
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
				className: "univer-grid univer-grid-cols-2 univer-gap-2 [&>div]:univer-grid [&>div]:univer-gap-2",
				children: [/* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: localeService.t("docs-drawing-ui.image-text-wrap.bottom") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.InputNumber, {
					min: MIN_MARGIN,
					max: MAX_MARGIN,
					disabled: disableDistTB,
					precision: 1,
					value: distToText.distB,
					onChange: (val) => {
						handleDistToTextChange(val, "distB");
					}
				})] }), /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, react_jsx_runtime.jsx)("span", { children: localeService.t("docs-drawing-ui.image-text-wrap.right") }), /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_design.InputNumber, {
					min: MIN_MARGIN,
					max: MAX_MARGIN,
					disabled: disableDistLR,
					precision: 1,
					value: distToText.distR,
					onChange: (val) => {
						handleDistToTextChange(val, "distR");
					}
				})] })]
			})
		]
	});
}

//#endregion
//#region src/views/doc-image-panel/DocDrawingPanel.tsx
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
const DocDrawingPanel = () => {
	const drawingManagerService = (0, _univerjs_ui.useDependency)(_univerjs_drawing.IDrawingManagerService);
	const drawings = (0, _univerjs_ui.useObservable)(() => drawingManagerService.focus$, drawingManagerService.getFocusDrawings(), false, [drawingManagerService]);
	return !!(drawings === null || drawings === void 0 ? void 0 : drawings.length) && /* @__PURE__ */ (0, react_jsx_runtime.jsxs)("div", {
		className: "univer-text-sm",
		children: [
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_drawing_ui.DrawingCommonPanel, {
				drawings,
				hasAlign: false,
				hasCropper: true,
				hasGroup: false,
				hasTransform: false
			}),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(DocDrawingTextWrap, { drawings }),
			/* @__PURE__ */ (0, react_jsx_runtime.jsx)(DocDrawingPosition, { drawings })
		]
	});
};

//#endregion
//#region src/controllers/components.controller.ts
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
let ComponentsController = class ComponentsController extends _univerjs_core.Disposable {
	constructor(_componentManager) {
		super();
		this._componentManager = _componentManager;
		this._registerComponents();
	}
	_registerComponents() {
		this.disposeWithMe(this._componentManager.register(COMPONENT_DOC_DRAWING_PANEL, DocDrawingPanel));
	}
};
ComponentsController = __decorate([__decorateParam(0, (0, _univerjs_core.Inject)(_univerjs_ui.ComponentManager))], ComponentsController);

//#endregion
//#region src/controllers/doc-drawing-notification.controller.ts
function getAddOrRemoveDrawings(actions) {
	if (_univerjs_core.JSONX.isNoop(actions) || !Array.isArray(actions)) return null;
	const drawingsOp = actions.find((action) => Array.isArray(action) && (action === null || action === void 0 ? void 0 : action[0]) === "drawings");
	if (drawingsOp == null || !Array.isArray(drawingsOp) || drawingsOp.length < 3) return null;
	if (typeof drawingsOp[1] === "string" && typeof drawingsOp[2] !== "object") return null;
	if (Array.isArray(drawingsOp[1]) && typeof drawingsOp[1][1] !== "object") return null;
	const drawings = [];
	if (Array.isArray(drawingsOp === null || drawingsOp === void 0 ? void 0 : drawingsOp[1])) {
		for (const op of drawingsOp) if (Array.isArray(op)) {
			var _ref, _ref2;
			drawings.push({
				type: (op === null || op === void 0 || (_ref = op[1]) === null || _ref === void 0 ? void 0 : _ref.i) ? "add" : "remove",
				drawingId: op === null || op === void 0 ? void 0 : op[0],
				drawing: op === null || op === void 0 || (_ref2 = op[1]) === null || _ref2 === void 0 ? void 0 : _ref2.i
			});
		}
	} else {
		var _drawingsOp$, _drawingsOp$2;
		drawings.push({
			type: ((_drawingsOp$ = drawingsOp[2]) === null || _drawingsOp$ === void 0 ? void 0 : _drawingsOp$.i) ? "add" : "remove",
			drawingId: drawingsOp[1],
			drawing: (_drawingsOp$2 = drawingsOp[2]) === null || _drawingsOp$2 === void 0 ? void 0 : _drawingsOp$2.i
		});
	}
	return drawings;
}
function getReOrderedDrawings(actions) {
	if (!Array.isArray(actions) || actions.length < 3 || actions[0] !== "drawingsOrder") return [];
	const drawingIndexes = [];
	for (let i = 1; i < actions.length; i++) {
		const action = actions[i];
		if (Array.isArray(action) && typeof action[0] === "number" && typeof action[1] === "object") drawingIndexes.push(action[0]);
		else {
			drawingIndexes.length = 0;
			break;
		}
	}
	return drawingIndexes;
}
function collectUpdatedDrawingIds(actions, drawingIds = /* @__PURE__ */ new Set()) {
	if (_univerjs_core.JSONX.isNoop(actions) || !Array.isArray(actions)) return drawingIds;
	if (actions[0] === "drawings") {
		const drawingKeyOrOps = actions[1];
		if (typeof drawingKeyOrOps === "string") {
			drawingIds.add(drawingKeyOrOps);
			return drawingIds;
		}
		actions.slice(1).forEach((action) => {
			if (Array.isArray(action) && typeof action[0] === "string") drawingIds.add(action[0]);
		});
		return drawingIds;
	}
	actions.forEach((action) => {
		if (Array.isArray(action)) collectUpdatedDrawingIds(action, drawingIds);
	});
	return drawingIds;
}
let DocDrawingAddRemoveController = class DocDrawingAddRemoveController extends _univerjs_core.Disposable {
	constructor(_univerInstanceService, _commandService, _drawingManagerService, _docDrawingService, _renderManagerService, _docRefreshDrawingsService) {
		super();
		this._univerInstanceService = _univerInstanceService;
		this._commandService = _commandService;
		this._drawingManagerService = _drawingManagerService;
		this._docDrawingService = _docDrawingService;
		this._renderManagerService = _renderManagerService;
		this._docRefreshDrawingsService = _docRefreshDrawingsService;
		this._initialize();
	}
	_initialize() {
		this._commandExecutedListener();
	}
	_commandExecutedListener() {
		this.disposeWithMe(this._commandService.beforeCommandExecuted((command) => {
			if (command.id !== _univerjs_docs.RichTextEditingMutation.id) return;
			const { unitId, actions, isSync, syncer } = command.params;
			const addOrRemoveDrawings = getAddOrRemoveDrawings(actions);
			if (addOrRemoveDrawings != null) for (const { type, drawingId, drawing } of addOrRemoveDrawings) {
				if (isSync && (drawing === null || drawing === void 0 ? void 0 : drawing.unitId) === syncer) continue;
				if (type === "add") this._addDrawings(unitId, [drawing]);
				else this._removeDrawings(unitId, [drawingId]);
			}
		}));
		this.disposeWithMe(this._commandService.beforeCommandExecuted((command) => {
			if (command.id !== _univerjs_docs_drawing.UpdateDocDrawingWrappingStyleCommand.id) return;
			this._preserveWrappingStylePosition(command.params);
		}));
		this.disposeWithMe(this._commandService.onCommandExecuted((command) => {
			if (command.id !== _univerjs_docs.RichTextEditingMutation.id) return;
			const { unitId, actions } = command.params;
			if (getReOrderedDrawings(actions).length > 0) this._updateDrawingsOrder(unitId);
			const updatedDrawingIds = [...collectUpdatedDrawingIds(actions)];
			if (updatedDrawingIds.length > 0) this._syncDrawingDataFromSnapshot(unitId, updatedDrawingIds);
		}));
		this.disposeWithMe(this._commandService.onCommandExecuted((command) => {
			if (command.id !== _univerjs_docs_drawing.UpdateDrawingDocTransformCommand.id && command.id !== _univerjs_docs_drawing.UpdateDocDrawingWrappingStyleCommand.id) return;
			const { unitId } = command.params;
			const renderObject = this._renderManagerService.getRenderUnitById(unitId);
			const scene = renderObject === null || renderObject === void 0 ? void 0 : renderObject.scene;
			if (renderObject == null || scene == null) return;
			if (command.id === _univerjs_docs_drawing.UpdateDocDrawingWrappingStyleCommand.id) this._docRefreshDrawingsService.refreshDrawings(renderObject.with(_univerjs_docs.DocSkeletonManagerService).getSkeleton());
			scene.getTransformerByCreate().refreshControls();
		}));
		this.disposeWithMe(this._commandService.onCommandExecuted((command) => {
			var _this$_univerInstance;
			if (command.id !== _univerjs_core.UndoCommand.id && command.id !== _univerjs_core.RedoCommand.id) return;
			const unitId = (_this$_univerInstance = this._univerInstanceService.getCurrentUnitOfType(_univerjs_core.UniverInstanceType.UNIVER_DOC)) === null || _this$_univerInstance === void 0 ? void 0 : _this$_univerInstance.getUnitId();
			const focusedDrawings = this._drawingManagerService.getFocusDrawings();
			if (unitId == null || focusedDrawings.length === 0) return;
			const renderObject = this._renderManagerService.getRenderUnitById(unitId);
			const scene = renderObject === null || renderObject === void 0 ? void 0 : renderObject.scene;
			if (renderObject == null || scene == null) return false;
			this._docRefreshDrawingsService.refreshDrawings(renderObject.with(_univerjs_docs.DocSkeletonManagerService).getSkeleton());
			scene.getTransformerByCreate().refreshControls();
		}));
	}
	_preserveWrappingStylePosition(params) {
		if (params.wrappingStyle === _univerjs_docs_drawing.TextWrappingStyle.INLINE) return;
		const { unitId } = params;
		const documentDataModel = this._univerInstanceService.getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
		const renderObject = this._renderManagerService.getRenderUnitById(unitId);
		const skeletonManager = renderObject === null || renderObject === void 0 ? void 0 : renderObject.with(_univerjs_docs.DocSkeletonManagerService);
		const skeletonData = skeletonManager === null || skeletonManager === void 0 ? void 0 : skeletonManager.getSkeleton().getSkeletonData();
		const viewModel = skeletonManager === null || skeletonManager === void 0 ? void 0 : skeletonManager.getViewModel();
		if (!documentDataModel || !skeletonData || !viewModel) return;
		const editArea = viewModel.getEditArea();
		const { pages, skeHeaders, skeFooters } = skeletonData;
		const oldDrawings = documentDataModel.getDrawings() ?? {};
		params.drawings = params.drawings.map((drawing) => {
			const oldDrawing = oldDrawings[drawing.drawingId];
			if (!oldDrawing) return drawing;
			let drawingAnchor = null;
			for (const page of pages) {
				const { headerId, footerId, marginTop, marginLeft, marginBottom, pageWidth, pageHeight } = page;
				if (editArea === _univerjs_engine_render.DocumentEditArea.HEADER) {
					var _skeHeaders$get;
					const header = (_skeHeaders$get = skeHeaders.get(headerId)) === null || _skeHeaders$get === void 0 ? void 0 : _skeHeaders$get.get(pageWidth);
					if (header) drawingAnchor = findDrawingAnchorInPage(header, drawing.drawingId, header.marginTop, marginLeft);
				} else if (editArea === _univerjs_engine_render.DocumentEditArea.FOOTER) {
					var _skeFooters$get;
					const footer = (_skeFooters$get = skeFooters.get(footerId)) === null || _skeFooters$get === void 0 ? void 0 : _skeFooters$get.get(pageWidth);
					if (footer) drawingAnchor = findDrawingAnchorInPage(footer, drawing.drawingId, pageHeight - marginBottom + footer.marginTop, marginLeft);
				} else drawingAnchor = findDrawingAnchorInPage(page, drawing.drawingId, marginTop, marginLeft);
				if (drawingAnchor) break;
			}
			if (!drawingAnchor) return drawing;
			const oldPositionH = oldDrawing.docTransform.positionH;
			const oldPositionV = oldDrawing.docTransform.positionV;
			const { horizontal: posOffsetH, vertical: posOffsetV } = resolveDrawingAnchorOffsets(drawingAnchor, oldPositionH, oldPositionV);
			return {
				...oldDrawing,
				...drawing,
				docTransform: {
					...oldDrawing.docTransform,
					...drawing.docTransform,
					positionH: {
						relativeFrom: oldPositionH.relativeFrom,
						posOffset: posOffsetH
					},
					positionV: {
						relativeFrom: oldPositionV.relativeFrom,
						posOffset: posOffsetV
					}
				}
			};
		});
	}
	_addDrawings(unitId, drawings) {
		const drawingManagerService = this._drawingManagerService;
		const docDrawingService = this._docDrawingService;
		const { subUnitId, redo: op, objects } = this._docDrawingService.getBatchAddOp(drawings);
		drawingManagerService.applyJson1(unitId, subUnitId, op);
		docDrawingService.applyJson1(unitId, subUnitId, op);
		drawingManagerService.addNotification(objects);
		docDrawingService.addNotification(objects);
	}
	_removeDrawings(unitId, drawingIds) {
		const drawingManagerService = this._drawingManagerService;
		const docDrawingService = this._docDrawingService;
		const { subUnitId, redo: op, objects } = this._docDrawingService.getBatchRemoveOp(drawingIds.map((drawingId) => {
			return {
				unitId,
				subUnitId: unitId,
				drawingId
			};
		}));
		drawingManagerService.applyJson1(unitId, subUnitId, op);
		docDrawingService.applyJson1(unitId, subUnitId, op);
		drawingManagerService.removeNotification(objects);
		docDrawingService.removeNotification(objects);
	}
	_updateDrawingsOrder(unitId) {
		const documentDataModel = this._univerInstanceService.getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
		if (documentDataModel == null) return;
		const { drawings, drawingsOrder } = documentDataModel.getSnapshot();
		if (drawingsOrder == null) return;
		const renderOrder = (0, _univerjs_docs_drawing.getDocDrawingRenderOrder)(drawingsOrder, drawings);
		const drawingManagerService = this._drawingManagerService;
		const docDrawingService = this._docDrawingService;
		drawingManagerService.setDrawingOrder(unitId, unitId, renderOrder);
		docDrawingService.setDrawingOrder(unitId, unitId, drawingsOrder);
		const objects = {
			unitId,
			subUnitId: unitId,
			drawingIds: renderOrder
		};
		drawingManagerService.orderNotification(objects);
		docDrawingService.orderNotification({
			unitId,
			subUnitId: unitId,
			drawingIds: drawingsOrder
		});
	}
	_syncDrawingDataFromSnapshot(unitId, drawingIds) {
		const documentDataModel = this._univerInstanceService.getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
		if (documentDataModel == null) return;
		const { drawings = {}, drawingsOrder = [] } = documentDataModel.getSnapshot();
		const drawingData = drawings;
		const previousDrawings = this._docDrawingService.getDrawingData(unitId, unitId);
		const orderChanged = drawingsOrder !== this._docDrawingService.getDrawingOrder(unitId, unitId) || drawingIds.some((drawingId) => {
			const previous = previousDrawings[drawingId];
			const current = drawingData[drawingId];
			return ((previous === null || previous === void 0 ? void 0 : previous.layoutType) === _univerjs_core.PositionedObjectLayoutType.WRAP_NONE && previous.behindDoc === _univerjs_core.BooleanNumber.TRUE) !== ((current === null || current === void 0 ? void 0 : current.layoutType) === _univerjs_core.PositionedObjectLayoutType.WRAP_NONE && current.behindDoc === _univerjs_core.BooleanNumber.TRUE);
		});
		const renderedDrawings = { ...this._drawingManagerService.getDrawingData(unitId, unitId) };
		for (const drawingId of drawingIds) {
			const current = drawingData[drawingId];
			if (current) renderedDrawings[drawingId] = { ...current };
			else delete renderedDrawings[drawingId];
		}
		this._docDrawingService.setDrawingData(unitId, unitId, drawingData);
		this._drawingManagerService.setDrawingData(unitId, unitId, renderedDrawings);
		if (orderChanged) {
			this._docDrawingService.setDrawingOrder(unitId, unitId, drawingsOrder);
			this._drawingManagerService.setDrawingOrder(unitId, unitId, (0, _univerjs_docs_drawing.getDocDrawingRenderOrder)(drawingsOrder, drawings));
		}
		const objects = drawingIds.filter((drawingId) => drawingData[drawingId] != null).map((drawingId) => ({
			unitId,
			subUnitId: unitId,
			drawingId
		}));
		if (objects.length === 0) return;
		this._docDrawingService.updateNotification(objects);
		this._drawingManagerService.updateNotification(objects);
	}
};
DocDrawingAddRemoveController = __decorate([
	__decorateParam(0, _univerjs_core.IUniverInstanceService),
	__decorateParam(1, _univerjs_core.ICommandService),
	__decorateParam(2, _univerjs_drawing.IDrawingManagerService),
	__decorateParam(3, _univerjs_docs_drawing.IDocDrawingService),
	__decorateParam(4, _univerjs_engine_render.IRenderManagerService),
	__decorateParam(5, (0, _univerjs_core.Inject)(DocRefreshDrawingsService))
], DocDrawingAddRemoveController);

//#endregion
//#region src/views/DocPrintingFloatDom.tsx
const DocPrintingFloatDom = (props) => {
	const { floatDomInfos, scene, offset, bound } = props;
	const width = bound.right - bound.left;
	const height = bound.bottom - bound.top;
	return /* @__PURE__ */ (0, react_jsx_runtime.jsx)("div", {
		className: "univer-absolute univer-left-0 univer-top-0",
		children: (0, react.useMemo)(() => floatDomInfos.map((info) => {
			const { width = 0, height = 0, left = 0, top = 0 } = info.transform;
			const domPos = calcDocFloatDomPositionByRect({
				left,
				right: left + width,
				top,
				bottom: top + height
			}, scene);
			const floatDom = {
				position$: new rxjs.BehaviorSubject(domPos),
				position: domPos,
				id: info.drawingId,
				componentKey: info.componentKey,
				onPointerMove: () => {},
				onPointerDown: () => {},
				onPointerUp: () => {},
				onWheel: () => {},
				unitId: info.unitId,
				data: info.data
			};
			return [info.drawingId, floatDom];
		}).filter(([_, floatDom]) => !(floatDom.position.endX < 0 || floatDom.position.endY < 0 || floatDom.position.startX > width || floatDom.position.startY > height)), [
			floatDomInfos,
			scene,
			offset,
			width,
			height
		]).map(([id, floatDom]) => /* @__PURE__ */ (0, react_jsx_runtime.jsx)(_univerjs_ui.PrintFloatDomSingle, {
			layer: floatDom,
			id,
			position: floatDom.position
		}, id))
	});
};
function mountDocPrintingFloatDom(props, root, injector) {
	(0, _univerjs_design.render)(/* @__PURE__ */ (0, react_jsx_runtime.jsx)((0, _univerjs_ui.connectInjector)(DocPrintingFloatDom, injector), { ...props }), root);
	return () => (0, _univerjs_design.unmount)(root);
}

//#endregion
//#region src/controllers/doc-drawing-printing.controller.ts
let DocDrawingPrintingController = class DocDrawingPrintingController extends _univerjs_core.Disposable {
	constructor(_docPrintInterceptorService, _drawingRenderService, _drawingManagerService, _componetManager, _injector) {
		super();
		this._docPrintInterceptorService = _docPrintInterceptorService;
		this._drawingRenderService = _drawingRenderService;
		this._drawingManagerService = _drawingManagerService;
		this._componetManager = _componetManager;
		this._injector = _injector;
		this._initPrinting();
		this._initPrintingDom();
	}
	_initPrinting() {
		this.disposeWithMe(this._docPrintInterceptorService.interceptor.intercept(this._docPrintInterceptorService.interceptor.getInterceptPoints().PRINTING_COMPONENT_COLLECT, { handler: (_param, pos, next) => {
			const { unitId, scene, skeleton, pageIndex } = pos;
			const unitData = this._drawingManagerService.getDrawingDataForUnit(unitId);
			const subUnitData = unitData === null || unitData === void 0 ? void 0 : unitData[unitId];
			const visibleDrawingIds = this._docPrintInterceptorService.getPageDrawingIds(skeleton, pageIndex);
			if (subUnitData) subUnitData.order.forEach((id) => {
				if (visibleDrawingIds && !visibleDrawingIds.has(id)) return;
				const drawing = subUnitData.data[id];
				if (drawing.drawingType !== _univerjs_core.DrawingTypeEnum.DRAWING_CHART && drawing.drawingType !== _univerjs_core.DrawingTypeEnum.DRAWING_DOM) this._drawingRenderService.renderDrawing(drawing, scene);
			});
			return next();
		} }));
	}
	_initPrintingDom() {
		this.disposeWithMe(this._docPrintInterceptorService.interceptor.intercept(this._docPrintInterceptorService.interceptor.getInterceptPoints().PRINTING_DOM_COLLECT, { handler: (disposableCollection, pos, next) => {
			const { unitId, skeleton, pageIndex } = pos;
			const unitData = this._drawingManagerService.getDrawingDataForUnit(unitId);
			const subUnitData = unitData === null || unitData === void 0 ? void 0 : unitData[unitId];
			const visibleDrawingIds = this._docPrintInterceptorService.getPageDrawingIds(skeleton, pageIndex);
			if (subUnitData) {
				const unmountPrintingFloatDom = mountDocPrintingFloatDom({
					unitId,
					floatDomInfos: subUnitData.order.filter((id) => !visibleDrawingIds || visibleDrawingIds.has(id)).map((id) => {
						const drawing = subUnitData.data[id];
						if (drawing.drawingType === _univerjs_core.DrawingTypeEnum.DRAWING_CHART) return {
							...drawing,
							componentKey: this._componetManager.get(_univerjs_core.DOC_DRAWING_PRINTING_COMPONENT_KEY)
						};
						if (drawing.drawingType === _univerjs_core.DrawingTypeEnum.DRAWING_DOM) {
							const printingComponentKey = this._docPrintInterceptorService.getPrintComponent(drawing.componentKey);
							return {
								...drawing,
								componentKey: this._componetManager.get(printingComponentKey || drawing.componentKey)
							};
						}
						return null;
					}).filter(Boolean),
					scene: pos.scene,
					skeleton: pos.skeleton,
					offset: pos.offset,
					bound: pos.bound
				}, pos.root, this._injector);
				disposableCollection === null || disposableCollection === void 0 || disposableCollection.add(() => {
					unmountPrintingFloatDom();
				});
				return next(disposableCollection);
			}
		} }));
	}
};
DocDrawingPrintingController = __decorate([
	__decorateParam(0, (0, _univerjs_core.Inject)(_univerjs_docs_ui.DocPrintInterceptorService)),
	__decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_drawing_ui.DrawingRenderService)),
	__decorateParam(2, _univerjs_drawing.IDrawingManagerService),
	__decorateParam(3, (0, _univerjs_core.Inject)(_univerjs_ui.ComponentManager)),
	__decorateParam(4, (0, _univerjs_core.Inject)(_univerjs_core.Injector))
], DocDrawingPrintingController);

//#endregion
//#region src/controllers/render-controllers/doc-drawing-transform-update.controller.ts
function mergePublishedDrawing(drawings, next) {
	const current = drawings[next.drawingId];
	if (current == null) {
		drawings[next.drawingId] = next;
		return;
	}
	if (next.selectable && !current.selectable) {
		current.selectable = true;
		current.transform = next.transform;
	}
	if (next.isMultiTransform === _univerjs_core.BooleanNumber.TRUE) current.transforms.push(next.transform);
}
function isSameTransformValue(left, right) {
	return left === right || JSON.stringify(left) === JSON.stringify(right);
}
function shouldRefreshDocDrawingTransform(current, next) {
	if (!current || next.customBlockRenderViewport != null) return true;
	return !isSameTransformValue(current.transform, next.transform) || !isSameTransformValue(current.transforms, next.transforms) || current.isMultiTransform !== next.isMultiTransform || current.hidden !== next.hidden || current.behindText !== next.behindText || current.selectable !== next.selectable;
}
/**
* Overlay drawings do not participate in text layout. While their skeleton
* anchor remains valid, use the latest model transform so drag/resize/front-
* behind changes can paint immediately without rebuilding document pages.
*/
function getDocsOverlayRuntimeDrawing(skeletonDrawing, currentDrawing) {
	return skeletonDrawing.layoutType === _univerjs_core.PositionedObjectLayoutType.WRAP_NONE && (currentDrawing === null || currentDrawing === void 0 ? void 0 : currentDrawing.layoutType) === _univerjs_core.PositionedObjectLayoutType.WRAP_NONE ? currentDrawing : skeletonDrawing;
}
var DocDrawingPublicationTracker = class {
	constructor() {
		_defineProperty(this, "_generation", -1);
		_defineProperty(this, "_publishedPageCount", 0);
		_defineProperty(this, "_drawingOccurrenceCount", 0);
	}
	reset() {
		this._generation = -1;
		this._publishedPageCount = 0;
		this._drawingOccurrenceCount = 0;
	}
	shouldRefresh(skeleton, progress) {
		if (!progress.didPublish && !progress.complete) return false;
		const isNewGeneration = progress.generation !== this._generation;
		if (isNewGeneration) {
			this._generation = progress.generation;
			this._publishedPageCount = 0;
			this._drawingOccurrenceCount = 0;
		}
		const skeletonData = skeleton.getSkeletonData();
		if (skeletonData == null) return false;
		const previousPublishedPageCount = this._publishedPageCount;
		const publishedPageCount = Math.min(progress.publishedPageCount, skeletonData.pages.length);
		this._publishedPageCount = Math.max(previousPublishedPageCount, publishedPageCount);
		const drawingOccurrenceCount = countPublishedDrawingOccurrences(skeletonData, publishedPageCount);
		const didDrawingOccurrencesChange = !(isNewGeneration && progress.reason === "edit") && drawingOccurrenceCount !== this._drawingOccurrenceCount;
		this._drawingOccurrenceCount = drawingOccurrenceCount;
		if (progress.complete || progress.didPublishAnchor || didDrawingOccurrencesChange) return true;
		if (isNewGeneration && progress.reason === "edit") return false;
		return hasNewPublishedPageDrawings(skeletonData, previousPublishedPageCount, publishedPageCount);
	}
};
function getDocsDrawingPageClipBounds(config) {
	const { docsLeft, docsTop, pageOffsetLeft, pageOffsetTop, clipOffsetLeft = 0, clipOffsetTop = 0, page } = config;
	const { pageWidth, pageHeight } = page;
	if (!Number.isFinite(pageWidth) || !Number.isFinite(pageHeight) || pageWidth <= 0 || pageHeight <= 0) return;
	return {
		left: docsLeft + pageOffsetLeft + clipOffsetLeft,
		top: docsTop + pageOffsetTop + clipOffsetTop,
		width: pageWidth,
		height: pageHeight
	};
}
function getDocsDrawingClipPage(config) {
	const { drawing, hostPage, page } = config;
	if (hostPage == null || drawing.behindText !== true || drawing.transform == null) return page;
	const { width, height } = drawing.transform;
	if (width == null || height == null) return page;
	if (width > page.pageWidth || height > page.pageHeight) return hostPage;
	const widthRatio = width / hostPage.pageWidth;
	const heightRatio = height / hostPage.pageHeight;
	if (widthRatio >= .8 && heightRatio >= .8) return hostPage;
	return page;
}
function getDocsPageRelativeDrawingLeft(config) {
	const { hostPage, positionH, width } = config;
	if (positionH.relativeFrom !== _univerjs_core.ObjectRelativeFromH.PAGE) return;
	if (positionH.align === _univerjs_core.AlignTypeH.RIGHT) return hostPage.pageWidth - width;
	if (positionH.align === _univerjs_core.AlignTypeH.CENTER) return hostPage.pageWidth / 2 - width / 2;
	if (positionH.posOffset != null) return positionH.posOffset;
	return 0;
}
function getDocsPageRelativeDrawingTop(config) {
	const { hostPage, positionV, height } = config;
	if (positionV.relativeFrom !== _univerjs_core.ObjectRelativeFromV.PAGE) return;
	if (positionV.align === _univerjs_core.AlignTypeV.BOTTOM) return hostPage.pageHeight - height;
	if (positionV.align === _univerjs_core.AlignTypeV.CENTER) return hostPage.pageHeight / 2 - height / 2;
	if (positionV.posOffset != null) return positionV.posOffset;
	return 0;
}
function getDocsPageRelativeDrawingAnchorPage(config) {
	const { page, clipPage, hostPage } = config;
	if (hostPage != null && hostPage === clipPage) return hostPage;
	if (hostPage == null && page === clipPage) return page;
}
function getDocsDrawingBehindText(config) {
	const { drawingOrigin, hostPage } = config;
	if (hostPage != null) return true;
	return drawingOrigin.layoutType === _univerjs_core.PositionedObjectLayoutType.WRAP_NONE && drawingOrigin.behindDoc === _univerjs_core.BooleanNumber.TRUE;
}
function getDocsTableCellDrawingOffset(unitId, table, row, cell) {
	const sourceTableId = (0, _univerjs_engine_render.getTableIdAndSliceIndex)(table.tableId).tableId;
	const viewport = (0, _univerjs_engine_render.getDocsTableRenderViewport)(unitId, sourceTableId);
	const scrollLeft = hasHorizontalTableViewport(viewport) ? viewport.scrollLeft : 0;
	return {
		left: table.left + cell.left - scrollLeft + cell.marginLeft,
		top: table.top + row.top + cell.marginTop
	};
}
function hasHorizontalTableViewport(viewport) {
	return viewport != null && (viewport.leadingInsetLeft ?? 0) + viewport.contentWidth + (viewport.trailingInsetRight ?? 0) > viewport.viewportWidth;
}
function hasSkeletonPageDrawings(page) {
	var _page$skeTables, _page$skeColumnGroups;
	if (page.skeDrawings.size > 0) return true;
	let hasDrawings = false;
	(_page$skeTables = page.skeTables) === null || _page$skeTables === void 0 || _page$skeTables.forEach((table) => {
		table.rows.forEach((row) => {
			row.cells.forEach((cell) => {
				if (hasSkeletonPageDrawings(cell)) hasDrawings = true;
			});
		});
	});
	(_page$skeColumnGroups = page.skeColumnGroups) === null || _page$skeColumnGroups === void 0 || _page$skeColumnGroups.forEach((columnGroup) => {
		columnGroup.columns.forEach((column) => {
			if (hasSkeletonPageDrawings(column.page)) hasDrawings = true;
		});
	});
	return hasDrawings;
}
function countSkeletonPageDrawings(page) {
	var _page$skeTables2, _page$skeColumnGroups2;
	let count = page.skeDrawings.size;
	(_page$skeTables2 = page.skeTables) === null || _page$skeTables2 === void 0 || _page$skeTables2.forEach((table) => {
		table.rows.forEach((row) => {
			row.cells.forEach((cell) => {
				count += countSkeletonPageDrawings(cell);
			});
		});
	});
	(_page$skeColumnGroups2 = page.skeColumnGroups) === null || _page$skeColumnGroups2 === void 0 || _page$skeColumnGroups2.forEach((columnGroup) => {
		columnGroup.columns.forEach((column) => {
			count += countSkeletonPageDrawings(column.page);
		});
	});
	return count;
}
function countPublishedDrawingOccurrences(skeletonData, publishedPageCount) {
	let count = 0;
	for (let index = 0; index < publishedPageCount; index++) {
		var _skeletonData$skeHead, _skeletonData$skeFoot;
		const page = skeletonData.pages[index];
		count += countSkeletonPageDrawings(page);
		const header = page.headerId == null ? void 0 : (_skeletonData$skeHead = skeletonData.skeHeaders.get(page.headerId)) === null || _skeletonData$skeHead === void 0 ? void 0 : _skeletonData$skeHead.get(page.pageWidth);
		if (header != null) count += countSkeletonPageDrawings(header);
		const footer = page.footerId == null ? void 0 : (_skeletonData$skeFoot = skeletonData.skeFooters.get(page.footerId)) === null || _skeletonData$skeFoot === void 0 ? void 0 : _skeletonData$skeFoot.get(page.pageWidth);
		if (footer != null) count += countSkeletonPageDrawings(footer);
	}
	return count;
}
function hasNewPublishedPageDrawings(skeletonData, startPageIndex, publishedPageCount) {
	for (let index = startPageIndex; index < publishedPageCount; index++) {
		var _skeletonData$skeHead2, _skeletonData$skeFoot2;
		const page = skeletonData.pages[index];
		if (hasSkeletonPageDrawings(page)) return true;
		const header = page.headerId == null ? void 0 : (_skeletonData$skeHead2 = skeletonData.skeHeaders.get(page.headerId)) === null || _skeletonData$skeHead2 === void 0 ? void 0 : _skeletonData$skeHead2.get(page.pageWidth);
		if (header != null && hasSkeletonPageDrawings(header)) return true;
		const footer = page.footerId == null ? void 0 : (_skeletonData$skeFoot2 = skeletonData.skeFooters.get(page.footerId)) === null || _skeletonData$skeFoot2 === void 0 ? void 0 : _skeletonData$skeFoot2.get(page.pageWidth);
		if (footer != null && hasSkeletonPageDrawings(footer)) return true;
	}
	return false;
}
let DocDrawingTransformUpdateController = class DocDrawingTransformUpdateController extends _univerjs_core.Disposable {
	constructor(_context, _docSkeletonManagerService, _commandService, _editorService, _drawingManagerService, _docRefreshDrawingsService, _univerInstanceService, _lifecycleService) {
		super();
		this._context = _context;
		this._docSkeletonManagerService = _docSkeletonManagerService;
		this._commandService = _commandService;
		this._editorService = _editorService;
		this._drawingManagerService = _drawingManagerService;
		this._docRefreshDrawingsService = _docRefreshDrawingsService;
		this._univerInstanceService = _univerInstanceService;
		this._lifecycleService = _lifecycleService;
		_defineProperty(this, "_liquid", new _univerjs_engine_render.Liquid());
		_defineProperty(this, "_changesetDrawingRefreshScheduled", false);
		_defineProperty(this, "_publicationTracker", new DocDrawingPublicationTracker());
		this._initialize();
		this._commandExecutedListener();
	}
	_initialize() {
		this._initialRenderRefresh();
		this._drawingInitializeListener();
		this._initTransformRefresh();
	}
	_initialRenderRefresh() {
		this.disposeWithMe(this._docSkeletonManagerService.currentSkeleton$.pipe((0, rxjs.switchMap)((documentSkeleton) => {
			this._publicationTracker.reset();
			if (documentSkeleton == null) return rxjs.EMPTY;
			this._refreshDrawing(documentSkeleton);
			const positionRefresh$ = (0, rxjs.animationFrames)().pipe((0, rxjs.startWith)(null), (0, rxjs.map)(() => this._context.mainComponent), (0, rxjs.filter)((documentComponent) => documentComponent instanceof _univerjs_engine_render.Documents && documentComponent.left > -1e4 && documentComponent.top > -1e4), (0, rxjs.take)(1), (0, rxjs.switchMap)((documentComponent) => (0, _univerjs_core.fromEventSubject)(documentComponent.onTransformChange$).pipe((0, rxjs.filter)((evt) => evt.type === _univerjs_engine_render.TRANSFORM_CHANGE_OBSERVABLE_TYPE.translate && "left" in evt.value && "left" in evt.preValue && (evt.value.left !== evt.preValue.left || evt.value.top !== evt.preValue.top)), (0, rxjs.map)(() => ({
				documentSkeleton,
				progress: null
			})), (0, rxjs.startWith)({
				documentSkeleton,
				progress: null
			}))));
			return (0, rxjs.merge)(documentSkeleton.layoutProgress$.pipe((0, rxjs.map)((progress) => ({
				documentSkeleton,
				progress
			}))), positionRefresh$);
		})).subscribe(({ documentSkeleton, progress }) => {
			if (progress == null || this._publicationTracker.shouldRefresh(documentSkeleton, progress)) this._refreshDrawing(documentSkeleton);
		}));
		this.disposeWithMe(this._docRefreshDrawingsService.refreshDrawings$.subscribe((skeleton) => {
			if (skeleton == null) return;
			this._refreshDrawing(skeleton);
		}));
	}
	_commandExecutedListener() {
		const updateCommandList = [_univerjs_docs.RichTextEditingMutation.id, _univerjs_docs_ui.SetDocZoomRatioOperation.id];
		this.disposeWithMe(this._commandService.onCommandExecuted((command, options) => {
			if (updateCommandList.includes(command.id)) {
				const params = command.params;
				const { unitId: commandUnitId } = params;
				const { unitId } = this._context;
				if (commandUnitId !== unitId) return;
				const drawingIds = command.id === _univerjs_docs.RichTextEditingMutation.id ? getDocMutationAffectedDrawingIds(params.actions) : null;
				if ((drawingIds === null || drawingIds === void 0 ? void 0 : drawingIds.size) === 0) return;
				if (command.id === _univerjs_docs.RichTextEditingMutation.id && (options === null || options === void 0 ? void 0 : options.fromChangeset)) {
					this._scheduleChangesetDrawingRefresh();
					return;
				}
				this._refreshCurrentDrawing(drawingIds ?? void 0);
			}
		}));
	}
	_scheduleChangesetDrawingRefresh() {
		if (this._changesetDrawingRefreshScheduled) return;
		this._changesetDrawingRefreshScheduled = true;
		queueMicrotask(() => {
			queueMicrotask(() => {
				this._changesetDrawingRefreshScheduled = false;
				if (this._disposed) return;
				this._refreshCurrentDrawing();
			});
		});
	}
	_refreshCurrentDrawing(drawingIds) {
		const skeleton = this._docSkeletonManagerService.getSkeleton();
		if (skeleton == null) return;
		const { unitId, mainComponent } = this._context;
		if (this._editorService.isEditor(unitId)) {
			mainComponent === null || mainComponent === void 0 || mainComponent.makeDirty();
			return;
		}
		this._refreshDrawing(skeleton, drawingIds);
	}
	_initTransformRefresh() {
		this.disposeWithMe((0, rxjs.merge)((0, _univerjs_core.fromEventSubject)(this._context.engine.onTransformChange$).pipe((0, rxjs.filter)((evt) => evt.type === _univerjs_engine_render.TRANSFORM_CHANGE_OBSERVABLE_TYPE.resize)), (0, _univerjs_core.fromEventSubject)(this._context.scene.onTransformChange$).pipe((0, rxjs.filter)((evt) => evt.type === _univerjs_engine_render.TRANSFORM_CHANGE_OBSERVABLE_TYPE.scale))).pipe((0, rxjs.debounceTime)(16)).subscribe(() => {
			var _scene$getTransformer;
			const skeleton = this._docSkeletonManagerService.getSkeleton();
			const { scene } = this._context;
			(_scene$getTransformer = scene.getTransformer()) === null || _scene$getTransformer === void 0 || _scene$getTransformer.refreshControls();
			this._refreshDrawing(skeleton);
		}));
	}
	_refreshDrawing(skeleton, drawingIds) {
		const skeletonData = skeleton === null || skeleton === void 0 ? void 0 : skeleton.getSkeletonData();
		const { mainComponent, unitId } = this._context;
		const documentComponent = mainComponent;
		if (!skeletonData) return;
		const { left: docsLeft, top: docsTop, pageLayoutType, pageMarginLeft, pageMarginTop } = documentComponent;
		if (docsLeft <= -1e4 || docsTop <= -1e4) return;
		const { pages, skeHeaders, skeFooters } = skeletonData;
		const updateDrawingMap = {};
		this._liquid.reset();
		/**
		* TODO: @DR-Univer We should not refresh all floating elements, but instead make a diff.
		*/
		for (let i = 0, len = pages.length; i < len; i++) {
			const page = pages[i];
			this._collectPublishedPageDrawingPositions(unitId, page, skeHeaders, skeFooters, docsLeft, docsTop, updateDrawingMap);
			this._liquid.translatePage(page, pageLayoutType, pageMarginLeft, pageMarginTop);
		}
		const updateDrawings = Object.values(updateDrawingMap).filter((drawing) => drawingIds == null || drawingIds.has(drawing.drawingId));
		for (const drawing of updateDrawings) drawing.hidden = false;
		const staleNonMultiDrawings = this._getStaleNonMultiDrawings(unitId, updateDrawingMap, drawingIds);
		const nonMultiDrawings = updateDrawings.filter((drawing) => !drawing.isMultiTransform).concat(staleNonMultiDrawings).filter((drawing) => shouldRefreshDocDrawingTransform(this._drawingManagerService.getDrawingByParam({
			unitId,
			subUnitId: unitId,
			drawingId: drawing.drawingId
		}), drawing));
		if (nonMultiDrawings.length > 0) this._drawingManagerService.refreshTransform(nonMultiDrawings);
		const targetedMultiDrawing = drawingIds != null && [...drawingIds].some((drawingId) => {
			var _updateDrawingMap$dra, _this$_drawingManager;
			return ((_updateDrawingMap$dra = updateDrawingMap[drawingId]) === null || _updateDrawingMap$dra === void 0 ? void 0 : _updateDrawingMap$dra.isMultiTransform) === _univerjs_core.BooleanNumber.TRUE || ((_this$_drawingManager = this._drawingManagerService.getDrawingByParam({
				unitId,
				subUnitId: unitId,
				drawingId
			})) === null || _this$_drawingManager === void 0 ? void 0 : _this$_drawingManager.isMultiTransform) === _univerjs_core.BooleanNumber.TRUE;
		});
		if (drawingIds == null || targetedMultiDrawing) {
			const allMultiDrawings = Object.values(updateDrawingMap).filter((drawing) => drawing.isMultiTransform);
			this._handleMultiDrawingsTransform(allMultiDrawings);
		}
	}
	_collectPublishedPageDrawingPositions(unitId, page, skeHeaders, skeFooters, docsLeft, docsTop, updateDrawingMap) {
		var _skeHeaders$get, _skeFooters$get;
		const selectable = !page.isLayoutPlaceholder && !page.isMaterializationPlaceholder;
		const { headerId, footerId, pageWidth } = page;
		const headerPage = headerId ? (_skeHeaders$get = skeHeaders.get(headerId)) === null || _skeHeaders$get === void 0 ? void 0 : _skeHeaders$get.get(pageWidth) : void 0;
		if (headerPage != null) this._collectSegmentDrawingPositions(unitId, headerPage, docsLeft, docsTop, updateDrawingMap, headerPage.marginTop, page.marginLeft, page, selectable);
		const footerPage = footerId ? (_skeFooters$get = skeFooters.get(footerId)) === null || _skeFooters$get === void 0 ? void 0 : _skeFooters$get.get(pageWidth) : void 0;
		if (footerPage != null) {
			const footerTop = page.pageHeight - page.marginBottom + footerPage.marginTop;
			this._collectSegmentDrawingPositions(unitId, footerPage, docsLeft, docsTop, updateDrawingMap, footerTop, page.marginLeft, page, selectable);
		}
		this._collectSegmentDrawingPositions(unitId, page, docsLeft, docsTop, updateDrawingMap, page.marginTop, page.marginLeft, void 0, selectable);
	}
	_collectSegmentDrawingPositions(unitId, page, docsLeft, docsTop, updateDrawingMap, marginTop, marginLeft, hostPage, selectable) {
		this._calculateDrawingPosition(unitId, page, docsLeft, docsTop, updateDrawingMap, marginTop, marginLeft, hostPage, selectable);
		this._calculateTableCellDrawingPositions(unitId, page, docsLeft, docsTop, updateDrawingMap, marginTop, marginLeft, selectable);
		this._calculateColumnGroupDrawingPositions(unitId, page, docsLeft, docsTop, updateDrawingMap, marginTop, marginLeft, selectable);
	}
	_getStaleNonMultiDrawings(unitId, updateDrawingMap, drawingIds) {
		const drawingData = this._drawingManagerService.getDrawingData(unitId, unitId) ?? {};
		return Object.values(drawingData).filter((drawing) => drawing.isMultiTransform !== _univerjs_core.BooleanNumber.TRUE).filter((drawing) => drawingIds == null || drawingIds.has(drawing.drawingId)).filter((drawing) => updateDrawingMap[drawing.drawingId] == null).map((drawing) => ({
			unitId,
			subUnitId: unitId,
			drawingId: drawing.drawingId,
			behindText: false,
			hidden: true,
			selectable: true,
			transform: drawing.transform,
			transforms: drawing.transforms ?? [],
			isMultiTransform: drawing.isMultiTransform ?? _univerjs_core.BooleanNumber.FALSE
		}));
	}
	_handleMultiDrawingsTransform(multiDrawings) {
		const { scene, unitId } = this._context;
		const transformer = scene.getTransformerByCreate();
		multiDrawings.forEach((updateParam) => {
			const param = this._drawingManagerService.getDrawingByParam(updateParam);
			if (param == null) return;
			param.transform = updateParam.transform;
			param.transforms = updateParam.transforms;
			param.isMultiTransform = updateParam.isMultiTransform;
		});
		const selectedObjectKeys = [...transformer.getSelectedObjectMap().keys()];
		const allMultiDrawings = Object.values(this._drawingManagerService.getDrawingData(unitId, unitId)).filter((drawing) => drawing.isMultiTransform === _univerjs_core.BooleanNumber.TRUE);
		this._drawingManagerService.removeNotification(allMultiDrawings);
		if (multiDrawings.length > 0) this._drawingManagerService.addNotification(multiDrawings);
		for (const key of selectedObjectKeys) {
			const drawingShape = scene.getObject(key);
			if (drawingShape) transformer.setSelectedControl(drawingShape);
		}
	}
	_calculateDrawingPosition(unitId, page, docsLeft, docsTop, updateDrawingMap, marginTop, marginLeft, hostPage, selectable = true, clipOffset) {
		const { skeDrawings } = page;
		const pageOffsetLeft = this._liquid.x;
		const pageOffsetTop = this._liquid.y;
		this._liquid.translatePagePadding({
			marginTop,
			marginLeft
		});
		const drawingPositionContext = {
			unitId,
			page,
			docsLeft,
			docsTop,
			pageOffsetLeft,
			pageOffsetTop,
			updateDrawingMap,
			hostPage,
			selectable,
			clipOffset
		};
		skeDrawings.forEach((drawing) => this._collectDrawingPosition(drawing, drawingPositionContext));
		this._liquid.restorePagePadding({
			marginTop,
			marginLeft
		});
	}
	_collectDrawingPosition(drawing, context) {
		var _this$_context$unit, _this$_context$unit$g;
		const { aLeft, aTop, angle: skeletonAngle, drawingId, drawingOrigin, height: skeletonHeight, width: skeletonWidth } = drawing;
		const runtimeDrawing = getDocsOverlayRuntimeDrawing(drawingOrigin, (_this$_context$unit = this._context.unit) === null || _this$_context$unit === void 0 || (_this$_context$unit$g = _this$_context$unit.getSnapshot) === null || _this$_context$unit$g === void 0 || (_this$_context$unit$g = _this$_context$unit$g.call(_this$_context$unit).drawings) === null || _this$_context$unit$g === void 0 ? void 0 : _this$_context$unit$g[drawingId]);
		const { angle = skeletonAngle, size } = runtimeDrawing.docTransform;
		const height = (size === null || size === void 0 ? void 0 : size.height) ?? skeletonHeight;
		const width = (size === null || size === void 0 ? void 0 : size.width) ?? skeletonWidth;
		const { left: clipOffsetLeft, top: clipOffsetTop } = context.clipOffset ?? {};
		const behindText = getDocsDrawingBehindText({
			drawingOrigin: runtimeDrawing,
			hostPage: context.hostPage
		});
		const { isMultiTransform = _univerjs_core.BooleanNumber.FALSE } = runtimeDrawing;
		const clipPage = getDocsDrawingClipPage({
			drawing: {
				behindText,
				transform: {
					width,
					height
				}
			},
			hostPage: context.hostPage,
			page: context.page
		});
		const clipBounds = getDocsDrawingPageClipBounds({
			docsLeft: context.docsLeft,
			docsTop: context.docsTop,
			pageOffsetLeft: context.pageOffsetLeft,
			pageOffsetTop: context.pageOffsetTop,
			clipOffsetLeft,
			clipOffsetTop,
			page: clipPage
		});
		const anchorPage = runtimeDrawing.layoutType === _univerjs_core.PositionedObjectLayoutType.WRAP_NONE ? getDocsPageRelativeDrawingAnchorPage({
			page: context.page,
			clipPage,
			hostPage: context.hostPage
		}) : void 0;
		const pageRelativeLeft = anchorPage == null ? void 0 : getDocsPageRelativeDrawingLeft({
			hostPage: anchorPage,
			positionH: runtimeDrawing.docTransform.positionH,
			width
		});
		const pageRelativeTop = anchorPage == null ? void 0 : getDocsPageRelativeDrawingTop({
			hostPage: anchorPage,
			positionV: runtimeDrawing.docTransform.positionV,
			height
		});
		const transform = {
			left: (pageRelativeLeft ?? aLeft) + context.docsLeft + (pageRelativeLeft == null ? this._liquid.x : context.pageOffsetLeft),
			top: (pageRelativeTop ?? aTop) + context.docsTop + (pageRelativeTop == null ? this._liquid.y : context.pageOffsetTop),
			width,
			height,
			angle,
			flipX: runtimeDrawing.docTransform.flipX,
			flipY: runtimeDrawing.docTransform.flipY,
			clipBounds
		};
		mergePublishedDrawing(context.updateDrawingMap, {
			unitId: context.unitId,
			subUnitId: context.unitId,
			drawingId,
			behindText,
			selectable: context.selectable,
			transform,
			transforms: [transform],
			customBlockRenderViewport: drawing.customBlockRenderViewport,
			isMultiTransform
		});
	}
	_calculateTableCellDrawingPositions(unitId, page, docsLeft, docsTop, updateDrawingMap, baseMarginTop, baseMarginLeft, selectable) {
		var _page$skeTables3;
		(_page$skeTables3 = page.skeTables) === null || _page$skeTables3 === void 0 || _page$skeTables3.forEach((table) => {
			table.rows.forEach((row) => {
				row.cells.forEach((cell) => {
					var _cell$skeDrawings, _cell$skeTables, _cell$skeColumnGroups;
					if ((((_cell$skeDrawings = cell.skeDrawings) === null || _cell$skeDrawings === void 0 ? void 0 : _cell$skeDrawings.size) ?? 0) === 0 && (((_cell$skeTables = cell.skeTables) === null || _cell$skeTables === void 0 ? void 0 : _cell$skeTables.size) ?? 0) === 0 && (((_cell$skeColumnGroups = cell.skeColumnGroups) === null || _cell$skeColumnGroups === void 0 ? void 0 : _cell$skeColumnGroups.size) ?? 0) === 0) return;
					const cellOffset = getDocsTableCellDrawingOffset(unitId, table, row, cell);
					const marginTop = baseMarginTop + cellOffset.top;
					const marginLeft = baseMarginLeft + cellOffset.left;
					this._calculateDrawingPosition(unitId, cell, docsLeft, docsTop, updateDrawingMap, marginTop, marginLeft, void 0, selectable, {
						left: marginLeft,
						top: marginTop
					});
					this._calculateTableCellDrawingPositions(unitId, cell, docsLeft, docsTop, updateDrawingMap, marginTop, marginLeft, selectable);
					this._calculateColumnGroupDrawingPositions(unitId, cell, docsLeft, docsTop, updateDrawingMap, marginTop, marginLeft, selectable);
				});
			});
		});
	}
	_calculateColumnGroupDrawingPositions(unitId, page, docsLeft, docsTop, updateDrawingMap, baseMarginTop, baseMarginLeft, selectable) {
		var _page$skeColumnGroups3;
		(_page$skeColumnGroups3 = page.skeColumnGroups) === null || _page$skeColumnGroups3 === void 0 || _page$skeColumnGroups3.forEach((columnGroup) => {
			columnGroup.columns.forEach((column) => {
				const nestedPage = column.page;
				const marginTop = baseMarginTop + columnGroup.top + column.top + nestedPage.marginTop;
				const marginLeft = baseMarginLeft + columnGroup.left + column.left + nestedPage.marginLeft;
				const clipOffset = {
					left: marginLeft,
					top: marginTop
				};
				this._calculateDrawingPosition(unitId, nestedPage, docsLeft, docsTop, updateDrawingMap, marginTop, marginLeft, void 0, selectable, clipOffset);
				this._calculateTableCellDrawingPositions(unitId, nestedPage, docsLeft, docsTop, updateDrawingMap, marginTop, marginLeft, selectable);
				this._calculateColumnGroupDrawingPositions(unitId, nestedPage, docsLeft, docsTop, updateDrawingMap, marginTop, marginLeft, selectable);
			});
		});
	}
	_drawingInitializeListener() {
		const init = () => {
			const skeleton = this._docSkeletonManagerService.getSkeleton();
			if (skeleton == null) return;
			this._drawingManagerService.initializeNotification(this._context.unitId);
			this._refreshDrawing(skeleton);
		};
		if (this._lifecycleService.stage >= _univerjs_core.LifecycleStages.Rendered) if (this._docSkeletonManagerService.getSkeleton()) init();
		else setTimeout(init, 500);
		else this.disposeWithMe(this._lifecycleService.lifecycle$.pipe((0, rxjs.filter)((stage) => stage === _univerjs_core.LifecycleStages.Rendered)).subscribe(init));
	}
};
DocDrawingTransformUpdateController = __decorate([
	__decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_docs.DocSkeletonManagerService)),
	__decorateParam(2, _univerjs_core.ICommandService),
	__decorateParam(3, _univerjs_docs_ui.IEditorService),
	__decorateParam(4, _univerjs_drawing.IDrawingManagerService),
	__decorateParam(5, (0, _univerjs_core.Inject)(DocRefreshDrawingsService)),
	__decorateParam(6, _univerjs_core.IUniverInstanceService),
	__decorateParam(7, (0, _univerjs_core.Inject)(_univerjs_core.LifecycleService))
], DocDrawingTransformUpdateController);

//#endregion
//#region src/controllers/doc-drawing-transformer-update.controller.ts
const INLINE_DRAWING_ANCHOR_KEY_PREFIX = "__InlineDrawingAnchor__";
function getDocsTableCellAnchorContext(unitId, cell) {
	var _row$cells;
	const row = cell.parent;
	const table = row === null || row === void 0 ? void 0 : row.parent;
	const hostPage = table === null || table === void 0 ? void 0 : table.parent;
	if (!row || !table || !hostPage || !((_row$cells = row.cells) === null || _row$cells === void 0 ? void 0 : _row$cells.includes(cell))) return null;
	return {
		cell,
		hostPage,
		offset: getDocsTableCellDrawingOffset(unitId, table, row, cell),
		row,
		table
	};
}
function shouldUseDocsDrawingOuterPageOrigin(config) {
	const { drawing, height, hostPage, page, width } = config;
	if (drawing.layoutType !== _univerjs_core.PositionedObjectLayoutType.WRAP_NONE) return false;
	return getDocsPageRelativeDrawingAnchorPage({
		page,
		clipPage: getDocsDrawingClipPage({
			drawing: {
				behindText: getDocsDrawingBehindText({
					drawingOrigin: drawing,
					hostPage
				}),
				transform: {
					width,
					height
				}
			},
			hostPage,
			page
		}),
		hostPage
	}) != null;
}
let DocDrawingTransformerController = class DocDrawingTransformerController extends _univerjs_core.Disposable {
	constructor(_commandService, _univerInstanceService, _drawingManagerService, _renderManagerService) {
		super();
		this._commandService = _commandService;
		this._univerInstanceService = _univerInstanceService;
		this._drawingManagerService = _drawingManagerService;
		this._renderManagerService = _renderManagerService;
		_defineProperty(this, "_liquid", new _univerjs_engine_render.Liquid());
		_defineProperty(this, "_listenerOnImageMap", /* @__PURE__ */ new Set());
		_defineProperty(this, "_transformerCache", /* @__PURE__ */ new Map());
		_defineProperty(this, "_anchorShape", void 0);
		this._init();
	}
	_init() {
		this._listenDrawingFocus();
	}
	_listenDrawingFocus() {
		this.disposeWithMe(this._drawingManagerService.add$.subscribe((drawingParams) => {
			if (drawingParams.length === 0) return;
			for (const drawingParam of drawingParams) {
				const { unitId } = drawingParam;
				if (!this._listenerOnImageMap.has(unitId)) {
					this._listenTransformerChange(unitId);
					this._listenerOnImageMap.add(unitId);
				}
			}
		}));
	}
	_listenTransformerChange(unitId) {
		var _this$_getSceneAndTra;
		const transformer = (_this$_getSceneAndTra = this._getSceneAndTransformerByDrawingSearch(unitId)) === null || _this$_getSceneAndTra === void 0 ? void 0 : _this$_getSceneAndTra.transformer;
		if (transformer == null) return;
		this.disposeWithMe((0, _univerjs_core.toDisposable)(transformer.changeStart$.subscribe((state) => {
			this._transformerCache.clear();
			const { objects } = state;
			for (const object of objects.values()) {
				var _documentDataModel$ge;
				const { oKey, width, height, left, top, angle } = object;
				const drawing = this._drawingManagerService.getDrawingOKey(oKey);
				if (drawing == null) continue;
				const documentDataModel = this._univerInstanceService.getUnit(drawing.unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
				const drawingData = documentDataModel === null || documentDataModel === void 0 || (_documentDataModel$ge = documentDataModel.getSnapshot().drawings) === null || _documentDataModel$ge === void 0 ? void 0 : _documentDataModel$ge[drawing.drawingId];
				if ((drawingData === null || drawingData === void 0 ? void 0 : drawingData.layoutType) === _univerjs_core.PositionedObjectLayoutType.INLINE) try {
					object.setOpacity(.2);
				} catch (e) {}
				if (drawingData != null) this._transformerCache.set(drawing.drawingId, {
					drawing: drawingData,
					top,
					left,
					width,
					height,
					angle
				});
			}
		})));
		const throttleMultipleDrawingUpdate = (0, _univerjs_core.throttle)(this._updateMultipleDrawingDocTransform.bind(this), 50);
		this.disposeWithMe((0, _univerjs_core.toDisposable)(transformer.changing$.subscribe((state) => {
			const { objects, offsetX, offsetY } = state;
			if (objects.size > 1) throttleMultipleDrawingUpdate(objects);
			else if (objects.size === 1) {
				const drawingCache = this._transformerCache.values().next().value;
				const { width, height, top, left, angle } = objects.values().next().value;
				if (drawingCache && width === drawingCache.width && height === drawingCache.height && top === drawingCache.top && left === drawingCache.left && angle === drawingCache.angle) return;
				if (drawingCache && drawingCache.drawing.layoutType === _univerjs_core.PositionedObjectLayoutType.INLINE && offsetX != null && offsetY != null) this._updateInlineDrawingAnchor(drawingCache.drawing, offsetX, offsetY);
			}
		})));
		this.disposeWithMe((0, _univerjs_core.toDisposable)(transformer.changeEnd$.subscribe((state) => {
			const { objects, offsetX, offsetY } = state;
			for (const object of objects.values()) {
				const drawing = this._drawingManagerService.getDrawingOKey(object.oKey);
				if (drawing == null) continue;
				const drawingCache = this._transformerCache.get(drawing === null || drawing === void 0 ? void 0 : drawing.drawingId);
				if ((drawingCache === null || drawingCache === void 0 ? void 0 : drawingCache.drawing.layoutType) === _univerjs_core.PositionedObjectLayoutType.INLINE) try {
					object.setOpacity(1);
				} catch (e) {}
			}
			if (this._anchorShape) this._anchorShape.hide();
			if (objects.size > 1) this._updateMultipleDrawingDocTransform(objects);
			else if (objects.size === 1) {
				const drawingCache = this._transformerCache.values().next().value;
				const object = objects.values().next().value;
				const { width, height, top, left, angle } = object;
				if (drawingCache && width === drawingCache.width && height === drawingCache.height && top === drawingCache.top && left === drawingCache.left && angle === drawingCache.angle) return;
				if (drawingCache && drawingCache.drawing.layoutType === _univerjs_core.PositionedObjectLayoutType.INLINE) {
					if (width !== drawingCache.width || height !== drawingCache.height || angle !== drawingCache.angle) this._updateDrawingSize(drawingCache, object);
					else if (offsetX != null && offsetY != null) this._moveInlineDrawing(drawingCache.drawing, offsetX, offsetY);
				} else if (drawingCache) this._nonInlineDrawingTransform(drawingCache.drawing, object);
			}
			this._transformerCache.clear();
		})));
	}
	_updateMultipleDrawingDocTransform(objects) {
		if (objects.size < 1) return;
		const drawings = [];
		let unitId;
		let subUnitId;
		for (const object of objects.values()) {
			const { oKey, left, top, angle } = object;
			let { width, height } = object;
			const drawing = this._drawingManagerService.getDrawingOKey(oKey);
			if (drawing == null) continue;
			if (unitId == null) unitId = drawing.unitId;
			if (subUnitId == null) subUnitId = drawing.subUnitId;
			const drawingCache = this._transformerCache.get(drawing.drawingId);
			if (drawingCache == null) continue;
			const { drawing: drawingData, top: oldTop, left: oldLeft, width: oldWidth, height: oldHeight, angle: oldAngle } = drawingCache;
			const { width: maxWidth, height: maxHeight } = this._getPageContentSize(drawingData);
			width = Math.min(width, maxWidth);
			height = Math.min(height, maxHeight);
			if (oldWidth !== width || oldHeight !== height) drawings.push({
				drawingId: drawing.drawingId,
				key: "size",
				value: {
					width,
					height
				}
			});
			if (oldAngle !== angle) drawings.push({
				drawingId: drawing.drawingId,
				key: "angle",
				value: angle
			});
			if (oldTop !== top || oldLeft !== left) {
				const verticalDelta = top - oldTop;
				const horizontalDelta = left - oldLeft;
				if (verticalDelta !== 0) drawings.push({
					drawingId: drawing.drawingId,
					key: "positionV",
					value: {
						relativeFrom: drawingData.docTransform.positionV.relativeFrom,
						posOffset: drawingData.docTransform.positionV.posOffset + verticalDelta
					}
				});
				if (horizontalDelta !== 0) drawings.push({
					drawingId: drawing.drawingId,
					key: "positionH",
					value: {
						relativeFrom: drawingData.docTransform.positionH.relativeFrom,
						posOffset: drawingData.docTransform.positionH.posOffset + horizontalDelta
					}
				});
			}
		}
		if (drawings.length > 0 && unitId && subUnitId) this._commandService.executeCommand(_univerjs_docs_drawing.UpdateDrawingDocTransformCommand.id, {
			unitId,
			subUnitId,
			drawings
		});
	}
	_updateDrawingAnchor(objects) {
		if (this._transformerCache.size !== 1) return;
		const drawingCache = this._transformerCache.values().next().value;
		const object = objects.values().next().value;
		this._getDrawingAnchor(drawingCache.drawing, object);
	}
	_updateInlineDrawingAnchor(drawing, offsetX, offsetY) {
		if (this._transformerCache.size !== 1) return;
		const { contentBoxPointGroup } = this._getInlineDrawingAnchor(drawing, offsetX, offsetY) ?? {};
		if (contentBoxPointGroup == null) return;
		this._createOrUpdateInlineAnchor(drawing.unitId, contentBoxPointGroup);
	}
	_getInlineDrawingAnchor(drawing, offsetX, offsetY) {
		var _this$_renderManagerS;
		const currentRender = this._renderManagerService.getRenderUnitById(drawing.unitId);
		const skeleton = currentRender === null || currentRender === void 0 ? void 0 : currentRender.with(_univerjs_docs.DocSkeletonManagerService).getSkeleton();
		if (currentRender == null) return;
		const { mainComponent, scene } = currentRender;
		const documentComponent = mainComponent;
		const activeViewport = scene.getViewports()[0];
		const { pageLayoutType = _univerjs_engine_render.PageLayoutType.VERTICAL, pageMarginLeft, pageMarginTop } = documentComponent.getOffsetConfig();
		let glyphAnchor = null;
		let isBack = false;
		let segmentPageIndex = -1;
		let segmentId = "";
		const HALF = .5;
		const coord = this._getTransformCoordForDocumentOffset(documentComponent, activeViewport, offsetX, offsetY);
		if (coord == null) return;
		const docSelectionRenderService = (_this$_renderManagerS = this._renderManagerService.getRenderUnitById(drawing.unitId)) === null || _this$_renderManagerS === void 0 ? void 0 : _this$_renderManagerS.with(_univerjs_docs_ui.DocSelectionRenderService);
		if (docSelectionRenderService == null) return;
		const nodeInfo = skeleton === null || skeleton === void 0 ? void 0 : skeleton.findNodeByCoord(coord, pageLayoutType, pageMarginLeft, pageMarginTop, {
			strict: false,
			segmentId: docSelectionRenderService.getSegment(),
			segmentPage: docSelectionRenderService.getSegmentPage()
		});
		if (nodeInfo) {
			const { node, ratioX, segmentPage, segmentId: nodeSegmentId } = nodeInfo;
			isBack = ratioX < HALF;
			glyphAnchor = node;
			segmentPageIndex = segmentPage;
			segmentId = nodeSegmentId;
		}
		if (glyphAnchor == null) return;
		const nodePosition = skeleton === null || skeleton === void 0 ? void 0 : skeleton.findPositionByGlyph(glyphAnchor, segmentPageIndex);
		const docObject = (0, _univerjs_docs_ui.neoGetDocObject)(currentRender);
		if (nodePosition == null || skeleton == null) return;
		const positionWithIsBack = {
			...nodePosition,
			isBack
		};
		const { cursorList, contentBoxPointGroup } = new _univerjs_docs_ui.NodePositionConvertToCursor(docObject.document.getOffsetConfig(), skeleton).getRangePointData(positionWithIsBack, positionWithIsBack);
		const { startOffset } = (0, _univerjs_docs_ui.getOneTextSelectionRange)(cursorList) ?? {};
		if (startOffset == null) return;
		return {
			offset: startOffset,
			contentBoxPointGroup,
			segmentId,
			segmentPage: segmentPageIndex
		};
	}
	_getDrawingAnchor(drawing, object) {
		var _this$_renderManagerS2, _glyphAnchor$parent, _column$parent, _column$parent2;
		const currentRender = this._renderManagerService.getRenderUnitById(drawing.unitId);
		const skeleton = currentRender === null || currentRender === void 0 ? void 0 : currentRender.with(_univerjs_docs.DocSkeletonManagerService).getSkeleton();
		const skeletonData = skeleton === null || skeleton === void 0 ? void 0 : skeleton.getSkeletonData();
		if (skeletonData == null || currentRender == null) return;
		const { pages, skeHeaders, skeFooters } = skeletonData;
		const { mainComponent, scene } = currentRender;
		const documentComponent = mainComponent;
		const activeViewport = scene.getViewports()[0];
		const { pageLayoutType = _univerjs_engine_render.PageLayoutType.VERTICAL, pageMarginLeft, pageMarginTop, docsLeft, docsTop } = documentComponent.getOffsetConfig();
		const { left, top, angle } = object;
		let { width, height } = object;
		const { positionV, positionH } = drawing.docTransform;
		const { width: maxWidth, height: maxHeight } = this._getPageContentSize(drawing);
		width = Math.min(width, maxWidth);
		height = Math.min(height, maxHeight);
		let glyphAnchor = null;
		let segmentId = "";
		let segmentPage = -1;
		const isBack = true;
		const docTransform = {
			...drawing.docTransform,
			size: {
				width,
				height
			},
			angle
		};
		const { x, y } = scene.getViewportScrollXY(activeViewport);
		const coord = this._getTransformCoordForDocumentOffset(documentComponent, activeViewport, left - x, top - y);
		if (coord == null) return;
		const docSelectionRenderService = (_this$_renderManagerS2 = this._renderManagerService.getRenderUnitById(drawing.unitId)) === null || _this$_renderManagerS2 === void 0 ? void 0 : _this$_renderManagerS2.with(_univerjs_docs_ui.DocSelectionRenderService);
		if (docSelectionRenderService == null) return;
		const nodeInfo = skeleton === null || skeleton === void 0 ? void 0 : skeleton.findNodeByCoord(coord, pageLayoutType, pageMarginLeft, pageMarginTop, {
			strict: false,
			segmentId: docSelectionRenderService.getSegment(),
			segmentPage: docSelectionRenderService.getSegmentPage()
		});
		if (nodeInfo) {
			const { node, segmentPage: segmentPageIndex, segmentId: nodeSegmentId } = nodeInfo;
			glyphAnchor = node;
			segmentPage = segmentPageIndex;
			segmentId = nodeSegmentId;
		}
		if (glyphAnchor == null) return;
		const line = (_glyphAnchor$parent = glyphAnchor.parent) === null || _glyphAnchor$parent === void 0 ? void 0 : _glyphAnchor$parent.parent;
		const column = line === null || line === void 0 ? void 0 : line.parent;
		const sectionTop = (column === null || column === void 0 || (_column$parent = column.parent) === null || _column$parent === void 0 ? void 0 : _column$parent.top) ?? 0;
		const paragraphStartLine = (column === null || column === void 0 ? void 0 : column.lines.find((l) => l.paragraphIndex === (line === null || line === void 0 ? void 0 : line.paragraphIndex) && l.paragraphStart)) ?? (column === null || column === void 0 ? void 0 : column.lines[0]);
		const page = column === null || column === void 0 || (_column$parent2 = column.parent) === null || _column$parent2 === void 0 ? void 0 : _column$parent2.parent;
		if (line == null || column == null || paragraphStartLine == null || page == null) return;
		this._liquid.reset();
		const tableCellContext = page.type === _univerjs_engine_render.DocumentSkeletonPageType.CELL ? getDocsTableCellAnchorContext(drawing.unitId, page) : null;
		const anchorPage = (tableCellContext === null || tableCellContext === void 0 ? void 0 : tableCellContext.hostPage) ?? page;
		const pageType = anchorPage.type;
		const drawingHostPage = (page.type === _univerjs_engine_render.DocumentSkeletonPageType.HEADER || page.type === _univerjs_engine_render.DocumentSkeletonPageType.FOOTER) && segmentPage > -1 ? pages[segmentPage] : void 0;
		const useOuterPageOrigin = shouldUseDocsDrawingOuterPageOrigin({
			drawing,
			height: object.height,
			hostPage: drawingHostPage,
			page,
			width: object.width
		});
		let pageOffsetLeft = this._liquid.x;
		let pageOffsetTop = this._liquid.y;
		for (const p of pages) {
			const { headerId, footerId, pageHeight, pageWidth, marginLeft, marginBottom } = p;
			const pIndex = pages.indexOf(p);
			if (segmentPage > -1 && pIndex === segmentPage) {
				pageOffsetLeft = this._liquid.x;
				pageOffsetTop = this._liquid.y;
				switch (pageType) {
					case _univerjs_engine_render.DocumentSkeletonPageType.HEADER: {
						var _skeHeaders$get;
						const headerSke = (_skeHeaders$get = skeHeaders.get(headerId)) === null || _skeHeaders$get === void 0 ? void 0 : _skeHeaders$get.get(pageWidth);
						if (headerSke) this._liquid.translatePagePadding({
							marginTop: headerSke.marginTop,
							marginLeft
						});
						else throw new Error("header skeleton not found");
						break;
					}
					case _univerjs_engine_render.DocumentSkeletonPageType.FOOTER: {
						var _skeFooters$get;
						const footerSke = (_skeFooters$get = skeFooters.get(footerId)) === null || _skeFooters$get === void 0 ? void 0 : _skeFooters$get.get(pageWidth);
						if (footerSke) this._liquid.translatePagePadding({
							marginTop: pageHeight - marginBottom + footerSke.marginTop,
							marginLeft
						});
						else throw new Error("footer skeleton not found");
						break;
					}
					default:
						this._liquid.translatePagePadding(p);
						break;
				}
				break;
			}
			if (p === anchorPage) {
				pageOffsetLeft = this._liquid.x;
				pageOffsetTop = this._liquid.y;
			}
			this._liquid.translatePagePadding(p);
			if (p === anchorPage) break;
			this._liquid.restorePagePadding(p);
			this._liquid.translatePage(p, pageLayoutType, pageMarginLeft, pageMarginTop);
		}
		if (tableCellContext) this._liquid.translate(tableCellContext.offset.left, tableCellContext.offset.top);
		if (positionV.relativeFrom === _univerjs_core.ObjectRelativeFromV.LINE) glyphAnchor = line.divides[0].glyphGroup[0];
		else {
			var _paragraphStartLine$d;
			glyphAnchor = ((_paragraphStartLine$d = paragraphStartLine.divides) === null || _paragraphStartLine$d === void 0 || (_paragraphStartLine$d = _paragraphStartLine$d[0]) === null || _paragraphStartLine$d === void 0 || (_paragraphStartLine$d = _paragraphStartLine$d.glyphGroup) === null || _paragraphStartLine$d === void 0 ? void 0 : _paragraphStartLine$d[0]) ?? glyphAnchor;
		}
		docTransform.positionH = {
			relativeFrom: positionH.relativeFrom,
			posOffset: left - this._liquid.x - docsLeft
		};
		switch (positionH.relativeFrom) {
			case _univerjs_core.ObjectRelativeFromH.PAGE:
				if (useOuterPageOrigin) docTransform.positionH.posOffset = left - pageOffsetLeft - docsLeft;
				break;
			case _univerjs_core.ObjectRelativeFromH.MARGIN:
				docTransform.positionH.posOffset = left - this._liquid.x - docsLeft - page.marginLeft;
				break;
			case _univerjs_core.ObjectRelativeFromH.COLUMN:
				docTransform.positionH.posOffset = left - this._liquid.x - docsLeft - column.left;
				break;
		}
		docTransform.positionV = {
			relativeFrom: positionV.relativeFrom,
			posOffset: top - this._liquid.y - docsTop
		};
		switch (positionV.relativeFrom) {
			case _univerjs_core.ObjectRelativeFromV.PAGE:
				docTransform.positionV.posOffset = useOuterPageOrigin ? top - pageOffsetTop - docsTop : top - this._liquid.y - docsTop + page.marginTop;
				break;
			case _univerjs_core.ObjectRelativeFromV.LINE:
				docTransform.positionV.posOffset = top - this._liquid.y - docsTop - sectionTop - line.top;
				break;
			case _univerjs_core.ObjectRelativeFromV.PARAGRAPH:
				docTransform.positionV.posOffset = top - this._liquid.y - docsTop - sectionTop - paragraphStartLine.top;
				break;
		}
		if (glyphAnchor == null) return;
		const nodePosition = skeleton === null || skeleton === void 0 ? void 0 : skeleton.findPositionByGlyph(glyphAnchor, segmentPage);
		const docObject = (0, _univerjs_docs_ui.neoGetDocObject)(currentRender);
		if (nodePosition == null || skeleton == null) return;
		const positionWithIsBack = {
			...nodePosition,
			isBack
		};
		const { cursorList } = new _univerjs_docs_ui.NodePositionConvertToCursor(docObject.document.getOffsetConfig(), skeleton).getRangePointData(positionWithIsBack, positionWithIsBack);
		const { startOffset } = (0, _univerjs_docs_ui.getOneTextSelectionRange)(cursorList) ?? {};
		if (startOffset == null) return;
		return {
			offset: startOffset,
			docTransform,
			segmentId,
			segmentPage
		};
	}
	_updateDrawingSize(drawingCache, object) {
		const drawings = [];
		const { drawing, width: oldWidth, height: oldHeight, angle: oldAngle } = drawingCache;
		const { unitId, subUnitId } = drawing;
		let { width, height, angle } = object;
		const { width: maxWidth, height: maxHeight } = this._getPageContentSize(drawing);
		width = Math.min(maxWidth, width);
		height = Math.min(maxHeight, height);
		if (width !== oldWidth || height !== oldHeight) drawings.push({
			drawingId: drawing.drawingId,
			key: "size",
			value: {
				width,
				height
			}
		});
		if (angle !== oldAngle) drawings.push({
			drawingId: drawing.drawingId,
			key: "angle",
			value: angle
		});
		if (drawings.length > 0 && unitId && subUnitId) this._commandService.executeCommand(_univerjs_docs_drawing.UpdateDrawingDocTransformCommand.id, {
			unitId,
			subUnitId,
			drawings
		});
	}
	_moveInlineDrawing(drawing, offsetX, offsetY) {
		const { offset, segmentId, segmentPage } = this._getInlineDrawingAnchor(drawing, offsetX, offsetY) ?? {};
		return this._commandService.executeCommand(IMoveInlineDrawingCommand.id, {
			unitId: drawing.unitId,
			subUnitId: drawing.unitId,
			drawing,
			offset,
			segmentId,
			segmentPage,
			needRefreshDrawings: offset == null
		});
	}
	_limitDrawingInPage(drawing, object) {
		const currentRender = this._renderManagerService.getRenderUnitById(drawing.unitId);
		const { left, top, width, height, angle } = object;
		const skeleton = currentRender === null || currentRender === void 0 ? void 0 : currentRender.with(_univerjs_docs.DocSkeletonManagerService).getSkeleton();
		const skeletonData = skeleton === null || skeleton === void 0 ? void 0 : skeleton.getSkeletonData();
		const { pages } = skeletonData ?? {};
		if (skeletonData == null || currentRender == null || pages == null) return {
			left,
			top,
			width,
			height,
			angle
		};
		const { mainComponent } = currentRender;
		const { top: docsTop, pageLayoutType, pageMarginLeft, pageMarginTop } = mainComponent;
		let newTop = top;
		this._liquid.reset();
		for (const page of pages) {
			const { marginBottom, pageHeight } = page;
			const nextPage = pages[pages.indexOf(page) + 1];
			if (nextPage == null) continue;
			if (_univerjs_core.Tools.hasIntersectionBetweenTwoRanges(top, top + height, this._liquid.y + docsTop + pageHeight - marginBottom, this._liquid.y + docsTop + pageHeight + pageMarginTop + nextPage.marginTop)) if (top + height / 2 < this._liquid.y + docsTop + pageHeight + pageMarginTop / 2) newTop = Math.min(top, this._liquid.y + docsTop + pageHeight - marginBottom - height);
			else newTop = Math.max(top, this._liquid.y + docsTop + pageHeight + pageMarginTop + nextPage.marginTop);
			this._liquid.translatePage(page, pageLayoutType, pageMarginLeft, pageMarginTop);
		}
		return {
			left,
			top: newTop,
			width,
			height,
			angle
		};
	}
	_nonInlineDrawingTransform(drawing, object, isMoving = false) {
		const objectPosition = drawing.isMultiTransform === _univerjs_core.BooleanNumber.TRUE ? object : this._limitDrawingInPage(drawing, object);
		if (isMoving && objectPosition.top !== object.top) return;
		const { offset, docTransform, segmentId, segmentPage } = this._getDrawingAnchor(drawing, objectPosition) ?? {};
		if (offset == null || docTransform == null) return this._updateMultipleDrawingDocTransform(/* @__PURE__ */ new Map([[drawing.drawingId, object]]));
		return this._commandService.executeCommand(ITransformNonInlineDrawingCommand.id, {
			unitId: drawing.unitId,
			subUnitId: drawing.unitId,
			drawing,
			offset,
			docTransform,
			segmentId,
			segmentPage
		});
	}
	_getSceneAndTransformerByDrawingSearch(unitId) {
		if (unitId == null) return;
		const renderObject = this._renderManagerService.getRenderUnitById(unitId);
		const scene = renderObject === null || renderObject === void 0 ? void 0 : renderObject.scene;
		if (scene == null) return;
		return {
			scene,
			transformer: scene.getTransformerByCreate()
		};
	}
	_getTransformCoordForDocumentOffset(document, viewport, evtOffsetX, evtOffsetY) {
		const { documentTransform } = document.getOffsetConfig();
		const originCoord = viewport.transformVector2SceneCoord(_univerjs_engine_render.Vector2.FromArray([evtOffsetX, evtOffsetY]));
		if (!originCoord) return;
		return documentTransform.clone().invert().applyPoint(originCoord);
	}
	_createOrUpdateInlineAnchor(unitId, pointsGroup) {
		const currentRender = this._renderManagerService.getRenderUnitById(unitId);
		if (currentRender == null) return;
		const { mainComponent, scene } = currentRender;
		const { docsLeft, docsTop } = mainComponent.getOffsetConfig();
		const { left: boundingLeft, top: boundingTop, height } = (0, _univerjs_docs_ui.getAnchorBounding)(pointsGroup);
		const left = boundingLeft + docsLeft;
		const top = boundingTop + docsTop;
		if (this._anchorShape) {
			this._anchorShape.transformByState({
				left,
				top,
				height
			});
			this._anchorShape.show();
			return;
		}
		const anchor = new _univerjs_engine_render.Rect(INLINE_DRAWING_ANCHOR_KEY_PREFIX + (0, _univerjs_core.generateRandomId)(6), {
			left,
			top,
			height,
			strokeWidth: 2,
			stroke: (0, _univerjs_engine_render.getColor)(_univerjs_core.COLORS.darkgray, 1),
			evented: false
		});
		this._anchorShape = anchor;
		scene.addObject(anchor, _univerjs_docs_ui.TEXT_RANGE_LAYER_INDEX);
	}
	_getPageContentSize(drawing) {
		const currentRender = this._renderManagerService.getRenderUnitById(drawing.unitId);
		const skeleton = currentRender === null || currentRender === void 0 ? void 0 : currentRender.with(_univerjs_docs.DocSkeletonManagerService).getSkeleton();
		const MAX_WIDTH = 500;
		const MAX_HEIGHT = 500;
		const skeletonData = skeleton === null || skeleton === void 0 ? void 0 : skeleton.getSkeletonData();
		if (skeletonData == null || currentRender == null) return {
			width: MAX_WIDTH,
			height: MAX_HEIGHT
		};
		const { pages } = skeletonData;
		let page = null;
		for (const p of pages) {
			if (p.isLayoutPlaceholder || p.isMaterializationPlaceholder) continue;
			const { skeDrawings } = p;
			if (skeDrawings.has(drawing.drawingId)) {
				page = p;
				break;
			}
		}
		if (page) {
			const { pageWidth, pageHeight, marginLeft, marginBottom, marginRight, marginTop } = page;
			return {
				width: Math.max(MAX_WIDTH, pageWidth - marginLeft - marginRight),
				height: Math.max(MAX_HEIGHT, pageHeight - marginTop - marginBottom)
			};
		} else return {
			width: MAX_WIDTH,
			height: MAX_HEIGHT
		};
	}
};
DocDrawingTransformerController = __decorate([
	__decorateParam(0, _univerjs_core.ICommandService),
	__decorateParam(1, _univerjs_core.IUniverInstanceService),
	__decorateParam(2, _univerjs_drawing.IDrawingManagerService),
	__decorateParam(3, _univerjs_engine_render.IRenderManagerService)
], DocDrawingTransformerController);

//#endregion
//#region src/controllers/shortcuts/drawing.shortcut.ts
function whenDocDrawingFocused(contextService) {
	return contextService.getContextValue(_univerjs_core.FOCUSING_DOC) && contextService.getContextValue(_univerjs_core.FOCUSING_UNIVER_EDITOR) && contextService.getContextValue(_univerjs_core.FOCUSING_COMMON_DRAWINGS);
}
const MoveDrawingDownShortcutItem = {
	id: MoveDocDrawingsCommand.id,
	description: "docs-drawing-ui.shortcut.drawing-move-down",
	group: "4_drawing-view",
	groupTitle: "docs-drawing-ui.shortcut.drawing-view",
	binding: _univerjs_ui.KeyCode.ARROW_DOWN,
	priority: 100,
	preconditions: whenDocDrawingFocused,
	staticParameters: { direction: _univerjs_core.Direction.DOWN }
};
const MoveDrawingUpShortcutItem = {
	id: MoveDocDrawingsCommand.id,
	description: "docs-drawing-ui.shortcut.drawing-move-up",
	group: "4_drawing-view",
	groupTitle: "docs-drawing-ui.shortcut.drawing-view",
	binding: _univerjs_ui.KeyCode.ARROW_UP,
	priority: 100,
	preconditions: whenDocDrawingFocused,
	staticParameters: { direction: _univerjs_core.Direction.UP }
};
const MoveDrawingLeftShortcutItem = {
	id: MoveDocDrawingsCommand.id,
	description: "docs-drawing-ui.shortcut.drawing-move-left",
	group: "4_drawing-view",
	groupTitle: "docs-drawing-ui.shortcut.drawing-view",
	binding: _univerjs_ui.KeyCode.ARROW_LEFT,
	priority: 100,
	preconditions: whenDocDrawingFocused,
	staticParameters: { direction: _univerjs_core.Direction.LEFT }
};
const MoveDrawingRightShortcutItem = {
	id: MoveDocDrawingsCommand.id,
	description: "docs-drawing-ui.shortcut.drawing-move-right",
	group: "4_drawing-view",
	groupTitle: "docs-drawing-ui.shortcut.drawing-view",
	binding: _univerjs_ui.KeyCode.ARROW_RIGHT,
	priority: 100,
	preconditions: whenDocDrawingFocused,
	staticParameters: { direction: _univerjs_core.Direction.RIGHT }
};
const DeleteDrawingsShortcutItem = {
	id: DeleteDocDrawingsCommand.id,
	description: "docs-drawing-ui.shortcut.drawing-delete",
	group: "4_drawing-view",
	groupTitle: "docs-drawing-ui.shortcut.drawing-view",
	preconditions: whenDocDrawingFocused,
	binding: _univerjs_ui.KeyCode.DELETE,
	mac: _univerjs_ui.KeyCode.BACKSPACE
};

//#endregion
//#region src/controllers/ui.controller.ts
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
let DocDrawingUIController = class DocDrawingUIController extends _univerjs_core.Disposable {
	constructor(_menuManagerService, _commandService, _shortcutService) {
		super();
		this._menuManagerService = _menuManagerService;
		this._commandService = _commandService;
		this._shortcutService = _shortcutService;
		this._init();
	}
	_initCustomComponents() {}
	_initMenus() {
		this._menuManagerService.mergeMenu(menuSchema);
	}
	_initCommands() {
		[
			InsertDocImageCommand,
			InsertDocRectangleShapeCommand,
			InsertDocEllipseShapeCommand,
			UpdateDocDrawingDistanceCommand,
			UpdateDocDrawingWrapTextCommand,
			IMoveInlineDrawingCommand,
			ITransformNonInlineDrawingCommand,
			SidebarDocDrawingOperation,
			ClearDocDrawingTransformerOperation,
			EditDocDrawingOperation,
			GroupDocDrawingCommand,
			UngroupDocDrawingCommand,
			MoveDocDrawingsCommand,
			DeleteDocDrawingsCommand
		].forEach((command) => this.disposeWithMe(this._commandService.registerCommand(command)));
	}
	_initShortcuts() {
		[
			MoveDrawingDownShortcutItem,
			MoveDrawingUpShortcutItem,
			MoveDrawingLeftShortcutItem,
			MoveDrawingRightShortcutItem,
			DeleteDrawingsShortcutItem
		].forEach((item) => {
			this.disposeWithMe(this._shortcutService.registerShortcut(item));
		});
	}
	_init() {
		this._initCommands();
		this._initCustomComponents();
		this._initMenus();
		this._initShortcuts();
	}
};
DocDrawingUIController = __decorate([
	__decorateParam(0, _univerjs_ui.IMenuManagerService),
	__decorateParam(1, _univerjs_core.ICommandService),
	__decorateParam(2, _univerjs_ui.IShortcutService)
], DocDrawingUIController);

//#endregion
//#region src/services/doc-drawing-floating-toolbar-adapter.service.ts
var DocDrawingFloatingToolbarAdapterService = class {
	constructor() {
		_defineProperty(this, "_adapters", []);
	}
	registerAdapter(adapter) {
		this._adapters.push(adapter);
		return (0, _univerjs_core.toDisposable)(() => {
			const index = this._adapters.indexOf(adapter);
			if (index >= 0) this._adapters.splice(index, 1);
		});
	}
	getItems(params) {
		for (const adapter of this._adapters) {
			const items = adapter.getItems(params);
			if (items) return [...items].sort((a, b) => a.index - b.index);
		}
		return null;
	}
};

//#endregion
//#region src/menu/drawing-popup-menu.controller.ts
let DocDrawingPopupMenuController = class DocDrawingPopupMenuController extends _univerjs_core.RxDisposable {
	constructor(_drawingManagerService, _canvasPopManagerService, _renderManagerService, _univerInstanceService, _contextService, _drawingAdapterService, _floatingToolbarAdapterService, _commandService, _menuManagerService, _permissionService) {
		super();
		this._drawingManagerService = _drawingManagerService;
		this._canvasPopManagerService = _canvasPopManagerService;
		this._renderManagerService = _renderManagerService;
		this._univerInstanceService = _univerInstanceService;
		this._contextService = _contextService;
		this._drawingAdapterService = _drawingAdapterService;
		this._floatingToolbarAdapterService = _floatingToolbarAdapterService;
		this._commandService = _commandService;
		this._menuManagerService = _menuManagerService;
		this._permissionService = _permissionService;
		_defineProperty(this, "_initImagePopupMenu", /* @__PURE__ */ new Set());
		_defineProperty(this, "_embeddedRenderUnits", /* @__PURE__ */ new Set());
		_defineProperty(this, "_popupMenuListeners", /* @__PURE__ */ new Map());
		_defineProperty(this, "_disposePopupsByUnit", /* @__PURE__ */ new Map());
		_defineProperty(this, "_popupTargetsByUnit", /* @__PURE__ */ new Map());
		_defineProperty(this, "_isDrawingPanelOpen", false);
		this._init();
	}
	_init() {
		this.disposeWithMe(this._commandService.onCommandExecuted((command) => {
			if (command.id === EditDocDrawingOperation.id) {
				this._isDrawingPanelOpen = true;
				this._clearPopups(void 0, true);
			}
			if (command.id === SidebarDocDrawingOperation.id) {
				const params = command.params;
				this._isDrawingPanelOpen = (params === null || params === void 0 ? void 0 : params.value) === "open";
				if (this._isDrawingPanelOpen) this._clearPopups(void 0, true);
			}
		}));
		this.disposeWithMe(this._drawingManagerService.focus$.subscribe((params) => {
			if (params.length === 0) this._isDrawingPanelOpen = false;
		}));
		this.disposeWithMe(this._permissionService.permissionPointUpdate$.subscribe(() => {
			for (const [popupUnitId, drawing] of this._popupTargetsByUnit) if (!this._canEditDrawing(drawing.unitId, drawing.drawingId)) this._clearPopups(popupUnitId, true);
		}));
		this.disposeWithMe(this._univerInstanceService.getCurrentTypeOfUnit$(_univerjs_core.UniverInstanceType.UNIVER_DOC).pipe((0, rxjs.takeUntil)(this.dispose$)).subscribe((documentDataModel) => this._create(documentDataModel)));
		this.disposeWithMe(this._univerInstanceService.getTypeOfUnitDisposed$(_univerjs_core.UniverInstanceType.UNIVER_DOC).pipe((0, rxjs.takeUntil)(this.dispose$)).subscribe((documentDataModel) => this._dispose(documentDataModel)));
		this.disposeWithMe(this._renderManagerService.created$.pipe((0, rxjs.takeUntil)(this.dispose$)).subscribe((render) => {
			if (render.type !== _univerjs_core.UniverInstanceType.UNIVER_DOC || render.isMainScene) return;
			this._embeddedRenderUnits.add(render.unitId);
			this._create(this._univerInstanceService.getUnit(render.unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC));
		}));
		this.disposeWithMe(this._renderManagerService.disposed$.pipe((0, rxjs.takeUntil)(this.dispose$)).subscribe((unitId) => {
			if (!this._embeddedRenderUnits.delete(unitId)) return;
			this._disposePopupMenuListener(unitId);
		}));
		this._univerInstanceService.getAllUnitsForType(_univerjs_core.UniverInstanceType.UNIVER_DOC).forEach((documentDataModel) => this._create(documentDataModel));
	}
	_dispose(documentDataModel) {
		const unitId = documentDataModel.getUnitId();
		this._clearPopups(unitId, true);
		this._disposePopupMenuListener(unitId);
		this._renderManagerService.removeRender(unitId);
	}
	_clearPopups(unitId, force = false) {
		if (unitId == null) {
			[...this._disposePopupsByUnit.keys()].forEach((popupUnitId) => this._clearPopups(popupUnitId, force));
			return;
		}
		const popups = this._disposePopupsByUnit.get(unitId);
		if (!popups) return;
		for (let index = popups.length - 1; index >= 0; index -= 1) {
			const popup = popups[index];
			if (force || popup.canDispose()) {
				popup.dispose();
				popups.splice(index, 1);
			}
		}
		if (popups.length === 0) {
			this._disposePopupsByUnit.delete(unitId);
			this._popupTargetsByUnit.delete(unitId);
		}
	}
	_getDisposePopups(unitId) {
		const popups = this._disposePopupsByUnit.get(unitId);
		if (popups) return popups;
		const nextPopups = [];
		this._disposePopupsByUnit.set(unitId, nextPopups);
		return nextPopups;
	}
	_create(documentDataModel) {
		if (!documentDataModel) return;
		const unitId = documentDataModel.getUnitId();
		if ((0, _univerjs_core.isInternalEditorID)(unitId)) return;
		if (this._renderManagerService.has(unitId) && !this._initImagePopupMenu.has(unitId)) {
			const listener = this._popupMenuListener(unitId);
			if (listener) {
				this._popupMenuListeners.set(unitId, listener);
				this._initImagePopupMenu.add(unitId);
			}
		}
	}
	_disposePopupMenuListener(unitId) {
		var _this$_popupMenuListe;
		(_this$_popupMenuListe = this._popupMenuListeners.get(unitId)) === null || _this$_popupMenuListe === void 0 || _this$_popupMenuListe.dispose();
		this._popupMenuListeners.delete(unitId);
		this._initImagePopupMenu.delete(unitId);
		this._clearPopups(unitId, true);
	}
	_hasCropObject(scene) {
		const objects = scene.getAllObjects();
		for (const object of objects) if (object instanceof _univerjs_drawing_ui.ImageCropperObject) return true;
		return false;
	}
	_handleClearControl(unitId, transformer, changeSelf) {
		this._clearPopups(unitId, changeSelf);
		queueMicrotask(() => {
			if (transformer.getSelectedObjectMap().size > 0) return;
			this._contextService.setContextValue(_univerjs_core.FOCUSING_COMMON_DRAWINGS, false);
			this._drawingManagerService.focusDrawing(null);
		});
	}
	_registerDrawingPopup(unitId, popup, drawing) {
		this.disposeWithMe(popup);
		this._getDisposePopups(unitId).push(popup);
		this._popupTargetsByUnit.set(unitId, drawing);
		if (!this._drawingManagerService.getFocusDrawings().find((focusedDrawing) => focusedDrawing.unitId === drawing.unitId && focusedDrawing.subUnitId === drawing.subUnitId && focusedDrawing.drawingId === drawing.drawingId)) this._drawingManagerService.focusDrawing([drawing]);
	}
	_isSamePopupTarget(previous, next) {
		return (previous === null || previous === void 0 ? void 0 : previous.unitId) === next.unitId && previous.subUnitId === next.subUnitId && previous.drawingId === next.drawingId;
	}
	_popupMenuListener(unitId) {
		var _this$_renderManagerS;
		const scene = (_this$_renderManagerS = this._renderManagerService.getRenderUnitById(unitId)) === null || _this$_renderManagerS === void 0 ? void 0 : _this$_renderManagerS.scene;
		if (!scene) return;
		const transformer = scene.getTransformerByCreate();
		const subscriptions = [
			transformer.createControl$.subscribe(() => {
				if (this._hasCropObject(scene)) {
					this._clearPopups(unitId, true);
					return;
				}
				const selectedObjects = transformer.getSelectedObjectMap();
				if (this._isDrawingPanelOpen || selectedObjects.size > 1) {
					this._clearPopups(unitId, this._isDrawingPanelOpen);
					return;
				}
				const object = selectedObjects.values().next().value;
				if (!object) {
					this._clearPopups(unitId);
					return;
				}
				const drawingParam = this._drawingManagerService.getDrawingOKey(object.oKey);
				if (!drawingParam || drawingParam.drawingType === _univerjs_core.DrawingTypeEnum.DRAWING_DOM || drawingParam.drawingType === _univerjs_core.DrawingTypeEnum.DRAWING_SHAPE) {
					this._clearPopups(unitId);
					return;
				}
				const { unitId: drawingUnitId, subUnitId, drawingId, drawingType } = drawingParam;
				if (!this._canEditDrawing(drawingUnitId, drawingId)) {
					this._clearPopups(unitId, true);
					return;
				}
				const disposePopups = this._disposePopupsByUnit.get(unitId);
				const previousPopupTarget = this._popupTargetsByUnit.get(unitId);
				const popupTarget = {
					unitId: drawingUnitId,
					subUnitId,
					drawingId
				};
				if (this._isSamePopupTarget(previousPopupTarget, popupTarget) && disposePopups && disposePopups.length > 0) return;
				this._clearPopups(unitId, previousPopupTarget != null);
				const isImage = drawingType === _univerjs_core.DrawingTypeEnum.DRAWING_IMAGE;
				const isChart = drawingType === _univerjs_core.DrawingTypeEnum.DRAWING_CHART;
				const popup = this._canvasPopManagerService.attachPopupToObject(object, {
					componentKey: _univerjs_drawing_ui.COMPONENT_IMAGE_POPUP_MENU,
					direction: isImage || isChart ? "top-center" : "horizontal",
					offset: isImage || isChart ? [0, 8] : [2, 0],
					extraProps: {
						menuItems: this._getDrawingPopupMenuItems(drawingUnitId, subUnitId, drawingId, drawingType),
						variant: isImage ? "doc-floating-toolbar" : isChart ? "doc-chart-floating-toolbar" : void 0,
						unitId: drawingUnitId,
						subUnitId,
						drawingId
					}
				}, drawingUnitId);
				this._registerDrawingPopup(unitId, popup, {
					unitId: drawingUnitId,
					subUnitId,
					drawingId
				});
			}),
			transformer.clearControl$.subscribe((changeSelf) => this._handleClearControl(unitId, transformer, changeSelf)),
			transformer.changing$.subscribe(() => {
				this._clearPopups(unitId, true);
			})
		];
		const disposable = (0, _univerjs_core.toDisposable)(() => subscriptions.forEach((subscription) => subscription.unsubscribe()));
		this.disposeWithMe(disposable);
		return disposable;
	}
	_canEditDrawing(unitId, drawingId) {
		const documentDataModel = this._univerInstanceService.getUnit(unitId, _univerjs_core.UniverInstanceType.UNIVER_DOC);
		if (!documentDataModel) return false;
		const segmentId = (0, _univerjs_docs.getDocumentDrawingSegmentId)(documentDataModel, drawingId);
		return (0, _univerjs_docs.canEditDocumentTargets)(this._permissionService, unitId, [...(0, _univerjs_docs.getDocumentEntityParentPermissionObjectIds)(documentDataModel, segmentId, "drawing", drawingId), (0, _univerjs_docs.getDocumentEntityPermissionObjectId)(segmentId, "drawing", drawingId)]);
	}
	_getDrawingPopupMenuItems(unitId, subUnitId, drawingId, drawingType) {
		const drawing = this._drawingManagerService.getDrawingByParam({
			unitId,
			subUnitId,
			drawingId
		});
		const floatingToolbarMenuItems = drawing ? this._floatingToolbarAdapterService.getItems({
			unitId,
			subUnitId,
			drawing
		}) : null;
		const editCommandInfo = drawing ? this._drawingAdapterService.getEditDrawingCommandInfo({
			unitId,
			subUnitId,
			drawing
		}) : null;
		const defaultItems = [
			{
				label: (editCommandInfo === null || editCommandInfo === void 0 ? void 0 : editCommandInfo.label) ?? "docs-drawing-ui.image-popup.edit",
				index: 0,
				commandId: (editCommandInfo === null || editCommandInfo === void 0 ? void 0 : editCommandInfo.commandId) ?? EditDocDrawingOperation.id,
				commandParams: (editCommandInfo === null || editCommandInfo === void 0 ? void 0 : editCommandInfo.commandParams) ?? {
					unitId,
					subUnitId,
					drawingId
				},
				disable: (editCommandInfo === null || editCommandInfo === void 0 ? void 0 : editCommandInfo.disable) ?? drawingType === _univerjs_core.DrawingTypeEnum.DRAWING_DOM,
				hideOnClick: true,
				icon: "DrawingEditIcon"
			},
			{
				label: "docs-drawing-ui.image-popup.crop",
				index: 1,
				commandId: _univerjs_drawing_ui.OpenImageCropOperation.id,
				commandParams: {
					unitId,
					subUnitId,
					drawingId
				},
				disable: drawingType === _univerjs_core.DrawingTypeEnum.DRAWING_DOM,
				icon: "DrawingCropIcon"
			},
			{
				label: "docs-drawing-ui.image-popup.delete",
				index: 2,
				commandId: _univerjs_docs_drawing.RemoveDocDrawingCommand.id,
				commandParams: {
					unitId,
					drawings: [{
						unitId,
						subUnitId,
						drawingId
					}]
				},
				disable: false,
				icon: "DrawingDeleteIcon"
			},
			{
				label: "docs-drawing-ui.image-popup.reset",
				index: 3,
				commandId: _univerjs_drawing_ui.ImageResetSizeOperation.id,
				commandParams: [{
					unitId,
					subUnitId,
					drawingId
				}],
				disable: true
			}
		];
		return [...floatingToolbarMenuItems ?? defaultItems, ...this._getFloatingObjectMenuItems()];
	}
	_getFloatingObjectMenuItems() {
		return this._menuManagerService.getFlatMenuByPositionKey(_univerjs_ui.FloatingObjectToolbarPosition.DOC).flatMap(({ item }, index) => {
			if (!item || item.type !== _univerjs_ui.MenuItemType.BUTTON || !item.title || typeof item.icon !== "string") return [];
			return [{
				type: "button",
				label: item.title,
				index: 100 + index,
				commandId: item.commandId ?? item.id,
				commandParams: typeof item.params === "function" ? item.params() : item.params,
				disable: false,
				icon: item.icon
			}];
		});
	}
};
DocDrawingPopupMenuController = __decorate([
	__decorateParam(0, _univerjs_drawing.IDrawingManagerService),
	__decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_docs_ui.DocCanvasPopManagerService)),
	__decorateParam(2, _univerjs_engine_render.IRenderManagerService),
	__decorateParam(3, _univerjs_core.IUniverInstanceService),
	__decorateParam(4, _univerjs_core.IContextService),
	__decorateParam(5, _univerjs_docs_drawing.IDocDrawingAdapterService),
	__decorateParam(6, (0, _univerjs_core.Inject)(DocDrawingFloatingToolbarAdapterService)),
	__decorateParam(7, _univerjs_core.ICommandService),
	__decorateParam(8, _univerjs_ui.IMenuManagerService),
	__decorateParam(9, _univerjs_core.IPermissionService)
], DocDrawingPopupMenuController);

//#endregion
//#region src/plugin.ts
let UniverDocsDrawingUIPlugin = class UniverDocsDrawingUIPlugin extends _univerjs_core.Plugin {
	constructor(_config = defaultPluginConfig, _injector, _renderManagerSrv, _configService) {
		super();
		this._config = _config;
		this._injector = _injector;
		this._renderManagerSrv = _renderManagerSrv;
		this._configService = _configService;
		const { ...rest } = (0, _univerjs_core.merge)({}, defaultPluginConfig, this._config);
		this._configService.setConfig(DOCS_DRAWING_UI_PLUGIN_CONFIG_KEY, rest);
	}
	onStarting() {
		[
			[ComponentsController],
			[DocDrawingUIController],
			[DocDrawingPopupMenuController],
			[DocDrawingTransformerController],
			[DocDrawingAddRemoveController],
			[DocRefreshDrawingsService],
			[DocDrawingFloatingToolbarAdapterService],
			[DocFloatDomController],
			[DocDrawingPrintingController]
		].forEach((dependency) => this._injector.add(dependency));
		this._injector.get(ComponentsController);
	}
	onReady() {
		[[DocDrawingUpdateRenderController], [DocDrawingTransformUpdateController]].forEach((m) => this._renderManagerSrv.registerRenderModule(_univerjs_core.UniverInstanceType.UNIVER_DOC, m));
		this._injector.get(DocDrawingAddRemoveController);
		this._injector.get(DocDrawingUIController);
		this._injector.get(DocDrawingTransformerController);
		this._injector.get(DocDrawingPrintingController);
	}
	onRendered() {
		this._injector.get(DocDrawingPopupMenuController);
		this._injector.get(DocFloatDomController);
	}
};
_defineProperty(UniverDocsDrawingUIPlugin, "type", _univerjs_core.UniverInstanceType.UNIVER_DOC);
_defineProperty(UniverDocsDrawingUIPlugin, "pluginName", "DOC_DRAWING_UI_PLUGIN");
_defineProperty(UniverDocsDrawingUIPlugin, "packageName", name);
_defineProperty(UniverDocsDrawingUIPlugin, "version", version);
UniverDocsDrawingUIPlugin = __decorate([
	(0, _univerjs_core.DependentOn)(_univerjs_docs.UniverDocsPlugin, _univerjs_drawing.UniverDrawingPlugin, _univerjs_engine_render.UniverRenderEnginePlugin, _univerjs_docs_drawing.UniverDocsDrawingPlugin, _univerjs_docs_ui.UniverDocsUIPlugin, _univerjs_drawing_ui.UniverDrawingUIPlugin),
	__decorateParam(1, (0, _univerjs_core.Inject)(_univerjs_core.Injector)),
	__decorateParam(2, _univerjs_engine_render.IRenderManagerService),
	__decorateParam(3, _univerjs_core.IConfigService)
], UniverDocsDrawingUIPlugin);

//#endregion
exports.ClearDocDrawingTransformerOperation = ClearDocDrawingTransformerOperation;
exports.DOCS_IMAGE_MENU_ID = DOCS_IMAGE_MENU_ID;
exports.DOCS_SHAPE_BELOW_MENU_ID = DOCS_SHAPE_BELOW_MENU_ID;
exports.DOCS_SHAPE_MENU_ID = DOCS_SHAPE_MENU_ID;
exports.DeleteDocDrawingsCommand = DeleteDocDrawingsCommand;
exports.DocDrawingFloatingToolbarAdapterService = DocDrawingFloatingToolbarAdapterService;
exports.DocDrawingPosition = DocDrawingPosition;
exports.DocDrawingTextWrap = DocDrawingTextWrap;
Object.defineProperty(exports, 'DocFloatDomController', {
  enumerable: true,
  get: function () {
    return DocFloatDomController;
  }
});
exports.DocsDrawingUIMenuSchema = menuSchema;
exports.EditDocDrawingOperation = EditDocDrawingOperation;
exports.GroupDocDrawingCommand = GroupDocDrawingCommand;
exports.InsertDocEllipseShapeCommand = InsertDocEllipseShapeCommand;
exports.InsertDocImageCommand = InsertDocImageCommand;
exports.InsertDocRectangleShapeCommand = InsertDocRectangleShapeCommand;
exports.MoveDocDrawingsCommand = MoveDocDrawingsCommand;
exports.SidebarDocDrawingOperation = SidebarDocDrawingOperation;
exports.UngroupDocDrawingCommand = UngroupDocDrawingCommand;
Object.defineProperty(exports, 'UniverDocsDrawingUIPlugin', {
  enumerable: true,
  get: function () {
    return UniverDocsDrawingUIPlugin;
  }
});