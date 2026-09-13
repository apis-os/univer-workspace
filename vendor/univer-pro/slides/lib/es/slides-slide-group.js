import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { Mt, Nt, Pt, yt } from "./internal-core-endo.js";
import { P } from "./slides-islide-drawing.js";
import { N } from "./slides-slide-element-to-drawing.js";
import { B } from "./slides-slide-command-target.js";
import { L } from "./slides-add-slide-element.js";
import { z } from "./slides-remove-slide-element.js";
function Gt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461383 % 360 + 360) % 360;
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 >= 315 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 < 45 || var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 >= 135 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D25 < 225) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382;
  let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382.width / 2,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382.height / 2;
  return {
    'left': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB5 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382.height / 2,
    'top': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB6 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382.width / 2,
    'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382.height,
    'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461382.width
  };
}
function Kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386.transform,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386.element["transform"],
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74 = {
      'left': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387.left) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388.left ?? 0,
      'top': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387.top) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388.top ?? 0,
      'width': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387.width) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388.width ?? 0,
      'height': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387.height) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388.height ?? 0
    },
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461386.element["type"];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389 !== "shape" && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461389 !== "group" ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74 : Gt(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB74, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461387.angle) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461388.rotation ?? 0);
}
function qt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461394) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395;
  return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461394[0]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461395.sourcePageType) ?? 'slide';
}
function Jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398.groupBaseBound;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461399;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461398.element["custom"];
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461400.groupBaseBound;
}
function Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461406, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A52 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461409.flatMap(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46301];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.element["type"] !== "group") return [];
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.transform || {
        'width': 0,
        'height': 0
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 = Jt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14.width && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14.width > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14.width : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.width) ?? 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14.height && var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14.height > 0 ? var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14.height : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303.height) ?? 0;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46302.element["children"].map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461408[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 = transformObjectOutOfGroup(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.transform || {
          'left': 0,
          'top': 0
        }, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB14, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46303),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.element['transform'],
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.element,
          'transform': {
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677,
            'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.left,
            'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.top,
            'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.width,
            'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.height,
            'rotation': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.angle,
            'flipX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.flipX,
            'flipY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.flipY
          }
        };
      return {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675,
        'element': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB,
        'transform': {
          ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675.transform || {
            'left': 0,
            'top': 0
          }),
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676
        },
        'groupId': undefined
      };
    });
  });
  if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A52.length) return true;
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A52) if (!Nt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461404, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.element, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46307.transform)) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405.getBatchUpdateOp(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A52);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405.applyJson1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461406, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461407, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410.redo), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461405.updateNotification(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461410.objects), true;
}
const Xt = {
    'id': "slide.mutation.set-group",
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423 = Array.from(new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.drawingIds));
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423.length < 2) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461418.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421, UniverInstanceType.UNIVER_SLIDE);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461426 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424.getDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A54 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461426[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46308]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46309);
      if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A54.length < 2) return false;
      let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929930 = new Set(["shape", "image", 'group']);
      if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A54.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929930.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46310.element["type"]))) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461427 = qt(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A54),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461419.groupId ?? generateRandomId(6),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A54.reduce((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312) => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313 = Kt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46312);
          return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.left = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.left, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.left), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.top = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.top, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.top), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.right = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.right, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.width), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.bottom = Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311.bottom, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46313.height), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46311;
        }, {
          'left': 1 / 0,
          'top': 1 / 0,
          'right': -1 / 0,
          'bottom': -1 / 0
        });
      if (!Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.left) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.top) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.right) || !Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.bottom)) return false;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76 = {
          'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.left,
          'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.top,
          'width': Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.right - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.left),
          'height': Math.max(1, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.bottom - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461429.top)
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430 = N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422, yt({
          'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428,
          'type': "group",
          'transform': {
            'left': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76.left,
            'top': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76.top,
            'width': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76.width,
            'height': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76.height,
            'rotation': 0,
            'flipX': false,
            'flipY': false
          },
          'children': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423,
          'custom': {
            'groupBaseBound': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB76,
            'groupBaseBoundIsLocal': true
          }
        }, Object.values(((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461420.getData().elements) ?? {})), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461427);
      if (!Mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424.getBatchAddOp([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461430]);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424.applyJson1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.redo), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424.addNotification(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461431.objects ?? []);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424.getDrawingOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422),
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929931 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461423),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A55 = [],
        var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 = false;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461432.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 => {
        if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317 !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428) {
          if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929931.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317)) {
            var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 ||= (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A55.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428), true);
            return;
          }
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A55.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46317);
        }
      }), var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A4 || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A55.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A55.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428) || var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A55.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461425.pageManager['getSlide'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461433.setElementOrder(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A55), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424.setDrawingOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A55), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424.orderNotification({
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422,
        'drawingIds': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A55
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461424.focusDrawing([{
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461421,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461422,
        'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461428
      }]), true;
    }
  },
  Zt = {
    'id': "slide.mutation.cancel-group",
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461451) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461452;
      let {
        unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453,
        subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454,
        drawingIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461455
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461451;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461455.length) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461450.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453, UniverInstanceType.UNIVER_SLIDE);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456.getDrawingData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461455.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319 => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320;
          return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46319]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46320.element["type"]) === "group";
        });
      if (!var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58.length) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461459 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456.getDrawingOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454),
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929934 = new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A59 = [],
        var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929935 = new Set(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323 => {
          var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929935.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323) || (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929935.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A59.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46323));
        };
      if (!Yt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58)) return false;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461459.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 => {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325];
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.element['type'] !== "group" || !var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929934.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325)) {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325);
          return;
        }
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326.element["children"].forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681 => {
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681] && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461460(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4681);
        });
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461458[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46329]).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331 => {
        Pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46331);
      });
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A60 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A58.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333 => ({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454,
          'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333
        })),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461452 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456.removeDrawingsWithoutGroupExpansion) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461452.bind(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461) var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461461(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A60);else {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456.getBatchRemoveOp(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A60);
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456.applyJson1(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334.redo);
      }
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456.removeNotification(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A60);
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461457.pageManager["getSlide"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461462.setElementOrder(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A59), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456.setDrawingOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A59), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456.orderNotification({
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461453,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461454,
        'drawingIds': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A59
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461456.focusDrawing([]), true;
    }
  },
  Qt = {
    'id': "slide.command.convert-smart-art-to-shapes",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476.get(P),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461480 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479.getDrawingByParam({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478.unitId,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478.subUnitId,
          'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477.drawingId
        });
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461480 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461480.sourcePageType !== "slide" || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461480.element["type"] !== 'shape') return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461480.element,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481.shapeData;
      if (!isSmartArtShapeData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483 = convertSmartArtToShapes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482.smartArt),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A64 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477.childIds ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483.map(() => generateRandomId(6)),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477.groupId ?? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483.length > 1 ? generateRandomId(6) : undefined);
      if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A64.length === 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483.length !== var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A64.length || new Set(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A64).size !== var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A64.length) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461481.transform,
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A65 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461483.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336) => {
          var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337;
          return {
            'id': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A64[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336],
            'type': "shape",
            'name': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461482.smartArt["presentationShapes"][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.id]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337.name,
            'transform': en(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461485, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.transform),
            'shapeData': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335.shapeData
          };
        }),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461479.getDrawingOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478.unitId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478.subUnitId),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27 = Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461486.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477.drawingId)),
        {
          redoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487,
          undoMutations: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488
        } = fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2({
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478.unitId,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478.subUnitId,
          'sourceDrawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461477.drawingId,
          'sourceElement': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461480.element,
          'childElements': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A65,
          'childIds': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A64,
          'groupId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461484,
          'insertIndex': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D27
        });
      return sequenceExecute(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476.get(ICommandService)).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461476.get(IUndoRedoService).pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461478.unitId,
        'undoMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461488,
        'redoMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461487
      }), true) : false;
    }
  };
