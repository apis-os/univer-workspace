Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs/core"),
 t = require("@univerjs/sheets"),
 n = require("@univerjs-pro/collaboration"),
 r = require("@univerjs-pro/collaboration-client"),
 i = require("@univerjs-pro/engine-formula"),
 a = require("@univerjs-pro/license"),
 o = require("@univerjs-pro/sheets-chart"),
 s = require("@univerjs-pro/sheets-chart-ui"),
 c = require("@univerjs-pro/sheets-pivot"),
 l = require("@univerjs-pro/sheets-shape"),
 u = require("@univerjs-pro/sheets-shape-ui"),
 d = require("@univerjs-pro/sheets-sparkline"),
 f = require("@univerjs-pro/sheets-sparkline-ui"),
 p = require("@univerjs/data-validation"),
 m = require("@univerjs/design"),
 h = require("@univerjs/docs"),
 g = require("@univerjs/docs-ui"),
 _ = require("@univerjs/drawing"),
 v = require("@univerjs/drawing-ui"),
 y = require("@univerjs/engine-render"),
 b = require("@univerjs/network"),
 x = require("@univerjs/rpc"),
 S = require("@univerjs/sheets-conditional-formatting"),
 C = require("@univerjs/sheets-conditional-formatting-ui"),
 w = require("@univerjs/sheets-data-validation"),
 T = require("@univerjs/sheets-data-validation-ui"),
 E = require("@univerjs/sheets-drawing"),
 D = require("@univerjs/sheets-drawing-ui"),
 O = require("@univerjs/sheets-filter"),
 k = require("@univerjs/sheets-filter-ui"),
 A = require("@univerjs/sheets-formula"),
 ee = require("@univerjs/sheets-formula-ui"),
 te = require("@univerjs/sheets-hyper-link"),
 ne = require("@univerjs/sheets-hyper-link-ui"),
 re = require("@univerjs/sheets-numfmt"),
 j = require("@univerjs/sheets-table"),
 M = require("@univerjs/sheets-ui"),
 N = require("@univerjs/ui"),
 P = require("rxjs"),
 F = require("@univerjs/icons"),
 I = require("react"),
 L = require("@univerjs/protocol"),
 R = require("react/jsx-runtime"),
 z = require("@univerjs-pro/collaboration-client-ui"),
 ie = require("@univerjs-pro/sheets-history");
const B = "sheets-history-ui.config",
 ae = "history-panel",
 V = { historyPanelComponentKey: ae };
function oe(_0x5cebd5) {
 return (
 (_0x5cebd5 == null ? undefined : _0x5cebd5.historyServerUrl) ??
 "/universer-api/history"
 );
}
var se = "@univerjs-pro/sheets-history-ui",
 ce = "1.0.0-insiders.20260907-70fc579";
function le(_0x271c40) {
 "@babel/helpers - typeof";
 return (
 (le =
 typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
 ? function (_0x4bbe4f) {
 return typeof _0x4bbe4f;
 }
 : function (_0x181344) {
 return _0x181344 &&
 typeof Symbol == "function" &&
 _0x181344.constructor === Symbol &&
 _0x181344 !== Symbol.prototype
 ? "symbol"
 : typeof _0x181344;
 }),
 le(_0x271c40)
 );
}
function ue(_0x28072d, _0x39e894) {
 if (le(_0x28072d) != "object" || !_0x28072d) return _0x28072d;
 var _0x28d8d9 = _0x28072d[Symbol.toPrimitive];
 if (_0x28d8d9 !== undefined) {
 var _0x3b50ae = _0x28d8d9.call(_0x28072d, _0x39e894 || "default");
 if (le(_0x3b50ae) != "object") return _0x3b50ae;
 throw TypeError("@@toPrimitive must return a primitive value.");
 }
 return (_0x39e894 === "string" ? String : Number)(_0x28072d);
}
function de(_0x30af8a) {
 var _0x4bbccd = ue(_0x30af8a, "string");
 return le(_0x4bbccd) == "symbol" ? _0x4bbccd : _0x4bbccd + "";
}
function H(_0x119365, _0x104c03, _0x194888) {
 return (
 (_0x104c03 = de(_0x104c03)) in _0x119365
 ? Object.defineProperty(_0x119365, _0x104c03, {
 value: _0x194888,
 enumerable: true,
 configurable: true,
 writable: true,
 })
 : (_0x119365[_0x104c03] = _0x194888),
 _0x119365
 );
}
function U(_0x22114a, _0x25f853) {
 return function (_0x470531, _0x4a0f00) {
 _0x25f853(_0x470531, _0x4a0f00, _0x22114a);
 };
}
function W(_0x2fea68, _0x28b793, _0x1db094, _0x363934) {
 var _0x306a29 = arguments.length,
 _0x375f01 =
 _0x306a29 < 3
 ? _0x28b793
 : _0x363934 === null
 ? (_0x363934 = Object.getOwnPropertyDescriptor(_0x28b793, _0x1db094))
 : _0x363934,
 _0x1b6e2b;
 if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
 _0x375f01 = Reflect.decorate(_0x2fea68, _0x28b793, _0x1db094, _0x363934);
 else {
 for (var _0x20314c = _0x2fea68.length - 1; _0x20314c >= 0; _0x20314c--)
 (_0x1b6e2b = _0x2fea68[_0x20314c]) &&
 (_0x375f01 =
 (_0x306a29 < 3
 ? _0x1b6e2b(_0x375f01)
 : _0x306a29 > 3
 ? _0x1b6e2b(_0x28b793, _0x1db094, _0x375f01)
 : _0x1b6e2b(_0x28b793, _0x1db094)) || _0x375f01);
 }
 return (
 _0x306a29 > 3 &&
 _0x375f01 &&
 Object.defineProperty(_0x28b793, _0x1db094, _0x375f01),
 _0x375f01
 );
}
let G = class extends e.Disposable {
 constructor(
 _0x411273,
 _0x68a8a8,
 _0x153e66,
 _0x42650f,
 _0x587567,
 _0x2eb6e0,
 _0x276aa0,
 _0x36890f,
 _0x51c945,
 ) {
 (super(),
 (this._snapshotServerService = _0x411273),
 (this._univerInstanceService = _0x68a8a8),
 (this._commandService = _0x153e66),
 (this._permissionService = _0x42650f),
 (this._drawingManagerService = _0x587567),
 (this._configService = _0x2eb6e0),
 (this._httpService = _0x276aa0),
 (this._compressMutationService = _0x36890f),
 (this._sheetPermissionInitController = _0x51c945),
 H(this, "_workbookDataCache", undefined),
 (this._workbookDataCache = new e["LRUMap"](60)));
 }
 dispose() {
 (this._workbookDataCache["clear"](), super.dispose());
 }
 async fetchCreatorList(_0x8eecbe) {
 try {
 let _0x349c4e = (
 await this._httpService["get"](
 this._getAPIPrefix() + "/" + _0x8eecbe + "/creators",
 )
 ).body;
 if (
 _0x349c4e &&
 _0x349c4e.error &&
 _0x349c4e.error["code"] === L.ErrorCode["OK"]
 )
 return _0x349c4e.creators ?? [];
 } catch (_0x356983) {
 console.error(_0x356983);
 }
 return [];
 }
 async getVersions(_0x4494da, _0x2b0a99) {
 let {
 userIds: _0x14af49,
 lastLabel: _0x31ff81,
 origin: _0x19d532,
 } = _0x2b0a99 ?? {},
 _0x37b166 = new URL();
 SearchParams();
 (_0x37b166.set("length", "20"),
 _0x31ff81 && _0x37b166.set("lastLabel", _0x31ff81),
 _0x14af49 == null ||
 _0x14af49.forEach((_0x8046e) => {
 _0x37b166.append("userIds", _0x8046e);
 }),
 _0x19d532 && _0x37b166.set("origin", _0x19d532.toString()));
 let _0x20807e =
 this._getAPIPrefix() + "/" + _0x4494da + "/list?" + _0x37b166.toString();
 try {
 let _0x2d0cc7 = (await this._httpService["get"](_0x20807e)).body;
 if (
 _0x2d0cc7 &&
 _0x2d0cc7.error &&
 _0x2d0cc7.error["code"] === L.ErrorCode["OK"]
 ) {
 let { hasMore: _0x19847a, lastLabel: _0x15121a } = _0x2d0cc7;
 return {
 hasMore: _0x19847a,
 lastLabel: _0x15121a,
 versions: pe(_0x2d0cc7),
 members: _0x2d0cc7.entities["users"],
 };
 }
 } catch (_0x22fa71) {
 console.error(_0x22fa71);
 }
 return null;
 }
 async getHistoryChangesets(_0x3ca221, _0x17eaae) {
 let {
 unitId: _0x19dcda,
 startRevision: _0x104916,
 endRevision: _0x5f9d61,
 } = _0x17eaae,
 _0x5c0ebc =
 this._getAPIPrefix() +
 "/" +
 _0x19dcda +
 "/cs?startRevision=" +
 _0x104916 +
 "&endRevision=" +
 _0x5f9d61;
 return (await this._httpService["get"](_0x5c0ebc)).body;
 }
 _getAPIPrefix() {
 return oe(this._configService["getConfig"](B));
 }
 _cacheKey(_0x361a10, _0x31c8a2) {
 return _0x361a10 + ":" + _0x31c8a2;
 }
 async loadSheet(_0x551479, _0x4384b2, _0x31f158 = {}) {
 let _0x246999 = this._cacheKey(_0x551479, _0x4384b2),
 _0x4d46db = this._workbookDataCache["get"](_0x246999);
 if (_0x4d46db) {
 let { workbookData: _0x260f33, changesets: _0x9fe7ef } = _0x4d46db;
 return (await this._applyWorkbookData(_0x260f33, _0x9fe7ef), true);
 }
 let {
 snapshot: _0xe2cc0b,
 changesets: _0x3a371b,
 error: _0x15cf32,
 } = await this._snapshotServerService["getUnitOnRev"](_0x31f158, {
 unitID: _0x551479,
 type: e.UniverInstanceType["UNIVER_SHEET"],
 revision: _0x4384b2,
 });
 if ((0, L.isError)(_0x15cf32) || !_0xe2cc0b || !_0xe2cc0b.workbook)
 throw Error("[HistoryFetchService]: request snapshot error!");
 let _0x2fb3d9 = (_0x3a371b == null ? undefined : _0x3a371b.length) ?? 0;
 if (_0x4384b2 !== 0 && _0xe2cc0b.rev + _0x2fb3d9 !== _0x4384b2)
 throw Error("[HistoryFetchService]: wrong rev from the server!");
 let { workbook: _0x4bfb40 } = _0xe2cc0b,
 _0x51e207 = _0x4bfb40.blockMeta
 ? Object.values(_0x4bfb40.blockMeta).flatMap(
 (_0x333f4d) => _0x333f4d.blocks ?? [],
 )
 : [],
 _0x3c6c10 = await (0, n.transformSnapshotToWorkbookData)(
 _0xe2cc0b,
 (
 await Promise.all(
 _0x51e207.map((_0x1a04d4) =>
 this._snapshotServerService["getDeserializedSheetBlock"](
 _0x31f158,
 {
 unitID: _0x551479,
 type: e.UniverInstanceType["UNIVER_SHEET"],
 blockID: _0x1a04d4,
 },
 ).then((_0x1f3ef5) => _0x1f3ef5.block),
 ),
 )
 ).filter(Boolean),
 _0x31f158,
 );
 return (
 this._workbookDataCache["set"](_0x246999, {
 workbookData: _0x3c6c10,
 changesets: _0x3a371b,
 }),
 await this._applyWorkbookData(_0x3c6c10, _0x3a371b),
 true
 );
 }
 async _applyWorkbookData(_0x113840, _0x31db93) {
 let _0x49ef94 = this._univerInstanceService["getCurrentUnitOfType"](
 e.UniverInstanceType["UNIVER_SHEET"],
 );
 _0x49ef94 &&
 (this._univerInstanceService["disposeUnit"](_0x49ef94.getUnitId()),
 await Promise.resolve());
 let _0x291519 = JSON.parse(JSON.stringify(_0x113840));
 this._drawingManagerService["setDrawingEditable"](false);
 let _0x3e693e = this._createUnit(_0x291519, _0x31db93);
 (fe(this._permissionService, this._drawingManagerService, _0x3e693e),
 this._sheetPermissionInitController["refreshRangeProtectPermission"]());
 }
 _createUnit(_0x245ebc, _0x243212) {
 let _0x509386 = this._univerInstanceService["createUnit"](
 e.UniverInstanceType["UNIVER_SHEET"],
 _0x245ebc,
 );
 this._univerInstanceService["focusUnit"](_0x509386.getUnitId());
 let _0x2e4f32 = this._compressMutationService[
 "interceptor"
 ].fetchThroughInterceptors(
 this._compressMutationService["interceptor"].getInterceptPoints()
 .COMPRESS_MUTATION_APPLY,
 );
 return (
 _0x243212 == null ||
 _0x243212.forEach((_0x37c3ad) => {
 let _0x2e423a = _0x37c3ad.mutations["map"]((_0x10387b) => ({
 id: _0x10387b.id,
 params: JSON.parse(_0x10387b.data),
 }));
 (_0x2e4f32(_0x2e423a, null) || _0x2e423a).forEach((_0x254ad5) => {
 this._commandService["hasCommand"](_0x254ad5.id) &&
 this._commandService["syncExecuteCommand"](
 _0x254ad5.id,
 _0x254ad5.params,
 { fromChangeset: true },
 );
 });
 }),
 _0x509386
 );
 }
};
G = W(
 [
 U(0, n.ISnapshotServerService),
 U(1, e.IUniverInstanceService),
 U(2, e.ICommandService),
 U(3, e.IPermissionService),
 U(4, _.IDrawingManagerService),
 U(5, e.IConfigService),
 U(6, (0, e.Inject)(b.HTTPService)),
 U(7, (0, e.Inject)(n.CompressMutationService)),
 U(8, (0, e.Inject)(t.SheetPermissionInitController)),
 ],
 G,
);
function fe(_0x11e50a, _0x1b6de6, _0x8e3c8) {
 let _0xe8b01b = _0x8e3c8.getUnitId();
 (_0x1b6de6.setDrawingEditable(false),
 _0x11e50a.updatePermissionPoint(
 new t["WorkbookEditablePermission"](_0xe8b01b).id,
 false,
 ),
 _0x8e3c8.getSheets().forEach((_0x54b901) => {
 _0x11e50a.updatePermissionPoint(
 new t.WorksheetEditPermission(_0xe8b01b, _0x54b901.getSheetId()).id,
 false,
 );
 }));
}
function pe(_0x4819aa) {
 let _0x34bb66 = [],
 { entities: _0x5f4f93, historyIds: _0x258e76 } = _0x4819aa,
 { datas: _0x2a33e8, users: _0xd0dddf } = _0x5f4f93;
 for (let _0x440ebb of _0x258e76) {
 let _0x1fe785 = _0x2a33e8[_0x440ebb];
 if (_0x1fe785) {
 var _0x5773e7, _0x23222f;
 let _0x2add07 = !!(
 (_0x5773e7 = _0xd0dddf[_0x1fe785.userId]) != null && _0x5773e7.anonymous
 );
 _0x34bb66.push({
 unitId: _0x1fe785.unitId,
 user: _0x2add07
 ? ""
 : (_0xd0dddf == null ||
 (_0x23222f = _0xd0dddf[_0x1fe785.userId]) == null
 ? undefined
 : _0x23222f.name) || "",
 users: _0x1fe785.userIds["map"]((_0x3b2b36) => {
 var _0x1a5196;
 return (
 (_0xd0dddf == null || (_0x1a5196 = _0xd0dddf[_0x3b2b36]) == null
 ? undefined
 : _0x1a5196.name) || ""
 );
 }).filter((_0x4b74a0) => _0x4b74a0),
 isAnonymous: _0x2add07,
 id: _0x440ebb,
 time: _0x1fe785.createTime ? Number(_0x1fe785.createTime) : undefined,
 commands: _0x1fe785.command,
 startRev: Number(_0x1fe785.startRevision),
 endRev: Number(_0x1fe785.endRevision),
 recoverTime: _0x1fe785.recoverTime
 ? Number(_0x1fe785.recoverTime)
 : undefined,
 additionalFields: _0x1fe785.additionalFields,
 startRevCreateTime: _0x1fe785.startRevCreateTime
 ? Number(_0x1fe785.startRevCreateTime)
 : undefined,
 endRevCreateTime: _0x1fe785.endRevCreateTime
 ? Number(_0x1fe785.endRevCreateTime)
 : undefined,
 });
 }
 }
 return _0x34bb66;
}
function me(_0x4b93b5 = "sheets-history-ui.viewer.action.") {
 return {
 collaboration: [
 { id: n.CreateUnitMutation["id"], action: _0x4b93b5 + "createSheet" },
 { id: n.RevertRevisionMutation["id"], action: _0x4b93b5 + "revertSheet" },
 ],
 sheets: [
 { id: t.InsertSheetMutation["id"], action: _0x4b93b5 + "insertSheet" },
 { id: t.RemoveSheetMutation["id"], action: _0x4b93b5 + "removeSheet" },
 {
 id: t.SetWorksheetNameMutation["id"],
 action: _0x4b93b5 + "renameSheet",
 },
 {
 id: t.SetWorksheetOrderMutation["id"],
 action: _0x4b93b5 + "reorderSheet",
 },
 { id: t.SetWorksheetHideMutation["id"], action: _0x4b93b5 + "hideSheet" },
 { id: t.CopyWorksheetEndMutation["id"], action: _0x4b93b5 + "copySheet" },
 { id: t.SetTabColorMutation["id"], action: _0x4b93b5 + "setTabColor" },
 {
 id: t.SetWorkbookNameMutation["id"],
 action: _0x4b93b5 + "renameWorkbook",
 },
 { id: t.InsertRowMutation["id"], action: _0x4b93b5 + "insertRow" },
 { id: t.InsertColMutation["id"], action: _0x4b93b5 + "insertCol" },
 { id: t.RemoveRowMutation["id"], action: _0x4b93b5 + "removeRow" },
 { id: t.RemoveColMutation["id"], action: _0x4b93b5 + "removeCol" },
 { id: t.MoveRowsMutation["id"], action: _0x4b93b5 + "moveRows" },
 { id: t.MoveColsMutation["id"], action: _0x4b93b5 + "moveCols" },
 { id: t.SetRowVisibleMutation["id"], action: _0x4b93b5 + "showRow" },
 { id: t.SetRowHiddenMutation["id"], action: _0x4b93b5 + "hideRow" },
 { id: t.SetColVisibleMutation["id"], action: _0x4b93b5 + "showCol" },
 { id: t.SetColHiddenMutation["id"], action: _0x4b93b5 + "hideCol" },
 {
 id: t.SetWorksheetRowHeightMutation["id"],
 action: _0x4b93b5 + "setRowHeight",
 },
 {
 id: t.SetWorksheetColWidthMutation["id"],
 action: _0x4b93b5 + "setColWidth",
 },
 {
 id: t.SetWorksheetRowAutoHeightMutation["id"],
 action: _0x4b93b5 + "setRowAutoHeight",
 },
 {
 id: t.SetWorksheetRowIsAutoHeightMutation["id"],
 action: _0x4b93b5 + "setRowIsAutoHeight",
 },
 { id: t.SetRowDataMutation["id"], action: _0x4b93b5 + "setRowData" },
 { id: t.SetColDataMutation["id"], action: _0x4b93b5 + "setColData" },
 {
 id: t.SetWorksheetRowCountMutation["id"],
 action: _0x4b93b5 + "setRowCount",
 },
 {
 id: t.SetWorksheetColumnCountMutation["id"],
 action: _0x4b93b5 + "setColCount",
 },
 {
 id: t.SetRangeValuesMutation["id"],
 action: _0x4b93b5 + "setRangeValues",
 },
 { id: t.MoveRangeMutation["id"], action: _0x4b93b5 + "moveRange" },
 { id: t.ReorderRangeMutation["id"], action: _0x4b93b5 + "reorderRange" },
 {
 id: t.AddWorksheetMergeMutation["id"],
 action: _0x4b93b5 + "mergeCells",
 },
 {
 id: t.RemoveWorksheetMergeMutation["id"],
 action: _0x4b93b5 + "unmergeCells",
 },
 { id: t.SetFrozenMutation["id"], action: _0x4b93b5 + "setFrozen" },
 {
 id: t.ToggleGridlinesMutation["id"],
 action: _0x4b93b5 + "toggleGridlines",
 },
 {
 id: t.SetGridlinesColorMutation["id"],
 action: _0x4b93b5 + "setGridlinesColor",
 },
 {
 id: t.SetWorksheetRightToLeftMutation["id"],
 action: _0x4b93b5 + "setRightToLeft",
 },
 {
 id: t.SetWorksheetDefaultStyleMutation["id"],
 action: _0x4b93b5 + "setDefaultStyle",
 },
 {
 id: t.AddWorksheetProtectionMutation["id"],
 action: _0x4b93b5 + "addProtection",
 },
 {
 id: t.SetWorksheetProtectionMutation["id"],
 action: _0x4b93b5 + "setProtection",
 },
 {
 id: t.DeleteWorksheetProtectionMutation["id"],
 action: _0x4b93b5 + "deleteProtection",
 },
 {
 id: t.AddRangeProtectionMutation["id"],
 action: _0x4b93b5 + "addRangeProtection",
 },
 {
 id: t.SetRangeProtectionMutation["id"],
 action: _0x4b93b5 + "setRangeProtection",
 },
 {
 id: t.DeleteRangeProtectionMutation["id"],
 action: _0x4b93b5 + "deleteRangeProtection",
 },
 {
 id: t.SetWorksheetPermissionPointsMutation["id"],
 action: _0x4b93b5 + "setPermissionPoints",
 },
 { id: t.SetNumfmtMutation["id"], action: _0x4b93b5 + "setNumfmt" },
 { id: t.RemoveNumfmtMutation["id"], action: _0x4b93b5 + "removeNumfmt" },
 {
 id: t.AddRangeThemeMutation["id"],
 action: _0x4b93b5 + "addRangeTheme",
 },
 {
 id: t.SetRangeThemeMutation["id"],
 action: _0x4b93b5 + "setRangeTheme",
 },
 {
 id: t.RemoveRangeThemeMutation["id"],
 action: _0x4b93b5 + "removeRangeTheme",
 },
 {
 id: t.SetWorksheetRangeThemeStyleMutation["id"],
 action: _0x4b93b5 + "setWorksheetRangeTheme",
 },
 {
 id: t.DeleteWorksheetRangeThemeStyleMutation["id"],
 action: _0x4b93b5 + "deleteWorksheetRangeTheme",
 },
 ],
 sheetsConditionalFormatting: [
 { id: S.AddConditionalRuleMutation["id"], action: _0x4b93b5 + "setCF" },
 { id: S.SetConditionalRuleMutation["id"], action: _0x4b93b5 + "setCF" },
 {
 id: S.DeleteConditionalRuleMutation["id"],
 action: _0x4b93b5 + "deleteCF",
 },
 { id: S.MoveConditionalRuleMutation["id"], action: _0x4b93b5 + "moveCF" },
 ],
 sheetsFilter: [
 {
 id: O.SetSheetsFilterRangeMutation["id"],
 action: _0x4b93b5 + "setFilter",
 },
 {
 id: O.SetSheetsFilterCriteriaMutation["id"],
 action: _0x4b93b5 + "setFilterCriteria",
 },
 {
 id: O.RemoveSheetsFilterMutation["id"],
 action: _0x4b93b5 + "removeFilter",
 },
 {
 id: O.ReCalcSheetsFilterMutation["id"],
 action: _0x4b93b5 + "recalcFilter",
 },
 ],
 dataValidation: [
 { id: p.AddDataValidationMutation["id"], action: _0x4b93b5 + "setDV" },
 { id: p.UpdateDataValidationMutation["id"], action: _0x4b93b5 + "setDV" },
 {
 id: p.RemoveDataValidationMutation["id"],
 action: _0x4b93b5 + "removeDV",
 },
 ],
 sheetsChart: [
 {
 id: o.InsertSheetsChartMutation["id"],
 action: _0x4b93b5 + "insertChart",
 },
 {
 id: o.RemoveSheetsChartMutation["id"],
 action: _0x4b93b5 + "removeChart",
 },
 {
 id: o.ChartUpdateConfigMutation["id"],
 action: _0x4b93b5 + "updateChartConfig",
 },
 {
 id: o.ChartUpdateSourceConfigMutation["id"],
 action: _0x4b93b5 + "updateChartSource",
 },
 ],
 sheetsSparkline: [
 {
 id: d.AddSheetSparklineMutation["id"],
 action: _0x4b93b5 + "addSparkline",
 },
 {
 id: d.SetSheetSparklineMutation["id"],
 action: _0x4b93b5 + "setSparkline",
 },
 {
 id: d.RemoveSheetSparklineMutation["id"],
 action: _0x4b93b5 + "removeSparkline",
 },
 ],
 sheetsPivot: [
 {
 id: c.AddPivotTableMutation["id"],
 action: _0x4b93b5 + "addPivotTable",
 },
 {
 id: c.RemovePivotTableMutation["id"],
 action: _0x4b93b5 + "removePivotTable",
 },
 {
 id: c.SetPivotOptionMutation["id"],
 action: _0x4b93b5 + "setPivotOption",
 },
 {
 id: c.SetPivotPositionMutation["id"],
 action: _0x4b93b5 + "setPivotPosition",
 },
 {
 id: c.UpdatePivotTableSourceRangeMutation["id"],
 action: _0x4b93b5 + "updatePivotSource",
 },
 {
 id: c.AddPivotFieldMutation["id"],
 action: _0x4b93b5 + "addPivotField",
 },
 {
 id: c.RemovePivotFieldMutation["id"],
 action: _0x4b93b5 + "removePivotField",
 },
 {
 id: c.RenamePivotFieldMutation["id"],
 action: _0x4b93b5 + "renamePivotField",
 },
 {
 id: c.UpdateFieldPositionMutation["id"],
 action: _0x4b93b5 + "updateFieldPosition",
 },
 {
 id: c.UpdateValuePositionMutation["id"],
 action: _0x4b93b5 + "updateValuePosition",
 },
 {
 id: c.UpdatePivotFieldSourceInfoMutation["id"],
 action: _0x4b93b5 + "updatePivotFieldSource",
 },
 {
 id: c.SetPivotFieldFormatMutation["id"],
 action: _0x4b93b5 + "setPivotFieldFormat",
 },
 {
 id: c.SetPivotFilterMutation["id"],
 action: _0x4b93b5 + "setPivotFilter",
 },
 {
 id: c.SetPivotValueFilterMutation["id"],
 action: _0x4b93b5 + "setPivotValueFilter",
 },
 { id: c.SetPivotSortMutation["id"], action: _0x4b93b5 + "setPivotSort" },
 {
 id: c.SetPivotCollapseMutation["id"],
 action: _0x4b93b5 + "setPivotCollapse",
 },
 {
 id: c.SetPivotSubtotalTypeMutation["id"],
 action: _0x4b93b5 + "setPivotSubtotalType",
 },
 ],
 sheetsShape: [
 {
 id: l.InsertSheetsShapeMutation["id"],
 action: _0x4b93b5 + "insertShape",
 },
 {
 id: l.RemoveSheetsShapeMutation["id"],
 action: _0x4b93b5 + "removeShape",
 },
 {
 id: l.UpdateSheetsShapeDataMutation["id"],
 action: _0x4b93b5 + "updateShapeData",
 },
 {
 id: l.UpdateSheetsShapeTypeMutation["id"],
 action: _0x4b93b5 + "updateShapeType",
 },
 ],
 sheetsTable: [
 { id: j.AddSheetTableMutation["id"], action: _0x4b93b5 + "addTable" },
 {
 id: j.DeleteSheetTableMutation["id"],
 action: _0x4b93b5 + "removeTable",
 },
 { id: j.SetSheetTableMutation["id"], action: _0x4b93b5 + "updateTable" },
 {
 id: j.SetSheetTableFilterMutation["id"],
 action: _0x4b93b5 + "setTableFilter",
 },
 ],
 sheetsDrawing: [
 {
 id: E.SetDrawingApplyMutation["id"],
 action: _0x4b93b5 + "updateDrawing",
 },
 ],
 };
}
function he(_0x244496 = "sheets-history-ui.viewer.action.") {
 let _0x458dcf = me(_0x244496);
 return Object.values(_0x458dcf).flat();
}
function ge(_0x2ac24a) {
 return e.LOCALE_META[_0x2ac24a.getCurrentLocale()].tag;
}
const K = (_0x4a3aa3, _0x50ca95) => {
 if (!_0x4a3aa3) return { date: "", time: "" };
 let _0x57348a = (0, e.dateKit)(_0x4a3aa3);
 return {
 date: ye(_0x57348a.format("YYYY-MM-DD"), _0x50ca95),
 time: _0x57348a.formatIntl(ge(_0x50ca95), {
 hour: "2-digit",
 minute: "2-digit",
 second: "2-digit",
 hour12: false,
 }),
 };
 },
 _e = (_0x5d0a7f, _0x2738a8) => {
 if (
 _0x5d0a7f.commands["some"](
 (_0x41a9e0) => _0x41a9e0 === n.RevertRevisionMutation["id"],
 ) &&
 _0x5d0a7f.recoverTime
 ) {
 let _0x1f4349 = K(_0x5d0a7f.recoverTime, _0x2738a8),
 _0x26c4c2 = _0x1f4349.date + "\x20" + _0x1f4349.time;
 return (
 _0x2738a8.t("sheets-history-ui.viewer.action.revertSheetPrefix") +
 "\x20" +
 _0x26c4c2 +
 "\x20" +
 _0x2738a8.t("sheets-history-ui.viewer.action.revertSheetSuffix")
 );
 }
 let _0x24bdd7 = ve(_0x5d0a7f),
 _0x1daa99 = Array.from(new Set(_0x24bdd7)),
 _0x48c51c;
 if (_0x1daa99.length === 1) _0x48c51c = _0x2738a8.t(_0x1daa99[0]);
 else {
 let _0x4aebc0 = _0x1daa99
 .slice(0, 5)
 .map((_0x3e1116) => _0x2738a8.t(_0x3e1116))
 .join(",\x20");
 _0x48c51c =
 _0x1daa99.length > 5
 ? "" + _0x4aebc0 + _0x2738a8.t("sheets-history-ui.viewer.action.etc")
 : _0x4aebc0;
 }
 return "" + _0x48c51c;
 };
