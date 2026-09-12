const e = {
  "docs-chart-ui": {
    previewRenderFailed: "Impossible d’afficher l’aperçu du graphique.",
    updateChartFailed:
      "Impossible\x20de\x20mettre\x20à\x20jour\x20le\x20graphique.",
    chartNotFound: "Le graphique n’est pas disponible.",
    close: "Fermer",
    common: {
      horizontalAxis: "Axe horizontal",
      verticalAxis: "Axe vertical",
      setup: "Configurer",
      customize: "Personnaliser",
      editChart: "Éditeur de graphique",
      data: "Données",
      editData: "Modifier\x20les\x20données",
      tableDataEmpty: "Les\x20données\x20du\x20tableau\x20sont\x20vides",
      cancel: "Annuler",
      duplicate: "Dupliquer",
      apply: "Appliquer",
      insertChartFailed: "Échec de l'insertion du graphique",
      inlineData: "Données en ligne",
      insert: "Insérer",
      deleteChart: "Supprimer le graphique",
      insertChart: "Insérer un graphique",
      chartAndAxisTitles: "Titres\x20du\x20graphique\x20et\x20des\x20axes",
      chartStyle: "Style de graphique",
      heatmap: "Carte thermique",
      legend: "Légende",
      rightVerticalAxis: "Axe vertical droit",
      series: "Série",
      trendline: "Courbe de tendance",
      category: "Catégorie",
      label: "Étiquette",
      value: "Valeur",
      valueField: "Champ de valeur",
      chartType: "Type de graphique",
    },
    floatMenu: { menuTitle: { chart: "Graphique" } },
    chartTypes: {
      line: "Graphique en ligne",
      column: "Graphique\x20en\x20colonnes",
      columnStacked: "Empiler\x20·\x20Graphique\x20en\x20colonnes",
      columnPercentStacked: "Pourcentage empilé · Graphique en colonnes",
      bar: "Graphique en barres",
      barStacked: "Graphique\x20en\x20barres\x20empilées",
      barPercentStacked: "Graphique en barres empilées en pourcentage",
      pie: "Graphique\x20en\x20camembert",
      donut: "Graphique en beignet",
      pieOfPie: "Graphique secteurs de secteur",
      barOfPie: "Graphique barres de secteur",
      area: "Graphique en aires",
      areaStacked: "Graphique en aires empilées",
      areaPercentStacked:
        "Graphique\x20en\x20aires\x20empilées\x20en\x20pourcentage",
      radar: "Graphique radar",
      scatter: "Graphique de dispersion",
      combination: "Graphique combiné",
      wordCloud: "Graphique en nuage de mots",
      funnel: "Graphique en entonnoir",
      bubble: "Graphique en bulles",
      relation: "Graphique de relation",
      waterfall: "Graphique en cascade",
      pareto: "Graphique de Pareto",
      sankey: "Graphique de Sankey",
      heatmap: "Carte thermique",
      boxplot: "Boîte à moustaches",
      candlestick: "Graphique en chandeliers",
      histogram: "Histogramme",
      treemap: "Carte\x20proportionnelle",
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
      indicatorLine: "Ligne\x20indicatrice",
      lineAndArea: "Graphique en ligne / Graphique en aires",
      paretoBar: "Série\x20de\x20Diagramme\x20en\x20Barres",
      paretoLine: "Série\x20du\x20Pourcentage\x20Cumulé",
      pie: "Graphique en camembert",
      radar: "Graphique\x20radar",
      relation: "Graphique de relation",
      sunburst: "Tableau des rayons de soleil",
      treemap: "Graphique arborescent",
      waterfall: "Graphique en cascade",
      wordCloud: "Nuage de mots",
    },
    candlestick: {
      columnsError:
        "Les\x20données\x20du\x20graphique\x20en\x20chandeliers\x20nécessitent\x20les\x20colonnes\x20Catégorie,\x20Ouverture,\x20Plus\x20haut,\x20Plus\x20bas\x20et\x20Clôture.",
      close: "Clôture",
      high: "Plus\x20haut",
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
        "Le\x20diagramme\x20de\x20cordes\x20nécessite\x20des\x20champs\x20Source\x20et\x20Cible\x20distincts\x20et,\x20éventuellement,\x20un\x20champ\x20Valeur\x20différent.",
      configDiagnostic:
        "La configuration du diagramme de cordes n’est pas valide. Vérifiez les angles, les rayons, l’opacité et les tailles.",
      count: "Nombre\x20de\x20relations",
      associatedValue: "Valeur associée",
    },
    sunburst: {
      hierarchy: "Hiérarchie",
      ownValue: "Valeur\x20propre",
      children: "Éléments\x20enfants",
      diagnostic:
        "Le graphique en rayons de soleil nécessite au moins un champ hiérarchique et un champ de valeur numérique.",
    },
    histogram: { frequency: "Fréquence" },
    pie: { aggregateOther: "Autre", aggregateMembers: "Éléments" },
    treemap: {
      hierarchy: "Champs de hiérarchie",
      ownValue: "Valeur propre",
      children: "Éléments enfants",
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
        "Ce\x20graphique\x20nécessite\x20davantage\x20de\x20champs\x20d’étiquette.",
      missingSeriesFields:
        "Ce graphique nécessite davantage de champs de valeurs numériques.",
      invalidFieldIndex:
        "Un champ de graphique sélectionné n’est plus disponible.",
      invalidValueFieldType:
        "Le\x20champ\x20de\x20valeurs\x20sélectionné\x20ne\x20contient\x20pas\x20de\x20données\x20numériques.",
      invalidDataStructure:
        "Les\x20champs\x20sélectionnés\x20ne\x20forment\x20pas\x20une\x20structure\x20de\x20données\x20valide\x20pour\x20ce\x20graphique.",
      unsupportedChartType:
        "Ce type de graphique ne dispose d’aucune règle d’utilisation des champs.",
    },
  },
};
module.exports = e;
