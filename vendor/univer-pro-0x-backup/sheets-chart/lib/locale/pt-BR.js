const e = {
  "sheets-chart": {
    seriesDefaultName: "Série\x20{0}",
    blank: "(Vazio)",
    msg: {
      emptyTips: "Adicione uma série para começar a visualizar seus dados",
      sankeyCircularTips:
        "O gráfico de Sankey não pode conter dados circulares",
    },
    bubble: {
      emptyTips:
        "O gráfico de bolhas requer pelo menos 2 colunas: Eixo X, Eixo Y",
    },
    relation: {
      emptyTips:
        "A\x20fonte\x20de\x20dados\x20para\x20o\x20gráfico\x20de\x20relacionamento\x20é\x20a\x20matriz\x20de\x20coocorrência\x20de\x20palavras\x20com\x20a\x20coluna\x20de\x20tipo\x20adicional\x20na\x20segunda\x20coluna",
    },
    cloud: { word: "Palavra", frequency: "Frequência" },
    waterfall: {
      positive: "Positivo",
      negative: "Negativo",
      subtotal: "Subtotal",
    },
    pareto: { lineName: "Porcentagem Cumulativa" },
    boxplot: {
      min: "Mínimo",
      q1: "Primeiro quartil",
      median: "Mediana",
      q3: "Terceiro quartil",
      max: "Máximo",
    },
    candlestick: {
      series: "Série OHLC",
      category: "Categoria",
      open: "Abertura",
      high: "Máxima",
      low: "Mínima",
      close: "Fechamento",
    },
    histogram: { frequency: "Frequência" },
    pie: { aggregateOther: "Outro", aggregateMembers: "Itens" },
    treemap: {
      hierarchy: "Campos de hierarquia",
      value: "Campo\x20de\x20valor",
      ownValue: "Valor\x20próprio",
      children: "Elementos filhos",
      diagnostic:
        "O mapa de árvore exige pelo menos um campo de hierarquia e um campo de valor numérico.",
    },
    sunburst: {
      hierarchy: "Hierarquia",
      value: "Valor",
      ownValue: "Valor próprio",
      children: "Elementos filhos",
      diagnostic:
        "O gráfico de explosão solar exige pelo menos um campo de hierarquia e um campo de valor numérico.",
    },
    gauge: {
      label: "Etiqueta",
      value: "Valor",
      emptyDiagnostic:
        "O gráfico de medidor exige pelo menos um valor numérico finito.",
      mappingDiagnostic:
        "O gráfico de medidor exige um campo de rótulo e exatamente um campo de valor.",
      configDiagnostic:
        "A configuração do gráfico de medidor é inválida. Verifique a escala, os intervalos, as proporções e os tamanhos.",
    },
    chord: {
      emptyDiagnostic:
        "O\x20diagrama\x20de\x20cordas\x20exige\x20pelo\x20menos\x20uma\x20relação\x20com\x20peso\x20positivo\x20entre\x20dois\x20nós\x20diferentes.",
      mappingDiagnostic:
        "O\x20diagrama\x20de\x20cordas\x20exige\x20campos\x20de\x20Origem\x20e\x20Destino\x20distintos\x20e,\x20opcionalmente,\x20um\x20campo\x20de\x20Valor\x20diferente.",
      configDiagnostic:
        "A configuração do diagrama de cordas é inválida. Verifique os ângulos, os raios, a opacidade e os tamanhos.",
      source: "Fonte",
      target: "Alvo",
      value: "Valor",
      count: "Contagem de relacionamento",
      associatedValue: "Valor associado",
    },
    chartField: {
      missingCategoryFields:
        "Este\x20gráfico\x20requer\x20mais\x20campos\x20de\x20rótulo.",
      missingSeriesFields:
        "Este gráfico requer mais campos de valores numéricos.",
      invalidFieldIndex:
        "Um\x20campo\x20selecionado\x20do\x20gráfico\x20não\x20está\x20mais\x20disponível.",
      invalidValueFieldType:
        "O campo de valor selecionado não contém dados numéricos.",
      invalidDataStructure:
        "Os campos selecionados não formam uma estrutura de dados válida para este gráfico.",
      unsupportedChartType:
        "Este tipo de gráfico não possui uma política de uso de campos.",
    },
  },
};
export { e as default };
