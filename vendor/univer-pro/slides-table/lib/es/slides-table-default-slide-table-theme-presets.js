import { CommandType, DependentOn, Disposable, ICommandService, IConfigService, IResourceManagerService, IUndoRedoService, IUniverInstanceService, Inject, Injector, Plugin, ThemeService, Tools, UniverInstanceType, generateRandomId, merge, sequenceExecute, touchDependencies } from '@univerjs/core';
import { AddSlideElementMutation, ISlideDrawingService, PageElementTypeEnum, PageTypeEnum, RemoveSlideElementMutation, UpdateSlideElementMutation, getSlideCommandTarget, plainTextToSlideDocumentData } from '@univerjs-pro/slides';
import { Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
const jt = {},
  B = {
    'background': '#ffffff',
    'border': '#d0d7e2',
    'primary': '#3f7ef7',
    'primarySubtle': "#eef4ff",
    'primarySubtleAlt': "#f7faff",
    'neutral': {
      'strong': "#111827",
      'medium': "#e5e7eb",
      'subtle': "#f3f4f6",
      'subtleAlt': "#f9fafb",
      'border': "#d0d7e2"
    },
    'blue': {
      'strong': '#2563eb',
      'medium': "#bfdbfe",
      'subtle': "#eff6ff",
      'subtleAlt': "#dbeafe"
    },
    'cyan': {
      'strong': '#0891b2',
      'medium': "#bae6fd",
      'subtle': '#f0f9ff',
      'subtleAlt': "#e0f2fe"
    },
    'green': {
      'strong': "#16a34a",
      'medium': "#dcfce7",
      'subtle': "#f0fdf4",
      'subtleAlt': '#dcfce7'
    },
    'orange': {
      'strong': "#ea580c",
      'medium': "#fed7aa",
      'subtle': '#fff7ed',
      'subtleAlt': "#ffedd5"
    },
    'purple': {
      'strong': "#9333ea",
      'medium': "#e9d5ff",
      'subtle': "#faf5ff",
      'subtleAlt': "#f3e8ff"
    },
    'pink': {
      'strong': '#db2777',
      'medium': "#fbcfe8",
      'subtle': "#fdf2f8",
      'subtleAlt': "#fce7f3"
    }
  },
  Mt = [{
    'key': "neutral",
    'name': "Neutral"
  }, {
    'key': "primary",
    'name': "Primary"
  }, {
    'key': "blue",
    'name': 'Blue'
  }, {
    'key': "cyan",
    'name': "Cyan"
  }, {
    'key': "green",
    'name': "Green"
  }, {
    'key': "orange",
    'name': 'Orange'
  }, {
    'key': "purple",
    'name': "Purple"
  }, {
    'key': "pink",
    'name': "Pink"
  }],
  Nt = [H('univerPrimaryPlainGrid', "bestMatch", 'primary', "plainGrid", 'Primary\x20Plain\x20Grid', {}), H("univerPrimaryHeader", "bestMatch", "primary", "header", 'Primary\x20Header', {
    'firstRow': true
  }), H('univerPrimaryHeaderBandedRows', "bestMatch", 'primary', "headerBandedRows", "Primary Header Banded Rows", {
    'firstRow': true,
    'bandRow': true
  }), H("univerNeutralPlainGrid", "bestMatch", 'neutral', "plainGrid", "Neutral Plain Grid", {}), H("univerGreenHeaderBandedRows", "bestMatch", "green", "headerBandedRows", "Green Header Banded Rows", {
    'firstRow': true,
    'bandRow': true
  }), H('univerPurpleStrongHeader', "bestMatch", 'purple', "strongHeader", 'Purple\x20Strong\x20Header', {
    'firstRow': true
  }), ...Mt.flatMap(({
    key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060
  }) => [H("univer" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060 + "LightPlainGrid", "light", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059, "lightPlainGrid", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060 + " Light Plain Grid", {}), H("univer" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060 + 'LightHeader', "light", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059, 'lightHeader', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060 + '\x20Light\x20Header', {
    'firstRow': true
  }), H("univer" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060 + "LightHeaderBandedRows", "light", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461059, "lightHeaderBandedRows", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461060 + " Light Header Banded Rows", {
    'firstRow': true,
    'bandRow': true
  })]), ...Mt.flatMap(({
    key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062
  }) => [H('univer' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062 + "MediumStrongHeader", "medium", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061, "mediumStrongHeader", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062 + " Medium Header", {
    'firstRow': true
  }), H("univer" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062 + "MediumFirstColumn", "medium", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061, "mediumFirstColumn", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062 + " Medium First Column", {
    'firstCol': true
  }), H("univer" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062 + "MediumHeaderFirstColumn", "medium", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461061, "mediumHeaderFirstColumn", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461062 + " Medium Header First Column", {
    'firstRow': true,
    'firstCol': true,
    'bandRow': true
  })]), ...Mt.map(({
    key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064
  }) => H("univer" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064 + "HorizontalLines", 'minimal', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461063, "horizontalLines", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461064 + " Horizontal Lines", {})), H("univerPrimarySoftGrid", 'minimal', "primary", "softGrid", 'Primary\x20Soft\x20Grid', {}), H('univerNeutralSoftGrid', "minimal", "neutral", "softGrid", "Neutral Soft Grid", {})],
  Pt = Nt.map(({
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065,
    group: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066
  }) => ({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461065,
    'group': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461066
  }));
function H(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461103,
    'group': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461104,
    'family': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461105,
    'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461107,
    'variant': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461106,
    'options': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D461108
  };
}
export { Pt as DEFAULT_SLIDE_TABLE_THEME_PRESETS };
export { jt, B, Nt };
