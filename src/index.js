// Function to search the city and make API call

function getWeather(city) {
  let apiKey = "290ad1b0ade1e2ccfo73b8ac411tb3fb";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayWeather);
}

// Form submission handling

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");

  getWeather(cityInput.value.trim());
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);

// Callback function display the weather data response

function displayWeather(response) {
  let cityElement = document.querySelector("#city-heading");
  cityElement.innerHTML = response.data.city;

  //Update temperature
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  console.log(response.data);
}

// Default city set to Paris
getWeather("Paris");
