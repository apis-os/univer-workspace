import { ArrangeTypeEnum, BooleanNumber, CommandType, CustomCommandExecutionError, DependentOn, Disposable, DrawingTypeEnum, HorizontalAlign, ICommandService, IConfigService, IPermissionService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleType, PermissionStatus, Plugin, Tools, UnitModel, UniverInstanceType, VerticalAlign, createIdentifier, createParagraphId, generateRandomId, getDrawingOrderIndex, merge, normalizeDrawingOrderIndex, sequenceExecute, shallowEqual } from '@univerjs/core';
import { UnitDrawingService } from '@univerjs/drawing';
import { IShapeHostAdapterRegistry, ShapeFillEnum, ShapeLineTypeEnum, ShapeModel, ShapeTextAutoFitType, ShapeTextWrapType, ShapeTypeEnum, UniverShapePlugin, applyDocumentToShapeText, applySmartArtOperation, canApplyShapeFormulaLastValue, convertSmartArtToShapes, createDefaultInsertedShapeData, createUniqueShapeName, isConnectorShape, isSmartArtShapeData, normalizeShapeTextData } from '@univerjs-pro/engine-shape';
import { transformObjectOutOfGroup } from '@univerjs/engine-render';
import { UnitAction, UnitObject } from '@univerjs/protocol';
import { BehaviorSubject, Subject, map, merge as mergeLocal, mergeMap } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { U } from "./slides-presentation-background-graphic.js";
import { I } from "./internal-core-endo.js";
import { P } from "./slides-islide-drawing.js";
import { Cn } from "./slides-presentation-background-target-master-ids.js";
import { k, qe } from "./slides-default-slide-page-width.js";
import { Sn } from "./slides-presentation-background-graphics.js";
import { B } from "./slides-slide-command-target.js";
function yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736) {
  return {
    ...(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.custom && typeof var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.custom == "object" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.custom : {}),
    'fit': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461736.fit ?? "stretch"
  };
}
function bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742.id ?? "presentation-bg-" + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461744 + 1),
    'type': "image",
    'role': "backgroundGraphic",
    'managedBy': "presentationBackground",
    'transform': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742.transform ?? {
      'left': 0,
      'top': 0,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743.width,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461743.height
    },
    'source': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742.source,
    'imageSourceType': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742.imageSourceType,
    'crop': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742.crop,
    'custom': yn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461742)
  };
}
function xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750) {
  let var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A76 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461750.map((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368) => bn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461749, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368)),
    var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB100 = {};
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 of var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748.elementOrder) {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748.elements[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369];
    !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684 || U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684) || (var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB100[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4684);
  }
  for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370 of var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A76) var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB100[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370.id] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46370;
  return {
    ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748,
    'elementOrder': [...var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A76.map(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371 => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46371.id), ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748.elementOrder["filter"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372 => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461748.elements[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46372];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373 && !U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46373);
    })],
    'elements': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB100
  };
}
const wn = {
    'id': "slide.mutation.ensure-slide-master-page",
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461768.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769.unitId, UniverInstanceType.UNIVER_SLIDE);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461770.getSnapshot();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771.masterPages ||= {}, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771.masterPageOrder ||= [];
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769.masterPage['id'];
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771.masterPages[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772] || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771.masterPages[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772] = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461769.masterPage), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771.masterPageOrder["includes"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772) || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771.masterPageOrder['push'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772), Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771.layoutPages ?? {}).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392;
        (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.masterPageId || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771.masterPages) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46392[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.masterPageId])) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46391.masterPageId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772);
      }), Object.values(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771.slides).forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396;
        (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.masterPageId || !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461771.masterPages) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46396[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.masterPageId])) && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46395.masterPageId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461772);
      }), true;
    }
  },
  Tn = {
    'id': "slide.mutation.set-presentation-background-graphics",
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779) => {
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780,
          masterPageId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781,
          graphics: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461779,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780, UniverInstanceType.UNIVER_SLIDE);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783.getSnapshot(),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.masterPages;
      return !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781] ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781] = xn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781], var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461785[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781].pageSize ?? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461784.defaultPageSize, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461782), I(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461778.get(P), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461783, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461780, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461781), true);
    }
  },
  En = {
    'id': "slide.command.set-presentation-background-graphics",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795) => {
      var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796;
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795) return false;
      let {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797,
          target: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798,
          masterPageIds: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799,
          graphics: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461795,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797, UniverInstanceType.UNIVER_SLIDE);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461794.get(IUndoRedoService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461801.getSnapshot(),
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A80 = [],
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A81 = [],
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805 = Cn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461798, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461799);
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805.length === 0 && !((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804.masterPages) != null && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461796["master-default"])) {
        let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797,
          'masterPage': qe
        };
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A80.push({
          'id': wn.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB16
        }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805 = [k];
      }
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805.length === 0 ? false : (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461805.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399 => {
        var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400;
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461804.masterPages) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46400[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399],
          var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401 ? Sn(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46401) : [],
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17 = {
            'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797,
            'masterPageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399,
            'graphics': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461800
          },
          var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18 = {
            'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797,
            'masterPageId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46399,
            'graphics': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A6
          };
        var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A80.push({
          'id': Tn.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB17
        }), var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A81.push({
          'id': Tn.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB18
        });
      }), sequenceExecute(var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A80, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461802).result ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461803.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461797,
        'undoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A81,
        'redoMutations': var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A80
      }), true) : false);
    }
  },
  Dn = {
    'id': "slide.mutation.set-name",
    'type': CommandType.MUTATION,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461818, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819) => {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461818.get(IUniverInstanceService).getUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819.unitId, UniverInstanceType.UNIVER_SLIDE);
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820 ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461820.setName(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461819.name), true) : false;
    }
  },
  On = {
    'id': "slide.command.set-name",
    'type': CommandType.COMMAND,
    'handler': (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461824, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825) => {
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826 = B(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461824.get(IUniverInstanceService), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825);
      if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826) return false;
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461824.get(ICommandService),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461824.get(IUndoRedoService),
        {
          presentation: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829,
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461826,
        {
          name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831
        } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461825,
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461829.getSnapshot().name,
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB102 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830,
          'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461831
        },
        var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB103 = {
          'unitId': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830,
          'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461832
        };
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461827.syncExecuteCommand(Dn.id, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB102) ? (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461828.pushUndoRedo({
        'unitID': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461830,
        'redoMutations': [{
          'id': Dn.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB102
        }],
        'undoMutations': [{
          'id': Dn.id,
          'params': var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB103
        }]
      }), true) : false;
    }
  },
  kn = {
    'standard4By3': {
      'width': 720,
      'height': 540
    },
    'wideScreen16By9': {
      'width': 960,
      'height': 540
    },
    'wideScreen16By10': {
      'width': 864,
      'height': 540
    }
  };
export { wn as EnsureSlideMasterPageMutation, En as SetPresentationBackgroundGraphicsCommand, On as SetSlideNameCommand };
export { Dn, Tn, kn };
