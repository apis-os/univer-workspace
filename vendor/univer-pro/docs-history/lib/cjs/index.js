Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/edit-history"),
 t = require("@univerjs-pro/license"),
 n = require("@univerjs/core"),
 r = require("@univerjs/docs"),
 i = require("@univerjs/protocol"),
 a = require("@univerjs-pro/collaboration");
const o = "docs-history.config",
 s = {};
var c = "@univerjs-pro/docs-history",
 l = "1.0.0-insiders.20260907-70fc579";
function u(_0x485aff, _0x482bc0) {
 let _0x481271 = [...(_0x482bc0.paragraphs ?? [])].sort(
 (_0x46253f, _0x46970c) => _0x46253f.startIndex - _0x46970c.startIndex,
 ),
 _0x32b186 = _0x481271.findIndex(
 (_0xc446f0) =>
 _0xc446f0.paragraphId === _0x485aff.paragraphId ||
 _0xc446f0.paragraphId === _0x485aff.nextParagraphId,
 ),
 _0x5af6e3 = _0x32b186 >= 0 ? _0x481271[_0x32b186] : undefined,
 _0x5a3f04 =
 _0x32b186 > 0
 ? _0x481271[_0x32b186 - 1]
 : _0x481271.find(
 (_0x900dbe) =>
 _0x900dbe.paragraphId === _0x485aff.previousParagraphId,
 ),
 _0x4302a4 =
 _0x5af6e3 || _0x5a3f04
 ? ((_0x5a3f04 == null ? undefined : _0x5a3f04.startIndex) ?? -1) + 1
 : _0x485aff.absoluteOffset,
 _0x50cf3c = Math.max(0, _0x482bc0.dataStream["length"] - 1),
 _0x3be700 =
 (_0x5af6e3 == null ? undefined : _0x5af6e3.startIndex) ?? _0x50cf3c,
 _0x204294 = d(
 _0x4302a4 + (_0x5af6e3 || _0x5a3f04 ? _0x485aff.offsetInParagraph : 0),
 0,
 _0x3be700,
 );
 return {
 startOffset: _0x204294,
 endOffset: d(
 _0x4302a4 +
 (_0x5af6e3 || _0x5a3f04
 ? (_0x485aff.endOffsetInParagraph ?? _0x485aff.offsetInParagraph)
 : 0),
 _0x204294,
 _0x3be700,
 ),
 };
}
function d(_0x12e0d0, _0x5dd555, _0x7f4578) {
 return Math.min(_0x7f4578, Math.max(_0x5dd555, _0x12e0d0));
}
function f(_0x36b3d, _0x1a6619) {
 return function (_0xa04410, _0x146a3e) {
 _0x1a6619(_0xa04410, _0x146a3e, _0x36b3d);
 };
}
function p(_0x28d0b2, _0x47a5c4, _0x422e1d, _0x324ff5) {
 var _0x2cc84b = arguments.length,
 _0x1f7f5d =
 _0x2cc84b < 3
 ? _0x47a5c4
 : _0x324ff5 === null
 ? (_0x324ff5 = Object.getOwnPropertyDescriptor(_0x47a5c4, _0x422e1d))
 : _0x324ff5,
 _0x4b55c3;
 if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
 _0x1f7f5d = Reflect.decorate(_0x28d0b2, _0x47a5c4, _0x422e1d, _0x324ff5);
 else {
 for (var _0x558eb6 = _0x28d0b2.length - 1; _0x558eb6 >= 0; _0x558eb6--)
 (_0x4b55c3 = _0x28d0b2[_0x558eb6]) &&
 (_0x1f7f5d =
 (_0x2cc84b < 3
 ? _0x4b55c3(_0x1f7f5d)
 : _0x2cc84b > 3
 ? _0x4b55c3(_0x47a5c4, _0x422e1d, _0x1f7f5d)
 : _0x4b55c3(_0x47a5c4, _0x422e1d)) || _0x1f7f5d);
 }
 return (
 _0x2cc84b > 3 &&
 _0x1f7f5d &&
 Object.defineProperty(_0x47a5c4, _0x422e1d, _0x1f7f5d),
 _0x1f7f5d
 );
}
let m = class extends n.Disposable {
 constructor(_0x2aacaa, _0x49360b, _0x500a6d, _0x4e0614) {
 (super(),
 (this._authzIoService = _0x49360b),
 (this._univerInstanceService = _0x500a6d),
 (this._selectionManagerService = _0x4e0614),
 this.disposeWithMe(
 _0x2aacaa.register({
 type: n.UniverInstanceType["UNIVER_DOC"],
 canView: (_0x51c767) =>
 this._hasPermission(_0x51c767, i.UnitAction["ViewHistory"]),
 canRevert: async (_0x35a192) => {
 var _0x59111d;
 return (
 !!this._getDocument(_0x35a192) &&
 !(
 (_0x59111d = this._getDocument(_0x35a192)) != null &&
 _0x59111d.getSnapshot().disabled
 ) &&
 (await this._hasPermission(
 _0x35a192,
 i.UnitAction["RecoverHistory"],
 ))
 );
 },
 captureLocation: (_0x118d6a) => this._captureLocation(_0x118d6a),
 restoreLocation: (_0xf63347, _0xd956b4) =>
 this._restoreLocation(
 _0xf63347,
 h(_0xd956b4) ? _0xd956b4 : undefined,
 ),
 }),
 ));
 }
 _captureLocation(_0x2343e9) {
 var _0xe99aa3;
 let _0x1533a4 = this._getDocument(_0x2343e9),
 _0x21f306 = this._selectionManagerService["getActiveTextRange"](),
 _0x4ac363 = (_0x21f306 == null ? undefined : _0x21f306.segmentId) ?? "",
 _0x68d7c9 =
 _0x1533a4 == null ||
 (_0xe99aa3 = _0x1533a4.getSelfOrHeaderFooterModel(_0x4ac363)) == null
 ? undefined
 : _0xe99aa3.getBody();
 if (!_0x1533a4 || !_0x21f306 || !_0x68d7c9) return;
 let _0x4e04a5 = [...(_0x68d7c9.paragraphs ?? [])].sort(
 (_0xc03082, _0x399383) => _0xc03082.startIndex - _0x399383.startIndex,
 ),
 _0x5a5404 = _0x4e04a5.findIndex(
 (_0x22dcbb) => _0x22dcbb.startIndex >= _0x21f306.startOffset,
 ),
 _0x2d6a11 = _0x5a5404 >= 0 ? _0x4e04a5[_0x5a5404] : undefined,
 _0x3732bd;
 _0x5a5404 > 0
 ? (_0x3732bd = _0x4e04a5[_0x5a5404 - 1])
 : _0x5a5404 < 0 && (_0x3732bd = _0x4e04a5[_0x4e04a5.length - 1]);
 let _0x4ff2f5 = _0x3732bd ? _0x3732bd.startIndex + 1 : 0,
 _0x497e04 = [...(_0x68d7c9.sectionBreaks ?? [])]
 .sort(
 (_0xb828bc, _0x114a7b) => _0xb828bc.startIndex - _0x114a7b.startIndex,
 )
 .find((_0x53d3c6) => _0x53d3c6.startIndex >= _0x21f306.startOffset);
 return {
 segmentId: _0x4ac363,
 sectionId: _0x497e04 == null ? undefined : _0x497e04.sectionId,
 paragraphId:
 (_0x2d6a11 == null ? undefined : _0x2d6a11.paragraphId) ??
 (_0x3732bd == null ? undefined : _0x3732bd.paragraphId),
 previousParagraphId:
 _0x3732bd == null ? undefined : _0x3732bd.paragraphId,
 nextParagraphId: _0x2d6a11 == null ? undefined : _0x2d6a11.paragraphId,
 absoluteOffset: _0x21f306.startOffset,
 offsetInParagraph: Math.max(0, _0x21f306.startOffset - _0x4ff2f5),
 endOffsetInParagraph: Math.max(0, _0x21f306.endOffset - _0x4ff2f5),
 affinity: "forward",
 };
 }
 _restoreLocation(_0x4ad8c8, _0x5c7b6d) {
 var _0x344949;
 let _0x36d983 =
 (_0x344949 = this._getDocument(_0x4ad8c8)) == null ||
 (_0x344949 = _0x344949.getSelfOrHeaderFooterModel(
 (_0x5c7b6d == null ? undefined : _0x5c7b6d.segmentId) ?? "",
 )) == null
 ? undefined
 : _0x344949.getBody();
 if (!_0x36d983 || !_0x5c7b6d) return;
 let { startOffset: _0x37386b, endOffset: _0x2dc5be } = u(
 _0x5c7b6d,
 _0x36d983,
 );
 this._selectionManagerService["replaceDocRanges"]([
 {
 startOffset: _0x37386b,
 endOffset: _0x2dc5be,
 segmentId: _0x5c7b6d.segmentId,
 },
 ]);
 }
 _getDocument(_0x10592f) {
 return (
 this._univerInstanceService["getUnit"](
 _0x10592f,
 n.UniverInstanceType["UNIVER_DOC"],
 ) ?? null
 );
 }
 async _hasPermission(_0x54cffc, _0x44134) {
 return (
 await this._authzIoService["allowed"]({
 unitID: _0x54cffc,
 objectID: _0x54cffc,
 objectType: i.UnitObject["Document"],
 actions: [_0x44134],
 })
 ).some((_0x2cfbd5) => _0x2cfbd5.action === _0x44134 && _0x2cfbd5.allowed);
 }
};
m = p(
 [
 f(0, (0, n.Inject)(e.HistoryUnitAdapterRegistryService)),
 f(1, n.IAuthzIoService),
 f(2, n.IUniverInstanceService),
 f(3, (0, n.Inject)(r.DocSelectionManagerService)),
 ],
 m,
);
function h(_0x4fbb10) {
 return (
 typeof _0x4fbb10 == "object" &&
 !!_0x4fbb10 &&
 "segmentId" in _0x4fbb10 &&
 typeof _0x4fbb10.segmentId == "string" &&
 "absoluteOffset" in _0x4fbb10 &&
 typeof _0x4fbb10.absoluteOffset == "number" &&
 "offsetInParagraph" in _0x4fbb10 &&
 typeof _0x4fbb10.offsetInParagraph == "number"
 );
}
function ee(_0x13c0eb) {
 let _0x169910 = [];
 return (
 g(_0x13c0eb, [], (_0x8cfa7a, _0x5986a5) => {
 (_0x8cfa7a.et === "TextX" || _0x8cfa7a.et === "text-x") &&
 ie(_0x8cfa7a.e) &&
 _0x169910.push({ actions: _0x8cfa7a.e, path: _0x5986a5 });
 }),
 _0x169910
 );
}
function te(_0x1d7dc1) {
 let _0xd80320 = [];
 return (
 g(_0x1d7dc1, [], (_0x4cef98, _0x2baf0e) => {
 _0x4cef98.et !== "TextX" &&
 _0x4cef98.et !== "text-x" &&
 ((_0x4cef98.oi !== undefined || _0x4cef98.od !== undefined) &&
 _0xd80320.push({
 path: _0x2baf0e,
 previousValue: _0x4cef98.od,
 nextValue: _0x4cef98.oi,
 }),
 (_0x4cef98.li !== undefined || _0x4cef98.ld !== undefined) &&
 _0xd80320.push({
 path: _0x2baf0e,
 previousValue: _0x4cef98.ld,
 nextValue: _0x4cef98.li,
 }),
 (_0x4cef98.i !== undefined || _0x4cef98.r !== undefined) &&
 _0xd80320.push({
 path: _0x2baf0e,
 previousValue: _0x4cef98.r,
 nextValue: _0x4cef98.i,
 }));
 }),
 _0xd80320
 );
}
function g(_0x59fb1d, _0x4f0d13, _0x42d938) {
 if (!Array.isArray(_0x59fb1d) || _0x59fb1d.length === 0) return;
 let _0x4b009a = [..._0x4f0d13];
 _0x59fb1d.forEach((_0x223002) => {
 Array.isArray(_0x223002)
 ? g(_0x223002, _0x4b009a, _0x42d938)
 : ne(_0x223002)
 ? _0x4b009a.push(_0x223002)
 : re(_0x223002) && _0x42d938(_0x223002, _0x4b009a);
 });
}
function ne(_0x487517) {
 return typeof _0x487517 == "string" || typeof _0x487517 == "number";
}
function re(_0x433256) {
 return (
 typeof _0x433256 == "object" && !!_0x433256 && !Array.isArray(_0x433256)
 );
}
function ie(_0x206c56) {
 return (
 Array.isArray(_0x206c56) &&
 _0x206c56.every((_0x1762d4) =>
 typeof _0x1762d4 != "object" ||
 !_0x1762d4 ||
 !("t" in _0x1762d4) ||
 !("len" in _0x1762d4)
 ? false
 : (_0x1762d4.t === n.TextXActionType["INSERT"] ||
 _0x1762d4.t === n.TextXActionType["DELETE"] ||
 _0x1762d4.t === n.TextXActionType["RETAIN"]) &&
 typeof _0x1762d4.len == "number",
 )
 );
}
function ae(_0x5b0adf) {
 let _0x335081 = [],
 _0x55ce28 = false,
 _0x1004d8 = 0;
 return (
 _0x5b0adf.forEach(
 ({ mutation: _0x1b9229, memberId: _0x2c8c85, revision: _0x603dad }) => {
 if (_0x1b9229.id === a.RevertRevisionMutation["id"]) {
 _0x55ce28 = true;
 let _0x3bf3ef = xe(_0x1b9229) ? _0x1b9229.params["revision"] : 0;
 _0x335081.push({
 id: w(_0x603dad, _0x1004d8++),
 kind: "restore",
 category: "metadata",
 anchor: C("", 0),
 endOffset: 0,
 memberId: _0x2c8c85,
 revision: _0x603dad,
 restoredRevision: _0x3bf3ef,
 });
 return;
 }
 if (!Se(_0x1b9229)) return;
 let _0x5db53c = _0x335081.length,
 _0xd443e7 = _0x1b9229.params;
 (ee(_0xd443e7.actions).forEach(({ actions: _0xe4520f }) => {
 _0x1004d8 = _(
 _0xe4520f,
 _0xd443e7.segmentId ?? "",
 _0x2c8c85,
 _0x603dad,
 _0x1004d8,
 _0x335081,
 );
 }),
 te(_0xd443e7.actions).forEach((_0x13baa8) => {
 let _0x24b593 = se(
 _0x13baa8,
 _0xd443e7.segmentId ?? "",
 _0x2c8c85,
 _0x603dad,
 _0x1004d8,
 );
 _0x24b593 && (_0x335081.push(_0x24b593), (_0x1004d8 += 1));
 }));
 let _0x2b7c55 = _0x335081.splice(_0x5db53c);
 _0x335081.push(...ue(_0x2b7c55));
 },
 ),
 { changes: _0x335081.sort(T), hasRevisionBarrier: _0x55ce28 }
 );
}
function oe(_0x11059e, _0x2cab2a) {
 return _0x11059e.map((_0x32e644) => ({
 ..._0x32e644,
 anchor: Te(_0x32e644.anchor, _0x2cab2a[_0x32e644.anchor["segmentId"]]),
 }));
}
function _(_0x4dd295, _0x5cd85a, _0x4bc63a, _0x555066, _0x3d9664, _0x230f47) {
 let _0x422951 = 0,
 _0x53cca0 = _0x3d9664;
 return (
 _0x4dd295.forEach((_0x5b9730) => {
 let _0x2c2449 = we(_0x5b9730);
 (_0x2c2449 &&
 _0x5b9730.body &&
 (_0x53cca0 = v(
 _0x5b9730.body,
 _0x2c2449,
 _0x5cd85a,
 _0x422951,
 _0x5b9730.len,
 _0x4bc63a,
 _0x555066,
 _0x53cca0,
 _0x230f47,
 )),
 _0x5b9730.t !== n.TextXActionType["DELETE"] &&
 (_0x422951 += _0x5b9730.len));
 }),
 _0x53cca0
 );
}
function v(
 _0x45f7a7,
 _0x18912b,
 _0xa6bab,
 _0x4071c7,
 _0x561ca1,
 _0x5763ce,
 _0x4de7a1,
 _0x4c8b0f,
 _0x798c50,
) {
 var _0x551f22, _0x58f432, _0x5d6985, _0x3e740d;
 let _0x23da90 = _0x4c8b0f,
 _0xee20f6 = (_0x5a7f36) => {
 _0x798c50.push({
 ..._0x5a7f36,
 id: w(_0x4de7a1, _0x23da90++),
 memberId: _0x5763ce,
 revision: _0x4de7a1,
 });
 };
 if (
 (_0x45f7a7.dataStream &&
 _0xee20f6({
 kind: _0x18912b,
 category: "text",
 anchor: C(_0xa6bab, _0x4071c7),
 endOffset: _0x4071c7 + _0x561ca1,
 text: _0x45f7a7.dataStream,
 body: _0x45f7a7,
 }),
 _0x18912b === "modify")
 ) {
 var _0x5b5318;
 (_0x5b5318 = _0x45f7a7.textRuns) == null ||
 _0x5b5318.forEach((_0x18a2f5) =>
 _0xee20f6({
 kind: _0x18912b,
 category: "style",
 anchor: C(_0xa6bab, _0x4071c7 + _0x18a2f5.st),
 endOffset: _0x4071c7 + _0x18a2f5.ed,
 }),
 );
 }
 return (
 (_0x551f22 = _0x45f7a7.paragraphs) == null ||
 _0x551f22.forEach((_0x416966) =>
 _0xee20f6({
 kind: _0x18912b,
 category: "paragraph",
 anchor: C(
 _0xa6bab,
 _0x4071c7 + _0x416966.startIndex,
 _0x416966.paragraphId,
 ),
 endOffset: _0x4071c7 + _0x416966.startIndex + 1,
 }),
 ),
 (_0x58f432 = _0x45f7a7.sectionBreaks) == null ||
 _0x58f432.forEach((_0x155ffc) =>
 _0xee20f6({
 kind: _0x18912b,
 category: "section",
 anchor: {
 ...C(_0xa6bab, _0x4071c7 + _0x155ffc.startIndex),
 sectionId: _0x155ffc.sectionId,
 },
 endOffset: _0x4071c7 + _0x155ffc.startIndex + 1,
 }),
 ),
 (_0x5d6985 = _0x45f7a7.customRanges) == null ||
 _0x5d6985.forEach((_0x4600b0) =>
 _0xee20f6({
 kind: _0x18912b,
 category: "custom-range",
 anchor: C(_0xa6bab, _0x4071c7 + _0x4600b0.startIndex),
 endOffset: _0x4071c7 + _0x4600b0.endIndex + 1,
 rangeId: _0x4600b0.rangeId,
 rangeType: Number(_0x4600b0.rangeType),
 }),
 ),
 (_0x3e740d = _0x45f7a7.blockRanges) == null ||
 _0x3e740d.forEach((_0xfff869) =>
 _0xee20f6({
 kind: _0x18912b,
 category: "block-range",
 anchor: C(_0xa6bab, _0x4071c7 + _0xfff869.startIndex),
 endOffset: _0x4071c7 + _0xfff869.endIndex + 1,
 blockId: _0xfff869.blockId,
 blockType: _0xfff869.blockType,
 }),
 ),
 Ce(_0x45f7a7, _0x18912b, _0xa6bab, _0x4071c7, _0xee20f6),
 _0x23da90
 );
}
function se(_0x56407f, _0x59e334, _0x477972, _0x507a59, _0x536a00) {
 let _0x4c6dcb = me(_0x56407f.path);
 if (!_0x4c6dcb) return null;
 let _0x14b8dd = _0x56407f.nextValue ?? _0x56407f.previousValue,
 _0x27f454 = ve(_0x56407f.path, _0x59e334),
 _0x14276b = x(_0x14b8dd, "startIndex") ?? ye(_0x56407f) ?? 0,
 _0xa13d8d = x(_0x14b8dd, "endIndex") ?? _0x14276b + 1,
 _0xd8502f = ce(_0x56407f, _0x4c6dcb),
 _0x35746a = he(_0x56407f.path, _0x14b8dd),
 _0x296bbb = _0x4c6dcb === "table" ? ge(_0x56407f.path) : {};
 return {
 id: w(_0x507a59, _0x536a00),
 kind: _0xd8502f,
 category: _0x4c6dcb,
 anchor: C(_0x27f454, _0x14276b),
 endOffset: Math.max(_0x14276b + 1, _0xa13d8d),
 memberId: _0x477972,
 revision: _0x507a59,
 rangeId: S(_0x14b8dd, "rangeId"),
 blockId: S(_0x14b8dd, "blockId"),
 structuralPath: [..._0x56407f.path],
 tableId: _0x35746a,
 tableRows: _0x296bbb.row == null ? undefined : [_0x296bbb.row],
 tableColumns: _0x296bbb.column == null ? undefined : [_0x296bbb.column],
 tableCells: _0x296bbb.cell,
 tableEdits: _0x4c6dcb === "table" ? [_e(_0x56407f)] : undefined,
 drawingId: be(_0x56407f.path, _0x14b8dd),
 columnGroupId: S(_0x14b8dd, "columnGroupId"),
 };
}
function ce(_0x5bd912, _0x28158b) {
 let _0x31d802 = "modify";
 return (
 _0x5bd912.previousValue === undefined
 ? (_0x31d802 = "insert")
 : _0x5bd912.nextValue === undefined && (_0x31d802 = "delete"),
 _0x28158b !== "table" || _0x31d802 === "modify" || le(_0x5bd912.path)
 ? _0x31d802
 : "modify"
 );
}
function le(_0x1a0a80) {
 let _0x301a4f = _0x1a0a80.indexOf("tableSource");
 if (_0x301a4f < 0) return false;
 if (
 _0x1a0a80.length === _0x301a4f + 2 &&
 typeof _0x1a0a80[_0x301a4f + 1] == "string"
 )
 return true;
 let _0x48cd56 = _0x1a0a80[_0x1a0a80.length - 2];
 return (
 typeof _0x1a0a80[_0x1a0a80.length - 1] == "number" &&
 (_0x48cd56 === "tableRows" ||
 _0x48cd56 === "tableColumns" ||
 _0x48cd56 === "tableCells")
 );
}
function ue(_0x6d5df3) {
 let _0x2edf77 = new Map(),
 _0x3b2c81 = [];
 return (
 _0x6d5df3.forEach((_0x790e77) => {
 if (_0x790e77.category !== "table" || !_0x790e77.tableId) {
 _0x3b2c81.push(_0x790e77);
 return;
 }
 let _0x53b072 = _0x2edf77.get(_0x790e77.tableId) ?? [];
 (_0x53b072.push(_0x790e77), _0x2edf77.set(_0x790e77.tableId, _0x53b072));
 }),
 _0x2edf77.forEach((_0x2b07da) => _0x3b2c81.push(de(_0x2b07da))),
 _0x3b2c81.sort(T)
 );
}
function de(_0x5eba5d) {
 let _0x118d47 = fe(_0x5eba5d),
 _0x37683e =
 _0x118d47 === "modify"
 ? _0x5eba5d
 : _0x5eba5d.filter((_0x560ab2) => _0x560ab2.kind === _0x118d47),
 _0x13efd7 =
 _0x5eba5d.find((_0x280ef) => {
 var _0x43267a;
 return !((_0x43267a = _0x280ef.tableEdits) != null && _0x43267a.length);
 }) ?? _0x5eba5d[0];
 return {
 ..._0x5eba5d[0],
 kind: _0x118d47,
 anchor: _0x13efd7.anchor,
 endOffset: _0x13efd7.endOffset,
 body: _0x13efd7.body,
 tableRows: y(_0x37683e.flatMap((_0x4764dc) => _0x4764dc.tableRows ?? [])),
 tableColumns: y(
 _0x37683e.flatMap((_0x3088d9) => _0x3088d9.tableColumns ?? []),
 ),
 tableCells: pe(
 _0x37683e.flatMap((_0x386508) => _0x386508.tableCells ?? []),
 ),
 tableEdits: _0x5eba5d.flatMap((_0x566ab4) => _0x566ab4.tableEdits ?? []),
 };
}
function fe(_0xfd26fc) {
 let _0x337f42 = _0xfd26fc.some((_0x21f289) => _0x21f289.kind === "insert"),
 _0x5319d6 = _0xfd26fc.some((_0x2dc9d8) => _0x2dc9d8.kind === "delete");
 return _0x337f42 && !_0x5319d6
 ? "insert"
 : _0x5319d6 && !_0x337f42
 ? "delete"
 : "modify";
}
function y(_0x740b4e) {
 let _0x4161c0 = [...new Set(_0x740b4e)].sort(
 (_0x369497, _0x3bfe88) => _0x369497 - _0x3bfe88,
 );
 return _0x4161c0.length ? _0x4161c0 : undefined;
}
function pe(_0x23a684) {
 let _0x38b826 = new Map();
 _0x23a684.forEach((_0x3ea6af) =>
 _0x38b826.set(_0x3ea6af.row + ":" + _0x3ea6af.column, _0x3ea6af),
 );
 let _0x1680a6 = [..._0x38b826.values()].sort(
 (_0x231286, _0x338ca2) =>
 _0x231286.row - _0x338ca2.row || _0x231286.column - _0x338ca2.column,
 );
 return _0x1680a6.length ? _0x1680a6 : undefined;
}
function me(_0x40deaa) {
 return _0x40deaa.includes("tableSource")
 ? "table"
 : _0x40deaa.includes("blockRanges")
 ? "block-range"
 : _0x40deaa.includes("customRanges")
 ? "custom-range"
 : _0x40deaa.includes("tables")
 ? "table"
 : _0x40deaa.includes("drawings")
 ? "drawing"
 : _0x40deaa.includes("customBlocks")
 ? "custom-block"
 : _0x40deaa.includes("columnGroups")
 ? "column-group"
 : _0x40deaa.includes("paragraphs")
 ? "paragraph"
 : _0x40deaa.includes("sectionBreaks") ||
 _0x40deaa.includes("headers") ||
 _0x40deaa.includes("footers")
 ? "section"
 : null;
}
function he(_0x25bba3, _0x17ab76) {
 let _0x5b5110 = _0x25bba3.indexOf("tableSource"),
 _0x41de9e = _0x5b5110 >= 0 ? _0x25bba3[_0x5b5110 + 1] : undefined;
 return typeof _0x41de9e == "string" ? _0x41de9e : S(_0x17ab76, "tableId");
}
function ge(_0x5f01b4) {
 let _0xe03e2d = _0x5f01b4.indexOf("tableRows"),
 _0x1a0b73 = _0x5f01b4.indexOf("tableColumns"),
 _0x2193c4 = _0x5f01b4.indexOf("tableCells"),
 _0x1da230 = b(_0x5f01b4, _0xe03e2d),
 _0x148e01 = b(_0x5f01b4, _0x1a0b73),
 _0x529b5c = b(_0x5f01b4, _0x2193c4);
 return {
 row: _0x529b5c == null ? _0x1da230 : undefined,
 column: _0x148e01,
 cell:
 _0x1da230 == null || _0x529b5c == null
 ? undefined
 : [{ row: _0x1da230, column: _0x529b5c }],
 };
}
function b(_0x4adc51, _0x1a4a26) {
 let _0x319d57 = _0x1a4a26 >= 0 ? _0x4adc51[_0x1a4a26 + 1] : undefined;
 return typeof _0x319d57 == "number" ? _0x319d57 : undefined;
}
function _e(_0xc3d165) {
 return {
 path: [..._0xc3d165.path],
 previousValue: _0xc3d165.previousValue,
 nextValue: _0xc3d165.nextValue,
 };
}
function ve(_0x221f23, _0x46c733) {
 let _0x45060f = _0x221f23[0],
 _0x200006 = _0x221f23[1];
 return (_0x45060f === "headers" || _0x45060f === "footers") &&
 typeof _0x200006 == "string"
 ? _0x200006
 : _0x46c733;
}
function ye(_0x3e0c80) {
 let _0x21bd4b = _0x3e0c80.path[_0x3e0c80.path["length"] - 1];
 if (_0x21bd4b === "startIndex" || _0x21bd4b === "endIndex")
 return typeof _0x3e0c80.nextValue == "number"
 ? _0x3e0c80.nextValue
 : typeof _0x3e0c80.previousValue == "number"
 ? _0x3e0c80.previousValue
 : undefined;
}
function be(_0x3ad47d, _0xfab8d9) {
 let _0x297559 = _0x3ad47d.indexOf("drawings"),
 _0xe942a1 = _0x297559 >= 0 ? _0x3ad47d[_0x297559 + 1] : undefined;
 return typeof _0xe942a1 == "string" ? _0xe942a1 : S(_0xfab8d9, "drawingId");
}
function x(_0x1ddf2a, _0x36cad9) {
 if (typeof _0x1ddf2a != "object" || !_0x1ddf2a) return;
 let _0x2a6f57 = Reflect.get(_0x1ddf2a, _0x36cad9);
 return typeof _0x2a6f57 == "number" ? _0x2a6f57 : undefined;
}
function S(_0x1f267c, _0x1832eb) {
 if (typeof _0x1f267c != "object" || !_0x1f267c) return;
 let _0x592e2d = Reflect.get(_0x1f267c, _0x1832eb);
 return typeof _0x592e2d == "string" ? _0x592e2d : undefined;
}
function xe(_0x111089) {
 return (
 _0x111089.id === a.RevertRevisionMutation["id"] &&
 "revision" in _0x111089.params &&
 typeof _0x111089.params["revision"] == "number"
 );
}
function Se(_0x2cd7b8) {
 return (
 _0x2cd7b8.id === r.RichTextEditingMutation["id"] &&
 "unitId" in _0x2cd7b8.params &&
 typeof _0x2cd7b8.params["unitId"] == "string" &&
 "actions" in _0x2cd7b8.params &&
 Array.isArray(_0x2cd7b8.params["actions"])
 );
}
function Ce(_0x1d354e, _0x1048c2, _0xba164b, _0x39fb43, _0x3b7ca1) {
 var _0x331044, _0x518bf7, _0x230ff8;
 ((_0x331044 = _0x1d354e.tables) == null ||
 _0x331044.forEach((_0x23b41a) =>
 _0x3b7ca1({
 kind: _0x1048c2,
 category: "table",
 anchor: C(_0xba164b, _0x39fb43 + _0x23b41a.startIndex),
 endOffset: _0x39fb43 + _0x23b41a.endIndex,
 tableId: _0x23b41a.tableId,
 }),
 ),
 (_0x518bf7 = _0x1d354e.customBlocks) == null ||
 _0x518bf7.forEach((_0x1a751e) =>
 _0x3b7ca1({
 kind: _0x1048c2,
 category:
 _0x1a751e.blockType === n.BlockType["DRAWING"]
 ? "drawing"
 : "custom-block",
 anchor: C(_0xba164b, _0x39fb43 + _0x1a751e.startIndex),
 endOffset: _0x39fb43 + _0x1a751e.startIndex + 1,
 blockId: _0x1a751e.blockId,
 drawingId:
 _0x1a751e.blockType === n.BlockType["DRAWING"]
 ? _0x1a751e.blockId
 : undefined,
 }),
 ),
 (_0x230ff8 = _0x1d354e.columnGroups) == null ||
 _0x230ff8.forEach((_0x18a894) =>
 _0x3b7ca1({
 kind: _0x1048c2,
 category: "column-group",
 anchor: C(_0xba164b, _0x39fb43 + _0x18a894.startIndex),
 endOffset: _0x39fb43 + _0x18a894.endIndex + 1,
 columnGroupId: _0x18a894.columnGroupId,
 }),
 ));
}
function we(_0x87bc6d) {
 switch (_0x87bc6d.t) {
 case n.TextXActionType["INSERT"]:
 return "insert";
 case n.TextXActionType["DELETE"]:
 return "delete";
 case n.TextXActionType["RETAIN"]:
 return _0x87bc6d.body ? "modify" : null;
 default:
 return null;
 }
}
function C(_0x5ac7af, _0x5abaf7, _0x65e6c0) {
 return {
 segmentId: _0x5ac7af,
 paragraphId: _0x65e6c0,
 offsetInParagraph: 0,
 absoluteOffset: _0x5abaf7,
 affinity: "forward",
 };
}
function Te(_0x1a79b5, _0x5a501a) {
 if (!_0x5a501a) return _0x1a79b5;
 let _0x310ce7 = [...(_0x5a501a.paragraphs ?? [])].sort(
 (_0x55e960, _0x58f985) => _0x55e960.startIndex - _0x58f985.startIndex,
 ),
 _0x5c8a09 = _0x310ce7.findIndex(
 (_0x4d8130) => _0x4d8130.startIndex >= _0x1a79b5.absoluteOffset,
 ),
 _0x25c725 = _0x5c8a09 >= 0 ? _0x310ce7[_0x5c8a09] : undefined,
 _0xb2782a;
 _0x5c8a09 > 0
 ? (_0xb2782a = _0x310ce7[_0x5c8a09 - 1])
 : _0x5c8a09 < 0 && (_0xb2782a = _0x310ce7[_0x310ce7.length - 1]);
 let _0xcb3c9f = _0xb2782a ? _0xb2782a.startIndex + 1 : 0,
 _0x5f3d27 = [...(_0x5a501a.sectionBreaks ?? [])]
 .sort(
 (_0x56f08e, _0x1b0978) => _0x56f08e.startIndex - _0x1b0978.startIndex,
 )
 .find((_0x4961ad) => _0x4961ad.startIndex >= _0x1a79b5.absoluteOffset);
 return {
 ..._0x1a79b5,
 paragraphId:
 _0x1a79b5.paragraphId ??
 (_0x25c725 == null ? undefined : _0x25c725.paragraphId) ??
 (_0xb2782a == null ? undefined : _0xb2782a.paragraphId),
 previousParagraphId: _0xb2782a == null ? undefined : _0xb2782a.paragraphId,
 nextParagraphId: _0x25c725 == null ? undefined : _0x25c725.paragraphId,
 sectionId:
 _0x1a79b5.sectionId ??
 (_0x5f3d27 == null ? undefined : _0x5f3d27.sectionId),
 offsetInParagraph: Math.max(0, _0x1a79b5.absoluteOffset - _0xcb3c9f),
 };
}
function w(_0x31ac3d, _0x3be4d8) {
 return _0x31ac3d + ":" + _0x3be4d8;
}
function T(_0x3da855, _0x1aeea5) {
 return _0x3da855.anchor["segmentId"] === _0x1aeea5.anchor["segmentId"]
 ? _0x3da855.anchor["absoluteOffset"] === _0x1aeea5.anchor["absoluteOffset"]
 ? _0x3da855.id["localeCompare"](_0x1aeea5.id)
 : _0x3da855.anchor["absoluteOffset"] - _0x1aeea5.anchor["absoluteOffset"]
 : _0x3da855.anchor["segmentId"].localeCompare(
 _0x1aeea5.anchor["segmentId"],
 );
}
let E = class {
 constructor(_0x45716e, _0x1fae81) {
 ((this._gateway = _0x45716e), (this._transformService = _0x1fae81));
 }
 async compare(_0x4aecb4, _0x492147) {
 let _0x188b21 = await this._gateway["fetchChangesets"](
 _0x4aecb4,
 _0x492147,
 ),
 _0x6bd20b = _0x188b21.changesets["flatMap"]((_0x303f58) => {
 let _0x18975b = (0, a.parseProtocolChangeset)(_0x303f58);
 return _0x18975b.mutations["flatMap"]((_0x2a8086) =>
 _0x2a8086.id !== r.RichTextEditingMutation["id"] &&
 _0x2a8086.id !== a.RevertRevisionMutation["id"]
 ? []
 : [
 {
 mutation: _0x2a8086,
 memberId:
 _0x18975b.memberID || _0x18975b.userID || "unknownUser",
 revision: _0x18975b.revision,
 },
 ],
 );
 }),
 _0xb69795 = ae(this._transformAfterLastRevisionBarrier(_0x6bd20b));
 return { comparison: _0x492147, members: _0x188b21.members, ..._0xb69795 };
 }
 _transformAfterLastRevisionBarrier(_0x25ef9a) {
 let _0xb2ec73 = -1;
 _0x25ef9a.forEach((_0x282276, _0x553150) => {
 _0x282276.mutation["id"] === a.RevertRevisionMutation["id"] &&
 (_0xb2ec73 = _0x553150);
 });
 let _0x5b7509 = _0xb2ec73 >= 0 ? _0x25ef9a[_0xb2ec73] : undefined,
 _0x3860cc = _0x25ef9a.slice(_0xb2ec73 + 1),
 _0x3161f6 = _0x3860cc.flatMap((_0x4c77de, _0x4cb35c) =>
 this._transformEntry(_0x4c77de, _0x3860cc.slice(_0x4cb35c + 1)),
 );
 return _0x5b7509 ? [_0x5b7509, ..._0x3161f6] : _0x3161f6;
 }
 _transformEntry(_0x37b03f, _0x4e26f7) {
 let _0x70e055 = [_0x37b03f.mutation];
 return (
 _0x4e26f7.forEach((_0x42369d) => {
 let _0x2da8f3 = this._transformService["transformMutations"](
 _0x70e055,
 [_0x42369d.mutation],
 );
 if (!(0, a.isTransformMutationsSuccess)(_0x2da8f3))
 throw Error(
 "[DocsHistoryDiffService]:\x20Failed\x20to\x20transform\x20document\x20history\x20mutations.",
 );
 _0x70e055 = _0x2da8f3.m1Prime;
 }),
 _0x70e055.map((_0x4eaa83) => ({ ..._0x37b03f, mutation: _0x4eaa83 }))
 );
 }
};
E = p(
 [f(0, (0, n.Inject)(e.HistoryGatewayService)), f(1, a.ITransformService)],
 E,
);
function D(_0x967673) {
 "@babel/helpers - typeof";
 return (
 (D =
 typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
 ? function (_0xdb3c5b) {
 return typeof _0xdb3c5b;
 }
 : function (_0x2eb57a) {
 return _0x2eb57a &&
 typeof Symbol == "function" &&
 _0x2eb57a.constructor === Symbol &&
 _0x2eb57a !== Symbol.prototype
 ? "symbol"
 : typeof _0x2eb57a;
 }),
 D(_0x967673)
 );
}
function O(_0x4dc6b5, _0x2485c6) {
 if (D(_0x4dc6b5) != "object" || !_0x4dc6b5) return _0x4dc6b5;
 var _0x18c0bc = _0x4dc6b5[Symbol.toPrimitive];
 if (_0x18c0bc !== undefined) {
 var _0x312aa3 = _0x18c0bc.call(_0x4dc6b5, _0x2485c6 || "default");
 if (D(_0x312aa3) != "object") return _0x312aa3;
 throw TypeError("@@toPrimitive must return a primitive value.");
 }
 return (_0x2485c6 === "string" ? String : Number)(_0x4dc6b5);
}
function Ee(_0x4de8ff) {
 var _0x1b7d5d = O(_0x4de8ff, "string");
 return D(_0x1b7d5d) == "symbol" ? _0x1b7d5d : _0x1b7d5d + "";
}
function k(_0x50b127, _0x30cfd9, _0x5730c5) {
 return (
 (_0x30cfd9 = Ee(_0x30cfd9)) in _0x50b127
 ? Object.defineProperty(_0x50b127, _0x30cfd9, {
 value: _0x5730c5,
 enumerable: true,
 configurable: true,
 writable: true,
 })
 : (_0x50b127[_0x30cfd9] = _0x5730c5),
 _0x50b127
 );
}
const De = new Set([
 "\x08",
 "\x0a",
 "\x0b",
 "\x0e",
 "\x0f",
 "\x10",
 "\x11",
 "\x12",
 "\x13",
 "\x14",
 "\x15",
 "\x1a",
 "\x1b",
 "\x1c",
 "\x1d",
 "\x1e",
 "\x1f",
 ]),
 Oe = [
 e.UnitComparisonEntityType["PARAGRAPH"],
 e.UnitComparisonEntityType["TEXT_STYLE"],
 e.UnitComparisonEntityType["SECTION"],
 e.UnitComparisonEntityType["BLOCK_RANGE"],
 e.UnitComparisonEntityType["CUSTOM_RANGE"],
 e.UnitComparisonEntityType["TABLE_RANGE"],
 e.UnitComparisonEntityType["CUSTOM_BLOCK"],
 e.UnitComparisonEntityType["COLUMN_GROUP"],
 e.UnitComparisonEntityType["TABLE"],
 e.UnitComparisonEntityType["DRAWING"],
 e.UnitComparisonEntityType["HEADER"],
 e.UnitComparisonEntityType["FOOTER"],
 e.UnitComparisonEntityType["DOCUMENT_STYLE"],
 e.UnitComparisonEntityType["DOCUMENT_SETTING"],
 e.UnitComparisonEntityType["CUSTOM_DECORATION"],
 e.UnitComparisonEntityType["DOC_HYPERLINK"],
 e.UnitComparisonEntityType["DOC_CALLOUT"],
 e.UnitComparisonEntityType["DOC_QUOTE"],
 e.UnitComparisonEntityType["DOC_CHART"],
 e.UnitComparisonEntityType["DOC_CHART_DATA"],
 e.UnitComparisonEntityType["DOC_CODE"],
 e.UnitComparisonEntityType["DOC_LATEX"],
 e.UnitComparisonEntityType["DOC_SHAPE_RESOURCE"],
 e.UnitComparisonEntityType["DOC_TABLE_RESOURCE"],
 ];