function ve(_0x2bfaeb) {
 if (_0x2bfaeb.commands["length"] === 0) return [""];
 let _0x3f667c = "sheets-history-ui.viewer.action.",
 _0x4d3ead = _0x3f667c + "editSheet",
 _0x12980d = he(_0x3f667c).filter((_0x4b39fb) =>
 _0x2bfaeb.commands["includes"](_0x4b39fb.id),
 );
 return _0x12980d != null && _0x12980d.length
 ? _0x12980d.map((_0x57ff70) => _0x57ff70.action)
 : [_0x4d3ead];
}
function ye(_0x261023, _0x5ba77e) {
 let [_0x40758f, _0x48aff1, _0x475aad] = (0, e.dateKit)()
 .format("YYYY-MM-DD")
 .split("-"),
 [_0x21ee6a, _0x54c310, _0x42b270] = _0x261023.split("-");
 if (
 _0x40758f === _0x21ee6a &&
 _0x48aff1 === _0x54c310 &&
 _0x475aad === _0x42b270
 )
 return _0x5ba77e.t("sheets-history-ui.viewer.panel.today");
 let _0x6574b4 = ge(_0x5ba77e);
 return _0x40758f === _0x21ee6a
 ? (0, e.dateKit)(_0x261023).formatIntl(_0x6574b4, {
 month: "numeric",
 day: "numeric",
 })
 : (0, e.dateKit)(_0x261023).formatIntl(_0x6574b4, {
 year: "numeric",
 month: "numeric",
 day: "numeric",
 });
}
function be(_0x3271dc) {
 return _0x3271dc
 ? _0x3271dc.reduce((_0xecf77e, _0x173342) => {
 let _0x1b4d95 = (0, e.dateKit)(_0x173342.time ?? Date.now()).format(
 "YYYY-MM-DD",
 ),
 _0x4fa17f = _0x173342.startRevCreateTime
 ? (0, e.dateKit)(_0x173342.startRevCreateTime).format("YYYY-MM-DD")
 : _0x1b4d95,
 _0x1728f7 = _0x173342.endRevCreateTime
 ? (0, e.dateKit)(_0x173342.endRevCreateTime).format("YYYY-MM-DD")
 : _0x1b4d95;
 return (
 _0xecf77e.length > 0 &&
 _0xecf77e[_0xecf77e.length - 1].startDateString === _0x4fa17f
 ? _0xecf77e[_0xecf77e.length - 1].versions["push"](_0x173342)
 : _0xecf77e.push({
 dateString: _0x1b4d95,
 startDateString: _0x4fa17f,
 endDateString: _0x1728f7,
 versions: [_0x173342],
 }),
 _0xecf77e
 );
 }, [])
 : [];
}
const xe = "VIRTUAL_VERSION_NOW";
let q = class extends e.Disposable {
 _setFetching(_0x14d8be) {
 this._fetching$["next"](_0x14d8be);
 }
 get fetching() {
 return this._fetching$["value"];
 }
 constructor(_0x1f135a, _0x20345d, _0x523059, _0x10d810, _0x312b2d) {
 (super(),
 (this._messageService = _0x1f135a),
 (this._confirmService = _0x20345d),
 (this._logService = _0x523059),
 (this._localeService = _0x10d810),
 (this._historyFetchService = _0x312b2d),
 H(this, "_versions$", new P["BehaviorSubject"]([])),
 H(this, "versions$", this._versions$["asObservable"]()),
 H(this, "_currentVersion$", new P["BehaviorSubject"]("")),
 H(this, "currentVersion$", this._currentVersion$["asObservable"]()),
 H(this, "_status$", new P["BehaviorSubject"]("entered")),
 H(this, "status$", this._status$["asObservable"]()),
 H(this, "_revertRevision$", new P["BehaviorSubject"](0)),
 H(this, "revertRevision$", this._revertRevision$["asObservable"]()),
 H(this, "_unitId$", new P.BehaviorSubject("")),
 H(this, "unitId$", this._unitId$["asObservable"]()),
 H(this, "_fetching$", new P.BehaviorSubject(false)),
 H(this, "fetching$", this._fetching$["asObservable"]()),
 H(this, "_creators$", new P["BehaviorSubject"]([])),
 H(this, "creators$", this._creators$["asObservable"]()),
 H(this, "_openPanel$", new P["BehaviorSubject"](false)),
 H(this, "openPanel$", this._openPanel$["asObservable"]()),
 H(this, "_detailVersionsMap", new Map()),
 H(this, "_loadingState$", new P["BehaviorSubject"]("init")),
 H(this, "loadingState$", this._loadingState$["asObservable"]()),
 H(this, "_lastLabel", null),
 H(this, "_hasMore", true),
 H(this, "_members", new Map()),
 H(this, "_canRevert", false),
 H(this, "_loadParams", null),
 H(this, "_unitCurrentVersionMap", new Map()));
 }
 async triggerLoadVersions(_0x59f9cc, _0x38c6b8) {
 ((this._canRevert = _0x38c6b8),
 this._openPanel$["next"](true),
 await this.loadInitialVersions(_0x59f9cc));
 }
 triggerCustomVersions(_0x6620c7, _0x4bb588, _0x5e9a8f) {
 let {
 versions: _0x52be79,
 hasMore: _0x2c02e6,
 lastLabel: _0x3b58c3,
 members: _0xd32670,
 } = _0x5e9a8f,
 _0x297e40 =
 _0x52be79.length > 0
 ? _0x52be79
 : [
 {
 unitId: _0x6620c7,
 id: xe,
 startRev: 1,
 endRev: 0,
 time: Date.now(),
 user: this._localeService["t"](
 "sheets-history-ui.viewer.panel.currentUser",
 ),
 users: [
 this._localeService["t"](
 "sheets-history-ui.viewer.panel.currentUser",
 ),
 ],
 commands: [],
 isAnonymous: false,
 },
 ];
 ((this._canRevert = _0x4bb588),
 this._unitId$["next"](_0x6620c7),
 this._updateVersions(_0x297e40, _0x2c02e6, _0x3b58c3, false, _0xd32670),
 this._currentVersion$["next"](_0x297e40[0].id));
 }
 async loadInitialVersions(_0x4903ed, _0x43bee3) {
 (this._unitId$["next"](_0x4903ed),
 (this._loadParams = _0x43bee3 ?? null),
 this._setFetching(true));
 let _0x48e233 = await this._historyFetchService["getVersions"](
 _0x4903ed,
 _0x43bee3,
 );
 if ((this._setFetching(false), _0x48e233)) {
 let {
 versions: _0x5dc79a,
 lastLabel: _0x46f0cb,
 hasMore: _0x420ee5,
 members: _0x4a6252,
 } = _0x48e233;
 (_0x5dc79a.length === 0 &&
 _0x5dc79a.push({
 unitId: _0x4903ed,
 id: xe,
 startRev: 1,
 endRev: 0,
 time: Date.now(),
 user: this._localeService["t"](
 "sheets-history-ui.viewer.panel.currentUser",
 ),
 users: [
 this._localeService["t"](
 "sheets-history-ui.viewer.panel.currentUser",
 ),
 ],
 commands: [],
 isAnonymous: false,
 }),
 this._updateVersions(_0x5dc79a, _0x420ee5, _0x46f0cb, false, _0x4a6252),
 this._currentVersion$["next"](_0x5dc79a[0].id),
 this._unitCurrentVersionMap["set"](_0x4903ed, _0x5dc79a[0].endRev));
 } else this._status$["next"]("error");
 }
 async loadMoreVersions() {
 if (!this._lastLabel || !this._hasMore || this.fetching) return false;
 this._setFetching(true);
 let _0x967b78 = await this._historyFetchService["getVersions"](
 this.unitId,
 { lastLabel: this._lastLabel, ...this._loadParams },
 );
 if ((this._setFetching(false), _0x967b78)) {
 let {
 versions: _0x14bb9b,
 lastLabel: _0x5f4f55,
 hasMore: _0xd3c240,
 members: _0x35f444,
 } = _0x967b78;
 this._updateVersions(_0x14bb9b, _0xd3c240, _0x5f4f55, true, _0x35f444);
 } else
 this._messageService["show"]({
 content: this._localeService["t"](
 "sheets-history-ui.viewer.panel.listFetchError",
 ),
 type: m.MessageType["Error"],
 duration: 3000,
 });
 return true;
 }
 async loadHistoryCreatorList() {
 let { unitId: _0x59a05f } = this;
 if (!_0x59a05f) return;
 let _0x209e89 =
 await this._historyFetchService["fetchCreatorList"](_0x59a05f);
 _0x209e89 && this._creators$["next"](_0x209e89);
 }
 async triggerLoadSheet(_0x5cb43d) {
 let { endRev: _0x2197f9 } = this.getVersion(_0x5cb43d) || {};
 if (_0x2197f9 || _0x2197f9 === 0) {
 this._loadingState$["next"]("loading");
 try {
 (await this._historyFetchService["loadSheet"](this.unitId, _0x2197f9),
 this._loadingState$["next"]("loaded"));
 } catch (_0x15d3f0) {
 (this._logService["error"](
 "[HistoryManagerService]:\x20Failed\x20to\x20load\x20history\x20revision.",
 _0x15d3f0,
 ),
 this._loadingState$["next"]("error"),
 this._status$["next"]("error"));
 }
 } else this._status$["next"]("error");
 }
 async triggerRevert(_0x24790e) {
 let _0x1b2f73 = _0x24790e
 ? this.getVersion(_0x24790e)
 : this.getCurrentVersion();
 if (!_0x1b2f73) return;
 let _0x59cfe5 = _0x1b2f73.endRev,
 _0x29896d = K(_0x1b2f73.time, this._localeService);
 (await this._confirmService["confirm"]({
 id: "confirm-revert-revision",
 title: {
 title: this._localeService["t"](
 "sheets-history-ui.viewer.panel.revertConfirm",
 ),
 },
 children: {
 title: this._localeService["t"](
 "sheets-history-ui.viewer.panel.revertConfirmText",
 _0x29896d.date,
 _0x29896d.time,
 ),
 },
 cancelText: this._localeService["t"](
 "sheets-history-ui.viewer.panel.cancel",
 ),
 confirmText: this._localeService["t"](
 "sheets-history-ui.viewer.panel.confirm",
 ),
 })) && this._revertRevision$["next"](_0x59cfe5);
 }
 _updateVersions(_0x14ebad, _0xc8d261, _0x40c55e, _0xd86347, _0x5b1065) {
 (this._setVersions(
 _0xd86347 ? this._versions$["value"].concat(_0x14ebad) : _0x14ebad,
 ),
 (this._hasMore = _0xc8d261),
 (this._lastLabel = _0x40c55e),
 _0x5b1065 &&
 Object.keys(_0x5b1065).forEach((_0x308b97) =>
 this._members["set"](_0x308b97, _0x5b1065[_0x308b97]),
 ));
 }
 getCurrentVersion() {
 return this.getVersion(this._currentVersion$["value"]);
 }
 _setVersions(_0x3be91d) {
 this._versions$["next"](_0x3be91d);
 }
 getVersion(_0x2fbfec) {
 var _0x43d205;
 return (
 ((_0x43d205 = this._versions$["value"]) == null
 ? undefined
 : _0x43d205.find((_0x41d972) => _0x41d972.id === _0x2fbfec)) ||
 this._detailVersionsMap["get"](_0x2fbfec)
 );
 }
 registerDetailVersion(_0x3cbf97) {
 this._detailVersionsMap["set"](_0x3cbf97.id, _0x3cbf97);
 }
 getCurrentUnitCurrentVersion() {
 if (this.unitId) return this._unitCurrentVersionMap["get"](this.unitId);
 }
 getSelectedVersionIsCurrentVersion() {
 var _0x174f46;
 return (
 ((_0x174f46 = this.getCurrentVersion()) == null
 ? undefined
 : _0x174f46.endRev) === this.getCurrentUnitCurrentVersion()
 );
 }
 getSelectedVersionCanRevert() {
 return !this.getSelectedVersionIsCurrentVersion() && this.canRevert;
 }
 getMember(_0x101841) {
 return this._members["get"](_0x101841);
 }
 exitHistoryMode() {
 this._status$["next"]("exited");
 }
 set status(_0x5d1903) {
 this._status$["next"](_0x5d1903);
 }
 get status() {
 return this._status$["value"];
 }
 selectVersion(_0x1b2342) {
 _0x1b2342 !== this._currentVersion$["value"] &&
 this._currentVersion$["next"](_0x1b2342);
 }
 get currentVersion() {
 return this._currentVersion$["value"];
 }
 set unitId(_0x2546a9) {
 this._unitId$["next"](_0x2546a9);
 }
 get unitId() {
 return this._unitId$["value"];
 }
 get canRevert() {
 return this._canRevert;
 }
 get loadingState() {
 return this._loadingState$["value"];
 }
};
q = W(
 [
 U(0, N.IMessageService),
 U(1, e.IConfirmService),
 U(2, e.ILogService),
 U(3, (0, e.Inject)(e.LocaleService)),
 U(4, (0, e.Inject)(G)),
 ],
 q,
);
let J = class extends e.Disposable {
 constructor(
 _0x3142ae,
 _0x53bc8f,
 _0x776ddc,
 _0x30ba48,
 _0x169763,
 _0x753420,
 _0x16d9c3,
 _0x42544a,
 _0x4f0885,
 _0x1f2476,
 _0x2c12e0,
 _0x55c65f,
 _0x13bbeb,
 ) {
 (super(),
 (this._historyManagerService = _0x3142ae),
 (this._transformService = _0x53bc8f),
 (this._snapshotServerService = _0x776ddc),
 (this._rangeProtectionRuleModel = _0x30ba48),
 (this._conditionalFormattingRuleModel = _0x169763),
 (this._dataValidationModel = _0x753420),
 (this._sheetsFilterService = _0x16d9c3),
 (this._sparklineDataSourceModel = _0x42544a),
 (this._sheetsPivotTableConfigModel = _0x4f0885),
 (this._sheetTableService = _0x1f2476),
 (this._localeService = _0x2c12e0),
 (this._sheetsChartService = _0x55c65f),
 (this._historyFetchService = _0x13bbeb),
 H(this, "_diffRangesMap", new Map()),
 H(
 this,
 "_currentVersionDiff$",
 new P.BehaviorSubject({
 ranges: new Map(),
 active: null,
 subUnitIds: [],
 }),
 ),
 H(
 this,
 "currentVersionDiff$",
 this._currentVersionDiff$["asObservable"](),
 ),
 this._init());
 }
 _init() {
 ((this._diffRangesMap = new Map()),
 this.disposeWithMe(
 this._historyManagerService["unitId$"].subscribe((_0x57193e) => {
 _0x57193e &&
 !this._diffRangesMap["has"](_0x57193e) &&
 this._diffRangesMap["set"](_0x57193e, new Map());
 }),
 ),
 this.disposeWithMe(
 this._historyManagerService["currentVersion$"].subscribe(
 async (_0x41588c) => {
 if (_0x41588c) {
 var _0x3a753b;
 (await this.ensureVersion(_0x41588c),
 this._currentVersionDiff$["next"](
 ((_0x3a753b = this._diffRangesMap["get"](
 this._historyManagerService["unitId"],
 )) == null
 ? undefined
 : _0x3a753b.get(_0x41588c)) || {
 ranges: new Map(),
 active: null,
 subUnitIds: [],
 },
 ));
 }
 },
 ),
 ));
 }
 async ensureVersion(_0x4f49c3) {
 var _0x41a3e1, _0x367219;
 let _0x34c44a = this._historyManagerService["getVersion"](_0x4f49c3),
 _0x5e5137 = this._historyManagerService["unitId"];
 if (!_0x34c44a || !_0x5e5137) return;
 let _0x4615d3 = this._diffRangesMap["get"](_0x5e5137);
 if (
 (_0x4615d3 || this._diffRangesMap["set"](_0x5e5137, new Map()),
 (_0x41a3e1 = this._diffRangesMap["get"](_0x5e5137)) != null &&
 _0x41a3e1.has(_0x34c44a.id))
 )
 return;
 let { startRev: _0x92cc03, endRev: _0x249f1a } = _0x34c44a;
 if (_0x92cc03 === 1) {
 _0x4615d3.set(_0x34c44a.id, {
 ranges: new Map(),
 active: null,
 subUnitIds: [],
 });
 return;
 }
 let _0x2ec5fb = _0x92cc03,
 _0x3dc6cc = _0x249f1a,
 _0x2830e5 = await this._historyFetchService["getHistoryChangesets"](
 {},
 { unitId: _0x5e5137, startRevision: _0x2ec5fb, endRevision: _0x3dc6cc },
 );
 if (
 ((_0x367219 = _0x2830e5.error) == null ? undefined : _0x367219.code) ===
 L.ErrorCode["OK"]
 ) {
 let _0x1b9519 = _0x2830e5.changesets["map"](
 (_0x548950) => (
 (_0x548950.mutations === null ||
 _0x548950.mutations === undefined) &&
 (_0x548950.mutations = []),
 (0, n.parseProtocolChangeset)(_0x548950)
 ),
 )
 .map((_0x34936c) =>
 _0x34936c.mutations["map"]((_0x171ee2) => ({
 ..._0x171ee2,
 params: {
 ..._0x171ee2.params,
 memberId: _0x34936c.userID || "unknownUser",
 },
 })),
 )
 .flat(),
 _0x45a6d5 = await this._transformMutationByOrder(_0x1b9519),
 _0x2a2de3 = this._getActiveSubUnitId(_0x1b9519),
 _0x4dba40 = this._extractRanges(_0x45a6d5);
 _0x4615d3.set(_0x34c44a.id, { ..._0x4dba40, active: _0x2a2de3 });
 }
 }
 getMutationActionMap() {
 let _0x1680d1 = me("sheets-history-ui.viewer.action."),
 _0x5358bf = new Map();
 return (
 Object.values(_0x1680d1)
 .flat()
 .forEach((_0x4a7179) => {
 _0x5358bf.set(_0x4a7179.id, _0x4a7179.action);
 }),
 _0x5358bf
 );
 }
 categorizeMutationRanges(_0x1c38e1, _0x511d54) {
 return this._categorizeMutationRanges(_0x1c38e1, _0x511d54);
 }
 async _transformMutationByOrder(_0x428ee2) {
 let _0x5733e3 = [];
 for (let _0x5f023e = 0; _0x5f023e < _0x428ee2.length; _0x5f023e++) {
 let _0x46897c = _0x428ee2[_0x5f023e];
 if ((_0x5733e3.push(_0x46897c), _0x5f023e !== _0x428ee2.length - 1)) {
 let _0x5df6d9 = _0x428ee2[_0x5f023e + 1],
 _0x47f4a0 = this._transformService["transformMutations"](_0x5733e3, [
 _0x5df6d9,
 ]);
 _0x5733e3 = (0, n.isTransformMutationsSuccess)(_0x47f4a0)
 ? _0x47f4a0.m1Prime
 : [];
 }
 _0x5f023e % 10 == 0 && _0x5f023e > 0 && (await this._yieldToMain());
 }
 return _0x5733e3;
 }
 _yieldToMain() {
 return new Promise((_0x5050c2) => {
 typeof requestIdleCallback == "function"
 ? requestIdleCallback(() => _0x5050c2(), { timeout: 100 })
 : setTimeout(_0x5050c2, 0);
 });
 }
 _getActiveSubUnitId(_0x1d1088) {
 let _0x7e2b6d = [];
 return (
 _0x1d1088.forEach((_0x1f369a) => {
 if (_0x1f369a.id === t.InsertSheetMutation["id"]) {
 let _0x1573e3 = _0x1f369a.params;
 _0x7e2b6d.push(_0x1573e3.sheet["id"]);
 } else {
 if (_0x1f369a.id === t.RemoveSheetMutation["id"]) {
 let _0x3bc542 = _0x1f369a.params;
 _0x7e2b6d.length > 0 &&
 (_0x7e2b6d = _0x7e2b6d.filter(
 (_0x2329b5) => _0x2329b5 !== _0x3bc542.subUnitId,
 ));
 } else {
 if (_0x1f369a.id === t.SetWorksheetHideMutation["id"]) {
 let _0xab9c0 = _0x1f369a.params;
 _0xab9c0.hidden
 ? (_0x7e2b6d = _0x7e2b6d.filter(
 (_0x28821e) => _0x28821e !== _0xab9c0.subUnitId,
 ))
 : _0x7e2b6d.push(_0xab9c0.subUnitId);
 } else {
 let _0x22f73e = _0x1f369a.params;
 _0x22f73e.subUnitId && _0x7e2b6d.push(_0x22f73e.subUnitId);
 }
 }
 }
 }),
 _0x7e2b6d.length > 0 ? _0x7e2b6d[_0x7e2b6d.length - 1] : null
 );
 }
 _extractRanges(_0x457267) {
 let _0x456e4d = new Map(),
 _0x3f5c5c = new Map(),
 _0x3e4aae = new Map(),
 _0x513047 = new Map(),
 _0x65b1d9 = new Map(),
 _0x4db87e = new Map(),
 _0x3eae6a = new Map(),
 _0x298a06 = new Map(),
 _0x479474 = new Map(),
 _0x1ae092 = new Map(),
 _0xbd5ecc = new Map(),
 _0x43cd0f = new Map(),
 _0x2b74f4 = new Set(),
 _0x287e78 = this.getMutationActionMap();
 return (
 _0x457267.forEach((_0x38bbb0) => {
 var _0x579e39,
 _0x5aff80,
 _0x2dc532,
 _0x523fd2,
 _0x5df49e,
 _0x1ed0df,
 _0x588b4a,
 _0x177e24,
 _0x5d8172,
 _0x62de30,
 _0x150d3a,
 _0x47103e,
 _0x2f4f42;
 let _0x46e859 =
 (_0x579e39 = _0x38bbb0.params) == null
 ? undefined
 : _0x579e39.memberId;
 if (!_0x46e859) return;
 _0x456e4d.has(_0x46e859) ||
 (_0x456e4d.set(_0x46e859, []),
 _0x3f5c5c.set(_0x46e859, []),
 _0x3e4aae.set(_0x46e859, []),
 _0x513047.set(_0x46e859, []),
 _0x65b1d9.set(_0x46e859, []),
 _0x4db87e.set(_0x46e859, []),
 _0x3eae6a.set(_0x46e859, []),
 _0x298a06.set(_0x46e859, []),
 _0x479474.set(_0x46e859, []),
 _0x1ae092.set(_0x46e859, []),
 _0xbd5ecc.set(_0x46e859, []),
 _0x43cd0f.set(_0x46e859, []));
 let _0x1fd700 = this._categorizeMutationRanges(_0x38bbb0, _0x287e78);
 (_0x1fd700.subUnitIds["forEach"]((_0x45668a) =>
 _0x2b74f4.add(_0x45668a),
 ),
 (_0x5aff80 = _0x456e4d.get(_0x46e859)) == null ||
 _0x5aff80.push(..._0x1fd700.allRanges),
 (_0x2dc532 = _0x3f5c5c.get(_0x46e859)) == null ||
 _0x2dc532.push(..._0x1fd700.insertCellRanges),
 (_0x523fd2 = _0x3e4aae.get(_0x46e859)) == null ||
 _0x523fd2.push(..._0x1fd700.deleteCellRanges),
 (_0x5df49e = _0x513047.get(_0x46e859)) == null ||
 _0x5df49e.push(..._0x1fd700.updateCellRanges),
 (_0x1ed0df = _0x65b1d9.get(_0x46e859)) == null ||
 _0x1ed0df.push(..._0x1fd700.insertBorderRanges),
 (_0x588b4a = _0x4db87e.get(_0x46e859)) == null ||
 _0x588b4a.push(..._0x1fd700.deleteBorderRanges),
 (_0x177e24 = _0x3eae6a.get(_0x46e859)) == null ||
 _0x177e24.push(..._0x1fd700.updateBorderRanges),
 (_0x5d8172 = _0x298a06.get(_0x46e859)) == null ||
 _0x5d8172.push(..._0x1fd700.arrowRowRanges),
 (_0x62de30 = _0x479474.get(_0x46e859)) == null ||
 _0x62de30.push(..._0x1fd700.arrowColumnRanges),
 (_0x150d3a = _0xbd5ecc.get(_0x46e859)) == null ||
 _0x150d3a.push(..._0x1fd700.insertDrawings),
 (_0x47103e = _0x43cd0f.get(_0x46e859)) == null ||
 _0x47103e.push(..._0x1fd700.deleteDrawings),
 (_0x2f4f42 = _0x1ae092.get(_0x46e859)) == null ||
 _0x2f4f42.push(..._0x1fd700.updateDrawings));
 }),
 _0x456e4d.forEach((_0x2c7bda, _0x5e6fda) => {
 (_0x456e4d.set(_0x5e6fda, this._combineRanges(_0x2c7bda)),
 _0x3f5c5c.set(
 _0x5e6fda,
 this._combineRanges(_0x3f5c5c.get(_0x5e6fda) || []),
 ),
 _0x3e4aae.set(
 _0x5e6fda,
 this._combineRanges(_0x3e4aae.get(_0x5e6fda) || []),
 ),
 _0x513047.set(
 _0x5e6fda,
 this._combineRanges(_0x513047.get(_0x5e6fda) || []),
 ),
 _0x65b1d9.set(
 _0x5e6fda,
 this._combineRanges(_0x65b1d9.get(_0x5e6fda) || []),
 ),
 _0x4db87e.set(
 _0x5e6fda,
 this._combineRanges(_0x4db87e.get(_0x5e6fda) || []),
 ),
 _0x3eae6a.set(
 _0x5e6fda,
 this._combineRanges(_0x3eae6a.get(_0x5e6fda) || []),
 ),
 _0x298a06.set(
 _0x5e6fda,
 this._combineRanges(_0x298a06.get(_0x5e6fda) || []),
 ),
 _0x479474.set(
 _0x5e6fda,
 this._combineRanges(_0x479474.get(_0x5e6fda) || []),
 ));
 }),
 {
 ranges: _0x456e4d,
 insertCellRanges: _0x3f5c5c,
 delete CellRanges: _0x3e4aae,
 updateCellRanges: _0x513047,
 insertBorderRanges: _0x65b1d9,
 delete BorderRanges: _0x4db87e,
 updateBorderRanges: _0x3eae6a,
 arrowRowRanges: _0x298a06,
 arrowColumnRanges: _0x479474,
 insertDrawings: _0xbd5ecc,
 delete Drawings: _0x43cd0f,
 updateDrawings: _0x1ae092,
 subUnitIds: Array.from(_0x2b74f4),
 }
 );
 }
 _categorizeMutationRanges(_0x2764e5, _0x565871) {
 let _0x38be89 = {
 allRanges: [],
 insertCellRanges: [],
 delete CellRanges: [],
 updateCellRanges: [],
 insertBorderRanges: [],
 delete BorderRanges: [],
 updateBorderRanges: [],
 arrowRowRanges: [],
 arrowColumnRanges: [],
 insertDrawings: [],
 delete Drawings: [],
 updateDrawings: [],
 subUnitIds: [],
 },
 _0x3033c8 = _0x2764e5.id,
 _0x31bbd3 = _0x2764e5.params,
 _0x2f72fa = _0x565871.get(_0x3033c8),
 _0x45e47b = _0x2f72fa ? this._localeService["t"](_0x2f72fa) : "";
 _0x31bbd3.subUnitId && _0x38be89.subUnitIds["push"](_0x31bbd3.subUnitId);
 let _0x2be6a7 = (_0x35ead9, _0x309554) => {
 let _0xa1ed2e = _0x35ead9.map((_0x2ca67f) => ({
 ..._0x2ca67f,
 showText: _0x45e47b,
 }));
 switch ((_0x38be89.allRanges["push"](..._0xa1ed2e), _0x309554)) {
 case "insert":
 _0x38be89.insertCellRanges["push"](..._0xa1ed2e);
 break;
 case "delete":
 _0x38be89.deleteCellRanges["push"](..._0xa1ed2e);
 break;
 case "update":
 _0x38be89.updateCellRanges["push"](..._0xa1ed2e);
 break;
 case "insertBorder":
 _0x38be89.insertBorderRanges["push"](..._0xa1ed2e);
 break;
 case "deleteBorder":
 _0x38be89.deleteBorderRanges["push"](..._0xa1ed2e);
 break;
 case "updateBorder":
 _0x38be89.updateBorderRanges["push"](..._0xa1ed2e);
 break;
 case "arrowRow":
 _0x38be89.arrowRowRanges["push"](..._0xa1ed2e);
 break;
 case "arrowColumn":
 _0x38be89.arrowColumnRanges["push"](..._0xa1ed2e);
 break;
 }
 };
 switch (_0x3033c8) {
 case t.InsertRowMutation["id"]: {
 let _0x5c12ea = _0x31bbd3;
 _0x2be6a7(
 [
 {
 range: { ..._0x5c12ea.range, rangeType: e.RANGE_TYPE["ROW"] },
 unitId: _0x5c12ea.unitId,
 subUnitId: _0x5c12ea.subUnitId,
 showText: "insertRow",
 highlightRow: true,
 },
 ],
 "insert",
 );
 break;
 }
 case t.InsertColMutation["id"]: {
 let _0x380da7 = _0x31bbd3;
 _0x2be6a7(
 [
 {
 range: { ..._0x380da7.range, rangeType: e.RANGE_TYPE["COLUMN"] },
 unitId: _0x380da7.unitId,
 subUnitId: _0x380da7.subUnitId,
 showText: "insertCol",
 highlightColumn: true,
 },
 ],
 "insert",
 );
 break;
 }
 case t.AddWorksheetMergeMutation["id"]: {
 let _0x2b6525 = _0x31bbd3;
 _0x2be6a7(
 _0x2b6525.ranges["map"]((_0x350a81) => ({
 range: _0x350a81,
 unitId: _0x2b6525.unitId,
 subUnitId: _0x2b6525.subUnitId,
 showText: "mergeCells",
 })),
 "insert",
 );
 break;
 }
 case t.SetNumfmtMutation["id"]: {
 let _0x4dd194 = _0x31bbd3;
 _0x2be6a7(
 Object.values(_0x4dd194.values)
 .map((_0x20a68e) =>
 _0x20a68e.ranges["map"]((_0xbee58f) => ({
 range: _0xbee58f,
 unitId: _0x4dd194.unitId,
 subUnitId: _0x4dd194.subUnitId,
 showText: "setNumfmt",
 })),
 )
 .flat(),
 "insert",
 );
 break;
 }
 case t.RemoveWorksheetMergeMutation["id"]: {
 let _0x47fe90 = _0x31bbd3;
 _0x2be6a7(
 _0x47fe90.ranges["map"]((_0x51001a) => ({
 range: _0x51001a,
 unitId: _0x47fe90.unitId,
 subUnitId: _0x47fe90.subUnitId,
 showText: "unmergeCells",
 })),
 "delete",
 );
 break;
 }
 case t.RemoveNumfmtMutation["id"]: {
 let _0x4ad2c5 = _0x31bbd3;
 _0x2be6a7(
 _0x4ad2c5.ranges["map"]((_0x5c36e9) => ({
 range: _0x5c36e9,
 unitId: _0x4ad2c5.unitId,
 subUnitId: _0x4ad2c5.subUnitId,
 showText: "removeNumfmt",
 })),
 "delete",
 );
 break;
 }
 case t.MoveRowsMutation["id"]: {
 let _0x4a75e2 = _0x31bbd3;
 (_0x2be6a7(
 [
 {
 range: {
 ..._0x4a75e2.sourceRange,
 rangeType: e.RANGE_TYPE["ROW"],
 },
 unitId: _0x4a75e2.unitId,
 subUnitId: _0x4a75e2.subUnitId,
 showText: "moveRows",
 },
 ],
 "delete",
 ),
 _0x2be6a7(
 [
 {
 range: {
 ..._0x4a75e2.targetRange,
 rangeType: e.RANGE_TYPE["ROW"],
 },
 unitId: _0x4a75e2.unitId,
 subUnitId: _0x4a75e2.subUnitId,
 showText: "moveRows",
 },
 ],
 "insert",
 ));
 break;
 }
 case t.MoveColsMutation["id"]: {
 let _0x331918 = _0x31bbd3;
 (_0x2be6a7(
 [
 {
 range: {
 ..._0x331918.sourceRange,
 rangeType: e.RANGE_TYPE["COLUMN"],
 },
 unitId: _0x331918.unitId,
 subUnitId: _0x331918.subUnitId,
 showText: "moveCols",
 },
 ],
 "delete",
 ),
 _0x2be6a7(
 [
 {
 range: {
 ..._0x331918.targetRange,
 rangeType: e.RANGE_TYPE["COLUMN"],
 },
 unitId: _0x331918.unitId,
 subUnitId: _0x331918.subUnitId,
 showText: "moveCols",
 },
 ],
 "insert",
 ));
 break;
 }
 case t.SetRowVisibleMutation["id"]: {
 let _0xca89ed = _0x31bbd3;
 _0x2be6a7(
 _0xca89ed.ranges["map"]((_0x521dc8) => ({
 range: { ..._0x521dc8, rangeType: e.RANGE_TYPE["ROW"] },
 unitId: _0xca89ed.unitId,
 subUnitId: _0xca89ed.subUnitId,
 showText: "showRow",
 highlightRow: true,
 })),
 "update",
 );
 break;
 }
 case t.SetRowDataMutation["id"]: {
 let _0x4b722e = _0x31bbd3;
 _0x4b722e.rowData &&
 _0x4b722e.subUnitId &&
 Object.keys(_0x4b722e.rowData)
 .map(Number)
 .forEach((_0x2aeec2) => {
 _0x2be6a7(
 [
 {
 range: {
 startRow: _0x2aeec2,
 endRow: _0x2aeec2,
 startColumn: NaN,
 endColumn: NaN,
 rangeType: e.RANGE_TYPE["ROW"],
 },
 unitId: _0x4b722e.unitId,
 subUnitId: _0x4b722e.subUnitId,
 showText: "setRowData",
 highlightRow: true,
 },
 ],
 "update",
 );
 });
 break;
 }
 case t.SetColVisibleMutation["id"]: {
 let _0x306d3c = _0x31bbd3;
 _0x2be6a7(
 _0x306d3c.ranges["map"]((_0xad921b) => ({
 range: { ..._0xad921b, rangeType: e.RANGE_TYPE["COLUMN"] },
 unitId: _0x306d3c.unitId,
 subUnitId: _0x306d3c.subUnitId,
 showText: "showCol",
 highlightColumn: true,
 })),
 "update",
 );
 break;
 }
 case t.SetColDataMutation["id"]: {
 let _0x370a5b = _0x31bbd3;
 _0x370a5b.columnData &&
 _0x370a5b.subUnitId &&
 Object.keys(_0x370a5b.columnData)
 .map(Number)
 .forEach((_0x501776) => {
 _0x2be6a7(
 [
 {
 range: {
 startRow: NaN,
 endRow: NaN,
 startColumn: _0x501776,
 endColumn: _0x501776,
 rangeType: e.RANGE_TYPE["COLUMN"],
 },
 unitId: _0x370a5b.unitId,
 subUnitId: _0x370a5b.subUnitId,
 showText: "setColData",
 highlightColumn: true,
 },
 ],
 "update",
 );
 });
 break;
 }
 case t.SetRangeValuesMutation["id"]: {
 let _0x59f0a2 = _0x31bbd3;
 _0x2be6a7(
 _0x59f0a2.cellValue
 ? Ce(_0x59f0a2.cellValue).map((_0x2a2dc4) => ({
 range: _0x2a2dc4,
 unitId: _0x59f0a2.unitId,
 subUnitId: _0x59f0a2.subUnitId,
 showText: "setRangeValues",
 }))
 : [],
 "update",
 );
 break;
 }
 case t.MoveRangeMutation["id"]: {
 let _0x328fd6 = _0x2764e5.params;
 (_0x2be6a7(
 [
 {
 range: Se(_0x328fd6.from["value"]),
 unitId: _0x328fd6.unitId,
 subUnitId: _0x328fd6.from["subUnitId"],
 showText: "moveRange",
 },
 ],
 "delete",
 ),
 _0x2be6a7(
 [
 {
 range: Se(_0x328fd6.to["value"]),
 unitId: _0x328fd6.unitId,
 subUnitId: _0x328fd6.to["subUnitId"],
 showText: "moveRange",
 },
 ],
 "insert",
 ));
 break;
 }
 case t.ReorderRangeMutation["id"]: {
 let _0x4c155a = _0x31bbd3;
 _0x2be6a7(
 [
 {
 range: _0x4c155a.range,
 unitId: _0x4c155a.unitId,
 subUnitId: _0x4c155a.subUnitId,
 },
 ],
 "update",
 );
 break;
 }
 case t.SetWorksheetRowHeightMutation["id"]: {
 let _0x1a3f1d = _0x31bbd3;
 _0x1a3f1d.ranges &&
 _0x1a3f1d.ranges["length"] > 0 &&
 _0x1a3f1d.subUnitId &&
 _0x2be6a7(
 _0x1a3f1d.ranges["map"]((_0x5468c2) => ({
 range: _0x5468c2,
 unitId: _0x1a3f1d.unitId,
 subUnitId: _0x1a3f1d.subUnitId,
 showText: "setRowHeight",
 })),
 "arrowRow",
 );
 break;
 }
 case t.SetWorksheetColWidthMutation["id"]: {
 let _0x1eb580 = _0x31bbd3;
 _0x1eb580.ranges &&
 _0x1eb580.ranges["length"] > 0 &&
 _0x1eb580.subUnitId &&
 _0x2be6a7(
 _0x1eb580.ranges["map"]((_0x5836a2) => ({
 range: _0x5836a2,
 unitId: _0x1eb580.unitId,
 subUnitId: _0x1eb580.subUnitId,
 showText: "setColWidth",
 })),
 "arrowColumn",
 );
 break;
 }
 case t.AddRangeProtectionMutation["id"]: {
 let _0x50ca33 = _0x31bbd3;
 _0x2be6a7(
 _0x50ca33.rules["map"]((_0x381ed4) =>
 _0x381ed4.ranges["map"]((_0x318edc) => ({
 range: _0x318edc,
 unitId: _0x50ca33.unitId,
 subUnitId: _0x50ca33.subUnitId,
 showText: "addRangeProtection",
 })),
 ).flat(),
 "insertBorder",
 );
 break;
 }
 case S.AddConditionalRuleMutation["id"]: {
 let _0x11ddcc = _0x31bbd3;
 _0x2be6a7(
 _0x11ddcc.rule["ranges"].map((_0x4eeec9) => ({
 range: _0x4eeec9,
 unitId: _0x11ddcc.unitId,
 subUnitId: _0x11ddcc.subUnitId,
 showText: "setCF",
 })),
 "insertBorder",
 );
 break;
 }
 case p.AddDataValidationMutation["id"]: {
 let _0x5f4529 = _0x31bbd3;
 _0x2be6a7(
 (Array.isArray(_0x5f4529.rule) ? _0x5f4529.rule : [_0x5f4529.rule])
 .map((_0x38027a) =>
 _0x38027a.ranges["map"]((_0xf6499d) => ({
 range: _0xf6499d,
 unitId: _0x5f4529.unitId,
 subUnitId: _0x5f4529.subUnitId,
 showText: "setDV",
 })),
 )
 .flat(),
 "insertBorder",
 );
 break;
 }
 case t.DeleteRangeProtectionMutation["id"]: {
 let _0x3837ba = _0x31bbd3,
 _0x2ddd36 = _0x3837ba.unitId,
 _0x4c54ff = _0x3837ba.subUnitId;
 _0x3837ba.ruleIds &&
 _0x3837ba.ruleIds["length"] > 0 &&
 _0x3837ba.subUnitId &&
 _0x3837ba.ruleIds["forEach"]((_0x5324fb) => {
 let _0x21454 = this._rangeProtectionRuleModel["getRule"](
 _0x2ddd36,
 _0x4c54ff,
 _0x5324fb,
 ),
 _0x3d86db =
 (_0x21454 == null
 ? undefined
 : _0x21454.ranges["map"]((_0x406f3b) => ({
 range: _0x406f3b,
 unitId: _0x2ddd36,
 subUnitId: _0x4c54ff,
 showText: "deleteRangeProtection",
 }))) || [];
 _0x3d86db.length > 0 && _0x2be6a7(_0x3d86db, "deleteBorder");
 });
 break;
 }
 case S.DeleteConditionalRuleMutation["id"]: {
 let _0x5a3df3 = _0x31bbd3;
 if (_0x5a3df3.cfId && _0x5a3df3.subUnitId) {
 let _0x8f2d5a = this._conditionalFormattingRuleModel["getRule"](
 _0x5a3df3.unitId,
 _0x5a3df3.subUnitId,
 _0x5a3df3.cfId,
 );
 if (_0x8f2d5a) {
 let _0x3f1037 = _0x8f2d5a.ranges["map"]((_0x4308ea) => ({
 range: _0x4308ea,
 unitId: _0x5a3df3.unitId,
 subUnitId: _0x5a3df3.subUnitId,
 showText: "deleteCF",
 }));
 _0x3f1037.length > 0 && _0x2be6a7(_0x3f1037, "deleteBorder");
 }
 }
 break;
 }
 case p.RemoveDataValidationMutation["id"]: {
 let _0x2bb7f1 = _0x31bbd3,
 _0x10e36c = Array.isArray(_0x2bb7f1.ruleId)
 ? _0x2bb7f1.ruleId
 : [_0x2bb7f1.ruleId];
 _0x10e36c.length > 0 &&
 _0x2bb7f1.subUnitId &&
 _0x10e36c.forEach((_0xc1b1a8) => {
 let _0x59e2f7 = this._dataValidationModel["getRuleById"](
 _0x2bb7f1.unitId,
 _0x2bb7f1.subUnitId,
 _0xc1b1a8,
 ),
 _0x8161fc =
 (_0x59e2f7 == null
 ? undefined
 : _0x59e2f7.ranges["map"]((_0x315b82) => ({
 range: _0x315b82,
 unitId: _0x2bb7f1.unitId,
 subUnitId: _0x2bb7f1.subUnitId,
 showText: "removeDV",
 }))) || [];
 _0x8161fc.length > 0 && _0x2be6a7(_0x8161fc, "deleteBorder");
 });
 break;
 }
 case t.SetRangeProtectionMutation["id"]: {
 let _0x406fb4 = _0x31bbd3;
 _0x2be6a7(
 _0x406fb4.rule["ranges"].map((_0x50424d) => ({
 range: _0x50424d,
 unitId: _0x406fb4.unitId,
 subUnitId: _0x406fb4.subUnitId,
 showText: "setRangeProtection",
 })),
 "updateBorder",
 );
 break;
 }
 case t.SetWorksheetRangeThemeStyleMutation["id"]: {
 let _0x3f3475 = _0x31bbd3;
 _0x2be6a7(
 [
 {
 range: _0x3f3475.range,
 unitId: _0x3f3475.unitId,
 subUnitId: _0x3f3475.subUnitId,
 showText: "setWorksheetRangeTheme",
 },
 ],
 "updateBorder",
 );
 break;
 }
 case t.DeleteWorksheetRangeThemeStyleMutation["id"]: {
 let _0x540e78 = _0x31bbd3;
 _0x2be6a7(
 [
 {
 range: _0x540e78.range,
 unitId: _0x540e78.unitId,
 subUnitId: _0x540e78.subUnitId,
 showText: "deleteWorksheetRangeTheme",
 },
 ],
 "updateBorder",
 );
 break;
 }
 case S.SetConditionalRuleMutation["id"]: {
 let _0x1a6c83 = _0x31bbd3;
 _0x2be6a7(
 _0x1a6c83.rule["ranges"].map((_0x567369) => ({
 range: _0x567369,
 unitId: _0x1a6c83.unitId,
 subUnitId: _0x1a6c83.subUnitId,
 showText: "setCF",
 })),
 "updateBorder",
 );
 break;
 }
 case S.MoveConditionalRuleMutation["id"]: {
 let _0x43ea7f = _0x31bbd3,
 _0x341661 = this._conditionalFormattingRuleModel["getRule"](
 _0x43ea7f.unitId,
 _0x43ea7f.subUnitId,
 _0x43ea7f.start["id"],
 ),
 _0x849aee = this._conditionalFormattingRuleModel["getRule"](
 _0x43ea7f.unitId,
 _0x43ea7f.subUnitId,
 _0x43ea7f.end["id"],
 );
 (_0x341661 &&
 _0x2be6a7(
 _0x341661.ranges["map"]((_0x4ee3cb) => ({
 range: _0x4ee3cb,
 unitId: _0x43ea7f.unitId,
 subUnitId: _0x43ea7f.subUnitId,
 showText: "moveCF",
 })),
 "deleteBorder",
 ),
 _0x849aee &&
 _0x2be6a7(
 _0x849aee.ranges["map"]((_0x40e151) => ({
 range: _0x40e151,
 unitId: _0x43ea7f.unitId,
 subUnitId: _0x43ea7f.subUnitId,
 showText: "moveCF",
 })),
 "insertBorder",
 ));
 break;
 }
 case O.SetSheetsFilterRangeMutation["id"]: {
 let _0x17a657 = _0x31bbd3;
 _0x2be6a7(
 [
 {
 range: _0x17a657.range,
 unitId: _0x17a657.unitId,
 subUnitId: _0x17a657.subUnitId,
 showText: "setFilter",
 },
 ],
 "updateBorder",
 );
 break;
 }
 case O.SetSheetsFilterCriteriaMutation["id"]: {
 let _0x302cb7 = _0x31bbd3,
 _0x34ea16 = this._sheetsFilterService["getFilterModel"](
 _0x302cb7.unitId,
 _0x302cb7.subUnitId,
 );
 if (_0x34ea16) {
 let _0x37887c = _0x34ea16.getRange();
 _0x2be6a7(
 _0x37887c
 ? [
 {
 range: _0x37887c,
 unitId: _0x302cb7.unitId,
 subUnitId: _0x302cb7.subUnitId,
 showText: "setFilterCriteria",
 },
 ]
 : [],
 "updateBorder",
 );
 }
 break;
 }
 case O.RemoveSheetsFilterMutation["id"]: {
 let _0x700542 = _0x31bbd3,
 _0xa3486a = this._sheetsFilterService["getFilterModel"](
 _0x700542.unitId,
 _0x700542.subUnitId,
 );
 if (_0xa3486a) {
 let _0x3f07d7 = _0xa3486a.getRange();
 _0x2be6a7(
 _0x3f07d7
 ? [
 {
 range: _0x3f07d7,
 unitId: _0x700542.unitId,
 subUnitId: _0x700542.subUnitId,
 showText: "removeFilter",
 },
 ]
 : [],
 "updateBorder",
 );
 }
 break;
 }
 case O.ReCalcSheetsFilterMutation["id"]: {
 let _0x5ed35b = _0x31bbd3,
 _0x54c312 = this._sheetsFilterService["getFilterModel"](
 _0x5ed35b.unitId,
 _0x5ed35b.subUnitId,
 );
 if (_0x54c312) {
 let _0x51702c = _0x54c312.getRange();
 _0x2be6a7(
 _0x51702c
 ? [
 {
 range: _0x51702c,
 unitId: _0x5ed35b.unitId,
 subUnitId: _0x5ed35b.subUnitId,
 showText: "removeFilter",
 },
 ]
 : [],
 "updateBorder",
 );
 }
 break;
 }
 case p.UpdateDataValidationMutation["id"]: {
 let _0x1f4446 = _0x31bbd3,
 _0x41d22d = this._dataValidationModel["getRuleById"](
 _0x1f4446.unitId,
 _0x1f4446.subUnitId,
 _0x1f4446.ruleId,
 );
 _0x41d22d &&
 _0x2be6a7(
 _0x41d22d.ranges["map"]((_0x3721ea) => ({
 range: _0x3721ea,
 unitId: _0x1f4446.unitId,
 subUnitId: _0x1f4446.subUnitId,
 showText: "setDV",
 })),
 "updateBorder",
 );
 break;
 }
 case d.AddSheetSparklineMutation["id"]: {
 let _0x4c5e36 = _0x31bbd3,
 _0x5121a2 = _0x4c5e36.unitId,
 _0x2da4cb = _0x4c5e36.subUnitId,
 _0x322fcc = _0x4c5e36.sparklineConfigMap;
 _0x4c5e36.sparklineConfigMap &&
 _0x2da4cb &&
 Object.keys(_0x4c5e36.sparklineConfigMap).forEach((_0x110233) => {
 let _0x4cd56a = _0x322fcc[_0x110233],
 _0x150db6 = Ce(_0x4cd56a.sparklines).map((_0x143575) => ({
 range: _0x143575,
 unitId: _0x5121a2,
 subUnitId: _0x2da4cb,
 showText: "addSparkline",
 }));
 _0x2be6a7(_0x150db6, "insert");
 });
 break;
 }
 case d.SetSheetSparklineMutation["id"]: {
 let _0x1c654e = _0x31bbd3;
 _0x1c654e.groupIds &&
 _0x1c654e.groupIds["length"] > 0 &&
 _0x1c654e.subUnitId &&
 _0x1c654e.groupIds["forEach"]((_0x124253) => {
 let _0x44c3d3 = this._sparklineDataSourceModel["getSparklineById"](
 _0x1c654e.unitId,
 _0x1c654e.subUnitId,
 _0x124253,
 );
 if (_0x44c3d3) {
 let _0x460c91 = Ce(_0x44c3d3.sparklines["getMatrix"]()).map(
 (_0x154368) => ({
 range: _0x154368,
 unitId: _0x1c654e.unitId,
 subUnitId: _0x1c654e.subUnitId,
 showText: "setSparkline",
 }),
 );
 _0x2be6a7(_0x460c91, "update");
 }
 });
 break;
 }
 case d.RemoveSheetSparklineMutation["id"]: {
 let _0x207597 = _0x31bbd3;
 _0x207597.groupIds &&
 _0x207597.groupIds["length"] > 0 &&
 _0x207597.subUnitId &&
 _0x207597.groupIds["forEach"]((_0x1b3a48) => {
 let _0x5968b5 = this._sparklineDataSourceModel["getSparklineById"](
 _0x207597.unitId,
 _0x207597.subUnitId,
 _0x1b3a48,
 );
 if (_0x5968b5) {
 let _0x515f0c = Ce(_0x5968b5.sparklines["getMatrix"]()).map(
 (_0x5694ec) => ({
 range: _0x5694ec,
 unitId: _0x207597.unitId,
 subUnitId: _0x207597.subUnitId,
 showText: "removeSparkline",
 }),
 );
 _0x2be6a7(_0x515f0c, "delete");
 }
 });
 break;
 }
 case j.AddSheetTableMutation["id"]: {
 let _0x5cef86 = _0x31bbd3;
 _0x5cef86.tableId &&
 _0x5cef86.subUnitId &&
 _0x2be6a7(
 [
 {
 range: _0x5cef86.range,
 unitId: _0x5cef86.unitId,
 subUnitId: _0x5cef86.subUnitId,
 showText: "addTable",
 },
 ],
 "insert",
 );
 break;
 }
 case j.DeleteSheetTableMutation["id"]: {
 let _0x3ea29b = _0x31bbd3;
 if (_0x3ea29b.tableId && _0x3ea29b.subUnitId) {
 var _0x85d717;
 let _0x1bde07 =
 (_0x85d717 = this._sheetTableService["getTableInfo"](
 _0x3ea29b.unitId,
 _0x3ea29b.tableId,
 )) == null
 ? undefined
 : _0x85d717.range;
 _0x1bde07 &&
 _0x2be6a7(
 [
 {
 range: _0x1bde07,
 unitId: _0x3ea29b.unitId,
 subUnitId: _0x3ea29b.subUnitId,
 showText: "removeTable",
 },
 ],
 "delete",
 );
 }
 break;
 }
 case j.SetSheetTableFilterMutation["id"]: {
 let _0xdb97c1 = _0x2764e5.params;
 if (_0xdb97c1.tableId) {
 let _0x5eca32 = this._sheetTableService["getTableInfo"](
 _0xdb97c1.unitId,
 _0xdb97c1.tableId,
 );
 _0x5eca32 &&
 _0x5eca32.range &&
 _0x5eca32.subUnitId &&
 (_0x38be89.subUnitIds["push"](_0x5eca32.subUnitId),
 _0x2be6a7(
 [
 {
 range: _0x5eca32.range,
 unitId: _0xdb97c1.unitId,
 subUnitId: _0x5eca32.subUnitId,
 showText: "setTableFilter",
 },
 ],
 "update",
 ));
 }
 break;
 }
 case j.SetSheetTableMutation["id"]: {
 let _0x35f53c = _0x31bbd3;
 if (_0x35f53c.tableId && _0x35f53c.subUnitId) {
 var _0x4130c1;
 let _0x1375e3 =
 (_0x4130c1 = this._sheetTableService["getTableInfo"](
 _0x35f53c.unitId,
 _0x35f53c.tableId,
 )) == null
 ? undefined
 : _0x4130c1.range;
 _0x1375e3 &&
 _0x2be6a7(
 [
 {
 range: _0x1375e3,
 unitId: _0x35f53c.unitId,
 subUnitId: _0x35f53c.subUnitId,
 showText: "updateTable",
 },
 ],
 "update",
 );
 }
 break;
 }
 case c.AddPivotTableMutation["id"]: {
 let _0x47b27e = _0x31bbd3;
 if (_0x47b27e.pivotTableId && _0x47b27e.subUnitId) {
 var _0x238507;
 let _0x17886a =
 (_0x238507 = this._sheetsPivotTableConfigModel[
 "getPivotTableRangeInfo"
 ](_0x47b27e.unitId, _0x47b27e.subUnitId, _0x47b27e.pivotTableId)) ==
 null
 ? undefined
 : _0x238507.rangeInfo;
 _0x17886a &&
 _0x2be6a7(
 (0, c.unionPivotViewRange)(_0x17886a).map((_0x39d574) => ({
 range: _0x39d574,
 unitId: _0x47b27e.unitId,
 subUnitId: _0x47b27e.subUnitId,
 showText: "addPivotTable",
 })),
 "insert",
 );
 }
 break;
 }
 case c.RemovePivotTableMutation["id"]: {
 let _0x42280a = _0x31bbd3;
 if (_0x42280a.pivotTableId && _0x42280a.subUnitId) {
 var _0x52cd44;
 let _0x1586e0 =
 (_0x52cd44 = this._sheetsPivotTableConfigModel[
 "getPivotTableRangeInfo"
 ](_0x42280a.unitId, _0x42280a.subUnitId, _0x42280a.pivotTableId)) ==
 null
 ? undefined
 : _0x52cd44.rangeInfo;
 _0x1586e0 &&
 _0x2be6a7(
 (0, c.unionPivotViewRange)(_0x1586e0).map((_0x16ed96) => ({
 range: _0x16ed96,
 unitId: _0x42280a.unitId,
 subUnitId: _0x42280a.subUnitId,
 showText: "removePivotTable",
 })),
 "delete",
 );
 }
 break;
 }
 case c.SetPivotOptionMutation["id"]:
 case c.SetPivotPositionMutation["id"]:
 case c.UpdatePivotTableSourceRangeMutation["id"]:
 case c.AddPivotFieldMutation["id"]:
 case c.RemovePivotFieldMutation["id"]:
 case c.RenamePivotFieldMutation["id"]:
 case c.UpdateFieldPositionMutation["id"]:
 case c.UpdateValuePositionMutation["id"]:
 case c.UpdatePivotFieldSourceInfoMutation["id"]:
 case c.SetPivotFilterMutation["id"]:
 case c.SetPivotValueFilterMutation["id"]:
 case c.SetPivotSortMutation["id"]:
 case c.SetPivotCollapseMutation["id"]:
 case c.SetPivotFieldFormatMutation["id"]:
 case c.SetPivotSubtotalTypeMutation["id"]: {
 let _0x107682 = _0x31bbd3,
 _0x329ac2 = "setPivotOption";
 if (
 (_0x3033c8 === c.SetPivotOptionMutation["id"]
 ? (_0x329ac2 = "setPivotOption")
 : _0x3033c8 === c.SetPivotPositionMutation["id"]
 ? (_0x329ac2 = "setPivotPosition")
 : _0x3033c8 === c.UpdatePivotTableSourceRangeMutation["id"]
 ? (_0x329ac2 = "updatePivotSource")
 : _0x3033c8 === c.AddPivotFieldMutation["id"]
 ? (_0x329ac2 = "addPivotField")
 : _0x3033c8 === c.RemovePivotFieldMutation["id"]
 ? (_0x329ac2 = "removePivotField")
 : _0x3033c8 === c.RenamePivotFieldMutation["id"]
 ? (_0x329ac2 = "renamePivotField")
 : _0x3033c8 === c.UpdateFieldPositionMutation["id"]
 ? (_0x329ac2 = "updateFieldPosition")
 : _0x3033c8 === c.UpdateValuePositionMutation["id"]
 ? (_0x329ac2 = "updateValuePosition")
 : _0x3033c8 ===
 c.UpdatePivotFieldSourceInfoMutation["id"]
 ? (_0x329ac2 = "updatePivotFieldSource")
 : _0x3033c8 === c.SetPivotFilterMutation["id"]
 ? (_0x329ac2 = "setPivotFilter")
 : _0x3033c8 ===
 c.SetPivotValueFilterMutation["id"]
 ? (_0x329ac2 = "setPivotValueFilter")
 : _0x3033c8 === c.SetPivotSortMutation["id"]
 ? (_0x329ac2 = "setPivotSort")
 : _0x3033c8 ===
 c.SetPivotCollapseMutation["id"]
 ? (_0x329ac2 = "setPivotCollapse")
 : _0x3033c8 ===
 c.SetPivotSubtotalTypeMutation["id"]
 ? (_0x329ac2 = "setPivotSubtotalType")
 : _0x3033c8 ===
 c.SetPivotFieldFormatMutation["id"] &&
 (_0x329ac2 = "setPivotFieldFormat"),
 _0x107682.pivotTableId && _0x107682.subUnitId)
 ) {
 var _0x589168;
 let _0x3a8bfe =
 (_0x589168 = this._sheetsPivotTableConfigModel[
 "getPivotTableRangeInfo"
 ](_0x107682.unitId, _0x107682.subUnitId, _0x107682.pivotTableId)) ==
 null
 ? undefined
 : _0x589168.rangeInfo;
 _0x3a8bfe &&
 _0x2be6a7(
 (0, c.unionPivotViewRange)(_0x3a8bfe).map((_0x2b5e7d) => ({
 range: _0x2b5e7d,
 unitId: _0x107682.unitId,
 subUnitId: _0x107682.subUnitId,
 showText: _0x329ac2,
 })),
 "update",
 );
 }
 break;
 }
 case o.InsertSheetsChartMutation["id"]: {
 let _0x4b4ccc = _0x31bbd3;
 _0x4b4ccc.chartId &&
 _0x38be89.insertDrawings["push"]({
 drawingId: _0x4b4ccc.chartId,
 unitId: _0x4b4ccc.unitId,
 subUnitId: _0x4b4ccc.subUnitId,
 showText: _0x45e47b,
 });
 break;
 }
 case o.RemoveSheetsChartMutation["id"]: {
 let _0x55f233 = _0x31bbd3;
 _0x55f233.chartId &&
 _0x38be89.deleteDrawings["push"]({
 drawingId: _0x55f233.chartId,
 unitId: _0x55f233.unitId,
 subUnitId: _0x55f233.subUnitId,
 showText: _0x45e47b,
 });
 break;
 }
 case o.ChartUpdateConfigMutation["id"]: {
 let _0x535c07 = _0x2764e5.params;
 if (_0x535c07.chartModelId) {
 let _0x11a631 = this._sheetsChartService["getSubUnitId"](
 _0x535c07.unitId,
 _0x535c07.chartModelId,
 );
 _0x11a631 &&
 (_0x38be89.subUnitIds["push"](_0x11a631),
 _0x38be89.updateDrawings["push"]({
 drawingId: _0x535c07.chartModelId,
 unitId: _0x535c07.unitId,
 subUnitId: _0x11a631,
 showText: _0x45e47b,
 }));
 }
 break;
 }
 case o.ChartUpdateSourceConfigMutation["id"]: {
 let _0xc7b482 = _0x2764e5.params;
 if (_0xc7b482.chartModelId) {
 let _0x592406 = this._sheetsChartService["getSubUnitId"](
 _0xc7b482.unitId,
 _0xc7b482.chartModelId,
 );
 _0x592406 &&
 (_0x38be89.subUnitIds["push"](_0x592406),
 _0x38be89.updateDrawings["push"]({
 drawingId: _0xc7b482.chartModelId,
 unitId: _0xc7b482.unitId,
 subUnitId: _0x592406,
 showText: _0x45e47b,
 }));
 }
 break;
 }
 case l.InsertSheetsShapeMutation["id"]: {
 let _0x354695 = _0x31bbd3;
 _0x354695.shapeId &&
 _0x38be89.insertDrawings["push"]({
 drawingId: _0x354695.shapeId,
 unitId: _0x354695.unitId,
 subUnitId: _0x354695.subUnitId,
 showText: _0x45e47b,
 });
 break;
 }
 case l.RemoveSheetsShapeMutation["id"]: {
 let _0x13df69 = _0x31bbd3;
 _0x13df69.shapeId &&
 _0x38be89.deleteDrawings["push"]({
 drawingId: _0x13df69.shapeId,
 unitId: _0x13df69.unitId,
 subUnitId: _0x13df69.subUnitId,
 showText: _0x45e47b,
 });
 break;
 }
 case l.UpdateSheetsShapeDataMutation["id"]:
 case l.UpdateSheetsShapeTypeMutation["id"]: {
 let _0x1432f7 = _0x31bbd3;
 _0x1432f7.shapeId &&
 _0x38be89.updateDrawings["push"]({
 drawingId: _0x1432f7.shapeId,
 unitId: _0x1432f7.unitId,
 subUnitId: _0x1432f7.subUnitId,
 showText: _0x45e47b,
 });
 break;
 }
 case E.SetDrawingApplyMutation["id"]: {
 let _0x430ed7 = _0x31bbd3,
 _0x28b547 = _0x430ed7.objects,
 _0x13d52c = _0x430ed7.type,
 _0x55d845 =
 _0x13d52c !== E.DrawingApplyType["INSERT"] &&
 _0x13d52c !== E.DrawingApplyType["REMOVE"],
 _0x16593c = _0x13d52c === E.DrawingApplyType["INSERT"],
 _0x2ad066 = _0x13d52c === E.DrawingApplyType["REMOVE"],
 _0xae2590 = _0x45e47b;
 if (
 (_0x13d52c === E.DrawingApplyType["INSERT"]
 ? (_0xae2590 = this._localeService["t"](
 "sheets-history-ui.viewer.action.insertDrawing",
 ))
 : _0x13d52c === E.DrawingApplyType["REMOVE"] &&
 (_0xae2590 = this._localeService["t"](
 "sheets-history-ui.viewer.action.removeDrawing",
 )),
 Array.isArray(_0x28b547))
 )
 _0x28b547.forEach((_0x32db0e) => {
 if ("drawingId" in _0x32db0e && _0x32db0e.drawingId)
 _0x55d845
 ? _0x38be89.updateDrawings["push"]({
 drawingId: _0x32db0e.drawingId,
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })
 : _0x16593c
 ? _0x38be89.insertDrawings["push"]({
 drawingId: _0x32db0e.drawingId,
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })
 : _0x2ad066 &&
 _0x38be89.deleteDrawings["push"]({
 drawingId: _0x32db0e.drawingId,
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 });
 else {
 if ("parent" in _0x32db0e && "children" in _0x32db0e) {
 var _0x5863ae, _0x5cdd27;
 ((_0x5863ae = _0x32db0e.parent) != null &&
 _0x5863ae.drawingId &&
 (_0x55d845
 ? _0x38be89.updateDrawings["push"]({
 drawingId: _0x32db0e.parent["drawingId"],
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })
 : _0x16593c
 ? _0x38be89.insertDrawings["push"]({
 drawingId: _0x32db0e.parent["drawingId"],
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })
 : _0x2ad066 &&
 _0x38be89.deleteDrawings["push"]({
 drawingId: _0x32db0e.parent["drawingId"],
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })),
 (_0x5cdd27 = _0x32db0e.children) == null ||
 _0x5cdd27.forEach((_0x31e73e) => {
 _0x31e73e.drawingId &&
 (_0x55d845
 ? _0x38be89.updateDrawings["push"]({
 drawingId: _0x31e73e.drawingId,
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })
 : _0x16593c
 ? _0x38be89.insertDrawings["push"]({
 drawingId: _0x31e73e.drawingId,
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })
 : _0x2ad066 &&
 _0x38be89.deleteDrawings["push"]({
 drawingId: _0x31e73e.drawingId,
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 }));
 }));
 }
 }
 });
 else {
 if (_0x28b547 && typeof _0x28b547 == "object") {
 if (
 "drawingIds" in _0x28b547 &&
 Array.isArray(_0x28b547.drawingIds)
 )
 _0x28b547.drawingIds["forEach"]((_0x464f40) => {
 _0x55d845
 ? _0x38be89.updateDrawings["push"]({
 drawingId: _0x464f40,
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })
 : _0x16593c
 ? _0x38be89.insertDrawings["push"]({
 drawingId: _0x464f40,
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })
 : _0x2ad066 &&
 _0x38be89.deleteDrawings["push"]({
 drawingId: _0x464f40,
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 });
 });
 else {
 if ("parent" in _0x28b547 && "children" in _0x28b547) {
 var _0x1e547e, _0x45504d;
 ((_0x1e547e = _0x28b547.parent) != null &&
 _0x1e547e.drawingId &&
 (_0x55d845
 ? _0x38be89.updateDrawings["push"]({
 drawingId: _0x28b547.parent["drawingId"],
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })
 : _0x16593c
 ? _0x38be89.insertDrawings["push"]({
 drawingId: _0x28b547.parent["drawingId"],
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })
 : _0x2ad066 &&
 _0x38be89.deleteDrawings["push"]({
 drawingId: _0x28b547.parent["drawingId"],
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })),
 (_0x45504d = _0x28b547.children) == null ||
 _0x45504d.forEach((_0x10cb70) => {
 _0x10cb70.drawingId &&
 (_0x55d845
 ? _0x38be89.updateDrawings["push"]({
 drawingId: _0x10cb70.drawingId,
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })
 : _0x16593c
 ? _0x38be89.insertDrawings["push"]({
 drawingId: _0x10cb70.drawingId,
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 })
 : _0x2ad066 &&
 _0x38be89.deleteDrawings["push"]({
 drawingId: _0x10cb70.drawingId,
 unitId: _0x430ed7.unitId,
 subUnitId: _0x430ed7.subUnitId,
 showText: _0xae2590,
 }));
 }));
 }
 }
 }
 }
 break;
 }
 }
 return _0x38be89;
 }
 _combineRanges(_0x56931b) {
 if (_0x56931b.length <= 1) return _0x56931b;
 let _0x41a300 = new Map();
 return (
 _0x56931b.forEach((_0x5abf6a) => {
 let { unitId: _0x3032cb, subUnitId: _0x3d409a } = _0x5abf6a,
 _0x5d1563 = _0x3032cb + "-" + _0x3d409a;
 if (!_0x41a300.has(_0x5d1563)) _0x41a300.set(_0x5d1563, [_0x5abf6a]);
 else {
 var _0x568240;
 (_0x568240 = _0x41a300.get(_0x5d1563)) == null ||
 _0x568240.push(_0x5abf6a);
 }
 }),
 Array.from(_0x41a300.values())
 .map((_0x33d643) =>
 new t.RangeMergeUtil()
 .add(..._0x33d643.map((_0x30d4c4) => _0x30d4c4.range))
 .merge()
 .map((_0x4712ee) => ({
 range: _0x4712ee,
 unitId: _0x33d643[0].unitId,
 subUnitId: _0x33d643[0].subUnitId,
 showText: _0x33d643[0].showText,
 highlightRow: _0x33d643[0].highlightRow,
 highlightColumn: _0x33d643[0].highlightColumn,
 })),
 )
 .flat()
 );
 }
};
J = W(
 [
 U(0, (0, e.Inject)(q)),
 U(1, n.ITransformService),
 U(2, n.ISnapshotServerService),
 U(3, (0, e.Inject)(t.RangeProtectionRuleModel)),
 U(4, (0, e.Inject)(S.ConditionalFormattingRuleModel)),
 U(5, (0, e.Inject)(w.SheetDataValidationModel)),
 U(6, (0, e.Inject)(O.SheetsFilterService)),
 U(7, (0, e.Inject)(d.SparklineDataSourceModel)),
 U(8, (0, e.Inject)(c.SheetsPivotTableConfigModel)),
 U(9, (0, e.Inject)(j.SheetTableService)),
 U(10, (0, e.Inject)(e.LocaleService)),
 U(11, (0, e.Inject)(o.SheetsChartService)),
 U(12, (0, e.Inject)(G)),
 ],
 J,
);
function Se(_0x211cff) {
 return new e["ObjectMatrix"](_0x211cff).getDataRange();
}
function Ce(_0x37a509) {
 let _0x597c91 = new e.ObjectMatrix(_0x37a509),
 _0x454afc = new e["ObjectMatrix"]();
 return (
 _0x597c91.forValue((_0x35ed4a, _0x5e43e5) => {
 _0x454afc.setValue(_0x35ed4a, _0x5e43e5, 1);
 }),
 (0, t.findAllRectangle)(_0x454afc)
 );
}
const we = [
 { key: 0, labelKey: "sheets-history-ui.viewer.panel.filterAll" },
 { key: 1, labelKey: "sheets-history-ui.viewer.panel.filterUser" },
 { key: 2, labelKey: "sheets-history-ui.viewer.panel.filterAi" },
];
function Te(_0x100b7d) {
 let { value: _0x1befba, onChange: _0xaa65e0 } = _0x100b7d,
 _0x2d47b7 = (0, N.useDependency)(e.LocaleService);
 return (0, R.jsx)("div", {
 className: "univer-relative univer-h-8",
 children: (0, R.jsx)(m.Segmented, {
 items: we.map((_0x1640ab) => ({
 label: _0x2d47b7.t(_0x1640ab.labelKey),
 value: _0x1640ab.key,
 })),
 value: _0x1befba,
 onChange: _0xaa65e0,
 }),
 });
}
function Ee() {
 var _0x298bc0;
 let _0x41ec34 = (0, N.useDependency)(q),
 _0x59a1db = (0, N.useDependency)(G),
 _0x1a5ee5 = (0, N.useDependency)(J),
 _0x6d2b46 = (0, N.useDependency)(e.IConfigService),
 _0x296517 = (0, N.useObservable)(_0x41ec34.versions$),
 _0x4ee8d5 = (0, N.useObservable)(_0x41ec34.creators$, []),
 [_0x283f7a, _0x3bb31d] = (0, I.useState)(() => new Set()),
 [_0x1a8ce9, _0x4969de] = (0, I.useState)(() => new Map()),
 [_0x2e132f, _0x519117] = (0, I.useState)(() => new Set()),
 [_0x3760a0, _0x29c421] = (0, I.useState)(0),
 _0x4b468f = (0, N.useDependency)(e.LocaleService),
 _0x374689 = (0, I.useRef)(null),
 [_0x5c5805, _0x2154aa] = (0, I.useState)(false),
 [_0x24bdf3, _0x23484e] = (0, I.useState)([]),
 _0x493200 =
 ((_0x298bc0 = _0x6d2b46.getConfig("sheets-history-ui.config")) == null
 ? undefined
 : _0x298bc0.historyAIassistantEnabled) ?? false,
 _0x5035aa = be(_0x296517),
 [_0x383f4a, _0x1fbdc0] = (0, I.useState)([]),
 _0x146ace = (0, I.useMemo)(
 () =>
 _0x4ee8d5.map((_0x127a94) => ({
 key: _0x127a94.userId,
 label: _0x127a94.name,
 })),
 [_0x4ee8d5],
 );
 (0, I.useEffect)(() => {
 _0x41ec34.loadHistoryCreatorList().catch(() => undefined);
 }, [_0x41ec34]);
 let _0x452c4c = (0, I.useCallback)(
 (_0x1875eb) => {
 (_0x1fbdc0([]),
 _0x29c421(_0x1875eb),
 _0x41ec34.unitId &&
 _0x41ec34
 .loadInitialVersions(_0x41ec34.unitId, { origin: _0x1875eb })
 .catch(() => undefined));
 },
 [_0x41ec34],
 );
 (0, I.useEffect)(() => {
 let _0x4f1207 = _0x374689.current;
 if (!_0x4f1207) return;
 let _0x3f95fa,
 _0x131d8b = () => {
 (clearTimeout(_0x3f95fa),
 (_0x3f95fa = setTimeout(() => {
 let {
 scrollTop: _0x3b1338,
 scrollHeight: _0x4aa154,
 clientHeight: _0x49c44b,
 } = _0x4f1207;
 _0x3b1338 + _0x49c44b >= _0x4aa154 - 5 &&
 _0x41ec34.loadMoreVersions().catch(() => undefined);
 }, 100)));
 };
 return (
 _0x4f1207.addEventListener("scroll", _0x131d8b),
 () => {
 (clearTimeout(_0x3f95fa),
 _0x4f1207.removeEventListener("scroll", _0x131d8b));
 }
 );
 }, [_0x41ec34]);
 let _0xba1476 = (0, I.useCallback)(
 async (_0x3ea0a4) => {
 let _0x197934 = _0x3ea0a4.id;
 if (_0x283f7a.has(_0x197934)) {
 _0x3bb31d((_0x7c4185) => {
 let _0xfee0f6 = new Set(_0x7c4185);
 return (_0xfee0f6.delete(_0x197934), _0xfee0f6);
 });
 return;
 }
 if (_0x1a8ce9.has(_0x197934)) {
 _0x3bb31d((_0x477634) => new Set(_0x477634).add(_0x197934));
 return;
 }
 _0x519117((_0x12ac6a) => new Set(_0x12ac6a).add(_0x197934));
 try {
 var _0x4a403a;
 let _0x2c508a = _0x41ec34.unitId;
 if (!_0x2c508a) return;
 let _0x11ba36 = await _0x59a1db.getHistoryChangesets(
 {},
 {
 unitId: _0x2c508a,
 startRevision: _0x3ea0a4.startRev,
 endRevision: _0x3ea0a4.endRev,
 },
 );
 if (
 ((_0x4a403a = _0x11ba36.error) == null
 ? undefined
 : _0x4a403a.code) === 1 &&
 _0x11ba36.changesets
 ) {
 let _0x449c2d = _0x11ba36.changesets["reverse"]().map((_0x14656c) => {
 var _0x5e905e, _0x372568;
 let _0x5c1f80 = (0, n.parseProtocolChangeset)(_0x14656c),
 _0x225bb7 = _0x14656c.userID || _0x5c1f80.userID,
 _0xa82ea1 =
 (_0x5e905e = _0x11ba36.users) == null
 ? undefined
 : _0x5e905e[_0x225bb7],
 _0x3d6dc2 =
 ((_0x372568 = _0x14656c.mutations) == null
 ? undefined
 : _0x372568.map((_0x129416) => _0x129416.id)) || [];
 return {
 id: _0x197934 + "-detail-" + _0x14656c.revision,
 unitId: _0x14656c.unitID,
 startRev: _0x14656c.revision,
 endRev: _0x14656c.revision,
 time: _0x14656c.createTime
 ? _0x14656c.createTime * 1000
 : undefined,
 user: (_0xa82ea1 == null ? undefined : _0xa82ea1.name) || "",
 users: [(_0xa82ea1 == null ? undefined : _0xa82ea1.name) || ""],
 commands: _0x3d6dc2,
 isAnonymous: false,
 isDetail: true,
 parentId: _0x197934,
 additionalFields: _0x14656c.additionalFields,
 };
 });
 (_0x4969de((_0xe9f1f5) =>
 new Map(_0xe9f1f5).set(_0x197934, _0x449c2d),
 ),
 _0x449c2d.forEach((_0xd00f75) => {
 _0x41ec34.registerDetailVersion(_0xd00f75);
 }));
 for (let _0x5f214e of _0x449c2d)
 await _0x1a5ee5.ensureVersion(_0x5f214e.id);
 _0x3bb31d((_0x41cac6) => new Set(_0x41cac6).add(_0x197934));
 }
 } catch (_0x4057a9) {
 console.error("Failed to fetch version details:", _0x4057a9);
 } finally {
 _0x519117((_0x5ce85b) => {
 let _0x3daeb0 = new Set(_0x5ce85b);
 return (_0x3daeb0.delete(_0x197934), _0x3daeb0);
 });
 }
 },
 [_0x283f7a, _0x1a8ce9, _0x41ec34, _0x59a1db, _0x1a5ee5],
 );
 return _0x296517
 ? (0, R.jsxs)("div", {
 ref: _0x374689,
 className:
 "univer-absolute\x20univer-flex\x20univer-h-[calc(100%-32px)]\x20univer-w-[calc(100%-16px)]\x20univer-flex-col\x20univer-overflow-auto",
 children: [
 _0x493200 &&
 (0, R.jsxs)("div", {
 className:
 "univer-sticky univer-top-0 univer-z-10 univer-mb-3 univer-flex univer-items-center univer-gap-2 univer-bg-gray-0 dark:!univer-bg-gray-200",
 children: [
 (0, R.jsx)("div", {
 className: "univer-flex-1",
 children: (0, R.jsx)(Te, {
 value: _0x3760a0,
 onChange: _0x452c4c,
 }),
 }),
 (0, R.jsx)(m.Dropdown, {
 align: "end",
 open: _0x5c5805,
 onOpenChange: (_0x4ad806) => {
 (_0x2154aa(_0x4ad806), _0x4ad806 && _0x23484e(_0x383f4a));
 },
 overlay: (0, R.jsxs)("div", {
 className: "univer-min-w-[240px]",
 children: [
 (0, R.jsx)("div", {
 className:
 "univer-px-3 univer-py-2 univer-text-sm univer-font-semibold",
 children: _0x4b468f.t(
 "sheets-history-ui.viewer.panel.filterCollaborator",
 ),
 }),
 (0, R.jsx)("div", {
 className:
 "univer-border-t univer-border-gray-200 dark:!univer-border-gray-700",
 }),
 (0, R.jsx)("div", {
 className:
 "univer-max-h-[300px] univer-overflow-y-auto univer-py-1",
 children: _0x146ace.map((_0x4fd44d) => {
 let _0x1a0f49 = _0x24bdf3.includes(_0x4fd44d.key);
 return (0, R.jsxs)(
 "div",
 {
 className:
 "univer-flex univer-cursor-pointer univer-items-center univer-gap-2 univer-px-3 univer-py-2 hover:univer-bg-gray-100 dark:hover:!univer-bg-gray-800",
 onClick: () => {
 let _0x559162 = _0x1a0f49
 ? _0x24bdf3.filter(
 (_0x45b554) =>
 _0x45b554 !== _0x4fd44d.key,
 )
 : [..._0x24bdf3, _0x4fd44d.key];
 _0x23484e(_0x559162);
 },
 children: [
 (0, R.jsx)(m.Checkbox, { checked: _0x1a0f49 }),
 (0, R.jsx)("span", {
 className: "univer-text-sm",
 children: _0x4fd44d.label,
 }),
 ],
 },
 _0x4fd44d.key,
 );
 }),
 }),
 (0, R.jsx)("div", {
 className:
 "univer-border-t univer-border-gray-200 dark:!univer-border-gray-700",
 }),
 (0, R.jsxs)("div", {
 className:
 "univer-flex\x20univer-items-center\x20univer-justify-end\x20univer-gap-2\x20univer-p-2",
 children: [
 (0, R.jsx)(m.Button, {
 variant: "ghost",
 onClick: () => {
 (_0x23484e(_0x383f4a), _0x2154aa(false));
 },
 children: _0x4b468f.t(
 "sheets-history-ui.viewer.panel.filterCollaboratorCancel",
 ),
 }),
 (0, R.jsx)(m.Button, {
 onClick: () => {
 (_0x1fbdc0(_0x24bdf3),
 _0x41ec34.unitId &&
 _0x41ec34
 .loadInitialVersions(_0x41ec34.unitId, {
 origin: _0x3760a0,
 userIds: _0x24bdf3,
 })
 .catch(() => undefined),
 _0x2154aa(false));
 },
 children: _0x4b468f.t(
 "sheets-history-ui.viewer.panel.filterCollaboratorConfirm",
 ),
 }),
 ],
 }),
 ],
 }),
 children: (0, R.jsx)(m.Button, {
 variant: "ghost",
 children: (0, R.jsx)(F.FunnelIcon, {
 className: (0, m.clsx)("univer-size-4", {
 "univer-text-blue-600\x20dark:!univer-text-blue-400":
 _0x383f4a.length > 0,
 }),
 }),
 }),
 }),
 ],
 }),
 (0, R.jsx)("div", {
 className:
 "univer-relative\x20univer-flex-1\x20univer-space-y-2\x20univer-pb-4",
 children: _0x5035aa.map((_0x184b9b) =>
 (0, R.jsxs)(
 I.Fragment,
 {
 children: [
 (0, R.jsx)(Oe, {
 date: _0x184b9b.dateString,
 startDate: _0x184b9b.startDateString,
 endDate: _0x184b9b.endDateString,
 }),
 _0x184b9b.versions["map"]((_0x4cd2bf) => {
 let _0xb0de6a = _0x283f7a.has(_0x4cd2bf.id),
 _0x338b44 = _0x2e132f.has(_0x4cd2bf.id),
 _0x3a2f3a = _0x1a8ce9.get(_0x4cd2bf.id) || [];
 return (0, R.jsxs)(
 I.Fragment,
 {
 children: [
 (0, R.jsx)(ke, {
 item: _0x4cd2bf,
 onToggleExpand: _0xba1476,
 isExpanded: _0xb0de6a,
 isLoadingDetail: _0x338b44,
 }),
 _0xb0de6a &&
 _0x3a2f3a.map((_0x3a8166, _0x288be6) =>
 (0, R.jsxs)(
 "div",
 {
 className:
 "univer-relative\x20!univer-mb-0\x20!univer-mt-0",
 children: [
 (0, R.jsxs)("div", {
 className:
 "univer-absolute univer-left-[30px] univer-top-0 univer-h-full univer-w-2.5 rtl:univer-left-auto rtl:univer-right-[30px]",
 children: [
 _0x288be6 < _0x3a2f3a.length - 1 &&
 (0, R.jsx)("div", {
 className:
 "univer-absolute univer-left-0 univer-top-0 univer-h-full univer-w-px univer-bg-gray-100 rtl:univer-left-auto rtl:univer-right-0 dark:!univer-bg-gray-800",
 }),
 _0x288be6 === _0x3a2f3a.length - 1 &&
 (0, R.jsx)("div", {
 className:
 "univer-absolute\x20univer-left-0\x20univer-top-0\x20univer-h-1/2\x20univer-w-px\x20univer-bg-gray-100\x20rtl:univer-left-auto\x20rtl:univer-right-0\x20dark:!univer-bg-gray-800",
 }),
 (0, R.jsx)("div", {
 className:
 "univer-absolute\x20univer-left-0\x20univer-top-1/2\x20univer-h-px\x20univer-w-2.5\x20-univer-translate-y-1/2\x20univer-bg-gray-100\x20rtl:univer-left-auto\x20rtl:univer-right-0\x20dark:!univer-bg-gray-800",
 }),
 ],
 }),
 (0, R.jsx)(ke, {
 item: _0x3a8166,
 isDetail: true,
 }),
 ],
 },
 _0x4cd2bf.id + "-detail-" + _0x3a8166.id,
 ),
 ),
 ],
 },
 _0x4cd2bf.id,
 );
 }),
 ],
 },
 _0x184b9b.dateString,
 ),
 ),
 }),
 ],
 })
 : (0, R.jsx)(De, {});
}
function De() {
 return (0, R.jsx)("div", {
 className: "univer-flex univer-items-center univer-justify-center",
 children: (0, R.jsx)("span", {
 className: "univer-text-gray-500",
 children: (0, R.jsx)(F.LoadingMultiIcon, {
 className: "univer-m-auto univer-animate-spin",
 }),
 }),
 });
}
function Oe(_0x5a1f39) {
 let _0x4ef594 = (0, N.useDependency)(e.LocaleService),
 { date: _0x4e1396, startDate: _0x239f0e = _0x4e1396 } = _0x5a1f39;
 return (0, R.jsx)("div", {
 className:
 "univer-flex univer-items-center univer-gap-2.5 univer-pt-1.5 univer-text-sm univer-font-medium",
 children: ye(_0x239f0e, _0x4ef594),
 });
}
function ke(_0x191463) {
 let {
 item: _0x20f0f0,
 onToggleExpand: _0x3c6d13,
 isExpanded: _0xc23a4a,
 isLoadingDetail: _0x2e64b5,
 isDetail: _0x1f282a,
 } = _0x191463,
 {
 time: _0x278ffa,
 user: _0x308c0,
 startRevCreateTime: _0x346472,
 endRevCreateTime: _0x351cec,
 users: _0x4ee956,
 } = _0x20f0f0,
 _0x2b7325 = (0, N.useDependency)(q),
 _0x44d3d9 = (0, N.useDependency)(J),
 _0x57a167 =
 (0, N.useObservable)(_0x2b7325.currentVersion$, "", true) ===
 _0x20f0f0.id,
 _0x41d1a9 = _0x2b7325.getCurrentUnitCurrentVersion() === _0x20f0f0.endRev,
 _0x1a9e16 = !_0x41d1a9 && _0x2b7325.canRevert,
 _0x5839d1 = (0, N.useDependency)(e.LocaleService),
 _0x571641 = K(_0x278ffa, _0x5839d1),
 _0x32d277 = K(_0x346472, _0x5839d1),
 _0x12de96 = K(_0x351cec, _0x5839d1),
 _0x323f4a = _0x5839d1.t("sheets-history-ui.viewer.panel.currentVersion"),
 _0x9caf34 = _0x20f0f0.startRev !== _0x20f0f0.endRev,
 _0x115f1b = !!_0x20f0f0.additionalFields,
 _0x1c7c74 = (0, I.useMemo)(() => {
 let _0x4155a6 =
 _0x308c0 || _0x5839d1.t("sheets-history-ui.viewer.panel.unknownUser");
 return (
 _0x4ee956 &&
 _0x4ee956.filter((_0x3b1873) => _0x3b1873).length > 0 &&
 (_0x4155a6 = _0x4ee956
 .filter((_0x1b2459) => _0x1b2459)
 .join(",\x20")),
 _0x115f1b
 ? "" +
 _0x5839d1.t("sheets-history-ui.viewer.panel.aiAssistant") +
 (_0x4155a6 ? "\x20(" + _0x4155a6 + ")" : "")
 : _0x4155a6
 );
 }, [_0x115f1b, _0x308c0, _0x4ee956, _0x5839d1]),
 _0xdbca73 = (0, I.useCallback)(
 async (_0x5b3159) => {
 _0x2b7325.loadingState !== "loading" &&
 (_0x2b7325.selectVersion(_0x5b3159),
 _0x1f282a &&
 (await _0x44d3d9.ensureVersion(_0x5b3159),
 await _0x2b7325.triggerLoadSheet(_0x5b3159)));
 },
 [_0x2b7325, _0x44d3d9, _0x1f282a],
 ),
 _0x24b1be = (0, I.useCallback)(
 (_0xf83266) => {
 _0x2b7325.triggerRevert(_0xf83266).catch(() => undefined);
 },
 [_0x2b7325],
 ),
 _0x426691 = (0, I.useCallback)(
 (_0x42f5e1) => {
 (_0x42f5e1.stopPropagation(),
 _0x3c6d13 &&
 !_0x2e64b5 &&
 _0x3c6d13(_0x20f0f0).catch(() => undefined));
 },
 [_0x3c6d13, _0x20f0f0, _0x2e64b5],
 ),
 _0x2acee4 = (0, R.jsx)(F.MoreRightIcon, {
 className: "univer-size-8 univer-text-gray-400 rtl:univer-rotate-180",
 });
 _0x2e64b5
 ? (_0x2acee4 = (0, R.jsx)(F.LoadingMultiIcon, {
 className: "univer-animate-spin",
 }))
 : _0xc23a4a &&
 (_0x2acee4 = (0, R.jsx)(F.MoreDownIcon, {
 className: "univer-size-8 univer-text-gray-400",
 }));
 let _0x59cce1 = _0x32d277.time;
 return (
 _0x1f282a
 ? (_0x59cce1 = _0x571641.time)
 : _0x346472 !== _0x351cec &&
 (_0x59cce1 = _0x32d277.time + " - " + _0x12de96.time),
 (0, R.jsxs)("div", {
 className: (0, m.clsx)(
 "univer-min-h-15\x20univer-flex\x20univer-cursor-pointer\x20univer-items-center\x20univer-gap-2\x20univer-rounded-md\x20univer-px-1\x20univer-py-1.5\x20univer-transition-colors\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-800",
 {
 "univer-bg-gray-50\x20dark:!univer-bg-gray-900": _0x57a167,
 "univer-ml-6\x20rtl:univer-ml-0\x20rtl:univer-mr-6": _0x1f282a,
 },
 ),
 onClick: () => _0xdbca73(_0x20f0f0.id).catch(() => undefined),
 children: [
 (0, R.jsx)("div", {
 className:
 "univer-flex\x20univer-w-3\x20univer-items-center\x20univer-justify-center",
 children:
 _0x9caf34 &&
 !_0x1f282a &&
 (0, R.jsx)("div", {
 onClick: _0x426691,
 className:
 "univer-flex univer-size-5 univer-cursor-pointer univer-items-center univer-justify-center",
 children: _0x2acee4,
 }),
 }),
 (0, R.jsxs)("div", {
 className:
 "univer-flex\x20univer-flex-1\x20univer-flex-col\x20univer-gap-1",
 children: [
 (0, R.jsxs)("div", {
 className:
 "univer-flex univer-min-h-6 univer-w-full univer-items-center univer-justify-between",
 children: [
 (0, R.jsxs)("div", {
 className:
 "univer-flex univer-flex-1 univer-items-center univer-gap-1.5 univer-text-sm univer-text-gray-600 dark:!univer-text-gray-200",
 children: [
 _0x115f1b &&
 (0, R.jsx)(F.AiAssistantMultiIcon, {
 className: "univer-size-4\x20univer-shrink-0",
 }),
 (0, R.jsx)("span", {
 className:
 "univer-break-all\x20univer-font-medium\x20univer-text-gray-700\x20dark:!univer-text-gray-200",
 children: _0x1c7c74,
 }),
 (0, R.jsx)("span", {
 className:
 "univer-text-center univer-text-gray-500 dark:!univer-text-gray-400",
 children: _0x59cce1,
 }),
 _0x41d1a9 &&
 (0, R.jsx)("span", {
 className:
 "univer-ml-1 univer-flex univer-flex-shrink-0 univer-items-center univer-justify-center univer-rounded univer-border univer-border-primary-600 univer-bg-primary-50 univer-px-1.5 univer-text-xs univer-text-primary-600",
 children: _0x323f4a,
 }),
 ],
 }),
 (0, R.jsx)("div", {
 children:
 _0x1a9e16 &&
 (0, R.jsx)(m.Tooltip, {
 title: _0x5839d1.t(
 "sheets-history-ui.viewer.panel.revertDesc",
 ),
 children: (0, R.jsx)("div", {
 onClick: (_0x5d1ee9) => {
 (_0x5d1ee9.stopPropagation(),
 _0x24b1be(_0x20f0f0.id));
 },
 className:
 "univer-flex\x20univer-size-6\x20univer-items-center\x20univer-justify-center\x20univer-rounded\x20univer-text-gray-400\x20hover:univer-bg-gray-100\x20dark:hover:!univer-bg-gray-700",
 children: (0, R.jsx)(F.RestoreIcon, {}),
 }),
 }),
 }),
 ],
 }),
 (0, R.jsx)("div", {
 className:
 "univer-text-sm univer-leading-5 univer-text-gray-500 dark:!univer-text-gray-300",
 children: _e(_0x20f0f0, _0x5839d1),
 }),
 ],
 }),
 ],
 })
 );
}
let Y = class extends e.Disposable {
 constructor(_0x116b0d, _0x58cc20) {
 (super(),
 this.disposeWithMe(_0x116b0d.register(ae, Ee)),
 this.disposeWithMe(_0x58cc20.register({ HistoryIcon: F.HistoryIcon })));
 }
};
Y = W(
 [U(0, (0, e.Inject)(N.ComponentManager)), U(1, (0, e.Inject)(N.IconManager))],
 Y,
);
let X = class extends e.Disposable {
 constructor(_0x8485b6) {
 (super(), (this._cellEditorManagerService = _0x8485b6), this._init());
 }
 _init() {
 this.disposeWithMe(
 this._cellEditorManagerService["state$"].subscribe((_0xe2871f) => {
 _0xe2871f != null &&
 _0xe2871f.show &&
 this._cellEditorManagerService["setState"]({ show: false });
 }),
 );
 }
};
X = W([U(0, M.ICellEditorManagerService)], X);
function Ae() {
 let _0x1e9101 = (0, N.useDependency)(q),
 _0x57e187 = (0, N.useDependency)(e.LocaleService);
 if ((0, N.useObservable)(_0x1e9101.loadingState$, "init") !== "loading")
 return null;
 let _0x56f946 = _0x57e187.t("sheets-history-ui.viewer.info.loading");
 return (0, R.jsx)("div", {
 "aria-busy": "true",
 "aria-label": _0x56f946,
 className:
 "univer-bg-gray-0/70\x20dark:!univer-bg-gray-900/70\x20univer-fixed\x20univer-inset-0\x20univer-z-[1000]\x20univer-flex\x20univer-cursor-wait\x20univer-items-center\x20univer-justify-center\x20univer-backdrop-blur-sm",
 children: (0, R.jsxs)("div", {
 role: "status",
 "aria-live": "polite",
 className:
 "univer-flex univer-items-center univer-gap-3 univer-rounded-lg univer-bg-gray-0 univer-px-5 univer-py-4 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-bg-gray-700 dark:!univer-text-gray-0",
 children: [
 (0, R.jsx)(F.LoadingMultiIcon, {
 className:
 "univer-size-6\x20univer-animate-spin\x20univer-text-gray-500",
 }),
 (0, R.jsx)("span", { children: _0x56f946 }),
 ],
 }),
 });
}
function je() {
 let _0x73a57b = (0, N.useDependency)(q),
 _0x40919d = (0, N.useDependency)(e.LocaleService),
 _0x19c999 = (0, N.useObservable)(_0x73a57b.currentVersion$),
 _0x21f17a = (0, I.useMemo)(
 () => (_0x19c999 ? _0x73a57b.getSelectedVersionCanRevert() : false),
 [_0x73a57b, _0x19c999],
 ),
 _0x2a1fd4 = (0, I.useCallback)(() => {
 _0x73a57b.exitHistoryMode();
 }, [_0x73a57b]),
 _0x232801 = (0, I.useCallback)(() => {
 _0x73a57b.triggerRevert();
 }, [_0x73a57b]);
 return (0, R.jsxs)("div", {
 className: (0, m.clsx)(
 "univer-flex\x20univer-h-12\x20univer-cursor-default\x20univer-items-center\x20univer-justify-between\x20univer-px-3",
 m.borderBottomClassName,
 ),
 children: [
 (0, R.jsxs)(m.Button, {
 onClick: _0x2a1fd4,
 children: [
 (0, R.jsx)(F.ArrowLeftIcon, { className: "univer-size-4" }),
 _0x40919d.t("sheets-history-ui.viewer.header.back"),
 ],
 }),
 (0, R.jsx)(m.Button, {
 variant: "primary",
 disabled: !_0x21f17a,
 onClick: _0x232801,
 children: _0x40919d.t("sheets-history-ui.viewer.header.revert"),
 }),
 ],
 });
}
let Me = class extends e.Disposable {
 constructor(
 _0x10b35a,
 _0x3a0055,
 _0xf89f99,
 _0x3e0c21,
 _0x199507,
 _0x42b281,
 _0x73c475,
 ) {
 (super(),
 (this._permissionService = _0x10b35a),
 (this._uiPartsService = _0x3a0055),
 (this._messageService = _0xf89f99),
 (this._localeService = _0x3e0c21),
 (this._historyManagerService = _0x199507),
 (this._injector = _0x42b281),
 (this._configService = _0x73c475),
 this._init());
 }
 _init() {
 (this.disposeWithMe(
 this._historyManagerService["currentVersion$"].subscribe((_0x33b6c9) => {
 _0x33b6c9 && this._historyManagerService["triggerLoadSheet"](_0x33b6c9);
 }),
 ),
 this.disposeWithMe(
 this._permissionService["permissionPointUpdate$"].subscribe(
 (_0x4d0cb0) => {
 let _0x3b23d5 = this._historyManagerService["unitId"];
 _0x3b23d5 &&
 (_0x4d0cb0.subType === L.UnitAction["Edit"] &&
 _0x4d0cb0.value === true &&
 this._permissionService["updatePermissionPoint"](
 new t["WorkbookEditablePermission"](_0x3b23d5).id,
 false,
 ),
 _0x4d0cb0.subType === L.UnitAction["RenameSheet"] &&
 _0x4d0cb0.value === true &&
 this._permissionService["updatePermissionPoint"](
 new t["WorkbookRenameSheetPermission"](_0x3b23d5).id,
 false,
 ),
 _0x4d0cb0.subType === L.UnitAction["MoveSheet"] &&
 _0x4d0cb0.value === true &&
 this._permissionService["updatePermissionPoint"](
 new t.WorkbookMoveSheetPermission(_0x3b23d5).id,
 false,
 ),
 _0x4d0cb0.subType === L.UnitAction["HideSheet"] &&
 _0x4d0cb0.value === true &&
 this._permissionService["updatePermissionPoint"](
 new t["WorkbookHideSheetPermission"](_0x3b23d5).id,
 false,
 ),
 _0x4d0cb0.subType === L.UnitAction["Comment"] &&
 _0x4d0cb0.value === true &&
 this._permissionService["updatePermissionPoint"](
 new t["WorkbookEditablePermission"](_0x3b23d5).id,
 false,
 ),
 _0x4d0cb0.subType === L.UnitAction["FloatImg"] &&
 _0x4d0cb0.value === true &&
 this._permissionService["updatePermissionPoint"](
 new t["WorkbookEditablePermission"](_0x3b23d5).id,
 false,
 ));
 },
 ),
 ),
 this._registerHeader(),
 this._registerLoadingMask());
 let _0x4d64c5 = null;
 (this.disposeWithMe(
 (0, e.toDisposable)(() =>
 _0x4d64c5 == null ? undefined : _0x4d64c5.dispose(),
 ),
 ),
 this.disposeWithMe(
 this._historyManagerService["loadingState$"].subscribe((_0x3d8a33) => {
 (_0x4d64c5 == null || _0x4d64c5.dispose(),
 (_0x4d64c5 = null),
 _0x3d8a33 === "loading" &&
 (_0x4d64c5 = this._messageService["show"]({
 type: m.MessageType["Info"],
 content: this._localeService["t"](
 "sheets-history-ui.viewer.info.loading",
 ),
 duration: 1000,
 })));
 }),
 ));
 }
 _registerHeader() {
 var _0xaeda30;
 ((_0xaeda30 = this._configService["getConfig"](
 "sheets-history-ui.config",
 )) != null &&
 _0xaeda30.historyPanelHidden) ||
 this.disposeWithMe(
 this._uiPartsService["registerComponent"](
 N.BuiltInUIPart["HEADER"],
 () => (0, N.connectInjector)(je, this._injector),
 ),
 );
 }
 _registerLoadingMask() {
 this.disposeWithMe(
 this._uiPartsService["registerComponent"](N.BuiltInUIPart["GLOBAL"], () =>
 (0, N.connectInjector)(Ae, this._injector),
 ),
 );
 }
};
Me = W(
 [
 U(0, e.IPermissionService),
 U(1, N.IUIPartsService),
 U(2, N.IMessageService),
 U(3, (0, e.Inject)(e.LocaleService)),
 U(4, (0, e.Inject)(q)),
 U(5, (0, e.Inject)(e.Injector)),
 U(6, e.IConfigService),
 ],
 Me,
);
const Ne = { insert: "green.800", delete: "red.800", update: "blue.800" };
let Pe = class extends e.Disposable {
 constructor(_0x540ced) {
 (super(),
 (this._themeService = _0x540ced),
 H(this, "_palette$", undefined),
 H(this, "palette$", undefined),
 (this._palette$ = new P["BehaviorSubject"](this._createPalette())),
 (this.palette$ = this._palette$["asObservable"]()),
 this.disposeWithMe(
 this._themeService["currentTheme$"]
 .pipe((0, P.skip)(1))
 .subscribe(() => {
 this._palette$["next"](this._createPalette());
 }),
 ),
 this.disposeWithMe(
 (0, e.toDisposable)(() => this._palette$["complete"]()),
 ));
 }
 _createPalette() {
 return {
 insert: this._createStyle("insert"),
 delete: this._createStyle("delete"),
 update: this._createStyle("update"),
 };
 }
 _createStyle(_0x19eb5f) {
 let _0x5d2800 = this._themeService["getColorFromTheme"](Ne[_0x19eb5f]);
 return {
 fill: new e["ColorKit"](_0x5d2800).setAlpha(0.5).toRgbString(),
 stroke: new e.ColorKit(_0x5d2800).setAlpha(0.9).toRgbString(),
 };
 }
};
Pe = W([U(0, (0, e.Inject)(e.ThemeService))], Pe);
var Fe = class extends y.Shape {
 constructor(_0x63e68b, _0x32431c) {
 (super(_0x63e68b, _0x32431c),
 H(this, "_color", undefined),
 H(this, "_direction", undefined),
 H(this, "_highlight", false),
 H(this, "_highlightSecond", 4),
 H(this, "_blinkTimer", undefined),
 H(this, "_blinkIntervalTimer", undefined),
 H(this, "_isBlinkVisible", true),
 (this._color = _0x32431c.color),
 (this._direction = _0x32431c.direction),
 this.setShapeProps(_0x32431c),
 _0x32431c.highlight &&
 this._startBlinking(
 _0x32431c.highlightSecond ?? this._highlightSecond,
 ));
 }
 setShapeProps(_0x504354) {
 ((this._color = _0x504354.color ?? this._color),
 (this._direction = _0x504354.direction ?? this._direction),
 (this._highlight = _0x504354.highlight ?? this._highlight),
 (this._highlightSecond =
 _0x504354.highlightSecond ?? this._highlightSecond),
 this.transformByState({
 width: _0x504354.width ?? this.width,
 height: _0x504354.height ?? this.height,
 }));
 }
 triggerDblclick(_0x52e587) {
 return false;
 }
 dispose() {
 (this._stopBlinking(), super.dispose());
 }
 _draw(_0x430a70) {
 (_0x430a70.save(),
 (_0x430a70.globalAlpha =
 this._highlight && !this._isBlinkVisible ? 0.25 : 1),
 (_0x430a70.strokeStyle = this._color),
 (_0x430a70.fillStyle = this._color),
 (_0x430a70.lineWidth = 4),
 this._direction === "horizontal"
 ? this._drawHorizontalArrow(_0x430a70)
 : this._drawVerticalArrow(_0x430a70),
 _0x430a70.restore());
 }
 _startBlinking(_0x4f8756) {
 (this._stopBlinking(),
 (this._isBlinkVisible = true),
 (this._blinkIntervalTimer = window.setInterval(() => {
 ((this._isBlinkVisible = !this._isBlinkVisible), this.makeDirty(true));
 }, 500)),
 (this._blinkTimer = window.setTimeout(() => {
 (this._stopBlinking(),
 (this._isBlinkVisible = true),
 this.makeDirty(true));
 }, _0x4f8756 * 1000)));
 }
 _stopBlinking() {
 (this._blinkIntervalTimer !== undefined &&
 (window.clearInterval(this._blinkIntervalTimer),
 (this._blinkIntervalTimer = undefined)),
 this._blinkTimer !== undefined &&
 (window.clearTimeout(this._blinkTimer),
 (this._blinkTimer = undefined)));
 }
 _drawHorizontalArrow(_0x17db77) {
 let _0x17190e = this.height / 2;
 (_0x17db77.beginPath(),
 _0x17db77.moveTo(12, _0x17190e),
 _0x17db77.lineTo(this.width - 12, _0x17190e),
 _0x17db77.stroke(),
 _0x17db77.beginPath(),
 _0x17db77.moveTo(0, _0x17190e),
 _0x17db77.lineTo(12, _0x17190e - 12 / 2),
 _0x17db77.lineTo(12, _0x17190e + 12 / 2),
 _0x17db77.closePath(),
 _0x17db77.fill(),
 _0x17db77.beginPath(),
 _0x17db77.moveTo(this.width, _0x17190e),
 _0x17db77.lineTo(this.width - 12, _0x17190e - 12 / 2),
 _0x17db77.lineTo(this.width - 12, _0x17190e + 12 / 2),
 _0x17db77.closePath(),
 _0x17db77.fill());
 }
 _drawVerticalArrow(_0x53bef0) {
 let _0x24f9c8 = this.width / 2;
 (_0x53bef0.beginPath(),
 _0x53bef0.moveTo(_0x24f9c8, 12),
 _0x53bef0.lineTo(_0x24f9c8, this.height - 12),
 _0x53bef0.stroke(),
 _0x53bef0.beginPath(),
 _0x53bef0.moveTo(_0x24f9c8, 0),
 _0x53bef0.lineTo(_0x24f9c8 - 12 / 2, 12),
 _0x53bef0.lineTo(_0x24f9c8 + 12 / 2, 12),
 _0x53bef0.closePath(),
 _0x53bef0.fill(),
 _0x53bef0.beginPath(),
 _0x53bef0.moveTo(_0x24f9c8, this.height),
 _0x53bef0.lineTo(_0x24f9c8 - 12 / 2, this.height - 12),
 _0x53bef0.lineTo(_0x24f9c8 + 12 / 2, this.height - 12),
 _0x53bef0.closePath(),
 _0x53bef0.fill());
 }
};
let Ie = class extends e.Disposable {
 constructor(
 _0x321a34,
 _0x1340db,
 _0x2ac652,
 _0x529457,
 _0x35c40e,
 _0x2c3e29,
 _0x34c7ef,
 _0xea0537,
 _0xb62a62,
 _0x1cca91,
 ) {
 (super(),
 (this._context = _0x321a34),
 (this._historyManagerService = _0x1340db),
 (this._versionDiffService = _0x2ac652),
 (this._univerInstanceService = _0x529457),
 (this._renderManagerService = _0x35c40e),
 (this._sheetSkeletonManagerService = _0x2c3e29),
 (this._commandService = _0x34c7ef),
 (this._drawingManagerService = _0xea0537),
 (this._localeService = _0xb62a62),
 (this._diffColorService = _0x1cca91),
 H(this, "_diffs", new Set()),
 H(this, "_borderDiffs", new Set()),
 H(this, "_arrowDiffs", new Set()),
 H(this, "_lastPointer", null),
 H(this, "_pointerMoveSubscription", null),
 this._init());
 }
 _init() {
 (this._initRender(), this._initActiveSwitch());
 }
 _initRender() {
 (this._initDiffRender(), this._initPointerEvents());
 }
 _initDiffRender() {
 this.disposeWithMe(
 (0, P.combineLatest)([
 this._historyManagerService["loadingState$"],
 this._sheetSkeletonManagerService["currentSkeleton$"],
 this._diffColorService["palette$"],
 ])
 .pipe(
 (0, P.switchMap)(([_0x18ff1b, _0x52c4b6, _0x201ba0]) => {
 if (_0x18ff1b === "loaded" && _0x52c4b6) {
 let _0x85ccea = _0x52c4b6.sheetId;
 return this._versionDiffService["currentVersionDiff$"].pipe(
 (0, P.map)((_0x1b2763) =>
 _0x1b2763.subUnitIds["length"] === 0 ||
 _0x1b2763.subUnitIds["includes"](_0x85ccea)
 ? {
 skeleton: _0x52c4b6,
 versionDiff: _0x1b2763,
 sheetID: _0x85ccea,
 palette: _0x201ba0,
 }
 : {
 skeleton: _0x52c4b6,
 versionDiff: null,
 palette: _0x201ba0,
 },
 ),
 );
 }
 return (0, P.of)({
 skeleton: null,
 versionDiff: null,
 sheetID: null,
 palette: _0x201ba0,
 });
 }),
 )
 .subscribe(
 ({
 skeleton: _0x187c10,
 versionDiff: _0x413344,
 sheetID: _0x39ae73,
 palette: _0x12c8ae,
 }) => {
 (this._removeDiffMarks(),
 _0x187c10 &&
 _0x413344 &&
 _0x39ae73 &&
 this._updateDiffMarks(
 _0x187c10,
 _0x413344,
 _0x39ae73,
 _0x12c8ae,
 ));
 },
 ),
 );
 }
 _initPointerEvents() {
 this.disposeWithMe(
 this._sheetSkeletonManagerService["currentSkeleton$"].subscribe(
 (_0xd30ff5) => {
 var _0x1c2c71;
 if (
 ((_0x1c2c71 = this._pointerMoveSubscription) == null ||
 _0x1c2c71.unsubscribe(),
 (this._pointerMoveSubscription = null),
 (this._lastPointer = null),
 _0xd30ff5 == null)
 )
 return;
 let { skeleton: _0x15a1e1 } = _0xd30ff5,
 { scene: _0x181cc3 } = this._context;
 this._pointerMoveSubscription = _0x181cc3.onPointerMove$[
 "subscribeEvent"
 ](
 (0, e.debounce)((_0x4f4d8a) => {
 var _0x52fba0, _0x334b5b;
 let { offsetX: _0x551668, offsetY: _0xac3554 } = _0x4f4d8a,
 { x: _0x429b2e, y: _0x4dbad3 } =
 _0x181cc3.getCoordRelativeToViewport(
 y.Vector2["FromArray"]([_0x551668, _0xac3554]),
 ),
 { scaleX: _0x305694, scaleY: _0x4ca258 } =
 _0x181cc3.getAncestorScale(),
 _0x47378b = _0x181cc3.getViewport(
 y.SHEET_VIEWPORT_KEY["VIEW_MAIN"],
 ),
 _0x207a70 = _0x181cc3.getScrollXYInfoByViewport(
 y.Vector2["FromArray"]([_0x429b2e, _0x4dbad3]),
 _0x47378b,
 ),
 _0x1cfebd = _0x15a1e1.getCellIndexByOffset(
 _0x551668,
 _0xac3554,
 _0x305694,
 _0x4ca258,
 _0x207a70,
 );
 (((_0x52fba0 = this._lastPointer) == null
 ? undefined
 : _0x52fba0.column) !== _0x1cfebd.column ||
 ((_0x334b5b = this._lastPointer) == null
 ? undefined
 : _0x334b5b.row) !== _0x1cfebd.row) &&
 ((this._lastPointer = _0x1cfebd),
 this._diffs["forEach"]((_0x5a1216) => {
 _0x5a1216.evented || _0x5a1216.onMouseMove(_0x1cfebd);
 }));
 }, 100),
 );
 },
 ),
 );
 }
 _initActiveSwitch() {
 this.disposeWithMe(
 (0, P.combineLatest)([
 this._historyManagerService["loadingState$"],
 this._versionDiffService["currentVersionDiff$"],
 ]).subscribe(([_0x24fcb1, _0x2cd60c]) => {
 _0x24fcb1 === "loaded" &&
 (this._updateWorksheetVisibility(_0x2cd60c.subUnitIds),
 _0x2cd60c.active &&
 this._commandService["syncExecuteCommand"](
 t.SetWorksheetActiveOperation["id"],
 { unitId: this._context["unitId"], subUnitId: _0x2cd60c.active },
 ));
 }),
 );
 }
 _updateWorksheetVisibility(_0x4d34c4) {
 let _0xa3ff5e = this._univerInstanceService["getUnit"](
 this._context["unitId"],
 e.UniverInstanceType["UNIVER_SHEET"],
 );
 if (!_0xa3ff5e) return;
 let _0x43f318 = _0xa3ff5e.getSheets();
 if (_0x4d34c4.length === 0) {
 _0x43f318.forEach((_0x38f12a) => {
 _0x38f12a.isSheetHidden() &&
 this._setWorksheetVisibility(
 _0x38f12a.getSheetId(),
 e.BooleanNumber["FALSE"],
 );
 });
 return;
 }
 _0x43f318.forEach((_0x229e0f) => {
 let _0x2427a4 = _0x229e0f.getSheetId(),
 _0x53532d = _0x4d34c4.includes(_0x2427a4),
 _0x24b218 = _0x229e0f.isSheetHidden();
 _0x53532d && _0x24b218
 ? this._setWorksheetVisibility(_0x2427a4, e.BooleanNumber["FALSE"])
 : !_0x53532d &&
 !_0x24b218 &&
 this._setWorksheetVisibility(_0x2427a4, e.BooleanNumber["TRUE"]);
 });
 }
 _setWorksheetVisibility(_0x18e3ff, _0x13d0e1) {
 this._commandService["syncExecuteCommand"](
 t.SetWorksheetHideMutation["id"],
 {
 unitId: this._context["unitId"],
 subUnitId: _0x18e3ff,
 hidden: _0x13d0e1,
 },
 );
 }
 _getLabelHorizontalPosition() {
 return this._localeService["getDirection"]() === "rtl" ? "left" : "right";
 }
 _updateDiffMarks(_0x558c5c, _0x215925, _0xdbc704, _0x33758b) {
 this._diffs["forEach"]((_0x249c6f) => {
 _0x249c6f.makeDirty();
 });
 let _0x3a10d9 = this._generateDiffMarks(_0x215925, _0xdbc704, _0x33758b);
 ((this._diffs = new Set(
 _0x3a10d9.filter(
 (_0x3b01f0) => _0x3b01f0 instanceof z.SheetCollabCursorShape,
 ),
 )),
 (this._borderDiffs = new Set(
 _0x3a10d9.filter((_0x3ca2b9) => _0x3ca2b9 instanceof y.Rect),
 )),
 (this._arrowDiffs = new Set(
 _0x3a10d9.filter((_0x144933) => _0x144933 instanceof Fe),
 )),
 _0x3a10d9.length > 0 &&
 this._scrollToShape(_0x3a10d9[0], this._context["scene"]));
 }
 _generateDiffMarks(_0x444f4b, _0x1612b5, _0x22d366) {
 let _0xf374ab = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
 if (!_0xf374ab) return [];
 let { scene: _0x5d0561 } = this._context,
 _0x32b3ba = [],
 _0x59be58 = (_0x2d120c) => {
 if (!_0x2d120c) return new Map();
 let _0x441684 = new Map();
 return (
 _0x2d120c.forEach((_0x578604, _0x55af0b) => {
 let _0x583d1d = _0x578604.filter(
 (_0x5591d9) => _0x5591d9.subUnitId === _0x1612b5,
 );
 _0x583d1d.length > 0 && _0x441684.set(_0x55af0b, _0x583d1d);
 }),
 _0x441684
 );
 };
 return (
 this._renderCellRanges(
 _0x5d0561,
 _0xf374ab,
 _0x59be58(_0x444f4b.insertCellRanges),
 _0x22d366.insert["fill"],
 _0x32b3ba,
 ),
 this._renderCellRanges(
 _0x5d0561,
 _0xf374ab,
 _0x59be58(_0x444f4b.deleteCellRanges),
 _0x22d366.delete["fill"],
 _0x32b3ba,
 ),
 this._renderCellRanges(
 _0x5d0561,
 _0xf374ab,
 _0x59be58(_0x444f4b.updateCellRanges),
 _0x22d366.update["fill"],
 _0x32b3ba,
 ),
 this._renderBorderRanges(
 _0x5d0561,
 _0xf374ab,
 _0x59be58(_0x444f4b.insertBorderRanges),
 _0x22d366.insert["stroke"],
 _0x32b3ba,
 ),
 this._renderBorderRanges(
 _0x5d0561,
 _0xf374ab,
 _0x59be58(_0x444f4b.deleteBorderRanges),
 _0x22d366.delete["stroke"],
 _0x32b3ba,
 ),
 this._renderBorderRanges(
 _0x5d0561,
 _0xf374ab,
 _0x59be58(_0x444f4b.updateBorderRanges),
 _0x22d366.update["stroke"],
 _0x32b3ba,
 ),
 this._renderArrowRanges(
 _0x5d0561,
 _0xf374ab,
 _0x59be58(_0x444f4b.arrowRowRanges),
 _0x22d366.update["fill"],
 "vertical",
 _0x32b3ba,
 ),
 this._renderArrowRanges(
 _0x5d0561,
 _0xf374ab,
 _0x59be58(_0x444f4b.arrowColumnRanges),
 _0x22d366.update["fill"],
 "horizontal",
 _0x32b3ba,
 ),
 _0x444f4b.insertDrawings &&
 this._renderDrawingHighlights(
 _0x5d0561,
 _0x444f4b.insertDrawings,
 _0x22d366.insert["stroke"],
 _0x32b3ba,
 ),
 _0x444f4b.deleteDrawings &&
 this._renderDrawingHighlights(
 _0x5d0561,
 _0x444f4b.deleteDrawings,
 _0x22d366.delete["stroke"],
 _0x32b3ba,
 ),
 _0x444f4b.updateDrawings &&
 this._renderDrawingHighlights(
 _0x5d0561,
 _0x444f4b.updateDrawings,
 _0x22d366.update["stroke"],
 _0x32b3ba,
 ),
 this._handleOverlappingShapes(_0x32b3ba),
 _0x5d0561.addObjects(_0x32b3ba, 20),
 _0x32b3ba
 );
 }
 hideDiffMarks() {
 (this._diffs["forEach"]((_0x5e7095) => {
 _0x5e7095.hide();
 }),
 this._borderDiffs["forEach"]((_0xabaac7) => {
 _0xabaac7.hide();
 }),
 this._arrowDiffs["forEach"]((_0x18c35b) => {
 _0x18c35b.hide();
 }));
 }
 showDiffMarks() {
 (this._diffs["forEach"]((_0x300844) => {
 _0x300844.show();
 }),
 this._borderDiffs["forEach"]((_0x3c287f) => {
 _0x3c287f.show();
 }),
 this._arrowDiffs["forEach"]((_0x11dde4) => {
 _0x11dde4.show();
 }));
 }
 removeDiffMarks() {
 this._removeDiffMarks();
 }
 scrollToShape(_0x180c87, _0x1600b7) {
 this._scrollToShape(_0x180c87, _0x1600b7);
 }
 _renderCellRanges(_0x4595a9, _0x5535e6, _0x44d3a0, _0xa51b86, _0x37c1e0) {
 _0x44d3a0.forEach((_0x381f4e, _0x1c2a35) => {
 _0x381f4e.forEach((_0x32af13) => {
 var _0x468da4;
 let {
 range: _0x11688b,
 subUnitId: _0x37e814,
 unitId: _0x326a9f,
 showText: _0x1f8844 = "",
 highlightColumn: _0x12e330,
 highlightRow: _0x74e79c,
 } = _0x32af13,
 {
 startColumn: _0xc87f7b,
 startRow: _0x5deae5,
 endColumn: _0x336b15,
 endRow: _0x5b6399,
 } = _0x11688b,
 _0x5019d5 = (0, M.getCoordByCell)(
 _0x5deae5,
 _0xc87f7b,
 _0x4595a9,
 _0x5535e6,
 ),
 _0x243448 = (0, M.getCoordByCell)(
 _0x5b6399,
 _0x336b15,
 _0x4595a9,
 _0x5535e6,
 ),
 { columnHeaderHeightAndMarginTop: _0x3aff74 } = _0x5535e6,
 { startX: _0x3af6b6, startY: _0x174d11 } = _0x5019d5,
 { endX: _0x1c0d1a, endY: _0x18cb2c } = _0x243448,
 _0x1a7ce9 = _0x5535e6.rowHeaderWidth,
 _0xb425e8 = _0x5535e6.columnHeaderHeight;
 (_0x74e79c && (_0x3af6b6 -= _0x1a7ce9),
 _0x12e330 && (_0x174d11 -= _0xb425e8));
 let _0x20531b = _0x1c0d1a - _0x3af6b6,
 _0x3fc31f = _0x18cb2c - _0x174d11,
 _0x275cc8 = {
 labelPosition: _0x174d11 - _0x3aff74 >= 20 ? "top" : "bottom",
 sheetID: _0x37e814,
 range: _0x11688b,
 color: _0xa51b86,
 fillAfterStrokeEnabled: true,
 backgroundColor: _0xa51b86,
 name:
 ((_0x468da4 =
 this._historyManagerService["getMember"](_0x1c2a35)) == null
 ? undefined
 : _0x468da4.name) +
 "\x20" +
 _0x1f8844 || _0x1f8844,
 labelHorizontalPosition: this._getLabelHorizontalPosition(),
 selection:
 _0x326a9f +
 "-" +
 _0x37e814 +
 "-" +
 _0x11688b.startColumn +
 "-" +
 _0x11688b.startRow +
 "-" +
 _0x11688b.endColumn +
 "-" +
 _0x11688b.endRow,
 left: _0x3af6b6,
 top: _0x174d11,
 width: _0x20531b,
 height: _0x3fc31f,
 evented: false,
 zIndex: 1000,
 highlight: true,
 };
 _0x37c1e0.push(new z["SheetCollabCursorShape"]("", _0x275cc8));
 });
 });
 }
 _renderBorderRanges(_0x22300f, _0x1ab98d, _0x1b8170, _0x4ea6cf, _0x2b343f) {
 _0x1b8170.forEach((_0x4c297b, _0x265c40) => {
 _0x4c297b.forEach((_0x758c82) => {
 var _0x43da2b;
 let {
 range: _0x8670ae,
 subUnitId: _0x5b0954,
 unitId: _0xd75844,
 showText: _0x173888 = "",
 } = _0x758c82,
 {
 startColumn: _0x5dfd2f,
 startRow: _0x2052fa,
 endColumn: _0x54c8b6,
 endRow: _0x101fbb,
 } = _0x8670ae,
 _0x59a0f9 = (0, M.getCoordByCell)(
 _0x2052fa,
 _0x5dfd2f,
 _0x22300f,
 _0x1ab98d,
 ),
 _0x2aa7b4 = (0, M.getCoordByCell)(
 _0x101fbb,
 _0x54c8b6,
 _0x22300f,
 _0x1ab98d,
 ),
 { columnHeaderHeightAndMarginTop: _0x176a87 } = _0x1ab98d,
 { startX: _0x174ca0, startY: _0x56825 } = _0x59a0f9,
 { endX: _0x1be3fe, endY: _0x5bd842 } = _0x2aa7b4,
 _0x5a6a67 = _0x1be3fe - _0x174ca0,
 _0x4ca30b = _0x5bd842 - _0x56825,
 _0x51b621 = {
 labelPosition: _0x56825 - _0x176a87 >= 20 ? "top" : "bottom",
 sheetID: _0x5b0954,
 range: _0x8670ae,
 color: _0x4ea6cf,
 fillAfterStrokeEnabled: false,
 backgroundColor: "transparent",
 name:
 ((_0x43da2b =
 this._historyManagerService["getMember"](_0x265c40)) == null
 ? undefined
 : _0x43da2b.name) +
 "\x20" +
 _0x173888 || _0x173888,
 labelHorizontalPosition: this._getLabelHorizontalPosition(),
 selection:
 _0xd75844 +
 "-" +
 _0x5b0954 +
 "-" +
 _0x8670ae.startColumn +
 "-" +
 _0x8670ae.startRow +
 "-" +
 _0x8670ae.endColumn +
 "-" +
 _0x8670ae.endRow,
 left: _0x174ca0 - 12 / 2,
 top: _0x56825 - 12 / 2,
 width: _0x5a6a67,
 height: _0x4ca30b,
 evented: false,
 zIndex: 1000,
 strokeWidth: 12,
 highlight: true,
 };
 _0x2b343f.push(new z.SheetCollabCursorShape("", _0x51b621));
 });
 });
 }
 _renderArrowRanges(
 _0x1aa79c,
 _0x25370c,
 _0x459433,
 _0x2eb092,
 _0x5e68fb,
 _0x573997,
 ) {
 let _0x313327 = _0x25370c.rowHeaderWidth,
 _0x33499b = _0x25370c.columnHeaderHeight;
 _0x459433.forEach((_0x5e4a60) => {
 _0x5e4a60.forEach((_0x41b833) => {
 let { range: _0x2a437b } = _0x41b833,
 {
 startColumn: _0x1c8565,
 startRow: _0x40ccb3,
 endColumn: _0x1534bb,
 endRow: _0x3d3331,
 } = _0x2a437b,
 _0x45a9fd = (0, M.getCoordByCell)(
 _0x40ccb3,
 _0x1c8565,
 _0x1aa79c,
 _0x25370c,
 ),
 _0xff3adc = (0, M.getCoordByCell)(
 _0x3d3331,
 _0x1534bb,
 _0x1aa79c,
 _0x25370c,
 ),
 { startX: _0x276972, startY: _0xb9c3b } = _0x45a9fd,
 { endX: _0x298d07, endY: _0x3acba1 } = _0xff3adc,
 _0xfbeff5;
 if (_0x5e68fb === "horizontal")
 ((_0xfbeff5 = new Fe("", {
 color: _0x2eb092,
 direction: "horizontal",
 left: _0x276972,
 top: 2,
 width: _0x298d07 - _0x276972,
 height: _0x33499b - 4,
 evented: false,
 zIndex: 1001,
 highlight: true,
 highlightSecond: 4,
 })),
 _0x573997.push(_0xfbeff5));
 else {
 let _0x41b968 = _0x3acba1 - _0xb9c3b;
 ((_0xfbeff5 = new Fe("", {
 color: _0x2eb092,
 direction: "vertical",
 left: 2,
 top: _0xb9c3b,
 width: _0x313327 - 4,
 height: _0x41b968,
 evented: false,
 zIndex: 1001,
 highlight: true,
 highlightSecond: 4,
 })),
 _0x573997.push(_0xfbeff5));
 }
 });
 });
 }
 _renderDrawingHighlights(_0x5984db, _0x34f2f1, _0x1d1974, _0x15ea29) {
 let _0x1edf3d = this._sheetSkeletonManagerService["getCurrentSkeleton"]();
 if (!_0x1edf3d) return;
 let { columnHeaderHeightAndMarginTop: _0x1ac3af } = _0x1edf3d;
 _0x34f2f1.forEach((_0x106803, _0x2408b2) => {
 _0x106803.forEach((_0x51f099) => {
 let _0x22b99c = this._createDrawingHighlight(
 _0x51f099,
 _0x2408b2,
 _0x1d1974,
 _0x1ac3af,
 12,
 _0x15ea29,
 );
 _0x22b99c && _0x15ea29.push(_0x22b99c);
 });
 });
 }
 _createDrawingHighlight(
 _0x53f36b,
 _0x4dc242,
 _0x120474,
 _0x131804,
 _0xb85d36,
 _0x16c2aa,
 ) {
 var _0x58d47f;
 let {
 drawingId: _0x1bcc5e,
 unitId: _0x143eb7,
 subUnitId: _0x17c6f3,
 showText: _0x5616ee = "",
 } = _0x53f36b,
 _0xd85655 = this._drawingManagerService["getDrawingByParam"]({
 unitId: _0x143eb7,
 subUnitId: _0x17c6f3,
 drawingId: _0x1bcc5e,
 });
 if (!(_0xd85655 != null && _0xd85655.transform)) return null;
 let {
 left: _0x5215ba = 0,
 top: _0x3605ff = 0,
 width: _0xc675a,
 height: _0x464335,
 } = _0xd85655.transform,
 _0x5a061b = new z["SheetCollabCursorShape"]("", {
 labelPosition: _0x3605ff - _0x131804 >= 20 ? "top" : "bottom",
 sheetID: _0x17c6f3,
 range: { startRow: 0, startColumn: 0, endRow: 0, endColumn: 0 },
 color: _0x120474,
 fillAfterStrokeEnabled: false,
 backgroundColor: "transparent",
 name:
 ((_0x58d47f = this._historyManagerService["getMember"](_0x4dc242)) ==
 null
 ? undefined
 : _0x58d47f.name) +
 "\x20" +
 _0x5616ee || _0x5616ee,
 labelHorizontalPosition: this._getLabelHorizontalPosition(),
 selection: _0x143eb7 + "-" + _0x17c6f3 + "-drawing-" + _0x1bcc5e,
 left: _0x5215ba - _0xb85d36 / 2,
 top: _0x3605ff - _0xb85d36 / 2,
 width: _0xc675a,
 height: _0x464335,
 evented: true,
 zIndex: 1000,
 strokeWidth: _0xb85d36,
 highlight: true,
 });
 return (this._bindDrawingHighlightHover(_0x5a061b, _0x16c2aa), _0x5a061b);
 }
 _bindDrawingHighlightHover(_0x8fbe50, _0x1848bd) {
 (_0x8fbe50.onPointerEnter$["subscribeEvent"](() =>
 this._setOverlappingShapesHovered(_0x8fbe50, _0x1848bd, true),
 ),
 _0x8fbe50.onPointerLeave$["subscribeEvent"](() =>
 this._setOverlappingShapesHovered(_0x8fbe50, _0x1848bd, false),
 ));
 }
 _setOverlappingShapesHovered(_0x29e307, _0x4b6932, _0x18b236) {
 this._findOverlappingShapes(_0x29e307, _0x4b6932).forEach((_0x499193) => {
 _0x499193 instanceof z.SheetCollabCursorShape &&
 _0x499193.setShapeProps({ hovered: _0x18b236 });
 });
 }
 _removeDiffMarks() {
 (this._diffs["forEach"]((_0x13bb69) => _0x13bb69.dispose()),
 this._borderDiffs["forEach"]((_0x3e917a) => _0x3e917a.dispose()),
 this._arrowDiffs["forEach"]((_0x2290a1) => _0x2290a1.dispose()),
 this._diffs["clear"](),
 this._borderDiffs["clear"](),
 this._arrowDiffs["clear"]());
 }
 _handleOverlappingShapes(_0x5c203f) {
 let _0x2b88c7 = _0x5c203f.filter(
 (_0x273128) => _0x273128 instanceof z.SheetCollabCursorShape,
 );
 if (_0x2b88c7.length === 0) return;
 let _0x57fc97 = [],
 _0x606ff1 = new Set();
 (_0x2b88c7.forEach((_0x3b9515) => {
 if (_0x606ff1.has(_0x3b9515)) return;
 let _0x469236 = _0x3b9515.left || 0,
 _0x3ea5d0 = _0x3b9515.top || 0,
 _0x587229 = _0x469236 + (_0x3b9515.width || 0),
 _0x9a9e88 = _0x3ea5d0,
 _0x4637d1 = [_0x3b9515];
 (_0x606ff1.add(_0x3b9515),
 _0x2b88c7.forEach((_0xa4dd1e) => {
 if (_0x606ff1.has(_0xa4dd1e)) return;
 let _0x1a27c4 = _0xa4dd1e.left || 0,
 _0x1d429a = _0xa4dd1e.top || 0,
 _0x224507 = _0x1a27c4 + (_0xa4dd1e.width || 0),
 _0x220ccf = _0x1d429a;
 Math.abs(_0x587229 - _0x224507) <= 10 &&
 Math.abs(_0x9a9e88 - _0x220ccf) <= 10 &&
 (_0x4637d1.push(_0xa4dd1e), _0x606ff1.add(_0xa4dd1e));
 }),
 _0x4637d1.length > 1 && _0x57fc97.push(_0x4637d1));
 }),
 _0x57fc97.forEach((_0x480508) => {
 (_0x480508.sort(
 (_0x4e3b16, _0x653ba8) => (_0x4e3b16.top || 0) - (_0x653ba8.top || 0),
 ),
 _0x480508.forEach((_0x546e7a, _0x10c3cf) => {
 let _0x3627d8 = _0x10c3cf * 22;
 _0x546e7a.setOffsetY(_0x3627d8);
 }));
 }));
 }
 _findOverlappingShapes(_0x1d14f2, _0x4e6af9) {
 let _0x3170fa = _0x1d14f2.left || 0,
 _0x32c684 = _0x1d14f2.top || 0,
 _0x64ffdd = _0x1d14f2.width || 0,
 _0xac772d = _0x1d14f2.height || 0,
 _0x59d112 = _0x3170fa + _0x64ffdd,
 _0x5a6ba0 = _0x32c684 + _0xac772d;
 return _0x4e6af9.filter((_0x34a6ff) => {
 let _0x5c4a4d = _0x34a6ff.left || 0,
 _0x15c1a3 = _0x34a6ff.top || 0,
 _0x41f09d = _0x34a6ff.width || 0,
 _0x5cccde = _0x34a6ff.height || 0,
 _0x39b87c = _0x5c4a4d + _0x41f09d,
 _0x347c90 = _0x15c1a3 + _0x5cccde;
 return !(
 _0x59d112 <= _0x5c4a4d ||
 _0x3170fa >= _0x39b87c ||
 _0x5a6ba0 <= _0x15c1a3 ||
 _0x32c684 >= _0x347c90
 );
 });
 }
 _scrollToShape(_0x4a7f9a, _0x2ea7ba) {
 let _0x3702fa = _0x2ea7ba.getViewport(y.SHEET_VIEWPORT_KEY["VIEW_MAIN"]);
 if (!_0x3702fa) return;
 let _0x2a76dc = _0x4a7f9a.left || 0,
 _0x520e5b = _0x4a7f9a.top || 0,
 _0x12a041 = _0x4a7f9a.width || 0,
 _0x385fcf = _0x4a7f9a.height || 0,
 _0x40036f = _0x3702fa.width || 0,
 _0x4e5c3b = _0x3702fa.height || 0,
 _0x23a819 = _0x3702fa.viewportScrollX || 0,
 _0x14bda3 = _0x3702fa.viewportScrollY || 0,
 _0x3ae5e1 = _0x23a819,
 _0x181778 = _0x14bda3,
 _0x422b92 = _0x23a819 + _0x40036f,
 _0x59192e = _0x14bda3 + _0x4e5c3b;
 if (
 _0x2a76dc >= _0x3ae5e1 &&
 _0x520e5b >= _0x181778 &&
 _0x2a76dc + _0x12a041 <= _0x422b92 &&
 _0x520e5b + _0x385fcf <= _0x59192e
 )
 return;
 let _0x1d0125 = Math.max(0, _0x2a76dc - _0x40036f / 2 + _0x12a041 / 2),
 _0x41bbcb = Math.max(0, _0x520e5b - _0x4e5c3b / 2 + _0x385fcf / 2);
 _0x3702fa.scrollToViewportPos({
 viewportScrollX: _0x1d0125,
 viewportScrollY: _0x41bbcb,
 });
 }
 _getSheetObject() {
 return (0, M.getSheetObject)(
 this._univerInstanceService,
 this._renderManagerService,
 );
 }
 dispose() {
 var _0x378aa9;
 ((_0x378aa9 = this._pointerMoveSubscription) == null ||
 _0x378aa9.unsubscribe(),
 (this._pointerMoveSubscription = null),
 this._removeDiffMarks(),
 super.dispose());
 }
};
Ie = W(
 [
 U(1, (0, e.Inject)(q)),
 U(2, (0, e.Inject)(J)),
 U(3, e.IUniverInstanceService),
 U(4, y.IRenderManagerService),
 U(5, (0, e.Inject)(M.SheetSkeletonManagerService)),
 U(6, e.ICommandService),
 U(7, _.IDrawingManagerService),
 U(8, (0, e.Inject)(e.LocaleService)),
 U(9, (0, e.Inject)(Pe)),
 ],
 Ie,
);
let Le = class extends e.Disposable {
 constructor(_0x251152, _0x13c621, _0x245318, _0x726ebe) {
 (super(),
 (this._sidebarService = _0x251152),
 (this._localeService = _0x13c621),
 (this._historyManagerService = _0x245318),
 (this._configService = _0x726ebe),
 H(this, "_sidebarDisposable", null),
 this._init());
 }
 _init() {
 this._initPanel();
 }
 _openPanel() {
 var _0x33fc75;
 if (this._sidebarDisposable) return;
 let _0x158446 =
 (_0x33fc75 = this._configService["getConfig"](
 "sheets-history-ui.config",
 )) == null
 ? undefined
 : _0x33fc75.historyPanelComponentKey,
 _0x41d072 = {
 header: {
 title: this._localeService["t"](
 "sheets-history-ui.viewer.panel.title",
 ),
 },
 children: { label: _0x158446 },
 onClose: () => {
 ((this._sidebarDisposable = null),
 this._historyManagerService["exitHistoryMode"]());
 },
 };
 this._sidebarDisposable = this._sidebarService["open"]({ ..._0x41d072 });
 }
 _initPanel() {
 this.disposeWithMe(
 this._historyManagerService["openPanel$"].subscribe((_0x4a1c4f) => {
 _0x4a1c4f && this._openPanel();
 }),
 );
 }
};
Le = W(
 [
 U(0, N.ISidebarService),
 U(1, (0, e.Inject)(e.LocaleService)),
 U(2, (0, e.Inject)(q)),
 U(3, e.IConfigService),
 ],
 Le,
);
var Re = class extends e.Disposable {
 constructor() {
 (super(), H(this, "_dialogOptions$", new P["Subject"]()));
 }
 open() {
 return (0, e.toDisposable)(() => {});
 }
 close() {}
 closeAll(_0x922e21) {}
 getDialogs$() {
 return this._dialogOptions$["asObservable"]();
 }
};
let ze = class extends e.Plug in {
 constructor(_0x146fd8 = V, _0x2f5f7c, _0x172de7, _0x5832e9) {
 (super(),
 (this._config = _0x146fd8),
 (this._injector = _0x2f5f7c),
 (this._renderManagerService = _0x172de7),
 (this._configService = _0x5832e9));
 let { ..._0x65dcf1 } = (0, e.merge)({}, V, this._config);
 this._configService["setConfig"](B, _0x65dcf1);
 }
 onStarting() {
 ([
 [Y],
 [q],
 [Me],
 [J],
 [Pe],
 [G],
 [Le],
 [X],
 [n.ISnapshotServerService, { useClass: r.SnapshotServerOverHTTPService }],
 [N.IDialogService, { useClass: Re }],
 [e.IImageIoService, { useClass: r.CollaborationImageIoService }],
 ].forEach((_0x21c754) => this._injector["add"](_0x21c754)),
 this._injector["get"](Me),
 this._injector["get"](Y));
 }
 onRendered() {
 ([[Ie]].forEach((_0x325085) => {
 this.disposeWithMe(
 this._renderManagerService["registerRenderModule"](
 e.UniverInstanceType["UNIVER_SHEET"],
 _0x325085,
 ),
 );
 }),
 this._injector["get"](X),
 this._injector["get"](Le));
 }
 onSteady() {
 this._injector["get"](J);
 }
};
(H(ze, "pluginName", "UNIVER_SHEETS_HISTORY_VIEWER_PLUGIN"),
 H(ze, "packageName", se),
 H(ze, "version", ce),
 (ze = W(
 [
 (0, e.DependentOn)(
 a.UniverLicensePlugin,
 _.UniverDrawingPlugin,
 y.UniverRenderEnginePlugin,
 b.UniverNetworkPlugin,
 O.UniverSheetsFilterPlugin,
 j.UniverSheetsTablePlugin,
 t.UniverSheetsPlugin,
 n.UniverCollaborationPlugin,
 S.UniverSheetsConditionalFormattingPlugin,
 o.UniverSheetsChartPlugin,
 c.UniverSheetsPivotTablePlugin,
 d.UniverSheetSparklinePlugin,
 M.UniverSheetsUIPlugin,
 w.UniverSheetsDataValidationPlugin,
 ),
 U(1, (0, e.Inject)(e.Injector)),
 U(2, y.IRenderManagerService),
 U(3, e.IConfigService),
 ],
 ze,
 )));
