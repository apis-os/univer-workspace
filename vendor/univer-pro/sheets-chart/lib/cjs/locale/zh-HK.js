const e = {
  "sheets-chart": {
    seriesDefaultName: "系列 {0}",
    blank: "(空)",
    msg: {
      emptyTips: "請先添加系列開始數據可視化",
      sankeyCircularTips: "桑基圖不能包含循環數據",
    },
    bubble: { emptyTips: "氣泡圖至少需要2欄，X軸、Y軸。" },
    relation: { emptyTips: "關係圖資料來源為額外新增類型欄在第二欄的共詞矩陣" },
    cloud: { word: "詞", frequency: "頻率" },
    waterfall: { positive: "正值", negative: "負值", subtotal: "小計" },
    pareto: { lineName: "累積占比" },
    boxplot: {
      min: "最小值",
      q1: "第一四分位數",
      median: "中位數",
      q3: "第三四分位數",
      max: "最大值",
    },
    candlestick: {
      series: "OHLC 數列",
      category: "類別",
      open: "開盤價",
      high: "最高價",
      low: "最低價",
      close: "收盤價",
    },
    histogram: { frequency: "頻數" },
    pie: { aggregateOther: "其他", aggregateMembers: "成員" },
    treemap: {
      hierarchy: "階層欄位",
      value: "數值欄位",
      ownValue: "自身值",
      children: "子項",
      diagnostic: "矩形樹圖至少需要一個階層欄位和一個數值欄位。",
    },
    sunburst: {
      hierarchy: "階層",
      value: "數值",
      ownValue: "自身值",
      children: "子項",
      diagnostic: "旭日圖至少需要一個階層欄位和一個數值欄位。",
    },
    gauge: {
      label: "標籤",
      value: "數值",
      emptyDiagnostic: "儀表圖至少需要一個有限數值。",
      mappingDiagnostic: "儀表圖需要一個標籤欄位，而且只能有一個數值欄位。",
      configDiagnostic:
        "儀表圖設定無效，請檢查刻度範圍、分段區間、比例和尺寸。",
    },
    chord: {
      emptyDiagnostic: "弦圖至少需要兩個不同節點之間的一條正權重關係。",
      mappingDiagnostic:
        "弦圖需要不同的來源與目標欄位，並可選擇一個與兩者不同的數值欄位。",
      configDiagnostic: "弦圖設定無效，請檢查角度、半徑、不透明度和尺寸。",
      source: "來源",
      target: "目標",
      value: "數值",
      count: "關係數",
      associatedValue: "關聯值",
    },
    chartField: {
      missingCategoryFields: "此圖表需要更多標籤欄位。",
      missingSeriesFields: "此圖表需要更多數值欄位。",
      invalidFieldIndex: "所選圖表欄位已無法使用。",
      invalidValueFieldType: "所選數值欄位不包含數值資料。",
      invalidDataStructure: "所選欄位無法構成此圖表所需的有效資料結構。",
      unsupportedChartType: "此圖表類型沒有欄位使用規則。",
    },
  },
};
module.exports = e;
