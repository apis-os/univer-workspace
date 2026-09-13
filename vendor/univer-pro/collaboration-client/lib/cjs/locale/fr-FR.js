const e = {
  "collaboration-client": {
    collabClient: {
      tooltip: {
        reconnect: "Cliquez pour reconnecter"
      }
    },
    collabStatus: {
      fetchMiss: "Synchronisation des données du serveur...",
      conflict: "Conflits de modification",
      notCollab: "Fichier local",
      synced: "Synchronisé",
      syncing: "Synchronisation...",
      offline: "Hors ligne, les modifications seront enregistrées localement"
    },
    session: {
      "connection-failed": "Échec de la connexion. Veuillez vérifier votre réseau.",
      "will-retry": "Échec de la connexion. Une nouvelle tentative aura lieu dans un instant.",
      "room-full": "Ce document a atteint sa limite de collaboration. Vos modifications seront enregistrées localement.",
      "join-failed": "Échec de la connexion à la collaboration. Veuillez réessayer plus tard. Vos modifications seront enregistrées localement.",
      "room-not-exists": "Échec de la connexion à la collaboration. Vos modifications seront enregistrées localement.",
      "room-permission-denied": "Aucune\x20autorisation\x20de\x20collaboration.\x20Vos\x20modifications\x20seront\x20enregistrées\x20localement.",
      "room-cnt-exceeds": "Le nombre de documents collaboratifs dépasse la limite. Vos modifications seront enregistrées localement.",
      "collaboration-timeout": "Le\x20serveur\x20ne\x20répond\x20pas\x20à\x20votre\x20demande\x20de\x20collaboration.\x20Vos\x20modifications\x20seront\x20enregistrées\x20localement."
    },
    conflict: {
      title: "Conflit de collaboration",
      content: "Il existe un conflit entre votre copie locale et la copie sur le serveur. Veuillez enregistrer vos modifications locales, car elles seront perdues lors du rechargement de la page."
    },
    permission: {
      title: "Erreur d'authentification",
      content: "Vos\x20actions\x20entrent\x20en\x20conflit\x20avec\x20les\x20autorisations\x20du\x20serveur.\x20Veuillez\x20enregistrer\x20vos\x20modifications\x20locales\x20ailleurs,\x20car\x20elles\x20seront\x20supprimées\x20après\x20l\x27actualisation\x20de\x20la\x20page."
    },
    collaboration: {
      "single-unit": {
        warning: "Vous avez ouvert le même fichier dans un autre onglet. Pour éviter toute perte de données, vous ne pouvez pas modifier dans cet onglet."
      },
      closeRoom: "Les privilèges d'édition ont été révoqués car la salle de collaboration a été fermée."
    },
    auth: {
      needGotoLoginAlert: "Votre connexion a expiré. Cliquez sur OK pour vous reconnecter, ou sur Annuler pour enregistrer vos modifications locales."
    }
  }
};
module.exports = e;
