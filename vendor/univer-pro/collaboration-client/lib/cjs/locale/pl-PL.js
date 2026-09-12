const e = {
  "collaboration-client": {
    collabClient: { tooltip: { reconnect: "Kliknij, aby połączyć ponownie" } },
    collabStatus: {
      fetchMiss: "Synchronizowanie danych serwera...",
      conflict: "Konflikty\x20edycji",
      notCollab: "Plik lokalny",
      synced: "Zsynchronizowane",
      syncing: "Synchronizowanie...",
      offline: "Offline, zmiany zostaną zapisane lokalnie",
    },
    session: {
      "connection-failed": "Połączenie nieudane. Sprawdź swoją sieć.",
      "will-retry": "Połączenie nieudane. Spróbujemy ponownie za chwilę.",
      "room-full":
        "Dokument osiągnął limit współpracy. Twoje zmiany zostaną zapisane w pamięci podręcznej lokalnie.",
      "join-failed":
        "Nie udało się dołączyć do współpracy. Spróbuj ponownie później. Twoje zmiany zostaną zapisane w pamięci podręcznej lokalnie.",
      "room-not-exists":
        "Nie\x20udało\x20się\x20dołączyć\x20do\x20współpracy.\x20Twoje\x20zmiany\x20zostaną\x20zapisane\x20w\x20pamięci\x20podręcznej\x20lokalnie.",
      "room-permission-denied":
        "Brak uprawnień do współpracy. Twoje zmiany zostaną zapisane w pamięci podręcznej lokalnie.",
      "room-cnt-exceeds":
        "Liczba dokumentów współpracy przekracza limit. Twoje zmiany zostaną zapisane w pamięci podręcznej lokalnie.",
      "collaboration-timeout":
        "Serwer nie odpowiada na Twoje żądanie współpracy. Twoje zmiany zostaną zapisane lokalnie.",
    },
    conflict: {
      title: "Konflikt\x20współpracy",
      content:
        "Wystąpił\x20konflikt\x20między\x20Twoją\x20lokalną\x20kopią\x20a\x20kopią\x20na\x20serwerze.\x20Zapisz\x20lokalne\x20zmiany,\x20ponieważ\x20zostaną\x20utracone\x20po\x20odświeżeniu\x20strony.",
    },
    permission: {
      title: "Błąd uwierzytelniania",
      content:
        "Twoje działania są sprzeczne z uprawnieniami serwera. Zapisz lokalne zmiany w innym miejscu, ponieważ zostaną odrzucone po odświeżeniu strony.",
    },
    collaboration: {
      "single-unit": {
        warning:
          "Otworzyłeś ten sam plik w innej karcie. W przypadku utraty danych nie możesz edytować w tej karcie.",
      },
      closeRoom:
        "Uprawnienia\x20do\x20edycji\x20zostały\x20cofnięte,\x20ponieważ\x20pokój\x20współpracy\x20został\x20zamknięty.",
    },
    auth: {
      needGotoLoginAlert:
        "Twoje logowanie wygasło, kliknij OK, aby zalogować się ponownie, lub Anuluj, aby zapisać lokalne zmiany.",
    },
  },
};
module.exports = e;
