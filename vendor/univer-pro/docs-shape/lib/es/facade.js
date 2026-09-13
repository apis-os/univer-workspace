import "@univerjs/docs-drawing/facade";
import { IShapeHostAdapterRegistry, isConnectorShape } from "@univerjs-pro/engine-shape";
import { FConnectorShape, FShape } from "@univerjs-pro/engine-shape/facade";
import { UniverInstanceType } from "@univerjs/core";
import { FDocument } from "@univerjs/docs/facade";
import { DocShapeAnchorPosition } from "@univerjs-pro/docs-shape";
import { FEnum } from "@univerjs/core/facade";
var c = class extends FDocument {
  insertShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = this._getShapeAdapter();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) return null;
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.createShape(this._getShapeScope(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 ? this._createShapeHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461) : (console.warn("[Doc Shape Facade]: Failed to insert Shape."), null);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5) {
      return console.warn("[Doc\x20Shape\x20Facade]:\x20Failed\x20to\x20insert\x20Shape.", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC5), null;
    }
  }
  getShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 = this._getShapeAdapter();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468) return null;
    try {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.getShape({
        ...this._getShapeScope(),
        shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467
      });
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 ? this._createShapeHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462) : (console.warn("[Doc\x20Shape\x20Facade]:\x20Shape\x20\x22" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 + '" was not found.'), null);
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52) {
      return console.warn('[Doc Shape Facade]: Failed to read Shape "' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 + "\x22.", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC52), null;
    }
  }
  getShapes() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611 = this._getShapeAdapter();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611) return [];
    try {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4611.listShapes(this._getShapeScope()).map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => this._createShapeHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46));
    } catch (var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC54) {
      return console.warn("[Doc Shape Facade]: Failed to list Shapes.", var_L0_core_endo_caughtError_pure_O1_zalloc_nothrow_sigEEC54), [];
    }
  }
  _getShapeScope() {
    return {
      hostType: UniverInstanceType.UNIVER_DOC,
      unitId: this.getId(),
      subUnitId: this.getId()
    };
  }
  _getShapeAdapter() {
    return this._injector["get"](IShapeHostAdapterRegistry).get(UniverInstanceType.UNIVER_DOC);
  }
  _createShapeHandle(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613) {
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
      hostType: UniverInstanceType.UNIVER_DOC,
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.unitId,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.subUnitId,
      shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.shapeId
    };
    return isConnectorShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613.shapeType) ? this._injector["createInstance"](FConnectorShape, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, this._injector) : this._injector["createInstance"](FShape, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB, this._injector);
  }
};
FDocument.extend(c);
var l = class extends FEnum {
  get DocShapeAnchorPosition() {
    return DocShapeAnchorPosition;
  }
};
FEnum.extend(l);
export {};
