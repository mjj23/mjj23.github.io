class Vacation {
    constructor(title, type, description, thingsToDo, imageFile, mapSrc) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.thingsToDo = thingsToDo;
        this.imageFile = imageFile;
        this.mapSrc = mapSrc;
    }

    getCard() {
        const card = document.createElement("article");
        card.classList.add("vacation-card");

        card.innerHTML = `
            <div class="card-top">
                <h3>${this.title}</h3>
                <p>${this.type} Vacation</p>
            </div>

            <img src="image/${this.imageFile}" alt="${this.title}">
        `;

        card.onclick = () => {
            this.showVacation();
        };

        return card;
    }

    showVacation() {
        const modalDetails = document.getElementById("modal-details");
        const modal = document.getElementById("vacation-modal");

        modalDetails.innerHTML = `
            <div class="modal-layout">

                <iframe
                    src="${this.mapSrc}"
                    loading="lazy">
                </iframe>

                <div class="modal-text">
                    <h3>${this.title}</h3>

                    <p>
                        <strong>Type:</strong>
                        ${this.type}
                    </p>

                    <p>
                        <strong>Description:</strong>
                        ${this.description}
                    </p>

                    <p>
                        <strong>Things To Do:</strong>
                        ${this.thingsToDo}
                    </p>
                </div>

            </div>
        `;

        modal.classList.remove("hidden");
    }
}


const vacations = [

    new Vacation(
        "Maldives",
        "Beach",
        "A tropical paradise known for white sand beaches, clear turquoise water, and overwater bungalows.",
        "Swim, snorkel, scuba dive, relax on the beach, and explore the coral reefs.",
        "maldives.png",
        "https://www.google.com/maps?q=Maldives&output=embed"
    ),

    new Vacation(
        "Positano",
        "Beach",
        "A colorful cliffside village on Italy's Amalfi Coast overlooking the Mediterranean Sea.",
        "Visit the beach, explore local shops, enjoy Italian food, and take a boat tour along the coast.",
        "positano.png",
        "https://www.google.com/maps?q=Positano,Italy&output=embed"
    ),

    new Vacation(
        "Kyoto",
        "Mountain",
        "A historic Japanese city known for temples, gardens, cherry blossoms, and traditional architecture.",
        "Visit temples, walk through gardens, see cherry blossoms, and explore traditional neighborhoods.",
        "kyoto.png",
        "https://www.google.com/maps?q=Kyoto,Japan&output=embed"
    ),

    new Vacation(
        "Santorini",
        "Beach",
        "A Greek island famous for white buildings, blue-domed churches, cliffs, and views of the Aegean Sea.",
        "Explore Oia, visit beaches, watch the sunset, and enjoy local Greek food.",
        "santorini.png",
        "https://www.google.com/maps?q=Oia,Santorini,Greece&output=embed"
    ),

    new Vacation(
        "Serengeti",
        "Mountain",
        "A famous African wildlife destination known for open grasslands, beautiful sunsets, and large animal herds.",
        "Go on a safari, see elephants and other wildlife, take photographs, and explore the national park.",
        "serengeti.png",
        "https://www.google.com/maps?q=Serengeti+National+Park,Tanzania&output=embed"
    ),

    new Vacation(
        "Petra",
        "Mountain",
        "An ancient city in Jordan famous for buildings carved directly into sandstone cliffs.",
        "Visit the Treasury, explore ancient ruins, hike through the canyon, and learn about Nabataean history.",
        "petra.png",
        "https://www.google.com/maps?q=Petra,Jordan&output=embed"
    ),

    new Vacation(
        "Lauterbrunnen",
        "Mountain",
        "A beautiful Swiss alpine valley surrounded by green meadows, waterfalls, villages, and snow-covered mountains.",
        "Hike through the valley, visit waterfalls, ride mountain trains, and explore nearby villages.",
        "lauterbrunnen.png",
        "https://www.google.com/maps?q=Lauterbrunnen,Switzerland&output=embed"
    ),

    new Vacation(
        "Costa Rica",
        "Beach",
        "A tropical destination filled with rainforests, waterfalls, wildlife, and outdoor adventures.",
        "Visit waterfalls, hike through the rainforest, cross hanging bridges, and explore national parks.",
        "costa rica.png",
        "https://www.google.com/maps?q=Costa+Rica&output=embed"
    )

];


const gallery = document.getElementById("vacation-gallery");
const modal = document.getElementById("vacation-modal");
const closeModal = document.getElementById("close-modal");


const showVacations = () => {
    vacations.forEach((vacation) => {
        gallery.append(vacation.getCard());
    });
};


closeModal.onclick = () => {
    modal.classList.add("hidden");
};


window.onclick = (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
};


showVacations();