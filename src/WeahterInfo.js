import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="current-location-time">
        <span className="currrent-city">{props.data.city}</span>
        <span className="current-time">
          <FormattedDate date={props.data.date} />
        </span>
      </h1>

      <div className="current-weather-data">
        <div className="current-weather-details">
          <p>
            <span className="current-temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">ºC</span>
          </p>
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
            <WeatherIcon code={props.data.icon} />
          </div>
          <div className="curent-weather-condition text-capitalize">
            {props.data.description}
          </div>
        </div>
      </div>
    </div>
  );
}
