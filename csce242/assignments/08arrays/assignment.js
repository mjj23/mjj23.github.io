const destinationType = document.getElementById("destination-type");
const destinationLinks = document.getElementById("destination-links");
const mapArea = document.getElementById("map-area");


const mountains = {
    "Asheville": "Asheville, North Carolina",
    "Boone": "Boone, North Carolina",
    "Hot Springs": "Hot Springs, North Carolina",
    "Table Rock": "Table Rock State Park, South Carolina"
};


const beaches = {
    "Myrtle Beach": "Myrtle Beach, South Carolina",
    "Folly Beach": "Folly Beach, South Carolina",
    "Hilton Head": "Hilton Head Island, South Carolina",
    "Isle of Palms": "Isle of Palms, South Carolina"
};


const showMap = (name, location) => {
    const mapURL = "https://www.google.com/maps?q=" +
        encodeURIComponent(location) + "&output=embed";

    mapArea.innerHTML =
        '<iframe src="' + mapURL +
        '" title="' + name + ' map"></iframe>';
};


const showDestinations = () => {
    destinationLinks.innerHTML = "";
    mapArea.innerHTML = "";

    let destinations;

    if (destinationType.value === "mountains") {
        destinations = mountains;
    } else if (destinationType.value === "beaches") {
        destinations = beaches;
    } else {
        return;
    }

    for (let name in destinations) {
        const link = document.createElement("a");

        link.href = "#";
        link.innerHTML = name;

        link.onclick = (event) => {
            event.preventDefault();
            showMap(name, destinations[name]);
        };

        destinationLinks.append(link);
    }
};


destinationType.onchange = showDestinations;