import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-day m-3">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={48} />
      <div className="WeatherForecast-temperature mt-2">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}ºC
        </span>{" "}
        |{" "}
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}ºC
        </span>
      </div>
    </div>
  );
}
