import { FormulaShapeResultStatus, ShapeFormulaService, createFormulaShapeDataFromShape } from "@univerjs-pro/shape-editor";
import { FEnum, FEventName, FUniver } from "@univerjs/core/facade";
import { UpsertHostExternalReferencesCommand } from "@univerjs-pro/engine-formula";
import { FShape } from "@univerjs-pro/engine-shape/facade";
import { DEFAULT_NUMBER_FORMAT } from "@univerjs/core";
import { isShapeHostType } from "@univerjs-pro/engine-shape";
var u = class extends FEnum {
  get FormulaShapeResultStatus() {
    return FormulaShapeResultStatus;
  }
};
FEnum.extend(u);
var d = class extends FEventName {
  get FormulaShapeResultChanged() {
    return "FormulaShapeResultChanged";
  }
};
FEventName.extend(d);
var f = class extends FShape {
  isFormulaShape() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469 = ox404012,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469(519)]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4610[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D469(533)]) != null;
  }
  getFormula() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613 = ox404012,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613(519)]()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613(533)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4614[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4613(502)]) ?? null;
  }
  setFormula(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617) {
    if (!p(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617)) return console.warn("[Formula\x20Shape\x20Facade]:\x20setFormula\x20requires\x20{\x20formula,\x20externalReferences\x20}."), this;
    let {
      formula: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618,
      externalReferences: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619
    } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4617;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618 && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618.startsWith("=")) return console.warn("[Formula\x20Shape\x20Facade]:\x20Formula\x20text\x20must\x20begin\x20with\x20\x22=\x22."), this;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620 = this._getFormulaIdentity();
    return this._getFormulaShapeData() ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619.length > 0 && !this._commandService["syncExecuteCommand"](UpsertHostExternalReferencesCommand.id, {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4620.unitId,
      references: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4619
    }) ? (console.warn("[Formula Shape Facade]: Failed to bind External References."), this) : this._updateFormulaBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464,
      formula: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4618
    }), true) : this;
  }
  removeFormula() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 = this._getFormulaShapeData();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625 != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625.formulaBinding && this._mutate("remove\x20formula\x20from", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.updateShape(this._shapeRef, {
      shapeData: {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4625,
        formulaBinding: undefined
      }
    })), this;
  }
  getFormulaResult() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627 = ox404012,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628 = this._getFormulaShapeData()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627(533)],
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627(486)]();
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 ? this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627(494)][var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627(518)](ShapeFormulaService)[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627(488)](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4630) ?? null : null;
  }
  getFormulaNumberFormat() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635 = ox404012,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635(519)]()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635(533)];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 ? ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635(483)]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4637[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4635(530)]) || DEFAULT_NUMBER_FORMAT : null;
  }
  setFormulaNumberFormat(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643) {
    return this._updateFormulaBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466,
      numberFormat: {
        pattern: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4643 || DEFAULT_NUMBER_FORMAT
      }
    }));
  }
  isFormulaAnimationEnabled() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645 = ox404012,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 = this._getFormulaShapeData()) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4645(533)];
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4647.animationEnabled !== false : false;
  }
  setFormulaAnimationEnabled(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651) {
    return this._updateFormulaBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 => ({
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467,
      animationEnabled: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651
    }));
  }
  _updateFormulaBinding(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = false) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 = this._getFormulaShapeData();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.formulaBinding && !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654) return console.warn("[Formula Shape Facade]: The Shape is not a Formula Shape."), this;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.formulaBinding ?? {
        formula: ""
      }),
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655.formulaBinding ? {
        ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655,
        formulaBinding: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656
      } : createFormulaShapeDataFromShape(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4655, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4656);
    return this._mutate("update formula for", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.updateShape(this._shapeRef, {
      shapeData: var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB2
    })), this;
  }
  _getFormulaIdentity() {
    return {
      hostType: this._shapeRef["hostType"],
      unitId: this._shapeRef["unitId"],
      subUnitId: this._shapeRef["subUnitId"],
      shapeId: this._shapeRef["shapeId"]
    };
  }
  _getFormulaShapeData() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661 = ox404012,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662;
    return ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = this[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661(527)]()) == null || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662.getShape(this._shapeRef)) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4662[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4661(499)]) ?? null;
  }
};
function p(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667) {
  return !!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 == "object" && "formula" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.formula == "string" && "externalReferences" in var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 && Array.isArray(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667.externalReferences);
}
FShape.extend(f);
var m = class extends FUniver {
  _initialize(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665) {
    this.disposeWithMe(this.registerEventHandler(this.Event["FormulaShapeResultChanged"], () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.get(ShapeFormulaService).presentationChanged$["subscribe"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = this._univerInstanceService["getUnitType"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.unitId);
      if (!isShapeHostType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461)) return;
      let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB = {
        shape: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665.createInstance(FShape, {
          hostType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.subUnitId,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.shapeId
        }, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665),
        shapeRef: {
          hostType: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.unitId,
          subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.subUnitId,
          shapeId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.shapeId
        },
        result: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.result,
        previousResult: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.previousResult
      };
      this.fireEvent(this.Event["FormulaShapeResultChanged"], var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB);
    })));
  }
};
FUniver.extend(m);
export {};
