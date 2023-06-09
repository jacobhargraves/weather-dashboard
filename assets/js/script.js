// document/query selectors
var cityNameEl = document.getElementById("cityName");
var weatherIconEl = document.getElementById("weatherIcon");
var tempDataEl = document.getElementById("tempData");
var windDataEl = document.getElementById("windData");
var humidityDataEl = document.getElementById("humidityData");
var userFormEl = document.querySelector("#userForm");
var citySearchInputEl = document.getElementById("citySearchInput");
var resetBtnEl = document.getElementById("resetBtn");

// day 2 query selectors
var day2DateEl = document.getElementById("day2Date");
var day2IconEl = document.getElementById("day2Icon");
var day2TempEl = document.getElementById("day2Temp");
var day2WindEl = document.getElementById("day2Wind");
var day2HumidityEl = document.getElementById("day2Humidity");

// day 3 query selectors
var day3DateEl = document.getElementById("day3Date");
var day3IconEl = document.getElementById("day3Icon");
var day3TempEl = document.getElementById("day3Temp");
var day3WindEl = document.getElementById("day3Wind");
var day3HumidityEl = document.getElementById("day3Humidity");

// day 4 query selectors
var day4DateEl = document.getElementById("day4Date");
var day4IconEl = document.getElementById("day4Icon");
var day4TempEl = document.getElementById("day4Temp");
var day4WindEl = document.getElementById("day4Wind");
var day4HumidityEl = document.getElementById("day4Humidity");

// day 5 query selectors
var day5DateEl = document.getElementById("day5Date");
var day5IconEl = document.getElementById("day5Icon");
var day5TempEl = document.getElementById("day5Temp");
var day5WindEl = document.getElementById("day5Wind");
var day5HumidityEl = document.getElementById("day5Humidity");

// day 6 query selectors
var day6DateEl = document.getElementById("day6Date");
var day6IconEl = document.getElementById("day6Icon");
var day6TempEl = document.getElementById("day6Temp");
var day6WindEl = document.getElementById("day6Wind");
var day6HumidityEl = document.getElementById("day6Humidity");

var formSubmitHandler = function (event) {
    event.preventDefault();
  
    var cityNameInput = citySearchInputEl.value.trim();
  
    if (cityNameInput) {
      getCityData(cityNameInput);
  
      citySearchInputEl.value = '';
    } else {
      alert('Please enter a city name.');
    }
    addHistory(cityNameInput);
  };

