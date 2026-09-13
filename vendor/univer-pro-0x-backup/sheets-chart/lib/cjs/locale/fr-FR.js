const e = {
  "sheets-chart": {
    seriesDefaultName: "Série {0}",
    blank: "(Vide)",
    msg: {
      emptyTips:
        "Ajoutez\x20une\x20série\x20pour\x20commencer\x20à\x20visualiser\x20vos\x20données",
      sankeyCircularTips:
        "Le graphique en Sankey ne peut pas contenir de données circulaires",
    },
    bubble: {
      emptyTips:
        "Le\x20graphique\x20en\x20bulles\x20nécessite\x20au\x20moins\x202\x20colonnes\u00a0:\x20axe\x20X,\x20axe\x20Y",
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
      q3: "Troisième quartile",
      max: "Valeur\x20maximale",
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
      hierarchy: "Champs\x20de\x20hiérarchie",
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
        "Le diagramme de cordes nécessite des champs Source et Cible distincts et, éventuellement, un champ Valeur différent.",
      configDiagnostic:
        "La configuration du diagramme de cordes n’est pas valide. Vérifiez les angles, les rayons, l’opacité et les tailles.",
      source: "Source",
      target: "Cible",
      value: "Valeur",
      count: "Nombre de relations",
      associatedValue: "Valeur associée",
    },
    chartField: {
      missingCategoryFields:
        "Ce graphique nécessite davantage de champs d’étiquette.",
      missingSeriesFields:
        "Ce\x20graphique\x20nécessite\x20davantage\x20de\x20champs\x20de\x20valeurs\x20numériques.",
      invalidFieldIndex:
        "Un champ de graphique sélectionné n’est plus disponible.",
      invalidValueFieldType:
        "Le\x20champ\x20de\x20valeurs\x20sélectionné\x20ne\x20contient\x20pas\x20de\x20données\x20numériques.",
      invalidDataStructure:
        "Les champs sélectionnés ne forment pas une structure de données valide pour ce graphique.",
      unsupportedChartType:
        "Ce\x20type\x20de\x20graphique\x20ne\x20dispose\x20d’aucune\x20règle\x20d’utilisation\x20des\x20champs.",
    },
  },
};
module.exports = e;
