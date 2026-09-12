const speechBox = document.getElementById("speech");
const speechBubble = document.getElementById("speech-bubble");

const showSpeech = () => {
    speechBubble.innerHTML = "Not interested.";
    speechBubble.style.display = "block";
};

speechBox.onclick=showSpeech;

const weaponSelect = document.getElementById("weapon-select");
const weaponMessage = document.getElementById("weapon-message");

const showWeapon = () => {
    const weapon = weaponSelect.options[weaponSelect.selectedIndex].text;
    weaponMessage.innerHTML = weapon + ": Great choice!";
};

weaponSelect.onchange=showWeapon;

const materiaImage = document.getElementById("materia-image");
const stickerArea = document.getElementById("sticker-area");

const addSticker = () => {
    const sticker = document.createElement("span");
    sticker.innerHTML = "✨";
    sticker.classList.add("materia-sticker");
    stickerArea.append(sticker);  
};

materiaImage.onclick=addSticker;