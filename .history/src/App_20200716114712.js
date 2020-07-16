import React, { useState } from 'react'; // anywhere we use React we import React
import axios from 'axios'
import './App.css'; // import the app styling
import Header from './components/Header' // import the Header component
import Post from './components/Post' // import the Post component
import { BASE_URL, API_KEY } from './constants'

function App() {
  const [url, setUrl] = {}
  
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      
    })
    .catch(err => console.log(err))
  console.log(pictureUrl)

  return (
    <div className="App">
      <Header title='NASAGram' description='NASA Picture of the Day' />
      <section className="App-main">
        <Post nickname={name} pictureName={pictureName} avatar='./avatar.jpg' caption={caption} image={pictureUrl} />
      </section>
    </div>
  );
}

export default App;