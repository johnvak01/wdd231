import location_data from "../data/locations.mjs";

const locations_sec = document.getElementById("locations-sec");



for (const location of location_data.locations) {
    const card = document.createElement("div");
    card.classList.add("location-card")

    const name = document.createElement("h3");
    name.innerText = location.name;
    card.appendChild(name);

    const figure = document.createElement("figure");
    card.appendChild(figure);

    const image = document.createElement("img");
    image.setAttribute("width", "300");
    image.setAttribute("height", "200");
    image.setAttribute("src", `images/${location.image}`);
    image.setAttribute("alt", location.name);
    figure.appendChild(image);

    const caption = document.createElement("figcaption");
    caption.innerText = location.name;
    figure.appendChild(caption);

    const address = document.createElement("address");
    address.innerText = location.address;
    console.log(location.address)
    card.appendChild(address);

    const description = document.createElement("p");
    description.innerText = location.description;
    card.appendChild(description);

    const learn_btn = document.createElement("button");
    learn_btn.innerText = "Learn More";
    learn_btn.classList.add("location-learn");
    card.appendChild(learn_btn);

    locations_sec.appendChild(card);
}

// localstorage date
const message = document.getElementById("welcome-msg");
const current_date = new Date();
let this_visit = Math.abs(current_date/1000);
let last_visit = localStorage.getItem("last-visit");
console.log(last_visit);

if (last_visit == null) {
    message.innerText="Welcome! Let us know if you have any questions.";
}
else if (localStorage.getItem("last-visit")) {
    const ms_per_day = 24*60*60*1000;
    let days = Math.abs((last_visit-this_visit)/ms_per_day);
    console.log(days);
    if(days < 1){
        message.innerText = "Back so soon! Awesome!";
    }else if(days < 2){
    message.innerText = `You last visited 1 day ago.`;
    }else{
    message.innerText = `You last visited ${Math.floor(days)} days ago.`;

    }

}

localStorage.setItem("last-visit", this_visit);

