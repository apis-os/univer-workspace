import { SnapshotService, UniverCollaborationPlugin } from "@univerjs-pro/collaboration";
import { CollaborationController, UniverCollaborationClientPlugin } from "@univerjs-pro/collaboration-client";
import { EmbedResourceRefProviderRegistryService, RESOURCE_REF_FILE_KIND, UniverEmbedPlugin } from "@univerjs-pro/embed";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DependentOn, IConfigService, Inject, Injector, Plugin, UniverInstanceType, merge } from "@univerjs/core";
import { x, y } from "./collaboration-embed-resource-ref-provider-id.js";
function S(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623) {
  return {
    registrationId: y,
    priority: 100,
    match: {
      fileKinds: [RESOURCE_REF_FILE_KIND.SELF],
      unitTypes: ["sheet", "doc", "slide", "base", "board"]
    },
    provider: {
      ensureUnit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 => C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4622, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4623)
    }
  };
}
async function C(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.ref["unit"].selector;
  switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.unitType) {
    case UniverInstanceType.UNIVER_SHEET:
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.loadSheet(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629, 0, undefined, {
          createOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.createOptions
        });
        return await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.readyForCollab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.getUnitId()), {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.getUnitId(),
          unitType: UniverInstanceType.UNIVER_SHEET
        };
      }
    case UniverInstanceType.UNIVER_DOC:
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.loadDoc(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629, 0, undefined, {
          createOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.createOptions
        });
        return await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.readyForCollab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.getUnitId()), {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461.getUnitId(),
          unitType: UniverInstanceType.UNIVER_DOC
        };
      }
    case UniverInstanceType.UNIVER_SLIDE:
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.loadSlide(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629, 0, undefined, {
          createOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.createOptions
        });
        return await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.readyForCollab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.getUnitId()), {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462.getUnitId(),
          unitType: UniverInstanceType.UNIVER_SLIDE
        };
      }
    case UniverInstanceType.UNIVER_BASE:
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.loadBase(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629, 0, undefined, {
          createOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.createOptions
        });
        return await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.readyForCollab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.getUnitId()), {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D463.getUnitId(),
          unitType: UniverInstanceType.UNIVER_BASE
        };
      }
    case UniverInstanceType.UNIVER_BOARD:
      {
        let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4627.loadBoard(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4629, 0, undefined, {
          createOptions: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4626.createOptions
        });
        return await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4628.readyForCollab(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.getUnitId()), {
          unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464.getUnitId(),
          unitType: UniverInstanceType.UNIVER_BOARD
        };
      }
    default:
      throw Error(x);
  }
}
export { S as createCollaborationEmbedResourceRefProvider };
