import { CommandType as var_core_value_sig3D2C, CustomCommandExecutionError as var_core_value_sigC56D, DependentOn as var_core_value_sig3A17, Disposable as var_core_value_sig938F, ICommandService as var_core_value_sigD948, IConfigService as var_core_value_sigBE5E, IPermissionService as var_core_value_sig0281, IResourceManagerService as var_core_value_sigED71, IUndoRedoService as var_core_value_sig281C, IUniverInstanceService as var_core_value_sig3C92, Inject as var_core_value_sigB16B, Injector as var_core_value_sig585D, Plugin as var_core_value_sigE722, UniverInstanceType as var_core_value_sig062A, generateRandomId as var_core_value_sig050A, merge as var_core_value_sig8B32, sequenceExecute as var_core_value_sig870F } from "@univerjs/core";
import { InsertColCommand as var_core_value_sigB683, InsertRowCommand as var_core_value_sig26EC, MoveColsCommand as var_core_value_sigEEDB, MoveRowsCommand as var_core_value_sig36E7, RemoveColCommand as var_core_value_sig6A78, RemoveRowCommand as var_core_value_sigF7EF, SetColHiddenMutation as var_core_value_sig27F9, SetColVisibleMutation as var_core_value_sig393E, SetRowHiddenMutation as var_core_value_sigB609, SetRowVisibleMutation as var_core_value_sig390D, SheetInterceptorService as var_core_value_sigC928, SheetPermissionCheckController as var_core_value_sig39B7, UniverSheetsPlugin as var_core_value_sig18E0, WorkbookViewPermission as var_core_value_sigE161, WorksheetViewPermission as var_core_value_sigBDEE, getSheetCommandTarget as var_core_value_sig1F40 } from "@univerjs/sheets";
import { Subject as var_core_value_sig3FC7, of as var_core_value_sig1E1B } from "rxjs";
import { debounceTime as var_core_value_sig3B10, map as var_core_value_sig89E6, startWith as var_core_value_sig4743 } from "rxjs/operators";
import { UniverLicensePlugin as var_core_value_sigEB6A } from "@univerjs-pro/license";
let _e = function (var_core_value_sig1896) {
    return var_core_value_sig1896.ROW = "row", var_core_value_sig1896.COLUMN = "column", var_core_value_sig1896;
  }({}),
  ve = function (var_core_value_sig0285) {
    return var_core_value_sig0285.INVALID_RANGE = "invalid-range", var_core_value_sig0285.OUT_OF_BOUNDS = "out-of-bounds", var_core_value_sig0285.CROSSING = "crossing", var_core_value_sig0285.MAX_DEPTH = "max-depth", var_core_value_sig0285.MOVE_SPLITS_OUTLINE = "move-splits-outline", var_core_value_sig0285.CLEAR_RANGE_NOT_CONTAIN_OUTLINE = "clear-range-not-contain-outline", var_core_value_sig0285.UNKNOWN = "unknown", var_core_value_sig0285;
  }({});
