// Get Forecast
// Get Current Weather
// Get and update business cards 

const businesses_sec = document.getElementById("businesses-sec");
const weather_sec = document.getElementById("weather-sec");
const forecast_sec = document.getElementById("forecast-sec");

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

let lat = 40.59, long = -111.88, key = "a2c7b45d81a220c2194838836bccbd98";


// console.log(data_forecast);
// Build weather and forecast out of data
async function buildWeatherCard() {
    let data = await apiFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=imperial`);
    console.log(data);
    const weather_header = document.createElement("h2");
    const weather_logo = document.createElement("img");
    const weather_list = document.createElement("ul");
    const weather_description = document.createElement("li");
    const weather_high = document.createElement("li");
    const weather_low = document.createElement("li");
    const weather_humidity = document.createElement("li");
    const weather_sunrise = document.createElement("li");
    const weather_sunset = document.createElement("li");

    weather_header.innerText = "Current Weather";

    weather_logo.setAttribute("src", `https://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    weather_logo.setAttribute("alt", `${data.weather[0].description}`);
    weather_logo.setAttribute("width", "50px");
    weather_logo.setAttribute("height", "50px");

    weather_description.innerText = `${data.weather[0].main}`;
    weather_high.innerText = `High: ${data.main.temp_max}°`;
    weather_low.innerText = `Low: ${data.main.temp_min}°`;
    weather_humidity.innerText = `Humidity: ${data.main.humidity}%`;

    let sunrise = new Date(data.sys.sunrise * 1000);
    let sunset = new Date(data.sys.sunset * 1000);

    weather_sunrise.innerText = `Sunrise: ${sunrise.toLocaleTimeString()}`;
    weather_sunset.innerText = `Sunset: ${sunset.toLocaleTimeString()}`;
    // weather_description.innerText = ``;
    // weather_description.innerText = ``;


    // put it together
    weather_sec.innerHTML = ``;
    weather_sec.appendChild(weather_header);
    weather_sec.appendChild(weather_logo);
    weather_sec.appendChild(weather_list);
    weather_list.appendChild(weather_description);
    weather_list.appendChild(weather_high);
    weather_list.appendChild(weather_low);
    weather_list.appendChild(weather_humidity);
    weather_list.appendChild(weather_sunrise);
    weather_list.appendChild(weather_sunset);
}
async function buildForecastCard() {
    const data = await apiFetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=imperial`);
    console.log(data);
    const forecast_header = document.createElement("h2");
    const forecast_current = document.createElement("h3");
    const forecast_tomorrow = document.createElement("h3");
    const forecast_after = document.createElement("h3");


    forecast_current.innerText = `In One Day: ${data.list[4].main.temp_max}°`;
    forecast_tomorrow.innerText = `In Two Days: ${data.list[9].main.temp_max}°`;
    forecast_after.innerText = `in Three Days: ${data.list[14].main.temp_max}°`;
    forecast_header.innerText = "Forecast";

    // put it together
    forecast_sec.innerHTML = ``;
    forecast_sec.appendChild(forecast_header);

    forecast_sec.appendChild(forecast_current);
    forecast_sec.appendChild(forecast_tomorrow);
    forecast_sec.appendChild(forecast_after);
}

async function buildBusinessCards() {
    let business_data = await apiFetch("./data/members.json");
    console.log(business_data);
    // build member lists
    let top_members = [];
    for (const member of business_data.members) {
        if (member.tier <= 2) {
            top_members.push(member);
        }
    }
    console.log(top_members);
    while (top_members.length > 3) {
        let random = Math.floor(Math.random() * top_members.length);
        top_members.splice(random, 1);
    }

    //build the cards
    businesses_sec.innerHTML = "";
    for (const member of top_members) {

        const business_card = document.createElement("div");
        business_card.classList.add("business-card");
        const business_name = document.createElement("h3");
        const business_logo = document.createElement("img");
        const business_list = document.createElement("ul");
        const business_phone = document.createElement("li");
        const business_url = document.createElement("li");

        business_name.innerText = `${member.name}`

        business_logo.setAttribute("src", member.image);
        business_logo.setAttribute("alt", member.name);
        business_logo.setAttribute("width", "44px");
        business_logo.setAttribute("height", "44px");
        
        business_phone.innerText = `PHONE: ${member.phone}`
        business_url.innerHTML = `<a href="${member.url}">URL</a>`

        businesses_sec.appendChild(business_card);
        business_card.appendChild(business_name);
        business_card.appendChild(business_logo);
        business_card.appendChild(business_list);
        business_list.appendChild(business_phone);
        business_list.appendChild(business_url);

    }

}
buildWeatherCard();
buildForecastCard();
buildBusinessCards();