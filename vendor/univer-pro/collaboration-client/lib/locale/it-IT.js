const e = {
  "collaboration-client": {
    collabClient: {
      tooltip: {
        reconnect: "Clicca\x20per\x20riconnetterti"
      }
    },
    collabStatus: {
      fetchMiss: "Sincronizzazione dati server in corso...",
      conflict: "Conflitti\x20di\x20modifica",
      notCollab: "File locale",
      synced: "Sincronizzato",
      syncing: "Sincronizzazione in corso...",
      offline: "Offline, le modifiche verranno salvate in locale"
    },
    session: {
      "connection-failed": "Connessione fallita. Verifica la tua rete.",
      "will-retry": "Connessione\x20fallita.\x20Riproveremo\x20tra\x20poco.",
      "room-full": "Il documento ha raggiunto il limite di collaborazione. Le tue modifiche verranno memorizzate in locale.",
      "join-failed": "Impossibile partecipare alla collaborazione. Riprova più tardi. Le tue modifiche verranno memorizzate in locale.",
      "room-not-exists": "Impossibile\x20partecipare\x20alla\x20collaborazione.\x20Le\x20tue\x20modifiche\x20verranno\x20memorizzate\x20in\x20locale.",
      "room-permission-denied": "Nessuna autorizzazione alla collaborazione. Le tue modifiche verranno memorizzate in locale.",
      "room-cnt-exceeds": "Il numero di documenti collaborativi supera il limite. Le tue modifiche verranno memorizzate in locale.",
      "collaboration-timeout": "Il\x20server\x20non\x20risponde\x20alla\x20tua\x20richiesta\x20di\x20collaborazione.\x20Le\x20tue\x20modifiche\x20verranno\x20salvate\x20in\x20locale."
    },
    conflict: {
      title: "Conflitto di collaborazione",
      content: "C\x27è\x20un\x20conflitto\x20tra\x20la\x20tua\x20copia\x20locale\x20e\x20quella\x20sul\x20server.\x20Salva\x20le\x20tue\x20modifiche\x20locali,\x20perché\x20andranno\x20perse\x20quando\x20ricarichi\x20la\x20pagina."
    },
    permission: {
      title: "Errore\x20di\x20autenticazione",
      content: "Le tue azioni sono in conflitto con le autorizzazioni del server. Salva le tue modifiche locali altrove, perché verranno eliminate dopo l'aggiornamento della pagina."
    },
    collaboration: {
      "single-unit": {
        warning: "Hai aperto lo stesso file in un'altra scheda. In caso di perdita di dati, non puoi modificare in questa scheda."
      },
      closeRoom: "I privilegi di modifica sono stati revocati perché la stanza collaborativa è stata chiusa."
    },
    auth: {
      needGotoLoginAlert: "Il tuo accesso è scaduto, clicca OK per accedere di nuovo, clicca Annulla per salvare le tue modifiche locali."
    }
  }
};
export { e as default };
