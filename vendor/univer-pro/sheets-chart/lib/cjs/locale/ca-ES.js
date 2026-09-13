const e = {
  "sheets-chart": {
    seriesDefaultName: "Sèrie {0}",
    blank: "(En\x20blanc)",
    msg: {
      emptyTips: "Afegiu una sèrie per començar a visualitzar les vostres dades",
      sankeyCircularTips: "El\x20gràfic\x20Sankey\x20no\x20pot\x20contenir\x20dades\x20circulars"
    },
    bubble: {
      emptyTips: "El gràfic de bombolletes requereix almenys 2 columnes: Eix X, Eix Y"
    },
    relation: {
      emptyTips: "La\x20font\x20de\x20dades\x20per\x20al\x20gràfic\x20de\x20relació\x20és\x20la\x20matriu\x20de\x20co-paraules\x20amb\x20la\x20columna\x20addicional\x20de\x20tipus\x20a\x20la\x20segona\x20columna"
    },
    cloud: {
      word: "Paraula",
      frequency: "Freqüència"
    },
    waterfall: {
      positive: "Positiu",
      negative: "Negatiu",
      subtotal: "Subtotal"
    },
    pareto: {
      lineName: "Percentatge\x20acumulat"
    },
    boxplot: {
      min: "Mínim",
      q1: "Primer quartil",
      median: "Mediana",
      q3: "Tercer quartil",
      max: "Màxim"
    },
    candlestick: {
      series: "Sèrie OHLC",
      category: "Categoria",
      open: "Obertura",
      high: "Màxim",
      low: "Mínim",
      close: "Tancament"
    },
    histogram: {
      frequency: "Freqüència"
    },
    pie: {
      aggregateOther: "Altre",
      aggregateMembers: "Elements"
    },
    treemap: {
      hierarchy: "Camps\x20de\x20jerarquia",
      value: "Camp de valor",
      ownValue: "Valor\x20propi",
      children: "Elements fills",
      diagnostic: "El mapa d’arbre necessita almenys un camp jeràrquic i un camp de valor numèric."
    },
    sunburst: {
      hierarchy: "Jerarquia",
      value: "Valor",
      ownValue: "Valor propi",
      children: "Elements\x20fills",
      diagnostic: "El gràfic de raigs solars necessita almenys un camp jeràrquic i un camp de valor numèric."
    },
    gauge: {
      label: "Etiqueta",
      value: "Valor",
      emptyDiagnostic: "El gràfic d’indicador necessita almenys un valor numèric finit.",
      mappingDiagnostic: "El\x20gràfic\x20d’indicador\x20necessita\x20un\x20camp\x20d’etiqueta\x20i\x20exactament\x20un\x20camp\x20de\x20valor.",
      configDiagnostic: "La\x20configuració\x20del\x20gràfic\x20d’indicador\x20no\x20és\x20vàlida.\x20Comproveu\x20l’escala,\x20els\x20intervals,\x20les\x20proporcions\x20i\x20les\x20mides."
    },
    chord: {
      emptyDiagnostic: "El diagrama de cordes necessita almenys una relació de pes positiu entre dos nodes diferents.",
      mappingDiagnostic: "El diagrama de cordes necessita camps d’origen i destinació diferents i, opcionalment, un camp de valor diferent.",
      configDiagnostic: "La configuració del diagrama de cordes no és vàlida. Comproveu els angles, els radis, l’opacitat i les mides.",
      source: "Font",
      target: "Objectiu",
      value: "Valor",
      count: "Recompte de relacions",
      associatedValue: "Valor associat"
    },
    chartField: {
      missingCategoryFields: "Aquest gràfic requereix més camps d'etiqueta.",
      missingSeriesFields: "Aquest\x20gràfic\x20requereix\x20més\x20camps\x20de\x20valors\x20numèrics.",
      invalidFieldIndex: "Un\x20camp\x20de\x20gràfic\x20seleccionat\x20ja\x20no\x20està\x20disponible.",
      invalidValueFieldType: "El camp de valors seleccionat no conté dades numèriques.",
      invalidDataStructure: "Els camps seleccionats no formen una estructura de dades vàlida per a aquest gràfic.",
      unsupportedChartType: "Aquest tipus de gràfic no té cap política de consum de camps."
    }
  }
};
module.exports = e;
