import getWeatherData from "./dataDOM";
import { clearWeatherInfoDOM } from "./weatherInfoDOM";

function searchLocationHandler() {
  const searchBtn = document.querySelector(".search-icon");
  const input = document.querySelector("input[type='text']");

  searchBtn.addEventListener("click", () => {
    clearWeatherInfoDOM();
    getWeatherData(input.value);
    input.value = "";
  });

  input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      clearWeatherInfoDOM();
      getWeatherData(input.value);
      input.value = "";
    }
  });
}

export default searchLocationHandler;