function Be(_0x13b6b2) {
 let _0x35d614 = _0x13b6b2.getCurrentLocale();
 return {
 locale: _0x35d614,
 locales: { [_0x35d614]: _0x13b6b2.getLocales() },
 direction: _0x13b6b2.getDirection(),
 };
}
function Ve(_0x2f792d, _0x30eaba) {
 let _0x1ad0b6 = _0x30eaba.getDirection();
 ((_0x2f792d.dir = _0x1ad0b6), (_0x2f792d.style["direction"] = _0x1ad0b6));
}
function He(_0x27f086) {
 return Ue(_0x27f086)
 ? typeof _0x27f086.hasMore == "boolean" &&
 typeof _0x27f086.lastLabel == "string" &&
 Array.isArray(_0x27f086.versions) &&
 Ue(_0x27f086.members)
 : false;
}
function Ue(_0x2b1871) {
 return typeof _0x2b1871 == "object" && !!_0x2b1871;
}
const We = "univer-history-container";
let Z = class extends e.Disposable {
 constructor(
 _0x253f5d,
 _0x400a42,
 _0x50c642,
 _0x11c852,
 _0x151c4a,
 _0x14d1cb,
 _0x48749f,
 _0x2891ee,
 _0x71908,
 _0x233e74,
 ) {
 (super(),
 (this._localeService = _0x253f5d),
 (this._univerInstanceService = _0x400a42),
 (this._configService = _0x50c642),
 (this._commandService = _0x11c852),
 (this._messageService = _0x151c4a),
 (this._permissionService = _0x14d1cb),
 (this._selectionProtectionRuleModel = _0x48749f),
 (this._dialogService = _0x2891ee),
 (this._sidebarService = _0x71908),
 (this._themeService = _0x233e74),
 H(this, "_historyUniver$", new P["BehaviorSubject"](null)),
 H(this, "historyUniver$", this._historyUniver$["asObservable"]()),
 H(this, "_disposableCollection", new e.DisposableCollection()),
 H(this, "_pluginMap", new Map()),
 H(this, "_internalWebWorker", null),
 this._init());
 }
 get historyUniver() {
 return this._historyUniver$["value"];
 }
 _init() {
 (this._initContainer(), this._initPlugins());
 }
 _initContainer() {
 var _0x19bbc4;
 let _0x1f2d9d = this._configService["getConfig"](B),
 _0x5656db =
 (_0x19bbc4 = this._configService["getConfig"](
 N.UI_PLUGIN_CONFIG_KEY,
 )) == null
 ? undefined
 : _0x19bbc4.container,
 _0x3b994e =
 (_0x1f2d9d == null ? undefined : _0x1f2d9d.univerContainerId) ??
 _0x5656db,
 _0x5a3079 =
 typeof _0x3b994e == "string"
 ? document.getElementById(_0x3b994e)
 : _0x3b994e;
 if (!_0x5a3079)
 throw Error(
 "[HistoryLoaderService]: Configure a valid Univer container before opening history.",
 );
 let _0x49ad90 = document.createElement("div");
 ((_0x49ad90.id = We),
 (_0x49ad90.style["position"] = "absolute"),
 (_0x49ad90.style["top"] = "0"),
 (_0x49ad90.style["left"] = "0"),
 (_0x49ad90.style["width"] = "100%"),
 (_0x49ad90.style["height"] = "100%"),
 (_0x49ad90.style["zIndex"] = "49"),
 (_0x49ad90.style["display"] = "none"),
 Ve(_0x49ad90, this._localeService),
 _0x5a3079.appendChild(_0x49ad90));
 }
 _initPlugins() {
 [
 [y.UniverRenderEnginePlugin],
 [
 N.UniverUIPlugin,
 {
 container: We,
 header: true,
 toolbar: false,
 footer: true,
 contextMenu: false,
 override: [[N.IDialogService, null]],
 },
 ],
 [b.UniverNetworkPlugin],
 [_.UniverDrawingPlugin, { override: [[e.IImageIoService, null]] }],
 [h.UniverDocsPlugin, { hasScroll: false }],
 [g.UniverDocsUIPlugin],
 [re.UniverSheetsNumfmtPlugin],
 [t.UniverSheetsPlugin, { notExecuteFormula: true }],
 [M.UniverSheetsUIPlugin],
 [A.UniverSheetsFormulaPlugin],
 [ee.UniverSheetsFormulaUIPlugin],
 [n.UniverCollaborationPlugin],
 [O.UniverSheetsFilterPlugin],
 [k.UniverSheetsFilterUIPlugin],
 [S.UniverSheetsConditionalFormattingPlugin],
 [C.UniverSheetsConditionalFormattingUIPlugin],
 [te.UniverSheetsHyperLinkPlugin],
 [ne.UniverSheetsHyperLinkUIPlugin],
 [p.UniverDataValidationPlugin],
 [w.UniverSheetsDataValidationPlugin],
 [T.UniverSheetsDataValidationUIPlugin],
 [i.UniverProFormulaEnginePlugin, { notExecuteFormula: true }],
 [v.UniverDrawingUIPlugin],
 [E.UniverSheetsDrawingPlugin],
 [D.UniverSheetsDrawingUIPlugin],
 [d.UniverSheetSparklinePlugin],
 [f.UniverSheetSparklineUIPlugin],
 [o.UniverSheetsChartPlugin],
 [s.UniverSheetsChartUIPlugin],
 [l.UniverSheetsShapePlugin],
 [u.UniverSheetsShapeUIPlugin],
 [c.UniverSheetsPivotTablePlugin, { notExecuteFormula: true }],
 [j.UniverSheetsTablePlugin],
 ].forEach(([_0x47f835, _0x4d4521]) =>
 this.registerPlugin(_0x47f835, _0x4d4521),
 );
 }
 dispose() {
 (super.dispose(), this.unMountHistoryContent(), this._pluginMap["clear"]());
 }
 registerPlugin(_0x4c1093, _0x19026a, _0x47bd6b) {
 if (this._pluginMap["has"](_0x4c1093.pluginName) && !_0x47bd6b)
 throw Error(
 "[HistoryLoaderService]: Plugin " +
 _0x4c1093.pluginName +
 " has been registered.",
 );
 this._pluginMap["set"](_0x4c1093.pluginName, [_0x4c1093, _0x19026a]);
 }
 getAllPlugins() {
 return Array.from(this._pluginMap["values"]());
 }
 mountHistoryContent(_0x7ed6a3, _0x15aa23) {
 let _0x5346ec = document.getElementById(We);
 _0x5346ec &&
 ((_0x5346ec.style["display"] = "block"),
 this._initUniver(_0x7ed6a3, We, _0x15aa23));
 }
 unMountHistoryContent() {
 var _0x36d722;
 (this._disposableCollection["dispose"](),
 (_0x36d722 = this.historyUniver) == null || _0x36d722.dispose(),
 this._historyUniver$["next"](null));
 let _0x2e3c8d = document.getElementById(We);
 _0x2e3c8d &&
 ((_0x2e3c8d.style["display"] = "none"),
 (this._internalWebWorker &&=
 (this._internalWebWorker["terminate"](), null)));
 }
 _initUniver(_0x45571d, _0x2aecb3, _0x23bf14) {
 var _0x23c864, _0x64dc29, _0x4b4391, _0x41a170;
 if (this.historyUniver) return;
 let _0x4df223 = new e["Univer"]({
 ...Be(this._localeService),
 override: [[e.IAuthzIoService, { useClass: r.AuthzIoHttpService }]],
 }),
 _0x148591 = _0x4df223.__getInjector();
 (this._syncViewerServices(_0x148591, _0x2aecb3),
 _0x148591
 .get(e.IConfigService)
 .setConfig(
 r.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY,
 this._configService["getConfig"](
 r.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY,
 ),
 ));
 let _0x47f925 = this._configService["getConfig"](a.LS_CONFIG_KEY);
 _0x47f925 &&
 _0x4df223.registerPlugin(a.UniverLicensePlugin, {
 license: _0x47f925.ls,
 });
 let _0xf93df9 =
 (_0x23c864 = this._configService["getConfig"](
 "sheets-history-ui.config",
 )) == null
 ? undefined
 : _0x23c864.workerURL;
 (_0xf93df9 &&
 ((this._internalWebWorker =
 _0xf93df9 instanceof Worker ? _0xf93df9 : null),
 _0x4df223.registerPlugin(x.UniverRPCMainThreadPlugin, {
 workerURL: _0xf93df9,
 })),
 this._pluginMap["forEach"](([_0x5e4488, _0x207004]) => {
 _0x4df223.registerPlugin(_0x5e4488, _0x207004);
 }),
 _0x4df223.registerPlugin(ze, {
 historyServerUrl: oe(this._configService["getConfig"](B)),
 historyPanelComponentKey:
 (_0x64dc29 = this._configService["getConfig"](
 "sheets-history-ui.config",
 )) == null
 ? undefined
 : _0x64dc29.historyPanelComponentKey,
 historyPanelHidden:
 (_0x4b4391 = this._configService["getConfig"](
 "sheets-history-ui.config",
 )) == null
 ? undefined
 : _0x4b4391.historyPanelHidden,
 historyAIassistantEnabled:
 (_0x41a170 = this._configService["getConfig"](
 "sheets-history-ui.config",
 )) == null
 ? undefined
 : _0x41a170.historyAIassistantEnabled,
 }),
 _0x148591.invoke((_0x551246) => {
 this._initListener(_0x551246, _0x45571d);
 }),
 this._historyUniver$["next"](_0x4df223));
 let _0x4c165b = _0x148591.get(q),
 _0x4cf815 = this._checkCanRevert(_0x45571d);
 He(_0x23bf14)
 ? _0x4c165b.triggerCustomVersions(_0x45571d, _0x4cf815, _0x23bf14)
 : _0x4c165b
 .triggerLoadVersions(_0x45571d, _0x4cf815)
 .catch(() => undefined);
 }
 _syncViewerServices(_0x14ea89, _0xfc950f) {
 let _0x4fb292 = _0x14ea89.get(e.ThemeService);
 (this._disposableCollection["add"](
 this._themeService["darkMode$"].subscribe((_0x3fd1d3) => {
 _0x4fb292.setDarkMode(_0x3fd1d3);
 }),
 ),
 this._disposableCollection["add"](
 this._themeService["currentTheme$"].subscribe((_0x299384) => {
 _0x4fb292.setTheme(_0x299384);
 }),
 ));
 let _0x6f738c = _0x14ea89.get(e.LocaleService);
 (this._disposableCollection["add"](
 this._localeService["currentLocale$"].subscribe((_0x110289) => {
 let _0x2c3039 = this._localeService["getLocales"]();
 (_0x2c3039 && _0x6f738c.load({ [_0x110289]: _0x2c3039 }),
 _0x6f738c.setLocale(_0x110289));
 }),
 ),
 this._disposableCollection["add"](
 this._localeService["direction$"].subscribe((_0x3140a4) => {
 _0x6f738c.setDirection(_0x3140a4);
 let _0x3d0cea = document.getElementById(_0xfc950f);
 _0x3d0cea &&
 ((_0x3d0cea.dir = _0x3140a4),
 (_0x3d0cea.style["direction"] = _0x3140a4));
 }),
 ));
 }
 _initListener(_0x587aed, _0x239638) {
 let _0x3d79f7 = _0x587aed.get(q);
 (this._disposableCollection["add"](
 _0x3d79f7.status$["subscribe"]((_0x9980fd) => {
 switch (_0x9980fd) {
 case "entered":
 (this._dialogService["closeAll"](),
 this._sidebarService["close"]());
 break;
 case "exited":
 (this._commandService["executeCommand"](Ke.id),
 this.unMountHistoryContent());
 break;
 case "error":
 (this.unMountHistoryContent(),
 this._messageService["show"]({
 content: this._localeService["t"](
 "sheets-history-ui.loader.panel.listFetchError",
 ),
 type: m.MessageType["Error"],
 duration: 3000,
 }));
 break;
 default:
 break;
 }
 }),
 ),
 this._disposableCollection["add"](
 _0x3d79f7.revertRevision$["subscribe"]((_0x4881a1) => {
 if (_0x4881a1) {
 let _0x187da6 = { unitId: _0x239638, revision: _0x4881a1 };
 this._commandService["executeCommand"](
 n.RevertRevisionMutation["id"],
 _0x187da6,
 ).catch(() => {
 _0x3d79f7.status = "error";
 });
 }
 }),
 ));
 }
 _checkCanRevert(_0x43fab4) {
 let _0x396586 = this._univerInstanceService["getUnit"](_0x43fab4);
 if (!_0x396586) return false;
 let _0x3080b4 = _0x396586
 .getSheets()
 .map((_0x4c7401) => _0x4c7401.getSheetId()),
 _0x14164b = new t["WorkbookEditablePermission"](_0x43fab4).id,
 _0x41f127 = _0x3080b4.map(
 (_0x39e870) =>
 new t["WorksheetEditPermission"](_0x43fab4, _0x39e870).id,
 ),
 _0x552f40 = _0x3080b4
 .map((_0x4dba71) =>
 this._selectionProtectionRuleModel["getSubunitRuleList"](
 _0x43fab4,
 _0x4dba71,
 ).map(
 (_0x542c8b) =>
 new t["RangeProtectionPermissionEditPoint"](
 _0x43fab4,
 _0x4dba71,
 _0x542c8b.permissionId,
 ).id,
 ),
 )
 .flat(),
 _0x16bd7b = new t["WorkbookRecoverHistoryPermission"](_0x43fab4).id;
 return this._permissionService["composePermission"]([
 _0x14164b,
 ..._0x41f127,
 ..._0x552f40,
 _0x16bd7b,
 ]).every((_0x546efe) => !!_0x546efe.value);
 }
};
Z = W(
 [
 U(0, (0, e.Inject)(e.LocaleService)),
 U(1, e.IUniverInstanceService),
 U(2, e.IConfigService),
 U(3, e.ICommandService),
 U(4, N.IMessageService),
 U(5, e.IPermissionService),
 U(6, (0, e.Inject)(t.RangeProtectionRuleModel)),
 U(7, (0, e.Inject)(N.IDialogService)),
 U(8, (0, e.Inject)(N.ISidebarService)),
 U(9, (0, e.Inject)(e.ThemeService)),
 ],
 Z,
);
const Ge = {
 id: "univer.operation.toggle-edit-history",
 type: e.CommandType["OPERATION"],
 handler: (_0x403294) => {
 let _0x2f58be = _0x403294.get(Z),
 { unitId: _0x323070 } =
 (0, t.getSheetCommandTarget)(
 _0x403294.get(e.IUniverInstanceService),
 ) || {};
 return _0x323070
 ? (_0x2f58be.mountHistoryContent(_0x323070), true)
 : false;
 },
 },
 Ke = {
 id: "univer.operation.exit-edit-history",
 type: e.CommandType["OPERATION"],
 handler: () => true,
 };
