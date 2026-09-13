const e = {
  "sheets-chart": {
    seriesDefaultName: "Serie {0}",
    blank: "(En blanco)",
    msg: {
      emptyTips: "Agregue una serie para comenzar a visualizar sus datos",
      sankeyCircularTips:
        "El\x20gráfico\x20Sankey\x20no\x20puede\x20contener\x20datos\x20circulares",
    },
    bubble: {
      emptyTips:
        "El\x20gráfico\x20de\x20burbujas\x20requiere\x20al\x20menos\x202\x20columnas:\x20Eje\x20X,\x20Eje\x20Y",
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
      q1: "Primer cuartil",
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
      ownValue: "Valor\x20propio",
      children: "Elementos secundarios",
      diagnostic:
        "El mapa de árbol requiere al menos un campo de jerarquía y un campo de valor numérico.",
    },
    sunburst: {
      hierarchy: "Jerarquía",
      value: "Valor",
      ownValue: "Valor propio",
      children: "Elementos secundarios",
      diagnostic:
        "El gráfico radial jerárquico requiere al menos un campo de jerarquía y un campo de valor numérico.",
    },
    gauge: {
      label: "Etiqueta",
      value: "Valor",
      emptyDiagnostic:
        "El gráfico de indicador requiere al menos un valor numérico finito.",
      mappingDiagnostic:
        "El\x20gráfico\x20de\x20indicador\x20requiere\x20un\x20campo\x20de\x20etiqueta\x20y\x20exactamente\x20un\x20campo\x20de\x20valor.",
      configDiagnostic:
        "La configuración del gráfico de indicador no es válida. Compruebe la escala, los intervalos, las proporciones y los tamaños.",
    },
    chord: {
      emptyDiagnostic:
        "El\x20diagrama\x20de\x20cuerdas\x20requiere\x20al\x20menos\x20una\x20relación\x20con\x20peso\x20positivo\x20entre\x20dos\x20nodos\x20distintos.",
      mappingDiagnostic:
        "El diagrama de cuerdas requiere campos de origen y destino distintos y, opcionalmente, un campo de valor diferente.",
      configDiagnostic:
        "La\x20configuración\x20del\x20diagrama\x20de\x20cuerdas\x20no\x20es\x20válida.\x20Compruebe\x20los\x20ángulos,\x20los\x20radios,\x20la\x20opacidad\x20y\x20los\x20tamaños.",
      source: "Fuente",
      target: "Objetivo",
      value: "Valor",
      count: "recuento de relaciones",
      associatedValue: "Valor asociado",
    },
    chartField: {
      missingCategoryFields: "Este gráfico requiere más campos de etiquetas.",
      missingSeriesFields:
        "Este gráfico requiere más campos de valores numéricos.",
      invalidFieldIndex:
        "Uno de los campos seleccionados para el gráfico ya no está disponible.",
      invalidValueFieldType:
        "El campo de valores seleccionado no contiene datos numéricos.",
      invalidDataStructure:
        "Los\x20campos\x20seleccionados\x20no\x20forman\x20una\x20estructura\x20de\x20datos\x20válida\x20para\x20este\x20gráfico.",
      unsupportedChartType:
        "Este\x20tipo\x20de\x20gráfico\x20no\x20tiene\x20una\x20política\x20de\x20consumo\x20de\x20campos.",
    },
  },
};
export { e as default };
