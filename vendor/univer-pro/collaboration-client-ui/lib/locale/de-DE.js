const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "Klicken, um wieder zu verbinden" } },
    collabStatus: {
      fetchMiss: "Serverdaten\x20werden\x20synchronisiert...",
      conflict: "Bearbeitungskonflikte",
      notCollab: "Lokale Datei",
      synced: "Synchronisiert",
      syncing: "Synchronisierung...",
      offline: "Offline, Änderungen werden lokal gespeichert",
    },
    snapshotLoading: {
      timeout:
        "Das Laden der Daten ist bei {0}/{1} stehen geblieben. Aktualisieren Sie die Seite und versuchen Sie es erneut.",
      refresh: "Seite aktualisieren",
    },
    session: {
      "connection-failed":
        "Verbindung fehlgeschlagen, bitte überprüfen Sie Ihr Netzwerk.",
      "will-retry":
        "Verbindung\x20fehlgeschlagen,\x20wir\x20versuchen\x20es\x20gleich\x20erneut.",
      "room-full":
        "Der Zusammenarbeitsraum ist voll. Ihre Änderungen werden lokal gespeichert.",
      "collaboration-timeout":
        "Der Server antwortet nicht auf Ihre Zusammenarbeitsanfrage. Ihre Änderungen werden lokal gespeichert.",
    },
    conflict: {
      title: "Zusammenarbeitskonflikt",
      content:
        "Es gibt einen Konflikt zwischen Ihrer lokalen Kopie und der Kopie auf dem Server. Bitte speichern Sie Ihre lokalen Änderungen, da sie beim Neuladen der Seite verloren gehen.",
    },
    permission: {
      title: "Authentifizierungsfehler",
      content:
        "Ihre Aktionen stehen im Konflikt mit den Serverberechtigungen. Bitte speichern Sie Ihre lokalen Änderungen anderweitig, da sie nach dem Aktualisieren der Seite verworfen werden.",
    },
    collaboration: {
      "offline-data-not-saved":
        "Sie haben Offline-Änderungen, die nicht auf dem Server gespeichert wurden. Bitte überprüfen Sie Ihr Netzwerk und versuchen Sie es erneut.",
      "single-unit": {
        warning:
          "Sie haben dieselbe Datei in einem anderen Tab geöffnet. Um Datenverlust zu vermeiden, können Sie in diesem Tab nicht bearbeiten.",
      },
      closeRoom:
        "Die Bearbeitungsberechtigungen wurden widerrufen, da der Zusammenarbeitsraum geschlossen wurde.",
    },
    auth: {
      needGotoLoginAlert:
        "Ihre Anmeldung ist abgelaufen. Klicken Sie auf OK, um sich erneut anzumelden, oder auf Abbrechen, um Ihre lokalen Änderungen zu speichern.",
    },
    formula: {
      calculation: {
        started: "Formelberechnung gestartet.",
        waiting:
          "Die Warteschlange für die Formelberechnung ist voll, wartet auf einen verfügbaren Slot...",
        unable:
          "Formelberechnung kann derzeit nicht durchgeführt werden. Bitte versuchen Sie es später erneut.",
      },
    },
  },
};
export { e as default };