var A = class {
 constructor() {
 k(this, "type", n.UniverInstanceType["UNIVER_DOC"]);
 }
 compare(_0x5db99e) {
 let _0x4fc440 = (0, e.asRecord)(_0x5db99e.leftData),
 _0x10d8ea = (0, e.asRecord)(_0x5db99e.rightData),
 _0x3042da = (0, e.asRecord)(
 _0x4fc440 == null ? undefined : _0x4fc440.body,
 ),
 _0x37dc65 = (0, e.asRecord)(
 _0x10d8ea == null ? undefined : _0x10d8ea.body,
 ),
 [_0x18d6e4, _0x3a372a] = N(M(_0x3042da), M(_0x37dc65)),
 _0x55c91b = ke(_0x4fc440, _0x10d8ea);
 return {
 items: [
 ...j(_0x3042da, _0x37dc65, _0x18d6e4, _0x3a372a),
 ...Ae(_0x4fc440, _0x10d8ea),
 ...je(_0x5db99e),
 ..._0x55c91b.items,
 ],
 supportedEntityTypes: Oe,
 productContext: {
 type: n.UniverInstanceType["UNIVER_DOC"],
 paragraphAlignment: [
 ...H(_0x18d6e4, _0x3a372a),
 ..._0x55c91b.alignment,
 ],
 },
 };
 }
};
function ke(_0x409430, _0x5ab28e) {
 let _0x64bfff = [],
 _0x4c7c73 = [];
 for (let _0x2bdadd of ["headers", "footers"]) {
 let _0xd7ef41 =
 (0, e.asRecord)(_0x409430 == null ? undefined : _0x409430[_0x2bdadd]) ??
 {},
 _0x3627b2 =
 (0, e.asRecord)(_0x5ab28e == null ? undefined : _0x5ab28e[_0x2bdadd]) ??
 {};
 for (let _0x48b93b of [
 ...new Set([...Object.keys(_0xd7ef41), ...Object.keys(_0x3627b2)]),
 ].sort()) {
 var _0x215f6a, _0x282615;
 let _0x4eb2a3 = (0, e.asRecord)(
 (_0x215f6a = (0, e.asRecord)(_0xd7ef41[_0x48b93b])) == null
 ? undefined
 : _0x215f6a.body,
 ),
 _0x58ecda = (0, e.asRecord)(
 (_0x282615 = (0, e.asRecord)(_0x3627b2[_0x48b93b])) == null
 ? undefined
 : _0x282615.body,
 ),
 [_0x4770dd, _0x4ace9f] = N(M(_0x4eb2a3), M(_0x58ecda)),
 _0x1b14c5 = [_0x2bdadd, _0x48b93b, "body"],
 _0x48bc9f = _0x2bdadd + ":" + _0x48b93b;
 for (let _0x46a658 of j(_0x4eb2a3, _0x58ecda, _0x4770dd, _0x4ace9f))
 _0x64bfff.push({
 ..._0x46a658,
 id: _0x48bc9f + ":" + _0x46a658.id,
 parentStableId: _0x48bc9f,
 path: [..._0x1b14c5, ..._0x46a658.path],
 locations: {
 left:
 _0x46a658.locations["left"] === null
 ? null
 : {
 ..._0x46a658.locations["left"],
 parentStableId: _0x48bc9f,
 path: [..._0x1b14c5, ..._0x46a658.locations["left"].path],
 },
 right:
 _0x46a658.locations["right"] === null
 ? null
 : {
 ..._0x46a658.locations["right"],
 parentStableId: _0x48bc9f,
 path: [..._0x1b14c5, ..._0x46a658.locations["right"].path],
 },
 },
 });
 _0x4c7c73.push(
 ...H(_0x4770dd, _0x4ace9f).map((_0x33cdd5) => ({
 ..._0x33cdd5,
 segmentPath: _0x1b14c5,
 })),
 );
 }
 }
 return { items: _0x64bfff, alignment: _0x4c7c73 };
}
function j(_0x38dc83, _0x3a3c9c, _0x2daa3e, _0x54e6a9) {
 return [
 ...V(e.UnitComparisonEntityType["PARAGRAPH"], _0x2daa3e, _0x54e6a9),
 ...V(
 e.UnitComparisonEntityType["TEXT_STYLE"],
 P(_0x38dc83, _0x2daa3e),
 P(_0x3a3c9c, _0x54e6a9),
 ),
 ...V(
 e.UnitComparisonEntityType["SECTION"],
 (0, e.arrayComparisonEntries)(
 _0x38dc83 == null ? undefined : _0x38dc83.sectionBreaks,
 "sectionId",
 (0, e.withoutComparisonKeys)("startIndex"),
 ),
 (0, e.arrayComparisonEntries)(
 _0x3a3c9c == null ? undefined : _0x3a3c9c.sectionBreaks,
 "sectionId",
 (0, e.withoutComparisonKeys)("startIndex"),
 ),
 ),
 ...L(
 e.UnitComparisonEntityType["BLOCK_RANGE"],
 _0x38dc83,
 _0x3a3c9c,
 "blockRanges",
 "blockId",
 ),
 ...L(
 e.UnitComparisonEntityType["CUSTOM_RANGE"],
 _0x38dc83,
 _0x3a3c9c,
 "customRanges",
 "rangeId",
 ),
 ...L(
 e.UnitComparisonEntityType["TABLE_RANGE"],
 _0x38dc83,
 _0x3a3c9c,
 "tables",
 "tableId",
 ),
 ...V(
 e.UnitComparisonEntityType["CUSTOM_BLOCK"],
 (0, e.arrayComparisonEntries)(
 _0x38dc83 == null ? undefined : _0x38dc83.customBlocks,
 "blockId",
 (0, e.withoutComparisonKeys)("startIndex"),
 ),
 (0, e.arrayComparisonEntries)(
 _0x3a3c9c == null ? undefined : _0x3a3c9c.customBlocks,
 "blockId",
 (0, e.withoutComparisonKeys)("startIndex"),
 ),
 ),
 ...L(
 e.UnitComparisonEntityType["COLUMN_GROUP"],
 _0x38dc83,
 _0x3a3c9c,
 "columnGroups",
 "columnGroupId",
 ),
 ...z(
 e.UnitComparisonEntityType["CUSTOM_DECORATION"],
 _0x38dc83 == null ? undefined : _0x38dc83.customDecorations,
 _0x3a3c9c == null ? undefined : _0x3a3c9c.customDecorations,
 ),
 ];
}
function Ae(_0x479147, _0x93eecc) {
 return [
 ...R(
 e.UnitComparisonEntityType["TABLE"],
 _0x479147 == null ? undefined : _0x479147.tableSource,
 _0x93eecc == null ? undefined : _0x93eecc.tableSource,
 ),
 ...R(
 e.UnitComparisonEntityType["DRAWING"],
 _0x479147 == null ? undefined : _0x479147.drawings,
 _0x93eecc == null ? undefined : _0x93eecc.drawings,
 ),
 ...R(
 e.UnitComparisonEntityType["HEADER"],
 _0x479147 == null ? undefined : _0x479147.headers,
 _0x93eecc == null ? undefined : _0x93eecc.headers,
 (0, e.withoutComparisonKeys)("body"),
 ),
 ...R(
 e.UnitComparisonEntityType["FOOTER"],
 _0x479147 == null ? undefined : _0x479147.footers,
 _0x93eecc == null ? undefined : _0x93eecc.footers,
 (0, e.withoutComparisonKeys)("body"),
 ),
 ...z(
 e.UnitComparisonEntityType["DOCUMENT_STYLE"],
 _0x479147 == null ? undefined : _0x479147.documentStyle,
 _0x93eecc == null ? undefined : _0x93eecc.documentStyle,
 ),
 ...z(
 e.UnitComparisonEntityType["DOCUMENT_SETTING"],
 _0x479147 == null ? undefined : _0x479147.settings,
 _0x93eecc == null ? undefined : _0x93eecc.settings,
 ),
 ];
}
function je(_0x27a50d) {
 return [
 ...B(
 e.UnitComparisonEntityType["DOC_HYPERLINK"],
 _0x27a50d,
 "DOC_HYPER_LINK_PLUGIN",
 "links",
 ),
 ...B(
 e.UnitComparisonEntityType["DOC_CALLOUT"],
 _0x27a50d,
 "DOC_CALLOUT_PLUGIN",
 "callouts",
 ),
 ...B(
 e.UnitComparisonEntityType["DOC_QUOTE"],
 _0x27a50d,
 "DOC_QUOTE_PLUGIN",
 "quotes",
 ),
 ...B(
 e.UnitComparisonEntityType["DOC_CHART"],
 _0x27a50d,
 "DOC_CHART_PLUGIN",
 "charts",
 ),
 ...B(
 e.UnitComparisonEntityType["DOC_CHART_DATA"],
 _0x27a50d,
 "DOC_CHART_PLUGIN",
 "dataSources",
 ),
 ...B(
 e.UnitComparisonEntityType["DOC_CODE"],
 _0x27a50d,
 "DOC_CODE_PLUGIN",
 "codes",
 ),
 ...B(
 e.UnitComparisonEntityType["DOC_LATEX"],
 _0x27a50d,
 "DOC_LATEX_PLUGIN",
 "formulas",
 ),
 ...B(
 e.UnitComparisonEntityType["DOC_SHAPE_RESOURCE"],
 _0x27a50d,
 "DOC_SHAPE_PLUGIN",
 ),
 ...B(
 e.UnitComparisonEntityType["DOC_TABLE_RESOURCE"],
 _0x27a50d,
 "DOC_TABLE_PLUGIN",
 "tables",
 ),
 ];
}
function M(_0x2b4816) {
 let _0x534778 = Array.isArray(
 _0x2b4816 == null ? undefined : _0x2b4816.paragraphs,
 )
 ? _0x2b4816.paragraphs
 : [],
 _0x444da3 =
 typeof (_0x2b4816 == null ? undefined : _0x2b4816.dataStream) == "string"
 ? _0x2b4816.dataStream
 : "",
 _0x136145 = [];
 (_0x534778.forEach((_0x918b43, _0x37a06b) => {
 let _0x4c2c81 = (0, e.asRecord)(_0x918b43);
 typeof (_0x4c2c81 == null ? undefined : _0x4c2c81.paragraphId) ==
 "string" &&
 typeof _0x4c2c81.startIndex == "number" &&
 _0x136145.push({ paragraph: _0x4c2c81, position: _0x37a06b });
 }),
 _0x136145.sort(
 (_0x147346, _0x55d59e) =>
 _0x147346.paragraph["startIndex"] - _0x55d59e.paragraph["startIndex"],
 ));
 let _0x156cfe = Ne(_0x2b4816, _0x444da3, _0x136145);
 return _0x136145.flatMap(
 ({ paragraph: _0x1b7f84, position: _0x54c615 }, _0x2982d9) => {
 var _0x2b8676;
 let _0x2b3c91 = _0x1b7f84.startIndex;
 if (_0x444da3[_0x2b3c91] === "\x00") return [];
 let _0x41d7e9 =
 (_0x2b8676 = _0x136145[_0x2982d9 - 1]) == null
 ? undefined
 : _0x2b8676.paragraph["startIndex"],
 _0x4bcfb1 = Me(_0x444da3, (_0x41d7e9 ?? -1) + 1, _0x2b3c91),
 _0x320393 =
 _0x156cfe.get(_0x1b7f84.paragraphId) ?? _0x1b7f84.paragraphId,
 _0x4ce1d2 = _0x444da3.slice(_0x4bcfb1, _0x2b3c91);
 return [
 {
 stableId: _0x320393,
 nativeStableId: _0x1b7f84.paragraphId,
 position: _0x54c615,
 ...(_0x4ce1d2.trim()
 ? { displayName: _0x4ce1d2.trim().slice(0, 72) }
 : {}),
 value: {
 ...(0, e.asRecord)(
 (0, e.withoutComparisonKeys)(
 "paragraphId",
 "startIndex",
 )(_0x1b7f84),
 ),
 text: _0x4ce1d2,
 },
 },
 ];
 },
 );
}
function N(_0x5aff5f, _0x546082) {
 let _0x5d7d74 = (_0x10b369) => {
 var _0x4af0fa, _0x336bba;
 return (
 ((_0x4af0fa = /^(table:.*):row:\d+:cell:\d+:paragraph:\d+$/u.exec(
 _0x10b369.stableId,
 )) == null
 ? undefined
 : _0x4af0fa[1]) ??
 ((_0x336bba = /^(column-group:.*):column:\d+:paragraph:\d+$/u.exec(
 _0x10b369.stableId,
 )) == null
 ? undefined
 : _0x336bba[1])
 );
 },
 _0x4589e5 = new Set(_0x5aff5f.map((_0x1c9009) => _0x1c9009.nativeStableId)),
 _0x1747b6 = new Set(_0x546082.map((_0x3727c2) => _0x3727c2.nativeStableId)),
 _0x3347b8 = new Set(
 [..._0x5aff5f, ..._0x546082]
 .filter(
 (_0x56d77e) =>
 _0x56d77e.nativeStableId !== undefined &&
 _0x4589e5.has(_0x56d77e.nativeStableId) &&
 _0x1747b6.has(_0x56d77e.nativeStableId),
 )
 .map(_0x5d7d74)
 .filter((_0x4f9d80) => _0x4f9d80 !== undefined),
 ),
 _0x16b42a = (_0x3396ca) => {
 let _0x3ac7f1 = _0x5d7d74(_0x3396ca);
 return _0x3ac7f1 !== undefined &&
 _0x3347b8.has(_0x3ac7f1) &&
 _0x3396ca.nativeStableId !== undefined
 ? { ..._0x3396ca, stableId: _0x3396ca.nativeStableId }
 : _0x3396ca;
 };
 return [_0x5aff5f.map(_0x16b42a), _0x546082.map(_0x16b42a)];
}
function P(_0x1ef241, _0x5cf2d1) {
 let _0x1d0a8f = (
 Array.isArray(_0x1ef241 == null ? undefined : _0x1ef241.textRuns)
 ? _0x1ef241.textRuns
 : []
 )
 .flatMap((_0x584a3f) => {
 let _0x1681c3 = (0, e.asRecord)(_0x584a3f);
 return typeof (_0x1681c3 == null ? undefined : _0x1681c3.st) !=
 "number" || typeof _0x1681c3.ed != "number"
 ? []
 : [{ run: _0x1681c3, start: _0x1681c3.st, end: _0x1681c3.ed }];
 })
 .sort(
 (_0x3758f0, _0xd0c0eb) =>
 _0x3758f0.start - _0xd0c0eb.start || _0x3758f0.end - _0xd0c0eb.end,
 ),
 _0x2b4a67 = (
 Array.isArray(_0x1ef241 == null ? undefined : _0x1ef241.paragraphs)
 ? _0x1ef241.paragraphs
 : []
 )
 .map(e.asRecord)
 .flatMap((_0x1ac47e) =>
 typeof (_0x1ac47e == null ? undefined : _0x1ac47e.paragraphId) ==
 "string" && typeof _0x1ac47e.startIndex == "number"
 ? [
 {
 nativeStableId: _0x1ac47e.paragraphId,
 end: _0x1ac47e.startIndex,
 },
 ]
 : [],
 )
 .sort((_0x135c04, _0xce6b5c) => _0x135c04.end - _0xce6b5c.end),
 _0x2623bf = new Map(),
 _0x35f0b0 = -1,
 _0x52ceee = 0;
 for (let _0x11ddd2 of _0x2b4a67) {
 let _0x18fce9 = _0x35f0b0 + 1;
 for (
 ;
 _0x52ceee < _0x1d0a8f.length && _0x1d0a8f[_0x52ceee].end <= _0x18fce9;
 )
 _0x52ceee += 1;
 let _0x5e7358 = [];
 for (
 let _0x2b577a = _0x52ceee;
 _0x2b577a < _0x1d0a8f.length;
 _0x2b577a += 1
 ) {
 let _0x319d11 = _0x1d0a8f[_0x2b577a];
 if (_0x319d11.start >= _0x11ddd2.end) break;
 _0x5e7358.push({
 ..._0x319d11.run,
 st: Math.max(_0x319d11.start, _0x18fce9) - _0x18fce9,
 ed: Math.min(_0x319d11.end, _0x11ddd2.end) - _0x18fce9,
 });
 }
 (_0x2623bf.set(_0x11ddd2.nativeStableId, _0x5e7358),
 (_0x35f0b0 = _0x11ddd2.end));
 }
 return _0x5cf2d1.map((_0x2a83e2) => ({
 ..._0x2a83e2,
 value: _0x2623bf.get(_0x2a83e2.nativeStableId ?? _0x2a83e2.stableId) ?? [],
 }));
}
function Me(_0x205596, _0x56b051, _0x3730cc) {
 let _0x2d1824 = _0x56b051;
 for (; _0x2d1824 < _0x3730cc && De.has(_0x205596[_0x2d1824] ?? "");)
 _0x2d1824 += 1;
 return _0x2d1824;
}
function Ne(_0x1cf2b3, _0x7fd1ed, _0x5a74dc) {
 let _0x562e5d = new Map();
 return (
 I(
 F(_0x1cf2b3 == null ? undefined : _0x1cf2b3.tables, "tableId", "table"),
 _0x5a74dc,
 _0x7fd1ed,
 "table",
 _0x562e5d,
 ),
 I(
 F(
 _0x1cf2b3 == null ? undefined : _0x1cf2b3.columnGroups,
 "columnGroupId",
 "column-group",
 ),
 _0x5a74dc,
 _0x7fd1ed,
 "column",
 _0x562e5d,
 ),
 _0x562e5d
 );
}
function F(_0x11f83d, _0x256149, _0x3eb6fc) {
 let _0x55368f = [];
 return (
 (Array.isArray(_0x11f83d) ? _0x11f83d : []).forEach(
 (_0x258245, _0x497168) => {
 let _0x1e367b = (0, e.asRecord)(_0x258245);
 typeof (_0x1e367b == null ? undefined : _0x1e367b.startIndex) ==
 "number" &&
 typeof _0x1e367b.endIndex == "number" &&
 _0x55368f.push({
 start: _0x1e367b.startIndex,
 end: _0x1e367b.endIndex,
 id:
 typeof _0x1e367b[_0x256149] == "string"
 ? _0x1e367b[_0x256149]
 : _0x3eb6fc + "-" + _0x497168,
 });
 },
 ),
 _0x55368f.sort(
 (_0x370fef, _0x437c1e) =>
 _0x370fef.start - _0x437c1e.start || _0x370fef.end - _0x437c1e.end,
 )
 );
}
function I(_0x1071a8, _0x5e92d3, _0x23ee40, _0xe8ae5a, _0x50f0c9) {
 let _0x200242 = 0;
 for (let _0x549fed of _0x1071a8) {
 for (
 ;
 _0x200242 < _0x5e92d3.length &&
 _0x5e92d3[_0x200242].paragraph["startIndex"] <= _0x549fed.start;
 )
 _0x200242 += 1;
 let _0x2dde38 = _0x200242,
 _0x452a89 = _0x549fed.start,
 _0x2e813c = -1,
 _0x48b78f = -1,
 _0x5b31be = 0;
 for (; _0x2dde38 < _0x5e92d3.length;) {
 let _0x5cee75 = _0x5e92d3[_0x2dde38].paragraph;
 if (_0x5cee75.startIndex >= _0x549fed.end) break;
 for (; _0x452a89 < _0x5cee75.startIndex;) {
 let _0x4371af = _0x23ee40[_0x452a89];
 (_0xe8ae5a === "table" && _0x4371af === "\x1b"
 ? ((_0x2e813c += 1), (_0x48b78f = -1))
 : _0xe8ae5a === "table" && _0x4371af === "\x1c"
 ? ((_0x48b78f += 1), (_0x5b31be = 0))
 : _0xe8ae5a === "column" && _0x4371af === "\x13"
 ? ((_0x2e813c += 1), (_0x5b31be = 0))
 : _0x4371af === "\x0d" && (_0x5b31be += 1),
 (_0x452a89 += 1));
 }
 let _0x42be49 = Pe(_0xe8ae5a, _0x2e813c, _0x48b78f, _0x5b31be);
 (_0x42be49 !== undefined &&
 !_0x50f0c9.has(_0x5cee75.paragraphId) &&
 _0x50f0c9.set(
 _0x5cee75.paragraphId,
 (_0xe8ae5a === "table" ? "table" : "column-group") +
 ":" +
 _0x549fed.id +
 ":" +
 _0x42be49,
 ),
 (_0x2dde38 += 1));
 }
 _0x200242 = _0x2dde38;
 }
}
function Pe(_0x3f9a3b, _0x295c6c, _0xe6164d, _0x3e015a) {
 return _0x3f9a3b === "table"
 ? _0x295c6c < 0 || _0xe6164d < 0
 ? undefined
 : "row:" + _0x295c6c + ":cell:" + _0xe6164d + ":paragraph:" + _0x3e015a
 : _0x295c6c < 0
 ? undefined
 : "column:" + _0x295c6c + ":paragraph:" + _0x3e015a;
}
function L(_0x237409, _0x56b4bc, _0x2244a5, _0x6a25cf, _0x159f47) {
 let _0x20f339 = (_0x48981c) => {
 let _0x2b6ead = Array.isArray(
 _0x48981c == null ? undefined : _0x48981c[_0x6a25cf],
 )
 ? _0x48981c[_0x6a25cf]
 : [],
 _0x45f464 =
 typeof (_0x48981c == null ? undefined : _0x48981c.dataStream) ==
 "string"
 ? _0x48981c.dataStream
 : "";
 return (0, e.arrayComparisonEntries)(
 _0x2b6ead,
 _0x159f47,
 (0, e.withoutComparisonKeys)("startIndex", "endIndex"),
 ).map((_0x1a9335) => {
 let _0x386bc2 = (0, e.asRecord)(_0x2b6ead[_0x1a9335.position]),
 _0x4cae36 =
 typeof (_0x386bc2 == null ? undefined : _0x386bc2.startIndex) ==
 "number" && typeof _0x386bc2.endIndex == "number"
 ? Fe(_0x45f464.slice(_0x386bc2.startIndex, _0x386bc2.endIndex + 1))
 : "";
 return _0x4cae36 ? { ..._0x1a9335, displayName: _0x4cae36 } : _0x1a9335;
 });
 };
 return V(_0x237409, _0x20f339(_0x56b4bc), _0x20f339(_0x2244a5));
}
function Fe(_0x57862b) {
 let _0x597b3f = "";
 for (let _0x51496a of _0x57862b) {
 let _0x506d94 = _0x51496a.codePointAt(0);
 if (
 (_0x506d94 <= 31 ||
 (_0x506d94 >= 127 && _0x506d94 <= 159) ||
 /\s/u.test(_0x51496a)
 ? _0x597b3f && !_0x597b3f.endsWith("\x20") && (_0x597b3f += "\x20")
 : (_0x597b3f += _0x51496a),
 _0x597b3f.length >= 72)
 )
 break;
 }
 return _0x597b3f.trim();
}
function R(
 _0x4f7907,
 _0x23835b,
 _0x2de163,
 _0x476500 = (_0x49c1f9) => _0x49c1f9,
) {
 return V(
 _0x4f7907,
 (0, e.recordComparisonEntries)(_0x23835b, undefined, _0x476500),
 (0, e.recordComparisonEntries)(_0x2de163, undefined, _0x476500),
 );
}
function z(_0x159be6, _0x3a98be, _0x2fbba1) {
 return V(
 _0x159be6,
 _0x3a98be === undefined
 ? []
 : [{ stableId: "root", position: 0, value: _0x3a98be }],
 _0x2fbba1 === undefined
 ? []
 : [{ stableId: "root", position: 0, value: _0x2fbba1 }],
 );
}
function B(_0x44dd92, _0xb3611, _0x264495, _0x5ac64b) {
 let _0xed3ac4 = (_0x257b4e) =>
 (0, e.resourceComparisonEntries)(_0x257b4e, _0x264495, _0x5ac64b).map(
 (_0x3e3789) => {
 let _0x459379 = (0, e.asRecord)(_0x3e3789.value),
 _0x298e33 =
 _0x44dd92 === e.UnitComparisonEntityType["DOC_CODE"]
 ? _0x459379 == null
 ? undefined
 : _0x459379.language
 : undefined;
 return _0x3e3789.displayName === undefined &&
 typeof _0x298e33 == "string" &&
 _0x298e33.trim()
 ? { ..._0x3e3789, displayName: _0x298e33.trim().slice(0, 72) }
 : _0x3e3789;
 },
 );
 return V(
 _0x44dd92,
 _0xed3ac4(_0xb3611.leftData),
 _0xed3ac4(_0xb3611.rightData),
 );
}
function V(_0x19d338, _0x409076, _0x1ebb1b) {
 return (0, e.buildSemanticComparisonItems)({
 entityType: _0x19d338,
 left: _0x409076,
 right: _0x1ebb1b,
 });
}
function H(_0x5114ce, _0x2e61a0) {
 return (0, e.alignComparisonIdentities)(
 _0x5114ce.map((_0x2a1f96) => _0x2a1f96.stableId),
 _0x2e61a0.map((_0xf0b8c0) => _0xf0b8c0.stableId),
 ).map((_0x904e16) => {
 let _0x17bceb =
 _0x904e16.leftIndex === null
 ? undefined
 : _0x5114ce[_0x904e16.leftIndex],
 _0x2f8b73 =
 _0x904e16.rightIndex === null
 ? undefined
 : _0x2e61a0[_0x904e16.rightIndex];
 return {
 stableId: (_0x17bceb ?? _0x2f8b73).stableId,
 leftPosition:
 (_0x17bceb == null ? undefined : _0x17bceb.position) ?? null,
 rightPosition:
 (_0x2f8b73 == null ? undefined : _0x2f8b73.position) ?? null,
 leftNativeStableId:
 (_0x17bceb == null ? undefined : _0x17bceb.nativeStableId) ?? null,
 rightNativeStableId:
 (_0x2f8b73 == null ? undefined : _0x2f8b73.nativeStableId) ?? null,
 presence:
 _0x17bceb === undefined
 ? "right"
 : _0x2f8b73 === undefined
 ? "left"
 : "paired",
 };
 });
}
let U = class extends n.Plug in {
 constructor(_0x5541d7 = s, _0x226758, _0x477f54) {
 (super(),
 (this._config = _0x5541d7),
 (this._injector = _0x226758),
 (this._configService = _0x477f54));
 let { ..._0x23a404 } = (0, n.merge)({}, s, this._config);
 this._configService["setConfig"](o, _0x23a404);
 }
 onStarting() {
 ((0, n.registerDependencies)(this._injector, [[E], [m], [A]]),
 this.disposeWithMe(
 this._injector["get"](e.UnitComparisonAdapterRegistryService).register(
 this._injector["get"](A),
 ),
 ),
 this._injector["get"](m));
 }
};
(k(U, "pluginName", "UNIVER_DOCS_HISTORY_PLUGIN"),
 k(U, "packageName", c),
 k(U, "version", l),
 k(U, "type", n.UniverInstanceType["UNIVER_DOC"]),
 (U = p(
 [
 (0, n.DependentOn)(
 t.UniverLicensePlugin,
 e.UniverEditHistoryPlugin,
 r.UniverDocsPlugin,
 ),
 f(1, (0, n.Inject)(n.Injector)),
 f(2, n.IConfigService),
 ],
 U,
 )));
