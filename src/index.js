//Adding the search engine

function searchCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");
  console.log(cityInput.value);
  let cityElement = document.querySelector("#city-heading");
  cityElement.innerHTML = cityInput.value;
}

let searchFormElement = document.querySelector("#search-form");
console.log(searchFormElement);
searchFormElement.addEventListener("submit", searchCity);

// Call the API

// Call data per city
