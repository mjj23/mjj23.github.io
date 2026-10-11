const getWeapons = async () => {
    const url = "https://mjj23.github.io/projects/part7/weapons.json";

    const response = await fetch(url);
    const weapons = await response.json();

    showWeapons(weapons);
};

const showWeapons = (weapons) => {
    const weaponList = document.getElementById("weapon-list");

    weapons.forEach((weapon) => {
        const card = document.createElement("article");

        card.classList.add("gallery-card");

        card.innerHTML = `
            <img src="${weapon.img_name}" alt="${weapon.name}">

            <h3>${weapon.name}</h3>

            <p><strong>Type:</strong> ${weapon.type}</p>

            <p><strong>Focus:</strong> ${weapon.focus}</p>

            <p><strong>Location:</strong> ${weapon.location}</p>

            <p>${weapon.description}</p>
        `;

        weaponList.append(card);
    });
};

getWeapons();