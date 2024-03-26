import React from "react";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <footer>
          This project is coded by {""}
          <a
            href="https://github.com/yoshino62"
            target="_blank"
            rel="noreferrer"
          >
            Yoshino Andrews
          </a>{" "}
          and open-sourced
          <a
            href="https://github.com/yoshino62/react-w5-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
