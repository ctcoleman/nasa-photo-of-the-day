import React, { useState } from 'react'; // anywhere we use React we import React
import axios from 'axios'
import Header from './components/Header/Header' // import the Header component
import Post from './components/Post/Post' // import the Post component
import { BASE_URL, API_KEY } from './constants/constants'
import './App.css'; // import the app styling

function App() {
  const url = `${BASE_URL}?api_key=${API_KEY}`

  function randomNumber(min, max) {
    return Math.random() * (max - min) + min
  }

  function randomDate() {
    let year = randomNumber(1996, 2019)
    let month = randomNumber(1, 12)
    let day = randomNumber(1, 28)
    return `${year}-${month}-${day}`
  }

  return (
    <div className="App">
      <Header title='NASAGram' description='NASA Picture of the Day' />
      <section className="App-main">
        <button onClick={() => {
          
        }}></button>
        <Post date={randomDate()} url={url}/>
      </section>
    </div>
  );
}

export default App;