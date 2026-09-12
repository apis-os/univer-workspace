Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let e = require("@univerjs-pro/slides-table"),
  t = require("@univerjs/core"),
  n = require("@univerjs-pro/boards"),
  r = require("@univerjs-pro/license");
const i = {
    id: "board.mutation.set-table",
    type: t.CommandType["MUTATION"],
    handler: (_0x100b57, _0x5216b7) => {
      var _0x3ec76c;
      if (
        !(_0x5216b7 != null && _0x5216b7.unitId) ||
        !((_0x3ec76c = _0x5216b7.table) != null && _0x3ec76c.id)
      )
        return false;
      let _0x2c7ea4 = _0x100b57.get(e.SlideTableResourceService),
        _0x22d5c6 = _0x100b57.get(e.SlideTableModelService);
      return (
        _0x2c7ea4.setTable(_0x5216b7.unitId, _0x5216b7.table, _0x5216b7.theme),
        _0x22d5c6.notifyTableChanged(_0x5216b7.unitId, _0x5216b7.table["id"]),
        true
      );
    },
  },
  a = {
    id: "board.command.update-table",
    type: t.CommandType["COMMAND"],
    handler: (_0x488400, _0x482b95) => {
      if (!_0x482b95) return false;
      let _0x3c7dd3 = _0x488400.get(e.SlideTableResourceService),
        { unitId: _0x36265f, tableId: _0x12b25c, patch: _0x5e62cc } = _0x482b95,
        _0x502955 = _0x3c7dd3.getTable(_0x36265f, _0x12b25c);
      if (!_0x502955) return false;
      let _0x5c268e = _0x488400.get(t.ICommandService),
        _0x5e3df6 = _0x488400.get(t.IUndoRedoService),
        _0x576f72 = _0x502955.themeId
          ? _0x3c7dd3.getTheme(_0x36265f, _0x502955.themeId)
          : undefined,
        _0x5ce129 = _0x576f72,
        _0x1534f6 = { ..._0x5e62cc },
        _0x2e3e17 = (0, e.hasSlideTableStyleChanged)(
          _0x502955.styleId,
          _0x5e62cc.styleId,
        );
      _0x2e3e17 &&
        ((_0x5ce129 = undefined),
        (_0x1534f6.themeId = null),
        typeof _0x5e62cc.styleId == "string" &&
          ((_0x5ce129 = o(
            _0x3c7dd3,
            _0x488400.get(t.ThemeService),
            _0x36265f,
            _0x502955,
            _0x5e62cc.styleId,
          )),
          _0x5ce129 && (_0x1534f6.themeId = _0x5ce129.id)));
      let _0x2f91fb = {
          unitId: _0x36265f,
          table: (0, e.buildUpdatedSlideTableSnapshot)(_0x502955, _0x1534f6),
        },
        _0x18c0d9 = { unitId: _0x36265f, table: _0x502955 };
      return (
        _0x2e3e17 && _0x5ce129 && (_0x2f91fb.theme = _0x5ce129),
        _0x2e3e17 && _0x576f72 && (_0x18c0d9.theme = _0x576f72),
        _0x5c268e.syncExecuteCommand(i.id, _0x2f91fb)
          ? (_0x5e3df6.pushUndoRedo({
              unitID: _0x36265f,
              undoMutations: [{ id: i.id, params: _0x18c0d9 }],
              redoMutations: [{ id: i.id, params: _0x2f91fb }],
            }),
            true)
          : false
      );
    },
  };
function o(_0x3139c5, _0x10117d, _0x2f2a63, _0x51ad2a, _0x50f30a) {
  let _0x2a5d9c = _0x3139c5.getTheme(_0x2f2a63, _0x50f30a);
  return _0x2a5d9c
    ? (0, e.freezeSlideTableTheme)(_0x51ad2a.id, _0x2a5d9c)
    : (0, e.buildFrozenSlideTableTheme)(
        _0x51ad2a.id,
        _0x50f30a,
        (0, e.resolveSlideTableThemePalette)((_0xecaea9) =>
          _0x10117d.getColorFromTheme(_0xecaea9),
        ),
      );
}
const s = {
    id: "board.command.delete-table-columns",
    type: t.CommandType["COMMAND"],
    handler: (_0x328094, _0x4b60d0) => {
      if (!_0x4b60d0) return false;
      let {
          unitId: _0x5e0ab6,
          tableId: _0x2333ae,
          startColumn: _0x51d6b0,
          endColumn: _0x32c3bb,
        } = _0x4b60d0,
        _0x4b7bfa = _0x328094
          .get(e.SlideTableResourceService)
          .getTable(_0x5e0ab6, _0x2333ae);
      if (!_0x4b7bfa) return false;
      let _0x1e5b1a = (0, e.deleteSlideTableColumns)(
        _0x4b7bfa,
        _0x51d6b0,
        _0x32c3bb,
      );
      return !!_0x328094
        .get(t.ICommandService)
        .syncExecuteCommand(a.id, {
          unitId: _0x5e0ab6,
          tableId: _0x2333ae,
          patch: { columns: _0x1e5b1a.columns, rows: _0x1e5b1a.rows },
        });
    },
  },
  c = {
    id: "board.command.delete-table-rows",
    type: t.CommandType["COMMAND"],
    handler: (_0x3a2137, _0x24f2b1) => {
      if (!_0x24f2b1) return false;
      let {
          unitId: _0x2dc80b,
          tableId: _0x50d7da,
          startRow: _0x5809e0,
          endRow: _0x1cf7af,
        } = _0x24f2b1,
        _0x3b310e = _0x3a2137
          .get(e.SlideTableResourceService)
          .getTable(_0x2dc80b, _0x50d7da);
      if (!_0x3b310e) return false;
      let _0x35bc11 = (0, e.deleteSlideTableRows)(
        _0x3b310e,
        _0x5809e0,
        _0x1cf7af,
      );
      return !!_0x3a2137
        .get(t.ICommandService)
        .syncExecuteCommand(a.id, {
          unitId: _0x2dc80b,
          tableId: _0x50d7da,
          patch: { rows: _0x35bc11.rows },
        });
    },
  };
