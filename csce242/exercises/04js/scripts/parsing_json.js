const base_url = "https://portiaporti.github.io/json/fish.json";

const getFish = async () => {
    const response = await fetch(base_url);
    return response.json();
};

const showFish = async() => {
    const fishes = await getFish();
}