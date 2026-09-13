import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Ur, gn, hn, id, qn, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB320, vn, w, wr, yn } from "./internal-core-endo.js";
import { op } from "./pdfs-pdf-editor-mutation-log-runtime-index.js";
import { Me } from "./pdfs-emu-to-pt.js";
import { S } from "./pdfs-pt-to-emu.js";
function Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462382 = Ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381);
  if (Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462382.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46224 + kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462380, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381), 0),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D63 = Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462382.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462380.charSpacing,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64 = Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462380.wordSpacing;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46710 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D63 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D64;
  }
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D125 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462382.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46711 + Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46712, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381), 0) / 1000 * Lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462380),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D126 = Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462382.length - 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462380.charSpacing,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D127 = Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462381) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462380.wordSpacing;
  return (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D125 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D126 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D127) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462380.horizontalScale / 100;
}
function wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462387, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462388) {
  let {
      fontName: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462389,
      metrics: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462388,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390.toUnicode,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462392 = Ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462387, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462392.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462391[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713] ?? Zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46713)).join('') : jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462389, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390) ? Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462387) : Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390) ? Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462387) : Kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462390, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462387) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462392.map(Zt).join('') : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462387.replace(/\u0000/g, '');
}
function Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462400, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462403 = Ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462403.length !== 0) return {
    'glyphIds': Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462403 : undefined,
    'sourceCodes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462403,
    'unicode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462400,
    'advances': Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462403.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714 => kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46714, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402)) : undefined,
    'fontEncoding': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462402.encoding
  };
}
function Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462409) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462409 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462409.writingMode) === "vertical-rl" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462409 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462409.writingMode) === 'vertical-lr';
}
function Dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411.pdfSubtype) === "/Type0" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411.pdfSubtype) === "/CIDFontType0" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411.pdfSubtype) === "/CIDFontType2" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411.encoding) === "/Identity-H" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411.encoding) === "/Identity-V" || qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462411);
}
function Ot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462413) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462414, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462415, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462416, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462417;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462413 ? !!((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462414 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462413.widths) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462414.length || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462415 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462413.cidWidths) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462415.length || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462416 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462413.cidVerticalMetrics) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462416.length || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462413.defaultWidth == 'number' || typeof ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462417 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462413.defaultVerticalMetrics) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462417.verticalDisplacementY) == "number" || Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462413.type3Glyphs ?? {}).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46715.width == "number")) : false;
}
function kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462425) {
  return Et(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462425) ? At(Bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462425) / 1000 * Lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462424)) : At(Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462425) / 1000 * Lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462424) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462424.horizontalScale / 100);
}
function At(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462429) {
  return Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462429 * 1000000) / 1000000;
}
function jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462432) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462431 === '/ZaDb' || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462432 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462432.encoding) === "/ZapfDingbats";
}
function Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462435) {
  return Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462435, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716 => Ft[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716.charCodeAt(0) & 255] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46716).join('');
}
function Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462437) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462437 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462437.encoding) === "/WinAnsiEncoding" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462437 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462437.encoding) === "WinAnsiEncoding";
}
function Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462439) {
  return Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462439, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717 => {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46717.charCodeAt(0) & 255;
    return It[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65] ?? Zt(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65);
  }).join('');
}
const Ft = {
    52: '✓'
  },
  It = {
    128: '€',
    130: '‚',
    131: 'ƒ',
    132: '„',
    133: '…',
    134: '†',
    135: '‡',
    136: 'ˆ',
    137: '‰',
    138: 'Š',
    139: '‹',
    140: 'Œ',
    142: 'Ž',
    145: '‘',
    146: '’',
    147: '“',
    148: '”',
    149: '•',
    150: '–',
    151: '—',
    152: '˜',
    153: '™',
    154: 'š',
    155: '›',
    156: 'œ',
    158: 'ž',
    159: 'Ÿ'
  };