var S = class extends Error {
  constructor(var_core_value_sigC80B, var_core_value_sig284F, var_core_value_sigE154) {
    super(var_core_value_sig284F), this.reason = var_core_value_sigC80B, this.outlineId = var_core_value_sigE154, this.name = "DimensionOutlineError";
  }
};
function ye(var_core_value_sig777D) {
  return var_core_value_sig777D instanceof S ? var_core_value_sig777D.reason : var_core_value_sig777D instanceof Error ? var_core_value_sig777D.message["includes"]("split dimension outline") ? "move-splits-outline" : var_core_value_sig777D.message["includes"]("depth") ? "max-depth" : var_core_value_sig777D.message["includes"]("Crossing") ? "crossing" : var_core_value_sig777D.message["includes"]("range") ? "invalid-range" : "unknown" : "unknown";
}
function be(var_core_value_sig3F4C) {
  return var_core_value_sig3F4C instanceof S ? var_core_value_sig3F4C.outlineId : undefined;
}
const C = 2 ** 53 - 1;
function w(var_core_value_sigD65A, var_core_value_sig5A13) {
  return var_core_value_sigD65A.unitId === var_core_value_sig5A13.unitId && var_core_value_sigD65A.subUnitId === var_core_value_sig5A13.subUnitId && var_core_value_sigD65A.axis === var_core_value_sig5A13.axis;
}
function T(var_core_value_sigF593, var_core_value_sig3607 = {}) {
  let var_core_value_sigB512 = var_core_value_sig3607.maxDepth ?? 8,
    var_core_value_sigF2E6 = new Map();
  for (let var_core_value_sig4632 of var_core_value_sigF593) {
    let var_core_value_sig4D4C = var_core_value_sig4632.unitId + ":" + var_core_value_sig4632.subUnitId + ":" + var_core_value_sig4632.axis,
      var_core_value_sigC9E0 = var_core_value_sigF2E6.get(var_core_value_sig4D4C);
    var_core_value_sigC9E0 ? var_core_value_sigC9E0.push(var_core_value_sig4632) : var_core_value_sigF2E6.set(var_core_value_sig4D4C, [var_core_value_sig4632]);
  }
  let var_core_value_sig34C8 = [];
  for (let var_core_value_sig12F2 of var_core_value_sigF2E6.values()) {
    let var_core_value_sig76BA = [...var_core_value_sig12F2].sort(j),
      var_core_value_sigFBFA = [];
    for (let var_core_value_sig3EEE of var_core_value_sig76BA) {
      for (Me(var_core_value_sig3EEE); var_core_value_sigFBFA.length > 0 && var_core_value_sig3EEE.start > var_core_value_sigFBFA[var_core_value_sigFBFA.length - 1].end;) var_core_value_sigFBFA.pop();
      let var_core_value_sig7524 = var_core_value_sigFBFA[var_core_value_sigFBFA.length - 1];
      if (var_core_value_sig7524 && var_core_value_sig3EEE.end > var_core_value_sig7524.end) throw new S("crossing", "Crossing dimension outlines are not allowed", var_core_value_sig3EEE.id);
      let var_core_value_sig2AD8 = var_core_value_sig7524 ? var_core_value_sig7524.depth + 1 : 1;
      if (var_core_value_sig2AD8 > var_core_value_sigB512) throw new S("max-depth", "Dimension\x20outline\x20depth\x20cannot\x20exceed\x20" + var_core_value_sigB512, var_core_value_sig3EEE.id);
      let var_core_value_sig2AD0 = {
        ...var_core_value_sig3EEE,
        depth: var_core_value_sig2AD8,
        parentId: var_core_value_sig7524 == null ? undefined : var_core_value_sig7524.id,
        anchor: var_core_value_sig3EEE.end,
        children: []
      };
      var_core_value_sig7524 ? var_core_value_sig7524.children["push"](var_core_value_sig2AD0) : var_core_value_sig34C8.push(var_core_value_sig2AD0), var_core_value_sigFBFA.push(var_core_value_sig2AD0);
    }
  }
  return var_core_value_sig34C8;
}
function E(var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigE68A = {}) {
  if (var_core_value_sigEAE2.start < 0 || var_core_value_sigEAE2.start > var_core_value_sigEAE2.end) return {
    valid: false,
    reason: "invalid-range"
  };
  if (var_core_value_sigE68A.maxIndex != null && var_core_value_sigEAE2.end >= var_core_value_sigE68A.maxIndex) return {
    valid: false,
    reason: "out-of-bounds"
  };
  let var_core_value_sig3E68 = var_core_value_sigB744.filter(var_core_value_sig2259 => w(var_core_value_sig2259, var_core_value_sigEAE2));
  for (let var_core_value_sig9E2F of var_core_value_sig3E68) if (Ne(var_core_value_sig9E2F, var_core_value_sigEAE2)) return {
    valid: false,
    reason: "crossing"
  };
  try {
    T([...var_core_value_sigB744, var_core_value_sigEAE2], var_core_value_sigE68A);
  } catch (var_core_value_sigD082) {
    let var_core_value_sigDBB7 = ye(var_core_value_sigD082);
    return var_core_value_sigDBB7 === "max-depth" ? {
      valid: false,
      reason: "max-depth"
    } : var_core_value_sigDBB7 === "invalid-range" ? {
      valid: false,
      reason: "invalid-range"
    } : {
      valid: false,
      reason: "crossing"
    };
  }
  return {
    valid: true
  };
}
function xe(var_core_value_sigF4C5, var_core_value_sig5410, var_core_value_sig492F = {}) {
  let var_core_value_sig8EA0 = E(var_core_value_sigF4C5, var_core_value_sig5410, var_core_value_sig492F);
  if (!var_core_value_sig8EA0.valid) throw Error(var_core_value_sig8EA0.reason ?? "invalid-dimension-outline");
  return [...var_core_value_sigF4C5, var_core_value_sig5410];
}
function Se(var_core_value_sigA6F6, var_core_value_sigCDDA) {
  let var_core_value_sigE243 = var_core_value_sigCDDA.start,
    var_core_value_sig74A8 = var_core_value_sigCDDA.end,
    var_core_value_sig21B2 = [],
    var_core_value_sigDE08 = true;
  for (; var_core_value_sigDE08;) {
    var_core_value_sigDE08 = false;
    for (let var_core_value_sigBC46 of var_core_value_sigA6F6) var_core_value_sig21B2.includes(var_core_value_sigBC46) || !w(var_core_value_sigBC46, var_core_value_sigCDDA) || !Ae(var_core_value_sigBC46.start, var_core_value_sigBC46.end, var_core_value_sigE243, var_core_value_sig74A8) || (var_core_value_sig21B2.push(var_core_value_sigBC46), var_core_value_sigE243 = Math.min(var_core_value_sigE243, var_core_value_sigBC46.start), var_core_value_sig74A8 = Math.max(var_core_value_sig74A8, var_core_value_sigBC46.end), var_core_value_sigDE08 = true);
  }
  if (var_core_value_sig21B2.length === 0) return null;
  let [var_core_value_sigACCB] = [...var_core_value_sig21B2].sort(j);
  return {
    mergedOutline: {
      ...var_core_value_sigACCB,
      start: var_core_value_sigE243,
      end: var_core_value_sig74A8
    },
    mergedOutlines: var_core_value_sig21B2
  };
}
function Ce(var_core_value_sig7F33, var_core_value_sig0C53) {
  return var_core_value_sig7F33.filter(var_core_value_sigD0A8 => !w(var_core_value_sigD0A8, var_core_value_sig0C53) || !(var_core_value_sigD0A8.start >= var_core_value_sig0C53.start && var_core_value_sigD0A8.end <= var_core_value_sig0C53.end));
}
function we(var_core_value_sigEA04, var_core_value_sig7A62, var_core_value_sig8109, var_core_value_sig7565) {
  return Te(var_core_value_sigEA04.filter(var_core_value_sigF4B9 => var_core_value_sigF4B9.unitId === var_core_value_sig7A62 && var_core_value_sigF4B9.subUnitId === var_core_value_sig8109 && var_core_value_sigF4B9.axis === var_core_value_sig7565 && var_core_value_sigF4B9.collapsed).map(var_core_value_sig5CEE => ({
    start: var_core_value_sig5CEE.start,
    end: var_core_value_sig5CEE.end
  })));
}
function Te(var_core_value_sigD4FB) {
  if (var_core_value_sigD4FB.length === 0) return [];
  let var_core_value_sig3E71 = [...var_core_value_sigD4FB].sort((var_core_value_sigE92A, var_core_value_sig362B) => var_core_value_sigE92A.start - var_core_value_sig362B.start || var_core_value_sigE92A.end - var_core_value_sig362B.end),
    var_core_value_sig01B3 = [];
  for (let var_core_value_sig5CA5 of var_core_value_sig3E71) {
    let var_core_value_sigF602 = var_core_value_sig01B3[var_core_value_sig01B3.length - 1];
    !var_core_value_sigF602 || var_core_value_sig5CA5.start > var_core_value_sigF602.end + 1 ? var_core_value_sig01B3.push({
      ...var_core_value_sig5CA5
    }) : var_core_value_sigF602.end = Math.max(var_core_value_sigF602.end, var_core_value_sig5CA5.end);
  }
  return var_core_value_sig01B3;
}
function D(var_core_value_sig7442, var_core_value_sigDF87) {
  return var_core_value_sigDF87.count <= 0 ? var_core_value_sig7442 : A(var_core_value_sig7442.map(var_core_value_sigE90F => w(var_core_value_sigE90F, var_core_value_sigDF87) ? var_core_value_sigDF87.index <= var_core_value_sigE90F.start ? {
    ...var_core_value_sigE90F,
    start: var_core_value_sigE90F.start + var_core_value_sigDF87.count,
    end: var_core_value_sigE90F.end + var_core_value_sigDF87.count
  } : var_core_value_sigE90F.start < var_core_value_sigDF87.index && var_core_value_sigDF87.index <= var_core_value_sigE90F.end ? {
    ...var_core_value_sigE90F,
    end: var_core_value_sigE90F.end + var_core_value_sigDF87.count
  } : var_core_value_sigE90F : var_core_value_sigE90F));
}
function O(var_core_value_sig9EE0, var_core_value_sigF051) {
  if (var_core_value_sigF051.start > var_core_value_sigF051.end) return var_core_value_sig9EE0;
  let var_core_value_sig0B45 = var_core_value_sigF051.end - var_core_value_sigF051.start + 1,
    var_core_value_sig36F8 = [];
  for (let var_core_value_sigEFD4 of var_core_value_sig9EE0) {
    if (!w(var_core_value_sigEFD4, var_core_value_sigF051)) {
      var_core_value_sig36F8.push(var_core_value_sigEFD4);
      continue;
    }
    if (var_core_value_sigEFD4.end < var_core_value_sigF051.start) {
      var_core_value_sig36F8.push(var_core_value_sigEFD4);
      continue;
    }
    if (var_core_value_sigEFD4.start > var_core_value_sigF051.end) {
      var_core_value_sig36F8.push({
        ...var_core_value_sigEFD4,
        start: var_core_value_sigEFD4.start - var_core_value_sig0B45,
        end: var_core_value_sigEFD4.end - var_core_value_sig0B45
      });
      continue;
    }
    let var_core_value_sig1BBD = Math.max(var_core_value_sigEFD4.start, var_core_value_sigF051.start),
      var_core_value_sigF704 = Math.min(var_core_value_sigEFD4.end, var_core_value_sigF051.end),
      var_core_value_sig2BCF = Math.max(0, var_core_value_sigF704 - var_core_value_sig1BBD + 1),
      var_core_value_sig0D69 = var_core_value_sigEFD4.end - var_core_value_sigEFD4.start + 1 - var_core_value_sig2BCF;
    if (var_core_value_sig0D69 <= 0) continue;
    let var_core_value_sig480E = var_core_value_sigEFD4.start < var_core_value_sigF051.start ? var_core_value_sigEFD4.start : var_core_value_sigF051.start;
    var_core_value_sig36F8.push({
      ...var_core_value_sigEFD4,
      start: var_core_value_sig480E,
      end: var_core_value_sig480E + var_core_value_sig0D69 - 1
    });
  }
  return A(var_core_value_sig36F8);
}
function k(var_core_value_sig03E1, var_core_value_sigBB57) {
  if (var_core_value_sigBB57.sourceStart > var_core_value_sigBB57.sourceEnd) return var_core_value_sig03E1;
  let var_core_value_sig7C4A = [];
  for (let var_core_value_sig861B of var_core_value_sig03E1) {
    if (!w(var_core_value_sig861B, var_core_value_sigBB57)) {
      var_core_value_sig7C4A.push(var_core_value_sig861B);
      continue;
    }
    let var_core_value_sig26DB = Ee(var_core_value_sig861B, var_core_value_sigBB57);
    if (var_core_value_sig26DB.type === "split") throw new S("move-splits-outline", "Move would split dimension outline: " + var_core_value_sig861B.id, var_core_value_sig861B.id);
    var_core_value_sig7C4A.push(var_core_value_sig26DB.outline);
  }
  return A(var_core_value_sig7C4A);
}
function Ee(var_core_value_sigE799, var_core_value_sigB601) {
  let var_core_value_sig8B71 = De(var_core_value_sigB601.sourceStart, var_core_value_sigB601.sourceEnd + 1, var_core_value_sigB601.destinationIndex),
    var_core_value_sigAEFB = [],
    var_core_value_sig826B = {
      start: var_core_value_sigE799.start,
      end: var_core_value_sigE799.end + 1
    };
  for (let var_core_value_sig5237 of var_core_value_sig8B71) {
    let var_core_value_sigF0F9 = Oe(var_core_value_sig826B, var_core_value_sig5237.range);
    var_core_value_sigF0F9 && var_core_value_sigAEFB.push({
      start: var_core_value_sigF0F9.start + var_core_value_sig5237.offset,
      end: var_core_value_sigF0F9.end + var_core_value_sig5237.offset
    });
  }
  let var_core_value_sigCF89 = ke(var_core_value_sigAEFB);
  return var_core_value_sigCF89.length === 1 ? {
    type: "ok",
    outline: {
      ...var_core_value_sigE799,
      start: var_core_value_sigCF89[0].start,
      end: var_core_value_sigCF89[0].end - 1
    }
  } : {
    type: "split",
    outline: var_core_value_sigE799,
    ranges: var_core_value_sigCF89
  };
}
function De(var_core_value_sig00CB, var_core_value_sig77EE, var_core_value_sig9F76) {
  let var_core_value_sigB008 = var_core_value_sig77EE - var_core_value_sig00CB;
  if (var_core_value_sigB008 <= 0) throw Error("Invalid dimension outline move source range");
  return var_core_value_sig9F76 >= var_core_value_sig00CB && var_core_value_sig9F76 <= var_core_value_sig77EE ? [{
    range: {
      start: 0,
      end: C
    },
    offset: 0
  }] : var_core_value_sig9F76 < var_core_value_sig00CB ? [{
    range: {
      start: 0,
      end: var_core_value_sig9F76
    },
    offset: 0
  }, {
    range: {
      start: var_core_value_sig9F76,
      end: var_core_value_sig00CB
    },
    offset: var_core_value_sigB008
  }, {
    range: {
      start: var_core_value_sig00CB,
      end: var_core_value_sig77EE
    },
    offset: var_core_value_sig9F76 - var_core_value_sig00CB
  }, {
    range: {
      start: var_core_value_sig77EE,
      end: C
    },
    offset: 0
  }] : [{
    range: {
      start: 0,
      end: var_core_value_sig00CB
    },
    offset: 0
  }, {
    range: {
      start: var_core_value_sig00CB,
      end: var_core_value_sig77EE
    },
    offset: var_core_value_sig9F76 - var_core_value_sig77EE
  }, {
    range: {
      start: var_core_value_sig77EE,
      end: var_core_value_sig9F76
    },
    offset: -var_core_value_sigB008
  }, {
    range: {
      start: var_core_value_sig9F76,
      end: C
    },
    offset: 0
  }];
}
function Oe(var_core_value_sig8721, var_core_value_sig08BA) {
  let var_core_value_sigDBB5 = Math.max(var_core_value_sig8721.start, var_core_value_sig08BA.start),
    var_core_value_sigCFAC = Math.min(var_core_value_sig8721.end, var_core_value_sig08BA.end);
  return var_core_value_sigDBB5 >= var_core_value_sigCFAC ? null : {
    start: var_core_value_sigDBB5,
    end: var_core_value_sigCFAC
  };
}
function ke(var_core_value_sig237B) {
  if (var_core_value_sig237B.length === 0) return [];
  let var_core_value_sigFEAB = [...var_core_value_sig237B].sort((var_core_value_sigBB00, var_core_value_sig7E54) => var_core_value_sigBB00.start - var_core_value_sig7E54.start || var_core_value_sigBB00.end - var_core_value_sig7E54.end),
    var_core_value_sigE347 = [];
  for (let var_core_value_sig9A8D of var_core_value_sigFEAB) {
    let var_core_value_sig1A0F = var_core_value_sigE347[var_core_value_sigE347.length - 1];
    !var_core_value_sig1A0F || var_core_value_sig9A8D.start > var_core_value_sig1A0F.end ? var_core_value_sigE347.push({
      ...var_core_value_sig9A8D
    }) : var_core_value_sig1A0F.end = Math.max(var_core_value_sig1A0F.end, var_core_value_sig9A8D.end);
  }
  return var_core_value_sigE347;
}
function Ae(var_core_value_sig3C5B, var_core_value_sig200B, var_core_value_sig3863, var_core_value_sigC97C) {
  return var_core_value_sig200B + 1 === var_core_value_sig3863 || var_core_value_sigC97C + 1 === var_core_value_sig3C5B;
}
function A(var_core_value_sigC4B1) {
  let var_core_value_sig1BD9 = je(var_core_value_sigC4B1);
  return T(var_core_value_sig1BD9), var_core_value_sig1BD9;
}
function je(var_core_value_sigE43E) {
  let var_core_value_sigA937 = new Map();
  for (let var_core_value_sigC259 of var_core_value_sigE43E) {
    let var_core_value_sigFBA4 = [var_core_value_sigC259.unitId, var_core_value_sigC259.subUnitId, var_core_value_sigC259.axis, var_core_value_sigC259.start, var_core_value_sigC259.end].join(":"),
      var_core_value_sig4383 = var_core_value_sigA937.get(var_core_value_sigFBA4);
    if (!var_core_value_sig4383) {
      var_core_value_sigA937.set(var_core_value_sigFBA4, var_core_value_sigC259);
      continue;
    }
    var_core_value_sigA937.set(var_core_value_sigFBA4, {
      ...var_core_value_sig4383,
      collapsed: var_core_value_sig4383.collapsed || var_core_value_sigC259.collapsed
    });
  }
  return Array.from(var_core_value_sigA937.values());
}
function j(var_core_value_sigCAD5, var_core_value_sigE503) {
  return var_core_value_sigCAD5.unitId === var_core_value_sigE503.unitId ? var_core_value_sigCAD5.subUnitId === var_core_value_sigE503.subUnitId ? var_core_value_sigCAD5.axis === var_core_value_sigE503.axis ? var_core_value_sigCAD5.start === var_core_value_sigE503.start ? var_core_value_sigE503.end - var_core_value_sigCAD5.end : var_core_value_sigCAD5.start - var_core_value_sigE503.start : var_core_value_sigCAD5.axis["localeCompare"](var_core_value_sigE503.axis) : var_core_value_sigCAD5.subUnitId["localeCompare"](var_core_value_sigE503.subUnitId) : var_core_value_sigCAD5.unitId["localeCompare"](var_core_value_sigE503.unitId);
}
function Me(var_core_value_sig48DD) {
  if (var_core_value_sig48DD.start > var_core_value_sig48DD.end) throw new S("invalid-range", "Invalid outline range", var_core_value_sig48DD.id);
}
function Ne(var_core_value_sig5E6A, var_core_value_sigB7FC) {
  let var_core_value_sig9CD9 = var_core_value_sig5E6A.start <= var_core_value_sigB7FC.end && var_core_value_sigB7FC.start <= var_core_value_sig5E6A.end,
    var_core_value_sigFD0C = var_core_value_sig5E6A.start <= var_core_value_sigB7FC.start && var_core_value_sigB7FC.end <= var_core_value_sig5E6A.end,
    var_core_value_sig849B = var_core_value_sigB7FC.start <= var_core_value_sig5E6A.start && var_core_value_sig5E6A.end <= var_core_value_sigB7FC.end;
  return var_core_value_sig9CD9 && !var_core_value_sigFD0C && !var_core_value_sig849B;
}
function M(var_core_value_sig5F1A) {
  "@babel/helpers - typeof";

  return M = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig9C9F) {
    return typeof var_core_value_sig9C9F;
  } : function (var_core_value_sigFDEA) {
    return var_core_value_sigFDEA && typeof Symbol == "function" && var_core_value_sigFDEA.constructor === Symbol && var_core_value_sigFDEA !== Symbol.prototype ? "symbol" : typeof var_core_value_sigFDEA;
  }, M(var_core_value_sig5F1A);
}
function Pe(var_core_value_sigB455, var_core_value_sig5241) {
  if (M(var_core_value_sigB455) != "object" || !var_core_value_sigB455) return var_core_value_sigB455;
  var var_core_value_sigC6E5 = var_core_value_sigB455[Symbol.toPrimitive];
  if (var_core_value_sigC6E5 !== undefined) {
    var var_core_value_sigCEFB = var_core_value_sigC6E5.call(var_core_value_sigB455, var_core_value_sig5241 || "default");
    if (M(var_core_value_sigCEFB) != "object") return var_core_value_sigCEFB;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig5241 === "string" ? String : Number)(var_core_value_sigB455);
}
function Fe(var_core_value_sig1537) {
  var var_core_value_sigE4C6 = Pe(var_core_value_sig1537, "string");
  return M(var_core_value_sigE4C6) == "symbol" ? var_core_value_sigE4C6 : var_core_value_sigE4C6 + "";
}
function N(var_core_value_sig4313, var_core_value_sigFC87, var_core_value_sig156F) {
  return (var_core_value_sigFC87 = Fe(var_core_value_sigFC87)) in var_core_value_sig4313 ? Object.defineProperty(var_core_value_sig4313, var_core_value_sigFC87, {
    value: var_core_value_sig156F,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig4313[var_core_value_sigFC87] = var_core_value_sig156F, var_core_value_sig4313;
}
var P = class extends var_core_value_sig938F {
    constructor(...var_core_value_sig86D0) {
      super(...var_core_value_sig86D0), N(this, "_outlines", new Map()), N(this, "_change$", new var_core_value_sig3FC7()), N(this, "change$", this._change$["asObservable"]());
    }
    getOutlines(var_core_value_sig4CD2, var_core_value_sig48CA) {
      var var_core_value_sig50AF;
      return [...(((var_core_value_sig50AF = this._outlines["get"](var_core_value_sig4CD2)) == null ? undefined : var_core_value_sig50AF.get(var_core_value_sig48CA)) ?? [])];
    }
    getUnitOutlines(var_core_value_sigA942) {
      let var_core_value_sigA621 = this._outlines["get"](var_core_value_sigA942),
        var_core_value_sigBBFF = new Map();
      return var_core_value_sigA621 == null || var_core_value_sigA621.forEach((var_core_value_sig186C, var_core_value_sigD955) => {
        var_core_value_sigBBFF.set(var_core_value_sigD955, [...var_core_value_sig186C]);
      }), var_core_value_sigBBFF;
    }
    setOutlines(var_core_value_sig8889, var_core_value_sig32F8, var_core_value_sig5B67) {
      this._ensureUnitOutlines(var_core_value_sig8889).set(var_core_value_sig32F8, [...var_core_value_sig5B67]), this._change$["next"]({
        unitId: var_core_value_sig8889,
        subUnitId: var_core_value_sig32F8
      });
    }
    removeUnit(var_core_value_sig1758) {
      this._outlines["delete"](var_core_value_sig1758), this._change$["next"]({
        unitId: var_core_value_sig1758
      });
    }
    serialize(var_core_value_sig4805) {
      let var_core_value_sigE67E = this._outlines["get"](var_core_value_sig4805),
        var_core_value_sig2902 = {};
      return var_core_value_sigE67E == null || var_core_value_sigE67E.forEach((var_core_value_sig48BD, var_core_value_sig429F) => {
        var_core_value_sig2902[var_core_value_sig429F] = {
          outlineList: [...var_core_value_sig48BD]
        };
      }), var_core_value_sig2902;
    }
    deserialize(var_core_value_sig9989, var_core_value_sig698E) {
      let var_core_value_sig2809 = new Map();
      Object.entries(var_core_value_sig698E).forEach(([var_core_value_sigF62A, var_core_value_sig8178]) => {
        var_core_value_sig2809.set(var_core_value_sigF62A, [...(var_core_value_sig8178.outlineList ?? [])]);
      }), this._outlines["set"](var_core_value_sig9989, var_core_value_sig2809), this._change$["next"]({
        unitId: var_core_value_sig9989
      });
    }
    dispose() {
      super.dispose(), this._outlines["clear"](), this._change$["complete"]();
    }
    _ensureUnitOutlines(var_core_value_sig2DAB) {
      let var_core_value_sig877E = this._outlines["get"](var_core_value_sig2DAB);
      return var_core_value_sig877E || (var_core_value_sig877E = new Map(), this._outlines["set"](var_core_value_sig2DAB, var_core_value_sig877E)), var_core_value_sig877E;
    }
  },
  F = class extends var_core_value_sig938F {
    constructor(...var_core_value_sig20C8) {
      super(...var_core_value_sig20C8), N(this, "_error$", new var_core_value_sig3FC7()), N(this, "error$", this._error$["asObservable"]());
    }
    emit(var_core_value_sigE9A7) {
      this._error$["next"](var_core_value_sigE9A7);
    }
    dispose() {
      super.dispose(), this._error$["complete"]();
    }
  };
const I = {
    id: "sheet.mutation.add-dimension-outline",
    type: var_core_value_sig3D2C.MUTATION,
    handler: (var_core_value_sigDD51, var_core_value_sigF057) => {
      let var_core_value_sig72F6 = var_core_value_sigDD51.get(P),
        var_core_value_sig9FBA = var_core_value_sig72F6.getOutlines(var_core_value_sigF057.unitId, var_core_value_sigF057.subUnitId);
      return var_core_value_sig72F6.setOutlines(var_core_value_sigF057.unitId, var_core_value_sigF057.subUnitId, xe(var_core_value_sig9FBA, var_core_value_sigF057.outline)), true;
    }
  },
  L = {
    id: "sheet.mutation.remove-dimension-outline",
    type: var_core_value_sig3D2C.MUTATION,
    handler: (var_core_value_sigFE01, var_core_value_sigA2CE) => {
      let var_core_value_sig1975 = var_core_value_sigFE01.get(P),
        var_core_value_sig6EA1 = var_core_value_sig1975.getOutlines(var_core_value_sigA2CE.unitId, var_core_value_sigA2CE.subUnitId);
      return var_core_value_sig1975.setOutlines(var_core_value_sigA2CE.unitId, var_core_value_sigA2CE.subUnitId, var_core_value_sig6EA1.filter(var_core_value_sigBECE => var_core_value_sigBECE.id !== var_core_value_sigA2CE.outlineId)), true;
    }
  };
function R(var_core_value_sig029F, var_core_value_sig3767, var_core_value_sig670B) {
  let var_core_value_sig6912 = Le(var_core_value_sig029F);
  return !var_core_value_sig6912 || var_core_value_sig6912.permissionCheckWithoutRange({
    workbookTypes: [var_core_value_sigE161],
    worksheetTypes: [var_core_value_sigBDEE]
  }, var_core_value_sig3767, var_core_value_sig670B);
}
function Ie(var_core_value_sigE235, var_core_value_sig7664, var_core_value_sig2281) {
  let var_core_value_sig5E86 = Re(var_core_value_sigE235);
  return ((var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.permissionPointUpdate$) ?? var_core_value_sig1E1B(null)).pipe(var_core_value_sig3B10(100), var_core_value_sig4743(null), var_core_value_sig89E6(() => R(var_core_value_sigE235, var_core_value_sig7664, var_core_value_sig2281)));
}
function Le(var_core_value_sig6998) {
  if (typeof var_core_value_sig6998.has == "function" && !var_core_value_sig6998.has(var_core_value_sig39B7)) return null;
  try {
    return var_core_value_sig6998.get(var_core_value_sig39B7);
  } catch {
    return null;
  }
}
function Re(var_core_value_sigF639) {
  if (typeof var_core_value_sigF639.has == "function" && !var_core_value_sigF639.has(var_core_value_sig0281)) return null;
  try {
    return var_core_value_sigF639.get(var_core_value_sig0281);
  } catch {
    return null;
  }
}
const z = {
    id: "sheet.command.add-dimension-outline",
    type: var_core_value_sig3D2C.COMMAND,
    handler: (var_core_value_sigEAE5, var_core_value_sigE94C) => {
      if (!var_core_value_sigE94C) return false;
      let var_core_value_sig6D47 = var_core_value_sig1F40(var_core_value_sigEAE5.get(var_core_value_sig3C92), var_core_value_sigE94C);
      if (!var_core_value_sig6D47) return false;
      let {
        unitId: var_core_value_sigCB82,
        subUnitId: var_core_value_sigCF4E,
        worksheet: var_core_value_sig6CAD
      } = var_core_value_sig6D47;
      if (!R(var_core_value_sigEAE5, var_core_value_sigCB82, var_core_value_sigCF4E)) return false;
      let var_core_value_sig8CF5 = var_core_value_sigEAE5.get(P),
        var_core_value_sigDDD7 = {
          id: "dimension-outline-" + var_core_value_sig050A(6),
          unitId: var_core_value_sigCB82,
          subUnitId: var_core_value_sigCF4E,
          axis: var_core_value_sigE94C.axis,
          start: var_core_value_sigE94C.start,
          end: var_core_value_sigE94C.end,
          collapsed: false
        },
        var_core_value_sigB2CE = var_core_value_sigE94C.axis === "row" ? var_core_value_sig6CAD.getRowCount() : var_core_value_sig6CAD.getColumnCount(),
        var_core_value_sig443C = var_core_value_sig8CF5.getOutlines(var_core_value_sigCB82, var_core_value_sigCF4E),
        var_core_value_sig39B1 = Se(var_core_value_sig443C, var_core_value_sigDDD7),
        var_core_value_sig210D = (var_core_value_sig39B1 == null ? undefined : var_core_value_sig39B1.mergedOutlines) ?? [],
        var_core_value_sigB4B4 = (var_core_value_sig39B1 == null ? undefined : var_core_value_sig39B1.mergedOutline) ?? var_core_value_sigDDD7,
        var_core_value_sigD407 = E(var_core_value_sig39B1 ? var_core_value_sig443C.filter(var_core_value_sig1B22 => !var_core_value_sig210D.some(var_core_value_sigE9ED => var_core_value_sigE9ED.id === var_core_value_sig1B22.id)) : var_core_value_sig443C, var_core_value_sigB4B4, {
          maxIndex: var_core_value_sigB2CE
        });
      if (!var_core_value_sigD407.valid) return var_core_value_sigEAE5.get(F).emit({
        reason: var_core_value_sigD407.reason ?? "unknown",
        commandId: z.id,
        unitId: var_core_value_sigCB82,
        subUnitId: var_core_value_sigCF4E,
        axis: var_core_value_sigE94C.axis,
        outlineId: var_core_value_sigB4B4.id
      }), false;
      let var_core_value_sig63F3 = [...var_core_value_sig210D.map(var_core_value_sig7F72 => ({
          id: L.id,
          params: {
            unitId: var_core_value_sigCB82,
            subUnitId: var_core_value_sigCF4E,
            outlineId: var_core_value_sig7F72.id
          }
        })), {
          id: I.id,
          params: {
            unitId: var_core_value_sigCB82,
            subUnitId: var_core_value_sigCF4E,
            outline: var_core_value_sigB4B4
          }
        }],
        var_core_value_sig6A71 = [{
          id: L.id,
          params: {
            unitId: var_core_value_sigCB82,
            subUnitId: var_core_value_sigCF4E,
            outlineId: var_core_value_sigB4B4.id
          }
        }, ...var_core_value_sig210D.map(var_core_value_sig7B2A => ({
          id: I.id,
          params: {
            unitId: var_core_value_sigCB82,
            subUnitId: var_core_value_sigCF4E,
            outline: var_core_value_sig7B2A
          }
        }))];
      return var_core_value_sig870F(var_core_value_sig63F3, var_core_value_sigEAE5.get(var_core_value_sigD948)).result ? (var_core_value_sigEAE5.get(var_core_value_sig281C).pushUndoRedo({
        unitID: var_core_value_sigCB82,
        undoMutations: var_core_value_sig6A71,
        redoMutations: var_core_value_sig63F3
      }), true) : false;
    }
  },
  B = {
    id: "sheet.mutation.clear-dimension-outlines",
    type: var_core_value_sig3D2C.MUTATION,
    handler: (var_core_value_sig3BF6, var_core_value_sig38CE) => {
      let var_core_value_sig62B7 = var_core_value_sig3BF6.get(P),
        var_core_value_sig37A8 = var_core_value_sig62B7.getOutlines(var_core_value_sig38CE.unitId, var_core_value_sig38CE.subUnitId);
      return var_core_value_sig62B7.setOutlines(var_core_value_sig38CE.unitId, var_core_value_sig38CE.subUnitId, Ce(var_core_value_sig37A8, var_core_value_sig38CE)), true;
    }
  },
  V = {
    id: "sheet.command.clear-dimension-outlines",
    type: var_core_value_sig3D2C.COMMAND,
    handler: (var_core_value_sigA90D, var_core_value_sig7A3C) => {
      if (!var_core_value_sig7A3C) return false;
      let var_core_value_sig0511 = var_core_value_sig1F40(var_core_value_sigA90D.get(var_core_value_sig3C92), var_core_value_sig7A3C);
      if (!var_core_value_sig0511) return false;
      let {
        unitId: var_core_value_sig1F44,
        subUnitId: var_core_value_sigCB04
      } = var_core_value_sig0511;
      if (!R(var_core_value_sigA90D, var_core_value_sig1F44, var_core_value_sigCB04)) return false;
      let var_core_value_sig947E = {
          unitId: var_core_value_sig1F44,
          subUnitId: var_core_value_sigCB04,
          axis: var_core_value_sig7A3C.axis,
          start: var_core_value_sig7A3C.start,
          end: var_core_value_sig7A3C.end
        },
        var_core_value_sig4545 = var_core_value_sigA90D.get(P).getOutlines(var_core_value_sig1F44, var_core_value_sigCB04).filter(var_core_value_sig06CD => w(var_core_value_sig06CD, var_core_value_sig947E) && var_core_value_sig06CD.start >= var_core_value_sig7A3C.start && var_core_value_sig06CD.end <= var_core_value_sig7A3C.end);
      if (var_core_value_sig4545.length === 0) return var_core_value_sigA90D.get(F).emit({
        reason: "clear-range-not-contain-outline",
        commandId: V.id,
        unitId: var_core_value_sig1F44,
        subUnitId: var_core_value_sigCB04,
        axis: var_core_value_sig7A3C.axis
      }), false;
      let var_core_value_sigF39A = [{
          id: B.id,
          params: {
            ...var_core_value_sig947E,
            removedOutlineIds: var_core_value_sig4545.map(var_core_value_sigA5F1 => var_core_value_sigA5F1.id)
          }
        }],
        var_core_value_sigF79C = var_core_value_sig4545.map(var_core_value_sig97A2 => ({
          id: I.id,
          params: {
            unitId: var_core_value_sig1F44,
            subUnitId: var_core_value_sigCB04,
            outline: var_core_value_sig97A2
          }
        }));
      return var_core_value_sig870F(var_core_value_sigF39A, var_core_value_sigA90D.get(var_core_value_sigD948)).result ? (var_core_value_sigA90D.get(var_core_value_sig281C).pushUndoRedo({
        unitID: var_core_value_sig1F44,
        undoMutations: var_core_value_sigF79C,
        redoMutations: var_core_value_sigF39A
      }), true) : false;
    }
  },
  ze = {
    id: "sheet.command.remove-dimension-outline",
    type: var_core_value_sig3D2C.COMMAND,
    handler: (var_core_value_sig2E54, var_core_value_sig7658) => {
      if (!var_core_value_sig7658) return false;
      let var_core_value_sigDCF5 = var_core_value_sig1F40(var_core_value_sig2E54.get(var_core_value_sig3C92), var_core_value_sig7658);
      if (!var_core_value_sigDCF5) return false;
      let {
        unitId: var_core_value_sigC786,
        subUnitId: var_core_value_sigC0D9
      } = var_core_value_sigDCF5;
      if (!R(var_core_value_sig2E54, var_core_value_sigC786, var_core_value_sigC0D9)) return false;
      let var_core_value_sigF0511 = var_core_value_sig2E54.get(P).getOutlines(var_core_value_sigC786, var_core_value_sigC0D9).find(var_core_value_sig07E9 => var_core_value_sig07E9.id === var_core_value_sig7658.outlineId);
      if (!var_core_value_sigF0511) return false;
      let var_core_value_sig5825 = [{
          id: L.id,
          params: {
            unitId: var_core_value_sigC786,
            subUnitId: var_core_value_sigC0D9,
            outlineId: var_core_value_sigF0511.id,
            outline: var_core_value_sigF0511
          }
        }],
        var_core_value_sig4EB7 = [{
          id: I.id,
          params: {
            unitId: var_core_value_sigC786,
            subUnitId: var_core_value_sigC0D9,
            outline: var_core_value_sigF0511
          }
        }];
      return var_core_value_sig870F(var_core_value_sig5825, var_core_value_sig2E54.get(var_core_value_sigD948)).result ? (var_core_value_sig2E54.get(var_core_value_sig281C).pushUndoRedo({
        unitID: var_core_value_sigC786,
        undoMutations: var_core_value_sig4EB7,
        redoMutations: var_core_value_sig5825
      }), true) : false;
    }
  },
  H = {
    id: "sheet.mutation.set-dimension-outline-collapsed",
    type: var_core_value_sig3D2C.MUTATION,
    handler: (var_core_value_sig73AF, var_core_value_sig548A) => {
      let var_core_value_sigE026 = var_core_value_sig73AF.get(P),
        var_core_value_sig339E = var_core_value_sigE026.getOutlines(var_core_value_sig548A.unitId, var_core_value_sig548A.subUnitId),
        var_core_value_sig7550 = var_core_value_sig339E.find(var_core_value_sig4F59 => var_core_value_sig4F59.id === var_core_value_sig548A.outlineId);
      return var_core_value_sig7550 && var_core_value_sigE026.setOutlines(var_core_value_sig548A.unitId, var_core_value_sig548A.subUnitId, var_core_value_sig339E.map(var_core_value_sigF564 => var_core_value_sigF564.unitId !== var_core_value_sig7550.unitId || var_core_value_sigF564.subUnitId !== var_core_value_sig7550.subUnitId || var_core_value_sigF564.axis !== var_core_value_sig7550.axis || var_core_value_sigF564.start !== var_core_value_sig7550.start || var_core_value_sigF564.end !== var_core_value_sig7550.end ? var_core_value_sigF564 : {
        ...var_core_value_sigF564,
        collapsed: var_core_value_sig548A.collapsed
      })), true;
    }
  };
function Be(var_core_value_sig2983, var_core_value_sigE1B0, var_core_value_sigD4FF, var_core_value_sig1E5B) {
  return var_core_value_sig2983 === "row" ? {
    startRow: var_core_value_sigE1B0,
    endRow: var_core_value_sigD4FF,
    startColumn: 0,
    endColumn: var_core_value_sig1E5B.getMaxColumns() - 1
  } : {
    startRow: 0,
    endRow: var_core_value_sig1E5B.getRowCount() - 1,
    startColumn: var_core_value_sigE1B0,
    endColumn: var_core_value_sigD4FF
  };
}
function Ve(var_core_value_sigB680) {
  return var_core_value_sigB680 === "row" ? var_core_value_sigB609.id : var_core_value_sig27F9.id;
}
function He(var_core_value_sig1F64) {
  return var_core_value_sig1F64 === "row" ? var_core_value_sig390D.id : var_core_value_sig393E.id;
}
function Ue(var_core_value_sigDD1C, var_core_value_sig2C39, var_core_value_sigB7D1, var_core_value_sig64F0) {
  let var_core_value_sig85B1 = var_core_value_sig2C39 ? [Be(var_core_value_sigDD1C.axis, var_core_value_sigDD1C.start, var_core_value_sigDD1C.end, var_core_value_sigB7D1)] : We(var_core_value_sigDD1C, var_core_value_sig64F0, var_core_value_sigB7D1),
    var_core_value_sig3141 = var_core_value_sig2C39 ? Ve(var_core_value_sigDD1C.axis) : He(var_core_value_sigDD1C.axis);
  return [{
    id: H.id,
    params: {
      unitId: var_core_value_sigDD1C.unitId,
      subUnitId: var_core_value_sigDD1C.subUnitId,
      outlineId: var_core_value_sigDD1C.id,
      outline: var_core_value_sigDD1C,
      collapsed: var_core_value_sig2C39
    }
  }, ...var_core_value_sig85B1.map(var_core_value_sig8CFA => ({
    id: var_core_value_sig3141,
    params: {
      unitId: var_core_value_sigDD1C.unitId,
      subUnitId: var_core_value_sigDD1C.subUnitId,
      ranges: [var_core_value_sig8CFA],
      dimensionOutlineId: var_core_value_sigDD1C.id
    }
  }))];
}
function We(var_core_value_sig2162, var_core_value_sig2EAD, var_core_value_sig6774) {
  let var_core_value_sig340D = we(var_core_value_sig2EAD.map(var_core_value_sig2E11 => Ge(var_core_value_sig2E11, var_core_value_sig2162) ? {
    ...var_core_value_sig2E11,
    collapsed: false
  } : var_core_value_sig2E11), var_core_value_sig2162.unitId, var_core_value_sig2162.subUnitId, var_core_value_sig2162.axis);
  return Ke({
    start: var_core_value_sig2162.start,
    end: var_core_value_sig2162.end
  }, var_core_value_sig340D).map(var_core_value_sig5B69 => Be(var_core_value_sig2162.axis, var_core_value_sig5B69.start, var_core_value_sig5B69.end, var_core_value_sig6774));
}
function Ge(var_core_value_sig82D4, var_core_value_sigBDE4) {
  return var_core_value_sig82D4.unitId === var_core_value_sigBDE4.unitId && var_core_value_sig82D4.subUnitId === var_core_value_sigBDE4.subUnitId && var_core_value_sig82D4.axis === var_core_value_sigBDE4.axis && var_core_value_sig82D4.start === var_core_value_sigBDE4.start && var_core_value_sig82D4.end === var_core_value_sigBDE4.end;
}
function Ke(var_core_value_sig7DF1, var_core_value_sigDC86) {
  let var_core_value_sig0B0C = var_core_value_sig7DF1.start,
    var_core_value_sigA39E = [];
  for (let var_core_value_sigB098 of var_core_value_sigDC86) if (!(var_core_value_sigB098.end < var_core_value_sig0B0C || var_core_value_sigB098.start > var_core_value_sig7DF1.end) && (var_core_value_sigB098.start > var_core_value_sig0B0C && var_core_value_sigA39E.push({
    start: var_core_value_sig0B0C,
    end: Math.min(var_core_value_sigB098.start - 1, var_core_value_sig7DF1.end)
  }), var_core_value_sig0B0C = Math.max(var_core_value_sig0B0C, var_core_value_sigB098.end + 1), var_core_value_sig0B0C > var_core_value_sig7DF1.end)) break;
  return var_core_value_sig0B0C <= var_core_value_sig7DF1.end && var_core_value_sigA39E.push({
    start: var_core_value_sig0B0C,
    end: var_core_value_sig7DF1.end
  }), var_core_value_sigA39E;
}
const qe = {
    id: "sheet.command.set-dimension-outline-collapsed",
    type: var_core_value_sig3D2C.COMMAND,
    handler: (var_core_value_sigBBEE, var_core_value_sig011D) => {
      if (!var_core_value_sig011D) return false;
      let var_core_value_sig6167 = var_core_value_sig1F40(var_core_value_sigBBEE.get(var_core_value_sig3C92), var_core_value_sig011D);
      if (!var_core_value_sig6167) return false;
      let {
        unitId: var_core_value_sig65A1,
        subUnitId: var_core_value_sig7F19,
        worksheet: var_core_value_sig7827
      } = var_core_value_sig6167;
      if (!R(var_core_value_sigBBEE, var_core_value_sig65A1, var_core_value_sig7F19)) return false;
      let var_core_value_sig652C = var_core_value_sigBBEE.get(P).getOutlines(var_core_value_sig65A1, var_core_value_sig7F19),
        var_core_value_sig7E32 = var_core_value_sig652C.find(var_core_value_sigCE71 => var_core_value_sigCE71.id === var_core_value_sig011D.outlineId);
      if (!var_core_value_sig7E32 || var_core_value_sig7E32.collapsed === var_core_value_sig011D.collapsed) return false;
      let var_core_value_sig4C07 = Ue(var_core_value_sig7E32, var_core_value_sig011D.collapsed, var_core_value_sig7827, var_core_value_sig652C),
        var_core_value_sig79AB = Ue(var_core_value_sig7E32, !var_core_value_sig011D.collapsed, var_core_value_sig7827, var_core_value_sig652C);
      return var_core_value_sig870F(var_core_value_sig4C07, var_core_value_sigBBEE.get(var_core_value_sigD948)).result ? (var_core_value_sigBBEE.get(var_core_value_sig281C).pushUndoRedo({
        unitID: var_core_value_sig65A1,
        undoMutations: var_core_value_sig79AB,
        redoMutations: var_core_value_sig4C07
      }), true) : false;
    }
  },
  U = {
    id: "sheet.mutation.transform-dimension-outlines",
    type: var_core_value_sig3D2C.MUTATION,
    handler: (var_core_value_sig8E74, var_core_value_sig104C) => {
      let var_core_value_sig841D = var_core_value_sig8E74.get(P),
        var_core_value_sig90CB = Je(var_core_value_sig841D.getOutlines(var_core_value_sig104C.unitId, var_core_value_sig104C.subUnitId), var_core_value_sig104C);
      return var_core_value_sig841D.setOutlines(var_core_value_sig104C.unitId, var_core_value_sig104C.subUnitId, var_core_value_sig90CB), true;
    }
  };
function Je(var_core_value_sigBDF5, var_core_value_sigACC6) {
  switch (var_core_value_sigACC6.type) {
    case "insert":
      return var_core_value_sigACC6.restoreOutlines ? Ye(var_core_value_sigBDF5, var_core_value_sigACC6) : D(var_core_value_sigBDF5, var_core_value_sigACC6);
    case "delete":
      return O(var_core_value_sigBDF5, var_core_value_sigACC6);
    case "move":
      return k(var_core_value_sigBDF5, var_core_value_sigACC6);
  }
}
function Ye(var_core_value_sig1614, var_core_value_sig85C3) {
  return [...var_core_value_sig1614.filter(var_core_value_sig21D8 => var_core_value_sig21D8.unitId !== var_core_value_sig85C3.unitId || var_core_value_sig21D8.subUnitId !== var_core_value_sig85C3.subUnitId || var_core_value_sig21D8.axis !== var_core_value_sig85C3.axis), ...var_core_value_sig85C3.restoreOutlines];
}
const W = "SHEET_OUTLINE_PLUGIN";
var Xe = "@univerjs-pro/sheets-outline",
  Ze = "1.0.0-insiders.20260907-70fc579";
const Qe = {};
function G(var_core_value_sigB996, var_core_value_sig4BBA) {
  return function (var_core_value_sig2B65, var_core_value_sigD7EA) {
    var_core_value_sig4BBA(var_core_value_sig2B65, var_core_value_sigD7EA, var_core_value_sigB996);
  };
}
function K(var_core_value_sig6201, var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigBB6C) {
  var var_core_value_sigE2BF = arguments.length,
    var_core_value_sigB8C7 = var_core_value_sigE2BF < 3 ? var_core_value_sig5151 : var_core_value_sigBB6C === null ? var_core_value_sigBB6C = Object.getOwnPropertyDescriptor(var_core_value_sig5151, var_core_value_sigB542) : var_core_value_sigBB6C,
    var_core_value_sigA56E;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigB8C7 = Reflect.decorate(var_core_value_sig6201, var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigBB6C);else {
    for (var var_core_value_sig1998 = var_core_value_sig6201.length - 1; var_core_value_sig1998 >= 0; var_core_value_sig1998--) (var_core_value_sigA56E = var_core_value_sig6201[var_core_value_sig1998]) && (var_core_value_sigB8C7 = (var_core_value_sigE2BF < 3 ? var_core_value_sigA56E(var_core_value_sigB8C7) : var_core_value_sigE2BF > 3 ? var_core_value_sigA56E(var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigB8C7) : var_core_value_sigA56E(var_core_value_sig5151, var_core_value_sigB542)) || var_core_value_sigB8C7);
  }
  return var_core_value_sigE2BF > 3 && var_core_value_sigB8C7 && Object.defineProperty(var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigB8C7), var_core_value_sigB8C7;
}
const q = {
  redos: [],
  undos: [],
  preRedos: [],
  preUndos: []
};
let J = class extends var_core_value_sig938F {
  constructor(var_core_value_sigB33B, var_core_value_sig24B9, var_core_value_sigE627, var_core_value_sigEF3E) {
    super(), this._univerInstanceService = var_core_value_sigB33B, this._sheetInterceptorService = var_core_value_sig24B9, this._sheetsOutlineModel = var_core_value_sigE627, this._sheetsOutlineErrorService = var_core_value_sigEF3E, this._initCommandInterceptor();
  }
  _initCommandInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService["interceptCommand"]({
      getMutations: var_core_value_sigB577 => $e(var_core_value_sigB577, (var_core_value_sig3D7D, var_core_value_sig27E5) => this._sheetsOutlineModel["getOutlines"](var_core_value_sig3D7D, var_core_value_sig27E5), this._getCommandScope(var_core_value_sigB577.params), var_core_value_sig8061 => this._sheetsOutlineErrorService["emit"](var_core_value_sig8061))
    }));
  }
  _getCommandScope(var_core_value_sig273D) {
    let var_core_value_sig9A0D = var_core_value_sig273D,
      var_core_value_sigA319 = var_core_value_sig9A0D != null && var_core_value_sig9A0D.unitId ? this._univerInstanceService["getUnit"](var_core_value_sig9A0D.unitId, var_core_value_sig062A.UNIVER_SHEET) : this._univerInstanceService["getCurrentUnitOfType"](var_core_value_sig062A.UNIVER_SHEET);
    if (!var_core_value_sigA319) return;
    let var_core_value_sig2D58 = var_core_value_sig9A0D != null && var_core_value_sig9A0D.subUnitId ? var_core_value_sigA319.getSheetBySheetId(var_core_value_sig9A0D.subUnitId) : var_core_value_sigA319.getActiveSheet();
    if (var_core_value_sig2D58) return {
      unitId: var_core_value_sigA319.getUnitId(),
      subUnitId: var_core_value_sig2D58.getSheetId()
    };
  }
};
J = K([G(0, var_core_value_sig3C92), G(1, var_core_value_sigB16B(var_core_value_sigC928)), G(2, var_core_value_sigB16B(P)), G(3, var_core_value_sigB16B(F))], J);
function $e(var_core_value_sigFF19, var_core_value_sig43B8, var_core_value_sigD98F, var_core_value_sig66C0) {
  let var_core_value_sig9D15 = tt(var_core_value_sigFF19, var_core_value_sigD98F);
  if (!var_core_value_sig9D15) return Z();
  let var_core_value_sigB785 = var_core_value_sig43B8(var_core_value_sig9D15.unitId, var_core_value_sig9D15.subUnitId);
  if (!var_core_value_sigB785.some(var_core_value_sig223F => var_core_value_sig223F.axis === var_core_value_sig9D15.axis)) return Z();
  et(var_core_value_sigB785, var_core_value_sig9D15, var_core_value_sigFF19.id, var_core_value_sig66C0);
  let var_core_value_sig130F = it(var_core_value_sig9D15, var_core_value_sigB785);
  return {
    redos: [{
      id: U.id,
      params: var_core_value_sig9D15
    }],
    undos: [{
      id: U.id,
      params: var_core_value_sig130F
    }],
    preRedos: [],
    preUndos: []
  };
}
function et(var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F, var_core_value_sigDE3D) {
  try {
    switch (var_core_value_sig52F7.type) {
      case "insert":
        D(var_core_value_sigC0E3, var_core_value_sig52F7);
        break;
      case "delete":
        O(var_core_value_sigC0E3, var_core_value_sig52F7);
        break;
      case "move":
        k(var_core_value_sigC0E3, var_core_value_sig52F7);
        break;
    }
  } catch (var_core_value_sigD749) {
    throw var_core_value_sigDE3D == null || var_core_value_sigDE3D({
      reason: ye(var_core_value_sigD749),
      commandId: var_core_value_sig866F,
      unitId: var_core_value_sig52F7.unitId,
      subUnitId: var_core_value_sig52F7.subUnitId,
      axis: var_core_value_sig52F7.axis,
      outlineId: be(var_core_value_sigD749)
    }), new var_core_value_sigC56D(var_core_value_sigD749 instanceof Error ? var_core_value_sigD749.message : "Invalid\x20dimension\x20outline\x20mutation");
  }
}
function tt(var_core_value_sigF175, var_core_value_sig6A18) {
  switch (var_core_value_sigF175.id) {
    case var_core_value_sig26EC.id:
      return Y(var_core_value_sigF175.params, "row", var_core_value_sig6A18);
    case var_core_value_sigB683.id:
      return Y(var_core_value_sigF175.params, "column", var_core_value_sig6A18);
    case var_core_value_sigF7EF.id:
      return nt(var_core_value_sigF175.params, "row", var_core_value_sig6A18);
    case var_core_value_sig6A78.id:
      return nt(var_core_value_sigF175.params, "column", var_core_value_sig6A18);
    case var_core_value_sig36E7.id:
      return rt(var_core_value_sigF175.params, "row", var_core_value_sig6A18);
    case var_core_value_sigEEDB.id:
      return rt(var_core_value_sigF175.params, "column", var_core_value_sig6A18);
    default:
      return null;
  }
}
function Y(var_core_value_sig4E3D, var_core_value_sig49B0, var_core_value_sig2547) {
  let var_core_value_sigBCA9 = X(var_core_value_sig4E3D, var_core_value_sig2547);
  if (!(var_core_value_sig4E3D != null && var_core_value_sig4E3D.range) || !var_core_value_sigBCA9) return null;
  let var_core_value_sig4CDF = var_core_value_sig49B0 === "row" ? var_core_value_sig4E3D.range["startRow"] : var_core_value_sig4E3D.range["startColumn"],
    var_core_value_sig3F79 = var_core_value_sig49B0 === "row" ? var_core_value_sig4E3D.range["endRow"] : var_core_value_sig4E3D.range["endColumn"];
  return {
    ...var_core_value_sigBCA9,
    axis: var_core_value_sig49B0,
    type: "insert",
    index: var_core_value_sig4CDF,
    count: var_core_value_sig3F79 - var_core_value_sig4CDF + 1
  };
}
function nt(var_core_value_sig880E, var_core_value_sigC9ED, var_core_value_sigB57B) {
  let var_core_value_sig780B = X(var_core_value_sig880E, var_core_value_sigB57B);
  if (!(var_core_value_sig880E != null && var_core_value_sig880E.range) || !var_core_value_sig780B) return null;
  let var_core_value_sig7D1B = var_core_value_sigC9ED === "row" ? var_core_value_sig880E.range["startRow"] : var_core_value_sig880E.range["startColumn"],
    var_core_value_sig7BE0 = var_core_value_sigC9ED === "row" ? var_core_value_sig880E.range["endRow"] : var_core_value_sig880E.range["endColumn"];
  return {
    ...var_core_value_sig780B,
    axis: var_core_value_sigC9ED,
    type: "delete",
    start: var_core_value_sig7D1B,
    end: var_core_value_sig7BE0
  };
}
function rt(var_core_value_sig7D40, var_core_value_sig6C7E, var_core_value_sig68BE) {
  let var_core_value_sig04C6 = X(var_core_value_sig7D40, var_core_value_sig68BE);
  if (!(var_core_value_sig7D40 != null && var_core_value_sig7D40.fromRange) || !var_core_value_sig7D40.toRange || !var_core_value_sig04C6) return null;
  let var_core_value_sigCA05 = var_core_value_sig6C7E === "row" ? var_core_value_sig7D40.fromRange["startRow"] : var_core_value_sig7D40.fromRange["startColumn"],
    var_core_value_sig2F2B = var_core_value_sig6C7E === "row" ? var_core_value_sig7D40.fromRange["endRow"] : var_core_value_sig7D40.fromRange["endColumn"],
    var_core_value_sig70AF = var_core_value_sig6C7E === "row" ? var_core_value_sig7D40.toRange["startRow"] : var_core_value_sig7D40.toRange["startColumn"];
  return {
    ...var_core_value_sig04C6,
    axis: var_core_value_sig6C7E,
    type: "move",
    sourceStart: var_core_value_sigCA05,
    sourceEnd: var_core_value_sig2F2B,
    destinationIndex: var_core_value_sig70AF
  };
}
function it(var_core_value_sigD04E, var_core_value_sigB99B) {
  switch (var_core_value_sigD04E.type) {
    case "insert":
      return {
        unitId: var_core_value_sigD04E.unitId,
        subUnitId: var_core_value_sigD04E.subUnitId,
        axis: var_core_value_sigD04E.axis,
        type: "delete",
        start: var_core_value_sigD04E.index,
        end: var_core_value_sigD04E.index + var_core_value_sigD04E.count - 1
      };
    case "delete":
      return {
        unitId: var_core_value_sigD04E.unitId,
        subUnitId: var_core_value_sigD04E.subUnitId,
        axis: var_core_value_sigD04E.axis,
        type: "insert",
        index: var_core_value_sigD04E.start,
        count: var_core_value_sigD04E.end - var_core_value_sigD04E.start + 1,
        restoreOutlines: var_core_value_sigB99B.filter(var_core_value_sig9572 => var_core_value_sig9572.unitId === var_core_value_sigD04E.unitId && var_core_value_sig9572.subUnitId === var_core_value_sigD04E.subUnitId && var_core_value_sig9572.axis === var_core_value_sigD04E.axis)
      };
    case "move":
      return at(var_core_value_sigD04E);
  }
}
function at(var_core_value_sig5A75) {
  let var_core_value_sig7BAF = var_core_value_sig5A75.sourceEnd - var_core_value_sig5A75.sourceStart + 1;
  return var_core_value_sig5A75.destinationIndex >= var_core_value_sig5A75.sourceStart && var_core_value_sig5A75.destinationIndex <= var_core_value_sig5A75.sourceEnd + 1 ? {
    ...var_core_value_sig5A75
  } : var_core_value_sig5A75.destinationIndex > var_core_value_sig5A75.sourceEnd + 1 ? {
    ...var_core_value_sig5A75,
    sourceStart: var_core_value_sig5A75.destinationIndex - var_core_value_sig7BAF,
    sourceEnd: var_core_value_sig5A75.destinationIndex - 1,
    destinationIndex: var_core_value_sig5A75.sourceStart
  } : {
    ...var_core_value_sig5A75,
    sourceStart: var_core_value_sig5A75.destinationIndex,
    sourceEnd: var_core_value_sig5A75.destinationIndex + var_core_value_sig7BAF - 1,
    destinationIndex: var_core_value_sig5A75.sourceEnd + 1
  };
}
function X(var_core_value_sig8F69, var_core_value_sig6884) {
  let var_core_value_sig066E = (var_core_value_sig8F69 == null ? undefined : var_core_value_sig8F69.unitId) ?? (var_core_value_sig6884 == null ? undefined : var_core_value_sig6884.unitId),
    var_core_value_sig9B0D = (var_core_value_sig8F69 == null ? undefined : var_core_value_sig8F69.subUnitId) ?? (var_core_value_sig6884 == null ? undefined : var_core_value_sig6884.subUnitId);
  return var_core_value_sig066E && var_core_value_sig9B0D ? {
    unitId: var_core_value_sig066E,
    subUnitId: var_core_value_sig9B0D
  } : null;
}
function Z() {
  return {
    redos: [...q.redos],
    undos: [...q.undos],
    preRedos: [...(q.preRedos ?? [])],
    preUndos: [...(q.preUndos ?? [])]
  };
}
let Q = class extends var_core_value_sig938F {
  constructor(var_core_value_sigCFFA, var_core_value_sig58C1) {
    super(), this._resourceManagerService = var_core_value_sigCFFA, this._sheetsOutlineModel = var_core_value_sig58C1, this._initResource();
  }
  _initResource() {
    this.disposeWithMe(this._resourceManagerService["registerPluginResource"]({
      pluginName: W,
      businesses: [var_core_value_sig062A.UNIVER_SHEET],
      toJson: var_core_value_sigD873 => JSON.stringify(this._sheetsOutlineModel["serialize"](var_core_value_sigD873)),
      parseJson: var_core_value_sigA12B => JSON.parse(var_core_value_sigA12B),
      onLoad: (var_core_value_sigF230, var_core_value_sig09B8) => this._sheetsOutlineModel["deserialize"](var_core_value_sigF230, var_core_value_sig09B8),
      onUnLoad: var_core_value_sig6F91 => this._sheetsOutlineModel["removeUnit"](var_core_value_sig6F91)
    }));
  }
};
Q = K([G(0, var_core_value_sigED71), G(1, var_core_value_sigB16B(P))], Q);
let $ = class extends var_core_value_sigE722 {
  constructor(var_core_value_sig5090 = Qe, var_core_value_sigC368, var_core_value_sigAD56, var_core_value_sigDB4A) {
    super(), this._config = var_core_value_sig5090, this._injector = var_core_value_sigC368, this._commandService = var_core_value_sigAD56, this._configService = var_core_value_sigDB4A;
    let {
      ...var_core_value_sig6418
    } = var_core_value_sig8B32({}, Qe, this._config);
    this._configService["setConfig"]("sheets-outline.config", var_core_value_sig6418);
  }
  onStarting() {
    this._injector["add"]([P]), this._injector["add"]([F]), this._injector["add"]([Q]), this._injector["add"]([J]), this._initRegisterCommand(), this._injector["get"](P), this._injector["get"](F), this._injector["get"](Q), this._injector["get"](J);
  }
  _initRegisterCommand() {
    [z, ze, qe, V].forEach(var_core_value_sigF9C7 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sigF9C7));
    }), [I, L, H, B, U].forEach(var_core_value_sig8895 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig8895));
    });
  }
};
N($, "pluginName", W), N($, "packageName", Xe), N($, "version", Ze), N($, "type", var_core_value_sig062A.UNIVER_SHEET), $ = K([var_core_value_sig3A17(var_core_value_sigEB6A, var_core_value_sig18E0), G(1, var_core_value_sigB16B(var_core_value_sig585D)), G(2, var_core_value_sigD948), G(3, var_core_value_sigBE5E)], $);
export { z as AddDimensionOutlineCommand, I as AddDimensionOutlineMutation, V as ClearDimensionOutlinesCommand, B as ClearDimensionOutlinesMutation, _e as DimensionOutlineAxis, ve as DimensionOutlineErrorReason, ze as RemoveDimensionOutlineCommand, L as RemoveDimensionOutlineMutation, W as SHEET_OUTLINE_PLUGIN, qe as SetDimensionOutlineCollapsedCommand, H as SetDimensionOutlineCollapsedMutation, F as SheetsOutlineErrorService, P as SheetsOutlineModel, U as TransformDimensionOutlinesMutation, $ as UniverSheetsOutlinePlugin, T as buildDimensionOutlineTree, E as canAddDimensionOutline, Ie as getDimensionOutlineViewPermission$, R as hasDimensionOutlineViewPermission, O as transformOutlinesByDelete, D as transformOutlinesByInsert, k as transformOutlinesByMove };
