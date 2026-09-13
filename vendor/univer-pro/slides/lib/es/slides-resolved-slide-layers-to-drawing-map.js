import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { N } from "./slides-slide-element-to-drawing.js";
import { M, ot } from "./internal-core-endo.js";
function ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015) {
  return typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014 == "number" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014 * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461015 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461014;
}
function dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020) {
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019.width <= 0 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019.height <= 0) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018;
  let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020.width / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019.width,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461020.height / var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461019.height;
  if (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21 === 1 && var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22 === 1) return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018.transform;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461018,
    'transform': {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021,
      'left': ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021.left, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21),
      'top': ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021.top, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22),
      'width': ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021.width, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D21),
      'height': ut(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461021.height, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D22)
    }
  };
}
function ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 === "slide" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.id : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461026 + ':' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461027 + ':' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461028 + ':' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461029.id;
}
function pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037;
  if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461034 === 'slide' || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035.type !== 'group') return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035;
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035.children) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461037.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461036.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216) ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46216);
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34 ? {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035,
    'children': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A34
  } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461035;
}
function mt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461042, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461043, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461044, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046 = {}) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049;
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB58 = {},
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36 = [],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219) => {
      let var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59 = new Map();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634) => {
        var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633.id, ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461043, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4634, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4633));
      }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46218.forEach((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638) => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = ft(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461043, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641 = pt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 === "slide" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 : dt(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46219, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.pageSize) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4639.target), var_L0_core_endo_itemsMap_pure_O1_zalloc_nothrow_sig6B59);
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB58[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640] = {
          ...N(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461042, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461043, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4641, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045),
          'drawingId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640,
          'subUnitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461043
        }, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640);
      });
    };
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050("master", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461044.masterLayer, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.pageSize) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.master), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050("layout", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461044.layoutLayer, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.pageSize) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461048.layout), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461050('slide', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461044.slideLayer, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461046.pageSize) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.target), {
    'data': ht(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB58, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36),
    'order': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A36
  };
}
function ht(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061 = []) {
  let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60 = {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060
    },
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929920 = new Set();
  Object.values(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223 => {
    M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223) && ot(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46223.drawingId, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 => {
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929920.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647);
    });
  });
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061, ...Object.keys(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225))],
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228) => {
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226)) return;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226];
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229) return;
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.hidden === true || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.element["visible"] === false;
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229.hidden !== var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A && (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226] = {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229,
        'hidden': var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A
      });
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226];
      if (!M(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46230)) return;
      let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228);
      var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226), ot(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649 => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4649, var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig92992);
      });
    };
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A38.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236 => {
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929920.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236, false, new Set());
  }), var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB60;
}
export { mt as resolvedSlideLayersToDrawingMap };
