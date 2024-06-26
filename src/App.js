import React from "react";
import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Tokyo" />
        <footer>
          This project is coded by {""}
          <a
            href="https://github.com/yoshino62"
            target="_blank"
            rel="noreferrer"
          >
            Yoshino Andrews
          </a>{" "}
          is open-sourced
          <a
            href="https://github.com/yoshino62/react-w5-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            on GitHub
          </a>{" "}
          and is hosted
          <a
            href="https://react-w5w6-weatherapplication-project.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
