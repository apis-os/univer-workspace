const e = {
  "sheets-chart": {
    seriesDefaultName: "系列{0}",
    blank: "(空白)",
    msg: {
      emptyTips: "系列を追加してデータの可視化を開始してください",
      sankeyCircularTips: "サンキー図には循環データを含めることはできません",
    },
    bubble: {
      emptyTips: "バブルチャートには少なくとも2列必要です: 横軸、縦軸",
    },
    relation: {
      emptyTips:
        "関係図のデータソースは、2列目に追加のタイプ列を含む共起行列です",
    },
    cloud: { word: "単語", frequency: "頻度" },
    waterfall: { positive: "正の値", negative: "負の値", subtotal: "小計" },
    pareto: { lineName: "累積パーセンテージ" },
    boxplot: {
      min: "最小値",
      q1: "第1四分位数",
      median: "中央値",
      q3: "第3四分位数",
      max: "最大値",
    },
    candlestick: {
      series: "OHLC\x20系列",
      category: "カテゴリ",
      open: "始値",
      high: "高値",
      low: "安値",
      close: "終値",
    },
    histogram: { frequency: "度数" },
    pie: { aggregateOther: "その他", aggregateMembers: "項目" },
    treemap: {
      hierarchy: "階層フィールド",
      value: "値フィールド",
      ownValue: "自身の値",
      children: "子要素",
      diagnostic:
        "ツリーマップには、1\x20つ以上の階層フィールドと\x201\x20つの数値フィールドが必要です。",
    },
    sunburst: {
      hierarchy: "階層",
      value: "値",
      ownValue: "自身の値",
      children: "子要素",
      diagnostic:
        "サンバースト図には、1 つ以上の階層フィールドと 1 つの数値フィールドが必要です。",
    },
    gauge: {
      label: "ラベル",
      value: "値",
      emptyDiagnostic: "ゲージ図には、1 つ以上の有限な数値が必要です。",
      mappingDiagnostic:
        "ゲージ図には、1 つのラベルフィールドと 1 つの値フィールドが必要です。",
      configDiagnostic:
        "ゲージ図の設定が無効です。スケール、範囲、比率、サイズを確認してください。",
    },
    chord: {
      emptyDiagnostic:
        "コード図には、異なる 2 つのノード間に正の重みを持つ関係が 1 つ以上必要です。",
      mappingDiagnostic:
        "コード図には異なるソースフィールドとターゲットフィールドが必要です。値フィールドは任意ですが、両者とは異なる必要があります。",
      configDiagnostic:
        "コード図の設定が無効です。角度、半径、不透明度、サイズを確認してください。",
      source: "ソース",
      target: "ターゲット",
      value: "値",
      count: "関係数",
      associatedValue: "関連付けられた値",
    },
    chartField: {
      missingCategoryFields:
        "このグラフには、ラベル フィールドがさらに必要です。",
      missingSeriesFields: "このグラフには、数値フィールドがさらに必要です。",
      invalidFieldIndex: "選択したグラフ フィールドは使用できなくなりました。",
      invalidValueFieldType:
        "選択した値フィールドに数値データが含まれていません。",
      invalidDataStructure:
        "選択したフィールドは、このグラフに有効なデータ構造を形成していません。",
      unsupportedChartType:
        "このグラフの種類には、フィールド使用ポリシーがありません。",
    },
  },
};
export { e as default };
