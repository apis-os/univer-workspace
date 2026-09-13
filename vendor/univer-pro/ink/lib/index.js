import { ShapeFillEnum as var_core_value_sig4E3D, ShapeLineCapEnum as var_core_value_sig49B0, ShapeLineJoinEnum as var_core_value_sig2547, ShapeLineTypeEnum as var_core_value_sigBCA9, ShapeTypeEnum as var_core_value_sig4CDF } from '@univerjs-pro/engine-shape';
import { UniverLicensePlugin as var_core_value_sig3F79 } from '@univerjs-pro/license';
import { CommandType as var_core_value_sig880E, DependentOn as var_core_value_sigC9ED, ICommandService as var_core_value_sigB57B, IConfigService as var_core_value_sig780B, Inject as var_core_value_sig7D1B, Injector as var_core_value_sig7BE0, Plugin as var_core_value_sig7D40, UniverInstanceType as var_core_value_sig6C7E, createIdentifier as var_core_value_sig68BE, merge as var_core_value_sig04C6, toDisposable as var_core_value_sigCA05 } from '@univerjs/core';
const g = 0.0001;
function _(var_core_value_sig2E11) {
  return {
    'x': var_core_value_sig2E11.x,
    'y': var_core_value_sig2E11.y
  };
}
;
function v(var_core_value_sig5B69) {
  return {
    ...var_core_value_sig5B69,
    'in': var_core_value_sig5B69.in ? _(var_core_value_sig5B69.in) : undefined,
    'out': var_core_value_sig5B69.out ? _(var_core_value_sig5B69.out) : undefined
  };
}
;
function y(var_core_value_sigB098) {
  return {
    'kind': 'pen',
    'closed': var_core_value_sigB098.closed,
    'anchors': var_core_value_sigB098.anchors["map"](v)
  };
}
;
function b(var_core_value_sigCE71, var_core_value_sig21D8, var_core_value_sig2B65) {
  return {
    'x': var_core_value_sigCE71.x + (var_core_value_sig21D8.x - var_core_value_sigCE71.x) * var_core_value_sig2B65,
    'y': var_core_value_sigCE71.y + (var_core_value_sig21D8.y - var_core_value_sigCE71.y) * var_core_value_sig2B65
  };
}
;
function x(var_core_value_sigD7EA, var_core_value_sigB33B) {
  return Math.hypot(var_core_value_sigD7EA.x - var_core_value_sigB33B.x, var_core_value_sigD7EA.y - var_core_value_sigB33B.y);
}
;
function S(var_core_value_sig24B9) {
  let var_core_value_sigE627 = Math.hypot(var_core_value_sig24B9.x, var_core_value_sig24B9.y);
  return var_core_value_sigE627 < g ? {
    'x': 1,
    'y': 0
  } : {
    'x': var_core_value_sig24B9.x / var_core_value_sigE627,
    'y': var_core_value_sig24B9.y / var_core_value_sigE627
  };
}
;
function C(var_core_value_sigEF3E, var_core_value_sig273D, var_core_value_sig9A0D = x(var_core_value_sigEF3E, var_core_value_sig273D)) {
  let var_core_value_sigA319 = S({
    'x': var_core_value_sigEF3E.x - var_core_value_sig273D.x,
    'y': var_core_value_sigEF3E.y - var_core_value_sig273D.y
  });
  return {
    'x': var_core_value_sigEF3E.x + var_core_value_sigA319.x * var_core_value_sig9A0D,
    'y': var_core_value_sigEF3E.y + var_core_value_sigA319.y * var_core_value_sig9A0D
  };
}
;
function w(var_core_value_sig2D58, var_core_value_sig223F) {
  let {
    anchors: var_core_value_sigD749
  } = var_core_value_sig2D58;
  return var_core_value_sigD749.length < 2 || var_core_value_sig223F < 0 ? null : var_core_value_sig223F < var_core_value_sigD749.length - 1 ? {
    'startIndex': var_core_value_sig223F,
    'endIndex': var_core_value_sig223F + 1,
    'start': var_core_value_sigD749[var_core_value_sig223F],
    'end': var_core_value_sigD749[var_core_value_sig223F + 1]
  } : var_core_value_sig2D58.closed && var_core_value_sig223F === var_core_value_sigD749.length - 1 ? {
    'startIndex': var_core_value_sigD749.length - 1,
    'endIndex': 0,
    'start': var_core_value_sigD749[var_core_value_sigD749.length - 1],
    'end': var_core_value_sigD749[0]
  } : null;
}
;
function T(var_core_value_sigCFFA, var_core_value_sig58C1) {
  let var_core_value_sig5090 = w(var_core_value_sigCFFA, var_core_value_sig58C1);
  return var_core_value_sig5090 ? [var_core_value_sig5090.start, var_core_value_sig5090.start["out"] ?? var_core_value_sig5090.start, var_core_value_sig5090.end['in'] ?? var_core_value_sig5090.end, var_core_value_sig5090.end] : null;
}
;
function te(var_core_value_sigC368, var_core_value_sigAD56) {
  return var_core_value_sigAD56 === "anchor" ? var_core_value_sigC368 : var_core_value_sigC368[var_core_value_sigAD56] ?? null;
}
;
function E(var_core_value_sigDB4A, var_core_value_sig6418, var_core_value_sig1896) {
  return var_core_value_sig1896 === 'anchor' || var_core_value_sigDB4A.closed ? true : var_core_value_sig1896 === 'in' ? var_core_value_sig6418 > 0 : var_core_value_sig6418 < var_core_value_sigDB4A.anchors["length"] - 1;
}
;
function D(var_core_value_sig0285, var_core_value_sig777D) {
  let [var_core_value_sig3F4C, var_core_value_sigD65A, var_core_value_sig5A13, var_core_value_sigF593] = var_core_value_sig0285,
    var_core_value_sig3607 = b(var_core_value_sig3F4C, var_core_value_sigD65A, var_core_value_sig777D),
    var_core_value_sigB512 = b(var_core_value_sigD65A, var_core_value_sig5A13, var_core_value_sig777D),
    var_core_value_sigF2E6 = b(var_core_value_sig5A13, var_core_value_sigF593, var_core_value_sig777D);
  return b(b(var_core_value_sig3607, var_core_value_sigB512, var_core_value_sig777D), b(var_core_value_sigB512, var_core_value_sigF2E6, var_core_value_sig777D), var_core_value_sig777D);
}
;
function ne(var_core_value_sig34C8, var_core_value_sigB744) {
  let [var_core_value_sigEAE2, var_core_value_sigE68A, var_core_value_sig3E68, var_core_value_sigF4C5] = var_core_value_sig34C8,
    var_core_value_sig5410 = b(var_core_value_sigEAE2, var_core_value_sigE68A, var_core_value_sigB744),
    var_core_value_sig492F = b(var_core_value_sigE68A, var_core_value_sig3E68, var_core_value_sigB744),
    var_core_value_sig8EA0 = b(var_core_value_sig3E68, var_core_value_sigF4C5, var_core_value_sigB744),
    var_core_value_sigA6F6 = b(var_core_value_sig5410, var_core_value_sig492F, var_core_value_sigB744),
    var_core_value_sigCDDA = b(var_core_value_sig492F, var_core_value_sig8EA0, var_core_value_sigB744),
    var_core_value_sigE243 = b(var_core_value_sigA6F6, var_core_value_sigCDDA, var_core_value_sigB744);
  return {
    'left': [var_core_value_sigEAE2, var_core_value_sig5410, var_core_value_sigA6F6, var_core_value_sigE243],
    'right': [var_core_value_sigE243, var_core_value_sigCDDA, var_core_value_sig8EA0, var_core_value_sigF4C5]
  };
}
;
function O(var_core_value_sig74A8, var_core_value_sig21B2, var_core_value_sigDE08) {
  let var_core_value_sigACCB = var_core_value_sigDE08.x - var_core_value_sig21B2.x,
    var_core_value_sig7F33 = var_core_value_sigDE08.y - var_core_value_sig21B2.y,
    var_core_value_sig0C53 = var_core_value_sigACCB * var_core_value_sigACCB + var_core_value_sig7F33 * var_core_value_sig7F33,
    var_core_value_sigEA04 = var_core_value_sig0C53 <= g ? 0 : Math.max(0, Math.min(1, ((var_core_value_sig74A8.x - var_core_value_sig21B2.x) * var_core_value_sigACCB + (var_core_value_sig74A8.y - var_core_value_sig21B2.y) * var_core_value_sig7F33) / var_core_value_sig0C53)),
    var_core_value_sig7A62 = {
      'x': var_core_value_sig21B2.x + var_core_value_sigACCB * var_core_value_sigEA04,
      'y': var_core_value_sig21B2.y + var_core_value_sig7F33 * var_core_value_sigEA04
    };
  return {
    'point': var_core_value_sig7A62,
    'ratio': var_core_value_sigEA04,
    'distance': x(var_core_value_sig74A8, var_core_value_sig7A62)
  };
}
;
function re(var_core_value_sig8109, var_core_value_sig7565, var_core_value_sigD4FB) {
  return O(var_core_value_sig8109, var_core_value_sig7565, var_core_value_sigD4FB).distance ** 2;
}
;
function k(var_core_value_sig3E71, var_core_value_sig01B3) {
  if (var_core_value_sig3E71.length <= 2) return var_core_value_sig3E71.map(_);
  let var_core_value_sig7442 = 0,
    var_core_value_sigDF87 = 0,
    var_core_value_sig9EE0 = var_core_value_sig3E71[0],
    var_core_value_sigF051 = var_core_value_sig3E71[var_core_value_sig3E71.length - 1],
    var_core_value_sig0B45 = var_core_value_sig01B3 * var_core_value_sig01B3;
  for (let var_core_value_sigDBB7 = 1; var_core_value_sigDBB7 < var_core_value_sig3E71.length - 1; var_core_value_sigDBB7++) {
    let var_core_value_sigC9E0 = re(var_core_value_sig3E71[var_core_value_sigDBB7], var_core_value_sig9EE0, var_core_value_sigF051);
    var_core_value_sigC9E0 > var_core_value_sig7442 && (var_core_value_sig7442 = var_core_value_sigC9E0, var_core_value_sigDF87 = var_core_value_sigDBB7);
  }
  if (var_core_value_sig7442 <= var_core_value_sig0B45) return [_(var_core_value_sig9EE0), _(var_core_value_sigF051)];
  let var_core_value_sig36F8 = k(var_core_value_sig3E71.slice(0, var_core_value_sigDF87 + 1), var_core_value_sig01B3),
    var_core_value_sig03E1 = k(var_core_value_sig3E71.slice(var_core_value_sigDF87), var_core_value_sig01B3);
  return [...var_core_value_sig36F8.slice(0, -1), ...var_core_value_sig03E1];
}
;
function ie(var_core_value_sigBB57, var_core_value_sig7C4A) {
  let var_core_value_sigE799 = var_core_value_sigBB57[var_core_value_sig7C4A],
    var_core_value_sigB601 = var_core_value_sigBB57[var_core_value_sig7C4A + 1],
    var_core_value_sig8B71 = var_core_value_sigBB57[var_core_value_sig7C4A - 1] ?? var_core_value_sigE799;
  return {
    'x': var_core_value_sigE799.x + (var_core_value_sigB601.x - var_core_value_sig8B71.x) / 6,
    'y': var_core_value_sigE799.y + (var_core_value_sigB601.y - var_core_value_sig8B71.y) / 6
  };
}
;
function A(var_core_value_sigAEFB, var_core_value_sig826B) {
  let var_core_value_sigCF89 = var_core_value_sigAEFB[var_core_value_sig826B],
    var_core_value_sig00CB = var_core_value_sigAEFB[var_core_value_sig826B - 1],
    var_core_value_sig77EE = var_core_value_sigAEFB[var_core_value_sig826B + 1] ?? var_core_value_sigCF89;
  return {
    'x': var_core_value_sigCF89.x - (var_core_value_sig77EE.x - var_core_value_sig00CB.x) / 6,
    'y': var_core_value_sigCF89.y - (var_core_value_sig77EE.y - var_core_value_sig00CB.y) / 6
  };
}
;
function j(var_core_value_sig9F76, var_core_value_sigB008) {
  let var_core_value_sig8721 = var_core_value_sig9F76.anchors[var_core_value_sigB008],
    var_core_value_sig08BA = var_core_value_sig9F76.anchors[var_core_value_sigB008 - 1] ?? (var_core_value_sig9F76.closed ? var_core_value_sig9F76.anchors[var_core_value_sig9F76.anchors["length"] - 1] : null),
    var_core_value_sigDBB5 = var_core_value_sig9F76.anchors[var_core_value_sigB008 + 1] ?? (var_core_value_sig9F76.closed ? var_core_value_sig9F76.anchors[0] : null),
    var_core_value_sigCFAC = var_core_value_sig08BA && var_core_value_sigDBB5 ? S({
      'x': var_core_value_sigDBB5.x - var_core_value_sig08BA.x,
      'y': var_core_value_sigDBB5.y - var_core_value_sig08BA.y
    }) : var_core_value_sigDBB5 ? S({
      'x': var_core_value_sigDBB5.x - var_core_value_sig8721.x,
      'y': var_core_value_sigDBB5.y - var_core_value_sig8721.y
    }) : var_core_value_sig08BA ? S({
      'x': var_core_value_sig8721.x - var_core_value_sig08BA.x,
      'y': var_core_value_sig8721.y - var_core_value_sig08BA.y
    }) : {
      'x': 1,
      'y': 0
    },
    var_core_value_sig237B = var_core_value_sig08BA && var_core_value_sigDBB5 ? Math.max(50, x(var_core_value_sig08BA, var_core_value_sigDBB5) / 4) : 50;
  return {
    'in': {
      'x': var_core_value_sig8721.x - var_core_value_sigCFAC.x * var_core_value_sig237B,
      'y': var_core_value_sig8721.y - var_core_value_sigCFAC.y * var_core_value_sig237B
    },
    'out': {
      'x': var_core_value_sig8721.x + var_core_value_sigCFAC.x * var_core_value_sig237B,
      'y': var_core_value_sig8721.y + var_core_value_sigCFAC.y * var_core_value_sig237B
    }
  };
}
;
function M(var_core_value_sigFEAB, var_core_value_sigE347) {
  let var_core_value_sig3C5B = var_core_value_sigFEAB[var_core_value_sigE347],
    var_core_value_sig200B = var_core_value_sigE347 === 'in' ? "out" : 'in',
    var_core_value_sig3863 = var_core_value_sigFEAB[var_core_value_sig200B];
  if (var_core_value_sig3C5B) {
    if (var_core_value_sigFEAB.pointType === "symmetric") {
      var_core_value_sigFEAB[var_core_value_sig200B] = C(var_core_value_sigFEAB, var_core_value_sig3C5B);
      return;
    }
    var_core_value_sigFEAB.pointType === "smooth" && (var_core_value_sigFEAB[var_core_value_sig200B] = C(var_core_value_sigFEAB, var_core_value_sig3C5B, var_core_value_sig3863 ? x(var_core_value_sigFEAB, var_core_value_sig3863) : x(var_core_value_sigFEAB, var_core_value_sig3C5B)));
  }
}
;
function ae(var_core_value_sigC97C, var_core_value_sigC4B1) {
  let var_core_value_sig1BD9 = y(var_core_value_sigC97C);
  return !var_core_value_sigC4B1 || var_core_value_sig1BD9.closed || var_core_value_sig1BD9.anchors["length"] === 0 || var_core_value_sig1BD9.anchors["push"]({
    'id': "__ink-preview-anchor__",
    'x': var_core_value_sigC4B1.x,
    'y': var_core_value_sigC4B1.y,
    'pointType': 'corner'
  }), var_core_value_sig1BD9;
}
;
function oe(var_core_value_sigE43E, var_core_value_sigA937 = {}) {
  let var_core_value_sigCAD5 = Math.max(0, var_core_value_sigA937.tolerance ?? Math.max(4, var_core_value_sigE43E.width * 0.35)),
    var_core_value_sigE503 = var_core_value_sigA937.createId ?? (var_core_value_sigD0A8 => "ink-centerline-" + var_core_value_sigD0A8),
    var_core_value_sig48DD = k(var_core_value_sigE43E.points, var_core_value_sigCAD5),
    var_core_value_sig5E6A = var_core_value_sig48DD.map((var_core_value_sigF4B9, var_core_value_sig5CEE) => ({
      'id': var_core_value_sigE503(var_core_value_sig5CEE),
      'x': var_core_value_sigF4B9.x,
      'y': var_core_value_sigF4B9.y,
      'pointType': 'free'
    }));
  for (let var_core_value_sigE92A = 0; var_core_value_sigE92A < var_core_value_sig5E6A.length - 1; var_core_value_sigE92A++) var_core_value_sig5E6A[var_core_value_sigE92A].out = ie(var_core_value_sig48DD, var_core_value_sigE92A), var_core_value_sig5E6A[var_core_value_sigE92A + 1].in = A(var_core_value_sig48DD, var_core_value_sigE92A + 1);
  return {
    'kind': "pen",
    'closed': false,
    'anchors': var_core_value_sig5E6A
  };
}
;
function se(var_core_value_sigB7FC, var_core_value_sig9CD9, var_core_value_sigFD0C) {
  let var_core_value_sig849B = null,
    var_core_value_sig5F1A = ["anchor", 'in', "out"];
  return var_core_value_sigB7FC.anchors['forEach']((var_core_value_sig362B, var_core_value_sig5CA5) => {
    var_core_value_sig5F1A.forEach(var_core_value_sig76BA => {
      if (!E(var_core_value_sigB7FC, var_core_value_sig5CA5, var_core_value_sig76BA)) return;
      let var_core_value_sigFBFA = te(var_core_value_sig362B, var_core_value_sig76BA);
      if (!var_core_value_sigFBFA) return;
      let var_core_value_sigF602 = x(var_core_value_sig9CD9, var_core_value_sigFBFA);
      var_core_value_sigF602 > var_core_value_sigFD0C || var_core_value_sig849B && var_core_value_sigF602 >= var_core_value_sig849B.distance || (var_core_value_sig849B = {
        'handle': {
          'kind': var_core_value_sig76BA,
          'anchorId': var_core_value_sig362B.id
        },
        'point': _(var_core_value_sigFBFA),
        'distance': var_core_value_sigF602
      });
    });
  }), var_core_value_sig849B;
}
;
function ce(var_core_value_sigB455, var_core_value_sig5241, var_core_value_sigC6E5) {
  let var_core_value_sigCEFB = null,
    var_core_value_sig1537 = var_core_value_sigB455.closed ? var_core_value_sigB455.anchors["length"] : Math.max(0, var_core_value_sigB455.anchors["length"] - 1);
  for (let var_core_value_sigE90F = 0; var_core_value_sigE90F < var_core_value_sig1537; var_core_value_sigE90F++) {
    let var_core_value_sig1BBD = T(var_core_value_sigB455, var_core_value_sigE90F);
    if (!var_core_value_sig1BBD) continue;
    let var_core_value_sigF704 = D(var_core_value_sig1BBD, 0);
    for (let var_core_value_sig3EEE = 1; var_core_value_sig3EEE <= 32; var_core_value_sig3EEE++) {
      let var_core_value_sig7524 = D(var_core_value_sig1BBD, var_core_value_sig3EEE / 32),
        var_core_value_sig2AD8 = O(var_core_value_sig5241, var_core_value_sigF704, var_core_value_sig7524),
        var_core_value_sig2AD0 = (var_core_value_sig3EEE - 1 + var_core_value_sig2AD8.ratio) / 32;
      (!var_core_value_sigCEFB || var_core_value_sig2AD8.distance < var_core_value_sigCEFB.distance) && (var_core_value_sigCEFB = {
        'segmentIndex': var_core_value_sigE90F,
        't': var_core_value_sig2AD0,
        'point': var_core_value_sig2AD8.point,
        'distance': var_core_value_sig2AD8.distance
      }), var_core_value_sigF704 = var_core_value_sig7524;
    }
  }
  return var_core_value_sigCEFB && var_core_value_sigCEFB.distance <= var_core_value_sigC6E5 ? var_core_value_sigCEFB : null;
}
;
function le(var_core_value_sigE4C6, var_core_value_sig4313, var_core_value_sigFC87) {
  let var_core_value_sig156F = y(var_core_value_sigE4C6),
    var_core_value_sigDD51 = w(var_core_value_sig156F, var_core_value_sig4313.segmentIndex),
    var_core_value_sigF057 = T(var_core_value_sig156F, var_core_value_sig4313.segmentIndex);
  if (!var_core_value_sigDD51 || !var_core_value_sigF057) return var_core_value_sig156F;
  let var_core_value_sig72F6 = ne(var_core_value_sigF057, Math.max(0, Math.min(1, var_core_value_sig4313.t))),
    var_core_value_sig9FBA = {
      'id': var_core_value_sigFC87(),
      'x': var_core_value_sig72F6.left[3].x,
      'y': var_core_value_sig72F6.left[3].y,
      'in': _(var_core_value_sig72F6.left[2]),
      'out': _(var_core_value_sig72F6.right[1]),
      'pointType': "free"
    };
  return var_core_value_sig156F.anchors[var_core_value_sigDD51.startIndex].out = _(var_core_value_sig72F6.left[1]), var_core_value_sig156F.anchors[var_core_value_sigDD51.endIndex].in = _(var_core_value_sig72F6.right[2]), var_core_value_sig156F.anchors["splice"](var_core_value_sigDD51.startIndex + 1, 0, var_core_value_sig9FBA), var_core_value_sig156F;
}
;
function ue(var_core_value_sigFE01, var_core_value_sigA2CE) {
  let var_core_value_sig1975 = y(var_core_value_sigFE01);
  return var_core_value_sig1975.anchors = var_core_value_sig1975.anchors["filter"](var_core_value_sigEFD4 => var_core_value_sigEFD4.id !== var_core_value_sigA2CE), var_core_value_sig1975.closed && var_core_value_sig1975.anchors['length'] < 3 && (var_core_value_sig1975.closed = false), var_core_value_sig1975;
}
;
function N(var_core_value_sig6EA1, var_core_value_sig029F, var_core_value_sig3767) {
  let var_core_value_sig670B = y(var_core_value_sig6EA1),
    var_core_value_sig6912 = var_core_value_sig670B.anchors["findIndex"](var_core_value_sig861B => var_core_value_sig861B.id === var_core_value_sig029F),
    var_core_value_sigE235 = var_core_value_sig670B.anchors[var_core_value_sig6912];
  if (!var_core_value_sigE235) return var_core_value_sig670B;
  if (var_core_value_sigE235.pointType = var_core_value_sig3767, var_core_value_sig3767 === "corner") return delete var_core_value_sigE235.in, delete var_core_value_sigE235.out, var_core_value_sig670B;
  let var_core_value_sig7664 = j(var_core_value_sig670B, var_core_value_sig6912);
  if (var_core_value_sigE235.in = var_core_value_sigE235.in ? _(var_core_value_sigE235.in) : var_core_value_sig7664.in, var_core_value_sigE235.out = var_core_value_sigE235.out ? _(var_core_value_sigE235.out) : var_core_value_sig7664.out, var_core_value_sig3767 === 'symmetric') {
    let var_core_value_sig5237 = Math.max(x(var_core_value_sigE235, var_core_value_sigE235.in), x(var_core_value_sigE235, var_core_value_sigE235.out), 50),
      var_core_value_sigBB00 = S({
        'x': var_core_value_sigE235.out['x'] - var_core_value_sigE235.x,
        'y': var_core_value_sigE235.out['y'] - var_core_value_sigE235.y
      });
    var_core_value_sigE235.out = {
      'x': var_core_value_sigE235.x + var_core_value_sigBB00.x * var_core_value_sig5237,
      'y': var_core_value_sigE235.y + var_core_value_sigBB00.y * var_core_value_sig5237
    }, var_core_value_sigE235.in = {
      'x': var_core_value_sigE235.x - var_core_value_sigBB00.x * var_core_value_sig5237,
      'y': var_core_value_sigE235.y - var_core_value_sigBB00.y * var_core_value_sig5237
    };
  } else var_core_value_sig3767 === "smooth" && M(var_core_value_sigE235, 'out');
  return var_core_value_sig670B;
}
;
function P(var_core_value_sig2281, var_core_value_sig5E86) {
  let var_core_value_sig6998 = var_core_value_sig2281.anchors["find"](var_core_value_sig7E54 => var_core_value_sig7E54.id === var_core_value_sig5E86),
    var_core_value_sigF639 = (var_core_value_sig6998 == null ? undefined : var_core_value_sig6998.pointType) ?? 'corner';
  return N(var_core_value_sig2281, var_core_value_sig5E86, var_core_value_sigF639 === "corner" ? "smooth" : var_core_value_sigF639 === "smooth" ? "symmetric" : var_core_value_sigF639 === "symmetric" ? "free" : "corner");
}
;
function F(var_core_value_sigEAE5, var_core_value_sigE94C, var_core_value_sig6D47) {
  let var_core_value_sigCB82 = y(var_core_value_sigEAE5),
    var_core_value_sigCF4E = var_core_value_sigCB82.anchors['find'](var_core_value_sig9A8D => var_core_value_sig9A8D.id === var_core_value_sigE94C.anchorId);
  if (!var_core_value_sigCF4E) return var_core_value_sigCB82;
  if (var_core_value_sigE94C.kind === 'anchor') {
    let var_core_value_sigC259 = {
      'x': var_core_value_sig6D47.x - var_core_value_sigCF4E.x,
      'y': var_core_value_sig6D47.y - var_core_value_sigCF4E.y
    };
    return var_core_value_sigCF4E.x = var_core_value_sig6D47.x, var_core_value_sigCF4E.y = var_core_value_sig6D47.y, var_core_value_sigCF4E.in &&= {
      'x': var_core_value_sigCF4E.in['x'] + var_core_value_sigC259.x,
      'y': var_core_value_sigCF4E.in['y'] + var_core_value_sigC259.y
    }, var_core_value_sigCF4E.out &&= {
      'x': var_core_value_sigCF4E.out['x'] + var_core_value_sigC259.x,
      'y': var_core_value_sigCF4E.out['y'] + var_core_value_sigC259.y
    }, var_core_value_sigCB82;
  }
  return var_core_value_sigCF4E[var_core_value_sigE94C.kind] = _(var_core_value_sig6D47), var_core_value_sigCF4E.pointType === "corner" && (var_core_value_sigCF4E.pointType = "free"), M(var_core_value_sigCF4E, var_core_value_sigE94C.kind), var_core_value_sigCB82;
}
const I = 1e-9;
function L(var_core_value_sig6CAD) {
  let var_core_value_sig8CF5 = Math.round(var_core_value_sig6CAD * 10000) / 10000;
  return Object.is(var_core_value_sig8CF5, -0) ? '0' : String(var_core_value_sig8CF5);
}
;
function R(var_core_value_sigDDD7) {
  return L(var_core_value_sigDDD7.x) + '\x20' + L(var_core_value_sigDDD7.y);
}
;
function z(var_core_value_sigB2CE, var_core_value_sig443C) {
  return {
    'x': var_core_value_sigB2CE.x - var_core_value_sig443C.x,
    'y': var_core_value_sigB2CE.y - var_core_value_sig443C.y
  };
}
;
function B(var_core_value_sig39B1, var_core_value_sig210D, var_core_value_sigB4B4, var_core_value_sigD407, var_core_value_sig63F3) {
  let var_core_value_sig6A71 = 1 - var_core_value_sig63F3;
  return {
    'x': var_core_value_sig6A71 * var_core_value_sig6A71 * var_core_value_sig6A71 * var_core_value_sig39B1.x + 3 * var_core_value_sig6A71 * var_core_value_sig6A71 * var_core_value_sig63F3 * var_core_value_sig210D.x + 3 * var_core_value_sig6A71 * var_core_value_sig63F3 * var_core_value_sig63F3 * var_core_value_sigB4B4.x + var_core_value_sig63F3 * var_core_value_sig63F3 * var_core_value_sig63F3 * var_core_value_sigD407.x,
    'y': var_core_value_sig6A71 * var_core_value_sig6A71 * var_core_value_sig6A71 * var_core_value_sig39B1.y + 3 * var_core_value_sig6A71 * var_core_value_sig6A71 * var_core_value_sig63F3 * var_core_value_sig210D.y + 3 * var_core_value_sig6A71 * var_core_value_sig63F3 * var_core_value_sig63F3 * var_core_value_sigB4B4.y + var_core_value_sig63F3 * var_core_value_sig63F3 * var_core_value_sig63F3 * var_core_value_sigD407.y
  };
}
;
function V(var_core_value_sig3BF6, var_core_value_sig38CE, var_core_value_sig62B7, var_core_value_sig37A8) {
  let var_core_value_sigA90D = -var_core_value_sig3BF6 + 3 * var_core_value_sig38CE - 3 * var_core_value_sig62B7 + var_core_value_sig37A8,
    var_core_value_sig7A3C = 3 * var_core_value_sig3BF6 - 6 * var_core_value_sig38CE + 3 * var_core_value_sig62B7,
    var_core_value_sig0511 = -3 * var_core_value_sig3BF6 + 3 * var_core_value_sig38CE,
    var_core_value_sig1F44 = [];
  if (Math.abs(var_core_value_sigA90D) < I) {
    if (Math.abs(var_core_value_sig7A3C) < I) return var_core_value_sig1F44;
    let var_core_value_sig9C9F = -var_core_value_sig0511 / (2 * var_core_value_sig7A3C);
    return var_core_value_sig9C9F > 0 && var_core_value_sig9C9F < 1 && var_core_value_sig1F44.push(var_core_value_sig9C9F), var_core_value_sig1F44;
  }
  let var_core_value_sigCB04 = var_core_value_sig7A3C * var_core_value_sig7A3C - 3 * var_core_value_sigA90D * var_core_value_sig0511;
  if (var_core_value_sigCB04 < 0) return var_core_value_sig1F44;
  let var_core_value_sig947E = Math.sqrt(Math.max(0, var_core_value_sigCB04)),
    var_core_value_sig4545 = (-var_core_value_sig7A3C + var_core_value_sig947E) / (3 * var_core_value_sigA90D),
    var_core_value_sigF39A = (-var_core_value_sig7A3C - var_core_value_sig947E) / (3 * var_core_value_sigA90D);
  return var_core_value_sig4545 > 0 && var_core_value_sig4545 < 1 && var_core_value_sig1F44.push(var_core_value_sig4545), var_core_value_sigF39A > 0 && var_core_value_sigF39A < 1 && Math.abs(var_core_value_sigF39A - var_core_value_sig4545) > I && var_core_value_sig1F44.push(var_core_value_sigF39A), var_core_value_sig1F44;
}
;
function H(var_core_value_sigF79C, var_core_value_sig2E54, var_core_value_sig7658, var_core_value_sigDCF5, var_core_value_sigC786) {
  var_core_value_sigF79C.push(var_core_value_sig2E54, var_core_value_sigC786), new Set([...V(var_core_value_sig2E54.x, var_core_value_sig7658.x, var_core_value_sigDCF5.x, var_core_value_sigC786.x), ...V(var_core_value_sig2E54.y, var_core_value_sig7658.y, var_core_value_sigDCF5.y, var_core_value_sigC786.y)]).forEach(var_core_value_sigFDEA => {
    var_core_value_sigF79C.push(B(var_core_value_sig2E54, var_core_value_sig7658, var_core_value_sigDCF5, var_core_value_sigC786, var_core_value_sigFDEA));
  });
}
;
function U(var_core_value_sigC0D9) {
  let var_core_value_sigF0511 = var_core_value_sigC0D9.anchors;
  if (var_core_value_sigF0511.length <= 1) return var_core_value_sigF0511;
  let var_core_value_sig5825 = [];
  for (let var_core_value_sig86D0 = 1; var_core_value_sig86D0 < var_core_value_sigF0511.length; var_core_value_sig86D0++) {
    let var_core_value_sig2BCF = var_core_value_sigF0511[var_core_value_sig86D0 - 1],
      var_core_value_sig0D69 = var_core_value_sigF0511[var_core_value_sig86D0];
    H(var_core_value_sig5825, var_core_value_sig2BCF, var_core_value_sig2BCF.out ?? var_core_value_sig2BCF, var_core_value_sig0D69.in ?? var_core_value_sig0D69, var_core_value_sig0D69);
  }
  if (var_core_value_sigC0D9.closed && var_core_value_sigF0511.length > 1) {
    let var_core_value_sig4CD2 = var_core_value_sigF0511[var_core_value_sigF0511.length - 1],
      var_core_value_sig48CA = var_core_value_sigF0511[0];
    H(var_core_value_sig5825, var_core_value_sig4CD2, var_core_value_sig4CD2.out ?? var_core_value_sig4CD2, var_core_value_sig48CA.in ?? var_core_value_sig48CA, var_core_value_sig48CA);
  }
  return var_core_value_sig5825;
}
;
function de(var_core_value_sig4EB7) {
  let var_core_value_sig73AF = var_core_value_sig4EB7.points;
  if (var_core_value_sig73AF.length <= 1) return var_core_value_sig73AF;
  let var_core_value_sig548A = [];
  for (let var_core_value_sig50AF = 0; var_core_value_sig50AF < var_core_value_sig73AF.length - 1; var_core_value_sig50AF++) {
    let var_core_value_sig480E = var_core_value_sig73AF[var_core_value_sig50AF],
      var_core_value_sig26DB = var_core_value_sig73AF[var_core_value_sig50AF + 1],
      var_core_value_sigF0F9 = var_core_value_sig73AF[var_core_value_sig50AF - 1] ?? var_core_value_sig480E,
      var_core_value_sig1A0F = var_core_value_sig73AF[var_core_value_sig50AF + 2] ?? var_core_value_sig26DB;
    H(var_core_value_sig548A, var_core_value_sig480E, {
      'x': var_core_value_sig480E.x + (var_core_value_sig26DB.x - var_core_value_sigF0F9.x) / 6,
      'y': var_core_value_sig480E.y + (var_core_value_sig26DB.y - var_core_value_sigF0F9.y) / 6
    }, {
      'x': var_core_value_sig26DB.x - (var_core_value_sig1A0F.x - var_core_value_sig480E.x) / 6,
      'y': var_core_value_sig26DB.y - (var_core_value_sig1A0F.y - var_core_value_sig480E.y) / 6
    }, var_core_value_sig26DB);
  }
  return var_core_value_sig548A;
}
;
function fe(var_core_value_sigE026) {
  return var_core_value_sigE026.kind === 'pen' ? U(var_core_value_sigE026) : de(var_core_value_sigE026);
}
;
function W(var_core_value_sig339E) {
  let var_core_value_sig7550 = Math.round(var_core_value_sig339E * 10000) / 10000;
  return Object.is(var_core_value_sig7550, -0) ? 0 : var_core_value_sig7550;
}
;
function G(var_core_value_sig2983) {
  let var_core_value_sigE1B0 = fe(var_core_value_sig2983);
  if (var_core_value_sigE1B0.length === 0) return {
    'left': 0,
    'top': 0,
    'width': 1,
    'height': 1
  };
  let var_core_value_sigD4FF = Math.min(...var_core_value_sigE1B0.map(var_core_value_sigA942 => var_core_value_sigA942.x)),
    var_core_value_sig1E5B = Math.min(...var_core_value_sigE1B0.map(var_core_value_sigA621 => var_core_value_sigA621.y)),
    var_core_value_sigB680 = Math.max(...var_core_value_sigE1B0.map(var_core_value_sigBBFF => var_core_value_sigBBFF.x)),
    var_core_value_sig1F64 = Math.max(...var_core_value_sigE1B0.map(var_core_value_sig8889 => var_core_value_sig8889.y));
  return {
    'left': W(var_core_value_sigD4FF),
    'top': W(var_core_value_sig1E5B),
    'width': W(Math.max(1, var_core_value_sigB680 - var_core_value_sigD4FF)),
    'height': W(Math.max(1, var_core_value_sig1F64 - var_core_value_sig1E5B))
  };
}
;
function pe(var_core_value_sigDD1C, var_core_value_sig2C39) {
  let var_core_value_sigB7D1 = var_core_value_sigDD1C.anchors;
  if (var_core_value_sigB7D1.length === 0) return '';
  let var_core_value_sig64F0 = ['M\x20' + R(z(var_core_value_sigB7D1[0], var_core_value_sig2C39))];
  for (let var_core_value_sig32F8 = 1; var_core_value_sig32F8 < var_core_value_sigB7D1.length; var_core_value_sig32F8++) {
    let var_core_value_sigFBA4 = var_core_value_sigB7D1[var_core_value_sig32F8 - 1],
      var_core_value_sig4383 = var_core_value_sigB7D1[var_core_value_sig32F8],
      var_core_value_sig186C = var_core_value_sigFBA4.out ?? var_core_value_sigFBA4,
      var_core_value_sigD955 = var_core_value_sig4383.in ?? var_core_value_sig4383;
    var_core_value_sig64F0.push('C\x20' + R(z(var_core_value_sig186C, var_core_value_sig2C39)) + '\x20' + R(z(var_core_value_sigD955, var_core_value_sig2C39)) + '\x20' + R(z(var_core_value_sig4383, var_core_value_sig2C39)));
  }
  if (var_core_value_sigDD1C.closed && var_core_value_sigB7D1.length > 1) {
    let var_core_value_sig5B67 = var_core_value_sigB7D1[var_core_value_sigB7D1.length - 1],
      var_core_value_sig1758 = var_core_value_sigB7D1[0],
      var_core_value_sig4805 = var_core_value_sig5B67.out ?? var_core_value_sig5B67,
      var_core_value_sigE67E = var_core_value_sig1758.in ?? var_core_value_sig1758;
    var_core_value_sig64F0.push('C\x20' + R(z(var_core_value_sig4805, var_core_value_sig2C39)) + '\x20' + R(z(var_core_value_sigE67E, var_core_value_sig2C39)) + '\x20' + R(z(var_core_value_sig1758, var_core_value_sig2C39))), var_core_value_sig64F0.push('Z');
  }
  return var_core_value_sig64F0.join('\x20');
}
;
function me(var_core_value_sig85B1, var_core_value_sig3141) {
  let var_core_value_sig2162 = var_core_value_sig85B1.points["map"](var_core_value_sig2902 => z(var_core_value_sig2902, var_core_value_sig3141));
  if (var_core_value_sig2162.length === 0) return '';
  if (var_core_value_sig2162.length === 1) return 'M\x20' + R(var_core_value_sig2162[0]);
  let var_core_value_sig2EAD = ['M\x20' + R(var_core_value_sig2162[0])];
  for (let var_core_value_sig9989 = 0; var_core_value_sig9989 < var_core_value_sig2162.length - 1; var_core_value_sig9989++) {
    let var_core_value_sig48BD = var_core_value_sig2162[var_core_value_sig9989],
      var_core_value_sig429F = var_core_value_sig2162[var_core_value_sig9989 + 1],
      var_core_value_sigF62A = var_core_value_sig2162[var_core_value_sig9989 - 1] ?? var_core_value_sig48BD,
      var_core_value_sig8178 = var_core_value_sig2162[var_core_value_sig9989 + 2] ?? var_core_value_sig429F,
      var_core_value_sigE9ED = {
        'x': var_core_value_sig48BD.x + (var_core_value_sig429F.x - var_core_value_sigF62A.x) / 6,
        'y': var_core_value_sig48BD.y + (var_core_value_sig429F.y - var_core_value_sigF62A.y) / 6
      },
      var_core_value_sigB577 = {
        'x': var_core_value_sig429F.x - (var_core_value_sig8178.x - var_core_value_sig48BD.x) / 6,
        'y': var_core_value_sig429F.y - (var_core_value_sig8178.y - var_core_value_sig48BD.y) / 6
      };
    var_core_value_sig2EAD.push('C\x20' + R(var_core_value_sigE9ED) + '\x20' + R(var_core_value_sigB577) + '\x20' + R(var_core_value_sig429F));
  }
  return var_core_value_sig2EAD.join('\x20');
}
;
function he(var_core_value_sig6774, var_core_value_sig340D) {
  return var_core_value_sig6774.kind === "pen" ? pe(var_core_value_sig6774, var_core_value_sig340D) : me(var_core_value_sig6774, var_core_value_sig340D);
}
;
function ge(var_core_value_sig82D4, var_core_value_sigBDE4) {
  return var_core_value_sigBDE4 != null && var_core_value_sigBDE4.color ? var_core_value_sigBDE4.color : var_core_value_sig82D4.kind === "pen" ? '#f54a45' : var_core_value_sig82D4.color;
}
;
function _e(var_core_value_sig7DF1, var_core_value_sigDC86) {
  return (var_core_value_sigDC86 == null ? undefined : var_core_value_sigDC86.width) === undefined ? var_core_value_sig7DF1.kind === "pen" ? 2 : var_core_value_sig7DF1.width : var_core_value_sigDC86.width;
}
;
function ve(var_core_value_sig0B0C, var_core_value_sigA39E) {
  return (var_core_value_sigA39E == null ? undefined : var_core_value_sigA39E.opacity) === undefined ? var_core_value_sig0B0C.kind === 'pen' ? undefined : var_core_value_sig0B0C.opacity : var_core_value_sigA39E.opacity;
}
;
function ye(var_core_value_sigBBEE, var_core_value_sig011D) {
  let var_core_value_sig6167 = G(var_core_value_sigBBEE),
    var_core_value_sig65A1 = he(var_core_value_sigBBEE, {
      'x': var_core_value_sig6167.left,
      'y': var_core_value_sig6167.top
    }),
    var_core_value_sig7F19 = var_core_value_sigBBEE.kind === "pen" && var_core_value_sigBBEE.closed,
    var_core_value_sig7827 = var_core_value_sig011D == null ? undefined : var_core_value_sig011D.fillColor;
  return {
    'shapeType': var_core_value_sig4CDF.Rect,
    'isCustom': true,
    'customGeometry': {
      'rect': {
        'l': 0,
        't': 0,
        'r': 'r',
        'b': 'b'
      },
      'pathLst': [{
        'w': var_core_value_sig6167.width,
        'h': var_core_value_sig6167.height,
        'fill': var_core_value_sig7F19 ? "norm" : 'none',
        'stroke': true,
        'data': var_core_value_sig65A1,
        'dataArray': be(var_core_value_sigBBEE, {
          'x': var_core_value_sig6167.left,
          'y': var_core_value_sig6167.top
        })
      }]
    },
    'fill': var_core_value_sig7F19 && var_core_value_sig7827 ? {
      'color': var_core_value_sig7827,
      'fillType': var_core_value_sig4E3D.SolidFill
    } : {
      'fillType': var_core_value_sig4E3D.NoFill
    },
    'stroke': {
      'color': ge(var_core_value_sigBBEE, var_core_value_sig011D),
      'width': _e(var_core_value_sigBBEE, var_core_value_sig011D),
      'opacity': ve(var_core_value_sigBBEE, var_core_value_sig011D),
      'lineStrokeType': var_core_value_sigBCA9.SolidLine,
      'capType': var_core_value_sig49B0.Round,
      'lineJoinType': var_core_value_sig2547.Round
    }
  };
}
;
function K(var_core_value_sig652C, var_core_value_sig7E32) {
  return {
    'x': var_core_value_sig652C.x - var_core_value_sig7E32.x,
    'y': var_core_value_sig652C.y - var_core_value_sig7E32.y
  };
}
;
function be(var_core_value_sig4C07, var_core_value_sig79AB) {
  if (var_core_value_sig4C07.kind === 'pen') {
    let var_core_value_sig698E = var_core_value_sig4C07.anchors;
    if (var_core_value_sig698E.length === 0) return [];
    let var_core_value_sig2809 = K(var_core_value_sig698E[0], var_core_value_sig79AB),
      var_core_value_sig2DAB = [{
        'command': 'M',
        'points': [var_core_value_sig2809.x, var_core_value_sig2809.y]
      }];
    for (let var_core_value_sig9572 = 1; var_core_value_sig9572 < var_core_value_sig698E.length; var_core_value_sig9572++) {
      let var_core_value_sigBC46 = var_core_value_sig698E[var_core_value_sig9572 - 1],
        var_core_value_sig3D7D = var_core_value_sig698E[var_core_value_sig9572],
        var_core_value_sig27E5 = K(var_core_value_sigBC46.out ?? var_core_value_sigBC46, var_core_value_sig79AB),
        var_core_value_sig8061 = K(var_core_value_sig3D7D.in ?? var_core_value_sig3D7D, var_core_value_sig79AB),
        var_core_value_sig4D4C = K(var_core_value_sig3D7D, var_core_value_sig79AB);
      var_core_value_sig2DAB.push({
        'command': 'C',
        'points': [var_core_value_sig27E5.x, var_core_value_sig27E5.y, var_core_value_sig8061.x, var_core_value_sig8061.y, var_core_value_sig4D4C.x, var_core_value_sig4D4C.y]
      });
    }
    if (var_core_value_sig4C07.closed && var_core_value_sig698E.length > 1) {
      let var_core_value_sigD873 = var_core_value_sig698E[var_core_value_sig698E.length - 1],
        var_core_value_sigA12B = var_core_value_sig698E[0],
        var_core_value_sigF230 = K(var_core_value_sigD873.out ?? var_core_value_sigD873, var_core_value_sig79AB),
        var_core_value_sig09B8 = K(var_core_value_sigA12B.in ?? var_core_value_sigA12B, var_core_value_sig79AB),
        var_core_value_sig6F91 = K(var_core_value_sigA12B, var_core_value_sig79AB);
      var_core_value_sig2DAB.push({
        'command': 'C',
        'points': [var_core_value_sigF230.x, var_core_value_sigF230.y, var_core_value_sig09B8.x, var_core_value_sig09B8.y, var_core_value_sig6F91.x, var_core_value_sig6F91.y]
      }), var_core_value_sig2DAB.push({
        'command': 'z',
        'points': []
      });
    }
    return var_core_value_sig2DAB;
  }
  let var_core_value_sig8E74 = var_core_value_sig4C07.points["map"](var_core_value_sig877E => K(var_core_value_sig877E, var_core_value_sig79AB));
  if (var_core_value_sig8E74.length === 0) return [];
  let var_core_value_sig104C = [{
    'command': 'M',
    'points': [var_core_value_sig8E74[0].x, var_core_value_sig8E74[0].y]
  }];
  for (let var_core_value_sig20C8 = 0; var_core_value_sig20C8 < var_core_value_sig8E74.length - 1; var_core_value_sig20C8++) {
    let var_core_value_sigF9C7 = var_core_value_sig8E74[var_core_value_sig20C8],
      var_core_value_sig8895 = var_core_value_sig8E74[var_core_value_sig20C8 + 1],
      var_core_value_sigC80B = var_core_value_sig8E74[var_core_value_sig20C8 - 1] ?? var_core_value_sigF9C7,
      var_core_value_sig284F = var_core_value_sig8E74[var_core_value_sig20C8 + 2] ?? var_core_value_sig8895,
      var_core_value_sigE154 = {
        'x': var_core_value_sigF9C7.x + (var_core_value_sig8895.x - var_core_value_sigC80B.x) / 6,
        'y': var_core_value_sigF9C7.y + (var_core_value_sig8895.y - var_core_value_sigC80B.y) / 6
      },
      var_core_value_sig4632 = {
        'x': var_core_value_sig8895.x - (var_core_value_sig284F.x - var_core_value_sigF9C7.x) / 6,
        'y': var_core_value_sig8895.y - (var_core_value_sig284F.y - var_core_value_sigF9C7.y) / 6
      };
    var_core_value_sig104C.push({
      'command': 'C',
      'points': [var_core_value_sigE154.x, var_core_value_sigE154.y, var_core_value_sig4632.x, var_core_value_sig4632.y, var_core_value_sig8895.x, var_core_value_sig8895.y]
    });
  }
  return var_core_value_sig104C;
}
;
function xe(var_core_value_sig841D) {
  let {
      model: var_core_value_sig90CB,
      sourceModel: var_core_value_sigACC6 = var_core_value_sig90CB,
      style: var_core_value_sigBDF5
    } = var_core_value_sig841D,
    var_core_value_sig1614 = var_core_value_sig841D.tool ?? var_core_value_sig90CB.kind,
    var_core_value_sig85C3 = G(var_core_value_sig90CB),
    var_core_value_sigB996 = var_core_value_sig90CB.kind === "pen" && var_core_value_sig1614 !== 'pen' ? var_core_value_sig90CB : undefined;
  return {
    'transform': {
      ...var_core_value_sig85C3,
      'rotation': 0
    },
    'shapeData': ye(var_core_value_sig90CB, var_core_value_sigBDF5),
    'ink': {
      'version': 1,
      'tool': var_core_value_sig1614,
      'sourceModel': var_core_value_sigACC6,
      ...(var_core_value_sigB996 ? {
        'editModel': var_core_value_sigB996
      } : {}),
      'normalizedBounds': var_core_value_sig85C3
    }
  };
}
var Se = "@univerjs-pro/ink",
  Ce = "1.0.0-insiders.20260907-70fc579";
