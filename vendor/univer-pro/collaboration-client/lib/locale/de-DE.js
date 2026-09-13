const e = {
  "collaboration-client": {
    collabClient: {
      tooltip: {
        reconnect: "Klicken, um wieder zu verbinden"
      }
    },
    collabStatus: {
      fetchMiss: "Serverdaten werden synchronisiert...",
      conflict: "Bearbeitungskonflikte",
      notCollab: "Lokale Datei",
      synced: "Synchronisiert",
      syncing: "Synchronisierung\x20läuft...",
      offline: "Offline, Änderungen werden lokal gespeichert"
    },
    session: {
      "connection-failed": "Verbindung fehlgeschlagen. Bitte überprüfen Sie Ihr Netzwerk.",
      "will-retry": "Verbindung fehlgeschlagen. Wir werden es in Kürze erneut versuchen.",
      "room-full": "Das Dokument hat die Zusammenarbeitsgrenze erreicht. Ihre Änderungen werden lokal zwischengespeichert.",
      "join-failed": "Beitritt zur Zusammenarbeit fehlgeschlagen. Bitte versuchen Sie es später erneut. Ihre Änderungen werden lokal zwischengespeichert.",
      "room-not-exists": "Beitritt zur Zusammenarbeit fehlgeschlagen. Ihre Änderungen werden lokal zwischengespeichert.",
      "room-permission-denied": "Keine\x20Zusammenarbeitsberechtigung.\x20Ihre\x20Änderungen\x20werden\x20lokal\x20zwischengespeichert.",
      "room-cnt-exceeds": "Die Anzahl der Zusammenarbeitsdokumente überschreitet das Limit. Ihre Änderungen werden lokal zwischengespeichert.",
      "collaboration-timeout": "Der Server reagiert nicht auf Ihre Zusammenarbeitsanfrage. Ihre Änderungen werden lokal gespeichert."
    },
    conflict: {
      title: "Zusammenarbeitskonflikt",
      content: "Es gibt einen Konflikt zwischen Ihrer lokalen Kopie und der Kopie auf dem Server. Bitte speichern Sie Ihre lokalen Änderungen, da sie beim Neuladen der Seite verloren gehen."
    },
    permission: {
      title: "Authentifizierungsfehler",
      content: "Ihre Aktionen stehen im Konflikt mit den Serverberechtigungen. Bitte speichern Sie Ihre lokalen Änderungen anderswo, da sie nach dem Aktualisieren der Seite verworfen werden."
    },
    collaboration: {
      "single-unit": {
        warning: "Sie haben dieselbe Datei in einem anderen Tab geöffnet. Im Falle von Datenverlust können Sie in diesem Tab nicht bearbeiten."
      },
      closeRoom: "Bearbeitungsrechte\x20wurden\x20entzogen,\x20weil\x20der\x20Zusammenarbeitsraum\x20geschlossen\x20wurde."
    },
    auth: {
      needGotoLoginAlert: "Ihre\x20Anmeldung\x20ist\x20abgelaufen.\x20Klicken\x20Sie\x20auf\x20OK,\x20um\x20sich\x20erneut\x20anzumelden,\x20oder\x20auf\x20Abbrechen,\x20um\x20Ihre\x20lokalen\x20Änderungen\x20zu\x20speichern."
    }
  }
};
export { e as default };
