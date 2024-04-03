import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "96ad27349a64ea1dcdfbe6f4d458c085";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day m-3">Tue </div>
          <WeatherIcon code="01d" size={48} />
          <div className="WeatherForecast-temperature mt-2">
            <span className="WeatherForecast-temperature-max">13ºC</span> |{" "}
            <span className="WeatherForecast-temperature-min">9ºC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
