const e = {
  "collaboration-client": {
    collabClient: { tooltip: { reconnect: "Kliknite na opätovné pripojenie" } },
    collabStatus: {
      fetchMiss: "Synchronizujú\x20sa\x20údaje\x20zo\x20servera...",
      conflict: "Konflikty úprav",
      notCollab: "Lokálny súbor",
      synced: "Synchronizované",
      syncing: "Synchronizuje sa...",
      offline: "Offline, úpravy budú uložené lokálne",
    },
    session: {
      "connection-failed": "Pripojenie zlyhalo. Skontrolujte sieť.",
      "will-retry": "Pripojenie zlyhalo. O chvíľu to skúsieme znova.",
      "room-full":
        "Dokument dosiahol limit spolupráce. Vaše úpravy budú dočasne uložené lokálne.",
      "join-failed":
        "Nepodarilo sa pripojiť k spolupráci. Skúste to neskôr. Vaše úpravy budú dočasne uložené lokálne.",
      "room-not-exists":
        "Nepodarilo sa pripojiť k spolupráci. Vaše úpravy budú dočasne uložené lokálne.",
      "room-permission-denied":
        "Nemáte oprávnenie na spoluprácu. Vaše úpravy budú dočasne uložené lokálne.",
      "room-cnt-exceeds":
        "Počet kolaboratívnych dokumentov prekročil limit. Vaše úpravy budú dočasne uložené lokálne.",
      "collaboration-timeout":
        "Server\x20neodpovedá\x20na\x20požiadavku\x20spolupráce.\x20Vaše\x20úpravy\x20budú\x20uložené\x20lokálne.",
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
  },
};
module.exports = e;
