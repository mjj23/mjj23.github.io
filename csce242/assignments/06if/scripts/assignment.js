const exercise1Link = document.getElementById("exercise1-link");
const exercise2Link = document.getElementById("exercise2-link");

const exercise1 = document.getElementById("exercise1");
const exercise2 = document.getElementById("exercise2");

const menuToggle = document.getElementById("menu-toggle");
const exerciseMenu = document.getElementById("exercise-menu");

const missedDays = document.getElementById("missed-days");
const gradeLoss = document.getElementById("grade-loss");
const attendanceMessage = document.getElementById("attendance-message");

const daysLeft = document.getElementById("days-left");
const semesterMessage = document.getElementById("semester-message");


const showExercise1 = (event) => {
    event.preventDefault();

    exercise1.classList.remove("hidden");
    exercise2.classList.add("hidden");
};


const showExercise2 = (event) => {
    event.preventDefault();

    exercise1.classList.add("hidden");
    exercise2.classList.remove("hidden");

    showSemesterCounter();
};


const calculateLoss = () => {
    const days = Number(missedDays.value);
    const loss = (days / 25) * 7;

    gradeLoss.innerHTML = "You will lose " + loss.toFixed(1) +
        "% for skipping " + days + " days.";

    if (days === 0) {
        attendanceMessage.innerHTML =
            "Great job! You are not planning to miss class.";
    } else if (days <= 2) {
        attendanceMessage.innerHTML =
            "A few missed classes should have a small impact.";
    } else if (days <= 5) {
        attendanceMessage.innerHTML =
            "Be careful. Your missed classes are starting to add up.";
    } else if (days <= 10) {
        attendanceMessage.innerHTML =
            "You are missing valuable learning opportunities.";
    } else {
        attendanceMessage.innerHTML =
            "Missing this many classes could seriously hurt your grade.";
    }
};


const showSemesterCounter = () => {
    const today = new Date();
    const endDate = new Date(today.getFullYear(), 11, 4);

    const difference = endDate - today;
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    daysLeft.innerHTML =
        "You have " + days + " days left in the semester.";

    if (days > 60) {
        semesterMessage.innerHTML =
            "Not time to start counting down yet.";
    } else if (days > 30) {
        semesterMessage.innerHTML =
            "The semester is moving along.";
    } else if (days > 7) {
        semesterMessage.innerHTML =
            "The end of the semester is getting close.";
    } else if (days >= 0) {
        semesterMessage.innerHTML =
            "Almost there! Finish strong.";
    } else {
        semesterMessage.innerHTML =
            "The semester is over.";
    }
};


const toggleMenu = () => {
    exerciseMenu.classList.toggle("show");

    if (exerciseMenu.classList.contains("show")) {
        menuToggle.innerHTML = "▲";
    } else {
        menuToggle.innerHTML = "▼";
    }
};


exercise1Link.onclick = showExercise1;
exercise2Link.onclick = showExercise2;

missedDays.onchange = calculateLoss;

menuToggle.onclick = toggleMenu;