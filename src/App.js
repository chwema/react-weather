import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
        <footer>
          coded by{" "}
          <a
            class="info-link"
            href="https://www.linkedin.com/in/chido-chimbetete-5291bb177/"
            rel="noreferrer  noopener"
            target="_blank"
          >
            Chido Chimbetete
          </a>{" "}
          and is{" "}
          <a
            class="info-link"
            href="https://github.com/chwema/weather-react"
            rel="noreferrer noopener"
            target="_blank"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
