const e = {
  "sheets-chart": {
    seriesDefaultName: "Datenreihe {0}",
    blank: "(Leer)",
    msg: {
      emptyTips:
        "Fügen Sie eine Datenreihe hinzu, um Ihre Daten zu visualisieren",
      sankeyCircularTips:
        "Sankey-Diagramm\x20darf\x20keine\x20zirkulären\x20Daten\x20enthalten",
    },
    bubble: {
      emptyTips:
        "Blasendiagramm\x20erfordert\x20mindestens\x202\x20Spalten:\x20X-Achse,\x20Y-Achse",
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
    pareto: { lineName: "Kumulierte Prozent" },
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
        "Ein Treemap-Diagramm benötigt mindestens ein Hierarchiefeld und ein numerisches Wertefeld.",
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
      count: "Anzahl der Beziehungen",
      associatedValue: "Zugeordneter Wert",
    },
    chartField: {
      missingCategoryFields:
        "Dieses Diagramm benötigt weitere Beschriftungsfelder.",
      missingSeriesFields:
        "Dieses Diagramm benötigt weitere numerische Wertefelder.",
      invalidFieldIndex:
        "Ein\x20ausgewähltes\x20Diagrammfeld\x20ist\x20nicht\x20mehr\x20verfügbar.",
      invalidValueFieldType:
        "Das ausgewählte Wertefeld enthält keine numerischen Daten.",
      invalidDataStructure:
        "Die ausgewählten Felder bilden keine gültige Datenstruktur für dieses Diagramm.",
      unsupportedChartType:
        "Für diesen Diagrammtyp gibt es keine Richtlinie zur Feldverwendung.",
    },
  },
};
module.exports = e;
