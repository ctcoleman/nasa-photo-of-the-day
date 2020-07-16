import React, { useState } from 'react'; // anywhere we use React we import React
import axios from 'axios'
import './App.css'; // import the app styling
import Header from './components/Header' // import the Header component
import CreatePost from './components/CreatePost/CreatePost' // import the Post component
import { BASE_URL, API_KEY } from './constants'

function App() {
  const [url, setUrl] = useState([])
  
  axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setUrl(res)
    })
    .catch(err => console.log(err))

  return (
    <div className="App">
      <Header title='NASAGram' description='NASA Picture of the Day' />
      <section className="App-main">
        <CreatePost />
      </section>
    </div>
  );
}

export default App;