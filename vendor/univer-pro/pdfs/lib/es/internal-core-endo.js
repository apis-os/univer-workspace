import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { S } from "./pdfs-pt-to-emu.js";
import { zu } from "./pdfs-pdf-editor-divider-object.js";
import { ap } from "./pdfs-pdf-editor-edit-state-runtime-index.js";
import { Dm } from "./pdfs-pdf-editor-text-story-patch.js";
import { Em } from "./pdfs-clone-pdf-editor-text-story.js";
import { Bf } from "./pdfs-pdf-editor-managed-image-resource.js";
import { op } from "./pdfs-pdf-editor-mutation-log-runtime-index.js";
import { Ke } from "./pdfs-pdf-document-runtime-index.js";
import { Om } from "./pdfs-pdf-editor-text-block-patch.js";
import { km } from "./pdfs-pdf-editor-text-story-run-edit.js";
import { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491 } from "./pdfs-pdf-page-block-error.js";
import { Sb } from "./pdfs-plugin.js";
const hn = new Set("q.Q.cm.w.J.j.M.d.ri.i.gs.CS.cs.SC.SCN.sc.scn.g.G.rg.RG.k.K.m.l.c.v.y.h.re.S.s.f.F.f*.B.B*.b.b*.n.W.W*.BT.ET.Tf.Td.TD.Tm.T*.Tj.TJ.'.\".Tc.Tw.Tz.TL.Tr.Ts.d0.d1.sh.Do.BI.ID.EI.MP.DP.BMC.BDC.EMC.BX.EX"['split']('.')),
  gn = {
    'resourceName': "/DeviceGray",
    'kind': "DeviceGray",
    'channels': 1
  },
  var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB320 = {
    'resourceName': "/DeviceRGB",
    'kind': "DeviceRGB",
    'channels': 3
  },
  vn = {
    'resourceName': "/DeviceCMYK",
    'kind': "DeviceCMYK",
    'channels': 4
  },
  yn = [{
    'c': 0,
    'm': 0,
    'y': 0,
    'rgb': [255, 255, 255]
  }, {
    'c': 1,
    'm': 0,
    'y': 0,
    'rgb': [0, 174, 239]
  }, {
    'c': 0,
    'm': 1,
    'y': 0,
    'rgb': [236, 0, 140]
  }, {
    'c': 0,
    'm': 0,
    'y': 1,
    'rgb': [255, 242, 0]
  }, {
    'c': 1,
    'm': 1,
    'y': 0,
    'rgb': [46, 49, 146]
  }, {
    'c': 1,
    'm': 0,
    'y': 1,
    'rgb': [0, 166, 81]
  }, {
    'c': 0,
    'm': 1,
    'y': 1,
    'rgb': [238, 29, 35]
  }, {
    'c': 1,
    'm': 1,
    'y': 1,
    'rgb': [35, 31, 32]
  }];
function qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A95 = [],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 = 0;
  for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909.length && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 = nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157), !(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909.length));) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240 === '[') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685 = Qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 + 1);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A95.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685.value), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4685.index;
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240 === '(') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686 = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 + 1);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A95.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.value), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4686.index;
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240 === '/') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687 = tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A95.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.value), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4687.index;
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240 === '<' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 + 1] !== '<') {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909.indexOf('>', var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 + 1),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 === -1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 + 1) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 + 1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A95.push(lr(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A2)), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 === -1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909.length : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D9 + 1;
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46240 === '<' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 + 1] === '<') {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909.indexOf('>>', var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 + 2);
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 === -1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909.length : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D10 + 2;
      continue;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241 = er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.value === 'BI') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688 = Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.index);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688) {
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A95.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.value), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4688.index;
        continue;
      }
    }
    if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A95.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.value), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.index, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46241.value === 'ID') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 = ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462909, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689 !== undefined && (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A95.push('EI'), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D157 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4689);
    }
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A95;
}
function Jn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462912) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56 = {},
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462912;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911.length;) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913 = nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911.length) return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242 = er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242.value === 'ID') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690 = Xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46242.index),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 = ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 === undefined ? undefined : {
        'value': {
          'kind': 'inlineImage',
          'dictionary': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56,
          'data': Zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4690, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691))
        },
        'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4691 + 2
      };
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913] !== '/') return;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243 = tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244 = Yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.index);
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244) return;
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB56[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46243.value] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.value, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462913 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46244.index;
  }
}
function Yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462918) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 = nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462918);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917.length) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462920 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462920 === '[') return Qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 + 1);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462920 === '(') return fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 + 1);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462920 === '/') return tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462920 === '<' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 + 1] !== '<') {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917.indexOf('>', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 + 1);
    return {
      'value': lr(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72 === -1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 + 1) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 + 1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72)),
      'index': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72 === -1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917.length : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D72 + 1
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462920 === '<' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 + 1] === '<') {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D73 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917.indexOf('>>', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919 + 2);
    return {
      'value': '',
      'index': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D73 === -1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917.length : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D73 + 2
    };
  }
  return er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462919);
}
function Xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462927 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462925[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462927 === '\x0d' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462925[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926 + 1] === '\x0a' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926 + 2 : sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462927) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926 + 1 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462926;
}
function Zn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462931) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462931.endsWith('\x0d\x0a') ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462931.slice(0, -2) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462931.endsWith('\x0a') || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462931.endsWith('\x0d') || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462931.endsWith('\x20') ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462931.slice(0, -1) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462931;
}
function Qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462934) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A97 = [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462934;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933.length && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 = nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935), !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 >= var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933.length));) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935] === ']') return {
      'value': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A97,
      'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 + 1
    };
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935] === '[') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692 = Qn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 + 1);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A97.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.value), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4692.index;
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935] === '(') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693 = fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 + 1);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A97.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.value), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4693.index;
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935] === '/') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694 = tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A97.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.value), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4694.index;
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935] === '<' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 + 1] !== '<') {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933.indexOf('>', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 + 1),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 === -1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 + 1) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 + 1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11);
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A97.push(lr(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A3)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 === -1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933.length : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D11 + 1;
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935] === '<' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 + 1] === '<') {
      let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933.indexOf('>>', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 + 2);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 === -1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933.length : var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D12 + 2;
      continue;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245 = er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462933, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935);
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A97.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.value), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46245.index;
  }
  return {
    'value': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A97,
    'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462935
  };
}
function fn_L1_core_endo_routine_pure_ON_heap_nothrow_sig8CF1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462940) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB58 = '',
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D159 = 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462940;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462939.length;) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462939[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941];
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 === '\x5c') {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462939[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941 + 1],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696 = cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462939.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941 + 1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941 + 4));
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB58 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.value, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4696.length + 1;
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 === '(') {
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D159 += 1, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB58 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941 += 1;
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246 === ')') {
      if (--var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D159, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D159 === 0) return {
        'value': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB58,
        'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941 + 1
      };
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB58 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941 += 1;
      continue;
    }
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB58 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46246, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941 += 1;
  }
  return {
    'value': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB58,
    'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462941
  };
}
function er(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462945, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462946) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462947 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462946;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462947 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462945.length && !rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462945[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462947]);) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462947 += 1;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462947 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462946) return {
    'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462945[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462946] ?? '',
    'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462946 + 1
  };
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A99 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462945.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462946, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462947),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D161 = Number(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A99);
  return {
    'value': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A99 !== '' && Number.isFinite(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D161) ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D161 : var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A99,
    'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462947
  };
}
function tr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462951, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462952) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB60 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462952 + 1;
  for (; var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB60 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462951.length && !rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462951[var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB60]);) var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB60 += 1;
  return {
    'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462951.slice(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462952, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB60),
    'index': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB60
  };
}
function nr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462956) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462957 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462956;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462957 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462955.length;) {
    if (/\s/["test"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462955[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462957])) {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462957 += 1;
      continue;
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462955[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462957] === '%') {
      for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462957 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462955.length && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462955[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462957] !== '\x0a' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462955[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462957] !== '\x0d';) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462957 += 1;
      continue;
    }
    break;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462957;
}
function rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462961) {
  return /\s/["test"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462961) || ['[', ']', '(', ')', '<', '>', '{', '}', '/', '%'].includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462961);
}
function ir(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462963, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462964) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462965 = ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462963, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462964);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462965 === undefined ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462965 + 2;
}
function ar(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462971 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462970;
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462971 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969.length - 1;) {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462971] === 'E' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462971 + 1] === 'I' && or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462971)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462971;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462971 += 1;
  }
}
function or(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462976) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462977 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462975[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462976 - 1],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462978 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462975[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462976 + 2];
  return sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462977) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462978 === undefined || rr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462978));
}
function sr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462983) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462983 !== undefined && /\s/['test'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462983);
}
function cr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462985, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462986) {
  if (/^[0-7]{1,3}/["test"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462986)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462987;
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462987 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462986.match(/^[0-7]{1,3}/)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462987[0]) ?? '';
    return {
      'value': String.fromCharCode(Number.parseInt(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33, 8)),
      'length': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB33.length
    };
  }
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462985) {
    case 'n':
      return {
        'value': '\x0a',
        'length': 1
      };
    case 'r':
      return {
        'value': '\x0d',
        'length': 1
      };
    case 't':
      return {
        'value': '\x09',
        'length': 1
      };
    case 'b':
      return {
        'value': '\x08',
        'length': 1
      };
    case 'f':
      return {
        'value': '\x0c',
        'length': 1
      };
    case '(':
    case ')':
    case '\x5c':
      return {
        'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462985,
        'length': 1
      };
    case '\x0d':
    case '\x0a':
      return {
        'value': '',
        'length': 1
      };
    default:
      return {
        'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462985 ?? '',
        'length': 1
      };
  }
}
function lr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462991) {
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462991.replace(/\s+/g, '');
  if (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62 === '88' || var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62 === '0e') return '•';
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB63 = '';
  for (let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74 = 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74 < var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62.length; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74 += 2) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247 = Number.parseInt(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB62.slice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D74 + 2).padEnd(2, '0'), 16);
    Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247) && (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB63 += String.fromCharCode(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46247));
  }
  return var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB63;
}
function wr(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463077) {
  return {
    'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463077.stroke,
    'width': S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463077.lineWidth),
    'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463077.strokeAlpha,
    'dash': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463077.dash['length'] > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463077.dash["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746 => S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46746)) : undefined,
    'dashPhase': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463077.dash["length"] > 0 ? S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463077.dashPhase) : undefined,
    'lineCap': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463077.lineCap,
    'lineJoin': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463077.lineJoin,
    'miterLimit': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463077.miterLimit
  };
}
function Ur(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463311) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463311.fontSize * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463311.textScale;
}
function w(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463326) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463325[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463326];
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327 == 'number' ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463327 : undefined;
}
function da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463783) {
  '@babel/helpers - typeof';

  return da = typeof Symbol == 'function' && typeof Symbol.iterator == "symbol" ? function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791) {
    return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46791;
  } : function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793 && typeof Symbol == "function" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793.constructor === Symbol && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793 !== Symbol.prototype ? "symbol" : typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46793;
  }, da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463783);
}
function fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463786) {
  if (da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463785) != "object" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463785) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463785;
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463787 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463785[Symbol.toPrimitive];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463787 !== undefined) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463788 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463787.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463786 || "default");
    if (da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463788) != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463788;
    throw TypeError('@@toPrimitive\x20must\x20return\x20a\x20primitive\x20value.');
  }
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463786 === 'string' ? String : Number)(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463785);
}
function pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463793) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463794 = fa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463793, 'string');
  return da(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463794) == "symbol" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463794 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463794 + '';
}
function k(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463797, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463798, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463799) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463798 = pa(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463798)) in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463797 ? Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463797, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463798, {
    'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463799,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463797[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463798] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463799, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463797;
}
const hl = ['fonts', 'images', "formXObjects", 'colorProfiles', "patterns", 'shadings', "attachments", "streams"];
function bl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465326) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929930 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465326.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461044 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461044.id)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327 = Ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465326),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929931 = new Set(),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929932 = new Set(),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929933 = new Set();
  return Tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465326, {
    'pageIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929930,
    'objectIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327,
    'displayListIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929931,
    'assetIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929932,
    'textStoryIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929933
  }), xl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325, {
    'pageIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929930,
    'objectIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327,
    'displayListIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929931,
    'assetIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929932,
    'textStoryIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929933
  }), Sl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325, {
    'pageIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929930,
    'objectIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327,
    'displayListIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929931,
    'assetIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929932,
    'textStoryIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929933
  }), Cl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325, {
    'pageIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929930,
    'objectIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327,
    'displayListIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929931,
    'assetIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929932,
    'textStoryIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929933
  }), wl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465325, {
    'pageIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929930,
    'objectIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327,
    'displayListIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929931,
    'assetIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929932,
    'textStoryIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929933
  }), {
    'pageIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929930,
    'objectIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465327,
    'displayListIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929931,
    'assetIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929932,
    'textStoryIds': var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929933
  };
}
function xl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465331, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465332) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A24 = true;
  for (; var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A24;) {
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A24 = false;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137 of Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465332.objectIds)) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465331.objects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46137];
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A24 = Tl([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465332) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A24);
    }
  }
}
function Sl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465336) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A26 = true;
  for (; var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A26;) {
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A26 = false;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465335.displayLists)) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465336.pageIds["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.pageId) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465336.displayListIds["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.id)) && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A26 = Ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465336.displayListIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138.id) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A26, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A26 = Tl([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46138], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465336) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A26);
  }
}
function Cl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465339, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465340) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A28 = true;
  for (; var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A28;) {
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A28 = false;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465339.textStories)) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465340.textStoryIds["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139.id) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139.objectIds['some'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465340.objectIds["has"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652))) && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A28 = Ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465340.textStoryIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139.id) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A28, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A28 = Tl([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46139], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465340) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A28);
  }
}
function wl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A30 = true;
  for (; var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A30;) {
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A30 = false;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140 of hl) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465343.assets[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46140];
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 of Array.from(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344.assetIds)) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620];
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 && (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A30 = Tl([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465344) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A30);
      }
    }
  }
}
function Tl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348) {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A32 = false;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465347.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045 => {
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A32 = El(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465348) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A32;
  }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A32;
}
function El(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465353 = '') {
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34 = false;
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047 => {
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34 = El(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465353) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34;
  }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351 == "object") {
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351)) var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34 = El(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385) || var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34;
    return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A34;
  }
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351 == 'string' ? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465353) ? Ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352.pageIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351) : eu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465353) ? Ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352.objectIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351) : tu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465353) ? Ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352.displayListIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351) : nu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465353) ? Ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352.textStoryIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351) : ru(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465353) ? Ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465352.assetIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465351) : false : false;
}
function Ml(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465385, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465386) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465385.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465386) ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465385.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465386), true);
}
function Ul(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465467) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929938 = new Set();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465467.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461091.layers["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401 => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401.objectIds['forEach'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929938.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46145));
    });
  }), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929938;
}
function Yl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465489) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465489.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461096) => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461095,
    'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461096
  }));
}
function Xl(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491) {
  return JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465491));
}
function V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465503 = '') {
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097 => V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461097, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465503));
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501 == "object") {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13 = {};
    for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501)) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403] = V(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46403);
    return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB13;
  }
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501 == "string" ? Ql(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465502, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465503) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465501;
}
function Ql(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465508, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465509) {
  if (fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465509)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465510;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465510 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465508.pageIdMap) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465510.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507;
  }
  if (eu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465509)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465511;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465511 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465508.objectIdMap) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465511.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507;
  }
  if (tu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465509)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465512;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465512 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465508.displayListIdMap) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465512.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507;
  }
  if (nu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465509)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465508.textStoryIdMap) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465513.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507;
  }
  if (ru(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465509)) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465514;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465514 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465508.assetIdMap) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465514.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465507;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F6(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465523) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465523 === "pageId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465523 === "pageIds";
}
function eu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === "objectId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === "objectIds" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === "childIds" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === 'clipPathId' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === "appearanceObjectId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === "fieldObjectId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === "sourceLabelObjectIds" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === "sourceObjectIds" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === "targetObjectId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === 'fallbackObjectIds' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === "parentObjectId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === "widgetObjectId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === 'widgetObjectIds' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === "replacementObjectIds" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === "overlayObjectIds" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465525 === "rewriteObjectIds";
}
function tu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527 === "displayListId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527 === "displayListIds" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527.endsWith("DisplayListId") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465527.endsWith("DisplayListIds");
}
function nu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465529) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465529 === "textStoryId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465529 === "textStoryIds" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465529 === 'targetStoryId' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465529 === "contentStoryId";
}
function ru(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465531) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465531 === "assetId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465531 === "assetIds" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465531 === "fontId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465531 === "fontIds" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465531 === 'thumbnailAssetId' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465531 === "fontAssetId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465531 === 'profileAssetId' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465531 === "streamAssetId" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465531.endsWith("AssetId") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465531.endsWith('AssetIds');
}
function Bu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465705, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465706 = zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465705)) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465706 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465705.type !== "path") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465705;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D323 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465705.bbox[2] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465705.bbox[0]),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D324 = Math.abs(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465705.bbox[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465705.bbox[1]) / 2;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465705,
    'commands': [{
      'type': 'moveTo',
      'point': [0, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D324]
    }, {
      'type': 'lineTo',
      'point': [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D323, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D324]
    }]
  };
}
function Vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465709, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465710) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465709.type !== 'path' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465710.stroke === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465709 : {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465709,
    'stroke': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465710.stroke === null ? undefined : {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465710.strokeReplace ? {} : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465709.stroke),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465710.stroke
    }
  };
}
function Hu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465713, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465714) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB162 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465713,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465714
  };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465714.fontFamily !== undefined && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465714.fontId === undefined && (delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB162.fontId, delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB162.glyphs), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB162;
}
const Uu = nf();
let Wu = 0;
function G(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465717, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465718, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465719, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465720) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465718,
    'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465717.documentId,
    'reason': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465719,
    'mutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465720,
    'createdAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465717.now,
    'atomic': true,
    'baseRevision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465717.baseRevision
  };
}
function K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465750, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465751, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465752 = "user") {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465748,
    'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465747.documentId,
    'clientId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465747.clientId,
    'sequence': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465747.baseRevision + 1,
    'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465747.now,
    'kind': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465749,
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465752,
    'target': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465750,
    'payload': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465751
  };
}
function id(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465835) {
  let {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465836,
    text: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465837,
    source: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465838,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465839
  } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465835;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465839;
}
function q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465981, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465982, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465983) {
  return {
    'activePageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465981,
    'primaryAnchorId': "selection_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465982,
    'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465983,
    'anchors': [{
      'id': "selection_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465982,
      'kind': "object",
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465981,
      'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465982
    }]
  };
}
function Cd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465987, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465988) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465989, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465990;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A291 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465987.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172 => ({
    'id': "selection_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.objectId,
    'kind': "object",
    'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.pageId,
    'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461172.objectId
  }));
  return {
    'activePageId': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465989 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465987[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465989.pageId,
    'primaryAnchorId': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465990 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A291[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465990.id,
    'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465988,
    'anchors': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A291
  };
}
function Td(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466003, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466004, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466005, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466006, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466007, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466008) {
  return {
    'activePageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466003,
    'primaryAnchorId': "selection_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466004,
    'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466006,
    'focus': {
      'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466004,
      'caretOffset': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466005.end
    },
    'anchors': [{
      'id': "selection_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466004,
      'kind': "textRange",
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466003,
      'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466004,
      'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466007,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466008 ? {
        'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466008
      } : {}),
      'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466005
    }]
  };
}
function kd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466031, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466032) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466033, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466034;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466033 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466031.editState["objectPatches"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466032]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466033.pageId) ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466034 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466031.editState["overlayObjects"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466032]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466034.pageId);
}
function Rd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466119, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466120) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466121, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466122;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466123 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466121 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466119.editState['objectPatches'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466120]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466121 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466121.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466121.runs;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466123) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466123;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466124 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466122 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466119.editState['overlayObjects'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466120]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466122.object;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466124 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466124.type) === "textBox") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466124.runs;
  if ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466124 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466124.type) === "textRun") return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466124.run];
}
function zd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466131) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466131 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466131.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461178
  }))) ?? [];
}
function Bd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466133) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466133.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461179 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461180.text["length"], 0);
}
function Vd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466135, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466136) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D331 = Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466135.start, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466136));
  return {
    'start': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D331,
    'end': Math.max(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D331, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466135.end, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466136))
  };
}
function Qd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466227) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228;
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466227)) return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466225.editState['overlayTextStories'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466226]) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466227]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466228.text;
}
function J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466243, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466244, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466245) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466244 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466243.createId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466243.createId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466245) : tf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466243, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466245));
}
function Y(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466250, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466251, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466252) {
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466250 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466250[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466251]) || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466249.createId ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466249.createId(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466252) : tf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466249, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466252, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466251));
}
function tf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466257, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466258, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466259) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466260 = ++Wu,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB90 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466259 === undefined ? '' : '_' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466259 + 1);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466258 + '_' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466257.clientId ?? 'local') + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466257.now + '_' + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466257.baseRevision + 1) + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB90 + '_' + Uu + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466260;
}
function nf() {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466265, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466266;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466267 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466265 = globalThis.crypto) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466266 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466265.randomUUID) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466266.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466265);
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466267 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466267.replaceAll('-', '')) ?? Date.now().toString(36) + '_' + Math.random().toString(36).slice(2);
}
function sf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466295) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466295.anchors['flatMap'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220 => !("objectId" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220) || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220.objectId ? [] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220.kind === "object" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220.kind === 'textRange' && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220.range['start'] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220.range['end'] ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461220.objectId] : []);
}
function lf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466299) {
  return Array.from(new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466299));
}
function mf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466342, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466343, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466344) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466345 = J(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466341, undefined, "mutation"),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466346 = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466345, "addTextStory", {
      'kind': "textRun",
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466342,
      'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466343,
      'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466344.id
    }, {
      'story': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466344
    });
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466346.inverse = K(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466345 + "_inverse", "removeTextStory", {
    'kind': "textRun",
    'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466342,
    'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466343,
    'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466344.id
  }, {
    'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466344.id,
    'previousStory': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466344
  }, "undo"), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466346;
}
function Tf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466399, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466400) {
  return Array.from(new Set([...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466399 ?? []), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466400]));
}
function kf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466422) {
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466422[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466422[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466422[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466422[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466422[2] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466422[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466422[2] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466422[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466422[4] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466422[5] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[4], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466422[4] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466422[5] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466421[5]];
}
const np = new WeakMap(),
  rp = new WeakMap(),
  ip = new WeakMap();
function cm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467019, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467020, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467021) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A333 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467019.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461349 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467020);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A333.splice(Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467021, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A333.length)), 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467020), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A333;
}
function Rm(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467218) {
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467217) ? Math.max(0, Math.min(Math.trunc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467217), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467218)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467218;
}
function wh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467757) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467757.document,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467759 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467757.session,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467760 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467757.createdAt ?? Date.now(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467761 = ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467759.editState),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467762 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467761.activeSourceSuppressions,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467763 = Vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467759),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467764 = qh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467759),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467765 = ig({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758.displayLists,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467759.editState["overlayDisplayLists"]
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467761),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467766 = Ih(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467759),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467767 = Fh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758.textStories, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467759);
  return {
    ...X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758),
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467757.id ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758.id + "_edited",
    'title': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467757.title ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758.title,
    'pages': ng(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467763, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467759),
    'objects': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467764,
    'displayLists': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467765,
    'textStories': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467767,
    'assets': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467766,
    'edits': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758.edits,
      'suppressions': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758.edits["suppressions"],
        ...Object.fromEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467762.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461516 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461516.id, X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461516)]))
      },
      'replacements': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758.edits["replacements"],
        ...X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467759.editState["replacementLinks"])
      },
      'pageOperations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758.edits["pageOperations"]
    },
    'operations': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758.operations, ag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467757, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467760)],
    'metadata': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758.metadata,
      'materializedFromDocumentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467758.id,
      'materializedFromEditorSessionId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467759.id,
      'materializedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467760
    }
  };
}
function Fh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467872) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929968 = new Set([...Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467871), ...Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467872.editState['overlayTextStories']), ...Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467872.editState["textStoryPatches"])]),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB256 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533 of var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929968) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467872.editState["overlayTextStories"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467871[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494) continue;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 = Dm(Em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46494), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467872.editState["textStoryPatches"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533]);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495 && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB256[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461533] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46495);
  }
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB256;
}
function Ih(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467876) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467877 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467875.assets);
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467876.editState["managedResources"])) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496 = Bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461535, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497 = Lh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467877.images, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497) {
      if (!Rh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46497, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.asset)) throw Error("Cannot materialize managed image asset \"" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534 + "\": conflicting source asset metadata.");
      continue;
    }
    Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467877.images, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461534, {
      'configurable': true,
      'enumerable': true,
      'value': X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46496.asset),
      'writable': true
    });
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467877;
}
function Lh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467881, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467882) {
  return Object.prototype['hasOwnProperty'].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467881, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467882) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467881[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467882] : undefined;
}
function Rh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467885, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467886) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467887 = zh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467885),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467888 = zh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467886);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467887 === undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467888 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467887 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467888 : Bh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467887, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467888);
}
function zh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893 !== undefined && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893 != "function" && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893 != 'symbol') {
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893 === null || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893 == "string" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893 == "boolean") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893;
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893 == "number") return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893) ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893 === 0 ? 0 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893 : null;
    if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498 => zh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46498) ?? null);
    if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893 == "object") {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467893,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500 = Object.create(null);
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153 of Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499).sort()) {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 = zh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46499[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153]);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 !== undefined && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46153, {
          'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665,
          'enumerable': true,
          'configurable': true,
          'writable': true
        });
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46500;
    }
  }
}
function Bh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467895, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467896) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467895 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467896) return true;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467895 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467896 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467895 != "object" || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467896 != 'object') return false;
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467895) || Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467896)) return Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467895) && Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467896) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467895.length === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467896.length && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467895.every((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461537) => Bh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461536, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467896[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461537]));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467897 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467895,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467898 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467896,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A403 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467897),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A404 = Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467898);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A403.length === var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A404.length && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A403.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461538 => Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467898, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461538) && Bh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467897[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461538], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467898[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461538]));
}
function Vh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467903, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467904) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A407 = Hh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467903.pages['map'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539 => X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461539)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467904).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540 => Wh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467904.editState["pagePatches"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461540.id])).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461541 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542;
      return !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467904.editState["pagePatches"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461541.id]) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461542.deleted);
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467905 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467904.editState["pagePatches"],
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A408 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A407.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546;
      return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467905[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461545.id]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461546.orderIndex;
    });
  return Kh(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A408.length > 0 && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A408.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549 == "number" && Number.isInteger(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549 >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461549 < var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A408.length) && new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A408).size === var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A408.length ? [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A407].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467905[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461550.id].orderIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467905[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461551.id].orderIndex) : Gh(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467905));
}
function Hh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467909, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467910) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A411 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467909],
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929970 = new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A411.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461552.id));
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553 of Uh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467910)) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467910.editState['pagePatches'][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.page['id']];
    if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929970.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.page['id']) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501.deleted) continue;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55 = Math.max(0, Math.min((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46501.orderIndex) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.atIndex, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A411.length));
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A411.splice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D55, 0, X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.page)), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929970.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461553.page['id']);
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A411;
}
function Uh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467913) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A413 = Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467913.editState["pagePatches"]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461554.insertedPage).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461556) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555.revision ?? 0) - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461556.revision ?? 0) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461555.pageId["localeCompare"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461556.pageId)).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461557 => ({
      'page': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461557.insertedPage,
      'atIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461557.orderIndex ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461557.insertedPage["index"]
    })),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929972 = new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A413.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461558.page['id'])),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467914 = op(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467913.mutationLog).insertedPages["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929972.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461559.page['id']));
  return [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A413, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467914];
}
function Wh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467917, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467918) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467918 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467917,
    'size': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467918.size ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467917.size,
    'rotation': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467918.rotation ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467917.rotation,
    'pdfBoxes': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467918.cropBox ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467917.pdfBoxes,
      'cropBox': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467918.cropBox]
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467917.pdfBoxes
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467917;
}
function Gh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467921, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467922) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A415 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467921];
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467922).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560.orderIndex == 'number' && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461560.deleted).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562) => (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.revision ?? 0) - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562.revision ?? 0) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461561.pageId['localeCompare'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461562.pageId)).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563 => {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D113 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A415.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46502.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563.pageId);
    if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D113 < 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563.orderIndex === undefined) return;
    let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564] = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A415.splice(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D113, 1);
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A415.splice(Math.max(0, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461563.orderIndex, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A415.length)), 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461564);
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A415;
}
function Kh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467925) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467925.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461568) => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461567,
    'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461568
  }));
}
function qh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467927, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467928) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467929 = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467927.objects);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467928.editState["objectPatches"])) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467929[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569.objectId];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467929[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569.objectId] = Jh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461569));
  }
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461570 of Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467928.editState['overlayObjects'])) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461570.object["visible"] !== false && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467929[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461570.object['id']] = X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461570.object));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467929;
}
function Jh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467933, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467935 = Bu({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467933,
      'bbox': 'bbox' in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.bbox ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467933.bbox : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467933.bbox,
      'transform': 'transform' in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.transform : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467933.transform,
      'visible': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.visible ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467933.visible,
      'locked': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.locked ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467933.locked,
      'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.source ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467933.source,
      'exportPolicy': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.exportPolicy ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467933.exportPolicy,
      'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.revision ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467933.revision,
      'metadata': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.metadata ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467933.metadata,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.metadata
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467933.metadata
    }, zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467933)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467936 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.style ? Xh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467935,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467937 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.text ? Zh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467936, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467936,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467938 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.image ? Qh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467937, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467937,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467939 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.formField ? fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467938, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467938;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.annotation ? Yh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467939, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467934.annotation) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467939;
}
function Yh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467947, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467948) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467947.type !== 'annotation' || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467948.link) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467947;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467949 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467947,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB258 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467949.link
    };
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461571, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461572] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467948.link)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461572 === null ? delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB258[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461571] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461572 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB258[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461571] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461572);
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467949,
    'link': Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB258).length ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB258 : undefined
  };
}
function Xh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467953, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467954) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467954.style) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467953;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467953.type === "textBox") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467953;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573,
      'runs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467954.style["textStyle"] ? eg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573.runs, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467954.style["textStyle"]) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573.runs,
      'textAnchor': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467954.style["textAnchor"] === null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467954.style["textAnchor"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461573.textAnchor
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467953.type === "textRun" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467954.style["textStyle"]) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467953;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574,
      'run': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461574.run,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467954.style["textStyle"]
      }
    };
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467953.type === "table" ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467953,
    'styleId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467954.style['styleId'] === null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467954.style["styleId"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467953.styleId,
    'options': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467954.style["tableStyleOptions"] === null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467954.style["tableStyleOptions"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467953.options
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467953.type === "path" ? Vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467953, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467954.style) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467953;
}
function Zh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467957, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467958) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467957.type === "textBox") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467959, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467960, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467961;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467957;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575,
      'runs': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467959 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467958.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467959.runs) ?? tg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575.runs, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467960 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467958.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467960.text),
      'textStoryId': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467961 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467958.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467961.storyId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461575.textStoryId
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467957.type === "textRun") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467962;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467957;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576,
      'run': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576.run,
        'text': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467962 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467958.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467962.text) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461576.run["text"]
      }
    };
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467957;
}
function Qh(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467969, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467970) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467971;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467969.type !== "image" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467970.image) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467969;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467972 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467969;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467972,
    'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467970.image['assetId'] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467972.assetId,
    'crop': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467970.image["cropRect"] === null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467970.image["cropRect"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467972.crop,
    'softMaskAssetId': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467971 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467970.image["intrinsic"]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467971.softMaskAssetId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467972.softMaskAssetId
  };
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467977, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467978) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467978.formField;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467977;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467977.type === "formField") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467977;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577,
      'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979.fieldName ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577.name,
      'fieldType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979.fieldType ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577.fieldType,
      'value': 'value' in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979.value : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577.value,
      'defaultValue': "defaultValue" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979.defaultValue : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577.defaultValue,
      'choices': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979.choices ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461577.choices
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467977.type === "annotation") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467977;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.widget ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578,
      'widget': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.widget,
        'fieldObjectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979.fieldObjectId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.widget["fieldObjectId"],
        'fieldName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979.fieldName ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.widget["fieldName"],
        'fieldType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979.fieldType ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.widget["fieldType"],
        'value': 'value' in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979.value : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.widget["value"],
        'defaultValue': "defaultValue" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979.defaultValue : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.widget["defaultValue"],
        'choices': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467979.choices ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578.widget["choices"],
        'needsAppearance': true
      }
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461578;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467977;
}
function eg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467983, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467984) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467984 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467983 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467983.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467983.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461579,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467984
  })) : [{
    'text': '',
    'fontSize': 12,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467984
  }] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467983;
}
function tg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467987, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467988) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467988 === undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467987;
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467987 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467987.length)) return [{
    'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467988,
    'fontSize': 12
  }];
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467989, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467990] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467987;
  return [{
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467989,
    'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467988
  }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467990];
}
function ng(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467995, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467996) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467997 = ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467996.editState).overlaysByPage;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467995.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467997.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580.id) ?? []).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.object["visible"] !== false && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46504.addToPageLayer !== false).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505 => ({
      'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.object['id'],
      'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.layerId,
      'zIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46505.zIndex
    })).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506.zIndex - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.zIndex || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46506.objectId['localeCompare'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46507.objectId));
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581.length ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580,
      'layers': rg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461581)
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461580;
  });
}
function rg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468001, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468002) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929974 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468002.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461584.objectId)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468003 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468001.layers["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585,
      'objectIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461585.objectIds["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929974.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46508))
    })),
    var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5990 = new Map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468003.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461587) => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461586.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461587])),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D399 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468003.findIndex(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461588 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461588.type === "editable");
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468002) {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589.layerId ? var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5990.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589.layerId) ?? -1 : -1;
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 < 0 && (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D399), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 < 0 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468003 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468003, {
      'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468001.id + ":editable",
      'type': "editable",
      'name': "Editable",
      'visible': true,
      'locked': false,
      'objectIds': []
    }], var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468003.length - 1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D399 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56, var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B5990.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468003[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56].id, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56)), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468003[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D56].objectIds["push"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461589.objectId);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468003;
}
function ig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468007, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468008) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB260 = {};
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468007)) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB260[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461590] = {
    ...X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591),
    'ops': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591.ops["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468008.isSourceOperationSuppressed(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461591.id, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46509.id))
  };
  return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB260;
}
function ag(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468011, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468012) {
  return {
    'id': "materialize_snapshot_" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468011.session['id'] + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468012,
    'type': 'updatePage',
    'timestamp': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468012,
    'payload': {
      'kind': 'materializeEditedSnapshot',
      'documentId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468011.document['id'],
      'editorSessionId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468011.session['id'],
      'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468011.session["editState"].revision
    }
  };
}
function X(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468015) {
  return typeof structuredClone == "function" ? structuredClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468015) : JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468015));
}
const Dg = S(36),
  Og = S(132),
  kg = S(33),
  Ag = S(54),
  jg = S(270),
  Mg = S(135),
  Ng = S(9),
  Pg = S(72),
  Fg = S(27),
  Ig = S(4.5);
