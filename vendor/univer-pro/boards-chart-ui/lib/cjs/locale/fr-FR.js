const e = {
  "boards-chart-ui": {
    dataEditor: {
      unavailable: "Les données du graphique ne sont pas disponibles.",
      updateFailed: "Impossible de mettre à jour les données du graphique.",
    },
    common: {
      editChart: "Éditeur de graphique",
      deleteChart: "Supprimer le graphique",
      editData: "Modifier les données",
      insertChartFailed: "Échec de l'insertion du graphique",
      data: "Données",
      cancel: "Annuler",
      insert: "Insérer",
      setup: "Configurer",
      customize: "Personnaliser",
      switchRowColumn: "Basculer vers ligne/colonne",
      duplicate: "Dupliquer",
      apply: "Appliquer",
      chartAndAxisTitles: "Titres du graphique et des axes",
      chartStyle: "Style\x20de\x20graphique",
      heatmap: "Carte thermique",
      horizontalAxis: "Axe horizontal",
      legend: "Légende",
      rightVerticalAxis: "Axe vertical droit",
      series: "Série",
      trendline: "Courbe\x20de\x20tendance",
      verticalAxis: "Axe vertical",
      tableDataEmpty: "Les données du tableau sont vides",
      category: "Catégorie",
      label: "Étiquette",
      value: "Valeur",
      valueField: "Champ\x20de\x20valeur",
      chartType: "Type\x20de\x20graphique",
    },
    chartTypes: {
      line: "Graphique\x20en\x20ligne",
      column: "Graphique en colonnes",
      columnStacked: "Empiler · Graphique en colonnes",
      columnPercentStacked: "Pourcentage empilé · Graphique en colonnes",
      bar: "Graphique\x20en\x20barres",
      barStacked: "Graphique en barres empilées",
      barPercentStacked:
        "Graphique\x20en\x20barres\x20empilées\x20en\x20pourcentage",
      pie: "Graphique en camembert",
      donut: "Graphique en beignet",
      pieOfPie: "Graphique\x20secteurs\x20de\x20secteur",
      barOfPie: "Graphique barres de secteur",
      area: "Graphique\x20en\x20aires",
      areaStacked: "Graphique\x20en\x20aires\x20empilées",
      areaPercentStacked: "Graphique en aires empilées en pourcentage",
      radar: "Graphique radar",
      scatter: "Graphique de dispersion",
      combination: "Graphique combiné",
      wordCloud: "Graphique\x20en\x20nuage\x20de\x20mots",
      funnel: "Graphique en entonnoir",
      bubble: "Graphique en bulles",
      relation: "Graphique de relation",
      waterfall: "Graphique en cascade",
      pareto: "Graphique\x20de\x20Pareto",
      sankey: "Graphique de Sankey",
      heatmap: "Carte\x20thermique",
      boxplot: "Boîte à moustaches",
      candlestick: "Graphique en chandeliers",
      histogram: "Histogramme",
      treemap: "Carte proportionnelle",
      sunburst: "Diagramme en rayons de soleil",
      gauge: "Graphique de jauge",
      chord: "Diagramme de cordes",
    },
    section: {
      candlestick: "Graphique en chandeliers",
      chord: "Tableau d'accords",
      funnel: "Graphique en entonnoir",
      gauge: "Tableau de jauge",
      gridlinesAndTicks: "Lignes de grille et graduations",
      histogram: "Graphique\x20histogramme",
      indicatorLine: "Ligne indicatrice",
      lineAndArea: "Graphique en ligne / Graphique en aires",
      paretoBar: "Série de Diagramme en Barres",
      paretoLine: "Série\x20du\x20Pourcentage\x20Cumulé",
      pie: "Graphique en camembert",
      radar: "Graphique radar",
      relation: "Graphique de relation",
      sunburst: "Tableau des rayons de soleil",
      treemap: "Graphique\x20arborescent",
      waterfall: "Graphique en cascade",
      wordCloud: "Nuage de mots",
    },
    candlestick: {
      columnsError:
        "Les données du graphique en chandeliers nécessitent les colonnes Catégorie, Ouverture, Plus haut, Plus bas et Clôture.",
      close: "Clôture",
      high: "Plus haut",
      low: "Plus bas",
      open: "Ouverture",
      series: "Série OHLC",
    },
    chord: {
      source: "Source",
      target: "Cible",
      emptyDiagnostic:
        "Le diagramme de cordes nécessite au moins une relation de poids positif entre deux nœuds distincts.",
      mappingDiagnostic:
        "Le diagramme de cordes nécessite des champs Source et Cible distincts et, éventuellement, un champ Valeur différent.",
      configDiagnostic:
        "La\x20configuration\x20du\x20diagramme\x20de\x20cordes\x20n’est\x20pas\x20valide.\x20Vérifiez\x20les\x20angles,\x20les\x20rayons,\x20l’opacité\x20et\x20les\x20tailles.",
      count: "Nombre de relations",
      associatedValue: "Valeur associée",
    },
    sunburst: {
      hierarchy: "Hiérarchie",
      ownValue: "Valeur propre",
      children: "Éléments\x20enfants",
      diagnostic:
        "Le graphique en rayons de soleil nécessite au moins un champ hiérarchique et un champ de valeur numérique.",
    },
    histogram: { frequency: "Fréquence" },
    pie: { aggregateOther: "Autre", aggregateMembers: "Éléments" },
    treemap: {
      hierarchy: "Champs de hiérarchie",
      ownValue: "Valeur propre",
      children: "Éléments\x20enfants",
      diagnostic:
        "La carte arborescente nécessite au moins un champ hiérarchique et un champ de valeur numérique.",
    },
    gauge: {
      emptyDiagnostic:
        "Le graphique de jauge nécessite au moins une valeur numérique finie.",
      mappingDiagnostic:
        "Le graphique de jauge nécessite un champ d’étiquette et exactement un champ de valeur.",
      configDiagnostic:
        "La configuration du graphique de jauge n’est pas valide. Vérifiez l’échelle, les plages, les proportions et les tailles.",
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
        "Ce type de graphique ne dispose d’aucune règle d’utilisation des champs.",
    },
  },
};
module.exports = e;
