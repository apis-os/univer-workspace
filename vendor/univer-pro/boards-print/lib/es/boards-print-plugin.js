import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IImageIoService, IUniverInstanceService, ImageSourceType, Inject, Injector, LocaleService, Plugin, ThemeService, UniverInstanceType, delayAnimationFrame, generateRandomId, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { MessageType } from "@univerjs/design";
import { BuiltInUIPart, ILocalFileService, IMessageService, IUIPartsService, connectInjector, useDependency, useObservable } from "@univerjs/ui";
import { BoardBackgroundType, BoardElementType, IBoardElementService, ResolveBoardCaptureBoundsCommand, UniverBoardsPlugin, resolveBoardElementParentChain } from "@univerjs-pro/boards";
import { BOARDS_UI_PLUGIN_CONFIG_KEY, BOARD_RENDER_LAYER_INDEX, BoardSettingsMenuContributionSubmenu, IBoardSettingsMenuContributionService, UniverBoardsUIPlugin, createBoardElementRenderObject, resolveBoardRenderAdapters } from "@univerjs-pro/boards-ui";
import { IShapeHostAdapterRegistry } from "@univerjs-pro/engine-shape";
import { IPrintPreparationService, PrintPreparationService } from "@univerjs-pro/print";
import { FormulaShapeResultStatus, ShapeFormulaService } from "@univerjs-pro/shape-editor";
import { CanvasRenderMode, Engine, ICanvasColorService, MAIN_VIEW_PORT_KEY, Scene, Viewport } from "@univerjs/engine-render";
import { BehaviorSubject } from "rxjs";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { DownloadImageIcon, LoadingMultiIcon, PrintIcon } from "@univerjs/icons";
import { jsx, jsxs } from "react/jsx-runtime";
import { W } from "./internal-glue.js";
import { J, X, Y, q } from "./boards-print-print-board-operation.js";
import { z } from "./boards-print-board-print-composition.js";
function Le() {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355 = useDependency(LocaleService),
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 = useObservable(useDependency(W).preparing$, null, true);
  if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356) return null;
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46355.t(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 === "print" ? "boards-print.loading.print" : "boards-print.loading.image");
  return jsx("div", {
    "data-u-comp": "boards-printing-mask",
    "aria-busy": "true",
    "aria-label": var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357,
    className: "univer-fixed univer-inset-0 univer-z-[1000] univer-flex univer-cursor-wait univer-items-center univer-justify-center univer-bg-gray-100 dark:!univer-bg-gray-900",
    children: jsxs("div", {
      role: "status",
      "aria-live": "polite",
      className: "univer-flex univer-items-center univer-gap-3 univer-rounded-lg univer-bg-gray-0 univer-px-5 univer-py-4 univer-text-sm univer-text-gray-900 univer-shadow-lg dark:!univer-bg-gray-700 dark:!univer-text-gray-0",
      children: [jsx(LoadingMultiIcon, {
        className: "univer-size-6 univer-animate-spin univer-text-gray-500"
      }), jsx("span", {
        children: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46357
      })]
    })
  });
}
let Z = class extends Disposable {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229) {
    super(), this._commandService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46225, this._localeService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46226, this._settingsMenuContributionService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46227, this._uiPartsService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46228, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46229, this.disposeWithMe(this._commandService["registerCommand"](q)), this.disposeWithMe(this._commandService["registerCommand"](J)), this.disposeWithMe(this._settingsMenuContributionService["register"]({
      id: "boards-print.settings.print",
      icon: PrintIcon,
      label: () => this._localeService["t"]("boards-print.menu.print"),
      order: 100,
      group: "output",
      onClick: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644 => {
        await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4644.executeCommand(q.id);
      }
    })), this.disposeWithMe(this._settingsMenuContributionService["register"]({
      id: "boards-print.settings.export-png",
      icon: DownloadImageIcon,
      label: () => this._localeService["t"]("boards-print.menu.exportPng"),
      order: 200,
      group: "output",
      submenu: BoardSettingsMenuContributionSubmenu.SaveAs,
      onClick: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646 => {
        await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4646.executeCommand(J.id, {
          format: "png"
        });
      }
    })), this.disposeWithMe(this._settingsMenuContributionService["register"]({
      id: "boards-print.settings.export-jpeg",
      icon: DownloadImageIcon,
      label: () => this._localeService["t"]("boards-print.menu.exportJpeg"),
      order: 300,
      group: "output",
      submenu: BoardSettingsMenuContributionSubmenu.SaveAs,
      onClick: async var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648 => {
        await var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4648.executeCommand(J.id, {
          format: "jpeg"
        });
      }
    })), this.disposeWithMe(this._uiPartsService["registerComponent"](BuiltInUIPart.GLOBAL, () => connectInjector(Le, this._injector)));
  }
};
let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 = class extends Plugin {
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235 = X, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237) {
    super(), this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46235, this._injector = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46236, this._configService = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46237;
    let {
      menu: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238,
      ...var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239
    } = merge({}, X, this._config);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238 && this._configService["setConfig"]("menu", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46238, {
      merge: true
    }), this._configService["setConfig"](Y, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46239);
  }
  onStarting() {
    this._injector["has"](IPrintPreparationService) || this._injector["add"]([IPrintPreparationService, {
      useClass: PrintPreparationService
    }]), this._injector["has"](z) || this._injector["add"]([z]), registerDependencies(this._injector, [[W], [Z]]);
  }
  onReady() {
    this._injector["get"](Z);
  }
};
export { var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46361 as UniverBoardsPrintPlugin };
export { Z };
