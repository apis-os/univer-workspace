const e = {
  "collaboration-client-ui": {
    collabClient: {
      tooltip: {
        reconnect: "Clicca per Riconnettere"
      }
    },
    collabStatus: {
      fetchMiss: "Sincronizzazione\x20dati\x20server...",
      conflict: "Conflitti di modifica",
      notCollab: "File locale",
      synced: "Sincronizzato",
      syncing: "Sincronizzazione...",
      offline: "Offline, le modifiche verranno salvate localmente"
    },
    snapshotLoading: {
      timeout: "Il\x20caricamento\x20dei\x20dati\x20si\x20è\x20fermato\x20a\x20{0}/{1}.\x20Aggiorna\x20la\x20pagina\x20per\x20riprovare.",
      refresh: "Aggiorna pagina"
    },
    session: {
      "connection-failed": "Connessione fallita, controlla la tua rete.",
      "will-retry": "Connessione fallita, riproveremo a breve.",
      "room-full": "La stanza di collaborazione è piena. Le tue modifiche verranno salvate localmente.",
      "collaboration-timeout": "Il server non risponde alla tua richiesta di collaborazione. Le tue modifiche verranno salvate localmente."
    },
    conflict: {
      title: "Conflitto di Collaborazione",
      content: "C\x27è\x20un\x20conflitto\x20tra\x20la\x20tua\x20copia\x20locale\x20e\x20quella\x20sul\x20server.\x20Salva\x20le\x20tue\x20modifiche\x20locali,\x20perché\x20andranno\x20perse\x20quando\x20ricarichi\x20la\x20pagina."
    },
    permission: {
      title: "Errore\x20di\x20Autenticazione",
      content: "Le tue azioni sono in conflitto con le autorizzazioni del server. Salva le tue modifiche locali altrove, poiché verranno scartate dopo l'aggiornamento della pagina."
    },
    collaboration: {
      "offline-data-not-saved": "Hai modifiche offline che non sono state salvate sul server. Controlla la tua rete e riprova.",
      "single-unit": {
        warning: "Hai aperto lo stesso file in un'altra scheda. In caso di perdita di dati, non puoi modificare in questa scheda."
      },
      closeRoom: "I\x20privilegi\x20di\x20modifica\x20sono\x20stati\x20revocati\x20perché\x20la\x20stanza\x20di\x20collaborazione\x20è\x20stata\x20chiusa."
    },
    auth: {
      needGotoLoginAlert: "Il\x20tuo\x20login\x20è\x20scaduto,\x20clicca\x20OK\x20per\x20effettuare\x20nuovamente\x20l\x27accesso,\x20clicca\x20Annulla\x20per\x20salvare\x20le\x20tue\x20modifiche\x20locali."
    },
    formula: {
      calculation: {
        started: "Calcolo della formula avviato.",
        waiting: "La coda di calcolo delle formule è piena, in attesa di uno slot disponibile...",
        unable: "Impossibile eseguire il calcolo della formula in questo momento. Riprova più tardi."
      }
    }
  }
};
export { e as default };
