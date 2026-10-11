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

const contactForm = document.getElementById("contact-form");
const formResult = document.getElementById("form-result");

if (contactForm) {
    contactForm.onsubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(contactForm);

        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message")
        };

        try {
            const response = await fetch(
                "https://formsubmit.co/ajax/mjohnsonps4@gmail.com",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify(data)
                }
            );

            if (response.ok) {
                formResult.innerHTML = "Message sent successfully!";
                formResult.style.color = "#00d9ff";

                contactForm.reset();
            } else {
                formResult.innerHTML = "There was an error sending your message.";
                formResult.style.color = "red";
            }
        } catch (error) {
            formResult.innerHTML = "There was an error sending your message.";
            formResult.style.color = "red";
        }

        setTimeout(() => {
            formResult.innerHTML = "";
        }, 1000);
    };
}