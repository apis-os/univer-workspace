const e = {
  "sheets-chart": {
    seriesDefaultName: "Séria {0}",
    blank: "(Prázdne)",
    msg: {
      emptyTips: "Pridajte sériu a začnite vizualizovať údaje",
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
    pareto: { lineName: "Kumulatívne\x20percento" },
    boxplot: {
      min: "Minimum",
      q1: "Prvý\x20kvartil",
      median: "Medián",
      q3: "Tretí\x20kvartil",
      max: "Maximum",
    },
    candlestick: {
      series: "Rad\x20OHLC",
      category: "Kategória",
      open: "Otvorenie",
      high: "Maximum",
      low: "Minimum",
      close: "Zatvorenie",
    },
    histogram: { frequency: "Frekvencia" },
    pie: { aggregateOther: "Iné", aggregateMembers: "Položky" },
    treemap: {
      hierarchy: "Polia\x20hierarchie",
      value: "Pole\x20hodnoty",
      ownValue: "Vlastná hodnota",
      children: "Podradené prvky",
      diagnostic:
        "Stromová mapa vyžaduje aspoň jedno pole hierarchie a jedno číselné pole hodnoty.",
    },
    sunburst: {
      hierarchy: "Hierarchia",
      value: "Hodnota",
      ownValue: "Vlastná hodnota",
      children: "Podradené prvky",
      diagnostic:
        "Lúčový hierarchický graf vyžaduje aspoň jedno pole hierarchie a jedno číselné pole hodnoty.",
    },
    gauge: {
      label: "Označenie",
      value: "Hodnota",
      emptyDiagnostic:
        "Ukazovateľový\x20graf\x20vyžaduje\x20aspoň\x20jednu\x20konečnú\x20číselnú\x20hodnotu.",
      mappingDiagnostic:
        "Ukazovateľový graf vyžaduje jedno pole menovky a presne jedno pole hodnoty.",
      configDiagnostic:
        "Konfigurácia ukazovateľového grafu je neplatná. Skontrolujte mierku, rozsahy, pomery a veľkosti.",
    },
    chord: {
      emptyDiagnostic:
        "Chordový diagram vyžaduje aspoň jeden vzťah s kladnou váhou medzi dvoma rôznymi uzlami.",
      mappingDiagnostic:
        "Chordový diagram vyžaduje rozdielne polia Zdroj a Cieľ a voliteľné samostatné pole Hodnota.",
      configDiagnostic:
        "Konfigurácia chordového diagramu je neplatná. Skontrolujte uhly, polomery, nepriehľadnosť a veľkosti.",
      source: "Zdroj",
      target: "Cieľ",
      value: "Hodnota",
      count: "Počet\x20vzťahov",
      associatedValue: "Priradená hodnota",
    },
    chartField: {
      missingCategoryFields:
        "Tento\x20graf\x20vyžaduje\x20viac\x20polí\x20menoviek.",
      missingSeriesFields:
        "Tento\x20graf\x20vyžaduje\x20viac\x20polí\x20číselných\x20hodnôt.",
      invalidFieldIndex: "Vybrané pole grafu už nie je k dispozícii.",
      invalidValueFieldType: "Vybrané pole hodnôt neobsahuje číselné údaje.",
      invalidDataStructure:
        "Vybrané polia netvoria platnú dátovú štruktúru pre tento graf.",
      unsupportedChartType: "Tento typ grafu nemá pravidlá používania polí.",
    },
  },
};
export { e as default };
