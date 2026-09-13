import { IReferencedUnitCatalogService, UniverEmbedPlugin, fromResourceRefUnitType, getResourceRefUnitKey } from "@univerjs-pro/embed";
import { AuthzIoLocalService, BaseDataModel, DependentOn, Disposable, DisposableCollection, IAuthzIoService, IConfigService, IContextService, IMentionIOService, IUndoRedoService, IUniverInstanceService, Inject, Injector, LocaleService, MentionIOLocalService, Plugin, ThemeService, Tools, Univer, UniverInstanceType, Workbook, createIdentifier, merge, toDisposable } from "@univerjs/core";
import { UniverUIPlugin, useDependency, useObservable } from "@univerjs/ui";
import { createContext, useContext, useEffect, useMemo, useRef } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { LS_CONFIG_KEY, UniverLicensePlugin } from "@univerjs-pro/license";
import { BehaviorSubject, Subject } from "rxjs";
import { IBasePermissionService, UniverBasesPlugin } from "@univerjs-pro/bases";
import { IBaseCanvasRootResolverService, IBaseUIStateService, UniverBasesUIPlugin, createScopedBaseCanvasRootResolverService } from "@univerjs-pro/bases-ui";
import { IAttachmentIoService, UniverCollaborationClientPlugin } from "@univerjs-pro/collaboration-client";
import { UniverProFormulaEnginePlugin } from "@univerjs-pro/engine-formula";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { IRenderManagerService, UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverRPCMainThreadPlugin } from "@univerjs/rpc";
import { IRefSelectionsService, REF_SELECTIONS_ENABLED, UniverSheetsPlugin } from "@univerjs/sheets";
import { UniverSheetsFormulaPlugin } from "@univerjs/sheets-formula";
import { RefSelectionsRenderService, UniverSheetsFormulaUIPlugin } from "@univerjs/sheets-formula-ui";
import { UniverSheetsUIPlugin } from "@univerjs/sheets-ui";
let Fe = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.Loading = "loading", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.Ready = "ready", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271.Unavailable = "unavailable", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46271;
  }({}),
  Ie = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.SheetRange = "sheet-range", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273.BaseGrid = "base-grid", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46273;
  }({});
export { Fe as ReferencedUnitViewerStatus, Ie as ReferencedUnitSelectionKind };
