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
const H = createContext(null);
function xe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194 = useMemo(() => ({
      session: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.session
    }), [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.session]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195 = useRef(new WeakMap());
  return useEffect(() => {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46195.current,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.session) ?? 0) + 1;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.set(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.session, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D), () => {
      queueMicrotask(() => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.get(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.session) === var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D && (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4636.delete(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.session), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.session["dispose"]());
      });
    };
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.session]), jsx(H.Provider, {
    value: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46194,
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46193.children
  });
}
function Se(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199) {
  return jsx("div", {
    className: "\n univer-flex univer-min-h-0 univer-w-full\n " + (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.className ?? "") + "\n ",
    style: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.style,
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46199.children
  });
}
function Ce() {
  let {
      session: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201
    } = U(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203 = useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.state$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.getState(), false, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201]);
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.units["length"] === 0 ? null : jsx("nav", {
    "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.t("embed-unit-ui.referencedUnitViewer.title"),
    className: "univer-mr-3 univer-shrink-0 univer-overflow-y-auto univer-border-r univer-border-gray-300 univer-pr-2 dark:!univer-border-gray-700",
    style: {
      width: "clamp(9rem, 18vw, 13rem)"
    },
    children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.units["map"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 => {
      let var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638 === var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46203.activeUnit;
      return jsxs("button", {
        "aria-current": var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A,
        className: "\n univer-mb-1 univer-w-full univer-rounded univer-border-none univer-p-2 univer-text-left\n " + (var_L0_core_endo_isFlag_pure_O1_zalloc_nothrow_sigD81A ? "univer-bg-primary-50 univer-text-primary-700" : "univer-bg-transparent") + "\n ",
        type: "button",
        onClick: () => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46201.activateUnit(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638).catch(() => undefined),
        children: [jsx("div", {
          className: "univer-truncate univer-text-sm univer-font-medium",
          children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.name
        }), jsx("div", {
          className: "univer-text-xs univer-text-gray-500",
          children: fromResourceRefUnitType(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.ref["unit"].type) === UniverInstanceType.UNIVER_SHEET ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.t("embed-unit-ui.referencedUnitViewer.sheet") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46202.t("embed-unit-ui.referencedUnitViewer.base")
        })]
      }, getResourceRefUnitKey(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4638.ref));
    })
  });
}
function we() {
  let {
      session: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207
    } = U(),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209 = useObservable(() => var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.state$, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.getState(), false, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207]),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210 = useRef(null),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211 = useRef(0);
  return useEffect(() => {
    let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211.current + 1;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211.current = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210.current;
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.mount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640), () => {
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640 && queueMicrotask(() => {
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46211.current === var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207.unmount(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4640);
      });
    };
  }, [var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46207]), jsxs("div", {
    className: "univer-relative univer-min-h-0 univer-flex-1 univer-overflow-hidden univer-rounded univer-border univer-border-gray-200",
    children: [jsx("div", {
      className: "univer-size-full univer-overflow-auto",
      ref: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46210
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209.status !== "ready" && jsx("div", {
      className: "dark:!univer-bg-gray-900/90\x20univer-absolute\x20univer-inset-0\x20univer-flex\x20univer-items-center\x20univer-justify-center\x20univer-bg-white/90\x20univer-p-6\x20univer-text-center\x20univer-text-sm\x20univer-text-gray-500\x20dark:!univer-text-gray-400",
      role: "status",
      children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209.status === "loading" ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.t("embed-unit-ui.referencedUnitViewer.loading") : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46208.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46209.error ? "embed-unit-ui.referencedUnitViewer.unavailable" : "embed-unit-ui.referencedUnitViewer.empty")
    })]
  });
}
function U() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217 = useContext(H);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217) throw Error("REFERENCED_UNIT_VIEWER_PROVIDER_REQUIRED");
  return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46217;
}
const Te = {
  Frame: Se,
  Provider: xe,
  UnitList: Ce,
  Viewport: we
};
export { Te as ReferencedUnitViewer };
