const e = {
  "collaboration-client": {
    collabClient: { tooltip: { reconnect: "Clicca per riconnetterti" } },
    collabStatus: {
      fetchMiss: "Sincronizzazione dati server in corso...",
      conflict: "Conflitti\x20di\x20modifica",
      notCollab: "File locale",
      synced: "Sincronizzato",
      syncing: "Sincronizzazione in corso...",
      offline:
        "Offline,\x20le\x20modifiche\x20verranno\x20salvate\x20in\x20locale",
    },
    session: {
      "connection-failed": "Connessione fallita. Verifica la tua rete.",
      "will-retry": "Connessione fallita. Riproveremo tra poco.",
      "room-full":
        "Il documento ha raggiunto il limite di collaborazione. Le tue modifiche verranno memorizzate in locale.",
      "join-failed":
        "Impossibile\x20partecipare\x20alla\x20collaborazione.\x20Riprova\x20più\x20tardi.\x20Le\x20tue\x20modifiche\x20verranno\x20memorizzate\x20in\x20locale.",
      "room-not-exists":
        "Impossibile partecipare alla collaborazione. Le tue modifiche verranno memorizzate in locale.",
      "room-permission-denied":
        "Nessuna\x20autorizzazione\x20alla\x20collaborazione.\x20Le\x20tue\x20modifiche\x20verranno\x20memorizzate\x20in\x20locale.",
      "room-cnt-exceeds":
        "Il numero di documenti collaborativi supera il limite. Le tue modifiche verranno memorizzate in locale.",
      "collaboration-timeout":
        "Il server non risponde alla tua richiesta di collaborazione. Le tue modifiche verranno salvate in locale.",
    },
    conflict: {
      title: "Conflitto\x20di\x20collaborazione",
      content:
        "C'è un conflitto tra la tua copia locale e quella sul server. Salva le tue modifiche locali, perché andranno perse quando ricarichi la pagina.",
    },
    permission: {
      title: "Errore di autenticazione",
      content:
        "Le tue azioni sono in conflitto con le autorizzazioni del server. Salva le tue modifiche locali altrove, perché verranno eliminate dopo l'aggiornamento della pagina.",
    },
    collaboration: {
      "single-unit": {
        warning:
          "Hai aperto lo stesso file in un'altra scheda. In caso di perdita di dati, non puoi modificare in questa scheda.",
      },
      closeRoom:
        "I\x20privilegi\x20di\x20modifica\x20sono\x20stati\x20revocati\x20perché\x20la\x20stanza\x20collaborativa\x20è\x20stata\x20chiusa.",
    },
    auth: {
      needGotoLoginAlert:
        "Il tuo accesso è scaduto, clicca OK per accedere di nuovo, clicca Annulla per salvare le tue modifiche locali.",
    },
  },
};
module.exports = e;
