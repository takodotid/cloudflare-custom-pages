if (
  window.location.href.includes("/overlay/leaderboard") ||
  window.location.href.includes("/overlay/mediashare")
) {
  document.getElementById("video").style.display = "flex";
}

setTimeout(() => {
  window.location.reload();
}, 15_000);
