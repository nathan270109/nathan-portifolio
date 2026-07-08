document.addEventListener("DOMContentLoaded", () => {
    const space = document.getElementById("space");
    const cursorEmoji = document.getElementById("cursor-emoji");

    if (space) {
        criarEstrelas(space, 160);
    }

    document.addEventListener("mousemove", (event) => {
        atualizarParallax(event);
        moverCursorEmoji(event, cursorEmoji);
    });
});

function criarEstrelas(container, quantidade) {
    for (let i = 0; i < quantidade; i++) {
        const star = document.createElement("span");

        star.className = "star";
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.setProperty("--size", `${Math.random() * 3 + 1}px`);
        star.style.setProperty("--opacity", Math.random().toFixed(2));
        star.style.setProperty("--speed", `${Math.random() * 2 + 1}s`);
        star.style.setProperty("--depth", `${Math.random() * 40 - 20}px`);

        container.appendChild(star);
    }
}

function atualizarParallax(event) {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.documentElement.style.setProperty("--mouse-x", x.toFixed(3));
    document.documentElement.style.setProperty("--mouse-y", y.toFixed(3));
}

function moverCursorEmoji(event, cursorEmoji) {
    if (!cursorEmoji) return;

    cursorEmoji.style.left = `${event.clientX}px`;
    cursorEmoji.style.top = `${event.clientY}px`;
}