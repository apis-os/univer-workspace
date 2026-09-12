const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "Clique para Reconectar" } },
    collabStatus: {
      fetchMiss: "Sincronizando dados do servidor...",
      conflict: "Conflitos de edição",
      notCollab: "Arquivo\x20local",
      synced: "Sincronizado",
      syncing: "Sincronizando...",
      offline: "Offline, as edições serão salvas localmente",
    },
    snapshotLoading: {
      timeout:
        "O carregamento dos dados parou em {0}/{1}. Atualize a página para tentar novamente.",
      refresh: "Atualizar página",
    },
    session: {
      "connection-failed": "Falha na conexão, verifique sua rede.",
      "will-retry": "Falha na conexão, tentaremos novamente em breve.",
      "room-full":
        "A sala de colaboração está cheia. Suas edições serão salvas localmente.",
      "collaboration-timeout":
        "O servidor não está respondendo à sua solicitação de colaboração. Suas edições serão salvas localmente.",
    },
    conflict: {
      title: "Conflito de Colaboração",
      content:
        "Há\x20um\x20conflito\x20entre\x20sua\x20cópia\x20local\x20e\x20a\x20cópia\x20no\x20servidor.\x20Salve\x20suas\x20edições\x20locais,\x20pois\x20elas\x20serão\x20perdidas\x20ao\x20recarregar\x20a\x20página.",
    },
    permission: {
      title: "Erro de autenticação",
      content:
        "Suas ações estão em conflito com as permissões do servidor. Salve suas edições locais em outro lugar, pois elas serão descartadas após atualizar a página.",
    },
    collaboration: {
      "offline-data-not-saved":
        "Você\x20tem\x20edições\x20offline\x20que\x20não\x20foram\x20salvas\x20no\x20servidor.\x20Verifique\x20sua\x20rede\x20e\x20tente\x20novamente.",
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
    formula: {
      calculation: {
        started: "Cálculo\x20de\x20fórmula\x20iniciado.",
        waiting:
          "A fila de cálculo de fórmulas está cheia, aguardando slot disponível...",
        unable:
          "Não foi possível realizar o cálculo da fórmula neste momento. Tente novamente mais tarde.",
      },
    },
  },
};
module.exports = e;
