import React from "react";
import "./App.css";
import axios from 'axios'
import {BASE_URL, API_KEY} from "./constants/"
import PicOfTheDay from "./components/"

function App() {
  return (
    <div className="App">
      <p>
        <PicOfTheDay />
      </p>
    </div>
  );
}

export default App;
