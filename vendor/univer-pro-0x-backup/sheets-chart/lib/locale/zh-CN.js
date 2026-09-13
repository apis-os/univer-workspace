const e = {
  "sheets-chart": {
    seriesDefaultName: "系列 {0}",
    blank: "(空)",
    msg: {
      emptyTips: "请先添加系列开始数据可视化",
      sankeyCircularTips: "桑基图不能包含循环数据",
    },
    bubble: { emptyTips: "气泡图至少需要2列，X轴、Y轴。" },
    relation: { emptyTips: "关系图数据源为额外添加类型列在第二列的共词矩阵" },
    cloud: { word: "词语", frequency: "频率" },
    waterfall: { positive: "正值", negative: "负值", subtotal: "小计" },
    pareto: { lineName: "累积占比" },
    boxplot: {
      min: "最小值",
      q1: "第一四分位数",
      median: "中位数",
      q3: "第三四分位数",
      max: "最大值",
    },
    candlestick: {
      series: "OHLC\x20系列",
      category: "类别",
      open: "开盘",
      high: "最高",
      low: "最低",
      close: "收盘",
    },
    histogram: { frequency: "频数" },
    pie: { aggregateOther: "其他", aggregateMembers: "成员数" },
    treemap: {
      hierarchy: "层级字段",
      value: "数值字段",
      ownValue: "自身值",
      children: "子项",
      diagnostic: "矩形树图至少需要一个层级字段和一个数值字段。",
    },
    sunburst: {
      hierarchy: "层级",
      value: "数值",
      ownValue: "自身值",
      children: "子项",
      diagnostic: "旭日图至少需要一个层级字段和一个数值字段。",
    },
    gauge: {
      label: "标签",
      value: "数值",
      emptyDiagnostic: "仪表图至少需要一个有限数值。",
      mappingDiagnostic: "仪表图需要一个标签字段且只能有一个数值字段。",
      configDiagnostic:
        "仪表图配置无效，请检查刻度范围、分段区间、比例和尺寸。",
    },
    chord: {
      emptyDiagnostic: "弦图至少需要两个不同节点之间的一条正权重关系。",
      mappingDiagnostic:
        "弦图需要不同的来源字段和目标字段，并可选一个与二者不同的数值字段。",
      configDiagnostic: "弦图配置无效，请检查角度、半径、不透明度和尺寸。",
      source: "来源",
      target: "目标",
      value: "数值",
      count: "关系计数",
      associatedValue: "关联值",
    },
    chartField: {
      missingCategoryFields: "此图表需要更多标签字段。",
      missingSeriesFields: "此图表需要更多数值字段。",
      invalidFieldIndex: "所选图表字段已不可用。",
      invalidValueFieldType: "所选值字段不包含数值数据。",
      invalidDataStructure: "所选字段无法构成此图表所需的有效数据结构。",
      unsupportedChartType: "此图表类型没有字段使用规则。",
    },
  },
};
export { e as default };
