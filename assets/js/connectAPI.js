const keyAPI = "15da00e4020f8892093e6b24c1c4b5a5";

export async function getCoordinates(city) {
  const geocodingAPI = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${keyAPI}`
  );

  const data = await geocodingAPI.json();

  const cityData = {
    name: data[0].name,
    country: data[0].country,
    lat: data[0].lat,
    lon: data[0].lon,
  };

  return cityData;
}

export async function getWeather(lat, lon) {
  const weatherAPI = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${keyAPI}&lang=pt_br`
  );

  const data = await weatherAPI.json();

  const weatherData = {
    name: data.name,
    temperature: data.main.temp,
    condition: data.weather[0].description,
    icon: data.weather[0].icon,
    feeling: data.main.feels_like,
    humidity: data.main.humidity,
    wind: data.wind.speed,
  };

  return weatherData;
}
