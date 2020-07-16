import React, { useState } from 'react'; // anywhere we use React we import React
import axios from 'axios'
import './App.css'; // import the app styling
import Header from './components/Header' // import the Header component
import Post from './components/Post' // import the Post component
import { BASE_URL, API_KEY } from './constants'

function App() {

  return (
    <div className="App">
      <Header title='NASAGram' description='NASA Picture of the Day' />
      <section className="App-main">
        <div className="App-Button">
          <CreatePost
        </div>
      </section>
    </div>
  );
}

export default App;