function l(_0x28a524, _0x557047, _0x378f2e, _0xeed3a, _0x23b5a5) {
  let _0x4e116d = u(_0x28a524, _0x557047);
  if (
    !_0x4e116d ||
    _0x4e116d.element["type"] !== n.BoardElementType["Table"] ||
    _0x4e116d.element["tableId"] !== _0x557047.tableId
  )
    return null;
  let _0x1a28f7 = _0x4e116d.element,
    _0x38aa93 = _0x4e116d.transform ?? d(_0x1a28f7.transform),
    _0x5cb2df =
      (_0x38aa93 == null ? undefined : _0x38aa93.width) ??
      _0x1a28f7.transform["width"] ??
      0,
    _0x57add8 =
      (_0x38aa93 == null ? undefined : _0x38aa93.height) ??
      _0x1a28f7.transform["height"] ??
      0,
    _0x1dd53a = (0, e.resolveSlideTableScaledInsertSizeDelta)(
      _0x378f2e,
      _0xeed3a,
      _0x23b5a5 === "row" ? _0x57add8 : _0x5cb2df,
      _0x23b5a5,
    );
  if (_0x1dd53a <= 0) return null;
  let _0x390da9 = {
      ...t.Tools["deepClone"](_0x1a28f7),
      transform: {
        ..._0x1a28f7.transform,
        width:
          _0x23b5a5 === "column"
            ? (_0x1a28f7.transform["width"] ?? _0x5cb2df) + _0x1dd53a
            : _0x1a28f7.transform["width"],
        height:
          _0x23b5a5 === "row"
            ? (_0x1a28f7.transform["height"] ?? _0x57add8) + _0x1dd53a
            : _0x1a28f7.transform["height"],
      },
    },
    _0x508f7c = {
      ..._0x38aa93,
      width: _0x23b5a5 === "column" ? _0x5cb2df + _0x1dd53a : _0x5cb2df,
      height: _0x23b5a5 === "row" ? _0x57add8 + _0x1dd53a : _0x57add8,
    };
  return {
    redoMutation: {
      id: n.UpdateBoardElementMutation["id"],
      params: {
        unitId: _0x4e116d.unitId,
        subUnitId: _0x4e116d.subUnitId,
        elementId: _0x4e116d.elementId,
        element: _0x390da9,
        transform: _0x508f7c,
      },
    },
    undoMutation: {
      id: n.UpdateBoardElementMutation["id"],
      params: {
        unitId: _0x4e116d.unitId,
        subUnitId: _0x4e116d.subUnitId,
        elementId: _0x4e116d.elementId,
        element: _0x1a28f7,
        transform: _0x4e116d.transform ?? d(_0x1a28f7.transform),
      },
    },
  };
}
function u(_0x3a1a03, _0x4e22b3) {
  let _0x1d4dcd = _0x3a1a03.get(n.IBoardElementService);
  if (_0x4e22b3.subUnitId && _0x4e22b3.elementId)
    return (
      _0x1d4dcd.getElementById(
        _0x4e22b3.unitId,
        _0x4e22b3.subUnitId,
        _0x4e22b3.elementId,
      ) ?? null
    );
  let _0x25443f = _0x1d4dcd.getElementDataForUnit(_0x4e22b3.unitId);
  for (let [_0x20b445, _0x5c7833] of Object.entries(_0x25443f)) {
    let _0x39439c = Object.values(_0x5c7833.data).find(
      (_0x54976a) =>
        _0x54976a.element["type"] === n.BoardElementType["Table"] &&
        _0x54976a.element["tableId"] === _0x4e22b3.tableId &&
        _0x54976a.unitId === _0x4e22b3.unitId &&
        _0x54976a.subUnitId === _0x20b445,
    );
    if (_0x39439c) return _0x39439c;
  }
  return null;
}
function d(_0x3f3978) {
  return {
    left: _0x3f3978.left ?? 0,
    top: _0x3f3978.top ?? 0,
    width: _0x3f3978.width ?? 0,
    height: _0x3f3978.height ?? 0,
    angle: _0x3f3978.rotation ?? 0,
    flipX: _0x3f3978.flipX,
    flipY: _0x3f3978.flipY,
  };
}
const f = {
  id: "board.command.insert-table-columns",
  type: t.CommandType["COMMAND"],
  handler: (_0x649c36, _0x2a05e) => {
    if (!_0x2a05e) return false;
    let {
        unitId: _0x26a294,
        tableId: _0x368ff0,
        columnIndex: _0xdf25de,
        count: _0x51efe1 = 1,
      } = _0x2a05e,
      _0x3379b8 = _0x649c36
        .get(e.SlideTableResourceService)
        .getTable(_0x26a294, _0x368ff0);
    if (!_0x3379b8) return false;
    let _0x3ceef7 = (0, e.insertSlideTableColumns)(
        _0x3379b8,
        _0xdf25de,
        _0x51efe1,
        _0x2a05e.width ?? p(_0x3379b8, _0xdf25de),
      ),
      _0x4ea767 = { id: i.id, params: { unitId: _0x26a294, table: _0x3ceef7 } },
      _0x5ce2ea = { id: i.id, params: { unitId: _0x26a294, table: _0x3379b8 } },
      _0x44c3dc = l(_0x649c36, _0x2a05e, _0x3379b8, _0x3ceef7, "column"),
      _0x55d7d9 = _0x44c3dc ? [_0x4ea767, _0x44c3dc.redoMutation] : [_0x4ea767],
      _0x554ea9 = _0x44c3dc ? [_0x44c3dc.undoMutation, _0x5ce2ea] : [_0x5ce2ea];
    return (0, t.sequenceExecute)(_0x55d7d9, _0x649c36.get(t.ICommandService))
      .result
      ? (_0x649c36
          .get(t.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x26a294,
            undoMutations: _0x554ea9,
            redoMutations: _0x55d7d9,
          }),
        true)
      : false;
  },
};
function p(_0x4dc4c7, _0x235175) {
  var _0x2aeeac, _0x402aed;
  return (
    ((_0x2aeeac = _0x4dc4c7.columns[_0x235175 - 1]) == null
      ? undefined
      : _0x2aeeac.width) ??
    ((_0x402aed = _0x4dc4c7.columns[_0x235175]) == null
      ? undefined
      : _0x402aed.width)
  );
}
const m = {
  id: "board.command.insert-table-rows",
  type: t.CommandType["COMMAND"],
  handler: (_0x17bd6f, _0x1378b0) => {
    if (!_0x1378b0) return false;
    let {
        unitId: _0x28c98d,
        tableId: _0x4b497e,
        rowIndex: _0x2a9d1,
        count: _0x2d9a09 = 1,
      } = _0x1378b0,
      _0x255127 = _0x17bd6f
        .get(e.SlideTableResourceService)
        .getTable(_0x28c98d, _0x4b497e);
    if (!_0x255127) return false;
    let _0x423920 = (0, e.insertSlideTableRows)(
        _0x255127,
        _0x2a9d1,
        _0x2d9a09,
        _0x1378b0.height ?? h(_0x255127, _0x2a9d1),
      ),
      _0x2c842a = { id: i.id, params: { unitId: _0x28c98d, table: _0x423920 } },
      _0x27c804 = { id: i.id, params: { unitId: _0x28c98d, table: _0x255127 } },
      _0x5f5da5 = l(_0x17bd6f, _0x1378b0, _0x255127, _0x423920, "row"),
      _0x8f2243 = _0x5f5da5 ? [_0x2c842a, _0x5f5da5.redoMutation] : [_0x2c842a],
      _0x23565a = _0x5f5da5 ? [_0x5f5da5.undoMutation, _0x27c804] : [_0x27c804];
    return (0, t.sequenceExecute)(_0x8f2243, _0x17bd6f.get(t.ICommandService))
      .result
      ? (_0x17bd6f
          .get(t.IUndoRedoService)
          .pushUndoRedo({
            unitID: _0x28c98d,
            undoMutations: _0x23565a,
            redoMutations: _0x8f2243,
          }),
        true)
      : false;
  },
};
function h(_0xf9cfcb, _0xd24f9f) {
  var _0x373489, _0x136164;
  return (
    ((_0x373489 = _0xf9cfcb.rows[_0xd24f9f - 1]) == null
      ? undefined
      : _0x373489.height) ??
    ((_0x136164 = _0xf9cfcb.rows[_0xd24f9f]) == null
      ? undefined
      : _0x136164.height)
  );
}
function g(_0x1cab38, _0x2c8361) {
  if (_0x1cab38 === _0x2c8361) return true;
  if (Array.isArray(_0x1cab38) || Array.isArray(_0x2c8361))
    return (
      Array.isArray(_0x1cab38) &&
      Array.isArray(_0x2c8361) &&
      _0x1cab38.length === _0x2c8361.length &&
      _0x1cab38.every((_0x5ef07c, _0x585e97) =>
        g(_0x5ef07c, _0x2c8361[_0x585e97]),
      )
    );
  if (
    !_0x1cab38 ||
    !_0x2c8361 ||
    typeof _0x1cab38 != "object" ||
    typeof _0x2c8361 != "object"
  )
    return false;
  let _0x5c49f2 = Object.entries(_0x1cab38),
    _0x2ce399 = Object.entries(_0x2c8361);
  return (
    _0x5c49f2.length === _0x2ce399.length &&
    _0x5c49f2.every(([_0x5c2e16, _0x3ae1a3]) =>
      g(_0x3ae1a3, _0x2c8361[_0x5c2e16]),
    )
  );
}
function _(_0x4be88c, _0x5c492c, _0x1885ba, _0x335c18, _0x1a29ea) {
  if (_0x1a29ea <= 0) return false;
  let _0x50a5e6 = y(Math.min(v(_0x4be88c), v(_0x5c492c)), 0, _0x1a29ea - 1),
    _0x19085f = y(Math.max(v(_0x4be88c), v(_0x5c492c)), 0, _0x1a29ea - 1),
    _0x2bf74c = y(v(_0x1885ba), 0, _0x1a29ea - 1),
    _0x4e3a36 = _0x335c18 === "before" ? _0x2bf74c : _0x2bf74c + 1;
  return _0x4e3a36 >= _0x50a5e6 && _0x4e3a36 <= _0x19085f + 1;
}
function v(_0x1a92ef) {
  return Number.isFinite(_0x1a92ef) ? Math.trunc(_0x1a92ef) : 0;
}
function y(_0x56d42f, _0x234aba, _0x1c8853) {
  return Math.min(
    Math.max(_0x56d42f, _0x234aba),
    Math.max(_0x234aba, _0x1c8853),
  );
}
const b = {
    id: "board.command.merge-table-cells",
    type: t.CommandType["COMMAND"],
    handler: (_0x4501c9, _0x5edc7d) => {
      if (!_0x5edc7d) return false;
      let {
          unitId: _0x265f28,
          tableId: _0x32d503,
          range: _0x1877e2,
        } = _0x5edc7d,
        _0x3e0bd3 = _0x4501c9
          .get(e.SlideTableResourceService)
          .getTable(_0x265f28, _0x32d503);
      if (!_0x3e0bd3) return false;
      let _0x4954ff = (0, e.mergeSlideTableCells)(_0x3e0bd3, _0x1877e2);
      return g(_0x4954ff.rows, _0x3e0bd3.rows)
        ? true
        : !!_0x4501c9
            .get(t.ICommandService)
            .syncExecuteCommand(a.id, {
              unitId: _0x265f28,
              tableId: _0x32d503,
              patch: { rows: _0x4954ff.rows },
            });
    },
  },
  x = {
    id: "board.command.move-table-columns",
    type: t.CommandType["COMMAND"],
    handler: (_0x1d1447, _0xe38fec) => {
      if (!_0xe38fec) return false;
      let {
          unitId: _0x39637a,
          tableId: _0x13c80e,
          startColumn: _0x4cd3ed,
          endColumn: _0x2b3acb,
          targetColumn: _0x1d7c7f,
          position: _0x3b3f40,
        } = _0xe38fec,
        _0x43414d = _0x1d1447
          .get(e.SlideTableResourceService)
          .getTable(_0x39637a, _0x13c80e);
      if (
        !_0x43414d ||
        !(0, e.canMoveSlideTableColumns)(
          _0x43414d,
          { startColumn: _0x4cd3ed, endColumn: _0x2b3acb },
          { column: _0x1d7c7f, position: _0x3b3f40 },
        )
      )
        return false;
      if (
        _(
          _0x4cd3ed,
          _0x2b3acb,
          _0x1d7c7f,
          _0x3b3f40,
          _0x43414d.columns["length"],
        )
      )
        return true;
      let _0x773c74 = (0, e.moveSlideTableColumns)(
        _0x43414d,
        _0x4cd3ed,
        _0x2b3acb,
        _0x1d7c7f,
        _0x3b3f40,
      );
      return (
        _0x773c74.rev !== _0x43414d.rev &&
        !!_0x1d1447
          .get(t.ICommandService)
          .syncExecuteCommand(a.id, {
            unitId: _0x39637a,
            tableId: _0x13c80e,
            patch: { columns: _0x773c74.columns, rows: _0x773c74.rows },
          })
      );
    },
  },
  S = {
    id: "board.command.move-table-rows",
    type: t.CommandType["COMMAND"],
    handler: (_0xb9fa7, _0x5c01ff) => {
      if (!_0x5c01ff) return false;
      let {
          unitId: _0x4bc569,
          tableId: _0x62fc65,
          startRow: _0x373dc4,
          endRow: _0x1642a4,
          targetRow: _0x21f16e,
          position: _0x13110d,
        } = _0x5c01ff,
        _0x460541 = _0xb9fa7
          .get(e.SlideTableResourceService)
          .getTable(_0x4bc569, _0x62fc65);
      if (
        !_0x460541 ||
        !(0, e.canMoveSlideTableRows)(
          _0x460541,
          { startRow: _0x373dc4, endRow: _0x1642a4 },
          { row: _0x21f16e, position: _0x13110d },
        )
      )
        return false;
      if (
        _(_0x373dc4, _0x1642a4, _0x21f16e, _0x13110d, _0x460541.rows["length"])
      )
        return true;
      let _0x28d1bb = (0, e.moveSlideTableRows)(
        _0x460541,
        _0x373dc4,
        _0x1642a4,
        _0x21f16e,
        _0x13110d,
      );
      return (
        _0x28d1bb.rev !== _0x460541.rev &&
        !!_0xb9fa7
          .get(t.ICommandService)
          .syncExecuteCommand(a.id, {
            unitId: _0x4bc569,
            tableId: _0x62fc65,
            patch: { rows: _0x28d1bb.rows },
          })
      );
    },
  },
  C = {
    id: "board.command.remove-table",
    type: t.CommandType["COMMAND"],
    handler: (_0xdbc5d9, _0x4bea64) => {
      if (
        !(_0x4bea64 != null && _0x4bea64.unitId) ||
        !_0x4bea64.subUnitId ||
        !_0x4bea64.tableId ||
        !_0x4bea64.elementId
      )
        return false;
      let {
        unitId: _0x2c81d8,
        subUnitId: _0xe1161d,
        tableId: _0x282d46,
        elementId: _0x3e882e,
      } = _0x4bea64;
      if (
        !_0xdbc5d9
          .get(e.SlideTableResourceService)
          .getTable(_0x2c81d8, _0x282d46)
      )
        return false;
      let _0x27f4b0 = _0xdbc5d9
          .get(n.IBoardElementService)
          .getElementByParam({
            unitId: _0x2c81d8,
            subUnitId: _0xe1161d,
            elementId: _0x3e882e,
          }),
        _0x4ee2a4 = _0x27f4b0 == null ? undefined : _0x27f4b0.element;
      return !_0x4ee2a4 ||
        _0x4ee2a4.type !== n.BoardElementType["Table"] ||
        _0x4ee2a4.tableId !== _0x282d46
        ? false
        : !!_0xdbc5d9
            .get(t.ICommandService)
            .syncExecuteCommand(n.RemoveBoardElementOperation["id"], {
              unitId: _0x2c81d8,
              subUnitId: _0xe1161d,
              elementId: _0x3e882e,
            });
    },
  },
  w = {
    id: "board.command.resize-table-columns",
    type: t.CommandType["COMMAND"],
    handler: (_0xe676d1, _0x39b918) => {
      if (!_0x39b918) return false;
      let {
          unitId: _0x46052a,
          tableId: _0x31c819,
          startColumn: _0x5bb607,
          endColumn: _0x2cf8b0,
          width: _0x2fb224,
        } = _0x39b918,
        _0x3f7fec = _0xe676d1
          .get(e.SlideTableResourceService)
          .getTable(_0x46052a, _0x31c819);
      if (!_0x3f7fec) return false;
      let _0x53cbc7 = _0x3f7fec.columns["slice"](_0x5bb607, _0x2cf8b0 + 1);
      if (
        _0x53cbc7.length === _0x2cf8b0 - _0x5bb607 + 1 &&
        _0x53cbc7.every((_0x3036c7) => (_0x3036c7.width ?? 96) === _0x2fb224)
      )
        return true;
      let _0xfaa7dd = (0, e.resizeSlideTableColumns)(
        _0x3f7fec,
        _0x5bb607,
        _0x2cf8b0,
        _0x2fb224,
      );
      return (
        _0xfaa7dd.rev !== _0x3f7fec.rev &&
        !!_0xe676d1
          .get(t.ICommandService)
          .syncExecuteCommand(a.id, {
            unitId: _0x46052a,
            tableId: _0x31c819,
            patch: { columns: _0xfaa7dd.columns },
          })
      );
    },
  },
  T = {
    id: "board.command.resize-table-rows",
    type: t.CommandType["COMMAND"],
    handler: (_0xa8e1b4, _0x513028) => {
      if (!_0x513028) return false;
      let {
          unitId: _0x2bb68a,
          tableId: _0x29ac38,
          startRow: _0x488043,
          endRow: _0x362e24,
          height: _0x454322,
        } = _0x513028,
        _0x281632 = _0xa8e1b4
          .get(e.SlideTableResourceService)
          .getTable(_0x2bb68a, _0x29ac38);
      if (!_0x281632) return false;
      let _0x56d0e8 = _0x281632.rows["slice"](_0x488043, _0x362e24 + 1);
      if (
        _0x56d0e8.length === _0x362e24 - _0x488043 + 1 &&
        _0x56d0e8.every((_0x16471a) => (_0x16471a.height ?? 24) === _0x454322)
      )
        return true;
      let _0x132e7d = (0, e.resizeSlideTableRows)(
        _0x281632,
        _0x488043,
        _0x362e24,
        _0x454322,
      );
      return (
        _0x132e7d.rev !== _0x281632.rev &&
        !!_0xa8e1b4
          .get(t.ICommandService)
          .syncExecuteCommand(a.id, {
            unitId: _0x2bb68a,
            tableId: _0x29ac38,
            patch: { rows: _0x132e7d.rows },
          })
      );
    },
  },
  E = {
    id: "board.command.set-table-border-preset",
    type: t.CommandType["COMMAND"],
    handler: (_0x5439bb, _0x5a57b4) => {
      if (!_0x5a57b4) return false;
      let {
          unitId: _0x12b491,
          tableId: _0x1cc046,
          range: _0xae4947,
          preset: _0x4d6b6b,
          border: _0x4528d4,
        } = _0x5a57b4,
        _0x26f5c1 = _0x5439bb
          .get(e.SlideTableResourceService)
          .getTable(_0x12b491, _0x1cc046);
      if (!_0x26f5c1) return false;
      let { rows: _0x5616d8 } = (0, e.buildBorderPresetPatch)(
        t.Tools["deepClone"](_0x26f5c1.rows),
        _0xae4947,
        _0x4d6b6b,
        _0x4528d4,
      );
      return g(_0x5616d8, _0x26f5c1.rows)
        ? true
        : !!_0x5439bb
            .get(t.ICommandService)
            .syncExecuteCommand(a.id, {
              unitId: _0x12b491,
              tableId: _0x1cc046,
              patch: { rows: _0x5616d8 },
            });
    },
  },
  D = {
    id: "board.command.set-table-cell-style",
    type: t.CommandType["COMMAND"],
    handler: (_0x44d652, _0x3c7784) => {
      if (!_0x3c7784) return false;
      let {
          unitId: _0x5e6467,
          tableId: _0xbe7abe,
          range: _0x5ae9e3,
          style: _0x4f0d48,
        } = _0x3c7784,
        _0x42f87c = _0x44d652
          .get(e.SlideTableResourceService)
          .getTable(_0x5e6467, _0xbe7abe);
      if (!_0x42f87c) return false;
      let _0x440b2c = (0, e.setSlideTableCellStyle)(
        _0x42f87c,
        _0x5ae9e3,
        _0x4f0d48,
      );
      return g(_0x440b2c.rows, _0x42f87c.rows)
        ? true
        : !!_0x44d652
            .get(t.ICommandService)
            .syncExecuteCommand(a.id, {
              unitId: _0x5e6467,
              tableId: _0xbe7abe,
              patch: { rows: _0x440b2c.rows },
            });
    },
  },
  ee = {
    id: "board.command.set-table-cell-text",
    type: t.CommandType["COMMAND"],
    handler: (_0x52ccbb, _0x178426) => {
      var _0x1b35cc;
      if (!_0x178426) return false;
      let {
          unitId: _0x59af5c,
          tableId: _0x1e716a,
          row: _0x455f3d,
          column: _0x293205,
          textData: _0x2d026d,
        } = _0x178426,
        _0x53dd44 = _0x52ccbb
          .get(e.SlideTableResourceService)
          .getTable(_0x59af5c, _0x1e716a);
      if (
        !_0x53dd44 ||
        !(
          (_0x1b35cc = _0x53dd44.rows[_0x455f3d]) != null &&
          _0x1b35cc.cells[_0x293205]
        )
      )
        return false;
      let _0x1731ff = (0, e.buildSlideTableCellTextDataPatch)(
        _0x53dd44,
        _0x455f3d,
        _0x293205,
        _0x2d026d,
      );
      return (
        !_0x1731ff ||
        !!_0x52ccbb
          .get(t.ICommandService)
          .syncExecuteCommand(a.id, {
            unitId: _0x59af5c,
            tableId: _0x1e716a,
            patch: _0x1731ff,
          })
      );
    },
  },
  O = {
    id: "board.command.unmerge-table-cells",
    type: t.CommandType["COMMAND"],
    handler: (_0x2db752, _0x4b3034) => {
      if (!_0x4b3034) return false;
      let {
          unitId: _0x1a9e4e,
          tableId: _0x3d70c7,
          row: _0x2c37b5,
          column: _0x5cea57,
        } = _0x4b3034,
        _0x3b8705 = _0x2db752
          .get(e.SlideTableResourceService)
          .getTable(_0x1a9e4e, _0x3d70c7);
      if (!_0x3b8705) return false;
      let _0x3f4607 = (0, e.unmergeSlideTableCells)(
        _0x3b8705,
        _0x2c37b5,
        _0x5cea57,
      );
      return g(_0x3f4607.rows, _0x3b8705.rows)
        ? true
        : !!_0x2db752
            .get(t.ICommandService)
            .syncExecuteCommand(a.id, {
              unitId: _0x1a9e4e,
              tableId: _0x3d70c7,
              patch: { rows: _0x3f4607.rows },
            });
    },
  },
  k = {
    id: "board.mutation.remove-table",
    type: t.CommandType["MUTATION"],
    handler: (_0x60502, _0x1751b8) => {
      if (!(_0x1751b8 != null && _0x1751b8.unitId) || !_0x1751b8.tableId)
        return false;
      let _0x4b9b77 = _0x60502.get(e.SlideTableResourceService),
        _0xcaca8a = _0x60502.get(e.SlideTableModelService);
      return _0x4b9b77.removeTable(_0x1751b8.unitId, _0x1751b8.tableId)
        ? (_0xcaca8a.notifyTableRemoved(_0x1751b8.unitId, _0x1751b8.tableId),
          true)
        : false;
    },
  };
