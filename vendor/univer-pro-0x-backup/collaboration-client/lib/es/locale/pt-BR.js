const e = {
  "collaboration-client": {
    collabClient: { tooltip: { reconnect: "Clique para Reconectar" } },
    collabStatus: {
      fetchMiss: "Sincronizando\x20dados\x20do\x20servidor...",
      conflict: "Conflitos de edição",
      notCollab: "Arquivo local",
      synced: "Sincronizado",
      syncing: "Sincronizando...",
      offline: "Offline, as edições serão salvas localmente",
    },
    session: {
      "connection-failed": "Falha na conexão. Verifique sua rede.",
      "will-retry": "Falha na conexão. Tentaremos novamente em breve.",
      "room-full":
        "O documento atingiu o limite de colaboração. Suas edições serão salvas localmente.",
      "join-failed":
        "Falha\x20ao\x20entrar\x20na\x20colaboração.\x20Tente\x20novamente\x20mais\x20tarde.\x20Suas\x20edições\x20serão\x20salvas\x20localmente.",
      "room-not-exists":
        "Falha\x20ao\x20entrar\x20na\x20colaboração.\x20Suas\x20edições\x20serão\x20salvas\x20localmente.",
      "room-permission-denied":
        "Sem\x20permissão\x20para\x20colaborar.\x20Suas\x20edições\x20serão\x20salvas\x20localmente.",
      "room-cnt-exceeds":
        "O número de documentos colaborativos excede o limite. Suas edições serão salvas localmente.",
      "collaboration-timeout":
        "O servidor não está respondendo à sua solicitação de colaboração. Suas edições serão salvas localmente.",
    },
    conflict: {
      title: "Conflito de Colaboração",
      content:
        "Há um conflito entre sua cópia local e a cópia no servidor. Salve suas edições locais, pois elas serão perdidas ao recarregar a página.",
    },
    permission: {
      title: "Erro\x20de\x20Autenticação",
      content:
        "Suas ações estão em conflito com as permissões do servidor. Salve suas edições locais em outro lugar, pois elas serão descartadas após atualizar a página.",
    },
    collaboration: {
      "single-unit": {
        warning:
          "Você abriu o mesmo arquivo em outra aba. Em caso de perda de dados, você não poderá editar nesta aba.",
      },
      closeRoom:
        "Os privilégios de edição foram revogados porque a sala de colaboração foi fechada.",
    },
    auth: {
      needGotoLoginAlert:
        "Seu login expirou, clique em OK para fazer login novamente, clique em Cancelar para salvar suas edições locais.",
    },
  },
};
export { e as default };
