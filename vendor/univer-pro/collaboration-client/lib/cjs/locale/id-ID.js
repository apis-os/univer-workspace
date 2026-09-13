const e = {
  "collaboration-client": {
    collabClient: {
      tooltip: {
        reconnect: "Klik\x20untuk\x20Menyambung\x20Kembali"
      }
    },
    collabStatus: {
      fetchMiss: "Menyinkronkan data server...",
      conflict: "Konflik\x20edit",
      notCollab: "File lokal",
      synced: "Tersinkron",
      syncing: "Menyinkronkan...",
      offline: "Offline, edit akan disimpan secara lokal"
    },
    session: {
      "connection-failed": "Koneksi gagal. Harap periksa jaringan Anda.",
      "will-retry": "Koneksi\x20gagal.\x20Kami\x20akan\x20mencoba\x20lagi\x20sebentar\x20lagi.",
      "room-full": "Dokumen telah mencapai batas kolaborasinya. Edit Anda akan disimpan secara lokal.",
      "join-failed": "Gagal bergabung dalam kolaborasi. Harap coba lagi nanti. Edit Anda akan disimpan secara lokal.",
      "room-not-exists": "Gagal bergabung dalam kolaborasi. Edit Anda akan disimpan secara lokal.",
      "room-permission-denied": "Tidak ada izin kolaborasi. Edit Anda akan disimpan secara lokal.",
      "room-cnt-exceeds": "Jumlah dokumen kolaboratif melebihi batas. Edit Anda akan disimpan secara lokal.",
      "collaboration-timeout": "Server tidak merespons permintaan kolaborasi Anda. Edit Anda akan disimpan secara lokal."
    },
    conflict: {
      title: "Konflik Kolaborasi",
      content: "Ada konflik antara salinan lokal Anda dan salinan di server. Harap simpan edit lokal Anda, karena akan hilang saat Anda memuat ulang halaman."
    },
    permission: {
      title: "Kesalahan Autentikasi",
      content: "Tindakan\x20Anda\x20bertentangan\x20dengan\x20izin\x20server.\x20Harap\x20simpan\x20edit\x20lokal\x20Anda\x20di\x20tempat\x20lain\x20karena\x20akan\x20dibuang\x20setelah\x20menyegarkan\x20halaman."
    },
    collaboration: {
      "single-unit": {
        warning: "Anda membuka file yang sama di tab lain. Jika terjadi kehilangan data, Anda tidak dapat mengedit di tab ini."
      },
      closeRoom: "Hak edit dicabut karena ruang kolaboratif ditutup."
    },
    auth: {
      needGotoLoginAlert: "Login Anda telah kedaluwarsa, klik OK untuk login ulang, klik Batal untuk menyimpan edit lokal Anda."
    }
  }
};
module.exports = e;
