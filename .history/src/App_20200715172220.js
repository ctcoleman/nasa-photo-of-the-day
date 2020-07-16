import React, { useState } from "react";
import "./App.css";
import axios from 'axios'
import {BASE_URL, API_KEY} from "./constants/"
import PicOfTheDay from "./components/picOfTheDay"

function App() {
  const [picture, setPicture] = useState([])
  return (
    <div className="App">
        <PicOfTheDay url=''/>
      </p>
    </div>
  );
}

export default App;
