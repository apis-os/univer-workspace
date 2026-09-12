const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "Kliknite na opätovné pripojenie" } },
    collabStatus: {
      fetchMiss: "Synchronizujú sa údaje zo servera...",
      conflict: "Konflikty\x20úprav",
      notCollab: "Lokálny súbor",
      synced: "Synchronizované",
      syncing: "Synchronizuje sa...",
      offline: "Offline, úpravy budú uložené lokálne",
    },
    snapshotLoading: {
      timeout:
        "Načítavanie\x20údajov\x20sa\x20zastavilo\x20na\x20{0}/{1}.\x20Obnovte\x20stránku\x20a\x20skúste\x20to\x20znova.",
      refresh: "Obnoviť stránku",
    },
    session: {
      "connection-failed": "Pripojenie zlyhalo, skontrolujte sieť.",
      "will-retry": "Pripojenie zlyhalo, o chvíľu to skúsime znova.",
      "room-full":
        "Kolaboračná miestnosť je plná. Vaše úpravy budú uložené lokálne.",
      "collaboration-timeout":
        "Server neodpovedá na požiadavku spolupráce. Vaše úpravy budú uložené lokálne.",
    },
    conflict: {
      title: "Konflikt spolupráce",
      content:
        "Medzi vašou lokálnou kópiou a kópiou na serveri je konflikt. Uložte si lokálne úpravy, inak sa po obnovení stránky stratia.",
    },
    permission: {
      title: "Chyba overenia",
      content:
        "Vaše akcie sú v rozpore s oprávneniami servera. Uložte si lokálne úpravy inde, pretože po obnovení stránky budú zahodené.",
    },
    collaboration: {
      "offline-data-not-saved":
        "Máte offline úpravy, ktoré neboli uložené na server. Skontrolujte sieť a skúste to znova.",
      "single-unit": {
        warning:
          "Súbor ste otvorili aj na inej karte. V prípade chýbajúcich údajov na tejto karte nebudete môcť upravovať.",
      },
      closeRoom:
        "Oprávnenia na úpravy boli odobraté, pretože kolaboračná miestnosť bola zatvorená.",
    },
    auth: {
      needGotoLoginAlert:
        "Platnosť prihlásenia vypršala, kliknite OK pre opätovné prihlásenie, kliknite Zrušiť pre uloženie lokálnych úprav.",
    },
    formula: {
      calculation: {
        started: "Výpočet vzorcov sa spustil.",
        waiting: "Fronta výpočtu vzorcov je plná, čaká sa na voľné miesto...",
        unable:
          "Momentálne nie je možné vykonať výpočet vzorcov. Skúste to neskôr.",
      },
    },
  },
};
export { e as default };
