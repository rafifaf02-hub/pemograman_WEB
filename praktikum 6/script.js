// Validasi required (Nama)
function validateNama() {
var nama = document.getElementById("nama").value;
if (nama === "") {
alert("Nama harus diisi.");
return false;
}
return true;
}

// Validasi format email
function validateEmail() {
var email = document.getElementById("email").value;
var pola = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if (!email.match(pola)) {
alert("Email tidak valid.");
return false;
}
return true;
}

// Validasi umur (angka antara 1 sampai 100)
function validateUmur() {
var umur = document.getElementById("umur").value;
if (umur === "" || isNaN(umur)) {
alert("Umur harus diisi dengan angka.");
return false;
}
if (umur < 1 || umur > 100) {
alert("Umur harus antara 1 sampai 100.");
return false;
}
return true;
}

// Validasi saat form dikirim (onsubmit)
function validateForm() {
if (!validateNama()) {
return false;
}
if (!validateEmail()) {
return false;
}
if (!validateUmur()) {
return false;
}
alert("Form berhasil disubmit!");
return true;
}