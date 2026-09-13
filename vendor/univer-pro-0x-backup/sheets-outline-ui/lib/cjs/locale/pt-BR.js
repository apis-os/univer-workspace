const e = {
  "sheets-outline-ui": {
    cancel: "Cancelar",
    group: "Agrupar",
    ungroup: "Desagrupar",
    groupRows: "Agrupar linhas {0} - {1}",
    groupColumns: "Agrupar colunas {0} - {1}",
    ungroupRows: "Desagrupar linhas {0} - {1}",
    ungroupColumns: "Desagrupar colunas {0} - {1}",
    error: {
      permission:
        "Você\x20não\x20tem\x20permissão\x20de\x20visualização,\x20portanto,\x20as\x20operações\x20de\x20agrupamento\x20não\x20podem\x20ser\x20realizadas.",
      invalidRange:
        "Não\x20é\x20possível\x20criar\x20estrutura\x20de\x20tópicos\x20porque\x20o\x20intervalo\x20selecionado\x20é\x20inválido.",
      outOfBounds:
        "Não é possível criar estrutura de tópicos porque o intervalo selecionado está fora da planilha.",
      crossing:
        "Não\x20é\x20possível\x20atualizar\x20a\x20estrutura\x20de\x20tópicos\x20porque\x20o\x20resultado\x20criaria\x20grupos\x20sobrepostos.",
      maxDepth:
        "Não é possível criar estrutura de tópicos porque estruturas compatíveis com Excel suportam até 8 níveis.",
      moveSplitsOutline:
        "Não é possível mover linhas ou colunas porque isso dividiria uma estrutura de tópicos existente. Remova a estrutura de tópicos relacionada primeiro.",
      clearRangeNotContainOutline:
        "Não\x20é\x20possível\x20desagrupar\x20porque\x20o\x20intervalo\x20selecionado\x20não\x20contém\x20completamente\x20o\x20intervalo\x20do\x20grupo\x20da\x20estrutura\x20de\x20tópicos.",
      unknown:
        "Não é possível atualizar a estrutura de tópicos porque a operação é inválida.",
    },
  },
};
module.exports = e;
