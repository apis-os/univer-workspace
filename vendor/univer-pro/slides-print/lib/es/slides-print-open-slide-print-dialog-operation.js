import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, Inject, Injector, LocaleService, PAGE_SIZE, PAPER_TYPES, PaperType, Plugin, UniverInstanceType, createIdentifier, generateRandomId, merge, registerDependencies, toDisposable } from "@univerjs/core";
import { BehaviorSubject } from "rxjs";
import { IPrintPreparationService, PRINT_CONTAINER_CLASS, PaperMarginMap, PrintDirection, PrintPaperMargin, PrintPreparationService } from "@univerjs-pro/print";
import { ObjectProvider, SlidePageBackgroundObject, SlidePageClipGroup, UniverSlidesUIPlugin, assembleGroupHierarchy, isThumbnailRenderableDrawing, resolveGroupFillInheritance, resolveSlideLogicalPageSize } from "@univerjs-pro/slides-ui";
import { ISlideDrawingService, SlideSceneTypeEnum, UniverSlidesPlugin, resolvedSlideLayersToDrawingMap } from "@univerjs-pro/slides";
import { CanvasRenderMode, DRAWING_OBJECT_LAYER_INDEX, Engine, IRenderManagerService, MAIN_VIEW_PORT_KEY, Scene, UniverRenderEnginePlugin, Viewport } from "@univerjs/engine-render";
import { BuiltInUIPart, IMenuManagerService, IUIPartsService, IconManager, MenuItemType, RibbonStartGroup, connectInjector, getMenuHiddenObservable, useDependency, useObservable } from "@univerjs/ui";
import { UniverLicensePlugin } from "@univerjs-pro/license";
import { LoadingMultiIcon, PrintIcon } from "@univerjs/icons";
import { Button, Checkbox, FormLayout, Input, Radio, RadioGroup, Select, borderBottomClassName, clsx, scrollbarClassName } from "@univerjs/design";
import { useEffect, useMemo, useRef, useState } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { B } from "./internal-core-endo.js";
const V = {
    id: "slide.operation.print-open",
    type: CommandType.OPERATION,
    handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410) {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46409.get(B).open(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46410), true;
    }
  },
  H = {
    id: "slide.operation.print-close",
    type: CommandType.OPERATION,
    handler(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413) {
      return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D46413.get(B).close(), true;
    }
  };
export { V as OpenSlidePrintDialogOperation };
export { H };
