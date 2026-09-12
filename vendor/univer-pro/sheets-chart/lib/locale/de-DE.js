const e = {
  "sheets-chart": {
    seriesDefaultName: "Datenreihe {0}",
    blank: "(Leer)",
    msg: {
      emptyTips:
        "Fügen\x20Sie\x20eine\x20Datenreihe\x20hinzu,\x20um\x20Ihre\x20Daten\x20zu\x20visualisieren",
      sankeyCircularTips:
        "Sankey-Diagramm\x20darf\x20keine\x20zirkulären\x20Daten\x20enthalten",
    },
    bubble: {
      emptyTips:
        "Blasendiagramm erfordert mindestens 2 Spalten: X-Achse, Y-Achse",
    },
    relation: {
      emptyTips:
        "Die Datenquelle für das Beziehungsdiagramm ist die Co-Wort-Matrix mit der zusätzlichen Typ-Spalte in der zweiten Spalte",
    },
    cloud: { word: "Wort", frequency: "Häufigkeit" },
    waterfall: {
      positive: "Positiv",
      negative: "Negativ",
      subtotal: "Zwischensumme",
    },
    pareto: { lineName: "Kumulierte\x20Prozent" },
    boxplot: {
      min: "Minimum",
      q1: "Erstes\x20Quartil",
      median: "Median",
      q3: "Drittes Quartil",
      max: "Maximum",
    },
    candlestick: {
      series: "OHLC-Reihe",
      category: "Kategorie",
      open: "Eröffnung",
      high: "Hoch",
      low: "Tief",
      close: "Schluss",
    },
    histogram: { frequency: "Häufigkeit" },
    pie: { aggregateOther: "Sonstige", aggregateMembers: "Elemente" },
    treemap: {
      hierarchy: "Hierarchiefelder",
      value: "Wertfeld",
      ownValue: "Eigener Wert",
      children: "Untergeordnete Elemente",
      diagnostic:
        "Ein\x20Treemap-Diagramm\x20benötigt\x20mindestens\x20ein\x20Hierarchiefeld\x20und\x20ein\x20numerisches\x20Wertefeld.",
    },
    sunburst: {
      hierarchy: "Hierarchie",
      value: "Wert",
      ownValue: "Eigener Wert",
      children: "Untergeordnete Elemente",
      diagnostic:
        "Ein Sunburst-Diagramm benötigt mindestens ein Hierarchiefeld und ein numerisches Wertefeld.",
    },
    gauge: {
      label: "Etikett",
      value: "Wert",
      emptyDiagnostic:
        "Ein Tachometerdiagramm benötigt mindestens einen endlichen numerischen Wert.",
      mappingDiagnostic:
        "Ein Tachometerdiagramm benötigt ein Beschriftungsfeld und genau ein Wertefeld.",
      configDiagnostic:
        "Die Konfiguration des Tachometerdiagramms ist ungültig. Prüfen Sie Skala, Bereiche, Verhältnisse und Größen.",
    },
    chord: {
      emptyDiagnostic:
        "Ein Sehnendiagramm benötigt mindestens eine positiv gewichtete Beziehung zwischen zwei verschiedenen Knoten.",
      mappingDiagnostic:
        "Ein Sehnendiagramm benötigt unterschiedliche Quell- und Zielfelder sowie optional ein davon verschiedenes Wertefeld.",
      configDiagnostic:
        "Die Konfiguration des Sehnendiagramms ist ungültig. Prüfen Sie Winkel, Radien, Deckkraft und Größen.",
      source: "Quelle",
      target: "Ziel",
      value: "Wert",
      count: "Anzahl\x20der\x20Beziehungen",
      associatedValue: "Zugeordneter\x20Wert",
    },
    chartField: {
      missingCategoryFields:
        "Dieses Diagramm benötigt weitere Beschriftungsfelder.",
      missingSeriesFields:
        "Dieses Diagramm benötigt weitere numerische Wertefelder.",
      invalidFieldIndex:
        "Ein ausgewähltes Diagrammfeld ist nicht mehr verfügbar.",
      invalidValueFieldType:
        "Das ausgewählte Wertefeld enthält keine numerischen Daten.",
      invalidDataStructure:
        "Die\x20ausgewählten\x20Felder\x20bilden\x20keine\x20gültige\x20Datenstruktur\x20für\x20dieses\x20Diagramm.",
      unsupportedChartType:
        "Für diesen Diagrammtyp gibt es keine Richtlinie zur Feldverwendung.",
    },
  },
};
export { e as default };
