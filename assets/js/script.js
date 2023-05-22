// document/query selectors
var cityNameEl = document.getElementById("cityName");
var tempDataEl = document.getElementById("tempData");
var windDataEl = document.getElementById("windData");
var humidityDataEl = document.getElementById("humidityData");
var userFormEl = document.querySelector("#userForm");
var citySearchInputEl = document.getElementById("citySearchInput")

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var cityNameInput = citySearchInputEl.value.trim();
  
    if (cityNameInput) {
      getCityData(cityNameInput);
  
      citySearchInputEl.value = '';
    } else {
      alert('Please enter a city name.');
    }
  };

// accesses weatherUrl and returns json data
function getCityData(city) {
  // get weather api
  var weatherUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=";

  fetch(weatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // update html with city, date, and weather icon
      cityNameEl.textContent =
        data.city.name +
        " (" +
        dayjs().format("MMM D, YYYY") +
        ") " +
        data.list[0].weather.icon;
      tempDataEl.append(data.list[0].main.temp + " \u00B0 F");
      windDataEl.append(data.list[0].wind.speed + " MPH");
      humidityDataEl.append(data.list[0].main.humidity + " %");
      getDay2();
      getDay3();
      getDay4();
      getDay5();
      getDay6();

      // function to update day 2 data
      function getDay2() {
        var day2DateEl = document.getElementById("day2Date");
        var day2TempEl = document.getElementById("day2Temp");
        var day2WindEl = document.getElementById("day2Wind");
        var day2HumidityEl = document.getElementById("day2Humidity");

        day2DateEl.textContent = dayjs().add(1, "day").format("MM/D/YYYY");
        document.getElementById("day2Img").src =
          "https://openweathermap.org/img/wn/" +
          data.list[8].weather.icon +
          "@2x.png";
        day2TempEl.append(data.list[8].main.temp + " \u00B0 F");
        day2WindEl.append(data.list[8].wind.speed + " MPH");
        day2HumidityEl.append(data.list[8].main.humidity + " %");
      }
      // function to update day 3 data
      function getDay3() {
        var day3DateEl = document.getElementById("day3Date");
        var day3IconEl = document.getElementById("day3Icon");
        var day3TempEl = document.getElementById("day3Temp");
        var day3WindEl = document.getElementById("day3Wind");
        var day3HumidityEl = document.getElementById("day3Humidity");

        day3DateEl.textContent = dayjs().add(2, "day").format("MM/D/YYYY");
        day3IconEl.textContent = data.list[16].weather.icon;
        day3TempEl.append(data.list[16].main.temp + " \u00B0 F");
        day3WindEl.append(data.list[16].wind.speed + " MPH");
        day3HumidityEl.append(data.list[16].main.humidity + " %");
      }
      // function to update day 4 data
      function getDay4() {
        var day4DateEl = document.getElementById("day4Date");
        var day4IconEl = document.getElementById("day4Icon");
        var day4TempEl = document.getElementById("day4Temp");
        var day4WindEl = document.getElementById("day4Wind");
        var day4HumidityEl = document.getElementById("day4Humidity");

        day4DateEl.textContent = dayjs().add(3, "day").format("MM/D/YYYY");
        day4IconEl.textContent = data.list[24].weather.icon;
        day4TempEl.append(data.list[24].main.temp + " \u00B0 F");
        day4WindEl.append(data.list[24].wind.speed + " MPH");
        day4HumidityEl.append(data.list[24].main.humidity + " %");
      }
      // function to update day 5 data
      function getDay5() {
        var day5DateEl = document.getElementById("day5Date");
        var day5IconEl = document.getElementById("day5Icon");
        var day5TempEl = document.getElementById("day5Temp");
        var day5WindEl = document.getElementById("day5Wind");
        var day5HumidityEl = document.getElementById("day5Humidity");

        day5DateEl.textContent = dayjs().add(4, "day").format("MM/D/YYYY");
        day5IconEl.textContent = data.list[32].weather.icon;
        day5TempEl.append(data.list[32].main.temp + " \u00B0 F");
        day5WindEl.append(data.list[32].wind.speed + " MPH");
        day5HumidityEl.append(data.list[32].main.humidity + " %");
      }
      // function to update day 6 data
      function getDay6() {
        var day6DateEl = document.getElementById("day6Date");
        var day6IconEl = document.getElementById("day6Icon");
        var day6TempEl = document.getElementById("day6Temp");
        var day6WindEl = document.getElementById("day6Wind");
        var day6HumidityEl = document.getElementById("day6Humidity");

        day6DateEl.textContent = dayjs().add(5, "day").format("MM/D/YYYY");
        day6IconEl.textContent = data.list[39].weather.icon;
        day6TempEl.append(data.list[39].main.temp + " \u00B0 F");
        day6WindEl.append(data.list[39].wind.speed + " MPH");
        day6HumidityEl.append(data.list[39].main.humidity + " %");
      }
      console.log(data);
    });
}

userFormEl.addEventListener('submit', formSubmitHandler);