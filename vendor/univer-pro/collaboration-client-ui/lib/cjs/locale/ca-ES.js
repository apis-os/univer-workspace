const e = {
  "collaboration-client-ui": {
    collabClient: {
      tooltip: { reconnect: "Feu\x20clic\x20per\x20reconnectar" },
    },
    collabStatus: {
      fetchMiss: "Sincronitzant dades del servidor...",
      conflict: "Conflictes d'edició",
      notCollab: "Fitxer\x20local",
      synced: "Sincronitzat",
      syncing: "Sincronitzant...",
      offline: "Fora de línia, els canvis es desaran localment",
    },
    snapshotLoading: {
      timeout:
        "La càrrega de dades s'ha aturat a {0}/{1}. Actualitzeu la pàgina per tornar-ho a provar.",
      refresh: "Actualitza la pàgina",
    },
    session: {
      "connection-failed": "Error de connexió, comproveu la vostra xarxa.",
      "will-retry":
        "Error de connexió, ho tornarem a intentar d'aquí un moment.",
      "room-full":
        "La sala de col·laboració està plena. Els vostres canvis es desaran localment.",
      "collaboration-timeout":
        "El servidor no respon a la vostra sol·licitud de col·laboració. Els vostres canvis es desaran localment.",
    },
    conflict: {
      title: "Conflicte\x20de\x20col·laboració",
      content:
        "Hi ha un conflicte entre la vostra còpia local i la còpia del servidor. Deseu els vostres canvis locals, perquè es perdran quan actualitzeu la pàgina.",
    },
    permission: {
      title: "Error d'autenticació",
      content:
        "Les\x20vostres\x20accions\x20entren\x20en\x20conflicte\x20amb\x20els\x20permisos\x20del\x20servidor.\x20Deseu\x20els\x20vostres\x20canvis\x20locals\x20en\x20un\x20altre\x20lloc,\x20perquè\x20es\x20descartaran\x20després\x20d\x27actualitzar\x20la\x20pàgina.",
    },
    collaboration: {
      "offline-data-not-saved":
        "Teniu canvis fora de línia que no s'han desat al servidor. Comproveu la vostra xarxa i torneu-ho a intentar.",
      "single-unit": {
        warning:
          "Heu\x20obert\x20el\x20mateix\x20fitxer\x20en\x20una\x20altra\x20pestanya.\x20Per\x20evitar\x20la\x20pèrdua\x20de\x20dades,\x20no\x20podeu\x20editar\x20en\x20aquesta\x20pestanya.",
      },
      closeRoom:
        "Els privilegis d'edició han estat revocats perquè la sala de col·laboració s'ha tancat.",
    },
    auth: {
      needGotoLoginAlert:
        "La vostra sessió ha caducat. Feu clic a D'acord per tornar a iniciar sessió, o a Cancel·la per desar els vostres canvis locals.",
    },
    formula: {
      calculation: {
        started: "El càlcul de fórmules ha començat.",
        waiting:
          "La cua de càlcul de fórmules està plena, esperant espai disponible...",
        unable:
          "No es pot realitzar el càlcul de fórmules en aquest moment. Torneu-ho a provar més tard.",
      },
    },
  },
};
module.exports = e;
