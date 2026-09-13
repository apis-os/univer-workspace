import { BuiltInUIPart, IMenuManagerService, IUIPartsService, IconManager, MenuItemType, RibbonStartGroup, connectInjector, getMenuHiddenObservable, useDependency, useObservable } from '@univerjs/ui';
import { CommandType, DataStreamTreeTokenType, DependentOn, Disposable, DisposableCollection, DocumentFlavor, DrawingTypeEnum, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, LocaleService, Plugin, UniverInstanceType, generateRandomId, merge, registerDependencies } from '@univerjs/core';
import { CanvasRenderMode, Documents, Engine, IRenderManagerService, Scene, UniverRenderEnginePlugin, Viewport, documentSkeletonLineIterator } from '@univerjs/engine-render';
import { LS_CONFIG_KEY as var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46182, UniverLicensePlugin, getDocFeatureLimit, getLicenseInfo, isFeatureAuthorizedWithinTime, isLocalCheck } from '@univerjs-pro/license';
import { IPrintPreparationService, PRINT_CANVAS_CLASS as var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46183, PRINT_CONTAINER_CLASS as var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46184, PrintDirection, PrintPreparationService, createPrintStyle } from '@univerjs-pro/print';
import { DocSkeletonManagerService, UniverDocsPlugin } from '@univerjs/docs';
import { DocPrintInterceptorService, VIEWPORT_KEY as var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46185 } from '@univerjs/docs-ui';
import { BehaviorSubject } from 'rxjs';
import { LoadingMultiIcon, PrintIcon } from '@univerjs/icons';
import { jsx } from 'react/jsx-runtime';
function fn_L2_core_endo_routine_io_ON2_heap_nothrow_sigDC72(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652) {
  if (!(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650 > 0) || !(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651 > 0)) return [];
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4652.filter(({
      top: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464,
      bottom: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465
    }) => Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464) && Number.isFinite(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465) && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 > var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464).sort((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467) => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.top),
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A = [],
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5 = 0,
    var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = 0;
  for (; var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650;) {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = Math.min(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4650, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4651);
    for (; ((var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653[var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5]) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4654.top) <= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6;) var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5++;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D;
    for (let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D5; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461 < var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653.length; var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461++) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4653[var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461];
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.top >= var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D) break;
      if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.bottom > var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D) {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46.top;
        break;
      }
    }
    var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A.push({
      'top': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6,
      'bottom': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462
    }), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D6 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D462;
  }
  return var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A;
}
