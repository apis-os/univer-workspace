const e = {
  "collaboration-client": {
    collabClient: { tooltip: { reconnect: "Feu clic per reconnectar" } },
    collabStatus: {
      fetchMiss: "Sincronitzant dades del servidor...",
      conflict: "Conflictes d'edició",
      notCollab: "Fitxer local",
      synced: "Sincronitzat",
      syncing: "Sincronitzant...",
      offline:
        "Fora\x20de\x20línia,\x20els\x20canvis\x20es\x20desaran\x20localment",
    },
    session: {
      "connection-failed":
        "Error\x20de\x20connexió.\x20Comproveu\x20la\x20vostra\x20xarxa.",
      "will-retry":
        "Error de connexió. Ho tornarem a intentar d'aquí un moment.",
      "room-full":
        "Aquest document ha arribat al límit de col·laboració. Els vostres canvis es desaran localment.",
      "join-failed":
        "No s'ha pogut unir a la col·laboració. Torneu-ho a provar més tard. Els vostres canvis es desaran localment.",
      "room-not-exists":
        "No\x20s\x27ha\x20pogut\x20unir\x20a\x20la\x20col·laboració.\x20Els\x20vostres\x20canvis\x20es\x20desaran\x20localment.",
      "room-permission-denied":
        "No teniu permís de col·laboració. Els vostres canvis es desaran localment.",
      "room-cnt-exceeds":
        "El nombre de documents col·laboratius supera el límit. Els vostres canvis es desaran localment.",
      "collaboration-timeout":
        "El servidor no respon a la vostra sol·licitud de col·laboració. Els vostres canvis es desaran localment.",
    },
    conflict: {
      title: "Conflicte de col·laboració",
      content:
        "Hi ha un conflicte entre la vostra còpia local i la còpia del servidor. Deseu els vostres canvis locals, perquè es perdran quan actualitzeu la pàgina.",
    },
    permission: {
      title: "Error d'autenticació",
      content:
        "Les vostres accions entren en conflicte amb els permisos del servidor. Deseu els vostres canvis locals en un altre lloc, perquè es descartaran després d'actualitzar la pàgina.",
    },
    collaboration: {
      "single-unit": {
        warning:
          "Heu obert el mateix fitxer en una altra pestanya. Per evitar la pèrdua de dades, no podeu editar en aquesta pestanya.",
      },
      closeRoom:
        "Els privilegis d'edició han estat revocats perquè la sala de col·laboració s'ha tancat.",
    },
    auth: {
      needGotoLoginAlert:
        "La\x20vostra\x20sessió\x20ha\x20caducat.\x20Feu\x20clic\x20a\x20D\x27acord\x20per\x20tornar\x20a\x20iniciar\x20sessió,\x20o\x20a\x20Cancel·la\x20per\x20desar\x20els\x20vostres\x20canvis\x20locals.",
    },
  },
};
module.exports = e;
