let noClicks = 0;

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if (yesBtn && noBtn) {

   function moveNoButton() {
    const btn = noBtn;

    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const maxX = viewportWidth - btnWidth - 20;
    const maxY = viewportHeight - btnHeight - 20;

    const minX = 20;
    const minY = 20;

    const randomX = Math.random() * (maxX - minX) + minX;
    const randomY = Math.random() * (maxY - minY) + minY;

    btn.style.position = "fixed"; 
    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
}

    noBtn.addEventListener("mouseover", moveNoButton);

    noBtn.addEventListener("click", () => {
        noClicks++;

        let scale = 1 + (noClicks * 0.4);
        yesBtn.style.transform = `scale(${scale})`;

        if (noClicks === 1) noBtn.innerText = "Are you sure? 🥺";
        else if (noClicks === 2) noBtn.innerText = "Really sure? 😭";
        else if (noClicks === 3) noBtn.innerText = "Don’t do this 💔";
        else if (noClicks === 4) noBtn.innerText = "Last chance 😢";

        moveNoButton();
    });

    yesBtn.addEventListener("click", () => {
        window.location.href = "yes.html";
    });
}