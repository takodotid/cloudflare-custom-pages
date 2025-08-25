const isOverlay = window.location.pathname.startsWith("/overlay");

if (isOverlay) {
    // Only Show on Alert Overlay
    if (window.location.pathname === "/overlay/alert") {
        document.getElementById("indicator").style.display = "flex";
    }
} else {
    document.getElementById("default").style.display = "flex";

    // Crisp Chat Integration
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "34e18600-fa3d-4b3f-81de-7ea9eef29486";
    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = 1;
    document.getElementsByTagName("head")[0].appendChild(script);
}

if (document.body.dataset.autoreload === "false" && !isOverlay) {
    console.log("Auto-reload is disabled");
} else {
    console.log("Auto-reload started");

    setInterval(async () => {
        const response = await fetch(window.location.href, {
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
}
