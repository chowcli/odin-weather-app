async function fetchData(location) {
  const APIKey = "da8f2f02adb04870ad551144231011";

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${location}`,
      { mode: "cors" }
    );

    const rawData = await response.json();

    return rawData;
  } catch (error) {
    console.log("An error occurred while fetching data:", error);
    throw error;
  }
}

function processData(rawData) {
  const weatherData = {
    location: {
      name: rawData.location.name,
      country: rawData.location.country,
      localTime: rawData.location.localtime,
    },

    current: {
      tempCelsius: Math.round(rawData.current.temp_c),
      tempFahrenheit: Math.round(rawData.current.temp_f),
      isDay: rawData.current.is_day,
      condition: rawData.current.condition.text,
      windKph: rawData.current.wind_kph,
      humid: rawData.current.humidity,
      cloud: rawData.current.cloud,
      feelsLikeC: Math.round(rawData.current.feelslike_c),
      feelsLikeF: Math.round(rawData.current.feelslike_f),
    },
  };

  return weatherData;
}

async function fetchAndProcessData(location) {
  try {
    const rawData = await fetchData(location);
    const weatherData = processData(rawData);
    return weatherData;
  } catch (error) {
    console.log("An error occurred while fetching and processing data:", error);
    throw error;
  }
}

export default fetchAndProcessData;
