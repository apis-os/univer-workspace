const e = {
  "sheets-outline-ui": {
    cancel: "Annuler",
    group: "Grouper",
    ungroup: "Dégrouper",
    groupRows: "Grouper les lignes {0} - {1}",
    groupColumns: "Grouper les colonnes {0} - {1}",
    ungroupRows: "Dégrouper\x20les\x20lignes\x20{0}\x20-\x20{1}",
    ungroupColumns: "Dégrouper les colonnes {0} - {1}",
    error: {
      permission:
        "Vous n’avez pas l’autorisation d’affichage, les opérations de groupement ne peuvent donc pas être effectuées.",
      invalidRange:
        "Impossible de créer le plan, car la plage sélectionnée n’est pas valide.",
      outOfBounds:
        "Impossible de créer le plan, car la plage sélectionnée est en dehors de la feuille.",
      crossing:
        "Impossible de mettre à jour le plan, car le résultat créerait des groupes qui se chevauchent.",
      maxDepth:
        "Impossible de créer le plan, car les plans compatibles avec Excel prennent en charge jusqu’à 8 niveaux.",
      moveSplitsOutline:
        "Impossible\x20de\x20déplacer\x20les\x20lignes\x20ou\x20colonnes,\x20car\x20cela\x20fractionnerait\x20un\x20plan\x20existant.\x20Supprimez\x20d’abord\x20le\x20plan\x20concerné.",
      clearRangeNotContainOutline:
        "Impossible de dégrouper, car la plage sélectionnée ne contient pas entièrement la plage du groupe de plan.",
      unknown:
        "Impossible de mettre à jour le plan, car l’opération n’est pas valide.",
    },
  },
};
module.exports = e;
