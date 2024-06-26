import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTempetature from "./WeatherTempetature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="current-location-time">
        <span className="currrent-city">{props.data.city}</span>
        <span className="current-time">
          <FormattedDate date={props.data.date} />
        </span>
      </h1>

      <div className="current-weather-data mb-5">
        <div className="current-weather-details">
          <WeatherTempetature celsius={props.data.temperature} />

          <ul className="weather-info-details">
            <li>
              Humidity :{" "}
              <span className="weather-info">{props.data.humidity}%</span>
            </li>
            <li>
              Wind : <span className="weather-info">{props.data.wind}km/h</span>
            </li>
          </ul>
        </div>

        <div className="curent-weather-info">
          <div>
            <WeatherIcon code={props.data.icon} size={100} />
          </div>
          <div className="curent-weather-condition text-capitalize mt-4">
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
}
