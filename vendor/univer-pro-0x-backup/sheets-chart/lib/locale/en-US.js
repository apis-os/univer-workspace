const e = {
  "sheets-chart": {
    seriesDefaultName: "Series {0}",
    blank: "(Blank)",
    msg: {
      emptyTips:
        "Add\x20a\x20series\x20to\x20start\x20visualizing\x20your\x20data",
      sankeyCircularTips: "Sankey chart cannot contain circular data",
    },
    bubble: {
      emptyTips: "Bubble chart requires at least 2 columns: X-axis, Y-axis",
    },
    relation: {
      emptyTips:
        "The data source for the relationship graph is the co-word matrix with the additional type column in the second column",
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
      q3: "Third\x20quartile",
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
      ownValue: "Own\x20value",
      children: "Children",
      diagnostic:
        "Sunburst\x20requires\x20at\x20least\x20one\x20hierarchy\x20field\x20and\x20one\x20numeric\x20value\x20field.",
    },
    gauge: {
      label: "Label",
      value: "Value",
      emptyDiagnostic: "Gauge requires at least one finite numeric value.",
      mappingDiagnostic:
        "Gauge\x20requires\x20one\x20label\x20field\x20and\x20exactly\x20one\x20value\x20field.",
      configDiagnostic:
        "Gauge\x20configuration\x20is\x20invalid.\x20Check\x20its\x20scale,\x20ranges,\x20ratios,\x20and\x20sizes.",
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
      count: "Relationship count",
      associatedValue: "Associated\x20value",
    },
    chartField: {
      missingCategoryFields:
        "This\x20chart\x20requires\x20more\x20label\x20fields.",
      missingSeriesFields: "This chart requires more numeric value fields.",
      invalidFieldIndex: "A selected chart field is no longer available.",
      invalidValueFieldType:
        "A selected value field does not contain numeric data.",
      invalidDataStructure:
        "The selected fields do not form a valid data structure for this chart.",
      unsupportedChartType:
        "This\x20chart\x20type\x20does\x20not\x20have\x20a\x20field-consumption\x20policy.",
    },
  },
};
export { e as default };
