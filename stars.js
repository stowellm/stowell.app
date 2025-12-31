document.addEventListener("DOMContentLoaded", () => {
    // Adjust star count based on viewport width
    const STAR_COUNT = window.innerWidth < 500 ? 20 : 40;

    const container = document.createElement("div");
    container.className = "stars";
    document.body.appendChild(container);

    for (let i = 0; i < STAR_COUNT; i++) {
        const star = document.createElement("div");
        star.className = "star";

        // Full-screen positioning
        star.style.left = Math.random() * 100 + "vw";
        star.style.top = Math.random() * 100 + "vh";

        // Twinkle and horizontal drift timing
        star.style.animationDelay =
            Math.random() * 5 + "s, " + -Math.random() * 30 + "s";
        star.style.animationDuration =
            3 + Math.random() * 4 + "s, " + (20 + Math.random() * 20) + "s";

        container.appendChild(star);
    }
});
