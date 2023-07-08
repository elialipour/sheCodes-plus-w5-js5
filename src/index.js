function showLocation(position) {
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}
navigator.geolocation.getCurrentPosition(showLocation);

let apiKey = "d1a86552de255334f6117b348c4519bd";

let latitude = 37.4315734;
let longitude = -78.6568942;

let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric`;

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);

  let h1 = document.querySelector("h1");
  h1.innerHTML = `The current temperature is ${temperature}`;
}

axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemp);
