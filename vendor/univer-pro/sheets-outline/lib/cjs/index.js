Object.defineProperty(exports, Symbol.toStringTag, {
  value: "Module"
});
let e = require("@univerjs/core"),
  t = require("@univerjs/sheets"),
  n = require("rxjs"),
  r = require("rxjs/operators"),
  i = require("@univerjs-pro/license"),
  a = function (var_core_value_sig1896) {
    return var_core_value_sig1896.ROW = "row", var_core_value_sig1896.COLUMN = "column", var_core_value_sig1896;
  }({}),
  o = function (var_core_value_sig0285) {
    return var_core_value_sig0285.INVALID_RANGE = "invalid-range", var_core_value_sig0285.OUT_OF_BOUNDS = "out-of-bounds", var_core_value_sig0285.CROSSING = "crossing", var_core_value_sig0285.MAX_DEPTH = "max-depth", var_core_value_sig0285.MOVE_SPLITS_OUTLINE = "move-splits-outline", var_core_value_sig0285.CLEAR_RANGE_NOT_CONTAIN_OUTLINE = "clear-range-not-contain-outline", var_core_value_sig0285.UNKNOWN = "unknown", var_core_value_sig0285;
  }({});
var s = class extends Error {
  constructor(var_core_value_sigC80B, var_core_value_sig284F, var_core_value_sigE154) {
    super(var_core_value_sig284F), this.reason = var_core_value_sigC80B, this.outlineId = var_core_value_sigE154, this.name = "DimensionOutlineError";
  }
};
function c(var_core_value_sig777D) {
  return var_core_value_sig777D instanceof s ? var_core_value_sig777D.reason : var_core_value_sig777D instanceof Error ? var_core_value_sig777D.message["includes"]("split dimension outline") ? "move-splits-outline" : var_core_value_sig777D.message["includes"]("depth") ? "max-depth" : var_core_value_sig777D.message["includes"]("Crossing") ? "crossing" : var_core_value_sig777D.message["includes"]("range") ? "invalid-range" : "unknown" : "unknown";
}
function l(var_core_value_sig3F4C) {
  return var_core_value_sig3F4C instanceof s ? var_core_value_sig3F4C.outlineId : undefined;
}
const u = 2 ** 53 - 1;
function d(var_core_value_sigD65A, var_core_value_sig5A13) {
  return var_core_value_sigD65A.unitId === var_core_value_sig5A13.unitId && var_core_value_sigD65A.subUnitId === var_core_value_sig5A13.subUnitId && var_core_value_sigD65A.axis === var_core_value_sig5A13.axis;
}
function f(var_core_value_sigF593, var_core_value_sig3607 = {}) {
  let var_core_value_sigB512 = var_core_value_sig3607.maxDepth ?? 8,
    var_core_value_sigF2E6 = new Map();
  for (let var_core_value_sig4632 of var_core_value_sigF593) {
    let var_core_value_sig4D4C = var_core_value_sig4632.unitId + ":" + var_core_value_sig4632.subUnitId + ":" + var_core_value_sig4632.axis,
      var_core_value_sigC9E0 = var_core_value_sigF2E6.get(var_core_value_sig4D4C);
    var_core_value_sigC9E0 ? var_core_value_sigC9E0.push(var_core_value_sig4632) : var_core_value_sigF2E6.set(var_core_value_sig4D4C, [var_core_value_sig4632]);
  }
  let var_core_value_sig34C8 = [];
  for (let var_core_value_sig12F2 of var_core_value_sigF2E6.values()) {
    let var_core_value_sig76BA = [...var_core_value_sig12F2].sort(S),
      var_core_value_sigFBFA = [];
    for (let var_core_value_sig3EEE of var_core_value_sig76BA) {
      for (se(var_core_value_sig3EEE); var_core_value_sigFBFA.length > 0 && var_core_value_sig3EEE.start > var_core_value_sigFBFA[var_core_value_sigFBFA.length - 1].end;) var_core_value_sigFBFA.pop();
      let var_core_value_sig7524 = var_core_value_sigFBFA[var_core_value_sigFBFA.length - 1];
      if (var_core_value_sig7524 && var_core_value_sig3EEE.end > var_core_value_sig7524.end) throw new s("crossing", "Crossing dimension outlines are not allowed", var_core_value_sig3EEE.id);
      let var_core_value_sig2AD8 = var_core_value_sig7524 ? var_core_value_sig7524.depth + 1 : 1;
      if (var_core_value_sig2AD8 > var_core_value_sigB512) throw new s("max-depth", "Dimension\x20outline\x20depth\x20cannot\x20exceed\x20" + var_core_value_sigB512, var_core_value_sig3EEE.id);
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
function p(var_core_value_sigB744, var_core_value_sigEAE2, var_core_value_sigE68A = {}) {
  if (var_core_value_sigEAE2.start < 0 || var_core_value_sigEAE2.start > var_core_value_sigEAE2.end) return {
    valid: false,
    reason: "invalid-range"
  };
  if (var_core_value_sigE68A.maxIndex != null && var_core_value_sigEAE2.end >= var_core_value_sigE68A.maxIndex) return {
    valid: false,
    reason: "out-of-bounds"
  };
  let var_core_value_sig3E68 = var_core_value_sigB744.filter(var_core_value_sig2259 => d(var_core_value_sig2259, var_core_value_sigEAE2));
  for (let var_core_value_sig9E2F of var_core_value_sig3E68) if (C(var_core_value_sig9E2F, var_core_value_sigEAE2)) return {
    valid: false,
    reason: "crossing"
  };
  try {
    f([...var_core_value_sigB744, var_core_value_sigEAE2], var_core_value_sigE68A);
  } catch (var_core_value_sigD082) {
    let var_core_value_sigDBB7 = c(var_core_value_sigD082);
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
function m(var_core_value_sigF4C5, var_core_value_sig5410, var_core_value_sig492F = {}) {
  let var_core_value_sig8EA0 = p(var_core_value_sigF4C5, var_core_value_sig5410, var_core_value_sig492F);
  if (!var_core_value_sig8EA0.valid) throw Error(var_core_value_sig8EA0.reason ?? "invalid-dimension-outline");
  return [...var_core_value_sigF4C5, var_core_value_sig5410];
}
function ee(var_core_value_sigA6F6, var_core_value_sigCDDA) {
  let var_core_value_sigE243 = var_core_value_sigCDDA.start,
    var_core_value_sig74A8 = var_core_value_sigCDDA.end,
    var_core_value_sig21B2 = [],
    var_core_value_sigDE08 = true;
  for (; var_core_value_sigDE08;) {
    var_core_value_sigDE08 = false;
    for (let var_core_value_sigBC46 of var_core_value_sigA6F6) var_core_value_sig21B2.includes(var_core_value_sigBC46) || !d(var_core_value_sigBC46, var_core_value_sigCDDA) || !ae(var_core_value_sigBC46.start, var_core_value_sigBC46.end, var_core_value_sigE243, var_core_value_sig74A8) || (var_core_value_sig21B2.push(var_core_value_sigBC46), var_core_value_sigE243 = Math.min(var_core_value_sigE243, var_core_value_sigBC46.start), var_core_value_sig74A8 = Math.max(var_core_value_sig74A8, var_core_value_sigBC46.end), var_core_value_sigDE08 = true);
  }
  if (var_core_value_sig21B2.length === 0) return null;
  let [var_core_value_sigACCB] = [...var_core_value_sig21B2].sort(S);
  return {
    mergedOutline: {
      ...var_core_value_sigACCB,
      start: var_core_value_sigE243,
      end: var_core_value_sig74A8
    },
    mergedOutlines: var_core_value_sig21B2
  };
}
function h(var_core_value_sig7F33, var_core_value_sig0C53) {
  return var_core_value_sig7F33.filter(var_core_value_sigD0A8 => !d(var_core_value_sigD0A8, var_core_value_sig0C53) || !(var_core_value_sigD0A8.start >= var_core_value_sig0C53.start && var_core_value_sigD0A8.end <= var_core_value_sig0C53.end));
}
function g(var_core_value_sigEA04, var_core_value_sig7A62, var_core_value_sig8109, var_core_value_sig7565) {
  return _(var_core_value_sigEA04.filter(var_core_value_sigF4B9 => var_core_value_sigF4B9.unitId === var_core_value_sig7A62 && var_core_value_sigF4B9.subUnitId === var_core_value_sig8109 && var_core_value_sigF4B9.axis === var_core_value_sig7565 && var_core_value_sigF4B9.collapsed).map(var_core_value_sig5CEE => ({
    start: var_core_value_sig5CEE.start,
    end: var_core_value_sig5CEE.end
  })));
}
function _(var_core_value_sigD4FB) {
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
function v(var_core_value_sig7442, var_core_value_sigDF87) {
  return var_core_value_sigDF87.count <= 0 ? var_core_value_sig7442 : x(var_core_value_sig7442.map(var_core_value_sigE90F => d(var_core_value_sigE90F, var_core_value_sigDF87) ? var_core_value_sigDF87.index <= var_core_value_sigE90F.start ? {
    ...var_core_value_sigE90F,
    start: var_core_value_sigE90F.start + var_core_value_sigDF87.count,
    end: var_core_value_sigE90F.end + var_core_value_sigDF87.count
  } : var_core_value_sigE90F.start < var_core_value_sigDF87.index && var_core_value_sigDF87.index <= var_core_value_sigE90F.end ? {
    ...var_core_value_sigE90F,
    end: var_core_value_sigE90F.end + var_core_value_sigDF87.count
  } : var_core_value_sigE90F : var_core_value_sigE90F));
}
function y(var_core_value_sig9EE0, var_core_value_sigF051) {
  if (var_core_value_sigF051.start > var_core_value_sigF051.end) return var_core_value_sig9EE0;
  let var_core_value_sig0B45 = var_core_value_sigF051.end - var_core_value_sigF051.start + 1,
    var_core_value_sig36F8 = [];
  for (let var_core_value_sigEFD4 of var_core_value_sig9EE0) {
    if (!d(var_core_value_sigEFD4, var_core_value_sigF051)) {
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
  return x(var_core_value_sig36F8);
}
function b(var_core_value_sig03E1, var_core_value_sigBB57) {
  if (var_core_value_sigBB57.sourceStart > var_core_value_sigBB57.sourceEnd) return var_core_value_sig03E1;
  let var_core_value_sig7C4A = [];
  for (let var_core_value_sig861B of var_core_value_sig03E1) {
    if (!d(var_core_value_sig861B, var_core_value_sigBB57)) {
      var_core_value_sig7C4A.push(var_core_value_sig861B);
      continue;
    }
    let var_core_value_sig26DB = te(var_core_value_sig861B, var_core_value_sigBB57);
    if (var_core_value_sig26DB.type === "split") throw new s("move-splits-outline", "Move would split dimension outline: " + var_core_value_sig861B.id, var_core_value_sig861B.id);
    var_core_value_sig7C4A.push(var_core_value_sig26DB.outline);
  }
  return x(var_core_value_sig7C4A);
}
function te(var_core_value_sigE799, var_core_value_sigB601) {
  let var_core_value_sig8B71 = ne(var_core_value_sigB601.sourceStart, var_core_value_sigB601.sourceEnd + 1, var_core_value_sigB601.destinationIndex),
    var_core_value_sigAEFB = [],
    var_core_value_sig826B = {
      start: var_core_value_sigE799.start,
      end: var_core_value_sigE799.end + 1
    };
  for (let var_core_value_sig5237 of var_core_value_sig8B71) {
    let var_core_value_sigF0F9 = re(var_core_value_sig826B, var_core_value_sig5237.range);
    var_core_value_sigF0F9 && var_core_value_sigAEFB.push({
      start: var_core_value_sigF0F9.start + var_core_value_sig5237.offset,
      end: var_core_value_sigF0F9.end + var_core_value_sig5237.offset
    });
  }
  let var_core_value_sigCF89 = ie(var_core_value_sigAEFB);
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
function ne(var_core_value_sig00CB, var_core_value_sig77EE, var_core_value_sig9F76) {
  let var_core_value_sigB008 = var_core_value_sig77EE - var_core_value_sig00CB;
  if (var_core_value_sigB008 <= 0) throw Error("Invalid dimension outline move source range");
  return var_core_value_sig9F76 >= var_core_value_sig00CB && var_core_value_sig9F76 <= var_core_value_sig77EE ? [{
    range: {
      start: 0,
      end: u
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
      end: u
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
      end: u
    },
    offset: 0
  }];
}
function re(var_core_value_sig8721, var_core_value_sig08BA) {
  let var_core_value_sigDBB5 = Math.max(var_core_value_sig8721.start, var_core_value_sig08BA.start),
    var_core_value_sigCFAC = Math.min(var_core_value_sig8721.end, var_core_value_sig08BA.end);
  return var_core_value_sigDBB5 >= var_core_value_sigCFAC ? null : {
    start: var_core_value_sigDBB5,
    end: var_core_value_sigCFAC
  };
}
function ie(var_core_value_sig237B) {
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
function ae(var_core_value_sig3C5B, var_core_value_sig200B, var_core_value_sig3863, var_core_value_sigC97C) {
  return var_core_value_sig200B + 1 === var_core_value_sig3863 || var_core_value_sigC97C + 1 === var_core_value_sig3C5B;
}
function x(var_core_value_sigC4B1) {
  let var_core_value_sig1BD9 = oe(var_core_value_sigC4B1);
  return f(var_core_value_sig1BD9), var_core_value_sig1BD9;
}
function oe(var_core_value_sigE43E) {
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
function S(var_core_value_sigCAD5, var_core_value_sigE503) {
  return var_core_value_sigCAD5.unitId === var_core_value_sigE503.unitId ? var_core_value_sigCAD5.subUnitId === var_core_value_sigE503.subUnitId ? var_core_value_sigCAD5.axis === var_core_value_sigE503.axis ? var_core_value_sigCAD5.start === var_core_value_sigE503.start ? var_core_value_sigE503.end - var_core_value_sigCAD5.end : var_core_value_sigCAD5.start - var_core_value_sigE503.start : var_core_value_sigCAD5.axis["localeCompare"](var_core_value_sigE503.axis) : var_core_value_sigCAD5.subUnitId["localeCompare"](var_core_value_sigE503.subUnitId) : var_core_value_sigCAD5.unitId["localeCompare"](var_core_value_sigE503.unitId);
}
function se(var_core_value_sig48DD) {
  if (var_core_value_sig48DD.start > var_core_value_sig48DD.end) throw new s("invalid-range", "Invalid outline range", var_core_value_sig48DD.id);
}
function C(var_core_value_sig5E6A, var_core_value_sigB7FC) {
  let var_core_value_sig9CD9 = var_core_value_sig5E6A.start <= var_core_value_sigB7FC.end && var_core_value_sigB7FC.start <= var_core_value_sig5E6A.end,
    var_core_value_sigFD0C = var_core_value_sig5E6A.start <= var_core_value_sigB7FC.start && var_core_value_sigB7FC.end <= var_core_value_sig5E6A.end,
    var_core_value_sig849B = var_core_value_sigB7FC.start <= var_core_value_sig5E6A.start && var_core_value_sig5E6A.end <= var_core_value_sigB7FC.end;
  return var_core_value_sig9CD9 && !var_core_value_sigFD0C && !var_core_value_sig849B;
}
function w(var_core_value_sig5F1A) {
  "@babel/helpers - typeof";

  return w = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (var_core_value_sig9C9F) {
    return typeof var_core_value_sig9C9F;
  } : function (var_core_value_sigFDEA) {
    return var_core_value_sigFDEA && typeof Symbol == "function" && var_core_value_sigFDEA.constructor === Symbol && var_core_value_sigFDEA !== Symbol.prototype ? "symbol" : typeof var_core_value_sigFDEA;
  }, w(var_core_value_sig5F1A);
}
function ce(var_core_value_sigB455, var_core_value_sig5241) {
  if (w(var_core_value_sigB455) != "object" || !var_core_value_sigB455) return var_core_value_sigB455;
  var var_core_value_sigC6E5 = var_core_value_sigB455[Symbol.toPrimitive];
  if (var_core_value_sigC6E5 !== undefined) {
    var var_core_value_sigCEFB = var_core_value_sigC6E5.call(var_core_value_sigB455, var_core_value_sig5241 || "default");
    if (w(var_core_value_sigCEFB) != "object") return var_core_value_sigCEFB;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig5241 === "string" ? String : Number)(var_core_value_sigB455);
}
function le(var_core_value_sig1537) {
  var var_core_value_sigE4C6 = ce(var_core_value_sig1537, "string");
  return w(var_core_value_sigE4C6) == "symbol" ? var_core_value_sigE4C6 : var_core_value_sigE4C6 + "";
}
function T(var_core_value_sig4313, var_core_value_sigFC87, var_core_value_sig156F) {
  return (var_core_value_sigFC87 = le(var_core_value_sigFC87)) in var_core_value_sig4313 ? Object.defineProperty(var_core_value_sig4313, var_core_value_sigFC87, {
    value: var_core_value_sig156F,
    enumerable: true,
    configurable: true,
    writable: true
  }) : var_core_value_sig4313[var_core_value_sigFC87] = var_core_value_sig156F, var_core_value_sig4313;
}
var E = class extends e.Disposable {
    constructor(...var_core_value_sig86D0) {
      super(...var_core_value_sig86D0), T(this, "_outlines", new Map()), T(this, "_change$", new n["Subject"]()), T(this, "change$", this._change$["asObservable"]());
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
  D = class extends e.Disposable {
    constructor(...var_core_value_sig20C8) {
      super(...var_core_value_sig20C8), T(this, "_error$", new n["Subject"]()), T(this, "error$", this._error$["asObservable"]());
    }
    emit(var_core_value_sigE9A7) {
      this._error$["next"](var_core_value_sigE9A7);
    }
    dispose() {
      super.dispose(), this._error$["complete"]();
    }
  };
const O = {
    id: "sheet.mutation.add-dimension-outline",
    type: e.CommandType["MUTATION"],
    handler: (var_core_value_sigDD51, var_core_value_sigF057) => {
      let var_core_value_sig72F6 = var_core_value_sigDD51.get(E),
        var_core_value_sig9FBA = var_core_value_sig72F6.getOutlines(var_core_value_sigF057.unitId, var_core_value_sigF057.subUnitId);
      return var_core_value_sig72F6.setOutlines(var_core_value_sigF057.unitId, var_core_value_sigF057.subUnitId, m(var_core_value_sig9FBA, var_core_value_sigF057.outline)), true;
    }
  },
  k = {
    id: "sheet.mutation.remove-dimension-outline",
    type: e.CommandType["MUTATION"],
    handler: (var_core_value_sigFE01, var_core_value_sigA2CE) => {
      let var_core_value_sig1975 = var_core_value_sigFE01.get(E),
        var_core_value_sig6EA1 = var_core_value_sig1975.getOutlines(var_core_value_sigA2CE.unitId, var_core_value_sigA2CE.subUnitId);
      return var_core_value_sig1975.setOutlines(var_core_value_sigA2CE.unitId, var_core_value_sigA2CE.subUnitId, var_core_value_sig6EA1.filter(var_core_value_sigBECE => var_core_value_sigBECE.id !== var_core_value_sigA2CE.outlineId)), true;
    }
  };
function A(var_core_value_sig029F, var_core_value_sig3767, var_core_value_sig670B) {
  let var_core_value_sig6912 = de(var_core_value_sig029F);
  return !var_core_value_sig6912 || var_core_value_sig6912.permissionCheckWithoutRange({
    workbookTypes: [t.WorkbookViewPermission],
    worksheetTypes: [t.WorksheetViewPermission]
  }, var_core_value_sig3767, var_core_value_sig670B);
}
function ue(var_core_value_sigE235, var_core_value_sig7664, var_core_value_sig2281) {
  let var_core_value_sig5E86 = fe(var_core_value_sigE235);
  return ((var_core_value_sig5E86 == null ? undefined : var_core_value_sig5E86.permissionPointUpdate$) ?? (0, n.of)(null)).pipe((0, r.debounceTime)(100), (0, r.startWith)(null), (0, r.map)(() => A(var_core_value_sigE235, var_core_value_sig7664, var_core_value_sig2281)));
}
function de(var_core_value_sig6998) {
  if (typeof var_core_value_sig6998.has == "function" && !var_core_value_sig6998.has(t.SheetPermissionCheckController)) return null;
  try {
    return var_core_value_sig6998.get(t.SheetPermissionCheckController);
  } catch {
    return null;
  }
}
function fe(var_core_value_sigF639) {
  if (typeof var_core_value_sigF639.has == "function" && !var_core_value_sigF639.has(e.IPermissionService)) return null;
  try {
    return var_core_value_sigF639.get(e.IPermissionService);
  } catch {
    return null;
  }
}
const j = {
    id: "sheet.command.add-dimension-outline",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sigEAE5, var_core_value_sigE94C) => {
      if (!var_core_value_sigE94C) return false;
      let var_core_value_sig6D47 = (0, t.getSheetCommandTarget)(var_core_value_sigEAE5.get(e.IUniverInstanceService), var_core_value_sigE94C);
      if (!var_core_value_sig6D47) return false;
      let {
        unitId: var_core_value_sigCB82,
        subUnitId: var_core_value_sigCF4E,
        worksheet: var_core_value_sig6CAD
      } = var_core_value_sig6D47;
      if (!A(var_core_value_sigEAE5, var_core_value_sigCB82, var_core_value_sigCF4E)) return false;
      let var_core_value_sig8CF5 = var_core_value_sigEAE5.get(E),
        var_core_value_sigDDD7 = {
          id: "dimension-outline-" + (0, e.generateRandomId)(6),
          unitId: var_core_value_sigCB82,
          subUnitId: var_core_value_sigCF4E,
          axis: var_core_value_sigE94C.axis,
          start: var_core_value_sigE94C.start,
          end: var_core_value_sigE94C.end,
          collapsed: false
        },
        var_core_value_sigB2CE = var_core_value_sigE94C.axis === "row" ? var_core_value_sig6CAD.getRowCount() : var_core_value_sig6CAD.getColumnCount(),
        var_core_value_sig443C = var_core_value_sig8CF5.getOutlines(var_core_value_sigCB82, var_core_value_sigCF4E),
        var_core_value_sig39B1 = ee(var_core_value_sig443C, var_core_value_sigDDD7),
        var_core_value_sig210D = (var_core_value_sig39B1 == null ? undefined : var_core_value_sig39B1.mergedOutlines) ?? [],
        var_core_value_sigB4B4 = (var_core_value_sig39B1 == null ? undefined : var_core_value_sig39B1.mergedOutline) ?? var_core_value_sigDDD7,
        var_core_value_sigD407 = p(var_core_value_sig39B1 ? var_core_value_sig443C.filter(var_core_value_sig1B22 => !var_core_value_sig210D.some(var_core_value_sigE9ED => var_core_value_sigE9ED.id === var_core_value_sig1B22.id)) : var_core_value_sig443C, var_core_value_sigB4B4, {
          maxIndex: var_core_value_sigB2CE
        });
      if (!var_core_value_sigD407.valid) return var_core_value_sigEAE5.get(D).emit({
        reason: var_core_value_sigD407.reason ?? "unknown",
        commandId: j.id,
        unitId: var_core_value_sigCB82,
        subUnitId: var_core_value_sigCF4E,
        axis: var_core_value_sigE94C.axis,
        outlineId: var_core_value_sigB4B4.id
      }), false;
      let var_core_value_sig63F3 = [...var_core_value_sig210D.map(var_core_value_sig7F72 => ({
          id: k.id,
          params: {
            unitId: var_core_value_sigCB82,
            subUnitId: var_core_value_sigCF4E,
            outlineId: var_core_value_sig7F72.id
          }
        })), {
          id: O.id,
          params: {
            unitId: var_core_value_sigCB82,
            subUnitId: var_core_value_sigCF4E,
            outline: var_core_value_sigB4B4
          }
        }],
        var_core_value_sig6A71 = [{
          id: k.id,
          params: {
            unitId: var_core_value_sigCB82,
            subUnitId: var_core_value_sigCF4E,
            outlineId: var_core_value_sigB4B4.id
          }
        }, ...var_core_value_sig210D.map(var_core_value_sig7B2A => ({
          id: O.id,
          params: {
            unitId: var_core_value_sigCB82,
            subUnitId: var_core_value_sigCF4E,
            outline: var_core_value_sig7B2A
          }
        }))];
      return (0, e.sequenceExecute)(var_core_value_sig63F3, var_core_value_sigEAE5.get(e.ICommandService)).result ? (var_core_value_sigEAE5.get(e.IUndoRedoService).pushUndoRedo({
        unitID: var_core_value_sigCB82,
        undoMutations: var_core_value_sig6A71,
        redoMutations: var_core_value_sig63F3
      }), true) : false;
    }
  },
  M = {
    id: "sheet.mutation.clear-dimension-outlines",
    type: e.CommandType["MUTATION"],
    handler: (var_core_value_sig3BF6, var_core_value_sig38CE) => {
      let var_core_value_sig62B7 = var_core_value_sig3BF6.get(E),
        var_core_value_sig37A8 = var_core_value_sig62B7.getOutlines(var_core_value_sig38CE.unitId, var_core_value_sig38CE.subUnitId);
      return var_core_value_sig62B7.setOutlines(var_core_value_sig38CE.unitId, var_core_value_sig38CE.subUnitId, h(var_core_value_sig37A8, var_core_value_sig38CE)), true;
    }
  },
  N = {
    id: "sheet.command.clear-dimension-outlines",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sigA90D, var_core_value_sig7A3C) => {
      if (!var_core_value_sig7A3C) return false;
      let var_core_value_sig0511 = (0, t.getSheetCommandTarget)(var_core_value_sigA90D.get(e.IUniverInstanceService), var_core_value_sig7A3C);
      if (!var_core_value_sig0511) return false;
      let {
        unitId: var_core_value_sig1F44,
        subUnitId: var_core_value_sigCB04
      } = var_core_value_sig0511;
      if (!A(var_core_value_sigA90D, var_core_value_sig1F44, var_core_value_sigCB04)) return false;
      let var_core_value_sig947E = {
          unitId: var_core_value_sig1F44,
          subUnitId: var_core_value_sigCB04,
          axis: var_core_value_sig7A3C.axis,
          start: var_core_value_sig7A3C.start,
          end: var_core_value_sig7A3C.end
        },
        var_core_value_sig4545 = var_core_value_sigA90D.get(E).getOutlines(var_core_value_sig1F44, var_core_value_sigCB04).filter(var_core_value_sig06CD => d(var_core_value_sig06CD, var_core_value_sig947E) && var_core_value_sig06CD.start >= var_core_value_sig7A3C.start && var_core_value_sig06CD.end <= var_core_value_sig7A3C.end);
      if (var_core_value_sig4545.length === 0) return var_core_value_sigA90D.get(D).emit({
        reason: "clear-range-not-contain-outline",
        commandId: N.id,
        unitId: var_core_value_sig1F44,
        subUnitId: var_core_value_sigCB04,
        axis: var_core_value_sig7A3C.axis
      }), false;
      let var_core_value_sigF39A = [{
          id: M.id,
          params: {
            ...var_core_value_sig947E,
            removedOutlineIds: var_core_value_sig4545.map(var_core_value_sigA5F1 => var_core_value_sigA5F1.id)
          }
        }],
        var_core_value_sigF79C = var_core_value_sig4545.map(var_core_value_sig97A2 => ({
          id: O.id,
          params: {
            unitId: var_core_value_sig1F44,
            subUnitId: var_core_value_sigCB04,
            outline: var_core_value_sig97A2
          }
        }));
      return (0, e.sequenceExecute)(var_core_value_sigF39A, var_core_value_sigA90D.get(e.ICommandService)).result ? (var_core_value_sigA90D.get(e.IUndoRedoService).pushUndoRedo({
        unitID: var_core_value_sig1F44,
        undoMutations: var_core_value_sigF79C,
        redoMutations: var_core_value_sigF39A
      }), true) : false;
    }
  },
  P = {
    id: "sheet.command.remove-dimension-outline",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sig2E54, var_core_value_sig7658) => {
      if (!var_core_value_sig7658) return false;
      let var_core_value_sigDCF5 = (0, t.getSheetCommandTarget)(var_core_value_sig2E54.get(e.IUniverInstanceService), var_core_value_sig7658);
      if (!var_core_value_sigDCF5) return false;
      let {
        unitId: var_core_value_sigC786,
        subUnitId: var_core_value_sigC0D9
      } = var_core_value_sigDCF5;
      if (!A(var_core_value_sig2E54, var_core_value_sigC786, var_core_value_sigC0D9)) return false;
      let var_core_value_sigF0511 = var_core_value_sig2E54.get(E).getOutlines(var_core_value_sigC786, var_core_value_sigC0D9).find(var_core_value_sig07E9 => var_core_value_sig07E9.id === var_core_value_sig7658.outlineId);
      if (!var_core_value_sigF0511) return false;
      let var_core_value_sig5825 = [{
          id: k.id,
          params: {
            unitId: var_core_value_sigC786,
            subUnitId: var_core_value_sigC0D9,
            outlineId: var_core_value_sigF0511.id,
            outline: var_core_value_sigF0511
          }
        }],
        var_core_value_sig4EB7 = [{
          id: O.id,
          params: {
            unitId: var_core_value_sigC786,
            subUnitId: var_core_value_sigC0D9,
            outline: var_core_value_sigF0511
          }
        }];
      return (0, e.sequenceExecute)(var_core_value_sig5825, var_core_value_sig2E54.get(e.ICommandService)).result ? (var_core_value_sig2E54.get(e.IUndoRedoService).pushUndoRedo({
        unitID: var_core_value_sigC786,
        undoMutations: var_core_value_sig4EB7,
        redoMutations: var_core_value_sig5825
      }), true) : false;
    }
  },
  F = {
    id: "sheet.mutation.set-dimension-outline-collapsed",
    type: e.CommandType["MUTATION"],
    handler: (var_core_value_sig73AF, var_core_value_sig548A) => {
      let var_core_value_sigE026 = var_core_value_sig73AF.get(E),
        var_core_value_sig339E = var_core_value_sigE026.getOutlines(var_core_value_sig548A.unitId, var_core_value_sig548A.subUnitId),
        var_core_value_sig7550 = var_core_value_sig339E.find(var_core_value_sig4F59 => var_core_value_sig4F59.id === var_core_value_sig548A.outlineId);
      return var_core_value_sig7550 && var_core_value_sigE026.setOutlines(var_core_value_sig548A.unitId, var_core_value_sig548A.subUnitId, var_core_value_sig339E.map(var_core_value_sigF564 => var_core_value_sigF564.unitId !== var_core_value_sig7550.unitId || var_core_value_sigF564.subUnitId !== var_core_value_sig7550.subUnitId || var_core_value_sigF564.axis !== var_core_value_sig7550.axis || var_core_value_sigF564.start !== var_core_value_sig7550.start || var_core_value_sigF564.end !== var_core_value_sig7550.end ? var_core_value_sigF564 : {
        ...var_core_value_sigF564,
        collapsed: var_core_value_sig548A.collapsed
      })), true;
    }
  };
function I(var_core_value_sig2983, var_core_value_sigE1B0, var_core_value_sigD4FF, var_core_value_sig1E5B) {
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
function pe(var_core_value_sigB680) {
  return var_core_value_sigB680 === "row" ? t.SetRowHiddenMutation["id"] : t.SetColHiddenMutation["id"];
}
function me(var_core_value_sig1F64) {
  return var_core_value_sig1F64 === "row" ? t.SetRowVisibleMutation["id"] : t.SetColVisibleMutation["id"];
}
function L(var_core_value_sigDD1C, var_core_value_sig2C39, var_core_value_sigB7D1, var_core_value_sig64F0) {
  let var_core_value_sig85B1 = var_core_value_sig2C39 ? [I(var_core_value_sigDD1C.axis, var_core_value_sigDD1C.start, var_core_value_sigDD1C.end, var_core_value_sigB7D1)] : he(var_core_value_sigDD1C, var_core_value_sig64F0, var_core_value_sigB7D1),
    var_core_value_sig3141 = var_core_value_sig2C39 ? pe(var_core_value_sigDD1C.axis) : me(var_core_value_sigDD1C.axis);
  return [{
    id: F.id,
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
function he(var_core_value_sig2162, var_core_value_sig2EAD, var_core_value_sig6774) {
  let var_core_value_sig340D = g(var_core_value_sig2EAD.map(var_core_value_sig2E11 => R(var_core_value_sig2E11, var_core_value_sig2162) ? {
    ...var_core_value_sig2E11,
    collapsed: false
  } : var_core_value_sig2E11), var_core_value_sig2162.unitId, var_core_value_sig2162.subUnitId, var_core_value_sig2162.axis);
  return ge({
    start: var_core_value_sig2162.start,
    end: var_core_value_sig2162.end
  }, var_core_value_sig340D).map(var_core_value_sig5B69 => I(var_core_value_sig2162.axis, var_core_value_sig5B69.start, var_core_value_sig5B69.end, var_core_value_sig6774));
}
function R(var_core_value_sig82D4, var_core_value_sigBDE4) {
  return var_core_value_sig82D4.unitId === var_core_value_sigBDE4.unitId && var_core_value_sig82D4.subUnitId === var_core_value_sigBDE4.subUnitId && var_core_value_sig82D4.axis === var_core_value_sigBDE4.axis && var_core_value_sig82D4.start === var_core_value_sigBDE4.start && var_core_value_sig82D4.end === var_core_value_sigBDE4.end;
}
function ge(var_core_value_sig7DF1, var_core_value_sigDC86) {
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
const z = {
    id: "sheet.command.set-dimension-outline-collapsed",
    type: e.CommandType["COMMAND"],
    handler: (var_core_value_sigBBEE, var_core_value_sig011D) => {
      if (!var_core_value_sig011D) return false;
      let var_core_value_sig6167 = (0, t.getSheetCommandTarget)(var_core_value_sigBBEE.get(e.IUniverInstanceService), var_core_value_sig011D);
      if (!var_core_value_sig6167) return false;
      let {
        unitId: var_core_value_sig65A1,
        subUnitId: var_core_value_sig7F19,
        worksheet: var_core_value_sig7827
      } = var_core_value_sig6167;
      if (!A(var_core_value_sigBBEE, var_core_value_sig65A1, var_core_value_sig7F19)) return false;
      let var_core_value_sig652C = var_core_value_sigBBEE.get(E).getOutlines(var_core_value_sig65A1, var_core_value_sig7F19),
        var_core_value_sig7E32 = var_core_value_sig652C.find(var_core_value_sigCE71 => var_core_value_sigCE71.id === var_core_value_sig011D.outlineId);
      if (!var_core_value_sig7E32 || var_core_value_sig7E32.collapsed === var_core_value_sig011D.collapsed) return false;
      let var_core_value_sig4C07 = L(var_core_value_sig7E32, var_core_value_sig011D.collapsed, var_core_value_sig7827, var_core_value_sig652C),
        var_core_value_sig79AB = L(var_core_value_sig7E32, !var_core_value_sig011D.collapsed, var_core_value_sig7827, var_core_value_sig652C);
      return (0, e.sequenceExecute)(var_core_value_sig4C07, var_core_value_sigBBEE.get(e.ICommandService)).result ? (var_core_value_sigBBEE.get(e.IUndoRedoService).pushUndoRedo({
        unitID: var_core_value_sig65A1,
        undoMutations: var_core_value_sig79AB,
        redoMutations: var_core_value_sig4C07
      }), true) : false;
    }
  },
  B = {
    id: "sheet.mutation.transform-dimension-outlines",
    type: e.CommandType["MUTATION"],
    handler: (var_core_value_sig8E74, var_core_value_sig104C) => {
      let var_core_value_sig841D = var_core_value_sig8E74.get(E),
        var_core_value_sig90CB = _e(var_core_value_sig841D.getOutlines(var_core_value_sig104C.unitId, var_core_value_sig104C.subUnitId), var_core_value_sig104C);
      return var_core_value_sig841D.setOutlines(var_core_value_sig104C.unitId, var_core_value_sig104C.subUnitId, var_core_value_sig90CB), true;
    }
  };
function _e(var_core_value_sigBDF5, var_core_value_sigACC6) {
  switch (var_core_value_sigACC6.type) {
    case "insert":
      return var_core_value_sigACC6.restoreOutlines ? ve(var_core_value_sigBDF5, var_core_value_sigACC6) : v(var_core_value_sigBDF5, var_core_value_sigACC6);
    case "delete":
      return y(var_core_value_sigBDF5, var_core_value_sigACC6);
    case "move":
      return b(var_core_value_sigBDF5, var_core_value_sigACC6);
  }
}
function ve(var_core_value_sig1614, var_core_value_sig85C3) {
  return [...var_core_value_sig1614.filter(var_core_value_sig21D8 => var_core_value_sig21D8.unitId !== var_core_value_sig85C3.unitId || var_core_value_sig21D8.subUnitId !== var_core_value_sig85C3.subUnitId || var_core_value_sig21D8.axis !== var_core_value_sig85C3.axis), ...var_core_value_sig85C3.restoreOutlines];
}
const V = "SHEET_OUTLINE_PLUGIN";
var ye = "@univerjs-pro/sheets-outline",
  be = "1.0.0-insiders.20260907-70fc579";
const H = {};
function U(var_core_value_sigB996, var_core_value_sig4BBA) {
  return function (var_core_value_sig2B65, var_core_value_sigD7EA) {
    var_core_value_sig4BBA(var_core_value_sig2B65, var_core_value_sigD7EA, var_core_value_sigB996);
  };
}
function W(var_core_value_sig6201, var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigBB6C) {
  var var_core_value_sigE2BF = arguments.length,
    var_core_value_sigB8C7 = var_core_value_sigE2BF < 3 ? var_core_value_sig5151 : var_core_value_sigBB6C === null ? var_core_value_sigBB6C = Object.getOwnPropertyDescriptor(var_core_value_sig5151, var_core_value_sigB542) : var_core_value_sigBB6C,
    var_core_value_sigA56E;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_core_value_sigB8C7 = Reflect.decorate(var_core_value_sig6201, var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigBB6C);else {
    for (var var_core_value_sig1998 = var_core_value_sig6201.length - 1; var_core_value_sig1998 >= 0; var_core_value_sig1998--) (var_core_value_sigA56E = var_core_value_sig6201[var_core_value_sig1998]) && (var_core_value_sigB8C7 = (var_core_value_sigE2BF < 3 ? var_core_value_sigA56E(var_core_value_sigB8C7) : var_core_value_sigE2BF > 3 ? var_core_value_sigA56E(var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigB8C7) : var_core_value_sigA56E(var_core_value_sig5151, var_core_value_sigB542)) || var_core_value_sigB8C7);
  }
  return var_core_value_sigE2BF > 3 && var_core_value_sigB8C7 && Object.defineProperty(var_core_value_sig5151, var_core_value_sigB542, var_core_value_sigB8C7), var_core_value_sigB8C7;
}
const G = {
  redos: [],
  undos: [],
  preRedos: [],
  preUndos: []
};
let K = class extends e.Disposable {
  constructor(var_core_value_sigB33B, var_core_value_sig24B9, var_core_value_sigE627, var_core_value_sigEF3E) {
    super(), this._univerInstanceService = var_core_value_sigB33B, this._sheetInterceptorService = var_core_value_sig24B9, this._sheetsOutlineModel = var_core_value_sigE627, this._sheetsOutlineErrorService = var_core_value_sigEF3E, this._initCommandInterceptor();
  }
  _initCommandInterceptor() {
    this.disposeWithMe(this._sheetInterceptorService["interceptCommand"]({
      getMutations: var_core_value_sigB577 => xe(var_core_value_sigB577, (var_core_value_sig3D7D, var_core_value_sig27E5) => this._sheetsOutlineModel["getOutlines"](var_core_value_sig3D7D, var_core_value_sig27E5), this._getCommandScope(var_core_value_sigB577.params), var_core_value_sig8061 => this._sheetsOutlineErrorService["emit"](var_core_value_sig8061))
    }));
  }
  _getCommandScope(var_core_value_sig273D) {
    let var_core_value_sig9A0D = var_core_value_sig273D,
      var_core_value_sigA319 = var_core_value_sig9A0D != null && var_core_value_sig9A0D.unitId ? this._univerInstanceService["getUnit"](var_core_value_sig9A0D.unitId, e.UniverInstanceType["UNIVER_SHEET"]) : this._univerInstanceService["getCurrentUnitOfType"](e.UniverInstanceType["UNIVER_SHEET"]);
    if (!var_core_value_sigA319) return;
    let var_core_value_sig2D58 = var_core_value_sig9A0D != null && var_core_value_sig9A0D.subUnitId ? var_core_value_sigA319.getSheetBySheetId(var_core_value_sig9A0D.subUnitId) : var_core_value_sigA319.getActiveSheet();
    if (var_core_value_sig2D58) return {
      unitId: var_core_value_sigA319.getUnitId(),
      subUnitId: var_core_value_sig2D58.getSheetId()
    };
  }
};
K = W([U(0, e.IUniverInstanceService), U(1, (0, e.Inject)(t.SheetInterceptorService)), U(2, (0, e.Inject)(E)), U(3, (0, e.Inject)(D))], K);
function xe(var_core_value_sigFF19, var_core_value_sig43B8, var_core_value_sigD98F, var_core_value_sig66C0) {
  let var_core_value_sig9D15 = Ce(var_core_value_sigFF19, var_core_value_sigD98F);
  if (!var_core_value_sig9D15) return Z();
  let var_core_value_sigB785 = var_core_value_sig43B8(var_core_value_sig9D15.unitId, var_core_value_sig9D15.subUnitId);
  if (!var_core_value_sigB785.some(var_core_value_sig223F => var_core_value_sig223F.axis === var_core_value_sig9D15.axis)) return Z();
  Se(var_core_value_sigB785, var_core_value_sig9D15, var_core_value_sigFF19.id, var_core_value_sig66C0);
  let var_core_value_sig130F = we(var_core_value_sig9D15, var_core_value_sigB785);
  return {
    redos: [{
      id: B.id,
      params: var_core_value_sig9D15
    }],
    undos: [{
      id: B.id,
      params: var_core_value_sig130F
    }],
    preRedos: [],
    preUndos: []
  };
}
function Se(var_core_value_sigC0E3, var_core_value_sig52F7, var_core_value_sig866F, var_core_value_sigDE3D) {
  try {
    switch (var_core_value_sig52F7.type) {
      case "insert":
        v(var_core_value_sigC0E3, var_core_value_sig52F7);
        break;
      case "delete":
        y(var_core_value_sigC0E3, var_core_value_sig52F7);
        break;
      case "move":
        b(var_core_value_sigC0E3, var_core_value_sig52F7);
        break;
    }
  } catch (var_core_value_sigD749) {
    throw var_core_value_sigDE3D == null || var_core_value_sigDE3D({
      reason: c(var_core_value_sigD749),
      commandId: var_core_value_sig866F,
      unitId: var_core_value_sig52F7.unitId,
      subUnitId: var_core_value_sig52F7.subUnitId,
      axis: var_core_value_sig52F7.axis,
      outlineId: l(var_core_value_sigD749)
    }), new e["CustomCommandExecutionError"](var_core_value_sigD749 instanceof Error ? var_core_value_sigD749.message : "Invalid\x20dimension\x20outline\x20mutation");
  }
}
function Ce(var_core_value_sigF175, var_core_value_sig6A18) {
  switch (var_core_value_sigF175.id) {
    case t.InsertRowCommand["id"]:
      return q(var_core_value_sigF175.params, "row", var_core_value_sig6A18);
    case t.InsertColCommand["id"]:
      return q(var_core_value_sigF175.params, "column", var_core_value_sig6A18);
    case t.RemoveRowCommand["id"]:
      return J(var_core_value_sigF175.params, "row", var_core_value_sig6A18);
    case t.RemoveColCommand["id"]:
      return J(var_core_value_sigF175.params, "column", var_core_value_sig6A18);
    case t.MoveRowsCommand["id"]:
      return Y(var_core_value_sigF175.params, "row", var_core_value_sig6A18);
    case t.MoveColsCommand["id"]:
      return Y(var_core_value_sigF175.params, "column", var_core_value_sig6A18);
    default:
      return null;
  }
}
function q(var_core_value_sig4E3D, var_core_value_sig49B0, var_core_value_sig2547) {
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
function J(var_core_value_sig880E, var_core_value_sigC9ED, var_core_value_sigB57B) {
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
function Y(var_core_value_sig7D40, var_core_value_sig6C7E, var_core_value_sig68BE) {
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
function we(var_core_value_sigD04E, var_core_value_sigB99B) {
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
      return Te(var_core_value_sigD04E);
  }
}
function Te(var_core_value_sig5A75) {
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
    redos: [...G.redos],
    undos: [...G.undos],
    preRedos: [...(G.preRedos ?? [])],
    preUndos: [...(G.preUndos ?? [])]
  };
}
let Q = class extends e.Disposable {
  constructor(var_core_value_sigCFFA, var_core_value_sig58C1) {
    super(), this._resourceManagerService = var_core_value_sigCFFA, this._sheetsOutlineModel = var_core_value_sig58C1, this._initResource();
  }
  _initResource() {
    this.disposeWithMe(this._resourceManagerService["registerPluginResource"]({
      pluginName: V,
      businesses: [e.UniverInstanceType["UNIVER_SHEET"]],
      toJson: var_core_value_sigD873 => JSON.stringify(this._sheetsOutlineModel["serialize"](var_core_value_sigD873)),
      parseJson: var_core_value_sigA12B => JSON.parse(var_core_value_sigA12B),
      onLoad: (var_core_value_sigF230, var_core_value_sig09B8) => this._sheetsOutlineModel["deserialize"](var_core_value_sigF230, var_core_value_sig09B8),
      onUnLoad: var_core_value_sig6F91 => this._sheetsOutlineModel["removeUnit"](var_core_value_sig6F91)
    }));
  }
};
Q = W([U(0, e.IResourceManagerService), U(1, (0, e.Inject)(E))], Q);
let $ = class extends e.Plugin {
  constructor(var_core_value_sig5090 = H, var_core_value_sigC368, var_core_value_sigAD56, var_core_value_sigDB4A) {
    super(), this._config = var_core_value_sig5090, this._injector = var_core_value_sigC368, this._commandService = var_core_value_sigAD56, this._configService = var_core_value_sigDB4A;
    let {
      ...var_core_value_sig6418
    } = (0, e.merge)({}, H, this._config);
    this._configService["setConfig"]("sheets-outline.config", var_core_value_sig6418);
  }
  onStarting() {
    this._injector["add"]([E]), this._injector["add"]([D]), this._injector["add"]([Q]), this._injector["add"]([K]), this._initRegisterCommand(), this._injector["get"](E), this._injector["get"](D), this._injector["get"](Q), this._injector["get"](K);
  }
  _initRegisterCommand() {
    [j, P, z, N].forEach(var_core_value_sigF9C7 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sigF9C7));
    }), [O, k, F, M, B].forEach(var_core_value_sig8895 => {
      this.disposeWithMe(this._commandService["registerCommand"](var_core_value_sig8895));
    });
  }
};
T($, "pluginName", V), T($, "packageName", ye), T($, "version", be), T($, "type", e.UniverInstanceType["UNIVER_SHEET"]), $ = W([(0, e.DependentOn)(i.UniverLicensePlugin, t.UniverSheetsPlugin), U(1, (0, e.Inject)(e.Injector)), U(2, e.ICommandService), U(3, e.IConfigService)], $), exports.AddDimensionOutlineCommand = j, exports.AddDimensionOutlineMutation = O, exports.ClearDimensionOutlinesCommand = N, exports.ClearDimensionOutlinesMutation = M, exports.DimensionOutlineAxis = a, exports.DimensionOutlineErrorReason = o, exports.RemoveDimensionOutlineCommand = P, exports.RemoveDimensionOutlineMutation = k, exports.SHEET_OUTLINE_PLUGIN = V, exports.SetDimensionOutlineCollapsedCommand = z, exports.SetDimensionOutlineCollapsedMutation = F, exports.SheetsOutlineErrorService = D, exports.SheetsOutlineModel = E, exports.TransformDimensionOutlinesMutation = B, Object.defineProperty(exports, "UniverSheetsOutlinePlugin", {
  enumerable: true,
  get: function () {
    return $;
  }
}), exports.buildDimensionOutlineTree = f, exports.canAddDimensionOutline = p, exports.getDimensionOutlineViewPermission$ = ue, exports.hasDimensionOutlineViewPermission = A, exports.transformOutlinesByDelete = y, exports.transformOutlinesByInsert = v, exports.transformOutlinesByMove = b;
