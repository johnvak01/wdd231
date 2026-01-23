// Get Forecast
// Get Current Weather
// Get and update business cards 

const business_sec = document.getElementById("business-sec");
const weather_sec = document.getElementById("weather-Sec");
const forecast_sec = document.getElementById("forecast-Sec");

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    
}

let lat = 40.56, long = 111.83, key="a2c7b45d81a220c2194838836bccbd98";

let data_weather = apiFetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}`);
let data_forecast = apiFetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}`);

console.log(data_weather);
console.log(data_forecast);
