// gets the current date and displays it in a human readable format
const getDate = () => {
    const date = new Date();
    return date.toDateString();
  };
  
  // selects the correct html element and displays the time to it
  const displayDate = () => {
    const time = document.querySelector(".time");
    const date = getDate();
    time.innerHTML = date;
  };
  
  // adds the correct css classes required to expand the pill and reveal the forecast
  const handlePillExpand = () => {
    const pill = document.querySelector(".pill-container");
    const currentWeather = document.querySelector(".current-weather");
    const weatherForecast = document.querySelector(".weather-forecast-container");
  
    pill.classList.add("pill-container--expanded");
    currentWeather.classList.add("current-weather--hidden");
    weatherForecast.classList.add("weather-forecast--show");
  };
  
  // adds the correct css classes required to contract the pill and reveal the current weather
  const handlePillContract = () => {
    const pill = document.querySelector(".pill-container");
    const currentWeather = document.querySelector(".current-weather");
    const weatherForecast = document.querySelector(".weather-forecast-container");
  
    pill.classList.remove("pill-container--expanded");
    currentWeather.classList.remove("current-weather--hidden");
    weatherForecast.classList.remove("weather-forecast--show");
  };
  
  // main function that runs on window load and calls everything necessary
  const main = () => {
    const pillContainer = document.querySelector(".pill-container");
    displayDate();
    pillContainer.addEventListener("mouseenter", handlePillExpand);
    pillContainer.addEventListener("mouseleave", handlePillContract);
  };
  
  window.onload = () => {
    main();
  };
  