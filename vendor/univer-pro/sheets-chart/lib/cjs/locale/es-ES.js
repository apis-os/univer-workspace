const e = {
  "sheets-chart": {
    seriesDefaultName: "Serie {0}",
    blank: "(En blanco)",
    msg: {
      emptyTips: "Agregue una serie para comenzar a visualizar sus datos",
      sankeyCircularTips:
        "El gráfico Sankey no puede contener datos circulares",
    },
    bubble: {
      emptyTips:
        "El gráfico de burbujas requiere al menos 2 columnas: Eje X, Eje Y",
    },
    relation: {
      emptyTips:
        "La fuente de datos para el gráfico de relación es la matriz de co-palabras con la columna adicional de tipo en la segunda columna",
    },
    cloud: { word: "Palabra", frequency: "Frecuencia" },
    waterfall: {
      positive: "Positivo",
      negative: "Negativo",
      subtotal: "Subtotal",
    },
    pareto: { lineName: "Porcentaje\x20acumulado" },
    boxplot: {
      min: "Mínimo",
      q1: "Primer\x20cuartil",
      median: "Mediana",
      q3: "Tercer\x20cuartil",
      max: "Máximo",
    },
    candlestick: {
      series: "Serie\x20OHLC",
      category: "Categoría",
      open: "Apertura",
      high: "Máximo",
      low: "Mínimo",
      close: "Cierre",
    },
    histogram: { frequency: "Frecuencia" },
    pie: { aggregateOther: "Otro", aggregateMembers: "Elementos" },
    treemap: {
      hierarchy: "Campos de jerarquía",
      value: "Campo de valor",
      ownValue: "Valor propio",
      children: "Elementos secundarios",
      diagnostic:
        "El mapa de árbol requiere al menos un campo de jerarquía y un campo de valor numérico.",
    },
    sunburst: {
      hierarchy: "Jerarquía",
      value: "Valor",
      ownValue: "Valor\x20propio",
      children: "Elementos secundarios",
      diagnostic:
        "El\x20gráfico\x20radial\x20jerárquico\x20requiere\x20al\x20menos\x20un\x20campo\x20de\x20jerarquía\x20y\x20un\x20campo\x20de\x20valor\x20numérico.",
    },
    gauge: {
      label: "Etiqueta",
      value: "Valor",
      emptyDiagnostic:
        "El gráfico de indicador requiere al menos un valor numérico finito.",
      mappingDiagnostic:
        "El gráfico de indicador requiere un campo de etiqueta y exactamente un campo de valor.",
      configDiagnostic:
        "La configuración del gráfico de indicador no es válida. Compruebe la escala, los intervalos, las proporciones y los tamaños.",
    },
    chord: {
      emptyDiagnostic:
        "El diagrama de cuerdas requiere al menos una relación con peso positivo entre dos nodos distintos.",
      mappingDiagnostic:
        "El diagrama de cuerdas requiere campos de origen y destino distintos y, opcionalmente, un campo de valor diferente.",
      configDiagnostic:
        "La configuración del diagrama de cuerdas no es válida. Compruebe los ángulos, los radios, la opacidad y los tamaños.",
      source: "Fuente",
      target: "Objetivo",
      value: "Valor",
      count: "recuento\x20de\x20relaciones",
      associatedValue: "Valor asociado",
    },
    chartField: {
      missingCategoryFields: "Este gráfico requiere más campos de etiquetas.",
      missingSeriesFields:
        "Este gráfico requiere más campos de valores numéricos.",
      invalidFieldIndex:
        "Uno de los campos seleccionados para el gráfico ya no está disponible.",
      invalidValueFieldType:
        "El\x20campo\x20de\x20valores\x20seleccionado\x20no\x20contiene\x20datos\x20numéricos.",
      invalidDataStructure:
        "Los campos seleccionados no forman una estructura de datos válida para este gráfico.",
      unsupportedChartType:
        "Este\x20tipo\x20de\x20gráfico\x20no\x20tiene\x20una\x20política\x20de\x20consumo\x20de\x20campos.",
    },
  },
};
module.exports = e;
