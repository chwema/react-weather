import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>

      <WeatherTemperature celsius={props.data.temperature} />

      <div className="weather-icon">
        <WeatherIcon code={props.data.icon} />
      </div>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>
          <li className="text-capitalize">
            Description: {props.data.description}
          </li>
          Humidity: <span>{props.data.humidity}</span>%{" "}
        </li>
        <li>
          Windspeed: <span>{props.data.wind}</span>km/h
        </li>
      </ul>
      <br />
    </div>
  );
}
