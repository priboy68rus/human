const title = document.querySelector(".title h1");
const sign = document.querySelector(".title h2");

window.addEventListener('load', () => {
    setRandomTitle();
});

function setRandomTitle() {
    let pair = words[Math.floor(Math.random() * words.length)];
    title.textContent = "Не " + pair[0] + " убивает человека, а человек " + pair[1] + ".";
    sign.textContent = "© В.И.Сталин";
    title.style.opacity = 1;
}