const weatherAccessKey = "15da00e4020f8892093e6b24c1c4b5a5";
const unsplashAccessKey = "TYC5m71jdzqgxle6K4-NyAzfzDasUbL-tSO33BjQNX8";

export async function getCoordinates(city) {
  const geocodingAPI = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${weatherAccessKey}`
  );

  const data = await geocodingAPI.json();

  if (!data || data.length === 0) {
    throw new Error(
      "Cidade não encontrada. Por favor, verifique o nome digitado."
    );
  } else {
    const cityData = {
      name: data[0].name,
      country: data[0].country,
      lat: data[0].lat,
      lon: data[0].lon,
    };
    return cityData;
  }
}

export async function getWeather(lat, lon) {
  const weatherAPI = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${weatherAccessKey}&lang=pt_br`
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

export async function getCityImage(city) {
  const unsplashAPI = await fetch(
    `https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashAccessKey}`
  );

  const data = await unsplashAPI.json();

  return data.results;
}
