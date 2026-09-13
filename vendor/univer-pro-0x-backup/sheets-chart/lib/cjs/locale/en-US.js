const e = {
  "sheets-chart": {
    seriesDefaultName: "Series {0}",
    blank: "(Blank)",
    msg: {
      emptyTips: "Add a series to start visualizing your data",
      sankeyCircularTips: "Sankey chart cannot contain circular data",
    },
    bubble: {
      emptyTips: "Bubble chart requires at least 2 columns: X-axis, Y-axis",
    },
    relation: {
      emptyTips:
        "The\x20data\x20source\x20for\x20the\x20relationship\x20graph\x20is\x20the\x20co-word\x20matrix\x20with\x20the\x20additional\x20type\x20column\x20in\x20the\x20second\x20column",
    },
    cloud: { word: "Word", frequency: "Frequency" },
    waterfall: {
      positive: "Positive",
      negative: "Negative",
      subtotal: "Subtotal",
    },
    pareto: { lineName: "Cumulative Percentage" },
    boxplot: {
      min: "Minimum",
      q1: "First quartile",
      median: "Median",
      q3: "Third quartile",
      max: "Maximum",
    },
    candlestick: {
      series: "OHLC series",
      category: "Category",
      open: "Open",
      high: "High",
      low: "Low",
      close: "Close",
    },
    histogram: { frequency: "Frequency" },
    pie: { aggregateOther: "Other", aggregateMembers: "Members" },
    treemap: {
      hierarchy: "Hierarchy\x20fields",
      value: "Value field",
      ownValue: "Own value",
      children: "Children",
      diagnostic:
        "Treemap requires at least one hierarchy field and one numeric value field.",
    },
    sunburst: {
      hierarchy: "Hierarchy",
      value: "Value",
      ownValue: "Own value",
      children: "Children",
      diagnostic:
        "Sunburst requires at least one hierarchy field and one numeric value field.",
    },
    gauge: {
      label: "Label",
      value: "Value",
      emptyDiagnostic: "Gauge requires at least one finite numeric value.",
      mappingDiagnostic:
        "Gauge requires one label field and exactly one value field.",
      configDiagnostic:
        "Gauge configuration is invalid. Check its scale, ranges, ratios, and sizes.",
    },
    chord: {
      emptyDiagnostic:
        "Chord requires at least one positive-weight relationship between two different nodes.",
      mappingDiagnostic:
        "Chord requires distinct Source and Target fields and an optional distinct Value field.",
      configDiagnostic:
        "Chord\x20configuration\x20is\x20invalid.\x20Check\x20its\x20angles,\x20radii,\x20opacity,\x20and\x20sizes.",
      source: "Source",
      target: "Target",
      value: "Value",
      count: "Relationship\x20count",
      associatedValue: "Associated value",
    },
    chartField: {
      missingCategoryFields: "This chart requires more label fields.",
      missingSeriesFields:
        "This\x20chart\x20requires\x20more\x20numeric\x20value\x20fields.",
      invalidFieldIndex: "A selected chart field is no longer available.",
      invalidValueFieldType:
        "A\x20selected\x20value\x20field\x20does\x20not\x20contain\x20numeric\x20data.",
      invalidDataStructure:
        "The selected fields do not form a valid data structure for this chart.",
      unsupportedChartType:
        "This chart type does not have a field-consumption policy.",
    },
  },
};
module.exports = e;