function Lt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462441) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462441.fontSize * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462441.textScale;
}
function Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462446 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444.type3Glyphs) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462443]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462445.width;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462446 == "number") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462446;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462447 = zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444.cidWidths);
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462447 == "number") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462447;
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444.widths)) return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444.defaultWidth) ?? 520;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D131 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462443 - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444.firstChar ?? 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462448 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444.widths[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D131];
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462448 == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462448 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462444.defaultWidth ?? 520;
}
function zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462456) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462456) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462456) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719.widths) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719.widths[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719.firstCid];
      if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 == "number") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678;
      continue;
    }
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719.width == "number" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719.firstCid && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462455 <= (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719.lastCid ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719.firstCid)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46719.width;
  }
}
function Bt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462461;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462 = Vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460.cidVerticalMetrics);
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462.verticalDisplacementY) === undefined ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462461 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460.defaultVerticalMetrics) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462461.verticalDisplacementY) === undefined ? Rt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462459, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460) : Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462460.defaultVerticalMetrics["verticalDisplacementY"]) : Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462462.verticalDisplacementY);
}
function Vt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462468) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462468) for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462468) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720.metrics) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720.metrics[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462467 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720.firstCid];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679;
      continue;
    }
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720.verticalDisplacementY == "number" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462467 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720.firstCid && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462467 <= (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720.lastCid ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720.firstCid)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46720;
  }
}
function Ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462472) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462473 = Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46721.charCodeAt(0) & 255);
  if (qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462472)) return Ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462473, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462472.codeSpaceRanges);
  if (!Kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462471)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462473;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A71 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462473.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67 += 2) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462473[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67] ?? 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462473[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D67 + 1] ?? 0;
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A71.push(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D20 << 8 | var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21);
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A71;
}
function Ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462477, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462479 = [...new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46722.byteLength))].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46723 > 0).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46725 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46724),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A73 = [],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D133 = 0;
  for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D133 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462477.length;) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226 = Wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462477, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462478, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462479);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A73.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.code), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D133 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226.byteLength;
      continue;
    }
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A73.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462477[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D133] ?? 0), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D133 += 1;
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A73;
}
function Wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462485, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462486) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462486) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462484 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462483.length) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227 = Gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462485.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680.byteLength === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680.start && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680.end)) return {
      'code': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227,
      'byteLength': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46726
    };
  }
}
function Gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462493) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D135 = 0;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462493; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68 += 1) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D135 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D135 * 256 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462491[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462492 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D68] ?? 0);
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D135;
}
function Kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462498) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462497 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462497.pdfSubtype) === "/Type0" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462497 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462497.encoding) === "/Identity-H" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462497 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462497.encoding) === "/Identity-V" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462497 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462497.writingMode) === "vertical-rl" || Jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462497 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462497.toUnicode) || Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462498);
}
function qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462502;
  return !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501 != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462502 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501.codeSpaceRanges) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462502.length) && ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501.pdfSubtype) === "/Type0" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501.pdfSubtype) === '/CIDFontType0' || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501.pdfSubtype) === "/CIDFontType2" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501.encoding) === "/Identity-H" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501.encoding) === "/Identity-V" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501.writingMode) === "vertical-rl" || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462501.writingMode) === "vertical-lr");
}
function Jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462505) {
  return Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462505 ?? {}).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727 => Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46727) > 255);
}
function Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462507) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462507.length < 2 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462507.length % 2 != 0) return false;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D69 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D69 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462507.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D69 += 2) if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462507.charCodeAt(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D69) !== 0) return false;
  return true;
}
function Xt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462509, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462510) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462509.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462510 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462510.toUnicode) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46729[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728]) === '\x20' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728 === 32 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46728 === 32;
  }).length;
}
function Zt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513 === 0 ? '' : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513 > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513 < 32 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513 !== 9 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513 !== 10 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513 !== 13 ? '\x20' : Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513 >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513 <= 1114111 ? String.fromCodePoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462513) : '';
}
function Qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462515) {
  let {
      targetOps: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462516,
      parsedGlyphOps: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462517,
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462518,
      glyph: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462519,
      textX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462520,
      textY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462521,
      state: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462522,
      mediaBox: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462523,
      source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462524,
      behavior: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462525 = {
        'emitPaintedOps': true
      }
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462515,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462519.bbox ?? [0, 0, 1000, 1000];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462517) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732.type === "path") {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732.commands['map'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626 => en({
        'command': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626,
        'glyphMediaBox': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75,
        'glyph': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462519,
        'textX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462520,
        'textY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462521,
        'state': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462522,
        'mediaBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462523
      }));
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462525.clipPath && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462525.clipPath['push'](...pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462525.emitPaintedOps && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462516.push({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462518 + '_' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462516.length + 1),
        'commands': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681,
        'paint': on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732.paint, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462522),
        'source': mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732.source)
      });
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732.type === "clip") {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732.path["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 => en({
        'command': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627,
        'glyphMediaBox': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75,
        'glyph': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462519,
        'textX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462520,
        'textY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462521,
        'state': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462522,
        'mediaBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462523
      }));
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462525.clipPath && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462525.clipPath['push'](...pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462525.emitPaintedOps && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462516.push({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462518 + '_' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462516.length + 1),
        'path': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4682,
        'source': mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732.source)
      });
      continue;
    }
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462525.emitPaintedOps) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 = fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1({
      'op': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46732,
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462518 + '_' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462516.length + 1),
      'glyphMediaBox': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A75,
      'glyph': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462519,
      'textX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462520,
      'textY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462521,
      'state': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462522,
      'mediaBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462523,
      'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462524
    });
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462516.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228);
  }
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537) {
  let {
      op: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538,
      id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462539,
      glyphMediaBox: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462540,
      glyph: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541,
      textX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462542,
      textY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462543,
      state: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462544,
      mediaBox: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462545,
      source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462546
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462537,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547 = mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462546, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538.source);
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538.type) {
    case "image":
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462539,
        'transform': rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538.transform, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462544),
        'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547
      };
    case "formXObject":
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462539,
        'transform': rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538.transform, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462544),
        'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547
      };
    case 'shading':
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462539,
        'transform': rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538.transform, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462544),
        'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547
      };
    case "text":
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462539,
        'runs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538.runs['map'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 => ({
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229
        })),
        'transform': nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538.transform, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462540, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462541, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462542, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462545),
        'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547
      };
    case "transform":
      return;
    case "saveState":
    case "restoreState":
    case "setGraphicsState":
    case "markedContentBegin":
    case "markedContentEnd":
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462538,
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462539,
        'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462547
      };
    default:
      return;
  }
}
function en(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462559) {
  let {
    command: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560,
    glyphMediaBox: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561,
    glyph: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462562,
    textX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462563,
    textY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462564,
    state: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462565,
    mediaBox: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462566
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462559;
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560.type) {
    case "moveTo":
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560,
        'point': tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560.point, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462562, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462566)
      };
    case "lineTo":
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560,
        'point': tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560.point, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462562, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462566)
      };
    case "cubicTo":
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560,
        'c1': tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560.c1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462562, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462566),
        'c2': tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560.c2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462562, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462566),
        'point': tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560.point, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462561, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462562, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462563, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462564, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462566)
      };
    case "close":
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560;
    default:
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462560;
  }
}
function tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462575, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462578, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462579, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462580, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462581) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462582, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462583] = un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462576[0] + Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462575[0]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462576[3] - Me(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462575[1]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462577.matrix ?? [0.001, 0, 0, 0.001, 0, 0]),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462585] = un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462578 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462582 * ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462580) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462580.horizontalScale / 100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462579 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462580.rise + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462583 * ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462580), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462580.ctm);
  return fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462584, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462581);
}
function nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462597, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462599, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462603) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462597) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462604 = tn([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462597[4], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462597[5]], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462599, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462600, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462603);
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462597[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462597[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462597[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462597[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462604[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462604[1]];
}
function rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462613, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462617) {
  return dn(an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462616, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462617), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462613 ?? [1, 0, 0, 1, 0, 0]);
}
function an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462625, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462626) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462627 = ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462626),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A77 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462627 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462626.horizontalScale / 100, 0, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462627, 0, 0],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78 = [1, 0, 0, 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462625 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462626.rise];
  return dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462626.ctm, dn(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A78, dn(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A77, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462623.matrix ?? [0.001, 0, 0, 0.001, 0, 0])));
}
function on(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462635) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462636;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633.stroke) return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633,
    'fill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633.fill ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633.fill
    } : undefined
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462637 = sn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462635);
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633,
    'fill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633.fill ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633.fill
    } : undefined,
    'stroke': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633.stroke,
      'width': cn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633.stroke["width"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462637),
      'dash': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633.stroke["dash"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462636.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733 => Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46733 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462637)),
      'dashPhase': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633.stroke["dashPhase"] === undefined ? undefined : cn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462633.stroke["dashPhase"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462637)
    }
  };
}
function sn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462644) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462645 = ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462644),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A81 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462645 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462644.horizontalScale / 100, 0, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462645, 0, 0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462646 = dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462644.ctm, dn(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A81, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462643.matrix ?? [0.001, 0, 0, 0.001, 0, 0])),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D137 = Math.hypot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462646[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462646[1]),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D138 = Math.hypot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462646[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462646[3]);
  return Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D137, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D138, 0);
}
function cn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462652) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462651 === undefined ? undefined : Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462651 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462652);
}
function ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462655) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462655.fontSize * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462655.textScale;
}
function un(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462657, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462658, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659) {
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462657 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462658 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659[4], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462657 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462658 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462659[5]];
}
function dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664) {
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664[2] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664[2] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664[4] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664[5] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[4], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664[4] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462664[5] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462663[5]];
}
function fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669) {
  return [S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462667 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669[0]), S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462669[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462668)];
}
function pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462673) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462673.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734 => {
    switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734.type) {
      case "moveTo":
      case "lineTo":
        return {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734,
          'point': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734.point]
        };
      case "cubicTo":
        return {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734,
          'c1': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734.c1],
          'c2': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734.c2],
          'point': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734.point]
        };
      default:
        return {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46734
        };
    }
  });
}
function mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462677) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462675,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462677,
    'notes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462676.charName ? "type3-charproc:" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462676.charName : "type3-charproc"
  };
}
function xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462685, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462686) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462687 = qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462685),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A83 = [],
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52 = {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462688 = Un(),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A84 = [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462689 = ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462686.initialGraphicsState),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A85 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A86 = [],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D141 = 0;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462687) {
    if (Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736)) {
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D141 += 1, Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462688.operatorCounts, 'BI'), Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462688.operatorCounts, 'ID'), Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462688.operatorCounts, 'EI'), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462689.ctmUnstable || On(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A83, mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462686.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462686.contentStreamRef, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D141), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462689, pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462686), {
        'imageAssets': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52,
        'report': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462688,
        'options': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462686
      });
      continue;
    }
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736 == "string" && hn.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736)) {
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D141 += 1, Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462688.operatorCounts, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736), Cn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A85.splice(0), {
        'ops': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A83,
        'report': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462688,
        'state': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462689,
        'graphicsStack': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A84,
        'path': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A86,
        'setPath': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 => {
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A86 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628;
        },
        'opId': mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462686.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462686.contentStreamRef, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D141),
        'source': pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462686),
        'options': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462686
      });
      continue;
    }
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A85.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46736);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462688.unsupportedFeatures = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462688.unsupportedFeatureCounts).sort(), {
    'ops': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A83,
    ...(Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52).length > 0 ? {
      'imageAssets': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB52
    } : {}),
    'report': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462688
  };
}
function Cn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462701) {
  let {
    ops: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702,
    state: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703,
    graphicsStack: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462704,
    path: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705,
    setPath: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706,
    opId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707,
    source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708,
    options: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462701;
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462699) {
    case 'q':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462704.push(fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702.push({
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707,
        'type': "saveState",
        'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708
      });
      return;
    case 'Q':
      {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462704.pop();
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 && Object.assign(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702.push({
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707,
          'type': "restoreState",
          'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708
        });
        return;
      }
    case 'cm':
      wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462701);
      return;
    case 'w':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.lineWidth = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.lineWidth;
      return;
    case 'J':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.lineCap = pi(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0));
      return;
    case 'j':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.lineJoin = mi(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0));
      return;
    case 'M':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.miterLimit = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.miterLimit;
      return;
    case 'd':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.dash = Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700[0]) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700[0].filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 == "number") : [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.dashPhase = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 1) ?? 0;
      return;
    case 'ri':
    case 'i':
      return;
    case 'gs':
      Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462701);
      return;
    case 'g':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fill = Jr(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fillPatternId = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fillColorSpace = gn;
      return;
    case 'G':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.stroke = Jr(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.strokePatternId = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.strokeColorSpace = gn;
      return;
    case 'rg':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fill = Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fillPatternId = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fillColorSpace = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB320;
      return;
    case 'RG':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.stroke = Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.strokePatternId = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.strokeColorSpace = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB320;
      return;
    case 'k':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fill = li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fillPatternId = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fillColorSpace = vn;
      return;
    case 'K':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.stroke = li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.strokePatternId = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.strokeColorSpace = vn;
      return;
    case 'cs':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fillColorSpace = Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fillColorSpace);
      return;
    case 'CS':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.strokeColorSpace = Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.strokeColorSpace);
      return;
    case 'sc':
    case 'scn':
      fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709);
      return;
    case 'SC':
    case "SCN":
      ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709);
      return;
    case 'm':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705, {
        'type': "moveTo",
        'point': vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709)
      }]);
      return;
    case 'l':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705, {
        'type': "lineTo",
        'point': vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709)
      }]);
      return;
    case 'c':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705, {
        'type': "cubicTo",
        'c1': C(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0), w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709),
        'c2': C(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 2), w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 3), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709),
        'point': C(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 4), w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 5), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709)
      }]);
      return;
    case 'v':
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231 = C(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 2), w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 3), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705, {
          'type': "cubicTo",
          'c1': Sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705) ?? C(0, 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709),
          'c2': C(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0), w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709),
          'point': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46231
        }]);
        return;
      }
    case 'y':
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232 = C(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 2), w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 3), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705, {
          'type': "cubicTo",
          'c1': C(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0), w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709),
          'c2': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232,
          'point': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46232
        }]);
        return;
      }
    case 're':
      {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? 0,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 1) ?? 0,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 2) ?? 0,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 3) ?? 0;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705, ...yr(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D23, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D24, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D26, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709)]);
        return;
      }
    case 'h':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705, {
        'type': "close"
      }]);
      return;
    case 'S':
    case 's':
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.ctmUnstable) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([]);
        return;
      }
      xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705, {
        'stroke': wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703)
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([]);
      return;
    case 'f':
    case 'F':
    case 'f*':
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.ctmUnstable) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([]);
        return;
      }
      if (jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462699 === 'f*' ? "evenodd" : "nonzero", {
        'fill': Cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703),
        'fillRule': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462699 === 'f*' ? "evenodd" : 'nonzero'
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708)) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([]);
        return;
      }
      xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705, {
        'fill': Cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703),
        'fillRule': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462699 === 'f*' ? "evenodd" : "nonzero"
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([]);
      return;
    case 'B':
    case 'B*':
    case 'b':
    case 'b*':
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.ctmUnstable) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([]);
        return;
      }
      if (jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462699.endsWith('*') ? "evenodd" : "nonzero", {
        'fill': Cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703),
        'stroke': wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703),
        'fillRule': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462699.endsWith('*') ? 'evenodd' : "nonzero"
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708)) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([]);
        return;
      }
      xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705, {
        'fill': Cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703),
        'stroke': wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703),
        'fillRule': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462699.endsWith('*') ? 'evenodd' : "nonzero"
      }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([]);
      return;
    case 'n':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.deferredClipRule && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705.length > 0 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702.push({
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707,
        'type': 'clip',
        'path': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705],
        'fillRule': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.deferredClipRule,
        'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.deferredClipRule = undefined), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([]);
      return;
    case 'W':
    case 'W*':
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.ctmUnstable) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462706([]);
        return;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705.length > 0 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702.push({
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707,
        'type': "clip",
        'path': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462705],
        'fillRule': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462699 === 'W*' ? "evenodd" : 'nonzero',
        'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.deferredClipRule = undefined) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.deferredClipRule = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462699 === 'W*' ? "evenodd" : "nonzero";
      return;
    case 'BT':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textScale = 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textX = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textY = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textLineX = 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textLineY = 0;
      return;
    case 'ET':
      return;
    case 'Tf':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fontName = qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fontSize = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 1) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.fontSize;
      return;
    case 'Tc':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.charSpacing = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.charSpacing;
      return;
    case 'Tw':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.wordSpacing = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.wordSpacing;
      return;
    case 'Tz':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.horizontalScale = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.horizontalScale;
      return;
    case 'TL':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.leading = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.leading;
      return;
    case 'Tr':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.renderingMode = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.renderingMode;
      return;
    case 'Ts':
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.rise = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.rise;
      return;
    case 'Td':
      Pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? 0, w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 1) ?? 0);
      return;
    case 'TD':
      {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 1) ?? 0;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.leading = -var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27, Pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? 0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27);
        return;
      }
    case 'Tm':
      {
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? 1,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 1) ?? 0,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 2) ?? 0,
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 3) ?? 1,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 4) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textX,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234 = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 5) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textY;
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textScale = yi(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textMatrix = [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D28, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textX = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textY = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textLineX = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textLineY = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.textY;
        return;
      }
    case 'T*':
      Pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, 0, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.leading);
      return;
    case 'Tj':
    case 'TJ':
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.ctmUnstable) return;
      Tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709);
      return;
    case '\x27':
      if (Pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, 0, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.leading), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.ctmUnstable) return;
      Tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709);
      return;
    case '\x22':
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.wordSpacing = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.wordSpacing, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.charSpacing = w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 1) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.charSpacing, Pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, 0, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.leading), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.ctmUnstable) return;
      Tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709);
      return;
    case 'd0':
    case 'd1':
      return;
    case 'sh':
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.ctmUnstable) return;
      En(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462701);
      return;
    case 'Do':
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703.ctmUnstable) return;
      Dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462703, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462709, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462701);
      return;
    case 'BMC':
    case "BDC":
      {
        let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16 = qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, 0) ?? "/Unknown";
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702.push({
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707,
          'type': 'markedContentBegin',
          'tag': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB16,
          'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708
        });
        return;
      }
    case "EMC":
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462702.push({
        'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462707,
        'type': "markedContentEnd",
        'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462708
      });
      return;
    case 'MP':
    case 'DP':
      return;
    default:
      Wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462700, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462701);
  }
}
function wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462721, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462722, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462723, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462724, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462725, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462726) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462727 = hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462723),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462728 = gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462724.ctm, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462727),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462724.ctmUnstable || !Tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462727) || !Tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462728);
  var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462724.ctmUnstable && Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462726.report["unsupportedFeatureCounts"], "unstable-ctm"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462724.ctm = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462728, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462724.ctmUnstable = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462724.ctmUnstable || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462721.push({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462722,
    'type': "transform",
    'matrix': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462724.ctm,
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462725
  });
}
function Tn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462737) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462737.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738 => Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738) && Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46738) <= 0x56bc75e2d63100000);
}
function En(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462739, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462740, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462741, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462742, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462743, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462744, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462745) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462746;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462747 = qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462741, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462741.length - 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462748 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462747 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462746 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462744.shadingResources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462746[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462747] : undefined;
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462748 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462748.assetId)) {
    Wn('sh', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462741, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462745);
    return;
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462739.push({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462740,
    'type': 'shading',
    'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462748.assetId,
    'transform': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462742.ctm],
    'source': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462743,
      'pdfObjectRefs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462748.objectRef ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462748.objectRef] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462743.pdfObjectRefs,
      'resourceRefs': [{
        'kind': "Shading",
        'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462748.resourceName,
        'ref': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462748.objectRef,
        'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462748.assetId
      }]
    }
  });
}
function Dn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462759, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462760, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462761, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462762, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462763, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462764, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462765) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462766;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462767 = qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462761, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462761.length - 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462767 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462766 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462764.xObjectResources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462766[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462767] : undefined;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.assetId) {
    Wn('Do', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462761, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462765);
    return;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462769 = Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462763, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.subtype === 'image') {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462759.push({
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462760,
      'type': "image",
      'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.assetId,
      'resourceName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462767,
      'intrinsicSize': typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.width == "number" && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.height == "number" ? {
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.width,
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.height
      } : undefined,
      'imageSpaceMatrix': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.matrix,
      'transform': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462762.ctm],
      'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462769
    });
    return;
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.subtype === "form" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.objectRef) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462759.push({
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462760,
      'type': "formXObject",
      'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.assetId,
      'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.objectRef,
      'resourceName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462767,
      'displayListId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.displayListId,
      'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.bbox,
      'matrix': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462768.matrix,
      'transform': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462762.ctm],
      'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462769
    });
    return;
  }
  Wn('Do', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462761, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462765);
}
function On(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462782, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462783, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462784, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462786) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462787 = An(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462783);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462787 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462787.width * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462787.height > 4096) {
    if (kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462782, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462783, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462784, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462786)) return;
    Wn('BI', [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462786);
    return;
  }
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D143 = 0;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462787.height; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 += 1) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462787.width; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 += 1) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462787.colors[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D143];
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D143 += 1, !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683) continue;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462787.width,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462787.height - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 - 1) / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462787.height,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7 = 1 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462787.width,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8 = 1 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462787.height;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462781.push({
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462782 + "_px_" + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D70 + '_' + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32,
      'type': 'path',
      'commands': yr(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D7, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462784, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462786.options),
      'paint': {
        'fill': {
          'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4683,
          'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462784.fillAlpha
        },
        'fillRule': "nonzero"
      },
      'source': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462785,
        'notes': "inline-image-pixel-fallback"
      }
    });
  }
}
function kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462795, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462797, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462798, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462799, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462800) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462801 = Pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462797.dictionary, '/F', '/Filter');
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462801.length === 0) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802 = Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462797.dictionary, '/W', "/Width"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462803 = Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462797.dictionary, '/H', "/Height");
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462803 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462803 <= 0) return false;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB56 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796 + "_inline_image",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804 = Fn(Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462797.dictionary, "/CS", "/ColorSpace"));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462800.imageAssets[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB56] = {
    'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB56,
    'type': 'image',
    'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802,
    'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462803,
    'sourceKind': "inline",
    'colorSpace': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462804,
    'bitsPerComponent': Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462797.dictionary, "/BPC", '/BitsPerComponent'),
    'filters': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462801,
    'byteLength': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462797.data["length"],
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462799,
    'metadata': {
      'inlineImageDictionary': In(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462797.dictionary)
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462795.push({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462796,
    'type': 'image',
    'assetId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB56,
    'intrinsicSize': {
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462802,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462803
    },
    'transform': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462798.ctm],
    'source': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462799,
      'notes': "inline-image-asset-fallback"
    }
  }), true;
}
function An(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815) {
  if (Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.dictionary, '/F', "/Filter")) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816 = Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.dictionary, '/W', "/Width"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817 = Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.dictionary, '/H', "/Height"),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 = Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.dictionary, "/BPC", '/BitsPerComponent') ?? 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818 = jn(Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.dictionary, "/CS", "/ColorSpace") ?? '/DeviceGray');
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816 <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817 <= 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D145 !== 8 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819 = Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462815.data, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46739.charCodeAt(0) & 255),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D146 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819.length < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D146) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A93 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818 - 1 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D146; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818 === 1 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A93.push(Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71])) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462818 === 3 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A93.push(Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 + 1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 + 2])) : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A93.push(Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 + 1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 + 2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462819[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D71 + 3]));
  return {
    'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462816,
    'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462817,
    'colors': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A93
  };
}
function jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462825) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462825) {
    case '/G':
    case "/DeviceGray":
      return 1;
    case '/RGB':
    case "/DeviceRGB":
      return 3;
    case "/CMYK":
    case '/DeviceCMYK':
      return 4;
    default:
      return;
  }
}
function Mn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462827, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462828) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462828) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462827[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46740];
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 == "number") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235;
  }
}
function Nn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462831, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462832) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462832) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462831[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46741];
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 == "string") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236;
  }
}
function Pn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462835, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462836) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462836) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462835[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46742];
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237 == "string") return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237];
    if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 == "string");
  }
  return [];
}
function Fn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462839) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462839) {
    case '/G':
      return '/DeviceGray';
    case "/RGB":
      return "/DeviceRGB";
    case "/CMYK":
      return "/DeviceCMYK";
    default:
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462839;
  }
}
function In(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462841) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462841)) if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744 == "string" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744 == 'number') var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744;else {
    if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744)) {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46744.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 == "string" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 == "number");
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1.length > 0 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46743] = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A1);
    }
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB54;
}
function Ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462845) {
  return '#' + [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462843, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462844, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462845].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745 => zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46745).toString(16).padStart(2, '0')).join('');
}
function Rn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462850, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462852) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D149 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462849 / 255,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D150 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462850 / 255,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D151 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462851 / 255,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D152 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462852 / 255;
  return Ln(255 * (1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D149) * (1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D152), 255 * (1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D150) * (1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D152), 255 * (1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D151) * (1 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D152));
}
function zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462857) {
  return Math.max(0, Math.min(255, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462857)));
}
function Bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462859) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462859 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462859 && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462859) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462859.kind === 'inlineImage';
}
function Vn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462861, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462862) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462861,
    'pdfObjectRefs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462862.objectRef ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462862.objectRef] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462861.pdfObjectRefs,
    'xobjectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462862.objectRef,
    'resourceRefs': [{
      'kind': 'XObject',
      'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462862.resourceName,
      'ref': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462862.objectRef,
      'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462862.assetId
    }]
  };
}
function Hn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462866, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462867, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462868, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462869, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462872, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462874;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462875 = qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462867, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462867.length - 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462875 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462871 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870.options["extGStateResources"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462871[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462875] : undefined;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876) {
    Wn('gs', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462867, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462870);
    return;
  }
  typeof ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462872 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.state['fill']) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462872.opacity) == "number" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462868.fillAlpha = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.state["fill"].opacity), typeof ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462873 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.state["stroke"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462873.opacity) == "number" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462868.strokeAlpha = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.state["stroke"].opacity), typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.state["alpha"] == "number" && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462868.fillAlpha = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.state["alpha"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.state["blendMode"] && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462868.blendMode = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.state["blendMode"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462865.push({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462866,
    'type': "setGraphicsState",
    'state': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.state,
      'alpha': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.state["alpha"] ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462874 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.state["fill"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462874.opacity),
      'blendMode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.state["blendMode"]
    },
    'source': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462869,
      'pdfObjectRefs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.objectRef ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.objectRef] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462869.pdfObjectRefs,
      'resourceRefs': [{
        'kind': "ExtGState",
        'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.resourceName,
        'ref': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462876.objectRef
      }]
    }
  });
}
function Un() {
  return {
    'operatorCounts': {},
    'unsupportedOperatorCounts': {},
    'unsupportedFeatureCounts': {},
    'unsupportedFeatures': []
  };
}
function Wn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462889, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891) {
  Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891.report['unsupportedOperatorCounts'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462889), Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891.report["unsupportedFeatureCounts"], Gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462889, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462891.options));
}
function Gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462897) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462895) {
    case 'Do':
      {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462899;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 = qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462896.length - 1),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 ? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462897.xObjectResources) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462898.subtype) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462899 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462897.xObjectResourceTypes) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462899[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238]) : undefined;
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 === "image" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 === "/Image" ? "image-xobject-rendering" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 === 'form' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239 === '/Form' ? "form-xobject-rendering" : "xobject-rendering";
      }
    case 'BI':
    case 'ID':
    case 'EI':
      return "inline-image-rendering";
    case 'sh':
      return "shading-rendering";
    case 'W':
    case 'W*':
      return "clip-path-rendering";
    case 'J':
    case 'j':
    case 'M':
    case 'd':
      return "path-styling";
    case 'v':
    case 'y':
      return "path-curve-shorthand";
    case 'CS':
    case 'cs':
    case 'SC':
    case "SCN":
    case 'sc':
    case 'scn':
    case 'k':
    case 'K':
    case 'ri':
    case 'i':
      return 'advanced-color-rendering';
    case 'gs':
      return "ext-gstate-rendering";
    case 'Tc':
    case 'Tw':
    case 'Tz':
    case 'TL':
    case 'Tr':
    case 'Ts':
      return "advanced-text-state";
    case 'd0':
    case 'd1':
      return 'type3-font-rendering';
    case 'MP':
    case 'DP':
    case "BMC":
    case "BDC":
    case "EMC":
      return "marked-content";
    case 'BX':
    case 'EX':
      return "compatibility-section";
    default:
      return "unknown-content-operator";
  }
}
function Kn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462906) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462905[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462906] = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462905[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462906] ?? 0) + 1;
}
function ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462993) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB58 = {
    'ctm': [1, 0, 0, 1, 0, 0],
    'ctmUnstable': false,
    'fill': "#000000",
    'stroke': "#000000",
    'fillColorSpace': gn,
    'strokeColorSpace': gn,
    'lineWidth': 1,
    'lineCap': "butt",
    'lineJoin': "miter",
    'miterLimit': 10,
    'dash': [],
    'dashPhase': 0,
    'fillAlpha': 1,
    'strokeAlpha': 1,
    'fontSize': 12,
    'charSpacing': 0,
    'wordSpacing': 0,
    'horizontalScale': 100,
    'leading': 0,
    'renderingMode': 0,
    'rise': 0,
    'textScale': 1,
    'textMatrix': [1, 0, 0, 1, 0, 0],
    'textX': 0,
    'textY': 0,
    'textLineX': 0,
    'textLineY': 0,
    'pendingTextClipFallbacks': [],
    'pendingTextClipPaths': []
  };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462993 ? {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB58,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462993,
    'dash': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462993.dash ? [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462993.dash] : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB58.dash,
    'pendingTextClipFallbacks': [],
    'pendingTextClipPaths': []
  } : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB58;
}
function dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995) {
  return {
    'fill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.fill,
    'fillPatternId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.fillPatternId,
    'stroke': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.stroke,
    'strokePatternId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.strokePatternId,
    'fillColorSpace': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.fillColorSpace,
    'strokeColorSpace': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.strokeColorSpace,
    'lineWidth': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.lineWidth,
    'lineCap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.lineCap,
    'lineJoin': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.lineJoin,
    'miterLimit': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.miterLimit,
    'dash': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.dash],
    'dashPhase': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.dashPhase,
    'fillAlpha': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.fillAlpha,
    'strokeAlpha': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.strokeAlpha,
    'blendMode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462995.blendMode
  };
}
function fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462997) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462997,
    'ctm': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462997.ctm],
    'textMatrix': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462997.textMatrix],
    'dash': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462997.dash],
    'pendingTextClipFallbacks': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462997.pendingTextClipFallbacks["map"](Nr),
    'pendingTextClipPaths': Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462997.pendingTextClipPaths)
  };
}
function pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462999) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462999.contentStreamIndex == 'number' ? {
    'contentStreamIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462999.contentStreamIndex
  } : {};
}
function mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463001, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463002, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463003) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463001 + '_' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463002 ? String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463002).replace(/\s+/g, '_').replace(/[^A-Za-z0-9_]/g, '') : "stream") + "_op_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463003;
}
function hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463007) {
  return [w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463007, 0) ?? 1, w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463007, 1) ?? 0, w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463007, 2) ?? 0, w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463007, 3) ?? 1, w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463007, 4) ?? 0, w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463007, 5) ?? 0];
}
function gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463010) {
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463010[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463010[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463010[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463010[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463010[2] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463010[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463010[2] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463010[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463010[4] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463010[5] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[4], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463010[4] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463010[5] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463009[5]];
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC72(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463013, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463014, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463015) {
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463015[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463013 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463015[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463014 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463015[4], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463015[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463013 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463015[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463014 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463015[5]];
}
function vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463019, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463020, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463021) {
  return C(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463019, 0), w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463019, 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463020, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463021);
}
function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463025, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463026, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463027, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463028) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463029, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463030] = fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC72(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463025 ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463026 ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463027.ctm);
  return br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463029, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463030, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463028.mediaBox);
}
function yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463037, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463038, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463039, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463040, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463041, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463042) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463043 = C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463037, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463038, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463041, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463042),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463044 = C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463037 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463039, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463038, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463041, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463042),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463045 = C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463037 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463039, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463038 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463040, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463041, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463042),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463046 = C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463037, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463038 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463040, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463041, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463042);
  return [{
    'type': "moveTo",
    'point': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463043
  }, {
    'type': "lineTo",
    'point': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463044
  }, {
    'type': 'lineTo',
    'point': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463045
  }, {
    'type': 'lineTo',
    'point': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463046
  }, {
    'type': "close"
  }];
}
function br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463057, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463058, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463059) {
  return [S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463057 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463059[0]), S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463059[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463058)];
}
function xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463063, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463064, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463065, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463066, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463067) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463065.length !== 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463063.push({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463064,
    'type': "path",
    'commands': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463065,
    'paint': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463066,
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463067
  });
}
function Sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463073) {
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D75 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463073.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D75 >= 0; --var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D75) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463073[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D75];
    if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.type === "close")) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.type === "rect" ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.rect[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.rect[1]] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46248.point;
  }
}
function Cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463075) {
  return {
    'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463075.fill,
    'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463075.fillAlpha,
    'patternId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463075.fillPatternId
  };
}
function Tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463079, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463081, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463083, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463084) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463081 == "string") {
    Er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463079, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463080, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463081, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463083, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463084);
    return;
  }
  if (!Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463081)) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D163 = 0,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB66 = '',
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463085 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082.textX,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463086 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082.textY,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463087 = () => {
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB66 &&= (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D163 += 1, kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463079, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D163 === 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463080 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463080 + "_group_" + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D163, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB66, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463086, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463083, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463084), '');
    };
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463081) {
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747 == "string") {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747 && (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB66 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463085 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082.textX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463086 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082.textY), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB66 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747, Ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082, Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463084), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463084));
      continue;
    }
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747 == 'number') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 = Lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 > Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082) * 8) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463087(), Fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463084), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463085 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082.textX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463086 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082.textY;
        continue;
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4697 > Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082) * 0.18 && var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB66 && !var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB66.endsWith('\x20') && (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB66 += '\x20'), Fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463082, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463084);
    }
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463087();
}
function Er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463097, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463098, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463099, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463102) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463099 && (Dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463097, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463098, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463099, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463102) || (kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463097, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463098, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463099, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463100.textX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463100.textY, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463102), Ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463100, Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463099, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463100, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463102), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463102)));
}
function Dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463110, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463111, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463114) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463115;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463116 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112.fontName ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463114.fontMetrics) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463115[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112.fontName] : undefined;
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463116 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463116.type3Glyphs)) return false;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 = false,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463117 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112.textX,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463118 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112.renderingMode),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463119 = hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112.renderingMode) || gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112.renderingMode);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748 of Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463111)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463116.type3Glyphs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748.charCodeAt(0)];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249.content ? (Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463110 + '_type3_' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463109.length + 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112.textY, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463114, {
      'emitPaintedOps': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463119,
      'clipPath': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463118 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112.pendingTextClipPaths : undefined
    }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 = true) : kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463110 + "_fallback_" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463109.length + 1), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463117, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112.textY, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463114), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463117 += zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463116);
  }
  return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463112.textX = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463117), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A10;
}
function Or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463134, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463138, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463139 = {
  'emitPaintedOps': true
}) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463140, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463142, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463143, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463144, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463145, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463146, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463147;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A101 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463133.bbox ?? [0, 0, 1000, 1000];
  Qt({
    'targetOps': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463131,
    'parsedGlyphOps': xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463133.content, {
      'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463138.sourceId,
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463138.pageId,
      'pageIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463138.pageIndex,
      'pageRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463138.pageRef,
      'mediaBox': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A101,
      'fontResourceIds': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463140 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463133.resources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463140.fontResourceIds,
      'fontMetrics': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463141 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463133.resources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463141.fontMetrics,
      'xObjectResources': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463142 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463133.resources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463142.xObjectResources,
      'xObjectResourceTypes': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463143 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463133.resources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463143.xObjectResourceTypes,
      'extGStateResources': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463144 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463133.resources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463144.extGStateResources,
      'colorSpaceResources': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463145 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463133.resources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463145.colorSpaceResources,
      'patternResources': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463146 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463133.resources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463146.patternResources,
      'shadingResources': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463147 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463133.resources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463147.shadingResources,
      'initialGraphicsState': dr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463136)
    }).ops,
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463132,
    'glyph': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463133,
    'textX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463134,
    'textY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463135,
    'state': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463136,
    'mediaBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463138.mediaBox,
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463137,
    'behavior': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463139
  });
}
function kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463166, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463171, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463172) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463173, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463174;
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463176] = fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC72(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463168, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.ctm),
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463178] = br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463172.mediaBox),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463179 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.fontName ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463173 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463172.fontResourceIds) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463173[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.fontName] : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463180 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.fontName ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463174 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463172.fontMetrics) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463174[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.fontName] : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463181 = Br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463172),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463182 = Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60 = {
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463166,
      'type': "text",
      'runs': [{
        'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463181,
        'fontId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463179,
        'fontFamily': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.fontName,
        'fontSize': Wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463182),
        'fill': hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.renderingMode) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.fill : undefined,
        'fillPatternId': hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.renderingMode) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.fillPatternId : undefined,
        'fillOpacity': hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.renderingMode) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.fillAlpha : undefined,
        'stroke': gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.renderingMode) ? wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170) : undefined,
        'charSpacing': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.charSpacing * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463182,
        'wordSpacing': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.wordSpacing * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463182,
        'baselineShift': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.rise * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463182,
        'writingMode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463180 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463180.writingMode,
        'glyphs': Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463182)
      }],
      'transform': Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463178),
      'textState': vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463179),
      'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463171
    };
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463165.push(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60), fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.renderingMode) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463170.pendingTextClipFallbacks["push"](Nr(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60));
}
function Ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463201, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463203, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463204) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463205 = gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463201.ctm, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463201.textMatrix),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D165 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463201.textScale || 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463202;
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463205[0] / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D165, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463205[1] / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D165, -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463205[2] / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463205[3] / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D165, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463203, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463204];
}
function jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463212, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463214, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463215, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463217) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463218;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213.pendingTextClipFallbacks["length"] === 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213.pendingTextClipPaths["length"] === 0) return false;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 = !!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463214 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463214.length);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213.pendingTextClipPaths["length"] > 0 && var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463216) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211.push({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463212 + "_type3TextClip_save",
    'type': "saveState",
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463217 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463217,
      'notes': 'type3-text-clip-save'
    } : undefined
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211.push({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463212 + "_type3TextClip_clip",
    'type': "clip",
    'path': Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213.pendingTextClipPaths),
    'fillRule': "nonzero",
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463217 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463217,
      'notes': "type3-text-clip-path"
    } : undefined
  }), xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463212 + "_type3TextClip_paint", Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463214 ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463216, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463217 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463217,
    'notes': "type3-text-clip-paint"
  } : undefined), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211.push({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463212 + '_type3TextClip_restore',
    'type': "restoreState",
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463217 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463217,
      'notes': "type3-text-clip-restore"
    } : undefined
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213.pendingTextClipPaths = [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213.pendingTextClipFallbacks = [], true;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213.pendingTextClipFallbacks['length'] === 0) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463219 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463218 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213.pendingTextClipFallbacks[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463218.source;
  return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211.push({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463212 + "_textClip_save",
    'type': 'saveState',
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463219 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463219,
      'notes': 'text-clip-fallback-save'
    } : undefined
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211.push({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463212 + "_textClip_clip",
    'type': 'clip',
    'path': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463214 ? Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463214) : [],
    'fillRule': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463215,
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463219 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463219,
      'notes': "text-clip-fallback-path"
    } : undefined
  })), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213.pendingTextClipFallbacks['forEach']((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750) => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211.push({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749,
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463212 + "_textClip_" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46750 + 1),
      'runs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.runs["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46250,
        'fill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213.fill,
        'fillOpacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213.fillAlpha,
        'stroke': undefined
      })),
      'textState': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.textState ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.textState,
        'renderingMode': 0
      } : undefined,
      'source': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46749.source,
        'notes': "text-clip-fallback"
      }
    });
  }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A12 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211.push({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463212 + "_textClip_restore",
    'type': 'restoreState',
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463219 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463219,
      'notes': "text-clip-fallback-restore"
    } : undefined
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213.pendingTextClipFallbacks = [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463213.pendingTextClipPaths = [], true;
}
function Mr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463229) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463229.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753 => {
    switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.type) {
      case "moveTo":
      case 'lineTo':
        return {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753,
          'point': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.point]
        };
      case "cubicTo":
        return {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753,
          'c1': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.c1],
          'c2': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.c2],
          'point': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753.point]
        };
      default:
        return {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46753
        };
    }
  });
}
function Nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463231) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463231,
    'runs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463231.runs["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755,
      'stroke': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755.stroke ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755.stroke,
        'dash': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755.stroke["dash"] ? [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46755.stroke["dash"]] : undefined
      } : undefined
    })),
    'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463231.transform ? [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463231.transform] : undefined,
    'textState': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463231.textState ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463231.textState
    } : undefined,
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463231.source ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463231.source
    } : undefined
  };
}
function Pr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463237, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463238, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463239] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463233.textMatrix;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463233.textLineX += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463236 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463234 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463238 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463233.textLineY += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463237 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463234 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463239 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463235, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463233.textX = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463233.textLineX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463233.textY = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463233.textLineY;
}
function Fr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463247, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463249) {
  Ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463247, Lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463248, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463247), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463249);
}
function Ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463254, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463255) {
  if (Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463255) === "vertical-rl") {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253.textY -= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463254;
    return;
  }
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463256, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463257] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253.textMatrix,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D167 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253.textScale || 1;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253.textX += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463256 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D167 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463254, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463253.textY += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463257 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D167 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463254;
}
function Lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463263, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463264) {
  return -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463263 / 1000 * Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463264) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463264.horizontalScale / 100;
}
function Rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463267, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463268, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463269) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463270;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463271 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463268.fontName ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463270 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463269.fontMetrics) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463270[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463268.fontName] : undefined;
  return Ct(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463267, Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463268), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463271);
}
function zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463279) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463280;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463281 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463277.charCodeAt(0);
  return ((((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463280 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463279.type3Glyphs) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463280 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463280[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463281]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463280.width) ?? 0) / 1000 * Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463278) + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463281 === 32 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463278.wordSpacing : 0)) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463278.horizontalScale / 100;
}
function Br(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463289) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463290;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288.fontName ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463290 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463289.fontMetrics) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463290[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288.fontName] : undefined;
  return wt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463287, {
    'fontName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463288.fontName,
    'metrics': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463291
  });
}
function Vr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463297, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463298, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463301 = 1) {
  return Tt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463297, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463298, Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463299, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463301), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463300);
}
function Hr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463307, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463308 = 1) {
  return {
    'fontName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463307.fontName,
    'fontSize': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463307.fontSize,
    'textScale': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463307.textScale * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463308,
    'horizontalScale': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463307.horizontalScale,
    'charSpacing': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463307.charSpacing,
    'wordSpacing': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463307.wordSpacing
  };
}
function Wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463314 = Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463313)) {
  return Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463313) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463314;
}
function Gr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317) {
  return yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317.ctm[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317.ctm[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317.ctm[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463317.ctm[3]);
}
function Kr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463319, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463320) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463321;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463319.fontName ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463321 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463320.fontMetrics) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463321 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463321[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463319.fontName]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463321.writingMode : undefined;
}
function qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463331, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463332) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463333 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463331[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463332];
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463333 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463333 : undefined;
}
function Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463337) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463338 = Math.max(0, Math.min(255, Math.round((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463337 ?? 0) * 255))).toString(16).padStart(2, '0');
  return '#' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463338 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463338 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463338;
}
function Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463341) {
  return '#' + [w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463341, 0), w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463341, 1), w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463341, 2)].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756 => Math.max(0, Math.min(255, Math.round((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46756 ?? 0) * 255)))).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46757.toString(16).padStart(2, '0')).join('');
}
function Xr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463344, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463345) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463346;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463347 = qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463343.length - 1);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463347 ? Zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463347) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463346 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463344.colorSpaceResources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463346[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463347]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463345 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463345;
}
function Zr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463353) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463353) {
    case "/DeviceGray":
    case '/G':
      return gn;
    case "/DeviceRGB":
    case "/RGB":
      return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB320;
    case "/DeviceCMYK":
    case "/CMYK":
      return vn;
    case "/Pattern":
      return {
        'resourceName': '/Pattern',
        'kind': "Pattern",
        'channels': 0
      };
    default:
      return;
  }
}
function Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463355, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463356, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463357) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A103 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463355.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46758 == "number"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463358 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463356;
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463358 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463358.kind) {
    case "DeviceGray":
      return Jr(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A103[0]);
    case "DeviceRGB":
      return Yr(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A103);
    case 'DeviceCMYK':
      return li(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A103);
    case "CalGray":
      return ai(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463358);
    case 'CalRGB':
      return oi(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463358);
    case "ICCBased":
      return ni(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463357);
    case "Indexed":
      return ri(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463358, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463357);
    default:
      return ni(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463357);
  }
}
function fn_L0_core_endo_routine_mut_O1_zalloc_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463365) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463366 = ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364.fillColorSpace, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463365);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463366 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463366.assetId) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463367;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759 = Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364.fillColorSpace, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364.fill);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364.fillPatternId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463366.assetId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364.fill = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463367 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463366.fallbackPaint) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463367.color) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46759;
    return;
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364.fillPatternId = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364.fill = Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463363, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364.fillColorSpace, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463364.fill);
}
function ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463374, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463375) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463376 = ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463374.strokeColorSpace, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463375);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463376 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463376.assetId) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463377;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760 = Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463374.strokeColorSpace, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463374.stroke);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463374.strokePatternId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463376.assetId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463374.stroke = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463377 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463376.fallbackPaint) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463377.color) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46760;
    return;
  }
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463374.strokePatternId = undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463374.stroke = Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463374.strokeColorSpace, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463374.stroke);
}
function ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463385) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463386;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463384.kind) !== "Pattern") return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463387 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463383].reverse().find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46761 == "string");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463387 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463386 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463385.patternResources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463386[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463387] : undefined;
}
function ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463393, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463394) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463393.length) {
    case 1:
      return Jr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463393[0]);
    case 3:
      return Yr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463393);
    case 4:
      return li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463393);
    default:
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463394;
  }
}
function ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463398, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463399) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463400 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463398.lookup,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463398.baseColorSpace;
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463400 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463400.length) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401.kind === "Indexed") return ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463399);
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D169 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401.channels || ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401.kind)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D170 = Math.floor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463400.length / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D169);
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D170 <= 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463399;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D171 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463398.highValue ?? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D170 - 1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D170 - 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D172 = Math.max(0, Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D171, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463397[0] ?? 0))) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D169;
  return Qr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463400.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D172, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D172 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D169).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762 => Math.max(0, Math.min(255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46762)) / 255), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463399);
}
function ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463407) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463407) {
    case "DeviceGray":
    case "CalGray":
    case "Indexed":
      return 1;
    case "DeviceCMYK":
      return 4;
    default:
      return 3;
  }
}
function ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463410) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463411;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D177 = fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463409[0] ?? 0) ** (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463411 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463410.gamma) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463411[0]) ?? 1),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A105 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463410.whitePoint ?? [1, 1, 1];
  return si(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A105[0] * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D177, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A105[1] * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D177, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A105[2] * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D177, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A105);
}
function oi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463415, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463416) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A107 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463416.gamma ?? [1, 1, 1],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179 = fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463415[0] ?? 0) ** (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A107[0] ?? 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D180 = fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463415[1] ?? 0) ** (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A107[1] ?? 1),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D181 = fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463415[2] ?? 0) ** (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A107[2] ?? 1),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463416.matrix ?? [1, 0, 0, 0, 1, 0, 0, 0, 1];
  return si((var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A108[0] ?? 1) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179 + (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A108[3] ?? 0) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D180 + (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A108[6] ?? 0) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D181, (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A108[1] ?? 0) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179 + (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A108[4] ?? 1) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D180 + (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A108[7] ?? 0) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D181, (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A108[2] ?? 0) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D179 + (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A108[5] ?? 0) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D180 + (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A108[8] ?? 1) * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463416.whitePoint ?? [1, 1, 1]);
}
function si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463420, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D185 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422[0] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463419 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422[0] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463419,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D186 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422[1] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463420 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422[1] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463420,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D187 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422[2] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463421 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463422[2] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463421;
  return '#' + [3.2406 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D185 - 1.5372 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D186 - 0.4986 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D187, -0.9689 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D185 + 1.8758 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D186 + 0.0415 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D187, 0.0557 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D185 - 0.204 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D186 + 1.057 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D187].map(ci).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46763 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46763.toString(16).padStart(2, '0')).join('');
}
function ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463427) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463428 = fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463427),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D191 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463428 <= 0.0031308 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463428 * 12.92 : 1.055 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463428 ** (1 / 2.4) - 0.055;
  return Math.max(0, Math.min(255, Math.round(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D191 * 255)));
}
function li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463431) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463432 = fi(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463431, 0) ?? 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433 = fi(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463431, 1) ?? 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463434 = fi(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463431, 2) ?? 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463435 = fi(w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463431, 3) ?? 0);
  return di(ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463434).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764 => Math.max(0, Math.min(255, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46764 * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463435))))));
}
function ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463441, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463442, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463443) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A111 = [0, 0, 0];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765 of yn) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765.c ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463441 : 1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463441) * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765.m ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463442 : 1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463442) * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765.y ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463443 : 1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463443);
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A111[0] += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765.rgb[0] * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A111[1] += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765.rgb[1] * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A111[2] += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46765.rgb[2] * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33;
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A111;
}
function di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463447) {
  return '#' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463447.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46766.toString(16).padStart(2, '0')).join('');
}
function fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463449) {
  return Math.max(0, Math.min(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463449));
}
function pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463451) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463451) {
    case 1:
      return 'round';
    case 2:
      return 'square';
    default:
      return 'butt';
  }
}
function mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463453) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463453) {
    case 1:
      return "round";
    case 2:
      return 'bevel';
    default:
      return 'miter';
  }
}
function hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463455) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463455 === 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463455 === 2 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463455 === 4 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463455 === 6;
}
function gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463457) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463457 === 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463457 === 2 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463457 === 5 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463457 === 6;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463459) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463459 === 4 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463459 === 5 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463459 === 6 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463459 === 7;
}
function vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463461, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463462) {
  return {
    'fontId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463462,
    'fontSize': Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463461),
    'charSpacing': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463461.charSpacing,
    'wordSpacing': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463461.wordSpacing,
    'horizontalScale': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463461.horizontalScale,
    'leading': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463461.leading,
    'renderingMode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463461.renderingMode,
    'rise': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463461.rise
  };
}
function yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463468) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D193 = Math.hypot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463466),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D194 = Math.hypot(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463467, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463468),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D195 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D193 > 0 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D194 > 0 ? (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D193 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D194) / 2 : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D193 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D194 || 1;
  return Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D195) && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D195 > 0 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D195 : 1;
}
export { xn as parsePdfContentStreamToDisplayList };
