import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Wrapper } from "./Components/Wrapper";

function App() {
  return (
    //Create a div with a class of "App" and a background color of #282c34, and a height of 100vh
    <div>
      <Wrapper/>
      <div className="App" style={{ backgroundColor: "#282c34", height: "100vh" }}>
        <div className="container">
          <div className="hero">
            <img src={heroImg} alt="Hero" />
          </div>
          <div className="content">
            <h1>Welcome to My App</h1>
            <p>This is a simple React app using Vite.</p>
            <div className="logos">
              <img src={reactLogo} alt="React Logo" />
              <img src={viteLogo} alt="Vite Logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
