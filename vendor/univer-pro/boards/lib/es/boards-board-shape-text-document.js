import { BooleanNumber, ColorKit, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, GridType, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IUndoRedoService, IUniverInstanceService, Inject, Injector, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, WrapStrategy, createIdentifier, createParagraphId, createSectionId, generateRandomId, merge, normalizeDrawingOrderIndex, sequenceExecute, toDisposable } from "@univerjs/core";
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from "rxjs";
import { UnitDrawingService } from "@univerjs/drawing";
import { IShapeHostAdapterRegistry, ShapeArrowSizeEnum, ShapeArrowTypeEnum, ShapeFillEnum, ShapeLineCapEnum, ShapeLineDashEnum, ShapeLineJoinEnum, ShapeLineTypeEnum, ShapeOperatorEnum, ShapeTextAutoFitType, ShapeTextDirection, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, canApplyShapeFormulaLastValue, computeConnectorRouteLayout, createUniqueShapeName, isConnectorShape, isCurvedConnectorShape, resolveConnectorRoutePoints, resolveShapeConnectionPoint, resolveShapeDefaultInsertSize } from "@univerjs-pro/engine-shape";
import { UnitAction, UnitObject } from "@univerjs/protocol";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { ed, id, st, ts } from "./internal-core-endo.js";
function pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463208) {
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463208.replace(/\r\n/g, "\x0a").replace(/\r/g, "\x0a");
}
function mi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463210) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211 = pi(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463210.text).split("\x0a"),
    var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211.join("\x0d") + "\x0d\x0a",
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D175 = Math.max(0, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39.length - 2),
    var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929934 = new Set(),
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D176 = 0,
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A100 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463211.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876 => {
      let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D176 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876.length;
      return var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D176 += var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46876.length + 1, {
        startIndex: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9,
        paragraphId: createParagraphId(var_L0_core_endo_itemsSet_pure_O1_zalloc_nothrow_sig929934),
        paragraphStyle: {
          horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463210.horizontalAlign,
          lineSpacing: 1,
          snapToGrid: BooleanNumber.FALSE,
          spaceAbove: {
            v: 0
          },
          spaceBelow: {
            v: 0
          }
        }
      };
    });
  return {
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463210.id ?? "board-shape-text",
    body: {
      dataStream: var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39,
      paragraphs: var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A100,
      sectionBreaks: [{
        sectionId: createSectionId(new Set()),
        startIndex: Math.max(0, var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB39.length - 1),
        gridType: GridType.DEFAULT,
        renderConfig: {
          shapeTextOpticalVerticalAlign: BooleanNumber.FALSE,
          verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463210.verticalAlign,
          wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463210.wrapStrategy,
          zeroWidthParagraphBreak: BooleanNumber.TRUE
        }
      }],
      textRuns: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463210.textStyle ? [{
        st: 0,
        ed: Math.max(1, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D175),
        ts: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463210.textStyle
        }
      }] : []
    },
    documentStyle: {
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: 0,
      pageSize: {
        height: 1 / 0,
        width: 1 / 0
      },
      renderConfig: {
        horizontalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463210.horizontalAlign,
        verticalAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463210.verticalAlign,
        wrapStrategy: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463210.wrapStrategy,
        zeroWidthParagraphBreak: BooleanNumber.TRUE
      },
      ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463210.textStyle ? {
        textStyle: {
          ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463210.textStyle
        }
      } : null)
    }
  };
}
export { mi as createBoardShapeTextDocument };
