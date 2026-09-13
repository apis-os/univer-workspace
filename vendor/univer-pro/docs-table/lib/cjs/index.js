Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs/core"),
  t = require("@univerjs/docs"),
  n = require("rxjs"),
  r = require("@univerjs-pro/license");
function i(var_core_value_sigE7A6, var_core_value_sigB505) {
  var var_core_value_sig7428, var_core_value_sig1DCE, var_core_value_sig0567;
  let var_core_value_sigA7F3 = (var_core_value_sig7428 = var_core_value_sigE7A6.body) == null || (var_core_value_sig7428 = var_core_value_sig7428.tables) == null ? undefined : var_core_value_sig7428.find(var_core_value_sigD4FB => var_core_value_sigD4FB.tableId === var_core_value_sigB505),
    var_core_value_sigEACD = (var_core_value_sig1DCE = var_core_value_sigE7A6.tableSource) == null ? undefined : var_core_value_sig1DCE[var_core_value_sigB505],
    var_core_value_sig901E = (var_core_value_sig0567 = var_core_value_sigE7A6.body) == null ? undefined : var_core_value_sig0567.dataStream;
  if (!var_core_value_sigA7F3 || !var_core_value_sigEACD || !var_core_value_sig901E) return null;
  let var_core_value_sigF7BB = (0, e.getTableRangeInterval)(var_core_value_sigA7F3);
  return var_core_value_sig901E[var_core_value_sigF7BB.startOffset] !== e.DataStreamTreeTokenType["TABLE_START"] || var_core_value_sig901E[var_core_value_sigF7BB.endOffset - 1] !== e.DataStreamTreeTokenType["TABLE_END"] ? null : s(var_core_value_sig901E, var_core_value_sigF7BB.startOffset, var_core_value_sigF7BB.endOffset, var_core_value_sigB505, var_core_value_sigEACD);
}
function a(var_core_value_sigFA38, var_core_value_sig102B) {
  let var_core_value_sigA7DB = var_core_value_sigFA38.rows[var_core_value_sig102B];
  if (!var_core_value_sigA7DB) throw Error("[DocsTable]: Row " + var_core_value_sig102B + " is out of range.");
  return var_core_value_sigA7DB;
}
function o(var_core_value_sig5EEE, var_core_value_sig65B4) {
  let var_core_value_sigF98E = var_core_value_sig5EEE.rows["map"](var_core_value_sig3E71 => var_core_value_sig3E71.cells[var_core_value_sig65B4]).filter(Boolean);
  if (var_core_value_sigF98E.length === 0) throw Error("[DocsTable]:\x20Column\x20" + var_core_value_sig65B4 + " is out of range.");
  return {
    column: var_core_value_sig65B4,
    startOffset: var_core_value_sigF98E[0].startOffset,
    endOffset: var_core_value_sigF98E[var_core_value_sigF98E.length - 1].endOffset,
    cells: var_core_value_sigF98E
  };
}
function s(var_core_value_sigA470, var_core_value_sig19A1, var_core_value_sig81F7, var_core_value_sigBE51, var_core_value_sigAAD1) {
  var var_core_value_sigBC1A;
  let var_core_value_sig3F3A = [];
  for (let var_core_value_sig01B3 = var_core_value_sig19A1 + 1; var_core_value_sig01B3 < var_core_value_sig81F7 - 1;) {
    let var_core_value_sig5CEE = (0, e.getTableRowTokenInterval)(var_core_value_sigA470, var_core_value_sig01B3);
    if (!var_core_value_sig5CEE || var_core_value_sig5CEE.endOffset > var_core_value_sig81F7) return null;
    let var_core_value_sigE92A = {
      row: var_core_value_sig3F3A.length,
      startOffset: var_core_value_sig5CEE.startOffset,
      endOffset: var_core_value_sig5CEE.endOffset - 1,
      cells: []
    };
    for (let var_core_value_sig1A0F = var_core_value_sig5CEE.startOffset + 1; var_core_value_sig1A0F < var_core_value_sig5CEE.endOffset - 1;) {
      let var_core_value_sig8061 = (0, e.getTableCellTokenInterval)(var_core_value_sigA470, var_core_value_sig1A0F);
      if (!var_core_value_sig8061 || var_core_value_sig8061.endOffset > var_core_value_sig5CEE.endOffset) return null;
      var_core_value_sigE92A.cells["push"]({
        row: var_core_value_sigE92A.row,
        column: var_core_value_sigE92A.cells["length"],
        startOffset: var_core_value_sig8061.startOffset,
        endOffset: var_core_value_sig8061.endOffset - 1
      }), var_core_value_sig1A0F = var_core_value_sig8061.endOffset;
    }
    var_core_value_sig3F3A.push(var_core_value_sigE92A), var_core_value_sig01B3 = var_core_value_sig5CEE.endOffset;
  }
  return var_core_value_sig3F3A.length !== var_core_value_sigAAD1.tableRows["length"] || var_core_value_sig3F3A.some((var_core_value_sig7442, var_core_value_sigDF87) => {
    var var_core_value_sig9EE0;
    return var_core_value_sig7442.cells["length"] !== ((var_core_value_sig9EE0 = var_core_value_sigAAD1.tableRows[var_core_value_sigDF87]) == null ? undefined : var_core_value_sig9EE0.tableCells["length"]);
  }) ? null : {
    tableId: var_core_value_sigBE51,
    startOffset: var_core_value_sig19A1,
    endOffset: var_core_value_sig81F7,
    rowCount: var_core_value_sig3F3A.length,
    columnCount: ((var_core_value_sigBC1A = var_core_value_sig3F3A[0]) == null ? undefined : var_core_value_sigBC1A.cells["length"]) ?? 0,
    tableSource: var_core_value_sigAAD1,
    rows: var_core_value_sig3F3A
  };
}
function c(var_core_value_sigA984, var_core_value_sigA504, var_core_value_sig05FF) {
  if (!var_core_value_sigA984 || var_core_value_sigA984.tableId !== var_core_value_sig05FF.tableId) return var_core_value_sigA984;
  if (var_core_value_sig05FF.kind === "delete-table") return null;
  let var_core_value_sigFBF0 = i(var_core_value_sigA504, var_core_value_sigA984.tableId);
  if (!var_core_value_sigFBF0) return null;
  let var_core_value_sig2F95 = {
    ...var_core_value_sigA984
  };
  if (var_core_value_sig05FF.kind === "insert-rows") var_core_value_sig2F95.startRow = l(var_core_value_sig2F95.startRow, var_core_value_sig05FF.index, var_core_value_sig05FF.count), var_core_value_sig2F95.endRow = l(var_core_value_sig2F95.endRow, var_core_value_sig05FF.index, var_core_value_sig05FF.count);else {
    if (var_core_value_sig05FF.kind === "insert-columns") var_core_value_sig2F95.startColumn = l(var_core_value_sig2F95.startColumn, var_core_value_sig05FF.index, var_core_value_sig05FF.count), var_core_value_sig2F95.endColumn = l(var_core_value_sig2F95.endColumn, var_core_value_sig05FF.index, var_core_value_sig05FF.count);else {
      if (var_core_value_sig05FF.kind === "delete-rows") {
        let [var_core_value_sigFBA4, var_core_value_sig4383] = u(var_core_value_sig2F95.startRow, var_core_value_sig2F95.endRow, var_core_value_sig05FF.index, var_core_value_sig05FF.count);
        var_core_value_sig2F95.startRow = var_core_value_sigFBA4, var_core_value_sig2F95.endRow = var_core_value_sig4383;
      } else {
        if (var_core_value_sig05FF.kind === "delete-columns") {
          let [var_core_value_sig4D4C, var_core_value_sigC9E0] = u(var_core_value_sig2F95.startColumn, var_core_value_sig2F95.endColumn, var_core_value_sig05FF.index, var_core_value_sig05FF.count);
          var_core_value_sig2F95.startColumn = var_core_value_sig4D4C, var_core_value_sig2F95.endColumn = var_core_value_sigC9E0;
        }
      }
    }
  }
  let var_core_value_sigF0E1 = var_core_value_sig05FF.kind === "insert-rows" ? var_core_value_sigFBF0.rowCount + var_core_value_sig05FF.count : Math.max(1, var_core_value_sigFBF0.rowCount - (var_core_value_sig05FF.kind === "delete-rows" ? var_core_value_sig05FF.count : 0)),
    var_core_value_sig2D8D = var_core_value_sig05FF.kind === "insert-columns" ? var_core_value_sigFBF0.columnCount + var_core_value_sig05FF.count : Math.max(1, var_core_value_sigFBF0.columnCount - (var_core_value_sig05FF.kind === "delete-columns" ? var_core_value_sig05FF.count : 0));
  return var_core_value_sig2F95.startRow = d(var_core_value_sig2F95.startRow, 0, var_core_value_sigF0E1 - 1), var_core_value_sig2F95.endRow = d(var_core_value_sig2F95.endRow, 0, var_core_value_sigF0E1 - 1), var_core_value_sig2F95.startColumn = d(var_core_value_sig2F95.startColumn, 0, var_core_value_sig2D8D - 1), var_core_value_sig2F95.endColumn = d(var_core_value_sig2F95.endColumn, 0, var_core_value_sig2D8D - 1), var_core_value_sig2F95.startRow > var_core_value_sig2F95.endRow && (var_core_value_sig2F95.endRow = var_core_value_sig2F95.startRow), var_core_value_sig2F95.startColumn > var_core_value_sig2F95.endColumn && (var_core_value_sig2F95.endColumn = var_core_value_sig2F95.startColumn), var_core_value_sig2F95;
}
function l(var_core_value_sigE5A6, var_core_value_sigF449, var_core_value_sig38C5) {
  return var_core_value_sigE5A6 >= var_core_value_sigF449 ? var_core_value_sigE5A6 + var_core_value_sig38C5 : var_core_value_sigE5A6;
}
function u(var_core_value_sigC87D, var_core_value_sigCCDC, var_core_value_sigC310, var_core_value_sigA4E8) {
  let var_core_value_sigDC07 = var_core_value_sigC310 + var_core_value_sigA4E8 - 1;
  if (var_core_value_sigCCDC < var_core_value_sigC310) return [var_core_value_sigC87D, var_core_value_sigCCDC];
  if (var_core_value_sigC87D > var_core_value_sigDC07) return [var_core_value_sigC87D - var_core_value_sigA4E8, var_core_value_sigCCDC - var_core_value_sigA4E8];
  let var_core_value_sig3474 = var_core_value_sigC87D < var_core_value_sigC310 ? var_core_value_sigC87D : var_core_value_sigC310,
    var_core_value_sig4E80 = Math.min(var_core_value_sigCCDC, var_core_value_sigDC07) - var_core_value_sigC310 + 1;
  return [var_core_value_sig3474, Math.max(var_core_value_sig3474, var_core_value_sigCCDC - var_core_value_sig4E80)];
}
function d(var_core_value_sigD23B, var_core_value_sig2B2A, var_core_value_sig0B5C) {
  return Math.min(Math.max(var_core_value_sigD23B, var_core_value_sig2B2A), var_core_value_sig0B5C);
}
function f(var_core_value_sig7D42) {
  return var_core_value_sig7D42;
}
function p(var_core_value_sig8FDE, var_core_value_sig78E6 = {}) {
  var var_core_value_sig541F;
  let var_core_value_sig417B = {
    ...var_core_value_sig8FDE,
    body: var_core_value_sig78E6.cloneBody === false ? var_core_value_sig8FDE.body : var_core_value_sig8FDE.body ? m(var_core_value_sig8FDE.body) : var_core_value_sig8FDE.body
  };
  return (var_core_value_sig541F = var_core_value_sig78E6.tableIds) != null && var_core_value_sig541F.length && var_core_value_sig8FDE.tableSource && (var_core_value_sig417B.tableSource = {
    ...var_core_value_sig8FDE.tableSource
  }, var_core_value_sig78E6.tableIds["forEach"](var_core_value_sigF051 => {
    var var_core_value_sig0B45;
    let var_core_value_sig36F8 = (var_core_value_sig0B45 = var_core_value_sig8FDE.tableSource) == null ? undefined : var_core_value_sig0B45[var_core_value_sigF051];
    var_core_value_sig36F8 && (var_core_value_sig417B.tableSource[var_core_value_sigF051] = h(var_core_value_sig36F8));
  })), var_core_value_sig417B;
}
function m(var_core_value_sigAA90) {
  var var_core_value_sigE92D, var_core_value_sig9940, var_core_value_sig682D, var_core_value_sig1435, var_core_value_sig4082, var_core_value_sigC049, var_core_value_sigE5C3, var_core_value_sigCCAA, var_core_value_sigF32D;
  return {
    ...var_core_value_sigAA90,
    paragraphs: (var_core_value_sigE92D = var_core_value_sigAA90.paragraphs) == null ? undefined : var_core_value_sigE92D.map(var_core_value_sig03E1 => ({
      ...var_core_value_sig03E1,
      bullet: v(var_core_value_sig03E1.bullet),
      paragraphStyle: v(var_core_value_sig03E1.paragraphStyle)
    })),
    sectionBreaks: (var_core_value_sig9940 = var_core_value_sigAA90.sectionBreaks) == null ? undefined : var_core_value_sig9940.map(var_core_value_sigBB57 => ({
      ...var_core_value_sigBB57
    })),
    textRuns: (var_core_value_sig682D = var_core_value_sigAA90.textRuns) == null ? undefined : var_core_value_sig682D.map(var_core_value_sig7C4A => ({
      ...var_core_value_sig7C4A
    })),
    tables: (var_core_value_sig1435 = var_core_value_sigAA90.tables) == null ? undefined : var_core_value_sig1435.map(var_core_value_sigE799 => ({
      ...var_core_value_sigE799
    })),
    columnGroups: (var_core_value_sig4082 = var_core_value_sigAA90.columnGroups) == null ? undefined : var_core_value_sig4082.map(var_core_value_sigB601 => {
      var var_core_value_sig8B71;
      return {
        ...var_core_value_sigB601,
        columns: (var_core_value_sig8B71 = var_core_value_sigB601.columns) == null ? undefined : var_core_value_sig8B71.map(var_core_value_sig362B => v(var_core_value_sig362B))
      };
    }),
    blockRanges: (var_core_value_sigC049 = var_core_value_sigAA90.blockRanges) == null ? undefined : var_core_value_sigC049.map(var_core_value_sigAEFB => ({
      ...var_core_value_sigAEFB
    })),
    customRanges: (var_core_value_sigE5C3 = var_core_value_sigAA90.customRanges) == null ? undefined : var_core_value_sigE5C3.map(var_core_value_sig826B => ({
      ...var_core_value_sig826B
    })),
    customDecorations: (var_core_value_sigCCAA = var_core_value_sigAA90.customDecorations) == null ? undefined : var_core_value_sigCCAA.map(var_core_value_sigCF89 => ({
      ...var_core_value_sigCF89
    })),
    customBlocks: (var_core_value_sigF32D = var_core_value_sigAA90.customBlocks) == null ? undefined : var_core_value_sigF32D.map(var_core_value_sig00CB => ({
      ...var_core_value_sig00CB
    }))
  };
}
function h(var_core_value_sig9427) {
  return {
    ...var_core_value_sig9427,
    dist: v(var_core_value_sig9427.dist),
    position: v(var_core_value_sig9427.position),
    size: v(var_core_value_sig9427.size),
    tableColumns: var_core_value_sig9427.tableColumns["map"](g),
    tableRows: var_core_value_sig9427.tableRows["map"](_)
  };
}
function g(var_core_value_sig21F4) {
  return {
    ...var_core_value_sig21F4,
    size: v(var_core_value_sig21F4.size)
  };
}
function _(var_core_value_sigA345) {
  return {
    ...var_core_value_sigA345,
    trHeight: v(var_core_value_sigA345.trHeight),
    tableCells: var_core_value_sigA345.tableCells["map"](var_core_value_sig77EE => ({
      ...var_core_value_sig77EE,
      backgroundColor: v(var_core_value_sig77EE.backgroundColor),
      borderBottom: v(var_core_value_sig77EE.borderBottom),
      borderLeft: v(var_core_value_sig77EE.borderLeft),
      borderRight: v(var_core_value_sig77EE.borderRight),
      borderTop: v(var_core_value_sig77EE.borderTop),
      margin: v(var_core_value_sig77EE.margin)
    }))
  };
}
function v(var_core_value_sigA468) {
  return Array.isArray(var_core_value_sigA468) ? var_core_value_sigA468.map(var_core_value_sig9F76 => v(var_core_value_sig9F76)) : !var_core_value_sigA468 || typeof var_core_value_sigA468 != "object" ? var_core_value_sigA468 : Object.fromEntries(Object.entries(var_core_value_sigA468).map(([var_core_value_sigB008, var_core_value_sig8721]) => [var_core_value_sigB008, v(var_core_value_sig8721)]));
}
function y(var_core_value_sig1561, var_core_value_sigDF14, var_core_value_sig842F) {
  var var_core_value_sigC4C0;
  let var_core_value_sig214A = (var_core_value_sigC4C0 = var_core_value_sig1561.tableSource) == null ? undefined : var_core_value_sigC4C0[var_core_value_sigDF14];
  if (!var_core_value_sig214A || !me(var_core_value_sig842F)) return false;
  try {
    return ge(var_core_value_sig214A, var_core_value_sig842F).every(var_core_value_sig5CA5 => E(var_core_value_sig5CA5) === 1 && D(var_core_value_sig5CA5) === 1);
  } catch {
    return false;
  }
}
function b(var_core_value_sigCCC3, var_core_value_sig986E, var_core_value_sig537C) {
  var var_core_value_sigBBBC;
  let var_core_value_sig5440 = (var_core_value_sigBBBC = var_core_value_sigCCC3.tableSource) == null ? undefined : var_core_value_sigBBBC[var_core_value_sig986E];
  if (!var_core_value_sig5440) return false;
  let var_core_value_sigE28B = null;
  try {
    let var_core_value_sig08BA = C(var_core_value_sig537C);
    var_core_value_sigE28B = ie(var_core_value_sig5440, var_core_value_sig08BA.startRow, var_core_value_sig08BA.startColumn);
  } catch {
    return false;
  }
  return !!var_core_value_sigE28B && me(var_core_value_sigE28B);
}
function ee(var_core_value_sig0FD9) {
  let var_core_value_sig5649 = C(var_core_value_sig0FD9);
  if (!y(var_core_value_sig0FD9.documentData, var_core_value_sig0FD9.tableId, var_core_value_sig5649)) throw Error("[DocsTable]: Cannot merge a non-rectangular or already merged selection.");
  let var_core_value_sigAF82 = p(var_core_value_sig0FD9.documentData, {
      cloneBody: false,
      tableIds: [var_core_value_sig0FD9.tableId]
    }),
    var_core_value_sig21A2 = he(var_core_value_sigAF82, var_core_value_sig0FD9.tableId),
    var_core_value_sig5C1D = var_core_value_sig21A2.tableRows[var_core_value_sig5649.startRow].tableCells[var_core_value_sig5649.startColumn];
  return var_core_value_sig5C1D.rowSpan = var_core_value_sig5649.endRow - var_core_value_sig5649.startRow + 1, var_core_value_sig5C1D.columnSpan = var_core_value_sig5649.endColumn - var_core_value_sig5649.startColumn + 1, T(var_core_value_sig21A2, var_core_value_sig5649, (var_core_value_sigDBB5, var_core_value_sigCFAC, var_core_value_sig237B) => {
    (var_core_value_sigCFAC !== var_core_value_sig5649.startRow || var_core_value_sig237B !== var_core_value_sig5649.startColumn) && (var_core_value_sigDBB5.rowSpan = 0, var_core_value_sigDBB5.columnSpan = 0);
  }), {
    nextDocumentData: var_core_value_sigAF82,
    range: var_core_value_sig5649
  };
}
function x(var_core_value_sig4CBA) {
  var var_core_value_sig8E65;
  let var_core_value_sig772C = C(var_core_value_sig4CBA),
    var_core_value_sigF309 = (var_core_value_sig8E65 = var_core_value_sig4CBA.documentData["tableSource"]) == null ? undefined : var_core_value_sig8E65[var_core_value_sig4CBA.tableId];
  if (!var_core_value_sigF309 || !y(var_core_value_sig4CBA.documentData, var_core_value_sig4CBA.tableId, var_core_value_sig772C)) return null;
  let var_core_value_sig44F9 = [];
  return T(var_core_value_sigF309, var_core_value_sig772C, (var_core_value_sigFEAB, var_core_value_sigE347, var_core_value_sig3C5B) => {
    let var_core_value_sig200B = var_core_value_sigE347 === var_core_value_sig772C.startRow && var_core_value_sig3C5B === var_core_value_sig772C.startColumn;
    S(var_core_value_sig44F9, var_core_value_sig4CBA.tableId, var_core_value_sigE347, var_core_value_sig3C5B, "rowSpan", var_core_value_sigFEAB.rowSpan, var_core_value_sig200B ? var_core_value_sig772C.endRow - var_core_value_sig772C.startRow + 1 : 0), S(var_core_value_sig44F9, var_core_value_sig4CBA.tableId, var_core_value_sigE347, var_core_value_sig3C5B, "columnSpan", var_core_value_sigFEAB.columnSpan, var_core_value_sig200B ? var_core_value_sig772C.endColumn - var_core_value_sig772C.startColumn + 1 : 0);
  }), {
    actions: re(var_core_value_sig44F9),
    range: var_core_value_sig772C
  };
}
function te(var_core_value_sigE532) {
  let var_core_value_sigF381 = p(var_core_value_sigE532.documentData, {
      cloneBody: false,
      tableIds: [var_core_value_sigE532.tableId]
    }),
    var_core_value_sigCB92 = he(var_core_value_sigF381, var_core_value_sigE532.tableId),
    var_core_value_sigC844 = C(var_core_value_sigE532),
    var_core_value_sig2ED4 = ie(var_core_value_sigCB92, var_core_value_sigC844.startRow, var_core_value_sigC844.startColumn);
  if (!b(var_core_value_sigE532.documentData, var_core_value_sigE532.tableId, var_core_value_sigC844) || !var_core_value_sig2ED4) throw Error("[DocsTable]: Cannot unmerge an unmerged cell.");
  return T(var_core_value_sigCB92, var_core_value_sig2ED4, var_core_value_sig3863 => {
    delete var_core_value_sig3863.rowSpan, delete var_core_value_sig3863.columnSpan;
  }), {
    nextDocumentData: var_core_value_sigF381,
    range: var_core_value_sig2ED4
  };
}
function ne(var_core_value_sig0477) {
  var var_core_value_sig6FDF;
  let var_core_value_sig27C4 = (var_core_value_sig6FDF = var_core_value_sig0477.documentData["tableSource"]) == null ? undefined : var_core_value_sig6FDF[var_core_value_sig0477.tableId],
    var_core_value_sig3E1A = C(var_core_value_sig0477),
    var_core_value_sig7FB0 = var_core_value_sig27C4 ? ie(var_core_value_sig27C4, var_core_value_sig3E1A.startRow, var_core_value_sig3E1A.startColumn) : null;
  if (!var_core_value_sig27C4 || !var_core_value_sig7FB0 || !b(var_core_value_sig0477.documentData, var_core_value_sig0477.tableId, var_core_value_sig3E1A)) return null;
  let var_core_value_sig5215 = [];
  return T(var_core_value_sig27C4, var_core_value_sig7FB0, (var_core_value_sigC97C, var_core_value_sigC4B1, var_core_value_sig1BD9) => {
    S(var_core_value_sig5215, var_core_value_sig0477.tableId, var_core_value_sigC4B1, var_core_value_sig1BD9, "rowSpan", var_core_value_sigC97C.rowSpan, undefined), S(var_core_value_sig5215, var_core_value_sig0477.tableId, var_core_value_sigC4B1, var_core_value_sig1BD9, "columnSpan", var_core_value_sigC97C.columnSpan, undefined);
  }), {
    actions: re(var_core_value_sig5215),
    range: var_core_value_sig7FB0
  };
}
function S(var_core_value_sig5204, var_core_value_sig5E11, var_core_value_sig4D58, var_core_value_sig2DBD, var_core_value_sig424E, var_core_value_sigF481, var_core_value_sigD7F2) {
  if (var_core_value_sigF481 === var_core_value_sigD7F2) return;
  let var_core_value_sig7CF3 = e.JSONX["getInstance"](),
    var_core_value_sig9DC6 = ["tableSource", var_core_value_sig5E11, "tableRows", var_core_value_sig4D58, "tableCells", var_core_value_sig2DBD, var_core_value_sig424E];
  var_core_value_sig5204.push(var_core_value_sigF481 === undefined ? var_core_value_sig7CF3.insertOp(var_core_value_sig9DC6, var_core_value_sigD7F2) : var_core_value_sigD7F2 === undefined ? var_core_value_sig7CF3.removeOp(var_core_value_sig9DC6, var_core_value_sigF481) : var_core_value_sig7CF3.replaceOp(var_core_value_sig9DC6, var_core_value_sigF481, var_core_value_sigD7F2));
}
function re(var_core_value_sig6643) {
  return var_core_value_sig6643.reduce((var_core_value_sigE43E, var_core_value_sigA937) => e.JSONX["compose"](var_core_value_sigE43E, var_core_value_sigA937), null);
}
function ie(var_core_value_sig4124, var_core_value_sigBF1C, var_core_value_sigEEEF) {
  var var_core_value_sig9A01;
  let var_core_value_sig674F = (var_core_value_sig9A01 = var_core_value_sig4124.tableRows[var_core_value_sigBF1C]) == null ? undefined : var_core_value_sig9A01.tableCells[var_core_value_sigEEEF];
  if (!var_core_value_sig674F) return null;
  if (E(var_core_value_sig674F) > 1 || D(var_core_value_sig674F) > 1) return {
    startRow: var_core_value_sigBF1C,
    endRow: var_core_value_sigBF1C + E(var_core_value_sig674F) - 1,
    startColumn: var_core_value_sigEEEF,
    endColumn: var_core_value_sigEEEF + D(var_core_value_sig674F) - 1
  };
  if (var_core_value_sig674F.rowSpan !== 0 && var_core_value_sig674F.columnSpan !== 0) return {
    startRow: var_core_value_sigBF1C,
    endRow: var_core_value_sigBF1C,
    startColumn: var_core_value_sigEEEF,
    endColumn: var_core_value_sigEEEF
  };
  for (let var_core_value_sigCAD5 = 0; var_core_value_sigCAD5 < var_core_value_sig4124.tableRows["length"]; var_core_value_sigCAD5++) {
    let var_core_value_sigE90F = var_core_value_sig4124.tableRows[var_core_value_sigCAD5];
    for (let var_core_value_sig186C = 0; var_core_value_sig186C < var_core_value_sigE90F.tableCells["length"]; var_core_value_sig186C++) {
      let var_core_value_sig76BA = var_core_value_sigE90F.tableCells[var_core_value_sig186C],
        var_core_value_sigFBFA = E(var_core_value_sig76BA),
        var_core_value_sigF602 = D(var_core_value_sig76BA);
      if (var_core_value_sigFBFA <= 1 && var_core_value_sigF602 <= 1) continue;
      let var_core_value_sig1BBD = {
        startRow: var_core_value_sigCAD5,
        endRow: var_core_value_sigCAD5 + var_core_value_sigFBFA - 1,
        startColumn: var_core_value_sig186C,
        endColumn: var_core_value_sig186C + var_core_value_sigF602 - 1
      };
      if (var_core_value_sigBF1C >= var_core_value_sig1BBD.startRow && var_core_value_sigBF1C <= var_core_value_sig1BBD.endRow && var_core_value_sigEEEF >= var_core_value_sig1BBD.startColumn && var_core_value_sigEEEF <= var_core_value_sig1BBD.endColumn) return var_core_value_sig1BBD;
    }
  }
  return null;
}
function ae(var_core_value_sigC8F6, var_core_value_sig8A26) {
  let var_core_value_sigD073 = C(var_core_value_sig8A26),
    var_core_value_sigF631 = true;
  for (; var_core_value_sigF631;) {
    var_core_value_sigF631 = false;
    for (let var_core_value_sigD955 = 0; var_core_value_sigD955 < var_core_value_sigC8F6.tableRows["length"]; var_core_value_sigD955++) {
      let var_core_value_sigF704 = var_core_value_sigC8F6.tableRows[var_core_value_sigD955];
      for (let var_core_value_sig3D7D = 0; var_core_value_sig3D7D < var_core_value_sigF704.tableCells["length"]; var_core_value_sig3D7D++) {
        let var_core_value_sig7524 = var_core_value_sigF704.tableCells[var_core_value_sig3D7D],
          var_core_value_sig2AD8 = E(var_core_value_sig7524),
          var_core_value_sig2AD0 = D(var_core_value_sig7524);
        if (var_core_value_sig2AD8 <= 1 && var_core_value_sig2AD0 <= 1) continue;
        let var_core_value_sig3EEE = {
          startRow: var_core_value_sigD955,
          endRow: var_core_value_sigD955 + var_core_value_sig2AD8 - 1,
          startColumn: var_core_value_sig3D7D,
          endColumn: var_core_value_sig3D7D + var_core_value_sig2AD0 - 1
        };
        if (!_e(var_core_value_sigD073, var_core_value_sig3EEE)) continue;
        let var_core_value_sigBC46 = {
          startRow: Math.min(var_core_value_sigD073.startRow, var_core_value_sig3EEE.startRow),
          endRow: Math.max(var_core_value_sigD073.endRow, var_core_value_sig3EEE.endRow),
          startColumn: Math.min(var_core_value_sigD073.startColumn, var_core_value_sig3EEE.startColumn),
          endColumn: Math.max(var_core_value_sigD073.endColumn, var_core_value_sig3EEE.endColumn)
        };
        ve(var_core_value_sigBC46, var_core_value_sigD073) || (var_core_value_sigD073 = var_core_value_sigBC46, var_core_value_sigF631 = true);
      }
    }
  }
  return var_core_value_sigD073;
}
function oe(var_core_value_sig2278, var_core_value_sig7053, var_core_value_sig52F1, var_core_value_sig1E74 = w(var_core_value_sig2278)) {
  ue(var_core_value_sig2278, var_core_value_sig1E74, var_core_value_sigE503 => var_core_value_sig7053 <= var_core_value_sigE503.startRow ? {
    ...var_core_value_sigE503,
    startRow: var_core_value_sigE503.startRow + var_core_value_sig52F1,
    endRow: var_core_value_sigE503.endRow + var_core_value_sig52F1
  } : var_core_value_sig7053 <= var_core_value_sigE503.endRow ? {
    ...var_core_value_sigE503,
    endRow: var_core_value_sigE503.endRow + var_core_value_sig52F1
  } : var_core_value_sigE503);
}
function se(var_core_value_sig1E84, var_core_value_sig133B, var_core_value_sig69B8, var_core_value_sig983D = w(var_core_value_sig1E84)) {
  ue(var_core_value_sig1E84, var_core_value_sig983D, var_core_value_sig48DD => var_core_value_sig133B <= var_core_value_sig48DD.startColumn ? {
    ...var_core_value_sig48DD,
    startColumn: var_core_value_sig48DD.startColumn + var_core_value_sig69B8,
    endColumn: var_core_value_sig48DD.endColumn + var_core_value_sig69B8
  } : var_core_value_sig133B <= var_core_value_sig48DD.endColumn ? {
    ...var_core_value_sig48DD,
    endColumn: var_core_value_sig48DD.endColumn + var_core_value_sig69B8
  } : var_core_value_sig48DD);
}
function ce(var_core_value_sig9A03, var_core_value_sig3363, var_core_value_sigF64A, var_core_value_sig25EC = w(var_core_value_sig9A03)) {
  ue(var_core_value_sig9A03, var_core_value_sig25EC, var_core_value_sig5E6A => {
    let var_core_value_sigB7FC = [];
    for (let var_core_value_sigEFD4 = var_core_value_sig5E6A.startRow; var_core_value_sigEFD4 <= var_core_value_sig5E6A.endRow; var_core_value_sigEFD4++) {
      let var_core_value_sig48BD = pe(var_core_value_sigEFD4, var_core_value_sig3363, var_core_value_sigF64A);
      var_core_value_sig48BD != null && var_core_value_sigB7FC.push(var_core_value_sig48BD);
    }
    return var_core_value_sigB7FC.length ? {
      ...var_core_value_sig5E6A,
      startRow: Math.min(...var_core_value_sigB7FC),
      endRow: Math.max(...var_core_value_sigB7FC)
    } : null;
  });
}
function le(var_core_value_sigA790, var_core_value_sig9A5E, var_core_value_sig01B9, var_core_value_sigD6A9 = w(var_core_value_sigA790)) {
  ue(var_core_value_sigA790, var_core_value_sigD6A9, var_core_value_sig9CD9 => {
    let var_core_value_sigFD0C = [];
    for (let var_core_value_sig861B = var_core_value_sig9CD9.startColumn; var_core_value_sig861B <= var_core_value_sig9CD9.endColumn; var_core_value_sig861B++) {
      let var_core_value_sig429F = pe(var_core_value_sig861B, var_core_value_sig9A5E, var_core_value_sig01B9);
      var_core_value_sig429F != null && var_core_value_sigFD0C.push(var_core_value_sig429F);
    }
    return var_core_value_sigFD0C.length ? {
      ...var_core_value_sig9CD9,
      startColumn: Math.min(...var_core_value_sigFD0C),
      endColumn: Math.max(...var_core_value_sigFD0C)
    } : null;
  });
}
function C(var_core_value_sig0FCF) {
  return {
    startRow: Math.min(var_core_value_sig0FCF.startRow, var_core_value_sig0FCF.endRow),
    endRow: Math.max(var_core_value_sig0FCF.startRow, var_core_value_sig0FCF.endRow),
    startColumn: Math.min(var_core_value_sig0FCF.startColumn, var_core_value_sig0FCF.endColumn),
    endColumn: Math.max(var_core_value_sig0FCF.startColumn, var_core_value_sig0FCF.endColumn)
  };
}
function ue(var_core_value_sigCF96, var_core_value_sigC4E9, var_core_value_sigF612) {
  de(var_core_value_sigCF96), var_core_value_sigC4E9.forEach(var_core_value_sig849B => {
    let var_core_value_sig5F1A = var_core_value_sigF612(var_core_value_sig849B);
    var_core_value_sig5F1A && fe(var_core_value_sigCF96, var_core_value_sig5F1A);
  });
}
function w(var_core_value_sigAA6C) {
  let var_core_value_sig8BFA = [];
  return var_core_value_sigAA6C.tableRows["forEach"]((var_core_value_sigB455, var_core_value_sig5241) => {
    var_core_value_sigB455.tableCells["forEach"]((var_core_value_sig5237, var_core_value_sigBB00) => {
      let var_core_value_sig7E54 = E(var_core_value_sig5237),
        var_core_value_sig9A8D = D(var_core_value_sig5237);
      var_core_value_sig7E54 <= 1 && var_core_value_sig9A8D <= 1 || var_core_value_sig8BFA.push({
        startRow: var_core_value_sig5241,
        endRow: var_core_value_sig5241 + var_core_value_sig7E54 - 1,
        startColumn: var_core_value_sigBB00,
        endColumn: var_core_value_sigBB00 + var_core_value_sig9A8D - 1
      });
    });
  }), var_core_value_sig8BFA;
}
function de(var_core_value_sig236B) {
  var_core_value_sig236B.tableRows["forEach"](var_core_value_sigC6E5 => {
    var_core_value_sigC6E5.tableCells["forEach"](var_core_value_sigC259 => {
      delete var_core_value_sigC259.rowSpan, delete var_core_value_sigC259.columnSpan;
    });
  });
}
function fe(var_core_value_sig1951, var_core_value_sigFEA0) {
  var var_core_value_sig931A;
  let var_core_value_sigEE7D = C(var_core_value_sigFEA0),
    var_core_value_sig3585 = var_core_value_sigEE7D.endRow - var_core_value_sigEE7D.startRow + 1,
    var_core_value_sig31A8 = var_core_value_sigEE7D.endColumn - var_core_value_sigEE7D.startColumn + 1;
  if (var_core_value_sig3585 <= 0 || var_core_value_sig31A8 <= 0 || var_core_value_sig3585 === 1 && var_core_value_sig31A8 === 1) return;
  let var_core_value_sigA4DA = (var_core_value_sig931A = var_core_value_sig1951.tableRows[var_core_value_sigEE7D.startRow]) == null ? undefined : var_core_value_sig931A.tableCells[var_core_value_sigEE7D.startColumn];
  var_core_value_sigA4DA && (var_core_value_sigA4DA.rowSpan = var_core_value_sig3585, var_core_value_sigA4DA.columnSpan = var_core_value_sig31A8, T(var_core_value_sig1951, var_core_value_sigEE7D, (var_core_value_sigCEFB, var_core_value_sig1537, var_core_value_sigE4C6) => {
    (var_core_value_sig1537 !== var_core_value_sigEE7D.startRow || var_core_value_sigE4C6 !== var_core_value_sigEE7D.startColumn) && (var_core_value_sigCEFB.rowSpan = 0, var_core_value_sigCEFB.columnSpan = 0);
  }));
}
function pe(var_core_value_sig6FC0, var_core_value_sig6217, var_core_value_sigB805) {
  return var_core_value_sig6FC0 < var_core_value_sig6217 ? var_core_value_sig6FC0 : var_core_value_sig6FC0 > var_core_value_sigB805 ? var_core_value_sig6FC0 - (var_core_value_sigB805 - var_core_value_sig6217 + 1) : null;
}
function me(var_core_value_sig4FAE) {
  return var_core_value_sig4FAE.startRow !== var_core_value_sig4FAE.endRow || var_core_value_sig4FAE.startColumn !== var_core_value_sig4FAE.endColumn;
}
function he(var_core_value_sig1FCC, var_core_value_sigB7F9) {
  var var_core_value_sigB1A2;
  let var_core_value_sig526D = (var_core_value_sigB1A2 = var_core_value_sig1FCC.tableSource) == null ? undefined : var_core_value_sigB1A2[var_core_value_sigB7F9];
  if (!var_core_value_sig526D) throw Error("[DocsTable]: Table " + var_core_value_sigB7F9 + " is not found.");
  return var_core_value_sig526D;
}
function ge(var_core_value_sigBDB5, var_core_value_sig59CE) {
  let var_core_value_sig3AD7 = [];
  return T(var_core_value_sigBDB5, var_core_value_sig59CE, var_core_value_sig4313 => var_core_value_sig3AD7.push(var_core_value_sig4313)), var_core_value_sig3AD7;
}
function T(var_core_value_sig04E4, var_core_value_sigD8F0, var_core_value_sig1475) {
  for (let var_core_value_sigFC87 = var_core_value_sigD8F0.startRow; var_core_value_sigFC87 <= var_core_value_sigD8F0.endRow; var_core_value_sigFC87++) for (let var_core_value_sig9C9F = var_core_value_sigD8F0.startColumn; var_core_value_sig9C9F <= var_core_value_sigD8F0.endColumn; var_core_value_sig9C9F++) {
    var var_core_value_sig08B7;
    let var_core_value_sigF62A = (var_core_value_sig08B7 = var_core_value_sig04E4.tableRows[var_core_value_sigFC87]) == null ? undefined : var_core_value_sig08B7.tableCells[var_core_value_sig9C9F];
    if (!var_core_value_sigF62A) throw Error("[DocsTable]: Cell range is out of bounds.");
    var_core_value_sig1475(var_core_value_sigF62A, var_core_value_sigFC87, var_core_value_sig9C9F);
  }
}
function E(var_core_value_sig2008) {
  return var_core_value_sig2008.rowSpan == null ? 1 : var_core_value_sig2008.rowSpan;
}
function D(var_core_value_sig496B) {
  return var_core_value_sig496B.columnSpan == null ? 1 : var_core_value_sig496B.columnSpan;
}
function _e(var_core_value_sig7161, var_core_value_sig2AB8) {
  return var_core_value_sig7161.startRow <= var_core_value_sig2AB8.endRow && var_core_value_sig7161.endRow >= var_core_value_sig2AB8.startRow && var_core_value_sig7161.startColumn <= var_core_value_sig2AB8.endColumn && var_core_value_sig7161.endColumn >= var_core_value_sig2AB8.startColumn;
}
function ve(var_core_value_sig3FCF, var_core_value_sig675A) {
  return var_core_value_sig3FCF.startRow === var_core_value_sig675A.startRow && var_core_value_sig3FCF.endRow === var_core_value_sig675A.endRow && var_core_value_sig3FCF.startColumn === var_core_value_sig675A.startColumn && var_core_value_sig3FCF.endColumn === var_core_value_sig675A.endColumn;
}
function ye(var_core_value_sig837F) {
  return {
    ...var_core_value_sig837F,
    columnTypes: var_core_value_sig837F.columnTypes ? {
      ...var_core_value_sig837F.columnTypes
    } : undefined
  };
}
function O(var_core_value_sig9D6E) {
  let var_core_value_sigB205 = {};
  return Object.entries((var_core_value_sig9D6E == null ? undefined : var_core_value_sig9D6E.tables) ?? {}).forEach(([var_core_value_sig156F, var_core_value_sigDD51]) => {
    var_core_value_sigB205[var_core_value_sig156F] = ye(var_core_value_sigDD51);
  }), {
    tables: var_core_value_sigB205
  };
}
function be(var_core_value_sigBF78, var_core_value_sig8AF3, var_core_value_sigA0CC) {
  let var_core_value_sigB3A1 = O(var_core_value_sigBF78);
  return {
    tables: {
      ...var_core_value_sigB3A1.tables,
      [var_core_value_sig8AF3]: {
        ...(var_core_value_sigB3A1.tables[var_core_value_sig8AF3] ?? {}),
        headerRowCount: Math.max(0, var_core_value_sigA0CC)
      }
    }
  };
}
function xe(var_core_value_sig1FB9, var_core_value_sig53A9, var_core_value_sigDACD) {
  let var_core_value_sig691E = O(var_core_value_sig1FB9);
  return {
    tables: {
      ...var_core_value_sig691E.tables,
      [var_core_value_sig53A9]: {
        ...(var_core_value_sig691E.tables[var_core_value_sig53A9] ?? {}),
        titleRow: var_core_value_sigDACD
      }
    }
  };
}
function Se(var_core_value_sigD6D6, var_core_value_sig0347, var_core_value_sig52A3, var_core_value_sigAD91) {
  let var_core_value_sigF64E = O(var_core_value_sigD6D6),
    var_core_value_sig9B3D = var_core_value_sigF64E.tables[var_core_value_sig0347] ?? {};
  return {
    tables: {
      ...var_core_value_sigF64E.tables,
      [var_core_value_sig0347]: {
        ...var_core_value_sig9B3D,
        columnTypes: {
          ...(var_core_value_sig9B3D.columnTypes ?? {}),
          [var_core_value_sig52A3]: var_core_value_sigAD91
        }
      }
    }
  };
}
let Ce = function (var_core_value_sigB217) {
  return var_core_value_sigB217.Above = "above", var_core_value_sigB217.Below = "below", var_core_value_sigB217.Left = "left", var_core_value_sigB217.Right = "right", var_core_value_sigB217;
}({});
const we = {
    Above: "above",
    Below: "below"
  },
  Te = {
    Left: "left",
    Right: "right"
  };
function Ee(var_core_value_sig1FE6) {
  let {
      documentData: var_core_value_sig2471,
      tableId: var_core_value_sigD1FC,
      row: var_core_value_sigE2F9,
      count: var_core_value_sigD689,
      position: var_core_value_sig7AE3
    } = var_core_value_sig1FE6,
    var_core_value_sig1EB3 = p(var_core_value_sig2471, {
      tableIds: [var_core_value_sigD1FC]
    }),
    var_core_value_sigE120 = k(var_core_value_sig1EB3, var_core_value_sigD1FC),
    var_core_value_sigD6E7 = A(var_core_value_sig1EB3, var_core_value_sigD1FC),
    var_core_value_sig3669 = var_core_value_sig7AE3 === "above" ? var_core_value_sigE2F9 : var_core_value_sigE2F9 + 1,
    var_core_value_sig5CBC = var_core_value_sigE120.tableRows[Math.min(var_core_value_sigE2F9, var_core_value_sigE120.tableRows["length"] - 1)],
    var_core_value_sig20BE = Array.from({
      length: var_core_value_sigD689
    }, () => Ne(var_core_value_sig5CBC)),
    var_core_value_sig6BD0 = w(var_core_value_sigE120),
    var_core_value_sig8C15 = var_core_value_sig7AE3 === "above" ? a(var_core_value_sigD6E7, var_core_value_sigE2F9).startOffset : a(var_core_value_sigD6E7, var_core_value_sigE2F9).endOffset + 1,
    var_core_value_sig6DF7 = Le(Fe(var_core_value_sigE120.tableColumns["length"]), var_core_value_sigD689);
  return var_core_value_sigE120.tableRows["splice"](var_core_value_sig3669, 0, ...var_core_value_sig20BE), oe(var_core_value_sigE120, var_core_value_sig3669, var_core_value_sigD689, var_core_value_sig6BD0), He(var_core_value_sig1EB3, var_core_value_sigD1FC, var_core_value_sig8C15, var_core_value_sig6DF7), {
    nextDocumentData: var_core_value_sig1EB3,
    nextMetadata: var_core_value_sig1FE6.metadata ? O(var_core_value_sig1FE6.metadata) : undefined,
    cursor: {
      row: var_core_value_sig3669,
      column: 0
    }
  };
}
function De(var_core_value_sigB411) {
  var var_core_value_sigA81B;
  let {
      documentData: var_core_value_sigFE8D,
      tableId: var_core_value_sig8595,
      column: var_core_value_sigF8DE,
      count: var_core_value_sigFE76,
      position: var_core_value_sig84C8
    } = var_core_value_sigB411,
    var_core_value_sig80C0 = p(var_core_value_sigFE8D, {
      tableIds: [var_core_value_sig8595]
    }),
    var_core_value_sig22B4 = k(var_core_value_sig80C0, var_core_value_sig8595),
    var_core_value_sigBB37 = A(var_core_value_sig80C0, var_core_value_sig8595),
    var_core_value_sig0C51 = var_core_value_sig84C8 === "left" ? var_core_value_sigF8DE : var_core_value_sigF8DE + 1,
    var_core_value_sigADA4 = var_core_value_sig22B4.tableColumns[Math.min(var_core_value_sigF8DE, var_core_value_sig22B4.tableColumns["length"] - 1)],
    var_core_value_sig0E48 = var_core_value_sigB411.insertedColumnWidth ?? var_core_value_sigADA4.size["width"].v,
    var_core_value_sig495B = Array.from({
      length: var_core_value_sigFE76
    }, () => {
      let var_core_value_sigF057 = e.Tools["deepClone"](var_core_value_sigADA4);
      return var_core_value_sigF057.size["width"].v = var_core_value_sig0E48, var_core_value_sigF057;
    }),
    var_core_value_sig310C = w(var_core_value_sig22B4);
  return var_core_value_sig22B4.tableColumns["splice"](var_core_value_sig0C51, 0, ...var_core_value_sig495B), var_core_value_sig22B4.tableRows["forEach"](var_core_value_sig72F6 => {
    let var_core_value_sig9FBA = var_core_value_sig72F6.tableCells[Math.min(var_core_value_sigF8DE, var_core_value_sig72F6.tableCells["length"] - 1)],
      var_core_value_sigFE01 = Array.from({
        length: var_core_value_sigFE76
      }, () => Pe(var_core_value_sig9FBA));
    var_core_value_sig72F6.tableCells["splice"](var_core_value_sig0C51, 0, ...var_core_value_sigFE01);
  }), se(var_core_value_sig22B4, var_core_value_sig0C51, var_core_value_sigFE76, var_core_value_sig310C), Re(var_core_value_sig80C0, var_core_value_sig8595, var_core_value_sigBB37, var_core_value_sigF8DE, var_core_value_sigFE76, var_core_value_sig84C8), var_core_value_sigB411.preserveTotalWidth ?? true ? tt(var_core_value_sig22B4, var_core_value_sig0E48 * var_core_value_sigFE76) : (var_core_value_sigA81B = var_core_value_sig22B4.size) != null && var_core_value_sigA81B.width && (var_core_value_sig22B4.size["width"].v = var_core_value_sig22B4.tableColumns["reduce"]((var_core_value_sigA2CE, var_core_value_sig1975) => var_core_value_sigA2CE + var_core_value_sig1975.size["width"].v, 0)), {
    nextDocumentData: var_core_value_sig80C0,
    nextMetadata: var_core_value_sigB411.metadata ? O(var_core_value_sigB411.metadata) : undefined,
    cursor: {
      row: 0,
      column: var_core_value_sig0C51
    }
  };
}
function Oe(var_core_value_sig759E) {
  let {
      documentData: var_core_value_sig6C80,
      metadata: var_core_value_sig6B99,
      tableId: var_core_value_sig6ADC
    } = var_core_value_sig759E,
    var_core_value_sig41AD = p(var_core_value_sig6C80, {
      tableIds: [var_core_value_sig6ADC]
    }),
    var_core_value_sigDBC2 = k(var_core_value_sig41AD, var_core_value_sig6ADC),
    var_core_value_sig7739 = Math.min(var_core_value_sig759E.startRow, var_core_value_sig759E.endRow),
    var_core_value_sig4040 = Math.max(var_core_value_sig759E.startRow, var_core_value_sig759E.endRow),
    var_core_value_sig1AAA = var_core_value_sig4040 - var_core_value_sig7739 + 1,
    var_core_value_sig58DB = w(var_core_value_sigDBC2);
  return var_core_value_sig1AAA >= var_core_value_sigDBC2.tableRows["length"] ? {
    ...Ae({
      documentData: var_core_value_sig6C80,
      metadata: var_core_value_sig6B99,
      tableId: var_core_value_sig6ADC
    }),
    deleteTable: true
  } : (ze(var_core_value_sig41AD, var_core_value_sig6ADC, var_core_value_sig7739, var_core_value_sig4040), var_core_value_sigDBC2.tableRows["splice"](var_core_value_sig7739, var_core_value_sig1AAA), ce(var_core_value_sigDBC2, var_core_value_sig7739, var_core_value_sig4040, var_core_value_sig58DB), {
    nextDocumentData: var_core_value_sig41AD,
    nextMetadata: nt(var_core_value_sig6B99, var_core_value_sig6ADC, var_core_value_sig7739, var_core_value_sig4040),
    cursor: {
      row: Math.min(var_core_value_sig7739, var_core_value_sigDBC2.tableRows["length"] - 1),
      column: 0
    }
  });
}
function ke(var_core_value_sig4840) {
  let {
      documentData: var_core_value_sigB76D,
      metadata: var_core_value_sig1015,
      tableId: var_core_value_sig6223
    } = var_core_value_sig4840,
    var_core_value_sigC6B6 = p(var_core_value_sigB76D, {
      tableIds: [var_core_value_sig6223]
    }),
    var_core_value_sig498A = k(var_core_value_sigC6B6, var_core_value_sig6223),
    var_core_value_sigEF45 = Math.min(var_core_value_sig4840.startColumn, var_core_value_sig4840.endColumn),
    var_core_value_sig36FE = Math.max(var_core_value_sig4840.startColumn, var_core_value_sig4840.endColumn),
    var_core_value_sig3AF5 = var_core_value_sig36FE - var_core_value_sigEF45 + 1,
    var_core_value_sig14E6 = w(var_core_value_sig498A);
  return var_core_value_sig3AF5 >= var_core_value_sig498A.tableColumns["length"] ? {
    ...Ae({
      documentData: var_core_value_sigB76D,
      metadata: var_core_value_sig1015,
      tableId: var_core_value_sig6223
    }),
    deleteTable: true
  } : (Be(var_core_value_sigC6B6, var_core_value_sig6223, var_core_value_sigEF45, var_core_value_sig36FE), var_core_value_sig498A.tableColumns["splice"](var_core_value_sigEF45, var_core_value_sig3AF5), var_core_value_sig498A.tableRows["forEach"](var_core_value_sig6EA1 => var_core_value_sig6EA1.tableCells["splice"](var_core_value_sigEF45, var_core_value_sig3AF5)), le(var_core_value_sig498A, var_core_value_sigEF45, var_core_value_sig36FE, var_core_value_sig14E6), {
    nextDocumentData: var_core_value_sigC6B6,
    nextMetadata: var_core_value_sig1015 ? O(var_core_value_sig1015) : undefined,
    cursor: {
      row: 0,
      column: Math.min(var_core_value_sigEF45, var_core_value_sig498A.tableColumns["length"] - 1)
    }
  });
}
function Ae(var_core_value_sig8690) {
  let {
      documentData: var_core_value_sigDF29,
      tableId: var_core_value_sigC0F8
    } = var_core_value_sig8690,
    var_core_value_sig3C75 = p(var_core_value_sigDF29),
    var_core_value_sig992D = {
      ...(var_core_value_sig3C75.tableSource ?? {})
    },
    var_core_value_sigE4E4 = var_core_value_sig8690.metadata ? O(var_core_value_sig8690.metadata) : undefined;
  return Ve(var_core_value_sig3C75, var_core_value_sigC0F8), delete var_core_value_sig992D[var_core_value_sigC0F8], var_core_value_sig3C75.tableSource = var_core_value_sig992D, var_core_value_sigE4E4 && delete var_core_value_sigE4E4.tables[var_core_value_sigC0F8], {
    nextDocumentData: var_core_value_sig3C75,
    nextMetadata: var_core_value_sigE4E4,
    cursor: {
      row: 0,
      column: 0
    },
    deleteTable: true
  };
}
function je(var_core_value_sigA4B0) {
  let var_core_value_sig5F50 = p(var_core_value_sigA4B0.documentData, {
      tableIds: [var_core_value_sigA4B0.tableId]
    }),
    var_core_value_sig4494 = k(var_core_value_sig5F50, var_core_value_sigA4B0.tableId),
    var_core_value_sigFFAF = A(var_core_value_sig5F50, var_core_value_sigA4B0.tableId),
    var_core_value_sig478B = var_core_value_sigA4B0.count ?? 1,
    var_core_value_sig1E21 = qe(var_core_value_sigA4B0.fromRow, var_core_value_sig4494.tableRows["length"] - 1),
    var_core_value_sig9DBF = qe(var_core_value_sigA4B0.toRow, var_core_value_sig4494.tableRows["length"] - 1),
    var_core_value_sig36CC = Math.min(var_core_value_sig4494.tableRows["length"] - 1, var_core_value_sig1E21 + var_core_value_sig478B - 1),
    var_core_value_sigA568 = var_core_value_sig36CC - var_core_value_sig1E21 + 1,
    var_core_value_sigD22D = var_core_value_sigA4B0.position === "above" ? var_core_value_sig9DBF : var_core_value_sig9DBF + 1;
  if (var_core_value_sigA568 <= 0 || var_core_value_sigD22D >= var_core_value_sig1E21 && var_core_value_sigD22D <= var_core_value_sig36CC + 1) return {
    nextDocumentData: var_core_value_sig5F50,
    nextMetadata: var_core_value_sigA4B0.metadata ? O(var_core_value_sigA4B0.metadata) : undefined,
    cursor: {
      row: var_core_value_sig1E21,
      column: 0
    }
  };
  let var_core_value_sig85D5 = var_core_value_sig4494.tableRows["splice"](var_core_value_sig1E21, var_core_value_sigA568),
    var_core_value_sig5D2E = var_core_value_sigD22D > var_core_value_sig36CC ? var_core_value_sigD22D - var_core_value_sigA568 : var_core_value_sigD22D;
  var_core_value_sig4494.tableRows["splice"](var_core_value_sig5D2E, 0, ...var_core_value_sig85D5);
  let var_core_value_sig7221 = a(var_core_value_sigFFAF, var_core_value_sig1E21).startOffset,
    var_core_value_sig0A5A = a(var_core_value_sigFFAF, var_core_value_sig36CC).endOffset + 1,
    var_core_value_sigE6D6 = var_core_value_sigD22D > var_core_value_sig36CC ? a(var_core_value_sigFFAF, Math.min(var_core_value_sig9DBF, var_core_value_sigFFAF.rowCount - 1)).endOffset + 1 : a(var_core_value_sigFFAF, var_core_value_sig9DBF).startOffset;
  return Ke(var_core_value_sig5F50.body, var_core_value_sig7221, var_core_value_sig0A5A, var_core_value_sigE6D6), {
    nextDocumentData: var_core_value_sig5F50,
    nextMetadata: var_core_value_sigA4B0.metadata ? O(var_core_value_sigA4B0.metadata) : undefined,
    cursor: {
      row: var_core_value_sig5D2E,
      column: 0
    }
  };
}
function Me(var_core_value_sig8507) {
  let var_core_value_sig8A7F = p(var_core_value_sig8507.documentData, {
      tableIds: [var_core_value_sig8507.tableId]
    }),
    var_core_value_sig9E81 = k(var_core_value_sig8A7F, var_core_value_sig8507.tableId),
    var_core_value_sig8295 = A(var_core_value_sig8A7F, var_core_value_sig8507.tableId),
    var_core_value_sigA975 = var_core_value_sig8507.count ?? 1,
    var_core_value_sig1263 = qe(var_core_value_sig8507.fromColumn, var_core_value_sig9E81.tableColumns["length"] - 1),
    var_core_value_sig457C = qe(var_core_value_sig8507.toColumn, var_core_value_sig9E81.tableColumns["length"] - 1),
    var_core_value_sigA4E6 = Math.min(var_core_value_sig9E81.tableColumns["length"] - 1, var_core_value_sig1263 + var_core_value_sigA975 - 1),
    var_core_value_sig934F = var_core_value_sigA4E6 - var_core_value_sig1263 + 1,
    var_core_value_sig74A7 = var_core_value_sig8507.position === "left" ? var_core_value_sig457C : var_core_value_sig457C + 1;
  if (var_core_value_sig934F <= 0 || var_core_value_sig74A7 >= var_core_value_sig1263 && var_core_value_sig74A7 <= var_core_value_sigA4E6 + 1) return {
    nextDocumentData: var_core_value_sig8A7F,
    nextMetadata: var_core_value_sig8507.metadata ? O(var_core_value_sig8507.metadata) : undefined,
    cursor: {
      row: 0,
      column: var_core_value_sig1263
    }
  };
  let var_core_value_sig3685 = var_core_value_sig9E81.tableColumns["splice"](var_core_value_sig1263, var_core_value_sig934F),
    var_core_value_sigC621 = var_core_value_sig74A7 > var_core_value_sigA4E6 ? var_core_value_sig74A7 - var_core_value_sig934F : var_core_value_sig74A7;
  return var_core_value_sig9E81.tableColumns["splice"](var_core_value_sigC621, 0, ...var_core_value_sig3685), var_core_value_sig9E81.tableRows["forEach"](var_core_value_sig029F => {
    let var_core_value_sig3767 = var_core_value_sig029F.tableCells["splice"](var_core_value_sig1263, var_core_value_sig934F);
    var_core_value_sig029F.tableCells["splice"](var_core_value_sigC621, 0, ...var_core_value_sig3767);
  }), var_core_value_sig8295.rows["forEach"](var_core_value_sig670B => {
    let var_core_value_sig6912 = var_core_value_sig670B.cells[var_core_value_sig1263].startOffset,
      var_core_value_sigE235 = var_core_value_sig670B.cells[var_core_value_sigA4E6].endOffset + 1,
      var_core_value_sig7664 = var_core_value_sig74A7 > var_core_value_sigA4E6 ? var_core_value_sig670B.cells[Math.min(var_core_value_sig457C, var_core_value_sig670B.cells["length"] - 1)].endOffset + 1 : var_core_value_sig670B.cells[var_core_value_sig457C].startOffset;
    Ke(var_core_value_sig8A7F.body, var_core_value_sig6912, var_core_value_sigE235, var_core_value_sig7664);
  }), {
    nextDocumentData: var_core_value_sig8A7F,
    nextMetadata: var_core_value_sig8507.metadata ? O(var_core_value_sig8507.metadata) : undefined,
    cursor: {
      row: 0,
      column: var_core_value_sigC621
    }
  };
}
function k(var_core_value_sig86D7, var_core_value_sig431B) {
  var var_core_value_sig5C7C;
  let var_core_value_sig87E2 = (var_core_value_sig5C7C = var_core_value_sig86D7.tableSource) == null ? undefined : var_core_value_sig5C7C[var_core_value_sig431B];
  if (!var_core_value_sig87E2) throw Error("[DocsTable]: Table " + var_core_value_sig431B + "\x20is\x20not\x20found.");
  return var_core_value_sig87E2;
}
function A(var_core_value_sig2E04, var_core_value_sig2EDD) {
  let var_core_value_sig27D2 = i(var_core_value_sig2E04, var_core_value_sig2EDD);
  if (!var_core_value_sig27D2) throw Error("[DocsTable]: Table " + var_core_value_sig2EDD + " range is not found.");
  return var_core_value_sig27D2;
}
function Ne(var_core_value_sig355D) {
  let var_core_value_sig8B21 = e.Tools["deepClone"](var_core_value_sig355D);
  return var_core_value_sig8B21.tableCells = var_core_value_sig355D.tableCells["map"](var_core_value_sig2281 => Pe(var_core_value_sig2281)), var_core_value_sig8B21;
}
function Pe(var_core_value_sigEB36) {
  return e.Tools["deepClone"]({
    ...var_core_value_sigEB36
  });
}
function Fe(var_core_value_sig5C27) {
  return "" + e.DataStreamTreeTokenType["TABLE_ROW_START"] + Le(Ie(), var_core_value_sig5C27) + e.DataStreamTreeTokenType["TABLE_ROW_END"];
}
function Ie() {
  return e.DataStreamTreeTokenType["TABLE_CELL_START"] + "\x0d\x0a" + e.DataStreamTreeTokenType["TABLE_CELL_END"];
}
function Le(var_core_value_sigD494, var_core_value_sigBF6D) {
  return Array.from({
    length: var_core_value_sigBF6D
  }, () => var_core_value_sigD494).join("");
}
function Re(var_core_value_sigD051, var_core_value_sig16D9, var_core_value_sigF378, var_core_value_sig5F6C, var_core_value_sig7E85, var_core_value_sigF204) {
  let var_core_value_sig7A15 = Le(Ie(), var_core_value_sig7E85),
    var_core_value_sigEEA6 = var_core_value_sigF378.rows["map"](var_core_value_sig5E86 => {
      let var_core_value_sig6998 = var_core_value_sig5E86.cells[var_core_value_sig5F6C];
      return var_core_value_sigF204 === "left" ? var_core_value_sig6998.startOffset : var_core_value_sig6998.endOffset + 1;
    }).sort((var_core_value_sigF639, var_core_value_sigEAE5) => var_core_value_sigEAE5 - var_core_value_sigF639);
  for (let var_core_value_sigE94C of var_core_value_sigEEA6) We(var_core_value_sigD051.body, var_core_value_sigE94C, var_core_value_sig7A15), var_core_value_sigD051.body && (Xe(var_core_value_sigD051.body, var_core_value_sigE94C, var_core_value_sig7A15.length), Ze(var_core_value_sigD051.body, var_core_value_sigE94C, var_core_value_sig7A15));
  Ye(var_core_value_sigD051, var_core_value_sig16D9, var_core_value_sigF378.endOffset, var_core_value_sig7A15.length * var_core_value_sigEEA6.length);
}
function ze(var_core_value_sigEAE1, var_core_value_sigC69F, var_core_value_sig0442, var_core_value_sig697A) {
  let var_core_value_sigDB65 = A(var_core_value_sigEAE1, var_core_value_sigC69F),
    var_core_value_sig045E = a(var_core_value_sigDB65, var_core_value_sig0442).startOffset;
  Ue(var_core_value_sigEAE1, var_core_value_sigC69F, var_core_value_sig045E, a(var_core_value_sigDB65, var_core_value_sig697A).endOffset + 1);
}
function Be(var_core_value_sig4524, var_core_value_sig64D5, var_core_value_sig9678, var_core_value_sig5E74) {
  let var_core_value_sig75FC = A(var_core_value_sig4524, var_core_value_sig64D5),
    var_core_value_sig639A = [];
  for (let var_core_value_sig6D47 = var_core_value_sig9678; var_core_value_sig6D47 <= var_core_value_sig5E74; var_core_value_sig6D47++) var_core_value_sig639A.push(...o(var_core_value_sig75FC, var_core_value_sig6D47).cells["map"](var_core_value_sigFDEA => ({
    startOffset: var_core_value_sigFDEA.startOffset,
    endOffset: var_core_value_sigFDEA.endOffset + 1
  })));
  var_core_value_sig639A.sort((var_core_value_sigCB82, var_core_value_sigCF4E) => var_core_value_sigCF4E.startOffset - var_core_value_sigCB82.startOffset);
  let var_core_value_sig567C = 0;
  for (let var_core_value_sig6CAD of var_core_value_sig639A) {
    let var_core_value_sig86D0 = var_core_value_sig6CAD.startOffset - var_core_value_sig6CAD.endOffset;
    var_core_value_sig567C -= var_core_value_sig86D0, Ge(var_core_value_sig4524.body, var_core_value_sig6CAD.startOffset, var_core_value_sig6CAD.endOffset), var_core_value_sig4524.body && Xe(var_core_value_sig4524.body, var_core_value_sig6CAD.startOffset, var_core_value_sig86D0);
  }
  Ye(var_core_value_sig4524, var_core_value_sig64D5, var_core_value_sig75FC.endOffset, -var_core_value_sig567C);
}
function Ve(var_core_value_sig825F, var_core_value_sig546D) {
  var var_core_value_sig8078;
  let var_core_value_sigDCED = A(var_core_value_sig825F, var_core_value_sig546D);
  Ue(var_core_value_sig825F, var_core_value_sig546D, var_core_value_sigDCED.startOffset, var_core_value_sigDCED.endOffset), (var_core_value_sig8078 = var_core_value_sig825F.body) != null && var_core_value_sig8078.tables && (var_core_value_sig825F.body["tables"] = var_core_value_sig825F.body["tables"].filter(var_core_value_sig8CF5 => var_core_value_sig8CF5.tableId !== var_core_value_sig546D));
}
function He(var_core_value_sig2829, var_core_value_sig6EE2, var_core_value_sig4CCC, var_core_value_sig6E47) {
  We(var_core_value_sig2829.body, var_core_value_sig4CCC, var_core_value_sig6E47), Je(var_core_value_sig2829, var_core_value_sig6EE2, var_core_value_sig4CCC, var_core_value_sig6E47.length), var_core_value_sig2829.body && Ze(var_core_value_sig2829.body, var_core_value_sig4CCC, var_core_value_sig6E47);
}
function Ue(var_core_value_sigB64D, var_core_value_sig2407, var_core_value_sigE4D0, var_core_value_sigD5F1) {
  Ge(var_core_value_sigB64D.body, var_core_value_sigE4D0, var_core_value_sigD5F1), Je(var_core_value_sigB64D, var_core_value_sig2407, var_core_value_sigE4D0, var_core_value_sigE4D0 - var_core_value_sigD5F1);
}
function We(var_core_value_sigBC19, var_core_value_sig4F3C, var_core_value_sig8D44) {
  var_core_value_sigBC19 != null && var_core_value_sigBC19.dataStream && (var_core_value_sigBC19.dataStream = "" + var_core_value_sigBC19.dataStream["slice"](0, var_core_value_sig4F3C) + var_core_value_sig8D44 + var_core_value_sigBC19.dataStream["slice"](var_core_value_sig4F3C));
}
function Ge(var_core_value_sig1660, var_core_value_sigEE7B, var_core_value_sig44DF) {
  var_core_value_sig1660 != null && var_core_value_sig1660.dataStream && (var_core_value_sig1660.dataStream = "" + var_core_value_sig1660.dataStream["slice"](0, var_core_value_sigEE7B) + var_core_value_sig1660.dataStream["slice"](var_core_value_sig44DF));
}
function Ke(var_core_value_sig7E48, var_core_value_sig7B9E, var_core_value_sig5C3B, var_core_value_sig4002) {
  if (!(var_core_value_sig7E48 != null && var_core_value_sig7E48.dataStream) || var_core_value_sig4002 >= var_core_value_sig7B9E && var_core_value_sig4002 <= var_core_value_sig5C3B) return;
  let var_core_value_sig4153 = var_core_value_sig7E48.dataStream["slice"](var_core_value_sig7B9E, var_core_value_sig5C3B),
    var_core_value_sig2825 = "" + var_core_value_sig7E48.dataStream["slice"](0, var_core_value_sig7B9E) + var_core_value_sig7E48.dataStream["slice"](var_core_value_sig5C3B),
    var_core_value_sig5FD0 = var_core_value_sig4002 > var_core_value_sig5C3B ? var_core_value_sig4002 - var_core_value_sig4153.length : var_core_value_sig4002;
  var_core_value_sig7E48.dataStream = "" + var_core_value_sig2825.slice(0, var_core_value_sig5FD0) + var_core_value_sig4153 + var_core_value_sig2825.slice(var_core_value_sig5FD0);
}
function qe(var_core_value_sigA7E3, var_core_value_sigA784) {
  return Math.min(Math.max(0, var_core_value_sigA7E3), Math.max(0, var_core_value_sigA784));
}
function Je(var_core_value_sig4406, var_core_value_sig6806, var_core_value_sigD4AA, var_core_value_sigDC41) {
  let var_core_value_sigFB47 = var_core_value_sig4406.body;
  !var_core_value_sigFB47 || var_core_value_sigDC41 === 0 || (Ye(var_core_value_sig4406, var_core_value_sig6806, var_core_value_sigD4AA, var_core_value_sigDC41), Xe(var_core_value_sigFB47, var_core_value_sigD4AA, var_core_value_sigDC41));
}
function Ye(var_core_value_sig9B3D1, var_core_value_sigC1CF, var_core_value_sigEE12, var_core_value_sigD70C) {
  let var_core_value_sigF047 = var_core_value_sig9B3D1.body;
  !(var_core_value_sigF047 != null && var_core_value_sigF047.tables) || var_core_value_sigD70C === 0 || (var_core_value_sigF047.tables &&= var_core_value_sigF047.tables["map"](var_core_value_sigDDD7 => var_core_value_sigDDD7.tableId === var_core_value_sigC1CF ? {
    ...var_core_value_sigDDD7,
    endIndex: var_core_value_sigDDD7.endIndex + var_core_value_sigD70C
  } : var_core_value_sigDDD7.startIndex >= var_core_value_sigEE12 ? {
    ...var_core_value_sigDDD7,
    startIndex: var_core_value_sigDDD7.startIndex + var_core_value_sigD70C,
    endIndex: var_core_value_sigDDD7.endIndex + var_core_value_sigD70C
  } : var_core_value_sigDDD7));
}
function Xe(var_core_value_sigC2F9, var_core_value_sig1F51, var_core_value_sig29F5) {
  var var_core_value_sig5A51, var_core_value_sigF1D1, var_core_value_sig370E, var_core_value_sigDE14, var_core_value_sig02CB, var_core_value_sig6CBB, var_core_value_sig68DA, var_core_value_sig64D8;
  let var_core_value_sigD755 = f(var_core_value_sigC2F9);
  var_core_value_sigC2F9.paragraphs = (var_core_value_sig5A51 = var_core_value_sigC2F9.paragraphs) == null ? undefined : var_core_value_sig5A51.map(var_core_value_sigB2CE => {
    let var_core_value_sig443C = et(var_core_value_sigB2CE.startIndex, var_core_value_sig1F51, var_core_value_sig29F5);
    return var_core_value_sig443C == null ? null : {
      ...var_core_value_sigB2CE,
      startIndex: var_core_value_sig443C
    };
  }).filter(var_core_value_sig39B1 => var_core_value_sig39B1 != null), var_core_value_sigC2F9.sectionBreaks = (var_core_value_sigF1D1 = var_core_value_sigC2F9.sectionBreaks) == null ? undefined : var_core_value_sigF1D1.map(var_core_value_sig210D => {
    let var_core_value_sigB4B4 = et(var_core_value_sig210D.startIndex, var_core_value_sig1F51, var_core_value_sig29F5);
    return var_core_value_sigB4B4 == null ? null : {
      ...var_core_value_sig210D,
      startIndex: var_core_value_sigB4B4
    };
  }).filter(var_core_value_sigD407 => var_core_value_sigD407 != null), var_core_value_sigC2F9.customBlocks = (var_core_value_sig370E = var_core_value_sigC2F9.customBlocks) == null ? undefined : var_core_value_sig370E.map(var_core_value_sig63F3 => {
    let var_core_value_sig6A71 = et(var_core_value_sig63F3.startIndex, var_core_value_sig1F51, var_core_value_sig29F5);
    return var_core_value_sig6A71 == null ? null : {
      ...var_core_value_sig63F3,
      startIndex: var_core_value_sig6A71
    };
  }).filter(var_core_value_sig3BF6 => var_core_value_sig3BF6 != null), var_core_value_sigC2F9.blockRanges = (var_core_value_sigDE14 = var_core_value_sigC2F9.blockRanges) == null ? undefined : var_core_value_sigDE14.map(var_core_value_sig38CE => {
    let var_core_value_sig62B7 = j(var_core_value_sig38CE.startIndex, var_core_value_sig38CE.endIndex, var_core_value_sig1F51, var_core_value_sig29F5);
    return var_core_value_sig62B7 == null ? null : {
      ...var_core_value_sig38CE,
      startIndex: var_core_value_sig62B7.start,
      endIndex: var_core_value_sig62B7.end
    };
  }).filter(var_core_value_sig37A8 => var_core_value_sig37A8 != null), var_core_value_sigC2F9.textRuns = (var_core_value_sig02CB = var_core_value_sigC2F9.textRuns) == null ? undefined : var_core_value_sig02CB.map(var_core_value_sigA90D => {
    let var_core_value_sig7A3C = j(var_core_value_sigA90D.st, var_core_value_sigA90D.ed, var_core_value_sig1F51, var_core_value_sig29F5);
    return var_core_value_sig7A3C == null ? null : {
      ...var_core_value_sigA90D,
      st: var_core_value_sig7A3C.start,
      ed: var_core_value_sig7A3C.end
    };
  }).filter(var_core_value_sig0511 => var_core_value_sig0511 != null), var_core_value_sigC2F9.customRanges = (var_core_value_sig6CBB = var_core_value_sigC2F9.customRanges) == null ? undefined : var_core_value_sig6CBB.map(var_core_value_sig1F44 => {
    let var_core_value_sigCB04 = j(var_core_value_sig1F44.startIndex, var_core_value_sig1F44.endIndex, var_core_value_sig1F51, var_core_value_sig29F5);
    return var_core_value_sigCB04 == null ? null : {
      ...var_core_value_sig1F44,
      startIndex: var_core_value_sigCB04.start,
      endIndex: var_core_value_sigCB04.end
    };
  }).filter(var_core_value_sig947E => var_core_value_sig947E != null), var_core_value_sigC2F9.customDecorations = (var_core_value_sig68DA = var_core_value_sigC2F9.customDecorations) == null ? undefined : var_core_value_sig68DA.map(var_core_value_sig4545 => {
    let var_core_value_sigF39A = j(var_core_value_sig4545.startIndex, var_core_value_sig4545.endIndex, var_core_value_sig1F51, var_core_value_sig29F5);
    return var_core_value_sigF39A == null ? null : {
      ...var_core_value_sig4545,
      startIndex: var_core_value_sigF39A.start,
      endIndex: var_core_value_sigF39A.end
    };
  }).filter(var_core_value_sigF79C => var_core_value_sigF79C != null), var_core_value_sigD755.columnGroups = (var_core_value_sig64D8 = var_core_value_sigD755.columnGroups) == null ? undefined : var_core_value_sig64D8.map(var_core_value_sig2E54 => {
    let var_core_value_sig7658 = j(var_core_value_sig2E54.startIndex, var_core_value_sig2E54.endIndex, var_core_value_sig1F51, var_core_value_sig29F5);
    return var_core_value_sig7658 == null ? null : {
      ...var_core_value_sig2E54,
      startIndex: var_core_value_sig7658.start,
      endIndex: var_core_value_sig7658.end
    };
  }).filter(var_core_value_sigDCF5 => var_core_value_sigDCF5 != null);
}
function Ze(var_core_value_sigF897, var_core_value_sigA578, var_core_value_sig0260) {
  let var_core_value_sig034D = Qe(var_core_value_sigF897),
    var_core_value_sig89EC = new Set((var_core_value_sigF897.sectionBreaks ?? []).map(var_core_value_sigC786 => var_core_value_sigC786.sectionId)),
    var_core_value_sig9975 = $e(var_core_value_sig0260, "\x0d").map(var_core_value_sigC0D9 => ({
      startIndex: var_core_value_sigA578 + var_core_value_sigC0D9,
      paragraphId: (0, e.createParagraphId)(var_core_value_sig034D)
    })),
    var_core_value_sigD6D9 = $e(var_core_value_sig0260, "\x0a").map(var_core_value_sigF0511 => ({
      startIndex: var_core_value_sigA578 + var_core_value_sigF0511,
      sectionId: (0, e.createSectionId)(var_core_value_sig89EC)
    }));
  var_core_value_sig9975.length && (var_core_value_sigF897.paragraphs = [...(var_core_value_sigF897.paragraphs ?? []), ...var_core_value_sig9975].sort((var_core_value_sig5825, var_core_value_sig4EB7) => var_core_value_sig5825.startIndex - var_core_value_sig4EB7.startIndex)), var_core_value_sigD6D9.length && (var_core_value_sigF897.sectionBreaks = [...(var_core_value_sigF897.sectionBreaks ?? []), ...var_core_value_sigD6D9].sort((var_core_value_sig73AF, var_core_value_sig548A) => var_core_value_sig73AF.startIndex - var_core_value_sig548A.startIndex));
}
function Qe(var_core_value_sig2637) {
  return new Set((var_core_value_sig2637.paragraphs ?? []).map(var_core_value_sigE026 => var_core_value_sigE026.paragraphId));
}
function $e(var_core_value_sigAF1D, var_core_value_sigC92D) {
  let var_core_value_sigEA3D = [];
  for (let var_core_value_sig339E = 0; var_core_value_sig339E < var_core_value_sigAF1D.length; var_core_value_sig339E++) var_core_value_sigAF1D[var_core_value_sig339E] === var_core_value_sigC92D && var_core_value_sigEA3D.push(var_core_value_sig339E);
  return var_core_value_sigEA3D;
}
function et(var_core_value_sig2841, var_core_value_sig9FE1, var_core_value_sig9DAA) {
  if (var_core_value_sig9DAA >= 0) return var_core_value_sig2841 >= var_core_value_sig9FE1 ? var_core_value_sig2841 + var_core_value_sig9DAA : var_core_value_sig2841;
  let var_core_value_sig1F8A = var_core_value_sig9FE1 - var_core_value_sig9DAA;
  return var_core_value_sig2841 >= var_core_value_sig9FE1 && var_core_value_sig2841 < var_core_value_sig1F8A ? null : var_core_value_sig2841 >= var_core_value_sig1F8A ? var_core_value_sig2841 + var_core_value_sig9DAA : var_core_value_sig2841;
}
function j(var_core_value_sigEBB4, var_core_value_sig2B74, var_core_value_sig0483, var_core_value_sig4A48) {
  if (var_core_value_sig4A48 >= 0) return {
    end: var_core_value_sig2B74 >= var_core_value_sig0483 ? var_core_value_sig2B74 + var_core_value_sig4A48 : var_core_value_sig2B74,
    start: var_core_value_sigEBB4 >= var_core_value_sig0483 ? var_core_value_sigEBB4 + var_core_value_sig4A48 : var_core_value_sigEBB4
  };
  let var_core_value_sigD170 = var_core_value_sig0483 - var_core_value_sig4A48;
  if (var_core_value_sig2B74 < var_core_value_sig0483) return {
    start: var_core_value_sigEBB4,
    end: var_core_value_sig2B74
  };
  if (var_core_value_sigEBB4 >= var_core_value_sigD170) return {
    start: var_core_value_sigEBB4 + var_core_value_sig4A48,
    end: var_core_value_sig2B74 + var_core_value_sig4A48
  };
  let var_core_value_sig90E5 = var_core_value_sigEBB4 < var_core_value_sig0483 ? var_core_value_sigEBB4 : var_core_value_sig0483,
    var_core_value_sig7000 = var_core_value_sig2B74 >= var_core_value_sigD170 ? var_core_value_sig2B74 + var_core_value_sig4A48 : var_core_value_sig0483;
  return var_core_value_sig7000 < var_core_value_sig90E5 ? null : {
    start: var_core_value_sig90E5,
    end: var_core_value_sig7000
  };
}
function tt(var_core_value_sigD7C5, var_core_value_sig3633) {
  let var_core_value_sig1DF5 = var_core_value_sigD7C5.tableColumns["reduce"]((var_core_value_sig7550, var_core_value_sig2983) => var_core_value_sig7550 + var_core_value_sig2983.size["width"].v, 0) - var_core_value_sig3633,
    var_core_value_sig90A3 = var_core_value_sigD7C5.tableColumns["reduce"]((var_core_value_sigE1B0, var_core_value_sigD4FF) => var_core_value_sigE1B0 + var_core_value_sigD4FF.size["width"].v, 0);
  var_core_value_sig1DF5 <= 0 || var_core_value_sig90A3 <= 0 || var_core_value_sigD7C5.tableColumns["forEach"](var_core_value_sig1E5B => {
    var_core_value_sig1E5B.size["width"].v = var_core_value_sig1E5B.size["width"].v / var_core_value_sig90A3 * var_core_value_sig1DF5;
  });
}
function nt(var_core_value_sig28BE, var_core_value_sig0224, var_core_value_sig854B, var_core_value_sig1FF6) {
  var var_core_value_sig4B27;
  if (!var_core_value_sig28BE) return;
  let var_core_value_sig3A41 = O(var_core_value_sig28BE),
    var_core_value_sig269A = ((var_core_value_sig4B27 = var_core_value_sig3A41.tables[var_core_value_sig0224]) == null ? undefined : var_core_value_sig4B27.headerRowCount) ?? 0;
  if (var_core_value_sig269A <= 0) return var_core_value_sig3A41;
  let var_core_value_sigBF53 = Math.max(0, Math.min(var_core_value_sig1FF6, var_core_value_sig269A - 1) - Math.max(var_core_value_sig854B, 0) + 1);
  return be(var_core_value_sig3A41, var_core_value_sig0224, Math.max(0, var_core_value_sig269A - var_core_value_sigBF53));
}
function rt(var_core_value_sigD9BB, var_core_value_sigF549 = ["body"]) {
  var var_core_value_sigC125, var_core_value_sigB63D;
  let var_core_value_sig8255 = i(var_core_value_sigD9BB.documentData, var_core_value_sigD9BB.tableId),
    var_core_value_sigBFC7 = var_core_value_sig8255 == null || (var_core_value_sigC125 = var_core_value_sig8255.rows[var_core_value_sigD9BB.row]) == null ? undefined : var_core_value_sigC125.cells[var_core_value_sigD9BB.column];
  if (!((var_core_value_sigB63D = var_core_value_sigD9BB.documentData["body"]) != null && var_core_value_sigB63D.dataStream) || !var_core_value_sig8255 || !var_core_value_sigBFC7) throw Error("[DocsTable]:\x20Cell\x20" + var_core_value_sigD9BB.row + ":" + var_core_value_sigD9BB.column + " is not found.");
  let var_core_value_sig933F = at(var_core_value_sigD9BB.text),
    var_core_value_sig29DE = var_core_value_sigBFC7.startOffset + 1,
    var_core_value_sig4AFB = var_core_value_sigD9BB.documentData["body"].dataStream["slice"](var_core_value_sigBFC7.endOffset - 2, var_core_value_sigBFC7.endOffset) === "\x0d\x0a";
  return M(var_core_value_sigD9BB.documentData, [{
    startOffset: var_core_value_sig29DE,
    endOffset: var_core_value_sig4AFB ? var_core_value_sigBFC7.endOffset - 2 : var_core_value_sigBFC7.endOffset,
    text: var_core_value_sig4AFB ? var_core_value_sig933F.slice(0, -2) : var_core_value_sig933F
  }], var_core_value_sigF549);
}
function M(var_core_value_sigC7EA, var_core_value_sigDAB9, var_core_value_sig9CF7 = ["body"]) {
  let var_core_value_sigCCE5 = var_core_value_sigC7EA.body;
  if (!(var_core_value_sigCCE5 != null && var_core_value_sigCCE5.dataStream)) return null;
  let var_core_value_sig5933 = var_core_value_sigDAB9.filter(var_core_value_sigB680 => var_core_value_sigCCE5.dataStream["slice"](var_core_value_sigB680.startOffset, var_core_value_sigB680.endOffset) !== var_core_value_sigB680.text).sort((var_core_value_sig1F64, var_core_value_sigDD1C) => var_core_value_sig1F64.startOffset - var_core_value_sigDD1C.startOffset);
  if (!var_core_value_sig5933.length) return null;
  let var_core_value_sig884B = st(var_core_value_sigCCE5),
    var_core_value_sig4E30 = new Set((var_core_value_sigCCE5.sectionBreaks ?? []).map(var_core_value_sig2C39 => var_core_value_sig2C39.sectionId)),
    var_core_value_sig9730 = new e["TextX"](),
    var_core_value_sig8E4A = 0;
  for (let var_core_value_sigB7D1 of var_core_value_sig5933) {
    if (var_core_value_sigB7D1.startOffset < var_core_value_sig8E4A || var_core_value_sigB7D1.startOffset < 0 || var_core_value_sigB7D1.endOffset < var_core_value_sigB7D1.startOffset || var_core_value_sigB7D1.endOffset > var_core_value_sigCCE5.dataStream["length"]) throw Error("[DocsTable]: Cell text replacements must be ordered, non-overlapping, and inside the document body.");
    let var_core_value_sig4CD2 = var_core_value_sigB7D1.startOffset - var_core_value_sig8E4A;
    var_core_value_sig4CD2 > 0 && var_core_value_sig9730.retain(var_core_value_sig4CD2), var_core_value_sigB7D1.text["length"] > 0 && var_core_value_sig9730.insert(var_core_value_sigB7D1.text["length"], ct(var_core_value_sigB7D1.text, var_core_value_sig884B, var_core_value_sig4E30));
    let var_core_value_sig48CA = var_core_value_sigB7D1.endOffset - var_core_value_sigB7D1.startOffset;
    var_core_value_sig48CA > 0 && var_core_value_sig9730.delete(var_core_value_sig48CA), var_core_value_sig8E4A = var_core_value_sigB7D1.endOffset;
  }
  return e.JSONX["getInstance"]().editOp(var_core_value_sig9730.serialize(), var_core_value_sig9CF7);
}
function it(var_core_value_sig300B) {
  var var_core_value_sig8457;
  let var_core_value_sigB30D = p(var_core_value_sig300B.documentData),
    var_core_value_sigDB33 = var_core_value_sigB30D.body,
    var_core_value_sig6C8C = i(var_core_value_sigB30D, var_core_value_sig300B.tableId),
    var_core_value_sig7A5E = var_core_value_sig6C8C == null || (var_core_value_sig8457 = var_core_value_sig6C8C.rows[var_core_value_sig300B.row]) == null ? undefined : var_core_value_sig8457.cells[var_core_value_sig300B.column];
  if (!(var_core_value_sigDB33 != null && var_core_value_sigDB33.dataStream) || !var_core_value_sig6C8C || !var_core_value_sig7A5E) throw Error("[DocsTable]: Cell " + var_core_value_sig300B.row + ":" + var_core_value_sig300B.column + " is not found.");
  let var_core_value_sig838E = var_core_value_sig7A5E.startOffset + 1,
    var_core_value_sig9A5B = var_core_value_sig7A5E.endOffset,
    var_core_value_sigC860 = at(var_core_value_sig300B.text),
    var_core_value_sigE64C = var_core_value_sigC860.length - (var_core_value_sig9A5B - var_core_value_sig838E);
  return var_core_value_sigDB33.dataStream = "" + var_core_value_sigDB33.dataStream["slice"](0, var_core_value_sig838E) + var_core_value_sigC860 + var_core_value_sigDB33.dataStream["slice"](var_core_value_sig9A5B), ot(var_core_value_sigDB33, var_core_value_sig838E, var_core_value_sig9A5B, var_core_value_sigC860, var_core_value_sigE64C), ft(var_core_value_sigB30D, var_core_value_sig300B.tableId, var_core_value_sig9A5B, var_core_value_sigE64C), {
    nextDocumentData: var_core_value_sigB30D
  };
}
function at(var_core_value_sigF39B) {
  return var_core_value_sigF39B.replace(/\r\n/g, "\x0a").replace(/\r/g, "\x0a").split("\x0a").join("\x0d\x0a") + "\x0d\x0a";
}
function ot(var_core_value_sig9B88, var_core_value_sig992A, var_core_value_sig6281, var_core_value_sig9B01, var_core_value_sigA724) {
  var var_core_value_sig385E, var_core_value_sig10D3, var_core_value_sig41F2, var_core_value_sig32DD;
  let var_core_value_sig7A88 = st(var_core_value_sig9B88),
    var_core_value_sig6CFC = new Set((var_core_value_sig9B88.sectionBreaks ?? []).map(var_core_value_sig64F0 => var_core_value_sig64F0.sectionId)),
    var_core_value_sig3EC0 = f(var_core_value_sig9B88);
  var_core_value_sig9B88.paragraphs = [...lt(var_core_value_sig9B88.paragraphs ?? [], var_core_value_sig992A, var_core_value_sig6281, var_core_value_sigA724), ...ut(var_core_value_sig9B01, "\x0d").map(var_core_value_sig85B1 => ({
    startIndex: var_core_value_sig992A + var_core_value_sig85B1,
    paragraphId: (0, e.createParagraphId)(var_core_value_sig7A88)
  }))].sort((var_core_value_sig3141, var_core_value_sig2162) => var_core_value_sig3141.startIndex - var_core_value_sig2162.startIndex), var_core_value_sig9B88.sectionBreaks = [...lt(var_core_value_sig9B88.sectionBreaks ?? [], var_core_value_sig992A, var_core_value_sig6281, var_core_value_sigA724), ...ut(var_core_value_sig9B01, "\x0a").map(var_core_value_sig2EAD => ({
    startIndex: var_core_value_sig992A + var_core_value_sig2EAD,
    sectionId: (0, e.createSectionId)(var_core_value_sig6CFC)
  }))].sort((var_core_value_sig6774, var_core_value_sig340D) => var_core_value_sig6774.startIndex - var_core_value_sig340D.startIndex), var_core_value_sig9B88.customBlocks = var_core_value_sig9B88.customBlocks ? lt(var_core_value_sig9B88.customBlocks, var_core_value_sig992A, var_core_value_sig6281, var_core_value_sigA724) : undefined, var_core_value_sig9B88.textRuns = (var_core_value_sig385E = var_core_value_sig9B88.textRuns) == null ? undefined : var_core_value_sig385E.map(var_core_value_sig82D4 => {
    let var_core_value_sigBDE4 = dt(var_core_value_sig82D4.st, var_core_value_sig82D4.ed, var_core_value_sig992A, var_core_value_sig6281, var_core_value_sigA724);
    return var_core_value_sigBDE4 == null ? null : {
      ...var_core_value_sig82D4,
      st: var_core_value_sigBDE4.start,
      ed: var_core_value_sigBDE4.end
    };
  }).filter(var_core_value_sig7DF1 => var_core_value_sig7DF1 != null), var_core_value_sig9B88.customRanges = (var_core_value_sig10D3 = var_core_value_sig9B88.customRanges) == null ? undefined : var_core_value_sig10D3.map(var_core_value_sigDC86 => {
    let var_core_value_sig0B0C = dt(var_core_value_sigDC86.startIndex, var_core_value_sigDC86.endIndex, var_core_value_sig992A, var_core_value_sig6281, var_core_value_sigA724);
    return var_core_value_sig0B0C == null ? null : {
      ...var_core_value_sigDC86,
      startIndex: var_core_value_sig0B0C.start,
      endIndex: var_core_value_sig0B0C.end
    };
  }).filter(var_core_value_sigA39E => var_core_value_sigA39E != null), var_core_value_sig9B88.customDecorations = (var_core_value_sig41F2 = var_core_value_sig9B88.customDecorations) == null ? undefined : var_core_value_sig41F2.map(var_core_value_sigBBEE => {
    let var_core_value_sig011D = dt(var_core_value_sigBBEE.startIndex, var_core_value_sigBBEE.endIndex, var_core_value_sig992A, var_core_value_sig6281, var_core_value_sigA724);
    return var_core_value_sig011D == null ? null : {
      ...var_core_value_sigBBEE,
      startIndex: var_core_value_sig011D.start,
      endIndex: var_core_value_sig011D.end
    };
  }).filter(var_core_value_sig6167 => var_core_value_sig6167 != null), var_core_value_sig3EC0.columnGroups = (var_core_value_sig32DD = var_core_value_sig3EC0.columnGroups) == null ? undefined : var_core_value_sig32DD.map(var_core_value_sig65A1 => {
    let var_core_value_sig7F19 = dt(var_core_value_sig65A1.startIndex, var_core_value_sig65A1.endIndex, var_core_value_sig992A, var_core_value_sig6281, var_core_value_sigA724);
    return var_core_value_sig7F19 == null ? null : {
      ...var_core_value_sig65A1,
      startIndex: var_core_value_sig7F19.start,
      endIndex: var_core_value_sig7F19.end
    };
  }).filter(var_core_value_sig7827 => var_core_value_sig7827 != null);
}
function st(var_core_value_sigEA69) {
  return new Set((var_core_value_sigEA69.paragraphs ?? []).map(var_core_value_sig652C => var_core_value_sig652C.paragraphId));
}
function ct(var_core_value_sigF42A, var_core_value_sig898E, var_core_value_sigC481) {
  return {
    dataStream: var_core_value_sigF42A,
    paragraphs: ut(var_core_value_sigF42A, "\x0d").map(var_core_value_sig7E32 => ({
      startIndex: var_core_value_sig7E32,
      paragraphId: (0, e.createParagraphId)(var_core_value_sig898E)
    })),
    sectionBreaks: ut(var_core_value_sigF42A, "\x0a").map(var_core_value_sig4C07 => ({
      startIndex: var_core_value_sig4C07,
      sectionId: (0, e.createSectionId)(var_core_value_sigC481)
    }))
  };
}
function lt(var_core_value_sig27B7, var_core_value_sig2DAD, var_core_value_sig00DE, var_core_value_sigEF7C) {
  return var_core_value_sig27B7.map(var_core_value_sig79AB => var_core_value_sig79AB.startIndex >= var_core_value_sig2DAD && var_core_value_sig79AB.startIndex < var_core_value_sig00DE ? null : var_core_value_sig79AB.startIndex >= var_core_value_sig00DE ? {
    ...var_core_value_sig79AB,
    startIndex: var_core_value_sig79AB.startIndex + var_core_value_sigEF7C
  } : var_core_value_sig79AB).filter(var_core_value_sig8E74 => var_core_value_sig8E74 != null);
}
function ut(var_core_value_sig07E7, var_core_value_sig6005) {
  let var_core_value_sig25A4 = [];
  for (let var_core_value_sig104C = 0; var_core_value_sig104C < var_core_value_sig07E7.length; var_core_value_sig104C++) var_core_value_sig07E7[var_core_value_sig104C] === var_core_value_sig6005 && var_core_value_sig25A4.push(var_core_value_sig104C);
  return var_core_value_sig25A4;
}
function dt(var_core_value_sigB591, var_core_value_sigB272, var_core_value_sig6F52, var_core_value_sig09C4, var_core_value_sig8E3E) {
  if (var_core_value_sigB272 < var_core_value_sig6F52) return {
    start: var_core_value_sigB591,
    end: var_core_value_sigB272
  };
  if (var_core_value_sigB591 >= var_core_value_sig09C4) return {
    start: var_core_value_sigB591 + var_core_value_sig8E3E,
    end: var_core_value_sigB272 + var_core_value_sig8E3E
  };
  let var_core_value_sigC3D3 = var_core_value_sigB591 < var_core_value_sig6F52 ? var_core_value_sigB591 : var_core_value_sig6F52,
    var_core_value_sig1451 = var_core_value_sigB272 >= var_core_value_sig09C4 ? var_core_value_sigB272 + var_core_value_sig8E3E : var_core_value_sig6F52;
  return var_core_value_sig1451 < var_core_value_sigC3D3 ? null : {
    start: var_core_value_sigC3D3,
    end: var_core_value_sig1451
  };
}
function ft(var_core_value_sigAD57, var_core_value_sig58A8, var_core_value_sigEC1A, var_core_value_sigBDED) {
  var var_core_value_sig4BFF;
  !((var_core_value_sig4BFF = var_core_value_sigAD57.body) != null && var_core_value_sig4BFF.tables) || var_core_value_sigBDED === 0 || (var_core_value_sigAD57.body["tables"] = var_core_value_sigAD57.body["tables"].map(var_core_value_sig841D => var_core_value_sig841D.tableId === var_core_value_sig58A8 ? {
    ...var_core_value_sig841D,
    endIndex: var_core_value_sig841D.endIndex + var_core_value_sigBDED
  } : var_core_value_sig841D.startIndex >= var_core_value_sigEC1A ? {
    ...var_core_value_sig841D,
    startIndex: var_core_value_sig841D.startIndex + var_core_value_sigBDED,
    endIndex: var_core_value_sig841D.endIndex + var_core_value_sigBDED
  } : var_core_value_sig841D));
}
function pt(var_core_value_sig40E7) {
  var var_core_value_sigEDBA;
  let var_core_value_sigE863 = Ee({
      documentData: var_core_value_sig40E7.documentData,
      metadata: var_core_value_sig40E7.metadata,
      tableId: var_core_value_sig40E7.tableId,
      row: 0,
      count: 1,
      position: "above"
    }),
    var_core_value_sig04B4 = (var_core_value_sigEDBA = var_core_value_sigE863.nextDocumentData["tableSource"]) == null ? undefined : var_core_value_sigEDBA[var_core_value_sig40E7.tableId];
  if (!var_core_value_sig04B4) throw Error("[DocsTable]:\x20Table\x20" + var_core_value_sig40E7.tableId + " is not found.");
  let var_core_value_sig1C07 = var_core_value_sig04B4.tableColumns["length"];
  return var_core_value_sig04B4.tableRows[0].tableCells["forEach"]((var_core_value_sig90CB, var_core_value_sigBDF5) => {
    if (var_core_value_sigBDF5 === 0) {
      var_core_value_sig90CB.columnSpan = var_core_value_sig1C07, delete var_core_value_sig90CB.rowSpan;
      return;
    }
    var_core_value_sig90CB.rowSpan = 0, var_core_value_sig90CB.columnSpan = 0;
  }), {
    nextDocumentData: var_core_value_sigE863.nextDocumentData,
    nextMetadata: xe(var_core_value_sigE863.nextMetadata, var_core_value_sig40E7.tableId, true)
  };
}
function mt(var_core_value_sig93D6) {
  var var_core_value_sigDD05;
  let var_core_value_sig3932 = p(var_core_value_sig93D6.documentData, {
      cloneBody: false,
      tableIds: [var_core_value_sig93D6.tableId]
    }),
    var_core_value_sig48B2 = (var_core_value_sigDD05 = var_core_value_sig3932.tableSource) == null ? undefined : var_core_value_sigDD05[var_core_value_sig93D6.tableId];
  if (!var_core_value_sig48B2) throw Error("[DocsTable]:\x20Table\x20" + var_core_value_sig93D6.tableId + " is not found.");
  let var_core_value_sig57DF = Math.min(Math.max(0, var_core_value_sig93D6.headerRowCount), var_core_value_sig48B2.tableRows["length"]);
  return var_core_value_sig48B2.tableRows["forEach"]((var_core_value_sigACC6, var_core_value_sig1614) => {
    var_core_value_sigACC6.repeatHeaderRow = var_core_value_sig1614 < var_core_value_sig57DF ? e.BooleanNumber["TRUE"] : e.BooleanNumber["FALSE"], var_core_value_sig1614 < var_core_value_sig57DF ? var_core_value_sigACC6.isFirstRow = e.BooleanNumber["TRUE"] : delete var_core_value_sigACC6.isFirstRow;
  }), {
    nextDocumentData: var_core_value_sig3932,
    nextMetadata: be(var_core_value_sig93D6.metadata, var_core_value_sig93D6.tableId, var_core_value_sig57DF)
  };
}
function ht(var_core_value_sigC985) {
  var var_core_value_sig8DA6;
  let var_core_value_sigCA69 = p(var_core_value_sigC985.documentData, {
      cloneBody: false,
      tableIds: [var_core_value_sigC985.tableId]
    }),
    var_core_value_sigB77C = (var_core_value_sig8DA6 = var_core_value_sigCA69.tableSource) == null ? undefined : var_core_value_sig8DA6[var_core_value_sigC985.tableId];
  if (!var_core_value_sigB77C) throw Error("[DocsTable]:\x20Table\x20" + var_core_value_sigC985.tableId + "\x20is\x20not\x20found.");
  let var_core_value_sig9AFF = Math.min(var_core_value_sigC985.startRow, var_core_value_sigC985.endRow),
    var_core_value_sig3545 = Math.max(var_core_value_sigC985.startRow, var_core_value_sigC985.endRow),
    var_core_value_sig5EE4 = var_core_value_sigB77C.tableRows["slice"](var_core_value_sig9AFF, var_core_value_sig3545 + 1),
    var_core_value_sig7EAB = var_core_value_sig5EE4.reduce((var_core_value_sig85C3, var_core_value_sigB996) => var_core_value_sig85C3 + Ot(var_core_value_sigB996), 0) / var_core_value_sig5EE4.length;
  return var_core_value_sig5EE4.forEach(var_core_value_sig4BBA => {
    var_core_value_sig4BBA.trHeight = {
      hRule: e.TableRowHeightRule["AT_LEAST"],
      val: {
        v: var_core_value_sig7EAB
      }
    };
  }), {
    nextDocumentData: var_core_value_sigCA69
  };
}
function gt(var_core_value_sig56B9) {
  var var_core_value_sig90CF;
  let var_core_value_sigA386 = p(var_core_value_sig56B9.documentData, {
      cloneBody: false,
      tableIds: [var_core_value_sig56B9.tableId]
    }),
    var_core_value_sigCD6E = (var_core_value_sig90CF = var_core_value_sigA386.tableSource) == null ? undefined : var_core_value_sig90CF[var_core_value_sig56B9.tableId];
  if (!var_core_value_sigCD6E) throw Error("[DocsTable]: Table " + var_core_value_sig56B9.tableId + "\x20is\x20not\x20found.");
  let var_core_value_sigFD9D = Math.min(var_core_value_sig56B9.startColumn, var_core_value_sig56B9.endColumn),
    var_core_value_sigA2A4 = Math.max(var_core_value_sig56B9.startColumn, var_core_value_sig56B9.endColumn),
    var_core_value_sigA1AC = var_core_value_sigCD6E.tableColumns["slice"](var_core_value_sigFD9D, var_core_value_sigA2A4 + 1),
    var_core_value_sig6180 = var_core_value_sigA1AC.reduce((var_core_value_sig6201, var_core_value_sig5151) => var_core_value_sig6201 + var_core_value_sig5151.size["width"].v, 0) / var_core_value_sigA1AC.length;
  return var_core_value_sigA1AC.forEach(var_core_value_sigB542 => {
    var_core_value_sigB542.size["width"].v = var_core_value_sig6180;
  }), {
    nextDocumentData: var_core_value_sigA386
  };
}
function _t(var_core_value_sigB93D) {
  var var_core_value_sigB17C;
  let var_core_value_sig69B6 = p(var_core_value_sigB93D.documentData, {
      cloneBody: false,
      tableIds: [var_core_value_sigB93D.tableId]
    }),
    var_core_value_sig708D = (var_core_value_sigB17C = var_core_value_sig69B6.tableSource) == null || (var_core_value_sigB17C = var_core_value_sigB17C[var_core_value_sigB93D.tableId]) == null ? undefined : var_core_value_sigB17C.tableRows[var_core_value_sigB93D.row];
  if (!var_core_value_sig708D) throw Error("[DocsTable]: Row " + var_core_value_sigB93D.row + " is not found.");
  return var_core_value_sig708D.trHeight = {
    hRule: e.TableRowHeightRule["AT_LEAST"],
    val: {
      v: Math.max(1, var_core_value_sigB93D.height)
    }
  }, {
    nextDocumentData: var_core_value_sig69B6
  };
}
function vt(var_core_value_sig1ED2) {
  var var_core_value_sig94C1;
  let var_core_value_sigABAC = p(var_core_value_sig1ED2.documentData, {
      cloneBody: false,
      tableIds: [var_core_value_sig1ED2.tableId]
    }),
    var_core_value_sigFAE6 = (var_core_value_sig94C1 = var_core_value_sigABAC.tableSource) == null || (var_core_value_sig94C1 = var_core_value_sig94C1[var_core_value_sig1ED2.tableId]) == null ? undefined : var_core_value_sig94C1.tableColumns[var_core_value_sig1ED2.column];
  if (!var_core_value_sigFAE6) throw Error("[DocsTable]:\x20Column\x20" + var_core_value_sig1ED2.column + " is not found.");
  return var_core_value_sigFAE6.size["width"].v = Math.max(1, var_core_value_sig1ED2.width), {
    nextDocumentData: var_core_value_sigABAC
  };
}
function yt(var_core_value_sig06AC) {
  var var_core_value_sig57E2;
  if (var_core_value_sig06AC.targetOffset != null) return bt(var_core_value_sig06AC);
  let var_core_value_sig01FC = p(var_core_value_sig06AC.documentData, {
      cloneBody: false,
      tableIds: [var_core_value_sig06AC.tableId]
    }),
    var_core_value_sig10FC = (var_core_value_sig57E2 = var_core_value_sig01FC.tableSource) == null ? undefined : var_core_value_sig57E2[var_core_value_sig06AC.tableId];
  if (!var_core_value_sig10FC) throw Error("[DocsTable]: Table " + var_core_value_sig06AC.tableId + "\x20is\x20not\x20found.");
  return var_core_value_sig10FC.textWrap = e.TableTextWrapType["WRAP"], var_core_value_sig10FC.position["positionH"].posOffset = (var_core_value_sig10FC.position["positionH"].posOffset ?? 0) + (var_core_value_sig06AC.deltaX ?? 0), var_core_value_sig10FC.position["positionV"].posOffset = (var_core_value_sig10FC.position["positionV"].posOffset ?? 0) + (var_core_value_sig06AC.deltaY ?? 0), {
    nextDocumentData: var_core_value_sig01FC
  };
}
function bt(var_core_value_sig5374) {
  var var_core_value_sigB66D;
  let var_core_value_sigD0F0 = p(var_core_value_sig5374.documentData, {
      tableIds: [var_core_value_sig5374.tableId]
    }),
    var_core_value_sig8E31 = var_core_value_sigD0F0.body,
    var_core_value_sig8339 = (var_core_value_sigB66D = var_core_value_sigD0F0.tableSource) == null ? undefined : var_core_value_sigB66D[var_core_value_sig5374.tableId],
    var_core_value_sigA01E = i(var_core_value_sigD0F0, var_core_value_sig5374.tableId);
  if (!(var_core_value_sig8E31 != null && var_core_value_sig8E31.dataStream) || !var_core_value_sig8E31.tables || !var_core_value_sig8339 || !var_core_value_sigA01E || var_core_value_sig5374.targetOffset == null) throw Error("[DocsTable]: Table " + var_core_value_sig5374.tableId + " range is not found.");
  let var_core_value_sigA41E = var_core_value_sigA01E.startOffset,
    var_core_value_sig939C = var_core_value_sigA01E.endOffset,
    var_core_value_sigA49E = var_core_value_sig8E31.dataStream["slice"](var_core_value_sigA41E, var_core_value_sig939C),
    var_core_value_sig6DEB = var_core_value_sigA49E.length,
    var_core_value_sig2F0D = Et(var_core_value_sig5374.targetOffset, 0, var_core_value_sig8E31.dataStream["length"]);
  if (var_core_value_sig2F0D >= var_core_value_sigA41E && var_core_value_sig2F0D <= var_core_value_sig939C || !xt(var_core_value_sig8E31, var_core_value_sig5374.tableId, var_core_value_sig2F0D)) return {
    nextDocumentData: var_core_value_sigD0F0
  };
  let var_core_value_sig5141 = var_core_value_sig2F0D > var_core_value_sig939C ? var_core_value_sig2F0D - var_core_value_sig6DEB : var_core_value_sig2F0D,
    var_core_value_sigA9E0 = var_core_value_sig8E31.dataStream["slice"](0, var_core_value_sigA41E) + var_core_value_sig8E31.dataStream["slice"](var_core_value_sig939C);
  return var_core_value_sig8E31.dataStream = var_core_value_sigA9E0.slice(0, var_core_value_sig5141) + var_core_value_sigA49E + var_core_value_sigA9E0.slice(var_core_value_sig5141), var_core_value_sig8E31.tables = var_core_value_sig8E31.tables["map"](var_core_value_sigBB6C => var_core_value_sigBB6C.tableId === var_core_value_sig5374.tableId ? {
    ...var_core_value_sigBB6C,
    startIndex: var_core_value_sig5141,
    endIndex: var_core_value_sig5141 + var_core_value_sig6DEB
  } : {
    ...var_core_value_sigBB6C,
    startIndex: N(var_core_value_sigBB6C.startIndex, var_core_value_sigA41E, var_core_value_sig939C, var_core_value_sig2F0D, var_core_value_sig5141, var_core_value_sig6DEB),
    endIndex: N(var_core_value_sigBB6C.endIndex, var_core_value_sigA41E, var_core_value_sig939C, var_core_value_sig2F0D, var_core_value_sig5141, var_core_value_sig6DEB)
  }).sort((var_core_value_sigE2BF, var_core_value_sigB8C7) => var_core_value_sigE2BF.startIndex - var_core_value_sigB8C7.startIndex), Tt(var_core_value_sig8E31, var_core_value_sigA41E, var_core_value_sig939C, var_core_value_sig2F0D, var_core_value_sig5141, var_core_value_sig6DEB), var_core_value_sig8339.textWrap = e.TableTextWrapType["NONE"], var_core_value_sig8339.position["positionH"].posOffset = 0, var_core_value_sig8339.position["positionV"].posOffset = 0, {
    nextDocumentData: var_core_value_sigD0F0
  };
}
function xt(var_core_value_sig751D, var_core_value_sig2E9A, var_core_value_sigE105) {
  return !(St(var_core_value_sig751D.tables, var_core_value_sig2E9A, var_core_value_sigE105) || Ct(var_core_value_sig751D.blockRanges, var_core_value_sigE105) || wt(var_core_value_sig751D.customBlocks, var_core_value_sigE105));
}
function St(var_core_value_sig0BD6, var_core_value_sig3070, var_core_value_sigC66D) {
  return !!(var_core_value_sig0BD6 != null && var_core_value_sig0BD6.some(var_core_value_sigA56E => var_core_value_sigA56E.tableId !== var_core_value_sig3070 && var_core_value_sigA56E.startIndex <= var_core_value_sigC66D && var_core_value_sigC66D < var_core_value_sigA56E.endIndex));
}
function Ct(var_core_value_sig8EC5, var_core_value_sig1056) {
  return !!(var_core_value_sig8EC5 != null && var_core_value_sig8EC5.some(var_core_value_sig1998 => var_core_value_sig1998.startIndex <= var_core_value_sig1056 && var_core_value_sig1056 <= var_core_value_sig1998.endIndex));
}
function wt(var_core_value_sig6EE5, var_core_value_sig9DD9) {
  return !!(var_core_value_sig6EE5 != null && var_core_value_sig6EE5.some(var_core_value_sigFF19 => var_core_value_sigFF19.startIndex === var_core_value_sig9DD9));
}
function Tt(var_core_value_sig09AC, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E) {
  var var_core_value_sigC85E, var_core_value_sig8293, var_core_value_sig050D, var_core_value_sig37AE, var_core_value_sig5B51, var_core_value_sig64FF, var_core_value_sig86F4, var_core_value_sig9E0F;
  let var_core_value_sig3A42 = f(var_core_value_sig09AC);
  var_core_value_sig09AC.paragraphs = (var_core_value_sigC85E = var_core_value_sig09AC.paragraphs) == null ? undefined : var_core_value_sigC85E.map(var_core_value_sig43B8 => ({
    ...var_core_value_sig43B8,
    startIndex: N(var_core_value_sig43B8.startIndex, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E)
  })).sort((var_core_value_sigD98F, var_core_value_sig66C0) => var_core_value_sigD98F.startIndex - var_core_value_sig66C0.startIndex), var_core_value_sig09AC.sectionBreaks = (var_core_value_sig8293 = var_core_value_sig09AC.sectionBreaks) == null ? undefined : var_core_value_sig8293.map(var_core_value_sig9D15 => ({
    ...var_core_value_sig9D15,
    startIndex: N(var_core_value_sig9D15.startIndex, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E)
  })).sort((var_core_value_sigB785, var_core_value_sig130F) => var_core_value_sigB785.startIndex - var_core_value_sig130F.startIndex), var_core_value_sig09AC.customBlocks = (var_core_value_sig050D = var_core_value_sig09AC.customBlocks) == null ? undefined : var_core_value_sig050D.map(var_core_value_sigC0E3 => ({
    ...var_core_value_sigC0E3,
    startIndex: N(var_core_value_sigC0E3.startIndex, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E)
  })).sort((var_core_value_sig52F7, var_core_value_sig866F) => var_core_value_sig52F7.startIndex - var_core_value_sig866F.startIndex), var_core_value_sig09AC.blockRanges = (var_core_value_sig37AE = var_core_value_sig09AC.blockRanges) == null ? undefined : var_core_value_sig37AE.map(var_core_value_sigDE3D => ({
    ...var_core_value_sigDE3D,
    startIndex: N(var_core_value_sigDE3D.startIndex, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E),
    endIndex: N(var_core_value_sigDE3D.endIndex, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E)
  })).sort((var_core_value_sigF175, var_core_value_sig6A18) => var_core_value_sigF175.startIndex - var_core_value_sig6A18.startIndex), var_core_value_sig09AC.textRuns = (var_core_value_sig5B51 = var_core_value_sig09AC.textRuns) == null ? undefined : var_core_value_sig5B51.map(var_core_value_sig4E3D => ({
    ...var_core_value_sig4E3D,
    st: N(var_core_value_sig4E3D.st, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E),
    ed: N(var_core_value_sig4E3D.ed, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E)
  })).sort((var_core_value_sig49B0, var_core_value_sig2547) => var_core_value_sig49B0.st - var_core_value_sig2547.st), var_core_value_sig09AC.customRanges = (var_core_value_sig64FF = var_core_value_sig09AC.customRanges) == null ? undefined : var_core_value_sig64FF.map(var_core_value_sigBCA9 => ({
    ...var_core_value_sigBCA9,
    startIndex: N(var_core_value_sigBCA9.startIndex, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E),
    endIndex: N(var_core_value_sigBCA9.endIndex, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E)
  })).sort((var_core_value_sig4CDF, var_core_value_sig3F79) => var_core_value_sig4CDF.startIndex - var_core_value_sig3F79.startIndex), var_core_value_sig09AC.customDecorations = (var_core_value_sig86F4 = var_core_value_sig09AC.customDecorations) == null ? undefined : var_core_value_sig86F4.map(var_core_value_sig880E => ({
    ...var_core_value_sig880E,
    startIndex: N(var_core_value_sig880E.startIndex, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E),
    endIndex: N(var_core_value_sig880E.endIndex, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E)
  })).sort((var_core_value_sigC9ED, var_core_value_sigB57B) => var_core_value_sigC9ED.startIndex - var_core_value_sigB57B.startIndex), var_core_value_sig3A42.columnGroups = (var_core_value_sig9E0F = var_core_value_sig3A42.columnGroups) == null ? undefined : var_core_value_sig9E0F.map(var_core_value_sig780B => ({
    ...var_core_value_sig780B,
    startIndex: N(var_core_value_sig780B.startIndex, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E),
    endIndex: N(var_core_value_sig780B.endIndex, var_core_value_sig1613, var_core_value_sigADC6, var_core_value_sig4620, var_core_value_sig07FB, var_core_value_sig617E)
  })).sort((var_core_value_sig7D1B, var_core_value_sig7BE0) => var_core_value_sig7D1B.startIndex - var_core_value_sig7BE0.startIndex);
}
function N(var_core_value_sig8802, var_core_value_sig95D5, var_core_value_sigE027, var_core_value_sigE537, var_core_value_sig5D84, var_core_value_sigD120) {
  return var_core_value_sig8802 >= var_core_value_sig95D5 && var_core_value_sig8802 < var_core_value_sigE027 ? var_core_value_sig5D84 + var_core_value_sig8802 - var_core_value_sig95D5 : var_core_value_sigE537 < var_core_value_sig95D5 && var_core_value_sig8802 >= var_core_value_sigE537 && var_core_value_sig8802 < var_core_value_sig95D5 ? var_core_value_sig8802 + var_core_value_sigD120 : var_core_value_sigE537 > var_core_value_sigE027 && var_core_value_sig8802 >= var_core_value_sigE027 && var_core_value_sig8802 < var_core_value_sigE537 ? var_core_value_sig8802 - var_core_value_sigD120 : var_core_value_sig8802;
}
function Et(var_core_value_sigAA05, var_core_value_sigC04C, var_core_value_sig2069) {
  return Math.min(Math.max(var_core_value_sigAA05, var_core_value_sigC04C), var_core_value_sig2069);
}
function Dt(var_core_value_sig5176, var_core_value_sig71A1) {
  var var_core_value_sig72AD;
  return ((var_core_value_sig72AD = O(var_core_value_sig5176).tables[var_core_value_sig71A1]) == null ? undefined : var_core_value_sig72AD.headerRowCount) ?? 0;
}
function Ot(var_core_value_sig9ABE) {
  var var_core_value_sig8EF0;
  return ((var_core_value_sig8EF0 = var_core_value_sig9ABE.trHeight) == null || (var_core_value_sig8EF0 = var_core_value_sig8EF0.val) == null ? undefined : var_core_value_sig8EF0.v) ?? 0;
}
let kt = function (var_core_value_sig234B) {
    return var_core_value_sig234B.Text = "text", var_core_value_sig234B.Number = "number", var_core_value_sig234B.Date = "date", var_core_value_sig234B.Checkbox = "checkbox", var_core_value_sig234B.Dropdown = "dropdown", var_core_value_sig234B;
  }({}),
  At = function (var_core_value_sig8169) {
    return var_core_value_sig8169.None = "none", var_core_value_sig8169.Text = "text", var_core_value_sig8169.Cell = "cell", var_core_value_sig8169.Range = "range", var_core_value_sig8169.Row = "row", var_core_value_sig8169.Column = "column", var_core_value_sig8169.Table = "table", var_core_value_sig8169;
  }({}),
  jt = function (var_core_value_sigC5FB) {
    return var_core_value_sigC5FB.Rect = "rect", var_core_value_sigC5FB.Structural = "structural", var_core_value_sigC5FB.Text = "text", var_core_value_sigC5FB;
  }({}),
  Mt = function (var_core_value_sig5453) {
    return var_core_value_sig5453.Asc = "asc", var_core_value_sig5453.Desc = "desc", var_core_value_sig5453;
  }({});
function Nt(var_core_value_sig8725) {
  var var_core_value_sig513B, var_core_value_sig5501;
  let var_core_value_sig7784 = Pt(var_core_value_sig8725),
    var_core_value_sigB706 = p(var_core_value_sig8725.documentData, {
      tableIds: [var_core_value_sig8725.tableId]
    }),
    var_core_value_sig5FD01 = (var_core_value_sig513B = var_core_value_sigB706.tableSource) == null ? undefined : var_core_value_sig513B[var_core_value_sig8725.tableId],
    var_core_value_sig77E3 = i(var_core_value_sigB706, var_core_value_sig8725.tableId);
  if (!var_core_value_sig5FD01 || !var_core_value_sig77E3 || !((var_core_value_sig5501 = var_core_value_sigB706.body) != null && var_core_value_sig5501.dataStream)) throw Error("[DocsTable]: Table " + var_core_value_sig8725.tableId + " is not found.");
  let var_core_value_sigB071 = var_core_value_sig7784.sortedRowIndexes["map"](var_core_value_sig7D40 => var_core_value_sig5FD01.tableRows[var_core_value_sig7D40]);
  var_core_value_sig5FD01.tableRows["splice"](var_core_value_sig7784.sortStartRow, var_core_value_sigB071.length, ...var_core_value_sigB071);
  let var_core_value_sig15FE = var_core_value_sigB706.body["dataStream"].slice(var_core_value_sig77E3.startOffset, var_core_value_sig77E3.endOffset),
    var_core_value_sigCF47 = var_core_value_sig77E3.rows["slice"](0, var_core_value_sig7784.sortStartRow).map(var_core_value_sig6C7E => var_core_value_sigB706.body["dataStream"].slice(var_core_value_sig6C7E.startOffset, var_core_value_sig6C7E.endOffset + 1)).join(""),
    var_core_value_sigB0F9 = var_core_value_sig7784.sortedRowIndexes["map"](var_core_value_sig68BE => {
      let var_core_value_sig04C6 = var_core_value_sig77E3.rows[var_core_value_sig68BE];
      return var_core_value_sigB706.body["dataStream"].slice(var_core_value_sig04C6.startOffset, var_core_value_sig04C6.endOffset + 1);
    }).join(""),
    var_core_value_sigAF12 = "" + var_core_value_sig15FE[0] + var_core_value_sigCF47 + var_core_value_sigB0F9 + var_core_value_sig15FE[var_core_value_sig15FE.length - 1];
  return var_core_value_sigB706.body["dataStream"] = "" + var_core_value_sigB706.body["dataStream"].slice(0, var_core_value_sig77E3.startOffset) + var_core_value_sigAF12 + var_core_value_sigB706.body["dataStream"].slice(var_core_value_sig77E3.endOffset), {
    nextDocumentData: var_core_value_sigB706
  };
}
function Pt(var_core_value_sigC60C) {
  var var_core_value_sig1C3C, var_core_value_sig71CF, var_core_value_sigC341;
  let var_core_value_sigBA47 = (var_core_value_sig1C3C = var_core_value_sigC60C.documentData["tableSource"]) == null ? undefined : var_core_value_sig1C3C[var_core_value_sigC60C.tableId],
    var_core_value_sig3DF7 = i(var_core_value_sigC60C.documentData, var_core_value_sigC60C.tableId),
    var_core_value_sigD49F = (var_core_value_sig71CF = var_core_value_sigC60C.documentData["body"]) == null ? undefined : var_core_value_sig71CF.dataStream;
  if (!var_core_value_sigBA47 || !var_core_value_sig3DF7 || !var_core_value_sigD49F) throw Error("[DocsTable]:\x20Table\x20is\x20not\x20found.");
  Ft(var_core_value_sigBA47.tableRows);
  let var_core_value_sigCECC = O(var_core_value_sigC60C.metadata).tables[var_core_value_sigC60C.tableId],
    var_core_value_sig0F47 = (var_core_value_sigCECC != null && var_core_value_sigCECC.titleRow ? 1 : 0) + Dt(var_core_value_sigC60C.metadata, var_core_value_sigC60C.tableId),
    var_core_value_sig6B29 = Math.min(var_core_value_sig0F47, var_core_value_sigBA47.tableRows["length"]),
    var_core_value_sig28E2 = (var_core_value_sigCECC == null || (var_core_value_sigC341 = var_core_value_sigCECC.columnTypes) == null || (var_core_value_sigC341 = var_core_value_sigC341[var_core_value_sigC60C.column]) == null ? undefined : var_core_value_sigC341.type) ?? "text",
    var_core_value_sig1578 = var_core_value_sig3DF7.rows["slice"](var_core_value_sig6B29).map((var_core_value_sigCA05, var_core_value_sig2F2B) => {
      let var_core_value_sig70AF = var_core_value_sigCA05.cells[var_core_value_sigC60C.column];
      return {
        index: var_core_value_sig6B29 + var_core_value_sig2F2B,
        value: var_core_value_sig70AF ? var_core_value_sigD49F.slice(var_core_value_sig70AF.startOffset + 1, var_core_value_sig70AF.endOffset).trim() : ""
      };
    });
  return var_core_value_sig1578.sort((var_core_value_sigD04E, var_core_value_sigB99B) => Lt(var_core_value_sigD04E, var_core_value_sigB99B, var_core_value_sig28E2, var_core_value_sigC60C.direction)), {
    sortStartRow: var_core_value_sig6B29,
    sortedRowIndexes: var_core_value_sig1578.map(var_core_value_sig5A75 => var_core_value_sig5A75.index)
  };
}
function Ft(var_core_value_sig52ED) {
  if (var_core_value_sig52ED.some(var_core_value_sig7BAF => var_core_value_sig7BAF.tableCells["some"](var_core_value_sig50AF => It(var_core_value_sig50AF)))) throw Error("[DocsTable]:\x20Cannot\x20sort\x20a\x20table\x20with\x20row-spanning\x20merged\x20cells.");
}
function It(var_core_value_sig135F) {
  return (var_core_value_sig135F.rowSpan ?? 1) > 1 || var_core_value_sig135F.rowSpan === 0;
}
function Lt(var_core_value_sig416D, var_core_value_sigAD5D, var_core_value_sig1B8A, var_core_value_sigFB18) {
  let var_core_value_sig703C = var_core_value_sigFB18 === "asc" ? 1 : -1,
    var_core_value_sig96CF = Rt(var_core_value_sig416D.value, var_core_value_sigAD5D.value, var_core_value_sig1B8A);
  return var_core_value_sig96CF === 0 ? var_core_value_sig416D.index - var_core_value_sigAD5D.index : var_core_value_sig96CF * var_core_value_sig703C;
}
function Rt(var_core_value_sig49F1, var_core_value_sig2F7B, var_core_value_sigB0DF) {
  return var_core_value_sigB0DF === "number" ? zt(var_core_value_sig49F1) - zt(var_core_value_sig2F7B) : var_core_value_sigB0DF === "date" ? Bt(var_core_value_sig49F1) - Bt(var_core_value_sig2F7B) : var_core_value_sigB0DF === "checkbox" ? Vt(var_core_value_sig49F1) - Vt(var_core_value_sig2F7B) : var_core_value_sig49F1.localeCompare(var_core_value_sig2F7B);
}
function zt(var_core_value_sig2E44) {
  let var_core_value_sig8560 = Number(var_core_value_sig2E44);
  return Number.isFinite(var_core_value_sig8560) ? var_core_value_sig8560 : 1 / 0;
}
function Bt(var_core_value_sig138D) {
  let var_core_value_sig1E26 = Date.parse(var_core_value_sig138D);
  return Number.isNaN(var_core_value_sig1E26) ? 1 / 0 : var_core_value_sig1E26;
}
function Vt(var_core_value_sig5C6C) {
  return +!!["true", "1", "yes", "checked"].includes(var_core_value_sig5C6C.toLowerCase());
}
function P(var_core_value_sigBE85, var_core_value_sig56DE) {
  return (var_core_value_sigBE85 == null ? undefined : var_core_value_sigBE85.segmentId) ?? (var_core_value_sig56DE == null ? undefined : var_core_value_sig56DE.segmentId) ?? "";
}
function F(var_core_value_sig0278, var_core_value_sig08A6) {
  let var_core_value_sig04E1 = (var_core_value_sig0278 == null ? undefined : var_core_value_sig0278.startRow) ?? (var_core_value_sig08A6 == null ? undefined : var_core_value_sig08A6.startRow),
    var_core_value_sigC504 = (var_core_value_sig0278 == null ? undefined : var_core_value_sig0278.endRow) ?? (var_core_value_sig08A6 == null ? undefined : var_core_value_sig08A6.endRow),
    var_core_value_sig0515 = (var_core_value_sig0278 == null ? undefined : var_core_value_sig0278.startColumn) ?? (var_core_value_sig08A6 == null ? undefined : var_core_value_sig08A6.startColumn),
    var_core_value_sig9F34 = (var_core_value_sig0278 == null ? undefined : var_core_value_sig0278.endColumn) ?? (var_core_value_sig08A6 == null ? undefined : var_core_value_sig08A6.endColumn);
  return var_core_value_sig04E1 == null || var_core_value_sigC504 == null || var_core_value_sig0515 == null || var_core_value_sig9F34 == null ? null : {
    endColumn: var_core_value_sig9F34,
    endRow: var_core_value_sigC504,
    startColumn: var_core_value_sig0515,
    startRow: var_core_value_sig04E1
  };
}
function I(var_core_value_sig0247, var_core_value_sig6030 = "") {
  var var_core_value_sig0137;
  if (!var_core_value_sig6030) return var_core_value_sig0247.getSnapshot();
  let var_core_value_sig14F3 = (var_core_value_sig0137 = var_core_value_sig0247.getSelfOrHeaderFooterModel(var_core_value_sig6030)) == null ? undefined : var_core_value_sig0137.getSnapshot();
  if (!var_core_value_sig14F3) return null;
  let var_core_value_sig34E8 = var_core_value_sig0247.getSnapshot();
  return {
    ...var_core_value_sig14F3,
    documentStyle: var_core_value_sig34E8.documentStyle,
    drawings: var_core_value_sig34E8.drawings,
    drawingsOrder: var_core_value_sig34E8.drawingsOrder,
    tableSource: var_core_value_sig34E8.tableSource
  };
}
function L(var_core_value_sigCFE7, var_core_value_sigECBC, var_core_value_sig65D2, var_core_value_sig4306) {
  return kn(var_core_value_sig65D2, var_core_value_sig4306) ? null : var_core_value_sig65D2 === undefined ? var_core_value_sigCFE7.insertOp(var_core_value_sigECBC, var_core_value_sig4306) : var_core_value_sig4306 === undefined ? var_core_value_sigCFE7.removeOp(var_core_value_sigECBC, var_core_value_sig65D2) : var_core_value_sigCFE7.replaceOp(var_core_value_sigECBC, var_core_value_sig65D2, var_core_value_sig4306);
}
function Ht(var_core_value_sigFCD3, var_core_value_sig147A, var_core_value_sig829F, var_core_value_sig534C) {
  var var_core_value_sigABB7, var_core_value_sig9071, var_core_value_sig01A9;
  let var_core_value_sig9477 = (var_core_value_sigABB7 = var_core_value_sigFCD3.tableSource) == null || (var_core_value_sigABB7 = var_core_value_sigABB7[var_core_value_sig147A]) == null ? undefined : var_core_value_sigABB7.tableColumns[var_core_value_sig829F];
  if (!var_core_value_sig9477) return null;
  let var_core_value_sig917C = Math.max(1, var_core_value_sig534C);
  if (((var_core_value_sig9071 = var_core_value_sig9477.size) == null || (var_core_value_sig9071 = var_core_value_sig9071.width) == null ? undefined : var_core_value_sig9071.v) === var_core_value_sig917C) return null;
  let var_core_value_sig27E2 = e.JSONX["getInstance"]();
  return var_core_value_sig9477.size ? var_core_value_sig9477.size["width"] ? var_core_value_sig27E2.replaceOp(["tableSource", var_core_value_sig147A, "tableColumns", var_core_value_sig829F, "size", "width", "v"], (var_core_value_sig01A9 = var_core_value_sig9477.size) == null || (var_core_value_sig01A9 = var_core_value_sig01A9.width) == null ? undefined : var_core_value_sig01A9.v, var_core_value_sig917C) : var_core_value_sig27E2.insertOp(["tableSource", var_core_value_sig147A, "tableColumns", var_core_value_sig829F, "size", "width"], {
    v: var_core_value_sig917C
  }) : var_core_value_sig27E2.insertOp(["tableSource", var_core_value_sig147A, "tableColumns", var_core_value_sig829F, "size"], {
    type: e.TableSizeType["SPECIFIED"],
    width: {
      v: var_core_value_sig917C
    }
  });
}
function Ut(var_core_value_sig10D7, var_core_value_sig5A1A, var_core_value_sig77D2, var_core_value_sig625E) {
  var var_core_value_sig6F04, var_core_value_sig48DA, var_core_value_sigD327, var_core_value_sig6694, var_core_value_sig2A21;
  let var_core_value_sig0836 = (var_core_value_sig6F04 = var_core_value_sig10D7.tableSource) == null ? undefined : var_core_value_sig6F04[var_core_value_sig5A1A];
  if (!var_core_value_sig0836) return null;
  let var_core_value_sigD95C = e.JSONX["getInstance"]();
  return B([L(var_core_value_sigD95C, ["tableSource", var_core_value_sig5A1A, "textWrap"], var_core_value_sig0836.textWrap, e.TableTextWrapType["WRAP"]), L(var_core_value_sigD95C, ["tableSource", var_core_value_sig5A1A, "position", "positionH", "posOffset"], (var_core_value_sig48DA = var_core_value_sig0836.position) == null || (var_core_value_sig48DA = var_core_value_sig48DA.positionH) == null ? undefined : var_core_value_sig48DA.posOffset, (((var_core_value_sigD327 = var_core_value_sig0836.position) == null || (var_core_value_sigD327 = var_core_value_sigD327.positionH) == null ? undefined : var_core_value_sigD327.posOffset) ?? 0) + var_core_value_sig77D2), L(var_core_value_sigD95C, ["tableSource", var_core_value_sig5A1A, "position", "positionV", "posOffset"], (var_core_value_sig6694 = var_core_value_sig0836.position) == null || (var_core_value_sig6694 = var_core_value_sig6694.positionV) == null ? undefined : var_core_value_sig6694.posOffset, (((var_core_value_sig2A21 = var_core_value_sig0836.position) == null || (var_core_value_sig2A21 = var_core_value_sig2A21.positionV) == null ? undefined : var_core_value_sig2A21.posOffset) ?? 0) + var_core_value_sig625E)].filter(Boolean));
}
function Wt(var_core_value_sig692E, var_core_value_sig3FAF, var_core_value_sig378B, var_core_value_sigDE50 = ["body"]) {
  var var_core_value_sig3094, var_core_value_sig86CC, var_core_value_sig7868;
  let var_core_value_sig9921 = var_core_value_sig692E.body,
    var_core_value_sig59BF = (var_core_value_sig3094 = var_core_value_sig692E.tableSource) == null ? undefined : var_core_value_sig3094[var_core_value_sig3FAF],
    var_core_value_sigF001 = i(var_core_value_sig692E, var_core_value_sig3FAF);
  if (!(var_core_value_sig9921 != null && var_core_value_sig9921.dataStream) || !var_core_value_sig59BF || !var_core_value_sigF001) return null;
  let var_core_value_sigE511 = Math.min(Math.max(var_core_value_sig378B, 0), var_core_value_sig9921.dataStream["length"]);
  if (var_core_value_sigE511 >= var_core_value_sigF001.startOffset && var_core_value_sigE511 <= var_core_value_sigF001.endOffset || !Gt(var_core_value_sig9921, var_core_value_sig3FAF, var_core_value_sigE511)) return null;
  let var_core_value_sig1C81 = ln(var_core_value_sig9921, var_core_value_sigF001.startOffset, var_core_value_sigF001.endOffset, var_core_value_sigE511, var_core_value_sigDE50);
  if (!var_core_value_sig1C81) return null;
  let var_core_value_sig2C6A = e.JSONX["getInstance"]();
  return B([var_core_value_sig1C81, L(var_core_value_sig2C6A, ["tableSource", var_core_value_sig3FAF, "textWrap"], var_core_value_sig59BF.textWrap, e.TableTextWrapType["NONE"]), L(var_core_value_sig2C6A, ["tableSource", var_core_value_sig3FAF, "position", "positionH", "posOffset"], (var_core_value_sig86CC = var_core_value_sig59BF.position) == null || (var_core_value_sig86CC = var_core_value_sig86CC.positionH) == null ? undefined : var_core_value_sig86CC.posOffset, 0), L(var_core_value_sig2C6A, ["tableSource", var_core_value_sig3FAF, "position", "positionV", "posOffset"], (var_core_value_sig7868 = var_core_value_sig59BF.position) == null || (var_core_value_sig7868 = var_core_value_sig7868.positionV) == null ? undefined : var_core_value_sig7868.posOffset, 0)].filter(Boolean));
}
function Gt(var_core_value_sig7207, var_core_value_sig297F, var_core_value_sigA95A) {
  var var_core_value_sig94D6, var_core_value_sigC22E, var_core_value_sig2321;
  return !((var_core_value_sig94D6 = var_core_value_sig7207.tables) != null && var_core_value_sig94D6.some(var_core_value_sig8F69 => var_core_value_sig8F69.tableId !== var_core_value_sig297F && var_core_value_sig8F69.startIndex <= var_core_value_sigA95A && var_core_value_sigA95A < var_core_value_sig8F69.endIndex) || (var_core_value_sigC22E = var_core_value_sig7207.blockRanges) != null && var_core_value_sigC22E.some(var_core_value_sig6884 => var_core_value_sig6884.startIndex <= var_core_value_sigA95A && var_core_value_sigA95A <= var_core_value_sig6884.endIndex) || (var_core_value_sig2321 = var_core_value_sig7207.customBlocks) != null && var_core_value_sig2321.some(var_core_value_sig066E => var_core_value_sig066E.startIndex === var_core_value_sigA95A));
}
function Kt(var_core_value_sigFF33, var_core_value_sig16E0, var_core_value_sig213C, var_core_value_sig31F8, var_core_value_sig6905 = e.TableRowHeightRule["AT_LEAST"]) {
  var var_core_value_sigC3C0, var_core_value_sig1F39, var_core_value_sig9256;
  let var_core_value_sig98A0 = (var_core_value_sigC3C0 = var_core_value_sigFF33.tableSource) == null || (var_core_value_sigC3C0 = var_core_value_sigC3C0[var_core_value_sig16E0]) == null ? undefined : var_core_value_sigC3C0.tableRows[var_core_value_sig213C];
  if (!var_core_value_sig98A0) return null;
  let var_core_value_sig3EBD = {
    hRule: var_core_value_sig6905,
    val: {
      v: Math.max(1, var_core_value_sig31F8)
    }
  };
  return var_core_value_sig98A0.trHeight ? [L(e.JSONX["getInstance"](), ["tableSource", var_core_value_sig16E0, "tableRows", var_core_value_sig213C, "trHeight", "hRule"], (var_core_value_sig1F39 = var_core_value_sig98A0.trHeight) == null ? undefined : var_core_value_sig1F39.hRule, var_core_value_sig3EBD.hRule), L(e.JSONX["getInstance"](), ["tableSource", var_core_value_sig16E0, "tableRows", var_core_value_sig213C, "trHeight", "val", "v"], (var_core_value_sig9256 = var_core_value_sig98A0.trHeight) == null || (var_core_value_sig9256 = var_core_value_sig9256.val) == null ? undefined : var_core_value_sig9256.v, var_core_value_sig3EBD.val["v"])].filter(Boolean).reduce((var_core_value_sig9B0D, var_core_value_sig3D2C) => e.JSONX["compose"](var_core_value_sig9B0D, var_core_value_sig3D2C), null) : e.JSONX["getInstance"]().insertOp(["tableSource", var_core_value_sig16E0, "tableRows", var_core_value_sig213C, "trHeight"], var_core_value_sig3EBD);
}
function qt(var_core_value_sig1AC3, var_core_value_sig66B8, var_core_value_sig4C7F, var_core_value_sig2543) {
  var var_core_value_sigB230;
  let var_core_value_sig407E = (var_core_value_sigB230 = var_core_value_sig1AC3.tableSource) == null ? undefined : var_core_value_sigB230[var_core_value_sig66B8];
  if (!var_core_value_sig407E) return null;
  let var_core_value_sig88CB = Math.min(var_core_value_sig4C7F, var_core_value_sig2543),
    var_core_value_sigD615 = Math.max(var_core_value_sig4C7F, var_core_value_sig2543),
    var_core_value_sigB708 = var_core_value_sig407E.tableRows["slice"](var_core_value_sig88CB, var_core_value_sigD615 + 1);
  if (!var_core_value_sigB708.length) return null;
  let var_core_value_sig60EF = var_core_value_sigB708.reduce((var_core_value_sigC56D, var_core_value_sig3A17) => {
    var var_core_value_sig938F;
    return var_core_value_sigC56D + (((var_core_value_sig938F = var_core_value_sig3A17.trHeight) == null || (var_core_value_sig938F = var_core_value_sig938F.val) == null ? undefined : var_core_value_sig938F.v) ?? 0);
  }, 0) / var_core_value_sigB708.length;
  return var_core_value_sigB708.map((var_core_value_sigD948, var_core_value_sigBE5E) => Kt(var_core_value_sig1AC3, var_core_value_sig66B8, var_core_value_sig88CB + var_core_value_sigBE5E, var_core_value_sig60EF)).filter(Boolean).reduce((var_core_value_sig0281, var_core_value_sigED71) => e.JSONX["compose"](var_core_value_sig0281, var_core_value_sigED71), null);
}
function Jt(var_core_value_sigA6FB, var_core_value_sigD6EA, var_core_value_sigA2D3, var_core_value_sig727A) {
  var var_core_value_sig6AF1;
  let var_core_value_sig3F6A = (var_core_value_sig6AF1 = var_core_value_sigA6FB.tableSource) == null ? undefined : var_core_value_sig6AF1[var_core_value_sigD6EA];
  if (!var_core_value_sig3F6A) return null;
  let var_core_value_sig23B4 = Math.min(var_core_value_sigA2D3, var_core_value_sig727A),
    var_core_value_sig350C = Math.max(var_core_value_sigA2D3, var_core_value_sig727A),
    var_core_value_sig2335 = var_core_value_sig3F6A.tableColumns["slice"](var_core_value_sig23B4, var_core_value_sig350C + 1);
  if (!var_core_value_sig2335.length) return null;
  let var_core_value_sig6233 = var_core_value_sig2335.reduce((var_core_value_sig281C, var_core_value_sig3C92) => {
    var var_core_value_sigB16B;
    return var_core_value_sig281C + (((var_core_value_sigB16B = var_core_value_sig3C92.size) == null || (var_core_value_sigB16B = var_core_value_sigB16B.width) == null ? undefined : var_core_value_sigB16B.v) ?? 0);
  }, 0) / var_core_value_sig2335.length;
  return var_core_value_sig2335.map((var_core_value_sig585D, var_core_value_sigE722) => Ht(var_core_value_sigA6FB, var_core_value_sigD6EA, var_core_value_sig23B4 + var_core_value_sigE722, var_core_value_sig6233)).filter(Boolean).reduce((var_core_value_sig062A, var_core_value_sig050A) => e.JSONX["compose"](var_core_value_sig062A, var_core_value_sig050A), null);
}
function Yt(var_core_value_sig4230, var_core_value_sig6136, var_core_value_sigD25E) {
  var var_core_value_sigE1BC;
  let var_core_value_sigCF44 = (var_core_value_sigE1BC = var_core_value_sig4230.tableSource) == null ? undefined : var_core_value_sigE1BC[var_core_value_sig6136];
  if (!var_core_value_sigCF44) return null;
  let var_core_value_sig3C97 = Math.min(Math.max(0, var_core_value_sigD25E), var_core_value_sigCF44.tableRows["length"]),
    var_core_value_sigA920 = e.JSONX["getInstance"](),
    var_core_value_sigAD56 = [];
  return var_core_value_sigCF44.tableRows["forEach"]((var_core_value_sig8B32, var_core_value_sig870F) => {
    let var_core_value_sigB683 = var_core_value_sig870F < var_core_value_sig3C97 ? e.BooleanNumber["TRUE"] : e.BooleanNumber["FALSE"],
      var_core_value_sig26EC = var_core_value_sig870F < var_core_value_sig3C97 ? e.BooleanNumber["TRUE"] : undefined,
      var_core_value_sigEEDB = L(var_core_value_sigA920, ["tableSource", var_core_value_sig6136, "tableRows", var_core_value_sig870F, "repeatHeaderRow"], var_core_value_sig8B32.repeatHeaderRow, var_core_value_sigB683),
      var_core_value_sig36E7 = L(var_core_value_sigA920, ["tableSource", var_core_value_sig6136, "tableRows", var_core_value_sig870F, "isFirstRow"], var_core_value_sig8B32.isFirstRow, var_core_value_sig26EC);
    var_core_value_sigEEDB && var_core_value_sigAD56.push(var_core_value_sigEEDB), var_core_value_sig36E7 && var_core_value_sigAD56.push(var_core_value_sig36E7);
  }), {
    actions: B(var_core_value_sigAD56),
    headerRowCount: var_core_value_sig3C97
  };
}
function Xt(var_core_value_sig0454, var_core_value_sigEE1A, var_core_value_sig4107, var_core_value_sigF35C, var_core_value_sigEF8D, var_core_value_sigE025 = {}) {
  var var_core_value_sigD549;
  let var_core_value_sigC79E = (var_core_value_sigD549 = var_core_value_sig0454.tableSource) == null ? undefined : var_core_value_sigD549[var_core_value_sigEE1A],
    var_core_value_sig9221 = i(var_core_value_sig0454, var_core_value_sigEE1A);
  if (!var_core_value_sigC79E || !var_core_value_sig9221 || var_core_value_sigF35C <= 0 || var_core_value_sig4107 < 0 || var_core_value_sig4107 >= var_core_value_sigC79E.tableColumns["length"]) return null;
  let var_core_value_sig0351 = var_core_value_sigEF8D === "left" ? var_core_value_sig4107 : var_core_value_sig4107 + 1,
    var_core_value_sig4686 = var_core_value_sigC79E.tableColumns[var_core_value_sig4107],
    var_core_value_sig8E1C = var_core_value_sigE025.insertedColumnWidth ?? var_core_value_sig4686.size["width"].v,
    var_core_value_sigD719 = var_core_value_sigE025.preserveTotalWidth ?? true,
    var_core_value_sig323C = var_core_value_sigC79E.tableColumns["reduce"]((var_core_value_sig6A78, var_core_value_sigF7EF) => var_core_value_sig6A78 + var_core_value_sigF7EF.size["width"].v, 0),
    var_core_value_sig015D = var_core_value_sigD719 && var_core_value_sig323C > 0 ? var_core_value_sig323C / (var_core_value_sig323C + var_core_value_sig8E1C * var_core_value_sigF35C) : 1,
    var_core_value_sigBF8B = Zt(var_core_value_sigC79E, var_core_value_sig0351, var_core_value_sigF35C),
    var_core_value_sigF7CE = Sn(var_core_value_sigC79E, var_core_value_sigBF8B, var_core_value_sig27F9 => var_core_value_sig27F9 >= var_core_value_sig0351 ? var_core_value_sig27F9 + var_core_value_sigF35C : var_core_value_sig27F9);
  Qt(var_core_value_sigF7CE, var_core_value_sigC79E, var_core_value_sigEE1A, var_core_value_sigD719, var_core_value_sig323C, var_core_value_sig8E1C, var_core_value_sigF35C, var_core_value_sig015D), $t(var_core_value_sigF7CE, var_core_value_sigC79E, var_core_value_sigEE1A, var_core_value_sig4107, var_core_value_sig0351, var_core_value_sigF35C, var_core_value_sig8E1C, var_core_value_sig015D, var_core_value_sigBF8B);
  let var_core_value_sig7CF1 = M(var_core_value_sig0454, en(var_core_value_sig9221, var_core_value_sig4107, var_core_value_sigF35C, var_core_value_sigEF8D), var_core_value_sigE025.bodyPath ?? ["body"]);
  return var_core_value_sig7CF1 ? (var_core_value_sigF7CE.push(var_core_value_sig7CF1), {
    actions: B(var_core_value_sigF7CE),
    cursorColumn: var_core_value_sig0351
  }) : null;
}
function Zt(var_core_value_sigA552, var_core_value_sigAE32, var_core_value_sig9B4D) {
  return bn(w(var_core_value_sigA552).map(var_core_value_sig393E => var_core_value_sigAE32 <= var_core_value_sig393E.startColumn ? {
    ...var_core_value_sig393E,
    startColumn: var_core_value_sig393E.startColumn + var_core_value_sig9B4D,
    endColumn: var_core_value_sig393E.endColumn + var_core_value_sig9B4D
  } : var_core_value_sigAE32 <= var_core_value_sig393E.endColumn ? {
    ...var_core_value_sig393E,
    endColumn: var_core_value_sig393E.endColumn + var_core_value_sig9B4D
  } : var_core_value_sig393E));
}
function Qt(var_core_value_sig2704, var_core_value_sigD0CC, var_core_value_sigF347, var_core_value_sig80C6, var_core_value_sigEBFB, var_core_value_sigF3BF, var_core_value_sigAE58, var_core_value_sig8E13) {
  var var_core_value_sig3AAF;
  let var_core_value_sig134E = e.JSONX["getInstance"]();
  if (var_core_value_sig80C6) {
    var_core_value_sigD0CC.tableColumns["forEach"]((var_core_value_sigA942, var_core_value_sigA621) => {
      let var_core_value_sigBBFF = L(var_core_value_sig134E, ["tableSource", var_core_value_sigF347, "tableColumns", var_core_value_sigA621, "size", "width", "v"], var_core_value_sigA942.size["width"].v, var_core_value_sigA942.size["width"].v * var_core_value_sig8E13);
      var_core_value_sigBBFF && var_core_value_sig2704.push(var_core_value_sigBBFF);
    });
    return;
  }
  if ((var_core_value_sig3AAF = var_core_value_sigD0CC.size) != null && var_core_value_sig3AAF.width) {
    let var_core_value_sigB609 = L(var_core_value_sig134E, ["tableSource", var_core_value_sigF347, "size", "width", "v"], var_core_value_sigD0CC.size["width"].v, var_core_value_sigEBFB + var_core_value_sigF3BF * var_core_value_sigAE58);
    var_core_value_sigB609 && var_core_value_sig2704.push(var_core_value_sigB609);
  }
}
function $t(var_core_value_sigA3C0, var_core_value_sig723F, var_core_value_sigD044, var_core_value_sig9797, var_core_value_sig8533, var_core_value_sig57C5, var_core_value_sig0DE9, var_core_value_sigB00D, var_core_value_sig57C8) {
  let var_core_value_sigC27D = e.JSONX["getInstance"](),
    var_core_value_sig7B95 = var_core_value_sig723F.tableColumns[var_core_value_sig9797];
  for (let var_core_value_sig390D = 0; var_core_value_sig390D < var_core_value_sig57C5; var_core_value_sig390D++) {
    let var_core_value_sig8889 = z(var_core_value_sig7B95);
    var_core_value_sig8889.size["width"].v = var_core_value_sig0DE9 * var_core_value_sigB00D, var_core_value_sigA3C0.push(var_core_value_sigC27D.insertOp(["tableSource", var_core_value_sigD044, "tableColumns", var_core_value_sig8533 + var_core_value_sig390D], var_core_value_sig8889));
  }
  var_core_value_sig723F.tableRows["forEach"]((var_core_value_sigC928, var_core_value_sig39B7) => {
    for (let var_core_value_sig32F8 = 0; var_core_value_sig32F8 < var_core_value_sig57C5; var_core_value_sig32F8++) {
      let var_core_value_sig8178 = z(var_core_value_sigC928.tableCells[var_core_value_sig9797]);
      wn(var_core_value_sig8178, var_core_value_sig39B7, var_core_value_sig8533 + var_core_value_sig32F8, var_core_value_sig57C8), var_core_value_sigA3C0.push(var_core_value_sigC27D.insertOp(["tableSource", var_core_value_sigD044, "tableRows", var_core_value_sig39B7, "tableCells", var_core_value_sig8533 + var_core_value_sig32F8], var_core_value_sig8178));
    }
  });
}
function en(var_core_value_sig7D59, var_core_value_sig5863, var_core_value_sig5BE7, var_core_value_sigC74A) {
  let var_core_value_sig8F6A = On(Dn(), var_core_value_sig5BE7);
  return var_core_value_sig7D59.rows["map"](var_core_value_sig18E0 => {
    let var_core_value_sigE161 = var_core_value_sig18E0.cells[var_core_value_sig5863],
      var_core_value_sigBDEE = var_core_value_sigC74A === "left" ? var_core_value_sigE161.startOffset : var_core_value_sigE161.endOffset + 1;
    return {
      startOffset: var_core_value_sigBDEE,
      endOffset: var_core_value_sigBDEE,
      text: var_core_value_sig8F6A
    };
  });
}
function tn(var_core_value_sig46EA, var_core_value_sig626C, var_core_value_sig9077, var_core_value_sigC76C, var_core_value_sigB23A = ["body"]) {
  var var_core_value_sigBA66;
  let var_core_value_sig3DF0 = (var_core_value_sigBA66 = var_core_value_sig46EA.tableSource) == null ? undefined : var_core_value_sigBA66[var_core_value_sig626C],
    var_core_value_sig0512 = i(var_core_value_sig46EA, var_core_value_sig626C);
  if (!var_core_value_sig3DF0 || !var_core_value_sig0512) return null;
  let var_core_value_sig4B2B = Math.min(var_core_value_sig9077, var_core_value_sigC76C),
    var_core_value_sigDF88 = Math.max(var_core_value_sig9077, var_core_value_sigC76C);
  if (var_core_value_sig4B2B < 0 || var_core_value_sig4B2B >= var_core_value_sig3DF0.tableColumns["length"] || var_core_value_sigDF88 < var_core_value_sig4B2B) return null;
  let var_core_value_sigDB93 = Math.min(var_core_value_sigDF88, var_core_value_sig3DF0.tableColumns["length"] - 1),
    var_core_value_sig67CF = var_core_value_sigDB93 - var_core_value_sig4B2B + 1;
  if (var_core_value_sig67CF >= var_core_value_sig3DF0.tableColumns["length"]) {
    let var_core_value_sig1F40 = gn(var_core_value_sig46EA, var_core_value_sig626C, var_core_value_sigB23A);
    return var_core_value_sig1F40 ? {
      actions: var_core_value_sig1F40.actions,
      cursorColumn: 0,
      deleteTable: true
    } : null;
  }
  let var_core_value_sigCA96 = Sn(var_core_value_sig3DF0, bn(w(var_core_value_sig3DF0).map(var_core_value_sig3FC7 => yn(var_core_value_sig3FC7, var_core_value_sig4B2B, var_core_value_sigDB93)).filter(var_core_value_sig1E1B => var_core_value_sig1E1B != null)), var_core_value_sig3B10 => var_core_value_sig3B10 < var_core_value_sig4B2B ? var_core_value_sig3B10 : var_core_value_sig3B10 > var_core_value_sigDB93 ? var_core_value_sig3B10 - var_core_value_sig67CF : null);
  fn(var_core_value_sigCA96, var_core_value_sig3DF0, var_core_value_sig626C, var_core_value_sig4B2B, var_core_value_sigDB93);
  let var_core_value_sig6C5E = var_core_value_sig0512.rows["map"](var_core_value_sig89E6 => ({
      startOffset: var_core_value_sig89E6.cells[var_core_value_sig4B2B].startOffset,
      endOffset: var_core_value_sig89E6.cells[var_core_value_sigDB93].endOffset + 1,
      text: ""
    })),
    var_core_value_sig4997 = M(var_core_value_sig46EA, var_core_value_sig6C5E, var_core_value_sigB23A);
  return var_core_value_sig4997 ? (var_core_value_sigCA96.push(..._n(var_core_value_sig46EA, var_core_value_sig6C5E.map(({
    startOffset: var_core_value_sig4743,
    endOffset: var_core_value_sigEB6A
  }) => ({
    startOffset: var_core_value_sig4743,
    endOffset: var_core_value_sigEB6A,
    collapsed: false
  })))), var_core_value_sigCA96.push(var_core_value_sig4997), {
    actions: B(var_core_value_sigCA96),
    cursorColumn: Math.min(var_core_value_sig4B2B, var_core_value_sig3DF0.tableColumns["length"] - var_core_value_sig67CF - 1)
  }) : null;
}
function nn(var_core_value_sig7290, var_core_value_sigE835, var_core_value_sig4644, var_core_value_sig9DED, var_core_value_sig7DE6, var_core_value_sig120E, var_core_value_sigD79B = ["body"]) {
  var var_core_value_sig92A3;
  let var_core_value_sig8911 = (var_core_value_sig92A3 = var_core_value_sig7290.tableSource) == null ? undefined : var_core_value_sig92A3[var_core_value_sigE835],
    var_core_value_sig8D1B = i(var_core_value_sig7290, var_core_value_sigE835);
  if (!var_core_value_sig8911 || !var_core_value_sig8D1B || var_core_value_sig7DE6 <= 0) return null;
  let var_core_value_sigA915 = cn(var_core_value_sig4644, var_core_value_sig8911.tableRows["length"] - 1),
    var_core_value_sigE1F7 = cn(var_core_value_sig9DED, var_core_value_sig8911.tableRows["length"] - 1),
    var_core_value_sig4BE7 = Math.min(var_core_value_sig8911.tableRows["length"] - 1, var_core_value_sigA915 + var_core_value_sig7DE6 - 1),
    var_core_value_sigF9FF = var_core_value_sig4BE7 - var_core_value_sigA915 + 1,
    var_core_value_sigE0E3 = var_core_value_sig120E === "above" ? var_core_value_sigE1F7 : var_core_value_sigE1F7 + 1;
  if (var_core_value_sigE0E3 >= var_core_value_sigA915 && var_core_value_sigE0E3 <= var_core_value_sig4BE7 + 1) return {
    actions: null,
    cursorRow: var_core_value_sigA915
  };
  let var_core_value_sig3AB3 = var_core_value_sigE0E3 > var_core_value_sig4BE7 ? var_core_value_sigE0E3 - var_core_value_sigF9FF : var_core_value_sigE0E3,
    var_core_value_sig816E = [];
  sn(var_core_value_sig816E, ["tableSource", var_core_value_sigE835, "tableRows"], var_core_value_sigA915, var_core_value_sigF9FF, var_core_value_sig3AB3);
  let var_core_value_sigE6F3 = a(var_core_value_sig8D1B, var_core_value_sigA915).startOffset,
    var_core_value_sig3EE1 = a(var_core_value_sig8D1B, var_core_value_sig4BE7).endOffset + 1,
    var_core_value_sig9673 = var_core_value_sigE0E3 > var_core_value_sig4BE7 ? a(var_core_value_sig8D1B, var_core_value_sigE1F7).endOffset + 1 : a(var_core_value_sig8D1B, var_core_value_sigE1F7).startOffset,
    var_core_value_sig4917 = ln(var_core_value_sig7290.body, var_core_value_sigE6F3, var_core_value_sig3EE1, var_core_value_sig9673, var_core_value_sigD79B);
  return var_core_value_sig4917 ? (var_core_value_sig816E.push(var_core_value_sig4917), {
    actions: B(var_core_value_sig816E),
    cursorRow: var_core_value_sig3AB3
  }) : null;
}
function rn(var_core_value_sig3BE6, var_core_value_sigA1C9, var_core_value_sig77D6, var_core_value_sigE3CE, var_core_value_sig219B, var_core_value_sig4493, var_core_value_sig8B9C = ["body"]) {
  var var_core_value_sigA35B;
  let var_core_value_sig82DD = (var_core_value_sigA35B = var_core_value_sig3BE6.tableSource) == null ? undefined : var_core_value_sigA35B[var_core_value_sigA1C9],
    var_core_value_sigAAC7 = i(var_core_value_sig3BE6, var_core_value_sigA1C9);
  if (!var_core_value_sig82DD || !var_core_value_sigAAC7 || var_core_value_sig219B <= 0) return null;
  let var_core_value_sig1999 = cn(var_core_value_sig77D6, var_core_value_sig82DD.tableColumns["length"] - 1),
    var_core_value_sigFB45 = cn(var_core_value_sigE3CE, var_core_value_sig82DD.tableColumns["length"] - 1),
    var_core_value_sigB86C = Math.min(var_core_value_sig82DD.tableColumns["length"] - 1, var_core_value_sig1999 + var_core_value_sig219B - 1),
    var_core_value_sigD892 = var_core_value_sigB86C - var_core_value_sig1999 + 1,
    var_core_value_sig6086 = var_core_value_sig4493 === "left" ? var_core_value_sigFB45 : var_core_value_sigFB45 + 1;
  if (var_core_value_sig6086 >= var_core_value_sig1999 && var_core_value_sig6086 <= var_core_value_sigB86C + 1) return {
    actions: null,
    cursorColumn: var_core_value_sig1999
  };
  let var_core_value_sigAED2 = var_core_value_sig6086 > var_core_value_sigB86C ? var_core_value_sig6086 - var_core_value_sigD892 : var_core_value_sig6086,
    var_core_value_sig3516 = [];
  return sn(var_core_value_sig3516, ["tableSource", var_core_value_sigA1C9, "tableColumns"], var_core_value_sig1999, var_core_value_sigD892, var_core_value_sigAED2), var_core_value_sig82DD.tableRows["forEach"]((var_core_value_sig3D46, var_core_value_sigCC93) => sn(var_core_value_sig3516, ["tableSource", var_core_value_sigA1C9, "tableRows", var_core_value_sigCC93, "tableCells"], var_core_value_sig1999, var_core_value_sigD892, var_core_value_sigAED2)), var_core_value_sigAAC7.rows["forEach"](var_core_value_sig5964 => {
    let var_core_value_sig808B = var_core_value_sig5964.cells[var_core_value_sig1999].startOffset,
      var_core_value_sig2A26 = var_core_value_sig5964.cells[var_core_value_sigB86C].endOffset + 1,
      var_core_value_sig1179 = var_core_value_sig6086 > var_core_value_sigB86C ? var_core_value_sig5964.cells[var_core_value_sigFB45].endOffset + 1 : var_core_value_sig5964.cells[var_core_value_sigFB45].startOffset,
      var_core_value_sigEA92 = ln(var_core_value_sig3BE6.body, var_core_value_sig808B, var_core_value_sig2A26, var_core_value_sig1179, var_core_value_sig8B9C);
    var_core_value_sigEA92 && var_core_value_sig3516.push(var_core_value_sigEA92);
  }), {
    actions: B(var_core_value_sig3516),
    cursorColumn: var_core_value_sigAED2
  };
}
function an(var_core_value_sigCDCD, var_core_value_sig206A, var_core_value_sig1EFE, var_core_value_sig9904, var_core_value_sig39C7, var_core_value_sigA022 = ["body"]) {
  var var_core_value_sig913A;
  let var_core_value_sig991D = (var_core_value_sig913A = var_core_value_sigCDCD.tableSource) == null ? undefined : var_core_value_sig913A[var_core_value_sig1EFE],
    var_core_value_sig3E9C = i(var_core_value_sigCDCD, var_core_value_sig1EFE),
    var_core_value_sig7835 = var_core_value_sigCDCD.body;
  if (!var_core_value_sig991D || !var_core_value_sig3E9C || !var_core_value_sig7835 || !var_core_value_sig3E9C.rows["length"]) return null;
  let var_core_value_sig1257 = Pt({
      documentData: var_core_value_sigCDCD,
      metadata: var_core_value_sig206A,
      tableId: var_core_value_sig1EFE,
      column: var_core_value_sig9904,
      direction: var_core_value_sig39C7
    }),
    var_core_value_sig97E2 = var_core_value_sig3E9C.rows["map"]((var_core_value_sig8FD9, var_core_value_sig1AE5) => ({
      body: dn(z((0, e.getBodySliceForTextXAction)(var_core_value_sig7835, var_core_value_sig8FD9.startOffset, var_core_value_sig8FD9.endOffset + 1, false))),
      length: var_core_value_sig8FD9.endOffset + 1 - var_core_value_sig8FD9.startOffset,
      sourceIndex: var_core_value_sig1AE5
    })),
    var_core_value_sigBFA3 = var_core_value_sig3E9C.rows[0].startOffset,
    var_core_value_sig6663 = [];
  return var_core_value_sig1257.sortedRowIndexes["forEach"]((var_core_value_sig7100, var_core_value_sigA19A) => {
    let var_core_value_sigD3F5 = var_core_value_sig1257.sortStartRow + var_core_value_sigA19A,
      var_core_value_sig3082 = var_core_value_sig97E2.findIndex(var_core_value_sig5B67 => var_core_value_sig5B67.sourceIndex === var_core_value_sig7100);
    if (var_core_value_sig3082 === var_core_value_sigD3F5) return;
    let var_core_value_sigF5D1 = var_core_value_sigBFA3 + on(var_core_value_sig97E2, var_core_value_sig3082),
      var_core_value_sig8775 = var_core_value_sigBFA3 + on(var_core_value_sig97E2, var_core_value_sigD3F5),
      var_core_value_sig481B = var_core_value_sig97E2[var_core_value_sig3082],
      var_core_value_sig13D7 = un(var_core_value_sigF5D1, var_core_value_sigF5D1 + var_core_value_sig481B.length, var_core_value_sig8775, var_core_value_sig481B.body, var_core_value_sigA022);
    var_core_value_sig13D7 && (var_core_value_sig6663.push(e.JSONX["getInstance"]().moveOp(["tableSource", var_core_value_sig1EFE, "tableRows", var_core_value_sig3082], ["tableSource", var_core_value_sig1EFE, "tableRows", var_core_value_sigD3F5])), var_core_value_sig6663.push(var_core_value_sig13D7)), var_core_value_sig97E2.splice(var_core_value_sigD3F5, 0, var_core_value_sig97E2.splice(var_core_value_sig3082, 1)[0]);
  }), B(var_core_value_sig6663);
}
function on(var_core_value_sigB250, var_core_value_sig4EAB) {
  let var_core_value_sig2FD0 = 0;
  for (let var_core_value_sig90C0 = 0; var_core_value_sig90C0 < var_core_value_sig4EAB; var_core_value_sig90C0++) var_core_value_sig2FD0 += var_core_value_sigB250[var_core_value_sig90C0].length;
  return var_core_value_sig2FD0;
}
function sn(var_core_value_sig035C, var_core_value_sigA7F0, var_core_value_sig6AE2, var_core_value_sigFD17, var_core_value_sigA5E0) {
  let var_core_value_sigC38F = e.JSONX["getInstance"]();
  if (var_core_value_sigA5E0 < var_core_value_sig6AE2) {
    for (let var_core_value_sig1758 = 0; var_core_value_sig1758 < var_core_value_sigFD17; var_core_value_sig1758++) var_core_value_sig035C.push(var_core_value_sigC38F.moveOp([...var_core_value_sigA7F0, var_core_value_sig6AE2 + var_core_value_sig1758], [...var_core_value_sigA7F0, var_core_value_sigA5E0 + var_core_value_sig1758]));
    return;
  }
  for (let var_core_value_sigF1B2 = var_core_value_sigFD17 - 1; var_core_value_sigF1B2 >= 0; var_core_value_sigF1B2--) var_core_value_sig035C.push(var_core_value_sigC38F.moveOp([...var_core_value_sigA7F0, var_core_value_sig6AE2 + var_core_value_sigF1B2], [...var_core_value_sigA7F0, var_core_value_sigA5E0 + var_core_value_sigF1B2]));
}
function cn(var_core_value_sigFAFE, var_core_value_sig2B86) {
  return Math.min(Math.max(0, var_core_value_sigFAFE), Math.max(0, var_core_value_sig2B86));
}
function ln(var_core_value_sig8873, var_core_value_sigB9C5, var_core_value_sig511D, var_core_value_sig1610, var_core_value_sig23AB) {
  return !var_core_value_sig8873 || var_core_value_sig511D <= var_core_value_sigB9C5 || var_core_value_sig1610 >= var_core_value_sigB9C5 && var_core_value_sig1610 <= var_core_value_sig511D ? null : un(var_core_value_sigB9C5, var_core_value_sig511D, var_core_value_sig1610, dn(z((0, e.getBodySliceForTextXAction)(var_core_value_sig8873, var_core_value_sigB9C5, var_core_value_sig511D, false))), var_core_value_sig23AB);
}
function un(var_core_value_sigA15D, var_core_value_sig7E90, var_core_value_sig03F7, var_core_value_sig756F, var_core_value_sig0DB1) {
  let var_core_value_sig4950 = var_core_value_sig7E90 - var_core_value_sigA15D;
  if (var_core_value_sig4950 <= 0 || var_core_value_sig03F7 >= var_core_value_sigA15D && var_core_value_sig03F7 <= var_core_value_sig7E90) return null;
  let var_core_value_sig4424 = new e["TextX"]();
  return var_core_value_sig03F7 < var_core_value_sigA15D ? (var_core_value_sig4424.retain(var_core_value_sig03F7), var_core_value_sig4424.insert(var_core_value_sig4950, var_core_value_sig756F), var_core_value_sig4424.retain(var_core_value_sigA15D - var_core_value_sig03F7), var_core_value_sig4424.delete(var_core_value_sig4950)) : (var_core_value_sig4424.retain(var_core_value_sigA15D), var_core_value_sig4424.delete(var_core_value_sig4950), var_core_value_sig4424.retain(var_core_value_sig03F7 - var_core_value_sig7E90), var_core_value_sig4424.insert(var_core_value_sig4950, var_core_value_sig756F)), e.JSONX["getInstance"]().editOp(var_core_value_sig4424.serialize(), var_core_value_sig0DB1);
}
function dn(var_core_value_sig57E8) {
  let var_core_value_sig76B6 = var_core_value_sig57E8;
  return Object.keys(var_core_value_sig76B6).forEach(var_core_value_sigC2BB => {
    let var_core_value_sigD9DB = var_core_value_sig76B6[var_core_value_sigC2BB];
    Array.isArray(var_core_value_sigD9DB) && var_core_value_sigD9DB.length === 0 && delete var_core_value_sig76B6[var_core_value_sigC2BB];
  }), var_core_value_sig57E8;
}
function fn(var_core_value_sig89BC, var_core_value_sig2191, var_core_value_sig3B2E, var_core_value_sig5A9A, var_core_value_sigB524) {
  let var_core_value_sig8CFB = e.JSONX["getInstance"]();
  for (let var_core_value_sigA363 = var_core_value_sigB524; var_core_value_sigA363 >= var_core_value_sig5A9A; var_core_value_sigA363--) var_core_value_sig89BC.push(var_core_value_sig8CFB.removeOp(["tableSource", var_core_value_sig3B2E, "tableColumns", var_core_value_sigA363], z(var_core_value_sig2191.tableColumns[var_core_value_sigA363])));
  var_core_value_sig2191.tableRows["forEach"]((var_core_value_sigFBA5, var_core_value_sigAC47) => {
    for (let var_core_value_sig4805 = var_core_value_sigB524; var_core_value_sig4805 >= var_core_value_sig5A9A; var_core_value_sig4805--) var_core_value_sig89BC.push(var_core_value_sig8CFB.removeOp(["tableSource", var_core_value_sig3B2E, "tableRows", var_core_value_sigAC47, "tableCells", var_core_value_sig4805], z(var_core_value_sigFBA5.tableCells[var_core_value_sig4805])));
  });
}
function pn(var_core_value_sigB52C, var_core_value_sigA4B8, var_core_value_sigFF9C, var_core_value_sig278D, var_core_value_sigC0FE, var_core_value_sigDD22 = ["body"], var_core_value_sig2D35) {
  var var_core_value_sig7A4B;
  let var_core_value_sigE50A = (var_core_value_sig7A4B = var_core_value_sigB52C.tableSource) == null ? undefined : var_core_value_sig7A4B[var_core_value_sigA4B8],
    var_core_value_sigC8AC = i(var_core_value_sigB52C, var_core_value_sigA4B8);
  if (!var_core_value_sigE50A || !var_core_value_sigC8AC || var_core_value_sig278D <= 0 || var_core_value_sigFF9C < 0 || var_core_value_sigFF9C >= var_core_value_sigE50A.tableRows["length"]) return null;
  let var_core_value_sig8E63 = var_core_value_sigC0FE === "above" ? var_core_value_sigFF9C : var_core_value_sigFF9C + 1,
    var_core_value_sig300D = var_core_value_sigC0FE === "above" ? a(var_core_value_sigC8AC, var_core_value_sigFF9C).startOffset : a(var_core_value_sigC8AC, var_core_value_sigFF9C).endOffset + 1,
    var_core_value_sig520B = bn(w(var_core_value_sigE50A).map(var_core_value_sigA06F => var_core_value_sig8E63 <= var_core_value_sigA06F.startRow ? {
      ...var_core_value_sigA06F,
      startRow: var_core_value_sigA06F.startRow + var_core_value_sig278D,
      endRow: var_core_value_sigA06F.endRow + var_core_value_sig278D
    } : var_core_value_sig8E63 <= var_core_value_sigA06F.endRow ? {
      ...var_core_value_sigA06F,
      endRow: var_core_value_sigA06F.endRow + var_core_value_sig278D
    } : var_core_value_sigA06F)),
    var_core_value_sigFE26 = var_core_value_sigE50A.tableRows[var_core_value_sigFF9C],
    var_core_value_sig1019 = Array.from({
      length: var_core_value_sig278D
    }, (var_core_value_sig770E, var_core_value_sig4654) => {
      let var_core_value_sigB26B = z(var_core_value_sigFE26);
      return Cn(var_core_value_sigB26B, var_core_value_sig8E63 + var_core_value_sig4654, var_core_value_sig520B), var_core_value_sig2D35 == null || var_core_value_sig2D35(var_core_value_sigB26B, var_core_value_sig4654), var_core_value_sigB26B;
    }),
    var_core_value_sig32AB = xn(var_core_value_sigE50A, var_core_value_sig520B, var_core_value_sig019B => var_core_value_sig019B >= var_core_value_sig8E63 ? var_core_value_sig019B + var_core_value_sig278D : var_core_value_sig019B),
    var_core_value_sig72BE = e.JSONX["getInstance"]();
  var_core_value_sig1019.forEach((var_core_value_sigC6BC, var_core_value_sig8EC2) => {
    var_core_value_sig32AB.push(var_core_value_sig72BE.insertOp(["tableSource", var_core_value_sigA4B8, "tableRows", var_core_value_sig8E63 + var_core_value_sig8EC2], var_core_value_sigC6BC));
  });
  let var_core_value_sig3E4A = M(var_core_value_sigB52C, [{
    startOffset: var_core_value_sig300D,
    endOffset: var_core_value_sig300D,
    text: On(En(var_core_value_sigE50A.tableColumns["length"]), var_core_value_sig278D)
  }], var_core_value_sigDD22);
  return var_core_value_sig3E4A ? (var_core_value_sig32AB.push(var_core_value_sig3E4A), {
    actions: B(var_core_value_sig32AB),
    cursorRow: var_core_value_sig8E63
  }) : null;
}
function mn(var_core_value_sig3171, var_core_value_sigEBC4, var_core_value_sig788B = ["body"]) {
  var var_core_value_sig9A80;
  let var_core_value_sig7C69 = (var_core_value_sig9A80 = var_core_value_sig3171.tableSource) == null || (var_core_value_sig9A80 = var_core_value_sig9A80[var_core_value_sigEBC4]) == null ? undefined : var_core_value_sig9A80.tableColumns["length"];
  return var_core_value_sig7C69 ? pn(var_core_value_sig3171, var_core_value_sigEBC4, 0, 1, "above", var_core_value_sig788B, var_core_value_sigA8C3 => {
    var_core_value_sigA8C3.tableCells["forEach"]((var_core_value_sigE67E, var_core_value_sig2902) => {
      var_core_value_sig2902 === 0 ? (var_core_value_sigE67E.columnSpan = var_core_value_sig7C69, delete var_core_value_sigE67E.rowSpan) : (var_core_value_sigE67E.rowSpan = 0, var_core_value_sigE67E.columnSpan = 0);
    });
  }) : null;
}
function hn(var_core_value_sig01EF, var_core_value_sig3603, var_core_value_sigC163, var_core_value_sigF5F3, var_core_value_sig5E69 = ["body"]) {
  var var_core_value_sig7B39;
  let var_core_value_sigDCAB = (var_core_value_sig7B39 = var_core_value_sig01EF.tableSource) == null ? undefined : var_core_value_sig7B39[var_core_value_sig3603],
    var_core_value_sigF569 = i(var_core_value_sig01EF, var_core_value_sig3603);
  if (!var_core_value_sigDCAB || !var_core_value_sigF569) return null;
  let var_core_value_sig2A9F = Math.min(var_core_value_sigC163, var_core_value_sigF5F3),
    var_core_value_sigB14A = Math.max(var_core_value_sigC163, var_core_value_sigF5F3);
  if (var_core_value_sig2A9F < 0 || var_core_value_sig2A9F >= var_core_value_sigDCAB.tableRows["length"] || var_core_value_sigB14A < var_core_value_sig2A9F) return null;
  let var_core_value_sig4401 = Math.min(var_core_value_sigB14A, var_core_value_sigDCAB.tableRows["length"] - 1),
    var_core_value_sig4D6A = var_core_value_sig4401 - var_core_value_sig2A9F + 1;
  if (var_core_value_sig4D6A >= var_core_value_sigDCAB.tableRows["length"]) return gn(var_core_value_sig01EF, var_core_value_sig3603, var_core_value_sig5E69);
  let var_core_value_sigEF80 = xn(var_core_value_sigDCAB, bn(w(var_core_value_sigDCAB).map(var_core_value_sig5276 => vn(var_core_value_sig5276, var_core_value_sig2A9F, var_core_value_sig4401)).filter(var_core_value_sig031B => var_core_value_sig031B != null)), var_core_value_sig9DC0 => var_core_value_sig9DC0 < var_core_value_sig2A9F ? var_core_value_sig9DC0 : var_core_value_sig9DC0 > var_core_value_sig4401 ? var_core_value_sig9DC0 - var_core_value_sig4D6A : null),
    var_core_value_sig526D1 = e.JSONX["getInstance"]();
  for (let var_core_value_sig95F0 = var_core_value_sig4401; var_core_value_sig95F0 >= var_core_value_sig2A9F; var_core_value_sig95F0--) var_core_value_sigEF80.push(var_core_value_sig526D1.removeOp(["tableSource", var_core_value_sig3603, "tableRows", var_core_value_sig95F0], z(var_core_value_sigDCAB.tableRows[var_core_value_sig95F0])));
  let var_core_value_sigD78B = a(var_core_value_sigF569, var_core_value_sig2A9F).startOffset,
    var_core_value_sigCB8C = a(var_core_value_sigF569, var_core_value_sig4401).endOffset + 1,
    var_core_value_sigD217 = M(var_core_value_sig01EF, [{
      startOffset: var_core_value_sigD78B,
      endOffset: var_core_value_sigCB8C,
      text: ""
    }], var_core_value_sig5E69);
  return var_core_value_sigD217 ? (var_core_value_sigEF80.push(..._n(var_core_value_sig01EF, [{
    startOffset: var_core_value_sigD78B,
    endOffset: var_core_value_sigCB8C,
    collapsed: false
  }])), var_core_value_sigEF80.push(var_core_value_sigD217), {
    actions: B(var_core_value_sigEF80),
    cursorRow: Math.min(var_core_value_sig2A9F, var_core_value_sigDCAB.tableRows["length"] - var_core_value_sig4D6A - 1)
  }) : null;
}
function gn(var_core_value_sigEB0F, var_core_value_sigDC44, var_core_value_sigDEFC) {
  var var_core_value_sigE842;
  let var_core_value_sigA77A = (var_core_value_sigE842 = var_core_value_sigEB0F.tableSource) == null ? undefined : var_core_value_sigE842[var_core_value_sigDC44],
    var_core_value_sig0701 = i(var_core_value_sigEB0F, var_core_value_sigDC44);
  if (!var_core_value_sigA77A || !var_core_value_sig0701) return null;
  let var_core_value_sig5DCA = M(var_core_value_sigEB0F, [{
    startOffset: var_core_value_sig0701.startOffset,
    endOffset: var_core_value_sig0701.endOffset,
    text: ""
  }], var_core_value_sigDEFC);
  if (!var_core_value_sig5DCA) return null;
  let var_core_value_sigF1AB = _n(var_core_value_sigEB0F, [{
    startOffset: var_core_value_sig0701.startOffset,
    endOffset: var_core_value_sig0701.endOffset,
    collapsed: false
  }]);
  return {
    actions: B([e.JSONX["getInstance"]().removeOp(["tableSource", var_core_value_sigDC44], z(var_core_value_sigA77A)), ...var_core_value_sigF1AB, var_core_value_sig5DCA]),
    cursorRow: 0,
    deleteTable: true
  };
}
function _n(var_core_value_sig902F, var_core_value_sig6BD7) {
  let var_core_value_sig63E0 = var_core_value_sig902F.body;
  if (!var_core_value_sig63E0) return [];
  let var_core_value_sig1B87 = var_core_value_sig902F.drawings ?? {},
    var_core_value_sig580B = var_core_value_sig902F.drawingsOrder ?? [],
    var_core_value_sig4836 = [...new Set((0, e.getCustomBlockIdsInSelections)(var_core_value_sig63E0, var_core_value_sig6BD7))].sort((var_core_value_sig9CCB, var_core_value_sigE718) => var_core_value_sig580B.indexOf(var_core_value_sigE718) - var_core_value_sig580B.indexOf(var_core_value_sig9CCB)),
    var_core_value_sig4C06 = e.JSONX["getInstance"](),
    var_core_value_sig4D56 = [];
  for (let var_core_value_sigAEC8 of var_core_value_sig4836) {
    let var_core_value_sig9989 = var_core_value_sig1B87[var_core_value_sigAEC8];
    if (var_core_value_sig9989) {
      let var_core_value_sigE9ED = var_core_value_sig4C06.removeOp(["drawings", var_core_value_sigAEC8], var_core_value_sig9989);
      var_core_value_sigE9ED && var_core_value_sig4D56.push(var_core_value_sigE9ED);
    }
    let var_core_value_sig698E = var_core_value_sig580B.indexOf(var_core_value_sigAEC8);
    if (var_core_value_sig698E >= 0) {
      let var_core_value_sigB577 = var_core_value_sig4C06.removeOp(["drawingsOrder", var_core_value_sig698E], var_core_value_sigAEC8);
      var_core_value_sigB577 && var_core_value_sig4D56.push(var_core_value_sigB577);
    }
  }
  return var_core_value_sig4D56;
}
function vn(var_core_value_sig7C26, var_core_value_sigBC59, var_core_value_sig544E) {
  let var_core_value_sigCE8A = [],
    var_core_value_sig0718 = var_core_value_sig544E - var_core_value_sigBC59 + 1;
  for (let var_core_value_sigB977 = var_core_value_sig7C26.startRow; var_core_value_sigB977 <= var_core_value_sig7C26.endRow; var_core_value_sigB977++) var_core_value_sigB977 < var_core_value_sigBC59 ? var_core_value_sigCE8A.push(var_core_value_sigB977) : var_core_value_sigB977 > var_core_value_sig544E && var_core_value_sigCE8A.push(var_core_value_sigB977 - var_core_value_sig0718);
  return var_core_value_sigCE8A.length ? {
    ...var_core_value_sig7C26,
    startRow: Math.min(...var_core_value_sigCE8A),
    endRow: Math.max(...var_core_value_sigCE8A)
  } : null;
}
function yn(var_core_value_sig1B22, var_core_value_sig8854, var_core_value_sig5275) {
  let var_core_value_sig4F9D = [],
    var_core_value_sig278E = var_core_value_sig5275 - var_core_value_sig8854 + 1;
  for (let var_core_value_sig2949 = var_core_value_sig1B22.startColumn; var_core_value_sig2949 <= var_core_value_sig1B22.endColumn; var_core_value_sig2949++) var_core_value_sig2949 < var_core_value_sig8854 ? var_core_value_sig4F9D.push(var_core_value_sig2949) : var_core_value_sig2949 > var_core_value_sig5275 && var_core_value_sig4F9D.push(var_core_value_sig2949 - var_core_value_sig278E);
  return var_core_value_sig4F9D.length ? {
    ...var_core_value_sig1B22,
    startColumn: Math.min(...var_core_value_sig4F9D),
    endColumn: Math.max(...var_core_value_sig4F9D)
  } : null;
}
function bn(var_core_value_sig2921) {
  let var_core_value_sig3959 = new Map();
  for (let var_core_value_sig308A of var_core_value_sig2921) {
    let var_core_value_sig2809 = var_core_value_sig308A.endRow - var_core_value_sig308A.startRow + 1,
      var_core_value_sig2DAB = var_core_value_sig308A.endColumn - var_core_value_sig308A.startColumn + 1;
    for (let var_core_value_sig9572 = var_core_value_sig308A.startRow; var_core_value_sig9572 <= var_core_value_sig308A.endRow; var_core_value_sig9572++) for (let var_core_value_sig2BCF = var_core_value_sig308A.startColumn; var_core_value_sig2BCF <= var_core_value_sig308A.endColumn; var_core_value_sig2BCF++) var_core_value_sig3959.set(R(var_core_value_sig9572, var_core_value_sig2BCF), var_core_value_sig9572 === var_core_value_sig308A.startRow && var_core_value_sig2BCF === var_core_value_sig308A.startColumn ? {
      rowSpan: var_core_value_sig2809,
      columnSpan: var_core_value_sig2DAB
    } : {
      rowSpan: 0,
      columnSpan: 0
    });
  }
  return var_core_value_sig3959;
}
function xn(var_core_value_sig926F, var_core_value_sig9414, var_core_value_sig32E7) {
  let var_core_value_sigD8C3 = [],
    var_core_value_sig3A44 = e.JSONX["getInstance"]();
  return var_core_value_sig926F.tableRows["forEach"]((var_core_value_sig528D, var_core_value_sigA309) => {
    let var_core_value_sig9E20 = var_core_value_sig32E7(var_core_value_sigA309);
    var_core_value_sig9E20 != null && var_core_value_sig528D.tableCells["forEach"]((var_core_value_sig877E, var_core_value_sig20C8) => {
      let var_core_value_sigE9A7 = var_core_value_sig9414.get(R(var_core_value_sig9E20, var_core_value_sig20C8)),
        var_core_value_sigBECE = ["tableSource", var_core_value_sig926F.tableId, "tableRows", var_core_value_sigA309, "tableCells", var_core_value_sig20C8],
        var_core_value_sig1B221 = L(var_core_value_sig3A44, [...var_core_value_sigBECE, "rowSpan"], var_core_value_sig877E.rowSpan, var_core_value_sigE9A7 == null ? undefined : var_core_value_sigE9A7.rowSpan),
        var_core_value_sig7F72 = L(var_core_value_sig3A44, [...var_core_value_sigBECE, "columnSpan"], var_core_value_sig877E.columnSpan, var_core_value_sigE9A7 == null ? undefined : var_core_value_sigE9A7.columnSpan);
      var_core_value_sig1B221 && var_core_value_sigD8C3.push(var_core_value_sig1B221), var_core_value_sig7F72 && var_core_value_sigD8C3.push(var_core_value_sig7F72);
    });
  }), var_core_value_sigD8C3;
}
function Sn(var_core_value_sig0642, var_core_value_sig786E, var_core_value_sigFC47) {
  let var_core_value_sig48E2 = [],
    var_core_value_sig2FCA = e.JSONX["getInstance"]();
  return var_core_value_sig0642.tableRows["forEach"]((var_core_value_sig26BB, var_core_value_sig19B4) => {
    var_core_value_sig26BB.tableCells["forEach"]((var_core_value_sig7B2A, var_core_value_sig06CD) => {
      let var_core_value_sigA5F1 = var_core_value_sigFC47(var_core_value_sig06CD);
      if (var_core_value_sigA5F1 == null) return;
      let var_core_value_sig97A2 = var_core_value_sig786E.get(R(var_core_value_sig19B4, var_core_value_sigA5F1)),
        var_core_value_sig07E9 = ["tableSource", var_core_value_sig0642.tableId, "tableRows", var_core_value_sig19B4, "tableCells", var_core_value_sig06CD],
        var_core_value_sig4F59 = L(var_core_value_sig2FCA, [...var_core_value_sig07E9, "rowSpan"], var_core_value_sig7B2A.rowSpan, var_core_value_sig97A2 == null ? undefined : var_core_value_sig97A2.rowSpan),
        var_core_value_sigF564 = L(var_core_value_sig2FCA, [...var_core_value_sig07E9, "columnSpan"], var_core_value_sig7B2A.columnSpan, var_core_value_sig97A2 == null ? undefined : var_core_value_sig97A2.columnSpan);
      var_core_value_sig4F59 && var_core_value_sig48E2.push(var_core_value_sig4F59), var_core_value_sigF564 && var_core_value_sig48E2.push(var_core_value_sigF564);
    });
  }), var_core_value_sig48E2;
}
function Cn(var_core_value_sig04F2, var_core_value_sig2CFC, var_core_value_sig5CEB) {
  var_core_value_sig04F2.tableCells["forEach"]((var_core_value_sig218A, var_core_value_sig14CB) => {
    let var_core_value_sigFDEE = var_core_value_sig5CEB.get(R(var_core_value_sig2CFC, var_core_value_sig14CB));
    Tn(var_core_value_sig218A, "rowSpan", var_core_value_sigFDEE == null ? undefined : var_core_value_sigFDEE.rowSpan), Tn(var_core_value_sig218A, "columnSpan", var_core_value_sigFDEE == null ? undefined : var_core_value_sigFDEE.columnSpan);
  });
}
function wn(var_core_value_sig4935, var_core_value_sig1832, var_core_value_sig79D7, var_core_value_sig5E01) {
  let var_core_value_sigBBE4 = var_core_value_sig5E01.get(R(var_core_value_sig1832, var_core_value_sig79D7));
  Tn(var_core_value_sig4935, "rowSpan", var_core_value_sigBBE4 == null ? undefined : var_core_value_sigBBE4.rowSpan), Tn(var_core_value_sig4935, "columnSpan", var_core_value_sigBBE4 == null ? undefined : var_core_value_sigBBE4.columnSpan);
}
function Tn(var_core_value_sig96B3, var_core_value_sig9CF2, var_core_value_sig666D) {
  var_core_value_sig666D === undefined ? delete var_core_value_sig96B3[var_core_value_sig9CF2] : var_core_value_sig96B3[var_core_value_sig9CF2] = var_core_value_sig666D;
}
function R(var_core_value_sigBD53, var_core_value_sigD11F) {
  return [var_core_value_sigBD53, var_core_value_sigD11F].join(":");
}
function En(var_core_value_sig62231) {
  return [e.DataStreamTreeTokenType["TABLE_ROW_START"], On(Dn(), var_core_value_sig62231), e.DataStreamTreeTokenType["TABLE_ROW_END"]].join("");
}
function Dn() {
  return [e.DataStreamTreeTokenType["TABLE_CELL_START"], "\x0d\x0a", e.DataStreamTreeTokenType["TABLE_CELL_END"]].join("");
}
function On(var_core_value_sig7653, var_core_value_sigF65B) {
  return Array.from({
    length: var_core_value_sigF65B
  }, () => var_core_value_sig7653).join("");
}
function z(var_core_value_sig4A94) {
  return Array.isArray(var_core_value_sig4A94) ? var_core_value_sig4A94.map(var_core_value_sigA676 => z(var_core_value_sigA676)) : !var_core_value_sig4A94 || typeof var_core_value_sig4A94 != "object" ? var_core_value_sig4A94 : Object.fromEntries(Object.entries(var_core_value_sig4A94).map(([var_core_value_sigC27E, var_core_value_sigA70D]) => [var_core_value_sigC27E, z(var_core_value_sigA70D)]));
}
function B(var_core_value_sigEB59) {
  return var_core_value_sigEB59.reduce((var_core_value_sigCE10, var_core_value_sigA3861) => e.JSONX["compose"](var_core_value_sigCE10, var_core_value_sigA3861), null);
}
function V(var_core_value_sigD9B0, var_core_value_sigB7D6, var_core_value_sigCF1F, var_core_value_sig4DD1, var_core_value_sig1293, var_core_value_sigC999, var_core_value_sig9D8F, var_core_value_sig8270) {
  if (!var_core_value_sig4DD1) return true;
  let var_core_value_sig95D9 = [];
  return var_core_value_sig1293 ? var_core_value_sig95D9 = An(var_core_value_sigCF1F, var_core_value_sig1293) : var_core_value_sigC999 != null && (var_core_value_sig95D9 = [{
    startOffset: var_core_value_sigC999,
    endOffset: var_core_value_sigC999,
    collapsed: true
  }]), !!var_core_value_sigD9B0.syncExecuteCommand(t.RichTextEditingMutation["id"], {
    unitId: var_core_value_sigB7D6,
    historyAction: var_core_value_sig8270,
    actions: var_core_value_sig4DD1,
    textRanges: var_core_value_sig95D9,
    trigger: var_core_value_sig9D8F
  });
}
function H(var_core_value_sig0E92, var_core_value_sig45CD = "") {
  var var_core_value_sigAD84, var_core_value_sigD513;
  return var_core_value_sig45CD ? (var_core_value_sigAD84 = var_core_value_sig0E92.headers) != null && var_core_value_sigAD84[var_core_value_sig45CD] ? ["headers", var_core_value_sig45CD, "body"] : (var_core_value_sigD513 = var_core_value_sig0E92.footers) != null && var_core_value_sigD513[var_core_value_sig45CD] ? ["footers", var_core_value_sig45CD, "body"] : ["body"] : ["body"];
}
function kn(var_core_value_sig36BD, var_core_value_sig0413) {
  return JSON.stringify(var_core_value_sig36BD) === JSON.stringify(var_core_value_sig0413);
}
function An(var_core_value_sig15B6, var_core_value_sigFEBF) {
  var var_core_value_sigBBA2, var_core_value_sigC9A1, var_core_value_sigE469;
  let var_core_value_sigA499 = i(var_core_value_sig15B6, var_core_value_sigFEBF.tableId);
  if (!var_core_value_sigA499) return [];
  let var_core_value_sig4CC3 = Math.min(var_core_value_sigFEBF.startRow, var_core_value_sigFEBF.endRow),
    var_core_value_sig70B3 = Math.max(var_core_value_sigFEBF.startRow, var_core_value_sigFEBF.endRow),
    var_core_value_sig422B = Math.min(var_core_value_sigFEBF.startColumn, var_core_value_sigFEBF.endColumn),
    var_core_value_sig1038 = Math.max(var_core_value_sigFEBF.startColumn, var_core_value_sigFEBF.endColumn),
    var_core_value_sigC3E6 = (var_core_value_sigBBA2 = var_core_value_sigA499.rows[var_core_value_sig4CC3]) == null ? undefined : var_core_value_sigBBA2.cells[var_core_value_sig422B],
    var_core_value_sig3710 = (var_core_value_sigC9A1 = var_core_value_sigA499.rows[var_core_value_sig70B3]) == null ? undefined : var_core_value_sigC9A1.cells[var_core_value_sig1038];
  if (!var_core_value_sigC3E6 || !var_core_value_sig3710) return [];
  let var_core_value_sig9726 = (var_core_value_sigE469 = var_core_value_sigA499.tableSource["tableRows"][var_core_value_sig4CC3]) == null ? undefined : var_core_value_sigE469.tableCells[var_core_value_sig422B],
    var_core_value_sigFC9B = (var_core_value_sig9726 == null ? undefined : var_core_value_sig9726.rowSpan) ?? 1,
    var_core_value_sig943E = (var_core_value_sig9726 == null ? undefined : var_core_value_sig9726.columnSpan) ?? 1,
    var_core_value_sigEF36 = (var_core_value_sigFC9B > 1 || var_core_value_sig943E > 1) && var_core_value_sig4CC3 + var_core_value_sigFC9B - 1 >= var_core_value_sig70B3 && var_core_value_sig422B + var_core_value_sig943E - 1 >= var_core_value_sig1038 ? var_core_value_sigC3E6 : var_core_value_sig3710,
    var_core_value_sigD4B1 = var_core_value_sig422B === 0 && var_core_value_sig1038 === var_core_value_sigA499.columnCount - 1,
    var_core_value_sigE5D8 = var_core_value_sig4CC3 === 0 && var_core_value_sig70B3 === var_core_value_sigA499.rowCount - 1,
    var_core_value_sig74AF = var_core_value_sigC3E6.startOffset + 1;
  return [{
    startOffset: var_core_value_sig74AF,
    endOffset: Math.max(var_core_value_sig74AF, var_core_value_sigEF36.endOffset - 1),
    collapsed: false,
    rangeType: e.DOC_RANGE_TYPE["RECT"],
    segmentId: var_core_value_sigFEBF.segmentId ?? "",
    tableId: var_core_value_sigFEBF.tableId,
    startRow: var_core_value_sig4CC3,
    endRow: var_core_value_sig70B3,
    startColumn: var_core_value_sig422B,
    endColumn: var_core_value_sig1038,
    spanEntireRow: var_core_value_sigD4B1,
    spanEntireColumn: var_core_value_sigE5D8,
    spanEntireTable: var_core_value_sigD4B1 && var_core_value_sigE5D8,
    isActive: true
  }];
}
function U(var_core_value_sigBABA) {
  "@babel/helpers - typeof";

  return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sigCD82) {
    return typeof var_core_value_sigCD82;
  } : function (var_core_value_sig44DD) {
    return var_core_value_sig44DD && typeof Symbol == "function" && var_core_value_sig44DD.constructor === Symbol && var_core_value_sig44DD !== Symbol.prototype ? "symbol" : typeof var_core_value_sig44DD;
  }, U(var_core_value_sigBABA);
}
function jn(var_core_value_sigA723, var_core_value_sig991C) {
  if (U(var_core_value_sigA723) != "object" || !var_core_value_sigA723) return var_core_value_sigA723;
  var var_core_value_sigF909 = var_core_value_sigA723[Symbol.toPrimitive];
  if (var_core_value_sigF909 !== undefined) {
    var var_core_value_sigDD0E = var_core_value_sigF909.call(var_core_value_sigA723, var_core_value_sig991C || "default");
    if (U(var_core_value_sigDD0E) != "object") return var_core_value_sigDD0E;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig991C === "string" ? String : Number)(var_core_value_sigA723);
}
function Mn(var_core_value_sigF2A0) {
  var var_core_value_sig116F = jn(var_core_value_sigF2A0, "string");
  return U(var_core_value_sig116F) == "symbol" ? var_core_value_sig116F : var_core_value_sig116F + "";
}
function W(var_core_value_sigA64C, var_core_value_sigAF94, var_core_value_sig1E9F) {
  return (var_core_value_sigAF94 = Mn(var_core_value_sigAF94)) in var_core_value_sigA64C ? Object.defineProperty(var_core_value_sigA64C, var_core_value_sigAF94, {
    value: var_core_value_sig1E9F,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sigA64C[var_core_value_sigAF94] = var_core_value_sig1E9F, var_core_value_sigA64C;
}
function G(var_core_value_sig3CC6, var_core_value_sig041B) {
  return function (var_core_value_sig96FA, var_core_value_sigAB68) {
    var_core_value_sig041B(var_core_value_sig96FA, var_core_value_sigAB68, var_core_value_sig3CC6);
  };
}
function Nn(var_core_value_sig3610, var_core_value_sig62F3, var_core_value_sig8063, var_core_value_sig555A) {
  var var_core_value_sigF562 = arguments.length,
    var_core_value_sig5913 = var_core_value_sigF562 < 3 ? var_core_value_sig62F3 : var_core_value_sig555A === null ? var_core_value_sig555A = Object.getOwnPropertyDescriptor(var_core_value_sig62F3, var_core_value_sig8063) : var_core_value_sig555A,
    var_core_value_sigA1AF;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sig5913 = Reflect.decorate(var_core_value_sig3610, var_core_value_sig62F3, var_core_value_sig8063, var_core_value_sig555A);else {
    for (var var_core_value_sig6324 = var_core_value_sig3610.length - 1; var_core_value_sig6324 >= 0; var_core_value_sig6324--) (var_core_value_sigA1AF = var_core_value_sig3610[var_core_value_sig6324]) && (var_core_value_sig5913 = (var_core_value_sigF562 < 3 ? var_core_value_sigA1AF(var_core_value_sig5913) : var_core_value_sigF562 > 3 ? var_core_value_sigA1AF(var_core_value_sig62F3, var_core_value_sig8063, var_core_value_sig5913) : var_core_value_sigA1AF(var_core_value_sig62F3, var_core_value_sig8063)) || var_core_value_sig5913);
  }
  return var_core_value_sigF562 > 3 && var_core_value_sig5913 && Object.defineProperty(var_core_value_sig62F3, var_core_value_sig8063, var_core_value_sig5913), var_core_value_sig5913;
}
let K = class extends e.Disposable {
  constructor(var_core_value_sig040A, var_core_value_sig2AE0) {
    var var_core_value_sigC349;
    super(), this._univerInstanceService = var_core_value_sig040A, this._docSelectionManagerService = var_core_value_sig2AE0, W(this, "_selectionChange$", new n["Subject"]()), W(this, "_structuralSelection", null), W(this, "_structuralSelectionTableShape", null), W(this, "_nativeSelectionSuppressed", false), W(this, "_preserveStructuralSelectionOnNextTextSelection", false), W(this, "selectionChange$", this._selectionChange$["asObservable"]()), this.disposeWithMe(((var_core_value_sigC349 = this._docSelectionManagerService["textSelection$"]) == null ? undefined : var_core_value_sigC349.subscribe(() => {
      this._restoreNativeSelectionForTextFocus(), this.emitCurrentSelection();
    })) ?? (() => undefined));
  }
  getCurrentSelection() {
    let var_core_value_sig9D96 = this._getCurrentDoc();
    if (!var_core_value_sig9D96) return null;
    if (!this._nativeSelectionSuppressed) {
      var var_core_value_sig2776, var_core_value_sig6FB2, var_core_value_sigEB43, var_core_value_sig4186;
      let var_core_value_sig8CFA = (var_core_value_sig2776 = (var_core_value_sig6FB2 = this._docSelectionManagerService).getRectRanges) == null ? undefined : var_core_value_sig2776.call(var_core_value_sig6FB2);
      if (var_core_value_sig8CFA && var_core_value_sig8CFA.length > 0) return this._getSelectionFromRectRanges(var_core_value_sig9D96, var_core_value_sig8CFA);
      let var_core_value_sig2E11 = (var_core_value_sigEB43 = (var_core_value_sig4186 = this._docSelectionManagerService).getActiveTextRange) == null ? undefined : var_core_value_sigEB43.call(var_core_value_sig4186);
      if (var_core_value_sig2E11) return this._getSelectionFromActiveTextRange(var_core_value_sig9D96, var_core_value_sig2E11) || {
        kind: "text",
        unitId: var_core_value_sig9D96.getUnitId(),
        segmentId: var_core_value_sig2E11.segmentId ?? "",
        tableId: "",
        startRow: -1,
        endRow: -1,
        startColumn: -1,
        endColumn: -1,
        startOffset: var_core_value_sig2E11.startOffset ?? 0,
        endOffset: var_core_value_sig2E11.endOffset ?? var_core_value_sig2E11.startOffset ?? 0,
        source: "text"
      };
    }
    let var_core_value_sigF963 = this._getValidStructuralSelection(var_core_value_sig9D96);
    return var_core_value_sigF963 ? {
      ...var_core_value_sigF963,
      unitId: var_core_value_sig9D96.getUnitId()
    } : null;
  }
  getStructuralSelection() {
    let var_core_value_sigB608 = this._getCurrentDoc();
    if (!var_core_value_sigB608) return null;
    let var_core_value_sigF866 = this._getValidStructuralSelection(var_core_value_sigB608);
    return var_core_value_sigF866 ? {
      ...var_core_value_sigF866,
      unitId: var_core_value_sigB608.getUnitId()
    } : null;
  }
  getStableTableSelection() {
    let var_core_value_sig5EFB = this.getCurrentSelection();
    return Pn(var_core_value_sig5EFB) ? var_core_value_sig5EFB : null;
  }
  emitCurrentSelection() {
    let var_core_value_sig3A85 = this._getCurrentDoc();
    var_core_value_sig3A85 && this._getValidStructuralSelection(var_core_value_sig3A85), this._selectionChange$["next"](this.getCurrentSelection());
  }
  setStructuralSelection(var_core_value_sig2682, var_core_value_sig4BB5 = {}) {
    var var_core_value_sig6709;
    let var_core_value_sig52CA = this._getCurrentDoc(),
      var_core_value_sigC030 = var_core_value_sig52CA == null || (var_core_value_sig6709 = var_core_value_sig52CA.getSnapshot().tableSource) == null ? undefined : var_core_value_sig6709[var_core_value_sig2682.tableId],
      var_core_value_sig88F6 = var_core_value_sigC030 ? Ln(var_core_value_sigC030, var_core_value_sig2682) : null;
    if (!var_core_value_sigC030 || !var_core_value_sig88F6) {
      this._clearStructuralSelectionState(true), this.emitCurrentSelection();
      return;
    }
    if (this._structuralSelection = {
      kind: Bn(var_core_value_sig2682.kind, var_core_value_sig88F6, var_core_value_sigC030),
      unitId: (var_core_value_sig52CA == null ? undefined : var_core_value_sig52CA.getUnitId()) ?? "",
      segmentId: var_core_value_sig2682.segmentId ?? "",
      tableId: var_core_value_sig2682.tableId,
      startRow: var_core_value_sig88F6.startRow,
      endRow: var_core_value_sig88F6.endRow,
      startColumn: var_core_value_sig88F6.startColumn,
      endColumn: var_core_value_sig88F6.endColumn,
      startOffset: var_core_value_sig2682.startOffset ?? 0,
      endOffset: var_core_value_sig2682.endOffset ?? var_core_value_sig2682.startOffset ?? 0,
      source: "structural"
    }, this._structuralSelectionTableShape = zn(var_core_value_sigC030), this._preserveStructuralSelectionOnNextTextSelection = !!var_core_value_sig4BB5.preserveOnTextSelection, var_core_value_sig4BB5.clearNativeSelection !== false) {
      var var_core_value_sig37DB, var_core_value_sig5542;
      (var_core_value_sig37DB = (var_core_value_sig5542 = this._docSelectionManagerService).replaceDocRanges) == null || var_core_value_sig37DB.call(var_core_value_sig5542, [], undefined, false);
    }
    this.emitCurrentSelection();
  }
  setStructuralHeaderSelection(var_core_value_sigE0A9, var_core_value_sigA73E, var_core_value_sig7620, var_core_value_sigB9FC, var_core_value_sig5055 = {}) {
    var var_core_value_sig3801, var_core_value_sig45F0;
    let var_core_value_sigBC91 = this._getCurrentDoc(),
      var_core_value_sigCB88 = var_core_value_sigBC91 == null || (var_core_value_sig3801 = var_core_value_sigBC91.getSnapshot().tableSource) == null ? undefined : var_core_value_sig3801[var_core_value_sigE0A9];
    if (!var_core_value_sigCB88) return;
    let var_core_value_sig8D65 = var_core_value_sigCB88.tableRows["length"],
      var_core_value_sig8122 = ((var_core_value_sig45F0 = var_core_value_sigCB88.tableRows[0]) == null ? undefined : var_core_value_sig45F0.tableCells["length"]) ?? 0,
      var_core_value_sigEDC6 = Math.min(var_core_value_sig7620, var_core_value_sigB9FC),
      var_core_value_sig611A = Math.max(var_core_value_sig7620, var_core_value_sigB9FC);
    if (var_core_value_sigA73E === "row") {
      this._setDirectStructuralSelection({
        kind: "row",
        segmentId: var_core_value_sig5055.segmentId,
        tableId: var_core_value_sigE0A9,
        startRow: var_core_value_sigEDC6,
        endRow: var_core_value_sig611A,
        startColumn: 0,
        endColumn: Math.max(var_core_value_sig8122 - 1, 0)
      }, var_core_value_sig5055);
      return;
    }
    this._setDirectStructuralSelection({
      kind: "column",
      segmentId: var_core_value_sig5055.segmentId,
      tableId: var_core_value_sigE0A9,
      startRow: 0,
      endRow: Math.max(var_core_value_sig8D65 - 1, 0),
      startColumn: var_core_value_sigEDC6,
      endColumn: var_core_value_sig611A
    }, var_core_value_sig5055);
  }
  clearStructuralSelection(var_core_value_sig6BD9 = {}) {
    if (this._clearStructuralSelectionState(), var_core_value_sig6BD9.clearNativeSelection !== false) {
      var var_core_value_sig7E56, var_core_value_sig4161;
      (var_core_value_sig7E56 = (var_core_value_sig4161 = this._docSelectionManagerService).replaceDocRanges) == null || var_core_value_sig7E56.call(var_core_value_sig4161, [], undefined, false);
    }
    this.emitCurrentSelection();
  }
  setNativeSelectionSuppressed(var_core_value_sig7580) {
    if (this._nativeSelectionSuppressed !== var_core_value_sig7580) {
      if (this._nativeSelectionSuppressed = var_core_value_sig7580, var_core_value_sig7580 || (this._preserveStructuralSelectionOnNextTextSelection = false), var_core_value_sig7580) {
        var var_core_value_sig1F18, var_core_value_sigD5A0;
        (var_core_value_sig1F18 = (var_core_value_sigD5A0 = this._docSelectionManagerService).replaceDocRanges) == null || var_core_value_sig1F18.call(var_core_value_sigD5A0, [], undefined, false);
      }
      this.emitCurrentSelection();
    }
  }
  dispose() {
    super.dispose(), this._selectionChange$["complete"]();
  }
  _getCurrentDoc() {
    var var_core_value_sig81B2, var_core_value_sigA0A5;
    return ((var_core_value_sig81B2 = (var_core_value_sigA0A5 = this._univerInstanceService).getCurrentUnitOfType) == null ? undefined : var_core_value_sig81B2.call(var_core_value_sigA0A5, e.UniverInstanceType["UNIVER_DOC"])) ?? null;
  }
  _restoreNativeSelectionForTextFocus() {
    var var_core_value_sig10AA, var_core_value_sigE6D0;
    let var_core_value_sig8E91 = (var_core_value_sig10AA = (var_core_value_sigE6D0 = this._docSelectionManagerService).getActiveTextRange) == null ? undefined : var_core_value_sig10AA.call(var_core_value_sigE6D0);
    if ((var_core_value_sig8E91 == null ? undefined : var_core_value_sig8E91.startOffset) != null) {
      if (this._preserveStructuralSelectionOnNextTextSelection) {
        this._preserveStructuralSelectionOnNextTextSelection = false;
        return;
      }
      this._nativeSelectionSuppressed = false, this._clearStructuralSelectionState();
    }
  }
  _setDirectStructuralSelection(var_core_value_sig00BE, var_core_value_sig7BB5 = {}) {
    var var_core_value_sig6AAD;
    let var_core_value_sig1157 = this._getCurrentDoc(),
      var_core_value_sigA694 = var_core_value_sig1157 == null || (var_core_value_sig6AAD = var_core_value_sig1157.getSnapshot().tableSource) == null ? undefined : var_core_value_sig6AAD[var_core_value_sig00BE.tableId],
      var_core_value_sig18E01 = var_core_value_sigA694 ? Ln(var_core_value_sigA694, var_core_value_sig00BE) : null;
    if (!var_core_value_sigA694 || !var_core_value_sig18E01) {
      this._clearStructuralSelectionState(true), this.emitCurrentSelection();
      return;
    }
    if (this._structuralSelection = {
      kind: var_core_value_sig00BE.kind,
      unitId: (var_core_value_sig1157 == null ? undefined : var_core_value_sig1157.getUnitId()) ?? "",
      segmentId: var_core_value_sig00BE.segmentId ?? "",
      tableId: var_core_value_sig00BE.tableId,
      startRow: var_core_value_sig18E01.startRow,
      endRow: var_core_value_sig18E01.endRow,
      startColumn: var_core_value_sig18E01.startColumn,
      endColumn: var_core_value_sig18E01.endColumn,
      startOffset: var_core_value_sig00BE.startOffset ?? 0,
      endOffset: var_core_value_sig00BE.endOffset ?? var_core_value_sig00BE.startOffset ?? 0,
      source: "structural"
    }, this._structuralSelectionTableShape = zn(var_core_value_sigA694), this._preserveStructuralSelectionOnNextTextSelection = !!var_core_value_sig7BB5.preserveOnTextSelection, var_core_value_sig7BB5.clearNativeSelection !== false) {
      var var_core_value_sig0428, var_core_value_sigBE07;
      (var_core_value_sig0428 = (var_core_value_sigBE07 = this._docSelectionManagerService).replaceDocRanges) == null || var_core_value_sig0428.call(var_core_value_sigBE07, [], undefined, false);
    }
    this.emitCurrentSelection();
  }
  _getSelectionFromActiveTextRange(var_core_value_sig555F, var_core_value_sig3D6F) {
    var var_core_value_sig336C;
    let var_core_value_sig6E68 = var_core_value_sig3D6F.startOffset;
    if (var_core_value_sig6E68 == null) return null;
    let var_core_value_sig8DFE = I(var_core_value_sig555F, var_core_value_sig3D6F.segmentId) ?? var_core_value_sig555F.getSnapshot(),
      var_core_value_sig48EA = (var_core_value_sig336C = var_core_value_sig8DFE.body) == null || (var_core_value_sig336C = var_core_value_sig336C.tables) == null ? undefined : var_core_value_sig336C.find(var_core_value_sig5B69 => var_core_value_sig6E68 > var_core_value_sig5B69.startIndex && var_core_value_sig6E68 < var_core_value_sig5B69.endIndex);
    if (!(var_core_value_sig48EA != null && var_core_value_sig48EA.tableId)) return null;
    let var_core_value_sig5E16 = i(var_core_value_sig8DFE, var_core_value_sig48EA.tableId),
      var_core_value_sig09F3 = var_core_value_sig5E16 == null ? undefined : var_core_value_sig5E16.rows["flatMap"](var_core_value_sigB098 => var_core_value_sigB098.cells).find(var_core_value_sigCE71 => var_core_value_sig6E68 >= var_core_value_sigCE71.startOffset && var_core_value_sig6E68 <= var_core_value_sigCE71.endOffset);
    if (!var_core_value_sig5E16 || !var_core_value_sig09F3) return null;
    let var_core_value_sig4592 = ae(var_core_value_sig5E16.tableSource, {
      startRow: var_core_value_sig09F3.row,
      endRow: var_core_value_sig09F3.row,
      startColumn: var_core_value_sig09F3.column,
      endColumn: var_core_value_sig09F3.column
    });
    return {
      kind: Bn("cell", var_core_value_sig4592, var_core_value_sig5E16.tableSource),
      unitId: var_core_value_sig555F.getUnitId(),
      segmentId: var_core_value_sig3D6F.segmentId ?? "",
      tableId: var_core_value_sig48EA.tableId,
      startRow: var_core_value_sig4592.startRow,
      endRow: var_core_value_sig4592.endRow,
      startColumn: var_core_value_sig4592.startColumn,
      endColumn: var_core_value_sig4592.endColumn,
      startOffset: var_core_value_sig09F3.startOffset,
      endOffset: var_core_value_sig09F3.endOffset,
      source: "text"
    };
  }
  _getSelectionFromRectRanges(var_core_value_sigC5C4, var_core_value_sig1617) {
    var var_core_value_sig4169;
    let var_core_value_sig6D19 = var_core_value_sig1617.find(var_core_value_sig21D8 => !!var_core_value_sig21D8.tableId);
    if (!(var_core_value_sig6D19 != null && var_core_value_sig6D19.tableId)) return null;
    let var_core_value_sig279C = var_core_value_sig6D19.tableId,
      var_core_value_sigAC51 = (var_core_value_sig4169 = var_core_value_sigC5C4.getSnapshot().tableSource) == null ? undefined : var_core_value_sig4169[var_core_value_sig279C];
    if (!var_core_value_sigAC51) return null;
    let var_core_value_sig8986 = var_core_value_sig1617.filter(var_core_value_sig2B65 => var_core_value_sig2B65.tableId === var_core_value_sig279C).map(var_core_value_sigD7EA => {
      let var_core_value_sigB33B = In(var_core_value_sigAC51, var_core_value_sigD7EA);
      return var_core_value_sigB33B ? {
        ...var_core_value_sigD7EA,
        ...var_core_value_sigB33B
      } : null;
    });
    if (var_core_value_sig8986.some(var_core_value_sig24B9 => var_core_value_sig24B9 == null)) return null;
    let var_core_value_sigCAF7 = var_core_value_sig8986.filter(var_core_value_sigE627 => var_core_value_sigE627 != null),
      var_core_value_sigED1C = this._canCombineRectRanges(var_core_value_sigCAF7) ? var_core_value_sigCAF7 : [var_core_value_sigCAF7[0] ?? var_core_value_sig6D19],
      var_core_value_sig726E = ae(var_core_value_sigAC51, {
        startRow: Math.min(...var_core_value_sigED1C.map(var_core_value_sigEF3E => Math.min(var_core_value_sigEF3E.startRow, var_core_value_sigEF3E.endRow))),
        endRow: Math.max(...var_core_value_sigED1C.map(var_core_value_sig273D => Math.max(var_core_value_sig273D.startRow, var_core_value_sig273D.endRow))),
        startColumn: Math.min(...var_core_value_sigED1C.map(var_core_value_sig9A0D => Math.min(var_core_value_sig9A0D.startColumn, var_core_value_sig9A0D.endColumn))),
        endColumn: Math.max(...var_core_value_sigED1C.map(var_core_value_sigA319 => Math.max(var_core_value_sigA319.startColumn, var_core_value_sigA319.endColumn)))
      }),
      var_core_value_sig2CD3 = Bn("range", var_core_value_sig726E, var_core_value_sigAC51),
      var_core_value_sig038E = var_core_value_sigED1C.map(var_core_value_sig2D58 => var_core_value_sig2D58.startOffset).filter(var_core_value_sig223F => typeof var_core_value_sig223F == "number"),
      var_core_value_sigAA1E = var_core_value_sigED1C.map(var_core_value_sigD749 => var_core_value_sigD749.endOffset).filter(var_core_value_sigCFFA => typeof var_core_value_sigCFFA == "number");
    return {
      kind: var_core_value_sig2CD3,
      unitId: var_core_value_sigC5C4.getUnitId(),
      segmentId: var_core_value_sig6D19.segmentId ?? "",
      tableId: var_core_value_sig279C,
      startRow: var_core_value_sig726E.startRow,
      endRow: var_core_value_sig726E.endRow,
      startColumn: var_core_value_sig726E.startColumn,
      endColumn: var_core_value_sig726E.endColumn,
      startOffset: var_core_value_sig038E.length ? Math.min(...var_core_value_sig038E) : 0,
      endOffset: var_core_value_sigAA1E.length ? Math.max(...var_core_value_sigAA1E) : var_core_value_sig038E[0] ?? 0,
      source: "rect"
    };
  }
  _canCombineRectRanges(var_core_value_sigC9F5) {
    if (var_core_value_sigC9F5.length <= 1) return true;
    let var_core_value_sig7EEA = Math.min(...var_core_value_sigC9F5.map(var_core_value_sig58C1 => Math.min(var_core_value_sig58C1.startRow, var_core_value_sig58C1.endRow))),
      var_core_value_sig59CE1 = Math.max(...var_core_value_sigC9F5.map(var_core_value_sig5090 => Math.max(var_core_value_sig5090.startRow, var_core_value_sig5090.endRow))),
      var_core_value_sig33C8 = Math.min(...var_core_value_sigC9F5.map(var_core_value_sigC368 => Math.min(var_core_value_sigC368.startColumn, var_core_value_sigC368.endColumn))),
      var_core_value_sig957F = Math.max(...var_core_value_sigC9F5.map(var_core_value_sigAD561 => Math.max(var_core_value_sigAD561.startColumn, var_core_value_sigAD561.endColumn))),
      var_core_value_sig803B = new Set();
    return var_core_value_sigC9F5.forEach(var_core_value_sigDB4A => {
      let var_core_value_sig6418 = Math.min(var_core_value_sigDB4A.startRow, var_core_value_sigDB4A.endRow),
        var_core_value_sig1896 = Math.max(var_core_value_sigDB4A.startRow, var_core_value_sigDB4A.endRow),
        var_core_value_sig0285 = Math.min(var_core_value_sigDB4A.startColumn, var_core_value_sigDB4A.endColumn),
        var_core_value_sig777D = Math.max(var_core_value_sigDB4A.startColumn, var_core_value_sigDB4A.endColumn);
      for (let var_core_value_sigD873 = var_core_value_sig6418; var_core_value_sigD873 <= var_core_value_sig1896; var_core_value_sigD873++) for (let var_core_value_sig0D69 = var_core_value_sig0285; var_core_value_sig0D69 <= var_core_value_sig777D; var_core_value_sig0D69++) var_core_value_sig803B.add(var_core_value_sigD873 + ":" + var_core_value_sig0D69);
    }), var_core_value_sig803B.size === (var_core_value_sig59CE1 - var_core_value_sig7EEA + 1) * (var_core_value_sig957F - var_core_value_sig33C8 + 1);
  }
  _getValidStructuralSelection(var_core_value_sig5830) {
    var var_core_value_sig4A7C;
    let var_core_value_sigF975 = this._structuralSelection;
    if (!var_core_value_sigF975) return null;
    let var_core_value_sigCDAF = (var_core_value_sig4A7C = var_core_value_sig5830.getSnapshot().tableSource) == null ? undefined : var_core_value_sig4A7C[var_core_value_sigF975.tableId],
      var_core_value_sigA298 = var_core_value_sigCDAF ? Ln(var_core_value_sigCDAF, var_core_value_sigF975) : null;
    return !var_core_value_sigCDAF || !var_core_value_sigA298 || this._structuralSelectionTableShape !== zn(var_core_value_sigCDAF) ? (this._clearStructuralSelectionState(true), null) : (this._structuralSelection = {
      ...var_core_value_sigF975,
      kind: Bn(var_core_value_sigF975.kind, var_core_value_sigA298, var_core_value_sigCDAF),
      ...var_core_value_sigA298
    }, this._structuralSelection);
  }
  _clearStructuralSelectionState(var_core_value_sig0B40 = false) {
    this._structuralSelection = null, this._structuralSelectionTableShape = null, var_core_value_sig0B40 && (this._nativeSelectionSuppressed = false), this._preserveStructuralSelectionOnNextTextSelection = false;
  }
};
K = Nn([G(0, e.IUniverInstanceService), G(1, (0, e.Inject)(t.DocSelectionManagerService))], K);
function Pn(var_core_value_sig7EE4) {
  return !!(var_core_value_sig7EE4 != null && var_core_value_sig7EE4.tableId) && var_core_value_sig7EE4.startRow >= 0 && var_core_value_sig7EE4.startColumn >= 0;
}
function Fn(var_core_value_sigE3D7) {
  return {
    startRow: Math.min(var_core_value_sigE3D7.startRow, var_core_value_sigE3D7.endRow),
    endRow: Math.max(var_core_value_sigE3D7.startRow, var_core_value_sigE3D7.endRow),
    startColumn: Math.min(var_core_value_sigE3D7.startColumn, var_core_value_sigE3D7.endColumn),
    endColumn: Math.max(var_core_value_sigE3D7.startColumn, var_core_value_sigE3D7.endColumn)
  };
}
function In(var_core_value_sig54C6, var_core_value_sigE843) {
  let var_core_value_sig2EB2 = Rn(var_core_value_sig54C6, var_core_value_sigE843);
  return var_core_value_sig2EB2 ? ae(var_core_value_sig54C6, var_core_value_sig2EB2) : null;
}
function Ln(var_core_value_sig683A, var_core_value_sig109B) {
  let var_core_value_sig6DD0 = Rn(var_core_value_sig683A, var_core_value_sig109B);
  return var_core_value_sig6DD0 ? var_core_value_sig109B.kind === "row" || var_core_value_sig109B.kind === "column" ? var_core_value_sig6DD0 : ae(var_core_value_sig683A, var_core_value_sig6DD0) : null;
}
function Rn(var_core_value_sigB5D3, var_core_value_sig6085) {
  var var_core_value_sig2507;
  let var_core_value_sig5870 = Fn(var_core_value_sig6085),
    var_core_value_sig827F = var_core_value_sigB5D3.tableRows["length"],
    var_core_value_sig2452 = ((var_core_value_sig2507 = var_core_value_sigB5D3.tableRows[0]) == null ? undefined : var_core_value_sig2507.tableCells["length"]) ?? 0;
  return var_core_value_sig827F === 0 || var_core_value_sig2452 === 0 || var_core_value_sig5870.startRow < 0 || var_core_value_sig5870.endRow >= var_core_value_sig827F || var_core_value_sig5870.startColumn < 0 || var_core_value_sig5870.endColumn >= var_core_value_sig2452 ? null : var_core_value_sig5870;
}
function zn(var_core_value_sig50D0) {
  return var_core_value_sig50D0.tableRows["length"] + ":" + var_core_value_sig50D0.tableRows["map"](var_core_value_sig330B => var_core_value_sig330B.tableCells["length"]).join(",");
}
function Bn(var_core_value_sig5EBB, var_core_value_sig5E99, var_core_value_sig3FB3) {
  let var_core_value_sig0214 = var_core_value_sig5E99.startRow === var_core_value_sig5E99.endRow && var_core_value_sig5E99.startColumn === var_core_value_sig5E99.endColumn;
  if (var_core_value_sig5EBB === "cell" && (var_core_value_sig0214 || Hn(var_core_value_sig3FB3, var_core_value_sig5E99))) return "cell";
  let {
    spansEntireRow: var_core_value_sig5153,
    spansEntireColumn: var_core_value_sigF323
  } = Vn(var_core_value_sig5E99, var_core_value_sig3FB3);
  return var_core_value_sig5EBB === "row" && var_core_value_sig5153 ? "row" : var_core_value_sig5EBB === "column" && var_core_value_sigF323 ? "column" : var_core_value_sig5153 && var_core_value_sigF323 ? "table" : var_core_value_sig0214 ? "cell" : "range";
}
function Vn(var_core_value_sig0C32, var_core_value_sig1D89) {
  var var_core_value_sig2616;
  let var_core_value_sig97EF = (var_core_value_sig1D89 == null ? undefined : var_core_value_sig1D89.tableRows["length"]) ?? 0,
    var_core_value_sigA0C0 = (var_core_value_sig1D89 == null || (var_core_value_sig2616 = var_core_value_sig1D89.tableRows[0]) == null ? undefined : var_core_value_sig2616.tableCells["length"]) ?? 0;
  return {
    spansEntireRow: var_core_value_sigA0C0 > 0 && var_core_value_sig0C32.startColumn === 0 && var_core_value_sig0C32.endColumn === var_core_value_sigA0C0 - 1,
    spansEntireColumn: var_core_value_sig97EF > 0 && var_core_value_sig0C32.startRow === 0 && var_core_value_sig0C32.endRow === var_core_value_sig97EF - 1
  };
}
function Hn(var_core_value_sigAD4B, var_core_value_sig06EA) {
  return (var_core_value_sigAD4B == null ? undefined : var_core_value_sigAD4B.tableRows["some"]((var_core_value_sig3625, var_core_value_sig0B4E) => var_core_value_sig3625.tableCells["some"]((var_core_value_sig3F4C, var_core_value_sigD65A) => {
    let var_core_value_sig5A13 = var_core_value_sig3F4C.rowSpan ?? 1,
      var_core_value_sigF593 = var_core_value_sig3F4C.columnSpan ?? 1;
    return var_core_value_sig5A13 <= 0 || var_core_value_sigF593 <= 0 || var_core_value_sig5A13 === 1 && var_core_value_sigF593 === 1 ? false : var_core_value_sig06EA.startRow === var_core_value_sig0B4E && var_core_value_sig06EA.endRow === var_core_value_sig0B4E + var_core_value_sig5A13 - 1 && var_core_value_sig06EA.startColumn === var_core_value_sigD65A && var_core_value_sig06EA.endColumn === var_core_value_sigD65A + var_core_value_sigF593 - 1;
  }))) ?? false;
}
const Un = {
    id: "docs-table.command.delete-columns",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sigF3C7, var_core_value_sig5633) => {
      if (!var_core_value_sig5633) return false;
      let var_core_value_sig2492 = var_core_value_sigF3C7.get(e.IUniverInstanceService),
        var_core_value_sig39F2 = var_core_value_sigF3C7.get(e.ICommandService),
        var_core_value_sigAD47 = var_core_value_sigF3C7.get(K),
        var_core_value_sig1722 = var_core_value_sig2492.getUnit(var_core_value_sig5633.unitId, e.UniverInstanceType["UNIVER_DOC"]);
      if (!var_core_value_sig1722) return false;
      let var_core_value_sig7F86 = var_core_value_sigAD47.getCurrentSelection(),
        var_core_value_sigF69D = (var_core_value_sig7F86 == null ? undefined : var_core_value_sig7F86.unitId) === var_core_value_sig1722.getUnitId() ? var_core_value_sig7F86 : null,
        {
          endColumn: var_core_value_sig7CB9,
          startColumn: var_core_value_sigC1D8,
          tableId: var_core_value_sigCF8B
        } = var_core_value_sig5633,
        var_core_value_sigCD15 = var_core_value_sig1722.getSnapshot(),
        var_core_value_sig524D = var_core_value_sig5633.segmentId ?? "",
        var_core_value_sigD7F4 = I(var_core_value_sig1722, var_core_value_sig524D);
      if (!var_core_value_sigD7F4) return false;
      let var_core_value_sig7B87 = tn(var_core_value_sigD7F4, var_core_value_sigCF8B, var_core_value_sigC1D8, var_core_value_sig7CB9, H(var_core_value_sigCD15, var_core_value_sig524D));
      if (!var_core_value_sig7B87) return false;
      let var_core_value_sig933D = V(var_core_value_sig39F2, var_core_value_sig1722.getUnitId(), var_core_value_sigD7F4, var_core_value_sig7B87.actions, undefined, undefined, Un.id);
      if (var_core_value_sig933D && var_core_value_sigF69D) {
        let var_core_value_sig0E9F = c(var_core_value_sigF69D, var_core_value_sigD7F4, var_core_value_sig7B87.deleteTable ? {
          kind: "delete-table",
          tableId: var_core_value_sigCF8B
        } : {
          kind: "delete-columns",
          tableId: var_core_value_sigCF8B,
          index: Math.min(var_core_value_sigC1D8, var_core_value_sig7CB9),
          count: Math.abs(var_core_value_sig7CB9 - var_core_value_sigC1D8) + 1
        });
        var_core_value_sig0E9F ? var_core_value_sigAD47.setStructuralSelection(var_core_value_sig0E9F) : var_core_value_sigAD47.clearStructuralSelection();
      }
      return var_core_value_sig933D;
    }
  },
  Wn = {
    id: "docs-table.command.delete-rows",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig6ACE, var_core_value_sig7675) => {
      if (!var_core_value_sig7675) return false;
      let var_core_value_sig21B8 = var_core_value_sig6ACE.get(e.IUniverInstanceService),
        var_core_value_sigD545 = var_core_value_sig6ACE.get(e.ICommandService),
        var_core_value_sig91C9 = var_core_value_sig6ACE.get(K),
        var_core_value_sig64BA = var_core_value_sig21B8.getUnit(var_core_value_sig7675.unitId, e.UniverInstanceType["UNIVER_DOC"]);
      if (!var_core_value_sig64BA) return false;
      let var_core_value_sig3FD5 = var_core_value_sig91C9.getCurrentSelection(),
        var_core_value_sig1008 = (var_core_value_sig3FD5 == null ? undefined : var_core_value_sig3FD5.unitId) === var_core_value_sig64BA.getUnitId() ? var_core_value_sig3FD5 : null,
        {
          endRow: var_core_value_sigB9F4,
          startRow: var_core_value_sig2D23,
          tableId: var_core_value_sigF2E0
        } = var_core_value_sig7675,
        var_core_value_sig9214 = var_core_value_sig64BA.getSnapshot(),
        var_core_value_sigC8B1 = var_core_value_sig7675.segmentId ?? "",
        var_core_value_sig35E2 = I(var_core_value_sig64BA, var_core_value_sigC8B1);
      if (!var_core_value_sig35E2) return false;
      let var_core_value_sig9B13 = hn(var_core_value_sig35E2, var_core_value_sigF2E0, var_core_value_sig2D23, var_core_value_sigB9F4, H(var_core_value_sig9214, var_core_value_sigC8B1));
      if (!var_core_value_sig9B13) return false;
      let var_core_value_sig60E6 = V(var_core_value_sigD545, var_core_value_sig64BA.getUnitId(), var_core_value_sig35E2, var_core_value_sig9B13.actions, undefined, undefined, Wn.id);
      if (var_core_value_sig60E6 && var_core_value_sig1008) {
        let var_core_value_sigE5BA = c(var_core_value_sig1008, var_core_value_sig35E2, var_core_value_sig9B13.deleteTable ? {
          kind: "delete-table",
          tableId: var_core_value_sigF2E0
        } : {
          kind: "delete-rows",
          tableId: var_core_value_sigF2E0,
          index: Math.min(var_core_value_sig2D23, var_core_value_sigB9F4),
          count: Math.abs(var_core_value_sigB9F4 - var_core_value_sig2D23) + 1
        });
        var_core_value_sigE5BA ? var_core_value_sig91C9.setStructuralSelection(var_core_value_sigE5BA) : var_core_value_sig91C9.clearStructuralSelection();
      }
      return var_core_value_sig60E6;
    }
  },
  Gn = {
    id: "docs-table.command.delete-table",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig1F6E, var_core_value_sig7A6B) => {
      if (!var_core_value_sig7A6B) return false;
      let var_core_value_sig20F6 = var_core_value_sig1F6E.get(e.IUniverInstanceService),
        var_core_value_sigAEE0 = var_core_value_sig1F6E.get(e.ICommandService),
        var_core_value_sig72B6 = var_core_value_sig1F6E.get(K),
        var_core_value_sig43E8 = var_core_value_sig20F6.getUnit(var_core_value_sig7A6B.unitId, e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sigB1FB = var_core_value_sig72B6.getCurrentSelection(),
        var_core_value_sig6876 = (var_core_value_sigB1FB == null ? undefined : var_core_value_sigB1FB.unitId) === (var_core_value_sig43E8 == null ? undefined : var_core_value_sig43E8.getUnitId()) ? var_core_value_sigB1FB : null;
      if (!var_core_value_sig43E8) return false;
      let {
          tableId: var_core_value_sig55FB
        } = var_core_value_sig7A6B,
        var_core_value_sig2870 = var_core_value_sig43E8.getSnapshot(),
        var_core_value_sigC865 = var_core_value_sig7A6B.segmentId ?? "",
        var_core_value_sig6788 = I(var_core_value_sig43E8, var_core_value_sigC865);
      if (!var_core_value_sig6788) return false;
      let var_core_value_sig7B1F = gn(var_core_value_sig6788, var_core_value_sig55FB, H(var_core_value_sig2870, var_core_value_sigC865));
      if (!var_core_value_sig7B1F) return false;
      let var_core_value_sig7E51 = V(var_core_value_sigAEE0, var_core_value_sig43E8.getUnitId(), var_core_value_sig6788, var_core_value_sig7B1F.actions, undefined, undefined, Gn.id);
      if (var_core_value_sig7E51 && var_core_value_sig6876) {
        let var_core_value_sig4A83 = c(var_core_value_sig6876, var_core_value_sig6788, {
          kind: "delete-table",
          tableId: var_core_value_sig55FB
        });
        var_core_value_sig4A83 ? var_core_value_sig72B6.setStructuralSelection(var_core_value_sig4A83) : var_core_value_sig72B6.clearStructuralSelection();
      }
      return var_core_value_sig7E51;
    }
  },
  Kn = {
    id: "docs-table.command.distribute-columns",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sigAE87, var_core_value_sigFD51) => {
      let var_core_value_sigF6D6 = var_core_value_sigAE87.get(e.IUniverInstanceService),
        var_core_value_sigCF95 = var_core_value_sigAE87.get(e.ICommandService),
        var_core_value_sig8793 = var_core_value_sigAE87.get(K),
        var_core_value_sig1BE7 = var_core_value_sigF6D6.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig34F8 = var_core_value_sig8793.getCurrentSelection(),
        var_core_value_sig9F3D = (var_core_value_sigFD51 == null ? undefined : var_core_value_sigFD51.tableId) ?? (var_core_value_sig34F8 == null ? undefined : var_core_value_sig34F8.tableId),
        var_core_value_sig785C = (var_core_value_sigFD51 == null ? undefined : var_core_value_sigFD51.startColumn) ?? (var_core_value_sig34F8 == null ? undefined : var_core_value_sig34F8.startColumn),
        var_core_value_sig6537 = (var_core_value_sigFD51 == null ? undefined : var_core_value_sigFD51.endColumn) ?? (var_core_value_sig34F8 == null ? undefined : var_core_value_sig34F8.endColumn);
      if (!var_core_value_sig1BE7 || !var_core_value_sig9F3D || var_core_value_sig785C == null || var_core_value_sig6537 == null) return false;
      let var_core_value_sig72BB = I(var_core_value_sig1BE7, P(var_core_value_sigFD51, var_core_value_sig34F8));
      if (!var_core_value_sig72BB) return false;
      let var_core_value_sigC0DF = Jt(var_core_value_sig72BB, var_core_value_sig9F3D, var_core_value_sig785C, var_core_value_sig6537);
      return V(var_core_value_sigCF95, var_core_value_sig1BE7.getUnitId(), var_core_value_sig72BB, var_core_value_sigC0DF);
    }
  },
  qn = {
    id: "docs-table.command.distribute-rows",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig94B7, var_core_value_sig9865) => {
      let var_core_value_sigA09D = var_core_value_sig94B7.get(e.IUniverInstanceService),
        var_core_value_sig1429 = var_core_value_sig94B7.get(e.ICommandService),
        var_core_value_sigA339 = var_core_value_sig94B7.get(K),
        var_core_value_sig832A = var_core_value_sigA09D.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig7945 = var_core_value_sigA339.getCurrentSelection(),
        var_core_value_sig1166 = (var_core_value_sig9865 == null ? undefined : var_core_value_sig9865.tableId) ?? (var_core_value_sig7945 == null ? undefined : var_core_value_sig7945.tableId),
        var_core_value_sig7ABC = (var_core_value_sig9865 == null ? undefined : var_core_value_sig9865.startRow) ?? (var_core_value_sig7945 == null ? undefined : var_core_value_sig7945.startRow),
        var_core_value_sigF686 = (var_core_value_sig9865 == null ? undefined : var_core_value_sig9865.endRow) ?? (var_core_value_sig7945 == null ? undefined : var_core_value_sig7945.endRow);
      if (!var_core_value_sig832A || !var_core_value_sig1166 || var_core_value_sig7ABC == null || var_core_value_sigF686 == null) return false;
      let var_core_value_sigDFF0 = I(var_core_value_sig832A, P(var_core_value_sig9865, var_core_value_sig7945));
      if (!var_core_value_sigDFF0) return false;
      let var_core_value_sig0130 = qt(var_core_value_sigDFF0, var_core_value_sig1166, var_core_value_sig7ABC, var_core_value_sigF686);
      return V(var_core_value_sig1429, var_core_value_sig832A.getUnitId(), var_core_value_sigDFF0, var_core_value_sig0130);
    }
  },
  Jn = {
    id: "docs-table.command.insert-columns",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sigFD90, var_core_value_sig702C) => {
      var var_core_value_sig03A4;
      if (!var_core_value_sig702C) return false;
      let var_core_value_sigB6F5 = var_core_value_sigFD90.get(e.IUniverInstanceService),
        var_core_value_sig82931 = var_core_value_sigFD90.get(e.ICommandService),
        var_core_value_sig43AE = var_core_value_sigFD90.get(K),
        var_core_value_sigEF2E = var_core_value_sigB6F5.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sigD83C = var_core_value_sig43AE.getCurrentSelection(),
        var_core_value_sigAC2B = var_core_value_sig702C.tableId ?? (var_core_value_sigD83C == null ? undefined : var_core_value_sigD83C.tableId),
        var_core_value_sigFBBE = var_core_value_sig702C.column ?? (var_core_value_sig702C.position === "left" ? var_core_value_sigD83C == null ? undefined : var_core_value_sigD83C.startColumn : var_core_value_sigD83C == null ? undefined : var_core_value_sigD83C.endColumn);
      if (!var_core_value_sigEF2E || var_core_value_sigAC2B == null || var_core_value_sigFBBE == null) return false;
      let var_core_value_sigC982 = var_core_value_sigEF2E.getSnapshot(),
        var_core_value_sig59DA = P(var_core_value_sig702C, var_core_value_sigD83C),
        var_core_value_sig3002 = I(var_core_value_sigEF2E, var_core_value_sig59DA);
      if (!var_core_value_sig3002) return false;
      let var_core_value_sig33D2 = var_core_value_sig702C.count ?? (var_core_value_sigD83C ? Math.max(1, var_core_value_sigD83C.endColumn - var_core_value_sigD83C.startColumn + 1) : 1),
        var_core_value_sig8D4A = ((var_core_value_sig03A4 = var_core_value_sigC982.documentStyle) == null ? undefined : var_core_value_sig03A4.documentFlavor) === e.DocumentFlavor["MODERN"],
        var_core_value_sigB5D7 = Xt(var_core_value_sig3002, var_core_value_sigAC2B, var_core_value_sigFBBE, var_core_value_sig33D2, var_core_value_sig702C.position, {
          bodyPath: H(var_core_value_sigC982, var_core_value_sig59DA),
          insertedColumnWidth: var_core_value_sig8D4A ? Yn(var_core_value_sigC982, var_core_value_sigAC2B, var_core_value_sigFBBE, var_core_value_sig702C.position) : undefined,
          preserveTotalWidth: !var_core_value_sig8D4A
        });
      if (!var_core_value_sigB5D7) return false;
      let var_core_value_sig797B = V(var_core_value_sig82931, var_core_value_sigEF2E.getUnitId(), var_core_value_sig3002, var_core_value_sigB5D7.actions);
      if (var_core_value_sig797B && var_core_value_sigD83C) {
        let var_core_value_sig58AA = c(var_core_value_sigD83C, var_core_value_sig3002, {
          kind: "insert-columns",
          tableId: var_core_value_sigAC2B,
          index: var_core_value_sigB5D7.cursorColumn,
          count: var_core_value_sig33D2
        });
        var_core_value_sig58AA && var_core_value_sig43AE.setStructuralSelection(var_core_value_sig58AA);
      }
      return var_core_value_sig797B;
    }
  };
function Yn(var_core_value_sig5094, var_core_value_sig8883, var_core_value_sig488F, var_core_value_sigB440) {
  var var_core_value_sigF5CC, var_core_value_sigA1B6;
  let var_core_value_sig66A0 = (var_core_value_sigA1B6 = (((var_core_value_sigF5CC = var_core_value_sig5094.tableSource) == null || (var_core_value_sigF5CC = var_core_value_sigF5CC[var_core_value_sig8883]) == null ? undefined : var_core_value_sigF5CC.tableColumns) ?? [])[(var_core_value_sigB440 === "left" ? var_core_value_sig488F : var_core_value_sig488F + 1) - 1]) == null || (var_core_value_sigA1B6 = var_core_value_sigA1B6.size) == null || (var_core_value_sigA1B6 = var_core_value_sigA1B6.width) == null ? undefined : var_core_value_sigA1B6.v;
  return var_core_value_sig66A0 && var_core_value_sig66A0 > 0 ? var_core_value_sig66A0 : 100;
}
const Xn = {
    id: "docs-table.command.insert-rows",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig7876, var_core_value_sig2C69) => {
      if (!var_core_value_sig2C69) return false;
      let var_core_value_sigAF19 = var_core_value_sig7876.get(e.IUniverInstanceService),
        var_core_value_sigCE75 = var_core_value_sig7876.get(e.ICommandService),
        var_core_value_sigF27A = var_core_value_sig7876.get(K),
        var_core_value_sig47B3 = var_core_value_sigAF19.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig5E75 = var_core_value_sigF27A.getCurrentSelection(),
        var_core_value_sigC266 = var_core_value_sig2C69.tableId ?? (var_core_value_sig5E75 == null ? undefined : var_core_value_sig5E75.tableId),
        var_core_value_sig77A3 = var_core_value_sig2C69.row ?? (var_core_value_sig2C69.position === "above" ? var_core_value_sig5E75 == null ? undefined : var_core_value_sig5E75.startRow : var_core_value_sig5E75 == null ? undefined : var_core_value_sig5E75.endRow);
      if (!var_core_value_sig47B3 || var_core_value_sigC266 == null || var_core_value_sig77A3 == null) return false;
      let var_core_value_sigD85C = var_core_value_sig47B3.getSnapshot(),
        var_core_value_sig3957 = P(var_core_value_sig2C69, var_core_value_sig5E75),
        var_core_value_sigA101 = I(var_core_value_sig47B3, var_core_value_sig3957);
      if (!var_core_value_sigA101) return false;
      let var_core_value_sig2ADC = var_core_value_sig2C69.count ?? (var_core_value_sig5E75 ? Math.max(1, var_core_value_sig5E75.endRow - var_core_value_sig5E75.startRow + 1) : 1),
        var_core_value_sig1386 = pn(var_core_value_sigA101, var_core_value_sigC266, var_core_value_sig77A3, var_core_value_sig2ADC, var_core_value_sig2C69.position, H(var_core_value_sigD85C, var_core_value_sig3957));
      if (!var_core_value_sig1386) return false;
      let var_core_value_sig96F5 = V(var_core_value_sigCE75, var_core_value_sig47B3.getUnitId(), var_core_value_sigA101, var_core_value_sig1386.actions);
      if (var_core_value_sig96F5 && var_core_value_sig5E75) {
        let var_core_value_sig84C4 = c(var_core_value_sig5E75, var_core_value_sigA101, {
          kind: "insert-rows",
          tableId: var_core_value_sigC266,
          index: var_core_value_sig1386.cursorRow,
          count: var_core_value_sig2ADC
        });
        var_core_value_sig84C4 && var_core_value_sigF27A.setStructuralSelection(var_core_value_sig84C4);
      }
      return var_core_value_sig96F5;
    }
  },
  Zn = {
    start: {
      v: 10
    },
    end: {
      v: 10
    },
    top: {
      v: 5
    },
    bottom: {
      v: 5
    }
  };
function Qn(var_core_value_sig7F54) {
  var var_core_value_sigEB45;
  let var_core_value_sig0623 = (var_core_value_sigEB45 = var_core_value_sig7F54.documentData["tableSource"]) == null ? undefined : var_core_value_sigEB45[var_core_value_sig7F54.tableId];
  if (!var_core_value_sig0623) return null;
  let var_core_value_sigBF43 = nr(var_core_value_sig7F54),
    var_core_value_sigBC08 = [],
    var_core_value_sig3F28 = e.JSONX["getInstance"]();
  for (let var_core_value_sigB6F7 = var_core_value_sigBF43.startRow; var_core_value_sigB6F7 <= var_core_value_sigBF43.endRow; var_core_value_sigB6F7++) for (let var_core_value_sig3607 = var_core_value_sigBF43.startColumn; var_core_value_sig3607 <= var_core_value_sigBF43.endColumn; var_core_value_sig3607++) {
    var var_core_value_sig0A16;
    let var_core_value_sigA12B = (var_core_value_sig0A16 = var_core_value_sig0623.tableRows[var_core_value_sigB6F7]) == null ? undefined : var_core_value_sig0A16.tableCells[var_core_value_sig3607];
    if (!var_core_value_sigA12B) return null;
    er(var_core_value_sigBC08, ["tableSource", var_core_value_sig7F54.tableId, "tableRows", var_core_value_sigB6F7, "tableCells", var_core_value_sig3607, "margin"], var_core_value_sigA12B.margin, var_core_value_sig7F54.margin ?? undefined, var_core_value_sig3F28);
  }
  return tr(var_core_value_sigBC08);
}
function $n(var_core_value_sig0A96, var_core_value_sig72FE, var_core_value_sigE8ED) {
  var var_core_value_sig6DD3;
  let var_core_value_sig8E87 = (var_core_value_sig6DD3 = var_core_value_sig0A96.tableSource) == null ? undefined : var_core_value_sig6DD3[var_core_value_sig72FE];
  if (!var_core_value_sig8E87) return null;
  let var_core_value_sigCDF2 = [];
  return er(var_core_value_sigCDF2, ["tableSource", var_core_value_sig72FE, "cellMargin"], var_core_value_sig8E87.cellMargin, var_core_value_sigE8ED ?? undefined, e.JSONX["getInstance"]()), tr(var_core_value_sigCDF2);
}
function er(var_core_value_sig1043, var_core_value_sig4289, var_core_value_sig2729, var_core_value_sig5BB6, var_core_value_sig5C75) {
  JSON.stringify(var_core_value_sig2729) !== JSON.stringify(var_core_value_sig5BB6) && (var_core_value_sig2729 === undefined ? var_core_value_sig1043.push(var_core_value_sig5C75.insertOp(var_core_value_sig4289, e.Tools["deepClone"](var_core_value_sig5BB6))) : var_core_value_sig5BB6 === undefined ? var_core_value_sig1043.push(var_core_value_sig5C75.removeOp(var_core_value_sig4289, var_core_value_sig2729)) : var_core_value_sig1043.push(var_core_value_sig5C75.replaceOp(var_core_value_sig4289, var_core_value_sig2729, e.Tools["deepClone"](var_core_value_sig5BB6))));
}
function tr(var_core_value_sigCB46) {
  return var_core_value_sigCB46.reduce((var_core_value_sigB495, var_core_value_sig70D0) => e.JSONX["compose"](var_core_value_sigB495, var_core_value_sig70D0), null);
}
function nr(var_core_value_sig0177) {
  return {
    startRow: Math.min(var_core_value_sig0177.startRow, var_core_value_sig0177.endRow),
    endRow: Math.max(var_core_value_sig0177.startRow, var_core_value_sig0177.endRow),
    startColumn: Math.min(var_core_value_sig0177.startColumn, var_core_value_sig0177.endColumn),
    endColumn: Math.max(var_core_value_sig0177.startColumn, var_core_value_sig0177.endColumn)
  };
}
let rr = function (var_core_value_sigC674) {
  return var_core_value_sigC674.Selection = "selection", var_core_value_sigC674.DocumentEnd = "documentEnd", var_core_value_sigC674.Offset = "offset", var_core_value_sigC674;
}({});
var ir = class extends Error {
  constructor() {
    super("Table can only be inserted in a normal paragraph area");
  }
};
function ar(var_core_value_sigC11B, var_core_value_sig5461 = ["body"]) {
  var var_core_value_sigBA12, var_core_value_sig65CB;
  let var_core_value_sig8AF4 = var_core_value_sigC11B.documentData["body"] ?? cr(),
    var_core_value_sig7C2D = ur(var_core_value_sigC11B),
    var_core_value_sig5F54 = var_core_value_sig7C2D.length,
    var_core_value_sig668D = ((var_core_value_sigBA12 = var_core_value_sig7C2D[0]) == null ? undefined : var_core_value_sigBA12.length) ?? 1,
    var_core_value_sig6883 = dr(var_core_value_sig8AF4, var_core_value_sigC11B);
  fr(var_core_value_sig8AF4, var_core_value_sig6883);
  let var_core_value_sig2A05 = or(var_core_value_sig8AF4, var_core_value_sigC11B, var_core_value_sig7C2D, var_core_value_sig6883),
    var_core_value_sig9CA8 = var_core_value_sigC11B.documentData["body"] ? sr(var_core_value_sig2A05, var_core_value_sig6883, var_core_value_sig5461) : e.JSONX["getInstance"]().insertOp(var_core_value_sig5461, lr(var_core_value_sig2A05)),
    var_core_value_sig3C9C = wr(var_core_value_sigC11B, var_core_value_sig5F54, var_core_value_sig668D),
    var_core_value_sig7651 = e.JSONX["getInstance"]().insertOp(["tableSource", var_core_value_sigC11B.tableId], var_core_value_sig3C9C),
    var_core_value_sig6E4E = O(var_core_value_sigC11B.metadata),
    var_core_value_sigC2E8 = kr(var_core_value_sigC11B);
  return var_core_value_sigC2E8 && (var_core_value_sig6E4E.tables[var_core_value_sigC11B.tableId] = var_core_value_sigC2E8), {
    actions: e.JSONX["compose"](var_core_value_sig9CA8, var_core_value_sig7651),
    cursorOffset: var_core_value_sig6883 + (((var_core_value_sig65CB = var_core_value_sig2A05.tables) == null || (var_core_value_sig65CB = var_core_value_sig65CB.find(var_core_value_sig2A8A => var_core_value_sig2A8A.tableId === var_core_value_sigC11B.tableId)) == null ? undefined : var_core_value_sig65CB.startIndex) ?? 0) + 3,
    nextMetadata: var_core_value_sig6E4E,
    tableId: var_core_value_sigC11B.tableId
  };
}
function or(var_core_value_sig3A04, var_core_value_sig935E, var_core_value_sigDC45, var_core_value_sig7C31) {
  let var_core_value_sig8B54 = Sr(var_core_value_sig3A04),
    var_core_value_sigC19B = xr(var_core_value_sigDC45, var_core_value_sig8B54, Cr(var_core_value_sig3A04)),
    var_core_value_sigFB87 = gr(var_core_value_sig3A04, var_core_value_sig7C31) ? e.DataStreamTreeTokenType["PARAGRAPH"] : "",
    var_core_value_sigA318 = var_core_value_sigFB87 ? vr(var_core_value_sig3A04, var_core_value_sig7C31) : undefined,
    var_core_value_sig51A4 = _r(var_core_value_sig3A04, var_core_value_sig7C31) ? e.DataStreamTreeTokenType["PARAGRAPH"] : "",
    var_core_value_sig2966 = var_core_value_sigFB87.length,
    var_core_value_sigF4C4 = var_core_value_sig2966 + var_core_value_sigC19B.dataStream["length"];
  return {
    dataStream: [var_core_value_sigFB87, var_core_value_sigC19B.dataStream, var_core_value_sig51A4].join(""),
    paragraphs: [...yr(0, var_core_value_sigFB87, var_core_value_sig8B54, var_core_value_sigA318), ...var_core_value_sigC19B.paragraphs["map"](var_core_value_sig3782 => ({
      ...var_core_value_sig3782,
      startIndex: var_core_value_sig3782.startIndex + var_core_value_sig2966
    })), ...br(var_core_value_sigF4C4, var_core_value_sig51A4, var_core_value_sig8B54)],
    sectionBreaks: var_core_value_sigC19B.sectionBreaks["map"](var_core_value_sigD22E => ({
      ...var_core_value_sigD22E,
      startIndex: var_core_value_sigD22E.startIndex + var_core_value_sig2966
    })),
    tables: [{
      startIndex: var_core_value_sig2966,
      endIndex: var_core_value_sigF4C4,
      tableId: var_core_value_sig935E.tableId
    }]
  };
}
function sr(var_core_value_sig5617, var_core_value_sig450E, var_core_value_sig92A31) {
  let var_core_value_sig61E5 = new e.TextX();
  return var_core_value_sig450E > 0 && var_core_value_sig61E5.retain(var_core_value_sig450E), var_core_value_sig61E5.insert(var_core_value_sig5617.dataStream["length"], var_core_value_sig5617), e.JSONX["getInstance"]().editOp(var_core_value_sig61E5.serialize(), var_core_value_sig92A31);
}
function cr() {
  return {
    dataStream: e.DataStreamTreeTokenType["SECTION_BREAK"],
    paragraphs: [],
    sectionBreaks: [{
      sectionId: (0, e.createSectionId)(new Set()),
      startIndex: 0
    }],
    tables: []
  };
}
function lr(var_core_value_sig9E17) {
  var var_core_value_sigB97D;
  let var_core_value_sigFE1E = var_core_value_sig9E17.dataStream["length"];
  return {
    ...var_core_value_sig9E17,
    dataStream: var_core_value_sig9E17.dataStream + e.DataStreamTreeTokenType["SECTION_BREAK"],
    sectionBreaks: [...(var_core_value_sig9E17.sectionBreaks ?? []), {
      sectionId: (0, e.createSectionId)(new Set((var_core_value_sigB97D = var_core_value_sig9E17.sectionBreaks) == null ? undefined : var_core_value_sigB97D.map(var_core_value_sig3455 => var_core_value_sig3455.sectionId))),
      startIndex: var_core_value_sigFE1E
    }]
  };
}
function ur(var_core_value_sig5F541) {
  var var_core_value_sig84B9;
  let var_core_value_sig09DF = Math.max(1, var_core_value_sig5F541.rows ?? ((var_core_value_sig84B9 = var_core_value_sig5F541.values) == null ? undefined : var_core_value_sig84B9.length) ?? 1),
    var_core_value_sig3A25 = 0;
  for (let var_core_value_sig5CEF of var_core_value_sig5F541.values ?? []) var_core_value_sig3A25 = Math.max(var_core_value_sig3A25, var_core_value_sig5CEF.length);
  let var_core_value_sig5B2B = Math.max(1, var_core_value_sig5F541.columns ?? (var_core_value_sig3A25 || 1));
  return Array.from({
    length: var_core_value_sig09DF
  }, (var_core_value_sig43D5, var_core_value_sig1395) => Array.from({
    length: var_core_value_sig5B2B
  }, (var_core_value_sigB512, var_core_value_sigF2E6) => {
    var var_core_value_sig34C8;
    return ((var_core_value_sig34C8 = var_core_value_sig5F541.values) == null || (var_core_value_sig34C8 = var_core_value_sig34C8[var_core_value_sig1395]) == null ? undefined : var_core_value_sig34C8[var_core_value_sigF2E6]) ?? "";
  }));
}
function dr(var_core_value_sigE5FE, var_core_value_sig78A5) {
  return typeof var_core_value_sig78A5.offset == "number" ? Math.max(0, Math.min(var_core_value_sig78A5.offset, var_core_value_sigE5FE.dataStream["length"])) : var_core_value_sigE5FE.dataStream["endsWith"](e.DataStreamTreeTokenType["SECTION_BREAK"]) ? var_core_value_sigE5FE.dataStream["length"] - 1 : var_core_value_sigE5FE.dataStream["length"];
}
function fr(var_core_value_sig9A4C, var_core_value_sigC723) {
  if (pr(var_core_value_sig9A4C.tables, var_core_value_sigC723) || mr(var_core_value_sig9A4C.blockRanges, var_core_value_sigC723) || hr(var_core_value_sig9A4C.customBlocks, var_core_value_sigC723)) throw new ir();
}
function pr(var_core_value_sig1E32, var_core_value_sig22AF) {
  return !!(var_core_value_sig1E32 != null && var_core_value_sig1E32.some(var_core_value_sig9FA0 => (0, e.containsInteriorInsertionOffset)((0, e.getTableRangeInterval)(var_core_value_sig9FA0), var_core_value_sig22AF)));
}
function mr(var_core_value_sig0F31, var_core_value_sig8F25) {
  return !!(var_core_value_sig0F31 != null && var_core_value_sig0F31.some(var_core_value_sig055E => (0, e.containsInteriorInsertionOffset)((0, e.getBlockRangeInterval)(var_core_value_sig055E), var_core_value_sig8F25)));
}
function hr(var_core_value_sigCBED, var_core_value_sig6224) {
  return !!(var_core_value_sigCBED != null && var_core_value_sigCBED.some(var_core_value_sig7C77 => var_core_value_sig7C77.startIndex === var_core_value_sig6224));
}
function gr(var_core_value_sigFC3E, var_core_value_sig4D33) {
  return var_core_value_sig4D33 <= 0 || var_core_value_sigFC3E.dataStream[var_core_value_sig4D33 - 1] !== e.DataStreamTreeTokenType["PARAGRAPH"];
}
function _r(var_core_value_sig08BF, var_core_value_sig1814) {
  return var_core_value_sig08BF.dataStream[var_core_value_sig1814] !== e.DataStreamTreeTokenType["PARAGRAPH"];
}
function vr(var_core_value_sig2B5D, var_core_value_sig9B0B) {
  var var_core_value_sigF21D;
  return (var_core_value_sigF21D = var_core_value_sig2B5D.paragraphs) == null ? undefined : var_core_value_sigF21D.find(var_core_value_sig9578 => (0, e.getParagraphContentStartOffset)(var_core_value_sig2B5D, var_core_value_sig9578) < var_core_value_sig9B0B && var_core_value_sig9B0B <= var_core_value_sig9578.startIndex);
}
function yr(var_core_value_sig9B55, var_core_value_sigB8F4, var_core_value_sig5E41, var_core_value_sig310E) {
  if (!var_core_value_sigB8F4) return [];
  let var_core_value_sig2E97 = {
    startIndex: var_core_value_sig9B55,
    paragraphId: (0, e.createParagraphId)(var_core_value_sig5E41)
  };
  return var_core_value_sig310E != null && var_core_value_sig310E.bullet && (var_core_value_sig2E97.bullet = e.Tools["deepClone"](var_core_value_sig310E.bullet)), var_core_value_sig310E != null && var_core_value_sig310E.paragraphStyle && (var_core_value_sig2E97.paragraphStyle = e.Tools["deepClone"](var_core_value_sig310E.paragraphStyle), delete var_core_value_sig2E97.paragraphStyle["borderBottom"], var_core_value_sig310E.paragraphStyle["headingId"] && (var_core_value_sig2E97.paragraphStyle["headingId"] = (0, e.generateRandomId)(6))), [var_core_value_sig2E97];
}
function br(var_core_value_sig4B00, var_core_value_sig9896, var_core_value_sigA725) {
  return var_core_value_sig9896 ? [{
    startIndex: var_core_value_sig4B00,
    paragraphId: (0, e.createParagraphId)(var_core_value_sigA725)
  }] : [];
}
function xr(var_core_value_sig9FB3, var_core_value_sig0E44, var_core_value_sig243C) {
  let var_core_value_sigB3A4 = e.DataStreamTreeTokenType["TABLE_START"],
    var_core_value_sigAF1B = [],
    var_core_value_sig906D = [];
  return var_core_value_sig9FB3.forEach(var_core_value_sigA2D31 => {
    var_core_value_sigB3A4 += e.DataStreamTreeTokenType["TABLE_ROW_START"], var_core_value_sigA2D31.forEach(var_core_value_sigB744 => {
      var_core_value_sigB3A4 += "" + e.DataStreamTreeTokenType["TABLE_CELL_START"] + var_core_value_sigB744 + e.DataStreamTreeTokenType["PARAGRAPH"] + e.DataStreamTreeTokenType["SECTION_BREAK"] + e.DataStreamTreeTokenType["TABLE_CELL_END"], var_core_value_sigAF1B.push({
        startIndex: var_core_value_sigB3A4.length - 3,
        paragraphId: (0, e.createParagraphId)(var_core_value_sig0E44)
      }), var_core_value_sig906D.push({
        sectionId: (0, e.createSectionId)(var_core_value_sig243C),
        startIndex: var_core_value_sigB3A4.length - 2
      });
    }), var_core_value_sigB3A4 += e.DataStreamTreeTokenType["TABLE_ROW_END"];
  }), var_core_value_sigB3A4 += e.DataStreamTreeTokenType["TABLE_END"], {
    dataStream: var_core_value_sigB3A4,
    paragraphs: var_core_value_sigAF1B,
    sectionBreaks: var_core_value_sig906D
  };
}
function Sr(var_core_value_sig6AFB) {
  return new Set((var_core_value_sig6AFB.paragraphs ?? []).map(var_core_value_sigC218 => var_core_value_sigC218.paragraphId));
}
function Cr(var_core_value_sig2830) {
  return new Set((var_core_value_sig2830.sectionBreaks ?? []).map(var_core_value_sigADEC => var_core_value_sigADEC.sectionId));
}
function wr(var_core_value_sig9C3A, var_core_value_sig0321, var_core_value_sig51CF) {
  let var_core_value_sig3C61 = Or(var_core_value_sig9C3A, var_core_value_sig51CF);
  return {
    tableRows: Array.from({
      length: var_core_value_sig0321
    }, (var_core_value_sig3D8E, var_core_value_sig37E5) => Tr(var_core_value_sig9C3A, var_core_value_sig37E5, var_core_value_sig51CF)),
    tableColumns: var_core_value_sig3C61.map(var_core_value_sigF079 => Dr(var_core_value_sigF079)),
    tableId: var_core_value_sig9C3A.tableId,
    align: e.TableAlignmentType["START"],
    indent: {
      v: 0
    },
    textWrap: e.TableTextWrapType["NONE"],
    position: {
      positionH: {
        relativeFrom: e.ObjectRelativeFromH["PAGE"],
        posOffset: 0
      },
      positionV: {
        relativeFrom: e.ObjectRelativeFromV["PAGE"],
        posOffset: 0
      }
    },
    dist: {
      distB: 0,
      distL: 0,
      distR: 0,
      distT: 0
    },
    size: {
      type: e.TableSizeType["SPECIFIED"],
      width: {
        v: var_core_value_sig9C3A.width ?? var_core_value_sig3C61.reduce((var_core_value_sigFCA0, var_core_value_sigC84D) => var_core_value_sigFCA0 + var_core_value_sigC84D, 0)
      }
    },
    ...(var_core_value_sig9C3A.cellMargin == null ? {} : {
      cellMargin: e.Tools["deepClone"](var_core_value_sig9C3A.cellMargin)
    })
  };
}
function Tr(var_core_value_sigDC70, var_core_value_sigD10E, var_core_value_sigBB93) {
  var var_core_value_sig4F88;
  return {
    tableCells: Array.from({
      length: var_core_value_sigBB93
    }, (var_core_value_sigF2BC, var_core_value_sigD37B) => Er(var_core_value_sigDC70, var_core_value_sigD10E, var_core_value_sigD37B, var_core_value_sigBB93)),
    trHeight: {
      val: {
        v: ((var_core_value_sig4F88 = var_core_value_sigDC70.rowHeights) == null ? undefined : var_core_value_sig4F88[var_core_value_sigD10E]) ?? 30
      },
      hRule: e.TableRowHeightRule["AT_LEAST"]
    },
    repeatHeaderRow: var_core_value_sigD10E < (var_core_value_sigDC70.headerRowCount ?? 0) ? e.BooleanNumber["TRUE"] : e.BooleanNumber["FALSE"]
  };
}
function Er(var_core_value_sig486C, var_core_value_sig717C, var_core_value_sig23AE, var_core_value_sigCB54) {
  let var_core_value_sigC7E1 = var_core_value_sig486C.titleRow && var_core_value_sig717C === 0;
  return {
    ...(var_core_value_sig486C.cellMargin == null ? {
      margin: e.Tools["deepClone"](Zn)
    } : {}),
    ...(var_core_value_sigC7E1 && var_core_value_sig23AE === 0 ? {
      columnSpan: var_core_value_sigCB54
    } : {}),
    ...(var_core_value_sigC7E1 && var_core_value_sig23AE > 0 ? {
      rowSpan: 0,
      columnSpan: 0
    } : {})
  };
}
function Dr(var_core_value_sig6575) {
  return {
    size: {
      type: e.TableSizeType["SPECIFIED"],
      width: {
        v: var_core_value_sig6575
      }
    }
  };
}
function Or(var_core_value_sigE901, var_core_value_sigB7EC) {
  let var_core_value_sigB018 = var_core_value_sigE901.width ? var_core_value_sigE901.width / var_core_value_sigB7EC : 100;
  return Array.from({
    length: var_core_value_sigB7EC
  }, (var_core_value_sigFA28, var_core_value_sig93BE) => {
    var var_core_value_sigABEC;
    return ((var_core_value_sigABEC = var_core_value_sigE901.columnWidths) == null ? undefined : var_core_value_sigABEC[var_core_value_sig93BE]) ?? var_core_value_sigB018;
  });
}
function kr(var_core_value_sigE7BE) {
  if (var_core_value_sigE7BE.titleRow != null || var_core_value_sigE7BE.headerRowCount != null || var_core_value_sigE7BE.columnTypes != null) return {
    ...(var_core_value_sigE7BE.titleRow == null ? {} : {
      titleRow: var_core_value_sigE7BE.titleRow
    }),
    ...(var_core_value_sigE7BE.headerRowCount == null ? {} : {
      headerRowCount: var_core_value_sigE7BE.headerRowCount
    }),
    ...(var_core_value_sigE7BE.columnTypes == null ? {} : {
      columnTypes: var_core_value_sigE7BE.columnTypes
    })
  };
}
var q = class extends e.Disposable {
  constructor(...var_core_value_sig2712) {
    super(...var_core_value_sig2712), W(this, "_resources", new Map()), W(this, "_change$", new n["Subject"]()), W(this, "change$", this._change$["asObservable"]());
  }
  getTableMetadata(var_core_value_sig0B9E, var_core_value_sigC545) {
    var var_core_value_sig12A7;
    let var_core_value_sig6F4E = (var_core_value_sig12A7 = this._resources["get"](var_core_value_sig0B9E)) == null ? undefined : var_core_value_sig12A7.tables[var_core_value_sigC545];
    if (var_core_value_sig6F4E) return O({
      tables: {
        [var_core_value_sigC545]: var_core_value_sig6F4E
      }
    }).tables[var_core_value_sigC545];
  }
  setHeaderRowCount(var_core_value_sigA021, var_core_value_sig49D9, var_core_value_sig320C) {
    this._setResource(var_core_value_sigA021, var_core_value_sig49D9, be(this._resources["get"](var_core_value_sigA021), var_core_value_sig49D9, var_core_value_sig320C));
  }
  setTitleRow(var_core_value_sigE7F0, var_core_value_sigE837, var_core_value_sig34F4) {
    this._setResource(var_core_value_sigE7F0, var_core_value_sigE837, xe(this._resources["get"](var_core_value_sigE7F0), var_core_value_sigE837, var_core_value_sig34F4));
  }
  setColumnType(var_core_value_sigA45D, var_core_value_sig1BC7, var_core_value_sig4956, var_core_value_sigCC9E) {
    this._setResource(var_core_value_sigA45D, var_core_value_sig1BC7, Se(this._resources["get"](var_core_value_sigA45D), var_core_value_sig1BC7, var_core_value_sig4956, var_core_value_sigCC9E));
  }
  serialize(var_core_value_sig444C) {
    return O(this._resources["get"](var_core_value_sig444C));
  }
  deserialize(var_core_value_sigE42E, var_core_value_sigF039) {
    this._resources["set"](var_core_value_sigE42E, O(var_core_value_sigF039)), this._change$["next"]({
      unitId: var_core_value_sigE42E
    });
  }
  removeUnit(var_core_value_sigA321) {
    this._resources["delete"](var_core_value_sigA321), this._change$["next"]({
      unitId: var_core_value_sigA321
    });
  }
  dispose() {
    super.dispose(), this._resources["clear"](), this._change$["complete"]();
  }
  _setResource(var_core_value_sigBF4C, var_core_value_sig3457, var_core_value_sig4A08) {
    this._resources["set"](var_core_value_sigBF4C, var_core_value_sig4A08), this._change$["next"]({
      unitId: var_core_value_sigBF4C,
      tableId: var_core_value_sig3457
    });
  }
};
const Ar = {
  id: "docs-table.command.insert-table",
  type: e.CommandType["COMMAND"],
  handler: (var_core_value_sigC88E, var_core_value_sigC4A6) => {
    let var_core_value_sig1FE3 = var_core_value_sigC88E.get(e.IUniverInstanceService),
      var_core_value_sigF003 = var_core_value_sigC88E.get(e.ICommandService),
      var_core_value_sigE146 = var_core_value_sigC88E.get(q),
      var_core_value_sigF6D5 = var_core_value_sigC4A6 != null && var_core_value_sigC4A6.unitId ? var_core_value_sig1FE3.getUnit(var_core_value_sigC4A6.unitId, e.UniverInstanceType["UNIVER_DOC"]) : var_core_value_sig1FE3.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]);
    if (!var_core_value_sigF6D5) return false;
    let var_core_value_sig3B2F = var_core_value_sigF6D5.getSnapshot(),
      var_core_value_sigE558 = (var_core_value_sigC4A6 == null ? undefined : var_core_value_sigC4A6.tableId) ?? (0, e.generateRandomId)(6),
      var_core_value_sigA99D = jr(var_core_value_sigC88E, var_core_value_sigF6D5.getUnitId(), var_core_value_sigC4A6);
    if (!var_core_value_sigA99D) return false;
    let var_core_value_sigB23E;
    try {
      let var_core_value_sig1BC4 = I(var_core_value_sigF6D5, var_core_value_sigA99D.segmentId);
      if (!var_core_value_sig1BC4) return false;
      var_core_value_sigB23E = ar({
        ...var_core_value_sigC4A6,
        ...var_core_value_sigA99D,
        documentData: var_core_value_sig1BC4,
        metadata: var_core_value_sigE146.serialize(var_core_value_sigF6D5.getUnitId()),
        tableId: var_core_value_sigE558
      }, H(var_core_value_sig3B2F, var_core_value_sigA99D.segmentId));
    } catch (var_core_value_sig9EAB) {
      if (var_core_value_sig9EAB instanceof ir) return false;
      throw var_core_value_sig9EAB;
    }
    let var_core_value_sigDA56 = I(var_core_value_sigF6D5, var_core_value_sigA99D.segmentId);
    if (!var_core_value_sigDA56) return false;
    let var_core_value_sig8D74 = V(var_core_value_sigF003, var_core_value_sigF6D5.getUnitId(), var_core_value_sigDA56, var_core_value_sigB23E.actions, undefined, var_core_value_sigB23E.cursorOffset, Ar.id);
    return var_core_value_sig8D74 && var_core_value_sigE146.deserialize(var_core_value_sigF6D5.getUnitId(), var_core_value_sigB23E.nextMetadata), var_core_value_sig8D74;
  }
};
function jr(var_core_value_sigC3E8, var_core_value_sig3FAF1, var_core_value_sigC00C) {
  let {
    offset: var_core_value_sig080D,
    position: var_core_value_sigCDBC,
    segmentId: var_core_value_sig0F75
  } = var_core_value_sigC00C ?? {};
  if (typeof var_core_value_sig080D == "number") {
    let var_core_value_sigA5C3 = Mr(var_core_value_sigC3E8);
    return {
      offset: var_core_value_sig080D,
      position: "offset",
      segmentId: var_core_value_sig0F75 ?? (var_core_value_sigA5C3 == null ? undefined : var_core_value_sigA5C3.segmentId)
    };
  }
  if (var_core_value_sigCDBC === "selection") {
    let var_core_value_sig3A1E = (0, t.getContentInsertRange)(var_core_value_sigC3E8, var_core_value_sig3FAF1),
      var_core_value_sigDC92 = Mr(var_core_value_sigC3E8),
      var_core_value_sig3515 = var_core_value_sigDC92 != null && var_core_value_sigDC92.segmentId ? var_core_value_sigDC92 : var_core_value_sig3A1E ?? var_core_value_sigDC92;
    if ((var_core_value_sig3515 == null ? undefined : var_core_value_sig3515.startOffset) != null) return {
      offset: var_core_value_sig3515.startOffset,
      position: "offset",
      segmentId: var_core_value_sig0F75 ?? var_core_value_sig3515.segmentId
    };
  }
  if (var_core_value_sigCDBC === "offset") {
    let var_core_value_sigC2A0 = (0, t.getContentInsertRange)(var_core_value_sigC3E8, var_core_value_sig3FAF1),
      var_core_value_sig7C65 = Mr(var_core_value_sigC3E8),
      var_core_value_sig7F05 = var_core_value_sigC2A0 ?? var_core_value_sig7C65;
    if ((var_core_value_sig7F05 == null ? undefined : var_core_value_sig7F05.startOffset) != null) return {
      offset: var_core_value_sig7F05.startOffset,
      position: "offset",
      segmentId: var_core_value_sig0F75 ?? var_core_value_sig7F05.segmentId
    };
  }
  return {
    position: "documentEnd",
    segmentId: var_core_value_sig0F75
  };
}
function Mr(var_core_value_sig4B7F) {
  try {
    var var_core_value_sig17D6, var_core_value_sig8915;
    let var_core_value_sig41F3 = (var_core_value_sig17D6 = (var_core_value_sig8915 = var_core_value_sig4B7F.get(t.DocSelectionManagerService)).getActiveTextRange) == null ? undefined : var_core_value_sig17D6.call(var_core_value_sig8915);
    return var_core_value_sig41F3 ? {
      startOffset: var_core_value_sig41F3.startOffset,
      segmentId: var_core_value_sig41F3.segmentId
    } : null;
  } catch {
    return null;
  }
}
const Nr = {
    id: "docs-table.command.insert-title-row",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sigC88F, var_core_value_sig1AFA) => {
      let var_core_value_sigBCF5 = var_core_value_sigC88F.get(e.IUniverInstanceService),
        var_core_value_sig988A = var_core_value_sigC88F.get(e.ICommandService),
        var_core_value_sigFC02 = var_core_value_sigC88F.get(K),
        var_core_value_sigF71C = var_core_value_sigC88F.get(q),
        var_core_value_sigE634 = var_core_value_sigBCF5.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sigF74F = var_core_value_sigFC02.getCurrentSelection(),
        var_core_value_sig89D7 = (var_core_value_sig1AFA == null ? undefined : var_core_value_sig1AFA.tableId) ?? (var_core_value_sigF74F == null ? undefined : var_core_value_sigF74F.tableId);
      if (!var_core_value_sigE634 || !var_core_value_sig89D7) return false;
      let var_core_value_sigF2B0 = var_core_value_sigE634.getSnapshot(),
        var_core_value_sigD77A = P(var_core_value_sig1AFA, var_core_value_sigF74F),
        var_core_value_sigF2C2 = I(var_core_value_sigE634, var_core_value_sigD77A);
      if (!var_core_value_sigF2C2) return false;
      let var_core_value_sig2990 = mn(var_core_value_sigF2C2, var_core_value_sig89D7, H(var_core_value_sigF2B0, var_core_value_sigD77A));
      if (!var_core_value_sig2990) return false;
      let var_core_value_sigD300 = V(var_core_value_sig988A, var_core_value_sigE634.getUnitId(), var_core_value_sigF2C2, var_core_value_sig2990.actions);
      return var_core_value_sigD300 && var_core_value_sigF71C.setTitleRow(var_core_value_sigE634.getUnitId(), var_core_value_sig89D7, true), var_core_value_sigD300;
    }
  },
  Pr = {
    id: "docs-table.command.merge-cells",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig6F77, var_core_value_sigFA4B) => {
      let var_core_value_sig2AB0 = var_core_value_sig6F77.get(e.IUniverInstanceService),
        var_core_value_sig853D = var_core_value_sig6F77.get(e.ICommandService),
        var_core_value_sigD1F0 = var_core_value_sig6F77.get(K),
        var_core_value_sig3D4E = var_core_value_sig2AB0.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig79C0 = var_core_value_sigD1F0.getStableTableSelection(),
        var_core_value_sig173D = (var_core_value_sigFA4B == null ? undefined : var_core_value_sigFA4B.tableId) ?? (var_core_value_sig79C0 == null ? undefined : var_core_value_sig79C0.tableId),
        var_core_value_sig6F1A = F(var_core_value_sigFA4B, var_core_value_sig79C0);
      if (!var_core_value_sig3D4E || !var_core_value_sig173D || !var_core_value_sig6F1A) return false;
      let var_core_value_sig1802 = P(var_core_value_sigFA4B, var_core_value_sig79C0),
        var_core_value_sigCFA7 = I(var_core_value_sig3D4E, var_core_value_sig1802);
      if (!var_core_value_sigCFA7 || !y(var_core_value_sigCFA7, var_core_value_sig173D, var_core_value_sig6F1A)) return false;
      let var_core_value_sig31C2 = x({
        documentData: var_core_value_sigCFA7,
        tableId: var_core_value_sig173D,
        ...var_core_value_sig6F1A
      });
      if (!var_core_value_sig31C2) return false;
      let var_core_value_sigA677 = V(var_core_value_sig853D, var_core_value_sig3D4E.getUnitId(), var_core_value_sigCFA7, var_core_value_sig31C2.actions, {
        tableId: var_core_value_sig173D,
        segmentId: var_core_value_sig1802,
        ...var_core_value_sig31C2.range
      });
      return var_core_value_sigA677 && var_core_value_sigD1F0.setStructuralSelection({
        kind: "cell",
        tableId: var_core_value_sig173D,
        segmentId: var_core_value_sig1802,
        ...var_core_value_sig31C2.range
      }), var_core_value_sigA677;
    }
  },
  Fr = {
    id: "docs-table.command.move-columns",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sigC015, var_core_value_sigAEBC) => {
      if (!var_core_value_sigAEBC) return false;
      let var_core_value_sig366A = var_core_value_sigC015.get(e.IUniverInstanceService),
        var_core_value_sigA89C = var_core_value_sigC015.get(e.ICommandService),
        var_core_value_sigDD3E = var_core_value_sigC015.get(K),
        var_core_value_sig182B = var_core_value_sig366A.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig2A99 = var_core_value_sigDD3E.getCurrentSelection(),
        var_core_value_sig18A6 = var_core_value_sigAEBC.tableId ?? (var_core_value_sig2A99 == null ? undefined : var_core_value_sig2A99.tableId),
        var_core_value_sigA98B = var_core_value_sigAEBC.fromColumn ?? (var_core_value_sig2A99 == null ? undefined : var_core_value_sig2A99.startColumn);
      if (!var_core_value_sig182B || var_core_value_sig18A6 == null || var_core_value_sigA98B == null) return false;
      let var_core_value_sig458C = var_core_value_sig182B.getSnapshot(),
        var_core_value_sig8DEC = P(var_core_value_sigAEBC, var_core_value_sig2A99),
        var_core_value_sig522F = I(var_core_value_sig182B, var_core_value_sig8DEC);
      if (!var_core_value_sig522F) return false;
      let var_core_value_sigD718 = var_core_value_sigAEBC.count ?? (var_core_value_sig2A99 ? Math.max(1, var_core_value_sig2A99.endColumn - var_core_value_sig2A99.startColumn + 1) : 1),
        var_core_value_sig41CF = rn(var_core_value_sig522F, var_core_value_sig18A6, var_core_value_sigA98B, var_core_value_sigAEBC.toColumn, var_core_value_sigD718, var_core_value_sigAEBC.position, H(var_core_value_sig458C, var_core_value_sig8DEC));
      if (!var_core_value_sig41CF) return false;
      let var_core_value_sig1EFD = V(var_core_value_sigA89C, var_core_value_sig182B.getUnitId(), var_core_value_sig522F, var_core_value_sig41CF.actions);
      return var_core_value_sig1EFD && var_core_value_sig2A99 && var_core_value_sigDD3E.setStructuralSelection({
        ...var_core_value_sig2A99,
        tableId: var_core_value_sig18A6,
        startColumn: var_core_value_sig41CF.cursorColumn,
        endColumn: var_core_value_sig41CF.cursorColumn + var_core_value_sigD718 - 1
      }), var_core_value_sig1EFD;
    }
  },
  Ir = {
    id: "docs-table.command.move-rows",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig38BB, var_core_value_sig017C) => {
      if (!var_core_value_sig017C) return false;
      let var_core_value_sig44BC = var_core_value_sig38BB.get(e.IUniverInstanceService),
        var_core_value_sigAB7B = var_core_value_sig38BB.get(e.ICommandService),
        var_core_value_sig55EE = var_core_value_sig38BB.get(K),
        var_core_value_sigE9F6 = var_core_value_sig44BC.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig3BA9 = var_core_value_sig55EE.getCurrentSelection(),
        var_core_value_sigE230 = var_core_value_sig017C.tableId ?? (var_core_value_sig3BA9 == null ? undefined : var_core_value_sig3BA9.tableId),
        var_core_value_sig5AC8 = var_core_value_sig017C.fromRow ?? (var_core_value_sig3BA9 == null ? undefined : var_core_value_sig3BA9.startRow);
      if (!var_core_value_sigE9F6 || var_core_value_sigE230 == null || var_core_value_sig5AC8 == null) return false;
      let var_core_value_sigE492 = var_core_value_sigE9F6.getSnapshot(),
        var_core_value_sig3465 = P(var_core_value_sig017C, var_core_value_sig3BA9),
        var_core_value_sig38DD = I(var_core_value_sigE9F6, var_core_value_sig3465);
      if (!var_core_value_sig38DD) return false;
      let var_core_value_sig89AE = var_core_value_sig017C.count ?? (var_core_value_sig3BA9 ? Math.max(1, var_core_value_sig3BA9.endRow - var_core_value_sig3BA9.startRow + 1) : 1),
        var_core_value_sig3A69 = nn(var_core_value_sig38DD, var_core_value_sigE230, var_core_value_sig5AC8, var_core_value_sig017C.toRow, var_core_value_sig89AE, var_core_value_sig017C.position, H(var_core_value_sigE492, var_core_value_sig3465));
      if (!var_core_value_sig3A69) return false;
      let var_core_value_sigD64C = V(var_core_value_sigAB7B, var_core_value_sigE9F6.getUnitId(), var_core_value_sig38DD, var_core_value_sig3A69.actions);
      return var_core_value_sigD64C && var_core_value_sig3BA9 && var_core_value_sig55EE.setStructuralSelection({
        ...var_core_value_sig3BA9,
        tableId: var_core_value_sigE230,
        startRow: var_core_value_sig3A69.cursorRow,
        endRow: var_core_value_sig3A69.cursorRow + var_core_value_sig89AE - 1
      }), var_core_value_sigD64C;
    }
  },
  Lr = {
    id: "docs-table.command.move-table",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig3B0B, var_core_value_sig1E7C) => {
      if (!var_core_value_sig1E7C) return false;
      let var_core_value_sigD3C4 = var_core_value_sig3B0B.get(e.IUniverInstanceService),
        var_core_value_sigBC8B = var_core_value_sig3B0B.get(e.ICommandService),
        var_core_value_sigEE2E = var_core_value_sig3B0B.get(K),
        var_core_value_sigCF06 = var_core_value_sigD3C4.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig6BCD = var_core_value_sigEE2E.getCurrentSelection(),
        var_core_value_sigC664 = var_core_value_sig1E7C.tableId ?? (var_core_value_sig6BCD == null ? undefined : var_core_value_sig6BCD.tableId);
      if (!var_core_value_sigCF06 || !var_core_value_sigC664) return false;
      let var_core_value_sig1B7B = var_core_value_sigCF06.getSnapshot(),
        var_core_value_sig1F31 = P(var_core_value_sig1E7C, var_core_value_sig6BCD),
        var_core_value_sigEA82 = I(var_core_value_sigCF06, var_core_value_sig1F31);
      if (!var_core_value_sigEA82) return false;
      if (var_core_value_sig1E7C.targetOffset == null) {
        let var_core_value_sigF455 = Ut(var_core_value_sigEA82, var_core_value_sigC664, var_core_value_sig1E7C.deltaX ?? 0, var_core_value_sig1E7C.deltaY ?? 0);
        return V(var_core_value_sigBC8B, var_core_value_sigCF06.getUnitId(), var_core_value_sigEA82, var_core_value_sigF455);
      }
      let var_core_value_sig65BB = Wt(var_core_value_sigEA82, var_core_value_sigC664, var_core_value_sig1E7C.targetOffset, H(var_core_value_sig1B7B, var_core_value_sig1F31));
      return V(var_core_value_sigBC8B, var_core_value_sigCF06.getUnitId(), var_core_value_sigEA82, var_core_value_sig65BB);
    }
  },
  Rr = {
    id: "docs-table.command.resize-column",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig69B1, var_core_value_sigAEDE) => {
      var var_core_value_sig139C;
      if (!var_core_value_sigAEDE) return false;
      let var_core_value_sigF2D6 = var_core_value_sig69B1.get(e.IUniverInstanceService),
        var_core_value_sig810E = var_core_value_sig69B1.get(e.ICommandService),
        var_core_value_sigABB1 = var_core_value_sig69B1.get(K),
        var_core_value_sig3F70 = var_core_value_sigF2D6.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig9F91 = var_core_value_sigABB1.getCurrentSelection(),
        var_core_value_sigC9C8 = var_core_value_sigAEDE.tableId ?? (var_core_value_sig9F91 == null ? undefined : var_core_value_sig9F91.tableId),
        var_core_value_sigC444 = var_core_value_sigAEDE.column ?? (var_core_value_sig9F91 == null ? undefined : var_core_value_sig9F91.startColumn);
      if (!var_core_value_sig3F70 || var_core_value_sigC9C8 == null || var_core_value_sigC444 == null) return false;
      let var_core_value_sig4B40 = I(var_core_value_sig3F70, P(var_core_value_sigAEDE, var_core_value_sig9F91));
      return !var_core_value_sig4B40 || !((var_core_value_sig139C = var_core_value_sig4B40.tableSource) != null && (var_core_value_sig139C = var_core_value_sig139C[var_core_value_sigC9C8]) != null && var_core_value_sig139C.tableColumns[var_core_value_sigC444]) ? false : V(var_core_value_sig810E, var_core_value_sig3F70.getUnitId(), var_core_value_sig4B40, Ht(var_core_value_sig4B40, var_core_value_sigC9C8, var_core_value_sigC444, var_core_value_sigAEDE.width));
    }
  },
  zr = {
    id: "docs-table.command.resize-row",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig9F6D, var_core_value_sigE1A2) => {
      var var_core_value_sig4767;
      if (!var_core_value_sigE1A2) return false;
      let var_core_value_sig2591 = var_core_value_sig9F6D.get(e.IUniverInstanceService),
        var_core_value_sig7C12 = var_core_value_sig9F6D.get(e.ICommandService),
        var_core_value_sig8EC51 = var_core_value_sig9F6D.get(K),
        var_core_value_sig4B1B = var_core_value_sig2591.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig14C3 = var_core_value_sig8EC51.getCurrentSelection(),
        var_core_value_sig95A8 = var_core_value_sigE1A2.tableId ?? (var_core_value_sig14C3 == null ? undefined : var_core_value_sig14C3.tableId),
        var_core_value_sig3F90 = var_core_value_sigE1A2.row ?? (var_core_value_sig14C3 == null ? undefined : var_core_value_sig14C3.startRow);
      if (!var_core_value_sig4B1B || var_core_value_sig95A8 == null || var_core_value_sig3F90 == null) return false;
      let var_core_value_sigB489 = I(var_core_value_sig4B1B, P(var_core_value_sigE1A2, var_core_value_sig14C3));
      return !var_core_value_sigB489 || !((var_core_value_sig4767 = var_core_value_sigB489.tableSource) != null && (var_core_value_sig4767 = var_core_value_sig4767[var_core_value_sig95A8]) != null && var_core_value_sig4767.tableRows[var_core_value_sig3F90]) ? false : V(var_core_value_sig7C12, var_core_value_sig4B1B.getUnitId(), var_core_value_sigB489, Kt(var_core_value_sigB489, var_core_value_sig95A8, var_core_value_sig3F90, var_core_value_sigE1A2.height, var_core_value_sigE1A2.hRule));
    }
  },
  Br = {
    id: "docs-table.command.set-column-type",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig76E7, var_core_value_sig7E7F) => {
      if (!var_core_value_sig7E7F) return false;
      let var_core_value_sig7947 = var_core_value_sig76E7.get(e.IUniverInstanceService),
        var_core_value_sig7FEC = var_core_value_sig76E7.get(K),
        var_core_value_sig73D2 = var_core_value_sig76E7.get(q),
        var_core_value_sig6BDA = var_core_value_sig7947.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig3A251 = var_core_value_sig7FEC.getCurrentSelection(),
        var_core_value_sigCBAA = var_core_value_sig7E7F.tableId ?? (var_core_value_sig3A251 == null ? undefined : var_core_value_sig3A251.tableId),
        var_core_value_sigC096 = var_core_value_sig7E7F.column ?? (var_core_value_sig3A251 == null ? undefined : var_core_value_sig3A251.startColumn);
      return !var_core_value_sig6BDA || !var_core_value_sigCBAA || var_core_value_sigC096 == null ? false : (var_core_value_sig73D2.setColumnType(var_core_value_sig6BDA.getUnitId(), var_core_value_sigCBAA, var_core_value_sigC096, var_core_value_sig7E7F.config), true);
    }
  },
  Vr = {
    id: "docs-table.command.set-header-row-count",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig6140, var_core_value_sigDD84) => {
      let var_core_value_sig7BA5 = var_core_value_sig6140.get(e.IUniverInstanceService),
        var_core_value_sig543F = var_core_value_sig6140.get(e.ICommandService),
        var_core_value_sigBF30 = var_core_value_sig6140.get(K),
        var_core_value_sigAA0E = var_core_value_sig6140.get(q),
        var_core_value_sig3747 = var_core_value_sig7BA5.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig9B6A = var_core_value_sigBF30.getCurrentSelection();
      if (!var_core_value_sig3747) return false;
      let var_core_value_sig7BFA = (var_core_value_sigDD84 == null ? undefined : var_core_value_sigDD84.tableId) ?? (var_core_value_sig9B6A == null ? undefined : var_core_value_sig9B6A.tableId),
        var_core_value_sig09FA = (var_core_value_sigDD84 == null ? undefined : var_core_value_sigDD84.row) ?? (var_core_value_sig9B6A == null ? undefined : var_core_value_sig9B6A.endRow);
      if (var_core_value_sig7BFA == null || (var_core_value_sigDD84 == null ? undefined : var_core_value_sigDD84.headerRowCount) == null && var_core_value_sig09FA == null) return false;
      let var_core_value_sig6881 = (var_core_value_sigDD84 == null ? undefined : var_core_value_sigDD84.headerRowCount) ?? var_core_value_sig09FA + 1,
        var_core_value_sigAB94 = I(var_core_value_sig3747, P(var_core_value_sigDD84, var_core_value_sig9B6A));
      if (!var_core_value_sigAB94) return false;
      let var_core_value_sigEE05 = Yt(var_core_value_sigAB94, var_core_value_sig7BFA, var_core_value_sig6881);
      if (!var_core_value_sigEE05) return false;
      let var_core_value_sig0F0E = V(var_core_value_sig543F, var_core_value_sig3747.getUnitId(), var_core_value_sigAB94, var_core_value_sigEE05.actions);
      return var_core_value_sig0F0E && var_core_value_sigAA0E.setHeaderRowCount(var_core_value_sig3747.getUnitId(), var_core_value_sig7BFA, var_core_value_sigEE05.headerRowCount), var_core_value_sig0F0E;
    }
  },
  Hr = {
    id: "docs-table.command.set-table-background",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig3A40, var_core_value_sig2377) => {
      let var_core_value_sig4EEF = (var_core_value_sig2377 == null ? undefined : var_core_value_sig2377.color) ?? (var_core_value_sig2377 == null ? undefined : var_core_value_sig2377.value);
      if (var_core_value_sig4EEF === undefined) return false;
      let var_core_value_sigC58E = var_core_value_sig3A40.get(e.IUniverInstanceService),
        var_core_value_sig9063 = var_core_value_sig3A40.get(e.ICommandService),
        var_core_value_sig99CE = var_core_value_sig3A40.get(K),
        var_core_value_sigFB15 = var_core_value_sigC58E.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig9AF5 = Ur(var_core_value_sig99CE),
        var_core_value_sigCD2E = (var_core_value_sig2377 == null ? undefined : var_core_value_sig2377.tableId) ?? (var_core_value_sig9AF5 == null ? undefined : var_core_value_sig9AF5.tableId),
        var_core_value_sig60CE = F(var_core_value_sig2377, var_core_value_sig9AF5);
      if (!var_core_value_sigFB15 || !var_core_value_sigCD2E || !var_core_value_sig60CE) return false;
      let var_core_value_sigFA1B = P(var_core_value_sig2377, var_core_value_sig9AF5),
        var_core_value_sig5FEF = I(var_core_value_sigFB15, var_core_value_sigFA1B);
      if (!var_core_value_sig5FEF || !Gr(var_core_value_sig5FEF, var_core_value_sigCD2E, var_core_value_sig60CE)) return false;
      let var_core_value_sigD48C = Wr(var_core_value_sig5FEF, {
          tableId: var_core_value_sigCD2E,
          ...var_core_value_sig60CE,
          value: var_core_value_sig4EEF
        }),
        var_core_value_sig41E9 = V(var_core_value_sig9063, var_core_value_sigFB15.getUnitId(), var_core_value_sig5FEF, var_core_value_sigD48C, {
          tableId: var_core_value_sigCD2E,
          segmentId: var_core_value_sigFA1B,
          ...var_core_value_sig60CE
        });
      return var_core_value_sig41E9 && var_core_value_sig99CE.setStructuralSelection({
        kind: (var_core_value_sig9AF5 == null ? undefined : var_core_value_sig9AF5.kind) ?? "range",
        tableId: var_core_value_sigCD2E,
        segmentId: var_core_value_sigFA1B,
        ...var_core_value_sig60CE
      }), var_core_value_sig41E9;
    }
  };
function Ur(var_core_value_sig3807) {
  var var_core_value_sig5409;
  return ((var_core_value_sig5409 = var_core_value_sig3807.getStableTableSelection) == null ? undefined : var_core_value_sig5409.call(var_core_value_sig3807)) ?? var_core_value_sig3807.getCurrentSelection();
}
function Wr(var_core_value_sig680F, var_core_value_sig2E36) {
  var var_core_value_sigBA94;
  let var_core_value_sigA847 = (var_core_value_sigBA94 = var_core_value_sig680F.tableSource) == null ? undefined : var_core_value_sigBA94[var_core_value_sig2E36.tableId],
    var_core_value_sig1AB4 = F(var_core_value_sig2E36);
  if (!var_core_value_sigA847 || !var_core_value_sig1AB4) return null;
  let var_core_value_sig7272 = e.JSONX["getInstance"](),
    var_core_value_sig885F = [],
    var_core_value_sigB7C7 = Kr(var_core_value_sig1AB4);
  for (let var_core_value_sig6E78 = var_core_value_sigB7C7.startRow; var_core_value_sig6E78 <= var_core_value_sigB7C7.endRow; var_core_value_sig6E78++) for (let var_core_value_sigEAE2 = var_core_value_sigB7C7.startColumn; var_core_value_sigEAE2 <= var_core_value_sigB7C7.endColumn; var_core_value_sigEAE2++) {
    var var_core_value_sig6934;
    let var_core_value_sigF230 = (var_core_value_sig6934 = var_core_value_sigA847.tableRows[var_core_value_sig6E78]) == null ? undefined : var_core_value_sig6934.tableCells[var_core_value_sigEAE2];
    if (!var_core_value_sigF230) return null;
    let var_core_value_sig09B8 = ["tableSource", var_core_value_sig2E36.tableId, "tableRows", var_core_value_sig6E78, "tableCells", var_core_value_sigEAE2, "backgroundColor"],
      var_core_value_sig6F91 = var_core_value_sig2E36.value == null ? undefined : {
        rgb: var_core_value_sig2E36.value
      };
    JSON.stringify(var_core_value_sigF230.backgroundColor) !== JSON.stringify(var_core_value_sig6F91) && (var_core_value_sigF230.backgroundColor === undefined && var_core_value_sig6F91 !== undefined ? var_core_value_sig885F.push(var_core_value_sig7272.insertOp([...var_core_value_sig09B8], var_core_value_sig6F91)) : var_core_value_sig6F91 === undefined ? var_core_value_sig885F.push(var_core_value_sig7272.removeOp([...var_core_value_sig09B8], var_core_value_sigF230.backgroundColor)) : var_core_value_sig885F.push(var_core_value_sig7272.replaceOp([...var_core_value_sig09B8], var_core_value_sigF230.backgroundColor, var_core_value_sig6F91)));
  }
  return var_core_value_sig885F.reduce((var_core_value_sigB3EE, var_core_value_sigC50A) => e.JSONX["compose"](var_core_value_sigB3EE, var_core_value_sigC50A), null);
}
function Gr(var_core_value_sig2842, var_core_value_sigA5A3, var_core_value_sig590F) {
  var var_core_value_sigECA2;
  let var_core_value_sigCAC4 = (var_core_value_sigECA2 = var_core_value_sig2842.tableSource) == null ? undefined : var_core_value_sigECA2[var_core_value_sigA5A3];
  if (!var_core_value_sigCAC4) return false;
  let var_core_value_sig2017 = Kr(var_core_value_sig590F);
  for (let var_core_value_sig11D0 = var_core_value_sig2017.startRow; var_core_value_sig11D0 <= var_core_value_sig2017.endRow; var_core_value_sig11D0++) for (let var_core_value_sigE68A = var_core_value_sig2017.startColumn; var_core_value_sigE68A <= var_core_value_sig2017.endColumn; var_core_value_sigE68A++) {
    var var_core_value_sig49A4;
    if (!((var_core_value_sig49A4 = var_core_value_sigCAC4.tableRows[var_core_value_sig11D0]) != null && var_core_value_sig49A4.tableCells[var_core_value_sigE68A])) return false;
  }
  return true;
}
function Kr(var_core_value_sigA166) {
  return {
    startRow: Math.min(var_core_value_sigA166.startRow, var_core_value_sigA166.endRow),
    endRow: Math.max(var_core_value_sigA166.startRow, var_core_value_sigA166.endRow),
    startColumn: Math.min(var_core_value_sigA166.startColumn, var_core_value_sigA166.endColumn),
    endColumn: Math.max(var_core_value_sigA166.startColumn, var_core_value_sigA166.endColumn)
  };
}
let qr = function (var_core_value_sigEB84) {
  return var_core_value_sigEB84.All = "all", var_core_value_sigEB84.Inner = "inner", var_core_value_sigEB84.Outer = "outer", var_core_value_sigEB84.Top = "top", var_core_value_sigEB84.Bottom = "bottom", var_core_value_sigEB84.Left = "left", var_core_value_sigEB84.Right = "right", var_core_value_sigEB84.None = "none", var_core_value_sigEB84.InnerHorizontal = "innerHorizontal", var_core_value_sigEB84.InnerVertical = "innerVertical", var_core_value_sigEB84;
}({});
const Jr = {
    color: {
      rgb: "#1f1f1f"
    },
    width: {
      v: 1
    }
  },
  J = {
    color: {
      rgb: "transparent"
    },
    width: {
      v: 0
    }
  };
function Yr(var_core_value_sig3B17) {
  var var_core_value_sig78681;
  let var_core_value_sig9AFE = p(var_core_value_sig3B17.documentData, {
      cloneBody: false,
      tableIds: [var_core_value_sig3B17.tableId]
    }),
    var_core_value_sig244E = (var_core_value_sig78681 = var_core_value_sig9AFE.tableSource) == null ? undefined : var_core_value_sig78681[var_core_value_sig3B17.tableId];
  if (!var_core_value_sig244E) throw Error("[DocsTable]: Table " + var_core_value_sig3B17.tableId + "\x20is\x20not\x20found.");
  let var_core_value_sigD4E9 = oi(var_core_value_sig3B17),
    var_core_value_sig969F = var_core_value_sig3B17.border ?? Jr;
  for (let var_core_value_sigB8ED = var_core_value_sigD4E9.startRow; var_core_value_sigB8ED <= var_core_value_sigD4E9.endRow; var_core_value_sigB8ED++) for (let var_core_value_sig3E68 = var_core_value_sigD4E9.startColumn; var_core_value_sig3E68 <= var_core_value_sigD4E9.endColumn; var_core_value_sig3E68++) {
    var var_core_value_sig6C52;
    let var_core_value_sigF9C7 = (var_core_value_sig6C52 = var_core_value_sig244E.tableRows[var_core_value_sigB8ED]) == null ? undefined : var_core_value_sig6C52.tableCells[var_core_value_sig3E68];
    if (!var_core_value_sigF9C7) throw Error("[DocsTable]:\x20Cell\x20range\x20is\x20out\x20of\x20bounds.");
    var_core_value_sigF9C7.borderTop = ni(var_core_value_sig3B17.preset, var_core_value_sigB8ED, var_core_value_sigD4E9) ? var_core_value_sig969F : J, var_core_value_sigF9C7.borderBottom = ri(var_core_value_sig3B17.preset, var_core_value_sigB8ED, var_core_value_sigD4E9) ? var_core_value_sig969F : J, var_core_value_sigF9C7.borderLeft = ii(var_core_value_sig3B17.preset, var_core_value_sig3E68, var_core_value_sigD4E9) ? var_core_value_sig969F : J, var_core_value_sigF9C7.borderRight = ai(var_core_value_sig3B17.preset, var_core_value_sig3E68, var_core_value_sigD4E9) ? var_core_value_sig969F : J;
  }
  return ci(var_core_value_sig244E, var_core_value_sigD4E9, {
    top: ni(var_core_value_sig3B17.preset, var_core_value_sigD4E9.startRow, var_core_value_sigD4E9) ? var_core_value_sig969F : J,
    left: ii(var_core_value_sig3B17.preset, var_core_value_sigD4E9.startColumn, var_core_value_sigD4E9) ? var_core_value_sig969F : J
  }), {
    nextDocumentData: var_core_value_sig9AFE
  };
}
function Xr(var_core_value_sig3A441) {
  var var_core_value_sig9631;
  let var_core_value_sig8407 = (var_core_value_sig9631 = var_core_value_sig3A441.documentData["tableSource"]) == null ? undefined : var_core_value_sig9631[var_core_value_sig3A441.tableId];
  if (!var_core_value_sig8407) throw Error("[DocsTable]: Table " + var_core_value_sig3A441.tableId + " is not found.");
  let var_core_value_sig635F = oi(var_core_value_sig3A441),
    var_core_value_sig79E0 = var_core_value_sig3A441.border ?? Jr,
    var_core_value_sig1E28 = [];
  for (let var_core_value_sig8EAE = var_core_value_sig635F.startRow; var_core_value_sig8EAE <= var_core_value_sig635F.endRow; var_core_value_sig8EAE++) for (let var_core_value_sigF4C5 = var_core_value_sig635F.startColumn; var_core_value_sigF4C5 <= var_core_value_sig635F.endColumn; var_core_value_sigF4C5++) {
    var var_core_value_sigEEC3;
    let var_core_value_sig8895 = (var_core_value_sigEEC3 = var_core_value_sig8407.tableRows[var_core_value_sig8EAE]) == null ? undefined : var_core_value_sigEEC3.tableCells[var_core_value_sigF4C5];
    if (!var_core_value_sig8895) throw Error("[DocsTable]: Cell range is out of bounds.");
    X(var_core_value_sig1E28, Y(var_core_value_sig3A441.tableId, var_core_value_sig8EAE, var_core_value_sigF4C5, "borderTop"), var_core_value_sig8895.borderTop, ni(var_core_value_sig3A441.preset, var_core_value_sig8EAE, var_core_value_sig635F) ? var_core_value_sig79E0 : J), X(var_core_value_sig1E28, Y(var_core_value_sig3A441.tableId, var_core_value_sig8EAE, var_core_value_sigF4C5, "borderBottom"), var_core_value_sig8895.borderBottom, ri(var_core_value_sig3A441.preset, var_core_value_sig8EAE, var_core_value_sig635F) ? var_core_value_sig79E0 : J), X(var_core_value_sig1E28, Y(var_core_value_sig3A441.tableId, var_core_value_sig8EAE, var_core_value_sigF4C5, "borderLeft"), var_core_value_sig8895.borderLeft, ii(var_core_value_sig3A441.preset, var_core_value_sigF4C5, var_core_value_sig635F) ? var_core_value_sig79E0 : J), X(var_core_value_sig1E28, Y(var_core_value_sig3A441.tableId, var_core_value_sig8EAE, var_core_value_sigF4C5, "borderRight"), var_core_value_sig8895.borderRight, ai(var_core_value_sig3A441.preset, var_core_value_sigF4C5, var_core_value_sig635F) ? var_core_value_sig79E0 : J);
  }
  return $r(var_core_value_sig1E28, var_core_value_sig8407, var_core_value_sig3A441.tableId, var_core_value_sig635F, {
    top: ni(var_core_value_sig3A441.preset, var_core_value_sig635F.startRow, var_core_value_sig635F) ? var_core_value_sig79E0 : J,
    left: ii(var_core_value_sig3A441.preset, var_core_value_sig635F.startColumn, var_core_value_sig635F) ? var_core_value_sig79E0 : J
  }), ei(var_core_value_sig1E28);
}
function Zr(var_core_value_sigFAEC) {
  var var_core_value_sig1282;
  let var_core_value_sig80D0 = p(var_core_value_sigFAEC.documentData, {
      cloneBody: false,
      tableIds: [var_core_value_sigFAEC.tableId]
    }),
    var_core_value_sig6CEE = (var_core_value_sig1282 = var_core_value_sig80D0.tableSource) == null ? undefined : var_core_value_sig1282[var_core_value_sigFAEC.tableId];
  if (!var_core_value_sig6CEE) throw Error("[DocsTable]: Table " + var_core_value_sigFAEC.tableId + "\x20is\x20not\x20found.");
  return si(var_core_value_sigFAEC, (var_core_value_sig1CDD, var_core_value_sig0DB11) => {
    var var_core_value_sig68A2;
    let var_core_value_sigCC17 = (var_core_value_sig68A2 = var_core_value_sig6CEE.tableRows[var_core_value_sig1CDD]) == null ? undefined : var_core_value_sig68A2.tableCells[var_core_value_sig0DB11];
    if (!var_core_value_sigCC17) throw Error("[DocsTable]:\x20Cell\x20range\x20is\x20out\x20of\x20bounds.");
    if (var_core_value_sigFAEC.color == null) {
      delete var_core_value_sigCC17.backgroundColor;
      return;
    }
    var_core_value_sigCC17.backgroundColor = {
      rgb: var_core_value_sigFAEC.color
    };
  }), {
    nextDocumentData: var_core_value_sig80D0
  };
}
function Qr(var_core_value_sig4B271) {
  var var_core_value_sig153F;
  let var_core_value_sigC847 = (var_core_value_sig153F = var_core_value_sig4B271.documentData["tableSource"]) == null ? undefined : var_core_value_sig153F[var_core_value_sig4B271.tableId];
  if (!var_core_value_sigC847) throw Error("[DocsTable]: Table " + var_core_value_sig4B271.tableId + " is not found.");
  let var_core_value_sig114E = [];
  return si(var_core_value_sig4B271, (var_core_value_sig32AE, var_core_value_sigC753) => {
    var var_core_value_sigFFD1;
    let var_core_value_sig81AE = (var_core_value_sigFFD1 = var_core_value_sigC847.tableRows[var_core_value_sig32AE]) == null ? undefined : var_core_value_sigFFD1.tableCells[var_core_value_sigC753];
    if (!var_core_value_sig81AE) throw Error("[DocsTable]: Cell range is out of bounds.");
    X(var_core_value_sig114E, Y(var_core_value_sig4B271.tableId, var_core_value_sig32AE, var_core_value_sigC753, "borderTop"), var_core_value_sig81AE.borderTop, Z(var_core_value_sig81AE.borderTop, var_core_value_sig4B271.border)), X(var_core_value_sig114E, Y(var_core_value_sig4B271.tableId, var_core_value_sig32AE, var_core_value_sigC753, "borderBottom"), var_core_value_sig81AE.borderBottom, Z(var_core_value_sig81AE.borderBottom, var_core_value_sig4B271.border)), X(var_core_value_sig114E, Y(var_core_value_sig4B271.tableId, var_core_value_sig32AE, var_core_value_sigC753, "borderLeft"), var_core_value_sig81AE.borderLeft, Z(var_core_value_sig81AE.borderLeft, var_core_value_sig4B271.border)), X(var_core_value_sig114E, Y(var_core_value_sig4B271.tableId, var_core_value_sig32AE, var_core_value_sigC753, "borderRight"), var_core_value_sig81AE.borderRight, Z(var_core_value_sig81AE.borderRight, var_core_value_sig4B271.border));
  }), $r(var_core_value_sig114E, var_core_value_sigC847, var_core_value_sig4B271.tableId, oi(var_core_value_sig4B271), {
    top: var_core_value_sig4B271.border,
    left: var_core_value_sig4B271.border,
    merge: true
  }), ei(var_core_value_sig114E);
}
function $r(var_core_value_sig88EA, var_core_value_sig4E97, var_core_value_sigBE44, var_core_value_sigE675, var_core_value_sig4346) {
  if (var_core_value_sigE675.startRow > 0) {
    let var_core_value_sigF79F = var_core_value_sig4E97.tableRows[var_core_value_sigE675.startRow - 1];
    for (let var_core_value_sig5410 = var_core_value_sigE675.startColumn; var_core_value_sig5410 <= var_core_value_sigE675.endColumn; var_core_value_sig5410++) {
      let var_core_value_sigC80B = var_core_value_sigF79F == null ? undefined : var_core_value_sigF79F.tableCells[var_core_value_sig5410];
      if (!var_core_value_sigC80B) throw Error("[DocsTable]: Cell range is out of bounds.");
      X(var_core_value_sig88EA, Y(var_core_value_sigBE44, var_core_value_sigE675.startRow - 1, var_core_value_sig5410, "borderBottom"), var_core_value_sigC80B.borderBottom, var_core_value_sig4346.merge ? Z(var_core_value_sigC80B.borderBottom, var_core_value_sig4346.top) : var_core_value_sig4346.top);
    }
  }
  if (var_core_value_sigE675.startColumn > 0) for (let var_core_value_sig0E54 = var_core_value_sigE675.startRow; var_core_value_sig0E54 <= var_core_value_sigE675.endRow; var_core_value_sig0E54++) {
    var var_core_value_sigB49C;
    let var_core_value_sig492F = (var_core_value_sigB49C = var_core_value_sig4E97.tableRows[var_core_value_sig0E54]) == null ? undefined : var_core_value_sigB49C.tableCells[var_core_value_sigE675.startColumn - 1];
    if (!var_core_value_sig492F) throw Error("[DocsTable]: Cell range is out of bounds.");
    X(var_core_value_sig88EA, Y(var_core_value_sigBE44, var_core_value_sig0E54, var_core_value_sigE675.startColumn - 1, "borderRight"), var_core_value_sig492F.borderRight, var_core_value_sig4346.merge ? Z(var_core_value_sig492F.borderRight, var_core_value_sig4346.left) : var_core_value_sig4346.left);
  }
}
function Y(var_core_value_sigA044, var_core_value_sigD2F3, var_core_value_sig27CD, var_core_value_sig8977) {
  return ["tableSource", var_core_value_sigA044, "tableRows", var_core_value_sigD2F3, "tableCells", var_core_value_sig27CD, var_core_value_sig8977];
}
function X(var_core_value_sigE931, var_core_value_sig9F9C, var_core_value_sig0728, var_core_value_sigDC83) {
  if (JSON.stringify(var_core_value_sig0728) === JSON.stringify(var_core_value_sigDC83)) return;
  let var_core_value_sig56A8 = e.JSONX["getInstance"]();
  if (var_core_value_sig0728 === undefined) {
    var_core_value_sigE931.push(var_core_value_sig56A8.insertOp(var_core_value_sig9F9C, ti(var_core_value_sigDC83)));
    return;
  }
  if (var_core_value_sigDC83 === undefined) {
    var_core_value_sigE931.push(var_core_value_sig56A8.removeOp(var_core_value_sig9F9C, var_core_value_sig0728));
    return;
  }
  var_core_value_sigE931.push(var_core_value_sig56A8.replaceOp(var_core_value_sig9F9C, var_core_value_sig0728, ti(var_core_value_sigDC83)));
}
function ei(var_core_value_sigF487) {
  return var_core_value_sigF487.reduce((var_core_value_sig3B171, var_core_value_sig6C4A) => e.JSONX["compose"](var_core_value_sig3B171, var_core_value_sig6C4A), null);
}
function ti(var_core_value_sigC62E) {
  return Array.isArray(var_core_value_sigC62E) ? var_core_value_sigC62E.map(var_core_value_sig73D9 => ti(var_core_value_sig73D9)) : !var_core_value_sigC62E || typeof var_core_value_sigC62E != "object" ? var_core_value_sigC62E : Object.fromEntries(Object.entries(var_core_value_sigC62E).map(([var_core_value_sigEAF8, var_core_value_sig0455]) => [var_core_value_sigEAF8, ti(var_core_value_sig0455)]));
}
function ni(var_core_value_sigCD50, var_core_value_sig51C4, var_core_value_sigEECD) {
  return var_core_value_sigCD50 === "all" || var_core_value_sigCD50 === "top" || var_core_value_sigCD50 === "outer" && var_core_value_sig51C4 === var_core_value_sigEECD.startRow || var_core_value_sigCD50 === "innerHorizontal" && var_core_value_sig51C4 > var_core_value_sigEECD.startRow || var_core_value_sigCD50 === "inner" && var_core_value_sig51C4 > var_core_value_sigEECD.startRow;
}
function ri(var_core_value_sigB655, var_core_value_sigF30A, var_core_value_sigD81A) {
  return var_core_value_sigB655 === "all" || var_core_value_sigB655 === "bottom" || var_core_value_sigB655 === "outer" && var_core_value_sigF30A === var_core_value_sigD81A.endRow;
}
function ii(var_core_value_sigBE17, var_core_value_sigBB5E, var_core_value_sigB4401) {
  return var_core_value_sigBE17 === "all" || var_core_value_sigBE17 === "left" || var_core_value_sigBE17 === "outer" && var_core_value_sigBB5E === var_core_value_sigB4401.startColumn || var_core_value_sigBE17 === "innerVertical" && var_core_value_sigBB5E > var_core_value_sigB4401.startColumn || var_core_value_sigBE17 === "inner" && var_core_value_sigBB5E > var_core_value_sigB4401.startColumn;
}
function ai(var_core_value_sig9D0F, var_core_value_sig0354, var_core_value_sig12F4) {
  return var_core_value_sig9D0F === "all" || var_core_value_sig9D0F === "right" || var_core_value_sig9D0F === "outer" && var_core_value_sig0354 === var_core_value_sig12F4.endColumn;
}
function oi(var_core_value_sigDCEC) {
  return {
    startRow: Math.min(var_core_value_sigDCEC.startRow, var_core_value_sigDCEC.endRow),
    endRow: Math.max(var_core_value_sigDCEC.startRow, var_core_value_sigDCEC.endRow),
    startColumn: Math.min(var_core_value_sigDCEC.startColumn, var_core_value_sigDCEC.endColumn),
    endColumn: Math.max(var_core_value_sigDCEC.startColumn, var_core_value_sigDCEC.endColumn)
  };
}
function si(var_core_value_sigB5C8, var_core_value_sig8320) {
  let var_core_value_sig1C1B = oi(var_core_value_sigB5C8);
  for (let var_core_value_sig737C = var_core_value_sig1C1B.startRow; var_core_value_sig737C <= var_core_value_sig1C1B.endRow; var_core_value_sig737C++) for (let var_core_value_sig8EA0 = var_core_value_sig1C1B.startColumn; var_core_value_sig8EA0 <= var_core_value_sig1C1B.endColumn; var_core_value_sig8EA0++) var_core_value_sig8320(var_core_value_sig737C, var_core_value_sig8EA0);
}
function Z(var_core_value_sig70FD, var_core_value_sig988F) {
  let var_core_value_sig50A1 = {
    color: Object.prototype["hasOwnProperty"].call(var_core_value_sig988F, "color") ? var_core_value_sig988F.color : (var_core_value_sig70FD == null ? undefined : var_core_value_sig70FD.color) ?? Jr.color,
    width: var_core_value_sig988F.width ?? (var_core_value_sig70FD == null ? undefined : var_core_value_sig70FD.width) ?? Jr.width,
    dashStyle: var_core_value_sig988F.dashStyle ?? (var_core_value_sig70FD == null ? undefined : var_core_value_sig70FD.dashStyle)
  };
  return var_core_value_sig988F.clearColor && delete var_core_value_sig50A1.color, var_core_value_sig50A1;
}
function ci(var_core_value_sig71D2, var_core_value_sigC113, var_core_value_sig2326) {
  if (var_core_value_sigC113.startRow > 0) {
    let var_core_value_sig5AF5 = var_core_value_sig71D2.tableRows[var_core_value_sigC113.startRow - 1];
    for (let var_core_value_sigA6F6 = var_core_value_sigC113.startColumn; var_core_value_sigA6F6 <= var_core_value_sigC113.endColumn; var_core_value_sigA6F6++) {
      let var_core_value_sig284F = var_core_value_sig5AF5 == null ? undefined : var_core_value_sig5AF5.tableCells[var_core_value_sigA6F6];
      if (!var_core_value_sig284F) throw Error("[DocsTable]: Cell range is out of bounds.");
      var_core_value_sig284F.borderBottom = var_core_value_sig2326.merge ? Z(var_core_value_sig284F.borderBottom, var_core_value_sig2326.top) : var_core_value_sig2326.top;
    }
  }
  if (var_core_value_sigC113.startColumn > 0) for (let var_core_value_sig9DE4 = var_core_value_sigC113.startRow; var_core_value_sig9DE4 <= var_core_value_sigC113.endRow; var_core_value_sig9DE4++) {
    var var_core_value_sig9007;
    let var_core_value_sigCDDA = (var_core_value_sig9007 = var_core_value_sig71D2.tableRows[var_core_value_sig9DE4]) == null ? undefined : var_core_value_sig9007.tableCells[var_core_value_sigC113.startColumn - 1];
    if (!var_core_value_sigCDDA) throw Error("[DocsTable]: Cell range is out of bounds.");
    var_core_value_sigCDDA.borderRight = var_core_value_sig2326.merge ? Z(var_core_value_sigCDDA.borderRight, var_core_value_sig2326.left) : var_core_value_sig2326.left;
  }
}
const li = {
  id: "docs-table.command.set-table-border-color",
  type: e.CommandType["COMMAND"],
  handler: async (var_core_value_sig8726, var_core_value_sig4358) => {
    let var_core_value_sig9574 = (var_core_value_sig4358 == null ? undefined : var_core_value_sig4358.color) ?? (var_core_value_sig4358 == null ? undefined : var_core_value_sig4358.value);
    return var_core_value_sig9574 !== undefined && ui(var_core_value_sig8726, var_core_value_sig4358, var_core_value_sig9574 == null ? {
      clearColor: true
    } : {
      color: {
        rgb: var_core_value_sig9574
      }
    });
  }
};
async function ui(var_core_value_sigD610, var_core_value_sigAF55, var_core_value_sig7409) {
  let var_core_value_sigD106 = var_core_value_sigD610.get(e.IUniverInstanceService),
    var_core_value_sig7552 = var_core_value_sigD610.get(e.ICommandService),
    var_core_value_sig56D1 = var_core_value_sigD610.get(K),
    var_core_value_sig3D12 = var_core_value_sigD106.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
    var_core_value_sig8952 = Ur(var_core_value_sig56D1),
    var_core_value_sigB409 = (var_core_value_sigAF55 == null ? undefined : var_core_value_sigAF55.tableId) ?? (var_core_value_sig8952 == null ? undefined : var_core_value_sig8952.tableId),
    var_core_value_sig3D2F = F(var_core_value_sigAF55, var_core_value_sig8952);
  if (!var_core_value_sig3D12 || !var_core_value_sigB409 || !var_core_value_sig3D2F) return false;
  let var_core_value_sigDBDA = P(var_core_value_sigAF55, var_core_value_sig8952),
    var_core_value_sig1EFA = I(var_core_value_sig3D12, var_core_value_sigDBDA);
  if (!var_core_value_sig1EFA) return false;
  let var_core_value_sig7CF4 = Qr({
      documentData: var_core_value_sig1EFA,
      tableId: var_core_value_sigB409,
      ...var_core_value_sig3D2F,
      border: var_core_value_sig7409
    }),
    var_core_value_sigE956 = V(var_core_value_sig7552, var_core_value_sig3D12.getUnitId(), var_core_value_sig1EFA, var_core_value_sig7CF4, {
      tableId: var_core_value_sigB409,
      segmentId: var_core_value_sigDBDA,
      ...var_core_value_sig3D2F
    });
  return var_core_value_sigE956 && var_core_value_sig56D1.setStructuralSelection({
    kind: (var_core_value_sig8952 == null ? undefined : var_core_value_sig8952.kind) ?? "range",
    tableId: var_core_value_sigB409,
    segmentId: var_core_value_sigDBDA,
    ...var_core_value_sig3D2F
  }), var_core_value_sigE956;
}
const di = {
  id: "docs-table.command.set-table-border-style",
  type: e.CommandType["COMMAND"],
  handler: async (var_core_value_sig189D, var_core_value_sigE26F) => {
    let var_core_value_sig8212 = (var_core_value_sigE26F == null ? undefined : var_core_value_sigE26F.dashStyle) ?? (var_core_value_sigE26F == null ? undefined : var_core_value_sigE26F.value);
    return var_core_value_sig8212 != null && ui(var_core_value_sig189D, var_core_value_sigE26F, {
      dashStyle: fi(var_core_value_sig8212)
    });
  }
};
function fi(var_core_value_sig9A60) {
  return typeof var_core_value_sig9A60 == "number" ? var_core_value_sig9A60 : var_core_value_sig9A60 === "dot" ? e.DashStyleType["DOT"] : var_core_value_sig9A60 === "dash" ? e.DashStyleType["DASH"] : e.DashStyleType["SOLID"];
}
const pi = {
    id: "docs-table.command.set-table-border-width",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig5EF5, var_core_value_sig5324) => {
      let var_core_value_sig01301 = (var_core_value_sig5324 == null ? undefined : var_core_value_sig5324.width) ?? (var_core_value_sig5324 == null ? undefined : var_core_value_sig5324.value);
      return var_core_value_sig01301 != null && ui(var_core_value_sig5EF5, var_core_value_sig5324, {
        width: {
          v: var_core_value_sig01301
        }
      });
    }
  },
  mi = {
    id: "docs-table.command.set-table-border",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig5838, var_core_value_sigB9FE) => {
      if (!var_core_value_sigB9FE) return false;
      let var_core_value_sig41A5 = var_core_value_sig5838.get(e.IUniverInstanceService),
        var_core_value_sig6D3D = var_core_value_sig5838.get(e.ICommandService),
        var_core_value_sigB191 = var_core_value_sig5838.get(K),
        var_core_value_sig949D = var_core_value_sig41A5.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig4113 = Ur(var_core_value_sigB191),
        var_core_value_sigEC12 = var_core_value_sigB9FE.tableId ?? (var_core_value_sig4113 == null ? undefined : var_core_value_sig4113.tableId),
        var_core_value_sigC932 = F(var_core_value_sigB9FE, var_core_value_sig4113);
      if (!var_core_value_sig949D || !var_core_value_sigEC12 || !var_core_value_sigC932) return false;
      let var_core_value_sigDE39 = P(var_core_value_sigB9FE, var_core_value_sig4113),
        var_core_value_sig1529 = I(var_core_value_sig949D, var_core_value_sigDE39);
      if (!var_core_value_sig1529) return false;
      let var_core_value_sigAFD8 = Xr({
          documentData: var_core_value_sig1529,
          tableId: var_core_value_sigEC12,
          ...var_core_value_sigC932,
          preset: var_core_value_sigB9FE.preset,
          border: var_core_value_sigB9FE.border
        }),
        var_core_value_sig6017 = V(var_core_value_sig6D3D, var_core_value_sig949D.getUnitId(), var_core_value_sig1529, var_core_value_sigAFD8, {
          tableId: var_core_value_sigEC12,
          segmentId: var_core_value_sigDE39,
          ...var_core_value_sigC932
        });
      return var_core_value_sig6017 && var_core_value_sigB191.setStructuralSelection({
        kind: (var_core_value_sig4113 == null ? undefined : var_core_value_sig4113.kind) ?? "range",
        tableId: var_core_value_sigEC12,
        segmentId: var_core_value_sigDE39,
        ...var_core_value_sigC932
      }), var_core_value_sig6017;
    }
  },
  hi = {
    id: "docs-table.command.set-table-vertical-align",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sigC66C, var_core_value_sigC5AC) => {
      let var_core_value_sig5880 = var_core_value_sigC5AC == null ? undefined : var_core_value_sigC5AC.value;
      if (var_core_value_sig5880 == null) return false;
      let var_core_value_sigF7E2 = var_core_value_sigC66C.get(e.IUniverInstanceService),
        var_core_value_sigDEEA = var_core_value_sigC66C.get(e.ICommandService),
        var_core_value_sig49D1 = var_core_value_sigC66C.get(K),
        var_core_value_sigEDEC = var_core_value_sigF7E2.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig4F7B = gi(var_core_value_sig49D1),
        var_core_value_sig8269 = (var_core_value_sigC5AC == null ? undefined : var_core_value_sigC5AC.tableId) ?? (var_core_value_sig4F7B == null ? undefined : var_core_value_sig4F7B.tableId),
        var_core_value_sigB092 = F(var_core_value_sigC5AC, var_core_value_sig4F7B);
      if (!var_core_value_sigEDEC || !var_core_value_sig8269 || !var_core_value_sigB092) return false;
      let var_core_value_sigC04F = P(var_core_value_sigC5AC, var_core_value_sig4F7B),
        var_core_value_sig8B16 = I(var_core_value_sigEDEC, var_core_value_sigC04F);
      if (!var_core_value_sig8B16 || !_i(var_core_value_sig8B16, var_core_value_sig8269, var_core_value_sigB092)) return false;
      let var_core_value_sig9640 = vi(var_core_value_sig8B16, {
          tableId: var_core_value_sig8269,
          ...var_core_value_sigB092,
          value: var_core_value_sig5880
        }),
        var_core_value_sig34AB = V(var_core_value_sigDEEA, var_core_value_sigEDEC.getUnitId(), var_core_value_sig8B16, var_core_value_sig9640, {
          tableId: var_core_value_sig8269,
          segmentId: var_core_value_sigC04F,
          ...var_core_value_sigB092
        });
      return var_core_value_sig34AB && var_core_value_sig49D1.setStructuralSelection({
        kind: (var_core_value_sig4F7B == null ? undefined : var_core_value_sig4F7B.kind) ?? "range",
        tableId: var_core_value_sig8269,
        segmentId: var_core_value_sigC04F,
        ...var_core_value_sigB092
      }), var_core_value_sig34AB;
    }
  };
function gi(var_core_value_sig0BE5) {
  var var_core_value_sig2F9D;
  return ((var_core_value_sig2F9D = var_core_value_sig0BE5.getStableTableSelection) == null ? undefined : var_core_value_sig2F9D.call(var_core_value_sig0BE5)) ?? var_core_value_sig0BE5.getCurrentSelection();
}
function _i(var_core_value_sig9511, var_core_value_sigAFDD, var_core_value_sig431B1) {
  var var_core_value_sig3073;
  let var_core_value_sig4C99 = (var_core_value_sig3073 = var_core_value_sig9511.tableSource) == null ? undefined : var_core_value_sig3073[var_core_value_sigAFDD];
  if (!var_core_value_sig4C99) return false;
  let var_core_value_sigDDD2 = yi(var_core_value_sig431B1);
  for (let var_core_value_sig77FA = var_core_value_sigDDD2.startRow; var_core_value_sig77FA <= var_core_value_sigDDD2.endRow; var_core_value_sig77FA++) for (let var_core_value_sigE243 = var_core_value_sigDDD2.startColumn; var_core_value_sigE243 <= var_core_value_sigDDD2.endColumn; var_core_value_sigE243++) {
    var var_core_value_sig6D5F;
    if (!((var_core_value_sig6D5F = var_core_value_sig4C99.tableRows[var_core_value_sig77FA]) != null && var_core_value_sig6D5F.tableCells[var_core_value_sigE243])) return false;
  }
  return true;
}
function vi(var_core_value_sigB80D, var_core_value_sigE0A2) {
  var var_core_value_sig8F71;
  let var_core_value_sig9016 = (var_core_value_sig8F71 = var_core_value_sigB80D.tableSource) == null ? undefined : var_core_value_sig8F71[var_core_value_sigE0A2.tableId];
  if (!var_core_value_sig9016) return null;
  let var_core_value_sigB043 = e.JSONX["getInstance"](),
    var_core_value_sig554B = yi(var_core_value_sigE0A2),
    var_core_value_sig33F0 = [];
  for (let var_core_value_sigA4A7 = var_core_value_sig554B.startRow; var_core_value_sigA4A7 <= var_core_value_sig554B.endRow; var_core_value_sigA4A7++) for (let var_core_value_sig74A8 = var_core_value_sig554B.startColumn; var_core_value_sig74A8 <= var_core_value_sig554B.endColumn; var_core_value_sig74A8++) {
    var var_core_value_sigC9BF;
    let var_core_value_sigE154 = (var_core_value_sigC9BF = var_core_value_sig9016.tableRows[var_core_value_sigA4A7]) == null ? undefined : var_core_value_sigC9BF.tableCells[var_core_value_sig74A8];
    if (!var_core_value_sigE154) return null;
    var_core_value_sigE154.vAlign !== var_core_value_sigE0A2.value && var_core_value_sig33F0.push(var_core_value_sigE154.vAlign === undefined ? var_core_value_sigB043.insertOp(["tableSource", var_core_value_sigE0A2.tableId, "tableRows", var_core_value_sigA4A7, "tableCells", var_core_value_sig74A8, "vAlign"], var_core_value_sigE0A2.value) : var_core_value_sigB043.replaceOp(["tableSource", var_core_value_sigE0A2.tableId, "tableRows", var_core_value_sigA4A7, "tableCells", var_core_value_sig74A8, "vAlign"], var_core_value_sigE154.vAlign, var_core_value_sigE0A2.value));
  }
  return var_core_value_sig33F0.reduce((var_core_value_sigA4DF, var_core_value_sigCC9D) => e.JSONX["compose"](var_core_value_sigA4DF, var_core_value_sigCC9D), null);
}
function yi(var_core_value_sigE1AD) {
  return {
    startRow: Math.min(var_core_value_sigE1AD.startRow, var_core_value_sigE1AD.endRow),
    endRow: Math.max(var_core_value_sigE1AD.startRow, var_core_value_sigE1AD.endRow),
    startColumn: Math.min(var_core_value_sigE1AD.startColumn, var_core_value_sigE1AD.endColumn),
    endColumn: Math.max(var_core_value_sigE1AD.startColumn, var_core_value_sigE1AD.endColumn)
  };
}
const bi = {
    id: "docs-table.command.sort-table",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig90FF, var_core_value_sigA7F6) => {
      if (!var_core_value_sigA7F6) return false;
      let var_core_value_sig5A0F = var_core_value_sig90FF.get(e.IUniverInstanceService),
        var_core_value_sigCDF5 = var_core_value_sig90FF.get(e.ICommandService),
        var_core_value_sig3802 = var_core_value_sig90FF.get(K),
        var_core_value_sigB642 = var_core_value_sig90FF.get(q),
        var_core_value_sig9026 = var_core_value_sig5A0F.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sigDCD6 = var_core_value_sig3802.getCurrentSelection(),
        var_core_value_sig048B = var_core_value_sigA7F6.tableId ?? (var_core_value_sigDCD6 == null ? undefined : var_core_value_sigDCD6.tableId),
        var_core_value_sig1334 = var_core_value_sigA7F6.column ?? (var_core_value_sigDCD6 == null ? undefined : var_core_value_sigDCD6.startColumn);
      if (!var_core_value_sig9026 || !var_core_value_sig048B || var_core_value_sig1334 == null) return false;
      let var_core_value_sig2605 = var_core_value_sig9026.getSnapshot(),
        var_core_value_sig5F20 = P(var_core_value_sigA7F6, var_core_value_sigDCD6),
        var_core_value_sig019C = I(var_core_value_sig9026, var_core_value_sig5F20);
      if (!var_core_value_sig019C) return false;
      let var_core_value_sigB296 = an(var_core_value_sig019C, var_core_value_sigB642.serialize(var_core_value_sig9026.getUnitId()), var_core_value_sig048B, var_core_value_sig1334, var_core_value_sigA7F6.direction, H(var_core_value_sig2605, var_core_value_sig5F20));
      return V(var_core_value_sigCDF5, var_core_value_sig9026.getUnitId(), var_core_value_sig019C, var_core_value_sigB296);
    }
  },
  xi = {
    id: "docs-table.command.unmerge-cells",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig7949, var_core_value_sig2DD9) => {
      let var_core_value_sigCD501 = var_core_value_sig7949.get(e.IUniverInstanceService),
        var_core_value_sigD362 = var_core_value_sig7949.get(e.ICommandService),
        var_core_value_sigC433 = var_core_value_sig7949.get(K),
        var_core_value_sigF543 = var_core_value_sigCD501.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig0806 = var_core_value_sigC433.getStableTableSelection(),
        var_core_value_sigE224 = (var_core_value_sig2DD9 == null ? undefined : var_core_value_sig2DD9.tableId) ?? (var_core_value_sig0806 == null ? undefined : var_core_value_sig0806.tableId),
        var_core_value_sig773E = F(var_core_value_sig2DD9, var_core_value_sig0806);
      if (!var_core_value_sigF543 || !var_core_value_sigE224 || !var_core_value_sig773E) return false;
      let var_core_value_sig83A7 = P(var_core_value_sig2DD9, var_core_value_sig0806),
        var_core_value_sigFE18 = I(var_core_value_sigF543, var_core_value_sig83A7);
      if (!var_core_value_sigFE18 || !b(var_core_value_sigFE18, var_core_value_sigE224, var_core_value_sig773E)) return false;
      let var_core_value_sig816B = ne({
        documentData: var_core_value_sigFE18,
        tableId: var_core_value_sigE224,
        ...var_core_value_sig773E
      });
      if (!var_core_value_sig816B) return false;
      let var_core_value_sigA89B = V(var_core_value_sigD362, var_core_value_sigF543.getUnitId(), var_core_value_sigFE18, var_core_value_sig816B.actions, {
        tableId: var_core_value_sigE224,
        segmentId: var_core_value_sig83A7,
        ...var_core_value_sig816B.range
      });
      return var_core_value_sigA89B && var_core_value_sigC433.setStructuralSelection({
        kind: "range",
        tableId: var_core_value_sigE224,
        segmentId: var_core_value_sig83A7,
        ...var_core_value_sig816B.range
      }), var_core_value_sigA89B;
    }
  };
function Si(var_core_value_sig5020) {
  let var_core_value_sig8FB1 = new DOMParser().parseFromString(var_core_value_sig5020, "text/html");
  return Array.from(var_core_value_sig8FB1.querySelectorAll("table")).map(var_core_value_sig90F5 => Di(var_core_value_sig90F5));
}
function Ci(var_core_value_sig3D4B) {
  if (!var_core_value_sig3D4B.includes("\x09")) return null;
  let var_core_value_sigCD77 = var_core_value_sig3D4B.split(/\r\n|\r|\n/);
  return var_core_value_sigCD77[var_core_value_sigCD77.length - 1] === "" && var_core_value_sigCD77.pop(), var_core_value_sigCD77.length === 0 ? null : "<table><tbody>" + var_core_value_sigCD77.map(var_core_value_sigD2BA => "<tr>" + var_core_value_sigD2BA.split("\x09").map(var_core_value_sig21B2 => "<td>" + Li(var_core_value_sig21B2) + "</td>").join("") + "</tr>").join("") + "</tbody></table>";
}
function wi(var_core_value_sig9F28) {
  var var_core_value_sig8A50;
  let var_core_value_sig8AF9 = i(var_core_value_sig9F28.documentData, var_core_value_sig9F28.tableId),
    var_core_value_sigCF441 = (var_core_value_sig8A50 = var_core_value_sig9F28.documentData["body"]) == null ? undefined : var_core_value_sig8A50.dataStream;
  if (!var_core_value_sig8AF9 || !var_core_value_sigCF441) throw Error("[DocsTable]: Table " + var_core_value_sig9F28.tableId + " is not found.");
  let var_core_value_sig020B = Oi(var_core_value_sig9F28),
    var_core_value_sig091A = [];
  for (let var_core_value_sigCD3A = var_core_value_sig020B.startRow; var_core_value_sigCD3A <= var_core_value_sig020B.endRow; var_core_value_sigCD3A++) {
    let var_core_value_sigDE08 = [];
    for (let var_core_value_sig4632 = var_core_value_sig020B.startColumn; var_core_value_sig4632 <= var_core_value_sig020B.endColumn; var_core_value_sig4632++) {
      var var_core_value_sigC45A;
      let var_core_value_sig480E = (var_core_value_sigC45A = var_core_value_sig8AF9.rows[var_core_value_sigCD3A]) == null ? undefined : var_core_value_sigC45A.cells[var_core_value_sig4632];
      var_core_value_sigDE08.push(var_core_value_sig480E ? ki(var_core_value_sigCF441, var_core_value_sig480E.startOffset, var_core_value_sig480E.endOffset) : "");
    }
    var_core_value_sig091A.push(var_core_value_sigDE08);
  }
  return var_core_value_sig091A.map(var_core_value_sig519D => var_core_value_sig519D.join("\x09")).join("\x0a");
}
function Ti(var_core_value_sig8A05, var_core_value_sig431F = ["body"]) {
  var var_core_value_sig855C;
  let var_core_value_sig222E = i(var_core_value_sig8A05.documentData, var_core_value_sig8A05.tableId);
  if (!var_core_value_sig222E || !((var_core_value_sig855C = var_core_value_sig8A05.documentData["body"]) != null && var_core_value_sig855C.dataStream)) throw Error("[DocsTable]: Table " + var_core_value_sig8A05.tableId + "\x20is\x20not\x20found.");
  let var_core_value_sig3A07 = var_core_value_sig8A05.text["split"](/\r\n|\r|\n/).map(var_core_value_sigC7E7 => var_core_value_sigC7E7.split("\x09")),
    var_core_value_sigE7EB = [];
  for (let var_core_value_sig6E1C = 0; var_core_value_sig6E1C < var_core_value_sig3A07.length; var_core_value_sig6E1C++) for (let var_core_value_sigACCB = 0; var_core_value_sigACCB < var_core_value_sig3A07[var_core_value_sig6E1C].length; var_core_value_sigACCB++) {
    var var_core_value_sig6125;
    let var_core_value_sig12F2 = (var_core_value_sig6125 = var_core_value_sig222E.rows[var_core_value_sig8A05.startRow + var_core_value_sig6E1C]) == null ? undefined : var_core_value_sig6125.cells[var_core_value_sig8A05.startColumn + var_core_value_sigACCB];
    var_core_value_sig12F2 && var_core_value_sigE7EB.push({
      startOffset: var_core_value_sig12F2.startOffset + 1,
      endOffset: var_core_value_sig12F2.endOffset,
      text: var_core_value_sig3A07[var_core_value_sig6E1C][var_core_value_sigACCB] + "\x0d\x0a"
    });
  }
  return M(var_core_value_sig8A05.documentData, var_core_value_sigE7EB, var_core_value_sig431F);
}
function Ei(var_core_value_sig5781) {
  let var_core_value_sig13AB = new DOMParser().parseFromString(var_core_value_sig5781, "text/html").querySelector("table");
  return var_core_value_sig13AB ? Di(var_core_value_sig13AB) : {
    rows: [],
    columnWidths: []
  };
}
function Di(var_core_value_sig7A4A) {
  let var_core_value_sigB7E2 = Array.from(var_core_value_sig7A4A.querySelectorAll("col")).map(var_core_value_sigFABC => ji(var_core_value_sigFABC.getAttribute("width"), var_core_value_sigFABC.getAttribute("style"), "width")),
    var_core_value_sigD477 = [],
    var_core_value_sig6149 = new Map();
  Array.from(var_core_value_sig7A4A.querySelectorAll("tr")).forEach((var_core_value_sig413D, var_core_value_sig5BCE) => {
    let var_core_value_sig8EF01 = {
        cells: [],
        height: ji(var_core_value_sig413D.getAttribute("height"), var_core_value_sig413D.getAttribute("style"), "height")
      },
      var_core_value_sig78AC = 0;
    for (Array.from(var_core_value_sig413D.children).filter(var_core_value_sig2259 => var_core_value_sig2259.tagName["toLowerCase"]() === "td" || var_core_value_sig2259.tagName["toLowerCase"]() === "th").forEach(var_core_value_sig9E2F => {
      for (; var_core_value_sig6149.has(var_core_value_sig5BCE + ":" + var_core_value_sig78AC);) var_core_value_sig8EF01.cells[var_core_value_sig78AC] = null, var_core_value_sig78AC++;
      let var_core_value_sigD082 = Math.max(1, Number(var_core_value_sig9E2F.getAttribute("rowspan") ?? 1)),
        var_core_value_sigDBB7 = Math.max(1, Number(var_core_value_sig9E2F.getAttribute("colspan") ?? 1)),
        var_core_value_sigD0A8 = var_core_value_sig9E2F.getAttribute("style") ?? "";
      var_core_value_sig8EF01.cells[var_core_value_sig78AC] = {
        html: var_core_value_sig9E2F.innerHTML,
        text: Ai(var_core_value_sig9E2F.textContent ?? ""),
        rowSpan: var_core_value_sigD082,
        colSpan: var_core_value_sigDBB7,
        backgroundColor: Mi(var_core_value_sigD0A8, "background-color") ?? Mi(var_core_value_sigD0A8, "background"),
        borderColor: Pi(var_core_value_sigD0A8),
        borderWidth: Fi(var_core_value_sigD0A8)
      };
      let var_core_value_sigF4B9 = ji(var_core_value_sig9E2F.getAttribute("width"), var_core_value_sigD0A8, "width");
      var_core_value_sigF4B9 != null && var_core_value_sigB7E2[var_core_value_sig78AC] == null && (var_core_value_sigB7E2[var_core_value_sig78AC] = var_core_value_sigF4B9);
      for (let var_core_value_sig26DB = 0; var_core_value_sig26DB < var_core_value_sigD082; var_core_value_sig26DB++) for (let var_core_value_sig27E5 = 0; var_core_value_sig27E5 < var_core_value_sigDBB7; var_core_value_sig27E5++) (var_core_value_sig26DB !== 0 || var_core_value_sig27E5 !== 0) && var_core_value_sig6149.set(var_core_value_sig5BCE + var_core_value_sig26DB + ":" + (var_core_value_sig78AC + var_core_value_sig27E5), true);
      for (let var_core_value_sigF0F9 = 1; var_core_value_sigF0F9 < var_core_value_sigDBB7; var_core_value_sigF0F9++) var_core_value_sig8EF01.cells[var_core_value_sig78AC + var_core_value_sigF0F9] = null;
      var_core_value_sig78AC += var_core_value_sigDBB7;
    }); var_core_value_sig8EF01.cells["length"] < var_core_value_sigB7E2.length;) var_core_value_sig8EF01.cells["push"](null);
    var_core_value_sigD477.push(var_core_value_sig8EF01);
  });
  let var_core_value_sigEB82 = Math.max(var_core_value_sigB7E2.length, ...var_core_value_sigD477.map(var_core_value_sig4CEF => var_core_value_sig4CEF.cells["length"]));
  for (; var_core_value_sigB7E2.length < var_core_value_sigEB82;) var_core_value_sigB7E2.push(undefined);
  return var_core_value_sigD477.forEach(var_core_value_sigD57D => {
    for (; var_core_value_sigD57D.cells["length"] < var_core_value_sigEB82;) var_core_value_sigD57D.cells["push"](null);
  }), {
    columnWidths: var_core_value_sigB7E2,
    rows: var_core_value_sigD477
  };
}
function Oi(var_core_value_sig843F) {
  return {
    startRow: Math.min(var_core_value_sig843F.startRow, var_core_value_sig843F.endRow),
    endRow: Math.max(var_core_value_sig843F.startRow, var_core_value_sig843F.endRow),
    startColumn: Math.min(var_core_value_sig843F.startColumn, var_core_value_sig843F.endColumn),
    endColumn: Math.max(var_core_value_sig843F.startColumn, var_core_value_sig843F.endColumn)
  };
}
function ki(var_core_value_sig9FB7, var_core_value_sigB7A4, var_core_value_sig295F) {
  return var_core_value_sig9FB7.slice(var_core_value_sigB7A4 + 1, var_core_value_sig295F).replace(/\r/g, "\x0a").replace(/[\x00-\x08\v\f\x0E-\x1F]/g, "").replace(/\n+$/, "");
}
function Ai(var_core_value_sigE36B) {
  return var_core_value_sigE36B.replace(/\u00A0/g, "\x20").replace(/\s+/g, "\x20").trim();
}
function ji(var_core_value_sigDA3B, var_core_value_sig9E32, var_core_value_sig26EC1) {
  let var_core_value_sigF226 = var_core_value_sig9E32 == null ? undefined : var_core_value_sig9E32.match(RegExp(var_core_value_sig26EC1 + "\\s*:\\s*([0-9.]+)\\s*(px|pt|in|cm|mm)?", "i"));
  if (var_core_value_sigF226) return Ii(Number(var_core_value_sigF226[1]), var_core_value_sigF226[2]);
  if (!var_core_value_sigDA3B) return;
  let var_core_value_sig4773 = var_core_value_sigDA3B.match(/([0-9.]+)\s*(px|pt|in|cm|mm)?/i);
  return var_core_value_sig4773 ? Ii(Number(var_core_value_sig4773[1]), var_core_value_sig4773[2]) : undefined;
}
function Mi(var_core_value_sigB643, var_core_value_sigF92F) {
  var var_core_value_sig2346;
  let var_core_value_sig579A = var_core_value_sigB643.match(RegExp(var_core_value_sigF92F + "\\s*:\\s*([^;]+)", "i"));
  return var_core_value_sig579A == null || (var_core_value_sig2346 = var_core_value_sig579A[1]) == null ? undefined : var_core_value_sig2346.trim();
}
function Ni(var_core_value_sig7E16) {
  var var_core_value_sigA691;
  return (var_core_value_sigA691 = var_core_value_sig7E16.split(";").map(var_core_value_sig2CC7 => var_core_value_sig2CC7.trim()).find(var_core_value_sig4784 => /^border(?:-[a-z]+)?\s*:/i.test(var_core_value_sig4784))) == null ? undefined : var_core_value_sigA691.replace(/^border(?:-[a-z]+)?\s*:\s*/i, "").trim();
}
function Pi(var_core_value_sig3C23) {
  var var_core_value_sigDAE6;
  let var_core_value_sigDD81 = Mi(var_core_value_sig3C23, "border-color");
  if (var_core_value_sigDD81) return var_core_value_sigDD81;
  let var_core_value_sig3870 = Ni(var_core_value_sig3C23);
  return (var_core_value_sig3870 == null || (var_core_value_sigDAE6 = var_core_value_sig3870.match(/#[0-9a-f]{3,8}|rgb\([^)]+\)/i)) == null ? undefined : var_core_value_sigDAE6[0]) || (var_core_value_sig3870 == null ? undefined : var_core_value_sig3870.split(/\s+/).find(var_core_value_sigC39E => /^[a-z]+$/i.test(var_core_value_sigC39E) && !["solid", "dashed", "dotted", "double", "none"].includes(var_core_value_sigC39E.toLowerCase())));
}
function Fi(var_core_value_sig13D1) {
  var var_core_value_sigECFC;
  let var_core_value_sig5E62 = ji(null, Mi(var_core_value_sig13D1, "border-width") ?? null, "width");
  if (var_core_value_sig5E62 != null) return var_core_value_sig5E62;
  let var_core_value_sig3B89 = (var_core_value_sigECFC = Ni(var_core_value_sig13D1)) == null ? undefined : var_core_value_sigECFC.match(/([0-9.]+)\s*(px|pt|in|cm|mm)/i);
  return var_core_value_sig3B89 ? Ii(Number(var_core_value_sig3B89[1]), var_core_value_sig3B89[2]) : undefined;
}
function Ii(var_core_value_sig4B55, var_core_value_sig9E69) {
  switch (var_core_value_sig9E69 == null ? undefined : var_core_value_sig9E69.toLowerCase()) {
    case "pt":
      return Q(var_core_value_sig4B55 * 4 / 3);
    case "in":
      return Q(var_core_value_sig4B55 * 96);
    case "cm":
      return Q(var_core_value_sig4B55 * 96 / 2.54);
    case "mm":
      return Q(var_core_value_sig4B55 * 96 / 25.4);
    default:
      return Q(var_core_value_sig4B55);
  }
}
function Q(var_core_value_sig432A) {
  return Math.round(var_core_value_sig432A * 100) / 100;
}
function Li(var_core_value_sig3B51) {
  return var_core_value_sig3B51.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r?\n/g, "<br>");
}
const Ri = "DOC_TABLE_PLUGIN";
var zi = "@univerjs-pro/docs-table",
  Bi = "1.0.0-insiders.20260907-70fc579";
const Vi = {
    id: "docs-table.command.copy-selection",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig542D, var_core_value_sigB225) => {
      let var_core_value_sig8AAB = var_core_value_sig542D.get(e.IUniverInstanceService),
        var_core_value_sigE82A = var_core_value_sig542D.get(K),
        var_core_value_sigB2CF = var_core_value_sig8AAB.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sig5955 = var_core_value_sigE82A.getCurrentSelection(),
        var_core_value_sigF829 = (var_core_value_sigB225 == null ? undefined : var_core_value_sigB225.tableId) ?? (var_core_value_sig5955 == null ? undefined : var_core_value_sig5955.tableId),
        var_core_value_sig2900 = F(var_core_value_sigB225, var_core_value_sig5955);
      if (!var_core_value_sigB2CF || !var_core_value_sigF829 || !var_core_value_sig2900) return false;
      let var_core_value_sig51D8 = I(var_core_value_sigB2CF, P(var_core_value_sigB225, var_core_value_sig5955));
      return var_core_value_sig51D8 ? wi({
        documentData: var_core_value_sig51D8,
        tableId: var_core_value_sigF829,
        ...var_core_value_sig2900
      }) : false;
    }
  },
  Hi = {
    id: "docs-table.command.paste-without-formatting",
    type: e.CommandType["COMMAND"],
    handler: async (var_core_value_sig8693, var_core_value_sigAACD) => {
      if (!var_core_value_sigAACD) return false;
      let var_core_value_sig895A = var_core_value_sig8693.get(e.IUniverInstanceService),
        var_core_value_sigA764 = var_core_value_sig8693.get(e.ICommandService),
        var_core_value_sigC3D9 = var_core_value_sig8693.get(K),
        var_core_value_sigA6C0 = var_core_value_sig895A.getCurrentUnitOfType(e.UniverInstanceType["UNIVER_DOC"]),
        var_core_value_sigFF70 = var_core_value_sigC3D9.getCurrentSelection(),
        var_core_value_sigB469 = var_core_value_sigAACD.tableId ?? (var_core_value_sigFF70 == null ? undefined : var_core_value_sigFF70.tableId),
        var_core_value_sig0276 = F(var_core_value_sigAACD, var_core_value_sigFF70);
      if (!var_core_value_sigA6C0 || !var_core_value_sigB469 || !var_core_value_sig0276) return false;
      let var_core_value_sigFA20 = var_core_value_sigA6C0.getSnapshot(),
        var_core_value_sig2752 = P(var_core_value_sigAACD, var_core_value_sigFF70),
        var_core_value_sig0E1A = I(var_core_value_sigA6C0, var_core_value_sig2752);
      if (!var_core_value_sig0E1A) return false;
      let var_core_value_sig6A48 = Ti({
        documentData: var_core_value_sig0E1A,
        tableId: var_core_value_sigB469,
        ...var_core_value_sig0276,
        text: var_core_value_sigAACD.text
      }, H(var_core_value_sigFA20, var_core_value_sig2752));
      return V(var_core_value_sigA764, var_core_value_sigA6C0.getUnitId(), var_core_value_sig0E1A, var_core_value_sig6A48, undefined, undefined, undefined, t.DocHistoryAction["EditTableCell"]);
    }
  },
  Ui = {};
let Wi = class extends e.Disposable {
  constructor(var_core_value_sig16C7, var_core_value_sig7481) {
    super(), this._resourceManagerService = var_core_value_sig16C7, this._docsTableModel = var_core_value_sig7481, this._initResource();
  }
  _initResource() {
    this.disposeWithMe(this._resourceManagerService["registerPluginResource"]({
      pluginName: Ri,
      businesses: [e.UniverInstanceType["UNIVER_DOC"]],
      toJson: var_core_value_sig7F33 => JSON.stringify(this._docsTableModel["serialize"](var_core_value_sig7F33)),
      parseJson: var_core_value_sig0C53 => O(JSON.parse(var_core_value_sig0C53)),
      onLoad: (var_core_value_sigEA04, var_core_value_sig7A62) => this._docsTableModel["deserialize"](var_core_value_sigEA04, var_core_value_sig7A62),
      onUnLoad: var_core_value_sig8109 => this._docsTableModel["removeUnit"](var_core_value_sig8109)
    }));
  }
};
Wi = Nn([G(0, e.IResourceManagerService), G(1, (0, e.Inject)(q))], Wi);
let $ = class extends e.Plugin {
  constructor(var_core_value_sig08A3 = Ui, var_core_value_sig77D8, var_core_value_sig78A3, var_core_value_sig649B) {
    super(), this._config = var_core_value_sig08A3, this._injector = var_core_value_sig77D8, this._commandService = var_core_value_sig78A3, this._configService = var_core_value_sig649B;
    let {
      ...var_core_value_sig6256
    } = (0, e.merge)({}, Ui, this._config);
    this._configService["setConfig"]("docs-table.config", var_core_value_sig6256);
  }
  onStarting() {
    this._injector["add"]([q]), this._injector["add"]([Wi]), this._injector["add"]([K]), this._injector["get"](q), this._injector["get"](Wi), this._injector["get"](K), this._initCommands();
  }
  _initCommands() {
    [Vi, Un, Wn, Gn, Kn, qn, Jn, Xn, Ar, Nr, Pr, Fr, Ir, Lr, Hi, Rr, zr, Br, Vr, Hr, mi, li, di, pi, hi, bi, xi].forEach(var_core_value_sig7565 => this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig7565)));
  }
};
W($, "pluginName", Ri), W($, "packageName", zi), W($, "version", Bi), W($, "type", e.UniverInstanceType["UNIVER_DOC"]), $ = Nn([(0, e.DependentOn)(r.UniverLicensePlugin, t.UniverDocsPlugin), G(1, (0, e.Inject)(e.Injector)), G(2, e.ICommandService), G(3, e.IConfigService)], $), exports.DEFAULT_DOCS_TABLE_CELL_MARGIN = Zn, exports.DOCS_TABLE_PLUGIN = Ri, exports.DocsTableBorderPreset = qr, exports.DocsTableColumnInsertPosition = Te, exports.DocsTableColumnType = kt, exports.DocsTableDeleteColumnsCommand = Un, exports.DocsTableDeleteRowsCommand = Wn, exports.DocsTableDeleteTableCommand = Gn, exports.DocsTableDistributeColumnsCommand = Kn, exports.DocsTableDistributeRowsCommand = qn, exports.DocsTableInsertColumnsCommand = Jn, exports.DocsTableInsertPosition = Ce, exports.DocsTableInsertRowsCommand = Xn, exports.DocsTableInsertTableCommand = Ar, exports.DocsTableInsertTablePosition = rr, exports.DocsTableInsertTitleRowCommand = Nr, exports.DocsTableMergeCellsCommand = Pr, exports.DocsTableModel = q, exports.DocsTableMoveColumnsCommand = Fr, exports.DocsTableMoveRowsCommand = Ir, exports.DocsTableMoveTableCommand = Lr, exports.DocsTableResizeColumnCommand = Rr, exports.DocsTableResizeRowCommand = zr, exports.DocsTableRowInsertPosition = we, exports.DocsTableSelectionKind = At, Object.defineProperty(exports, "DocsTableSelectionService", {
  enumerable: true,
  get: function () {
    return K;
  }
}), exports.DocsTableSelectionSource = jt, exports.DocsTableSetColumnTypeCommand = Br, exports.DocsTableSetHeaderRowCountCommand = Vr, exports.DocsTableSetTableBackgroundCommand = Hr, exports.DocsTableSetTableBorderColorCommand = li, exports.DocsTableSetTableBorderCommand = mi, exports.DocsTableSetTableBorderStyleCommand = di, exports.DocsTableSetTableBorderWidthCommand = pi, exports.DocsTableSetTableVerticalAlignCommand = hi, exports.DocsTableSortDirection = Mt, exports.DocsTableSortTableCommand = bi, exports.DocsTableUnmergeCellsCommand = xi, Object.defineProperty(exports, "UniverDocsTablePlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
}), exports.buildDeleteColumnsActions = ke, exports.buildDeleteRowsActions = Oe, exports.buildDeleteTableActions = Ae, exports.buildDeleteTableColumnsMutationActions = tn, exports.buildDeleteTableMutationActions = gn, exports.buildDeleteTableRowsMutationActions = hn, exports.buildDistributeColumnsActions = gt, exports.buildDistributeRowsActions = ht, exports.buildDistributeTableColumnsMutationActions = Jt, exports.buildDistributeTableRowsMutationActions = qt, exports.buildInsertColumnsActions = De, exports.buildInsertRowsActions = Ee, exports.buildInsertTableColumnsMutationActions = Xt, exports.buildInsertTableRowsMutationActions = pn, exports.buildInsertTableTitleRowMutationActions = mn, exports.buildInsertTitleRowActions = pt, exports.buildMergeCellsActions = ee, exports.buildMergeCellsMutationActions = x, exports.buildMoveColumnsActions = Me, exports.buildMoveFloatingTableMutationActions = Ut, exports.buildMoveRowsActions = je, exports.buildMoveTableActions = yt, exports.buildMoveTableColumnsMutationActions = rn, exports.buildMoveTableRowsMutationActions = nn, exports.buildMoveTableToOffsetMutationActions = Wt, exports.buildPastePlainTextTableMutationActions = Ti, exports.buildResizeColumnActions = vt, exports.buildResizeRowActions = _t, exports.buildResizeTableColumnActionsFromWidth = Ht, exports.buildResizeTableRowActionsFromHeight = Kt, exports.buildSetHeaderRowCountActions = mt, exports.buildSetTableBackgroundMutationActions = Wr, exports.buildSetTableBorderActions = Yr, exports.buildSetTableBorderMutationActions = Xr, exports.buildSetTableCellBackgroundActions = Zr, exports.buildSetTableCellMarginMutationActions = Qn, exports.buildSetTableCellTextActions = it, exports.buildSetTableCellTextMutationActions = rt, exports.buildSetTableDefaultCellMarginMutationActions = $n, exports.buildSetTableHeaderRowCountMutationActions = Yt, exports.buildSortTableActions = Nt, exports.buildSortTableMutationActions = an, exports.buildUnmergeCellsActions = te, exports.buildUnmergeCellsMutationActions = ne, exports.canMergeCells = y, exports.canUnmergeCells = b, exports.convertPlainTextTableToHtml = Ci, exports.executeRichTextTableActions = V, exports.getTableActionBodyPath = H, exports.getTableRangeById = i, exports.parseHtmlTableClipboard = Ei, exports.parseHtmlTablesClipboard = Si;
