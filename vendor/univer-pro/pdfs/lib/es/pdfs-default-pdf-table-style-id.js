import { CommandType, DEFAULT_STYLES, DependentOn, Disposable, ICommandService, IConfigService, IUniverInstanceService, ImageSourceType, Inject, Injector, Plugin, UnitModel, UniverInstanceType, generateRandomId, merge } from '@univerjs/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { UniverLicensePlugin } from '@univerjs-pro/license';
import { id } from "./internal-core-endo.js";
const pu = "univerPrimaryPlainGrid",
  mu = {
    'bandRow': true
  },
  H = {
    'background': "#ffffff",
    'border': '#d0d7e2',
    'primary': "#3f7ef7",
    'primarySubtle': '#eef4ff',
    'primarySubtleAlt': "#f7faff",
    'neutral': {
      'strong': "#111827",
      'medium': "#e5e7eb",
      'subtle': "#f3f4f6",
      'subtleAlt': "#f9fafb",
      'border': "#d0d7e2"
    },
    'blue': {
      'strong': "#2563eb",
      'medium': "#bfdbfe",
      'subtle': '#eff6ff',
      'subtleAlt': "#dbeafe"
    },
    'cyan': {
      'strong': "#0891b2",
      'medium': "#bae6fd",
      'subtle': "#f0f9ff",
      'subtleAlt': '#e0f2fe'
    },
    'green': {
      'strong': "#16a34a",
      'medium': "#dcfce7",
      'subtle': "#f0fdf4",
      'subtleAlt': "#dcfce7"
    },
    'orange': {
      'strong': "#ea580c",
      'medium': '#fed7aa',
      'subtle': "#fff7ed",
      'subtleAlt': "#ffedd5"
    },
    'purple': {
      'strong': '#9333ea',
      'medium': "#e9d5ff",
      'subtle': '#faf5ff',
      'subtleAlt': "#f3e8ff"
    },
    'pink': {
      'strong': '#db2777',
      'medium': "#fbcfe8",
      'subtle': "#fdf2f8",
      'subtleAlt': "#fce7f3"
    }
  },
  hu = [{
    'key': "neutral",
    'name': 'Neutral'
  }, {
    'key': "primary",
    'name': "Primary"
  }, {
    'key': "blue",
    'name': "Blue"
  }, {
    'key': "cyan",
    'name': "Cyan"
  }, {
    'key': "green",
    'name': "Green"
  }, {
    'key': 'orange',
    'name': "Orange"
  }, {
    'key': "purple",
    'name': "Purple"
  }, {
    'key': "pink",
    'name': "Pink"
  }],
  gu = [U("univerPrimaryPlainGrid", "bestMatch", 'primary', "plainGrid", "Primary Plain Grid", {}), U('univerPrimaryHeader', 'bestMatch', "primary", 'header', 'Primary\x20Header', {
    'firstRow': true
  }), U("univerPrimaryHeaderBandedRows", "bestMatch", "primary", 'headerBandedRows', "Primary Header Banded Rows", {
    'firstRow': true,
    'bandRow': true
  }), U("univerNeutralPlainGrid", "bestMatch", "neutral", "plainGrid", "Neutral Plain Grid", {}), U("univerGreenHeaderBandedRows", "bestMatch", "green", "headerBandedRows", "Green Header Banded Rows", {
    'firstRow': true,
    'bandRow': true
  }), U('univerPurpleStrongHeader', "bestMatch", "purple", "strongHeader", "Purple Strong Header", {
    'firstRow': true
  }), ...hu.flatMap(({
    key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465579,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465580
  }) => [U("univer" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465580 + "LightPlainGrid", "light", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465579, "lightPlainGrid", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465580 + " Light Plain Grid", {}), U("univer" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465580 + 'LightHeader', "light", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465579, 'lightHeader', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465580 + " Light Header", {
    'firstRow': true
  }), U("univer" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465580 + "LightHeaderBandedRows", "light", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465579, 'lightHeaderBandedRows', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465580 + " Light Header Banded Rows", {
    'firstRow': true,
    'bandRow': true
  })]), ...hu.flatMap(({
    key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465581,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465582
  }) => [U('univer' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465582 + "MediumStrongHeader", "medium", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465581, 'mediumStrongHeader', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465582 + " Medium Header", {
    'firstRow': true
  }), U("univer" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465582 + 'MediumFirstColumn', "medium", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465581, "mediumFirstColumn", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465582 + '\x20Medium\x20First\x20Column', {
    'firstCol': true
  }), U('univer' + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465582 + 'MediumHeaderFirstColumn', "medium", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465581, "mediumHeaderFirstColumn", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465582 + '\x20Medium\x20Header\x20First\x20Column', {
    'firstRow': true,
    'firstCol': true,
    'bandRow': true
  })]), ...hu.map(({
    key: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465583,
    name: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465584
  }) => U("univer" + var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465584 + "HorizontalLines", "minimal", var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465583, 'horizontalLines', var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465584 + " Horizontal Lines", {})), U("univerPrimarySoftGrid", "minimal", "primary", "softGrid", "Primary Soft Grid", {}), U("univerNeutralSoftGrid", "minimal", "neutral", "softGrid", "Neutral Soft Grid", {})],
  var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A483 = gu.map(({
    id: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465585,
    group: var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465586
  }) => ({
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465585,
    'group': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465586
  }));
function U(var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465635, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465639, var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465640) {
  return {
    'id': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465635,
    'group': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465636,
    'family': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465637,
    'name': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465639,
    'options': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465640,
    'variant': var_L0_core_endo_value_pure_O1_zalloc_nothrow_sig0D465638
  };
}
export { pu as DEFAULT_PDF_TABLE_STYLE_ID, mu as DEFAULT_PDF_TABLE_STYLE_OPTIONS, H as DEFAULT_PDF_TABLE_THEME_PALETTE, var_L0_core_endo_itemsList_pure_O1_zalloc_nothrow_sigE78A483 as DEFAULT_PDF_TABLE_THEME_PRESETS };
export { gu };
