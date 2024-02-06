// If it's overlay
if (window.location.pathname.startsWith("/overlay")) {
    // Only Show on Alert Overlay
    if (window.location.pathname === "/overlay/alert") {
        document.getElementById("overlay").style.display = "flex";
    }
}

// Not Overlay
else {
    document.getElementById("default").style.display = "flex";
}

setTimeout(() => {
    window.location.reload();
}, 15 * 1000);
