import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
let wt = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045.Top = "top", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045.Middle = "middle", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045.Bottom = "bottom", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461045;
  }({}),
  Tt = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.Horizontal = 'horizontal', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.Vertical = 'vertical', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.Vertical270 = "vertical270", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047.WordArtVertical = "wordArtVertical", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461047;
  }({}),
  Et = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.None = "none", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.Solid = 'solid', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.Gradient = "gradient", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049.Picture = "picture", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461049;
  }({}),
  Dt = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.Linear = "linear", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.Radial = 'radial', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.Angular = "angular", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051.Diamond = "diamond", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461051;
  }({}),
  Ot = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.Stretch = 'stretch', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053.Tile = "tile", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461053;
  }({}),
  kt = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055.Solid = "solid", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055.Dash = 'dash', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055.Dot = "dot", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055.DashDot = "dashDot", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055.None = "none", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461055;
  }({}),
  At = function (var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057) {
    return var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.All = "all", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.Inner = "inner", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.Outer = "outer", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.Top = "top", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.Bottom = "bottom", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.Left = "left", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.Right = 'right', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.None = "none", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.InnerHorizontal = "innerHorizontal", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057.InnerVertical = "innerVertical", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461057;
  }({});
export { wt as SlideTableVerticalAlignEnum, Tt as SlideTableTextDirectionEnum, Et as SlideTableFillTypeEnum, Dt as SlideTableGradientFillTypeEnum, Ot as SlideTablePictureFillModeEnum, kt as SlideTableBorderDashEnum, At as SlideTableBorderPresetEnum };
