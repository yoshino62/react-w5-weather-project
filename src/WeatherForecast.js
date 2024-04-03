import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
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
