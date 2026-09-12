const e = {
  "sheets-chart": {
    seriesDefaultName: "Serie {0}",
    blank: "(Vuoto)",
    msg: {
      emptyTips: "Aggiungi una serie per iniziare a visualizzare i dati",
      sankeyCircularTips:
        "Il grafico di Sankey non può contenere dati circolari",
    },
    bubble: {
      emptyTips: "Il grafico a bolle richiede almeno 2 colonne: asse X, asse Y",
    },
    relation: {
      emptyTips:
        "La\x20fonte\x20dati\x20per\x20il\x20grafico\x20delle\x20relazioni\x20è\x20la\x20matrice\x20di\x20co-occorrenze\x20con\x20la\x20colonna\x20tipo\x20aggiuntiva\x20nella\x20seconda\x20colonna",
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
      q1: "Primo\x20quartile",
      median: "Mediana",
      q3: "Terzo quartile",
      max: "Massimo",
    },
    candlestick: {
      series: "Serie\x20OHLC",
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
      ownValue: "Valore proprio",
      children: "Elementi figli",
      diagnostic:
        "La mappa ad albero richiede almeno un campo gerarchico e un campo di valore numerico.",
    },
    sunburst: {
      hierarchy: "Gerarchia",
      value: "Valore",
      ownValue: "Valore\x20proprio",
      children: "Elementi\x20figli",
      diagnostic:
        "Il\x20grafico\x20radiale\x20gerarchico\x20richiede\x20almeno\x20un\x20campo\x20gerarchico\x20e\x20un\x20campo\x20di\x20valore\x20numerico.",
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
      associatedValue: "Valore associato",
    },
    chartField: {
      missingCategoryFields:
        "Questo\x20grafico\x20richiede\x20più\x20campi\x20etichetta.",
      missingSeriesFields:
        "Questo\x20grafico\x20richiede\x20più\x20campi\x20di\x20valori\x20numerici.",
      invalidFieldIndex:
        "Un\x20campo\x20del\x20grafico\x20selezionato\x20non\x20è\x20più\x20disponibile.",
      invalidValueFieldType:
        "Il campo valore selezionato non contiene dati numerici.",
      invalidDataStructure:
        "I campi selezionati non formano una struttura dati valida per questo grafico.",
      unsupportedChartType:
        "Questo\x20tipo\x20di\x20grafico\x20non\x20dispone\x20di\x20una\x20regola\x20per\x20l’utilizzo\x20dei\x20campi.",
    },
  },
};
module.exports = e;
