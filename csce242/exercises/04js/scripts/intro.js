document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello, World!";
    e.target.innerHTML = "Khalas";
}


document.getElementById("link").onclick = (e) => {
    e.preventDefault(); //dont go to the links destination
    e.target.classList.add("cool-link");
}

//when button clicked make ball bounce
document.getElementById("btn-start-animation").onclick = (e) => {
    document.getElementById("ball").classList.toggle("bouncing-ball");
}