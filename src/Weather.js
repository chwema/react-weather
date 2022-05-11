import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <form className="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city.."
                className="form-control shadow-sm"
              />
              <span>
                <input type="submit" value="🔍" className="searchbutton" />
                <input type="submit" value="📍" className="button" />
              </span>
            </div>
          </div>
        </form>

        <h1>Paris</h1>

        <div className="units">
          <h3>15°C</h3>
        </div>
        <div className="weather-icon">
          <img
            src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
            alt="Clear"
          />
        </div>
        <ul>
          <li>Cloudy</li>
          <li>Friday</li>
        </ul>
        <br />
        <br />

        <h5>
          <div className="description"></div>
        </h5>
        <ul>
          <li>
            Humidity: <span>30</span>%{" "}
          </li>
          <li>
            Windspeed: <span>70</span>km/h
          </li>
        </ul>
        <br />
        <br />
        <div class="row">
          <div class="col-sm-2">
            <div class="forecast-day">Sat</div>
            <div class="forecast-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/rain.png"
                alt="Clear"
              />
            </div>
            <div class="forecast-temp">23</div>
          </div>

          <div class="col-sm-2">
            <div class="forecast-day">Sun</div>
            <div class="forecast-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="Clear"
              />
            </div>
            <div class="forecast-temp">19</div>
          </div>
          <div class="col-sm-2">
            <div class="forecast-day">Mon</div>
            <div class="forecast-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"
                alt="Clear"
              />
            </div>
            <div class="forecast-temp">22</div>
          </div>
          <div class="col-sm-2">
            <div class="forecast-day">Tue</div>
            <div class="forecast-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                alt="Clear"
              />
            </div>
            <div class="forecast-temp">33</div>
          </div>
          <div class="col-sm-2">
            <div class="forecast-day">Wed</div>
            <div class="forecast-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/windy.png"
                alt="Clear"
              />
            </div>
            <div class="forecast-temp">26</div>
          </div>
          <div class="col-sm-2">
            <div class="forecast-day">Thru</div>
            <div class="forecast-icon">
              <img
                src="https://ssl.gstatic.com/onebox/weather/48/sunny.png"
                alt="Clear"
              />
            </div>
            <div class="forecast-temp">17</div>
          </div>
        </div>
      </div>
    </div>
  );
}