function q(var_core_value_sig4BBA) {
  '@babel/helpers - typeof';

  return q = typeof Symbol == "function" && typeof Symbol.iterator == 'symbol' ? function (var_core_value_sigE9A7) {
    return typeof var_core_value_sigE9A7;
  } : function (var_core_value_sigBECE) {
    return var_core_value_sigBECE && typeof Symbol == "function" && var_core_value_sigBECE.constructor === Symbol && var_core_value_sigBECE !== Symbol.prototype ? "symbol" : typeof var_core_value_sigBECE;
  }, q(var_core_value_sig4BBA);
}
;
function we(var_core_value_sig6201, var_core_value_sig5151) {
  if (q(var_core_value_sig6201) != "object" || !var_core_value_sig6201) return var_core_value_sig6201;
  var var_core_value_sigB542 = var_core_value_sig6201[Symbol.toPrimitive];
  if (var_core_value_sigB542 !== undefined) {
    var var_core_value_sigBB6C = var_core_value_sigB542.call(var_core_value_sig6201, var_core_value_sig5151 || "default");
    if (q(var_core_value_sigBB6C) != "object") return var_core_value_sigBB6C;
    throw TypeError("@@toPrimitive must return a primitive value.");
  }
  return (var_core_value_sig5151 === "string" ? String : Number)(var_core_value_sig6201);
}
;
function J(var_core_value_sigE2BF) {
  var var_core_value_sigB8C7 = we(var_core_value_sigE2BF, "string");
  return q(var_core_value_sigB8C7) == "symbol" ? var_core_value_sigB8C7 : var_core_value_sigB8C7 + '';
}
;
function Y(var_core_value_sigA56E, var_core_value_sig1998, var_core_value_sigFF19) {
  return (var_core_value_sig1998 = J(var_core_value_sig1998)) in var_core_value_sigA56E ? Object.defineProperty(var_core_value_sigA56E, var_core_value_sig1998, {
    'value': var_core_value_sigFF19,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }) : var_core_value_sigA56E[var_core_value_sig1998] = var_core_value_sigFF19, var_core_value_sigA56E;
}
const X = var_core_value_sig68BE('ink.host-adapter.service');
var Te = class {
  constructor() {
    Y(this, "_adapters", []);
  }
  registerAdapter(var_core_value_sig1B22) {
    return this._adapters["push"](var_core_value_sig1B22), var_core_value_sigCA05(() => {
      let var_core_value_sig12F2 = this._adapters["indexOf"](var_core_value_sig1B22);
      var_core_value_sig12F2 >= 0 && this._adapters['splice'](var_core_value_sig12F2, 1);
    });
  }
  beginInkMode(var_core_value_sig7F72) {
    for (let var_core_value_sig2259 of this._adapters) if (var_core_value_sig2259.beginInkMode(var_core_value_sig7F72)) return true;
    return false;
  }
  async createCustomShape(var_core_value_sig7B2A) {
    for (let var_core_value_sig9E2F of this._adapters) if (var_core_value_sig9E2F.createCustomShape && (await var_core_value_sig9E2F.createCustomShape(var_core_value_sig7B2A))) return true;
    return false;
  }
};
const Ee = {
    'id': "ink.operation.start",
    'type': var_core_value_sig880E.OPERATION,
    'handler': (var_core_value_sig43B8, var_core_value_sigD98F) => var_core_value_sigD98F ? var_core_value_sig43B8.get(X).beginInkMode(var_core_value_sigD98F) : false
  },
  Z = {};
