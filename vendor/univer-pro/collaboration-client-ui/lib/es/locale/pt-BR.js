const e = {
  "collaboration-client-ui": {
    collabClient: {
      tooltip: {
        reconnect: "Clique para Reconectar"
      }
    },
    collabStatus: {
      fetchMiss: "Sincronizando dados do servidor...",
      conflict: "Conflitos de edição",
      notCollab: "Arquivo local",
      synced: "Sincronizado",
      syncing: "Sincronizando...",
      offline: "Offline, as edições serão salvas localmente"
    },
    snapshotLoading: {
      timeout: "O carregamento dos dados parou em {0}/{1}. Atualize a página para tentar novamente.",
      refresh: "Atualizar página"
    },
    session: {
      "connection-failed": "Falha na conexão, verifique sua rede.",
      "will-retry": "Falha na conexão, tentaremos novamente em breve.",
      "room-full": "A sala de colaboração está cheia. Suas edições serão salvas localmente.",
      "collaboration-timeout": "O servidor não está respondendo à sua solicitação de colaboração. Suas edições serão salvas localmente."
    },
    conflict: {
      title: "Conflito\x20de\x20Colaboração",
      content: "Há um conflito entre sua cópia local e a cópia no servidor. Salve suas edições locais, pois elas serão perdidas ao recarregar a página."
    },
    permission: {
      title: "Erro\x20de\x20autenticação",
      content: "Suas\x20ações\x20estão\x20em\x20conflito\x20com\x20as\x20permissões\x20do\x20servidor.\x20Salve\x20suas\x20edições\x20locais\x20em\x20outro\x20lugar,\x20pois\x20elas\x20serão\x20descartadas\x20após\x20atualizar\x20a\x20página."
    },
    collaboration: {
      "offline-data-not-saved": "Você tem edições offline que não foram salvas no servidor. Verifique sua rede e tente novamente.",
      "single-unit": {
        warning: "Você abriu o mesmo arquivo em outra aba. Em caso de perda de dados, você não poderá editar nesta aba."
      },
      closeRoom: "Os privilégios de edição foram revogados porque a sala de colaboração foi fechada."
    },
    auth: {
      needGotoLoginAlert: "Seu login expirou, clique em OK para fazer login novamente, clique em Cancelar para salvar suas edições locais."
    },
    formula: {
      calculation: {
        started: "Cálculo\x20de\x20fórmula\x20iniciado.",
        waiting: "A\x20fila\x20de\x20cálculo\x20de\x20fórmulas\x20está\x20cheia,\x20aguardando\x20slot\x20disponível...",
        unable: "Não foi possível realizar o cálculo da fórmula neste momento. Tente novamente mais tarde."
      }
    }
  }
};
export { e as default };