function Hg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468153, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468154, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468155, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468156) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468157, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468158, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468159, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468160] = Ug(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468153),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D415 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468159 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468157),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D416 = Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468160 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468158),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468161 = Wg(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D415),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468162 = Wg(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D416),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D417 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468154, Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D415 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468161 * 2)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D418 = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468155, Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D416 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468162 * 2)),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D419 = Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468157 + (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D415 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D417) / 2),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468163 = Gg(Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468158 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D416 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468156), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468158 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468162, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468160 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468162 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D418);
  return [var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468163, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D419 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D417, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468163 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D418];
}
function Ug(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468175) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468176 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468175.pdfBoxes["mediaBox"],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468177 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468175.pdfBoxes['cropBox'] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468176;
  return [S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468177[0] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468176[0]), S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468176[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468177[3]), S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468177[2] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468176[0]), S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468176[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468177[1])];
}
function Wg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468181) {
  return Math.min(Dg, Math.max(0, Math.floor((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468181 - 1) / 2)));
}
function Gg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468184, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468185) {
  return Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468184, Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468183, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468185));
}
function Zg(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468233, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468234, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468235) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468235 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468235.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461651 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468233.displayLists[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461651];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461652] : [];
  }) : (Ke(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468233).displayListIdsByPage["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468234) ?? []).flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468233.displayLists[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461655];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656 ? [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461656] : [];
  });
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC723(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468369, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468370, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468371) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A447 = [fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC727(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468369[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468369[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468371), fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC727(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468369[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468369[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468371), fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC727(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468369[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468369[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468371), fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC727(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468369[2], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468369[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468371)].map(([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461715, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461716]) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468370.pdfPointToPageModelPoint(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461715, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461716)),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A448 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A447.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461717[0]),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A449 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A447.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461718[1]);
  return [Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A448), Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A449), Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A448), Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A449)];
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC724(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468375, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468376, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468377) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468378 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468375.pdfBoxes["mediaBox"];
  return [S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468376 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468378[0]), S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468378[3] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468377)];
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F15(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468383) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468383.transform && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468383.matrix ? fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC726(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468383.transform, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468383.matrix) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468383.transform ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468383.matrix;
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC725(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468385) {
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468385 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468385.length !== 4 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468385.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719 => Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461719)))) return [Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468385[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468385[2]), Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468385[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468385[3]), Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468385[0], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468385[2]), Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468385[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468385[3])];
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC726(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468388) {
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468388[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468388[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468388[0] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468388[1], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468388[2] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468388[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468388[2] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468388[3], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468388[4] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468388[5] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[4], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468388[4] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468388[5] + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468387[5]];
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC727(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468391, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468392, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468393) {
  return [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468393[0] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468391 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468393[2] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468392 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468393[4], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468393[1] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468391 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468393[3] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468392 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468393[5]];
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F16(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468403, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468404) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468405, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468406;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468404 != null && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468405 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468404.contentStreamRefs) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468405.length || typeof (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468404 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468404.contentStreamIndex) != "number") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468404 ?? {};
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468407 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468403 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468406 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468403.contentStreamRefs) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468406[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468404.contentStreamIndex];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468407 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468404,
    'contentStreamRefs': [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468407]
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468404;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F17(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468413, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468414) {
  return Array.from(new Set([...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468413 ?? []), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468414]));
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F20(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427) {
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.kind) {
    case "addObject":
    case 'addAnnotation':
      return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F25(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case 'removeObject':
    case 'removeAnnotation':
      return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F26(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "addTextStory":
      return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F27(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case 'removeTextStory':
      return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F29(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "addDisplayList":
      return fn_L0_core_endo_routine_pure_O1_zalloc_throws_SyntaxError_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "removeDisplayList":
      return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F28(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case 'insertTextBlock':
      return fn_L0_core_endo_routine_pure_ON_zalloc_throws_SyntaxError_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "updateTextBlock":
      return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F30(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "removeTextBlock":
      return fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "upsertTextListDefinition":
      return fn_L0_core_endo_routine_pure_O1_zalloc_throws_SyntaxError_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "removeTextListDefinition":
      return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F32(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "updateObjectTransform":
      return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F33(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "updateObjectStyle":
      return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F34(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "updateTableGeometry":
      return rv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "updateTableCellStyle":
      return nv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "updateAnnotation":
      return Cv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.payload) ? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F35(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427) : Sv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.payload) ? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F33(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427) : fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F34(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "updateFormField":
      return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F38(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "updateTextContent":
      return tv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "replaceImage":
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.payload;
        return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F36(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, {
          'image': {
            'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46560.assetId
          }
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
      }
    case 'cropImage':
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.payload;
        return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F36(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, {
          'image': {
            'cropRect': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.cropRect,
            'sourceRect': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46561.sourceRect
          }
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
      }
    case 'reorderObject':
      return fv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "updatePageGeometry":
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.payload,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, "pagePatches", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.pageId] = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425.pagePatches[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.pageId],
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.pageId,
          'rotation': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.rotation,
          'size': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.size,
          'cropBox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46562.cropBox,
          'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.timestamp,
          'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425.revision + 1
        }, {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425,
          'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425.revision + 1,
          'pagePatches': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46563
        };
      }
    case 'removePage':
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.payload,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, 'pagePatches', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427),
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425.revision + 1;
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564.pageId] = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425.pagePatches[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564.pageId],
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564.pageId,
          'delete d': true,
          'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.timestamp,
          'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30
        }, dv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46564.orderedPageIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30), {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425,
          'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB30,
          'pagePatches': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46565
        };
      }
    case "insertPage":
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.payload,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, 'pagePatches', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427),
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425.revision + 1;
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.page['id']] = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425.pagePatches[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.page['id']],
          'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.page['id'],
          'insertedPage': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.page,
          'delete d': false,
          'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.timestamp,
          'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31
        }, dv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46566.orderedPageIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31), {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425,
          'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB31,
          'pagePatches': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46567
        };
      }
    case "reorderPage":
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.payload,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, 'pagePatches', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427),
          var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB32 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425.revision + 1;
        return dv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46568.orderedPageIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB32), {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425,
          'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB32,
          'pagePatches': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46569
        };
      }
    case 'setSourceSuppression':
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.payload,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, "sourceSuppressions", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.suppression['id']] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46570.suppression, {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425,
          'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425.revision + 1,
          'sourceSuppressions': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46571
        };
      }
    case 'setReplacementLink':
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426.payload,
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, "replacementLinks", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
        return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572.link['id']] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46572.link, {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425,
          'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425.revision + 1,
          'replacementLinks': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46573
        };
      }
    case 'registerResource':
      return fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    case "unregisterResource":
      return fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468426, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468427);
    default:
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468425;
  }
}
function fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468471, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468472, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468473 = false, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468474 = true) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468475 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468471,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB272 = {
      'records': new Map()
    };
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468472) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574 = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F20(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468475, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB272);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468473 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468475 && (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468474 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.kind !== "registerResource" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461723.kind !== "unregisterResource")) return;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468475 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46574;
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468475;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_throws_SyntaxError_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468481) {
  return JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468481));
}
function fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468483, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468484, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468485) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468486;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468487 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468484.payload;
  if (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468486 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468484.target) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468486.kind) !== "asset") throw TypeError("Managed resource registration requires an asset target.");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468488 = Bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468487.resource, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468484.target["assetId"]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468489 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468488.asset['id'],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468490 = Object.prototype['hasOwnProperty'].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468483.managedResources, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468489),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468491 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468483.managedResources[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468489];
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468490) {
    if (fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B80(Bf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468491, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468489), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468488)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468483;
    throw Error("Managed resource conflict for asset " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468489 + '.');
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468492 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468483, "managedResources", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468485);
  return Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468492, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468489, {
    'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468488,
    'enumerable': true,
    'configurable': true,
    'writable': true
  }), {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468483,
    'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468483.revision + 1,
    'managedResources': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468492
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_throws_TypeError_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468504, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468505) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468506;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468507 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468504.payload;
  if (typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468507.assetId != "string" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468507.assetId['length'] === 0) throw TypeError("Managed resource unregistration requires a non-empty asset id payload.");
  if (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468506 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468504.target) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468506.kind) !== 'asset' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468504.target["assetId"] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468507.assetId) throw Error("Managed resource unregistration target asset id must match payload asset id " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468507.assetId + '.');
  if (!Object.prototype["hasOwnProperty"].call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468503.managedResources, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468507.assetId) || fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F24(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468503, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468507.assetId)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468503;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468508 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468503, "managedResources", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468505);
  return delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468508[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468507.assetId], {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468503,
    'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468503.revision + 1,
    'managedResources': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468508
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F24(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468515, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468516) {
  return Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468515.overlayObjects).some(({
    object: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461724
  }) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461724.type === "image" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461724.assetId === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468516) ? true : Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468515.objectPatches).some(({
    image: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725
  }) => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725.assetId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468516 || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461725.intrinsic) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461726.assetId) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468516;
  });
}
function fn_L0_core_pred_routine_pure_O1_zalloc_nothrow_sig3B80(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468519, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468520) {
  return JSON.stringify(fn_L2_core_endo_routine_pure_ONlogN_heap_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468519)) === JSON.stringify(fn_L2_core_endo_routine_pure_ONlogN_heap_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468520));
}
function fn_L2_core_endo_routine_pure_ONlogN_heap_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468523) {
  if (Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468523)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468523.map(fn_L2_core_endo_routine_pure_ONlogN_heap_nothrow_sigD23F);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468523 || typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468523 != "object") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468523;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468524 = Object.create(null);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729 of Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468523).sort()) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46575 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468523[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729];
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46575 !== undefined && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468524, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461729, {
      'value': fn_L2_core_endo_routine_pure_ONlogN_heap_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46575),
      'enumerable': true,
      'configurable': true,
      'writable': true
    });
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468524;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F25(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468527, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468528, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468529) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468530 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468528.payload,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468531 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468530.pageId ?? wv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468528);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468531) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468527;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468532 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468530.zIndex ?? Tv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468527, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468531, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468529),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB124 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468527.revision + 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468533 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468527, "overlayObjects", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468529),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468534 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468527.objectPatches[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468530.object['id']] ? Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468527, "objectPatches", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468529) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468527.objectPatches;
  return delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468534[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468530.object['id']], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468533[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468530.object['id']] = {
    'object': Dv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468530.object),
    'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468531,
    'addToPageLayer': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468530.addToPageLayer,
    'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468530.layerId,
    'zIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468532,
    'createdAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468528.timestamp,
    'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB124,
    'sourceSuppressionId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468530.sourceSuppressionId
  }, Ev(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468529, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468527, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468531, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468532), {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468527,
    'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB124,
    'overlayObjects': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468533,
    'objectPatches': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468534
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F26(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468544, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468545) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468546 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468544.payload,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468547 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468546.objectId,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB126 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468543.revision + 1;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468543.overlayObjects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468547]) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468543, "overlayObjects", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468545);
    return delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468547], {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468543,
      'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB126,
      'overlayObjects': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461730
    };
  }
  return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F36(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468543, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468547, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468546.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468544, {
    'visible': false
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468545);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F27(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468553, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468554, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468555) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468556 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468554.payload,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468557 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468553, 'textStoryPatches', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468555),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468558 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468553, "overlayTextStories", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468555);
  return delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468557[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468556.story['id']], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468558[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468556.story['id']] = Em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468556.story), {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468553,
    'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468553.revision + 1,
    'overlayTextStories': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468558,
    'textStoryPatches': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468557
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_throws_SyntaxError_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468565, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468566, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468567) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468568 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468566.payload,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468569 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468565, "overlayDisplayLists", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468567);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468569[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468568.displayList['id']] = JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468568.displayList)), {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468565,
    'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468565.revision + 1,
    'overlayDisplayLists': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468569
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F28(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468575, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468576, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468577) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468578 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468576.payload;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468575.overlayDisplayLists[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468578.displayListId]) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468575;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468579 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468575, 'overlayDisplayLists', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468577);
  return delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468579[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468578.displayListId], {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468575,
    'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468575.revision + 1,
    'overlayDisplayLists': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468579
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F29(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468586, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468587) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468588 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468586.payload;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468585.overlayTextStories[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468588.storyId]) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468585, "overlayTextStories", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468587);
    return delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468588.storyId], {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468585,
      'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468585.revision + 1,
      'overlayTextStories': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461731
    };
  }
  return lv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468585, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468588.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461732,
    'removed': true
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468587);
}
function fn_L0_core_endo_routine_pure_ON_zalloc_throws_SyntaxError_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468594, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468595) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468594.payload,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468597 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468593.overlayTextStories[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.storyId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468597) return lv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734;
    let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733.blockPatches) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461734[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.block['id']]) === null,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.runs["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46576.id);
    return var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A6 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733,
      'insertedBlocks': fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F31(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733.insertedBlocks, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.block['id']),
      'blockPatches': fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733.blockPatches, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.block['id']]),
      'runPatches': fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733.runPatches, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735)
    } : {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733,
      'insertedBlocks': [...(fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F31(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733.insertedBlocks, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.block['id']) ?? []), {
        'index': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.index,
        'block': JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.block)),
        'runs': JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.runs))
      }],
      'blockPatches': fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733.blockPatches, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.block['id']]),
      'runPatches': fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461733.runPatches, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461735)
    };
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468595);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468598 = Em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468597),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468599 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468598.blocks['findIndex'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461739.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.block['id']);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468599 >= 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468598.blocks['splice'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468599, 1);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468600 = uv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.index, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468598.blocks["length"]);
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468598.blocks["splice"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468600, 0, JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.block)));
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468596.runs) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468598.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740.id] = JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461740));
  return cv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468593, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468598, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468595);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F30(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468610, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468611) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468612 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468610.payload,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468613 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468609.overlayTextStories[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468612.storyId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468613) return lv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468612.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741,
      'blockPatches': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741.blockPatches,
        [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468612.blockId]: {
          ...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461741.blockPatches) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468612.blockId]) ?? {}),
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468612.patch
        }
      }
    };
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468611);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468614 = Em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468613),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468615 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468614.blocks['findIndex'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461745 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461745.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468612.blockId);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468615 < 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468609 : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468614.blocks[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468615] = Om(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468614.blocks[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468615], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468612.patch), cv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468609, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468614, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468611));
}
function fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sigD23F(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468624, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468625) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468626 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468624.payload,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468627 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468623.overlayTextStories[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468626.storyId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468627) return lv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468626.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.insertedBlocks) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461747.find(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46577.block['id'] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468626.blockId),
      var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A59 = ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748.runs) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468626.previousRuns).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46578.id);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748 ? {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746,
      'insertedBlocks': fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F31(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.insertedBlocks, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468626.blockId),
      'blockPatches': fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.blockPatches, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468626.blockId]),
      'runPatches': fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.runPatches, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A59),
      'runTextEdits': fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.runTextEdits, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A59)
    } : {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746,
      'blockPatches': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.blockPatches,
        [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468626.blockId]: null
      },
      'runPatches': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461746.runPatches,
        ...Object.fromEntries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468626.previousRuns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579 => [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46579.id, null]))
      }
    };
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468625);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468628 = Em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468627);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468628.blocks['some'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461752.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468626.blockId)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468623;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468628.blocks = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468628.blocks["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461753.id !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468626.blockId);
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468626.previousRuns) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468628.blocks["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46580.runIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754.id)) || delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468628.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461754.id];
  return cv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468623, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468628, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468625);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F31(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468636) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A453 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468635 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468635.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461755.block['id'] !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468636);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A453 != null && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A453.length ? var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A453 : undefined;
}
function fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468640) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468639) return;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB274 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468639
  };
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468640) delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB274[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461756];
  return Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB274).length ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB274 : undefined;
}
function fn_L0_core_endo_routine_pure_O1_zalloc_throws_SyntaxError_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468644, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468645) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468646 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468644.payload,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468647 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468643.overlayTextStories[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468646.storyId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468647) return lv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468646.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757,
    'listPatches': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461757.listPatches,
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468646.definition['id']]: JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468646.definition))
    }
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468645);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468648 = Em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468647);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468648.lists = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468648.lists,
    [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468646.definition['id']]: JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468646.definition))
  }, cv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468643, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468648, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468645);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F32(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468656, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468657) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468658 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468656.payload,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468659 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468655.overlayTextStories[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468658.storyId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468659) return lv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468658.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758 => ({
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758,
    'listPatches': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461758.listPatches,
      [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468658.listId]: null
    }
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468657);
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468660 = Em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468659),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB276 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468660.lists
    };
  return delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB276[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468658.listId], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468660.lists = Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB276).length > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB276 : undefined, cv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468660, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468657);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F33(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468668, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468669) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468670 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468668.payload;
  return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F36(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468667, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468670.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468670.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468668, {
    'bbox': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468670.bbox,
    'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468670.transform
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468669);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F34(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468676, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468677) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468676.payload,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB278 = {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.fill === undefined ? {} : {
        'fill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.fill
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.stroke === undefined ? {} : {
        'stroke': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.stroke
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.opacity === undefined ? {} : {
        'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.opacity
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.textStyle === undefined ? {} : {
        'textStyle': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.textStyle
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.textAnchor === undefined ? {} : {
        'textAnchor': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.textAnchor
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.styleId === undefined ? {} : {
        'styleId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.styleId
      }),
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.tableStyleOptions === undefined ? {} : {
        'tableStyleOptions': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.tableStyleOptions
      })
    };
  return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F36(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468675, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468676, {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.visible === undefined ? {} : {
      'visible': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.visible
    }),
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.locked === undefined ? {} : {
      'locked': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468678.locked
    }),
    ...(Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB278).length > 0 ? {
      'style': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB278
    } : {})
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468677);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F35(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468684, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468685) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468686 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468684.payload;
  return fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F36(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468683, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468686.objectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468686.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468684, {
    'annotation': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468686.annotation
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468685);
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F36(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468691, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468692, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468693, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468694, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468695, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468696) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468691.objectPatches[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468692],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468698 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468691.overlayObjects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468692],
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB128 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468691.revision + 1,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB280 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468695,
      'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468692,
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468693 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697.pageId) ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468698 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468698.pageId),
      'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468694.timestamp,
      'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB128,
      'style': fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697.style, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468695.style),
      'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468695.text ? {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697.text),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468695.text
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697.text,
      'image': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468695.image ? {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697.image),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468695.image
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697.image,
      'formField': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468695.formField ? {
        ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697.formField),
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468695.formField
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697.formField,
      'annotation': fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468697.annotation, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468695.annotation)
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468699 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468698 ? Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468691, "overlayObjects", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468696) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468691.overlayObjects;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468698 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468699[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468692] = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468698,
    'object': pv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468698.object, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB280),
    'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB128
  });
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468700 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468691, "objectPatches", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468696);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468700[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468692] = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB280, {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468691,
    'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB128,
    'overlayObjects': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468699,
    'objectPatches': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468700
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F37(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468711, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468712) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468712 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468711,
    'link': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468712.link ? {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468711 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468711.link),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468712.link
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468711 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468711.link
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468711;
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468715, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468716) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468716) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468715;
  let {
      stroke: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468717,
      textStyle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468718,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468719
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468716,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB282 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468715,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468719,
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468718 === undefined ? {} : {
        'textStyle': {
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468715 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468715.textStyle),
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468718
        }
      })
    };
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468717 === undefined) return var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB282;
  let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A54 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468717 === null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468715 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468715.strokeReplace) === true || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468715 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468715.stroke) === null;
  return {
    ...var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB282,
    'stroke': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468717 === null ? null : {
      ...((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468715 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468715.stroke) ?? {}),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468717
    },
    ...(var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A54 ? {
      'strokeReplace': true
    } : {})
  };
}
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F38(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468725, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468726, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468727) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468726.payload,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB130 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468725.revision + 1,
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB284 = {
      'fieldObjectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.fieldObjectId,
      'widgetObjectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.widgetObjectId,
      'fieldName': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.fieldName,
      'fieldType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.fieldType,
      'value': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.value,
      'defaultValue': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.defaultValue,
      'choices': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.choices
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468729 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468725, "objectPatches", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468727);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468729[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.fieldObjectId] = ev(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468725.objectPatches[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.fieldObjectId], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.fieldObjectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468726, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB130, {
    'formField': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB284
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.widgetObjectId && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468729[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.widgetObjectId] = ev(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468725.objectPatches[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.widgetObjectId], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.widgetObjectId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468728.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468726, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB130, {
    'formField': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB284
  })), {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468725,
    'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB130,
    'objectPatches': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468729
  };
}
function ev(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468736, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468737, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468738, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468739, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468740) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468740,
    'objectId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468736,
    'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468737 ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735.pageId),
    'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468738.timestamp,
    'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468739,
    'style': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468740.style ? {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735.style),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468740.style
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735.style,
    'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468740.text ? {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735.text),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468740.text
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735.text,
    'image': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468740.image ? {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735.image),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468740.image
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735.image,
    'formField': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468740.formField ? {
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735.formField),
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468740.formField
    } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468735.formField
  };
}
function tv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468749) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468748.payload;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.storyId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.runId) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468751, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468752;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747.overlayTextStories[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.storyId];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759) return lv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.storyId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581 => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582;
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581,
        'runTextEdits': {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581.runTextEdits,
          [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.runId]: [...(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46581.runTextEdits) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46582[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.runId]) ?? []), {
            'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.range,
            'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.text,
            'runs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.runs
          }]
        }
      };
    }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468749);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461760 = Em(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461759);
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.blockId && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468751 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.replacedRunIds) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468751.length && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468752 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.runs) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468752.length) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461760.blocks["find"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46156.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.blockId),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.runs["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157 => typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46157.id == 'string');
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.length !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.runs["length"]) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747;
      let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.replacedRunIds),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.runIds["findIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46158));
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587 < 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.runIds = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.runIds["slice"](0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46159)), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46160.id), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46585.runIds['slice'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46587 + 1).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161 => !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46161))];
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162 of var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92994) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461760.blocks["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666.runIds["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162)) || delete var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461760.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46162];
      for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46586) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461760.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163.id] = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46163
      };
      return cv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461760, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468749);
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461761 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461760.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.runId];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461761 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461760.runs[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.runId] = km(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461761, {
      'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.range,
      'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.text,
      'runs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.runs
    }), cv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461760, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468749)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747;
  }
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468753 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.objectId;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468753 ? fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F36(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468753, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468748, {
    'text': {
      'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.storyId,
      'runId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.runId,
      'range': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.range,
      'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.text,
      'runs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468750.runs
    }
  }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468749) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468747;
}
function nv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468761, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468762, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468763) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468764 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468762.payload,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468765 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468761.overlayObjects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468764.tableId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468765 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468765.object["type"] !== 'table') return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468761;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468766 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468765.object,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468767 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468766.cells["findIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461762 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461762.id === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468764.cellId);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468767 < 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468761;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB132 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468761.revision + 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468768 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468766.cells[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468767],
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB286 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468768,
      'style': sv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468768.style, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468764)
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468769 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468761, "overlayObjects", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468763);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468769[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468764.tableId] = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468765,
    'object': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468766,
      'cells': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468766.cells['map']((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461763, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461764 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468767 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB286 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461763)
    },
    'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB132
  }, {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468761,
    'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB132,
    'overlayObjects': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468769
  };
}
function rv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468779, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468780, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468781) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468782;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468783 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468780.payload,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468784 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468779.overlayObjects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468783.tableId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468784 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468784.object["type"] !== "table") return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468779;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468785 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468784.object;
  if (!iv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468783)) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468779;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB134 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468779.revision + 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468786 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468779, "overlayObjects", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468781);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468786[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468783.tableId] = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468784,
    'object': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468785,
      'bbox': [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468783.bbox],
      'rows': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468783.rows["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461765
      })),
      'columns': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468783.columns["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766 => ({
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461766
      })),
      'cells': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468782 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468783.cells) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468782.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767 => ov(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461767))) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468785.cells
    },
    'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB134
  }, {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468779,
    'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB134,
    'overlayObjects': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468786
  };
}
function iv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468795, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796) {
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468797, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468798, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468799, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468800] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.bbox,
    var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A56 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.bbox['every'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768 => Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768)) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468799 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468797 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468800 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468798,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468801 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.rows['length'] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.rows["every"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769.id && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769.height) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769.height > 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468802 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.columns['length'] > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.columns["every"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770.id && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770.width) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770.width > 0),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468803 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.cells ? av(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.rows, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.columns, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.cells) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.rows["length"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468795.rows["length"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.columns["length"] === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468795.columns["length"] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.rows['every']((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771.id === ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468795.rows[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461773.id);
    }) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.columns["every"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779;
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461777.id === ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468795.columns[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779.id);
    });
  return !var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A56 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468801 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468802 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468803 ? false : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.rows["reduce"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.height, 0) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468800 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468798 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468796.columns["reduce"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461786.width, 0) === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468799 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468797;
}
function av(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468813, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468814, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468815) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468815.length !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468813.length * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468814.length) return false;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929976 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468813.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461787.id)),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929977 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468814.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461788.id)),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929978 = new Set(),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929979 = new Set();
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468815.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929978.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789.id) || var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929979.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789.contentStoryId) ? false : (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929978.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789.id), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929979.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789.contentStoryId), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929976.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789.rowId) && var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929977.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789.columnId) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789.rowSpan === 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461789.columnSpan === 1));
}
function ov(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819) {
  return JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468819));
}
function sv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468821, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468822) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB288 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468821
  };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468822.fill !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468822.fill === null ? delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB288.fill : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB288.fill = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468822.fill), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468822.verticalAlign !== undefined && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468822.verticalAlign === null ? delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB288.verticalAlign : var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB288.verticalAlign = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468822.verticalAlign), Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB288).length ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB288 : undefined;
}
function cv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468825, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468826, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468827) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468828 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468825, "overlayTextStories", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468827);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468828[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468826.id] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468826, {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468825,
    'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468825.revision + 1,
    'overlayTextStories': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468828
  };
}
function lv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468833, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468834, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468835, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468836) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468837 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468835(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468833.textStoryPatches[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468834] ?? {
      'storyId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468834
    }),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468838 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468833, "textStoryPatches", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468836);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468838[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468834] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468837, {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468833,
    'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468833.revision + 1,
    'textStoryPatches': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468838
  };
}
function uv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468845, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468846) {
  return Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468845) ? Math.max(0, Math.min(Math.trunc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468845), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468846)) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468846;
}
function dv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468849, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468850, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468851, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468852) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468850.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791) => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468849[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790] = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468849[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790],
      'pageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461790,
      'orderIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461791,
      'updatedAt': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468851.timestamp,
      'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468852
    };
  });
}
function fv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468857, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468858, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468859) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468860 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468858.payload,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468857.overlayObjects[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468860.objectId];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468857;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB136 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468857.revision + 1,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468862 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468860.zIndex ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861.zIndex,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468863 = Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468857, "overlayObjects", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468859);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468863[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468860.objectId] = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861,
    'layerId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468860.layerId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861.layerId,
    'zIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468862,
    'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB136
  }, Ev(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468859, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468857, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468861.pageId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468862), {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468857,
    'revision': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB136,
    'overlayObjects': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468863
  };
}
function pv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468871, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468873 = Bu({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468871,
      'bbox': "bbox" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.bbox ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468871.bbox : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468871.bbox,
      'transform': "transform" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.transform : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468871.transform,
      'visible': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.visible ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468871.visible,
      'locked': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.locked ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468871.locked,
      'exportPolicy': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.exportPolicy ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468871.exportPolicy,
      'revision': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.revision ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468871.revision
    }, zu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468871)),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468874 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.text ? fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF15(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468873, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468873,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468875 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.style ? gv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468874, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468874,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468876 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.annotation ? mv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468875, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.annotation) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468875;
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.text ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468876 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.image && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468876.type === 'image' ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468876,
    'assetId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.image['assetId'] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468876.assetId,
    'crop': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.image["cropRect"] === null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468872.image["cropRect"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468876.crop
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468876;
}
function mv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468883, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468884) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468883.type !== 'annotation' || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468884.link) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468883;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468885 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468883;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468885,
    'link': hv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468885.link, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468884.link)
  };
}
function hv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468889, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468890) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB290 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468889
  };
  for (let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795] of Object.entries(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468890)) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795 === null ? delete var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB290[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795 !== undefined && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB290[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795);
  return Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB290).length ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB290 : undefined;
}
function gv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893.type === "textBox") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796,
      'runs': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style["textStyle"] ? vv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.runs, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style["textStyle"]) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.runs,
      'textAnchor': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style["textAnchor"] === null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style["textAnchor"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796.textAnchor
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893.type === "textRun" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style["textStyle"]) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797,
      'run': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797.run,
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style["textStyle"]
      }
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893.type === "table") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798,
      'styleId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style["styleId"] === null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style['styleId'] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798.styleId,
      'options': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style["tableStyleOptions"] === null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style['tableStyleOptions'] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798.options
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893.type === "image") {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799,
      'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style["opacity"] === null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style["opacity"] ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799.opacity
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893.type === "annotation") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468895;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style["fill"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style['stroke'],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style["opacity"],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 === null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 ?? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468895 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.ink) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468895.stroke),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804 ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804,
        'opacity': undefined
      } : undefined : {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804,
        'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803
      };
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800,
      'markup': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.markup ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.markup,
        'color': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801 === null ? undefined : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801.color) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.markup["color"],
        'opacity': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803 === null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803 ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.markup["opacity"],
        'stroke': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.markup["stroke"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 ?? undefined
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.markup,
      'ink': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.ink && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 !== undefined || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803 !== undefined) ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.ink,
        'stroke': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB36
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.ink,
      'line': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.line && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 !== undefined ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.line,
        'stroke': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 ?? undefined
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.line,
      'shape': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.shape ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.shape,
        'border': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.shape["border"] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 ?? undefined,
        'interiorFill': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801 === undefined ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.shape['interiorFill'] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801 ?? undefined
      } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800.shape
    };
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893.type === "path" ? Vu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468894.style) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468893;
}
function fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sig8CF15(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468899, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468900) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468899.type === "textBox") {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468901, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468902, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468903;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468899;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805,
      'runs': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468901 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468900.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468901.runs) ?? yv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805.runs, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468902 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468900.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468902.text),
      'textStoryId': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468903 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468900.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468903.storyId) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805.textStoryId
    };
  }
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468899.type === 'textRun') {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468904;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468899;
    return {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806,
      'run': {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806.run,
        'text': ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468904 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468900.text) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468904.text) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806.run["text"]
      }
    };
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468899;
}
function vv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468911, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468912) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468912 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468911 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468911.length ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468911.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807 => Hu(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461807, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468912)) : [{
    'text': '',
    'fontSize': 12,
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468912
  }] : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468911;
}
function yv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468915, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468916) {
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468916 === undefined) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468915;
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468915 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468915.length)) return [{
    'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468916,
    'fontSize': 12
  }];
  let [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468917, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468918] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468915;
  return [{
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468917,
    'text': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468916
  }, ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468918];
}
function bv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468923, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468924) {
  return op(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468923.mutationLog).batchById["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468924);
}
function Sv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468929) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468929 == 'object' && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468929 && ("bbox" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468929 || 'transform' in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468929);
}
function Cv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468931) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468931 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468931 && "annotation" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468931;
}
function wv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468933) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468934;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468934 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468933.target) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468934.kind) === "object" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468933.target['pageId'] : undefined;
}
function Tv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468937, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468938, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468939) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468940;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468939 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468939.maxOverlayZIndexByPage && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468939.maxOverlayZIndexByPage = new Map(ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468937).maxOverlayZIndexByPage));
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468941 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468939 == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468940 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468939.maxOverlayZIndexByPage) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468940.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468938)) ?? ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468937).maxOverlayZIndexByPage["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468938);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468941 === undefined ? 0 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468941 + 1;
}
function Ev(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468947, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468948, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468949, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468950) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468947 && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468947.maxOverlayZIndexByPage ??= new Map(ap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468948).maxOverlayZIndexByPage), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468947.maxOverlayZIndexByPage['set'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468949, Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468947.maxOverlayZIndexByPage["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468949) ?? -1 / 0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468950)));
}
function Z(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468955, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468956, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468957) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468958 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468955[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468956];
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468957) return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468958
  };
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468959 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468957.records['get'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468956);
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468959) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468959;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB292 = {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468958
  };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468957.records['set'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468956, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB292), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB292;
}
function Dv(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468965) {
  return typeof structuredClone == "function" ? structuredClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468965) : JSON.parse(JSON.stringify(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468965));
}
async function Py(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469197, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469199, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469200) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469201;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469200.byteLength !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198) throw new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491("PDF_BLOCK_CHECKSUM_MISMATCH", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469197, "PDF artifact " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469197 + " has " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469200.byteLength + " bytes; expected " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469198 + '.');
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469199) return;
  if (!/^[0-9a-f]{64}$/["test"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469199)) throw new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491("PDF_BLOCK_CHECKSUM_MISMATCH", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469197, "PDF artifact " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469197 + " has an invalid checksum.");
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469202 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469201 = globalThis.crypto) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469201.subtle;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469202) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469203 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469202.digest('SHA-256', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469200.slice().buffer);
  if (Array.from(new Uint8Array(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469203), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461948.toString(16).padStart(2, '0')).join('') !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469199) throw new var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469491("PDF_BLOCK_CHECKSUM_MISMATCH", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469197, "PDF artifact " + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469197 + " failed checksum verification.");
}
function Uy(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469263) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469263 == "object" && !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469263 && !Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469263);
}
function nb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469322, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469323;
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929988 = new Set();
  return (((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469322 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321.documentShell) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469322.pageDirectory["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461969.pageId)) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321.document["pages"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461970.id)).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929988.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461971)), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469323 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321.documentShell) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469323.pageBlocks["forEach"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929988.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461972.blockId)), Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321.document["objects"]).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461973 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929988.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461973)), Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321.document["displayLists"]).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929988.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461974)), Object.keys(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469321.document["textStories"]).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929988.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461975)), var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929988;
}
var var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB148 = "@univerjs-pro/pdfs",
  vb = '1.0.0-insiders.20260907-70fc579';
function bb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469419, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469420) {
  return function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462096) {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469420(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462095, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462096, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469419);
  };
}
function xb(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469426) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469427 = arguments.length,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469428 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469427 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469424 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469426 === null ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469426 = Object.getOwnPropertyDescriptor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469425) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469426,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469429;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function") var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469428 = Reflect.decorate(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469423, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469426);else {
    for (var var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D449 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469423.length - 1; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D449 >= 0; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D449--) (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469429 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469423[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D449]) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469428 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469427 < 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469429(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469428) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469427 > 3 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469429(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469428) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469429(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469425)) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469428);
  }
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469427 > 3 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469428 && Object.defineProperty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469424, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469428), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469428;
}
k(Sb, "pluginName", "UNIVER_PDFS_PLUGIN"), k(Sb, "packageName", var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB148), k(Sb, "version", vb), k(Sb, 'type', UniverInstanceType.UNIVER_PDF), Sb = xb([DependentOn(UniverLicensePlugin), bb(1, Inject(Injector)), bb(2, ICommandService), bb(3, IConfigService), bb(4, IUniverInstanceService)], Sb);
export { id, qn, hn, w, gn, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB320, vn, wr, Ur, yn, k, bl, Yl, hl, V, Xl, Y, J, K, G, q, kd, mf, lf, Tf, Cd, kf, sf, Td, Vd, Qd, zd, Rd, Hu, cm, Bd, np, rp, ip, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F20, fn_L0_core_endo_routine_pure_ON_zalloc_nothrow_sig193F, fn_L0_core_endo_routine_pure_O1_zalloc_throws_SyntaxError_sigD23F, Rm, ig, ng, Uh, Wh, X, Jh, Lh, Rh, wh, Vh, Hg, Og, kg, Ag, jg, Mg, Ng, Ug, Wg, Gg, Pg, Fg, Ig, Zg, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC724, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC725, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F15, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC727, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F16, fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F17, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC726, fn_L1_core_endo_routine_pure_O1_zalloc_nothrow_sigDC723, bv, Uy, Py, nb };
