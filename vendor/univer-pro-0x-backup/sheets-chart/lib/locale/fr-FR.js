const e = {
  "sheets-chart": {
    seriesDefaultName: "Série {0}",
    blank: "(Vide)",
    msg: {
      emptyTips: "Ajoutez une série pour commencer à visualiser vos données",
      sankeyCircularTips:
        "Le\x20graphique\x20en\x20Sankey\x20ne\x20peut\x20pas\x20contenir\x20de\x20données\x20circulaires",
    },
    bubble: {
      emptyTips:
        "Le graphique en bulles nécessite au moins 2 colonnes : axe X, axe Y",
    },
    relation: {
      emptyTips:
        "La source de données pour le graphique de relations est la matrice de co-mots avec la colonne de type supplémentaire dans la deuxième colonne",
    },
    cloud: { word: "Mot", frequency: "Fréquence" },
    waterfall: {
      positive: "Positif",
      negative: "Négatif",
      subtotal: "Sous-total",
    },
    pareto: { lineName: "Pourcentage Cumulé" },
    boxplot: {
      min: "Valeur minimale",
      q1: "Premier quartile",
      median: "Médiane",
      q3: "Troisième\x20quartile",
      max: "Valeur maximale",
    },
    candlestick: {
      series: "Série OHLC",
      category: "Catégorie",
      open: "Ouverture",
      high: "Plus haut",
      low: "Plus bas",
      close: "Clôture",
    },
    histogram: { frequency: "Fréquence" },
    pie: { aggregateOther: "Autre", aggregateMembers: "Éléments" },
    treemap: {
      hierarchy: "Champs de hiérarchie",
      value: "Champ de valeur",
      ownValue: "Valeur propre",
      children: "Éléments enfants",
      diagnostic:
        "La carte arborescente nécessite au moins un champ hiérarchique et un champ de valeur numérique.",
    },
    sunburst: {
      hierarchy: "Hiérarchie",
      value: "Valeur",
      ownValue: "Valeur propre",
      children: "Éléments enfants",
      diagnostic:
        "Le graphique en rayons de soleil nécessite au moins un champ hiérarchique et un champ de valeur numérique.",
    },
    gauge: {
      label: "Étiquette",
      value: "Valeur",
      emptyDiagnostic:
        "Le graphique de jauge nécessite au moins une valeur numérique finie.",
      mappingDiagnostic:
        "Le graphique de jauge nécessite un champ d’étiquette et exactement un champ de valeur.",
      configDiagnostic:
        "La configuration du graphique de jauge n’est pas valide. Vérifiez l’échelle, les plages, les proportions et les tailles.",
    },
    chord: {
      emptyDiagnostic:
        "Le diagramme de cordes nécessite au moins une relation de poids positif entre deux nœuds distincts.",
      mappingDiagnostic:
        "Le\x20diagramme\x20de\x20cordes\x20nécessite\x20des\x20champs\x20Source\x20et\x20Cible\x20distincts\x20et,\x20éventuellement,\x20un\x20champ\x20Valeur\x20différent.",
      configDiagnostic:
        "La configuration du diagramme de cordes n’est pas valide. Vérifiez les angles, les rayons, l’opacité et les tailles.",
      source: "Source",
      target: "Cible",
      value: "Valeur",
      count: "Nombre de relations",
      associatedValue: "Valeur\x20associée",
    },
    chartField: {
      missingCategoryFields:
        "Ce graphique nécessite davantage de champs d’étiquette.",
      missingSeriesFields:
        "Ce graphique nécessite davantage de champs de valeurs numériques.",
      invalidFieldIndex:
        "Un\x20champ\x20de\x20graphique\x20sélectionné\x20n’est\x20plus\x20disponible.",
      invalidValueFieldType:
        "Le champ de valeurs sélectionné ne contient pas de données numériques.",
      invalidDataStructure:
        "Les champs sélectionnés ne forment pas une structure de données valide pour ce graphique.",
      unsupportedChartType:
        "Ce\x20type\x20de\x20graphique\x20ne\x20dispose\x20d’aucune\x20règle\x20d’utilisation\x20des\x20champs.",
    },
  },
};
export { e as default };
