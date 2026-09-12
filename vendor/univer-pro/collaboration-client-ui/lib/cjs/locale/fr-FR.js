const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "Cliquez pour reconnecter" } },
    collabStatus: {
      fetchMiss: "Synchronisation\x20des\x20données\x20du\x20serveur...",
      conflict: "Conflits de modification",
      notCollab: "Fichier local",
      synced: "Synchronisé",
      syncing: "Synchronisation...",
      offline: "Hors ligne, les modifications seront enregistrées localement",
    },
    snapshotLoading: {
      timeout:
        "Le chargement des données est bloqué à {0}/{1}. Actualisez la page pour réessayer.",
      refresh: "Actualiser\x20la\x20page",
    },
    session: {
      "connection-failed":
        "Échec de la connexion, veuillez vérifier votre réseau.",
      "will-retry":
        "Échec de la connexion, une nouvelle tentative aura lieu dans un instant.",
      "room-full":
        "La salle de collaboration est pleine. Vos modifications seront enregistrées localement.",
      "collaboration-timeout":
        "Le serveur ne répond pas à votre demande de collaboration. Vos modifications seront enregistrées localement.",
    },
    conflict: {
      title: "Conflit de collaboration",
      content:
        "Il existe un conflit entre votre copie locale et la copie sur le serveur. Veuillez enregistrer vos modifications locales, car elles seront perdues lors du rechargement de la page.",
    },
    permission: {
      title: "Erreur d'authentification",
      content:
        "Vos actions entrent en conflit avec les autorisations du serveur. Veuillez enregistrer vos modifications locales ailleurs, car elles seront supprimées après l'actualisation de la page.",
    },
    collaboration: {
      "offline-data-not-saved":
        "Vous avez des modifications hors ligne qui n'ont pas été enregistrées sur le serveur. Veuillez vérifier votre réseau et réessayer.",
      "single-unit": {
        warning:
          "Vous avez ouvert le même fichier dans un autre onglet. Pour éviter toute perte de données, vous ne pouvez pas modifier dans cet onglet.",
      },
      closeRoom:
        "Les privilèges d'édition ont été révoqués car la salle de collaboration a été fermée.",
    },
    auth: {
      needGotoLoginAlert:
        "Votre connexion a expiré. Cliquez sur OK pour vous reconnecter, ou sur Annuler pour enregistrer vos modifications locales.",
    },
    formula: {
      calculation: {
        started: "Le\x20calcul\x20des\x20formules\x20a\x20commencé.",
        waiting:
          "La file d'attente de calcul des formules est pleine, en attente d'un emplacement disponible...",
        unable:
          "Impossible\x20d\x27effectuer\x20le\x20calcul\x20des\x20formules\x20pour\x20le\x20moment.\x20Veuillez\x20réessayer\x20plus\x20tard.",
      },
    },
  },
};
module.exports = e;
