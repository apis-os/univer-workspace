const e = {
  "sheets-chart": {
    seriesDefaultName: "계열{0}",
    blank: "(비어 있음)",
    msg: {
      emptyTips: "계열을\x20추가하여\x20데이터\x20시각화를\x20시작하세요",
      sankeyCircularTips: "생키 차트에는 순환형 데이터를 포함할 수 없습니다",
    },
    bubble: {
      emptyTips:
        "거품형\x20차트는\x20가로\x20축,\x20세로\x20축\x20등\x20최소\x202개의\x20열이\x20필요합니다",
    },
    relation: {
      emptyTips:
        "관계형 차트 데이터 원본은 두 번째 열에 추가 유형 열이 포함된 동시 발생 행렬입니다",
    },
    cloud: { word: "단어", frequency: "빈도" },
    waterfall: { positive: "양수", negative: "음수", subtotal: "부분합" },
    pareto: { lineName: "누적 백분율" },
    boxplot: {
      min: "최소값",
      q1: "제1사분위수",
      median: "중앙값",
      q3: "제3사분위수",
      max: "최대값",
    },
    candlestick: {
      series: "OHLC 계열",
      category: "카테고리",
      open: "시가",
      high: "고가",
      low: "저가",
      close: "종가",
    },
    histogram: { frequency: "도수" },
    pie: { aggregateOther: "기타", aggregateMembers: "항목" },
    treemap: {
      hierarchy: "계층 필드",
      value: "값\x20필드",
      ownValue: "자체 값",
      children: "하위 요소",
      diagnostic:
        "트리맵 차트에는 하나 이상의 계층 필드와 하나의 숫자 값 필드가 필요합니다.",
    },
    sunburst: {
      hierarchy: "계층",
      value: "값",
      ownValue: "자체 값",
      children: "하위 요소",
      diagnostic:
        "선버스트\x20차트에는\x20하나\x20이상의\x20계층\x20필드와\x20하나의\x20숫자\x20값\x20필드가\x20필요합니다.",
    },
    gauge: {
      label: "라벨",
      value: "값",
      emptyDiagnostic:
        "게이지 차트에는 하나 이상의 유한한 숫자 값이 필요합니다.",
      mappingDiagnostic:
        "게이지 차트에는 레이블 필드 하나와 값 필드 하나가 필요합니다.",
      configDiagnostic:
        "게이지 차트 구성이 올바르지 않습니다. 눈금, 범위, 비율 및 크기를 확인하세요.",
    },
    chord: {
      emptyDiagnostic:
        "코드 다이어그램에는 서로 다른 두 노드 사이에 양의 가중치를 가진 관계가 하나 이상 필요합니다.",
      mappingDiagnostic:
        "코드 다이어그램에는 서로 다른 원본 및 대상 필드가 필요하며, 선택적 값 필드도 이들과 달라야 합니다.",
      configDiagnostic:
        "코드 다이어그램 구성이 올바르지 않습니다. 각도, 반지름, 불투명도 및 크기를 확인하세요.",
      source: "소스",
      target: "대상",
      value: "값",
      count: "관계 수",
      associatedValue: "연결된 값",
    },
    chartField: {
      missingCategoryFields: "이 차트에는 레이블 필드가 더 필요합니다.",
      missingSeriesFields: "이 차트에는 숫자 값 필드가 더 필요합니다.",
      invalidFieldIndex: "선택한 차트 필드를 더 이상 사용할 수 없습니다.",
      invalidValueFieldType: "선택한 값 필드에 숫자 데이터가 없습니다.",
      invalidDataStructure:
        "선택한 필드가 이 차트에 유효한 데이터 구조를 형성하지 않습니다.",
      unsupportedChartType: "이 차트 유형에는 필드 사용 정책이 없습니다.",
    },
  },
};
export { e as default };
