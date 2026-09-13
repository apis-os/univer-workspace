import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { k } from "./internal-core-endo.js";
import { Sn } from "./pdfs-pdf-type3-glyph-metrics.js";
import { xn } from "./pdfs-pdf-content-stream-to-display-list.js";
import { Fe } from "./pdfs-pdf-page.js";
import { S } from "./pdfs-pt-to-emu.js";
import { Ie } from "./pdfs-pdf-document.js";
import { ke } from "./pdfs-empty-asset-store.js";
function xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463475) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463475) return;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463475.matchAll(/beginbfchar([\s\S]*?)endbfchar/g)) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46767[1] ?? '';
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698 of var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB17.matchAll(/<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>/g)) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 = wi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698[1]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 = Di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4698[2]);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4631] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4632);
    }
  }
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463475.matchAll(/beginbfrange([\s\S]*?)endbfrange/g)) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46768[1] ?? '';
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699 of var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB18.matchAll(/<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>\s+(<([0-9A-Fa-f]+)>|\[[^\]]*\])/g)) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 = wi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699[1]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 = wi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699[2]);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633) continue;
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699[3] ?? '';
      if (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1.startsWith('<')) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4699[4];
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634) {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 = Di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616);
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468);
          continue;
        }
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 = Ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4616);
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 === undefined) continue;
        for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 += 1) {
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633;
          Ei(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D) && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469] = String.fromCodePoint(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D));
        }
        continue;
      }
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [...var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1.matchAll(/<([0-9A-Fa-f]+)>/g)].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 => Di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618[1]));
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 += 1) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633];
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610);
      }
    }
  }
  return Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB62 : undefined;
}
function Si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463477) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463477) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A113 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463477.matchAll(/begincodespacerange([\s\S]*?)endcodespacerange/g)) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB19 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46769[1] ?? '';
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100 of var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB19.matchAll(/<([0-9A-Fa-f]+)>\s+<([0-9A-Fa-f]+)>/g)) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100[1],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46100[2],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 = wi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = wi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 = Math.ceil(Math.max((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635.length) ?? 0, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.length) ?? 0) / 2);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 === undefined || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1 <= 0 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A113.push({
        'start': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637,
        'end': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638,
        'byteLength': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D1
      });
    }
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A113.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A113 : undefined;
}
function Ci(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463479) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463479) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463480 = Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463479).map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771]) => ({
    'code': Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46770),
    'unicode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46771
  })).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772 => Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.code) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46772.unicode['length'] > 0).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46773.code - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46774.code);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463480.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463480 : undefined;
}
function wi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463483) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463483) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463484 = Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463483, 16);
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463484) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463484 : undefined;
}
function Ti(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463487) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463487) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463488 = Di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463487),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463489 = Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463488);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463489.length !== 1) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463490 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463489[0].codePointAt(0);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463490 !== undefined && Ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463490) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463490 : undefined;
}
function Ei(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463495) {
  return Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463495) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463495 >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463495 <= 1114111 && !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463495 >= 55296 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463495 <= 57343);
}
function Di(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463497) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463497) return '';
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463498 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463497.length % 4 == 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463497 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463497.padStart(Math.ceil(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463497.length / 4) * 4, '0'),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB68 = '';
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463498.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 += 4) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251 = Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463498.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D76 + 4), 16);
    Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251) && (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB68 += String.fromCharCode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46251));
  }
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB68;
}
function Oi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463501) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463502;
  let {
      record: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463503,
      objectIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463501,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463503.value),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463506 = oa(D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505["/BaseFont"]) ?? D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505['/Name']) ?? ''),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463507 = Li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463508 = ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505["/DescendantFonts"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509 = Xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463510 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505['/FirstChar']),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463511 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505["/LastChar"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463512 = ra(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505["/Widths"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463513 = Ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463514 = Bi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515 = Hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463516 = Gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463517 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505["/ToUnicode"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463518 = aa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463517 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463502 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463517]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463502 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463502.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463502.data : undefined),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463519 = Ci(xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463518)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463520 = Si(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463518),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463521 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505["/Subtype"]);
  return {
    'id': "font_" + sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463503.objectRef),
    'type': 'font',
    'family': ca(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463506) || undefined,
    'postScriptName': ca(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463506) || undefined,
    'embedded': !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509.streamAssetId,
    'pdfSubtype': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463521,
    'subset': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463506.includes('+'),
    'encoding': D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505['/Encoding']),
    'writingMode': qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504),
    'fontFileStreamAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509.streamAssetId,
    'fontProgramKind': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509.kind,
    'descendantFontIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463508.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463508.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775 => "font_" + sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46775)) : undefined,
    'firstChar': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463510,
    'lastChar': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463511,
    'widths': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463512,
    'cidWidths': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463513,
    'defaultWidth': zi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504),
    'cidToGidMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463514,
    'cidVerticalMetrics': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463515,
    'defaultVerticalMetrics': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463516,
    'cmapAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463517 ? 'stream_' + sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463517) : undefined,
    'unicodeMap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463519,
    'codeSpaceRanges': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463520,
    'fontBBox': ta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505["/FontBBox"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504) ?? ta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463507["/FontBBox"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504),
    'fontMatrix': na(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505["/FontMatrix"]),
    'descriptor': Yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504),
    'diagnostics': Qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463504, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463517, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463521, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463509.kind),
    'source': {
      'pdfObjectRefs': la([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463503.objectRef, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463508])
    }
  };
}
function ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544) {
  return Ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463544);
}
function Ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463547, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463548, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463549) {
  return zi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463547, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463548, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463549);
}
function ji(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463554) {
  return Hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463554);
}
function Mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463557, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463558) {
  return Gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463557, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463558);
}
function Ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463561, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463562) {
  return qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463561, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463562);
}
function Pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463566) {
  return Li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463566);
}
function Fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463569, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463570) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463571;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463572 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463569["/ToUnicode"]);
  return xi(aa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463572 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463571 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463570.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463572]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463571 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463571.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463571.data : undefined));
}
function Ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463577, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463578) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463579;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463580 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463577["/ToUnicode"]);
  return Si(aa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463580 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463579 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463578.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463580]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463579 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463579.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463579.data : undefined));
}
function Li(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463586) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463587 = ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463585['/FontDescriptor'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463586);
  if (Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463587).length > 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463587;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776 of ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463585["/DescendantFonts"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463586)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463588;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252 = ea(E((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463588 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463586.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46776]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463588.value)["/FontDescriptor"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463586);
    if (Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252).length > 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46252;
  }
  return {};
}
function Ri(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463594) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463595 = Ji(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463593['/W'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463594);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463595) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463595;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777 of ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463593['/DescendantFonts'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463594)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463596;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253 = Ji(E((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463596 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463594.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46777]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463596.value)['/W'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463594);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46253;
  }
}
function zi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463602, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463603) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463604 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463601["/DW"]) ?? O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463602["/MissingWidth"]);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463604 !== undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463604;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778 of ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463601["/DescendantFonts"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463603)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463605;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 = O(E((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463605 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463603.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46778]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463605.value)["/DW"]);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254 !== undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46254;
  }
}
function Bi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463611, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463613 = Vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463611["/CIDToGIDMap"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463613) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463613;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779 of ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463611["/DescendantFonts"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463614;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255 = Vi(E((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463614 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46779]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463614.value)["/CIDToGIDMap"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463612);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46255;
  }
}
function Vi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463620) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463621;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463622 = D(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463619, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463620)) ?? D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463619);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463622 === "/Identity") return {
    'kind': "identity"
  };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463622 === "/None") return {
    'kind': "none"
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463623 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463619);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463623 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463621 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463620.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463623]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463621.stream) return {
    'kind': "stream",
    'streamAssetId': 'stream_' + sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463623),
    'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463623
  };
}
function Hi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463630) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463631 = Ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463629['/W2'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463630);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463631) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463631;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780 of ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463629["/DescendantFonts"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463630)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463632;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256 = Ui(E((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463632 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463630.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46780]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463632.value)['/W2'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463630);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46256;
  }
}
function Ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463638) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463639 = ua(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463638)),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A115 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463639.length;) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 = O(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463639[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463638));
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257 === undefined) {
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 += 1;
      continue;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463639[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 + 1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463638),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259 = Wi(ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463638);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259.length > 0) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A115.push({
        'firstCid': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257,
        'metrics': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46259
      }), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 += 2;
      continue;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46258),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 = O(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463639[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 + 2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463638)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 = O(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463639[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 + 3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463638)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 = O(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463639[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 + 4], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463638));
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263 !== undefined) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A115.push({
        'firstCid': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46257,
        'lastCid': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46260,
        'verticalDisplacementY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46261,
        'verticalOrigin': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46262, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46263]
      }), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 += 5;
      continue;
    }
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D77 += 1;
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A115.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A115 : undefined;
}
function Wi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463644) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A117 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 + 2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 += 3) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 = O(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463644)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 = O(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 + 1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463644)),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 = O(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463643[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D78 + 2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463644));
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266 !== undefined && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A117.push({
      'verticalDisplacementY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46264,
      'verticalOrigin': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46266]
    });
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A117;
}
function Gi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463647, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463649 = Ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463647["/DW2"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463649) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463649;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781 of ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463647["/DescendantFonts"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463650;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267 = Ki(E((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463650 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46781]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463650.value)["/DW2"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463648);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46267;
  }
}
function Ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463656) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463657 = ua(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463656)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658 = O(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463657[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463656)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659 = O(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463657[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463656));
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659 !== undefined) return {
    'verticalOriginY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463658,
    'verticalDisplacementY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463659
  };
}
function qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463665['/Encoding'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463666),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463668.endsWith('-V')) return 'vertical-rl';
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463669 = E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463667),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463670 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463669['/CMapName']);
  if (O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463669["/WMode"]) === 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463670 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463670.endsWith('-V')) return 'vertical-rl';
}
function Ji(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463678) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463679 = ua(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463678)),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A119 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463679.length;) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 = O(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463679[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463678));
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268 === undefined) {
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 += 1;
      continue;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463679[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 + 1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463678),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4 = ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101 => O(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46101, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463678))).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46102 == "number");
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4.length > 0) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A119.push({
        'firstCid': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268,
        'widths': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A4
      }), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 += 2;
      continue;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 = O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46269),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271 = O(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463679[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 + 2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463678));
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271 !== undefined) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A119.push({
        'firstCid': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46268,
        'lastCid': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46270,
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271
      }), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 += 3;
      continue;
    }
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D79 += 1;
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A119.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A119 : undefined;
}
function Yi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463684) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64 = {
    'fontName': ca(D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683["/FontName"]) ?? ''),
    'flags': O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683["/Flags"]),
    'fontBBox': ta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683["/FontBBox"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463684),
    'italicAngle': O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683["/ItalicAngle"]),
    'ascent': O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683['/Ascent']),
    'descent': O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683['/Descent']),
    'capHeight': O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683['/CapHeight']),
    'xHeight': O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683["/XHeight"]),
    'stemV': O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683["/StemV"]),
    'avgWidth': O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683['/AvgWidth']),
    'maxWidth': O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683["/MaxWidth"]),
    'missingWidth': O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463683["/MissingWidth"])
  };
  return Object.values(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46782 !== '') ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB64 : undefined;
}
function Xi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463687, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463689 = Zi(ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463687["/FontDescriptor"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463689.streamAssetId) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463689;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783 of ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463687["/DescendantFonts"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463690;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272 = Zi(ea(E((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463690 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46783]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463690.value)["/FontDescriptor"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463688);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272.streamAssetId) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46272;
  }
  return {};
}
function Zi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463696) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463697 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463695["/FontFile3"]);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463697) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463698;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463696.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463697],
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784 ? E((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463698 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46784.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463698.dict) : {};
    return {
      'streamAssetId': 'stream_' + sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463697),
      'kind': D(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB7["/Subtype"]) ?? "/FontFile3"
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463699 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463695["/FontFile2"]);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463699) return {
    'streamAssetId': 'stream_' + sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463699),
    'kind': "/TrueType"
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463695["/FontFile"]);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700 ? {
    'streamAssetId': "stream_" + sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463700),
    'kind': "/Type1"
  } : {};
}
function Qi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463709, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463711, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463712) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121 = [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463713 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463712 ?? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463709),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463711 === "/Type0",
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463711 === "/Type3",
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A16 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463713 === '/Type1C' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463713 === "/CIDFontType0C",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463714 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463707["/Encoding"]),
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 = !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463710;
  if (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121.push("font-composite-cmap-required"), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14 && !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121.push("font-missing-to-unicode-cmap"), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A16 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121.push("font-cff-glyph-program"), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121.push("font-type3-charproc-rendering"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463714 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463714 !== "/WinAnsiEncoding" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463714 !== '/MacRomanEncoding' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463714 !== "/StandardEncoding" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463714 !== '/Identity-H' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463714 !== '/Identity-V' && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121.push("font-custom-encoding"), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121.length === 0 && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14)) return {
    'hasToUnicode': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17,
    'requiresCMap': false,
    'requiresGlyphProgram': false,
    'requiresShaping': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14,
    'fontProgramKind': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463713,
    'warnings': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121
  };
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121.length !== 0) return {
    'hasToUnicode': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A17,
    'requiresCMap': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121.includes("font-composite-cmap-required") || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121.includes("font-missing-to-unicode-cmap"),
    'requiresGlyphProgram': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A16 || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A15,
    'requiresShaping': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A14,
    'fontProgramKind': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463713,
    'warnings': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A121
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463724) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463725 = D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723["/FontFile3"]);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463725) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463726;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463724.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463725];
    return D((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785 ? E((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463726 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46785.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463726.dict) : {})["/Subtype"]) ?? '/FontFile3';
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723["/FontFile2"]) return "/TrueType";
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463723["/FontFile"]) return "/Type1";
}
function ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463731, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463731 == "string") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463733;
    return E((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463733 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463732.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463731]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463733.value);
  }
  return E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463731);
}
function ta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A123 = ua(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786 => O(T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46786, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463738)));
  if (!(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A123.length < 4 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A123.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787 === undefined))) return [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A123[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A123[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A123[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A123[3]];
}
function na(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463741) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A125 = ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463741).map(O);
  if (!(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A125.length < 6 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A125.slice(0, 6).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788 === undefined))) return [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A125[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A125[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A125[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A125[3], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A125[4], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A125[5]];
}
function ra(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463744) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463745;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A127 = ua(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743 == "string" ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463745 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463744.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463745.value : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463743).map(O).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789 == 'number');
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A127.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A127 : undefined;
}
function T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463750) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463751;
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463750 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463749 != "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463749 : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463751 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463750.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463749]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463751.value) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463749;
}
function ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463755, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463756) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463757 = T(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463755, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463756);
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463757) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463757.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46790 == 'string') : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463755 == "string" ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463755] : [];
}
function aa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463761) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463761) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762 = Reflect.get(globalThis, "Buffer"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463763 = Reflect.get(globalThis, "atob");
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463762.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463761, "base64").toString("latin1");
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463763) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463763(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463761);
}
function oa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463767) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463767.startsWith('u:') || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463767.startsWith('b:') ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463767.slice(2) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463767;
}
function sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463769) {
  return String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463769).replace(/\s+/g, '_').replace(/[^A-Za-z0-9_]/g, '_');
}
function ca(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463771) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463771.startsWith('/') ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463771.slice(1) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463771;
}
function la(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463773) {
  return Array.from(new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463773));
}
function E(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463775) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463775 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463775 != "object" || Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463775) ? {} : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463775;
}
function ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463777) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463777) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463777 : [];
}
function D(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463779) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463779 == 'string' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463779 : undefined;
}
function O(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463781) {
  if (!(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463781 != 'number' || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463781))) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463781;
}
const ma = 4096,
  ha = 8192;
