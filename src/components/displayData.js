import getWeatherData from "./dataDOM";
import { clearWeatherInfoDOM } from "./weatherInfoDOM";

function getLocation() {
  const input = document.querySelector("input[type='text']");
  return input.value;
}

function searchLocationHandler() {
  const searchBtn = document.querySelector(".search-icon");

  searchBtn.addEventListener("click", () => {
    const location = getLocation();
    clearWeatherInfoDOM();
    getWeatherData(location);
    document.querySelector("input[type='text']").value = "";
  });
}

function defaultPage() {
  document.addEventListener("DOMContentLoaded", () => {
    getWeatherData("New York");
  });
}
export { searchLocationHandler, defaultPage };
