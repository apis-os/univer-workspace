const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "Clicca per Riconnettere" } },
    collabStatus: {
      fetchMiss: "Sincronizzazione dati server...",
      conflict: "Conflitti di modifica",
      notCollab: "File locale",
      synced: "Sincronizzato",
      syncing: "Sincronizzazione...",
      offline: "Offline, le modifiche verranno salvate localmente",
    },
    snapshotLoading: {
      timeout:
        "Il caricamento dei dati si è fermato a {0}/{1}. Aggiorna la pagina per riprovare.",
      refresh: "Aggiorna pagina",
    },
    session: {
      "connection-failed": "Connessione fallita, controlla la tua rete.",
      "will-retry": "Connessione\x20fallita,\x20riproveremo\x20a\x20breve.",
      "room-full":
        "La\x20stanza\x20di\x20collaborazione\x20è\x20piena.\x20Le\x20tue\x20modifiche\x20verranno\x20salvate\x20localmente.",
      "collaboration-timeout":
        "Il server non risponde alla tua richiesta di collaborazione. Le tue modifiche verranno salvate localmente.",
    },
    conflict: {
      title: "Conflitto di Collaborazione",
      content:
        "C'è un conflitto tra la tua copia locale e quella sul server. Salva le tue modifiche locali, perché andranno perse quando ricarichi la pagina.",
    },
    permission: {
      title: "Errore di Autenticazione",
      content:
        "Le tue azioni sono in conflitto con le autorizzazioni del server. Salva le tue modifiche locali altrove, poiché verranno scartate dopo l'aggiornamento della pagina.",
    },
    collaboration: {
      "offline-data-not-saved":
        "Hai modifiche offline che non sono state salvate sul server. Controlla la tua rete e riprova.",
      "single-unit": {
        warning:
          "Hai aperto lo stesso file in un'altra scheda. In caso di perdita di dati, non puoi modificare in questa scheda.",
      },
      closeRoom:
        "I privilegi di modifica sono stati revocati perché la stanza di collaborazione è stata chiusa.",
    },
    auth: {
      needGotoLoginAlert:
        "Il tuo login è scaduto, clicca OK per effettuare nuovamente l'accesso, clicca Annulla per salvare le tue modifiche locali.",
    },
    formula: {
      calculation: {
        started: "Calcolo\x20della\x20formula\x20avviato.",
        waiting:
          "La coda di calcolo delle formule è piena, in attesa di uno slot disponibile...",
        unable:
          "Impossibile eseguire il calcolo della formula in questo momento. Riprova più tardi.",
      },
    },
  },
};
module.exports = e;
