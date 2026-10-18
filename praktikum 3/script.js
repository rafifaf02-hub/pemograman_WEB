// Menampilkan atau menghapus pesan kesalahan pada satu kolom
function setError(idInput, idError, pesan) {
  document.getElementById(idError).textContent = pesan;
  document.getElementById(idInput).classList.toggle("invalid", pesan !== "");
}

function validateForm() {
  const f = document.forms["formKontak"];
  const nama  = f["nama"].value.trim();
  const email = f["email"].value.trim();
  const hp    = f["hp"].value.trim();
  const pesan = f["pesan"].value.trim();
  const kosong = []; // daftar kolom yang belum diisi

  document.getElementById("hasil").textContent = "";

  if (nama === "") {
    setError("nama", "errNama", "Nama lengkap wajib diisi.");
    kosong.push("Nama lengkap");
  } else {
    setError("nama", "errNama", "");
  }

  if (email === "") {
    setError("email", "errEmail", "Email wajib diisi.");
    kosong.push("Email");
  } else {
    setError("email", "errEmail", "");
  }

  if (hp === "") {
    setError("hp", "errHp", "Nomor HP wajib diisi.");
    kosong.push("Nomor HP");
  } else {
    setError("hp", "errHp", "");
  }

  if (pesan === "") {
    setError("pesan", "errPesan", "Pesan wajib diisi.");
    kosong.push("Pesan");
  } else {
    setError("pesan", "errPesan", "");
  }

  // Ada kolom kosong: tampilkan alert, batalkan pengiriman form
  if (kosong.length > 0) {
    alert("Form belum lengkap!\nKolom yang belum diisi: " + kosong.join(", ") + ".");
    return false;
  }

  // Semua kolom terisi: tampilkan alert sukses, form dikirim
  alert("Terima kasih, " + nama + "! Pesan Anda berhasil dikirim.");
  return true;
}