const e = {
  "boards-chart-ui": {
    dataEditor: {
      unavailable: "Os dados do gráfico não estão disponíveis.",
      updateFailed:
        "Não\x20foi\x20possível\x20atualizar\x20os\x20dados\x20do\x20gráfico.",
    },
    common: {
      editChart: "Editor de gráfico",
      deleteChart: "Excluir gráfico",
      editData: "Editar dados",
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
      verticalAxis: "Eixo\x20vertical",
      tableDataEmpty: "Os\x20dados\x20da\x20tabela\x20estão\x20vazios",
      category: "Categoria",
      label: "Etiqueta",
      value: "Valor",
      valueField: "Campo\x20de\x20valor",
      chartType: "Tipo de gráfico",
    },
    chartTypes: {
      line: "Gráfico de linha",
      column: "Gráfico de colunas",
      columnStacked: "Empilhar\x20·\x20Gráfico\x20de\x20colunas",
      columnPercentStacked: "Empilhamento percentual · Gráfico de colunas",
      bar: "Gráfico de barras",
      barStacked: "Gráfico de barras empilhadas",
      barPercentStacked: "Gráfico de barras empilhadas percentual",
      pie: "Gráfico de pizza",
      donut: "Gráfico de rosca",
      pieOfPie: "Gráfico de pizza com subgráfico de pizza",
      barOfPie: "Gráfico\x20de\x20pizza\x20com\x20subgráfico\x20de\x20barras",
      area: "Gráfico de área",
      areaStacked: "Gráfico de área empilhada",
      areaPercentStacked: "Gráfico de área empilhada percentual",
      radar: "Gráfico de radar",
      scatter: "Gráfico\x20de\x20dispersão",
      combination: "Gráfico\x20combinado",
      wordCloud: "Gráfico\x20de\x20nuvem\x20de\x20palavras",
      funnel: "Gráfico de funil",
      bubble: "Gráfico de bolhas",
      relation: "Gráfico de relações",
      waterfall: "Gráfico\x20de\x20cascata",
      pareto: "Gráfico de Pareto",
      sankey: "Gráfico de Sankey",
      heatmap: "Mapa\x20de\x20calor",
      boxplot: "Diagrama de caixa",
      candlestick: "Gráfico de velas",
      histogram: "Histograma",
      treemap: "Mapa de árvore",
      sunburst: "Gráfico de raios solares",
      gauge: "Gráfico de medidor",
      chord: "Diagrama\x20de\x20cordas",
    },
    section: {
      candlestick: "Gráfico de velas",
      chord: "Gráfico\x20de\x20acordes",
      funnel: "Gráfico de funil",
      gauge: "Gráfico de medidor",
      gridlinesAndTicks: "Linhas de grade e marcas",
      histogram: "Gráfico\x20histograma",
      indicatorLine: "Linha indicadora",
      lineAndArea: "Gráfico de linha / Gráfico de área",
      paretoBar: "Série de gráfico de barras",
      paretoLine: "Série de porcentagem cumulativa",
      pie: "Gráfico de pizza",
      radar: "Gráfico de radar",
      relation: "Gráfico de relações",
      sunburst: "Gráfico\x20de\x20explosão\x20solar",
      treemap: "Gráfico de mapa de árvore",
      waterfall: "Gráfico de cascata",
      wordCloud: "Nuvem de palavras",
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
      associatedValue: "Valor associado",
    },
    sunburst: {
      hierarchy: "Hierarquia",
      ownValue: "Valor próprio",
      children: "Elementos filhos",
      diagnostic:
        "O gráfico de explosão solar exige pelo menos um campo de hierarquia e um campo de valor numérico.",
    },
    histogram: { frequency: "Frequência" },
    pie: { aggregateOther: "Outro", aggregateMembers: "Itens" },
    treemap: {
      hierarchy: "Campos\x20de\x20hierarquia",
      ownValue: "Valor próprio",
      children: "Elementos filhos",
      diagnostic:
        "O mapa de árvore exige pelo menos um campo de hierarquia e um campo de valor numérico.",
    },
    gauge: {
      emptyDiagnostic:
        "O gráfico de medidor exige pelo menos um valor numérico finito.",
      mappingDiagnostic:
        "O\x20gráfico\x20de\x20medidor\x20exige\x20um\x20campo\x20de\x20rótulo\x20e\x20exatamente\x20um\x20campo\x20de\x20valor.",
      configDiagnostic:
        "A\x20configuração\x20do\x20gráfico\x20de\x20medidor\x20é\x20inválida.\x20Verifique\x20a\x20escala,\x20os\x20intervalos,\x20as\x20proporções\x20e\x20os\x20tamanhos.",
    },
    chartField: {
      missingCategoryFields:
        "Este\x20gráfico\x20requer\x20mais\x20campos\x20de\x20rótulo.",
      missingSeriesFields:
        "Este gráfico requer mais campos de valores numéricos.",
      invalidFieldIndex:
        "Um campo selecionado do gráfico não está mais disponível.",
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
