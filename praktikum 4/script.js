

// 1. PESAN SELAMAT DATANG saat halaman dimuat ---------------
window.addEventListener("load", function () {
    const banner = document.createElement("div");
    banner.className = "welcome";
    banner.innerHTML =
        "<span>Selamat datang di Blog Cooffee!</span>" +
        '<button type="button" aria-label="Tutup">&times;</button>';
    document.body.prepend(banner);

    function tutup() {
        banner.classList.add("hilang");
        setTimeout(function () { banner.remove(); }, 500);
    }
    banner.querySelector("button").addEventListener("click", tutup);
    setTimeout(tutup, 5000);   // hilang otomatis setelah 5 detik
});

// 2. ANIMASI HOVER pada menu navigasi -----------------------
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("mouseenter", function () {
        link.classList.add("hover-aktif");      // membesar (transition di CSS)
    });
    link.addEventListener("mouseleave", function () {
        link.classList.remove("hover-aktif");
    });
});

// 3. VALIDASI FORM KONTAK -----------------------------------
const form = document.getElementById("formKontak");

// Aturan validasi tiap field: mengembalikan pesan error, atau "" jika valid
const aturan = {
    nama: function (v) {
        if (v === "") return "Nama tidak boleh kosong.";
        if (v.length < 3) return "Nama minimal 3 karakter.";
        return "";
    },
    email: function (v) {
        if (v === "") return "Email tidak boleh kosong.";
        const pola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pola.test(v)) return "Format email tidak valid.";
        return "";
    },
    pesan: function (v) {
        if (v === "") return "Pesan tidak boleh kosong.";
        if (v.length < 10) return "Pesan minimal 10 karakter.";
        return "";
    }
};

// Validasi satu field, tampilkan/hapus pesan error
function validasiField(id) {
    const input = document.getElementById(id);
    const err = document.getElementById("err" + id.charAt(0).toUpperCase() + id.slice(1));
    const pesanError = aturan[id](input.value.trim());

    err.textContent = pesanError;
    input.classList.toggle("invalid", pesanError !== "");
    return pesanError === "";
}

// Validasi langsung saat pengguna mengetik
Object.keys(aturan).forEach(function (id) {
    document.getElementById(id).addEventListener("input", function () {
        validasiField(id);
    });
});

// Validasi seluruh form saat tombol Kirim ditekan
form.addEventListener("submit", function (e) {
    e.preventDefault();

    let valid = true;
    Object.keys(aturan).forEach(function (id) {
        if (!validasiField(id)) valid = false;
    });

    if (valid) {
        alert("Pesan berhasil dikirim!");
        form.reset();
    }
});