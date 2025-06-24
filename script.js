document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("orderForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nama = document.getElementById("nama").value;
      const email = document.getElementById("email").value;
      const pesan = document.getElementById("pesan").value;

      if (nama && email) {
        alert(`Terima kasih, ${nama}! Pesanan atau pendaftaran Anda telah dikirim.`);
        form.reset();
      } else {
        alert("Silakan lengkapi semua data yang wajib diisi.");
      }
    });
  }
});
