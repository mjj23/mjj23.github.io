const navToggle = document.getElementById("nav-toggle");
const navList = document.querySelector("nav ul");

navToggle.onclick = () => {
    navList.classList.toggle("show");
};