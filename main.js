const title = document.querySelector(".title h1");

window.addEventListener('load', () => {
    setRandomTitle();
});

function setRandomTitle() {
    let pair = words[Math.floor(Math.random() * words.length)];
    title.textContent = "Не " + pair[0] + " убивает человека, а человек " + pair[1];
    title.style.opacity = 1;
}