function fn_L0_core_endo_routine_pure_O1_zalloc_nothrow_sigD23F2(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.childElements["map"]((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342) => ({
    'id': L.id,
    'params': {
      'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.unitId,
      'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.subUnitId,
      'element': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46341,
      'sourcePageType': "slide",
      'insertIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.insertIndex + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46342
    }
  }));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.groupId && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.childElements["length"] > 1 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503.push({
    'id': Xt.id,
    'params': {
      'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.unitId,
      'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.subUnitId,
      'drawingIds': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.childIds,
      'groupId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.groupId
    }
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503.push({
    'id': z.id,
    'params': {
      'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.unitId,
      'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.subUnitId,
      'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.sourceDrawingId,
      'elementType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.sourceElement['type']
    }
  }), {
    'redoMutations': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461503,
    'undoMutations': [{
      'id': z.id,
      'params': {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.unitId,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.subUnitId,
        'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.groupId ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.childIds[0],
        'elementType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.groupId ? 'group' : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.childElements[0].type
      }
    }, {
      'id': L.id,
      'params': {
        'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.unitId,
        'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.subUnitId,
        'element': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.sourceElement,
        'sourcePageType': "slide",
        'insertIndex': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461502.insertIndex
      }
    }]
  };
}
function en(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507) {
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.width ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.height ?? 0,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.width,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.height,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508 / 2,
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509 / 2;
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.flipX && (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.flipY && (var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 - var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10);
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.rotation ?? 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 * Math.PI / 180,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 / 2,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB10 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 / 2,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 * Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32) - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 * Math.sin(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 * Math.cos(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D32),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.flipX === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.flipY ? 1 : -1) * (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.rotation ?? 0);
  return {
    'left': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.left ?? 0) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D29 / 2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D35 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508 / 2,
    'top': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.top ?? 0) + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D30 / 2 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D36 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509 / 2,
    'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461508,
    'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461509,
    'rotation': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D31 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37,
    'flipX': !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.flipX != !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.flipX,
    'flipY': !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461506.flipY != !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461507.flipY
  };
}
export { Xt as SetSlideGroupMutation, Zt as CancelSlideGroupMutation, Qt as ConvertSlideSmartArtToShapesCommand };
