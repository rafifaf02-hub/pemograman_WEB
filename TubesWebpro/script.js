document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    const nama = document.getElementById("nama").value.trim();
    const telepon = document.getElementById("telepon").value.trim();

    if (nama === "" || telepon === "") {
        alert("Mohon isi nama dan nomor telepon terlebih dahulu!");
        return;
    }

    alert("Terima kasih, " + nama + "! Pesanan kamu berhasil dikirim.");
    this.reset();
});