function qe(_0x5f5370) {
 return {
 id: Ge.id,
 type: N.MenuItemType["BUTTON"],
 icon: "HistoryIcon",
 title: "sheets-history-ui.loader.panel.title",
 tooltip: "sheets-history-ui.loader.panel.title",
 hidden$: (0, N.getMenuHiddenObservable)(
 _0x5f5370,
 e.UniverInstanceType["UNIVER_SHEET"],
 ),
 disabled$: (0, M.getCurrentRangeDisable$)(_0x5f5370, {
 workbookTypes: [t.WorkbookViewHistoryPermission],
 worksheetTypes: [],
 rangeTypes: [],
 }),
 };
}
const Je = {
 [N.RibbonStartGroup["OTHERS"]]: {
 [Ge.id]: {
 order: 100,
 gridLayout: {
 row: 1,
 column: 5,
 rowSpan: 2,
 columnSpan: 2,
 showLabel: true,
 },
 menuItemFactory: qe,
 },
 },
};
function Ye(_0x1224f2) {
 return !!(
 _0x1224f2 &&
 "unitId" in _0x1224f2 &&
 typeof _0x1224f2.unitId == "string" &&
 "revision" in _0x1224f2 &&
 typeof _0x1224f2.revision == "number"
 );
}
function Xe(_0x7a9a8e, _0xb3494d) {
 return (
 _0x7a9a8e.eventID === n.CollaborationEvent["CHANGESET_ACK"] &&
 (0, n.parseProtocolChangeset)(_0x7a9a8e.data).mutations["some"](
 (_0x2d32be) =>
 _0x2d32be.id === n.RevertRevisionMutation["id"] &&
 Ye(_0x2d32be.params) &&
 _0x2d32be.params["unitId"] === _0xb3494d.unitId &&
 _0x2d32be.params["revision"] === _0xb3494d.revision,
 )
 );
}
let Ze = class extends e.RxDisposable {
 constructor(
 _0x3e1a76,
 _0x31ae5c,
 _0x24b145,
 _0x50371a,
 _0x5f3e47,
 _0x44cb9c,
 _0x330b55,
 _0x5b1b3f,
 _0xea3a2f,
 _0x6859bd,
 ) {
 (super(),
 (this._commandService = _0x3e1a76),
 (this._menuManagerService = _0x31ae5c),
 (this._historyManagerService = _0x24b145),
 (this._localeService = _0x50371a),
 (this._messageService = _0x5f3e47),
 (this._collaborationController = _0x44cb9c),
 (this._localCacheService = _0x330b55),
 (this._dataLoaderService = _0x5b1b3f),
 (this._univerInstanceService = _0xea3a2f),
 (this._urlService = _0x6859bd),
 H(this, "_revertAcknowledgementSubscription", null),
 this.disposeWithMe(
 (0, e.toDisposable)(() => this._clearRevertAcknowledgement()),
 ),
 this._init());
 }
 _init() {
 ([Ge, Ke].forEach((_0x1f3bd7) =>
 this.disposeWithMe(
 (0, e.toDisposable)(this._commandService["registerCommand"](_0x1f3bd7)),
 ),
 ),
 this._menuManagerService["mergeMenu"](Je),
 this.disposeWithMe(
 this._commandService["onCommandExecuted"]((_0x47ea5f, _0x56a70a) => {
 if (
 _0x47ea5f.id === n.RevertRevisionMutation["id"] &&
 Ye(_0x47ea5f.params)
 ) {
 let { revision: _0x592239, unitId: _0x2b295f } = _0x47ea5f.params;
 this._messageService["show"]({
 content: this._localeService["t"](
 "sheets-history-ui.loader.panel.reverting",
 ),
 type: m.MessageType["Loading"],
 duration: 5000,
 });
 let _0xe7a3cd =
 this._collaborationController["getCollabEntity"](_0x2b295f);
 if (!_0xe7a3cd) {
 this._showRevertFailed();
 return;
 }
 _0x56a70a != null && _0x56a70a.fromCollab
 ? this._handleRevertAcknowledgement(
 _0xe7a3cd,
 { revision: _0x592239, unitId: _0x2b295f },
 async () => (
 setTimeout(() => window.location["reload"]()),
 true
 ),
 true,
 )
 : this._handleRevertAcknowledgement(
 _0xe7a3cd,
 { revision: _0x592239, unitId: _0x2b295f },
 async () => {
 let _0x23893d = this._univerInstanceService[
 "getCurrentUnitOfType"
 ](e.UniverInstanceType["UNIVER_SHEET"]),
 _0x68ce20 =
 _0x23893d == null
 ? undefined
 : _0x23893d.getActiveSheet();
 if (!_0x68ce20) return false;
 this._univerInstanceService["disposeUnit"](_0x2b295f);
 let _0x2764fe = await this._dataLoaderService["loadUnit"](
 _0x2b295f,
 e.UniverInstanceType["UNIVER_SHEET"],
 );
 return _0x2764fe && _0x2764fe instanceof e.Workbook
 ? (await this._setupSubUnitSync(
 _0x2764fe,
 _0x68ce20.getSheetId(),
 ),
 true)
 : false;
 },
 );
 }
 }),
 ));
 }
 _handleRevertAcknowledgement(
 _0x542666,
 _0x32e768,
 _0x5183cb,
 _0x31a384 = false,
 ) {
 this._clearRevertAcknowledgement();
 let _0x345201 = (0, P.combineLatest)([
 _0x542666.session["event$"],
 _0x542666.state$,
 ]).pipe(
 (0, P.filter)(
 ([_0x3666df, _0x32223c]) =>
 Xe(_0x3666df, _0x32e768) &&
 (_0x32223c == null ? undefined : _0x32223c.status) ===
 r.CollaborationStatus["SYNCED"],
 ),
 (0, P.take)(1),
 ),
 _0x1891e1 = _0x345201;
 (_0x31a384 && (_0x1891e1 = _0x345201.pipe((0, P.timeout)({ first: 5000 }))),
 (this._revertAcknowledgementSubscription = _0x1891e1
 .pipe(
 (0, P.switchMap)(async () => {
 let _0x2aeee7 = await _0x5183cb();
 return (
 _0x2aeee7 &&
 (this._historyManagerService["unMountHistoryContent"](),
 await this._localCacheService["exhaustSavingTask"]()),
 _0x2aeee7
 );
 }),
 (0, P.takeUntil)(this.dispose$),
 )
 .subscribe({
 next: (_0x5440a0) => {
 (this._clearRevertAcknowledgement(),
 _0x5440a0
 ? this._messageService["removeAll"]()
 : this._showRevertFailed());
 },
 error: () => {
 (this._clearRevertAcknowledgement(), this._showRevertFailed());
 },
 })));
 }
 _clearRevertAcknowledgement() {
 var _0x363d4d;
 ((_0x363d4d = this._revertAcknowledgementSubscription) == null ||
 _0x363d4d.unsubscribe(),
 (this._revertAcknowledgementSubscription = null));
 }
 _showRevertFailed() {
 this._messageService["show"]({
 content: this._localeService["t"](
 "sheets-history-ui.loader.panel.revertFailed",
 ),
 type: m.MessageType["Error"],
 duration: 3000,
 });
 }
 async _setupSubUnitSync(_0x5e8fdd, _0x365719) {
 (await this._updateSubUnitFromURLParams(_0x5e8fdd, _0x365719),
 _0x5e8fdd.activeSheet$["pipe"]((0, P.takeUntil)(this.dispose$)).subscribe(
 (_0x1d5e7c) => {
 _0x1d5e7c && this._updateURLWithCurrentState(_0x1d5e7c);
 },
 ),
 this._urlService["urlChange$"]
 .pipe((0, P.takeUntil)(this.dispose$))
 .subscribe(() =>
 this._updateSubUnitFromURLParams(_0x5e8fdd, _0x365719),
 ));
 }
 _updateURLWithCurrentState(_0x4e2154, _0x14b906 = false) {
 let _0xe60492 = this._urlService["getParam"]("subunit");
 _0x4e2154.getSheetId() !== _0xe60492 &&
 this._urlService["setParam"](
 "subunit",
 _0x4e2154.getSheetId(),
 _0x14b906,
 );
 }
 async _updateSubUnitFromURLParams(_0x155af2, _0x5ef291) {
 var _0x296c27;
 if (!_0x5ef291 || !_0x155af2.getSheetBySheetId(_0x5ef291)) {
 let _0x31ba2b = _0x155af2.getUnhiddenWorksheets()[0],
 _0x3e98b5 = _0x155af2.getSheetBySheetId(_0x31ba2b);
 if (!_0x3e98b5) return;
 (this._updateURLWithCurrentState(_0x3e98b5, true),
 await this._commandService["executeCommand"](
 t.SetWorksheetActivateCommand["id"],
 { unitId: _0x155af2.getUnitId(), subUnitId: _0x31ba2b },
 ));
 return;
 }
 ((_0x296c27 = _0x155af2.getActiveSheet()) == null
 ? undefined
 : _0x296c27.getSheetId()) !== _0x5ef291 &&
 (await this._commandService["executeCommand"](
 t.SetWorksheetActivateCommand["id"],
 { unitId: _0x155af2.getUnitId(), subUnitId: _0x5ef291 },
 ));
 }
};
Ze = W(
 [
 U(0, e.ICommandService),
 U(1, N.IMenuManagerService),
 U(2, (0, e.Inject)(Z)),
 U(3, (0, e.Inject)(e.LocaleService)),
 U(4, N.IMessageService),
 U(5, (0, e.Inject)(r.CollaborationController)),
 U(6, r.ILocalCacheService),
 U(7, (0, e.Inject)(r.DataLoaderService)),
 U(8, e.IUniverInstanceService),
 U(9, z.IURLService),
 ],
 Ze,
);
function Qe() {
 let _0x1fbc00 = (0, N.useDependency)(q),
 _0x30ae9a = (0, N.useDependency)(e.LocaleService),
 _0x4cc111 = (0, N.useObservable)(_0x1fbc00.currentVersion$),
 _0x3518b0 = (0, I.useMemo)(
 () => (_0x4cc111 ? _0x1fbc00.getSelectedVersionCanRevert() : false),
 [_0x1fbc00, _0x4cc111],
 ),
 _0x446418 = (0, I.useCallback)(() => {
 _0x1fbc00.exitHistoryMode();
 }, [_0x1fbc00]),
 _0x54e795 = (0, I.useCallback)(() => {
 _0x1fbc00.triggerRevert();
 }, [_0x1fbc00]);
 return (0, R.jsxs)("div", {
 className:
 "univer-flex univer-h-12 univer-items-center univer-border-b univer-border-gray-200 univer-bg-gray-0 univer-px-4 dark:!univer-border-gray-700 dark:!univer-bg-gray-950",
 children: [
 (0, R.jsx)(m.Button, {
 variant: "link",
 onClick: _0x446418,
 children: _0x30ae9a.t("sheets-history-ui.viewer.header.back"),
 }),
 _0x3518b0
 ? (0, R.jsx)(m.Button, {
 variant: "link",
 onClick: _0x54e795,
 children: _0x30ae9a.t("sheets-history-ui.viewer.header.revert"),
 })
 : (0, R.jsx)("div", { className: "univer-w-10" }),
 ],
 });
}
let $e = class extends e.Disposable {
 constructor(
 _0x589fe0,
 _0x243e3e,
 _0x3fcb51,
 _0x6d4830,
 _0x507e6c,
 _0x1d6932,
 _0x5d56b1,
 ) {
 (super(),
 (this._permissionService = _0x589fe0),
 (this._uiPartsService = _0x243e3e),
 (this._messageService = _0x3fcb51),
 (this._localeService = _0x6d4830),
 (this._historyManagerService = _0x507e6c),
 (this._injector = _0x1d6932),
 (this._configService = _0x5d56b1),
 this._init());
 }
 _init() {
 (this.disposeWithMe(
 this._historyManagerService["currentVersion$"].subscribe((_0xe86709) => {
 _0xe86709 && this._historyManagerService["triggerLoadSheet"](_0xe86709);
 }),
 ),
 this.disposeWithMe(
 this._permissionService["permissionPointUpdate$"].subscribe(
 (_0xd87e9f) => {
 let _0x15c4a6 = this._historyManagerService["unitId"];
 _0x15c4a6 &&
 (_0xd87e9f.subType === L.UnitAction["Edit"] &&
 _0xd87e9f.value === true &&
 this._permissionService["updatePermissionPoint"](
 new t["WorkbookEditablePermission"](_0x15c4a6).id,
 false,
 ),
 _0xd87e9f.subType === L.UnitAction["RenameSheet"] &&
 _0xd87e9f.value === true &&
 this._permissionService["updatePermissionPoint"](
 new t.WorkbookRenameSheetPermission(_0x15c4a6).id,
 false,
 ),
 _0xd87e9f.subType === L.UnitAction["MoveSheet"] &&
 _0xd87e9f.value === true &&
 this._permissionService["updatePermissionPoint"](
 new t["WorkbookMoveSheetPermission"](_0x15c4a6).id,
 false,
 ),
 _0xd87e9f.subType === L.UnitAction["HideSheet"] &&
 _0xd87e9f.value === true &&
 this._permissionService["updatePermissionPoint"](
 new t["WorkbookHideSheetPermission"](_0x15c4a6).id,
 false,
 ),
 _0xd87e9f.subType === L.UnitAction["Comment"] &&
 _0xd87e9f.value === true &&
 this._permissionService["updatePermissionPoint"](
 new t["WorkbookEditablePermission"](_0x15c4a6).id,
 false,
 ),
 _0xd87e9f.subType === L.UnitAction["FloatImg"] &&
 _0xd87e9f.value === true &&
 this._permissionService["updatePermissionPoint"](
 new t.WorkbookEditablePermission(_0x15c4a6).id,
 false,
 ));
 },
 ),
 ),
 this._registerHeader(),
 this._registerLoadingMask());
 let _0x5526c4 = null;
 (this.disposeWithMe(
 (0, e.toDisposable)(() =>
 _0x5526c4 == null ? undefined : _0x5526c4.dispose(),
 ),
 ),
 this.disposeWithMe(
 this._historyManagerService["loadingState$"].subscribe((_0x26b442) => {
 (_0x5526c4 == null || _0x5526c4.dispose(),
 (_0x5526c4 = null),
 _0x26b442 === "loading" &&
 (_0x5526c4 = this._messageService["show"]({
 type: m.MessageType["Info"],
 content: this._localeService["t"](
 "sheets-history-ui.viewer.info.loading",
 ),
 duration: 1000,
 })));
 }),
 ));
 }
 _registerHeader() {
 var _0x35e7fd;
 ((_0x35e7fd = this._configService["getConfig"](
 "sheets-history-ui.config",
 )) != null &&
 _0x35e7fd.historyPanelHidden) ||
 this.disposeWithMe(
 this._uiPartsService["registerComponent"](
 N.BuiltInUIPart["HEADER"],
 () => (0, N.connectInjector)(Qe, this._injector),
 ),
 );
 }
 _registerLoadingMask() {
 this.disposeWithMe(
 this._uiPartsService["registerComponent"](N.BuiltInUIPart["GLOBAL"], () =>
 (0, N.connectInjector)(Ae, this._injector),
 ),
 );
 }
};
$e = W(
 [
 U(0, e.IPermissionService),
 U(1, N.IUIPartsService),
 U(2, N.IMessageService),
 U(3, (0, e.Inject)(e.LocaleService)),
 U(4, (0, e.Inject)(q)),
 U(5, (0, e.Inject)(e.Injector)),
 U(6, e.IConfigService),
 ],
 $e,
);
function et(_0x30bd07) {
 var _0x388832;
 let { item: _0x1816ba, isNewest: _0x34f1f8 } = _0x30bd07,
 _0x8671aa = (0, N.useDependency)(q),
 _0x3abae2 = (0, N.useDependency)(J),
 _0x52fda4 = (0, N.useDependency)(e.LocaleService),
 _0x43fc9c =
 (0, N.useObservable)(_0x8671aa.currentVersion$, "", true) ===
 _0x1816ba.id,
 _0x4acba8 = K(_0x1816ba.time, _0x52fda4),
 _0x49a3ff = !_0x34f1f8 && _0x8671aa.canRevert,
 _0x33304e = (0, I.useCallback)(async () => {
 _0x8671aa.loadingState !== "loading" &&
 (_0x8671aa.selectVersion(_0x1816ba.id),
 await _0x3abae2.ensureVersion(_0x1816ba.id));
 }, [_0x8671aa, _0x3abae2, _0x1816ba.id]),
 _0x5b5e6f = (0, I.useCallback)(
 (_0x44f9d4) => {
 (_0x44f9d4.stopPropagation(), _0x8671aa.triggerRevert(_0x1816ba.id));
 },
 [_0x8671aa, _0x1816ba.id],
 ),
 _0x4efcbc =
 ((_0x388832 = _0x1816ba.users) == null
 ? undefined
 : _0x388832.filter(Boolean).join(",\x20")) ||
 _0x1816ba.user ||
 _0x52fda4.t("sheets-history-ui.viewer.panel.unknownUser");
 return (0, R.jsxs)("div", {
 className: (0, m.clsx)(
 "univer-flex univer-items-center univer-gap-3 univer-border-b univer-border-gray-100 univer-px-4 univer-py-3 dark:!univer-border-gray-800",
 _0x43fc9c && "univer-bg-blue-50\x20dark:!univer-bg-gray-900",
 ),
 onClick: _0x33304e,
 children: [
 (0, R.jsxs)("div", {
 className: "univer-min-w-0\x20univer-flex-1",
 children: [
 (0, R.jsxs)("div", {
 className:
 "univer-mb-0.5\x20univer-flex\x20univer-items-center\x20univer-gap-2",
 children: [
 (0, R.jsx)("span", {
 className:
 "univer-truncate univer-text-sm univer-font-medium univer-text-gray-800 dark:!univer-text-gray-200",
 children: _0x4efcbc,
 }),
 _0x34f1f8 &&
 (0, R.jsx)("span", {
 className:
 "univer-shrink-0 univer-rounded univer-border univer-border-primary-600 univer-bg-primary-50 univer-px-1.5 univer-py-0.5 univer-text-xs univer-text-primary-600 dark:!univer-bg-transparent",
 children: _0x52fda4.t(
 "sheets-history-ui.viewer.panel.currentVersion",
 ),
 }),
 ],
 }),
 (0, R.jsxs)("div", {
 className: "univer-flex univer-items-center univer-gap-2",
 children: [
 (0, R.jsx)("span", {
 className: "univer-text-xs univer-text-gray-400",
 children: _0x4acba8.time,
 }),
 (0, R.jsx)("span", {
 className:
 "univer-truncate univer-text-xs univer-text-gray-500 dark:!univer-text-gray-400",
 children: _e(_0x1816ba, _0x52fda4),
 }),
 ],
 }),
 ],
 }),
 _0x49a3ff &&
 (0, R.jsx)(m.Button, {
 size: "small",
 variant: "primary",
 onClick: _0x5b5e6f,
 children: _0x52fda4.t("sheets-history-ui.viewer.header.revert"),
 }),
 ],
 });
}
function tt() {
 let _0x5f3ea6 = (0, N.useDependency)(q),
 _0x5cd6a1 = (0, N.useDependency)(e.LocaleService),
 _0x3a5a76 = (0, N.useObservable)(_0x5f3ea6.versions$),
 _0xd35051 = (0, N.useObservable)(_0x5f3ea6.fetching$),
 _0x2d3d0f = (0, I.useRef)(null),
 [_0x281c6d, _0x19332e] = (0, I.useState)(true);
 (0, I.useEffect)(() => {
 let _0x2540d0 = _0x2d3d0f.current;
 if (!_0x2540d0 || !_0x281c6d) return;
 let _0x2fefef,
 _0x39f572 = () => {
 (clearTimeout(_0x2fefef),
 (_0x2fefef = setTimeout(() => {
 let {
 scrollTop: _0x300fb8,
 scrollHeight: _0x3e50cd,
 clientHeight: _0x5c7619,
 } = _0x2540d0;
 _0x300fb8 + _0x5c7619 >= _0x3e50cd - 10 &&
 _0x5f3ea6.loadMoreVersions().catch(() => undefined);
 }, 100)));
 };
 return (
 _0x2540d0.addEventListener("scroll", _0x39f572),
 () => {
 (clearTimeout(_0x2fefef),
 _0x2540d0.removeEventListener("scroll", _0x39f572));
 }
 );
 }, [_0x5f3ea6, _0x281c6d]);
 let _0x24fc57 = be(_0x3a5a76 ?? []);
 return (0, R.jsx)("div", {
 className:
 "univer-pointer-events-none univer-absolute univer-inset-0 univer-z-10 univer-flex univer-flex-col univer-justify-end",
 children: (0, R.jsxs)("div", {
 className: (0, m.clsx)(
 "univer-pointer-events-auto univer-flex univer-flex-col univer-rounded-t-2xl univer-bg-gray-0 univer-shadow-lg univer-transition-[height] univer-duration-300 dark:!univer-bg-gray-950",
 _0x281c6d ? "univer-h-[60%]" : "univer-h-12",
 ),
 children: [
 (0, R.jsxs)("div", {
 className:
 "univer-flex\x20univer-shrink-0\x20univer-cursor-pointer\x20univer-flex-col\x20univer-items-center\x20univer-py-2",
 onClick: () => _0x19332e((_0xfe18db) => !_0xfe18db),
 children: [
 (0, R.jsx)("div", {
 className:
 "univer-h-1\x20univer-w-10\x20univer-rounded-full\x20univer-bg-gray-300\x20dark:!univer-bg-gray-600",
 }),
 !_0x281c6d &&
 (0, R.jsx)("span", {
 className: "univer-mt-1 univer-text-xs univer-text-gray-500",
 children: _0x5cd6a1.t("sheets-history-ui.viewer.panel.title"),
 }),
 ],
 }),
 _0x281c6d &&
 (0, R.jsx)(R.Fragment, {
 children: _0x3a5a76
 ? (0, R.jsxs)("div", {
 ref: _0x2d3d0f,
 className: "univer-flex-1 univer-overflow-y-auto",
 children: [
 _0x24fc57.map((_0x24b4fd) =>
 (0, R.jsxs)(
 "div",
 {
 children: [
 (0, R.jsx)("div", {
 className:
 "univer-sticky univer-top-0 univer-z-10 univer-bg-gray-50 univer-px-4 univer-py-2 univer-text-xs univer-font-semibold univer-text-gray-500 dark:!univer-bg-gray-900",
 children: ye(
 _0x24b4fd.startDateString,
 _0x5cd6a1,
 ),
 }),
 _0x24b4fd.versions["map"]((_0xbb84bb, _0x165f0b) =>
 (0, R.jsx)(
 et,
 {
 item: _0xbb84bb,
 isNewest:
 _0x24fc57[0] === _0x24b4fd &&
 _0x165f0b === 0,
 },
 _0xbb84bb.id,
 ),
 ),
 ],
 },
 _0x24b4fd.dateString,
 ),
 ),
 _0xd35051 &&
 (0, R.jsx)("div", {
 className:
 "univer-flex univer-items-center univer-justify-center univer-py-4",
 children: (0, R.jsx)(F.LoadingMultiIcon, {
 className: "univer-animate-spin univer-text-gray-400",
 }),
 }),
 ],
 })
 : (0, R.jsx)("div", {
 className:
 "univer-flex univer-flex-1 univer-items-center univer-justify-center",
 children: (0, R.jsx)(F.LoadingMultiIcon, {
 className: "univer-animate-spin univer-text-gray-400",
 }),
 }),
 }),
 ],
 }),
 });
}
let nt = class extends e.Disposable {
 constructor(_0x539c93, _0x56f599) {
 (super(),
 (this._uiPartsService = _0x539c93),
 (this._injector = _0x56f599),
 this.disposeWithMe(
 this._uiPartsService["registerComponent"](
 N.BuiltInUIPart["CONTENT"],
 () => (0, N.connectInjector)(tt, this._injector),
 ),
 ));
 }
};
nt = W([U(0, N.IUIPartsService), U(1, (0, e.Inject)(e.Injector))], nt);
let rt = class extends e.Plug in {
 constructor(_0x21bd58 = V, _0x58e9bb, _0x3435b7, _0xfc94c9) {
 (super(),
 (this._config = _0x21bd58),
 (this._injector = _0x58e9bb),
 (this._renderManagerService = _0x3435b7),
 (this._configService = _0xfc94c9));
 let { ..._0xf9d6ff } = (0, e.merge)({}, V, this._config);
 this._configService["setConfig"](B, _0xf9d6ff);
 }
 onStarting() {
 ([
 [Y],
 [q],
 [$e],
 [J],
 [Pe],
 [G],
 [nt],
 [X],
 [n.ISnapshotServerService, { useClass: r.SnapshotServerOverHTTPService }],
 [N.IDialogService, { useClass: Re }],
 [e.IImageIoService, { useClass: r.CollaborationImageIoService }],
 ].forEach((_0x456146) => this._injector["add"](_0x456146)),
 this._injector["get"]($e),
 this._injector["get"](Y));
 }
 onRendered() {
 ([[Ie]].forEach((_0x1cc161) => {
 this.disposeWithMe(
 this._renderManagerService["registerRenderModule"](
 e.UniverInstanceType["UNIVER_SHEET"],
 _0x1cc161,
 ),
 );
 }),
 this._injector["get"](X),
 this._injector["get"](nt));
 }
 onSteady() {
 this._injector["get"](J);
 }
};
(H(rt, "pluginName", "UNIVER_SHEETS_HISTORY_VIEWER_MOBILE_PLUGIN"),
 H(rt, "packageName", se),
 H(rt, "version", ce),
 (rt = W(
 [
 (0, e.DependentOn)(
 a.UniverLicensePlugin,
 _.UniverDrawingPlugin,
 y.UniverRenderEnginePlugin,
 b.UniverNetworkPlugin,
 O.UniverSheetsFilterPlugin,
 j.UniverSheetsTablePlugin,
 t.UniverSheetsPlugin,
 N.UniverMobileUIPlugin,
 n.UniverCollaborationPlugin,
 S.UniverSheetsConditionalFormattingPlugin,
 o.UniverSheetsChartPlugin,
 c.UniverSheetsPivotTablePlugin,
 d.UniverSheetSparklinePlugin,
 M.UniverSheetsMobileUIPlugin,
 w.UniverSheetsDataValidationPlugin,
 ),
 U(1, (0, e.Inject)(e.Injector)),
 U(2, y.IRenderManagerService),
 U(3, e.IConfigService),
 ],
 rt,
 )));
