const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "Kliknij, aby połączyć ponownie" } },
    collabStatus: {
      fetchMiss: "Synchronizowanie danych serwera...",
      conflict: "Konflikty edycji",
      notCollab: "Plik lokalny",
      synced: "Zsynchronizowane",
      syncing: "Synchronizowanie...",
      offline: "Offline, zmiany zostaną zapisane lokalnie",
    },
    snapshotLoading: {
      timeout:
        "Ładowanie danych zatrzymało się na {0}/{1}. Odśwież stronę, aby spróbować ponownie.",
      refresh: "Odśwież stronę",
    },
    session: {
      "connection-failed":
        "Połączenie\x20nieudane,\x20sprawdź\x20swoje\x20połączenie\x20sieciowe.",
      "will-retry": "Połączenie nieudane, ponowimy próbę za chwilę.",
      "room-full":
        "Pokój współpracy jest pełny. Twoje zmiany zostaną zapisane lokalnie.",
      "collaboration-timeout":
        "Serwer nie odpowiada na żądanie współpracy. Twoje zmiany zostaną zapisane lokalnie.",
    },
    conflict: {
      title: "Konflikt współpracy",
      content:
        "Wystąpił konflikt między lokalną kopią a kopią na serwerze. Zapisz swoje lokalne zmiany, ponieważ zostaną utracone po przeładowaniu strony.",
    },
    permission: {
      title: "Błąd uwierzytelniania",
      content:
        "Twoje działania są sprzeczne z uprawnieniami serwera. Zapisz swoje lokalne zmiany w innym miejscu, ponieważ zostaną odrzucone po odświeżeniu strony.",
    },
    collaboration: {
      "offline-data-not-saved":
        "Masz zmiany offline, które nie zostały zapisane na serwerze. Sprawdź swoje połączenie sieciowe i spróbuj ponownie.",
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
    formula: {
      calculation: {
        started: "Obliczanie formuły rozpoczęte.",
        waiting:
          "Kolejka obliczania formuł jest pełna, oczekiwanie na wolne miejsce...",
        unable:
          "Nie\x20można\x20teraz\x20wykonać\x20obliczania\x20formuły.\x20Spróbuj\x20ponownie\x20później.",
      },
    },
  },
};
module.exports = e;