let A = (function (_0x41c44c) {
  return (
    (_0x41c44c.UMLClass = "uml-class"),
    (_0x41c44c.UMLInterface = "uml-interface"),
    (_0x41c44c.UMLSequenceFragment = "uml-sequence-fragment"),
    (_0x41c44c.UMLSequenceAlternativeFragment =
      "uml-sequence-alternative-fragment"),
    (_0x41c44c.ERDEntity = "erd-entity"),
    (_0x41c44c.ERDKeyField = "erd-key-field"),
    (_0x41c44c.ERDFieldType = "erd-field-type"),
    (_0x41c44c.ERDFull = "erd-full"),
    _0x41c44c
  );
})({});
const j = "#111111",
  M = "#ffffff",
  N = "#ffffff",
  P = "#111827",
  F = "#D9DDE3",
  I = "#2B2F36",
  L = {
    "uml-class": {
      columns: [280],
      rows: [50, 50, 50],
      texts: [["Class"], ["+ field: type"], ["+ method(type): type"]],
      outerBorderRadius: 8,
    },
    "uml-interface": {
      columns: [250],
      rows: [50, 50],
      texts: [["<<Interface>>"], ["+\x20method(type):\x20type"]],
      outerBorderRadius: 8,
    },
    "uml-sequence-fragment": {
      columns: [150, 410],
      rows: [44, 260],
      texts: [
        ["Opt / Loop", ""],
        ["[Condition]", ""],
      ],
      rowColumnSpans: { 1: 2 },
      headerHorizontalAlign: t.HorizontalAlign["LEFT"],
      outerBorderRadius: 0,
      sequenceFrame: { titleRow: 0, titleColumn: 0, notchWidth: 24 },
    },
    "uml-sequence-alternative-fragment": {
      columns: [150, 410],
      rows: [44, 180, 220],
      texts: [
        ["Opt\x20/\x20Loop", ""],
        ["[Condition]", ""],
        ["[Else]", ""],
      ],
      rowColumnSpans: { 1: 2, 2: 2 },
      dividerAfterRows: [1],
      headerHorizontalAlign: t.HorizontalAlign["LEFT"],
      outerBorderRadius: 0,
      sequenceFrame: { titleRow: 0, titleColumn: 0, notchWidth: 24 },
    },
    "erd-entity": {
      columns: [320],
      rows: [40, 40, 40, 40],
      visualStyle: "erd",
      texts: [["Entity"], ["Field"], ["Field"], ["Field"]],
      outerBorderRadius: 6,
    },
    "erd-key-field": {
      columns: [90, 310],
      rows: [40, 40, 40, 40],
      visualStyle: "erd",
      texts: [
        ["Entity", ""],
        ["PK", "Field"],
        ["", "Field"],
        ["", "Field"],
      ],
      headerColumnSpan: 2,
      outerBorderRadius: 6,
    },
    "erd-field-type": {
      columns: [240, 160],
      rows: [40, 40, 40, 40],
      visualStyle: "erd",
      texts: [
        ["Entity", ""],
        ["Field", "Type"],
        ["Field", "Type"],
        ["Field", "Type"],
      ],
      headerColumnSpan: 2,
      outerBorderRadius: 6,
    },
    "erd-full": {
      columns: [90, 230, 120],
      rows: [40, 40, 40, 40],
      visualStyle: "erd",
      texts: [
        ["Entity", "", ""],
        ["PK", "Field", "Type"],
        ["", "Field", "Type"],
        ["", "Field", "Type"],
      ],
      headerColumnSpan: 3,
      outerBorderRadius: 6,
    },
  };