const it = "univer-history-container-mobile";
let at = class extends e.Disposable {
 constructor(
 _0x58b190,
 _0x260904,
 _0x48ee9c,
 _0x4c4c72,
 _0x51b80f,
 _0x8383bc,
 _0x15c6af,
 _0x5e2ebc,
 _0x212a6a,
 _0x7dcfe7,
 ) {
 (super(),
 (this._localeService = _0x58b190),
 (this._univerInstanceService = _0x260904),
 (this._configService = _0x48ee9c),
 (this._commandService = _0x4c4c72),
 (this._messageService = _0x51b80f),
 (this._permissionService = _0x8383bc),
 (this._selectionProtectionRuleModel = _0x15c6af),
 (this._dialogService = _0x5e2ebc),
 (this._sidebarService = _0x212a6a),
 (this._themeService = _0x7dcfe7),
 H(this, "_historyUniver$", new P["BehaviorSubject"](null)),
 H(this, "historyUniver$", this._historyUniver$["asObservable"]()),
 H(this, "_disposableCollection", new e["DisposableCollection"]()),
 H(this, "_pluginMap", new Map()),
 H(this, "_internalWebWorker", null),
 this._init());
 }
 get historyUniver() {
 return this._historyUniver$["value"];
 }
 _init() {
 (this._initContainer(), this._initPlugins());
 }
 _initContainer() {
 var _0x1526e8;
 let _0x54b35b = this._configService["getConfig"](B),
 _0x10666b =
 (_0x1526e8 = this._configService["getConfig"](
 N.UI_PLUGIN_CONFIG_KEY,
 )) == null
 ? undefined
 : _0x1526e8.container,
 _0x31fd34 =
 (_0x54b35b == null ? undefined : _0x54b35b.univerContainerId) ??
 _0x10666b,
 _0x20f37e =
 typeof _0x31fd34 == "string"
 ? document.getElementById(_0x31fd34)
 : _0x31fd34;
 if (!_0x20f37e)
 throw Error(
 "[MobileHistoryLoaderService]: Configure a valid Univer container before opening history.",
 );
 let _0xc0500c = document.createElement("div");
 ((_0xc0500c.id = it),
 (_0xc0500c.style["position"] = "absolute"),
 (_0xc0500c.style["top"] = "0"),
 (_0xc0500c.style["left"] = "0"),
 (_0xc0500c.style["width"] = "100%"),
 (_0xc0500c.style["height"] = "100%"),
 (_0xc0500c.style["zIndex"] = "49"),
 (_0xc0500c.style["display"] = "none"),
 Ve(_0xc0500c, this._localeService),
 _0x20f37e.appendChild(_0xc0500c));
 }
 _initPlugins() {
 [
 [y.UniverRenderEnginePlugin],
 [
 N.UniverMobileUIPlugin,
 {
 container: it,
 header: true,
 toolbar: false,
 footer: true,
 contextMenu: false,
 override: [[N.IDialogService, null]],
 },
 ],
 [b.UniverNetworkPlugin],
 [_.UniverDrawingPlugin, { override: [[e.IImageIoService, null]] }],
 [h.UniverDocsPlugin, { hasScroll: false }],
 [g.UniverDocsUIPlugin],
 [re.UniverSheetsNumfmtPlugin],
 [t.UniverSheetsPlugin, { notExecuteFormula: true }],
 [M.UniverSheetsMobileUIPlugin],
 [A.UniverSheetsFormulaPlugin],
 [ee.UniverSheetsFormulaUIPlugin],
 [n.UniverCollaborationPlugin],
 [O.UniverSheetsFilterPlugin],
 [S.UniverSheetsConditionalFormattingPlugin],
 [te.UniverSheetsHyperLinkPlugin],
 [ne.UniverSheetsHyperLinkUIPlugin],
 [p.UniverDataValidationPlugin],
 [w.UniverSheetsDataValidationPlugin],
 [T.UniverSheetsDataValidationMobileUIPlugin],
 [i.UniverProFormulaEnginePlugin, { notExecuteFormula: true }],
 [v.UniverDrawingUIPlugin],
 [E.UniverSheetsDrawingPlugin],
 [D.UniverSheetsDrawingUIPlugin],
 [d.UniverSheetSparklinePlugin],
 [f.UniverSheetSparklineUIPlugin],
 [o.UniverSheetsChartPlugin],
 [s.UniverSheetsChartUIPlugin],
 [l.UniverSheetsShapePlugin],
 [u.UniverSheetsShapeUIPlugin],
 [c.UniverSheetsPivotTablePlugin, { notExecuteFormula: true }],
 [j.UniverSheetsTablePlugin],
 ].forEach(([_0x227299, _0x4d2e2a]) =>
 this.registerPlugin(_0x227299, _0x4d2e2a),
 );
 }
 dispose() {
 (super.dispose(), this.unMountHistoryContent(), this._pluginMap["clear"]());
 }
 registerPlugin(_0x181d31, _0x32ef77, _0x27ec57) {
 if (this._pluginMap["has"](_0x181d31.pluginName) && !_0x27ec57)
 throw Error(
 "[MobileHistoryLoaderService]: Plugin " +
 _0x181d31.pluginName +
 " has been registered.",
 );
 this._pluginMap["set"](_0x181d31.pluginName, [_0x181d31, _0x32ef77]);
 }
 getAllPlugins() {
 return Array.from(this._pluginMap["values"]());
 }
 mountHistoryContent(_0x253d19, _0x452e2d) {
 let _0x47747b = document.getElementById(it);
 _0x47747b &&
 ((_0x47747b.style["display"] = "block"),
 this._initUniver(_0x253d19, _0x452e2d));
 }
 unMountHistoryContent() {
 var _0x448ea0;
 (this._disposableCollection["dispose"](),
 (_0x448ea0 = this.historyUniver) == null || _0x448ea0.dispose(),
 this._historyUniver$["next"](null));
 let _0x45f6e1 = document.getElementById(it);
 _0x45f6e1 &&
 ((_0x45f6e1.style["display"] = "none"),
 (this._internalWebWorker &&=
 (this._internalWebWorker["terminate"](), null)));
 }
 _initUniver(_0x19b7f6, _0x17cd06) {
 var _0x4d1c3e, _0x912e4c, _0x4a880e;
 if (this.historyUniver) return;
 let _0x180171 = new e.Univer({
 ...Be(this._localeService),
 override: [[e.IAuthzIoService, { useClass: r.AuthzIoHttpService }]],
 }),
 _0x53c2f2 = _0x180171.__getInjector(),
 _0x499b6a = _0x53c2f2.get(e.ThemeService);
 (this._disposableCollection["add"](
 this._themeService["darkMode$"].subscribe((_0x43b909) => {
 _0x499b6a.setDarkMode(_0x43b909);
 }),
 ),
 this._disposableCollection["add"](
 this._themeService["currentTheme$"].subscribe((_0xa1b29e) => {
 _0x499b6a.setTheme(_0xa1b29e);
 }),
 ));
 let _0x58ec48 = _0x53c2f2.get(e.LocaleService);
 (_0x58ec48.setLocale(this._localeService["getCurrentLocale"]()),
 _0x58ec48.setDirection(this._localeService["getDirection"]()),
 _0x53c2f2
 .get(e.IConfigService)
 .setConfig(
 r.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY,
 this._configService["getConfig"](
 r.COLLABORATION_CLIENT_PLUGIN_CONFIG_KEY,
 ),
 ));
 let _0x44c736 = this._configService["getConfig"](a.LS_CONFIG_KEY);
 _0x44c736 &&
 _0x180171.registerPlugin(a.UniverLicensePlugin, {
 license: _0x44c736.ls,
 });
 let _0x34ec6f =
 (_0x4d1c3e = this._configService["getConfig"](
 "sheets-history-ui.config",
 )) == null
 ? undefined
 : _0x4d1c3e.workerURL,
 _0x2361a3 = !!_0x34ec6f;
 (_0x2361a3 &&
 ((this._internalWebWorker =
 _0x34ec6f instanceof Worker ? _0x34ec6f : null),
 _0x180171.registerPlugin(x.UniverRPCMainThreadPlugin, {
 workerURL: _0x34ec6f,
 })),
 this._pluginMap["forEach"](([_0x4fdca9, _0xa46c92]) => {
 _0x180171.registerPlugin(_0x4fdca9, _0xa46c92);
 }),
 _0x180171.registerPlugin(rt, {
 historyServerUrl: oe(this._configService["getConfig"](B)),
 historyPanelComponentKey:
 (_0x912e4c = this._configService["getConfig"](
 "sheets-history-ui.config",
 )) == null
 ? undefined
 : _0x912e4c.historyPanelComponentKey,
 historyPanelHidden:
 (_0x4a880e = this._configService["getConfig"](
 "sheets-history-ui.config",
 )) == null
 ? undefined
 : _0x4a880e.historyPanelHidden,
 }),
 _0x53c2f2.invoke((_0x39648f) => this._initListener(_0x39648f, _0x19b7f6)),
 this._historyUniver$["next"](_0x180171));
 let _0x5d3885 = _0x53c2f2.get(q),
 _0x3b2478 = this._checkCanRevert(_0x19b7f6),
 _0x97a5da = () => {
 He(_0x17cd06)
 ? _0x5d3885.triggerCustomVersions(_0x19b7f6, _0x3b2478, _0x17cd06)
 : _0x5d3885.triggerLoadVersions(_0x19b7f6, _0x3b2478).catch(() => {
 _0x5d3885.status = "error";
 });
 };
 if (
 (this._messageService["show"]({
 content: this._localeService["t"](
 "sheets-history-ui.loader.info.initializing",
 ),
 type: m.MessageType["Loading"],
 }),
 _0x2361a3)
 )
 try {
 _0x53c2f2
 .get(x.IRemoteInstanceService)
 .whenReady()
 .then(_0x97a5da)
 .catch(_0x97a5da);
 } catch {
 _0x97a5da();
 }
 else _0x97a5da();
 }
 _initListener(_0x6ee423, _0x4a84d3) {
 let _0x449eec = _0x6ee423.get(q);
 (this._disposableCollection["add"](
 _0x449eec.status$["subscribe"]((_0x2ba831) => {
 switch (_0x2ba831) {
 case "entered":
 (this._dialogService["closeAll"](),
 this._sidebarService["close"]());
 break;
 case "exited":
 (this._commandService["executeCommand"](Ke.id),
 this.unMountHistoryContent());
 break;
 case "error":
 (this.unMountHistoryContent(),
 this._messageService["show"]({
 content: this._localeService["t"](
 "sheets-history-ui.loader.panel.listFetchError",
 ),
 type: m.MessageType["Error"],
 duration: 3000,
 }));
 break;
 default:
 break;
 }
 }),
 ),
 this._disposableCollection["add"](
 _0x449eec.revertRevision$["subscribe"]((_0x1395b9) => {
 if (_0x1395b9) {
 let _0x3c8208 = { unitId: _0x4a84d3, revision: _0x1395b9 };
 this._commandService["executeCommand"](
 n.RevertRevisionMutation["id"],
 _0x3c8208,
 ).catch(() => {
 _0x449eec.status = "error";
 });
 }
 }),
 ));
 }
 _checkCanRevert(_0x31f0d7) {
 let _0x5b94ad = this._univerInstanceService["getUnit"](_0x31f0d7);
 if (!_0x5b94ad) return false;
 let _0xe2cd25 = _0x5b94ad
 .getSheets()
 .map((_0x1c196a) => _0x1c196a.getSheetId()),
 _0x57df48 = new t.WorkbookEditablePermission(_0x31f0d7).id,
 _0x2647a2 = _0xe2cd25.map(
 (_0x58959d) =>
 new t["WorksheetEditPermission"](_0x31f0d7, _0x58959d).id,
 ),
 _0x4246c8 = _0xe2cd25
 .map((_0x3e1010) =>
 this._selectionProtectionRuleModel["getSubunitRuleList"](
 _0x31f0d7,
 _0x3e1010,
 ).map(
 (_0x58fbf6) =>
 new t.RangeProtectionPermissionEditPoint(
 _0x31f0d7,
 _0x3e1010,
 _0x58fbf6.permissionId,
 ).id,
 ),
 )
 .flat(),
 _0x54937a = new t["WorkbookRecoverHistoryPermission"](_0x31f0d7).id;
 return this._permissionService["composePermission"]([
 _0x57df48,
 ..._0x2647a2,
 ..._0x4246c8,
 _0x54937a,
 ]).every((_0x373e38) => !!_0x373e38.value);
 }
};
at = W(
 [
 U(0, (0, e.Inject)(e.LocaleService)),
 U(1, e.IUniverInstanceService),
 U(2, e.IConfigService),
 U(3, e.ICommandService),
 U(4, N.IMessageService),
 U(5, e.IPermissionService),
 U(6, (0, e.Inject)(t.RangeProtectionRuleModel)),
 U(7, (0, e.Inject)(N.IDialogService)),
 U(8, (0, e.Inject)(N.ISidebarService)),
 U(9, (0, e.Inject)(e.ThemeService)),
 ],
 at,
);
let Q = class extends e.Plug in {
 constructor(_0xde6914 = V, _0x38e867, _0x3fb6f3) {
 (super(),
 (this._config = _0xde6914),
 (this._injector = _0x38e867),
 (this._configService = _0x3fb6f3));
 let { menu: _0x38fcb1, ..._0x4df91b } = (0, e.merge)({}, V, this._config);
 (_0x38fcb1 &&
 this._configService["setConfig"]("menu", _0x38fcb1, { merge: true }),
 this._configService["setConfig"](B, _0x4df91b));
 }
 onStarting() {
 (this._injector["add"]([Y]),
 this._injector["get"](Y),
 [[Z, { useClass: at }], [Ze]].forEach((_0x275a39) =>
 this._injector["add"](_0x275a39),
 ));
 }
 onSteady() {
 this._injector["get"](Ze);
 }
};
(H(Q, "type", e.UniverInstanceType["UNIVER_UNKNOWN"]),
 H(Q, "pluginName", "UNIVER_SHEETS_HISTORY_MOBILE_UI_PLUGIN"),
 H(Q, "packageName", se),
 H(Q, "version", ce),
 (Q = W(
 [
 (0, e.DependentOn)(
 a.UniverLicensePlugin,
 t.UniverSheetsPlugin,
 N.UniverMobileUIPlugin,
 r.UniverCollaborationClientPlugin,
 z.UniverCollaborationClientUIPlugin,
 ),
 U(1, (0, e.Inject)(e.Injector)),
 U(2, e.IConfigService),
 ],
 Q,
 )));
