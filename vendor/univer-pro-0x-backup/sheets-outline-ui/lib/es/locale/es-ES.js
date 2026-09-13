const e = {
  "sheets-outline-ui": {
    cancel: "Cancelar",
    group: "Agrupar",
    ungroup: "Desagrupar",
    groupRows: "Agrupar filas {0} - {1}",
    groupColumns: "Agrupar columnas {0} - {1}",
    ungroupRows: "Desagrupar filas {0} - {1}",
    ungroupColumns: "Desagrupar columnas {0} - {1}",
    error: {
      permission:
        "No tienes permiso de visualización, por lo que no se pueden realizar operaciones de agrupación.",
      invalidRange:
        "No\x20se\x20puede\x20crear\x20el\x20esquema\x20porque\x20el\x20intervalo\x20seleccionado\x20no\x20es\x20válido.",
      outOfBounds:
        "No se puede crear el esquema porque el intervalo seleccionado está fuera de la hoja.",
      crossing:
        "No se puede actualizar el esquema porque el resultado crearía grupos superpuestos.",
      maxDepth:
        "No se puede crear el esquema porque los esquemas compatibles con Excel admiten hasta 8 niveles.",
      moveSplitsOutline:
        "No se pueden mover filas o columnas porque se dividiría un esquema existente. Quite primero el esquema relacionado.",
      clearRangeNotContainOutline:
        "No se puede desagrupar porque el intervalo seleccionado no contiene completamente el intervalo del grupo de esquema.",
      unknown:
        "No se puede actualizar el esquema porque la operación no es válida.",
    },
  },
};
export { e as default };
