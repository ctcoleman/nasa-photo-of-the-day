import React from "react";
import "./App.css";
import axios from 'axios'
import {BASE_URL, API_KEY} from "./constants/"
import PicOfTheDay from "./components/picOfTheDay"

function App() {
  
  return (
    <div className="App">
      <p>
        <PicOfTheDay url=''/>
      </p>
    </div>
  );
}

export default App;
