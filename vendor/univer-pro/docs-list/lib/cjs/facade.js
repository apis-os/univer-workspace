Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/docs-list"),
  t = require("@univerjs/core"),
  n = require("@univerjs/core/facade"),
  r = require("@univerjs/docs/facade");
var i = class extends n.FEnum {
  get DocsListSelectionMode() {
    return e.DocsListSelectionMode;
  }
  get ListGlyphType() {
    return t.ListGlyphType;
  }
};
n.FEnum["extend"](i);
function a(_0x155485) {
  let _0x4bd6c6 = _0x155485.body,
    _0x221a30 = (_0x4bd6c6 == null ? undefined : _0x4bd6c6.paragraphs) ?? [],
    _0x479580 = (_0x4bd6c6 == null ? undefined : _0x4bd6c6.dataStream) ?? "",
    _0x44d30b = _0x4bd6c6
      ? (0, t.getParagraphContentStartOffsets)(_0x4bd6c6)
      : new Map();
  return _0x221a30
    .filter((_0x48f794) => !!_0x48f794.bullet)
    .map((_0x527629) => l(_0x155485, _0x479580, _0x527629, _0x44d30b));
}
function o(_0x5389fd, _0x3f0895) {
  var _0x599ee2 = _0x3d3e53,
    _0x94e504;
  return (
    ((_0x94e504 = _0x5389fd.lists) == null
      ? undefined
      : _0x94e504[_0x3f0895]) ?? t[_0x599ee2(498)][_0x3f0895]
  );
}
function s(_0x158225, _0x5392a6) {
  var _0x867c47 = _0x3d3e53,
    _0x4e3b98;
  let _0x30de94 = _0x5392a6[_0x867c47(502)];
  if (_0x30de94)
    return (_0x4e3b98 = o(_0x158225, _0x30de94.listType)) == null ||
      (_0x4e3b98 = _0x4e3b98[_0x867c47(430)]) == null
      ? undefined
      : _0x4e3b98[_0x30de94[_0x867c47(430)]];
}
function c(_0x369b4a, _0x1b2f31) {
  let _0x49d894 = _0x369b4a.body,
    _0x5020b6 = (_0x49d894 == null ? undefined : _0x49d894.paragraphs) ?? [];
  if (!_0x49d894) return;
  let _0x2ea3db = (0, t.getParagraphContentStartOffsets)(_0x49d894);
  return _0x5020b6.find(
    (_0x2adb54) =>
      (_0x2ea3db.get(_0x2adb54.startIndex) ?? 0) <= _0x1b2f31 &&
      _0x1b2f31 <= _0x2adb54.startIndex,
  );
}
function l(_0x3b7f95, _0xd4da64, _0x4a8c32, _0x49806b) {
  let _0x1380bc = _0x4a8c32.bullet,
    _0x13d881 = s(_0x3b7f95, _0x4a8c32),
    _0xa1b5da =
      _0x49806b.get(_0x4a8c32.startIndex) ??
      (_0x3b7f95.body
        ? (0, t.getParagraphContentStartOffset)(_0x3b7f95.body, _0x4a8c32)
        : 0);
  return {
    endOffset: _0x4a8c32.startIndex,
    glyphFormat: _0x13d881 == null ? undefined : _0x13d881.glyphFormat,
    glyphSymbol: _0x13d881 == null ? undefined : _0x13d881.glyphSymbol,
    glyphType: _0x13d881 == null ? undefined : _0x13d881.glyphType,
    listId: _0x1380bc.listId,
    listType: _0x1380bc.listType,
    nestingLevel: _0x1380bc.nestingLevel,
    ordered: !!(
      _0x13d881 &&
      _0x13d881.glyphType !== t.ListGlyphType["BULLET"] &&
      !_0x13d881.glyphSymbol
    ),
    paragraphStartIndex: _0x4a8c32.startIndex,
    startNumber: _0x13d881 == null ? undefined : _0x13d881.startNumber,
    startOffset: _0xa1b5da,
    text: u(_0xd4da64.slice(_0xa1b5da, _0x4a8c32.startIndex)),
  };
}
function u(_0x143530) {
  return Array.from(_0x143530)
    .filter(
      (_0x581331) => _0x581331 !== t.DataStreamTreeTokenType["SECTION_BREAK"],
    )
    .join("");
}
function d(_0x354062) {
  "@babel/helpers - typeof";
  return (
    (d =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x49bc78) {
            return typeof _0x49bc78;
          }
        : function (_0x40f823) {
            return _0x40f823 &&
              typeof Symbol == "function" &&
              _0x40f823.constructor === Symbol &&
              _0x40f823 !== Symbol.prototype
              ? "symbol"
              : typeof _0x40f823;
          }),
    d(_0x354062)
  );
}
function f(_0x522d1d, _0x3d24d0) {
  if (d(_0x522d1d) != "object" || !_0x522d1d) return _0x522d1d;
  var _0x27889d = _0x522d1d[Symbol.toPrimitive];
  if (_0x27889d !== undefined) {
    var _0x130c67 = _0x27889d.call(_0x522d1d, _0x3d24d0 || "default");
    if (d(_0x130c67) != "object") return _0x130c67;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0x3d24d0 === "string" ? String : Number)(_0x522d1d);
}
function p(_0x42ab40) {
  var _0x2c26a2 = _0x3d3e53,
    _0x58327d = f(_0x42ab40, _0x2c26a2(440));
  return d(_0x58327d) == _0x2c26a2(405) ? _0x58327d : _0x58327d + "";
}
function m(_0x274661, _0xe45bdd, _0x37447d) {
  return (
    (_0xe45bdd = p(_0xe45bdd)) in _0x274661
      ? Object.defineProperty(_0x274661, _0xe45bdd, {
          value: _0x37447d,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0x274661[_0xe45bdd] = _0x37447d),
    _0x274661
  );
}
var h = class {
    constructor(_0x4e1807, _0x438756, _0xe9134f = "", _0x1d26d4) {
      ((this._document = _0x4e1807),
        (this._paragraphStartIndex = _0x438756),
        (this._segmentId = _0xe9134f),
        (this._injector = _0x1d26d4),
        m(this, "_unitId", undefined),
        (this._unitId = this._document["getId"]()));
    }
    getParagraphStartIndex() {
      return this._paragraphStartIndex;
    }
    getSegmentId() {
      return this._segmentId;
    }
    describe() {
      return this._info();
    }
    getText() {
      var _0xba7137 = _0x3d3e53,
        _0x47c0c6;
      return (
        ((_0x47c0c6 = this[_0xba7137(496)]()) == null
          ? undefined
          : _0x47c0c6[_0xba7137(441)]) ?? ""
      );
    }
    isOrdered() {
      var _0x42daf8 = _0x3d3e53,
        _0x39451a;
      return (
        ((_0x39451a = this._info()) == null
          ? undefined
          : _0x39451a[_0x42daf8(506)]) ?? false
      );
    }
    isUnordered() {
      let _0x2c5598 = this._info();
      return _0x2c5598 ? !_0x2c5598.ordered : false;
    }
    select(_0x4500a8 = e.DocsListSelectionMode["Item"]) {
      return this._injector["get"](t.ICommandService).syncExecuteCommand(
        e.DocsListSelectCommand["id"],
        {
          paragraphStartIndex: this._paragraphStartIndex,
          segmentId: this._segmentId,
          unitId: this._unitId,
          mode: _0x4500a8,
        },
      );
    }
    setGlyphType(_0x587050, _0x34a613 = {}) {
      return this._injector["get"](t.ICommandService).syncExecuteCommand(
        e.DocsListSetGlyphTypeCommand["id"],
        {
          ..._0x34a613,
          glyphType: _0x587050,
          paragraphStartIndex: this._paragraphStartIndex,
          segmentId: this._segmentId,
          unitId: this._unitId,
        },
      );
    }
    setGlyphSymbol(_0x14dce2, _0x1dbf98 = {}) {
      return this._injector["get"](t.ICommandService).syncExecuteCommand(
        e.DocsListSetGlyphSymbolCommand["id"],
        {
          ..._0x1dbf98,
          symbol: _0x14dce2,
          paragraphStartIndex: this._paragraphStartIndex,
          segmentId: this._segmentId,
          unitId: this._unitId,
        },
      );
    }
    setPrefixSuffix(_0x363d41, _0x488544, _0x3b242d = {}) {
      return this._injector["get"](t.ICommandService).syncExecuteCommand(
        e.DocsListSetPrefixSuffixCommand["id"],
        {
          ..._0x3b242d,
          prefix: _0x363d41,
          suffix: _0x488544,
          paragraphStartIndex: this._paragraphStartIndex,
          segmentId: this._segmentId,
          unitId: this._unitId,
        },
      );
    }
    setStartNumber(_0x1872cc, _0x246726 = {}) {
      return this._injector["get"](t.ICommandService).syncExecuteCommand(
        e.DocsListSetStartNumberCommand["id"],
        {
          ..._0x246726,
          startNumber: _0x1872cc,
          paragraphStartIndex: this._paragraphStartIndex,
          segmentId: this._segmentId,
          unitId: this._unitId,
        },
      );
    }
    continueNumbering() {
      return this.setStartNumber(1, { restartFromPrevious: true });
    }
    promote(_0x530f07 = {}) {
      return this._injector["get"](t.ICommandService).syncExecuteCommand(
        e.DocsListPromoteCommand["id"],
        {
          ..._0x530f07,
          paragraphStartIndex: this._paragraphStartIndex,
          segmentId: this._segmentId,
          unitId: this._unitId,
        },
      );
    }
    demote(_0x2f06b2 = {}) {
      return this._injector["get"](t.ICommandService).syncExecuteCommand(
        e.DocsListDemoteCommand["id"],
        {
          ..._0x2f06b2,
          paragraphStartIndex: this._paragraphStartIndex,
          segmentId: this._segmentId,
          unitId: this._unitId,
        },
      );
    }
    _info() {
      return (
        a(
          this._document["getDocumentDataModel"](this._segmentId).getSnapshot(),
        ).find(
          (_0x14d9cf) =>
            _0x14d9cf.paragraphStartIndex === this._paragraphStartIndex,
        ) ?? null
      );
    }
  },
  g = class {
    constructor(_0x1673ac, _0x338eff, _0x46a143 = "", _0x3af7ef) {
      ((this._document = _0x1673ac),
        (this._listId = _0x338eff),
        (this._segmentId = _0x46a143),
        (this._injector = _0x3af7ef));
    }
    getId() {
      return this._listId;
    }
    getSegmentId() {
      return this._segmentId;
    }
    getItems() {
      return this._getListItemInfos().map((_0x120da1) =>
        this._injector["createInstance"](
          h,
          this._document,
          _0x120da1.paragraphStartIndex,
          this._segmentId,
          this._injector,
        ),
      );
    }
    describe() {
      let _0x17557d = this._getListItemInfos();
      return {
        itemCount: _0x17557d.length,
        items: _0x17557d,
        listId: this._listId,
      };
    }
    hasOrderedItems() {
      return this._getListItemInfos().some((_0x2edde9) => _0x2edde9.ordered);
    }
    hasUnorderedItems() {
      return this._getListItemInfos().some((_0x4fc91b) => !_0x4fc91b.ordered);
    }
    isMixed() {
      return this.hasOrderedItems() && this.hasUnorderedItems();
    }
    setGlyphType(_0x1c454f) {
      var _0x2bad5a = _0x3d3e53,
        _0x1ad1cd;
      return (
        ((_0x1ad1cd = this[_0x2bad5a(488)]()) == null
          ? undefined
          : _0x1ad1cd.setGlyphType(_0x1c454f, {
              mode: e[_0x2bad5a(416)][_0x2bad5a(495)],
            })) ?? false
      );
    }
    setGlyphSymbol(_0x4ea96b) {
      var _0x54ec15 = _0x3d3e53,
        _0x222138;
      return (
        ((_0x222138 = this[_0x54ec15(488)]()) == null
          ? undefined
          : _0x222138[_0x54ec15(497)](_0x4ea96b, {
              mode: e.DocsListSelectionMode[_0x54ec15(495)],
            })) ?? false
      );
    }
    setPrefixSuffix(_0x530d4e, _0x583f77) {
      var _0x428cd8 = _0x3d3e53,
        _0x1c154a;
      return (
        ((_0x1c154a = this._firstItem()) == null
          ? undefined
          : _0x1c154a[_0x428cd8(418)](_0x530d4e, _0x583f77, {
              mode: e[_0x428cd8(416)].List,
            })) ?? false
      );
    }
    setStartNumber(_0x53d1d4) {
      var _0x50ae4e = _0x3d3e53,
        _0x3ddaee;
      return (
        ((_0x3ddaee = this[_0x50ae4e(488)]()) == null
          ? undefined
          : _0x3ddaee[_0x50ae4e(457)](_0x53d1d4, {
              mode: e[_0x50ae4e(416)][_0x50ae4e(495)],
            })) ?? false
      );
    }
    promote() {
      var _0x51f983 = _0x3d3e53,
        _0x5c0c45;
      return (
        ((_0x5c0c45 = this[_0x51f983(488)]()) == null
          ? undefined
          : _0x5c0c45[_0x51f983(490)]({
              mode: e.DocsListSelectionMode[_0x51f983(495)],
            })) ?? false
      );
    }
    demote() {
      var _0x4ebaa9 = _0x3d3e53,
        _0x4a9775;
      return (
        ((_0x4a9775 = this[_0x4ebaa9(488)]()) == null
          ? undefined
          : _0x4a9775.demote({ mode: e[_0x4ebaa9(416)].List })) ?? false
      );
    }
    _getListItemInfos() {
      return a(
        this._document["getDocumentDataModel"](this._segmentId).getSnapshot(),
      ).filter((_0x310d93) => _0x310d93.listId === this._listId);
    }
    _firstItem() {
      return this.getItems()[0] ?? null;
    }
  },
  _ = class extends r.FDocument {
    getLists(_0x3df07a = "") {
      let _0x5ce42a = this.describeListItems(_0x3df07a);
      return Array.from(
        new Set(_0x5ce42a.map((_0x1b6fa3) => _0x1b6fa3.listId)),
      ).map((_0xee3394) => this._createFDocumentList(_0xee3394, _0x3df07a));
    }
    getList(_0x239cb9, _0x1ba257 = "") {
      return this.describeListItems(_0x1ba257).some(
        (_0x357a4d) => _0x357a4d.listId === _0x239cb9,
      )
        ? this._createFDocumentList(_0x239cb9, _0x1ba257)
        : null;
    }
    getListItems(_0x34ba22 = "") {
      return this.describeListItems(_0x34ba22).map((_0x78135e) =>
        this._createFDocumentListItem(_0x78135e.paragraphStartIndex, _0x34ba22),
      );
    }
    getListItem(_0x465cc8, _0x4acd03 = "") {
      return this.describeListItems(_0x4acd03).some(
        (_0x24fdd5) => _0x24fdd5.paragraphStartIndex === _0x465cc8,
      )
        ? this._createFDocumentListItem(_0x465cc8, _0x4acd03)
        : null;
    }
    getListItemAt(_0x40b169, _0x610975 = "") {
      let _0x3a4144 = c(
        this.getDocumentDataModel(_0x610975).getSnapshot(),
        _0x40b169,
      );
      return _0x3a4144 != null && _0x3a4144.bullet
        ? this._createFDocumentListItem(_0x3a4144.startIndex, _0x610975)
        : null;
    }
    findListItemByText(_0xd1d4db, _0x155f51 = "") {
      return this.findListItems(_0xd1d4db, _0x155f51)[0] ?? null;
    }
    findListItems(_0x3c5a73, _0xfc1a5b = "") {
      let _0x2956bd =
        typeof _0x3c5a73 == "string" ? { text: _0x3c5a73 } : _0x3c5a73;
      return this.getListItems(_0xfc1a5b).filter((_0x16b6a3) => {
        let _0x3d92c4 = _0x16b6a3.describe();
        return !(
          !_0x3d92c4 ||
          (_0x2956bd.listId && _0x3d92c4.listId !== _0x2956bd.listId) ||
          (_0x2956bd.paragraphStartIndex != null &&
            _0x3d92c4.paragraphStartIndex !== _0x2956bd.paragraphStartIndex) ||
          (_0x2956bd.nestingLevel != null &&
            _0x3d92c4.nestingLevel !== _0x2956bd.nestingLevel) ||
          (_0x2956bd.text && !_0x3d92c4.text["includes"](_0x2956bd.text))
        );
      });
    }
    describeListItems(_0x450185 = "") {
      return a(this.getDocumentDataModel(_0x450185).getSnapshot());
    }
    insertList(_0x2b5e2b = {}, _0x184ccb = {}) {
      let _0x321be3 = this._injector["get"](t.ICommandService),
        _0x4331f1 = (0, r.isParagraphFacade)(_0x2b5e2b)
          ? {
              ..._0x184ccb,
              ..._0x2b5e2b.getRange(),
              segmentId: _0x2b5e2b.getSegmentId(),
            }
          : _0x2b5e2b,
        _0xe65092 = _0x4331f1.listId ?? (0, t.generateRandomId)(6),
        _0x4caefd = _0x4331f1.segmentId ?? "";
      return _0x321be3.syncExecuteCommand(e.DocsListInsertCommand["id"], {
        ..._0x4331f1,
        listType: _0x4331f1.listType ?? t.PresetListType["BULLET_LIST"],
        listId: _0xe65092,
        segmentId: _0x4caefd,
        unitId: this.getId(),
      })
        ? this.getList(_0xe65092, _0x4caefd)
        : null;
    }
    setBullet(_0x1b86ed, _0x5a89f2 = {}) {
      return this.insertList(_0x1b86ed, {
        ..._0x5a89f2,
        listType: t.PresetListType["BULLET_LIST"],
      });
    }
    setOrderedList(_0x3a39ee, _0x57e6d6 = {}) {
      return this.insertList(_0x3a39ee, {
        ..._0x57e6d6,
        listType: t.PresetListType["ORDER_LIST"],
      });
    }
    _createFDocumentList(_0x33c68d, _0x3b9296 = "") {
      return this._injector["createInstance"](
        g,
        this,
        _0x33c68d,
        _0x3b9296,
        this._injector,
      );
    }
    _createFDocumentListItem(_0x2d99fd, _0x16e687 = "") {
      return this._injector["createInstance"](
        h,
        this,
        _0x2d99fd,
        _0x16e687,
        this._injector,
      );
    }
  };
(r.FDocument["extend"](_),
  (exports.FDocumentList = g),
  (exports.FDocumentListItem = h));
