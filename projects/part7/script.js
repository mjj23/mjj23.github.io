const navToggle = document.getElementById("nav-toggle");
const navList = document.querySelector("nav ul");

navToggle.onclick = () => {
    navList.classList.toggle("show");
};

const materiaImage = document.getElementById("materia-slideshow");
const previousButton = document.getElementById("previous-materia");
const nextButton = document.getElementById("next-materia");

const materiaImages = [
    "image/green-materia.png",
    "image/blue-materia.png",
    "image/red-materia.png",
    "image/yellow-materia.png",
    "image/purple-materia.png"
];

let currentMateria = 0;

if (materiaImage) {

    nextButton.onclick = () => {
        currentMateria++;

        if (currentMateria >= materiaImages.length) {
            currentMateria = 0;
        }

        materiaImage.src = materiaImages[currentMateria];
    };

    previousButton.onclick = () => {
        currentMateria--;

        if (currentMateria < 0) {
            currentMateria = materiaImages.length - 1;
        }

        materiaImage.src = materiaImages[currentMateria];
    };
}