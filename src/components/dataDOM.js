import fetchAndProcessData from "./weatherAPI";
import { checkValidInput, showError, clearError } from "./errorHandler";
import { weatherInfoDOM } from "./weatherInfoDOM";

function showLoadingIcon() {
  document.querySelector(".load-icon").classList.add("active");
}

function hideLoadingIcon() {
  document.querySelector(".load-icon").classList.remove("active");
}

function getWeatherData(location) {
  showLoadingIcon();
  clearError();

  if (checkValidInput(location)) {
    fetchAndProcessData(location)
      .then(weatherData => {
        weatherInfoDOM(weatherData);
        hideLoadingIcon();
      })
      .catch(error => {
        console.log("Error in fetchAndProcessData", error);

        hideLoadingIcon();
        showError("No location found");
      });
  } else {
    hideLoadingIcon();
    showError("No location provided");
  }
}

export default getWeatherData;