function Q(var_core_value_sig66C0, var_core_value_sig9D15) {
  return function (var_core_value_sig06CD, var_core_value_sigA5F1) {
    var_core_value_sig9D15(var_core_value_sig06CD, var_core_value_sigA5F1, var_core_value_sig66C0);
  };
}
;
function De(var_core_value_sigB785, var_core_value_sig130F, var_core_value_sigC0E3, var_core_value_sig52F7) {
  var var_core_value_sig866F = arguments.length,
    var_core_value_sigDE3D = var_core_value_sig866F < 3 ? var_core_value_sig130F : var_core_value_sig52F7 === null ? var_core_value_sig52F7 = Object.getOwnPropertyDescriptor(var_core_value_sig130F, var_core_value_sigC0E3) : var_core_value_sig52F7,
    var_core_value_sigF175;
  if (typeof Reflect == 'object' && typeof Reflect.decorate == 'function') var_core_value_sigDE3D = Reflect.decorate(var_core_value_sigB785, var_core_value_sig130F, var_core_value_sigC0E3, var_core_value_sig52F7);else {
    for (var var_core_value_sig6A18 = var_core_value_sigB785.length - 1; var_core_value_sig6A18 >= 0; var_core_value_sig6A18--) (var_core_value_sigF175 = var_core_value_sigB785[var_core_value_sig6A18]) && (var_core_value_sigDE3D = (var_core_value_sig866F < 3 ? var_core_value_sigF175(var_core_value_sigDE3D) : var_core_value_sig866F > 3 ? var_core_value_sigF175(var_core_value_sig130F, var_core_value_sigC0E3, var_core_value_sigDE3D) : var_core_value_sigF175(var_core_value_sig130F, var_core_value_sigC0E3)) || var_core_value_sigDE3D);
  }
  return var_core_value_sig866F > 3 && var_core_value_sigDE3D && Object.defineProperty(var_core_value_sig130F, var_core_value_sigC0E3, var_core_value_sigDE3D), var_core_value_sigDE3D;
}
let $ = class extends var_core_value_sig7D40 {
  constructor(var_core_value_sig97A2 = Z, var_core_value_sig07E9, var_core_value_sig4F59, var_core_value_sigF564) {
    super(), this._config = var_core_value_sig97A2, this._injector = var_core_value_sig07E9, this._commandService = var_core_value_sig4F59, this._configService = var_core_value_sigF564;
    let {
      ...var_core_value_sig8CFA
    } = var_core_value_sig04C6({}, Z, this._config);
    this._configService['setConfig']("ink.config", var_core_value_sig8CFA);
  }
  onStarting() {
    [[X, {
      'useClass': Te
    }]].forEach(var_core_value_sigD082 => this._injector["add"](var_core_value_sigD082)), this.disposeWithMe(this._commandService['registerCommand'](Ee));
  }
};
Y($, "pluginName", "UNIVER_INK_PLUGIN"), Y($, 'packageName', Se), Y($, "version", Ce), Y($, 'type', var_core_value_sig6C7E.UNIVER_UNKNOWN), $ = De([var_core_value_sigC9ED(var_core_value_sig3F79), Q(1, var_core_value_sig7D1B(var_core_value_sig7BE0)), Q(2, var_core_value_sigB57B), Q(3, var_core_value_sig780B)], $);
export { X as IInkHostAdapterService, $ as UniverInkPlugin, xe as buildInkCustomShapePayload, oe as convertBrushModelToPenModel, P as cycleInkPenAnchorPointType, ue as deleteInkPenAnchor, se as findClosestInkPenHandle, ce as findClosestInkPenSegment, G as getInkModelBounds, ae as getInkPenPreviewModel, le as insertInkPenAnchorAt, E as isInkPenHandleVisible, F as moveInkPenAnchorPoint, N as setInkPenAnchorPointType };
