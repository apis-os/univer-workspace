const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "Haga clic para reconectar" } },
    collabStatus: {
      fetchMiss: "Sincronizando datos del servidor...",
      conflict: "Conflictos\x20de\x20edición",
      notCollab: "Archivo local",
      synced: "Sincronizado",
      syncing: "Sincronizando...",
      offline: "Desconectado, los cambios se guardarán localmente",
    },
    snapshotLoading: {
      timeout:
        "La carga de datos se detuvo en {0}/{1}. Actualiza la página para volver a intentarlo.",
      refresh: "Actualizar página",
    },
    session: {
      "connection-failed": "Error de conexión, verifique su red.",
      "will-retry": "Error de conexión, intentaremos de nuevo en un momento.",
      "room-full":
        "La sala de colaboración está llena. Sus cambios se guardarán localmente.",
      "collaboration-timeout":
        "El servidor no responde a su solicitud de colaboración. Sus cambios se guardarán localmente.",
    },
    conflict: {
      title: "Conflicto de colaboración",
      content:
        "Hay un conflicto entre su copia local y la copia en el servidor. Guarde sus cambios locales, ya que se perderán cuando recargue la página.",
    },
    permission: {
      title: "Error de autenticación",
      content:
        "Sus acciones entran en conflicto con los permisos del servidor. Guarde sus cambios locales en otro lugar, ya que se descartarán después de actualizar la página.",
    },
    collaboration: {
      "offline-data-not-saved":
        "Tiene\x20cambios\x20sin\x20guardar\x20en\x20el\x20servidor.\x20Verifique\x20su\x20red\x20e\x20inténtelo\x20de\x20nuevo.",
      "single-unit": {
        warning:
          "Abrió el mismo archivo en otra pestaña. Para evitar pérdida de datos, no puede editar en esta pestaña.",
      },
      closeRoom:
        "Los privilegios de edición fueron revocados porque la sala de colaboración fue cerrada.",
    },
    auth: {
      needGotoLoginAlert:
        "Su\x20sesión\x20ha\x20expirado.\x20Haga\x20clic\x20en\x20Aceptar\x20para\x20volver\x20a\x20iniciar\x20sesión,\x20o\x20en\x20Cancelar\x20para\x20guardar\x20sus\x20cambios\x20locales.",
    },
    formula: {
      calculation: {
        started: "Cálculo\x20de\x20fórmulas\x20iniciado.",
        waiting:
          "La cola de cálculo de fórmulas está llena, esperando espacio disponible...",
        unable:
          "No\x20se\x20puede\x20realizar\x20el\x20cálculo\x20de\x20fórmulas\x20en\x20este\x20momento.\x20Inténtelo\x20de\x20nuevo\x20más\x20tarde.",
      },
    },
  },
};
module.exports = e;
