// Function to search the city and make API call

function getWeather(city) {
  let apiKey = "290ad1b0ade1e2ccfo73b8ac411tb3fb";
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiURL).then(displayWeather);
}

// Callback function display the weather data response

function displayWeather(response) {
  let cityElement = document.querySelector("#city-heading");
  let temperatureElement = document.querySelector("#temperature");
  let timeElement = document.querySelector("#time");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" />`;
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  timeElement.innerHTML = formatDate(date);
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed} km/h`;

  //Change background image dependeing on weather

  let weatherDescription = response.data.condition.description.toLowerCase();

  if (weatherDescription.includes("rain")) {
    document.body.className = "rainy";
  } else if (weatherDescription.includes("cloud")) {
    document.body.className = "clouds";
  } else if (weatherDescription.includes("clear sky")) {
    document.body.className = "clear-sky";
  } else {
    document.body.className = "cloudy";
  }

  console.log(response.data);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours}:${minutes}`;
}

// Form submission handling - event handlers

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");

  getWeather(cityInput.value.trim());
}

// Event listeners

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchCity);

// Initial pageload
getWeather("Paris");
