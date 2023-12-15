const withVideos = ["leaderboard", "mediashare"];

for (const overlayType of withVideos) {
    if (window.location.href.includes(`/overlay/${overlayType}`)) {
        document.getElementById("video").style.display = "flex";
    }
}

setTimeout(() => {
    window.location.reload();
}, 15 * 1000);
