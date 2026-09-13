const e = {
  "slides-chart-ui": {
    border: "Bordure",
    common: {
      insertChartFailed: "Échec de l'insertion du graphique",
      inlineData: "Données\x20en\x20ligne",
      cancel: "Annuler",
      insert: "Insérer",
      editData: "Modifier les données",
      editChart: "Éditeur de graphique",
      tableDataEmpty: "Les données du tableau sont vides",
      duplicate: "Dupliquer",
      apply: "Appliquer",
      data: "Données",
      series: "Série",
      horizontalAxis: "Axe\x20horizontal",
      verticalAxis: "Axe vertical",
      setup: "Configurer",
      customize: "Personnaliser",
      switchRowColumn: "Basculer vers ligne/colonne",
      chartAndAxisTitles: "Titres du graphique et des axes",
      chartStyle: "Style\x20de\x20graphique",
      heatmap: "Carte thermique",
      legend: "Légende",
      rightVerticalAxis: "Axe\x20vertical\x20droit",
      trendline: "Courbe\x20de\x20tendance",
      category: "Catégorie",
      label: "Étiquette",
      value: "Valeur",
      valueField: "Champ de valeur",
      chartType: "Type de graphique",
    },
    editor: { defaultColor: "Couleur\x20par\x20défaut" },
    chartTypes: {
      line: "Graphique en ligne",
      column: "Graphique\x20en\x20colonnes",
      columnStacked: "Empiler · Graphique en colonnes",
      columnPercentStacked:
        "Pourcentage\x20empilé\x20·\x20Graphique\x20en\x20colonnes",
      bar: "Graphique\x20en\x20barres",
      barStacked: "Graphique\x20en\x20barres\x20empilées",
      barPercentStacked:
        "Graphique\x20en\x20barres\x20empilées\x20en\x20pourcentage",
      pie: "Graphique en camembert",
      donut: "Graphique\x20en\x20beignet",
      pieOfPie: "Graphique secteurs de secteur",
      barOfPie: "Graphique barres de secteur",
      area: "Graphique en aires",
      areaStacked: "Graphique en aires empilées",
      areaPercentStacked: "Graphique en aires empilées en pourcentage",
      radar: "Graphique radar",
      scatter: "Graphique de dispersion",
      combination: "Graphique combiné",
      wordCloud: "Graphique en nuage de mots",
      funnel: "Graphique en entonnoir",
      bubble: "Graphique en bulles",
      relation: "Graphique\x20de\x20relation",
      waterfall: "Graphique\x20en\x20cascade",
      pareto: "Graphique de Pareto",
      sankey: "Graphique\x20de\x20Sankey",
      heatmap: "Carte thermique",
      boxplot: "Boîte\x20à\x20moustaches",
      candlestick: "Graphique en chandeliers",
      histogram: "Histogramme",
      treemap: "Carte proportionnelle",
      sunburst: "Diagramme en rayons de soleil",
      gauge: "Graphique de jauge",
      chord: "Diagramme de cordes",
    },
    section: {
      candlestick: "Graphique\x20en\x20chandeliers",
      chord: "Tableau d'accords",
      funnel: "Graphique\x20en\x20entonnoir",
      gauge: "Tableau de jauge",
      gridlinesAndTicks: "Lignes\x20de\x20grille\x20et\x20graduations",
      histogram: "Graphique histogramme",
      indicatorLine: "Ligne indicatrice",
      lineAndArea: "Graphique en ligne / Graphique en aires",
      paretoBar: "Série\x20de\x20Diagramme\x20en\x20Barres",
      paretoLine: "Série\x20du\x20Pourcentage\x20Cumulé",
      pie: "Graphique en camembert",
      radar: "Graphique radar",
      relation: "Graphique de relation",
      sunburst: "Tableau des rayons de soleil",
      treemap: "Graphique arborescent",
      waterfall: "Graphique\x20en\x20cascade",
      wordCloud: "Nuage de mots",
    },
    candlestick: {
      columnsError:
        "Les données du graphique en chandeliers nécessitent les colonnes Catégorie, Ouverture, Plus haut, Plus bas et Clôture.",
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
        "Le diagramme de cordes nécessite des champs Source et Cible distincts et, éventuellement, un champ Valeur différent.",
      configDiagnostic:
        "La configuration du diagramme de cordes n’est pas valide. Vérifiez les angles, les rayons, l’opacité et les tailles.",
      count: "Nombre de relations",
      associatedValue: "Valeur associée",
    },
    sunburst: {
      hierarchy: "Hiérarchie",
      ownValue: "Valeur propre",
      children: "Éléments enfants",
      diagnostic:
        "Le graphique en rayons de soleil nécessite au moins un champ hiérarchique et un champ de valeur numérique.",
    },
    histogram: { frequency: "Fréquence" },
    pie: { aggregateOther: "Autre", aggregateMembers: "Éléments" },
    treemap: {
      hierarchy: "Champs de hiérarchie",
      ownValue: "Valeur\x20propre",
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
        "Ce graphique nécessite davantage de champs d’étiquette.",
      missingSeriesFields:
        "Ce\x20graphique\x20nécessite\x20davantage\x20de\x20champs\x20de\x20valeurs\x20numériques.",
      invalidFieldIndex:
        "Un champ de graphique sélectionné n’est plus disponible.",
      invalidValueFieldType:
        "Le champ de valeurs sélectionné ne contient pas de données numériques.",
      invalidDataStructure:
        "Les champs sélectionnés ne forment pas une structure de données valide pour ce graphique.",
      unsupportedChartType:
        "Ce type de graphique ne dispose d’aucune règle d’utilisation des champs.",
    },
  },
};
export { e as default };
