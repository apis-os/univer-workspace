const e = {
  "boards-chart-ui": {
    dataEditor: {
      unavailable:
        "Os\x20dados\x20do\x20gráfico\x20não\x20estão\x20disponíveis.",
      updateFailed: "Não foi possível atualizar os dados do gráfico.",
    },
    common: {
      editChart: "Editor de gráfico",
      deleteChart: "Excluir gráfico",
      editData: "Editar\x20dados",
      insertChartFailed: "Falha ao inserir gráfico",
      data: "Dados",
      cancel: "Cancelar",
      insert: "Inserir",
      setup: "Configurar",
      customize: "Personalizar",
      switchRowColumn: "Alternar para linha/coluna",
      duplicate: "Duplicar",
      apply: "Aplicar",
      chartAndAxisTitles: "Títulos do gráfico e dos eixos",
      chartStyle: "Estilo\x20do\x20gráfico",
      heatmap: "Mapa de calor",
      horizontalAxis: "Eixo horizontal",
      legend: "Legenda",
      rightVerticalAxis: "Eixo vertical direito",
      series: "Série",
      trendline: "Linha de tendência",
      verticalAxis: "Eixo vertical",
      tableDataEmpty: "Os dados da tabela estão vazios",
      category: "Categoria",
      label: "Etiqueta",
      value: "Valor",
      valueField: "Campo de valor",
      chartType: "Tipo\x20de\x20gráfico",
    },
    chartTypes: {
      line: "Gráfico de linha",
      column: "Gráfico de colunas",
      columnStacked: "Empilhar\x20·\x20Gráfico\x20de\x20colunas",
      columnPercentStacked:
        "Empilhamento\x20percentual\x20·\x20Gráfico\x20de\x20colunas",
      bar: "Gráfico de barras",
      barStacked: "Gráfico de barras empilhadas",
      barPercentStacked: "Gráfico de barras empilhadas percentual",
      pie: "Gráfico\x20de\x20pizza",
      donut: "Gráfico de rosca",
      pieOfPie: "Gráfico de pizza com subgráfico de pizza",
      barOfPie: "Gráfico de pizza com subgráfico de barras",
      area: "Gráfico de área",
      areaStacked: "Gráfico\x20de\x20área\x20empilhada",
      areaPercentStacked: "Gráfico\x20de\x20área\x20empilhada\x20percentual",
      radar: "Gráfico de radar",
      scatter: "Gráfico\x20de\x20dispersão",
      combination: "Gráfico combinado",
      wordCloud: "Gráfico de nuvem de palavras",
      funnel: "Gráfico de funil",
      bubble: "Gráfico de bolhas",
      relation: "Gráfico de relações",
      waterfall: "Gráfico de cascata",
      pareto: "Gráfico de Pareto",
      sankey: "Gráfico de Sankey",
      heatmap: "Mapa\x20de\x20calor",
      boxplot: "Diagrama de caixa",
      candlestick: "Gráfico\x20de\x20velas",
      histogram: "Histograma",
      treemap: "Mapa\x20de\x20árvore",
      sunburst: "Gráfico\x20de\x20raios\x20solares",
      gauge: "Gráfico de medidor",
      chord: "Diagrama de cordas",
    },
    section: {
      candlestick: "Gráfico de velas",
      chord: "Gráfico de acordes",
      funnel: "Gráfico de funil",
      gauge: "Gráfico de medidor",
      gridlinesAndTicks: "Linhas de grade e marcas",
      histogram: "Gráfico histograma",
      indicatorLine: "Linha indicadora",
      lineAndArea: "Gráfico de linha / Gráfico de área",
      paretoBar: "Série de gráfico de barras",
      paretoLine: "Série de porcentagem cumulativa",
      pie: "Gráfico de pizza",
      radar: "Gráfico de radar",
      relation: "Gráfico de relações",
      sunburst: "Gráfico\x20de\x20explosão\x20solar",
      treemap: "Gráfico\x20de\x20mapa\x20de\x20árvore",
      waterfall: "Gráfico\x20de\x20cascata",
      wordCloud: "Nuvem\x20de\x20palavras",
    },
    candlestick: {
      columnsError:
        "Os dados do gráfico de velas exigem as colunas Categoria, Abertura, Máxima, Mínima e Fechamento.",
      close: "Fechamento",
      high: "Máxima",
      low: "Mínima",
      open: "Abertura",
      series: "Série OHLC",
    },
    chord: {
      source: "Fonte",
      target: "Alvo",
      emptyDiagnostic:
        "O diagrama de cordas exige pelo menos uma relação com peso positivo entre dois nós diferentes.",
      mappingDiagnostic:
        "O diagrama de cordas exige campos de Origem e Destino distintos e, opcionalmente, um campo de Valor diferente.",
      configDiagnostic:
        "A configuração do diagrama de cordas é inválida. Verifique os ângulos, os raios, a opacidade e os tamanhos.",
      count: "Contagem de relacionamento",
      associatedValue: "Valor\x20associado",
    },
    sunburst: {
      hierarchy: "Hierarquia",
      ownValue: "Valor próprio",
      children: "Elementos\x20filhos",
      diagnostic:
        "O gráfico de explosão solar exige pelo menos um campo de hierarquia e um campo de valor numérico.",
    },
    histogram: { frequency: "Frequência" },
    pie: { aggregateOther: "Outro", aggregateMembers: "Itens" },
    treemap: {
      hierarchy: "Campos\x20de\x20hierarquia",
      ownValue: "Valor próprio",
      children: "Elementos\x20filhos",
      diagnostic:
        "O mapa de árvore exige pelo menos um campo de hierarquia e um campo de valor numérico.",
    },
    gauge: {
      emptyDiagnostic:
        "O gráfico de medidor exige pelo menos um valor numérico finito.",
      mappingDiagnostic:
        "O gráfico de medidor exige um campo de rótulo e exatamente um campo de valor.",
      configDiagnostic:
        "A\x20configuração\x20do\x20gráfico\x20de\x20medidor\x20é\x20inválida.\x20Verifique\x20a\x20escala,\x20os\x20intervalos,\x20as\x20proporções\x20e\x20os\x20tamanhos.",
    },
    chartField: {
      missingCategoryFields: "Este gráfico requer mais campos de rótulo.",
      missingSeriesFields:
        "Este gráfico requer mais campos de valores numéricos.",
      invalidFieldIndex:
        "Um campo selecionado do gráfico não está mais disponível.",
      invalidValueFieldType:
        "O campo de valor selecionado não contém dados numéricos.",
      invalidDataStructure:
        "Os\x20campos\x20selecionados\x20não\x20formam\x20uma\x20estrutura\x20de\x20dados\x20válida\x20para\x20este\x20gráfico.",
      unsupportedChartType:
        "Este tipo de gráfico não possui uma política de uso de campos.",
    },
  },
};
module.exports = e;