// accesses weatherUrl and returns json data
function getCityData(city) {
    // reset content before generating new data
    resetContent();

  // get weather api
  var weatherUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=d10096810a3bc27c043acca67098cb3c";

  fetch(weatherUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // update html with city and date
      var iconId = data.list[0].weather[0].icon;
      cityNameEl.textContent =
        data.city.name +
        " (" +
        dayjs().format("MMM D, YYYY") +
        ") ";
      // updates html with weather icon, temp, wind, and humidity  
      weatherIconEl.src = "https://openweathermap.org/img/wn/" + iconId + "@2x.png";
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
        var day2IconData = data.list[8].weather[0].icon;

        day2DateEl.textContent = dayjs().add(1, "day").format("MM/D/YYYY");
        day2IconEl.src = "https://openweathermap.org/img/wn/" + day2IconData + "@2x.png";
        day2TempEl.append(data.list[8].main.temp + " \u00B0 F");
        day2WindEl.append(data.list[8].wind.speed + " MPH");
        day2HumidityEl.append(data.list[8].main.humidity + " %");
      }
      // function to update day 3 data
      function getDay3() {
        var day3IconData = data.list[16].weather[0].icon;

        day3DateEl.textContent = dayjs().add(2, "day").format("MM/D/YYYY");
        day3IconEl.src = "https://openweathermap.org/img/wn/" + day3IconData + "@2x.png";
        day3TempEl.append(data.list[16].main.temp + " \u00B0 F");
        day3WindEl.append(data.list[16].wind.speed + " MPH");
        day3HumidityEl.append(data.list[16].main.humidity + " %");
      }
      // function to update day 4 data
      function getDay4() {
        var day4IconData = data.list[24].weather[0].icon;

        day4DateEl.textContent = dayjs().add(3, "day").format("MM/D/YYYY");
        day4IconEl.src = "https://openweathermap.org/img/wn/" + day4IconData + "@2x.png";
        day4TempEl.append(data.list[24].main.temp + " \u00B0 F");
        day4WindEl.append(data.list[24].wind.speed + " MPH");
        day4HumidityEl.append(data.list[24].main.humidity + " %");
      }
      // function to update day 5 data
      function getDay5() {
        var day5IconData = data.list[32].weather[0].icon;

        day5DateEl.textContent = dayjs().add(4, "day").format("MM/D/YYYY");
        day5IconEl.src = "https://openweathermap.org/img/wn/" + day5IconData + "@2x.png";
        day5TempEl.append(data.list[32].main.temp + " \u00B0 F");
        day5WindEl.append(data.list[32].wind.speed + " MPH");
        day5HumidityEl.append(data.list[32].main.humidity + " %");
      }
      // function to update day 6 data
      function getDay6() {
        var day6IconData = data.list[39].weather[0].icon;

        day6DateEl.textContent = dayjs().add(5, "day").format("MM/D/YYYY");
        day6IconEl.src = "https://openweathermap.org/img/wn/" + day6IconData + "@2x.png";
        day6TempEl.append(data.list[39].main.temp + " \u00B0 F");
        day6WindEl.append(data.list[39].wind.speed + " MPH");
        day6HumidityEl.append(data.list[39].main.humidity + " %");
      }
      // console.log(data.list[0].weather.icon);
    });
}

function resetContent() {
    // reset day 1
    cityNameEl.textContent = 'City Name ';
    weatherIconEl.src = '';
    tempDataEl.textContent = 'Temp: ';
    windDataEl.textContent = 'Wind: ';
    humidityDataEl.textContent = 'Humidity: ';
    // reset day 2
    day2DateEl.textContent = '';
    day2IconEl.src = '';
    day2TempEl.textContent = 'Temp: ';
    day2WindEl.textContent = 'Wind: ';
    day2HumidityEl.textContent = 'Humidity: ';
    // reset day 3
    day3DateEl.textContent = '';
    day3IconEl.src = '';
    day3TempEl.textContent = 'Temp: ';
    day3WindEl.textContent = 'Wind: ';
    day3HumidityEl.textContent = 'Humidity: ';
    // reset day 4
    day4DateEl.textContent = '';
    day4IconEl.src = '';
    day4TempEl.textContent = 'Temp: ';
    day4WindEl.textContent = 'Wind: ';
    day4HumidityEl.textContent = 'Humidity: ';
    // reset day 5
    day5DateEl.textContent = '';
    day5IconEl.src = '';
    day5TempEl.textContent = 'Temp: ';
    day5WindEl.textContent = 'Wind: ';
    day5HumidityEl.textContent = 'Humidity: ';
    // reset day 6
    day6DateEl.textContent = '';
    day6IconEl.src = '';
    day6TempEl.textContent = 'Temp: ';
    day6WindEl.textContent = 'Wind: ';
    day6HumidityEl.textContent = 'Humidity: ';
}

function addHistory(cityNameHistory) {
    localStorage.setItem('cityName', cityNameHistory);
    
    // Create a new button element for the city
    const button = document.createElement('button');
    button.textContent = cityNameHistory;
    // Add Bootsrap classes
    button.classList.add('btn', 'btn-secondary', 'btn-block', 'mb-2');

    // Add an event listener to the button
    button.addEventListener('click', function() {
      // Retrieve the city name from the button's text content
      const cityName = button.textContent;
      
      // Call the function to get and display the weather information
      getCityData(cityName);
    });
  
    // Get the container element to display the items
    const historyContainer = document.getElementById('recentSearches');
    
    // Append the button element to the container
    historyContainer.appendChild(button);
  }
  
// calls formSubmitHandler function upon submit
userFormEl.addEventListener('submit', formSubmitHandler);