import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { W } from "./internal-core-endo.js";
import { zr } from "./slides-slide-font-plugin-name.js";
let Br = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469) {
    super(), W(this, "_resources", new Map()), this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46469.registerPluginResource({
      'pluginName': zr,
      'businesses': [UniverInstanceType.UNIVER_SLIDE],
      'toJson': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124 => JSON.stringify(this._resources["get"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46124) ?? {
        'fonts': [],
        'version': 1
      }),
      'parseJson': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125 => JSON.parse(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46125),
      'onLoad': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127) => this._resources["set"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46126, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46127),
      'onUnLoad': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128 => this._resources["delete"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46128)
    }));
  }
};
export { Br as SlideFontResourceController };
