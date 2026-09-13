import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { Q } from "./boards-board-connector-element-data.js";
import { G, No, Xn, Za, id } from "./internal-core-endo.js";
import { M } from "./boards-board-element-type.js";
import { Gn } from "./boards-nearest-common-board-container-parent.js";
import { U } from "./boards-board-element-world-bounds.js";
import { Ui } from "./boards-board-swimlane-lane-for-rect-in-filled-bounds.js";
import { L } from "./boards-iboard-element.js";
import { po } from "./boards-board-structured-selection-root-ids.js";
import { H } from "./boards-board-element-world-transform.js";
import { q } from "./boards-board-rect-right.js";
import { J } from "./boards-board-rect-bottom.js";
import { var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216 } from "./boards-board-container-corner-adjust.js";
import { W } from "./boards-board-element-local-transform-for-parent.js";
import { fa } from "./boards-board-container-element.js";
import { var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217 } from "./boards-board-element.js";
import { Ss } from "./boards-add-board-element.js";
import { dc } from "./boards-board-permission.js";
function Fd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465914, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465915) {
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465914,
    transform: {
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465914.transform,
      left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465915.left,
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465915.top,
      width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465915.width,
      height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465915.height,
      rotation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465915.angle,
      flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465915.flipX,
      flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465915.flipY
    }
  };
}
function Id(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465918, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465919, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465920) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299128 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465919),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A274 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465920.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299128.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465918[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801]);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465919.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465918[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802] && !var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A274.includes(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802) && var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A274.push(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802);
  }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A274;
}
function Ld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465924, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465925, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465926) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299130 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465925),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299131 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465925),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A276 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465926.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465924[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804];
      if (!Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805) || var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299130.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804)) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806 = Za(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805.element);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461806.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299130.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46397));
    });
  return [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465925, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A276.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299131.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810) ? false : (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299131.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461810), true))].sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812) => {
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465926.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461811),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465926.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461812);
    return (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45 >= 0 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D45 : 2 ** 53 - 1) - (var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 >= 0 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D46 : 2 ** 53 - 1);
  });
}
function Rd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465930, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465931) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299134 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465931);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465931.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461815 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461816 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465930[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461815];
    if (!Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461816)) return true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461817 = Za(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461816.element);
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461817.length > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461817.every(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398 => var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299134.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46398));
  });
}
function zd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465934, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465935, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465936) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465937;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465938 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465937 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465934[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465935]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465937.element["parentId"],
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299136 = new Set([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465935]);
  for (; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465938;) {
    if (var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299136.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465938)) return false;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465934[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465938];
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.element["type"] !== M.Container) return false;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465936.has(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465938)) return true;
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299136.add(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465938), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465938 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399.element["parentId"];
  }
  return false;
}
function Bd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465945) {
  let var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299138 = new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465945);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465945.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821 => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465944[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822 ? Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461822) ? true : !zd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465944, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461821, var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig9299138) : false;
  });
}
function Vd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465948, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465949) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465950 = Array.from(new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465949.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826;
    return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465948[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826.element["parentId"];
  })));
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465950.length === 1 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465950[0] : Gn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465948, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465949);
}
function Hd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465954, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465955) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465956;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465957 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465955 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465956 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465954[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465955]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465956.element : undefined;
  return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465957 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465957.type) === M.Container && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465957.containerData["behavior"].membershipLocked;
}
function Ud(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465962, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465963) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465964;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465963) return true;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465965 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465964 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465962[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465963]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465964.element;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465965 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465965.type !== M.Container) return false;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465965.containerData["behavior"];
  return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966.membershipLocked && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966.acceptsChildren && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966.acceptsContainer && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465966.allowNested;
}
function Wd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465973, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974) {
  var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465975, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465976;
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465973) return;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465977 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465975 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465972[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465973]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465975.element,
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465978 = U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465972, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465973);
  if (!(!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465977 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465977.type !== M.Container || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465977.containerData["kind"] !== "swimlane" || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465978)) return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465976 = Ui(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465977, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465978, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465974)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465976.lane["id"];
}
const Gd = {
    id: "board.operation.wrap-elements-in-container",
    type: CommandType.OPERATION,
    handler: (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465986, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465987) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465987 || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465987.elementIds["length"] === 0) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465988,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465989
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465987,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465990 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465986.get(L),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465990.getElementData(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465989),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465992 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465990.getElementOrder(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465988, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465989);
      if (new Set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465987.elementIds).size !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465987.elementIds["length"] || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465987.elementIds["some"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829 => !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829])) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465993 = Ld(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991, Rd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991, po(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991, Id(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465987.elementIds, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465992))), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465992);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465993.length === 0) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465994 = Bd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465993);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465994.length === 0) return false;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A278 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465994.filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831;
        return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831.element["type"]) !== M.Connector;
      });
      if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A278.length === 0) return false;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A279 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A278.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835;
        return (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461834)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461835.worldTransform;
      }).filter(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461838 => !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461838);
      if (var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A279.length !== var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A278.length) return false;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A280 = var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A279.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839 => ({
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839.left ?? 0,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839.top ?? 0,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839.width ?? 0,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461839.height ?? 0
        })),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D293 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A280.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461840.left)),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D294 = Math.min(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A280.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461841.top)),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D295 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A280.map(q)),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D296 = Math.max(...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A280.map(J)),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB201 = {
          left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D293,
          top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D294,
          width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D295 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D293,
          height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D296 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D294
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465995 = Vd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465994);
      if (!Ud(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465995) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465994.some(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843;
        return Hd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461842]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461843.element["parentId"]);
      })) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465996 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216.padding,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465997 = var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB216.headerSize,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB202 = {
          left: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D293 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465996.left,
          top: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D294 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465997 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465996.top,
          width: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D295 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D293 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465996.left + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465996.right,
          height: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D296 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D294 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465997 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465996.top + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465996.bottom,
          angle: 0
        },
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465998 = Wd(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465995, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB201),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465999 = G(W(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991, {
          parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465995,
          worldTransform: Xn(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB202)
        })),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000 = fa({
          id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465987.containerId,
          title: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465987.title,
          parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465995,
          laneId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465998,
          left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465999.left,
          top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465999.top,
          width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465999.width,
          height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465999.height
        }),
        var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D297 = Math.min(...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465993.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846 => {
          let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465992.indexOf(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461846);
          return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 >= 0 ? var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D49 : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465992.length;
        })),
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB203 = {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991,
          [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000.id]: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465988,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465989,
            elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000.id,
            transform: {
              left: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000.transform["left"],
              top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000.transform["top"],
              width: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000.transform["width"],
              height: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000.transform["height"],
              angle: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000.transform["rotation"] ?? 0,
              flipX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000.transform["flipX"],
              flipY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000.transform["flipY"]
            },
            element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000
          }
        },
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A281 = [];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465994.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848],
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849 = H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461849.worldTransform;
        if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851) return;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852 = G(W(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB203, {
            parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000.id,
            worldTransform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461851
          })),
          var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853 = Fd({
            ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461850.element,
            parentId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000.id,
            laneId: undefined
          }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852);
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A281.push({
          id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465988,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465989,
            elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461848,
            element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461853,
            transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461852
          }
        });
      }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A281.length !== var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465994.length) return false;
      let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A282 = [{
          id: Ss.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465988,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465989,
            element: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000,
            insertIndex: var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D297
          }
        }, ...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A281],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A283 = [...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465994.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860 => {
          let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860];
          return {
            id: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB217.id,
            params: {
              unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465988,
              subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465989,
              elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461860,
              element: Tools.deepClone(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.element),
              transform: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.transform ? {
                ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.transform
              } : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461861.transform
            }
          };
        }), {
          id: dc.id,
          params: {
            unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465988,
            subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465989,
            elementId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466000.id
          }
        }];
      return !No(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465991, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A282) || !sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A282, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465986.get(ICommandService)).result ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465986.get(IUndoRedoService).pushUndoRedo({
        unitID: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465988,
        redoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A282,
        undoMutations: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A283
      }), true);
    }
  },
  Kd = {
    width: 1920,
    height: 1080
  };
export { Gd as WrapBoardElementsInContainerOperation, Kd as DEFAULT_BOARD_PAGE_SIZE };
