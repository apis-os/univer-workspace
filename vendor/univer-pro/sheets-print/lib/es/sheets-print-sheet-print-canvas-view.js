import { LS_CONFIG_KEY, ReleaseType, UniverLicensePlugin, getLicenseInfo, getSheetFeatureLimit, isFeatureAuthorizedWithinTime, isLocalCheck } from '@univerjs-pro/license';
import { IPrintPreparationService, PRINT_CANVAS_CLASS, PRINT_CONTAINER_CLASS, PaperMarginMap, PrintAlign, PrintDirection, PrintPaperMargin, PrintPreparationService, PrintScale, createPrintStyle } from '@univerjs-pro/print';
import { BuildTextUtils, CommandType, CustomRangeType, DependentOn, Disposable, DisposableCollection, ICommandService, IConfigService, ILocalStorageService, IPermissionService, IUniverInstanceService, Inject, Injector, JSONX, LocaleService, PAGE_SIZE, PaperType, Plugin, Quantity, RichTextBuilder, Tools, UniverInstanceType, UserManagerService, awaitTime, createIdentifier, dateKit, generateRandomId, merge, registerDependencies, touchDependencies } from '@univerjs/core';
import { RangeProtectionPermissionViewPoint, SheetsSelectionsService, UniverSheetsPlugin, WorkbookCopyPermission, WorkbookPrintPermission, WorkbookViewPermission, WorksheetCopyPermission, WorksheetViewPermission, getSheetCommandTarget } from '@univerjs/sheets';
import { BuiltInUIPart, ComponentManager, ContextMenuGroup, ContextMenuPosition, IDialogService, IMenuManagerService, IMessageService, IShortcutService, ISidebarService, IUIPartsService, IconManager, KeyCode, MenuItemType, MetaKeys, RibbonStartGroup, connectInjector, getMenuHiddenObservable, useDependency, useEvent, useObservable, useVirtualList } from '@univerjs/ui';
import { BehaviorSubject, debounceTime } from 'rxjs';
import { CanvasRenderMode, DEFAULT_FONTFACE_PLANE, Engine, IRenderManagerService, IWatermarkTypeEnum, SHEET_VIEWPORT_KEY, Scene, SheetExtension, Spreadsheet, SpreadsheetColumnHeader, SpreadsheetRowHeader, UNIVER_WATERMARK_STORAGE_KEY, UniverRenderEnginePlugin, Viewport, fixLineWidthByScale, renderWatermark } from '@univerjs/engine-render';
import { SheetPrintInterceptorService, SheetPrintingResourceCollector, SheetSkeletonManagerService, UniverSheetsUIPlugin, getCurrentRangeDisable$, whenSheetEditorFocused } from '@univerjs/sheets-ui';
import { Button, Checkbox, CheckboxGroup, Dropdown, FormLayout, Input, MessageType, Radio, RadioGroup, Select, borderBottomClassName, borderClassName, clsx, scrollbarClassName } from '@univerjs/design';
import { CalendarIcon, ClockIcon, DocSettingIcon, IncreaseIcon, LoadingMultiIcon, MoreDownIcon, PrintIcon, ReduceIcon, SheetIcon, TextIcon } from '@univerjs/icons';
import { forwardRef, memo, useEffect, useMemo, useRef, useState } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';
import { RichTextEditingMutation } from '@univerjs/docs';
import { IEditorService, RichTextEditor } from '@univerjs/docs-ui';
import { Wt } from "./sheets-print-print-area.js";
import { Q, q } from "./internal-glue.js";
const rn = Object.values(Wt);
function an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788) {
  let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46787;
  return rn.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316 => {
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789.replaceAll(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316, Q(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46316, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46788));
  }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46789;
}
function ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810) {
  var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46809.getExtensionsByOrder().forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324 => {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324.copyForPrinting) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46325.call(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46324);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46810.register(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46326);
  });
}
var un = class extends Disposable {
  get _watermarkConfig() {
    return this._renderConfig['watermark'];
  }
  get key() {
    return this._key;
  }
  get engine() {
    return this._engine;
  }
  get container() {
    return this._container;
  }
  get root() {
    return this._root;
  }
  get renderConfig() {
    return this._renderConfig;
  }
  set renderConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330) {
    this._renderConfig = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46330;
  }
  constructor(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335 = true, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336 = 1) {
    super(), this._accessor = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46332, this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46333, this._renderConfig = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46334, this._isPreview = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46335, this._previewScale = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46336, q(this, "_engine", undefined), q(this, "_scene", undefined), q(this, '_key', undefined), q(this, "_unitId", undefined), q(this, "_subUnitId", undefined), q(this, "_viewMain", undefined), q(this, "_viewLeft", undefined), q(this, "_viewTop", undefined), q(this, '_viewLeftTop', undefined), q(this, "_viewRowBottom", null), q(this, "_viewColumnRight", null), q(this, "_container", document.createElement("div")), q(this, "_root", document.createElement('div')), q(this, "_skeleton", undefined), q(this, "_univerInstanceService", undefined), q(this, '_dirty', true), q(this, '_targetRender', undefined), q(this, '_effects', new DisposableCollection()), q(this, "_resourceCollector", new ox22c701()), q(this, "_spreadsheetObject", undefined), q(this, "_totalWidth", 0), q(this, "_totalHeight", 0);
    let {
      unitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337,
      subUnitId: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338
    } = this._config;
    this._unitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337, this._subUnitId = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338, this._key = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337 + '_' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338, this._univerInstanceService = this._accessor['get'](IUniverInstanceService);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339 = this._accessor["get"](ox4c4043);
    this._targetRender = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46339.getRenderUnitById(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46337);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340 = this._targetRender["with"](ox5bf4ca).ensureSkeleton(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46338);
    this._skeleton = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46340, this._root["className"] = "__root", this._initRenderer();
  }
  dispose() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350;
    super.dispose(), this._effects["dispose"](), (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350 = this._container['parentElement']) == null || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46350.removeChild(this._container);
  }
  get paperSize() {
    let {
      w: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352,
      h: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353
    } = this._config["pageSize"];
    return {
      'w': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46352 * this._previewScale,
      'h': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46353 * this._previewScale
    };
  }
  get margin() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356 = this._config['margin'];
    return {
      'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356.top * this._previewScale,
      'bottom': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356.bottom * this._previewScale,
      'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356.left * this._previewScale,
      'right': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46356.right * this._previewScale
    };
  }
  _initRenderer() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358 = this.paperSize,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33 = this._config["scale"] * this._previewScale,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34 = this._isPreview ? Math.max(1, window.devicePixelRatio) : 1;
    this._engine = new oxc5ca8('', {
      'elementWidth': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.w,
      'elementHeight': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46358.h,
      'dpr': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D34,
      'renderMode': ox33496e.Printing
    }), this._scene = new ox7bfeb2(this._key, this._engine), this._scene["scale"](var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D33), this._engine["mount"](this._container, this._isPreview), this._engine["getCanvas"]().getContext().setId(this._key + '_' + generateRandomId(4)), this._addComponent(), this._addViewport(), this.disposeWithMe({
      'dispose': () => {
        this._engine['dispose'](), this._scene['dispose'](), this.clearMemory();
      }
    });
  }
  clearMemory() {
    this._skeleton["resetCache"]();
  }
  setPreviewScale(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360) {
    this._scene["scale"](this._config["scale"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, this._config["scale"] * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360), this._previewScale = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46360, this.markDirty(true);
  }
  updateConfig(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362) {
    this._config = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46362, this.markDirty(true);
  }
  markDirty(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364) {
    this._dirty = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46364;
  }
  _addComponent() {
    var var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367 = new ox309720("__SpreadsheetPrintRender__", this._skeleton, false);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367.isPrinting = true;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 = (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366 = this._targetRender) == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46366.mainComponent;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368 && ln(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46368, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367), this._scene["addObject"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367), this._spreadsheetObject = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46367, this._config["includeHeaderDimensions"]) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663 = new ox5d98b0("__RowHeaderPrint__", this._skeleton),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664 = new ox3297ad("__ColumnHeaderPrint__", this._skeleton);
      this._scene['addObjects']([var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4663, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4664], 1);
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369 = this._accessor["get"](ox4f6954);
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.interceptor["fetchThroughInterceptors"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46369.interceptor["getInterceptPoints"]().PRINTING_COMPONENT_COLLECT)(undefined, {
      'unitId': this._unitId,
      'subUnitId': this._subUnitId,
      'scene': this._scene,
      'engine': this._engine,
      'root': this._root,
      'worksheet': this._skeleton["worksheet"],
      'skeleton': this._skeleton,
      'range': this._config["range"],
      'offset': this._getTranslateOffset(),
      'spreadsheet': this._spreadsheetObject,
      'resourceCollector': this._resourceCollector
    });
  }
  _addViewport() {
    this._viewMain = new ox299c62(ox15568c.VIEW_MAIN, this._scene, {
      'explicitViewportWidthSet': true,
      'explicitViewportHeightSet': true
    }), this._viewLeft = new ox299c62(ox15568c.VIEW_MAIN_LEFT, this._scene, {
      'explicitViewportWidthSet': true,
      'explicitViewportHeightSet': true
    }), this._viewTop = new ox299c62(ox15568c.VIEW_MAIN_TOP, this._scene, {
      'explicitViewportWidthSet': true,
      'explicitViewportHeightSet': true
    }), this._viewLeftTop = new ox299c62(ox15568c.VIEW_MAIN_LEFT_TOP, this._scene, {
      'explicitViewportWidthSet': true,
      'explicitViewportHeightSet': true
    }), this._config["includeHeaderDimensions"] && (this._viewRowBottom = new ox299c62(ox15568c.VIEW_ROW_BOTTOM, this._scene, {
      'explicitViewportWidthSet': true,
      'explicitViewportHeightSet': true
    }), this._viewColumnRight = new ox299c62(ox15568c.VIEW_COLUMN_RIGHT, this._scene, {
      'explicitViewportWidthSet': true,
      'explicitViewportHeightSet': true
    }));
  }
  _resizeViewport() {
    let {
        freeze: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374,
        range: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375
      } = this._config,
      {
        xSplit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376,
        ySplit: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377,
        startColumn: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378,
        startRow: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379
      } = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46374,
      {
        rowHeaderWidth: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380,
        columnHeaderHeight: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381
      } = this._skeleton;
    this._scene["scale"](this._config["scale"] * this._previewScale, this._config['scale'] * this._previewScale);
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382 = this._skeleton['getNoMergeCellWithCoordByIndex'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376, false),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383 = this._skeleton["getNoMergeCellWithCoordByIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46379, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46378, false),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.startX - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382.startX : 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.startY - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382.startY : 0,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4 = {
        'startX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382.startX : 0,
        'endX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.startX : 0,
        'startY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46382.startY : 0,
        'endY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 > 0 ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46383.startY : 0
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384 = this._skeleton["getNoMergeCellWithCoordByIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.startRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.startColumn, false),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385 = this._scene["getPrecisionScale"](),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665 => ox512020(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4665, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.scaleX),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666 => ox512020(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4666, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.scaleY),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388 = this._skeleton["getNoMergeCellWithCoordByIndex"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.endRow, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46375.endColumn, false),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39 = Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.endX) - Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.startX, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.endX)),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 = Math.max(0, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.endY) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.startY, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.endY))),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41 = 1 / Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.scaleX, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46385.scaleY),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 = this._config["includeHeaderDimensions"] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380 : 0,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 = this._config["includeHeaderDimensions"] ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381 : 0,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D42 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D43 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40 + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41;
    this._totalWidth = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB14, this._totalHeight = var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB15;
    let var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5 = {
        'x': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D37,
        'y': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D38
      },
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D41,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6 = {
        'x': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.endX) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.startX, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.endX)),
        'y': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46388.endY) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(Math.max(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.startY, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.endY))
      };
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 > 0 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 > 0 ? (this._viewLeftTop["enable"](), this._viewLeftTop["resizeWhenFreezeChange"]({
      'top': 0,
      'left': 0,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5.y),
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5.x)
    }), this._viewLeftTop["updateScrollVal"]({
      'viewportScrollX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.startX) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380),
      'viewportScrollY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.startY) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381)
    })) : this._viewLeftTop["disable"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46376 > 0 ? (this._viewLeft["enable"](), this._viewLeft["resizeWhenFreezeChange"]({
      'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5.y),
      'left': 0,
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.y,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5.x)
    }), this._viewLeft["updateScrollVal"]({
      'viewportScrollX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.startX) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380),
      'viewportScrollY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.startY) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5.y)
    })) : this._viewLeft["disable"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46377 > 0 ? (this._viewTop["enable"](), this._viewTop['resizeWhenFreezeChange']({
      'top': 0,
      'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5.x),
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5.y),
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.x
    }), this._viewTop["updateScrollVal"]({
      'viewportScrollX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.startX) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5.x),
      'viewportScrollY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB4.startY) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381)
    })) : this._viewTop["disable"](), this._config["includeHeaderDimensions"]) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381),
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.x,
        var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.y;
      this._viewMain["resizeWhenFreezeChange"]({
        'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668,
        'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667,
        'height': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9,
        'width': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8
      }), this._viewMain["updateScrollVal"]({
        'viewportScrollX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.startX),
        'viewportScrollY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.startY)
      }), this._viewRowBottom && this._viewColumnRight && (this._viewColumnRight['enable'](), this._viewColumnRight["resizeWhenFreezeChange"]({
        'top': 0,
        'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667,
        'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668,
        'width': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB8
      }), this._viewColumnRight["updateScrollVal"]({
        'viewportScrollX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.startX),
        'viewportScrollY': 0
      }), this._viewRowBottom['enable'](), this._viewRowBottom["resizeWhenFreezeChange"]({
        'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4668,
        'left': 0,
        'height': var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB9,
        'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4667
      }), this._viewRowBottom["updateScrollVal"]({
        'viewportScrollX': 0,
        'viewportScrollY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.startY)
      }));
    } else this._viewMain["resizeWhenFreezeChange"]({
      'top': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5.y),
      'left': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5.x),
      'height': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D40) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46389 + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.y,
      'width': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D39) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46390 + var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB6.x
    }), this._viewMain["updateScrollVal"]({
      'viewportScrollX': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.startX) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46380) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46386(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5.x),
      'viewportScrollY': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46384.startY) + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46381) - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46387(var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB5.y)
    });
  }
  _getTranslateOffset() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408 = this.margin,
      {
        vAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409,
        hAlign: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410
      } = this._renderConfig,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 = Math.max(this._scene["scaleX"], this._scene["scaleY"]),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411;
    switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410) {
      case ox446bc3.Start:
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.left;
        break;
      case ox446bc3.End:
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 = this.paperSize['w'] - this._totalWidth * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.right;
        break;
      default:
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.left + (this.paperSize['w'] - this._totalWidth * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.left - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.right) / 2;
        break;
    }
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412;
    switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409) {
      case ox446bc3.Start:
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.top;
        break;
      case ox446bc3.End:
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 = this.paperSize['h'] - this._totalHeight * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.bottom;
        break;
      default:
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412 = (this.paperSize['h'] - this._totalHeight * var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.top - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.bottom) / 2 + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46408.top;
        break;
    }
    return {
      'offsetX': Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46411),
      'offsetY': Math.round(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46412),
      'scale': var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D51
    };
  }
  prepare() {
    this._resizeViewport(), this._effects["dispose"](), this._effects = new DisposableCollection();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418 = this._accessor["get"](ox4f6954),
      {
        offsetX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419,
        offsetY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420,
        scale: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421
      } = this._getTranslateOffset(),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46419,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46420;
    this._root["style"].left = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46422 + 'px', this._root['style'].top = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46423 + 'px';
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 = this._totalWidth * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 = this._totalHeight * var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46421;
    this._root['style'].width = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D53 + 'px', this._root["style"].height = var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D54 + 'px', this._root["style"].position = "absolute", this._root['style'].overflow = "hidden", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.interceptor["fetchThroughInterceptors"](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46418.interceptor["getInterceptPoints"]().PRINTING_DOM_COLLECT)(this._effects, {
      'unitId': this._unitId,
      'subUnitId': this._subUnitId,
      'scene': this._scene,
      'engine': this._engine,
      'root': this._root,
      'worksheet': this._skeleton["worksheet"],
      'skeleton': this._skeleton,
      'range': this._config["range"],
      'offset': this._getTranslateOffset(),
      'resourceCollector': this._resourceCollector
    });
  }
  _renderMainScene() {
    this._dirty && this.prepare();
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430 = this._engine['getCanvas']().getContext(),
      {
        gridlines: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431
      } = this._renderConfig,
      {
        offsetX: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432,
        offsetY: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433
      } = this._getTranslateOffset();
    this._spreadsheetObject["setForceDisableGridlines"](!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46431), this._spreadsheetObject["makeForceDirty"](), this._scene["makeDirty"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.translateWithPrecision(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46432, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46433), this._scene["render"](), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46430.restore();
  }
  _renderHeaderFooterByCustom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440) {
    let {
        w: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441,
        h: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442
      } = this.paperSize,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443 = this._engine["getCanvas"]().getContext();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.font = "13px " + ox5b23a3;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57 = 19 * this._previewScale,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58 = 20 * this._previewScale,
      var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10 = {
        'workbook': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46439,
        'worksheet': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46440,
        'now': dateKit(),
        'localeService': this._accessor["get"](LocaleService),
        'page': this._config["page"],
        'pageTotal': this._config["pageTotal"],
        'sheetPageTotal': this._config["sheetPageTotal"],
        'sheetPage': this._config["sheetPage"]
      };
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.topLeft) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669 = an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.topLeft, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4669, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58);
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.topCenter) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670 = an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.topCenter, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.measureText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4670, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4671.width) / 2, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58);
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.topRight) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672 = an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.topRight, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.measureText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4672, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4673.width - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58);
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.bottomLeft) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674 = an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.bottomLeft, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4674, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58);
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.bottomCenter) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675 = an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.bottomCenter, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.measureText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4675, (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4676.width) / 2, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58);
    }
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.bottomRight) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677 = an(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46438.bottomRight, var_L0_core_endo_targetObj_pure_O1_zalloc_nothrow_sigA5DB10),
        var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.measureText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677);
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4677, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46441 - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4678.width - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D57, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46442 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D58);
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46443.restore();
  }
  _renderHeaderFooter() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 = this._univerInstanceService['getUnit'](this._config["unitId"], UniverInstanceType.UNIVER_SHEET),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 == null ? undefined : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.getSheetBySheetId(this._config["subUnitId"]),
      {
        headerFooter: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452,
        isCustomHeaderFooter: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453,
        headerFooterSetting: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454
      } = this._renderConfig,
      {
        w: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455,
        h: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456
      } = this.paperSize,
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457 = this._engine["getCanvas"]().getContext();
    if (!var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450 || !var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451) return;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46453 && var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454) {
      this._renderHeaderFooterByCustom(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46454, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451);
      return;
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.save(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.font = "13px " + ox5b23a3;
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61 = 19 * this._previewScale,
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 = 20 * this._previewScale;
    if (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.includes("Date") || var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.includes("Time")) {
      let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = new Date().toLocaleString();
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.includes("Date") ? var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.includes("Time") || (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = new Date().toLocaleDateString()) : var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679 = new Date().toLocaleTimeString(), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4679, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62);
    }
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46452.forEach(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680 => {
      switch (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D4680) {
        case 'WorkbookTitle':
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46450.name,
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.measureText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464),
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.fontBoundingBoxAscent + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465.fontBoundingBoxDescent;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D464, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB1);
            break;
          }
        case 'WorksheetTitle':
          {
            let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46451.getName(),
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.measureText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466),
              var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.fontBoundingBoxAscent + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.fontBoundingBoxDescent;
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D466, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455 - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D467.width + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62 + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB2);
            break;
          }
        case "PageSize":
          {
            let var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3 = '' + this._config['page'],
              var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.measureText(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3);
            var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.fillText(var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB3, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46455 - (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D468.width + var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D61), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46456 - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D62);
            break;
          }
        default:
          break;
      }
    }), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46457.restore();
  }
  _renderLimitWaterMark() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466 = this._accessor["get"](LocaleService),
      var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467 = this._engine["getCanvas"]().getContext();
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.save();
    let var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65 = 20 * this._previewScale;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.fillStyle = "rgba(0,0,0,0.3)", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.font = "12px " + ox5b23a3;
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.measureText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466.t("sheets-print.limit.waterMark")),
      var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66 = (this.paperSize['w'] - var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.width) / 2,
      var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB18 = var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.fontBoundingBoxAscent + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46468.fontBoundingBoxDescent;
    var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466.t('sheets-print.limit.waterMark'), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66, var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65 + var_L0_core_endo_strVal_pure_O1_zalloc_nothrow_sig12FB18), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.fillText(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46466.t("sheets-print.limit.waterMark"), var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D66, this.paperSize['h'] - var_L0_core_endo_countVal_pure_O1_zalloc_nothrow_sig108D65), var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46467.restore();
  }
  render() {
    this._engine["clearCanvas"](), this._renderMainScene(), this._renderHeaderFooter(), this._watermarkConfig && ox9b9654(this._engine["getCanvas"]().getContext(), this._watermarkConfig, this._watermarkConfig['image'], this._accessor["get"](UserManagerService).getCurrentUser());
  }
  renderOnReady() {
    let var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472 = this.engine['onTransformChange$'].subscribeEvent(() => {
      this.render();
    });
    this.disposeWithMe(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46472), this.waitForReady().then(() => this.render());
  }
  waitForReady(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474) {
    return this._resourceCollector['wait'](var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46474);
  }
  getImage() {
    return this._engine["getCanvas"]().toDataURL('image/png', 1);
  }
};
export { un as SheetPrintCanvasView };
