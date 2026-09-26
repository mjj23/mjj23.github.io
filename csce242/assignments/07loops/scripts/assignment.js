const cars = document.getElementById("cars");

const colors = [
    "#41c7b9",
    "#9acd45",
    "#7065b8",
    "#f08a70",
    "#9b6bb3",
    "#5ba8e6"
];

const createCar = (color, x, y) => {
    const car = document.createElement("div");

    car.classList.add("car");
    car.style.setProperty("--car-color", color);
    car.style.left = x + "px";
    car.style.top = y + "px";

    cars.append(car);
};

for (let i = 0; i < 8; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];

    const x = Math.floor(
        Math.random() * (cars.clientWidth - 70)
    );

    let y;

    if (Math.random() < 0.5) {
        y = 35;
    } else {
        y = 125;
    }

    createCar(color, x, y);
}