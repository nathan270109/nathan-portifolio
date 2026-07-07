const space = document.getElementById("space");

for (let i = 0; i < 160; i++) {
    const star = document.createElement("span");
    star.className = "star";

    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.setProperty("--size", `${Math.random() * 3 + 1}px`);
    star.style.setProperty("--opacity", Math.random());
    star.style.setProperty("--speed", `${Math.random() * 2 + 1}s`);
    star.style.setProperty("--depth", `${Math.random() * 40 - 20}px`);

    space.appendChild(star);
}

document.addEventListener("mousemove", (event) => {
    const x = event.clientX / window.innerWidth - 0.5;
    const y = event.clientY / window.innerHeight - 0.5;

    document.documentElement.style.setProperty("--mouse-x", x);
    document.documentElement.style.setProperty("--mouse-y", y);
});


const cursorEmoji = document.getElementById("cursor-emoji");

document.addEventListener("mousemove", (e) => {
    cursorEmoji.style.left = `${e.clientX}px`;
    cursorEmoji.style.top = `${e.clientY}px`;
});