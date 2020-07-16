import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import { BASE_URL, API_KEY } from "./constants/"
import PicOfTheDay from "./components/picOfTheDay"

function App() {
  const [pictureUrl, setPictureUrl] = useState([])


  axios.get(`${BASE_URL}api_key=${API_KEY}`)
    .then(res => {
      setPictureUrl(res.url)
    })
    .catch(err => )
  return (
    <div className="App">
      <PicOfTheDay url={pictureUrl} />
    </div>
  );
}

export default App;
