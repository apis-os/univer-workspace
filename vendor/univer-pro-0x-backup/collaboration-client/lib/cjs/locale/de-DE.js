const e = {
  "collaboration-client": {
    collabClient: { tooltip: { reconnect: "Klicken, um wieder zu verbinden" } },
    collabStatus: {
      fetchMiss: "Serverdaten werden synchronisiert...",
      conflict: "Bearbeitungskonflikte",
      notCollab: "Lokale\x20Datei",
      synced: "Synchronisiert",
      syncing: "Synchronisierung läuft...",
      offline: "Offline, Änderungen werden lokal gespeichert",
    },
    session: {
      "connection-failed":
        "Verbindung\x20fehlgeschlagen.\x20Bitte\x20überprüfen\x20Sie\x20Ihr\x20Netzwerk.",
      "will-retry":
        "Verbindung fehlgeschlagen. Wir werden es in Kürze erneut versuchen.",
      "room-full":
        "Das Dokument hat die Zusammenarbeitsgrenze erreicht. Ihre Änderungen werden lokal zwischengespeichert.",
      "join-failed":
        "Beitritt\x20zur\x20Zusammenarbeit\x20fehlgeschlagen.\x20Bitte\x20versuchen\x20Sie\x20es\x20später\x20erneut.\x20Ihre\x20Änderungen\x20werden\x20lokal\x20zwischengespeichert.",
      "room-not-exists":
        "Beitritt zur Zusammenarbeit fehlgeschlagen. Ihre Änderungen werden lokal zwischengespeichert.",
      "room-permission-denied":
        "Keine Zusammenarbeitsberechtigung. Ihre Änderungen werden lokal zwischengespeichert.",
      "room-cnt-exceeds":
        "Die Anzahl der Zusammenarbeitsdokumente überschreitet das Limit. Ihre Änderungen werden lokal zwischengespeichert.",
      "collaboration-timeout":
        "Der\x20Server\x20reagiert\x20nicht\x20auf\x20Ihre\x20Zusammenarbeitsanfrage.\x20Ihre\x20Änderungen\x20werden\x20lokal\x20gespeichert.",
    },
    conflict: {
      title: "Zusammenarbeitskonflikt",
      content:
        "Es gibt einen Konflikt zwischen Ihrer lokalen Kopie und der Kopie auf dem Server. Bitte speichern Sie Ihre lokalen Änderungen, da sie beim Neuladen der Seite verloren gehen.",
    },
    permission: {
      title: "Authentifizierungsfehler",
      content:
        "Ihre Aktionen stehen im Konflikt mit den Serverberechtigungen. Bitte speichern Sie Ihre lokalen Änderungen anderswo, da sie nach dem Aktualisieren der Seite verworfen werden.",
    },
    collaboration: {
      "single-unit": {
        warning:
          "Sie haben dieselbe Datei in einem anderen Tab geöffnet. Im Falle von Datenverlust können Sie in diesem Tab nicht bearbeiten.",
      },
      closeRoom:
        "Bearbeitungsrechte wurden entzogen, weil der Zusammenarbeitsraum geschlossen wurde.",
    },
    auth: {
      needGotoLoginAlert:
        "Ihre Anmeldung ist abgelaufen. Klicken Sie auf OK, um sich erneut anzumelden, oder auf Abbrechen, um Ihre lokalen Änderungen zu speichern.",
    },
  },
};
module.exports = e;