function ga(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463803) {
  let {
    shadingType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463804,
    bitsPerFlag: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463805,
    bitsPerCoordinate: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463806,
    bitsPerComponent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807,
    verticesPerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463808,
    bytes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463809,
    decode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463810 = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463803;
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463804 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463806 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807 || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463809 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463809.length))) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463804 === 4 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463804 === 5) return fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig193F({
      'shadingType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463804,
      'bitsPerFlag': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463805,
      'bitsPerCoordinate': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463806,
      'bitsPerComponent': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807,
      'verticesPerRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463808,
      'bytes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463809,
      'decode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463810
    });
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463804 === 6 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463804 === 7) return va({
      'shadingType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463804,
      'bitsPerFlag': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463805,
      'bitsPerCoordinate': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463806,
      'bitsPerComponent': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463807,
      'bytes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463809,
      'decode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463810
    });
  }
}
function fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463819) {
  let {
      shadingType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463820,
      bitsPerCoordinate: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463821,
      bitsPerComponent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822,
      verticesPerRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463823,
      bytes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463824,
      decode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463825
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463819,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D199 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463820 === 4 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463819.bitsPerFlag ?? 2 : 0,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB70 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D199 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463821 * 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822 * 3;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463824.length * 8 < var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB70) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463826 = new za(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463824),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A129 = [],
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A22 = true,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D200 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D201 = 1 / 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D202 = 1 / 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D203 = -1 / 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D204 = -1 / 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D205 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D206 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D207 = 0;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463826.remainingBits() >= var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB70;) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D199 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463826.read(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D199) : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463826.read(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463821),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463826.read(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463821),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463826.read(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463826.read(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463826.read(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822)];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275 === undefined || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46103 === undefined)) break;
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A129.length < ma) {
      let {
        color: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104,
        rgb: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105
      } = Ra(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A5, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463825);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A129.push({
        'x': La(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46274, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463821, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463825[0] ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463825[1] ?? 1),
        'y': La(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46275, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463821, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463825[2] ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463825[3] ?? 1),
        'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46104,
        'flag': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273
      });
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A129[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A129.length - 1];
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D201 = Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D201, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.x), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D202 = Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D202, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.y), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D203 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D203, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.x), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D204 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D204, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46106.y), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D205 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105[0], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D206 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105[1], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D207 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46105[2];
    } else var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A22 = false;
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D200 += 1;
  }
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D200 === 0) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463827 = var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A22 ? Wa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463820, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A129, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463823) : undefined;
  return {
    'shadingType': Ja(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463820),
    'bitsPerFlag': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D199 || undefined,
    'bitsPerCoordinate': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463821,
    'bitsPerComponent': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463822,
    'verticesPerRow': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463823,
    'vertexCount': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D200,
    'bbox': [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D201, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D202, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D203, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D204],
    'averageColor': Ya(Math.round(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D205 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D200), Math.round(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D206 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D200), Math.round(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D207 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D200)),
    'degenerate': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D201 === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D203 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D202 === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D204,
    'vertices': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A22 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A129 : undefined,
    'triangles': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463827 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463827.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463827 : undefined
  };
}
function va(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463837) {
  let {
      shadingType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463838,
      bitsPerCoordinate: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463839,
      bitsPerComponent: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463840,
      bytes: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463841,
      decode: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463842
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463837,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463837.bitsPerFlag ?? 2;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463841.length * 8 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463843 = new za(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463841),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A132 = [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463844;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463843.remainingBits() >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131.length < ma;) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463843.read(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 === undefined) break;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277 = ya(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463843, {
      'shadingType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463838,
      'flag': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46276 & 3,
      'previousPatch': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463844,
      'bitsPerCoordinate': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463839,
      'bitsPerComponent': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463840,
      'decode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463842
    });
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277) break;
    Aa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463838, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.points, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277.colors, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A132), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463844 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46277, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463843.alignToByte();
  }
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131.length === 0) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463845 = Ba(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131);
  return {
    'shadingType': Ja(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463838),
    'bitsPerFlag': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D217,
    'bitsPerCoordinate': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463839,
    'bitsPerComponent': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463840,
    'vertexCount': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131.length,
    'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463845.bbox,
    'averageColor': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463845.averageColor,
    'degenerate': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463845.degenerate,
    'vertices': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A131,
    'triangles': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A132.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A132 : undefined
  };
}
function ya(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463855, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463856) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463856.shadingType === 6) return ba(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463855, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463856);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463856.shadingType === 7) return xa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463855, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463856);
}
function ba(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463859, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.flag === 0) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 = Sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463859, 12, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.bitsPerCoordinate, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.decode),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796 = ka(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463859, 4, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.bitsPerComponent, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.decode);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796 ? {
      'points': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46795,
      'colors': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46796
    } : undefined;
  }
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.previousPatch || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.flag < 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.flag > 3) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463861 = Sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463859, 8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.bitsPerCoordinate, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.decode),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463862 = ka(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463859, 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.bitsPerComponent, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.decode);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463861 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463862) return;
  let {
      points: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463863,
      colors: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463864
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.previousPatch,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A135 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.flag === 1 ? [3, 4, 5, 6] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.flag === 2 ? [6, 7, 8, 9] : [9, 10, 11, 0],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A136 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.flag === 1 ? [1, 2] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463860.flag === 2 ? [2, 3] : [3, 0];
  return {
    'points': [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A135.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463863[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46797]), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463861],
    'colors': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463864[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A136[0]], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463864[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A136[1]], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463862[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463862[1]]
  };
}
function xa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.flag === 0) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798 = Ca(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463871, ['p00', 'p01', "p02", "p03", "p13", "p23", 'p33', "p32", "p31", "p30", "p20", "p10", "p11", "p12", "p22", "p21"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.bitsPerCoordinate, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.decode),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799 = ka(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463871, 4, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.bitsPerComponent, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.decode);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799 ? undefined : {
      'points': wa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46798),
      'colors': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46799[1]]
    };
  }
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.previousPatch || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.flag < 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.flag > 3) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463873 = Ca(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463871, ["p13", "p23", "p33", "p32", "p31", "p30", "p20", "p10", "p11", "p12", "p22", "p21"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.bitsPerCoordinate, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.decode),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463874 = ka(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463871, 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.bitsPerComponent, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.decode);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463873 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463874) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463875 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.previousPatch;
  Ta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463875.points, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.flag);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876 = Ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463875.colors, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463874, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463872.flag);
  return {
    'points': wa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463873),
    'colors': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463876
  };
}
function Sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463884, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A139 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D80 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D80 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463884; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D80 += 1) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463883.read(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463885),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463883.read(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463885);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279 === undefined) return;
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A139.push({
      'x': La(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46278, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886[0] ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886[1] ?? 1),
      'y': La(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46279, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886[2] ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463886[3] ?? 1)
    });
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A139;
}
function Ca(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463892, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463894) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463895 = Sa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463891, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463892.length, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463894);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463895) return;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66 = {};
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463892.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46801) => {
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46800] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463895[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46801];
  }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB66;
}
function wa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463901) {
  return ["p00", 'p10', "p20", 'p30', 'p01', "p11", "p21", "p31", 'p02', "p12", "p22", "p32", 'p03', "p13", "p23", "p33"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463901[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46804]);
}
function Ta(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463903, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463904, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A141 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905 === 1 ? [["p00", "p03"], ["p01", 'p13'], ["p02", "p23"], ['p03', 'p33']] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463905 === 2 ? [["p00", 'p33'], ["p01", "p32"], ["p02", "p31"], ["p03", "p30"]] : [['p00', "p30"], ["p01", "p20"], ["p02", "p10"], ["p03", "p00"]];
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806] of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A141) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463903[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46805] = Da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463904, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46806);
}
function Ea(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463909, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463911) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463910;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463911 === 1 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463909[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463909[2]] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463911 === 2 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463909[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463909[1]] : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463909[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463913, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463909[0]];
}
function Da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463919, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463920) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463919[Oa[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463920] ?? 0];
}
const Oa = {
  'p00': 0,
  'p10': 1,
  'p20': 2,
  'p30': 3,
  'p01': 4,
  'p11': 5,
  'p21': 6,
  'p31': 7,
  'p02': 8,
  'p12': 9,
  'p22': 10,
  'p32': 11,
  'p03': 12,
  'p13': 13,
  'p23': 14,
  'p33': 15
};
function ka(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463923, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463924, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463926) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A143 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D81 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D81 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463924; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D81 += 1) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463923.read(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463923.read(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463923.read(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925)];
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46107 === undefined)) return;
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A143.push(Ra(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463926).rgb);
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A143;
}
function Aa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463932, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463933, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463934, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463935) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463936 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463934.length;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 <= 16 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463934.length < ma; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 += 1) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D82 / 16;
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 <= 16 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463934.length < ma; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 += 1) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D13 / 16,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463931 === 6 ? ja(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463932, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34) : Ma(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463932, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463934.push({
        'x': Ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.x),
        'y': Ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.y),
        'color': Ha(Ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463933, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34))
      });
    }
  }
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83 < 16 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463935.length < ha; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83 += 1) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 < 16 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463935.length < ha; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 += 1) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463936 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83 * 17 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 + 1,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463936 + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D83 + 1) * 17 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4 + 1;
    Ka(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463935, [var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5]), Ka(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463935, [var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB4]);
  }
}
function ja(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946 = Na(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463944),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463947 = Na(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[4], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[5], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[6], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463948 = Na(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[9], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[8], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[7], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[6], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463944),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463949 = Na(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[11], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[10], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[9], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463950 = Fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[6], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463943[9], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945);
  return {
    'x': (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463948.x + (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463944) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463949.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463944 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463947.x - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463950.x,
    'y': (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463946.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463945 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463948.y + (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463944) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463949.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463944 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463947.y - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463950.y
  };
}
function Ma(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463959, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463960, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463961) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463962 = Pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463960),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463963 = Pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463961),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D219 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D220 = 0;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D84 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D84 < 4; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D84 += 1) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 < 4; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 += 1) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463959[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D84 * 4 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36],
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463962[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463963[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D84];
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D219 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.x * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D220 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46108.y * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D14;
  }
  return {
    'x': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D219,
    'y': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D220
  };
}
function Na(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463970, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463971, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463973) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463974 = Pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463973);
  return {
    'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463969.x * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463974[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463970.x * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463974[1] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463971.x * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463974[2] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463972.x * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463974[3],
    'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463969.y * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463974[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463970.y * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463974[1] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463971.y * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463974[2] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463972.y * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463974[3]
  };
}
function Pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463981) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223 = 1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463981;
  return [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223, 3 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463981 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223, 3 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463981 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463981 * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463981 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463981 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463981];
}
function Fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463983, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463987, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988) {
  return {
    'x': (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463987) * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463983.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463987 * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984.x + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463987 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463985.x + (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463987) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986.x,
    'y': (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463987) * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463983.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463987 * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463984.y + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463987 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463985.y + (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463987) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463988 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463986.y
  };
}
function Ia(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463995, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463997) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A145 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463995[0] ?? [0, 0, 0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463998 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463995[1] ?? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A145,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463999 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463995[2] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463998,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464000 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463995[3] ?? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A145;
  return [(1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996) * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463997) * var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A145[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996 * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463997) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463998[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463997 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463999[0] + (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463997 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464000[0], (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996) * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463997) * var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A145[1] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996 * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463997) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463998[1] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463997 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463999[1] + (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463997 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464000[1], (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996) * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463997) * var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A145[2] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996 * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463997) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463998[2] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463997 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463999[2] + (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463996) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463997 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464000[2]];
}
function La(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464007, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464008, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464009, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464010) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D225 = 2 ** var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464008 - 1;
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D225 <= 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464009 : Ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464009 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464010 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464009) * Math.max(0, Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464007)) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D225);
}
function Ra(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464015, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464016, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464017) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464018 = La(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464015[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464016, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464017[4] ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464017[5] ?? 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464019 = La(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464015[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464016, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464017[6] ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464017[7] ?? 1),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464020 = La(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464015[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464016, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464017[8] ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464017[9] ?? 1),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A147 = [Xa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464018 * 255), Xa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464019 * 255), Xa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464020 * 255)];
  return {
    'color': Ha(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A147),
    'rgb': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A147
  };
}
var za = class {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807) {
    k(this, "_bytes", undefined), k(this, "_bitOffset", 0), this._bytes = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46807;
  }
  remainingBits() {
    return this._bytes["length"] * 8 - this._bitOffset;
  }
  read(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809 <= 0 || this.remainingBits() < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809) return;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D85 = 0;
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 += 1) {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15 = (this._bytes[Math.floor(this._bitOffset / 8)] ?? 0) >> 7 - this._bitOffset % 8 & 1;
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D85 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D85 * 2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D15, this._bitOffset += 1;
    }
    return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D85;
  }
  alignToByte() {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D87 = this._bitOffset % 8;
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D87 > 0 && (this._bitOffset += 8 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D87);
  }
};
function Ba(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464027) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D227 = 1 / 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D228 = 1 / 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D229 = -1 / 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D230 = -1 / 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D231 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D232 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D233 = 0;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464027) {
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D227 = Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811.x), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D228 = Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811.y), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D229 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D229, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811.x), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D230 = Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D230, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811.y);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280 = Va(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46811.color);
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D231 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280[0], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D232 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280[1], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D233 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46280[2];
  }
  return {
    'bbox': [Ua(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D227), Ua(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D228), Ua(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D229), Ua(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D230)],
    'averageColor': Ha([var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D231 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464027.length, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D232 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464027.length, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D233 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464027.length]),
    'degenerate': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D227 === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D229 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D228 === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D230
  };
}
function Va(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464029) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464029 != "string" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464029.startsWith('#') || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464029.length < 7 ? [0, 0, 0] : [Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464029.slice(1, 3), 16) || 0, Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464029.slice(3, 5), 16) || 0, Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464029.slice(5, 7), 16) || 0];
}
function Ha(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464031) {
  return Ya(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464031[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464031[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464031[2]);
}
function Ua(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464033) {
  return Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464033 * 1000) / 1000;
}
function Wa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464035, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464036, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464037) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464035 === 5) return Ga(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464036, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464037);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464035 !== 4) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A149 = [];
  Ka(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A149, [0, 1, 2]);
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D241 = 3;
  for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D241 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464036.length && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A149.length < ha;) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464038, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464039;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464038 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464036[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D241]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464038.flag,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464039 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A149[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A149.length - 1]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464039.vertices;
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 === 0) {
      if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D241 + 2 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464036.length) {
        Ka(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A149, [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D241, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D241 + 1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D241 + 2]), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D241 += 3;
        continue;
      }
      break;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 === 1 ? Ka(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A149, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282[2], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D241]) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46281 === 2 && Ka(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A149, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46282[2], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D241]), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D241 += 1;
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A149.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A149 : undefined;
}
function Ga(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464045, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464046) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464046 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464046 < 2) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D243 = Math.floor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464045.length / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464046),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A151 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D243 - 1 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A151.length < ha; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 += 1) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464046 - 1 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A151.length < ha; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 += 1) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464046 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 + 1,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D89 + 1) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464046 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 + 1;
    Ka(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A151, [var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB7, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9]), Ka(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A151, [var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8]);
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A151.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A151 : undefined;
}
function Ka(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464049, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464050) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464049.length < ha && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464049.push({
    'vertices': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464050
  });
}
function qa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464053, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464054) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A153 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A154 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464054 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464053.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464054) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A153.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464053[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 + 1] ?? 0), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A154.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464053[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D90 + 2] ?? 0);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A153.length < 3 ? false : Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A153) === Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A153) || Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A154) === Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A154);
}
function Ja(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464057) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464057 == "number" ? String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464057) : undefined;
}
function Ya(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464059, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464060, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464061) {
  return '#' + [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464059, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464060, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464061].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812 => Xa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46812).toString(16).padStart(2, '0')).join('');
}
function Xa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464065) {
  return Math.max(0, Math.min(255, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464065)));
}
function Za(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464067) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464068;
  let {
    fontValue: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464069,
    objectIndex: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464070
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464067;
  if (so(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464069['/Subtype']) !== '/Type3') return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464071 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F3(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464069["/CharProcs"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464070);
  if (Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464071).length === 0) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464072 = Qa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464069, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464070),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464073 = to(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464069["/Widths"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464070),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D245 = co(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464069["/FirstChar"]) ?? 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464074 = no(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464069["/FontBBox"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464070),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A157 = ro(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464069['/FontMatrix']) ?? [0.001, 0, 0, 0.001, 0, 0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464075 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464068 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464067.createResources) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464068.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464067, {
      '/Resources': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464069["/Resources"]
    }),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB68 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464072)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464076, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464077;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46813),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 = so(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464071[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464070.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46283] : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285 = io(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464076 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464076.data);
    if (!Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286 = ao((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464077 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46284.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464077.dict),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287 = Sn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285);
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB68[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39] = {
      'charName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46814,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287.width ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464073 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464073[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D245]),
      'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46287.bbox ?? no(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46286["/BBox"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464070) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464074,
      'matrix': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A157,
      'resources': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464075,
      'content': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46285
    };
  }
  return Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB68).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB68 : undefined;
}
function Qa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464089, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464090) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464091 = oo(ao(eo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464089["/Encoding"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464090))["/Differences"]),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB70 = {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464092;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464091) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 = co(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815);
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288 == "number") {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464092 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46288;
      continue;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 = so(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46815);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464092 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB70[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464092] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464092 += 1);
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB70;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F3(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464097, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464098) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464097 == "string") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464099;
    return ao((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464099 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464098.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464097]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464099.value);
  }
  return ao(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464097);
}
function eo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464104) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464105;
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464104 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464103 != 'string' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464103 : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464105 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464104.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464103]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464105.value) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464103;
}
function to(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464109, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464110) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464111;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A159 = oo(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464109 == "string" ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464111 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464110.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464109]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464111.value : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464109).map(co).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46816 == 'number');
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A159.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A159 : undefined;
}
function no(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464116) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A161 = oo(eo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464115, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464116)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817 => co(eo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46817, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464116)));
  if (!(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A161.length < 4 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A161.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46818 === undefined))) return [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A161[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A161[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A161[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A161[3]];
}
function ro(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464119) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A163 = oo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464119).map(co);
  if (!(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A163.length < 6 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A163.slice(0, 6).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46819 === undefined))) return [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A163[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A163[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A163[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A163[3], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A163[4], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A163[5]];
}
function io(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464121) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464121) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464122 = Reflect.get(globalThis, 'Buffer'),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464123 = Reflect.get(globalThis, "atob");
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464122) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464122.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464121, 'base64').toString('latin1');
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464123) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464123(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464121);
}
function ao(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464127) {
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464127 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464127 != 'object' || Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464127) ? {} : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464127;
}
function oo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464129 : [];
}
function so(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464131) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464131 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464131 : undefined;
}
function co(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464133) {
  if (!(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464133 != "number" || Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464133))) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464133;
}
const lo = [0, 0, 612, 792];
function uo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464136 = {}) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464136.sourceId ?? "source_qpdf_1",
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137 = fo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464135.qpdf ?? []),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464138 = po(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464135, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464136),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464139 = mo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464135.attachments),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464140 = ss(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464141 = Gs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464135.acroform, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464142 = Ks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464135.acroform, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72 = {},
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73 = {},
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A165 = [],
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74 = {},
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75 = {},
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76 = {};
  Object.assign(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73, yo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74));
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A166 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464135.pages ?? []).map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821) => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 = 'page_' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821 + 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820.object,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822] : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824 = ls(L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46823.value), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825 = cs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826 = fs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827 = ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828 = ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829 = fn_L0_core_endo_routine_pure_ON_heap_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830 = vs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831 = ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46832 = bs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833 = xs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137);
    Ms(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137), Fs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464139, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834 = sl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824["/Annots"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 + "_display",
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB36 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 + "_raw_pdf",
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835 = Us(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28 = [],
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826.flatMap((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293 = ul((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46292.data);
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293) return [];
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294 = xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46293, {
          'sourceId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72,
          'pageId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34,
          'pageIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821,
          'pageRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822,
          'contentStreamRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46290,
          'contentStreamIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46291,
          'mediaBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825.mediaBox,
          'fontResourceIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46827,
          'fontMetrics': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46828,
          'xObjectResources': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46829,
          'extGStateResources': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46830,
          'colorSpaceResources': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46831,
          'patternResources': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46832,
          'shadingResources': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46833
        });
        return vo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.imageAssets), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.report), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46294.ops;
      }),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836 = yc(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A28);
    xc(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.unsupportedFeatureCounts);
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46834.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301) => {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34 + "_annot_" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301 + 1),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 = Zs(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825.mediaBox, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464142);
      return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.annotationType === 'widget' && nc(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46300, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20), var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB20;
    });
    return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB36] = Ws(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB36, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825.mediaBox), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35] = {
      'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB35,
      'sourceId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72,
      'pageId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34,
      'ops': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29,
      'source': {
        'sourceId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72,
        'pageId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34,
        'pageIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821,
        'pageRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822,
        'pageObjectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822,
        'contentStreamRefs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826,
        'pdfBounds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825.mediaBox
      }
    }, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A165.push({
      'pageIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821,
      'pageId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34,
      'status': "partial",
      'warnings': bc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46822, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46826),
      'stats': {
        'nativeObjectCount': Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137.objects).length,
        'displayOperationCount': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A29.length,
        'semanticObjectCount': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30.length,
        'candidateObjectCount': 0,
        'contentOperatorCount': Sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.operatorCounts),
        'unsupportedOperatorCount': Sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.unsupportedOperatorCounts),
        'contentOperatorCounts': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.operatorCounts,
        'unsupportedOperatorCounts': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.unsupportedOperatorCounts,
        'unsupportedFeatureCounts': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46836.unsupportedFeatureCounts
      }
    }), Fe({
      'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34,
      'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46821,
      'label': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46820.label ?? undefined,
      'size': {
        'width': S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825.mediaBox[2] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825.mediaBox[0]),
        'height': S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825.mediaBox[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825.mediaBox[1])
      },
      'pdfBoxes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46825,
      'rotation': ds(B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46824["/Rotate"])),
      'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46835,
      'layers': hc(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB34, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB36, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A30)
    });
  });
  return Object.assign(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73, fn_L0_core_endo_routine_pure_ON_heap_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464139, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76)), Qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464135.acroform, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A166, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB75, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464141, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464142), Ie({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464136.documentId ?? "qpdf_json_document",
    'title': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464136.documentTitle ?? Cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464136.sourceFileName),
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464138,
    'pages': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A166,
    'objects': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72,
    'displayLists': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73,
    'assets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464139,
    'native': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464140,
    'outlines': gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464135.outlines ?? [], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137),
    'conversion': {
      'import': {
        'sourceKind': "pdf",
        'toolchain': ["qpdf-json", "univer-pdf-model"],
        'nativeObjectCount': Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137.objects).length,
        'displayOperationCount': Object.values(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB73).reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46854 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46855.ops["length"], 0),
        'semanticObjectCount': Object.values(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB72).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46856.type !== "rawPdfGroup").length,
        'unsupportedFeatures': ['full-font-encoding', "semantic-text-story-promotion", ...go(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464139), ...Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74)].sort()
      },
      'importReports': [{
        'sourceId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB72,
        'pages': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A165
      }]
    },
    'metadata': {
      'qpdfJsonVersion': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464135.version ?? null,
      'qpdfPdfVersion': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464137.metadata["pdfversion"]) ?? null,
      'schemaVersion': 1
    }
  });
}
function fo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464151) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464152, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464153] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464151,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82 = {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464154;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464153) for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46857)) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306 === "trailer") {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464154 = L(L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307).value);
      continue;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109 = Dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46306);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307);
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109] = {
      'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46109,
      'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.value,
      'stream': ll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46110.stream)
    };
  }
  return {
    'metadata': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464152 ?? {},
    'objects': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB82,
    'trailer': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464154
  };
}
function po(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464160, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464161) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464162;
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464160,
    'kind': "pdf",
    'qpdfJsonAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464161.qpdfJsonAssetId,
    'qdfAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464161.qdfAssetId,
    'pageCount': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464162 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464159.pages) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464162.length) ?? 0,
    'fileName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464161.sourceFileName,
    'importer': "qpdf-json-to-pdf-model",
    'importedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464161.importedAt
  };
}
function mo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464167, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464168) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464169 = ke();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464167.objects)) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.stream) {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 = "stream_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.objectRef);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464169.streams[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10] = {
        'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10,
        'type': 'stream',
        'storage': "native-ref",
        'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.objectRef,
        'filters': cl(L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.stream["dict"])["/Filter"])
      };
    }
    if (L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858.value)["/Type"] === "/Font") {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111 = os(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464167);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464169.fonts[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111.id] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46111;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308["/Subtype"]);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 === "/Image") {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112 = bo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464167);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464169.images[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112.id] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46112;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 === "/Form") {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113 = xo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464167);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464169.formXObjects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113.id] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46113;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308["/PatternType"] !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308['/Type'] === '/Pattern') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114 = Co(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464167);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464169.patterns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114.id] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46114;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 = wo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464167);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464169.shadings[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115.id] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46115);
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308["/ShadingType"] !== undefined) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116 = Eo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464167);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464169.shadings[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116.id] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46116;
    }
  }
  return Object.assign(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464169.attachments, ho(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464168)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464169;
}
function ho(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464173) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB84 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464173 ?? {})) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46860),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311 = kc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.preferredcontents),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312 = N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.preferredname) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 = L(Object.values(L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.streams))[0]),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB22 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311 ? "attachment_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311) : 'attachment_' + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312);
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB84[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB22] = {
      'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB22,
      'type': "attachment",
      'fileName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312,
      'description': N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.description) ?? '') || undefined,
      'mimeType': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.mimetype) ?? undefined,
      'checksum': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.checksum) ?? undefined,
      'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311 ? {
        'pdfObjectRefs': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311]
      } : undefined,
      'metadata': fl({
        'qpdfAttachmentName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46859,
        'preferredContents': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311,
        'names': pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.names),
        'filespec': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.filespec),
        'creationDate': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.creationdate),
        'modificationDate': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.modificationdate)
      })
    };
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB84;
}
function go(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464175) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929918 = new Set();
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464175.fonts ?? {})) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464176;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117 of ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464176 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46861.diagnostics) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464176.warnings) ?? []) var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929918.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46117);
  }
  return [...var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929918].sort();
}
function fn_L0_core_endo_routine_pure_ON_heap_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464181, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464183 = {}) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB86 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464179.formXObjects ?? {})) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464184;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464180.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.objectRef],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315 = ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464184 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464184.data);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46314),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 = Ns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464183[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.objectRef], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316["/Resources"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464180),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.displayListId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.id + '_display';
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.displayListId = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318 = xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46315, {
      'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464181,
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.id + "_page",
      'pageIndex': -1,
      'pageRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.objectRef,
      'contentStreamRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.objectRef,
      'contentStreamIndex': 0,
      'mediaBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.bbox,
      'fontResourceIds': ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464180),
      'fontMetrics': ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464180),
      'xObjectResources': fn_L0_core_endo_routine_pure_ON_heap_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464180),
      'extGStateResources': vs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464180),
      'colorSpaceResources': ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464180),
      'patternResources': bs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464180),
      'shadingResources': xs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464180)
    });
    vo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318.imageAssets), xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464182, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318.report['unsupportedFeatureCounts']), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB86[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23] = {
      'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB23,
      'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464181,
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.id + "_page",
      'ops': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46318.ops,
      'source': {
        'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464181,
        'pageRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.objectRef,
        'pageObjectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.objectRef,
        'contentStreamRefs': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.objectRef],
        'xobjectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.objectRef,
        'pdfBounds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46862.bbox
      }
    };
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB86;
}
function vo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464191, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464192) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464192 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464191.images ??= {}, Object.assign(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464191.images, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464192));
}
function yo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464196, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464197, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464198) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB88 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464195.patterns ?? {})) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464199;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.patternType !== '1' || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.objectRef || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.bbox) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464196.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.objectRef],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 = ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464199 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464199.data);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320) continue;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
        '/Resources': j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319)["/Resources"]
      },
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.displayListId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.id + '_display';
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.displayListId = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321 = xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320, {
      'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464197,
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.id + "_page",
      'pageIndex': -1,
      'pageRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.objectRef,
      'contentStreamRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.objectRef,
      'contentStreamIndex': 0,
      'mediaBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.bbox,
      'fontResourceIds': ps(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464196),
      'fontMetrics': ms(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464196),
      'xObjectResources': fn_L0_core_endo_routine_pure_ON_heap_nothrow_sigD23F1(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464196),
      'extGStateResources': vs(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464196),
      'colorSpaceResources': ys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464196),
      'patternResources': bs(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464196),
      'shadingResources': xs(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464196)
    });
    vo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464195, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.imageAssets), xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464198, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.report["unsupportedFeatureCounts"]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB88[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24] = {
      'id': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB24,
      'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464197,
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.id + "_page",
      'ops': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46321.ops,
      'source': {
        'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464197,
        'pageRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.objectRef,
        'pageObjectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.objectRef,
        'contentStreamRefs': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.objectRef],
        'pdfObjectRefs': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.objectRef],
        'pdfBounds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46863.bbox
      }
    };
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB88;
}
function bo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464205, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464206) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464205),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB74 = "stream_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464205.objectRef),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464208 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207['/Mask'],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464209 = kc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207['/SMask']),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464210 = kc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464208);
  return {
    'id': 'image_' + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464205.objectRef),
    'type': "image",
    'width': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207['/Width']) ?? 0,
    'height': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207['/Height']) ?? 0,
    'sourceKind': "xObject",
    'xObjectSubtype': "image",
    'rawStreamAssetId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB74,
    'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464205.objectRef,
    'colorSpace': jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/ColorSpace"]),
    'decode': F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/Decode"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464206),
    'decodeParms': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/DecodeParms"] !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207['/DP'] !== undefined ? pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/DecodeParms"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/DP"]) : undefined,
    'filters': cl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/Filter"]),
    'bitsPerComponent': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/BitsPerComponent"]) ?? B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/BPC"]),
    'interpolate': ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/Interpolate"]),
    'maskKind': Pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464208, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464209),
    'colorKeyMask': I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464208),
    'maskAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464210 ? "image_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464210) : undefined,
    'softMaskAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464209 ? 'image_' + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464209) : undefined,
    'matte': I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/Matte"]),
    'sMaskInData': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/SMaskInData"]),
    'mimeType': Fc(cl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/Filter"])),
    'source': {
      'pdfObjectRefs': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464205.objectRef],
      'xobjectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464205.objectRef
    },
    'metadata': fl({
      'pdfSubtype': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/Subtype"]),
      'pdfType': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/Type"]),
      'pdfName': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464207["/Name"])
    })
  };
}
function xo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464218) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464219 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464217),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB76 = "stream_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464217.objectRef),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464220 = fl(So(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464219['/Group'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464218));
  return {
    'id': 'form_xobject_' + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464217.objectRef),
    'type': "formXObject",
    'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464217.objectRef,
    'rawStreamAssetId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB76,
    'bbox': P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464219["/BBox"]) ?? [0, 0, 0, 0],
    'matrix': Lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464219["/Matrix"]),
    'resources': Rs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464219["/Resources"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464218),
    ...(Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464220).length > 0 ? {
      'group': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464220
    } : {}),
    'xObjectSubtype': "form",
    'source': {
      'pdfObjectRefs': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464217.objectRef],
      'xobjectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464217.objectRef
    },
    'metadata': fl({
      'pdfSubtype': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464219["/Subtype"]),
      'pdfType': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464219["/Type"]),
      'structParent': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464219["/StructParent"])
    })
  };
}
function So(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464226) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464227 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464225);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464227) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464228;
    return L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464228 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464226.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464227]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464228.value);
  }
  return L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464225);
}
function Co(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464234) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464235 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB78 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233.stream ? "stream_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233.objectRef) : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464236 = To(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464235["/Shading"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233.objectRef),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464237 = Do(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464234);
  return {
    'id': "pattern_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233.objectRef),
    'type': "pattern",
    'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233.objectRef,
    'rawStreamAssetId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB78,
    'patternType': fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F5(B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464235["/PatternType"])),
    'paintType': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464235["/PaintType"]),
    'tilingType': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464235["/TilingType"]),
    'bbox': P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464235["/BBox"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464234),
    'matrix': Lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464235["/Matrix"]),
    'xStep': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464235["/XStep"]),
    'yStep': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464235["/YStep"]),
    'shadingAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464236,
    'fallbackPaint': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464237,
    'source': {
      'pdfObjectRefs': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464233.objectRef]
    },
    'metadata': fl({
      'pdfType': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464235["/Type"]),
      'patternType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464235['/PatternType']
    })
  };
}
function wo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464243, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464244) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464245 = L(j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464243)["/Shading"]);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464245['/ShadingType'] !== undefined) return Eo({
    'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464243.objectRef + '/Shading',
    'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464245
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464244);
}
function To(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464251 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464251 ? "shading_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464251) : L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464249)["/ShadingType"] === undefined ? undefined : "shading_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464250 + "/Shading");
}
function Eo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464256) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464257 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464255);
  return {
    'id': 'shading_' + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464255.objectRef),
    'type': "shading",
    'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464255.objectRef,
    'shadingType': fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F5(B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464257["/ShadingType"])),
    'colorSpace': jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464257["/ColorSpace"]),
    'bbox': P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464257["/BBox"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464256),
    'decode': F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464257["/Decode"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464256),
    'gradient': Ao(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464256),
    'fallbackPaint': ko(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464255),
    'fallbackMesh': Vo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464255, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464256),
    'source': {
      'pdfObjectRefs': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464255.objectRef]
    },
    'metadata': fl({
      'shadingType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464257["/ShadingType"],
      'colorSpace': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464257["/ColorSpace"]
    })
  };
}
function Do(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464261, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464262) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464263;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464264 = Oo(ul((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464263 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464261.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464263.data));
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464264) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464264;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464265 = z(j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464261)["/Shading"]);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464265) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464266 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464262.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464265];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464266 ? ko(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464266) : undefined;
}
function Oo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464273) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464273) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A169 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464273.matchAll(/(-?\d*\.?\d+)\s+(-?\d*\.?\d+)\s+(-?\d*\.?\d+)\s+(?:rg|RG|sc|SC)\b/g)],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464274 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A169[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A169.length - 1];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464274) return {
    'color': qc(Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464274[1]), Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464274[2]), Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464274[3]))
  };
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A170 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464273.matchAll(/(-?\d*\.?\d+)\s+(?:g|G|sc|SC)\b/g)],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464275 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A170[var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A170.length - 1];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464275) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864 = Xc(Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464275[1]) * 255);
    return {
      'color': Yc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46864)
    };
  }
}
function ko(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464279) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464280;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464281 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464279);
  if (jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464281["/ColorSpace"]) !== '/DeviceRGB') return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464282 = dl((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464280 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464279.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464280.data);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464282) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D247 = +(B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464281["/BitsPerFlag"]) === 8) + 2 * (B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464281['/BitsPerCoordinate']) === 8) + 3 * (B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464281["/BitsPerComponent"]) === 8);
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D247 < 6 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464282.length < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D247) return;
  if (qa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464282, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D247)) return {
    'color': "#ffffff"
  };
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D248 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D249 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D250 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D251 = 0;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D91 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D91 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D247 <= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464282.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D91 += var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D247) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D91 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D247 - 3;
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D248 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464282[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40] ?? 0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D249 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464282[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 + 1] ?? 0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D250 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464282[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 + 2] ?? 0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D251 += 1;
  }
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D251 !== 0) return {
    'color': Yc(Math.round(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D248 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D251), Math.round(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D249 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D251), Math.round(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D250 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D251))
  };
}
function Ao(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464287, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464288) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464289 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464287),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464290 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464289["/ShadingType"]);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464290 !== 2 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464290 !== 3) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464291 = Mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464289["/ColorSpace"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464288);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464291 !== "/DeviceRGB" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464291 !== '/DeviceGray' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464291 !== '/DeviceCMYK') return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464292 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464289['/Coords'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464288),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D257 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464290 === 2 ? 4 : 6;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464292 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464292.length < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D257) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464293 = jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464289["/Function"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464291, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464288);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464293) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464294 = Rc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464289["/Extend"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464295 = Os(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464289["/Domain"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464288);
  return {
    'type': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464290 === 2 ? "linear" : "radial",
    'coords': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464292.slice(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D257),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464295 && !ks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464295, [0, 1]) ? {
      'domain': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464295
    } : {}),
    'extend': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464294,
    'stops': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464293
  };
}
function jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464306, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464307) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464308 = Lo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464307);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464308.length !== 0) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464308.length === 1) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322 = Po(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464305, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464306, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464307);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46322;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 = No(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464308[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464306, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464307);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464308.length > 1) {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464308.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118 => zo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46118, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464307));
      if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.c0["length"] !== 1 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46119.c1["length"] !== 1)) return;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46120.c0[0] ?? 0),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A7.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46121.c1[0] ?? 1);
      return [{
        'offset': 0,
        'color': Bo(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A8, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464306)
      }, {
        'offset': 1,
        'color': Bo(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A9, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464306)
      }];
    }
    if (zo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464308[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464307)) return Mo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464308[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464306, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464307);
  }
}
function Mo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464314, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464315) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464316 = zo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464313, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464315);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464316) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D259 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464313['/N']) ?? 1;
  if (Math.abs(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D259 - 1) < 0.000001) return [{
    'offset': 0,
    'color': Bo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464316.c0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464314)
  }, {
    'offset': 1,
    'color': Bo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464316.c1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464314)
  }];
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A173 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464313["/Domain"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464315) ?? [0, 1],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D260 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A173[0] ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D261 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A173[1] ?? 1,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A174 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D92 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D92 < 9; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D92 += 1) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D92 / 8,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 = Fo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464313, ts(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D260, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D261, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464315);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324) return;
    Io(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A174, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41, Bo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464314));
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A174;
}
function No(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464321, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464323) {
  if (B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464321["/FunctionType"]) !== 3) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464324 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464321["/Functions"]);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464324.length === 0) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A177 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464324.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865 => L(zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46865, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464323)));
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A177.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866 => B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46866["/FunctionType"]) !== 2)) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A178 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464321["/Domain"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464323) ?? [0, 1];
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A178.length < 2) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464325 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A178[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464326 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A178[1],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D265 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464326 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464325;
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D265 === 0) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A179 = [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464325, ...(F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464321["/Bounds"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464323) ?? []).slice(0, Math.max(0, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A177.length - 1)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464326],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A180 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464321["/Encode"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464323) ?? [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A181 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D93 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D93 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A177.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D93 += 1) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A177[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D93],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A179[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D93],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A179[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D93 + 1];
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 != 'number' || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 != "number") return;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A180[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D93 * 2] ?? 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A180[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D93 * 2 + 1] ?? 1,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 = Fo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464323),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 = Fo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464323);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329) return;
    Io(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A181, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464325) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D265, Bo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46328, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464322)), Io(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A181, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46327 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464325) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D265, Bo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464322));
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A181.length >= 2 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A181 : undefined;
}
function Po(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464334, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464335) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464336;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464337 = Ro(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464335);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464337.length !== 1) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464338 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464337[0],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464338);
  if (B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339["/FunctionType"]) !== 0) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464340 = dl((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464336 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464338.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464336.data);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464340) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341 = Zo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464334),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464342 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339["/Size"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464335),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339["/BitsPerSample"]);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464342 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464342.length !== 1 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343 <= 0) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D267 = Math.floor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464342[0]);
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D267 <= 0) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D268 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D267 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464340.length * 8 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D268) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A187 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339["/Domain"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464335) ?? [0, 1],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464344 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339["/Range"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464335),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464345 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339["/Decode"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464335) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464344 ?? Qo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A188 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464339['/Encode'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464335) ?? [0, Math.max(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D267 - 1)],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464346 = fn_L0_core_endo_routine_io_ON_heap_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464345, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464346) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D269 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A187[0] ?? 0;
  if ((var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A187[1] ?? 1) - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D269 === 0) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D270 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A188[0] ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D271 = (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A188[1] ?? Math.max(0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D267 - 1)) - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D270,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D272 = 2 ** var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343 - 1,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A189 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 < var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D267; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 += 1) {
    let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10 = [];
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16 += 1) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = es(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464340, (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464341 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464343);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 === undefined) return;
      let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464346[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D16];
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10.push(ts(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4642, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D272 === 0 ? 0 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D272));
    }
    Io(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A189, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D271 === 0 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D267 === 1 ? 0 : (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D94 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D270) / var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D271, Bo(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A10, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464334));
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A189.sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46867.offset - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46868.offset).filter((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871) => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46871[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46870 - 1];
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872 || Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872.offset - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869.offset) >= 0.000001 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46872.color !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46869.color;
  });
}
function Fo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464362, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464363) {
  if (B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464361["/FunctionType"]) !== 2) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A193 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464361['/C0'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464363) ?? [0],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A194 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464361["/C1"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464363) ?? [1],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D279 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464361['/N']) ?? 1,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A195 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464361["/Domain"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464363) ?? [0, 1],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D280 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A195[0] ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D281 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A195[1] ?? 1,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D282 = Math.max(Math.min(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D280, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D281), Math.min(Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D280, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D281), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464362)) ** var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D279,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D283 = Math.max(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A193.length, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A194.length);
  return Array.from({
    'length': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D283
  }, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46877, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878) => {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D95 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A193[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878] ?? 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D96 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A194[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46878] ?? 1;
    return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D95 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D282 * (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D96 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D95);
  });
}
function Io(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464370 = rs(Math.max(0, Math.min(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464368))),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464371 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464367[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464367.length - 1];
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464371 && Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464371.offset - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464370) < 0.000001 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464371.color === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464367.push({
    'offset': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464370,
    'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464369
  });
}
function Lo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464378) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464379 = zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464378);
  return (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464379) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464379 : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464379]).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881 == 'string' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464378.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881] : undefined;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882 ? j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46882) : L(zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46881, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464378));
  }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885 => Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46885).length > 0);
}
function Ro(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464385 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464383 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464383] : undefined;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464385) return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464385.value) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464385.value["flatMap"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886 => Ro(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46886, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384)) : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464385];
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464386 = zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384);
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464386)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464386.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46887 => Ro(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46887, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464384));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464387 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464386);
  return Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464387).length > 0 ? [{
    'objectRef': "inline",
    'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464387
  }] : [];
}
function zo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464393, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464394) {
  if (B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464393["/FunctionType"]) === 2) return {
    'c0': F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464393["/C0"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464394) ?? [0],
    'c1': F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464393["/C1"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464394) ?? [1]
  };
}
function Bo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464397, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464398) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464398 === "/DeviceGray") {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D99 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464397[0] ?? 0;
    return qc(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D99, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D99, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D99);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464398 === "/DeviceCMYK" ? Jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464397[0] ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464397[1] ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464397[2] ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464397[3] ?? 0) : qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464397[0] ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464397[1] ?? 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464397[2] ?? 0);
}
function Vo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464402) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464403;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464404 = Ho(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464401, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464402);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464404) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464404;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464405 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464401);
  if (jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464405["/ColorSpace"]) !== "/DeviceRGB") return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464406 = dl((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464403 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464401.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464403.data);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464406) return ga({
    'shadingType': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464405["/ShadingType"]),
    'bitsPerFlag': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464405['/BitsPerFlag']),
    'bitsPerCoordinate': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464405["/BitsPerCoordinate"]),
    'bitsPerComponent': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464405['/BitsPerComponent']),
    'verticesPerRow': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464405["/VerticesPerRow"]),
    'bytes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464406,
    'decode': I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464405["/Decode"]) ?? [0, 1, 0, 1, 0, 1, 0, 1, 0, 1]
  });
}
function Ho(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464414) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464415 = j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464413);
  if (B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464415["/ShadingType"]) !== 1) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464416 = Mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464415['/ColorSpace'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464414),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464417 = Zo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464416);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464417) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A199 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464415["/Domain"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464414) ?? [0, 1, 0, 1];
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A199.length < 4) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464418 = Uo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464415['/Function'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464414);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464418.length === 0) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A200 = Lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464415["/Matrix"]) ?? [1, 0, 0, 1, 0, 0],
    [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A201, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A202, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A203, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A204] = [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A199[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A199[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A199[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A199[3]],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A205 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A206 = [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A207 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D100 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D100 <= 16; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D100 += 1) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330 = ts(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A203, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A204, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D100 / 16);
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 <= 16; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 += 1) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 = ts(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A201, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A202, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D17 / 16),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 = Wo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464417);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644) return;
      let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646] = ns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A200),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = Bo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464416);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A205.push({
        'x': rs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645),
        'y': rs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646),
        'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A207.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644);
    }
  }
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D101 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D101 < 16; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D101 += 1) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 < 16; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44 += 1) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D101 * 17 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D44,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 + 1,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11 + 17,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13 + 1;
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A206.push({
      'vertices': [var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB12, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14]
    }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A206.push({
      'vertices': [var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB11, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB13]
    });
  }
  return {
    'shadingType': '1',
    'vertexCount': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A205.length,
    'bbox': is(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A205),
    'averageColor': Bo(as(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A207, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464417), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464416),
    'vertices': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A205,
    'triangles': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A206
  };
}
function Uo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464426) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A217 = Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464425) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464425 : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464425],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A218 = [];
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A217) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464427;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464426.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888] : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 ? j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331) : L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46888);
    if (B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332["/FunctionType"]) !== 4) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464427 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331.stream) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464427.data ? ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331.stream['data']) : undefined;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A218.push({
      'code': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333,
      'range': F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332["/Range"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464426)
    });
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A218;
}
function Wo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464431, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464433, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464434) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464431.length === 1) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889 = Go(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464431[0], [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464433]);
    return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889.length < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464434 ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46889.slice(-var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464434);
  }
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A221 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464431.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891 = Go(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46890, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464433])) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46891.slice(-1)[0];
  });
  if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A221.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46894 != "number")) return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A221;
}
function Go(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464439, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464440) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464440],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A224 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464439.code["trim"]().replace(/^\{\s*/, '').replace(/\s*\}$/, '').split(/\s+/).filter(Boolean);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A224) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45 = Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895);
    if (Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45)) {
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223.push(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45);
      continue;
    }
    if (!Ko(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46895)) return;
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464439.range) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102 += 1) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 = Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464439.range["length"] - (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223.length - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102) * 2),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464439.range[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464439.range[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 + 1];
    typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 == 'number' && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 == 'number' && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102] = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D102])));
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A223;
}
function Ko(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464444) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464444) {
    case "pop":
      return qo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443) !== undefined;
    case 'exch':
      {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443.length < 2) return false;
        let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D47 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443.pop(),
          var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443.pop();
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443.push(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D47, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D48), true;
      }
    case "dup":
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443.length - 1];
        return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 == "number" ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336), true) : false;
      }
    case "copy":
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 = qo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443);
        return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 != "number" || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443.length < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443.push(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443.length - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337)), true);
      }
    case "roll":
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 = qo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 = qo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443);
        return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 != "number" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338 != 'number' || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339) || !Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443.length < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 ? false : (Xo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338), true);
      }
    case "add":
      return Yo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341);
    case "sub":
      return Yo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46343);
    case "mul":
      return Yo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46344 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46345);
    case "div":
      return Yo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46346 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46347);
    case "mod":
      return Yo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46348 % var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46349);
    case "sqrt":
      return Jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350 => Math.sqrt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350));
    case 'sin':
      return Jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351 => Math.sin(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46351 * Math.PI / 180));
    case 'cos':
      return Jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 => Math.cos(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 * Math.PI / 180));
    case "floor":
      return Jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353 => Math.floor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353));
    case "abs":
      return Jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354 => Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46354));
    case 'neg':
      return Jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464443, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355 => -var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355);
    default:
      return false;
  }
}
function qo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464447) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464447.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464447.pop() : undefined;
}
function Jo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464449, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464450) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464451 = qo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464449);
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464451 == "number" ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464449.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464450(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464451)), true) : false;
}
function Yo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464455, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464456) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464457 = qo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464455),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458 = qo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464455);
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458 != "number" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464457 != "number" ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464455.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464456(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464458, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464457)), true);
}
function Xo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464463, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464464, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464465) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464464 === 0) return;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D289 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464463.length - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464464,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A227 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464463.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D289),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D290 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464465 % var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464464 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464464) % var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464464,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A228 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A227.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464464 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D290).concat(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A227.slice(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464464 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D290));
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464463.splice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D289, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464464, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A228);
}
function Zo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464469) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464469 === "/DeviceGray") return 1;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464469 === "/DeviceRGB") return 3;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464469 === "/DeviceCMYK") return 4;
}
function Qo(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464471) {
  return Array.from({
    'length': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464471
  }, () => [0, 1]).flat();
}
function fn_L0_core_endo_routine_io_ON_heap_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464473, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464474) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464473.length < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464474 * 2) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A231 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464474; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103 += 1) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A231.push([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464473[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103 * 2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464473[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D103 * 2 + 1]]);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A231;
}
function es(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464478, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464479) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D293 = 0;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464479; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104 += 1) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464478 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D104,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464477[Math.floor(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25 / 8)];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 === undefined) return;
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D293 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D293 * 2 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 >> 7 - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB25 % 8 & 1);
  }
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D293;
}
function ts(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464485) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464483 + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464484 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464483) * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464485;
}
function ns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464489, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464490, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491) {
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464489 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464490 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491[4], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464489 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464490 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464491[5]];
}
function rs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495) {
  return Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464495 * 1000000) / 1000000;
}
function is(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497.length === 0) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A233 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46896.x),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A234 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464497.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46897.y);
  return [rs(Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A233)), rs(Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A234)), rs(Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A233)), rs(Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A234))];
}
function as(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.length === 0) return Array(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500).fill(0);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501 = Array(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500).fill(0);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499) for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464500; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 += 1) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49] += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46898[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49] ?? 0;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464501.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46899 / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464499.length);
}
function os(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464505, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506) {
  return Oi({
    'record': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464505,
    'objectIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464506
  });
}
function ss(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464510, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464513;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB90 = {},
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB91 = {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464514 = z((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464510 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509.trailer) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464510["/Root"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464515 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464514 ? L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464514]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464511.value) : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464516 = z((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509.trailer) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464512["/Info"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464517 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464516 ? L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464513 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464516]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464513.value) : undefined;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509.objects)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.value),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 = L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464518.dict);
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB90[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.objectRef] = {
      'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.objectRef,
      'generation': Oc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.objectRef),
      'type': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357["/Type"]) ?? z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358["/Type"])
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.stream && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB91[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.objectRef] = {
      'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.objectRef,
      'storage': "omitted",
      'decoded': !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46900.stream["data"],
      'filters': cl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358['/Filter']),
      'length': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358["/Length"])
    });
  }
  return {
    'producer': N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464517 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464517["/Producer"]) ?? ''),
    'objectTable': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB90,
    'streams': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB91,
    'trailer': pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464509.trailer ?? {}),
    'catalogRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464514,
    'pagesTreeRef': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464515 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464515["/Pages"])
  };
}
function cs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464530) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464531 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464529["/MediaBox"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464530) ?? lo,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464532 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464529["/CropBox"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464530),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464533 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464529['/BleedBox'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464530),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464534 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464529["/TrimBox"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464530),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464535 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464529["/ArtBox"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464530);
  return {
    'mediaBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464531,
    'cropBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464532 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464531,
    'bleedBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464533,
    'trimBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464534,
    'artBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464535
  };
}
function ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464544) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB94 = {},
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929920 = new Set(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464545 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464543["/Parent"]);
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464545 && !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929920.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464545);) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464546;
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929920.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464545);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359 = L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464546 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464544.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464545]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464546.value);
    us(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB94, "/MediaBox"), us(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB94, "/CropBox"), us(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB94, "/Resources"), us(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB94, "/Rotate"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464545 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46359['/Parent']);
  }
  return {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB94,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464543
  };
}
function us(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464551, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464552, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464553) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464552[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464553] === undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464551[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464553] !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464552[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464553] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464551[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464553]);
}
function ds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464557) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D295 = (Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464557 ?? 0) % 360 + 360) % 360;
  return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D295 === 90 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D295 === 180 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D295 === 270 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D295 : 0;
}
function fs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464559, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464560) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464561 = ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464559.contents);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464561.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464561 : ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464560["/Contents"]);
}
function ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464566) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464567 = A(Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464566)['/Font'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464566),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB96 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464567)) typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902 == "string" && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB96[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46901] = "font_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46902));
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB96;
}
function ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464571, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464573 = A(Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464571, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572)["/Font"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB98 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464573)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464574;
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904 != "string") continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360 = L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464574 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46904]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464574.value),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 = Pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572);
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB98[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46903] = {
      'pdfSubtype': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360["/Subtype"]),
      'encoding': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360['/Encoding']),
      'firstChar': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360["/FirstChar"]),
      'widths': F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360["/Widths"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572),
      'cidWidths': ki(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572),
      'defaultWidth': Ai(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572),
      'cidVerticalMetrics': ji(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572),
      'defaultVerticalMetrics': Mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572),
      'toUnicode': Fi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572),
      'codeSpaceRanges': Ii(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572),
      'writingMode': Ni(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572),
      'type3Glyphs': hs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464572)
    };
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB98;
}
function hs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464579, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464580) {
  return Za({
    'fontValue': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464579,
    'objectIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464580,
    'createResources': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905 => gs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46905, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464580)
  });
}
function gs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464584) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB100 = {
    'fontResourceIds': ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464584),
    'xObjectResources': fn_L0_core_endo_routine_pure_ON_heap_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464584),
    'extGStateResources': vs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464584),
    'colorSpaceResources': ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464584),
    'patternResources': bs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464584),
    'shadingResources': xs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464583, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464584)
  };
  return Object.values(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB100).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906 && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46906).length > 0) ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB100 : undefined;
}
function fn_L0_core_endo_routine_pure_ON_heap_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464587, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464588) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464589 = A(Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464587, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464588)["/XObject"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464588),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB102 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464589)) {
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908 != "string") continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464588.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908],
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362 ? j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362) : {},
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 = Nc(z(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1["/Subtype"]));
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB102[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907] = {
      'resourceName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46907,
      'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908,
      'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 === 'image' ? "image_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 === "form" ? "form_xobject_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908) : undefined,
      'subtype': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363,
      'width': B(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1["/Width"]),
      'height': B(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1["/Height"]),
      'bbox': P(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1["/BBox"]),
      'matrix': Lc(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB1["/Matrix"]),
      'displayListId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46363 === "form" ? "form_xobject_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46908) + "_display" : undefined
    };
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB102;
}
function vs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464594) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464595 = A(Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464594)['/ExtGState'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464594),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB104 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464595)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464596;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910 : undefined;
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB104[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909] = {
      'resourceName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46909,
      'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364,
      'state': As(L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464596 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464594.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464596.value : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46910), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464594)
    };
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB104;
}
function ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464602) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464603 = A(Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464601, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464602)["/ColorSpace"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464602),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB106 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464603)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464604;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912 == 'string' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464602.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912 : undefined;
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB106[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911] = Ss(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464604 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464602.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464604.value : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46912, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46365, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464602);
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB106;
}
function bs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464610) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464611 = A(Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464610)['/Pattern'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464610),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB108 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464611)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914 == 'string' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464610.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46914 : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464610.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366] : undefined;
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB108[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913] = {
      'resourceName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46913,
      'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366,
      'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 ? "pattern_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366) : undefined,
      'fallbackPaint': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367 ? Do(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464610) : undefined
    };
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB108;
}
function xs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464616) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464617 = A(Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464615, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464616)["/Shading"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464616),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB110 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464617)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916 == "string" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464616.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46916 : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464616.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368] : undefined;
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB110[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915] = {
      'resourceName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46915,
      'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368,
      'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 ? "shading_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368) : undefined,
      'fallbackPaint': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 ? ko(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369) : undefined
    };
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB110;
}
function A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464621, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464622) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464621 == "string") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464623;
    return L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464623 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464622.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464621]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464623.value);
  }
  return L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464621);
}
function Ss(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464629, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464631 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464628);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464631) return {
    'resourceName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464627,
    'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464629,
    'kind': Cs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464631),
    'channels': ws(Cs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464631))
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464628),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464633 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632[0]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634 = Cs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464633),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464635 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632[1]);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634 === "Indexed") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917 = zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630);
    return {
      'resourceName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464627,
      'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464629,
      'kind': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634,
      'channels': 1,
      'baseColorSpace': Ss(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464627 + ":base", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46917, undefined, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630),
      'highValue': B(zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630)),
      'lookup': Ts(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630)
    };
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464633 === '/ICCBased' && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632[1] == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464630.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464632[1]] : undefined,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464637 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464636 ? j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464636) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464635;
  return {
    'resourceName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464627,
    'objectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464629,
    'kind': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634,
    'channels': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634 === "ICCBased" ? B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464637['/N']) ?? ws(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634) : ws(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464634),
    'whitePoint': Ds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464635["/WhitePoint"]) ?? [1, 1, 1],
    'blackPoint': Ds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464635['/BlackPoint']),
    'gamma': I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464635["/Gamma"]),
    'matrix': I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464635["/Matrix"])
  };
}
function Cs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464649) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464649) {
    case "/DeviceGray":
    case '/G':
      return "DeviceGray";
    case "/DeviceRGB":
    case "/RGB":
      return 'DeviceRGB';
    case "/DeviceCMYK":
    case "/CMYK":
      return "DeviceCMYK";
    case "/CalGray":
      return "CalGray";
    case "/CalRGB":
      return 'CalRGB';
    case "/ICCBased":
      return "ICCBased";
    case "/Indexed":
    case '/I':
      return "Indexed";
    case "/Lab":
      return "Lab";
    case "/Pattern":
      return "Pattern";
    default:
      return "Unknown";
  }
}
function ws(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464651) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464651) {
    case "DeviceGray":
    case 'CalGray':
    case "Indexed":
      return 1;
    case 'DeviceCMYK':
      return 4;
    default:
      return 3;
  }
}
function Ts(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464654) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464655;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464653 == 'string' && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464655 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464654.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464653]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464655.stream) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464656;
    return dl((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464656 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464654.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464653]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464656 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464656.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464656.data);
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464657 = zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464654);
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464657 == "string") return Es(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464657);
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A237 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464657).map(B).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46918 == "number");
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A237.length > 0) return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A237.map(Xc);
}
function Es(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464663) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464663.startsWith('b:')) {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464663.slice(2).replace(/\s+/g, ''),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34 = [];
    for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50 < var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50 += 2) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB40.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D50 + 2).padEnd(2, '0'),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123 = Number.parseInt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46122, 16);
      Number.isNaN(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123) || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46123);
    }
    return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34;
  }
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A239 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464663.startsWith('u:') ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464663.slice(2) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464663;
  return Array.from(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A239, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46919.charCodeAt(0) & 255);
}
function Ds(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464665) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464666 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464665);
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464666 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464666.length < 3)) return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464666[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464666[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464666[2]];
}
function Os(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464670) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464671 = F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464669, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464670);
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464671 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464671.length < 2)) return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464671[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464671[1]];
}
function ks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464676) {
  return Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464675[0] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464676[0]) < 0.000001 && Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464675[1] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464676[1]) < 0.000001;
}
function As(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464679, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464680) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464681 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464679["/ca"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464682 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464679["/CA"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464683 = Ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464679["/BM"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464684 = js(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464679["/SMask"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464680);
  return {
    ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464681 == "number" ? {
      'alpha': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464681,
      'fill': {
        'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464681
      }
    } : {}),
    ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464682 == 'number' ? {
      'stroke': {
        'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464682
      }
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464683 ? {
      'blendMode': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464683
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464684 ? {
      'softMask': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464684
    } : {}),
    'overprint': ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464679["/OP"]) ?? ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464679['/op'])
  };
}
function js(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464692) {
  if (z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464691) === "/None") return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693 = So(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464692);
  if (Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693).length !== 0) return {
    'subtype': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693['/S']),
    'groupRef': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693['/G']),
    'backdropColor': F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693["/BC"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464692),
    'transferFunctionRef': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693["/TR"]),
    'raw': pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464693)
  };
}
function Ms(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464699, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464700) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464701 = Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464698, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464700);
  if (Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464701).length !== 0) {
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464699)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.subtype !== "form" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.objectRef || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.objectRef] = Ns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464697[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.objectRef], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464701, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464700));
  }
}
function Ns(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464709) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464710 = Ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464707 ? Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464707, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464709) : {}, A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464708, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464709));
  return Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464710).length > 0 ? {
    '/Resources': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464710
  } : {};
}
function Ps(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464715, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464716) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB112 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464715
  };
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464716)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 = L(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB112[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921);
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB112[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46920] = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371).length > 0 && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372).length > 0 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46921;
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB112;
}
function Fs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464720, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464721) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464721)) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = {
      'kind': "XObject",
      'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922.resourceName,
      'ref': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922.objectRef,
      'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922.assetId
    };
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922.subtype === "image" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922.assetId) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464722, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464723;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464722 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464719.images) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464722[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922.assetId];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124) continue;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.resourceName = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.resourceName ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922.resourceName, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.source = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.source,
        'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464720,
        'resourceRefs': Is((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464723 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464723.resourceRefs, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2)
      };
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922.subtype === "form" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922.assetId) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464724, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464725;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464724 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464719.formXObjects) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464724[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46922.assetId];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125) continue;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125.source = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125.source,
        'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464720,
        'resourceRefs': Is((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464725 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125.source) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464725.resourceRefs, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2)
      };
    }
  }
}
function Is(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A241 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464733 ?? [];
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A241.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.kind === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734.kind && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.name === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734.name && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46923.ref === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734.ref) ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A241 : [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A241, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464734];
}
function Ls(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464738) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464739 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464737["/Resources"];
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464739 == "string") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464740;
    return L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464740 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464738.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464739]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464740.value);
  }
  return L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464739);
}
function j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464745) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464746;
  return {
    ...L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464745.value),
    ...L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464746 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464745.stream) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464746.dict)
  };
}
function Rs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751 = A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750);
  return zs({
    'fonts': Bs(A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751["/Font"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750), "Font"),
    'xObjects': Vs(A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751["/XObject"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750),
    'extGStates': Bs(A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751["/ExtGState"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750), 'ExtGState'),
    'colorSpaces': Bs(A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751['/ColorSpace'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750), "ColorSpace"),
    'patterns': Bs(A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751["/Pattern"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750), "Pattern"),
    'shadings': Bs(A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751["/Shading"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750), 'Shading'),
    'properties': Bs(A(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464751["/Properties"], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464750), "Properties")
  });
}
function zs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464755) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB114 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464755)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925 && Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925).length > 0 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB114[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46924] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46925);
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB114;
}
function Bs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464757, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464758) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464757)) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926] = {
    'kind': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464758,
    'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46926,
    'ref': typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46927 : undefined
  };
  return Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB116 : undefined;
}
function Vs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464761, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464762) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB118 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464761)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 = typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929 == 'string' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46929 : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464762.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373] : undefined,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374 ? j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374) : {},
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375 = Nc(z(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3["/Subtype"]));
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB118[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928] = {
      'kind': "XObject",
      'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46928,
      'ref': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373,
      'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 ? Hs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375) : undefined,
      'subtype': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375,
      'width': B(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3["/Width"]),
      'height': B(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3["/Height"]),
      'bbox': P(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3['/BBox']),
      'matrix': Lc(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB3["/Matrix"])
    };
  }
  return Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB118).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB118 : undefined;
}
function Hs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464765, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464766) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464766 === "image") return "image_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464765);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464766 === 'form') return 'form_xobject_' + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464765);
}
function Us(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464769, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464770, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464772, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464773) {
  return {
    'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464769,
    'pageIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464770,
    'pageRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464771,
    'pageObjectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464771,
    'contentStreamRefs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464772,
    'pdfBoxes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464773
  };
}
function Ws(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464779, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464780, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464781, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464782, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464783, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464784, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464786) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464779,
    'type': "rawPdfGroup",
    'origin': "imported-native",
    'editability': 'visual-only',
    'bbox': Vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464786, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464786),
    'source': {
      'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464780,
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464781,
      'pageIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464782,
      'pageRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464783,
      'pageObjectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464783,
      'pdfObjectRefs': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464783, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464784].filter(Boolean),
      'contentStreamRefs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464784,
      'displayListIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464785],
      'pdfBounds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464786
    },
    'displayListIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464785],
    'nativeSnapshot': {
      'objectRefs': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464783, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464784].filter(Boolean),
      'displayListId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464785
    },
    'exportPolicy': {
      'disposition': "preserve-native",
      'preserveSourceMapping': true
    }
  };
}
function Gs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796) {
  return (Js(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795["/DA"]) ?? Js(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795.defaultappearance) ?? Js(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464795.da)) || Js(qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464796)["/DA"]);
}
function Ks(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464799, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464801 = ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464799 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464799["/NeedAppearances"]) ?? ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464799 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464799.needappearances);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464801 === undefined ? ml(qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464800)["/NeedAppearances"]) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464801;
}
function qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464805) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464806, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464807;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464808 = z((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464806 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464805.trailer) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464806['/Root']);
  return Bc((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464808 ? L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464807 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464805.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464808]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464807.value) : {})['/AcroForm'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464805);
}
function Js(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464813) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB80 = N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464813) ?? '').trim();
  if (!var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB80) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464814 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB80.match(/(\/[^\s]+)\s+(-?\d*\.?\d+)\s+Tf\b/);
  return {
    'raw': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB80,
    'fontResourceName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464814 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464814[1],
    'fontSize': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464814 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464814[2]) === undefined ? undefined : Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464814[2]),
    'fillColor': Ys(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB80)
  };
}
function Ys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464817) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464817.split(/\s+/).filter(Boolean),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464818;
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105 += 1) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 === 'g') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 = Xs(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105 - 1]);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126 !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464818 = qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126));
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 === 'rg') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 = Xs(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105 - 3]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 = Xs(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105 - 2]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 = Xs(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105 - 1]);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129 !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464818 = qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46129));
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 === 'k') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 = Xs(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105 - 4]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 = Xs(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105 - 3]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 = Xs(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105 - 2]),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 = Xs(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A243[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D105 - 1]);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133 !== undefined) {
        let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650] = Zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46130, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46131, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46132, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46133);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464818 = qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650);
      }
    }
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464818;
}
function Xs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464821) {
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464821 === undefined || !/^-?\d*\.?\d+$/["test"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464821))) return Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464821);
}
function Zs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464823, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464826, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464827, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464828, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464829, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464830, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464831) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464828 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464828.value),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464833 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832["/Rect"]) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464829,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464834 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832["/Subtype"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464835 = wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464834),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464836 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832['/A']),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464837 = pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464835, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464829),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464838 = ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464835),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839 = oc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464835, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464829),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464840 = sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464835, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464829),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464841 = cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464835),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464842 = uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464835, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464830, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464831),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843 = lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464835),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464844 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464842 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464842.normalAppearanceRef) ?? dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832);
  return {
    ...mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464823, 'annotation', Vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464829)),
    'annotationType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464835,
    'contents': N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832['/Contents']) ?? ''),
    'author': N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832['/T']) ?? '') || undefined,
    'createdAt': N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832["/CreationDate"]) ?? '') || undefined,
    'modifiedAt': N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832['/M']) ?? '') || undefined,
    'flags': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464832['/F']),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464837 ? {
      'line': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464837
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464838 ? {
      'popup': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464838
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839 ? {
      'markup': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464839
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464840 ? {
      'ink': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464840
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464841 ? {
      'shape': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464841
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843 ? {
      'link': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464843
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464842 ? {
      'widget': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464842
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464844 ? {
      'normalAppearanceRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464844,
      'normalAppearanceAssetId': "form_xobject_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464844),
      'normalAppearanceDisplayListId': "form_xobject_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464844) + '_display'
    } : {}),
    'source': {
      'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464824,
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464825,
      'pageIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464826,
      'pdfObjectRefs': al([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464827, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464844].filter(Boolean)),
      'pdfBounds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464833,
      'appearanceStreamRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464844
    },
    'metadata': fl({
      'pdfSubtype': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464834,
      'uri': N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464836["/URI"]) ?? ''),
      'actionType': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464836['/S'])
    })
  };
}
function Qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464867, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464868, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464869, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464872, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464874) {
  fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F4(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464867, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464869).forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46930),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.annotation),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934.object) ?? z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.object),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464871[Math.max(0, (B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.pageposfrom1) ?? 1) - 1)];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936 && !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464872[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46932.length)) {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26 = "page_" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936.index + 1) + "_widget_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464870[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26] = Zs(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464868, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936.index, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464869.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936.pdfBoxes['mediaBox'], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464874), nc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464872, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26), rc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46936.layers, "annotation", var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB26);
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.object) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB41 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937 ? "form_field_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937) : "form_field_" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46931 + 1),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938 = al(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464872[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935] ?? [] : []),
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB42 = Tc(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.fieldtype), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933) ?? 'text',
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8 = {
        ...mc(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB41, "formField", ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464870, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938) ?? [0, 0, 0, 0]),
        'editability': "native-patchable",
        'fieldType': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB42,
        'name': N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.fullname) ?? z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.partialname) ?? var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB41),
        'value': nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.value),
        'defaultValue': nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.defaultvalue),
        'choices': rl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.choices),
        'readOnly': il(B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.fieldflags), 1),
        'required': il(B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.fieldflags), 2),
        'fieldFlags': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.fieldflags),
        'alternateName': N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.alternativename) ?? '') || undefined,
        'mappingName': N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.mappingname) ?? '') || undefined,
        'parentRef': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.parent),
        'fieldRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937,
        'widgetObjectIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938,
        'source': {
          'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464868,
          'pdfObjectRefs': al([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46935].filter(Boolean))
        },
        'metadata': fl({
          'qpdfFieldType': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.fieldtype),
          'quadding': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46933.quadding),
          'appearanceState': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934.appearancestate)
        })
      };
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464870[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB41] = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46938) {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464870[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377];
      (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.type) === 'annotation' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.annotationType === 'widget' && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.widget = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.widget,
        'fieldObjectId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB41,
        'fieldRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46937,
        'fieldName': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.name,
        'fieldType': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB42,
        'value': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.value ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.widget) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46939.value),
        'defaultValue': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.defaultValue ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.widget) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46940.defaultValue),
        'choices': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.choices && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.choices["length"] > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.choices : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.widget) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46941.choices,
        'appearanceState': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46934.appearancestate) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46134.widget) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46942.appearanceState),
        'flags': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB8.fieldFlags
      });
    }
  });
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F4(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464884) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464885 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464883 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464883.fields);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464885.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464885 : ol(qs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464884)["/Fields"]).flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956 => ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46956, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464884, {}));
}
function ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464889, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464890, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464891) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464892;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893 = L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464892 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464890.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464889]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464892.value),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB120 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464891,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464894 = ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893['/Kids']);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464894.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464894.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957 => ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46957, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464890, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB120)) : [{
    'object': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464889,
    'fieldtype': z(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB120['/FT']),
    'partialname': z(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB120['/T']),
    'fullname': tc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464889, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464890),
    'value': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB120['/V'],
    'defaultvalue': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB120["/DV"],
    'fieldflags': B(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB120["/Ff"]),
    'choices': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB120["/Opt"],
    'alternativename': z(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB120["/TU"]),
    'mappingname': z(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB120["/TM"]),
    'parent': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893["/Parent"]),
    'quadding': B(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB120['/Q']),
    'annotation': {
      'object': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464889,
      'appearancestate': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464893["/AS"])
    }
  }];
}
function tc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A245 = [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464903 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464901,
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929922 = new Set();
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464903 && !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929922.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464903);) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464904;
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929922.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464903);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 = L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464904 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464902.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464903]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464904.value),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 = N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378['/T']) ?? '');
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A245.unshift(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464903 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378["/Parent"]);
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A245.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A245.join('.') : undefined;
}
function nc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464909, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464910, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464911) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464909[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464910] = al([...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464909[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464910] ?? []), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464911]);
}
function rc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464916, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464917) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464918 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464915.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46958.type === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464916);
  !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464918 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464918.objectIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464917) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464918.objectIds["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464917);
}
function ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464923, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464924) {
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464924) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464923[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46959];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.bbox) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380.bbox;
  }
}
function ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464927, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464928) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464928 === 'popup') return {
    'parentRef': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464927['/Parent']),
    'open': ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464927["/Open"])
  };
}
function oc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464931, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464932, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933) {
  if (!['highlight', "underline", "strikeout", "squiggly"].includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464932)) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A247 = I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464931['/QuadPoints']) ?? [],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A248 = [];
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 + 7 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A247.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 += 8) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A248.push([Hc(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A247[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A247[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 + 1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933), Hc(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A247[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 + 2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A247[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 + 3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933), Hc(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A247[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 + 4], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A247[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 + 5], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933), Hc(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A247[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 + 6], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A247[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D106 + 7], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933)]);
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A248.length === 0) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960 = P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464931['/Rect']);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A248.push([Hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933), Hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933), Hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933), Hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46960[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464933)]);
  }
  return {
    'quadPoints': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A248,
    'color': Kc(I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464931['/C'])),
    'opacity': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464931["/CA"])
  };
}
function sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464937, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464938, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464939) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464938 === "ink") return {
    'paths': R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464937['/InkList']).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961 => {
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46961).map(B).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381 == 'number'),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36 = [];
      for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 + 1 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 += 2) var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36.push(Hc(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A35[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 + 1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464939));
      return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36;
    }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46963.length > 0),
    'stroke': el({
      'color': Kc(I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464937['/C'])),
      'width': Uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464937),
      'dash': Gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464937)
    })
  };
}
function cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464943, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464944) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464944 === "square" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464944 === "circle") return {
    'border': el({
      'color': Kc(I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464943['/C'])),
      'width': Uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464943),
      'dash': Gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464943)
    }),
    'interiorFill': tl({
      'color': Kc(I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464943['/IC'])),
      'opacity': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464943["/CA"])
    })
  };
}
function lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464947, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464948) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464948 !== "link") return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464949 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464947['/A']);
  return {
    'actionType': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464949['/S']),
    'uri': N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464949['/URI']) ?? '') || undefined,
    'dest': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464947['/Dest'] === undefined ? undefined : pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464947["/Dest"]),
    'border': el({
      'color': Kc(I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464947['/C'])),
      'width': Uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464947),
      'dash': Gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464947)
    })
  };
}
function uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464954, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464956) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464954 !== 'widget') return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464957 = Tc(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953["/FT"]), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464958 = rl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953["/Opt"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464959 = dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464960 = fc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464961 = Js(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953['/DA']) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464955,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464962 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953['/MK']);
  return {
    'fieldName': N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953['/T']) ?? '') || undefined,
    'fieldType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464957,
    'value': nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953['/V']),
    'defaultValue': nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953["/DV"]),
    'choices': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464958,
    'appearanceState': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953["/AS"]),
    'onValue': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464960,
    'normalAppearanceRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464959,
    'normalAppearanceAssetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464959 ? "form_xobject_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464959) : undefined,
    'normalAppearanceDisplayListId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464959 ? 'form_xobject_' + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464959) + "_display" : undefined,
    'defaultAppearance': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464961,
    'needsAppearance': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464956,
    'flags': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953["/Ff"]),
    'quadding': B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953['/Q']),
    'backgroundColor': Kc(I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464962["/BG"])),
    'borderColor': Kc(I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464962['/BC'])),
    'borderWidth': Uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464953)
  };
}
function dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464973) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464974 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464973["/AP"])['/N'],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464975 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464974);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464975) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464975;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464976 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464974),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464977 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464973['/AS']);
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464977 ? z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464976[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464977]) : undefined) || Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464976).filter(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964]) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46964 !== '/Off').map(([, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965]) => z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46965)).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46966) || z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464976["/Off"]);
}
function fc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464983) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464984 = L(L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464983["/AP"])['/N']);
  return Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464984).find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46967 !== "/Off");
}
function pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464987, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464989) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464988 !== "line") return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A251 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464987['/L']).map(B);
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A251.length < 4 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A251.slice(0, 4).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46968 === undefined)) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464990 = el({
      'color': Kc(I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464987['/C'])),
      'width': Uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464987)
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464991 = Wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464987["/LE"]);
  return {
    'start': Hc(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A251[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A251[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464989),
    'end': Hc(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A251[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A251[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464989),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464990 ? {
      'stroke': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464990
    } : {}),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464991 ? {
      'lineEndings': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464991
    } : {})
  };
}
function mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464997, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464998, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464999) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464997,
    'type': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464998,
    'origin': "imported-native",
    'editability': 'visual-only',
    'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464999
  };
}
function hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465003, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465004, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465005) {
  return [{
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465003 + ':native',
    'type': "nativePdf",
    'name': "Native PDF",
    'visible': true,
    'locked': true,
    'objectIds': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465004]
  }, {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465003 + ':annotation',
    'type': "annotation",
    'name': "Annotation",
    'visible': true,
    'locked': false,
    'objectIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465005
  }, {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465003 + ":editable",
    'type': "editable",
    'name': "Editable",
    'visible': true,
    'locked': false,
    'objectIds': []
  }];
}
function gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465009, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465010) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465009.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970) => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.destpageposfrom1 ? "page_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.destpageposfrom1 : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.dest, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972 = vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.object, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465010),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.kids && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.kids["length"] > 0 ? gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.kids, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465010) : undefined;
    return {
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.object ? "outline_" + M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.object) : "outline_" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46970 + 1),
      'title': N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.title ?? ''),
      ...(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45 ? {
        'pageId': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB45
      } : {}),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971 ? {
        'destination': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46971
      } : {}),
      ...(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.open == "boolean" ? {
        'open': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.open
      } : {}),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972 ? {
        'style': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46972
      } : {}),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973 ? {
        'children': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46973
      } : {}),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.object ? {
        'source': {
          'pdfObjectRefs': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46969.object]
        }
      } : {})
    };
  });
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465013, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465014) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465014) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A253 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465013 ?? [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465015 = z(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A253[1]),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122 = {
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465014
    };
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465015) {
    case "/XYZ":
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.fit = "XYZ", var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.left = B(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A253[2]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.top = B(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A253[3]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.zoom = B(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A253[4]);
      break;
    case "/FitH":
    case "/FitBH":
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.fit = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465015.slice(1), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.top = B(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A253[2]);
      break;
    case "/FitV":
    case "/FitBV":
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.fit = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465015.slice(1), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.left = B(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A253[2]);
      break;
    case '/FitR':
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.fit = "FitR", var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.left = B(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A253[2]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.bottom = B(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A253[3]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.right = B(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A253[4]), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.top = B(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A253[5]);
      break;
    case "/FitB":
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.fit = 'FitB';
      break;
    default:
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122.fit = "Fit";
      break;
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB122;
}
function vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465019, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465020) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465021;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465019) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465022 = L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465021 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465020.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465019]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465021.value),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D297 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465022['/F']) ?? 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465023 = Kc(I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465022['/C'])),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124 = {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465023 ? {
        'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465023
      } : {}),
      ...(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D297 & 2 ? {
        'bold': true
      } : {}),
      ...(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D297 & 1 ? {
        'italic': true
      } : {})
    };
  return Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB124 : undefined;
}
function yc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465029) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB126 = {
    'operatorCounts': {},
    'unsupportedOperatorCounts': {},
    'unsupportedFeatureCounts': {},
    'unsupportedFeatures': []
  };
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465029) xc(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB126.operatorCounts, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979.operatorCounts), xc(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB126.unsupportedOperatorCounts, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979.unsupportedOperatorCounts), xc(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB126.unsupportedFeatureCounts, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46979.unsupportedFeatureCounts);
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB126.unsupportedFeatures = Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB126.unsupportedFeatureCounts).sort(), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB126;
}
function bc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465031, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465032, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465035, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465036) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465031.unsupportedFeatures["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980 => ({
    'code': 'unsupported.' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980,
    'message': "Unsupported PDF content feature: " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46980,
    'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465033,
    'source': {
      'sourceId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465032,
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465033,
      'pageIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465034,
      'pageRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465035,
      'pageObjectRef': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465035,
      'contentStreamRefs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465036
    }
  }));
}
function xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465043, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465044) {
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465044)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465043[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981] = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465043[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46981] ?? 0) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46982;
}
function Sc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465047) {
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465047).reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46983 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46984, 0);
}
function Cc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465049, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465050) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465051, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465052;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465053 = z((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465051 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465049.trailer) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465051["/Info"]);
  return N(z((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465053 ? L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465052 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465049.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465053]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465052.value) : {})["/Title"]) ?? '') || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465050 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465050.replace(/\.qdf\.json$/i, '').replace(/\.json$/i, ''));
}
function wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465059) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465059) {
    case "/Popup":
      return "popup";
    case "/Link":
      return "link";
    case "/Text":
      return 'text';
    case '/FreeText':
      return "freeText";
    case "/Line":
      return "line";
    case "/Square":
      return 'square';
    case "/Circle":
      return "circle";
    case "/Polygon":
      return "polygon";
    case '/PolyLine':
      return "polyline";
    case "/Highlight":
      return "highlight";
    case "/Underline":
      return "underline";
    case '/StrikeOut':
      return "strikeout";
    case "/Squiggly":
      return "squiggly";
    case "/Stamp":
      return "stamp";
    case "/Ink":
      return "ink";
    case "/FileAttachment":
      return 'fileAttachment';
    case "/Widget":
      return "widget";
    default:
      return "text";
  }
}
function Tc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465061, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465062 = {}) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465061) {
    case '/Tx':
      return 'text';
    case "/Ch":
      return "choice";
    case '/Sig':
      return "signature";
    case "/Btn":
      return ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465062.ischeckbox) ? "checkbox" : ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465062.isradiobutton) ? 'radio' : "button";
    default:
      return;
  }
}
function Ec(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465065) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465066 = z(Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465065) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465065[0] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465065);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465066) switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465066) {
    case "/Normal":
      return "source-over";
    case '/Multiply':
      return "multiply";
    case "/Screen":
      return 'screen';
    case '/Overlay':
      return 'overlay';
    case '/Darken':
      return "darken";
    case "/Lighten":
      return "lighten";
    case "/ColorDodge":
      return "color-dodge";
    case "/ColorBurn":
      return 'color-burn';
    case "/HardLight":
      return "hard-light";
    case '/SoftLight':
      return 'soft-light';
    case "/Difference":
      return "difference";
    case "/Exclusion":
      return "exclusion";
    case "/Hue":
      return 'hue';
    case "/Saturation":
      return "saturation";
    case "/Color":
      return "color";
    case "/Luminosity":
      return "luminosity";
    default:
      return Ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465066);
  }
}
function Dc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465069) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465070 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465069.match(/^obj:(\d+\s+\d+\s+R)$/);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465070 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465070[1];
}
function Oc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465073) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465074 = String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465073).match(/^\d+\s+(\d+)\s+R$/);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465074 ? Number(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465074[1]) : undefined;
}
function M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465077) {
  return String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465077).replace(/\s+/g, '_').replace(/[^A-Za-z0-9_]/g, '_');
}
function kc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465079) {
  if (!(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465079 != 'string' || !/^\d+\s+\d+\s+R$/["test"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465079))) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465079;
}
function Ac(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465081) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465081.startsWith('/') ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465081.slice(1) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465081;
}
function jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083 == "string") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083;
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465083.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985 : JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46985)).join('\x20');
}
function Mc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465086) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465087 = zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465085, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465086);
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465087 == 'string') return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465087;
  if (!Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465087) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465087.length === 0) return jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465085);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465088 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465087[0]);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465088 === '/DeviceRGB' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465088 === '/DeviceGray' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465088 === '/DeviceCMYK') return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465088;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465088 === "/CalRGB" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465088 === "/Lab") return "/DeviceRGB";
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465088 === "/CalGray") return "/DeviceGray";
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465088 === "/ICCBased") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986 = z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465087[1]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465086.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46986] : undefined,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987 ? B(j(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46987)['/N']) : undefined;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988 === 1) return "/DeviceGray";
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988 === 3) return '/DeviceRGB';
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46988 === 4) return '/DeviceCMYK';
  }
  return jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465087);
}
function Nc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465093) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465093) {
    case "/Image":
      return "image";
    case "/Form":
      return "form";
    case "/PS":
    case "/PostScript":
      return 'postScript';
    default:
      return "unknown";
  }
}
function Pc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465096, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465097) {
  return ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465095["/ImageMask"]) ? "imageMask" : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465097 ? "softMask" : B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465095["/SMaskInData"]) ? "sMaskInData" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465096 == "string" ? 'explicitMask' : Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465096) ? "colorKeyMask" : "none";
}
function Fc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465101) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A255 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465101 ?? [];
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A255.includes("/DCTDecode")) return 'image/jpeg';
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A255.includes("/JPXDecode")) return 'image/jp2';
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A255.includes("/JBIG2Decode")) return "image/jbig2";
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A255.includes("/CCITTFaxDecode")) return "image/tiff";
}
function N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465103) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465103.startsWith('u:') || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465103.startsWith('b:') ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465103.slice(2) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465103;
}
function P(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465106) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257 = R(zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465106)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989 => B(zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46989, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465106)));
  if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257.length < 4 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46990 === undefined)) return;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A258 = [Math.min(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257[2]), Math.min(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257[3]), Math.max(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257[2]), Math.max(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A257[3])];
  return Ic(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A258) ? undefined : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A258;
}
function Ic(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465109) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D299 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465109[2] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465109[0],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D300 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465109[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465109[1];
  return Math.max(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465109.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991 => Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46991))) >= 32768 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D299 >= 32768 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D300 >= 32768;
}
function Lc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465111) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A261 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465111).map(B);
  if (!(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A261.length < 6 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A261.slice(0, 6).some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46992 === undefined))) return [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A261[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A261[1], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A261[2], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A261[3], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A261[4], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A261[5]];
}
function F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465113, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465114) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465115;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A263 = R(typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465113 == "string" ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465115 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465114.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465113]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465115.value : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465113).map(B).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46993 == "number");
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A263.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A263 : undefined;
}
function Rc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465119) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A265 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465119).map(ml).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46994 == "boolean");
  if (!(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A265.length < 2)) return [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A265[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A265[1]];
}
function zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465122) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465123;
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465122 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465121 != "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465121 : ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465123 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465122.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465121]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465123.value) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465121;
}
function Bc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465127, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465128) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465127 == "string") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465129;
    return L((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465129 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465128.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465127]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465129.value);
  }
  return L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465127);
}
function Vc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465133, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465134) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465136, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465137, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465138] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465133,
    [,,, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465139] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465134;
  return [S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465134[0]), S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465139 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465138), S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465137 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465135), S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465138 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465136)];
}
function Hc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465147, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465148, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465149) {
  return [S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465147 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465149[0]), S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465149[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465148)];
}
function Uc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465153) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465154 = B(L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465153["/BS"])['/W']),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465155 = B(R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465153["/Border"])[2]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465156 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465154 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465155;
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465156 == "number" ? S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465156) : undefined;
}
function Wc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465161) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A267 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465161).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46995 == "string");
  if (!(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A267.length < 2)) return [var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A267[0], var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A267[1]];
}
function Gc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465163) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A269 = R(L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465163['/BS'])['/D']).map(B).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46996 == 'number');
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A269.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A269.map(S) : undefined;
}
function I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465165) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A271 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465165).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46997 == "number");
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A271.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A271 : undefined;
}
function Kc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167) {
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167.length === 0)) return '#' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167.length === 1 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167[0]] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167.length >= 4 ? Zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167[3]) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465167.slice(0, 3)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998 => Qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46998)).join('');
}
function qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465171) {
  return '#' + [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465169, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465170, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465171].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999 => Qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46999)).join('');
}
function Jc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465178) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181] = Zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465175, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465176, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465177, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465178);
  return qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465180, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465181);
}
function Yc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465191) {
  return '#' + [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465189, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465190, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465191].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000 => Xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461000).toString(16).padStart(2, '0')).join('');
}
function Xc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465195) {
  return Math.max(0, Math.min(255, Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465195)));
}
function Zc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465197, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465198, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465200) {
  return [(1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465197) * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465200), (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465198) * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465200), (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465199) * (1 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465200)];
}
function Qc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465205) {
  return Math.round(Math.max(0, Math.min(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465205)) * 255).toString(16).padStart(2, '0');
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F5(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207 == "number" ? String(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465207) : undefined;
}
function el(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128 = {};
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209.color !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.color = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209.color), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209.width !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.width = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209.width), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209.opacity !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.opacity = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209.opacity), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209.dash !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.dash = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209.dash), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209.dashPhase !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128.dashPhase = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465209.dashPhase), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB128 : undefined;
}
function tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465211) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130 = {};
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465211.color !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130.color = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465211.color), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465211.opacity !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130.opacity = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465211.opacity), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB130 : undefined;
}
function nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213 != null) {
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213 == "string") return N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213);
    if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 => nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382) ?? null);
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213 == "object") {
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = {};
      for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213)) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46135] = nl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46136) ?? null;
      return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4;
    }
    return pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465213);
  }
}
function rl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465215) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A273 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465215).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001 => Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001[1] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001[0] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461001).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002 => N(z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461002) ?? '')).filter(Boolean);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A273.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A273 : undefined;
}
function il(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465218) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465217 == "number") return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465217 & var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465218) !== 0;
}
function al(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465221) {
  return Array.from(new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465221));
}
function ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465223) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465223 == 'string' ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465223] : R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465223).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461003 == "string");
}
function sl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465226) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225 == "string") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004 = ol((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465226.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465227.value);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004.length > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461004 : [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225];
  }
  return ol(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465225);
}
function cl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465231) {
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465231 == 'string') return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465231];
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A275 = R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465231).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461005 == "string");
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A275.length > 0 ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A275 : undefined;
}
function ll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465234 = L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465233);
  if (Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465234).length !== 0) return {
    'data': z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465234.data),
    'dict': L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465234.dict)
  };
}
function ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465237) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465237) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465238 = Reflect.get(globalThis, 'Buffer'),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465239 = Reflect.get(globalThis, "atob");
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465238) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465238.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465237, "base64").toString("latin1");
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465239) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465239(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465237);
}
function dl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465243) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465243) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465244 = Reflect.get(globalThis, "Buffer"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465245 = Reflect.get(globalThis, "atob");
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465244) return Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465244.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465243, 'base64'));
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465245) return Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465245(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465243), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461006.charCodeAt(0) & 255);
}
function fl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465249) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465249)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008 !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008 !== '' && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461007] = pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461008));
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB132;
}
function pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251 === null || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251 == "string" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251 == 'number' || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251 == "boolean") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251;
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251.map(pl);
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251 == "object") {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = {};
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465251)) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383] = pl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384);
    return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10;
  }
  return null;
}
function L(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465253) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465253 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465253 == "object" && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465253) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465253 : {};
}
function R(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465255) {
  return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465255) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465255 : [];
}
function z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257 == "string" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465257 : undefined;
}
function ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465259) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465259 == 'boolean' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465259 : undefined;
}
function B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465261) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465261 == 'number' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465261 : undefined;
}
export { uo as convertQpdfJsonToPdfDocument };
