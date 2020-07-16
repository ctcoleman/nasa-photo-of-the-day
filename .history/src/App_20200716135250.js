import React, { useState } from 'react'; // anywhere we use React we import React
import axios from 'axios'
import Header from './components/Header/Header' // import the Header component
import CreatePost from './components/CreatePost/CreatePost' // import the Post component
import { BASE_URL, API_KEY } from './constants/constants'
import './App.css'; // import the app styling

function App() {
  const url = `${BASE_URL}?api_key=${API_KEY}`

  return (
    <div className="App">
      <Header title='NASAGram' description='NASA Picture of the Day' />
      <section className="App-main">
        <CreatePost url={url}/>
      </section>
    </div>
  );
}

export default App;