const e = {
  "collaboration-client-ui": {
    collabClient: { tooltip: { reconnect: "Klik untuk Menyambung Kembali" } },
    collabStatus: {
      fetchMiss: "Menyinkronkan data server...",
      conflict: "Konflik\x20edit",
      notCollab: "File lokal",
      synced: "Tersinkron",
      syncing: "Menyinkronkan...",
      offline: "Offline, edit akan disimpan secara lokal",
    },
    snapshotLoading: {
      timeout:
        "Pemuatan\x20data\x20berhenti\x20di\x20{0}/{1}.\x20Muat\x20ulang\x20halaman\x20untuk\x20mencoba\x20lagi.",
      refresh: "Muat ulang halaman",
    },
    session: {
      "connection-failed": "Koneksi gagal, harap periksa jaringan Anda.",
      "will-retry": "Koneksi gagal, kami akan mencoba lagi sebentar lagi.",
      "room-full":
        "Ruang\x20kolaborasi\x20penuh.\x20Edit\x20Anda\x20akan\x20disimpan\x20secara\x20lokal.",
      "collaboration-timeout":
        "Server tidak merespons permintaan kolaborasi Anda. Edit Anda akan disimpan secara lokal.",
    },
    conflict: {
      title: "Konflik Kolaborasi",
      content:
        "Ada konflik antara salinan lokal Anda dan salinan di server. Harap simpan edit lokal Anda, karena akan hilang saat Anda memuat ulang halaman.",
    },
    permission: {
      title: "Kesalahan\x20Autentikasi",
      content:
        "Tindakan Anda bertentangan dengan izin server. Harap simpan edit lokal Anda di tempat lain karena akan dibuang setelah menyegarkan halaman.",
    },
    collaboration: {
      "offline-data-not-saved":
        "Anda memiliki edit offline yang belum disimpan ke server. Harap periksa jaringan Anda dan coba lagi.",
      "single-unit": {
        warning:
          "Anda membuka file yang sama di tab lain. Jika terjadi kehilangan data, Anda tidak dapat mengedit di tab ini.",
      },
      closeRoom: "Hak edit dicabut karena ruang kolaboratif ditutup.",
    },
    auth: {
      needGotoLoginAlert:
        "Login Anda telah kedaluwarsa, klik OK untuk login ulang, klik Batal untuk menyimpan edit lokal Anda.",
    },
    formula: {
      calculation: {
        started: "Perhitungan rumus dimulai.",
        waiting:
          "Antrian perhitungan rumus penuh, menunggu slot yang tersedia...",
        unable:
          "Tidak\x20dapat\x20melakukan\x20perhitungan\x20rumus\x20saat\x20ini.\x20Harap\x20coba\x20lagi\x20nanti.",
      },
    },
  },
};
module.exports = e;
