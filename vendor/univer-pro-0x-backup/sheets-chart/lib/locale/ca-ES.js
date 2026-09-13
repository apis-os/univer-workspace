const e = {
  "sheets-chart": {
    seriesDefaultName: "Sèrie {0}",
    blank: "(En blanc)",
    msg: {
      emptyTips:
        "Afegiu\x20una\x20sèrie\x20per\x20començar\x20a\x20visualitzar\x20les\x20vostres\x20dades",
      sankeyCircularTips: "El gràfic Sankey no pot contenir dades circulars",
    },
    bubble: {
      emptyTips:
        "El gràfic de bombolletes requereix almenys 2 columnes: Eix X, Eix Y",
    },
    relation: {
      emptyTips:
        "La font de dades per al gràfic de relació és la matriu de co-paraules amb la columna addicional de tipus a la segona columna",
    },
    cloud: { word: "Paraula", frequency: "Freqüència" },
    waterfall: {
      positive: "Positiu",
      negative: "Negatiu",
      subtotal: "Subtotal",
    },
    pareto: { lineName: "Percentatge\x20acumulat" },
    boxplot: {
      min: "Mínim",
      q1: "Primer quartil",
      median: "Mediana",
      q3: "Tercer\x20quartil",
      max: "Màxim",
    },
    candlestick: {
      series: "Sèrie OHLC",
      category: "Categoria",
      open: "Obertura",
      high: "Màxim",
      low: "Mínim",
      close: "Tancament",
    },
    histogram: { frequency: "Freqüència" },
    pie: { aggregateOther: "Altre", aggregateMembers: "Elements" },
    treemap: {
      hierarchy: "Camps de jerarquia",
      value: "Camp\x20de\x20valor",
      ownValue: "Valor propi",
      children: "Elements fills",
      diagnostic:
        "El mapa d’arbre necessita almenys un camp jeràrquic i un camp de valor numèric.",
    },
    sunburst: {
      hierarchy: "Jerarquia",
      value: "Valor",
      ownValue: "Valor propi",
      children: "Elements fills",
      diagnostic:
        "El\x20gràfic\x20de\x20raigs\x20solars\x20necessita\x20almenys\x20un\x20camp\x20jeràrquic\x20i\x20un\x20camp\x20de\x20valor\x20numèric.",
    },
    gauge: {
      label: "Etiqueta",
      value: "Valor",
      emptyDiagnostic:
        "El gràfic d’indicador necessita almenys un valor numèric finit.",
      mappingDiagnostic:
        "El gràfic d’indicador necessita un camp d’etiqueta i exactament un camp de valor.",
      configDiagnostic:
        "La\x20configuració\x20del\x20gràfic\x20d’indicador\x20no\x20és\x20vàlida.\x20Comproveu\x20l’escala,\x20els\x20intervals,\x20les\x20proporcions\x20i\x20les\x20mides.",
    },
    chord: {
      emptyDiagnostic:
        "El diagrama de cordes necessita almenys una relació de pes positiu entre dos nodes diferents.",
      mappingDiagnostic:
        "El diagrama de cordes necessita camps d’origen i destinació diferents i, opcionalment, un camp de valor diferent.",
      configDiagnostic:
        "La configuració del diagrama de cordes no és vàlida. Comproveu els angles, els radis, l’opacitat i les mides.",
      source: "Font",
      target: "Objectiu",
      value: "Valor",
      count: "Recompte de relacions",
      associatedValue: "Valor\x20associat",
    },
    chartField: {
      missingCategoryFields: "Aquest gràfic requereix més camps d'etiqueta.",
      missingSeriesFields:
        "Aquest\x20gràfic\x20requereix\x20més\x20camps\x20de\x20valors\x20numèrics.",
      invalidFieldIndex: "Un camp de gràfic seleccionat ja no està disponible.",
      invalidValueFieldType:
        "El\x20camp\x20de\x20valors\x20seleccionat\x20no\x20conté\x20dades\x20numèriques.",
      invalidDataStructure:
        "Els camps seleccionats no formen una estructura de dades vàlida per a aquest gràfic.",
      unsupportedChartType:
        "Aquest tipus de gràfic no té cap política de consum de camps.",
    },
  },
};
export { e as default };
