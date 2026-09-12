const e = {
  "sheets-chart": {
    seriesDefaultName: "Serie {0}",
    blank: "(Vuoto)",
    msg: {
      emptyTips:
        "Aggiungi\x20una\x20serie\x20per\x20iniziare\x20a\x20visualizzare\x20i\x20dati",
      sankeyCircularTips:
        "Il grafico di Sankey non può contenere dati circolari",
    },
    bubble: {
      emptyTips: "Il grafico a bolle richiede almeno 2 colonne: asse X, asse Y",
    },
    relation: {
      emptyTips:
        "La fonte dati per il grafico delle relazioni è la matrice di co-occorrenze con la colonna tipo aggiuntiva nella seconda colonna",
    },
    cloud: { word: "Parola", frequency: "Frequenza" },
    waterfall: {
      positive: "Positivo",
      negative: "Negativo",
      subtotal: "Subtotale",
    },
    pareto: { lineName: "Percentuale cumulativa" },
    boxplot: {
      min: "Minimo",
      q1: "Primo quartile",
      median: "Mediana",
      q3: "Terzo\x20quartile",
      max: "Massimo",
    },
    candlestick: {
      series: "Serie OHLC",
      category: "Categoria",
      open: "Apertura",
      high: "Massimo",
      low: "Minimo",
      close: "Chiusura",
    },
    histogram: { frequency: "Frequenza" },
    pie: { aggregateOther: "Altro", aggregateMembers: "Elementi" },
    treemap: {
      hierarchy: "Campi gerarchici",
      value: "Campo valore",
      ownValue: "Valore\x20proprio",
      children: "Elementi\x20figli",
      diagnostic:
        "La mappa ad albero richiede almeno un campo gerarchico e un campo di valore numerico.",
    },
    sunburst: {
      hierarchy: "Gerarchia",
      value: "Valore",
      ownValue: "Valore\x20proprio",
      children: "Elementi figli",
      diagnostic:
        "Il grafico radiale gerarchico richiede almeno un campo gerarchico e un campo di valore numerico.",
    },
    gauge: {
      label: "Etichetta",
      value: "Valore",
      emptyDiagnostic:
        "Il grafico a indicatore richiede almeno un valore numerico finito.",
      mappingDiagnostic:
        "Il grafico a indicatore richiede un campo etichetta ed esattamente un campo valore.",
      configDiagnostic:
        "La configurazione del grafico a indicatore non è valida. Controllare scala, intervalli, proporzioni e dimensioni.",
    },
    chord: {
      emptyDiagnostic:
        "Il diagramma a corde richiede almeno una relazione con peso positivo tra due nodi distinti.",
      mappingDiagnostic:
        "Il diagramma a corde richiede campi Origine e Destinazione distinti e, facoltativamente, un campo Valore diverso.",
      configDiagnostic:
        "La configurazione del diagramma a corde non è valida. Controllare angoli, raggi, opacità e dimensioni.",
      source: "Fonte",
      target: "Obiettivo",
      value: "Valore",
      count: "Conteggio delle relazioni",
      associatedValue: "Valore\x20associato",
    },
    chartField: {
      missingCategoryFields: "Questo grafico richiede più campi etichetta.",
      missingSeriesFields:
        "Questo grafico richiede più campi di valori numerici.",
      invalidFieldIndex:
        "Un campo del grafico selezionato non è più disponibile.",
      invalidValueFieldType:
        "Il\x20campo\x20valore\x20selezionato\x20non\x20contiene\x20dati\x20numerici.",
      invalidDataStructure:
        "I campi selezionati non formano una struttura dati valida per questo grafico.",
      unsupportedChartType:
        "Questo\x20tipo\x20di\x20grafico\x20non\x20dispone\x20di\x20una\x20regola\x20per\x20l’utilizzo\x20dei\x20campi.",
    },
  },
};
export { e as default };