function te(_0xe2a09c) {
  let _0x56c739 = L[_0xe2a09c.preset],
    _0x513068 = V(_0x56c739, _0xe2a09c.themeData);
  return {
    id: _0xe2a09c.id,
    rev: 0,
    options: {
      firstRow: false,
      firstCol: false,
      lastRow: false,
      lastCol: false,
      bandRow: false,
      bandCol: false,
    },
    columns: _0x56c739.columns["map"]((_0x275f7d) => ({ width: _0x275f7d })),
    rows: _0x56c739.rows["map"]((_0x3cc8a1, _0x70715d) =>
      ie(_0xe2a09c.id, _0x56c739, _0x513068, _0x70715d, _0x3cc8a1),
    ),
    custom: {
      boardDiagramTablePreset: _0xe2a09c.preset,
      outerBorderRadius: _0x56c739.outerBorderRadius,
      outerBorderWidth: 2,
      outerBorderColor: _0x513068.borderColor,
      structuralControls: { rows: true, columns: false },
      ...(_0x56c739.sequenceFrame
        ? { sequenceFrame: _0x56c739.sequenceFrame }
        : {}),
    },
  };
}
function ne(_0x4861fa) {
  let _0x583ca3 = L[_0x4861fa];
  return {
    width: _0x583ca3.columns["reduce"](
      (_0x16be65, _0x3e8b4c) => _0x16be65 + _0x3e8b4c,
      0,
    ),
    height: _0x583ca3.rows["reduce"](
      (_0x46841a, _0x5b83ec) => _0x46841a + _0x5b83ec,
      0,
    ),
  };
}
function R(_0x5758e0) {
  return typeof _0x5758e0 == "string" && Object.values(A).includes(_0x5758e0);
}
function z(_0x4980f3) {
  return R(_0x4980f3) && L[_0x4980f3].visualStyle === "erd";
}
function re(_0x36f994, _0x2cc7c7) {
  var _0x3ffd1c;
  let _0x400426 =
    (_0x3ffd1c = _0x36f994.custom) == null
      ? undefined
      : _0x3ffd1c.boardDiagramTablePreset;
  if (!z(_0x400426)) return _0x36f994;
  let _0x5f0b23 = L[_0x400426],
    _0x44263d = V(_0x5f0b23, _0x2cc7c7),
    _0x676a4e = JSON.parse(JSON.stringify(_0x36f994));
  return (
    (_0x676a4e.custom = {
      ..._0x676a4e.custom,
      outerBorderColor: _0x44263d.borderColor,
    }),
    (_0x676a4e.rows = _0x676a4e.rows["map"]((_0x51ab1b, _0x47fd8f) => ({
      ..._0x51ab1b,
      cells: _0x51ab1b.cells["map"]((_0x2f87d9, _0x1f5137) => {
        let _0x4d4878 = _0x47fd8f === 0,
          _0x35b754 = {
            ..._0x2f87d9,
            style: B(_0x5f0b23, _0x44263d, _0x47fd8f, _0x1f5137),
          };
        return (
          (_0x35b754.textData &&= se(
            _0x35b754.textData,
            _0x4d4878 ? _0x44263d.headerTextColor : P,
          )),
          _0x35b754
        );
      }),
    }))),
    _0x676a4e
  );
}
function ie(_0x5ca950, _0x228baf, _0x1a85a5, _0x5498ab, _0x35cce0) {
  return {
    height: _0x35cce0,
    cells: _0x228baf.columns["map"]((_0x34e2a1, _0x55d9c0) =>
      ae(_0x5ca950, _0x228baf, _0x1a85a5, _0x5498ab, _0x55d9c0),
    ),
  };
}
function ae(_0x3a9175, _0x380d31, _0x28582b, _0x5b22ac, _0x251d3b) {
  var _0x227cdd, _0x219dd2, _0x4a91d2;
  let _0x36ee5b =
      ((_0x227cdd = _0x380d31.texts[_0x5b22ac]) == null
        ? undefined
        : _0x227cdd[_0x251d3b]) ?? "",
    _0x4a4a81 = _0x5b22ac === 0,
    _0x1facc6 = { style: B(_0x380d31, _0x28582b, _0x5b22ac, _0x251d3b) };
  return (
    _0x36ee5b &&
      (_0x1facc6.textData = ce(
        _0x3a9175,
        _0x5b22ac,
        _0x251d3b,
        _0x36ee5b,
        _0x4a4a81,
        _0x380d31,
        _0x28582b,
      )),
    _0x5b22ac === 0 && _0x380d31.headerColumnSpan && _0x251d3b === 0
      ? (_0x1facc6.columnSpan = _0x380d31.headerColumnSpan)
      : _0x5b22ac === 0 &&
          _0x380d31.headerColumnSpan &&
          _0x251d3b < _0x380d31.headerColumnSpan
        ? (_0x1facc6.hMerge = true)
        : (_0x219dd2 = _0x380d31.rowColumnSpans) != null &&
            _0x219dd2[_0x5b22ac] &&
            _0x251d3b === 0
          ? (_0x1facc6.columnSpan = _0x380d31.rowColumnSpans[_0x5b22ac])
          : (_0x4a91d2 = _0x380d31.rowColumnSpans) != null &&
            _0x4a91d2[_0x5b22ac] &&
            _0x251d3b < _0x380d31.rowColumnSpans[_0x5b22ac] &&
            (_0x1facc6.hMerge = true),
    _0x1facc6
  );
}
function B(_0xe71a82, _0x966e79, _0x1f844e, _0x5a3888) {
  let _0x4604ca = _0x1f844e === 0;
  if (_0xe71a82.sequenceFrame) return oe(_0xe71a82, _0x1f844e, _0x4604ca);
  let _0x20f576 = _0xe71a82.visualStyle === "erd",
    _0x158c57 =
      _0x5a3888 === _0xe71a82.columns["length"] - 1 ||
      (_0x4604ca && (_0xe71a82.headerColumnSpan ?? 1) > 1),
    _0x50cc83 = _0x1f844e === _0xe71a82.rows["length"] - 1,
    _0x3176c = H(undefined, _0x966e79.borderColor);
  return {
    fill: {
      type: e.SlideTableFillTypeEnum["Solid"],
      color:
        _0x4604ca && _0x20f576 ? _0x966e79.headerFillColor : _0x4604ca ? N : M,
    },
    verticalAlign: e.SlideTableVerticalAlignEnum["Middle"],
    margins: {
      left: _0x4604ca ? 8 : 6,
      right: _0x4604ca ? 8 : 6,
      top: 4,
      bottom: 4,
    },
    borders: {
      right: _0x158c57 ? undefined : _0x3176c,
      bottom: _0x20f576
        ? _0x4604ca
          ? _0x3176c
          : undefined
        : _0x50cc83
          ? undefined
          : _0x3176c,
    },
  };
}
function oe(_0x8ef4aa, _0xe6ce1a, _0xbcb2bb) {
  var _0x11e244;
  let _0x126d61 = {};
  return (
    (_0x11e244 = _0x8ef4aa.dividerAfterRows) != null &&
      _0x11e244.includes(_0xe6ce1a) &&
      (_0x126d61.bottom = H(e.SlideTableBorderDashEnum["Dash"])),
    {
      fill: {
        type: e.SlideTableFillTypeEnum["Solid"],
        color: _0xbcb2bb ? N : M,
      },
      verticalAlign: e.SlideTableVerticalAlignEnum["Middle"],
      margins: { left: _0xbcb2bb ? 14 : 10, right: 10, top: 6, bottom: 6 },
      borders: _0x126d61,
    }
  );
}
function V(_0x3c0fa7, _0x5b7c3c) {
  if (_0x3c0fa7.visualStyle === "erd" && _0x5b7c3c) {
    let _0x498479 = (0, n.resolveBoardSemanticThemeStyle)(_0x5b7c3c, "header");
    return {
      borderColor: _0x498479.stroke["color"] ?? F,
      headerFillColor: _0x498479.fill["color"] ?? I,
      headerTextColor: _0x498479.textColor,
    };
  }
  return _0x3c0fa7.visualStyle === "erd"
    ? { borderColor: F, headerFillColor: I, headerTextColor: "#FFFFFF" }
    : { borderColor: j, headerFillColor: N, headerTextColor: P };
}
function H(_0x4792f0 = e.SlideTableBorderDashEnum["Solid"], _0x3db68a = j) {
  return { color: _0x3db68a, width: 2, dash: _0x4792f0 };
}
function se(_0x12f135, _0x522080) {
  var _0x493620, _0xa7af0;
  let _0xda3653 = JSON.parse(JSON.stringify(_0x12f135)),
    _0x27d8d2 =
      (_0x493620 = _0xda3653.documentStyle) == null
        ? undefined
        : _0x493620.textStyle;
  return (
    _0x27d8d2 &&
      ((_0x27d8d2.cl = { rgb: _0x522080 }),
      (_0x27d8d2.textFill = { type: "solid", color: _0x522080, opacity: 1 })),
    (_0xa7af0 = _0xda3653.body) == null ||
      (_0xa7af0 = _0xa7af0.textRuns) == null ||
      _0xa7af0.forEach((_0x56bf48) => {
        _0x56bf48.ts &&
          ((_0x56bf48.ts["cl"] = { rgb: _0x522080 }),
          (_0x56bf48.ts["textFill"] = {
            type: "solid",
            color: _0x522080,
            opacity: 1,
          }));
      }),
    _0xda3653
  );
}
function ce(
  _0x132eac,
  _0x58f643,
  _0x371ef8,
  _0x2f22d8,
  _0xa0fa3,
  _0x52d371,
  _0x3f393f,
) {
  let _0x2cea61 = _0x2f22d8 + "\x0d\x0a",
    _0xb8944c = _0xa0fa3
      ? (_0x52d371.headerHorizontalAlign ?? t.HorizontalAlign["CENTER"])
      : t.HorizontalAlign["LEFT"],
    _0x583c8b =
      _0xa0fa3 && _0x52d371.visualStyle === "erd"
        ? _0x3f393f.headerTextColor
        : P,
    _0x51b356 = {
      ...(_0xa0fa3 ? { bl: t.BooleanNumber["TRUE"] } : {}),
      cl: { rgb: _0x583c8b },
      ff: t.DEFAULT_STYLES["ff"],
      fs: t.DEFAULT_STYLES["fs"],
      textFill: { type: "solid", color: _0x583c8b, opacity: 1 },
    };
  return {
    id:
      "BOARD_DIAGRAM_TABLE_CELL_" +
      _0x132eac +
      "_" +
      _0x58f643 +
      "_" +
      _0x371ef8,
    body: {
      dataStream: _0x2cea61,
      paragraphs: [
        {
          startIndex: 0,
          paragraphId: (0, t.createParagraphId)(new Set()),
          paragraphStyle: {
            horizontalAlign: _0xb8944c,
            lineSpacing: 1,
            snapToGrid: t.BooleanNumber["FALSE"],
            spaceAbove: { v: 0 },
            spaceBelow: { v: 0 },
          },
        },
      ],
      sectionBreaks: [
        {
          sectionId: (0, t.createSectionId)(new Set()),
          startIndex: Math.max(0, _0x2cea61.length - 1),
          gridType: t.GridType["DEFAULT"],
        },
      ],
      textRuns:
        _0x2f22d8.length > 0
          ? [{ st: 0, ed: _0x2f22d8.length, ts: _0x51b356 }]
          : [],
    },
    documentStyle: {
      documentFlavor: t.DocumentFlavor["UNSPECIFIED"],
      renderConfig: { horizontalAlign: _0xb8944c },
      textStyle: _0x51b356,
    },
  };
}
var le = "@univerjs-pro/boards-table",
  ue = "1.0.0-insiders.20260907-70fc579";
