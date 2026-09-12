const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "Klicken, um wieder zu verbinden" } },
    collabStatus: {
      fetchMiss: "Serverdaten werden synchronisiert...",
      conflict: "Bearbeitungskonflikte",
      notCollab: "Lokale\x20Datei",
      synced: "Synchronisiert",
      syncing: "Synchronisierung...",
      offline: "Offline,\x20Änderungen\x20werden\x20lokal\x20gespeichert",
    },
    snapshotLoading: {
      timeout:
        "Das\x20Laden\x20der\x20Daten\x20ist\x20bei\x20{0}/{1}\x20stehen\x20geblieben.\x20Aktualisieren\x20Sie\x20die\x20Seite\x20und\x20versuchen\x20Sie\x20es\x20erneut.",
      refresh: "Seite\x20aktualisieren",
    },
    session: {
      "connection-failed":
        "Verbindung fehlgeschlagen, bitte überprüfen Sie Ihr Netzwerk.",
      "will-retry":
        "Verbindung fehlgeschlagen, wir versuchen es gleich erneut.",
      "room-full":
        "Der Zusammenarbeitsraum ist voll. Ihre Änderungen werden lokal gespeichert.",
      "collaboration-timeout":
        "Der\x20Server\x20antwortet\x20nicht\x20auf\x20Ihre\x20Zusammenarbeitsanfrage.\x20Ihre\x20Änderungen\x20werden\x20lokal\x20gespeichert.",
    },
    conflict: {
      title: "Zusammenarbeitskonflikt",
      content:
        "Es gibt einen Konflikt zwischen Ihrer lokalen Kopie und der Kopie auf dem Server. Bitte speichern Sie Ihre lokalen Änderungen, da sie beim Neuladen der Seite verloren gehen.",
    },
    permission: {
      title: "Authentifizierungsfehler",
      content:
        "Ihre\x20Aktionen\x20stehen\x20im\x20Konflikt\x20mit\x20den\x20Serverberechtigungen.\x20Bitte\x20speichern\x20Sie\x20Ihre\x20lokalen\x20Änderungen\x20anderweitig,\x20da\x20sie\x20nach\x20dem\x20Aktualisieren\x20der\x20Seite\x20verworfen\x20werden.",
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
module.exports = e;