function Ie(_0x105ea2, _0x2ba5d0, _0x15a052) {
 let _0x156022 = n.Tools["deepClone"](_0x105ea2),
 _0x5c85e9 = n.Tools["deepClone"](_0x2ba5d0),
 _0x5a2d2e = ze(_0x15a052);
 return (
 Je(_0x156022, _0x5c85e9),
 new Set(
 _0x5c85e9.map((_0x16e776) => _0x16e776.anchor["segmentId"]),
 ).forEach((_0x3cc23c) => {
 let _0x2c7b2c = Le(_0x156022, _0x3cc23c);
 if (!_0x2c7b2c) return;
 _0x2c7b2c.textRuns ??= [];
 let _0x42727d = _0x5c85e9
 .filter((_0x233600) => _0x233600.anchor["segmentId"] === _0x3cc23c)
 .sort(it),
 _0x475113 = 0;
 _0x42727d.forEach((_0x32144f) => {
 var _0x521991;
 let _0x38ba37 = $(
 _0x32144f.anchor["absoluteOffset"] + _0x475113,
 0,
 _0x2c7b2c.dataStream["length"],
 ),
 _0x3c77fd = Math.max(
 1,
 _0x32144f.endOffset - _0x32144f.anchor["absoluteOffset"],
 );
 if (
 _0x32144f.kind === "delete" &&
 (_0x521991 = _0x32144f.body) != null &&
 _0x521991.dataStream
 ) {
 let _0x4c9f6e = Re(_0x32144f.body, _0x15a052);
 (n.TextX["apply"](_0x2c7b2c, [
 { t: n.TextXActionType["RETAIN"], len: _0x38ba37 },
 {
 t: n.TextXActionType["INSERT"],
 len: _0x4c9f6e.dataStream["length"],
 body: _0x4c9f6e,
 },
 ]),
 (_0x32144f.anchor["absoluteOffset"] = _0x38ba37),
 (_0x32144f.endOffset = _0x38ba37 + _0x4c9f6e.dataStream["length"]),
 (_0x475113 += _0x4c9f6e.dataStream["length"]),
 Y(_0x2c7b2c, _0x32144f, _0x38ba37, _0x5a2d2e.delete));
 return;
 }
 let _0x3cd050 = $(
 _0x38ba37 + _0x3c77fd,
 _0x38ba37,
 _0x2c7b2c.dataStream["length"],
 );
 if (
 _0x32144f.category !== "table" &&
 _0x32144f.category !== "block-range" &&
 _0x32144f.category !== "custom-range"
 ) {
 let _0x44e934 = G(_0x32144f.kind, _0x15a052);
 W(_0x2c7b2c, _0x38ba37, _0x3cd050, _0x44e934);
 }
 (Y(_0x2c7b2c, _0x32144f, _0x38ba37, Be(_0x32144f.kind, _0x5a2d2e)),
 (_0x32144f.anchor["absoluteOffset"] = _0x38ba37),
 (_0x32144f.endOffset = _0x3cd050));
 });
 }),
 Ge(_0x156022, _0x5c85e9, _0x15a052),
 Qe(_0x156022, _0x5c85e9, _0x15a052),
 { snapshot: _0x156022, changes: _0x5c85e9 }
 );
}
function Le(_0x31a5d5, _0x48de15) {
 var _0x3d5605, _0x41d098;
 return _0x48de15
 ? (((_0x3d5605 = _0x31a5d5.headers) == null ||
 (_0x3d5605 = _0x3d5605[_0x48de15]) == null
 ? undefined
 : _0x3d5605.body) ??
 ((_0x41d098 = _0x31a5d5.footers) == null ||
 (_0x41d098 = _0x41d098[_0x48de15]) == null
 ? undefined
 : _0x41d098.body))
 : _0x31a5d5.body;
}
function Re(_0x5e9522, _0x395cc9) {
 let _0x226dfd = n.Tools["deepClone"](_0x5e9522),
 _0x2922d4 = _0x226dfd.dataStream["length"];
 return (
 (_0x226dfd.textRuns = [
 ...(_0x226dfd.textRuns ?? []),
 { st: 0, ed: _0x2922d4, ts: G("delete", _0x395cc9) },
 ]),
 _0x226dfd
 );
}
function W(_0x340447, _0x207d20, _0x210380, _0x50e1f9) {
 let _0x6a2acd = _0x210380 - _0x207d20;
 _0x6a2acd <= 0 ||
 n.TextX["apply"](_0x340447, [
 { t: n.TextXActionType["RETAIN"], len: _0x207d20 },
 {
 t: n.TextXActionType["RETAIN"],
 len: _0x6a2acd,
 body: {
 dataStream: "",
 textRuns: [{ st: 0, ed: _0x6a2acd, ts: _0x50e1f9 }],
 },
 },
 ]);
}
function G(_0x2b9a17, _0x1a01d5) {
 return _0x2b9a17 === "delete"
 ? {
 bg: { rgb: _0x1a01d5.delete["fill"] },
 st: K(_0x1a01d5.delete["stroke"]),
 }
 : _0x2b9a17 === "insert"
 ? {
 bg: { rgb: _0x1a01d5.insert["fill"] },
 ul: K(_0x1a01d5.insert["stroke"]),
 }
 : {
 bg: { rgb: _0x1a01d5.update["fill"] },
 ol: K(_0x1a01d5.update["stroke"]),
 };
}
function K(_0x47b095) {
 return {
 s: n.BooleanNumber["TRUE"],
 c: n.BooleanNumber["FALSE"],
 cl: { rgb: _0x47b095 },
 t: n.TextDecoration["SINGLE"],
 };
}
function q(_0x2d776f, _0x495288) {
 return _0x2d776f === "delete"
 ? _0x495288.delete["fill"]
 : _0x2d776f === "insert"
 ? _0x495288.insert["fill"]
 : _0x495288.update["fill"];
}
function ze(_0x1996fb) {
 return {
 insert: J(_0x1996fb.insert["stroke"]),
 delete: J(_0x1996fb.delete["stroke"]),
 update: J(_0x1996fb.update["stroke"]),
 };
}
function J(_0x24935b) {
 return new n["ColorKit"](_0x24935b).setAlpha(0.12).toRgbString();
}
function Be(_0x361fc8, _0x4e916f) {
 return _0x361fc8 === "insert"
 ? _0x4e916f.insert
 : _0x361fc8 === "delete"
 ? _0x4e916f.delete
 : _0x4e916f.update;
}
function Y(_0x296655, _0xc481bd, _0x15f94e, _0x4fd6c4) {
 _0xc481bd.category !== "text" ||
 !_0xc481bd.text ||
 !Ve(_0xc481bd.text) ||
 [..._0xc481bd.text].forEach((_0x582324, _0x39874e) => {
 _0x582324 === "\x0d" && He(_0x296655, _0x15f94e + _0x39874e, _0x4fd6c4);
 });
}
function Ve(_0x2b0879) {
 return [..._0x2b0879].every((_0x3ff832) => _0x3ff832 === "\x0d");
}
function He(_0xdb4be9, _0x7f72f7, _0x4ac9c6) {
 let _0x508381 = _0xdb4be9.paragraphs ?? [],
 _0x231c3c = _0x508381.findIndex(
 (_0x1c27b9) => _0x1c27b9.startIndex === _0x7f72f7,
 );
 if (_0x231c3c < 0) return;
 let _0x2ea03a = [_0x508381[_0x231c3c + 1], _0x508381[_0x231c3c]].find(
 (_0x47766f) => (_0x47766f ? Ue(_0x508381, _0x47766f) : false),
 );
 _0x2ea03a &&
 (_0x2ea03a.paragraphStyle = {
 ..._0x2ea03a.paragraphStyle,
 shading: { backgroundColor: { rgb: _0x4ac9c6 } },
 });
}
function Ue(_0x3aa032, _0x1f6dbd) {
 let _0x4b7f4c = _0x3aa032.indexOf(_0x1f6dbd);
 return (
 (_0x4b7f4c > 0 ? _0x3aa032[_0x4b7f4c - 1].startIndex + 1 : 0) ===
 _0x1f6dbd.startIndex
 );
}
function We(_0x44a174, _0x2584b6, _0x481311, _0x54a59a) {
 let _0x1d65fb = _0x44a174.paragraphs ?? [],
 _0x3e6a34 = 0;
 _0x1d65fb.forEach((_0x2f948f) => {
 let _0x289be0 = _0x2f948f.startIndex + 1;
 (_0x3e6a34 < _0x481311 &&
 _0x289be0 > _0x2584b6 &&
 (_0x2f948f.paragraphStyle = {
 ..._0x2f948f.paragraphStyle,
 shading: { backgroundColor: { rgb: _0x54a59a } },
 }),
 (_0x3e6a34 = _0x289be0));
 });
}
function Ge(_0x949ee7, _0x58aa61, _0x27c400) {
 _0x58aa61.forEach((_0x2b4a34) => {
 var _0x5c4ea3;
 if (
 _0x2b4a34.category !== "block-range" &&
 _0x2b4a34.category !== "custom-range"
 )
 return;
 let _0x286dfa =
 (_0x5c4ea3 = Z(_0x949ee7, _0x2b4a34.anchor["segmentId"])) == null
 ? undefined
 : _0x5c4ea3.body;
 if (!_0x286dfa) return;
 let _0x553375 = Ke(_0x286dfa, _0x2b4a34);
 if (!_0x553375) return;
 let _0x4439f5 = $(_0x553375.startIndex, 0, _0x286dfa.dataStream["length"]),
 _0x181189 = $(
 _0x553375.endIndex + 1,
 _0x4439f5,
 _0x286dfa.dataStream["length"],
 ),
 _0x5b9baf = q(_0x2b4a34.kind, _0x27c400);
 (W(_0x286dfa, _0x4439f5, _0x181189, G(_0x2b4a34.kind, _0x27c400)),
 _0x2b4a34.category === "block-range" &&
 We(_0x286dfa, _0x4439f5, _0x181189, _0x5b9baf),
 (_0x2b4a34.anchor["absoluteOffset"] = _0x4439f5),
 (_0x2b4a34.endOffset = _0x181189));
 });
}
function Ke(_0x146f28, _0x3b0ddd) {
 var _0x499955, _0xc2e347;
 let _0x3da71e = qe(_0x3b0ddd) ?? -1;
 if (_0x3b0ddd.category === "block-range") {
 var _0x54b7ef, _0x16f6c8;
 return (
 ((_0x54b7ef = _0x146f28.blockRanges) == null
 ? undefined
 : _0x54b7ef.find(
 (_0x15e9f4) => _0x15e9f4.blockId === _0x3b0ddd.blockId,
 )) ??
 ((_0x16f6c8 = _0x146f28.blockRanges) == null
 ? undefined
 : _0x16f6c8[_0x3da71e])
 );
 }
 return (
 ((_0x499955 = _0x146f28.customRanges) == null
 ? undefined
 : _0x499955.find(
 (_0x293ee6) => _0x293ee6.rangeId === _0x3b0ddd.rangeId,
 )) ??
 ((_0xc2e347 = _0x146f28.customRanges) == null
 ? undefined
 : _0xc2e347[_0x3da71e])
 );
}
function qe(_0x45f04f) {
 var _0x10dadf, _0x10d2fe;
 let _0x4dbda9 =
 _0x45f04f.category === "block-range" ? "blockRanges" : "customRanges",
 _0x3796ad =
 ((_0x10dadf = _0x45f04f.structuralPath) == null
 ? undefined
 : _0x10dadf.indexOf(_0x4dbda9)) ?? -1;
 if (_0x3796ad < 0) return;
 let _0x10edfd =
 (_0x10d2fe = _0x45f04f.structuralPath) == null
 ? undefined
 : _0x10d2fe[_0x3796ad + 1];
 return typeof _0x10edfd == "number" ? _0x10edfd : undefined;
}
function Je(_0x161f16, _0x18f1ef) {
 _0x18f1ef.forEach((_0xea478d) => {
 var _0x482a7d;
 if (_0xea478d.category !== "table" || !_0xea478d.tableId) return;
 let _0x8f16bb = Z(_0x161f16, _0xea478d.anchor["segmentId"]);
 _0x8f16bb &&
 ((_0x482a7d = _0xea478d.tableEdits) == null ||
 _0x482a7d.forEach((_0x12bcfc) => {
 _0x12bcfc.nextValue === undefined &&
 _0x12bcfc.previousValue !== undefined &&
 Ye(_0x8f16bb, _0xea478d, _0x12bcfc.path, _0x12bcfc.previousValue);
 }));
 });
}
function Ye(_0xbd61ef, _0xc937b2, _0x1a0a00, _0x5ccd0d) {
 var _0x57a030;
 let _0x3052fb = _0x1a0a00.indexOf("tableSource"),
 _0x69281c = _0x3052fb >= 0 ? _0x1a0a00[_0x3052fb + 1] : undefined;
 if (typeof _0x69281c != "string") return;
 let _0x1e7829 = _0x1a0a00.slice(_0x3052fb + 2);
 if (_0x1e7829.length === 0 && et(_0x5ccd0d)) {
 _0xbd61ef.tableSource ??= {};
 let _0x38038b = _0xbd61ef.tableSource[_0x69281c]
 ? _0x69281c + "-history-" + _0xc937b2.id
 : _0x69281c;
 ((_0xbd61ef.tableSource[_0x38038b] = { ..._0x5ccd0d, tableId: _0x38038b }),
 X(_0xc937b2, _0x69281c, _0x38038b));
 return;
 }
 let _0x19284d =
 (_0x57a030 = _0xbd61ef.tableSource) == null
 ? undefined
 : _0x57a030[_0x69281c];
 if (_0x19284d) {
 if (_0x1e7829[0] === "tableRows") {
 Xe(_0x19284d, _0x1e7829, _0x5ccd0d);
 return;
 }
 _0x1e7829[0] === "tableColumns" && Ze(_0x19284d, _0x1e7829, _0x5ccd0d);
 }
}
function Xe(_0x4eb0b6, _0x5a0c13, _0x4be498) {
 let _0x51bbda = _0x5a0c13[1];
 if (typeof _0x51bbda != "number") return;
 if (_0x5a0c13.length === 2 && tt(_0x4be498)) {
 _0x4eb0b6.tableRows["splice"](_0x51bbda, 0, _0x4be498);
 return;
 }
 let _0x4476a1 = _0x5a0c13[3];
 if (
 _0x5a0c13.length === 4 &&
 _0x5a0c13[2] === "tableCells" &&
 typeof _0x4476a1 == "number" &&
 rt(_0x4be498)
 ) {
 var _0x5e2f90;
 (_0x5e2f90 = _0x4eb0b6.tableRows[_0x51bbda]) == null ||
 _0x5e2f90.tableCells["splice"](_0x4476a1, 0, _0x4be498);
 }
}
function Ze(_0x8fdb75, _0x4a21f5, _0x442a1b) {
 let _0x48b07c = _0x4a21f5[1];
 _0x4a21f5.length === 2 &&
 typeof _0x48b07c == "number" &&
 nt(_0x442a1b) &&
 _0x8fdb75.tableColumns["splice"](_0x48b07c, 0, _0x442a1b);
}
function X(_0x5efa93, _0x228745, _0x119064) {
 var _0x20b81f;
 _0x119064 !== _0x228745 &&
 ((_0x5efa93.tableId = _0x119064),
 (_0x20b81f = _0x5efa93.body) == null ||
 (_0x20b81f = _0x20b81f.tables) == null ||
 _0x20b81f.forEach((_0x448912) => {
 _0x448912.tableId === _0x228745 && (_0x448912.tableId = _0x119064);
 }));
}
function Qe(_0x215727, _0x3beae8, _0x4bc5b0) {
 _0x3beae8.forEach((_0x453be5) => {
 var _0x277295, _0x1a945c;
 if (_0x453be5.category !== "table" || !_0x453be5.tableId) return;
 let _0x237b1a = Z(_0x215727, _0x453be5.anchor["segmentId"]),
 _0x30237e =
 _0x237b1a == null || (_0x277295 = _0x237b1a.tableSource) == null
 ? undefined
 : _0x277295[_0x453be5.tableId],
 _0x20ba19 =
 _0x237b1a == null ||
 (_0x1a945c = _0x237b1a.body) == null ||
 (_0x1a945c = _0x1a945c.tables) == null
 ? undefined
 : _0x1a945c.find(
 (_0x3a33ae) => _0x3a33ae.tableId === _0x453be5.tableId,
 );
 !_0x30237e ||
 !_0x20ba19 ||
 ((_0x453be5.anchor["absoluteOffset"] = _0x20ba19.startIndex),
 (_0x453be5.endOffset = _0x20ba19.endIndex),
 $e(_0x30237e, _0x453be5).forEach((_0x30168a) => {
 _0x30168a.backgroundColor = { rgb: q(_0x453be5.kind, _0x4bc5b0) };
 }));
 });
}
function $e(_0x33cdf8, _0x12cac0) {
 var _0x1c8273, _0xe6ebd7, _0x1fed1a, _0x591186, _0x30b4c4, _0x5635a4;
 if (!(
 ((_0x1c8273 = _0x12cac0.tableRows) != null && _0x1c8273.length) ||
 ((_0xe6ebd7 = _0x12cac0.tableColumns) != null && _0xe6ebd7.length) ||
 ((_0x1fed1a = _0x12cac0.tableCells) != null && _0x1fed1a.length)
 ))
 return _0x33cdf8.tableRows["flatMap"]((_0x594f62) => _0x594f62.tableCells);
 let _0x18988c = new Set();
 return (
 (_0x591186 = _0x12cac0.tableRows) == null ||
 _0x591186.forEach((_0x36ed78) => {
 var _0x5e3d66;
 return (_0x5e3d66 = _0x33cdf8.tableRows[_0x36ed78]) == null
 ? undefined
 : _0x5e3d66.tableCells["forEach"]((_0x462e0e) =>
 _0x18988c.add(_0x462e0e),
 );
 }),
 (_0x30b4c4 = _0x12cac0.tableColumns) == null ||
 _0x30b4c4.forEach((_0x7be94c) => {
 _0x33cdf8.tableRows["forEach"]((_0x476a38) => {
 let _0x4a41d3 = _0x476a38.tableCells[_0x7be94c];
 _0x4a41d3 && _0x18988c.add(_0x4a41d3);
 });
 }),
 (_0x5635a4 = _0x12cac0.tableCells) == null ||
 _0x5635a4.forEach(({ row: _0x2128c8, column: _0x21fb23 }) => {
 var _0x58f5ac;
 let _0x1ee999 =
 (_0x58f5ac = _0x33cdf8.tableRows[_0x2128c8]) == null
 ? undefined
 : _0x58f5ac.tableCells[_0x21fb23];
 _0x1ee999 && _0x18988c.add(_0x1ee999);
 }),
 [..._0x18988c]
 );
}
function Z(_0x14131b, _0x13a7c2) {
 var _0x38f2f6, _0x5465b5;
 return _0x13a7c2
 ? (((_0x38f2f6 = _0x14131b.headers) == null
 ? undefined
 : _0x38f2f6[_0x13a7c2]) ??
 ((_0x5465b5 = _0x14131b.footers) == null
 ? undefined
 : _0x5465b5[_0x13a7c2]))
 : _0x14131b;
}
function et(_0x7ba9a6) {
 return (
 Q(_0x7ba9a6) &&
 typeof Reflect.get(_0x7ba9a6, "tableId") == "string" &&
 Array.isArray(Reflect.get(_0x7ba9a6, "tableRows")) &&
 Array.isArray(Reflect.get(_0x7ba9a6, "tableColumns"))
 );
}
function tt(_0x44bccf) {
 return Q(_0x44bccf) && Array.isArray(Reflect.get(_0x44bccf, "tableCells"));
}
function nt(_0x3befe7) {
 return Q(_0x3befe7) && Q(Reflect.get(_0x3befe7, "size"));
}
function rt(_0x166c38) {
 return Q(_0x166c38);
}
function Q(_0xed0288) {
 return (
 typeof _0xed0288 == "object" && !!_0xed0288 && !Array.isArray(_0xed0288)
 );
}
function it(_0x45a9e1, _0x550c38) {
 return _0x45a9e1.anchor["absoluteOffset"] ===
 _0x550c38.anchor["absoluteOffset"]
 ? _0x45a9e1.kind === "delete" && _0x550c38.kind !== "delete"
 ? -1
 : _0x550c38.kind === "delete" && _0x45a9e1.kind !== "delete"
 ? 1
 : _0x45a9e1.id["localeCompare"](_0x550c38.id)
 : _0x45a9e1.anchor["absoluteOffset"] - _0x550c38.anchor["absoluteOffset"];
}
function $(_0x21445f, _0x6c9283, _0x1433f8) {
 return Math.max(_0x6c9283, Math.min(_0x21445f, _0x1433f8));
}
((exports.DOCS_HISTORY_PLUGIN_CONFIG_KEY = o),
 Object.defineProperty(exports, "DocsHistoryDiffService", {
 enumerable: true,
 get: function () {
 return E;
 },
 }),
 (exports.DocsUnitComparisonAdapter = A),
 Object.defineProperty(exports, "UniverDocsHistoryPlugin", {
 enumerable: true,
 get: function () {
 return U;
 },
 }),
 (exports.createDocHistoryDisplay = Ie),
 (exports.resolveDocHistoryAnchors = oe));
