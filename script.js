document.addEventListener("DOMContentLoaded", function () {
  const music = document.getElementById("bgMusic");

  // Di beberapa browser, user perlu klik dulu sebelum audio bisa autoplay
  document.body.addEventListener("click", () => {
    if (music.paused) {
      music.play().catch((e) => {
        console.log("Autoplay ditolak:", e);
      });
    }
  });
});