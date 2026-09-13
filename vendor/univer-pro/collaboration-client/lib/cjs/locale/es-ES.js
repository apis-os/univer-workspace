const e = {
  "collaboration-client": {
    collabClient: { tooltip: { reconnect: "Haga clic para reconectar" } },
    collabStatus: {
      fetchMiss: "Sincronizando datos del servidor...",
      conflict: "Conflictos de edición",
      notCollab: "Archivo local",
      synced: "Sincronizado",
      syncing: "Sincronizando...",
      offline: "Desconectado, los cambios se guardarán localmente",
    },
    session: {
      "connection-failed": "Error de conexión. Verifique su red.",
      "will-retry": "Error de conexión. Intentaremos de nuevo en un momento.",
      "room-full":
        "El documento ha alcanzado su límite de colaboración. Sus cambios se guardarán localmente.",
      "join-failed":
        "No se pudo unir a la colaboración. Inténtelo de nuevo más tarde. Sus cambios se guardarán localmente.",
      "room-not-exists":
        "No se pudo unir a la colaboración. Sus cambios se guardarán localmente.",
      "room-permission-denied":
        "Sin permiso de colaboración. Sus cambios se guardarán localmente.",
      "room-cnt-exceeds":
        "El número de documentos colaborativos excede el límite. Sus cambios se guardarán localmente.",
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
      "single-unit": {
        warning:
          "Abrió el mismo archivo en otra pestaña. Para evitar pérdida de datos, no puede editar en esta pestaña.",
      },
      closeRoom:
        "Los\x20privilegios\x20de\x20edición\x20fueron\x20revocados\x20porque\x20la\x20sala\x20de\x20colaboración\x20fue\x20cerrada.",
    },
    auth: {
      needGotoLoginAlert:
        "Su sesión ha expirado. Haga clic en Aceptar para volver a iniciar sesión, o en Cancelar para guardar sus cambios locales.",
    },
  },
};
module.exports = e;
