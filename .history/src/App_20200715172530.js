import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from "./constants/"
import PicOfTheDay from "./components/picOfTheDay"

function App() {
  const [picture, setPicture] = useState([])


  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
  return (
    <div className="App">
      <PicOfTheDay url='' />
    </div>
  );
}

export default App;
