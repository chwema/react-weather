import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div class="weather-app-wrapper">
        <div class="weather-app">
          <div class="row">
            <div class="col-5">
              <ul class="clearfix weather-temperature">
                <li>{props.data.city}</li>
                <li>
                  <WeatherTemperature fahrenheit={props.data.temperature} />
                </li>
                <li>
                  <FormattedDate date={props.data.date} />
                </li>
              </ul>
            </div>
            <div class="col-3">
              <div className="weather-icon">
                <WeatherIcon code={props.data.icon} />
              </div>{" "}
            </div>
            <div class="col-4">
              <ul>
                <li className="text-capitalize">
                  Description: {props.data.description}
                </li>{" "}
                <li>
                  Humidity: <span>{props.data.humidity}</span>%{" "}
                </li>
                <li>
                  Wind: <span>{Math.round(props.data.wind)}</span> m/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