const U = {};
function W(_0x1fa8be) {
  "@babel/helpers - typeof";
  return (
    (W =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (_0x16ef9e) {
            return typeof _0x16ef9e;
          }
        : function (_0x3732de) {
            return _0x3732de &&
              typeof Symbol == "function" &&
              _0x3732de.constructor === Symbol &&
              _0x3732de !== Symbol.prototype
              ? "symbol"
              : typeof _0x3732de;
          }),
    W(_0x1fa8be)
  );
}
function de(_0x483a42, _0xd1f1bb) {
  if (W(_0x483a42) != "object" || !_0x483a42) return _0x483a42;
  var _0x469ed2 = _0x483a42[Symbol.toPrimitive];
  if (_0x469ed2 !== undefined) {
    var _0x595d0e = _0x469ed2.call(_0x483a42, _0xd1f1bb || "default");
    if (W(_0x595d0e) != "object") return _0x595d0e;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (_0xd1f1bb === "string" ? String : Number)(_0x483a42);
}
function fe(_0x235829) {
  var _0x27da8e = de(_0x235829, "string");
  return W(_0x27da8e) == "symbol" ? _0x27da8e : _0x27da8e + "";
}
function G(_0xb8772f, _0x5246d9, _0x52d820) {
  return (
    (_0x5246d9 = fe(_0x5246d9)) in _0xb8772f
      ? Object.defineProperty(_0xb8772f, _0x5246d9, {
          value: _0x52d820,
          enumerable: true,
          configurable: true,
          writable: true,
        })
      : (_0xb8772f[_0x5246d9] = _0x52d820),
    _0xb8772f
  );
}
function K(_0xfdf9fe, _0x5b0cef) {
  return function (_0x14ec37, _0x5cd032) {
    _0x5b0cef(_0x14ec37, _0x5cd032, _0xfdf9fe);
  };
}
function q(_0x3b2a69, _0x39238a, _0x4f16a3, _0x385aa9) {
  var _0x2737ae = arguments.length,
    _0xcf0d46 =
      _0x2737ae < 3
        ? _0x39238a
        : _0x385aa9 === null
          ? (_0x385aa9 = Object.getOwnPropertyDescriptor(_0x39238a, _0x4f16a3))
          : _0x385aa9,
    _0x1245ac;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    _0xcf0d46 = Reflect.decorate(_0x3b2a69, _0x39238a, _0x4f16a3, _0x385aa9);
  else {
    for (var _0x69c39e = _0x3b2a69.length - 1; _0x69c39e >= 0; _0x69c39e--)
      (_0x1245ac = _0x3b2a69[_0x69c39e]) &&
        (_0xcf0d46 =
          (_0x2737ae < 3
            ? _0x1245ac(_0xcf0d46)
            : _0x2737ae > 3
              ? _0x1245ac(_0x39238a, _0x4f16a3, _0xcf0d46)
              : _0x1245ac(_0x39238a, _0x4f16a3)) || _0xcf0d46);
  }
  return (
    _0x2737ae > 3 &&
      _0xcf0d46 &&
      Object.defineProperty(_0x39238a, _0x4f16a3, _0xcf0d46),
    _0xcf0d46
  );
}
let J = class extends t.Disposable {
  constructor(_0x22cd9e, _0x1e94d5, _0x511c2a) {
    (super(),
      (this._resourceManagerService = _0x22cd9e),
      (this._resourceService = _0x1e94d5),
      (this._modelService = _0x511c2a),
      G(this, "_resourceDisposable", null),
      this._initResource());
  }
  _initResource() {
    ((this._resourceDisposable = this._resourceManagerService[
      "registerPluginResource"
    ](
      (0, e.createSlideTableResourceHook)({
        pluginName: "BOARD_TABLE_PLUGIN",
        businesses: [t.UniverInstanceType["UNIVER_BOARD"]],
        resourceService: this._resourceService,
        modelService: this._modelService,
      }),
    )),
      this.disposeWithMe(this._resourceDisposable));
  }
};
J = q(
  [
    K(0, t.IResourceManagerService),
    K(1, (0, t.Inject)(e.SlideTableResourceService)),
    K(2, (0, t.Inject)(e.SlideTableModelService)),
  ],
  J,
);
let Y = class extends t.Disposable {
  constructor(_0x4cb41f, _0x4b255e, _0x229811, _0x45fcc8) {
    (super(),
      (this._commandService = _0x4cb41f),
      (this._instanceService = _0x4b255e),
      (this._resourceService = _0x229811),
      (this._modelService = _0x45fcc8),
      this._initThemeListener());
  }
  _initThemeListener() {
    this.disposeWithMe(
      this._commandService["onCommandExecuted"]((_0x453c39) => {
        _0x453c39.id === n.SetBoardThemeOperation["id"] &&
          this._refreshERDTables(_0x453c39.params);
      }),
    );
  }
  _refreshERDTables(_0xbd1acb) {
    if (!(_0xbd1acb != null && _0xbd1acb.unitId)) return;
    let _0x4ab85b = this._instanceService["getUnit"](
        _0xbd1acb.unitId,
        t.UniverInstanceType["UNIVER_BOARD"],
      ),
      _0x169bd1 =
        _0xbd1acb.themeData ??
        (_0x4ab85b == null ? undefined : _0x4ab85b.getThemeData());
    if (!_0x169bd1) return;
    let _0x7e0a78 = this._resourceService["getResource"](_0xbd1acb.unitId);
    Object.values(_0x7e0a78.tables).forEach((_0x395e1b) => {
      var _0x43e543;
      if (
        !z(
          (_0x43e543 = _0x395e1b.custom) == null
            ? undefined
            : _0x43e543.boardDiagramTablePreset,
        )
      )
        return;
      let _0x566f4e = re(_0x395e1b, _0x169bd1);
      (this._resourceService["setTable"](_0xbd1acb.unitId, _0x566f4e),
        this._modelService["notifyTableChanged"](
          _0xbd1acb.unitId,
          _0x395e1b.id,
        ));
    });
  }
};
Y = q(
  [
    K(0, t.ICommandService),
    K(1, t.IUniverInstanceService),
    K(2, (0, t.Inject)(e.SlideTableResourceService)),
    K(3, (0, t.Inject)(e.SlideTableModelService)),
  ],
  Y,
);
let X = class {
  constructor(
    _0x36d43c,
    _0x30100b,
    _0x3294b3,
    _0x1decbd,
    _0x5f267b,
    _0x4e479b,
  ) {
    ((this._commandService = _0x36d43c),
      (this._undoRedoService = _0x30100b),
      (this._resourceService = _0x3294b3),
      (this._elementService = _0x1decbd),
      (this._instanceService = _0x5f267b),
      (this._themeService = _0x4e479b));
  }
  insertTable(_0xdf4078) {
    var _0x44e6b5;
    if (!me(_0xdf4078)) return false;
    let _0x86198f = R(_0xdf4078.diagramPreset)
        ? _0xdf4078.diagramPreset
        : undefined,
      _0x1cc48e = Q(_0xdf4078.rows, 3),
      _0x168f0e = Q(_0xdf4078.columns, 3),
      _0x439b68 = _0x86198f ? ne(_0x86198f) : undefined,
      _0x2a5850 = Z(
        _0xdf4078.width,
        (_0x439b68 == null ? undefined : _0x439b68.width) ??
          Math.max(240, _0x168f0e * 120),
      ),
      _0x6b33f9 = Z(
        _0xdf4078.height,
        (_0x439b68 == null ? undefined : _0x439b68.height) ??
          Math.max(96, _0x1cc48e * 48),
      ),
      _0x43f5b8 = (0, t.generateRandomId)(6),
      _0x1bb595 = _0xdf4078.elementId ?? (0, t.generateRandomId)(6),
      _0x1aa05e = _0x86198f
        ? (_0x44e6b5 = this._instanceService["getUnit"](
            _0xdf4078.unitId,
            t.UniverInstanceType["UNIVER_BOARD"],
          )) == null
          ? undefined
          : _0x44e6b5.getThemeData()
        : undefined,
      _0x4fffcf = _0x86198f
        ? te({ id: _0x43f5b8, preset: _0x86198f, themeData: _0x1aa05e })
        : this._resourceService["buildTable"]({
            id: _0x43f5b8,
            rows: _0x1cc48e,
            columns: _0x168f0e,
            columnWidth: _0x2a5850 / _0x168f0e,
            rowHeight: _0x6b33f9 / _0x1cc48e,
          }),
      _0x418d8f;
    (!_0x86198f &&
      _0x4fffcf.styleId &&
      (_0x418d8f = (0, e.buildFrozenSlideTableTheme)(
        _0x4fffcf.id,
        _0x4fffcf.styleId,
        (0, e.resolveSlideTableThemePalette)((_0x218f89) =>
          this._themeService["getColorFromTheme"](_0x218f89),
        ),
      )),
      _0x418d8f && (_0x4fffcf.themeId = _0x418d8f.id));
    let _0x2fde6b = {
        id: _0x1bb595,
        type: n.BoardElementType["Table"],
        tableId: _0x43f5b8,
        parentId: _0xdf4078.parentId,
        laneId: _0xdf4078.laneId,
        transform: {
          left: _0xdf4078.left,
          top: _0xdf4078.top,
          width: _0x2a5850,
          height: _0x6b33f9,
          rotation: 0,
        },
      },
      _0x58c231 = { unitId: _0xdf4078.unitId, table: _0x4fffcf };
    _0x418d8f && (_0x58c231.theme = _0x418d8f);
    let _0x48ab55 = { unitId: _0xdf4078.unitId, tableId: _0x43f5b8 },
      _0x519be3 = { id: i.id, params: _0x58c231 },
      _0x2ba5d1 = this._elementService["getElementData"](
        _0xdf4078.unitId,
        _0xdf4078.subUnitId,
      ),
      _0x17c823 = (0, n.createAddBoardElementsMutationInfos)({
        unitId: _0xdf4078.unitId,
        subUnitId: _0xdf4078.subUnitId,
        elements: [_0x2fde6b],
        elementData: _0x2ba5d1,
        elementOrder: this._elementService["getElementOrder"](
          _0xdf4078.unitId,
          _0xdf4078.subUnitId,
        ),
      });
    if (!_0x17c823) return false;
    let { redoMutations: _0x1ecae5, undoMutations: _0x13e98f } = _0x17c823;
    if (!this._commandService["syncExecuteCommand"](i.id, _0x58c231))
      return false;
    let _0x56dff0 = this._executeBoardRedoMutations(_0x1ecae5, _0x13e98f);
    return _0x56dff0.result
      ? (this._undoRedoService["pushUndoRedo"]({
          unitID: _0xdf4078.unitId,
          undoMutations: [..._0x13e98f, { id: k.id, params: _0x48ab55 }],
          redoMutations: [_0x519be3, ..._0x1ecae5],
        }),
        true)
      : (_0x56dff0.undoMutations["length"] > 0 &&
          this._rollbackBoardMutations(_0x56dff0.undoMutations),
        this._commandService["syncExecuteCommand"](k.id, _0x48ab55),
        false);
  }
  _executeBoardRedoMutations(_0x1baf2e, _0x54feb6) {
    let _0x196a17 = [];
    for (let _0x31c861 of _0x1baf2e) {
      if (
        !this._commandService["syncExecuteCommand"](
          _0x31c861.id,
          _0x31c861.params,
        )
      )
        return { result: false, undoMutations: he(_0x196a17, _0x54feb6) };
      _0x196a17.push(_0x31c861);
    }
    return { result: true, undoMutations: _0x54feb6 };
  }
  _rollbackBoardMutations(_0x20d8a7) {
    _0x20d8a7.forEach((_0x51b27a) => {
      this._commandService["syncExecuteCommand"](
        _0x51b27a.id,
        _0x51b27a.params,
      );
    });
  }
  getRemoveTableMutationInfos(_0x21ad82) {
    let _0x591129 = this._resourceService["getTable"](
      _0x21ad82.unitId,
      _0x21ad82.element["tableId"],
    );
    if (!_0x591129) return { redoMutations: [], undoMutations: [] };
    let _0x438612 = _0x591129.themeId
        ? this._resourceService["getTheme"](_0x21ad82.unitId, _0x591129.themeId)
        : undefined,
      _0x14951b = { unitId: _0x21ad82.unitId, table: _0x591129 };
    return (
      _0x438612 && (_0x14951b.theme = _0x438612),
      {
        redoMutations: [
          {
            id: k.id,
            params: {
              unitId: _0x21ad82.unitId,
              tableId: _0x21ad82.element["tableId"],
            },
          },
        ],
        undoMutations: [{ id: i.id, params: _0x14951b }],
      }
    );
  }
  getSearchEntries(_0x169eec) {
    let _0x223e85 = this._resourceService["getTable"](
      _0x169eec.unitId,
      _0x169eec.element["tableId"],
    );
    if (!_0x223e85) return [];
    let _0x592ec1 = [];
    return (
      _0x223e85.rows["forEach"]((_0x186308, _0x2ce9ae) => {
        _0x186308.cells["forEach"]((_0x35ffe4, _0x2d3e00) => {
          let _0x22f1de = pe(_0x35ffe4.textData);
          _0x22f1de &&
            _0x592ec1.push({
              row: _0x2ce9ae,
              column: _0x2d3e00,
              text: _0x22f1de,
            });
        });
      }),
      _0x592ec1
    );
  }
};
X = q(
  [
    K(0, t.ICommandService),
    K(1, t.IUndoRedoService),
    K(2, (0, t.Inject)(e.SlideTableResourceService)),
    K(3, n.IBoardElementService),
    K(4, t.IUniverInstanceService),
    K(5, (0, t.Inject)(t.ThemeService)),
  ],
  X,
);
function pe(_0x495881) {
  var _0x3a9ef4;
  let _0x2ad556 =
    _0x495881 == null || (_0x3a9ef4 = _0x495881.body) == null
      ? undefined
      : _0x3a9ef4.dataStream;
  return _0x2ad556
    ? _0x2ad556
        .replace(/\r\n/g, "\x0a")
        .replace(/\r/g, "\x0a")
        .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
        .replace(/\n+$/g, "")
    : "";
}
function Z(_0x1c7f34, _0xcba64) {
  return _0x1c7f34 !== undefined && Number.isFinite(_0x1c7f34) && _0x1c7f34 > 0
    ? _0x1c7f34
    : _0xcba64;
}
function Q(_0x4ded8f, _0x109d08) {
  return _0x4ded8f === undefined || !Number.isFinite(_0x4ded8f)
    ? _0x109d08
    : Math.max(1, Math.floor(_0x4ded8f));
}
function me(_0x41a94c) {
  return (
    !!_0x41a94c.unitId &&
    !!_0x41a94c.subUnitId &&
    Number.isFinite(_0x41a94c.left) &&
    Number.isFinite(_0x41a94c.top)
  );
}
function he(_0x82d818, _0x29410c) {
  let _0x4e94ad = [..._0x29410c],
    _0x3fc915 = [];
  return (
    _0x82d818
      .slice()
      .reverse()
      .forEach((_0x28ad3a) => {
        let _0x39a59e = _0x4e94ad.findIndex((_0x491f27) =>
          ge(_0x28ad3a, _0x491f27),
        );
        if (_0x39a59e < 0) return;
        let [_0x4b433e] = _0x4e94ad.splice(_0x39a59e, 1);
        _0x3fc915.push(_0x4b433e);
      }),
    _0x3fc915
  );
}
function ge(_0x4777b6, _0x3df10d) {
  return _0x4777b6.id === n.AddBoardElementMutation["id"] &&
    _0x3df10d.id === n.RemoveBoardElementMutation["id"]
    ? _e(_0x4777b6) === ve(_0x3df10d)
    : _0x4777b6.id === n.UpdateBoardElementMutation["id"] &&
        _0x3df10d.id === n.UpdateBoardElementMutation["id"] &&
        ye(_0x4777b6) === ye(_0x3df10d);
}
function _e(_0x12df17) {
  var _0x504bd3;
  return (_0x504bd3 = _0x12df17.params) == null ||
    (_0x504bd3 = _0x504bd3.element) == null
    ? undefined
    : _0x504bd3.id;
}
function ve(_0x1996eb) {
  var _0xc8ac2d;
  return (_0xc8ac2d = _0x1996eb.params) == null
    ? undefined
    : _0xc8ac2d.elementId;
}
function ye(_0x3b2842) {
  var _0x29e71c;
  return (_0x29e71c = _0x3b2842.params) == null
    ? undefined
    : _0x29e71c.elementId;
}
let $ = class extends t.Plugin {
  constructor(_0x4a47fa = U, _0x3ca1c2, _0x37b757, _0x50fb9d) {
    (super(),
      (this._config = _0x4a47fa),
      (this._injector = _0x3ca1c2),
      (this._commandService = _0x37b757),
      (this._configService = _0x50fb9d),
      G(this, "_adapterDisposable", null));
    let { ..._0x6b4b30 } = (0, t.merge)({}, U, this._config);
    (this._configService["setConfig"]("boards-table.config", _0x6b4b30),
      this._initCommands());
  }
  onStarting() {
    (this._injector["has"](e.SlideTableResourceService) ||
      this._injector["add"]([e.SlideTableResourceService]),
      this._injector["has"](e.SlideTableModelService) ||
        this._injector["add"]([e.SlideTableModelService]),
      [[J], [Y], [X]].forEach((_0x291c86) => this._injector["add"](_0x291c86)),
      (0, t.touchDependencies)(this._injector, [
        [e.SlideTableResourceService],
        [e.SlideTableModelService],
        [J],
        [Y],
        [X],
      ]));
    let _0x2fd625 = this._injector["get"](n.IBoardTableAdapterService),
      _0xf69179 = this._injector["get"](X);
    ((this._adapterDisposable = _0x2fd625.registerAdapter(_0xf69179)),
      this.disposeWithMe(this._adapterDisposable));
  }
  _initCommands() {
    [m, c, f, s, S, x, T, w, C, b, O, E, D, ee, a, i, k].forEach(
      (_0x58f1d7) => {
        this.disposeWithMe(this._commandService["registerCommand"](_0x58f1d7));
      },
    );
  }
};
(G($, "type", t.UniverInstanceType["UNIVER_BOARD"]),
  G($, "pluginName", "UniverBoardsTablePlugin"),
  G($, "packageName", le),
  G($, "version", ue),
  ($ = q(
    [
      (0, t.DependentOn)(
        r.UniverLicensePlugin,
        e.UniverSlidesTablePlugin,
        n.UniverBoardsPlugin,
      ),
      K(1, (0, t.Inject)(t.Injector)),
      K(2, t.ICommandService),
      K(3, t.IConfigService),
    ],
    $,
  )),
  (exports.BoardDiagramTablePreset = A),
  (exports.DeleteBoardTableColumnsCommand = s),
  (exports.DeleteBoardTableRowsCommand = c),
  (exports.InsertBoardTableColumnsCommand = f),
  (exports.InsertBoardTableRowsCommand = m),
  (exports.MergeBoardTableCellsCommand = b),
  (exports.MoveBoardTableColumnsCommand = x),
  (exports.MoveBoardTableRowsCommand = S),
  (exports.RemoveBoardTableCommand = C),
  (exports.RemoveBoardTableMutation = k),
  (exports.ResizeBoardTableColumnsCommand = w),
  (exports.ResizeBoardTableRowsCommand = T),
  (exports.SetBoardTableBorderPresetCommand = E),
  (exports.SetBoardTableCellStyleCommand = D),
  (exports.SetBoardTableCellTextCommand = ee),
  (exports.SetBoardTableMutation = i),
  Object.defineProperty(exports, "UniverBoardsTablePlugin", {
    enumerable: true,
    get: function () {
      return $;
    },
  }),
  (exports.UnmergeBoardTableCellsCommand = O),
  (exports.UpdateBoardTableCommand = a));
