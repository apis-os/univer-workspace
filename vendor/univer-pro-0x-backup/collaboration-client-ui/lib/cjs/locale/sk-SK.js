const e = {
  "collaboration-client-ui": {
    collabClient: {
      tooltip: { reconnect: "Kliknite\x20na\x20opätovné\x20pripojenie" },
    },
    collabStatus: {
      fetchMiss: "Synchronizujú\x20sa\x20údaje\x20zo\x20servera...",
      conflict: "Konflikty úprav",
      notCollab: "Lokálny\x20súbor",
      synced: "Synchronizované",
      syncing: "Synchronizuje\x20sa...",
      offline: "Offline, úpravy budú uložené lokálne",
    },
    snapshotLoading: {
      timeout:
        "Načítavanie údajov sa zastavilo na {0}/{1}. Obnovte stránku a skúste to znova.",
      refresh: "Obnoviť stránku",
    },
    session: {
      "connection-failed": "Pripojenie\x20zlyhalo,\x20skontrolujte\x20sieť.",
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
      title: "Chyba\x20overenia",
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
        "Oprávnenia\x20na\x20úpravy\x20boli\x20odobraté,\x20pretože\x20kolaboračná\x20miestnosť\x20bola\x20zatvorená.",
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
module.exports = e;
