import { format, parse } from "date-fns";

function getDayAndTime(localTime) {
  const formatString = "yyyy-MM-dd HH:mm";
  const parsedDate = parse(localTime, formatString, new Date());
  // convert localTime string into date object

  const newFormatDay = "eeee, do MMMM, yyyy";
  const newFormatTime = "hh:mm a";
  // format accept date object as its first argument
  const formatDate = format(parsedDate, newFormatDay);
  const formatTime = format(parsedDate, newFormatTime);

  return [formatDate, formatTime];
}

function toggleIcon(isDay) {
  const sunIcon = document.querySelector("i.iconoir-sun-light");
  const moonIcon = document.querySelector("i.iconoir-half-moon");

  if (isDay === 1) {
    sunIcon.classList.add("active");
    moonIcon.classList.remove("active");
  } else {
    sunIcon.classList.remove("active");
    moonIcon.classList.add("active");
  }
}

function upperWeatherInfoDOM(weatherData) {
  // location DOM
  const locationElm = document.querySelector("h3.location");
  locationElm.textContent = `${weatherData.location.name}, ${weatherData.location.country}`;

  // day DOM
  const dayElm = document.querySelector("p.day");
  const timeElm = document.querySelector("p.time");

  const [day, time] = getDayAndTime(weatherData.location.localTime);
  dayElm.textContent = day;
  timeElm.textContent = time;

  // temperature DOM
  const temperatureElm = document.querySelector("p.temperature");
  temperatureElm.textContent = `${weatherData.current.tempCelsius}\u00B0C`;
  temperatureElm.setAttribute("data-unit", "celsius");

  // condition DOM
  const conditionElm = document.querySelector("h4.condition");
  conditionElm.textContent = weatherData.current.condition;
  toggleIcon(weatherData.current.isDay);
}

function belowWeatherInfoDOM(weatherData) {
  const belowContainer = document.querySelector(".below-container");

  const infoArr = [
    {
      iconClass: ["las", "la-temperature-high"],
      about: "Feels Like",
      value: `${weatherData.current.feelsLikeC} \u00B0C`,
    },
    {
      iconClass: ["las", "la-cloud"],
      about: "Cloud Cover",
      value: `${weatherData.current.cloud}%`,
    },
    {
      iconClass: ["las", "la-tint"],
      about: "Air Humidity",
      value: `${weatherData.current.humid}%`,
    },
    {
      iconClass: ["las", "la-wind"],
      about: "Wind Speed",
      value: `${weatherData.current.humid} Km/h`,
    },
  ];

  infoArr.forEach(infoBox => {
    const boxElm = document.createElement("div");
    boxElm.classList.add("info-box");

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");

    const iconElm = document.createElement("i");
    iconElm.classList.add(...infoBox.iconClass);
    div1.appendChild(iconElm);

    const h5 = document.createElement("h5");
    h5.textContent = infoBox.about;
    const p = document.createElement("p");
    p.textContent = infoBox.value;
    div2.append(h5, p);

    boxElm.append(div1, div2);
    belowContainer.appendChild(boxElm);
  });
}

function weatherInfoDOM(weatherData) {
  upperWeatherInfoDOM(weatherData);
  belowWeatherInfoDOM(weatherData);
}

function clearWeatherInfoDOM() {
  const locationElm = document.querySelector("h3.location");
  const dayElm = document.querySelector("p.day");
  const timeElm = document.querySelector("p.time");
  const temperatureElm = document.querySelector("p.temperature");
  const conditionElm = document.querySelector("h4.condition");
  const belowContainer = document.querySelector(".below-container");

  const sunIcon = document.querySelector("i.iconoir-sun-light");
  const moonIcon = document.querySelector("i.iconoir-half-moon");

  locationElm.textContent = "";
  dayElm.textContent = "";
  timeElm.textContent = "";
  temperatureElm.textContent = "";
  conditionElm.textContent = "";
  belowContainer.innerHTML = "";

  sunIcon.classList.remove("active");
  moonIcon.classList.remove("active");
}

export { weatherInfoDOM, clearWeatherInfoDOM };
