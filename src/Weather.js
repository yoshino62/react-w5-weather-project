import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "11:00 | Tuseday",
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                autoFocus="on"
                required
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Seach" className="btn btn-primary" />
            </div>
          </div>
        </form>

        <h1 className="current-location-time">
          <span className="currrent-city">{weatherData.city}</span>
          <span className="current-time">{weatherData.date}</span>
        </h1>

        <div className="current-weather-data">
          <div className="current-weather-details">
            <p>
              <span className="current-temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">ºC</span>
            </p>
            <ul className="weather-info-details">
              <li>
                Humidity :{" "}
                <span className="weather-info">{weatherData.humidity}%</span>
              </li>
              <li>
                Wind :{" "}
                <span className="weather-info">{weatherData.wind}km/h</span>
              </li>
            </ul>
          </div>

          <div className="curent-weather-info">
            <div>
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="current-weather-icon"
              />
            </div>
            <div className="curent-weather-condition text-capitalize">
              {weatherData.description}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
