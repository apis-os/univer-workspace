const e = {
  "collaboration-client": {
    collabClient: { tooltip: { reconnect: "Clique para Reconectar" } },
    collabStatus: {
      fetchMiss: "Sincronizando dados do servidor...",
      conflict: "Conflitos de edição",
      notCollab: "Arquivo\x20local",
      synced: "Sincronizado",
      syncing: "Sincronizando...",
      offline: "Offline, as edições serão salvas localmente",
    },
    session: {
      "connection-failed":
        "Falha\x20na\x20conexão.\x20Verifique\x20sua\x20rede.",
      "will-retry": "Falha na conexão. Tentaremos novamente em breve.",
      "room-full":
        "O documento atingiu o limite de colaboração. Suas edições serão salvas localmente.",
      "join-failed":
        "Falha ao entrar na colaboração. Tente novamente mais tarde. Suas edições serão salvas localmente.",
      "room-not-exists":
        "Falha\x20ao\x20entrar\x20na\x20colaboração.\x20Suas\x20edições\x20serão\x20salvas\x20localmente.",
      "room-permission-denied":
        "Sem permissão para colaborar. Suas edições serão salvas localmente.",
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
      title: "Erro de Autenticação",
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
        "Seu\x20login\x20expirou,\x20clique\x20em\x20OK\x20para\x20fazer\x20login\x20novamente,\x20clique\x20em\x20Cancelar\x20para\x20salvar\x20suas\x20edições\x20locais.",
    },
  },
};
module.exports = e;
