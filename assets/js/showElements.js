const showCity = document.getElementById("weather-city");
const showTemperature = document.getElementById("degrees");
const showCondition = document.getElementById("weather-condition");
const showConditionIcon = document.getElementById("cloud-icon");
const showFeeling = document.getElementById("weather-feeling");
const showHumidity = document.getElementById("weather-humidity");
const showWind = document.getElementById("weather-wind");

export function showElement(weatherData) {
  const conditionCapitalized =
    weatherData.condition.charAt(0).toUpperCase() +
    weatherData.condition.slice(1).toLowerCase();

  const windInKmH = (weatherData.wind * 3.6).toFixed(1);

  showCity.innerHTML = weatherData.name;
  showTemperature.innerHTML = `${Math.round(weatherData.temperature)}°`;
  showCondition.innerHTML = conditionCapitalized;
  showConditionIcon.src = `https://openweathermap.org/img/w/${weatherData.icon}.png`;
  showFeeling.innerHTML = `${Math.round(weatherData.feeling)}°`;
  showHumidity.innerHTML = `${Math.round(weatherData.humidity)}%`;
  showWind.innerHTML = `${windInKmH} km/h`;
}

export function showCityImages(images) {
  const image = images[0];
  const imageUrl = image.urls.regular;

  document.body.style.backgroundImage = `url(${imageUrl})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center center";
}


