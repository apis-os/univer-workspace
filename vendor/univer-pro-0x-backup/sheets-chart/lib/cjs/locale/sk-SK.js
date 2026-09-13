const e = {
  "sheets-chart": {
    seriesDefaultName: "Séria {0}",
    blank: "(Prázdne)",
    msg: {
      emptyTips: "Pridajte\x20sériu\x20a\x20začnite\x20vizualizovať\x20údaje",
      sankeyCircularTips: "Sankeyho graf nemôže obsahovať cyklické údaje",
    },
    bubble: { emptyTips: "Bublinový graf vyžaduje aspoň 2 stĺpce: os X, os Y" },
    relation: {
      emptyTips:
        "Zdrojové dáta pre graf vzťahov sú ko-slovná matica s dodatočným typovým stĺpcom v druhom stĺpci",
    },
    cloud: { word: "Slovo", frequency: "Frekvencia" },
    waterfall: {
      positive: "Pozitívne",
      negative: "Negatívne",
      subtotal: "Medzisúčet",
    },
    pareto: { lineName: "Kumulatívne percento" },
    boxplot: {
      min: "Minimum",
      q1: "Prvý kvartil",
      median: "Medián",
      q3: "Tretí kvartil",
      max: "Maximum",
    },
    candlestick: {
      series: "Rad OHLC",
      category: "Kategória",
      open: "Otvorenie",
      high: "Maximum",
      low: "Minimum",
      close: "Zatvorenie",
    },
    histogram: { frequency: "Frekvencia" },
    pie: { aggregateOther: "Iné", aggregateMembers: "Položky" },
    treemap: {
      hierarchy: "Polia hierarchie",
      value: "Pole hodnoty",
      ownValue: "Vlastná hodnota",
      children: "Podradené prvky",
      diagnostic:
        "Stromová mapa vyžaduje aspoň jedno pole hierarchie a jedno číselné pole hodnoty.",
    },
    sunburst: {
      hierarchy: "Hierarchia",
      value: "Hodnota",
      ownValue: "Vlastná\x20hodnota",
      children: "Podradené prvky",
      diagnostic:
        "Lúčový hierarchický graf vyžaduje aspoň jedno pole hierarchie a jedno číselné pole hodnoty.",
    },
    gauge: {
      label: "Označenie",
      value: "Hodnota",
      emptyDiagnostic:
        "Ukazovateľový graf vyžaduje aspoň jednu konečnú číselnú hodnotu.",
      mappingDiagnostic:
        "Ukazovateľový graf vyžaduje jedno pole menovky a presne jedno pole hodnoty.",
      configDiagnostic:
        "Konfigurácia ukazovateľového grafu je neplatná. Skontrolujte mierku, rozsahy, pomery a veľkosti.",
    },
    chord: {
      emptyDiagnostic:
        "Chordový diagram vyžaduje aspoň jeden vzťah s kladnou váhou medzi dvoma rôznymi uzlami.",
      mappingDiagnostic:
        "Chordový\x20diagram\x20vyžaduje\x20rozdielne\x20polia\x20Zdroj\x20a\x20Cieľ\x20a\x20voliteľné\x20samostatné\x20pole\x20Hodnota.",
      configDiagnostic:
        "Konfigurácia chordového diagramu je neplatná. Skontrolujte uhly, polomery, nepriehľadnosť a veľkosti.",
      source: "Zdroj",
      target: "Cieľ",
      value: "Hodnota",
      count: "Počet vzťahov",
      associatedValue: "Priradená\x20hodnota",
    },
    chartField: {
      missingCategoryFields: "Tento graf vyžaduje viac polí menoviek.",
      missingSeriesFields: "Tento graf vyžaduje viac polí číselných hodnôt.",
      invalidFieldIndex: "Vybrané pole grafu už nie je k dispozícii.",
      invalidValueFieldType: "Vybrané pole hodnôt neobsahuje číselné údaje.",
      invalidDataStructure:
        "Vybrané polia netvoria platnú dátovú štruktúru pre tento graf.",
      unsupportedChartType: "Tento typ grafu nemá pravidlá používania polí.",
    },
  },
};
module.exports = e;
