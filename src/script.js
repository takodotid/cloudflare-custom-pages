if (window.location.pathname.startsWith("/overlay")) {
    // Only Show on Alert Overlay
    if (window.location.pathname === "/overlay/alert") {
        document.getElementById("indicator").style.display = "flex";
    }
} else {
    document.getElementById("default").style.display = "flex";
}

console.log("Interval started");

setInterval(async () => {
    const response = await fetch("/", {
        method: "GET",
        cache: "no-store",
    });

    // Only reload when the server is up
    if (!response.ok) {
        console.log("Server is down, not reloading");
    } else {
        window.location.reload();
    }
}, 15 * 1000);
