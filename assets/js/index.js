import { getCoordinates, getWeather, getCityImage } from "./connectAPI.js";
import { showElement, showCityImages } from "./showElements.js";

const form = document.getElementById("search-form");
const input = document.getElementById("search-input");
const container = document.getElementById("weather-container");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = input.value;
  const cityData = await getCoordinates(city);
  const weather = await getWeather(cityData.lat, cityData.lon);
  const images = await getCityImage(city);
  showElement(weather);
  showCityImages(images);
  container.classList.remove("--hidden");
});