let ot = class extends e.RxDisposable {
 constructor(
 _0x3295b9,
 _0x3c5238,
 _0x3e20ae,
 _0x44550f,
 _0x575346,
 _0x535b0b,
 _0x248352,
 _0x328a2e,
 _0x354dc2,
 _0x15bd35,
 ) {
 (super(),
 (this._commandService = _0x3295b9),
 (this._menuManagerService = _0x3c5238),
 (this._historyManagerService = _0x3e20ae),
 (this._localeService = _0x44550f),
 (this._messageService = _0x575346),
 (this._collaborationController = _0x535b0b),
 (this._localCacheService = _0x248352),
 (this._dataLoaderService = _0x328a2e),
 (this._univerInstanceService = _0x354dc2),
 (this._urlService = _0x15bd35),
 H(this, "_revertAcknowledgementSubscription", null),
 this.disposeWithMe(
 (0, e.toDisposable)(() => this._clearRevertAcknowledgement()),
 ),
 this._init());
 }
 _init() {
 ([Ge, Ke].forEach((_0x38e483) =>
 this.disposeWithMe(
 (0, e.toDisposable)(this._commandService["registerCommand"](_0x38e483)),
 ),
 ),
 this._menuManagerService["mergeMenu"](Je),
 this.disposeWithMe(
 this._commandService["onCommandExecuted"]((_0x36f44e, _0x243ff1) => {
 if (
 _0x36f44e.id === n.RevertRevisionMutation["id"] &&
 Ye(_0x36f44e.params)
 ) {
 let { revision: _0x20f6d7, unitId: _0x41bd5c } = _0x36f44e.params;
 this._messageService["show"]({
 content: this._localeService["t"](
 "sheets-history-ui.loader.panel.reverting",
 ),
 type: m.MessageType["Loading"],
 duration: 5000,
 });
 let _0x167e3c =
 this._collaborationController["getCollabEntity"](_0x41bd5c);
 if (!_0x167e3c) {
 this._showRevertFailed();
 return;
 }
 _0x243ff1 != null && _0x243ff1.fromCollab
 ? this._handleRevertAcknowledgement(
 _0x167e3c,
 { revision: _0x20f6d7, unitId: _0x41bd5c },
 async () => (
 setTimeout(() => window.location["reload"]()),
 true
 ),
 true,
 )
 : this._handleRevertAcknowledgement(
 _0x167e3c,
 { revision: _0x20f6d7, unitId: _0x41bd5c },
 async () => {
 let _0x326ae5 = this._univerInstanceService[
 "getCurrentUnitOfType"
 ](e.UniverInstanceType["UNIVER_SHEET"]),
 _0x87fc06 =
 _0x326ae5 == null
 ? undefined
 : _0x326ae5.getActiveSheet();
 if (!_0x87fc06) return false;
 this._univerInstanceService["disposeUnit"](_0x41bd5c);
 let _0x286d00 = await this._dataLoaderService["loadUnit"](
 _0x41bd5c,
 e.UniverInstanceType["UNIVER_SHEET"],
 );
 return _0x286d00 && _0x286d00 instanceof e.Workbook
 ? (await this._setupSubUnitSync(
 _0x286d00,
 _0x87fc06.getSheetId(),
 ),
 true)
 : false;
 },
 );
 }
 }),
 ));
 }
 _handleRevertAcknowledgement(
 _0x3f1d1d,
 _0x5eb6ee,
 _0x39fcc5,
 _0x2b63b8 = false,
 ) {
 this._clearRevertAcknowledgement();
 let _0x100b8e = (0, P.combineLatest)([
 _0x3f1d1d.session["event$"],
 _0x3f1d1d.state$,
 ]).pipe(
 (0, P.filter)(
 ([_0x2da6ef, _0x20a916]) =>
 Xe(_0x2da6ef, _0x5eb6ee) &&
 (_0x20a916 == null ? undefined : _0x20a916.status) ===
 r.CollaborationStatus["SYNCED"],
 ),
 (0, P.take)(1),
 ),
 _0x56d266 = _0x100b8e;
 (_0x2b63b8 && (_0x56d266 = _0x100b8e.pipe((0, P.timeout)({ first: 5000 }))),
 (this._revertAcknowledgementSubscription = _0x56d266
 .pipe(
 (0, P.switchMap)(async () => {
 let _0xbd3d27 = await _0x39fcc5();
 return (
 _0xbd3d27 &&
 (this._historyManagerService["unMountHistoryContent"](),
 await this._localCacheService["exhaustSavingTask"]()),
 _0xbd3d27
 );
 }),
 (0, P.takeUntil)(this.dispose$),
 )
 .subscribe({
 next: (_0x1b9322) => {
 (this._clearRevertAcknowledgement(),
 _0x1b9322 || this._showRevertFailed());
 },
 error: () => {
 (this._clearRevertAcknowledgement(), this._showRevertFailed());
 },
 })));
 }
 _clearRevertAcknowledgement() {
 var _0x52f0ba;
 ((_0x52f0ba = this._revertAcknowledgementSubscription) == null ||
 _0x52f0ba.unsubscribe(),
 (this._revertAcknowledgementSubscription = null));
 }
 _showRevertFailed() {
 this._messageService["show"]({
 content: this._localeService["t"](
 "sheets-history-ui.loader.panel.revertFailed",
 ),
 type: m.MessageType["Error"],
 duration: 3000,
 });
 }
 async _setupSubUnitSync(_0x78be25, _0x42f341) {
 (await this._updateSubUnitFromURLParams(_0x78be25, _0x42f341),
 _0x78be25.activeSheet$["pipe"]((0, P.takeUntil)(this.dispose$)).subscribe(
 (_0x3fb393) => {
 _0x3fb393 && this._updateURLWithCurrentState(_0x3fb393);
 },
 ),
 this._urlService["urlChange$"]
 .pipe((0, P.takeUntil)(this.dispose$))
 .subscribe(() =>
 this._updateSubUnitFromURLParams(_0x78be25, _0x42f341),
 ));
 }
 _updateURLWithCurrentState(_0x2da852, _0xdd57c4 = false) {
 let _0x15c49d = this._urlService["getParam"]("subunit");
 _0x2da852.getSheetId() !== _0x15c49d &&
 this._urlService["setParam"](
 "subunit",
 _0x2da852.getSheetId(),
 _0xdd57c4,
 );
 }
 async _updateSubUnitFromURLParams(_0x25d4ec, _0x1eec1a) {
 var _0x5a5cd4;
 if (!_0x1eec1a || !_0x25d4ec.getSheetBySheetId(_0x1eec1a)) {
 let _0x171a14 = _0x25d4ec.getUnhiddenWorksheets()[0],
 _0x1f2929 = _0x25d4ec.getSheetBySheetId(_0x171a14);
 if (!_0x1f2929) return;
 (this._updateURLWithCurrentState(_0x1f2929, true),
 await this._commandService["executeCommand"](
 t.SetWorksheetActivateCommand["id"],
 { unitId: _0x25d4ec.getUnitId(), subUnitId: _0x171a14 },
 ));
 return;
 }
 ((_0x5a5cd4 = _0x25d4ec.getActiveSheet()) == null
 ? undefined
 : _0x5a5cd4.getSheetId()) !== _0x1eec1a &&
 (await this._commandService["executeCommand"](
 t.SetWorksheetActivateCommand["id"],
 { unitId: _0x25d4ec.getUnitId(), subUnitId: _0x1eec1a },
 ));
 }
};
ot = W(
 [
 U(0, e.ICommandService),
 U(1, N.IMenuManagerService),
 U(2, (0, e.Inject)(Z)),
 U(3, (0, e.Inject)(e.LocaleService)),
 U(4, N.IMessageService),
 U(5, (0, e.Inject)(r.CollaborationController)),
 U(6, r.ILocalCacheService),
 U(7, (0, e.Inject)(r.DataLoaderService)),
 U(8, e.IUniverInstanceService),
 U(9, z.IURLService),
 ],
 ot,
);
let $ = class extends e.Plug in {
 constructor(_0x5dd900 = V, _0x4ee38, _0x22bec0) {
 (super(),
 (this._config = _0x5dd900),
 (this._injector = _0x4ee38),
 (this._configService = _0x22bec0));
 let { menu: _0x4366ed, ..._0x5c2e1b } = (0, e.merge)({}, V, this._config);
 (_0x4366ed &&
 this._configService["setConfig"]("menu", _0x4366ed, { merge: true }),
 this._configService["setConfig"](B, _0x5c2e1b));
 }
 onStarting() {
 (this._injector["add"]([Y]),
 this._injector["get"](Y),
 [[Z], [ot]].forEach((_0x1d79cb) => this._injector["add"](_0x1d79cb)));
 }
 onSteady() {
 this._injector["get"](ot);
 }
};
(H($, "pluginName", "UNIVER_SHEETS_HISTORY_UI_PLUGIN"),
 H($, "packageName", se),
 H($, "version", ce),
 H($, "type", e.UniverInstanceType["UNIVER_SHEET"]),
 ($ = W(
 [
 (0, e.DependentOn)(
 a.UniverLicensePlugin,
 t.UniverSheetsPlugin,
 ie.UniverSheetsHistoryPlugin,
 r.UniverCollaborationClientPlugin,
 z.UniverCollaborationClientUIPlugin,
 ),
 U(1, (0, e.Inject)(e.Injector)),
 U(2, e.IConfigService),
 ],
 $,
 )),
 (exports.SHEETS_HISTORY_UI_PLUGIN_CONFIG_KEY = B),
 (exports.ToggleEditHistoryOperation = Ge),
 Object.defineProperty(exports, "UniverSheetsHistoryMobileUIPlugin", {
 enumerable: true,
 get: function () {
 return Q;
 },
 }),
 Object.defineProperty(exports, "UniverSheetsHistoryUIPlugin", {
 enumerable: true,
 get: function () {
 return $;
 },
 }));
