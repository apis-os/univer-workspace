const e = {
  "collaboration-client": {
    collabClient: {
      tooltip: {
        reconnect: "Kliknij, aby połączyć ponownie"
      }
    },
    collabStatus: {
      fetchMiss: "Synchronizowanie danych serwera...",
      conflict: "Konflikty edycji",
      notCollab: "Plik lokalny",
      synced: "Zsynchronizowane",
      syncing: "Synchronizowanie...",
      offline: "Offline, zmiany zostaną zapisane lokalnie"
    },
    session: {
      "connection-failed": "Połączenie nieudane. Sprawdź swoją sieć.",
      "will-retry": "Połączenie nieudane. Spróbujemy ponownie za chwilę.",
      "room-full": "Dokument osiągnął limit współpracy. Twoje zmiany zostaną zapisane w pamięci podręcznej lokalnie.",
      "join-failed": "Nie udało się dołączyć do współpracy. Spróbuj ponownie później. Twoje zmiany zostaną zapisane w pamięci podręcznej lokalnie.",
      "room-not-exists": "Nie\x20udało\x20się\x20dołączyć\x20do\x20współpracy.\x20Twoje\x20zmiany\x20zostaną\x20zapisane\x20w\x20pamięci\x20podręcznej\x20lokalnie.",
      "room-permission-denied": "Brak uprawnień do współpracy. Twoje zmiany zostaną zapisane w pamięci podręcznej lokalnie.",
      "room-cnt-exceeds": "Liczba dokumentów współpracy przekracza limit. Twoje zmiany zostaną zapisane w pamięci podręcznej lokalnie.",
      "collaboration-timeout": "Serwer nie odpowiada na Twoje żądanie współpracy. Twoje zmiany zostaną zapisane lokalnie."
    },
    conflict: {
      title: "Konflikt\x20współpracy",
      content: "Wystąpił konflikt między Twoją lokalną kopią a kopią na serwerze. Zapisz lokalne zmiany, ponieważ zostaną utracone po odświeżeniu strony."
    },
    permission: {
      title: "Błąd uwierzytelniania",
      content: "Twoje\x20działania\x20są\x20sprzeczne\x20z\x20uprawnieniami\x20serwera.\x20Zapisz\x20lokalne\x20zmiany\x20w\x20innym\x20miejscu,\x20ponieważ\x20zostaną\x20odrzucone\x20po\x20odświeżeniu\x20strony."
    },
    collaboration: {
      "single-unit": {
        warning: "Otworzyłeś\x20ten\x20sam\x20plik\x20w\x20innej\x20karcie.\x20W\x20przypadku\x20utraty\x20danych\x20nie\x20możesz\x20edytować\x20w\x20tej\x20karcie."
      },
      closeRoom: "Uprawnienia do edycji zostały cofnięte, ponieważ pokój współpracy został zamknięty."
    },
    auth: {
      needGotoLoginAlert: "Twoje\x20logowanie\x20wygasło,\x20kliknij\x20OK,\x20aby\x20zalogować\x20się\x20ponownie,\x20lub\x20Anuluj,\x20aby\x20zapisać\x20lokalne\x20zmiany."
    }
  }
};
export { e as default };
