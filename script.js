const images = [
    "images/photo1.jpg",
    "images/photo2.JPG",
    "images/photo3.jpeg",
    "images/photo4.jpg",
    "images/photo5.jpg",
    "images/photo6.jpeg",
    "images/photo7.jpeg",
    "images/photo8.jpg",
    "images/photo9.jpg",
    "images/photo10.jpg",
    "images/photo11.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

function showSlide() {
    slide.src = images[index];
}

function nextSlide() {
    index = (index + 1) % images.length;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showSlide();
}

setInterval(nextSlide, 3000);

const birthday = new Date("February 26, 2026 00:00:00").getTime();

const lockScreen = document.getElementById("lockScreen");
const mainContent = document.getElementById("mainContent");
const countdown = document.getElementById("countdown");

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthday - now;

    if (distance <= 0) {
        lockScreen.style.display = "none";
        mainContent.style.display = "block";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    countdown.innerHTML =
        days + "d " +
        hours + "h " +
        minutes + "m " +
        seconds + "s";
}

setInterval(updateCountdown, 1000);
updateCountdown();


function checkPassword() {
    document.getElementById("passwordBox").style.display = "flex";
}

function verifyPassword() {
    const password = document.getElementById("passwordInput").value;
    const correctPassword = "memsahab";
    const errorMsg = document.getElementById("errorMsg");

    if (password === correctPassword) {
        window.location.href = "choice.html";
    } else {
        errorMsg.innerText = "Wrong password 😢 Try again my love!";
    }
}

function closePassword() {
    document.getElementById("passwordBox").style.display = "none";
}
