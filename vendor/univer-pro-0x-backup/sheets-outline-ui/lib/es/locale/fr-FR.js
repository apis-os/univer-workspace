const e = {
  "sheets-outline-ui": {
    cancel: "Annuler",
    group: "Grouper",
    ungroup: "Dégrouper",
    groupRows: "Grouper les lignes {0} - {1}",
    groupColumns: "Grouper les colonnes {0} - {1}",
    ungroupRows: "Dégrouper les lignes {0} - {1}",
    ungroupColumns: "Dégrouper les colonnes {0} - {1}",
    error: {
      permission:
        "Vous\x20n’avez\x20pas\x20l’autorisation\x20d’affichage,\x20les\x20opérations\x20de\x20groupement\x20ne\x20peuvent\x20donc\x20pas\x20être\x20effectuées.",
      invalidRange:
        "Impossible\x20de\x20créer\x20le\x20plan,\x20car\x20la\x20plage\x20sélectionnée\x20n’est\x20pas\x20valide.",
      outOfBounds:
        "Impossible de créer le plan, car la plage sélectionnée est en dehors de la feuille.",
      crossing:
        "Impossible de mettre à jour le plan, car le résultat créerait des groupes qui se chevauchent.",
      maxDepth:
        "Impossible\x20de\x20créer\x20le\x20plan,\x20car\x20les\x20plans\x20compatibles\x20avec\x20Excel\x20prennent\x20en\x20charge\x20jusqu’à\x208\x20niveaux.",
      moveSplitsOutline:
        "Impossible de déplacer les lignes ou colonnes, car cela fractionnerait un plan existant. Supprimez d’abord le plan concerné.",
      clearRangeNotContainOutline:
        "Impossible de dégrouper, car la plage sélectionnée ne contient pas entièrement la plage du groupe de plan.",
      unknown:
        "Impossible de mettre à jour le plan, car l’opération n’est pas valide.",
    },
  },
};
export { e as default };
